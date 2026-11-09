"use client";
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over links, buttons, or product cards
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('.product-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div 
        className={`rounded-full bg-white transition-all duration-300 ease-out ${
          isHovering ? 'w-16 h-16 opacity-50' : 'w-3 h-3 opacity-100'
        }`}
      />
    </div>
  );
}