import MovieCard from "./MovieCard";

type RowProps = {
  title: string;
  items: { id: string; title: string; imageUrl: string }[];
};

export default function Row({ title, items }: RowProps) {
  return (
    <section className="mt-6">
      <h2 className="px-4 text-lg font-semibold text-white sm:px-6 lg:px-8">{title}</h2>
      <div className="mt-3 overflow-x-auto">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8">
          {items.map((item) => (
            <MovieCard key={item.id} title={item.title} imageUrl={item.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}


