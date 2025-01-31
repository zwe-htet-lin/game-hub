import useScreenshots from "@/hooks/useScreenshots";
import { Separator } from "../ui/Separator";
import Spinner from "../ui/Spinner";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading)
    return (
      <div className="px-5 lg:px-10 py-10">
        <Spinner />
      </div>
    );

  if (error) throw error;

  return (
    <>
      {data?.results.length ? (
        <>
          <div className="px-5 lg:px-10">
            <Separator />
          </div>
          <div className="px-5 lg:px-10 py-10">
            <h1 className="text-xl sm:text-2xl font-medium mb-5">
              Screenshots
            </h1>
            <div className="grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data?.results.map((image) => (
                <img key={image.id} src={image.image}></img>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default GameScreenshots;
