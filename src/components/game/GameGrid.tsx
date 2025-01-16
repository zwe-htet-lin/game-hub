import useGame from "@/hooks/useGame"
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">
      {error && <p>{error}</p>}
        {
          games.map(game => <GameCard game={game}/>)
        }
    </div>
  )
}

export default GameGrid