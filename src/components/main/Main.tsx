import { Genre } from "@/hooks/useGenre";
import GameGrid from "./game/GameGrid"
import PlatformSelector from "./platform/PlatformSelector";
import { Platform } from "@/hooks/useGame";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
}

const Main = ({ gameQuery, onSelectPlatform }: Props) => {
  return (
    <>
      <div className="my-4">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={onSelectPlatform}/>
      </div>
      <GameGrid gameQuery={gameQuery}/>
    </>
  )
}

export default Main