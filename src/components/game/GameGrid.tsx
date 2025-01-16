import useGame from "@/hooks/useGame"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">
        {games.map(game => <GameCard key={game.id} game={game}/>)}
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
      </div>
    </>
  )
}

export default GameGrid