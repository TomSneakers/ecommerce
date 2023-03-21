function NavBar() {
  return (
    <nav className="flex-wrap gap-2 bg-cyan-300">
      <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">
        <img
          src="https://images-platform.99static.com//zvgtch1g-AfvYKsLleHclChDLYE=/222x209:1707x1694/fit-in/500x500/projects-files/101/10165/1016553/09deac31-4bdc-4bb6-b6f2-e644b4ff0500.png"
          className="bg-slate-300 rounded-full inline-block border-white border-8 w-20 m-2"
        />
      </a>
      <button className="m-2 hover:scale-110 bg-black rounded-lg p-4 text-white text-1xl uppercase ">
        Connexion
      </button>
      <button className="bg-black rounded-lg p-4 text-white text-1xl uppercase m-2 hover:scale-110">
        Inscription
      </button>
    </nav>
  );
}
export default NavBar;
