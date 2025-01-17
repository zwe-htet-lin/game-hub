import useGenre, { Genre } from "@/hooks/useGenre"
import { Button } from "../ui/Button";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useGenre();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const handleFontWeight = (id: number) => {
    return id === selectedGenre?.id ? 'font-medium text-lg underline' : 'font-normal';
  }

  return (
    <ul>
      {isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton}/>)}
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