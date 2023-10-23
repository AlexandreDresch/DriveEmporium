"use client";

import { FinalProduct } from "@/helpers/product";
import { Badge } from "./badge";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeft,
  ChevronRight,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

interface ProductDetailsProps {
  product: Pick<
    FinalProduct,
    "name" | "basePrice" | "description" | "discountPercent" | "totalPrice"
  >;
}
export default function ProductDetails({
  product: { basePrice, totalPrice, description, discountPercent, name },
}: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityDecrement() {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  }

  function handleQuantityIncrement() {
    setQuantity((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">${totalPrice.toFixed(2)}</h1>

        {discountPercent > 0 && (
          <Badge className="px-2 py-0.5">
            <ArrowDownIcon size={14} /> {discountPercent}%
          </Badge>
        )}
      </div>

      {discountPercent > 0 && (
        <p className="text-sm line-through opacity-75">
          ${Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button size="icon" variant="outline" onClick={handleQuantityDecrement}>
          <ChevronLeft size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleQuantityIncrement}>
          <ChevronRight size={16} />
        </Button>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <h3 className="font-semibold">Description</h3>
        <p className="text-sm opacity-75">{description}</p>
      </div>

      <Button className="mt-6 font-semibold uppercase">Add to Cart</Button>

      <div className="my-6 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Shipping via <span className="font-semibold">FedEx</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              All over the <span className="font-semibold">USA</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-semibold">Free Shipping</p>
      </div>
    </div>
  );
}
