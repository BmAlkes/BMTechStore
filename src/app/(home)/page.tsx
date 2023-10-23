import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import { TitleSection } from "./components/titleSection";
import PromoBanner from "./components/promo-banner";
import { Footer } from "@/components/ui/footer";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="y-8 flex flex-col gap-8">
      <PromoBanner src="/banner-home.png" alt="Home Banner" />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <TitleSection>Offers</TitleSection>
        <ProductList products={deals} />
      </div>

      <PromoBanner src="/banner-home2.png" alt="" />
      <div className="mt-8">
        <TitleSection>keybords</TitleSection>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner src="/banner-fones.png" alt="" />
      <div className="mt-8">
        <TitleSection>Mouses</TitleSection>
        <ProductList products={mouses} />
      </div>
      <Footer />
    </div>
  );
}
