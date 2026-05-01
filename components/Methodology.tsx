'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 120 } }
};

export default function Methodology() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <section id="metodologia" className="py-24 bg-[#040e2e] min-h-screen"></section>;

  return (
    <section id="metodologia" className="py-24 bg-[#040e2e] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
             <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Nuestra Metodología</h2>
             <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Cálculos precisos, cero sorpresas</h3>
             <p className="text-lg text-slate-300 mb-8 leading-relaxed">
               Nuestra metodología se basa en datos reales. No hacemos estimaciones al aire; utilizamos software de diseño solar avanzado y analizamos tu historial de CFE para dimensionar el sistema exacto que necesitas.
             </p>
             <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
               {[
                 'Análisis histórico de consumo eléctrico',
                 'Simulación 3D de radiación solar en tu techo',
                 'Cálculo de sombreado durante todo el año',
                 'Selección de componentes Tier 1 (Mayor eficiencia)',
                 'Proyección financiera a 25 años'
               ].map((item, i) => (
                 <motion.li variants={itemVariants} key={i} className="flex items-start gap-3">
                   <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center border border-primary text-primary">
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   <span className="text-slate-200">{item}</span>
                 </motion.li>
               ))}
             </motion.ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative aspect-square lg:aspect-auto h-full min-h-[400px] px-3 lg:px-0 max-w-md mx-auto lg:max-w-none w-full flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-xl transform rotate-3 scale-105 opacity-50 blur-lg mx-3 lg:mx-0" />
             <Image 
               src="https://i.postimg.cc/bwz3nnWY/metodologia-img.jpg" 
               alt="Ingeniero analizando datos solares" 
               fill
               referrerPolicy="no-referrer"
               className="relative rounded-xl object-cover shadow-2xl border border-slate-700 !w-[calc(100%-24px)] lg:!w-full left-3 lg:left-0" 
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
