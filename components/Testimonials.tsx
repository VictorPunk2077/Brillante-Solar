'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Carlos Mendoza",
    time: "Hace 2 semanas",
    text: "Excelente servicio. La instalación fue muy rápida y los técnicos muy profesionales. Ya vi la diferencia en mi recibo de CFE. ¡Recomendados 100%!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Laura Gutiérrez",
    time: "Hace 1 mes",
    text: "Desde el primer contacto fueron muy transparentes con los costos y el ahorro real que tendría. Todo se cumplió al pie de la letra.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Roberto Valdés",
    time: "Hace 3 meses",
    text: "Pusimos paneles en la empresa y el retorno de inversión ha sido exactamente como lo plantearon. Atención al cliente de primera.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Mariana Rojas",
    time: "Hace 1 semana",
    text: "Me resolvieron todas mis dudas de manera muy técnica pero entendible. La app para monitorear mis paneles es buenísima. Mi recibo llegó de $50 pesos.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Fernando Sánchez",
    time: "Hace 4 meses",
    text: "Llevo 4 meses con mi sistema y estoy feliz. Coticé con 3 proveedores diferentes y ellos fueron los únicos que me dieron tanta seguridad.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function Testimonials() {
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center flex items-center justify-center gap-2">
          <GoogleIcon />
          Reseñas de Clientes
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Nuestros clientes nos respaldan
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Más de 500 instalaciones exitosas y una calificación promedio de 5.0 nos avalan. Lee lo que opinan sobre nuestro servicio.
        </p>
      </div>

      <div className="relative w-full flex items-center">
        {/* Fades for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div
           animate={{
             x: ['0%', '-50%'],
           }}
           transition={{
             duration: 40,
             ease: 'linear',
             repeat: Infinity,
           }}
           className="flex gap-6 pr-6 items-center flex-none w-max hover:[animation-play-state:paused]"
        >
          {doubledReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[320px] md:w-[380px] shrink-0 bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 pointer-events-auto cursor-default flex flex-col h-full"
            >
              {/* Header: Photo, Name, Time, Google Logo */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <div className="relative w-12 h-12 shrink-0">
                    <Image 
                      src={review.avatar} 
                      alt={review.name} 
                      fill 
                      referrerPolicy="no-referrer"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-0.5">{review.name}</h4>
                    <span className="text-xs text-gray-500">{review.time}</span>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-700 leading-relaxed overflow-hidden">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </motion.div>

        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
