import {auth, db} from "../firebase/firebase.js";
import {useEffect, useState} from "react";
import {collection, query, where, getDocs} from "firebase/firestore";

export function Commandes() {
    const user = auth.currentUser;
    const [mesCommandes, setMesCommandes] = useState([]);
    const [loading, setLoading] = useState(true);

    if (!user)
        return <div>Vous devez être connecté pour accéder à cette page</div>;

    useEffect(function () {
        const docs = query(collection(db, "commande"), where("user", "==", user.email));

        getDocs(docs).then((querySnapshot) => {
            const commandes = [];
            querySnapshot.forEach((doc) => commandes.push(doc.data()));
            setMesCommandes(commandes);

        }).catch((error) => {
            alert(`Erreur lors de la récupération des commandes : \n ${error.message}`);
        })
                     .finally(() => setLoading(false));
    }, []);

    if (loading)
        return <div>Chargement...</div>;

    return (
        <div className={" flex flex-col gap-10 items-center justify-center"}>
            <h1>Mes commandes</h1>
            <div className="flex flex-col gap-4">
                {mesCommandes.map(commande => (
                    <>
                        <div className={"border-2 border-black"}/>
                        <h2 className="">Commande pour un total de {commande.total}€</h2>
                        <ul>
                            {commande.products.map(product => (
                                <li>{product.marque} | {product.model} | {product.prix}€</li>))}
                        </ul>
                    </>
                ))}
            </div>
        </div>
    );

}