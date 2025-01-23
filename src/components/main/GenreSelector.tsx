import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"
import useGenre, { Genre } from "@/hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreSelector = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error } = useGenre();

  const handleOnValueChange = (value: string) => {
    const selected = data?.results.find(genre => genre.name === value);
    if (selected) {
      onSelectGenre(selected);
    }
  }

  if(error) return null;

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-auto min-w-[130px]">
        <SelectValue placeholder={selectedGenre?.name || 'Genres'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genres</SelectLabel>
          {data?.results.map(genre => 
            <SelectItem key={genre.id} value={genre.name}>
              {genre.name}
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GenreSelector;
