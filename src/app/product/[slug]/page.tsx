import ProductDetails from "@/components/ui/productDetails";
import ProductImages from "@/components/ui/productImages";
import { generateProductFinalPrice } from "@/helpers/product";
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
    <div className="flex flex-col gap-6">
        <ProductImages imageUrls={product.imageUrls} name={product.name}/>
        <ProductDetails product={generateProductFinalPrice(product)}/>
  </div>
  );
}
