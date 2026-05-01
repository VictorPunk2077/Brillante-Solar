'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Sun } from 'lucide-react';
import Image from 'next/image';

const clientImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop"
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <section className="relative overflow-hidden flex items-center min-h-[100vh] bg-slate-900"></section>
  );

  return (
    <section className="relative overflow-hidden flex items-center min-h-[100vh] pt-20">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image 
          src="https://i.postimg.cc/RVhhS55f/hero-sol-brillante.webp" 
          alt="Instalación de paneles solares" 
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/30 border border-primary/50 text-white backdrop-blur-md mb-6 shadow-sm"
          >
            <Sun className="h-4 w-4 text-accent" />
            <span className="text-sm font-bold tracking-wide">Energía limpia y sostenible</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.15] drop-shadow-lg"
          >
            Ahorra energía con el <br/>
            <span className="text-secondary drop-shadow-none">poder del sol</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 font-medium mb-8 max-w-2xl leading-relaxed drop-shadow"
          >
            Reduce tu factura eléctrica mientras cuidas el planeta. Instalación profesional de paneles solares para hogares y empresas con soluciones innovadoras y de alta calidad.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#calculadora" className="inline-flex justify-center items-center gap-2 bg-secondary hover:brightness-95 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all shadow-md">
              Calcula tu ahorro
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#soluciones" className="hidden md:inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
              Conoce nuestras soluciones
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            className="hidden md:flex mt-12 items-center gap-4 text-sm text-gray-200 font-medium"
          >
            <div className="flex -space-x-2">
              {clientImages.map((src, i) => (
                <Image key={i} className="w-10 h-10 rounded-full border-2 border-gray-dark object-cover" src={src} alt={`Cliente ${i + 1}`} width={40} height={40} referrerPolicy="no-referrer" />
              ))}
            </div>
            <p>Más de <strong className="text-white">500+</strong> familias ya ahorran con nosotros</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
