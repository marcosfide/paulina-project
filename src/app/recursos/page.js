"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Importamos el contexto de autenticación
import { useRouter } from "next/navigation";

export default function RecursosPage() {
  const { user } = useAuth(); // Obtenemos el usuario logueado
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);

  // Lista de recursos
  const recursos = [
    { id: 1, title: "Diseña tu propio futuro", type: "ebook", link: "/Diseña-tu-propio-Futuro.pdf" },
    { id: 2, title: "Meditación Guiada para Relajación", type: "video", link: "/videos/meditacion.mp4f" },
  ];

  // Manejo del acceso a los recursos
  const handleAccessResource = (resource) => {
    if (user) {
      // Si el usuario está logueado, redirigir al recurso
      window.open(resource.link, "_blank");
    } else {
      // Si NO está logueado, mostrar el mensaje de login
      setShowLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Recursos Gratuitos</h1>

      {/* Lista de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recursos.map((recurso) => (
          <div
            key={recurso.id}
            onClick={() => handleAccessResource(recurso)}
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 transition"
          >
            <h2 className="text-xl font-semibold">{recurso.title}</h2>
            <p className="text-gray-600">{recurso.type === "ebook" ? "📖 eBook" : "🎥 Video"}</p>
          </div>
        ))}
      </div>

      {/* Mensaje y Formulario de Login si el usuario no está logueado */}
      {showLogin && !user && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4 text-center">Accede a los Recursos</h2>
          <p className="text-gray-600 text-center mb-4">
            Para acceder a estos recursos, inicia sesión o regístrate.
          </p>
          <button
            onClick={() => router.push("/login")}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Iniciar Sesión
          </button>
            <p className="mt-4 text-center text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
                Regístrate aquí
            </a>
            </p>
        </div>
      )}
    </div>
  );
}
