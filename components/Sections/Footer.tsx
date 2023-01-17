import React from "react";
import SpotifyWidget from "../Widgets/SpotifyWidget";
import { BsFillSuitHeartFill, BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-4 bg-egg-100 rounded-lg shadow md:px-6 md:py-6 dark:bg-zinc-900 duration-500">
      <div className="flex justify-center items-center w-full">
        <ul className="flex flex-row justify-center items-center mx-auto mb-6 text-xl text-egg-900 sm:mb-0 dark:text-gray-400">
          <li className="mx-3 flex flex-grow-0 items-center justify-center">
            <a
              href="https://www.linkedin.com/in/benjaminjyeung/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-egg-200 dark:hover:text-white"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="mx-3 flex flex-grow-0 items-center justify-center">
            <a
              href="https://github.com/ben-yeung"
              target="_blank"
              rel="noreferrer"
              className="hover:text-egg-200 dark:hover:text-white"
            >
              <BsGithub />
            </a>
          </li>
          <li className="mx-3 flex flex-grow-0 items-center justify-center">
            <a
              href="https://twitter.com/hypeboosted"
              target="_blank"
              rel="noreferrer"
              className="hover:text-egg-200 dark:hover:text-white"
            >
              <BsTwitter />
            </a>
          </li>
          <li className="hidden sm:flex flex-grow-0 ml-auto text-sm">
            <SpotifyWidget />
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-full sm:hidden ">
        <SpotifyWidget />
      </div>
      <hr className="my-3 border-egg-200 sm:mx-auto dark:border-zinc-700 lg:my-6" />
      <span className="flex mx-auto items-center justify-center text-sm text-egg-900 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} Made with <BsFillSuitHeartFill className="mx-2 text-rose-600" /> by Ben Yeung.
      </span>
    </footer>
  );
};

export default Footer;
