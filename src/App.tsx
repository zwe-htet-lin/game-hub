import { useState } from "react";
import Aside from "./components/aside/Aside";
import Navbar from "./components/navbar/Navbar";
import { Genre } from "./hooks/useGenre";
import Main from "./components/main/Main";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className={`grid grid-rows-[auto_1fr] lg:grid-rows-[auto_1fr] lg:grid-cols-[auto_1fr]`}>
        <div className="row-span-1 col-span-1 lg:col-span-2">
          <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </div>
        <div className="hidden lg:block">
          {
          !gameQuery.searchText && 
            <Aside 
              selectedGenre={gameQuery.genre} 
              onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
            />
          }
        </div>
        <div className="row-span-1 col-span-1">
          <Main 
            gameQuery={gameQuery} 
            onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
            onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} 
          />
        </div>
      </div>
    </>
  );
}

export default App;
