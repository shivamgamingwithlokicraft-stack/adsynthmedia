import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6">
      <Link href="/about" className="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity">
        About
      </Link>
      
      {/* Using a placeholder text logo to mimic the central graphic */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="bg-[#39ff14] text-black px-4 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] -rotate-3">
           <span className="font-bold text-xl italic tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>adsynth</span>
        </div>
      </div>

      <Link href="/contact" className="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity">
        Contact
      </Link>
    </header>
  );
}