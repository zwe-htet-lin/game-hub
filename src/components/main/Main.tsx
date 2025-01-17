import GameGrid from "./game/GameGrid"
import PlatformSelector from "./platform/PlatformSelector";
import { GameQuery } from "@/App";
import SortSelector from "./sort/SortSelector";
import { Platform } from "@/hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
  onSelectSortOrder: (sortOrder: string) => void;
}

const Main = ({ gameQuery, onSelectPlatform, onSelectSortOrder }: Props) => {
  return (
    <>
      <div className="flex items-center my-4">
        <div className="mr-4">
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={onSelectPlatform}/>
        </div>
        <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={onSelectSortOrder}/>
      </div>
      <GameGrid gameQuery={gameQuery}/>
    </>
  )
}

export default Main