import { Product } from "@prisma/client";

export interface ProductWEithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWEithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }
  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  };
};
