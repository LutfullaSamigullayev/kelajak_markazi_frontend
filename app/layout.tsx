import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kelajak Markazi — Respublika Ta'lim Tizimi",
  description:
    "O'quvchi-yoshlarning intellektual va ijodiy salohiyatini oshirish, IT, dasturlash va xorijiy tillarni o'rganish platformasi.",
  keywords: ["Kelajak markazi", "uzedu", "to'garaklar", "IT ta'lim", "bepul kurslar", "o'quvchilar kengashi"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[#BB94E8] selection:text-[#2E0854]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
