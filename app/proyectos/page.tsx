'use client';

import { useState, useEffect } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Proyectos() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  const fullText = "ls -la ./projects/";

  const projects = [
    {
      category: "NEXT.JS",
      title: "Portal Gestión de Usuarios",
      description: "Aplicación web para gestión de permisos de usuarios y gestión de Base de Datos.",
      tech: ["React", "Next.js", ".NET8","Javscript", "Tailwind"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      category: ".NET 8",
      title: "API REST con EntraID",
      description: "API para backend gestión de permisos de usuarios de EntraID y AAD de la empresa, hecha mediante Procedimientos Almacenados (SP) en SQL Server.",
      tech: [".NET", "C#", "EntraID", "Azure Active Directory","VisualStudio", "SQL Server"],
      color: "from-red-500 to-pink-600"
    },
    {
      category: "NodeJS",
      title: "Plataforma Cursos",
      description: "Proyecto de título para Ingeniería Informática. Sistema completo de gestión de cursos online con autenticación y panel administrativo.",
      tech: ["NodeJS", "Express", "PostgreSQL", "Javascript"],
      color: "from-green-500 to-emerald-600"
    },  
    {
      category: "ETL/DATA",
      title: "ETL Pentaho",
      description: "Desarrollo de mallas ETL para procesamiento y transformación de datos empresariales usando Pentaho Data Integration con Stored Procedures.",
      tech: ["Pentaho", "SQL Server", "Stored Procedures", "ETL", "Data Processing"],
      color: "from-purple-500 to-violet-600",
      status: "Producción",
      company: "Vantrust Capital"
    },
      {
      category: "PYTHON/AI",
      title: "ChatBot con OpenAI",
      description: "Desarrollo de sistema de ChatBot inteligente integrando la API de OpenAI para automatización de respuestas y atención al cliente.",
      tech: ["Python", "OpenAI API"],
      color: "from-yellow-500 to-orange-600",
      status: "Implementado",
      company: "Brokerbot"
    }
  ];

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 2);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShowProjects(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <main className="relative z-10 px-4 pt-24 pb-32 md:px-6 md:py-20 md:min-h-screen">
      <ParticlesBackground />

      {/* Contenedor con scroll en móvil */}
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Terminal Window */}
        <div className="bg-black/90 backdrop-blur-md border border-green-500/50 rounded-lg shadow-2xl hover:shadow-green-500/20 transition-all duration-500 font-mono">
          
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 rounded-t-lg border-b border-green-500/30">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-green-400 text-sm">~/projects</span>
          </div>

          {/* Terminal Content */}
          <div className="p-4 md:p-6">
            {/* Command Line */}
            <div className="mb-6 md:mb-8">
              <span className="text-green-300">$ </span>
              <span className="text-white">
                {displayedText}
                {showCursor && <span className="text-green-400">|</span>}
              </span>
            </div>

            {/* Projects Grid */}
            {showProjects && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 md:p-6 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ 
                      animationDelay: `${index * 200}ms`, 
                      animationFillMode: 'forwards' 
                    }}
                  >
                    {/* Category Badge */}
                    <div className="mb-3 md:mb-4">
                      <span className="text-xs text-green-400 font-semibold bg-green-500/20 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2 md:mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 hover:bg-green-500/30 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Terminal cursor at bottom */}
            {showProjects && (
              <div className="mt-6 md:mt-8">
                <span className="text-green-300">$ </span>
                <span className="text-white">_</span>
                {showCursor && <span className="text-green-400">|</span>}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}