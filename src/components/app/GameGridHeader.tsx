import useGameQueryStore from "@/store/store";
import GenreSelector from "./GenreSelector";
import Heading from "./Heading";
import PlatformSelector from "./PlatformSelector";
import SearchHeading from "./SearchHeading";
import SortSelector from "./SortSelector";

interface Props {
  isLoading: boolean;
}

const GameGridHeader = ({ isLoading }: Props) => {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);

  return (
    <>
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
    </>
  );
};

export default GameGridHeader;
