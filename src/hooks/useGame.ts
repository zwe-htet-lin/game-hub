import useData from "./useData";

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

const useGame = () => useData<Game>("/games");

export default useGame;
