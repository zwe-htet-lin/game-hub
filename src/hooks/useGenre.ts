import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.get,
  staleTime: 24 * 60 * 60 * 1000, //24h
});

export default useGenre;