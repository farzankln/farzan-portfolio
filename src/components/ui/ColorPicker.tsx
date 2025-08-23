"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Color = {
  name: string;
  value: string;
};

type ColorCollection = {
  collectionName: string;
  colors: Color[];
};

export const colorCollections = [
  {
    collectionName: "Custom Cyan",
    colors: [
      { name: "cyan-300", value: "#53eafd" },
      { name: "cyan-500", value: "#00b8db" },
      { name: "gray-300", value: "#d1d5dc" },
      { name: "neutral-300", value: "#d4d4d4" },
      { name: "white", value: "#ffffff" },
    ],
  },
];

export default function ColorPicker() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="p-6 space-y-6">
      {colorCollections.map((collection) => (
        <div key={collection.collectionName} className="space-y-3">
          <h2 className="text-xl font-bold">{collection.collectionName}</h2>
          <div className="grid grid-cols-6 gap-4">
            {collection.colors.map((color) => (
              <motion.div
                key={color.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleCopy(color.value)}
              >
                <div
                  className="w-16 h-16 rounded-lg border border-gray-200 shadow-md"
                  style={{ backgroundColor: color.value }}
                ></div>
                <span className="mt-2 text-sm text-cyan-300">{color.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {copiedColor && (
        <div className="fixed bottom-6 right-6 text-black bg-white px-4 py-2 rounded-lg shadow-lg">
          Copied {copiedColor}!
        </div>
      )}
    </div>
  );
}
