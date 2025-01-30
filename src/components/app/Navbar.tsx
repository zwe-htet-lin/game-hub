import ColorSwitchMode from "./ColorSwitchMode";
import logo from "../../assets/logo.webp";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import useGameQueryStore from "@/store/store";

const Navbar = () => {
  const setDefault = useGameQueryStore((s) => s.setDefault);

  return (
    <div className="flex items-center gap-2 sm:gap-4 px-5 py-3">
      <Link to="/" onClick={() => setDefault()}>
        <img src={logo} alt="Logo" className="size-14 md:size-16 object-cover"/>
      </Link>
      <SearchBox/>
      <ColorSwitchMode/>
    </div>
  )
};

export default Navbar;
