import { FinalProduct } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: FinalProduct;
}
export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[70%] object-contain"
          alt={product.name}
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
