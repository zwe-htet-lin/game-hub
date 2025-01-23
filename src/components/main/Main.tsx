import GameGrid from "./game/GameGrid"
import PlatformSelector from "./PlatformSelector";
import { GameQuery } from "@/App";
import SortSelector from "./SortSelector";
import { Platform } from "@/hooks/usePlatform";
import Heading from "./Heading";
import SearchHeading from "./SearchHeading";
import GameCardSkeleton from "./game/GameCardSkeleton";
import useGame from "@/hooks/useGame";
import GenreSelector from "./GenreSelector";
import { Genre } from "@/hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
  onSearch: (searchText: string) => void;
  onSelectGenre: (genre: Genre) => void;
  onSelectPlatform: (platform: Platform) => void;
  onSelectSortOrder: (sortOrder: string) => void;
}

const Main = ({ gameQuery, onSearch, onSelectGenre, onSelectPlatform, onSelectSortOrder}: Props) => {
  const { data: games, error, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  if(error) return <p className="text-center text-xl my-5">{error.message}</p>;

  return (
    <div className="px-4">
      {gameQuery.searchText && <SearchHeading searchText={gameQuery.searchText} onSearch={onSearch}/>}
      {!gameQuery.searchText && 
        <div className="text-center lg:text-left">
          <Heading gameQuery={gameQuery}/>
          {!isLoading &&
            <div className="flex flex-wrap items-center justify-center lg:justify-start">
              <div className="mr-4 mb-5 block lg:hidden">
                <GenreSelector selectedGenre={gameQuery.genre} onSelectGenre={onSelectGenre}/>
              </div>
              <div className="mr-4 mb-5">
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={onSelectPlatform}/>
              </div>
              <div className="mb-5"> 
                <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={onSelectSortOrder}/>
              </div>
            </div>
          }
        </div>
      }
      {isLoading && 
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        </div>
      }
      <GameGrid games={games?.results}/>
    </div>
  )
}

export default Main