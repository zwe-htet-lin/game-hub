import { Search } from "lucide-react"
import { Input } from "../ui/Input"
import { useRef } from "react"

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBox = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(ref.current) onSearch(ref.current.value);
  }

  return (
    <form className="relative w-full" onSubmit={handleOnSubmit}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        ref={ref}
        type="search"
        placeholder="Search games..."
        className="pl-10 pr-4 rounded-full"
      />
    </form>
  )
}

export default SearchBox