import { supabase } from "@/utils/supabase";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password, nombre } = await req.json();

    // Verificar que los datos existen
    if (!email || !password || !nombre) {
      return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), {
        status: 400,
      });
    }

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario en Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    // Guardar el usuario en la tabla "usuarios"
    const { error: dbError } = await supabase.from("usuarios").insert([
      { id: data.user.id, email, nombre, password_hash: hashedPassword },
    ]);

    if (dbError) {
      return new Response(JSON.stringify({ error: dbError.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "Usuario registrado correctamente" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error en el servidor" }), { status: 500 });
  }
}
