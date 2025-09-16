'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md bg-opacity-95 text-white z-50 shadow-lg border-b border-gray-500/20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Portafolio
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link 
              href="/" 
              className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-gray-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              Sobre Mí
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/proyectos" 
              className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              Proyectos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/contacto" 
              className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-2 rounded-full hover:from-purple-600 hover:to-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-black/95 backdrop-blur-md border-t border-white-500/20 transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col gap-2 p-6">
          <li>
            <Link 
              href="/" 
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/proyectos" 
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link 
              href="/contacto" 
              className="block bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-3 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}