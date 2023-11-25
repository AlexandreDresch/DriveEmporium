import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/productItem";
import { generateProductFinalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

export default async function Offers() {
  const products = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });
  return (
    <div className="flex flex-col gap-5 p-5 lg:px-24">
      <Badge variant="heading">
        <PercentIcon size={16} />
        <span>Offers</span>
      </Badge>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {products.map((product) => (
          <ProductItem
            product={generateProductFinalPrice(product)}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
