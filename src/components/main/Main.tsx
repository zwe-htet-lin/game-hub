import { Genre } from "@/hooks/useGenre";
import GameGrid from "./game/GameGrid"
import PlatformSelector from "./platform/PlatformSelector";
import { Platform } from "@/hooks/useGame";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const Main = ({ selectedGenre, selectedPlatform, onSelectPlatform }: Props) => {
  return (
    <>
      <div className="my-4">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={onSelectPlatform}/>
      </div>
      <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
    </>
  )
}

export default Main