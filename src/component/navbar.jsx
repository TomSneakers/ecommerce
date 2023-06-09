import Bouton from "./Bouton";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase.js";
import { signOut } from "firebase/auth";

function NavBar() {
  const user = auth.currentUser;
  console.log(user);
  function disconect() {
    signOut(auth).then(() => alert("Vous etes deconnecter"));
  }

  return (
    <nav className="flex-wrap flex gap-2 bg-[url('https://media.istockphoto.com/id/1200924718/fr/vectoriel/banni%C3%A8re-de-griffonnage-dessin%C3%A9e-%C3%A0-la-main-dartiste-illustrations-d%C3%A9taill%C3%A9es-de-dessin.jpg?s=612x612&w=0&k=20&c=rCqWHjHl7MY0Tder4jLeoqBNbvF8TZTvMMIq8Yp1xvU=')]">
      <NavLink to={"/"}>
        <img
          src="https://images-platform.99static.com//zvgtch1g-AfvYKsLleHclChDLYE=/222x209:1707x1694/fit-in/500x500/projects-files/101/10165/1016553/09deac31-4bdc-4bb6-b6f2-e644b4ff0500.png"
          className="bg-slate-300 rounded-full inline-block border-white border-8 w-20 m-2"
        />
      </NavLink>
      <Bouton path={"Inscription"} label={"Inscription"} />
      <Bouton path={"Panier"} label={"Panier"} />
      <Bouton path={""} label={"Accueil"} />
      <Bouton path={"connexion"} label={"Connexion"} />
      <button
        onClick={disconect}
        className="bg-black rounded-lg p-4 text-white text-1xl uppercase hover:scale-110 m-6 "
      >
        Se deconnecter
      </button>
    </nav>
  );
}

export default NavBar;
