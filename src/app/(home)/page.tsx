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
      <Banner variant="base" percentage={25} text="this month only"/>
      <div className="px-5">
        <Categories />
      </div>
      <div>
        <SectionTitle>Offers</SectionTitle>
        <ProductHorizontalList products={offers} />
      </div>
      <Banner variant="detailed" percentage={25} text="Vintage wheels" image={vintageWheels[0].imageUrls[0]} textOrientation="left"/>
      <div>
        <SectionTitle>Vintage</SectionTitle>
        <ProductHorizontalList products={vintageWheels} />
      </div>
      <Banner variant="detailed" percentage={15} text="Off-Road wheels" image={offRoadWheels[0].imageUrls[0]} textOrientation="right"/>
      <div>
        <SectionTitle>Off-Road</SectionTitle>
        <ProductHorizontalList products={offRoadWheels} />
      </div>
    </div>
  );
}
