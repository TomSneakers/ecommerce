import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Fonction qui prend en parametre login mot de passe
  // et qui utilise le sdk firebase pour creer un compte
  const register = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitting Registration Form with, Email: ${email}, Password: ${password}`
    );

    register(email, password);
  };

  return (
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <h1 className="text-4xl">Inscription</h1>
        <div className="flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-10 w-1/5">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="border-2 border-black p-2" onChange={handleEmailChange}/>
            </div>
            <div className="flex flex-col gap-10 w-1/5">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" className="border-2 border-black p-2" onChange={handlePasswordChange}/>
            </div>
            <button type={"submit"} className="bg-black text-white text-2xl p-4">S'inscrire</button>
        </div>
    </form>
  );
}

export default RegistrationForm;
