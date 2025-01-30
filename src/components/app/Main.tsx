import useGames from "@/hooks/useGames";
import useGameQueryStore from "@/store/store";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../ui/Spinner";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GenreSelector from "./GenreSelector";
import Heading from "./Heading";
import PlatformSelector from "./PlatformSelector";
import SearchHeading from "./SearchHeading";
import SortSelector from "./SortSelector";

const Main = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();

  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);

  const gamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  if (error) return <p className="text-center text-xl my-5">{error.message}</p>;

  return (
    <InfiniteScroll
      dataLength={gamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<div className="overflow-hidden my-5"> <Spinner/> </div>}
    >
      <div className="px-4">
        {searchText && <SearchHeading />}
        {!searchText && (
          <div className="text-center lg:text-left">
            <Heading />
            {!isLoading && (
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <div className="mr-4 mb-5 block lg:hidden">
                  <GenreSelector />
                </div>
                <div className="mr-4 mb-5">
                  <PlatformSelector />
                </div>
                <div className="mb-5">
                  <SortSelector />
                </div>
              </div>
            )}
          </div>
        )}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {isLoading && 
            skeletons.map((skeleton) => (<GameCardSkeleton key={skeleton}/>))
          }
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (<GameCard key={game.id} game={game}/>))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Main;
