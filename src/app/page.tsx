import Hero from "@/components/Hero";
import Row from "@/components/Row";
import { getTopRatedMovies, getTrendingMovies, getUpcomingMovies, posterUrl } from "@/lib/tmdb";

function toItems(movies: Awaited<ReturnType<typeof getTrendingMovies>>) {
  return movies
    .map((m) => ({
      id: String(m.id),
      title: m.title || m.name || "Untitled",
      imageUrl: posterUrl(m.poster_path) || "https://picsum.photos/400/600?grayscale",
    }))
    .filter((m) => !!m.imageUrl);
}

export default async function Home() {
  let trending = [] as ReturnType<typeof toItems>;
  let topRated = [] as ReturnType<typeof toItems>;
  let upcoming = [] as ReturnType<typeof toItems>;

  try {
    const [t, tr, u] = await Promise.all([
      getTrendingMovies(),
      getTopRatedMovies(),
      getUpcomingMovies(),
    ]);
    trending = toItems(t);
    topRated = toItems(tr);
    upcoming = toItems(u);
  } catch {
    const demo = Array.from({ length: 14 }).map((_, idx) => ({
      id: `id-${idx}`,
      title: `Movie ${idx + 1}`,
      imageUrl: `https://picsum.photos/seed/${idx + 1}/400/600`,
    }));
    trending = demo;
    topRated = demo;
    upcoming = demo;
  }

  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-7xl">
        <Row title="Trending Now" items={trending} />
        <Row title="Top Rated" items={topRated} />
        <Row title="Upcoming" items={upcoming} />
      </div>
    </main>
  );
}
