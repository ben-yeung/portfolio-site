import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import ssmyLogo from "./assets/SSMYWhite.png";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  return (
    <AnimatePresence>
      <motion.nav
        className="fixed top-0 z-50 bg-zinc-900 p-4 flex justify-between min-w-full shadow-lg "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="https://ssmytech.com" className="flex items-center" target="_blank" rel="noreferrer">
          <img className="w-10 object-contain ml-2" src={"/assets/SSMYWhite.png"} />
        </a>
        <button className="flex justify-end items-center text-white text-2xl mr-2 sm:hidden">
          <GiHamburgerMenu />
        </button>
        <ul className="hidden sm:flex justify-end items-center mr-2 space-x-6 font-medium text-lg">
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
      </motion.nav>
    </AnimatePresence>
  );
};

export default NavBar;
