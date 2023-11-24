import SectionTitle from "@/components/ui/sectionTitle";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div className="flex flex-col gap-8 py-5">
      <div className="px-5 md:px-0">
        <Skeleton className="flex aspect-square h-40 w-full items-center justify-center rounded-md md:rounded-none bg-accent sm:h-44 md:h-[430px]" />
      </div>

      <div className="flex flex-col gap-8">
        <div className="px-5 lg:px-24">
          <div className="grid grid-cols-2 gap-2 gap-x-16 gap-y-2 md:flex md:min-w-full md:justify-between md:gap-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        </div>

        <div className="px-5 lg:px-24">
          <SectionTitle>Offers</SectionTitle>

          <div className="flex gap-5">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent" />
                <Skeleton className="h-4 w-1/2 rounded-md bg-accent" />
                <Skeleton className="h-4 w-1/3 rounded-md bg-accent" />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden gap-5 px-5 md:flex lg:px-24">
          <Skeleton className="flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
          <Skeleton className="flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
        </div>

        <div className="flex px-5 md:hidden lg:px-24">
          <Skeleton className="mx-5 flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
        </div>

        <div className="px-5 lg:px-24">
          <SectionTitle>Vintage</SectionTitle>

          <div className="flex gap-5">
            {[...Array(10)].map((x, i) => (
              <Skeleton
                className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="flex px-5 lg:px-24">
          <Skeleton className="flex aspect-square h-[175px] w-full items-center justify-center rounded-md bg-accent" />
        </div>

        <div className="px-5 lg:px-24">
          <SectionTitle>Off-Road</SectionTitle>

          <div className="flex gap-5">
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
