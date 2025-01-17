import { GameQuery } from "@/App";
import useData from "./useData";
import { Genre } from "./useGenre";

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
  parent_platforms: { platform: Platform }[];
}

const useGame = (gameQuery: GameQuery) => 
  useData<Game>(
    "/games", 
    { params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id} }, 
    [gameQuery]
  );

export default useGame;
