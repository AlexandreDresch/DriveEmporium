import Categories from "@/components/ui/categories";
import ProductHorizontalList from "@/components/ui/productHorizontalList";
import { prismaClient } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      }
    }
  })
  return (
    <div className="py-5">
      <Image
        src="/banner-01.png"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Up to 25% off this month only."
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductHorizontalList products={offers}/>
      </div>
    </div>
  );
}
