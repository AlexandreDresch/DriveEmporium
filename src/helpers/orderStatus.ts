import { OrderStatus } from "@prisma/client";

export function orderStatus(orderStatus: OrderStatus) {
  return {
    [OrderStatus.PAYMENT_RECEIVED]: "Paid",
    [OrderStatus.WAITING_FOR_PAYMENT]: "Pending",
  }[orderStatus];
}
