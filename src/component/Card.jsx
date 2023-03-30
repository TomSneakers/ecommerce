import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Bouton from "./Bouton";
function Card() {
  const products = [
    {
      marque: "jordan",
      model: "JD3 Cement",
      prix: 180,
      image: "/image/cement.webp",
    },
    {
      marque: "nike",
      model: "dunk low panda",
      prix: 180,
      image: "/image/nike.jpg",
    },
    {
      marque: "adidas",
      model: "FORUM",
      prix: 180,
      image: "/image/adidas.webp",
    },
    {
      marque: "jordan",
      model: "Jd1 hight UNC",
      prix: 180,
      image: "/image/jordan-UNC.jpeg",
    },
  ];

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
        {products.map((product) => (
          <div className="p-2 bg-white rounded-md">
            <img
              src={product.image}
              alt=""
              className="h-52 w-full object-cover"
            />
            <div className="text-center my-2">
              <strong> {product.model} </strong>
              <p className="">{product.marque}</p>
              <p className="font-bold text-lg italic my-2">{product.prix}€</p>
              <button
                className="hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2"
                onClick={() => addToCart(product)}
              >
                Ajouter au panier
              </button>
              <Bouton path={product.model} label={"Voir toutes les jordans"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
