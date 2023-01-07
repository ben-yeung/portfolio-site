import React from "react";
import { BiLinkAlt } from "react-icons/bi";

const Spotlight = (props) => {
  return (
    <div className="flex flex-row items-center justify-start w-3/4 mt-5 mx-5 px-4 xl:py-10 lg:mt-10 xl:w-1/2 bg-egg-200 text-white dark:bg-zinc-800 rounded-3xl drop-shadow-xl">
      <img src={props.thumb} alt="project_thumb" className="w-1/2 lg:w-1/3 p-6 md:p-8 2xl:p-10 rounded-xl" />
      <div>
        <a href={props.source} className="flex flex-row items-center text-3xl xl:text-4xl" target="_blank" rel="noreferrer">
          <h1 className="underline">{props.name}</h1>
        </a>
        <p className="hidden md:flex text-xl 2xl:text-2xl mt-4 pr-10">{props.desc}</p>
      </div>
    </div>
  );
};

export default Spotlight;
