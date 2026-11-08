import Link from 'next/link';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main>
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-clothes-hanging-on-a-rack-in-a-store-39812-large.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block">adsynthmedia Presents</span>
          <h1 className="font-serif text-6xl md:text-8xl font-semibold uppercase leading-none mb-6">The Autumn Edit</h1>
          <p className="text-lg mb-8 max-w-xl mx-auto">Fluid silhouettes. Synthesized digital textiles. Your new season wardrobe.</p>
          <Link href="/?cat=ladies" className="bg-black text-white px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-3xl uppercase mb-8">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </main>
  );
}