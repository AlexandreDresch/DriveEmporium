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
      <div className="flex w-full md:hidden px-5 lg:px-24">
        <Banner variant="base" percentage={25} text="this month only" />
      </div>
      <div className="hidden md:flex">
        <Banner variant="desktop" percentage={25} text="this month only" />
      </div>
      <div className="px-5 lg:px-24">
        <Categories />
      </div>
      <div className="px-5 lg:px-24">
        <SectionTitle>Offers</SectionTitle>
        <ProductHorizontalList products={offers} />
      </div>
      <div className="flex w-full md:hidden px-5 lg:px-24">
        <Banner
          variant="detailed"
          percentage={25}
          text="on Vintage wheels"
          image={vintageWheels[0].imageUrls[0]}
          textOrientation="left"
        />
      </div>

      <div className="hidden w-full md:flex px-5 lg:px-24 gap-5">
        <Banner
          variant="detailed"
          percentage={25}
          text="on Vintage wheels"
          image={vintageWheels[0].imageUrls[0]}
          textOrientation="left"
        />
        <Banner
          variant="detailed"
          percentage={15}
          text="on Off-Road wheels"
          image={offRoadWheels[0].imageUrls[0]}
          textOrientation="right"
        />
      </div>
      <div className="px-5 lg:px-24">
        <SectionTitle>Vintage</SectionTitle>
        <ProductHorizontalList products={vintageWheels} />
      </div>
      <div className="flex w-full md:hidden px-5 lg:px-24">
        <Banner
          variant="detailed"
          percentage={15}
          text="on Off-Road wheels"
          image={offRoadWheels[0].imageUrls[0]}
          textOrientation="right"
        />
      </div>
      <div className="hidden w-full md:flex px-5 lg:px-24">
        <Banner
          variant="base"
          percentage={25}
          text="this month only"
          image={offers[2].imageUrls[0]}
        />
      </div>
      <div className="px-5 lg:px-24">
        <SectionTitle>Off-Road</SectionTitle>
        <ProductHorizontalList products={offRoadWheels} />
      </div>
    </div>
  );
}
