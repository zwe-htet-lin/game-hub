import GameCardImg from "../../assets/game-card-img.jpg";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import RatingEmoji from "./RatingEmoji";
import RatingScore from "./RatingScore";

const GameCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src={GameCardImg} className="w-full opacity-0" />
        <Skeleton className="absolute w-full h-full top-0 left-0" />
      </div>
      <CardContent className="p-3">
        <div className="relative">
          <div className="opacity-0">
            <RatingScore score={91} />
          </div>
          <Skeleton className="absolute w-full h-full top-0 left-0" />
        </div>
        <div className="relative">
          <h1 className="text-xl font-medium my-3 opacity-0">Zwe Htet Lin</h1>
          <Skeleton className="absolute w-full h-full top-0 left-0" />
        </div>
        <div className="relative">
          <div className="opacity-0">
            <RatingEmoji rating={4} />
          </div>
          <Skeleton className="absolute w-full h-full top-0 left-0" />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
