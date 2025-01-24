import useGenre, { Genre } from "@/hooks/useGenre"
import { Button } from "../ui/Button";
import AsideSkeleton from "./AsideSkeleton";
import useGameQueryStore from "@/store/store";

const Aside = () => {
  const { data, error, isLoading } = useGenre();

  const setGenreId = useGameQueryStore(s => s.setGenreId); // Used the selector to make the component only depends on setGenreId function.
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const handleOnClick = (genre: Genre) => {
    setGenreId(genre.id);
  }

  const handleFontWeight = (id: number) => {
    return id === selectedGenreId ? 'font-medium text-lg underline' : 'font-normal';
  }

  if(error) return null;

  return (
    <div className="w-56 px-3">
      <h1 className="text-3xl font-bold mb-5">Genres</h1>
      <ul>
        {isLoading && skeletons.map(skeleton => <AsideSkeleton key={skeleton}/>)}
        {data?.results.map(genre => 
          <div key={genre.id} className="flex items-center my-3">
            <img src={genre.image_background} alt={genre.name} className="size-8 rounded-md mr-2 object-cover"/>
            <Button variant="link" className={`p-0 text-base ${handleFontWeight(genre.id)}`} 
              onClick={() => handleOnClick(genre)}>
                {genre.name}
            </Button>
          </div>
        )}
      </ul>
    </div>
  )
}

export default Aside