import APIClient from "@/services/apiClient";
import { Screenshot } from "@/types/Screenshot";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });
};

export default useScreenshots;
