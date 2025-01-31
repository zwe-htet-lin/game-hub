import GenreList from "@/components/app/GenreList";
import GameGrid from "@/components/app/GameGrid";
import useGameQueryStore from "@/store/store";

const Home = () => {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);

  return (
    <div className={`grid lg:grid-cols-[auto_1fr]`}>
      <div className="hidden lg:block">{!searchText && <GenreList />}</div>
      <div className="row-span-1 col-span-1">
        <GameGrid />
      </div>
    </div>
  );
};

export default Home;
