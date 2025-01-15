import { Search } from "lucide-react"
import { Input } from "../ui/input"

const SearchBox = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="search"
        placeholder="Search games..."
        className="pl-10 pr-4 rounded-full"
      />
    </div>
  )
}

export default SearchBox