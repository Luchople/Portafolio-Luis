import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuaranteedParticles from '@/components/GuaranteedParticles';


const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Web",
  description: "Page by Luchople",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${urbanist.variable} relative min-h-screen flex flex-col`}>
        {/* Partículas de fondo - z-index más bajo */}
        <GuaranteedParticles />
        
        {/* Header con z-index alto - siempre visible */}
        <div className="relative z-50">
          <Header />
        </div>
        
        {/* Main con z-index medio - contenido sobre partículas */}
        <main className="pt-20 flex-1 relative z-10">{children}</main>
        
        {/* Footer con z-index alto - siempre visible */}
        <div className="relative z-50">
          <Footer />
        </div>
      </body>
    </html>
  );
}