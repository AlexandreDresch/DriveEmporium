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
    <div className="flex flex-col gap-5 p-5">
      <Badge
        className="w-fit gap-1 border-[2px] border-primary px-3 py-1 text-center uppercase"
        variant="outline"
      >
        <PercentIcon size={16} />
        <span>Offers</span>
      </Badge>
      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <div className="w-[170px] min-w-[170px]" key={product.id}>
            <ProductItem product={generateProductFinalPrice(product)} />
          </div>
        ))}
      </div>
    </div>
  );
}
