import useScreenshots from "@/hooks/useScreenshots"
import Spinner from "../ui/Spinner";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if(isLoading) return <div className="h-full flex items-center justify-center"><Spinner/></div>;

  if(error) throw error;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {data?.results.map(image => <img key={image.id} src={image.image}></img>)}
    </div>
  )
}

export default GameScreenshots