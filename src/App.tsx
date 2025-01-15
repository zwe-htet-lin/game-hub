function App() {
  return(
    <>
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="bg-slate-500 col-span-2">Nav</div>
        <div className="bg-stone-500 hidden lg:block">Aside</div>
        <div className="bg-sky-500 col-span-2 lg:col-span-1">Main</div>
      </div>
    </>
  )
}

export default App
