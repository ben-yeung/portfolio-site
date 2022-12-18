import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-zinc-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex mx-auto items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Icon
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Icon
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Icon
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Icon
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
      <span className="flex mx-auto items-center justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} Made with <BsFillSuitHeartFill className="mx-2" /> by Ben Yeung . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
