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
    <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
      <ParticlesBackground />

      <div className="max-w-6xl w-full relative z-20">
        {/* Terminal Window */}
        <div className="bg-black/90 backdrop-blur-md border border-green-500/50 rounded-lg shadow-2xl hover:shadow-green-500/20 transition-all duration-500 font-mono">
          
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 rounded-t-lg border-b border-green-500/30">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-green-400 text-sm">~/about</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 text-green-400">
            
            {/* Avatar y comando inicial */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
                <Image
                  src="/images/luis.png"
                  alt="Luis Vera"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex-1">
                {currentSection >= 0 && (
                  <div className="mb-4">
                    <span className="text-green-300">$ </span>
                    <span className="text-white">
                      {currentSection === 0 ? displayedText : textContent[0]}
                      {currentSection === 0 && showCursor && <span className="text-green-400">|</span>}
                    </span>
                  </div>
                )}
                
                {currentSection >= 1 && (
                  <p className="text-gray-300 leading-relaxed">
                    {currentSection === 1 ? displayedText : textContent[1]}
                    {currentSection === 1 && showCursor && <span className="text-green-400">|</span>}
                  </p>
                )}
              </div>
            </div>

            {/* Skills Section */}
            {currentSection >= 2 && (
              <div>
                <div className="mb-4">
                  <span className="text-green-300">$ </span>
                  <span className="text-white">
                    {currentSection === 2 ? displayedText : textContent[2]}
                    {currentSection === 2 && showCursor && <span className="text-green-400">|</span>}
                  </span>
                </div>

                {currentSection >= 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {Object.entries(skills).map(([category, items], categoryIndex) => (
                      <div 
                        key={category}
                        className="space-y-3 opacity-0 animate-fade-in"
                        style={{ animationDelay: `${categoryIndex * 200}ms`, animationFillMode: 'forwards' }}
                      >
                        <h3 className="text-purple-400 font-semibold border-b border-purple-500/30 pb-1">
                          {category}
                        </h3>
                        <ul className="space-y-1">
                          {items.map((skill, index) => (
                            <li 
                              key={skill}
                              className="text-gray-300 text-sm flex items-center opacity-0 animate-fade-in"
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
              <div className="mt-8">
                <span className="text-green-300">$ </span>
                <span className="text-white">_</span>
                {showCursor && <span className="text-green-400">|</span>}
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 transition-all duration-1000 ${
          currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-purple-400 font-bold mb-3">🎓 Educación</h3>
            <p className="text-gray-300 text-sm">Ingeniería en Informática</p>
            <p className="text-gray-400 text-xs">Duoc UC - 2025</p>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-purple-400 font-bold mb-3">💼 Experiencia en Vantrust Capital</h3>
            <p className="text-gray-300 text-sm">Desarrollador y Analista de Datos</p>
            <p className="text-gray-300 text-sm">Práctica Laboral (Enero 2025 – Abril 2025)</p>
            <p className="text-gray-400 text-xs">• Creación Portal Web Gestión Usuarios de la empresa.</p>
            <p className="text-gray-400 text-xs">• Creación API en .NET para gestión Usuarios de AAD y EntraID.</p>
            <p className="text-gray-400 text-xs">•	Uso de Stored Procedures en mallas ETL de Pentaho para procesamiento de datos.</p>
            
          </div>

          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-purple-400 font-bold mb-3">💼 Experiencia en Brokerbot</h3>
            <p className="text-gray-300 text-sm">Desarrollo Web</p>
            <p className="text-gray-300 text-sm">Práctica Laboral (Mayo 2023 – Agosto 2023)</p>
            <p className="text-gray-400 text-xs">• Desarrollo de aplicaciones web utilizando tecnologías low code (Bubble)</p>
            <p className="text-gray-400 text-xs">• Desarrollo de ChatBots con la API de OpenAI usando Python</p>
            <p className="text-gray-400 text-xs">• Aprendí a adaptarme a nuevas tecnologías y herramientas.</p>
          </div>

            {/*<div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-purple-400 font-bold mb-3">🚀 Objetivo Profesional</h3>
            <p className="text-gray-300 text-sm font-medium">Desarrollo Full-Stack</p>
            <p className="text-gray-400 text-xs mt-2">• Aplicar conocimientos en React y .NET</p>
            <p className="text-gray-400 text-xs">• Desarrollo de APIs y manejo de BD</p>
            <p className="text-gray-400 text-xs">• Crecimiento en análisis de datos</p>
            <p className="text-gray-400 text-xs">• Entornos profesionales desafiantes</p>
          </div>*/}
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
      `}</style>
    </main>
  );
}