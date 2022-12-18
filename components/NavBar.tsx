import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import ssmyLogo from "./assets/SSMYWhite.png";

const NavBar = () => {
  return (
    <nav className="bg-zinc-900 p-4 flex justify-between min-w-max shadow-lg">
      <img className="w-10 object-contain ml-6" src={"/assets/SSMYWhite.png"} />
      <ul className="flex justify-end items-center px-5 space-x-6 font-medium text-lg">
        <li>
          <button className="px-3 py-2 rounded-lg hover:bg-zinc-800">Home</button>
        </li>
        <li>
          <button className="px-3 py-2 rounded-lg hover:bg-zinc-800">About</button>
        </li>
        <li>
          <button className="px-3 py-2 rounded-lg hover:bg-zinc-800">Projects</button>
        </li>
        <li>
          <button className="px-3 py-2 rounded-lg hover:bg-zinc-800">Contact</button>
        </li>
        <li>
          <button className="p-4 rounded-lg bg-zinc-800 switcher">
            <BsFillMoonStarsFill />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
