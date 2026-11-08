import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`} className="group border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        {product.badge && (
          <div className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2 py-1 uppercase text-white ${product.badgeType === 'new' ? 'bg-black' : 'bg-red-600'}`}>
            {product.badge}
          </div>
        )}
        <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <span className="text-sm font-semibold">{product.title}</span>
        <span className="text-sm font-bold flex gap-2">
          {product.original && <del className="text-gray-400 font-normal">₹ {product.original}</del>}
          <span className={product.original ? 'text-red-600' : ''}>₹ {product.price}</span>
        </span>
      </div>
    </Link>
  );
}