export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/farzankln"
            target="_blank"
            className="hover:text-white"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/farzan-kalantari-abbb9531b/"
            target="_blank"
            className="hover:text-white"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
