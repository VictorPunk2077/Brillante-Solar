'use client';

import { useState, useEffect } from 'react';
import { Home, Building2, Factory, UploadCloud, Zap } from 'lucide-react';

export default function SavingsCalculator() {
  const [mounted, setMounted] = useState(false);
  const [expense, setExpense] = useState<number>(3000);
  const [zone, setZone] = useState('centro');
  const [panelType, setPanelType] = useState('monocristalino');
  const [projectType, setProjectType] = useState<'hogar' | 'negocio' | 'industria'>('hogar');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <section id="calculadora" className="py-24 bg-gray-50 flex items-center justify-center min-h-[600px]">
      <div className="animate-pulse text-primary font-medium tracking-widest uppercase">Cargando Calculadora...</div>
    </section>
  );

  // Simple mock calculation logic derived during render
  const monthlySavingPerPanel = 300; // MXN
  const panels = Math.max(1, Math.ceil(expense / monthlySavingPerPanel));
  
  // Adjust cost based on panel type
  const costPerPanel = panelType === 'premium' ? 14000 : 11500;
  
  const investment = panels * costPerPanel;
  const annualSavings = expense * 6; 
  const roi = annualSavings > 0 ? investment / annualSavings : 0;
  const savings25 = (annualSavings * 25) - investment;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section id="calculadora" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Calculadora Inteligente</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Descubre cuánto puedes ahorrar</h3>
          <p className="text-lg text-gray-600">
            Ingresa tu gasto bimestral aproximado y te mostraremos una proyección de tu inversión y ahorros a largo plazo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column (Calculator & Projection) */}
          <div className="w-full lg:w-[55%] space-y-6">
            
            {/* Parameters Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-8">
                <Zap className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-gray-900 text-lg">Parámetros del Sistema</h4>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-medium text-gray-700">Gasto Bimestral (CFE)</label>
                  <span className="text-3xl font-bold text-primary">{formatCurrency(expense)} <span className="text-sm font-normal text-gray-500">MXN</span></span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500"
                  value={expense}
                  onChange={(e) => setExpense(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium tracking-wide">
                  <span>$500</span>
                  <span>$50,000+</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 whitespace-nowrap">📍 Zona de México</label>
                  <select 
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-xl border bg-gray-50"
                  >
                    <option value="norte">Norte (Alta radiación)</option>
                    <option value="centro">Centro (Radiación media)</option>
                    <option value="sur">Sur (Radiación media-alta)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 whitespace-nowrap">☀️ Tipo de Panel</label>
                  <select 
                    value={panelType}
                    onChange={(e) => setPanelType(e.target.value)}
                    className="w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-xl border bg-gray-50"
                  >
                    <option value="monocristalino">Monocristalino (550W)</option>
                    <option value="premium">Premium Alta Efi. (600W+)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Projection Card */}
            <div className="bg-primary p-6 md:p-8 rounded-xl text-white relative overflow-hidden shadow-xl shadow-primary/20">
               {/* Lighting effect */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
              
              <div className="flex items-center gap-2 mb-8 relative z-10">
                <Zap className="h-5 w-5 text-white" />
                <h4 className="font-bold text-white text-lg">Proyección de tu Sistema Solar</h4>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10 mb-6">
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 md:p-5 flex flex-col justify-center">
                  <span className="text-xs md:text-sm text-white/80 font-medium mb-1 line-clamp-1 border-b border-transparent">Paneles Recomendados</span>
                  <span className="text-2xl md:text-3xl font-bold text-white">{panels} <span className="text-sm font-normal text-white/70">pzs</span></span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 md:p-5 flex flex-col justify-center">
                  <span className="text-xs md:text-sm text-white/80 font-medium mb-1 line-clamp-1 border-b border-transparent">Inversión Estimada</span>
                  <span className="text-2xl md:text-3xl font-bold text-white leading-tight">{formatCurrency(investment)}</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 md:p-5 flex flex-col justify-center">
                  <span className="text-xs md:text-sm text-white/80 font-medium mb-1 line-clamp-1 border-b border-transparent">Retorno de Inversión</span>
                  <span className="text-2xl md:text-3xl font-bold text-white">{roi.toFixed(1)} <span className="text-sm font-normal text-white/70">años</span></span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 md:p-5 flex flex-col justify-center">
                  <span className="text-xs md:text-sm text-white/80 font-medium mb-1 line-clamp-1 border-b border-transparent">Ahorro a 25 años</span>
                  <span className="text-2xl md:text-3xl font-bold text-white leading-tight">{formatCurrency(savings25)}</span>
                </div>
              </div>
              
              <p className="text-[10px] sm:text-xs text-white/70 text-center relative z-10 mx-auto max-w-sm">
                *Los valores mostrados son estimaciones basadas en promedios nacionales. La cotización final puede variar tras una visita técnica.
              </p>
            </div>

          </div>

          {/* Right Column (Lead Form) */}
          <div className="w-full lg:w-[45%] bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-xl shadow-gray-200/50">
            <h4 className="font-bold text-gray-900 text-2xl mb-2">Recibe tu presupuesto</h4>
            <p className="text-gray-500 text-sm mb-8">Completa tus datos para enviarte la cotización detallada a tu correo y WhatsApp.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3 block">Tipo de Proyecto</label>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    type="button"
                    onClick={() => setProjectType('hogar')}
                    className={`py-3 flex flex-col items-center justify-center gap-2 rounded-xl border transition-colors ${projectType === 'hogar' ? 'bg-primary/10 border-primary/30 text-primary-dark' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Home className="w-5 h-5" />
                    <span className="text-xs font-medium">Hogar</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setProjectType('negocio')}
                    className={`py-3 flex flex-col items-center justify-center gap-2 rounded-xl border transition-colors ${projectType === 'negocio' ? 'bg-primary/10 border-primary/30 text-primary-dark' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Building2 className="w-5 h-5" />
                    <span className="text-xs font-medium">Negocio</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setProjectType('industria')}
                    className={`py-3 flex flex-col items-center justify-center gap-2 rounded-xl border transition-colors ${projectType === 'industria' ? 'bg-primary/10 border-primary/30 text-primary-dark' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Factory className="w-5 h-5" />
                    <span className="text-xs font-medium">Industria</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Nombre Completo</label>
                <input type="text" placeholder="Ej. Juan Pérez" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400 bg-gray-50/50" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">WhatsApp</label>
                <input type="tel" placeholder="Ej. 55 1234 5678" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400 bg-gray-50/50" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Correo Electrónico</label>
                <input type="email" placeholder="tu@correo.com" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400 bg-gray-50/50" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2 flex justify-between">
                  <span>Recibo de Luz</span>
                  <span className="text-gray-400 font-normal">(Opcional)</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
                  <div className="space-y-1 text-center">
                    <UploadCloud className="mx-auto h-8 w-8 text-gray-400 group-hover:text-primary transition-colors" />
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary focus-within:outline-none">
                        <span>Sube tu recibo (PDF o Imagen)</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-secondary hover:brightness-95 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all flex justify-center items-center gap-2">
                <Zap className="w-5 h-5" />
                Recibir Presupuesto
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
