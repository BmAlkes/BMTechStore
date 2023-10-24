import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/productImages";
import { ProductIndo } from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";

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
    <div className="flex flex-col gap-8">
      <ProductImages
        key={product.id}
        imageUrls={product.imageUrls}
        name={product.name}
      />
      <ProductIndo
        key={product.id}
        product={computeProductTotalPrice(product)}
      />
    </div>
  );
};

export default ProductPage;
