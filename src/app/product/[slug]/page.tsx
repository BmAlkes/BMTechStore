import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/productImages";
import { ProductIndo } from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/product-list";

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
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages
        key={product.id}
        imageUrls={product.imageUrls}
        name={product.name}
      />
      <ProductIndo
        key={product.id}
        product={computeProductTotalPrice(product)}
      />
      <ProductList products={product.category.products} />
    </div>
  );
};

export default ProductPage;
