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

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      <motion.nav
        className="fixed top-0 z-50 bg-egg-100 dark:bg-zinc-900 p-4 flex justify-between min-w-full shadow-lg duration-500"
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
        <button className="absolute right-0 top-0 bottom-0 m-auto text-2xl z-40 mr-5 sm:hidden" onClick={toggleMenu}>
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <div>
              <motion.div
                className={"menuContainer"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              ></motion.div>
              <motion.div
                className={"hamburgerMenu"}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                exit={{ x: "100%" }}
              >
                <ul className="w-full ">
                  <li>
                    <button
                      className="menuItem"
                      onClick={() => {
                        window.scroll({ top: 0, behavior: "smooth" });
                        toggleMenu();
                      }}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      className="menuItem"
                      onClick={() => {
                        let about = document.getElementById("about");
                        about && about.scrollIntoView({ behavior: "smooth", block: "start" });
                        toggleMenu();
                      }}
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      className="menuItem"
                      onClick={() => {
                        let projects = document.getElementById("projects");
                        projects && projects.scrollIntoView({ behavior: "smooth", block: "start" });
                        toggleMenu();
                      }}
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      className="menuItem"
                      onClick={() => {
                        let contact = document.getElementById("contact");
                        contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
                        toggleMenu();
                      }}
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <div className="menuItem">
                      <ModeSwitch />
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <ul className="hidden sm:flex items-center mr-2 space-x-6 font-medium text-lg">
          <li>
            <button
              className="navbutton"
              onClick={() => {
                window.scroll({ top: 0, behavior: "smooth" });
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
