import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PercentIcon } from "lucide-react";

export default function OffersLoading() {
  return (
    <div className="flex flex-col gap-8 p-5 lg:px-24">
      <Badge variant="heading">
        <PercentIcon size={16} />
        <span>Offers</span>
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
