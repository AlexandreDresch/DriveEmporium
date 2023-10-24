import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cartItem";
import { generateProductFinalPrice } from "@/helpers/product";

export default function Cart() {
  const { products } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-6">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-1 text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} /> <span>Catalog</span>
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={generateProductFinalPrice(product) as any}
          />
        ))}
      </div>
    </div>
  );
}
