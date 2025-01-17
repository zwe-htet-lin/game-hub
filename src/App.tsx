import { useState } from "react";
import GameGrid from "./components/game/GameGrid";
import GenreList from "./components/genre/GenreList";
import Navbar from "./components/navbar/Navbar";
import { Genre } from "./hooks/useGenre";

function App() {
  const [ selectedGenre, setSelectedGenre ] = useState<Genre | null>(null);

  return (
    <>
      <div className="grid grid-rows-[auto_1fr] lg:grid-rows-[auto_1fr] lg:grid-cols-[200px_1fr]">
        <div className="row-span-1 col-span-1 lg:col-span-2">
          <Navbar/>
        </div>
        <div className="hidden lg:block px-3">
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </div>
        <div className="row-span-1 col-span-1">
          <GameGrid selectedGenre={selectedGenre}/>
        </div>
      </div>
    </>
  );
}

export default App;
