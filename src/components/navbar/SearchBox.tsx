import { Search } from "lucide-react"
import { Input } from "../ui/Input"
import { useState } from "react"
import { Button } from "../ui/Button";
import { GoX } from "react-icons/go";
import useGameQueryStore from "@/store/store";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const setSearchText = useGameQueryStore(s => s.setSearchText); // Used the selector to make the component only depends on setSearchText function.

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchText(searchInput);
    setSearchInput('');
  }

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.currentTarget.value);
  }

  const handleOnCancel = () => {
    setSearchInput('');
  }

  return (
    <form className="relative w-full" onSubmit={handleOnSubmit}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ring" />
      <Input onChange={handleOnInputChange} value={searchInput} type="search" placeholder="Search games..." 
        className="pl-10 pr-8 text-sm md:text-base rounded-full"
      />
      {searchInput &&
        <Button 
          className="absolute right-0 top-1 h-8 w-8 md:h-9 md:w-9 [&_svg]:size-4 md:[&_svg]:size-5 rounded-full"
          type="button" variant="ghost" size="icon" onClick={handleOnCancel}
        >
          <GoX />
        </Button>
      }
    </form>
  )
}

export default SearchBox  