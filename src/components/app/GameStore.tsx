import stores from "@/data/stores";
import useStores from "@/hooks/useStores";
import DefinitionItem from "./DefinitionItem";

interface Props {
  gameId: number;
}

const GameStore = ({ gameId }: Props) => {
  const { data, error, isLoading } = useStores(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const getStoreName = (storeId: number) => {
    return stores.results.find((s) => s.id === storeId)?.name;
  };

  return (
    <>
      {data?.results.length ? (
        <DefinitionItem term="Where to get" col_span="2">
          {data?.results.map((store, index) => (
            <a
              key={store.id}
              href={store.url}
              target="_blank"
              className="hover:underline"
            >
              {getStoreName(store.store_id)}
              {index < data.results.length - 1 ? ", " : ""}
            </a>
          ))}
        </DefinitionItem>
      ) : null}
    </>
  );
};

export default GameStore;
