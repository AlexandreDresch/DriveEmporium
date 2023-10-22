import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-category-card-gradient">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>
      <div className="rounded-bl-lg rounded-br-lg bg-accent py-3">
        <p className="text-sm font-semibold text-center">{category.name}</p>
      </div>
    </div>
  );
}
