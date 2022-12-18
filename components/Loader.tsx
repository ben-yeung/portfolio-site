import React from "react";
import { motion } from "framer-motion";

// Settings for animating sub-trees
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

// Initial state of animated elements
const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opactiy: 0,
    y: -200,
    transition: {
      eaes: "easeInOut",
      duration: 0.8,
    },
  },
};
