import React from "react";

interface SpotlightProps {
  thumb: string;
  source: string;
  name: string;
  desc: string;
  showcase: string;
  awards?: Array<string>;
  stack: Array<string>;
}

const Spotlight: React.FC<SpotlightProps> = (props: SpotlightProps) => {
  return (
    <div className="flex flex-row items-center justify-start mt-5 mx-6 xl:mx-20 px-4 xl:py-10 xl:px-10 lg:mt-10 bg-egg-200 text-white dark:bg-zinc-800 duration-500 rounded-3xl drop-shadow-xl">
      <img src={props.thumb} alt="project_thumb" className="w-1/2 lg:w-1/4 p-6 md:p-8 2xl:p-10 rounded-xl" />
      <div className="w-1/2">
        <a href={props.source} className="flex flex-row items-center text-3xl xl:text-4xl" target="_blank" rel="noreferrer">
          <h1 className="underline">{props.name}</h1>
        </a>
        <div className="hidden md:flex flex-col text-xl 2xl:text-2xl mt-4 pr-10">
          {props.awards ? <div className="mb-3">{props.awards.join(" | ")}</div> : null}
          <div className="mb-3">{props.stack.join(" | ")}</div>
          {props.desc}
        </div>
      </div>
      <img src={props.showcase} className="hidden lg:flex w-1/4 rounded-2xl mr-5 my-10" alt="" />
    </div>
  );
};

export default Spotlight;
