import { GameQuery } from "@/App";
import useGame from "@/hooks/useGame";
import { Genre } from "@/hooks/useGenre";
import { Platform } from "@/hooks/usePlatform";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GenreSelector from "./GenreSelector";
import Heading from "./Heading";
import PlatformSelector from "./PlatformSelector";
import SearchHeading from "./SearchHeading";
import SortSelector from "./SortSelector";
import GameCard from "./game/GameCard";
import GameCardSkeleton from "./game/GameCardSkeleton";
import Spinner from "../ui/Spinner";

interface Props {
  gameQuery: GameQuery;
  onSearch: (searchText: string) => void;
  onSelectGenre: (genre: Genre) => void;
  onSelectPlatform: (platform: Platform) => void;
  onSelectSortOrder: (sortOrder: string) => void;
}

const Main = ({ gameQuery, onSearch, onSelectGenre, onSelectPlatform, onSelectSortOrder}: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const gamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  if(error) return <p className="text-center text-xl my-5">{error.message}</p>;

  return (
    <InfiniteScroll 
      dataLength={gamesCount} hasMore={hasNextPage} 
      next={() => fetchNextPage()} loader={<div className="overflow-hidden my-4"><Spinner/></div>}
    >
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.pages.map((page, index) => 
            <React.Fragment key={index}>
              {
                page.results.map(game => <GameCard key={game.id} game={game}/>)
              }
            </React.Fragment>
          )}
        </div>
      </div>
    </InfiniteScroll>
  )
}

export default Main