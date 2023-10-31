import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <div className="flex flex-col gap-8">
      <Skeleton className="flex aspect-square h-[380px] w-full bg-accent" />

      <div className="flex gap-1 px-5">
        {[...Array(3)].map((x, i) => (
          <Skeleton
            className="flex aspect-square h-[100px] w-[100px] items-center justify-center rounded-lg bg-accent"
            key={i}
          />
        ))}
      </div>

      <div className="w-full px-5">
        <Skeleton className="mb-4 h-2.5 w-48 rounded-full bg-accent" />
        <Skeleton className="mb-4 h-2.5 w-48 rounded-full bg-accent" />
        <Skeleton className="mb-2.5 h-2 max-w-[480px] rounded-full bg-accent" />
        <Skeleton className="mb-2.5 h-2 max-w-[440px] rounded-full bg-accent" />
        <Skeleton className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent" />
        <Skeleton className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent" />
        <Skeleton className="h-2 max-w-[360px] rounded-full bg-accent" />
      </div>
    </div>
  );
}
