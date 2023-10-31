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

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: { orderProducts: { include: { product: true } } };
  }>;
}
export default function OrderItem({ order }: OrderItemProps) {
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              Order with {order.orderProducts.length} item(s)
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Status</p>
                  <p className="text-primary">{order.status}</p>
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
