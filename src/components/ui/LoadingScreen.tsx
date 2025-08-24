"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Trefoil } from "ldrs/react";
import "ldrs/react/Trefoil.css";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && showLoader && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onAnimationComplete={() => {
            if (!isLoading) setShowLoader(false);
          }}
        >
          <Trefoil
            size="64"
            stroke="5"
            strokeLength="0.15"
            bgOpacity="0.1"
            speed="1.4"
            color="#53eafd"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
