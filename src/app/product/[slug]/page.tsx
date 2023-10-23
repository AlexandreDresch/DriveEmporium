import ProductImages from "@/components/ui/productImages";
import { prismaClient } from "@/lib/prisma";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function Product({ params: { slug } }: ProductPageProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  });

  if (!product) return null;

  return (
    <div className="">
        <ProductImages imageUrls={product.imageUrls} name={product.name}/>
  </div>
  );
}
