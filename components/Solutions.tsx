'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Home, Factory, Building2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    title: 'Residencial',
    description: 'Reduce tu recibo de luz hasta un 98% y aumenta el valor de tu propiedad con un sistema diseñado a la medida de tu hogar.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
    color: 'emerald'
  },
  {
    title: 'Comercial',
    description: 'Baja los costos operativos de tu negocio y mejora tu rentabilidad protegiéndote contra los aumentos de tarifas eléctricas.',
    icon: Building2,
    image: 'https://i.postimg.cc/q71Yqwv1/nuestras-soluciones-img.jpg',
    color: 'blue'
  },
  {
    title: 'Industrial',
    description: 'Soluciones a gran escala para industrias. Certifica a tu empresa como verde, cumple con normativas y maximiza tu ROI.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop',
    color: 'orange'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 10, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    } 
  }
};

export default function Solutions() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <section id="soluciones" className="py-24 bg-white min-h-screen"></section>;

  return (
    <section id="soluciones" className="py-24 bg-white overflow-hidden perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Nuestras Soluciones
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Energía diseñada para tus necesidades
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Tenemos la experiencia para desarrollar proyectos de cualquier tamaño, 
            asegurando siempre la máxima eficiencia y el mejor desempeño.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div 
                variants={cardVariants}
                key={index} 
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <Image 
                    src={solution.image} 
                    alt={solution.title} 
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative bg-white z-20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h4>
                  <p className="text-gray-600 mb-6 flex-grow">{solution.description}</p>
                  <a href="https://wa.me/5211234567890?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20solar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors group/link mt-auto">
                    Cotizar proyecto 
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
