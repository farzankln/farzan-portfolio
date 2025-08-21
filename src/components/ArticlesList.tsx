type Article = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
};

export default function ArticlesList({ items }: { items: Article[] }) {
  return (
    <div id="articles" className="space-y-4">
      {items.map((a) => (
        <a
          key={a.id}
          href={a.href}
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl bg-neutral-900 p-5 shadow-lg ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold">{a.title}</h3>
            <time className="text-sm text-neutral-400">{a.date}</time>
          </div>
          <p className="mt-2 text-neutral-300 line-clamp-2">{a.excerpt}</p>
          <div className="mt-3 text-sm text-red-400">Read →</div>
        </a>
      ))}
    </div>
  );
}
