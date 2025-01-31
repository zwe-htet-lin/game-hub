import { Game } from "@/types/Game";
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image-placeholder.webp";
import { Card, CardContent } from "../ui/card";
import PlatformIcon from "./PlatformIcon";
import RatingEmoji from "./RatingEmoji";
import RatingScore from "./RatingScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;

    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  };

  return (
    <Card className="overflow-hidden hover:scale-[1.03] transition-transform duration-150 ease-in">
      <div>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="w-full"
        />
      </div>
      <CardContent className="p-3">
        <PlatformIcon
          platforms={
            game.parent_platforms
              ? game.parent_platforms.map((p) => p.platform)
              : null
          }
        />
        <Link to={"/games/" + game.slug}>
          <h1 className="text-base sm:text-lg font-medium leading-6 my-3 hover:opacity-80 transition-opacity duration-300">
            {game.name}
          </h1>
        </Link>
        <div className="flex items-center">
          {game.rating_top >= 3 ? (
            <div className="mr-3">
              <RatingEmoji rating={game.rating_top} />
            </div>
          ) : null}
          <RatingScore score={game.metacritic} />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
