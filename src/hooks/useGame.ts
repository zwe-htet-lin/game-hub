import { useEffect, useState } from "react"
import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  rating_top: number;
  background_image: string;
  parent_platforms: { platform: Platform }[]
}

interface GameResponse {
  count: number;
  results: Game[]
}

const useGame = () => {
  const [ games, setGames ] = useState<Game[]>([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    const controller = new AbortController;

    apiClient.get<GameResponse>("/games", { signal: controller.signal })
    .then(res => setGames(res.data.results))
    .catch(err => {
      if(err instanceof CanceledError) return;
      setError(err.message);
    });

    return () => controller.abort();
  }, [])

  return { games, error };
}

export default useGame;