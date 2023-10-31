import { Badge } from "@/components/ui/badge";
import OrderItem from "@/components/ui/orderItem";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function Orders() {
  const user = getServerSession(authOptions);

  if (!user) {
    return <p>Access Denied</p>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: { include: { product: true } },
    },
  });

  return (
    <div className="p-5">
      <Badge
        className="mb-5 w-fit gap-1 border-[1px] border-primary px-3 py-1 text-base uppercase"
        variant="outline"
      >
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
