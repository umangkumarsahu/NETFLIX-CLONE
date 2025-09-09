import Row from "@/components/Row";
import { posterUrl, TmdbMovie } from "@/lib/tmdb";

async function searchMovies(query: string): Promise<TmdbMovie[]> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey || !query) return [];
  const url = new URL("/search/movie", process.env.TMDB_API_BASE || "https://api.themoviedb.org/3");
  url.searchParams.set("query", query);
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 30 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.results || [];
}

type SearchProps = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: SearchProps) {
  const { q } = await searchParams;
  const results = q ? await searchMovies(q) : [];
  const items = (results || []).map((m) => ({
    id: String(m.id),
    title: m.title || m.name || "Untitled",
    imageUrl: posterUrl(m.poster_path) || "https://picsum.photos/400/600?grayscale",
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <form action="/search" className="pt-6">
        <input
          type="text"
          name="q"
          defaultValue={q || ""}
          placeholder="Search movies..."
          className="w-full rounded-md bg-white/10 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
      </form>
      {q ? (
        <div className="mt-6">
          <Row title={`Results for "${q}"`} items={items} />
        </div>
      ) : (
        <p className="mt-6 text-gray-300">Try searching for your favorite movie.</p>
      )}
    </div>
  );
}


