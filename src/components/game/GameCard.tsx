import { Game } from "@/hooks/useGame"
import PlatformIcon from "./PlatformIcon"
import RatingEmoji from "./RatingEmoji"
import RatingScore from "./RatingScore"
import { Card, CardContent } from "../ui/Card"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {

  const getCroppedImageUrl = (url: string) => {
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  }

  return (
    <Card className="overflow-hidden">
      <div>
        <img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      </div>
      <CardContent className="p-3">
        <div className="flex justify-between">
          <PlatformIcon platforms={game.parent_platforms.map(p => p.platform)}/>
          <RatingScore score={game.metacritic}/>
        </div>
        <h1 className="text-xl font-medium leading-6 py-2 hover:opacity-80 transition-opacity duration-300">{game.name}</h1>
        <RatingEmoji rating={game.rating_top}/>
      </CardContent>
    </Card>
  )
}

export default GameCard