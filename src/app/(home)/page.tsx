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

  return (
    <div className="py-5">
      <Banner
        src="/banner-01.png"
        alt="Up to 25% off this month only."
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="my-8">
        <SectionTitle>Offers</SectionTitle>
        <ProductHorizontalList products={offers} />
      </div>

      <Banner
        src="/banner-02.png"
        alt="Up to 25% off on Vintage Wheels."
      />

      <div className="mt-8">
        <SectionTitle>Vintage</SectionTitle>
        <ProductHorizontalList products={vintageWheels} />
      </div>
    </div>
  );
}
