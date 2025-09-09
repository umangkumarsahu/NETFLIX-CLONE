import Hero from "@/components/Hero";
import Row from "@/components/Row";

const demoItems = Array.from({ length: 14 }).map((_, idx) => ({
  id: `id-${idx}`,
  title: `Movie ${idx + 1}`,
  imageUrl: `https://picsum.photos/seed/${idx + 1}/400/600`,
}));

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-7xl">
        <Row title="Trending Now" items={demoItems} />
        <Row title="Top Picks for You" items={demoItems} />
        <Row title="New Releases" items={demoItems} />
      </div>
    </main>
  );
}
