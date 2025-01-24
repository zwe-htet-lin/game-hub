import platforms from "@/data/platforms";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatform = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.get,
  staleTime: ms('24h'),
  initialData: platforms
  // initialData: { count: platforms.length, results: platforms }
})

export default usePlatform;