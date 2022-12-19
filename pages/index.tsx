import Head from "next/head";
import Typewriter from "typewriter-effect";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { MdOutlineWavingHand } from "react-icons/md";
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
      <main className="bg-zinc-900 min-h-screen text-white">
        <NavBar />
        <section className="flex flex-col mt-20 md:flex-row sm:p-10 min-h-screen">
          <motion.div className="mt-10 pl-6 lg:pl-20 lg:ml-10 md:w-2/3 lg:w-auto" variants={container} initial="hidden" animate="show">
            <motion.h1 className="flex flex-row text-6xl lg:text-7xl md:pt-10 font-josefin font-medium" variants={first}>
              Hey <MdOutlineWavingHand className="mx-5" />
            </motion.h1>

            <motion.h1 className="text-7xl py-4 md:text-8xl xl:text-9xl font-josefin font-bold" variants={second}>
              I&apos;m Ben Yeung.
            </motion.h1>

            <motion.div
              className="text-5xl py-2 lg:text-7xl font-monst font-light"
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
            className="flex flex-grow justify-center items-start mt-5 sm:mt-5"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img className="rounded-full w-2/3 p-5 md:p-10 md:w-full max-w-2xl" src={"/assets/benBERK.png"} />
          </motion.div>
        </section>

        <section className="flex mt-20 p-10 min-h-screen">
          <div className="pl-6 lg:pl-20">
            <h1 className="text-7xl lg:text-8xl sm:pt-20 font-josefin font-medium flex"></h1>
          </div>
        </section>

        <Footer />
      </main>
    </AnimatePresence>
  );
}
