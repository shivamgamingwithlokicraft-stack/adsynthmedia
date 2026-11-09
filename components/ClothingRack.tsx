"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceModal from './ServiceModal';
import { Code, Layout, ShoppingCart, Box, Smartphone, Zap } from 'lucide-react';

const services = [
  { id: 1, title: "Website Development", icon: Code, desc: "Responsive, functional and custom-built websites using React, Next.js, and modern frameworks.", color: "#00f0ff" },
  { id: 2, title: "Premium Web Design", icon: Layout, desc: "Modern, premium and user-focused interfaces that capture your brand's unique identity.", color: "#8a2be2" },
  { id: 3, title: "3D Web Experiences", icon: Box, desc: "Immersive animations, interactive elements, and WebGL experiences that make you stand out.", color: "#00f0ff" },
  { id: 4, title: "E-Commerce Solutions", icon: ShoppingCart, desc: "High-converting online stores with seamless product displays and secure checkout flows.", color: "#8a2be2" },
  { id: 5, title: "UI/UX Design", icon: Smartphone, desc: "User-centric design systems that ensure your platform is intuitive, beautiful, and easy to navigate.", color: "#00f0ff" },
  { id: 6, title: "Interactive Experiences", icon: Zap, desc: "Custom digital solutions and micro-interactions that keep your users engaged and coming back.", color: "#8a2be2" }
];

export default function ClothingRack() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      
      {/* Header / Tagline */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-50 text-center w-full">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
          Beyond Websites. <span className="text-[#00f0ff]">Into Experiences.</span>
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase">Our Capabilities</p>
      </div>

      <div className="rail"></div>
      
      <motion.div 
        className="rack"
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        dragElastic={0.1}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={service.id} 
              className="rack-item group"
              style={{ animationDelay: `${index * -0.5}s` }}
              onClick={() => setSelectedService(service)}
              initial={{ y: -200, opacity: 0, rotate: -10 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 12 }}
            >
              <div className="hanger-icon"></div>
              <div className="service-card">
                <Icon size={40} color={service.color} className="mb-4" />
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">{service.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-3">{service.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
}