'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const textContent = [
    "cat about_me.txt",
    "Egresado de Ingeniería en Informática. Actualmente estoy enfocado en el desarrollo de software full-stack y abierto a otras áreas TI.",
    "$ ls ./skills/",
    ""
  ];

  const skills = {
    "Lenguajes": ["Python", "JavaScript", "Java", "C#"],
    "Frameworks/Librerías": ["Django", "React", "Next.js", '.NET 8' ,"Tailwind", "Bootstrap"],
    "Bases de datos": ["T-SQL", "MySQL", "Oracle SQL", "PL/SQL"],
    "Cloud & Tools": ["GCP", "Git & GitHub", "Vercel", "Netlify", "Trello", "Jira"]
  };

  useEffect(() => {
    if (currentSection < textContent.length) {
      const text = textContent[currentSection];
      if (displayedText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 10);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentSection(currentSection + 1);
          setDisplayedText('');
        }, 1);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, currentSection, textContent]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative z-10 min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 sm:px-6 py-4 sm:py-8 md:py-12">
      <ParticlesBackground />

      <div className="max-w-6xl w-full relative z-20">
        {/* Terminal Window */}
        <div className="bg-black/90 backdrop-blur-md border border-green-500/50 rounded-lg shadow-2xl hover:shadow-green-500/20 transition-all duration-500 font-mono">
          
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/80 rounded-t-lg border-b border-green-500/30">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            <span className="ml-2 sm:ml-4 text-green-400 text-xs sm:text-sm">~/about</span>
          </div>

          {/* Terminal Content */}
          <div className="p-3 sm:p-4 md:p-6 text-green-400">
            
            {/* Avatar y comando inicial */}
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-green-500/30 hover:border-green-500/50 transition-all duration-300 mx-auto sm:mx-0 flex-shrink-0">
                <Image
                  src="/images/luis.png"
                  alt="Luis Vera"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex-1 w-full">
                {currentSection >= 0 && (
                  <div className="mb-3 sm:mb-4">
                    <span className="text-green-300 text-sm sm:text-base">$ </span>
                    <span className="text-white text-sm sm:text-base">
                      {currentSection === 0 ? displayedText : textContent[0]}
                      {currentSection === 0 && showCursor && <span className="text-green-400">|</span>}
                    </span>
                  </div>
                )}
                
                {currentSection >= 1 && (
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {currentSection === 1 ? displayedText : textContent[1]}
                    {currentSection === 1 && showCursor && <span className="text-green-400">|</span>}
                  </p>
                )}
              </div>
            </div>

            {/* Skills Section */}
            {currentSection >= 2 && (
              <div>
                <div className="mb-3 sm:mb-4">
                  <span className="text-green-300 text-sm sm:text-base">$ </span>
                  <span className="text-white text-sm sm:text-base">
                    {currentSection === 2 ? displayedText : textContent[2]}
                    {currentSection === 2 && showCursor && <span className="text-green-400">|</span>}
                  </span>
                </div>

                {currentSection >= 3 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6">
                    {Object.entries(skills).map(([category, items], categoryIndex) => (
                      <div 
                        key={category}
                        className="space-y-2 sm:space-y-3 opacity-0 animate-fade-in"
                        style={{ animationDelay: `${categoryIndex * 200}ms`, animationFillMode: 'forwards' }}
                      >
                        <h3 className="text-purple-400 font-semibold border-b border-purple-500/30 pb-1 text-sm sm:text-base">
                          {category}
                        </h3>
                        <ul className="space-y-1">
                          {items.map((skill, index) => (
                            <li 
                              key={skill}
                              className="text-gray-300 text-xs sm:text-sm flex items-center opacity-0 animate-fade-in"
                              style={{ animationDelay: `${(categoryIndex * 200) + (index * 100)}ms`, animationFillMode: 'forwards' }}
                            >
                              <span className="text-green-400 mr-2">▸</span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Terminal cursor */}
            {currentSection >= textContent.length && (
              <div className="mt-6 sm:mt-8">
                <span className="text-green-300 text-sm sm:text-base">$ </span>
                <span className="text-white text-sm sm:text-base">_</span>
                {showCursor && <span className="text-green-400">|</span>}
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 transition-all duration-1000 ${
          currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-purple-400 font-bold mb-2 sm:mb-3 text-sm sm:text-base">🎓 Educación</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Ingeniería en Informática</p>
            <p className="text-gray-400 text-xs">Duoc UC - 2025</p>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-purple-400 font-bold mb-2 sm:mb-3 text-sm sm:text-base">💼 Vantrust Capital</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Desarrollador y Analista de Datos</p>
            <p className="text-gray-300 text-xs sm:text-sm mb-2">Práctica Laboral (Enero 2025 – Abril 2025)</p>
            <div className="space-y-1">
              <p className="text-gray-400 text-xs">• Portal Web Gestión Usuarios</p>
              <p className="text-gray-400 text-xs">• API .NET para AAD y EntraID</p>
              <p className="text-gray-400 text-xs">• ETL Pentaho con Stored Procedures</p>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-purple-400 font-bold mb-2 sm:mb-3 text-sm sm:text-base">💼 Brokerbot</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Desarrollo Web</p>
            <p className="text-gray-300 text-xs sm:text-sm mb-2">Práctica Laboral (Mayo 2023 – Agosto 2023)</p>
            <div className="space-y-1">
              <p className="text-gray-400 text-xs">• Apps web con tecnologías low code</p>
              <p className="text-gray-400 text-xs">• ChatBots con OpenAI API en Python</p>
              <p className="text-gray-400 text-xs">• Adaptación a nuevas tecnologías</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}