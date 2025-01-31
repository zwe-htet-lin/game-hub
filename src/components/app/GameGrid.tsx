import useGames from "@/hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../ui/Spinner";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameGridHeader from "./GameGridHeader";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();

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
      <div className="px-0 lg:px-5">
        <GameGridHeader isLoading={isLoading}/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
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

export default GameGrid
