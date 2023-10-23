import ProductDetails from "@/components/ui/productDetails";
import ProductHorizontalList from "@/components/ui/productHorizontalList";
import ProductImages from "@/components/ui/productImages";
import SectionTitle from "@/components/ui/sectionTitle";
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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-6">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductDetails product={generateProductFinalPrice(product)} />

      <div className="mb-6">
        <SectionTitle>More in {product.category.name}</SectionTitle>
        <ProductHorizontalList products={product.category.products} />
      </div>
    </div>
  );
}
