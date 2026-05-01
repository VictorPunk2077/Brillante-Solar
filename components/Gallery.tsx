'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    title: "Residencial Valle Alto",
    size: "15 kWp - 28 Paneles",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
    title: "Casa de Campo",
    size: "8 kWp - 14 Paneles",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://i.postimg.cc/zXPVwZPr/carport-solar-sol-brillante.jpg",
    title: "Comercial San Pedro",
    size: "45 kWp - 82 Paneles",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    title: "Residencial Cumbres",
    size: "10 kWp - 18 Paneles",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    title: "Nave Industrial Corporativa",
    size: "120 kWp - 215 Paneles",
    colSpan: "md:col-span-1 md:row-span-1",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring" as const, 
      stiffness: 100, 
      damping: 15 
    } 
  }
};

export default function Gallery() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <section id="casos-de-exito" className="py-24 bg-white overflow-hidden min-h-screen"></section>;

  return (
    <section id="casos-de-exito" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Casos de Éxito
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Instalaciones que hablan por sí solas
            </h3>
          </div>
          <p className="text-gray-600 max-w-sm text-lg md:text-right">
            Descubre cómo hemos transformado hogares y empresas con energía limpia y diseños estéticos.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4 lg:gap-6"
        >
           {projects.map((project, idx) => (
             <motion.a 
                href="https://wa.me/5211234567890?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                key={idx} 
                className={`block relative rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 ${project.colSpan || ''}`}
              >
               <Image 
                 src={project.src} 
                 alt={project.title} 
                 fill
                 referrerPolicy="no-referrer"
                 className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
               
               <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                 <div>
                   <p className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-primary-light font-semibold mb-3 text-xs tracking-wide border border-primary/30">
                     {project.size}
                   </p>
                   <h4 className="text-white text-xl md:text-2xl font-bold leading-tight">{project.title}</h4>
                 </div>
                 <div className="w-12 h-12 shrink-0 rounded-full bg-white text-primary flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                   <ArrowUpRight className="w-6 h-6" />
                 </div>
               </div>
             </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
