import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Bouton from "./Bouton";
import { useProductContext } from "../context/productContext.jsx";
import { Card } from "./card.jsx";
import { auth } from "../firebase/firebase.js";

function Boutique() {
  const products = useProductContext();

  const { setMyCart, myCart } = useContext(CartContext);

  function addToCart(produit) {
    setMyCart([...myCart, produit]);
  }

  return (
    <div>
      <div>
        <h2 className="text-center mt-20 font-bold underline text-3xl">
          Nos produits les plus vendus
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-4 mt-10 m-3">
        {products.map((product, id) => (
          <Card key={id} product={product} onClick={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Boutique;
