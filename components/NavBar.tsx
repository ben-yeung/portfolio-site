import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import ModeSwitch from "./ModeSwitch";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      <motion.nav
        className="fixed top-0 z-50 bg-white dark:bg-zinc-900 p-4 flex justify-between min-w-full shadow-lg "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="https://ssmytech.com" className="flex items-center" target="_blank" rel="noreferrer">
          {currTheme === "dark" ? (
            <img className="w-10 object-contain ml-2" src={"/assets/SSMYWhite.png"} />
          ) : (
            <img className="w-10 object-contain ml-2" src={"/assets/SSMYBlack.png"} />
          )}
        </a>
        <button className="flex justify-end items-center dark:text-white text-2xl mr-2 sm:hidden">
          <GiHamburgerMenu />
        </button>
        <ul className="hidden sm:flex items-center mr-2 space-x-6 font-medium text-lg">
          <li>
            <button className="navbutton">Home</button>
          </li>
          <li>
            <button className="navbutton">About</button>
          </li>
          <li>
            <button className="navbutton">Projects</button>
          </li>
          <li>
            <button className="navbutton">Contact</button>
          </li>
          <li>
            <ModeSwitch />
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default NavBar;
