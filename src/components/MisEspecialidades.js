

// LA IDEA DE ESTA SECCION ES PONER UNA IMAGEN CON UNA BREVE EXPLICACION DE CADA ESPECIALIDAD COMO POR EJEMPLO EL YOGA NIDRA O EL COACHING ONTOLOGICO Y LUEGO EN EL HOVER PONER UNA ORACION

export default function MisEspecialidades() {
  const especialidades = [
    {
      id: 1,
      src: "/especialidades/yoga-nidra.png",
      alt: "Yoga Nidra",
      caption: "Conecta con tu interior sin juicios a través del Yoga Nidra.",
    },
    {
      id: 2,
      src: "/especialidades/coaching-ontologico.png",
      alt: "Coaching Ontológico",
      caption:
        "Expande tu perspectiva y alcanza tus objetivos con Coaching Ontológico.",
    },
    {
      id: 3,
      src: "/especialidades/expresion-corporal.png",
      alt: "Expresión Corporal",
      caption:
        "Explora la libertad y autenticidad de tu cuerpo mediante la expresión corporal.",
    },
    {
      id: 4,
      src: "/especialidades/reiki.png",
      alt: "Reiki",
      caption: "Energía sanadora para equilibrar cuerpo, mente y espíritu.",
    },
    {
      id: 5,
      src: "/especialidades/ciclos-mensuales.png",
      alt: "Ciclos Mensuales",
      caption: "Sesiones grupales diseñadas para profundizar en tu bienestar.",
    },
    {
      id: 6,
      src: "/especialidades/profesora-yoga.png",
      alt: "Profesora de Yoga",
      caption: "Descubre el poder del yoga para transformar tu cuerpo y mente.",
    },
  ];

  return (
    <section className="bg-background text-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-roca text-secondary mb-12">Mis Especialidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {especialidades.map((especialidad) => (
            <div
              key={especialidad.id}
              className="relative group overflow-hidden rounded-lg shadow-lg min-h-40"
            >
              {/* Imagen */}
              <img
                src={especialidad.src}
                alt={especialidad.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold px-4 text-center">
                  {especialidad.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
