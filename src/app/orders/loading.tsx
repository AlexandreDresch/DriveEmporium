import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PackageSearchIcon } from "lucide-react";

export default function OrdersLoading() {
  return (
    <div className="p-5 lg:px-24">
      <Badge className="mb-5" variant="heading">
        <PackageSearchIcon size={16} /> <span>Orders</span>
      </Badge>

      <div className="flex flex-col gap-3">
        {[...Array(6)].map((_, i) => (
          <Skeleton
            className="h-20 w-full rounded-md bg-slate-500/10"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
