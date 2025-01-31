import APIClient from "@/services/apiClient";
import { Trailer } from "@/types/Trailer";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });
};

export default useTrailers;
