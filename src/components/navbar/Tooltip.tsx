"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TooltipProps } from "@/types/GlobalsTypes";

const Tooltip = ({ text, isVisible }: TooltipProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.span
          key="tooltip"
          initial={{ opacity: 0, y: -10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 text-white text-sm sm:text-base bg-neutral-800 backdrop-blur-md px-3 py-1 
          rounded-xl shadow-md whitespace-nowrap"
        >
          {text}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
