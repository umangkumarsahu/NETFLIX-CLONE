import Image from "next/image";
import { getMovieDetails, posterUrl } from "@/lib/tmdb";

type PageProps = { params: Promise<{ id: string }> };

export default async function MoviePage({ params }: PageProps) {
  const { id } = await params;
  let movie = await getMovieDetails(id);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-800">
        {movie.backdrop_path && (
          <Image
            src={posterUrl(movie.backdrop_path, "w500") || ""}
            alt={movie.title || movie.name || "Backdrop"}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        )}
      </div>
      <h1 className="mt-6 text-3xl font-bold">{movie.title || movie.name}</h1>
      <p className="mt-3 text-gray-200 max-w-3xl">{movie.overview}</p>
      <div className="mt-4 text-sm text-gray-400">
        <span>Rating: {movie.vote_average?.toFixed(1) ?? "-"}</span>
        {movie.release_date && <span className="ml-4">Release: {movie.release_date}</span>}
      </div>
    </div>
  );
}


