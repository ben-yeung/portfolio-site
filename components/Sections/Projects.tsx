import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spotlight from "../Widgets/Spotlight";

// Default Fade In for future section elements
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const ProjectSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="projects" className="section">
      <motion.div className="px-6 mt-10 xl:mx-20" variants={fadeUp} initial="hidden" whileInView="show">
        <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center xl:text-left">Projects</h1>
      </motion.div>
      <motion.div
        className="flex flex-col xl:px-20 xl:flex-row w-full justify-center items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
      >
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
      </motion.div>
      <motion.div
        className="flex flex-col xl:px-20 xl:flex-row w-full justify-center items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
      >
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
      </motion.div>
    </section>
  );
};

export default ProjectSection;
