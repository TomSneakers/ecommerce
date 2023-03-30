import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import {auth, db} from "../firebase/firebase.js";
import {addDoc, collection} from "firebase/firestore";

export default function Panier() {
    const user = auth.currentUser;
    console.log(user);
    const {myCart, setMyCart} = useContext(CartContext);
    const isMyCartEmpty = myCart.length === 0;

    function handleCommande() {
        const products = myCart.map((product) => ({marque: product.marque, model: product.model, prix: product.prix}));
        const docData = {
            user: user.email,
            products,
            total: myCart.reduce((acc, product) => acc + product.prix, 0)
        };

        addDoc(collection(db, "commande"), docData).then(() => {
            setMyCart([]);
            alert("Commande effectuée");
        })
                                                   .catch((e) => console.log(e));
    }

    return (<div className="flex flex-col gap-10">
        <h1 className="text-4xl">Panier</h1>
        <div className="flex flex-col gap-10">
            <ItemList cart={myCart}/>
        </div>
        <button className="bg-black text-white text-2xl p-4 disabled:cursor-not-allowed" onClick={handleCommande}
                disabled={!user || isMyCartEmpty}>Commander</button>
    </div>);
}

function ItemList({cart}) {
    return cart.map((product, id) => <Item key={id} product={product}/>);
}

function Item({product}) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-10 items-center">
                <img src={product.image} className="w-20 h-20"/>
                <div className="flex flex-col">
                    <p className="text-slate-700 text-xl">{product.marque}</p>
                    <p className="text-black text-2xl">{product.model}</p>
                </div>
            </div>
            <p className="text-3xl">{product.prix}€</p>
        </div>
    )
}