import { useInfiniteQuery } from "@tanstack/react-query";
import { State } from "../interfaces/issue.interface";
import { getIssues } from "../actions";

interface Props {
  state: State;
  selectedLabels: string[];
}

export const useIssuesInfinite = ({ state, selectedLabels }: Props) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: ["issues", "infinite", { state, selectedLabels }],
    queryFn: ({ pageParam, queryKey }) => {

      //? queryKey contiene los queryKey
      // Podíamos haber tomado el state y selectedLabels de los parámetros del useIssuesInfinite, pero lo hacemos así para ver que vienen ahí también, por si en otro caso no tuviésemos acceso a ellos.
      const [, , args] = queryKey;
      const { state, selectedLabels } = args as Props;

      console.log({pageParam});
      

      return getIssues(state, selectedLabels, pageParam);
    },
    staleTime: 1000 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {

      console.log({lastPage});
      console.log({pages});
      
      return lastPage.length > 0 ? pages.length + 1 : undefined
    }

    // ? El parámetro pages de getNextPageParam es nuestra data en forma de array de arrays, es decir, el array principal son todas las páginas y cada array interno una página. getNextPageParam() debe devolver la siguiente página.
    // ? page: [ [issue1, issue2], [issue3, issue4], [issue5, issue6],]

    // * EL parámetro lastPage contiene la data de la última página, de la actual, es decir, el último array del array de arrays que es pages

  });

  return {
    issuesQuery,
  };
};
