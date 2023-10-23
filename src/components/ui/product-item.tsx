import { ProductWEithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import React from "react";
import { Badge } from "./badge";
import { ArrowDown01Icon, ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWEithTotalPrice;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className=" flex flex-col">
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className=" font-semibold ">
                $ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-75">
                {" "}
                ${Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-lg font-semibold ">
              $ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
