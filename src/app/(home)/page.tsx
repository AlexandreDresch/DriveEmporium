import Banner from "@/components/ui/banner";
import Categories from "@/components/ui/categories";
import ProductHorizontalList from "@/components/ui/productHorizontalList";
import SectionTitle from "@/components/ui/sectionTitle";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  const vintageWheels = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "vintage-wheels",
      },
    },
  });

  const offRoadWheels = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "off-road",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-5">
      <Banner src="/banner-01.png" alt="Up to 25% off this month only." />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Offers</SectionTitle>
        <ProductHorizontalList products={offers} />
      </div>

      <Banner src="/banner-02.png" alt="Up to 25% off on Vintage Wheels." />

      <div>
        <SectionTitle>Vintage</SectionTitle>
        <ProductHorizontalList products={vintageWheels} />
      </div>

      <Banner src="/banner-03.png" alt="Up to 15% off on Off-Road Wheels." />

      <div>
        <SectionTitle>Off-Road</SectionTitle>
        <ProductHorizontalList products={offRoadWheels} />
      </div>
    </div>
  );
}
