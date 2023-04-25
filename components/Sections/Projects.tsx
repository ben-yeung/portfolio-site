import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spotlight from "../Widgets/Spotlight";
import { fadeUp } from "../FramerDefaults";

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
      <Spotlight
        name="nft-vision"
        desc="Bot to scrape/monitor/query collections on NFT Marketplaces for floor prices, owner ratio, royalties, etc... with an in-house metadata rarity parser using trait normalization."
        thumb="/assets/logos/nftvision.png"
        source="https://github.com/ben-yeung/nft-vision-discord"
        showcase="/assets/examples/nftvision_example_1.png"
        stack={["Node.js", "Discord.js"]}
      />
      <Spotlight
        name="novusys wallet"
        desc="A web3 wallet provider built on ERC-4337 using social sign-in and recovery. MV3 Chrome Extension + Launch Landing Site"
        thumb="/assets/logos/ethglobal.png"
        source="https://github.com/novusys/novusys"
        showcase="/assets/examples/novusys_wallet_1.png"
        stack={["MV3", "React", "TypeScript", "Next.js", "Node.js", "Solidity"]}
        awards={["🥇 Scaling ETH 2023 Finalist", "🥈 Gnosis Chain"]}
      />
      <Spotlight
        name="novusys paymaster"
        desc="A React widget with a custom ERC-4337 paymaster allowing users to pay for entire transactions using Stripe or ERC-20 tokens."
        thumb="/assets/logos/ethtokyo.png"
        source="https://github.com/novusys/novusys-paymaster"
        showcase="/assets/examples/novusys_paymaster_1.png"
        stack={["React", "TypeScript", "Next.js", "Node.js", "Solidity"]}
        awards={["🥇 ETHGlobal Tokyo 2023 Finalist"]}
      />
      <Spotlight
        name="ben-bot"
        desc="Fully interactive Discord bot built on discord.js v13 with integrations including GCal, Twitch, and other RESTful APIs."
        thumb="/assets/logos/benb0t.png"
        source="https://github.com/ben-yeung/ben-b0t"
        showcase="/assets/examples/benb0t_example_1.png"
        stack={["Node.js", "Discord.js"]}
      />
      <Spotlight
        name="stock-Xtension"
        desc="A Chrome extension that displays StockX resell details directly from a given shoe's product page. View highest bid, lowest ask, and last sale."
        thumb="/assets/logos/stockxtension.png"
        source="https://github.com/ben-yeung/stock-Xtension"
        showcase="/assets/examples/stockxtension_example_1.png"
        stack={["Node.js", "Chrome Manifest V3"]}
      />
    </section>
  );
};

export default ProjectSection;
