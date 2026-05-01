'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Leaf, PiggyBank, ShieldCheck, Sun, LineChart, Wrench } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    title: 'Ahorro Inmediato',
    description: 'Reduce el pago de tu recibo de luz hasta en un 98% desde el primer bimestre de operación.',
    icon: PiggyBank,
  },
  {
    title: 'Plusvalía Inmobiliaria',
    description: 'Aumenta el valor de tu propiedad de forma instantánea al contar con un sistema de energía limpia.',
    icon: LineChart,
  },
  {
    title: 'Deducibilidad',
    description: 'Para personas morales, los paneles solares son 100% deducibles de impuestos el primer año (Artículo 34 LISR).',
    icon: ShieldCheck,
  },
  {
    title: 'Bajo Mantenimiento',
    description: 'Los sistemas solares no tienen partes móviles, lo que requiere un mantenimiento mínimo y económico.',
    icon: Wrench,
  },
  {
    title: 'Energía 100% Renovable',
    description: 'Contribuye activamente a la reducción de CO2 y a combatir el cambio climático de manera directa.',
    icon: Leaf,
  },
  {
    title: 'Independencia Energética',
    description: 'Protégete de las constantes alzas en las tarifas eléctricas generando tu propia electricidad.',
    icon: Sun,
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
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

export default function Benefits() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden min-h-screen"></section>;

  return (
    <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Beneficios</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              ¿Por qué invertir en <span className="text-primary">energía solar?</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Instalar paneles solares es una de las decisiones financieras más inteligentes que puedes tomar hoy. No solo proteges el medio ambiente, sino que blindas tu economía a largo plazo.
            </p>
            <motion.div 
              className="relative rounded-xl overflow-hidden aspect-video shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop" 
                alt="Familia en casa con paneles solares" 
                fill
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  variants={itemVariants}
                  key={index} 
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover:border-primary/20"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
