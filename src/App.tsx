import GameGrid from "./components/game/GameGrid";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="col-span-2">
          <Navbar/>
        </div>
        <div className="hidden lg:block">Aside</div>
        <div className="col-span-2 lg:col-span-1">
          <GameGrid/>
        </div>
      </div>
    </>
  );
}

export default App;
