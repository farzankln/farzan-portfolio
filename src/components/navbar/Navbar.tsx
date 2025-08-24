"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import ContactModal from "./ContactModal";
import { Nav } from "../icons/icons";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleTap = (name: string) => {
    if (name === "Phone") {
      setShowModal(true);
    }
    setActive(name);
  };

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto flex justify-center bg-neutral-800 rounded-full py-2 px-4 gap-4 shadow-lg">
          {Nav.map((item) => (
            <motion.div
              key={item.name}
              className="relative flex flex-col items-center "
              onMouseEnter={() => setActive(item.name)}
              onMouseLeave={() => setActive(null)}
              onClick={() => handleTap(item.name)}
            >
              <motion.a
                href={item.id}
                className="relative w-12 h-12 flex items-center justify-center hover:border-2 text-white 
                text-2xl rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.a>
              <Tooltip text={item.name} isVisible={active === item.name} />
            </motion.div>
          ))}
        </div>
      </motion.nav>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
