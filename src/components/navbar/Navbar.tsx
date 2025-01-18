import ColorSwitchMode from "./ColorSwitchMode";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <div className="flex justify-between items-center gap-4 p-3">
      <Logo/>
      <SearchBox onSearch={onSearch}/>
      <ColorSwitchMode/>
    </div>
  )
};

export default Navbar;
