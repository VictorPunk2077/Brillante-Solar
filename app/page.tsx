import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoTicker from '@/components/LogoTicker';
import Solutions from '@/components/Solutions';
import Benefits from '@/components/Benefits';
import SavingsCalculator from '@/components/SavingsCalculator';
import Process from '@/components/Process';
import Methodology from '@/components/Methodology';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Faqs from '@/components/Faqs';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Solutions />
      <Benefits />
      <SavingsCalculator />
      <Process />
      <Methodology />
      <Gallery />
      <Testimonials />
      <Faqs />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
