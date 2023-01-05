import React from "react";
import { BiLinkAlt } from "react-icons/bi";

const Spotlight = (props) => {
  return (
    <div className="flex flex-row items-center justify-start w-3/4 mt-5 mx-5 px-5 lg:mt-10 lg:mx- xl:mt-10 lg:w-1/2 bg-egg-200 text-white dark:bg-zinc-800 rounded-3xl drop-shadow-xl">
      <img src={props.thumb} alt="project_thumb" className="w-1/2 xl:w-1/3 p-4 xl:p-8 rounded-xl" />
      <div>
        <a
          href={props.source}
          className="flex flex-row items-center text-4xl md:text-5xl lg:text-4xl xl:text-5xl underline"
          target="_blank"
          rel="noreferrer"
        >
          {props.name}
        </a>
        {/* <p className="hidden xl:flex text-xl lg:text-2xl mt-4">{props.desc}</p> */}
      </div>
    </div>
  );
};

export default Spotlight;
