import APIClient from "@/services/apiClient";
import { Store } from "@/types/Store";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useStores = (gameId: number) => {
  const apiClient = new APIClient<Store>(`/games/${gameId}/stores`);

  return useQuery({
    queryKey: ["store", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });
};

export default useStores;
