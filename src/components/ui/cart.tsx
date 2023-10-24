import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cartItem";
import { generateProductFinalPrice } from "@/helpers/product";
import { Separator } from "./separator";

export default function Cart() {
  const { products, total, subTotal, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-6 font-Poppins">
      <Badge
        className="w-fit gap-1 border-[1px] border-primary px-3 py-1 text-lg"
        variant="outline"
      >
        <ShoppingCartIcon size={16} /> <span>Cart</span>
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={generateProductFinalPrice(product) as any}
            />
          ))
        ) : (
          <p className="text-center font-medium opacity-75">
            Your cart is empty.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>${subTotal.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Delivery</p>
          <p>FREE</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Discount</p>
          <p>-${totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-sm font-semibold">
          <p>Total</p>
          <p>-${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}