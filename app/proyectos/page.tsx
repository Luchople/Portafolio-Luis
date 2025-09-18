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
      tech: ["React", "Next.js", ".NET8","Javascript", "Tailwind"],
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
    <div className="relative z-10 px-4 sm:px-6 py-4 sm:py-8 min-h-[calc(100vh-8rem)]">
      <ParticlesBackground />

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Terminal Window */}
        <div className="bg-black/90 backdrop-blur-md border border-green-500/50 rounded-lg shadow-2xl hover:shadow-green-500/20 transition-all duration-500 font-mono">
          
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/80 rounded-t-lg border-b border-green-500/30">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            <span className="ml-2 sm:ml-4 text-green-400 text-xs sm:text-sm">~/projects</span>
          </div>

          {/* Terminal Content */}
          <div className="p-3 sm:p-4 md:p-6">
            {/* Command Line */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <span className="text-green-300 text-sm sm:text-base">$ </span>
              <span className="text-white text-sm sm:text-base">
                {displayedText}
                {showCursor && <span className="text-green-400">|</span>}
              </span>
            </div>

            {/* Projects Grid */}
            {showProjects && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4 md:p-6 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 opacity-0 animate-fade-in hover:scale-105"
                    style={{ 
                      animationDelay: `${index * 200}ms`, 
                      animationFillMode: 'forwards' 
                    }}
                  >
                    {/* Category Badge and Status/Company */}
                    <div className="mb-2 sm:mb-3 md:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-2 py-1 rounded w-fit">
                        {project.category}
                      </span>
                      {(project.status || project.company) && (
                        <div className="flex flex-col gap-1">
                          {project.status && (
                            <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded w-fit">
                              {project.status}
                            </span>
                          )}
                          {project.company && (
                            <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded w-fit">
                              {project.company}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-400 mb-2 md:mb-3 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 hover:bg-green-500/30 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 md:px-3 py-1 bg-gray-500/20 border border-gray-500/30 rounded-full text-xs text-gray-400">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Terminal cursor at bottom */}
            {showProjects && (
              <div className="mt-4 sm:mt-6 md:mt-8">
                <span className="text-green-300 text-sm sm:text-base">$ </span>
                <span className="text-white text-sm sm:text-base">_</span>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Mejoras para mobile */
        @media (max-width: 640px) {
          .line-clamp-2 {
            -webkit-line-clamp: 2;
          }
          .line-clamp-4 {
            -webkit-line-clamp: 3;
          }
        }
      `}</style>
    </div>
  );
}