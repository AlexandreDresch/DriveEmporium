import { Badge } from "@/components/ui/badge";
import CategoryCard from "@/components/ui/categoryCard";
import { prismaClient } from "@/lib/prisma";
import { Grid2X2 } from "lucide-react";

export default async function Catalog() {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="flex flex-col gap-8 py-5 px-5 lg:px-24">
      <Badge variant="heading">
        <Grid2X2 size={16} /> <span>Catalog</span>
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
