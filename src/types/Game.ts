import { esrbRating } from "./esrbRating";
import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Plublisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  website: string;
  released: string;
  metacritic: number;
  rating_top: number;
  description_raw: string;
  background_image: string;
  esrb_rating: esrbRating;
  genres: Genre[];
  publishers: Plublisher[];
  parent_platforms: { platform: Platform }[];
}
