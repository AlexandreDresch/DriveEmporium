import { Badge } from "@/components/ui/badge";
import OrderItem from "@/components/ui/orderItem";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function Orders() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-semibold">Access Denied!</h2>
        <p className="text-sm opacity-75">Log in to view your orders</p>
      </div>
    );
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: { include: { product: true } },
    },
  });

  if (orders.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-semibold">Nothing here :c</h2>
        <p className="text-sm opacity-75">You haven&apos;t purchased anything from us yet</p>
      </div>
    );
  }

  return (
    <div className="p-5 lg:px-24">
      <Badge className="mb-5" variant="heading">
        <PackageSearchIcon size={16} /> <span>Orders</span>
      </Badge>

      <div className="flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}
