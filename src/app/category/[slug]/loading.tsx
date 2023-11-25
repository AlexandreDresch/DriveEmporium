import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <div className="flex flex-col gap-8 p-5 lg:px-24">
      <Badge variant="outline" className="border-0">
        <Skeleton className="h-6 w-28 rounded-full bg-accent" />
      </Badge>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="flex h-[170px] w-full items-center justify-center rounded-lg bg-accent lg:h-[300px]" />
            <Skeleton className="h-4 w-1/2 rounded-md bg-accent" />
            <Skeleton className="h-4 w-1/3 rounded-md bg-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}
