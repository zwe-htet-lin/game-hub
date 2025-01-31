import ExpandableText from "@/components/app/ExpandableText";
import GameAttributes from "@/components/app/GameAttributes";
import GameScreenshots from "@/components/app/GameScreenshots";
import GameTrailer from "@/components/app/GameTrailer";
import RatingEmoji from "@/components/app/RatingEmoji";
import RatingScore from "@/components/app/RatingScore";
import Spinner from "@/components/ui/Spinner";
import useGame from "@/hooks/useGame";
import { useParams } from "react-router-dom";

const Game = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if(isLoading) return <div className="mt-10"><Spinner/></div>;

  if(error || !game) throw error;

  const getReleaseDate = (date: any) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const releaseDate = new Date(date as Date);

    const day = releaseDate.getDate().toString().padStart(2, "0");
    const month = months[releaseDate.getMonth()];
    const year = releaseDate.getFullYear().toString();

    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="w-full md:w-[95%] lg:w-[90%] max-w-[1400px] mx-auto pt-5">

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <img src={game.background_image} className="w-full min-h-[75vh] md:max-h-[75vh] object-cover object-center"/>

        <div className="absolute inset-0 p-5 lg:p-10 pb-5 flex flex-col justify-end text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{game.name}</h1>
          <div className="flex items-center my-2 md:my-3 lg:my-4 justify-center lg:justify-start">
            {game.rating_top >= 3 ? <div className="mr-3"><RatingEmoji rating={game.rating_top} /></div> : null}
            <div className="mr-3"><RatingScore score={game.metacritic} /></div>
            {game.released ? <p className="text-white text-sm lg:text-base">{getReleaseDate(game.released)}</p> : null}
          </div>
          <div className="text-sm lg:text-base">
            <ExpandableText description={game.description_raw}></ExpandableText>
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-10 py-10">
        <h1 className="text-xl sm:text-2xl font-medium mb-3">Details</h1>
        <GameAttributes game={game} />
      </div>

      <GameTrailer gameId={game.id}/>

      <GameScreenshots gameId={game.id}/>
    </div>
  )
}

export default Game