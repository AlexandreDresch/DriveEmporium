import { Product } from "@prisma/client";

export interface FinalProduct extends Product {
  totalPrice: number;
}

export function generateProductFinalPrice(product: Product): FinalProduct {
  if (product.discountPercent === 0) {
    return {
      ...product,
      totalPrice: +product.basePrice,
    };
  }

  const totalPrice = +product.basePrice * (product.discountPercent / 100);

  return {
    ... product,
    totalPrice: totalPrice,
  }
}
