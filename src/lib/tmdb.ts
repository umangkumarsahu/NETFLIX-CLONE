export type TmdbMovie = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
};

export type TmdbResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

const TMDB_BASE = process.env.TMDB_API_BASE || "https://api.themoviedb.org/3";

async function tmdbFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error("Missing TMDB_API_KEY env var");
  }
  const url = new URL(path, TMDB_BASE);
  const res = await fetch(url.toString(), {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      ...init?.headers,
    },
    // Cache on server to reduce requests during build/dev
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`TMDB error ${res.status}`);
  }
  return res.json();
}

export async function getTrendingMovies(): Promise<TmdbMovie[]> {
  const data = await tmdbFetch<TmdbResponse<TmdbMovie>>("/trending/movie/week");
  return data.results;
}

export async function getTopRatedMovies(): Promise<TmdbMovie[]> {
  const data = await tmdbFetch<TmdbResponse<TmdbMovie>>("/movie/top_rated");
  return data.results;
}

export async function getUpcomingMovies(): Promise<TmdbMovie[]> {
  const data = await tmdbFetch<TmdbResponse<TmdbMovie>>("/movie/upcoming");
  return data.results;
}

export function posterUrl(path: string | null, size: "w185" | "w342" | "w500" = "w500"): string | null {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
}


