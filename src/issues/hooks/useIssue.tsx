import { useQuery } from "@tanstack/react-query";
import { getIssue, getIssueComents } from "../actions";


export const useIssue = ( issueNumber: number) => {

  const issueQuery = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60,
  });

  // ? Disparada en paralelo
  // const commentsQuery = useQuery({
  //   queryKey: ['issues', issueNumber, 'comments'],
  //   queryFn: () => getIssueComents(issueNumber),
  //   staleTime: 1000 * 60,
  // });

  // ? Disparada bajo condición (enabled: solo si el issueQuery trae data)
    const commentsQuery = useQuery({
    queryKey: ['issues', issueQuery.data?.number, 'comments'],
    queryFn: () => getIssueComents(issueQuery.data!.number),
    staleTime: 1000 * 60,
    enabled: issueQuery.data !== undefined,
  });

  return {
    issueQuery,
    commentsQuery,
  }

}