"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid
          ? "bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold tracking-tight">
          Farzan
        </Link>
        <div className="flex items-center gap-6 text-sm text-neutral-300">
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#articles" className="hover:text-white">
            Articles
          </Link>
          <a
            href="mailto:hello@example.com"
            className="rounded-xl bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600 transition"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
