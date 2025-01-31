import useGenres from "@/hooks/useGenres";
import useGameQueryStore from "@/store/store";
import { Button } from "../ui/Button";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const setGenreId = useGameQueryStore((s) => s.setGenreId); // Used the selector to make the component only depends on setGenreId function.
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const handleOnClick = (genreId: number) => {
    setGenreId(genreId);
  };

  const handleFontWeight = (id: number) => {
    return id === selectedGenreId
      ? "font-medium text-lg underline"
      : "font-normal";
  };

  if (error) return null;

  return (
    <div className="w-56 max-h-[100vh] sticky top-0 overflow-scroll hide-scrollbar">
      <h1 className="text-3xl font-bold mb-5">Genres</h1>
      <ul>
        {isLoading && skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <div key={genre.id} className="flex items-center my-3">
            <img
              src={genre.image_background}
              alt={genre.name}
              className="size-8 rounded-md mr-2 object-cover"
            />
            <Button
              variant="link"
              className={`p-0 text-base ${handleFontWeight(genre.id)}`}
              onClick={() => handleOnClick(genre.id)}
            >
              {genre.name}
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GenreList
