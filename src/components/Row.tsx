"use client";
import MovieCard from "./MovieCard";
import { useRef } from "react";

type RowProps = {
  title: string;
  items: { id: string; title: string; imageUrl: string }[];
};

export default function Row({ title, items }: RowProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (delta: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <div className="hidden gap-2 md:flex">
          <button onClick={() => scrollByAmount(-400)} className="rounded bg-white/10 px-2 py-1 text-white hover:bg-white/20">◀</button>
          <button onClick={() => scrollByAmount(400)} className="rounded bg-white/10 px-2 py-1 text-white hover:bg-white/20">▶</button>
        </div>
      </div>
      <div className="relative mt-3">
        <div ref={scrollerRef} className="overflow-x-auto scroll-smooth">
          <div className="flex gap-3 px-4 sm:px-6 lg:px-8">
            {items.map((item) => (
              <a key={item.id} href={`/movie/${item.id}`}>
                <MovieCard title={item.title} imageUrl={item.imageUrl} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


