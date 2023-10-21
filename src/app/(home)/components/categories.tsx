import { prismaClient } from "@/lib/prisma";
import { CategorieItem } from "./category-item";

async function Categories() {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategorieItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Categories;
