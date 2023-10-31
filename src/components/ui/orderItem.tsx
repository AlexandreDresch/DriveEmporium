import { Prisma } from "@prisma/client";
import { Card } from "./card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { format } from "date-fns";
import OrderProductItem from "./orderProductItem";
import { Separator } from "./separator";
import { useMemo } from "react";
import { generateProductFinalPrice } from "@/helpers/product";
import { orderStatus } from "@/helpers/orderStatus";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: { orderProducts: { include: { product: true } } };
  }>;
}
export default function OrderItem({ order }: OrderItemProps) {
  const subTotal = useMemo(() => {
    return order.orderProducts.reduce((sum, product) => {
      return sum + Number(product.product.basePrice) * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((sum, product) => {
      const finalPriceProduct = generateProductFinalPrice(product.product);
      return sum + Number(finalPriceProduct.totalPrice) * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const discountTotal = subTotal - total;

  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p className="font-semibold">Order with {order.orderProducts.length} item(s)</p>
              <span className="text-sm opacity-75">
                Placed on {format(order.createdAt, "MM/dd/yy 'at' HH:mm")}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Status</p>
                  <p className="text-primary font-semibold">{orderStatus(order.status)}</p>
                </div>

                <div>
                  <p className="font-semibold">Date</p>
                  <p className="opacity-75">
                    {format(order.createdAt, "MM/dd/yy")}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Payment</p>
                  <p className="opacity-75">Credit Card</p>
                </div>
              </div>

              {order.orderProducts.map((product) => (
                <OrderProductItem key={product.id} orderProduct={product} />
              ))}

              <div className="flex w-full flex-col gap-1 text-xs">
                <Separator />

                <div className="flex w-full justify-between py-3">
                  <p>Subtotal</p>
                  <p>${subTotal.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3">
                  <p>Delivery</p>
                  <p>FREE</p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3">
                  <p>Discount</p>
                  <p>-${discountTotal.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3 text-sm font-semibold">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
