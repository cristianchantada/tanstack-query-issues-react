import { githubApi } from "../../api/gitHub.api";
import { sleep } from "../../helpers";
import { GithubIssue } from "../interfaces/issue.interface";

export const getIssueComents = async (issueNumber: number): Promise<GithubIssue[]> => {

  await sleep(1500);

  const { data } = await githubApi.get<GithubIssue[]>(`/issues/${ issueNumber }/comments`);
  return data;
}