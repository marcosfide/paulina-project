"use client"
import { useState } from "react";

const cursosData = [
  { id: 1, nombre: "Meditación para principiantes" },
  { id: 2, nombre: "Mindfulness en tu día a día" },
  { id: 3, nombre: "Yoga para la relajación" },
  { id: 4, nombre: "Técnicas de respiración consciente" },
  { id: 5, nombre: "Autoconocimiento y bienestar emocional" },
];

export default function Cursos() {
  const [search, setSearch] = useState(""); // Estado para el buscador
  const [cursos, setCursos] = useState(cursosData); // Lista de cursos

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    // Filtra los cursos según el texto ingresado
    const filteredCursos = cursosData.filter((curso) =>
      curso.nombre.toLowerCase().includes(value)
    );
    setCursos(filteredCursos);
  };

  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Cursos</h1>

      {/* Campo de búsqueda */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar curso..."
          value={search}
          onChange={handleSearch}
          className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Lista de cursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.length > 0 ? (
          cursos.map((curso) => (
            <div
              key={curso.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{curso.nombre}</h2>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No se encontraron cursos.
          </p>
        )}
      </div>
    </section>
  );
}
