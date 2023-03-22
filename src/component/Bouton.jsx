import { NavLink } from "react-router-dom";

export default function Bouton({ label, path }) {
  return (
    <div>
      <NavLink to={path}>
        <button className="hover:scale-110 bg-black rounded-lg p-4 text-white text-1xl uppercase m-6">
          {label}
        </button>
      </NavLink>
    </div>
  );
}
