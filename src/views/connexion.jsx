import React from 'react';
import {auth} from "../firebase/firebase.js";
import {signInWithEmailAndPassword} from "firebase/auth";

export function Connexion() {

    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password).then(() => alert("Connexion réussie"))
                                                         .catch((e)=> alert(`Connexion échouée: \n ${e.message}`));
    }

    return (
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <h1 className="text-4xl">Connexion</h1>
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-10 w-1/5">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="border-2 border-black p-2"/>
                </div>
                <div className="flex flex-col gap-10 w-1/5">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" className="border-2 border-black p-2"/>
                </div>
                <button type={"submit"} className="bg-black text-white text-2xl p-4">Se connecter</button>
            </div>
        </form>
    );
}