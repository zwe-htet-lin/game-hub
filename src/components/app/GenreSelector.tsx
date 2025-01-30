import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import useGenres from "@/hooks/useGenres";
import useGameQueryStore from "@/store/store";

const GenreSelector = () => {
  const { data, error } = useGenres();

  const setGenreId = useGameQueryStore((s) => s.setGenreId); // Used the selector to make the component only depends on setGenreId function.
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const handleOnValueChange = (value: string) => {
    const selectedGenre = data?.results.find((genre) => genre.name === value);
    if (selectedGenre) {
      setGenreId(selectedGenre.id);
    }
  };

  const selectedGenre = data?.results.find(
    (genre) => genre.id === selectedGenreId
  );

  if (error) return null;

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-auto min-w-[130px]">
        <SelectValue placeholder={selectedGenre?.name || "Genres"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genres</SelectLabel>
          {data?.results.map((genre) => (
            <SelectItem key={genre.id} value={genre.name}>
              {genre.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GenreSelector;
