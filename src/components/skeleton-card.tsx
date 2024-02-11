import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-12 w-12 rounded-[16px]" />
      <Skeleton className="h-4 max-w-[250px]" />
      <Skeleton className="h-4 max-w-[225px]" />
      <Skeleton className="h-4 max-w-[200px]" />
    </div>
  )
}
