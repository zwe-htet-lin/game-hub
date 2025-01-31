import useGameQueryStore from "@/store/store";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const setDefault = useGameQueryStore((s) => s.setDefault);

  return (
    <div className="flex items-center gap-2 sm:gap-4 px-5 py-3">
      <Link to="/" onClick={() => setDefault()}>
        <img
          src={logo}
          alt="Logo"
          className="size-14 md:size-16 object-cover"
        />
      </Link>
      <SearchBox />
      <ColorSwitchMode />
    </div>
  );
};

export default Navbar;
