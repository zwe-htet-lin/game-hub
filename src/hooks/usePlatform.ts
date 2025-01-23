import platforms from "@/data/platforms";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/parents/lists/platforms')

const usePlatform = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.get,
  staleTime: 24 * 60 * 60 * 1000,
  initialData: { count: platforms.length, results: platforms }
})

export default usePlatform;