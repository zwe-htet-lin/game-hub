import { Game } from '@/types/Game'
import DefinitionItem from './DefinitionItem'
import RatingScore from './RatingScore'
import GameStore from './GameStore'
import useGameQueryStore from '@/store/store'
import { useNavigate } from 'react-router-dom'

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const navigate = useNavigate();
  const setDefault = useGameQueryStore((s) => s.setDefault);
  const setGenreId = useGameQueryStore((s) => s.setGenreId); // Used the selector to make the component only depends on setGenreId function.
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId); // Used the selector to make the component only depends on setPlatformId function.
  
  const getReleaseDate = (date: any) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const releaseDate = new Date(date as Date);
    
    const day = releaseDate.getDate().toString().padStart(2, '0');
    const month = months[releaseDate.getMonth()];
    const year = releaseDate.getFullYear().toString();
  
    return `${month} ${day}, ${year}`;
  }

  const handleGenreOnClick = (genreId: number) => {
    setDefault();
    setGenreId(genreId);
    navigate('/');
  };

  const handlePlatformOnClick = (platformId: number) => {
    setDefault();
    setPlatformId(platformId);
    navigate('/');
  };

  return (
    <dl className="grid grid-cols-2">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({platform}, index) => 
          <span onClick={() => handlePlatformOnClick(platform.id)} className='hover:underline cursor-pointer'>
            {platform.name}{index < game.parent_platforms.length - 1 ? ', ' : ''}
          </span>
        )}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <RatingScore score={game.metacritic}/>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map((genre, index) => 
          <span onClick={() => handleGenreOnClick(genre.id)} className='hover:underline cursor-pointer'>
            {genre.name}{index < game.genres.length - 1 ? ', ' : ''}
          </span>
        )}
      </DefinitionItem>
      <DefinitionItem term="Release Date">
        {getReleaseDate(game.released)}
      </DefinitionItem>
      <DefinitionItem term="Publishers"> 
        <>{game.publishers?.map((publisher) => publisher.name).join(", ")}</>
      </DefinitionItem>
      <DefinitionItem term="Age Rating">
        {game.esrb_rating?.name || 'Not rated'}
      </DefinitionItem>
      <DefinitionItem term="Website" col_span="2">
        <a href={game.website} target="_blank" className='underline'>{game.website}</a>
      </DefinitionItem>
      <DefinitionItem term="Where to get" col_span="2">
        <GameStore gameId={game.id}/>
      </DefinitionItem>
    </dl>
  )
}

export default GameAttributes