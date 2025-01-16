import GameGrid from "./components/game/GameGrid";
import GenreList from "./components/genre/GenreList";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr]">
        <div className="col-span-2">
          <Navbar/>
        </div>
        <div className="hidden lg:block">
          <GenreList/>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <GameGrid/>
        </div>
      </div>
    </>
  );
}

export default App;
