import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hora de tiempo es lo que se va a considerar la data de la query como fresh
    
    // placeholderData: [
    //   {
    //     id: 739777675,
    //     node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
    //     name: "Component: Component API",
    //     color: "d4c5f9",
    //     default: false,
    //   } satisfies GitHubLabel,
    //   {
    //       id: 710573595,
    //       node_id: "MDU6TGFiZWw3MTA1NzM1OTU=",
    //       url: "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
    //       name: "Component: Developer Tools",
    //       color: "fbca04",
    //       default: false,
    //   } satisfies GitHubLabel,
    // ],

    // initialData: [
    //   {
    //     id: 739777675,
    //     node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
    //     name: "Component: Component API",
    //     color: "d4c5f9",
    //     default: false,
    //   } satisfies GitHubLabel,
    //   {
    //       id: 710573595,
    //       node_id: "MDU6TGFiZWw3MTA1NzM1OTU=",
    //       url: "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
    //       name: "Component: Developer Tools",
    //       color: "fbca04",
    //       default: false,
    //   } satisfies GitHubLabel,
    // ],

  });

  return {
    labelsQuery,
  };
};
