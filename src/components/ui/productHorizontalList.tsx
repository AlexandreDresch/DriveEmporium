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
            products.map((product) => <ProductItem key={product.id} product={generateProductFinalPrice(product)} />)
        }

    </div>
  )
}
