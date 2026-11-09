"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Layout, ShoppingCart, Box, Smartphone, Zap } from 'lucide-react';

const allServices = [
  { id: 1, title: "Website Development", icon: Code, desc: "Responsive, functional and custom-built websites.", color: "#00f0ff" },
  { id: 2, title: "Premium Web Design", icon: Layout, desc: "Modern, premium and user-focused interfaces.", color: "#8a2be2" },
  { id: 3, title: "3D Web Experiences", icon: Box, desc: "Immersive animations and interactive WebGL.", color: "#00f0ff" },
  { id: 4, title: "E-Commerce Solutions", icon: ShoppingCart, desc: "High-converting online stores.", color: "#8a2be2" },
  { id: 5, title: "UI/UX Design", icon: Smartphone, desc: "User-centric design systems.", color: "#00f0ff" },
  { id: 6, title: "Interactive Experiences", icon: Zap, desc: "Custom micro-interactions.", color: "#8a2be2" }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-24 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#00f0ff] flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Studio
          </Link>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white" style={{ fontFamily: 'Impact, sans-serif' }}>Our Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                className="bg-[#111] border border-[#222] p-8 rounded-xl hover:border-[#00f0ff] transition-colors group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Icon size={24} color={service.color} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}