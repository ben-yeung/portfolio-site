import Head from "next/head";
import { AnimatePresence } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/Sections/Hero";
import AboutSection from "../components/Sections/About";
import ProjectSection from "../components/Sections/Projects";
import ContactSection from "../components/Sections/Contact";

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
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </AnimatePresence>
  );
}
