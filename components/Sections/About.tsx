import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../FramerDefaults";

import { SiReact, SiMongodb, SiNodedotjs, SiJavascript, SiTypescript, SiSelenium, SiTailwindcss, SiJava } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const AboutSection = () => {
  const [mounted, setMounted] = useState(false);
  // About section stack elements name on hover
  const [stackName, setStackName] = useState("");

  function stackHover(name: string) {
    setStackName(name);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="section">
      <motion.div className="px-6 mt-10 h-full lg:mx-20 xl:mt-20" variants={fadeUp} initial="hidden" whileInView="show">
        <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center lg:text-left">About Me</h1>
      </motion.div>
      <div className="flex flex-col items-center lg:items-start justify-center lg:flex-row lg:mt-10 lg:px-20 xl:mt-20">
        <motion.div className="flex justify-center" variants={fadeUp} initial="hidden" whileInView="show">
          <img className="rounded-full w-2/3 my-10 lg:my-0 lg:w-full max-w-lg rotate-6" src={"/assets/benSSMY.png"} />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center lg:items-start w-full px-10 lg:px-0 lg:w-2/3 lg:pl-10 xl:mt-10 lg:ml-10
                   text-center text-xl md:text-2xl lg:text-2xl xl:text-3xl lg:text-left max-w-3xl lg:max-w-4xl font-monst"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <p>Hello! I am a full stack web developer building streamline user experiences with an interest in Web3.</p>
          <p className="mt-4">
            I recently graduated from UC Berkeley (Go Bears! <img className="inline w-6 lg:w-10" src={"/assets/bear.png"} />) with a degree in CS.
          </p>
          <p className="mt-4 max-w-3xl">I love building mechanical keyboards and smaller form factor PCs whenever I can.</p>
          <p className="text-lg md:text-xl">(a dangerous combo for my wallet)</p>
          <p className="mt-4 text-lg md:text-1xl lg:text-2xl font-light">
            Daily Driver:{" "}
            <a href="https://www.youtube.com/watch?v=SQCjNIBbNfs" target="_blank" rel="noreferrer" className="underline">
              Mode Sonnet w/ Gazzew Boba U4Tx
            </a>
          </p>

          <div className="mt-6 text-lg md:text-1xl lg:text-2xl font-semibold">Current Stack</div>
          <div className="flex flex-col xl:flex-row items-center justify-center mt-4 text-4xl">
            <div className="flex flex-row">
              <div
                className="ml-4 mr-4 md:ml-0 switcher rounded-xl p-2 hover:text-stack-react"
                onMouseEnter={() => stackHover("React.js")}
                onMouseLeave={() => stackHover("")}
              >
                <SiReact />
              </div>
              <div
                className="mx-4 switcher rounded-xl p-2 hover:text-stack-next"
                onMouseEnter={() => stackHover("Next.js")}
                onMouseLeave={() => stackHover("")}
              >
                <TbBrandNextjs />
              </div>
              <div
                className="mx-4 switcher rounded-xl p-2 hover:text-stack-node"
                onMouseEnter={() => stackHover("Node.js")}
                onMouseLeave={() => stackHover("")}
              >
                <SiNodedotjs />
              </div>
              <div
                className="mx-4 switcher rounded-xl p-2 hover:text-stack-tail"
                onMouseEnter={() => stackHover("Tailwind CSS")}
                onMouseLeave={() => stackHover("")}
              >
                <SiTailwindcss />
              </div>
            </div>
            <div className="flex flex-row mt-5 xl:mt-0">
              <div
                className="ml-4 mr-4 md:ml-0 xl:ml-4 switcher rounded-xl p-2 hover:text-stack-mongo"
                onMouseEnter={() => stackHover("MongoDB")}
                onMouseLeave={() => stackHover("")}
              >
                <SiMongodb />
              </div>
              <div
                className="mx-4 switcher rounded-xl p-2 hover:text-stack-js"
                onMouseEnter={() => stackHover("JavaScript")}
                onMouseLeave={() => stackHover("")}
              >
                <SiJavascript />
              </div>
              <div
                className="mx-4 switcher rounded-xl p-2 hover:text-stack-ts"
                onMouseEnter={() => stackHover("TypeScript")}
                onMouseLeave={() => stackHover("")}
              >
                <SiTypescript />
              </div>
              <div
                className="mx-4 switcher rounded-xl p-2 hover:text-stack-se"
                onMouseEnter={() => stackHover("Selenium")}
                onMouseLeave={() => stackHover("")}
              >
                <SiSelenium />
              </div>
            </div>
          </div>
          <div className="pt-5 h-5">{stackName}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
