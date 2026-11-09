"use client";
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceModal({ service, onClose }: { service: any, onClose: () => void }) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-[#111] border border-[#333] rounded-xl shadow-2xl overflow-hidden max-w-lg w-full p-8 relative"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()} 
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6" style={{ border: `1px solid ${service.color}` }}>
            <Icon size={32} color={service.color} />
          </div>

          <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-4">{service.title}</h2>
          <p className="text-gray-400 leading-relaxed mb-8">{service.desc}</p>

          <button className="w-full bg-[#00f0ff] text-black py-4 font-bold uppercase tracking-widest hover:bg-cyan-300 transition-colors rounded-lg">
            Discuss This Service
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}