import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unidad Nacional Antifraude | Registro y Atención Oficial de Víctimas",
  description: "Organismo oficial de prevención, atención y gestión legal a víctimas de fraude digital, cibernético y bancario en México.",
  keywords: ["Unidad Nacional Antifraude", "recuperacion de fondos", "fraude digital", "recuperar dinero", "atencion oficial a victimas"],
  authors: [{ name: "Unidad Nacional Antifraude" }],
  openGraph: {
    title: "Unidad Nacional Antifraude | Atención Oficial",
    description: "Atención e intervención inmediata a víctimas de fraudes cibernéticos e inversiones no autorizadas en México.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-rose-900 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
