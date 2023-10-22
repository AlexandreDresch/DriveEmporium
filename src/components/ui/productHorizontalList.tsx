import { Product } from "@prisma/client"
import ProductItem from "./productItem";
import { generateProductFinalPrice } from "@/helpers/product";

interface ProductHorizontalListProps {
    products: Product[];
}

export default function ProductHorizontalList({ products }: ProductHorizontalListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {
            products.map((product) => (
              <div className="w-[170px] min-w-[170px]" key={product.id}>
                <ProductItem product={generateProductFinalPrice(product)} />
              </div>
            ))
        }

    </div>
  )
}
