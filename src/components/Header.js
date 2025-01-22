export default function Header() {
  return (
    <header className="bg-background text-secondary shadow-md fixed top-0 left-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo como enlace al inicio */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-paulina-sf.png"
            alt="Logo de Paulina"
            className="h-20 w-auto -my-2 ml-4"
          />
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="/cursos"
            className="text-secondary hover:text-secondaryHover font-bold transition duration-300"
          >
            Cursos
          </a>
          <a
            href="/sesiones"
            className="text-secondary hover:text-secondaryHover font-bold transition duration-300"
          >
            Sesiones
          </a>
          <a
            href="/contact"
            className="text-secondary hover:text-secondaryHover font-bold transition duration-300"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}