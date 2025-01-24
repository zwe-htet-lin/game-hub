import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.get,
  staleTime: ms('24h'),
});

export default useGenre;