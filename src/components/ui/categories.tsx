import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./categoryItem";

export default async function Categories() {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-2 gap-x-16 gap-y-2 md:flex md:gap-4 md:min-w-full md:justify-between">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
