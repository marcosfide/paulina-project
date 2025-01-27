"use client"

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background text-secondary shadow-md fixed top-0 left-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo como enlace al inicio */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-paulina-sf.png"
            alt="Logo de Paulina"
            className="h-16 w-auto"
          />
        </a>

        {/* Botón del menú hamburguesa */}
        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Icono de menú hamburguesa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navegación */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-background md:bg-transparent md:static md:flex justify-end md:space-x-8 md:block`}
        >
          <a
            href="/cursos"
            className="block text-secondary hover:text-secondaryHover font-bold transition duration-300 hover:text-shadow py-2 px-6 md:py-0"
          >
            Cursos
          </a>
          <a
            href="/sesiones"
            className="block text-secondary hover:text-secondaryHover font-bold transition duration-300 hover:text-shadow py-2 px-6 md:py-0"
          >
            Sesiones
          </a>
          <a
            href="/contact"
            className="block text-secondary hover:text-secondaryHover font-bold transition duration-300 hover:text-shadow py-2 px-6 md:py-0"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
