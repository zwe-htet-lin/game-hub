import { useState } from "react";
import Aside from "./components/aside/Aside";
import Navbar from "./components/navbar/Navbar";
import { Genre } from "./hooks/useGenre";
import Main from "./components/main/Main";
import { Platform } from "./hooks/useGame";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="grid grid-rows-[auto_1fr] lg:grid-rows-[auto_1fr] lg:grid-cols-[200px_1fr]">
        <div className="row-span-1 col-span-1 lg:col-span-2">
          <Navbar/>
        </div>
        <div className="hidden lg:block px-3">
          <Aside selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </div>
        <div className="row-span-1 col-span-1 px-4">
          <Main gameQuery={gameQuery} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        </div>
      </div>
    </>
  );
}

export default App;
