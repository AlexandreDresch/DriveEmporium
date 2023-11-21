import SectionTitle from "@/components/ui/sectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import Categories from "@/components/ui/categories";

export default function HomeLoading() {
  return (
    <div className="flex flex-col gap-8 py-5">
      <div className="flex">
        <Skeleton className="mx-5 flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
      </div>

      <div className="flex flex-col gap-8">
        <div className="px-5">
          <Categories />
        </div>

        <div>
          <SectionTitle>Offers</SectionTitle>

          <div className="flex gap-5 px-5">
            {[...Array(10)].map((x, i) => (
              <Skeleton
                className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="mx-5 hidden gap-5 md:flex ">
          <Skeleton className="flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
          <Skeleton className="flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
        </div>

        <div className="flex md:hidden">
          <Skeleton className="mx-5 flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
        </div>

        <div>
          <SectionTitle>Vintage</SectionTitle>

          <div className="flex gap-5 px-5">
            {[...Array(10)].map((x, i) => (
              <Skeleton
                className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="flex">
          <Skeleton className="mx-5 flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
        </div>

        <div>
          <SectionTitle>Off-Road</SectionTitle>

          <div className="flex gap-5 px-5">
            {[...Array(10)].map((x, i) => (
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
