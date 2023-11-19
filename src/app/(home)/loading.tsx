import SectionTitle from "@/components/ui/sectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import Categories from "@/components/ui/categories";
import Banner from "@/components/ui/banner";

export default function HomeLoading() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex lg:hidden">
      <Banner variant="base" percentage={25} text="this month only"/>
      </div>

      <div className="flex flex-col gap-8 lg:container lg:mx-auto">
        <div className="px-5 lg:px-0">
          <Categories />
        </div>

        <div>
          <SectionTitle>Offers</SectionTitle>

          <div className="flex gap-5 px-5">
            {[...Array(7)].map((x, i) => (
              <Skeleton
                className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:gap-10 lg:px-0">
          <div className="flex">
          <Banner variant="base" percentage={25} text="Vintage wheels."/>
          </div>
        </div>

        <div>
          <SectionTitle>Vintage</SectionTitle>

          <div className="flex gap-5 px-5">
            {[...Array(7)].map((x, i) => (
              <Skeleton
                className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="flex lg:hidden">
        <Banner variant="base" percentage={15} text="Off-Road Wheels."/>
        </div>

        <div>
          <SectionTitle>Off-Road</SectionTitle>

          <div className="flex gap-5 px-5">
            {[...Array(7)].map((x, i) => (
              <Skeleton
                className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
