import ColorSwitchMode from "./ColorSwitchMode";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Navbar = () => {
  
  return (
    <div className="flex justify-between items-center gap-4 p-3">
      <Logo/>
      <SearchBox/>
      <ColorSwitchMode/>
    </div>
  )
};

export default Navbar;
