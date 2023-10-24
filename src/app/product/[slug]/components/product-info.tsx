"use client";

import { CartContext } from "@/app/providers/cart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWEithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, ArrowLeft, ArrowRight, TruckIcon } from "lucide-react";
import React, { useContext, useState } from "react";

interface ProductProps {
  product: ProductWEithTotalPrice;
}
export const ProductIndo = ({ product }: ProductProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductsToCart } = useContext(CartContext);
  console.log(addProductsToCart);

  const handledecreaseAmount = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };
  const handleIncreaseAmount = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleToCartClick = () => {
    addProductsToCart({ ...product, quantity });
  };
  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-1">
        <h1 className="gap-2 text-xl font-bold">
          ${product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage} %
          </Badge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          from: ${Number(product.basePrice).toFixed(2)}
        </p>
      )}
      <div className="mt-4 flex items-center gap-5">
        <Button size="icon" variant="outline" onClick={handledecreaseAmount}>
          <ArrowLeft />
        </Button>
        <span>{quantity}</span>
        <Button size="icon" variant="outline" onClick={handleIncreaseAmount}>
          <ArrowRight />
        </Button>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <h3 className="text-bold">Description</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>
      <Button
        className="mt-8 rounded-lg font-bold uppercase"
        onClick={handleToCartClick}
      >
        Add To Cart
      </Button>
      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-5">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Deliver by <span className="font-semibold"> BMPacket®</span>{" "}
            </p>
            <p className="text-xs text-[#8162ff]">Shipping to all of Israel </p>
          </div>
        </div>
        <div className="text-xs font-semibold">Free shipping</div>
      </div>
    </div>
  );
};
