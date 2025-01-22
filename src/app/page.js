export default function Home() {
  return (
    <div>
      {/* Imagen de Bienvenida */}
      <section className="bg-background flex justify-center items-center py-12 mt-20">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl w-full">
          <img
            src="/banner-soy-paulina.png"
            alt="Soy Paulina - Bienvenida"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-background min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Imagen */}
          <div className="md:w-2/5">
            <img
              src="/paulina-med.jpeg"
              alt="Paulina meditando"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Texto */}
          <div className="md:w-3/5 text-center md:text-left mt-8 md:mt-0 md:pl-12">
            <h1 className="text-5xl font-roca text-secondary mb-6">
              Transforma tu vida a través del{" "}
              <span className="text-accent">movimiento</span> y la{" "}
              <span className="text-accent">conciencia</span>.
            </h1>
            <p className="text-lg text-secondary mb-8">
              Descubre herramientas que elevarán tu bienestar físico, emocional y
              espiritual.
            </p>
            <a
              href="#servicios"
              className="bg-secondary text-white font-bold py-3 px-10 rounded-full shadow-sm hover:bg-secondaryHover hover:shadow-xl transition duration-300"
            >
              Descubre Más
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
