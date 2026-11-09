"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Layout, Box, ShoppingCart, Smartphone, Zap, X } from 'lucide-react';

const services = [
  { title: "Website Development", icon: Code, desc: "We build robust, scalable, and lightning-fast websites using React, Next.js, and modern frameworks." },
  { title: "Premium Web Design", icon: Layout, desc: "Modern, premium, and user-focused interfaces that capture your brand's unique identity." },
  { title: "3D Web Experiences", icon: Box, desc: "Immersive animations, WebGL graphics, and interactive elements that make you stand out." },
  { title: "E-Commerce Solutions", icon: ShoppingCart, desc: "High-converting online stores with seamless product displays and secure checkout flows." },
  { title: "UI/UX Design", icon: Smartphone, desc: "User-centric design systems that ensure your platform is intuitive and beautiful." },
  { title: "Custom Solutions", icon: Zap, desc: "Custom web applications and interactive micro-experiences tailored to your business." }
];

export default function AgencyPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-gray-300">
      <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Studio
          </Link>
          <button onClick={() => setIsProjectModalOpen(true)} className="bg-[#00f0ff] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white transition-colors">
            Start a Project
          </button>
        </div>
      </header>

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block bg-[#ffaa00]/10 text-[#ffaa00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#ffaa00]/20">
          Under Maintenance - Launching Soon
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Social Lancer <br/><span className="text-[#00f0ff]">Digital Agency</span></h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">We build premium websites, immersive 3D experiences, and custom digital solutions.</p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#222]">
        <h2 className="text-3xl font-bold text-white mb-12">Our Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="bg-[#0a0a0a] border border-[#222] p-8 rounded-2xl hover:border-[#00f0ff]/50 transition-colors group">
                <div className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-[#00f0ff]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {isProjectModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 max-w-md w-full relative">
            <button onClick={() => setIsProjectModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X size={24} /></button>
            <h2 className="text-2xl font-bold text-white mb-2">Start a Project</h2>
            <form className="space-y-4 mt-6">
              <input type="text" placeholder="Your Name" className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]" />
              <input type="email" placeholder="Email Address" className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]" />
              <textarea rows={3} placeholder="Project Details" className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]"></textarea>
              <button type="button" className="w-full bg-[#00f0ff] text-black font-bold py-3 rounded-lg hover:bg-white transition-colors">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}