"use client";
import Link from 'next/link';
import { ArrowRight, Code, Layout, Box, ShoppingCart, Smartphone, Zap, Mail, Phone, MapPin, ExternalLink, MousePointer2, Rocket, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

const services = [
  { title: "Website Development", icon: Code, desc: "Robust, scalable, and lightning-fast websites built with Next.js and React." },
  { title: "Premium Web Design", icon: Layout, desc: "Visually stunning, modern interfaces that perfectly reflect your brand." },
  { title: "3D Web Experiences", icon: Box, desc: "Immersive WebGL, animations, and interactive 3D elements." },
  { title: "E-Commerce Solutions", icon: ShoppingCart, desc: "High-converting online stores with seamless checkout flows." },
  { title: "UI/UX Design", icon: Smartphone, desc: "Intuitive design systems that prioritize the user experience." },
  { title: "Custom Solutions", icon: Zap, desc: "Tailored web applications and micro-experiences for your business." }
];

const processSteps = [
  { step: "01", title: "Discover", desc: "We dive deep into your brand, goals, and audience to craft a solid strategy.", icon: MousePointer2 },
  { step: "02", title: "Design", desc: "Our designers create stunning, user-centric visuals that align with your vision.", icon: Layout },
  { step: "03", title: "Develop", desc: "We write clean, scalable code to bring the designs to life flawlessly.", icon: Code },
  { step: "04", title: "Deploy", desc: "We launch your project, optimize for performance, and ensure a smooth handover.", icon: Rocket },
];

export default function AdSynthHome() {
  return (
    <main className="bg-[#fdfbfb] text-[#1a1a1a] overflow-x-hidden font-sans selection:bg-pink-200">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-pink-300 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-300 rounded-full blur-[150px] opacity-30"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-pink-600">
            AdSynth Media
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
            <a href="#prototypes" className="hover:text-pink-600 transition-colors">Prototypes</a>
            <a href="#process" className="hover:text-pink-600 transition-colors">Process</a>
            <a href="#services" className="hover:text-pink-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="bg-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200 hover:-translate-y-0.5">
            Let's Talk
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
        <div className="text-center max-w-5xl z-10">
          
          <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-pink-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            Accepting New Projects for 2026
          </div>
          
          <h1 className="animate-fade-in-up delay-200 text-6xl md:text-8xl font-serif font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
            Beyond Websites.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 italic relative inline-block">
              Into Experiences.
              <div className="animate-float absolute -top-12 -right-12 text-pink-400 hidden md:block">
                <Sparkles size={56} />
              </div>
            </span>
          </h1>
          
          <p className="animate-fade-in-up delay-300 text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-light">
            We build premium websites, immersive 3D experiences, and high-end digital solutions for visionary brands.
          </p>
          
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#prototypes" className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-700 transition-all shadow-xl shadow-pink-200 hover:-translate-y-1 w-full sm:w-auto">
              Explore Our Work
            </a>
            <a href="#services" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all hover:-translate-y-1 w-full sm:w-auto">
              Our Services
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in delay-500 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-pink-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-pink-600 text-white py-4 overflow-hidden transform -rotate-2 scale-105 z-20 relative shadow-2xl shadow-pink-500/50 border-y-4 border-black">
        <div className="marquee-track text-xl font-bold uppercase tracking-widest italic">
          <span>WEB DEVELOPMENT • UI/UX DESIGN • 3D EXPERIENCES • E-COMMERCE • BRANDING • CREATIVE DEVELOPMENT •</span>
          <span>WEB DEVELOPMENT • UI/UX DESIGN • 3D EXPERIENCES • E-COMMERCE • BRANDING • CREATIVE DEVELOPMENT •</span>
        </div>
      </div>

      {/* PROTOTYPES SECTION */}
      <section id="prototypes" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Live Prototypes</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Don't just take our word for it. Experience the level of quality, animation, and interactivity we bring to every project.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Social Lancer Card */}
          <a 
            href="https://the-social-lancer-2ix1.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="group relative bg-white rounded-3xl p-10 border-2 border-pink-200 shadow-2xl shadow-pink-200/50 hover:shadow-pink-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between min-h-[420px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Code size={32} />
                </div>
                <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Live Demo</div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">The Social Lancer</h3>
              <p className="text-gray-500 mb-8 max-w-sm font-medium">
                A premium digital agency portfolio. Showcasing high-end web design, seamless GSAP animations, and modern UI/UX.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 text-pink-600 font-bold uppercase tracking-widest text-sm mt-auto group-hover:gap-4 transition-all bg-pink-50 w-max px-4 py-2 rounded-full">
              Visit Live Site <ExternalLink size={18} />
            </div>
          </a>

          {/* Snug Wrld Card */}
          <a 
            href="https://snugwrld.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="group relative bg-[#111] rounded-3xl p-10 border-2 border-[#444] shadow-2xl shadow-gray-400/20 hover:shadow-[#39ff14]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between min-h-[420px] block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-[#222] border border-[#444] rounded-2xl flex items-center justify-center text-[#39ff14] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                  <Box size={32} />
                </div>
                <div className="bg-[#39ff14] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Live Demo</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 font-serif">Snug Wrld</h3>
              <p className="text-gray-400 mb-8 max-w-sm font-medium">
                An immersive 3D fashion e-commerce experience. Featuring a draggable clothing rack, physics-based swinging, and interactive product views.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 text-[#39ff14] font-bold uppercase tracking-widest text-sm mt-auto group-hover:gap-4 transition-all bg-[#222] w-max px-4 py-2 rounded-full border border-[#333]">
              Launch Experience <ArrowRight size={18} />
            </div>
          </a>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 px-6 bg-white relative z-10 border-y border-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-500">A seamless process from concept to launch.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative p-6 rounded-2xl bg-[#fdfbfb] border border-pink-100 hover:border-pink-300 transition-colors group">
                  <div className="text-5xl font-black text-pink-100 absolute top-4 right-4 font-serif group-hover:scale-110 transition-transform">{step.step}</div>
                  <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center mb-6 text-pink-600 relative z-10">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{step.title}</h3>
                  <p className="text-sm text-gray-500 relative z-10">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-500 text-lg">End-to-end digital solutions for modern brands.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="bg-white border border-pink-100 p-8 rounded-3xl hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-pink-100 shadow-2xl shadow-pink-100/50 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
             <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
             <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-pink-500" size={20}/>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600">Founder & Lead Developer</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Driven by Passion.</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              "We believe that the future of the web is interactive. Every project we take on is an opportunity to push the boundaries of what's possible in a browser. We don't just build websites; we craft digital legacies."
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm font-bold text-gray-800">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={18}/> 50+ Projects Delivered</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={18}/> 100% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer id="contact" className="bg-[#1a1a1a] text-white pt-24 pb-12 px-6 rounded-t-[3rem] relative z-10 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Let's build something remarkable.</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-md">Ready to elevate your brand? Reach out to our team and let's discuss your next big project.</p>
            
            <div className="space-y-6">
              <a href="mailto:hello@adsynthmedia.com" className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group">
                <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center group-hover:bg-pink-500/20 group-hover:scale-110 transition-all"><Mail size={20} /></div>
                <span className="text-lg font-medium">hello@adsynthmedia.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group">
                <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center group-hover:bg-pink-500/20 group-hover:scale-110 transition-all"><Phone size={20} /></div>
                <span className="text-lg font-medium">+91 123 456 7890</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center"><MapPin size={20} /></div>
                <span className="text-lg font-medium">Mumbai, India</span>
              </div>
            </div>
          </div>

          <div className="bg-[#222] p-8 md:p-10 rounded-[2rem] border border-[#333]">
            <h3 className="text-2xl font-bold mb-6 font-serif">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-[#111] border border-[#333] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" />
                <input type="text" placeholder="Last Name" className="w-full bg-[#111] border border-[#333] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-[#111] border border-[#333] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" />
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-[#111] border border-[#333] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors"></textarea>
              <button type="button" className="w-full bg-pink-600 text-white font-bold py-4 rounded-xl hover:bg-pink-700 transition-colors shadow-lg shadow-pink-900/50 flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 AdSynth Media. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-pink-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-pink-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </main>
  );
}