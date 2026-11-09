"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl w-full">
        <Link href="/agency" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Agency
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-bold mb-6">Let's talk.</h1>
            <p className="text-gray-400 mb-8">Have a project in mind? We'd love to hear about it. Reach out and let's build something remarkable together.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center"><Mail size={18} className="text-[#00f0ff]" /></div>
                <div><p className="text-sm text-gray-500">Email</p><p className="font-medium">hello@adsynthmedia.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center"><Phone size={18} className="text-[#00f0ff]" /></div>
                <div><p className="text-sm text-gray-500">Phone</p><p className="font-medium">+91 123 456 7890</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center"><MapPin size={18} className="text-[#00f0ff]" /></div>
                <div><p className="text-sm text-gray-500">Location</p><p className="font-medium">Mumbai, India</p></div>
              </div>
            </div>
          </div>
          <form className="bg-[#121212] border border-[#222] p-8 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold mb-2">Send a Message</h2>
            <input type="text" placeholder="Your Name" className="w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]" />
            <input type="email" placeholder="Email Address" className="w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]" />
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]"></textarea>
            <button type="button" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors mt-2">Send Message</button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}