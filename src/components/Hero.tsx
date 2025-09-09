export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=2070&auto=format&fit=crop"
          alt="Featured background"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Featured Movie</h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 line-clamp-3">
            Watch the latest blockbuster with stunning visuals and an immersive story.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center gap-2 rounded bg-white px-4 py-2 font-semibold text-black hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.5 5.653c0-1.426 1.529-2.33 2.778-1.608l10.5 6.096a1.875 1.875 0 0 1 0 3.218l-10.5 6.096A1.875 1.875 0 0 1 4.5 17.847V5.653Z" /></svg>
              Play
            </button>
            <button className="rounded bg-gray-500/25 px-4 py-2 font-semibold text-white hover:bg-gray-500/40">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


