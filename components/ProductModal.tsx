"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductModal({ product, onClose }: { product: any, onClose: () => void }) {
  const [view, setView] = useState<'front' | 'back'>('front');
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    if (product) {
      setView('front');
      setSelectedColor(0);
    }
  }, [product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-4xl w-full"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Image Viewer */}
          <div className="w-full md:w-1/2 bg-[#f4f4f4] relative flex items-center justify-center p-8 min-h-[500px]">
            <motion.img 
              key={view}
              src={product.front} 
              alt={product.name} 
              className="w-full max-w-sm object-contain drop-shadow-2xl"
              initial={{ opacity: 0, rotateY: 0 }}
              animate={{ 
                opacity: 1, 
                rotateY: view === 'back' ? 180 : 0,
                scaleX: view === 'back' ? -1 : 1 // Flips the image horizontally
              }}
              transition={{ duration: 0.5, type: "spring" }}
            />
            
            <button onClick={onClose} className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-8">Premium heavyweight cotton. Oversized fit.</p>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">View</h4>
                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-max">
                  <button onClick={() => setView('front')} className={`px-6 py-2 text-sm font-bold uppercase rounded-md transition-all ${view === 'front' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}>Front</button>
                  <button onClick={() => setView('back')} className={`px-6 py-2 text-sm font-bold uppercase rounded-md transition-all ${view === 'back' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}>Back</button>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Color</h4>
                <div className="flex gap-3">
                  {product.colors.map((color: string, index: number) => (
                    <button key={index} onClick={() => setSelectedColor(index)} className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === index ? 'border-black scale-110 shadow-md' : 'border-gray-300'}`} style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Add to Cart - ₹2,499
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}