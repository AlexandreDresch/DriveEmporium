import { Badge } from "@/components/ui/badge";
import CategoryCard from "@/components/ui/categoryCard";
import { prismaClient } from "@/lib/prisma";
import { Grid2X2 } from "lucide-react";

export default async function Catalog() {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
         className="w-fit gap-1 border-2 border-primary px-3 py-1 text-center uppercase"
        variant="outline"
      >
        <Grid2X2 size={16} /> <span>Catalog</span>
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
