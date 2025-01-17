import { useState } from "react";
import Aside from "./components/aside/Aside";
import Navbar from "./components/navbar/Navbar";
import { Genre } from "./hooks/useGenre";
import Main from "./components/main/Main";
import { Platform } from "./hooks/useGame";

function App() {
  const [ selectedPlatform, setSelectedPlatform ] = useState<Platform | null>(null); 
  const [ selectedGenre, setSelectedGenre ] = useState<Genre | null>(null);

  return (
    <>
      <div className="grid grid-rows-[auto_1fr] lg:grid-rows-[auto_1fr] lg:grid-cols-[200px_1fr]">
        <div className="row-span-1 col-span-1 lg:col-span-2">
          <Navbar/>
        </div>
        <div className="hidden lg:block px-3">
          <Aside selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </div>
        <div className="row-span-1 col-span-1 px-4">
          <Main selectedGenre={selectedGenre} 
            selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
