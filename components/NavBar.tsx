import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModeSwitch from "./ModeSwitch";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const { systemTheme, theme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const revealMenu = () => {
    setOpen(!isOpen);
  };

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
        <button className="flex justify-end items-center text-2xl mr-2 sm:hidden" onClick={revealMenu}>
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>

        <ul className="hidden sm:flex items-center mr-2 space-x-6 font-medium text-lg">
          <li>
            <button
              className="navbutton"
              onClick={() => {
                let home = document.getElementById("hero");
                home && home.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="navbutton"
              onClick={() => {
                let about = document.getElementById("about");
                about && about.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="navbutton"
              onClick={() => {
                let projects = document.getElementById("projects");
                projects && projects.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="navbutton"
              onClick={() => {
                let contact = document.getElementById("contact");
                contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Contact
            </button>
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
