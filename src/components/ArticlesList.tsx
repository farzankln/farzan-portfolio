"use client";

import { motion } from "framer-motion";
import LoadMoreList from "@/components/ui/PaginatedList";
import { Article } from "@/types/GlobalsTypes";

export default function ArticlesList({ items }: { items: Article[] }) {
  const renderArticle = (a: Article, index: number) => (
    <motion.a
      href={a.href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl bg-white/10 backdrop-blur-md p-5 shadow-lg ring-1 ring-white/20 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-0"
      aria-label={`Read article: ${a.title}`}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-400">
          {a.title}
        </h3>
        <time className="text-sm text-gray-300">{a.date}</time>
      </div>
      <p className="mt-2 text-gray-300 line-clamp-2">{a.excerpt}</p>
      <div className="mt-3 text-sm text-blue-400 transition-colors group-hover:text-blue-300">
        Read →
      </div>
    </motion.a>
  );

  return (
    <div id="articles" className="space-y-4 max-w-7xl mx-auto">
      <LoadMoreList
        items={items}
        renderItem={(a, index) => renderArticle(a, index)}
        initialCount={3}
        incrementCount={3}
        gridClassName="space-y-4"
        keyField="id"
      />
    </div>
  );
}
