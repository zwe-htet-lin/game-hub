import useTrailers from "@/hooks/useTrailers";
import { Separator } from "../ui/separator";
import Spinner from "../ui/spinner";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading)
    return (
      <div className="px-5 lg:px-10 py-10">
        <Spinner />
      </div>
    );

  if (error) throw error;

  const trailer = data?.results[0];

  return (
    <>
      {trailer ? (
        <>
          <div className="px-5 lg:px-10">
            <Separator />
          </div>
          <div className="px-5 lg:px-10 py-10">
            <h1 className="text-xl sm:text-2xl font-medium mb-5">Videos</h1>
            {trailer ? (
              <video
                controls
                src={trailer.data.max}
                poster={trailer.preview}
                className="mb-5"
              />
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
};

export default GameTrailer;
