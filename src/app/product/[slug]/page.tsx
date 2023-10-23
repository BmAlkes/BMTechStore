import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/productImages";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params: { slug } }: ProductDetailPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;
  return (
    <div>
      <ProductImages
        key={product.id}
        imageUrls={product.imageUrls}
        name={product.name}
      />
    </div>
  );
};

export default ProductPage;
