import useGenre, { Genre } from "@/hooks/useGenre"
import { Button } from "../ui/Button";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres } = useGenre();

  const handleFontWeight = (id: number) => {
    return id === selectedGenre?.id ? 'font-medium text-lg underline' : 'font-normal';
  }

  return (
    <ul>
      {genres.map(genre => 
        <div key={genre.id} className="flex items-center my-3">
          <img src={genre.image_background} alt={genre.name} className="size-8 rounded-md mr-2 object-cover"/>
          <Button variant="link" className={`p-0 text-base ${handleFontWeight(genre.id)}`} 
            onClick={() => onSelectGenre(genre)}>
              {genre.name}
          </Button>
        </div>
      )}
    </ul>
  )
}

export default GenreList