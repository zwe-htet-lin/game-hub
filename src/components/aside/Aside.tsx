import useGenre, { Genre } from "@/hooks/useGenre"
import { Button } from "../ui/Button";
import AsideSkeleton from "./AsideSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const Aside = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const handleFontWeight = (id: number) => {
    return id === selectedGenre?.id ? 'font-medium text-lg underline' : 'font-normal';
  }

  if(error) return skeletons.map(skeleton => <AsideSkeleton key={skeleton}/>);

  return (
    <>
      <h1 className="text-3xl font-bold mb-5">Genres</h1>
      <ul>
        {isLoading && skeletons.map(skeleton => <AsideSkeleton key={skeleton}/>)}
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
    </>
  )
}

export default Aside