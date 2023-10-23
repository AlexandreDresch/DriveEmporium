import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

export default function Cart() {
  const { products } = useContext(CartContext);
  return (
    <div className="">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-1 text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} /> <span>Catalog</span>
      </Badge>
    </div>
  );
}
