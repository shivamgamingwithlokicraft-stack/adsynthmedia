"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/lib/data';

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const product = products.find(p => p.id === Number(params.id));
  
  const [mainImage, setMainImage] = useState(product?.images[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].name || '');
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const applyFilter = (colorName: string) => {
    if (colorName === 'Black') return 'brightness(0.4) contrast(1.2)';
    if (colorName === 'Red') return 'sepia(1) hue-rotate(-50deg) saturate(3)';
    if (colorName === 'Navy') return 'sepia(1) hue-rotate(180deg) saturate(2)';
    return 'none';
  };

  const handleAddToCart = () => {
    if (!selectedSize) return alert('Please select a size');
    const cart = JSON.parse(localStorage.getItem('adsynth_cart') || '[]');
    cart.push({ ...product, size: selectedSize, color: selectedColor });
    localStorage.setItem('adsynth_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
    router.push('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-20">
          {product.images.map((img, i) => (
            <img key={i} src={img} onClick={() => setMainImage(img)} className={`cursor-pointer border ${mainImage === img ? 'border-black' : 'border-transparent opacity-50'}`} />
          ))}
        </div>
        <div className="flex-1 aspect-[3/4] overflow-hidden">
          <img src={mainImage} style={{ filter: applyFilter(selectedColor) }} className="w-full h-full object-cover transition-all duration-300" />
        </div>
      </div>

      <div className="flex flex-col pt-4">
        <h1 className="font-serif text-4xl mb-4">{product.title}</h1>
        <div className="text-2xl font-bold mb-6">₹ {product.price}</div>
        <p className="text-gray-500 mb-8">{product.desc}</p>
        
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase mb-2">Select Color: {selectedColor}</h4>
          <div className="flex gap-2">
            {product.colors.map((c, i) => (
              <button key={i} onClick={() => setSelectedColor(c.name)} style={{ background: c.hex }} className={`w-8 h-8 rounded-full border-2 ${selectedColor === c.name ? 'border-black' : 'border-transparent'}`} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase mb-2">Select Size</h4>
          <div className="flex gap-2">
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button key={size} onClick={() => setSelectedSize(size)} className={`w-12 h-12 border flex items-center justify-center font-semibold ${selectedSize === size ? 'bg-black text-white' : 'border-gray-300'}`}>
                {size}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleAddToCart} className="bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800">
          Add to Bag
        </button>
      </div>
    </div>
  );
}