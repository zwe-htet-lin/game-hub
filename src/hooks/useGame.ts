import { GameQuery } from "@/App";
import APIClient, { ResponseData } from "@/services/apiClient";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  rating_top: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const apiClient = new APIClient<Game>('/games');

const useGame = (gameQuery: GameQuery) => useInfiniteQuery<ResponseData<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam }) => apiClient.get({
    params: gameQuery.searchText ? { search: gameQuery.searchText, page: pageParam } :  
    {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      page: pageParam
    }   
  }),
  initialPageParam: 1, // updates on new version
  staleTime: 24 * 60 * 60 * 1000,
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
});

export default useGame;
