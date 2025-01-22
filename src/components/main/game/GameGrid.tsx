import { Game } from "@/hooks/useGame";
import GameCard from "./GameCard";

interface Props {
  games: Game[];
}

const GameGrid = ({ games }: Props) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {games.map(game => <GameCard key={game.id} game={game}/>)}
      </div>
    </>
  )
}

export default GameGrid