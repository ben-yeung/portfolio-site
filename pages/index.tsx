import Head from "next/head";
import Typewriter from "typewriter-effect";
import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Spotlight from "../components/Spotlight";

import { MdOutlineWavingHand } from "react-icons/md";
import { SiReact, SiMongodb, SiNodedotjs, SiJavascript, SiTypescript, SiSelenium, SiTailwindcss, SiJava } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

var start = 3000;

// Home Section Div Wrapper
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
const first = {
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
const second = {
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
const third = {
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

export default function Home() {
  const [stackName, setStackName] = useState("");
  const [submitStatus, setSubmitStatus] = useState("Submit");

  function stackHover(name: string) {
    setStackName(name);
  }

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e.target.email.value);
    if (e.target.name.value == "" || e.target.email.value == "" || e.target.message.value == "") {
      alert("Field(s) cannot be empty. Please double check!");
      return;
    }

    emailjs.sendForm("service_ip5uu5l", "template_3yohaoz", e.currentTarget, `g0K5rR910iY-3ohtl`).then(
      (result) => {
        setSubmitStatus("Sent!");
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

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
        <motion.section
          id="hero"
          className="flex flex-col md:flex-row md:px-10 mt-20 min-h-screen"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex flex-col pt-10 md:pt-10 lg:mt-10 xl:mt-20 pl-10 md:pl-10 xl:pl-16 xl:ml-10 md:w-2/3 lg:w-auto">
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
            variants={third}
            initial="hidden"
            animate="show"
          >
            <img className="rounded-full w-2/3 sm:p-8 lg:p-12 md:w-full max-w-2xl" src={"/assets/benBERK.png"} />
          </motion.div>
        </motion.section>

        <section id="about" className="section">
          <div className="px-6 mt-10 h-full lg:pl-20 xl:mt-20">
            <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center lg:text-left">About Me</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center lg:flex-row lg:mt-10 lg:px-20 xl:mt-20">
            <div className="flex justify-center">
              <img className="rounded-full w-2/3 my-10 lg:my-0 lg:w-full max-w-lg rotate-6" src={"/assets/benSSMY.png"} />
            </div>
            <div
              className="flex flex-col justify-center items-center lg:items-start w-full px-10 lg:px-0 lg:w-2/3 lg:pl-10 xl:mt-10 lg:ml-10
                         text-center text-xl md:text-2xl lg:text-2xl xl:text-3xl lg:text-left max-w-3xl lg:max-w-4xl font-monst"
            >
              <p>Hello! I am a full stack web developer building streamline user experiences with an interest in Web3.</p>
              <p className="mt-4">
                I recently graduated from UC Berkeley (Go Bears! <img className="inline w-6 lg:w-10" src={"/assets/bear.png"} />) with
                a degree in CS.
              </p>
              <p className="mt-4 max-w-3xl">I love building mechanical keyboards and smaller form factor PCs whenever I can.</p>
              <p className="text-lg md:text-xl">(a dangerous combo for my wallet)</p>
              <p className="mt-4 text-lg md:text-1xl lg:text-2xl font-light">
                Daily Driver:{" "}
                <a href="https://www.youtube.com/watch?v=HIblNCmBgrs" target="_blank" rel="noreferrer" className="underline">
                  White/Chroma QK65 + Gateron Oil Kings
                </a>
              </p>

              <div className="mt-6 text-lg md:text-1xl lg:text-2xl font-semibold">Current Stack</div>
              <div className="flex flex-col xl:flex-row items-center justify-center mt-4 text-4xl">
                <div className="flex flex-row">
                  <div
                    className="ml-4 mr-4 md:ml-0 switcher rounded-xl p-2 hover:text-stack-react"
                    onMouseEnter={() => stackHover("React")}
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
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="px-6 mt-10 lg:pl-20">
            <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center lg:text-left">Projects</h1>
          </div>
          <div className="flex flex-col xl:px-20 xl:mt-5 xl:flex-row w-full justify-center items-center">
            <Spotlight
              name="nft-vision"
              desc="Bot to scrape/monitor/query collections on NFT Marketplaces for floor prices, owner ratio, royalties, etc..."
              thumb="/assets/nftvision.png"
              source="https://github.com/ben-yeung/nft-vision-discord"
            />
            <Spotlight
              name="ben-bot"
              desc="Fully interactive Discord bot built on discord.js v13 with integrations including GCal, Twitch, and other RESTful APIs."
              thumb="/assets/benb0t.png"
              source="https://github.com/ben-yeung/ben-b0t"
            />
          </div>
          <div className="flex flex-col xl:px-20 xl:flex-row w-full justify-center items-center">
            <Spotlight
              name="mirror-mirror"
              desc="A Discord bot that gives channel scraping a convenient interface for managing mirrors."
              thumb="/assets/mirrormirror.png"
              source="https://github.com/ben-yeung/mirror-mirror-public"
            />
            <Spotlight
              name="stock-Xtension"
              desc="A Chrome extension that displays StockX resell details directly from a given shoe's product page. View highest bid, lowest ask, and last sale."
              thumb="/assets/stockxtension.png"
              source="https://github.com/ben-yeung/stock-Xtension"
            />
          </div>
        </section>

        <section id="contact" className="flex flex-col pt-20 justify-center items-center">
          <div className="px-2 mt-10 lg:w-2/3">
            <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center lg:text-left">Let&apos;s Chat!</h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col w-full justify-center items-center px-10 md:px-12 lg:px-0 h-full mt-5 mb-20"
            >
              <div className="flex flex-row w-full">
                <input type="name" name="name" className="inputfield mr-5 lg:mr-10" placeholder="Name" />
                <input type="email" name="email" className="inputfield ml-4 lg:ml-10" placeholder="Email" />
              </div>
              <textarea name="message" className="inputmessage" cols={30} rows={8}></textarea>
              <button className="submit" type="submit">
                {submitStatus}
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </AnimatePresence>
  );
}
