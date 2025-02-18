import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SessionProvider from "../../components/SessionProvider"; // <-- Importamos el nuevo Provider

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
        <SessionProvider> {/* ENVOLVEMOS TODA LA APP */}
          <Header />
          <div>{children}</div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
