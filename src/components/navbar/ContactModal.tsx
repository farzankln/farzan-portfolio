"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactIcon, AddressIcon } from "@/components/icons/icons";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleCopy = () => {
    const text = `
${ContactIcon.map((item) => item.title).join("\n")}
${AddressIcon.title}
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const commonClasses = "text-white hover:text-cyan-400 transition block mb-2";

  const glassStyle =
    "bg-neutral-800/80 backdrop-blur-4xl border border-white/30 rounded-xl p-6 shadow-xl text-gray-900";

  const renderLinks = () => (
    <>
      {ContactIcon.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={commonClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon} {item.title}
        </a>
      ))}
      <p className="text-gray-200 mb-4 flex items-center gap-2">
        {AddressIcon.icon} {AddressIcon.title}
      </p>
    </>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center md:items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className={`hidden md:flex flex-col ${glassStyle} w-[400px] relative`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <button
              className="absolute top-3 right-3 text-red-500 hover:text-cyan-500 text-xl"
              onClick={onClose}
            >
              ✕
            </button>
            <h2 className="text-2xl text-white font-bold mb-4">Contact Me</h2>
            {renderLinks()}
            <button
              onClick={handleCopy}
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-400 transition"
            >
              Copy Info
            </button>
          </motion.div>

          <motion.div
            className={`md:hidden fixed bottom-0 left-0 right-0 ${glassStyle} rounded-t-2xl`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg text-white font-bold">Contact Me</h2>
              <button
                className="text-gray-700 hover:text-cyan-500 text-xl"
                onClick={onClose}
              >
                ✕
              </button>
            </div>
            {renderLinks()}
            <button
              onClick={handleCopy}
              className="bg-cyan-500 text-white w-full py-2 rounded hover:bg-cyan-400 transition"
            >
              Copy Info
            </button>
          </motion.div>

          <AnimatePresence>
            {copied && (
              <motion.div
                className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-2 rounded shadow-lg z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                Copied to clipboard!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
