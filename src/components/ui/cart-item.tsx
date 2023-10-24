import Image from "next/image";
import { CartProduct } from "../../app/providers/cart";
import { Button } from "./button";
import { ArrowLeft, ArrowRight, TrashIcon } from "lucide-react";

interface CartItemProps {
  product: CartProduct;
}

export const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[90px] w-[90px] items-center justify-center  rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>
          <div className="flex items-center">
            <p className="text-sm font-bold">
              ${product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-70">
                ${Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button size="icon" variant="outline">
              <ArrowLeft size={16} />
            </Button>
            <span className="text-xs">{product.quantity}</span>
            <Button size="icon" variant="outline">
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};
