import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/productItem";
import { generateProductFinalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import {
  ArrowUpRightFromCircle,
  Car,
  Compass,
  Gauge,
  Hourglass,
  PieChart,
} from "lucide-react";

export default async function CategoryProducts({ params }: any) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    }
  });

  const categoryIcon = {
    "modern-wheels": <Car size={16} />,
    "vintage-wheels": <Hourglass size={16} />,
    "off-road": <Compass size={16} />,
    "multi-piece-category": <PieChart size={16} />,
    "directional-category": <ArrowUpRightFromCircle size={16} />,
    "performance-category": <Gauge size={16} />,
  };

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-1 text-center uppercase"
        variant="outline"
      >
        {categoryIcon[params.slug as keyof typeof categoryIcon]}{" "}
        <span>{category?.name} Wheels</span>
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={generateProductFinalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
}
