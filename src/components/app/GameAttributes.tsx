import useGameQueryStore from "@/store/store";
import { Game } from "@/types/Game";
import { useNavigate } from "react-router-dom";
import DefinitionItem from "./DefinitionItem";
import GameStore from "./GameStore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const navigate = useNavigate();
  const setDefault = useGameQueryStore((s) => s.setDefault);
  const setGenreId = useGameQueryStore((s) => s.setGenreId); // Used the selector to make the component only depends on setGenreId function.
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId); // Used the selector to make the component only depends on setPlatformId function.

  const handleGenreOnClick = (genreId: number) => {
    setDefault();
    setGenreId(genreId);
    navigate("/");
  };

  const handlePlatformOnClick = (platformId: number) => {
    setDefault();
    setPlatformId(platformId);
    navigate("/");
  };

  return (
    <dl className="grid grid-cols-2">
      {game.parent_platforms.length ? (
        <DefinitionItem term="Platforms" col_span="1">
          {game.parent_platforms.map(({ platform }, index) => (
            <span
              key={platform.id}
              onClick={() => handlePlatformOnClick(platform.id)}
              className="hover:underline cursor-pointer"
            >
              {platform.name}
              {index < game.parent_platforms.length - 1 ? ", " : ""}
            </span>
          ))}
        </DefinitionItem>
      ) : null}
      {game.genres.length ? (
        <DefinitionItem term="Genres" col_span="1">
          {game.genres.map((genre, index) => (
            <span
              key={genre.id}
              onClick={() => handleGenreOnClick(genre.id)}
              className="hover:underline cursor-pointer"
            >
              {genre.name}
              {index < game.genres.length - 1 ? ", " : ""}
            </span>
          ))}
        </DefinitionItem>
      ) : null}
      {game.publishers.length ? (
        <DefinitionItem term="Publishers" col_span="1">
          <>{game.publishers.map((publisher) => publisher.name).join(", ")}</>
        </DefinitionItem>
      ) : null}
      <DefinitionItem term="Age Rating" col_span="1">
        {game.esrb_rating?.name || "Not rated"}
      </DefinitionItem>
      {game.website ? (
        <DefinitionItem term="Website" col_span="2">
          <a href={game.website} target="_blank" className="underline">
            {game.website}
          </a>
        </DefinitionItem>
      ) : null}
      <GameStore gameId={game.id}/>
    </dl>
  );
};

export default GameAttributes;
