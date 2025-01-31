import useGameQueryStore from "@/store/store";
import { Search } from "lucide-react";
import { useRef } from "react";
import { GoX } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchHeading = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText); // Used the selector to make the component only depends on setSearchText function.

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
    }
  };

  const handleOnCancel = () => {
    navigate(-1);
    setSearchText("");
  };

  return (
    <form
      className="relative w-full my-3 md:my-6 mb-10 md:mb-12"
      onSubmit={handleOnSubmit}
    >
      <Search className="absolute left-0 top-1/2 h-5 w-5 md:h-6 md:w-6 -translate-y-1/2 text-ring" />
      <Input
        ref={ref}
        defaultValue={searchText}
        type="search"
        placeholder="Search games..."
        className="pl-9 pr-12 py-6 text-xl md:text-2xl border-0 border-b-2 focus-visible:ring-0 focus-visible:border-0 focus-visible:border-b-2 focus-visible:border-b-ring"
      />
      <Button
        className="absolute right-0 top-1.5 h-8 w-8 md:h-9 md:w-9 [&_svg]:size-4 md:[&_svg]:size-5 rounded-full"
        type="button"
        variant="secondary"
        size="icon"
        onClick={handleOnCancel}
      >
        <GoX />
      </Button>
    </form>
  );
};

export default SearchHeading;
