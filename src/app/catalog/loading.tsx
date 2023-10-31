import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Grid2X2 } from "lucide-react";

export default function CatalogLoading() {
  return (
    <div className="flex flex-col gap-8 p-5 lg:container lg:mx-auto">
      <Badge        
        variant="heading"
      >
        <Grid2X2 size={16} /> <span>Catalog</span>
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
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
