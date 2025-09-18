'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const router = useRouter();

  const fullText = "Hola mundo, soy Luis";
  const subtitle = "Desarrollador Junior";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);
    return () => clearInterval(cursorInterval);
  }, []);

  // Funciones de navegación
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/luis-vera-b93528222/', '_blank');
  };

  const handleProyectosClick = () => {
    router.push('/proyectos');
  };

  const handleAboutClick = () => {
    router.push('/about');
  };

  // Función para descargar CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/CV - Luis Vera - Ing Informática.docx';
    link.download = 'CV - Luis Vera - Ing Informática.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 py-4 sm:py-8">
      <ParticlesBackground />

      <div className="max-w-4xl w-full text-center text-white relative z-20">
        {/* Cuadro principal con efecto de aparición */}
        <div className="bg-black/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 font-mono">
          
          {/* Texto que aparece de a poco */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 min-h-[3rem] sm:min-h-[4rem] md:min-h-[6rem]">
            <span className="text-green-400">
              {displayedText}
              {showCursor && <span className="text-green-400">|</span>}
            </span>
          </h1>

          {/* Subtítulo con animación de fade-in */}
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 transition-all duration-1000 ${
            currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {subtitle}
          </p>

          {/* Descripción con delay */}
          <p className={`text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Ingeniero Informático especializado en desarrollo con experiencia práctica en React, 
            .NET y análisis de datos. He desarrollado soluciones reales para empresas como Vantrust Capital y Brokerbot, desde portales de gestión hasta APIs robustas y sistemas ETL
          </p>

          {/* Botones con animación escalonada */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 transition-all duration-1000 delay-1000 ${
            currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={handleProyectosClick}
              className="bg-green-500/20 border border-green-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-500/30 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 font-medium text-green-400 text-sm sm:text-base"
            >
              Ver mis proyectos
            </button>
            <button 
              onClick={handleAboutClick}
              className="border border-green-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-500/10 transition-all duration-300 hover:scale-105 font-medium text-green-400 text-sm sm:text-base"
            >
              Sobre Mí
            </button>
            <button 
              onClick={handleDownloadCV}
              className="border border-green-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-500/10 transition-all duration-300 hover:scale-105 font-medium text-green-400 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar CV
            </button>
          </div>

          {/* Botón de LinkedIn */}
          <div className={`flex justify-center mb-8 sm:mb-12 transition-all duration-1000 delay-1200 ${
            currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={handleLinkedInClick}
              className="bg-blue-600/20 border border-blue-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-600/30 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-medium text-blue-400 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              Conectar en LinkedIn 
            </button>
          </div>

          {/* Tecnologías con animación */}
          <div className={`mt-8 sm:mt-12 transition-all duration-1000 delay-1500 ${
            currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-green-400 text-sm mb-4">Tecnologías que domino:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['React', 'Next.js', '.NET', 'Javascript', 'Python', 'T-SQL'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-3 sm:px-4 py-2 bg-green-500/20 rounded-full text-xs sm:text-sm border border-green-500/30 hover:bg-green-500/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}