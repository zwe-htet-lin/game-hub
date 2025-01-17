import { Game } from "@/hooks/useGame";
import { Card, CardContent } from "../../ui/Card";
import PlatformIcon from "./PlatformIcon";
import RatingEmoji from "./RatingEmoji";
import RatingScore from "./RatingScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const getCroppedImageUrl = (url: string) => {
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  };

  return (
    <Card className="overflow-hidden">
      <div>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="w-full"
        />
      </div>
      <CardContent className="p-3">
        <PlatformIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <h1 className="text-xl font-medium leading-6 my-3 hover:opacity-80 transition-opacity duration-300">
          {game.name}
        </h1>
        <div className="flex items-center">
          <RatingEmoji rating={game.rating_top} />
          <RatingScore score={game.metacritic} />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
