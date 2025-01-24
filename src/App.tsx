import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import useGameQueryStore from "./store/store";

function App() {
  const searchText = useGameQueryStore(s => s.gameQuery.searchText);

  return (
    <>
      <div className={`grid grid-rows-[auto_1fr] lg:grid-rows-[auto_1fr] lg:grid-cols-[auto_1fr]`}>
        <div className="row-span-1 col-span-1 lg:col-span-2">
          <Navbar/>
        </div>
        <div className="hidden lg:block">
          {!searchText && <Aside/>}
        </div>
        <div className="row-span-1 col-span-1">
          <Main/>
        </div>
      </div>
    </>
  );
}

export default App;
