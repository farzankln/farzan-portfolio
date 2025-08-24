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
      className="group block rounded-2xl bg-white/10 backdrop-blur-md p-5 shadow-lg ring-1 ring-white/20 
      transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-0 overflow-hidden"
      aria-label={`Read article: ${a.title}`}
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute inset-0 bg-peppers-pattern opacity-0 transition-opacity duration-500 
             group-hover:opacity-10 group-active:opacity-10 rounded-2xl pointer-events-none"
      />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
          {a.title}
        </h3>
        <time className="text-sm text-gray-300">{a.date}</time>
      </div>

      <p className="mt-2 text-sm text-gray-300 line-clamp-2">{a.excerpt}</p>
      <div className="mt-3 text-sm font-medium text-cyan-300 transition-colors">
        Read More →
      </div>
    </motion.a>
  );

  return (
    <section>
      <motion.h3
        className="text-3xl font-semibold mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Articles
      </motion.h3>

      <LoadMoreList
        items={items}
        renderItem={(a, index) => renderArticle(a, index)}
        initialCount={3}
        incrementCount={3}
        gridClassName="space-y-4"
        keyField="id"
      />
    </section>
  );
}
