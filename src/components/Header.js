"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext"; // Importar el contexto

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-background text-secondary shadow-md fixed top-0 left-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo-paulina-sf.png" alt="Logo de Paulina" className="h-16 w-auto" />
        </Link>

        {/* Navegación */}
        <nav className="flex">
          <Link href="/" className="block text-secondary hover:text-secondaryHover font-bold transition duration-300 hover:text-shadow py-2 px-4 md:py-0 content-center">
            Inicio
          </Link>
          <Link href="/sesiones" className="block text-secondary hover:text-secondaryHover font-bold transition duration-300 hover:text-shadow py-2 px-4 md:py-0 content-center">
            Sesiones
          </Link>
          <Link href="/recursos" className="block text-secondary hover:text-secondaryHover font-bold transition duration-300 hover:text-shadow py-2 px-4 md:py-0 content-center">
            Recursos gratuitos
          </Link>
          <Link href="/cursos" className="block text-secondary hover:text-secondaryHover font-bold transition duration-300 hover:text-shadow py-2 px-4 md:py-0 content-center">
            Cursos
          </Link>
          <Link href="/contact" className="block text-secondary hover:text-secondaryHover font-bold transition duration-300 hover:text-shadow py-2 px-4 md:py-0 content-center">
            Contacto
          </Link>

          {/* Si el usuario está logueado, mostrar su nombre y botón de logout */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="font-bold text-secondary">{user.nombre}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link href="/login" className="bg-secondary hover:bg-secondaryHover text-white font-bold py-2 px-6 rounded-md transition duration-300">
              Iniciar Sesión
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
