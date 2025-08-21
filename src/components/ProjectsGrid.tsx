import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

export default function ProjectsGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <a
          key={p.id}
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl bg-neutral-900 p-4 shadow-lg ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-neutral-800">
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-1 text-sm text-neutral-300 line-clamp-2">
            {p.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 text-sm text-red-400">View →</div>
        </a>
      ))}
    </div>
  );
}
