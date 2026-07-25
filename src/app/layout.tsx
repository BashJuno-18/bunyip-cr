import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bunyip CR | Agencia Digital Boutique",
  description: "Estudio web boutique en Costa Rica de alta gama. Desarrollo web vanguardista y consultoría en modernización IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable} dark antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}
