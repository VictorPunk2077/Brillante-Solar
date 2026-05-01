'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (isMobileMenuOpen) return; // Don't hide navbar if mobile menu is open
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 500) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true); // Near the top
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (!mounted) return null;

  const closeMenu = () => setIsMobileMenuOpen(false);

  const menuItems = [
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Casos', href: '#casos-de-exito' },
    { name: 'FAQ', href: '#faqs' },
  ];

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-transparent' : 'bg-[#f1f4f9] backdrop-blur-md shadow-sm border-b border-gray-100'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-28 w-full">
                <div className="flex items-center gap-2 z-[60]">
                  <Link href="/" onClick={closeMenu}>
                    <Image 
                      src="https://i.postimg.cc/rp5HCTgy/sol-brillante-BG-gray-removebg.png" 
                      alt="Sol Brillante Energía Pura" 
                      width={280} 
                      height={100} 
                      className="h-16 sm:h-20 w-auto object-contain cursor-pointer transition-all hover:scale-105 duration-300" 
                    />
                  </Link>
                </div>
                
                {/* Right side content */}
                <div className="flex items-center gap-6">
                  {/* Desktop Menu */}
                  <div className="hidden lg:flex space-x-6 items-center">
                    {menuItems.map((item) => (
                      <Link key={item.name} href={item.href} className="text-gray-700 hover:text-primary transition-colors duration-300 font-semibold text-sm">
                        {item.name}
                      </Link>
                    ))}
                    <a href="https://wa.me/5211234567890?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20sistema%20solar" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:brightness-110 text-white px-5 py-2 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-orange-200 text-sm whitespace-nowrap">
                      Cotizar ahora
                    </a>
                  </div>

                  {/* Hamburger Button */}
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden relative z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md shadow-sm"
                    aria-label="Toggle menu"
                  >
                    <div className="w-5 h-4 relative flex flex-col justify-between">
                      <motion.span 
                        animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        className="w-full h-[2px] bg-gray-900 rounded-full origin-left transition-all duration-300"
                      />
                      <motion.span 
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-full h-[2px] bg-gray-900 rounded-full transition-all duration-300"
                      />
                      <motion.span 
                        animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        className="w-full h-[2px] bg-gray-900 rounded-full origin-left transition-all duration-300"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Curtain Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#040e2e] flex flex-col justify-center items-center px-4"
          >
            <div className="flex flex-col gap-4 items-center w-full max-w-sm mt-4">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="overflow-hidden w-full text-center"
                >
                  <Link 
                    href={item.href} 
                    onClick={closeMenu}
                    className="text-white text-3xl font-light hover:font-medium tracking-tight block py-2 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 w-full"
              >
                <a 
                  href="https://wa.me/5211234567890?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20sistema%20solar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-secondary text-white w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all duration-300"
                >
                  Cotizar ahora
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
