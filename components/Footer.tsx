import { Sun, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#020818] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <a href='https://postimages.org/' target='_blank' rel="noopener noreferrer" className="block w-48">
                <Image 
                  src='https://i.postimg.cc/g0ZSzs8p/logo-sol-brillante-white.jpg' 
                  alt='logo-sol-brillante-white'
                  width={200}
                  height={80}
                  className="w-full h-auto"
                />
              </a>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transformando la manera en que México consume energía. Soluciones renovables, eficientes y rentables.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#soluciones" className="hover:text-primary transition-colors">Nuestras Soluciones</Link></li>
              <li><Link href="#beneficios" className="hover:text-primary transition-colors">Beneficios de la Energía Solar</Link></li>
              <li><Link href="#calculadora" className="hover:text-primary transition-colors">Calculadora de Ahorro</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog y Noticias</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Garantías</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Av. Reforma 222, Piso 10, Cuauhtémoc, 06600, CDMX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hola@solbrillante.mx</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sol Brillante Energía Pura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
