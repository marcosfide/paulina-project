import { supabase } from "@/utils/supabase";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Buscar usuario por email
    const { data: user, error } = await supabase
      .from("usuarios")
      .select("id, nombre, email, password_hash")
      .eq("email", email)
      .single();

    if (error || !user) {
      return new Response(JSON.stringify({ error: "Usuario no encontrado" }), {
        status: 400,
      });
    }

    // Comparar la contraseña
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return new Response(JSON.stringify({ error: "Contraseña incorrecta" }), {
        status: 400,
      });
    }

    // Enviar todos los datos del usuario en la respuesta
    return new Response(
      JSON.stringify({
        message: "Login exitoso",
        user: {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error en el servidor" }),
      { status: 500 }
    );
  }
}
