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
    // logique de validation

    register(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
