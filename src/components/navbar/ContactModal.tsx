"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ContactIcon,
  AddressIcon,
  MailIcon,
  CopyIcon,
} from "@/components/icons/icons";

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

  const socialIconBg = {
    c1: "bg-cyan-500/20 text-cyan-400",
    c2: "bg-red-500/20 text-red-400",
    c3: "bg-gray-500/20 text-gray-300",
    c4: "bg-blue-500/20 text-blue-400",
    c5: "bg-pink-500/20 text-pink-400",
  };

  const renderLinks = () => (
    <div className="flex flex-col gap-3">
      {ContactIcon.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-5 py-3 rounded-xl
            bg-white/5 border border-white/10 hover:bg-white/10
            hover:border-white/20 transition-all duration-300
            hover:shadow-lg hover:shadow-cyan-500/10
            hover:translate-x-1"
        >
          <span
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg
            ${socialIconBg[item.id as keyof typeof socialIconBg] || "bg-white/10 text-white"}
            transition-colors duration-300`}
          >
            {item.icon}
          </span>
          <span className="text-neutral-300 group-hover:text-white transition-colors duration-300 font-medium">
            {item.title}
          </span>
          <span className="ml-auto text-neutral-600 group-hover:text-cyan-400 transition-colors duration-300 opacity-0 group-hover:opacity-100">
            →
          </span>
        </a>
      ))}
      <div className="flex items-center gap-4 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
        <span className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-orange-500/20 text-orange-400">
          {AddressIcon.icon}
        </span>
        <span className="text-neutral-300 font-medium">
          {AddressIcon.title}
        </span>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="hidden md:flex flex-col relative w-[420px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl border border-white/10 shadow-2xl shadow-black/50" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

            <div className="relative flex flex-col p-6">
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10
                  flex items-center justify-center text-neutral-400 hover:text-white
                  transition-all duration-300 text-sm"
                onClick={onClose}
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-white/20 text-3xl text-white">
                  {MailIcon.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Contact Me</h2>
                  <p className="text-sm text-neutral-400 mt-0.5">
                    Get in touch
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

              {renderLinks()}

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-5 mb-4" />

              <button
                onClick={handleCopy}
                className="relative w-full cursor-pointer py-3 rounded-xl bg-white/10 backdrop-blur-md text-cyan-600 font-semibold shadow-md border border-cyan-600 hover:bg-white/15 transition-colors duration-300 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  {CopyIcon.icon}
                  Copy Info
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            className="md:hidden fixed bottom-0 left-0 right-0 flex flex-col overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 rounded-t-2xl border border-white/10 shadow-2xl shadow-black/50" />
            <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

            <div className="relative flex flex-col p-5 pb-8">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-white/20 text-3xl text-white">
                    {MailIcon.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Contact Me</h2>
                    <p className="text-xs text-neutral-400">Get in touch</p>
                  </div>
                </div>
                <button
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10
                    flex items-center justify-center text-neutral-400 hover:text-white
                    transition-all duration-300"
                  onClick={onClose}
                >
                  ✕
                </button>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

              {renderLinks()}

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-4 mb-3" />

              <button
                onClick={handleCopy}
                className="relative cursor-pointer w-full py-3 rounded-xl bg-white/10 backdrop-blur-md text-cyan-600 font-semibold shadow-md border border-cyan-600 hover:bg-white/15 transition-colors duration-300 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  {CopyIcon.icon}
                  Copy Info
                </span>
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {copied && (
              <motion.div
                className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-cyan-800 text-white border border-cyan-600 px-5 py-2.5 rounded-xl text-sm font-medium z-50 flex items-center gap-2"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
