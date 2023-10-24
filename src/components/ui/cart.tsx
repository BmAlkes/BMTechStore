import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cart";
import { CartItem } from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const { products } = useContext(CartContext);
  console.log(products);
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
        {products.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
