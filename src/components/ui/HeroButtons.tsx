"use client";

import { motion } from "framer-motion";

const HeroButtons = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
    },
    tap: { scale: 0.95, y: 1 },
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center px-4 sm:px-0 w-full max-w-md sm:max-w-none mx-auto">
      <motion.a
        href="#work"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="flex-1 sm:flex-none min-w-[160px] px-6 py-3 bg-cyan-700 text-neutral-100 
        rounded-lg font-semibold shadow-md hover:bg-cyan-500/85 transition-colors duration-300 text-center"
      >
        Explore My Work
      </motion.a>

      {/* <motion.a
        href="/cv.pdf"
        download
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="flex-1 sm:flex-none min-w-[160px] px-6 py-3 bg-white/10 backdrop-blur-md text-cyan-600 rounded-lg 
        font-semibold shadow-md border border-cyan-600 hover:bg-white/15 transition-colors duration-300 text-center"
      >
        Download Resume
      </motion.a> */}
    </div>
  );
};

export default HeroButtons;
