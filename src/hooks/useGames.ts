import APIClient, { ResponseData } from "@/services/apiClient";
import useGameQueryStore from "@/store/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../types/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<ResponseData<Game>, Error>({
    queryKey: ["games", gameQuery], // dependency
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: gameQuery.searchText
          ? { search: gameQuery.searchText, page: pageParam }
          : {
              genres: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              page: pageParam,
            },
      }),
    initialPageParam: 1, // updates on new version
    staleTime: ms("24h"), // 24 * 60 * 60 * 1000
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
