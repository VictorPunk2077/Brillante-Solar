'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Asesoría y Cotización',
    description: 'Analizamos tu recibo y hábitos de consumo para diseñar el sistema óptimo. Te presentamos una propuesta financiera detallada.',
  },
  {
    number: '02',
    title: 'Diseño e Ingeniería',
    description: 'Nuestros ingenieros realizan un levantamiento físico para asegurar la mejor ubicación e inclinación de los paneles.',
  },
  {
    number: '03',
    title: 'Trámites ante CFE',
    description: 'Nos encargamos del 100% del papeleo. Gestionamos tu contrato de interconexión y el cambio al medidor bidireccional.',
  },
  {
    number: '04',
    title: 'Instalación Profesional',
    description: 'Nuestro equipo certificado instala el sistema utilizando materiales de alta calidad, garantizando seguridad y estética.',
  },
  {
    number: '05',
    title: 'Puesta en marcha',
    description: 'Encendemos el sistema y te enseñamos a monitorear tu generación de energía en tiempo real desde tu celular.',
  }
];

export default function Process() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <section id="proceso" className="py-24 bg-white min-h-screen"></section>;

  return (
    <section id="proceso" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Proceso de Trabajo
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Hacemos el cambio fácil para ti
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Nos encargamos de todo el proceso, desde el análisis inicial hasta que tu sistema esté encendido y ahorrando.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col lg:flex-row items-center justify-between lg:mb-24 last:mb-0">
                  
                  {/* Left Side (Empty on odd steps, content on even on Desktop) */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:order-3 lg:pl-12'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{ 
                        duration: 0.6, 
                        type: "spring", 
                        bounce: 0.3 
                      }}
                      className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-5xl font-black text-primary/20 mb-4">{step.number}</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full items-center justify-center z-10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Right Side (Empty on even steps, content on odd on Desktop) */}
                  <div className="hidden lg:block w-full lg:w-5/12"></div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
