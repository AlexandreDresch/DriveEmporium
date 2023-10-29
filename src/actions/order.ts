"use server";

import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";

export async function createOrder(cartProducts: CartProduct[], userId: string) {
  const order = await prismaClient.order.create({
    data: {
      userId: userId,
      orderProducts: {
        createMany: {
          data: cartProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercent: product.discountPercent,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  });

  return order;
}
