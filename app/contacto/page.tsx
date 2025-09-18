'use client';

import { useState, useEffect } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Contacto() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Conectemos";
  const subtitle = "¿Tienes un proyecto en mente?";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/luis-vera-b93528222/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Luchople', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:Lveran175@gmail.com';
  };

  return (
    <div className="relative z-1 min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 sm:px-6 py-4 sm:py-8">
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
            Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
            Ya sea que tengas una idea innovadora o necesites ayuda con un proyecto existente, 
            me encantaría escuchar de ti.
          </p>

          {/* Información de contacto */}
          <div className={`mb-8 sm:mb-10 transition-all duration-1000 delay-700 ${
            currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="text-center p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="text-green-400 text-base sm:text-lg font-semibold mb-1 sm:mb-2 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </div>
                <p className="text-gray-300 text-xs sm:text-sm break-all">Lveran175@gmail.com</p>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="text-blue-400 text-base sm:text-lg font-semibold mb-1 sm:mb-2 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ubicación
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">Maipú, Santiago</p>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 sm:col-span-1 col-span-1">
                <div className="text-purple-400 text-base sm:text-lg font-semibold mb-1 sm:mb-2 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Estado
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">Disponible para proyectos</p>
              </div>
            </div>
          </div>

          {/* Botones con animación escalonada */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 transition-all duration-1000 delay-1000 ${
            currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={handleLinkedInClick}
              className="bg-blue-600/20 border border-blue-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-600/30 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-medium text-blue-400 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </button>
            
            <button 
              onClick={handleGitHubClick}
              className="bg-gray-600/20 border border-gray-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-600/30 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 hover:scale-105 font-medium text-gray-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </button>
            
            {/*<button 
              onClick={handleEmailClick}
              className="bg-green-500/20 border border-green-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-500/30 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 font-medium text-green-400 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar Email
            </button>*/}
          </div>

          {/* Mensaje adicional */}
          <div className={`transition-all duration-1000 delay-1200 ${
            currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-green-400 text-sm mb-2 sm:mb-4">Tiempo de respuesta promedio:</p>
            <p className="text-gray-300 text-xs sm:text-sm">
              Generalmente respondo dentro de las primeras 24 horas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}