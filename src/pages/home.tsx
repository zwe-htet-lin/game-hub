import Aside from "@/components/app/Aside";
import Main from "@/components/app/Main";
import useGameQueryStore from "@/store/store";

const Home = () => {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);

  return (
    <div className={`grid lg:grid-cols-[auto_1fr]`}>
      <div className="hidden lg:block">{!searchText && <Aside />}</div>
      <div className="row-span-1 col-span-1">
        <Main />
      </div>
    </div>
  );
};

export default Home;
