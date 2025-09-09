type MovieCardProps = {
  title: string;
  imageUrl: string;
};

export default function MovieCard({ title, imageUrl }: MovieCardProps) {
  return (
    <div className="group relative aspect-[2/3] w-40 shrink-0 cursor-pointer overflow-hidden rounded-md bg-gray-800 sm:w-48">
      <img src={imageUrl} alt={title} className="h-full w-full object-cover transition duration-200 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-2 text-xs font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
        {title}
      </div>
    </div>
  );
}


