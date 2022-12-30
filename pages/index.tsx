import Head from "next/head";
import Typewriter from "typewriter-effect";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { MdOutlineWavingHand } from "react-icons/md";
import { SiReact, SiMongodb, SiNodedotjs, SiJavascript, SiTypescript, SiSelenium, SiTailwindcss, SiJava } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

var start = 3000;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
    },
  },
};

// Hey
const first = {
  hidden: { opacity: 0, x: -500 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

// I'm Ben Yeung
const second = {
  hidden: { opacity: 0, x: -1000 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <AnimatePresence>
      <Head>
        <title>Ben Yeung - Home</title>
        <meta name="description" content="Ben Yeung's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <NavBar />
        <section id="hero" className="flex flex-col md:flex-row md:px-10 mt-20 min-h-screen">
          <motion.div
            className="flex flex-col pt-10 md:pt-10 xl:mt-20 pl-6 md:pl-10 xl:pl-15 xl:ml-10 md:w-2/3 lg:w-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className="flex flex-row text-6xl lg:text-7xl md:pt-10 font-josefin font-medium" variants={first}>
              Hey <MdOutlineWavingHand className="mx-5" />
            </motion.h1>

            <motion.h1 className="text-7xl py-4 md:text-8xl xl:text-9xl xl:pt-6 font-josefin font-bold" variants={second}>
              I&apos;m Ben Yeung.
            </motion.h1>

            <motion.div
              className="text-4xl py-2 md:text-5xl xl:text-7xl font-monst font-light text-zinc-600 dark:text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(start)
                    .typeString("a developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString("a foodie")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString("an nft trader")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString("a lofi enjoyer")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString("a keeb enthusiast")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString("a matcha lover")
                    .pauseFor(1000)
                    .deleteAll()
                    .callFunction(() => {
                      start = 1000;
                    })
                    .start();
                }}
                options={{
                  delay: 70,
                  // autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-grow justify-center items-start pt-10 md:pt-10 xl:pt-20 md:mr-10 xl:mr-0"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img className="rounded-full w-2/3 sm:p-10 md:w-full max-w-2xl" src={"/assets/benBERK.png"} />
          </motion.div>
        </section>

        <section id="about" className="flex flex-col section min-h-screen">
          <div className="px-6 pt-10 lg:pl-20">
            <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center lg:text-left">About Me</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center lg:flex-row lg:mt-20 lg:px-10">
            <div className="flex justify-center">
              <img className="rounded-full w-2/3 my-10 lg:my-0 lg:w-full max-w-lg rotate-6" src={"/assets/benSSMY.png"} />
            </div>
            <div
              className="flex flex-col justify-center items-center lg:items-start w-full lg:w-2/3 px-12 md:px-8 lg:mt-10 md:ml-10
                         text-center text-xl md:text-2xl lg:text-2xl xl:text-3xl lg:text-left max-w-3xl lg:max-w-4xl font-monst"
            >
              <p>Hello! I am a full stack web developer building streamline user experiences with an interest in Web3.</p>
              <p className="mt-4">
                I recently graduated from UC Berkeley (Go Bears! <img className="inline w-6 lg:w-10" src={"/assets/bear.png"} />) with
                a degree in CS.
              </p>
              <p className="mt-4 max-w-3xl">I love building mechanical keyboards and smaller form factor PCs whenever I can.</p>
              <p>(a dangerous combo for the wallet)</p>
              <p className="mt-4 text-lg md:text-1xl lg:text-2xl font-light">[Daily Driver: White/Chroma QK65 + Gateron Oil Kings]</p>
              <h1 className="text-2xl mt-10">Current Stack</h1>
              <div className="flex flex-col xl:flex-row items-center justify-center mt-5 text-4xl">
                <div className="flex flex-row">
                  <div className="ml-4 mr-4 xl:ml-0 switcher rounded-xl p-2">
                    <SiReact />
                  </div>
                  <div className="mx-4 switcher rounded-xl p-2">
                    <TbBrandNextjs />
                  </div>
                  <div className="mx-4 switcher rounded-xl p-2">
                    <SiMongodb />
                  </div>
                  <div className="mx-4 switcher rounded-xl p-2">
                    <SiNodedotjs />
                  </div>
                </div>
                <div className="flex flex-row mt-5 xl:mt-0">
                  <div className="mx-4 switcher rounded-xl p-2">
                    <SiTailwindcss />
                  </div>
                  <div className="mx-4 switcher rounded-xl p-2">
                    <SiJavascript />
                  </div>
                  <div className="mx-4 switcher rounded-xl p-2">
                    <SiTypescript />
                  </div>
                  <div className="mx-4 switcher rounded-xl p-2">
                    <SiSelenium />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="flex flex-col section min-h-screen">
          <div className="px-6 pt-10 lg:pl-20">
            <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center lg:text-left">Projects</h1>
          </div>
        </section>

        <section id="contact" className="flex flex-col section min-h-screen">
          <div className="px-6 pt-10 lg:pl-20">
            <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center lg:text-left">Contact Me</h1>
          </div>
        </section>

        <Footer />
      </main>
    </AnimatePresence>
  );
}
