import ExpandableText from "@/components/app/ExpandableText";
import GameAttributes from "@/components/app/GameAttributes";
import GameScreenshots from "@/components/app/GameScreenshots";
import GameTrailer from "@/components/app/GameTrailer";
import Spinner from "@/components/ui/Spinner";
import useGame from "@/hooks/useGame";
import { useParams } from "react-router-dom";

const Game = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if(isLoading) return <Spinner/>;

  if(error || !game) throw error;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">{game.name}</h1>
        <ExpandableText description={game.description_raw}></ExpandableText>
        <GameAttributes game={game} />
      </div>
      <div>
        <GameTrailer gameId={game.id}/>
        <GameScreenshots gameId={game.id}/>
      </div>
    </div>
  )
}

export default Game