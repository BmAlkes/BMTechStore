import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cart";
import { CartItem } from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Http2ServerRequest } from "http2";
import { Separator } from "./separator";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} />
        Cart
      </Badge>
      {/* renderizar Produtos */}
      <div className="mt-4 flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p>Empty Cart</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Subtotal:</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Deliver:</p>
          <p>Free</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Discont</p>
          <p>-${totalDiscount}</p>
        </div>
        <Separator />
        <div className="text-l flex items-center justify-between font-bold">
          <p className="text-bold">Total</p>
          <p className="">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
