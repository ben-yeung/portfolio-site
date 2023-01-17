/**
 * Some Framer Motion variants used in multiple components.
 */

// Default Fade In for future section elements
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

export { fadeUp };
