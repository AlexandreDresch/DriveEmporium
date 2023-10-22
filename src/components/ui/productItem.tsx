import { FinalProduct } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: FinalProduct;
}
export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          alt={product.name}
          style={{
            objectFit: "contain",
          }}
        />

        {product.discountPercent > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-0.5">
            <ArrowDownIcon size={14}/> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="font-semibold">
                $ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-75">
                $ {+product.basePrice.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-semibold">
              $ {product.totalPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
