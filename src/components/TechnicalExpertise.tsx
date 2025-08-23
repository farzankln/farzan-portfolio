"use client";

import { motion } from "framer-motion";
import { TechItem } from "@/types/GlobalsTypes";

const TechnicalExpertise = ({
  techData,
}: {
  techData: { category: string; items: TechItem[] }[];
}) => {
  return (
    <section className="container mx-auto py-12 max-w-7xl px-4">
      <motion.h3
        className="text-3xl font-semibold mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Technical Expertise
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techData.map((categoryData, i) => (
          <motion.div
            key={categoryData.category}
            className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:ring-blue-400"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 text-white">
              {categoryData.category}
            </h4>
            <ul className="space-y-4">
              {categoryData.items.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-white transition-all duration-300 transform hover:scale-105 hover:text-blue-400 focus:outline-none focus:ring-0"
                    title={item.title}
                  >
                    {item.icon && (
                      <span className="text-lg text-white transition-colors duration-300 group-hover:text-blue-400">
                        {item.icon}
                      </span>
                    )}
                    <span className="text-base font-medium text-white transition-colors duration-300 group-hover:text-blue-400">
                      {item.title}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalExpertise;
