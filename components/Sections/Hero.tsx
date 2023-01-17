import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineWavingHand } from "react-icons/md";
import Typewriter from "typewriter-effect";

var start = 3000;

// Hero Section Div Wrapper
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

// Hey
const heroHook = {
  hidden: { opacity: 0, x: -500 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

// I'm Ben Yeung
const heroName = {
  hidden: { opacity: 0, x: -800 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

// Hero Picture
const heroPic = {
  hidden: { opacity: 0, y: 150 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      <motion.section
        id="hero"
        className="flex flex-col md:flex-row md:px-10 mt-20 min-h-screen"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex flex-col pt-10 md:pt-10 lg:mt-10 xl:mt-20 pl-10 md:pl-10 xl:ml-12 md:w-2/3 lg:w-auto">
          <motion.h1 className="flex flex-row text-6xl lg:text-7xl md:pt-10 font-josefin font-medium" variants={heroHook}>
            Hey <MdOutlineWavingHand className="mx-5" />
          </motion.h1>

          <motion.h1 className="text-7xl py-4 md:text-8xl xl:text-9xl xl:pt-6 font-josefin font-bold" variants={heroName}>
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
          variants={heroPic}
          initial="hidden"
          animate="show"
        >
          <img className="rounded-full w-2/3 sm:p-8 lg:p-12 md:w-full max-w-2xl" src={"/assets/benBERK.png"} />
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default HeroSection;
