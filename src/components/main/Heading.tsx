import { GameQuery } from "@/App"

interface Props {
  gameQuery: GameQuery
}

const Heading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <h1 className="text-4xl md:text-5xl font-bold mb-5">{heading}</h1>
  )
}

export default Heading