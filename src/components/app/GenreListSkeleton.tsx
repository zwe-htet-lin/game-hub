import { Skeleton } from "../ui/Skeleton"

const GenreListSkeleton = () => {
  return (
    <div className="flex items-center my-3">
      <div className="relative mr-2">
        <div className="size-9 rounded-md"></div>
        <Skeleton className="absolute w-full h-full top-0 left-0"/>
      </div>
      <div className="relative w-full h-4">
        <Skeleton className="absolute w-full h-full top-0 left-0"/>
      </div>
    </div>
  )
}

export default GenreListSkeleton