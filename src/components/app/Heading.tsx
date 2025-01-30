import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store/store";

const Heading = () => {
  const { data: platforms } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  const { data: genres } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = genres?.results.find(
    (genre) => genre.id === selectedGenreId
  );

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <h1 className="text-4xl md:text-5xl font-bold mb-5">{heading}</h1>;
};

export default Heading;
