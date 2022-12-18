import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import { MdOutlineWavingHand } from "react-icons/md";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Yeung - Home</title>
        <meta name="description" content="Ben Yeung's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-zinc-900 min-h-screen text-white">
        <NavBar />

        <section className="flex flex-col md:flex-row sm:py-10 min-h-screen">
          <div className="mt-10 pl-6 sm:pl-10 md:w-2/3 lg:w-auto">
            <h1 className="text-6xl lg:text-7xl sm:pt-10 font-josefin font-medium flex">
              Hey <MdOutlineWavingHand className="mx-5" />
            </h1>
            <h1 className="text-7xl py-4 md:text-8xl lg:text-9xl font-josefin font-bold transition-transform">I&apos;m Ben Yeung.</h1>

            <div className="text-5xl py-2 lg:text-7xl font-monst font-light">
              <Typewriter
                options={{
                  strings: ["developer", "nft jpeg trader", "foodie", "lofi enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="flex flex-grow justify-center items-start lg:mr-20 lg:mt-10">
            <img className="rounded-full w-2/3 p-10 lg:p-5 md:w-full max-w-xl" src={"/assets/boki.png"} />
          </div>
        </section>

        <section className="flex mt-20 p-10 min-h-screen">
          <div>
            <h1 className="text-7xl lg:text-8xl sm:pt-10 font-josefin font-medium flex">About Me</h1>
          </div>
        </section>
      </main>
    </>
  );
}
