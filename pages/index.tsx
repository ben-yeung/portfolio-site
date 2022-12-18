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
      <main className="bg-zinc-900 min-h-screen">
        <NavBar />

        <section className="flex flex-col sm:flex-row p-10 ">
          <div>
            <h1 className="text-6xl lg:text-7xl sm:pt-10 font-josefin font-medium flex">
              Hey <MdOutlineWavingHand className="mx-5" />
            </h1>
            <h1 className="text-8xl py-4 xl:text-9xl font-josefin font-bold transition-transform">I&apos;m Ben Yeung.</h1>

            <div className="text-5xl py-2 xl:text-7xl font-monst font-light">
              <Typewriter
                options={{
                  strings: ["developer", "nft jpeg trader", "foodie", "lofi enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="flex flex-grow justify-center items-center aspect-w-16 aspect-h-9">
            <img className="rounded-full p-10 w-full max-w-2xl" src={"/assets/boki.png"} />
          </div>
        </section>
      </main>
    </>
  );
}
