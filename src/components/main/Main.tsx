import GameGrid from "./game/GameGrid"
import PlatformSelector from "./PlatformSelector";
import { GameQuery } from "@/App";
import SortSelector from "./SortSelector";
import { Platform } from "@/hooks/usePlatform";
import Heading from "./Heading";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
  onSelectSortOrder: (sortOrder: string) => void;
}

const Main = ({ gameQuery, onSelectPlatform, onSelectSortOrder }: Props) => {
  return (
    <div>
      <Heading gameQuery={gameQuery}/>
      <div className="flex items-center my-5">
        <div className="mr-4">
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={onSelectPlatform}/>
        </div>
        <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={onSelectSortOrder}/>
      </div>
      <GameGrid gameQuery={gameQuery}/>
    </div>
  )
}

export default Main