"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[linear-gradient(to_bottom,rgba(0,0,0,.7),rgba(0,0,0,0))]"> 
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-bold text-red-600">
              NETFLIX
            </Link>
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-200">
              <Link href="#">Home</Link>
              <Link href="#">TV Shows</Link>
              <Link href="#">Movies</Link>
              <Link href="#">New & Popular</Link>
              <Link href="#">My List</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = query.trim();
                if (!q) return;
                router.push(`/search?q=${encodeURIComponent(q)}`);
                setIsOpen(false);
              }}
              className="hidden md:flex items-center gap-2"
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="w-44 rounded bg-white/10 px-3 py-1.5 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button aria-label="Search" className="text-gray-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.219 12.03l4.25 4.25a.75.75 0 1 0 1.06-1.06l-4.25-4.25A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd"/></svg>
              </button>
            </form>
            <button className="md:hidden text-gray-200 hover:text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <div className="h-7 w-7 rounded bg-gray-400/30" />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-3 text-gray-200">
            <div className="grid gap-2">
              <Link href="#">Home</Link>
              <Link href="#">TV Shows</Link>
              <Link href="#">Movies</Link>
              <Link href="#">New & Popular</Link>
              <Link href="#">My List</Link>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = query.trim();
                if (!q) return;
                router.push(`/search?q=${encodeURIComponent(q)}`);
                setIsOpen(false);
              }}
              className="mt-3 flex items-center gap-2"
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="w-full rounded bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button aria-label="Search" className="rounded bg-white/10 px-3 py-2 text-white hover:bg-white/20">
                Go
              </button>
            </form>
          </div>
        )}
      </nav>
    </header>
  );
}


