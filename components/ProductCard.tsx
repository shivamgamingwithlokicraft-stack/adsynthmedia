"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use the second image on hover, fallback to first
  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <Link 
      href={`/product/${product.id}`} 
      className="product-card group block relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] bg-[#111] overflow-hidden relative">
        <img 
          src={displayImage} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        <div className="absolute bottom-0 left-0 w-full bg-white text-black text-center py-3 text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          View Product
        </div>
      </div>

      <div className="pt-3 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium">{product.title}</h3>
          <p className="text-xs text-gray-400 mt-1">
            {product.colors.length} Colors
          </p>
        </div>
        <p className="text-sm font-medium">
          {product.original && <del className="text-gray-500 mr-2">₹{product.original}</del>}
          ₹{product.price}
        </p>
      </div>
    </Link>
  );
}