import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Paulina Page',
  description: 'Página inspirada en Mamamedita.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Enlace a las fuentes de Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roca+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
