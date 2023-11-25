import { generateProductFinalPrice } from "@/helpers/product";
import { OrderProduct, Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductProps {
  orderProduct: Prisma.OrderProductGetPayload<{ include: { product: true } }>;
}
export default function OrderProductItem({ orderProduct }: OrderProductProps) {
  const productWithFinalPrice = generateProductFinalPrice(orderProduct.product);

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[77px] w-[100px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          alt={orderProduct.product.name}
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <div className="flex justify-center rounded-md bg-accent px-2 py-1 md:w-1/3">
          <p className="text-xs">
            Sold and shipped by{" "}
            <span className="font-semibold">Drive Emporium</span>
          </p>
        </div>
        <p className="text-xs">{orderProduct.product.name}</p>

        <div className="flex w-full justify-between gap-1">
          <div className="flex flex-col text-left">
            <p className="text-sm font-semibold">
              ${productWithFinalPrice.totalPrice.toFixed(2)}
            </p>

            {productWithFinalPrice.discountPercent > 0 && (
              <p className="text-xs line-through opacity-75">
                ${Number(productWithFinalPrice.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center">
            <p>Amount </p>
            <p className="font-semibold">{orderProduct.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
