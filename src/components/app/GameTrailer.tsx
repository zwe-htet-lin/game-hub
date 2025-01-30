import useTrailers from "@/hooks/useTrailers"
import Spinner from "../ui/Spinner";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if(isLoading) return <div className="h-full flex items-center justify-center"><Spinner/></div>;

  if(error) throw error;

  const trailer = data?.results[0];

  return (
    <>
      {trailer ? <video controls src={trailer.data.max} poster={trailer.preview} className="mb-5"/> : null}
    </>
  )
}

export default GameTrailer