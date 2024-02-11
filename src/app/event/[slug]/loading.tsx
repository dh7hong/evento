import Skeleton from "@/components/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      
      <Skeleton className="h-20 w-20 rounded-[16px]" />
        
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[230px]" />
      <Skeleton className="h-4 w-[230px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}
