"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ShoppingBag } from 'lucide-react';

// Luxury Fashion Data
const looks = [
  {
    id: 1,
    title: "The Autumn Silhouette",
    subtitle: "Look 01",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
    price: "₹ 14,500",
    items: ["Cashmere Turtleneck", "Wool Trousers"],
    colors: ["#d4cfc7", "#2b2b2b"]
  },
  {
    id: 2,
    title: "Midnight Elegance",
    subtitle: "Look 02",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
    price: "₹ 22,000",
    items: ["Silk Slip Dress", "Structured Blazer"],
    colors: ["#111111", "#8b7355"]
  },
  {
    id: 3,
    title: "Avant-Garde",
    subtitle: "Look 03",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    price: "₹ 18,900",
    items: ["Oversized Wool Coat", "Leather Boots"],
    colors: ["#b0a89c", "#3d5a43"]
  },
  {
    id: 4,
    title: "Neutral Palette",
    subtitle: "Look 04",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
    price: "₹ 9,800",
    items: ["Linen Shirt", "Wide-Leg Pants"],
    colors: ["#f4efe9", "#a89c8c"]
  }
];

export default function OmbrineSalon() {
  const [selectedLook, setSelectedLook] = useState<any>(null);

  return (
    <main className="min-h-screen ombrine-bg pb-32">
      
      {/* Header */}
      <header className="sticky top-0 w-full z-40 bg-[#f7f6f2]/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
            <ArrowLeft size={16} /> Back to Studio
          </Link>
          <h1 className="font-serif text-2xl font-bold tracking-widest uppercase">Ombrine</h1>
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium uppercase tracking-widest cursor-pointer hover:text-gray-500">Search</span>
            <span className="text-xs font-medium uppercase tracking-widest cursor-pointer hover:text-gray-500 flex items-center gap-1">
              <ShoppingBag size={16} /> Bag (0)
            </span>
          </div>
        </div>
      </header>

      {/* Hero - The Salon */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-6 block">The Autumn Edit 2026</span>
          <h2 className="font-serif text-6xl md:text-8xl font-medium tracking-tight mb-8">The Salon</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-light">
            A curated selection of complete looks. Shop the ensemble or individual pieces, seamlessly connected.
          </p>
        </motion.div>
      </section>

      {/* Lookbook Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {looks.map((look, index) => (
            <motion.div 
              key={look.id}
              className={`look-card group ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedLook(look)}
            >
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden mb-6">
                <img src={look.image} alt={look.title} className="w-full h-full object-cover" />
                {/* Hover Overlay */}
                <div className="look-overlay absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest">View Look</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-widest mb-1 block">{look.subtitle}</span>
                  <h3 className="font-serif text-2xl font-medium">{look.title}</h3>
                </div>
                <span className="text-sm font-medium">{look.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Look Modal */}
      <AnimatePresence>
        {selectedLook && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-[#f7f6f2] w-full max-w-6xl h-full max-h-[800px] flex flex-col md:flex-row overflow-hidden shadow-2xl relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button 
                onClick={() => setSelectedLook(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-3/5 h-[50vh] md:h-full bg-gray-200">
                <img src={selectedLook.image} alt={selectedLook.title} className="w-full h-full object-cover" />
              </div>

              {/* Details Side */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto">
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 block">{selectedLook.subtitle}</span>
                  <h2 className="font-serif text-4xl mb-4">{selectedLook.title}</h2>
                  <p className="text-2xl font-medium mb-6">{selectedLook.price}</p>
                </div>

                <div className="mb-8 border-t border-gray-300 pt-6">
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-4">Pieces in this look</h3>
                  <ul className="space-y-4">
                    {selectedLook.items.map((item: string, i: number) => (
                      <li key={i} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
                        <span>{item}</span>
                        <span className="text-gray-500">Select Size ↓</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 border-t border-gray-300 pt-6">
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-4">Color Palette</h3>
                  <div className="flex gap-3">
                    {selectedLook.colors.map((color: string, i: number) => (
                      <div key={i} className="w-8 h-8 rounded-full border border-gray-300" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    Add the Full Look
                  </button>
                  <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest">
                    Powered by Shopify Checkout
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}