import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SessionProvider from "../components/SessionProvider";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Paulina | Psicoyoga y Coaching",
  description: "Descubre herramientas para transformar tu vida a través del movimiento y la conciencia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roca+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <SessionProvider> {/* ENVOLVEMOS TODA LA APP */}
            <Header />
            <main>{children}</main>
            <Footer />
          </SessionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
