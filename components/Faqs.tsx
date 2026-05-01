'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿En cuánto tiempo recupero mi inversión?",
    answer: "El retorno de inversión (ROI) típico para sistemas residenciales es de 3 a 5 años, mientras que para empresas o comercios puede ser de 2 a 4 años, dependiendo de la tarifa eléctrica actual y el consumo."
  },
  {
    question: "¿Los paneles generan energía en días nublados o lluviosos?",
    answer: "Sí. Aunque la producción máxima se alcanza con sol directo, los paneles modernos siguen captando radiación difusa, lo que significa que continúan generando electricidad incluso en días nublados o con lluvia."
  },
  {
    question: "¿Qué mantenimiento requieren los paneles solares?",
    answer: "El mantenimiento es mínimo. Solo requieren una limpieza con agua (sin químicos abrasivos) para retirar polvo o suciedad, y una inspección técnica preventiva recomendada una o dos veces al año."
  },
  {
    question: "¿Me voy a desconectar de la CFE?",
    answer: "No. Nuestros sistemas son interconectados (On-Grid). Seguirás conectado a la red de CFE para que en la noche o cuando ocupes más energía de la que generas, la tomes de la red. Si generas de más, CFE te lo guarda a favor."
  },
  {
    question: "¿Cuál es la vida útil y garantía de los equipos?",
    answer: "Los paneles solares que instalamos cuentan con una vida útil de más de 30 años y garantías por escrito de 25 años en eficiencia de generación. Los inversores tienen garantías de 10 a 15 años dependiendo de la marca."
  },
  {
    question: "¿Puedo empezar con poco y agregar más paneles después?",
    answer: "Absolutamente. Nuestros sistemas son modulares. Puedes iniciar con una instalación básica para cubrir una parte de tu recibo y expandirlo en el futuro según tus necesidades y presupuesto."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5" />
            Preguntas Frecuentes
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Aclaramos todas tus dudas
          </h3>
          <p className="text-gray-600 text-lg">
            Sabemos que cambiar a energía solar es un paso importante. Aquí respondemos las dudas más comunes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl border transition-colors duration-300 overflow-hidden ${
                  isOpen ? 'border-primary-light shadow-sm' : 'border-gray-200 hover:border-primary/20'
                }`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-primary-dark' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/20 text-primary' : 'bg-gray-50 text-gray-400'}`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
          <h4 className="font-bold text-xl text-gray-900 mb-2">¿Tienes otra pregunta?</h4>
          <p className="text-gray-600 mb-6">Nuestro equipo de asesores expertos está listo para ayudarte con tu caso específico.</p>
          <a href="https://wa.me/5211234567890?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20a%20un%20asesor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary hover:brightness-110 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-sm shadow-orange-200">
            Contactar a un Asesor
          </a>
        </div>
      </div>
    </section>
  );
}
