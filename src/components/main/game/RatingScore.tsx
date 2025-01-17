import { Badge } from "../../ui/Badge";

interface Props {
  score: number;
}

const RatingScore = ({ score }: Props) => {
  return (
    <Badge
      variant={
        score > 75 ? "default" : score > 60 ? "secondary" : "destructive"
      }
      className="ml-3"
    >
      {score ? score : "?"}
    </Badge>
  );
};

export default RatingScore;
