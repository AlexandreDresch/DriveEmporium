import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PercentIcon } from "lucide-react";

export default function OffersLoading() {
  return (
    <div className="flex flex-col gap-5 p-5 lg:container lg:mx-auto">
      <Badge
        className="w-fit gap-1 border-[2px] border-primary px-3 py-1 text-center uppercase"
        variant="outline"
      >
        <PercentIcon size={16} />
        <span>Offers</span>
      </Badge>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
        {[...Array(6)].map((x, i) => (
          <Skeleton
            className="flex h-[200px] w-full rounded-tl-lg rounded-tr-lg bg-accent"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
