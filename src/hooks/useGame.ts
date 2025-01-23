import { GameQuery } from "@/App";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
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

const useGame = (gameQuery: GameQuery) => useQuery({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.get({
    params: gameQuery.searchText ? { search: gameQuery.searchText } :  
    {
      ...{ genres: gameQuery.genre?.id },
      ...{ parent_platforms: gameQuery.platform?.id },
      ...{ ordering: gameQuery.sortOrder },
    }   
  }),
  staleTime: 24 * 60 * 60 * 1000,
});

export default useGame;
