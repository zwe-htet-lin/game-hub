import APIClient, { ResponseData } from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatform";
import useGameQueryStore from "@/store/store";
import ms from "ms";

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  rating_top: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const apiClient = new APIClient<Game>('/games');

const useGame = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<ResponseData<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) => apiClient.get({
      params: gameQuery.searchText ? { search: gameQuery.searchText, page: pageParam } :  
      {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        page: pageParam
      }   
    }),
    initialPageParam: 1, // updates on new version
    staleTime: ms('24h'), // 24 * 60 * 60 * 1000
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  })
}

export default useGame;
