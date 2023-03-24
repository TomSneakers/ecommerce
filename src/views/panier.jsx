import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Panier() {
  const { myCart } = useContext(CartContext);

  return myCart.map((product) => (
    <div className="flex justify-between items-center">
      <div className="flex gap-10 items-center">
        <img src={product.image} className="w-20 h-20" />
        <div className="flex flex-col">
          <p className="text-slate-700 text-xl">{product.marque}</p>
          <p className="text-black text-2xl">{product.model}</p>
        </div>
      </div>
      <p className="text-3xl">{product.prix}€</p>
    </div>
  ));
}
