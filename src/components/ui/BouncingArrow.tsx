"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BouncingDownArrow } from "../icons/icons";

interface BouncingArrowProps {
  duration?: number;
  className?: string;
}

const BouncingArrow: React.FC<BouncingArrowProps> = ({
  duration = 5,
  className = "",
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="bouncing-arrow"
          initial={{ opacity: 0, y: -25 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            y: 20,
            transition: { duration: 0.5, ease: "easeIn" },
          }}
          className={`absolute bottom-10 text-3xl text-white ${className}`}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {BouncingDownArrow.icon}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BouncingArrow;
