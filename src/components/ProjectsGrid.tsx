"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LoadMoreList from "@/components/ui/PaginatedList";
import { Project } from "@/types/GlobalsTypes";

export default function ProjectsGrid({ items }: { items: Project[] }) {
  const renderProject = (p: Project, index: number) => (
    <motion.a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-lg 
      ring-1 ring-white/20 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl 
      focus:outline-none focus:ring-0 h-full"
      aria-label={`View project: ${p.title}`}
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute inset-0 bg-radial-pattern opacity-0 transition-opacity duration-500 
        group-hover:opacity-10 group-active:opacity-10 rounded-2xl pointer-events-none"
      />
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-neutral-800">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 line-clamp-3">
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium 
              transition-colors text-gray-300 group-hover:bg-neutral-700/50"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 text-sm font-medium text-cyan-300">
          View Project →
        </div>
      </div>
    </motion.a>
  );

  return (
    <section id="work">
      <motion.h3
        className="text-3xl font-semibold mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h3>

      <LoadMoreList
        items={items}
        renderItem={(p, index) => renderProject(p, index)}
        initialCount={3}
        incrementCount={3}
        gridClassName="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto items-stretch"
        keyField="id"
      />
    </section>
  );
}
