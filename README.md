# ecommerce

1- Dans le terminal mettre la ligne de commande suivante: "npm install"
2- creer un dossier "firebase" dans src puis creer un fichier "firebase.js"
3- Envoyer moi un message pour les informations manquantes et pour que je vous donne les acces au projet firebase

##/firebase/firebase.js

````import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "ecommerce-isitech.firebaseapp.com",
    projectId: "ecommerce-isitech",
    storageBucket: "ecommerce-isitech.appspot.com",
    messagingSenderId: "",
    appId: "",
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };```

4- Dans le terminal mettre la ligne de commande suivante: "npm run dev"
5- Merci à vous !!!!
