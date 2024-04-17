import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ChevronLeft, ChevronRight, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

export default function CartItem({ product }: CartItemProps) {
  const {
    decreaseProductFromCart,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="flex flex-col">
          <p className="line-clamp-1 max-w-[140px] text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">
              ${product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercent > 0 && (
              <p className="text-xs line-through opacity-75">
                ${Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              onClick={() => decreaseProductFromCart(product)}
              className="h-8 w-8"
            >
              <ChevronLeft size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              onClick={() => increaseProductQuantity(product)}
              className="h-8 w-8"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size="icon"
        variant="outline"
        onClick={() => removeProductFromCart(product)}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
}
