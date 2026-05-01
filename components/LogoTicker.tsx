'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const logos = [
  { name: 'Sunpower', url: 'https://i.postimg.cc/t4xvpbKq/sunpower-removebg.png' },
  { name: 'Growatt', url: 'https://i.postimg.cc/wT3b4L08/growatt-paneles-solares-2-removebg.png' },
  { name: 'Trina Solar', url: 'https://i.postimg.cc/bNdFVkL9/trina-solar-removebg.png' },
  { name: 'Canadian Solar', url: 'https://i.postimg.cc/tRBMz2dW/canadian-solar-removebg.png' },
  { name: 'Jinko Solar', url: 'https://i.postimg.cc/yxppY865/jinko-solar-2-removebg.png' },
];

export default function LogoTicker() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="py-12 bg-[#f1f4f9] border-b border-gray-100"></div>;

  return (
    <div className="py-12 bg-[#f1f4f9] border-b border-gray-100 overflow-hidden flex items-center justify-center">
      <div className="relative w-full flex items-center" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
        
        <motion.div
           animate={{
             x: ['0%', '-50%'],
           }}
           transition={{
             duration: 25,
             ease: 'linear',
             repeat: Infinity,
           }}
           className="flex gap-20 md:gap-32 pr-20 md:pr-32 items-center flex-none"
        >
          {/* Repeat the array enough times for seamless looping even on ultrawide monitors */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center transition-transform hover:scale-110 duration-300">
               <Image src={logo.url} alt={logo.name} width={240} height={90} className="w-auto h-20 md:h-24 lg:h-28 object-contain" referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
