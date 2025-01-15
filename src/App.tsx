import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="col-span-2">
          <Navbar/>
        </div>
        <div className="hidden lg:block">Aside</div>
        <div className="col-span-2 lg:col-span-1">Main</div>
      </div>
    </>
  );
}

export default App;
