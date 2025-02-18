"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Crear contexto de usuario
const AuthContext = createContext();

// Hook para acceder al contexto
export function useAuth() {
  return useContext(AuthContext);
}

// Proveedor de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Intentar obtener el usuario del localStorage al cargar la app
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Función para actualizar usuario después del login
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
