import ColorSwitchMode from "./ColorSwitchMode";
import logo from "../../assets/logo.webp";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 p-3">
      <img src={logo} alt="Logo" className="size-14 md:size-16 object-cover"/>
      <SearchBox/>
      <ColorSwitchMode/>
    </div>
  )
};

export default Navbar;
