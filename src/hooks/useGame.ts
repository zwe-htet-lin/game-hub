import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Game } from "../types/Game";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms('24h'), //24h
  });

export default useGame;
