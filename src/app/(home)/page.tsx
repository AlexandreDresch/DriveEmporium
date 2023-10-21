"use client";

import Categories from "@/components/ui/categories";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-01.png"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Up to 25% off this month only."
      />

      <div className="mt-8">
      <Categories />
      </div>
    </div>
  );
}
