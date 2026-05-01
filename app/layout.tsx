import type {Metadata} from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Sol Brillante | Energía Pura',
  description: 'Ahorra energía con el poder del sol. Instalación de paneles solares residenciales y comerciales.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased text-[#333333]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
