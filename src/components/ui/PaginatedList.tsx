"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type LoadMoreListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  initialCount?: number;
  incrementCount?: number;
  gridClassName?: string;
  keyField?: keyof T;
};

export default function LoadMoreList<T>({
  items,
  renderItem,
  initialCount = 3,
  incrementCount = 3,
  gridClassName = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto",
  keyField = "id" as keyof T,
}: LoadMoreListProps<T>) {
  const [visibleItems, setVisibleItems] = useState(initialCount);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + incrementCount);
  };

  const handleShowLess = () => {
    setVisibleItems((prev) => Math.max(initialCount, prev - incrementCount));
  };

  return (
    <div>
      <motion.div
        className={gridClassName}
        aria-live="polite"
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {items.slice(0, visibleItems).map((item, index) => (
            <motion.div
              key={keyField ? String(item[keyField]) : index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              layout
            >
              {renderItem(item, index)}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(visibleItems < items.length || visibleItems > initialCount) && (
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {visibleItems < items.length && (
            <button
              onClick={handleLoadMore}
              className="rounded-full bg-blue-600/80 backdrop-blur-md px-6 py-2 text-sm font-medium text-white hover:bg-blue-500/90 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Load more items"
            >
              Load More
            </button>
          )}
          {visibleItems > initialCount && (
            <button
              onClick={handleShowLess}
              className="rounded-full bg-neutral-700/60 backdrop-blur-md px-6 py-2 text-sm font-medium text-white hover:bg-neutral-600/70 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Show fewer items"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}
