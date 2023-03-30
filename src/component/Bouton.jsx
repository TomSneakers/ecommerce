import { NavLink } from "react-router-dom";

export default function Bouton({ label, path, extraCss }) {
  const defaultCss =
    "bg-black rounded-lg p-4 text-white text-1xl uppercase hover:scale-110 m-6 ";
  return (
    <div>
      <NavLink to={path}>
        <button className={defaultCss + " " + extraCss}>{label}</button>
      </NavLink>
    </div>
  );
}

// <button className="bg-black rounded-lg p-4 text-white text-1xl uppercase hover:scale-110 m-6 ">
