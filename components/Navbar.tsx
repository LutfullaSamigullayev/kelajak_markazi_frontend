"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import {
  Sparkles,
  Menu,
  X,
  ChevronDown,
  Phone,
  Eye,
  Globe,
  Search,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [highContrast, setHighContrast] = useState(false);
  const [lang, setLang] = useState<"UZ" | "RU">("UZ");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add("contrast-high");
    } else {
      document.documentElement.classList.remove("contrast-high");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar / Hotlines & Accessibility */}
      <div className="bg-gradient-to-r from-[#2E0854] via-[#3A1B78] to-[#5C2D91] text-white py-1.5 px-4 text-xs font-medium border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="tel:+998712000011"
              className="flex items-center gap-1.5 hover:text-[#BB94E8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#BB94E8]" />
              <span>Ishonch telefoni: <b>+998 (71) 200-00-11</b></span>
            </a>
            <span className="hidden md:inline text-purple-400">|</span>
            <span className="hidden md:inline text-purple-200">
              O'zbekiston Respublikasi Maktabgacha va maktab ta'limi vazirligi
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* High Contrast Mode */}
            <button
              onClick={toggleContrast}
              className={`flex items-center gap-1 px-2 py-0.5 rounded transition-all ${
                highContrast
                  ? "bg-yellow-400 text-black font-bold"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
              title="Ko'zi ojizlar uchun maxsus rejim"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Maxsus Imkoniyatlar</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded overflow-hidden p-0.5 border border-purple-400/20">
              <button
                onClick={() => setLang("UZ")}
                className={`px-2 py-0.5 text-[11px] rounded font-bold transition-all ${
                  lang === "UZ"
                    ? "bg-[#BB94E8] text-[#2E0854]"
                    : "text-purple-200 hover:text-white"
                }`}
              >
                O'ZB
              </button>
              <button
                onClick={() => setLang("RU")}
                className={`px-2 py-0.5 text-[11px] rounded font-bold transition-all ${
                  lang === "RU"
                    ? "bg-[#BB94E8] text-[#2E0854]"
                    : "text-purple-200 hover:text-white"
                }`}
              >
                РУС
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#120924]/95 backdrop-blur-md shadow-lg shadow-purple-900/5 py-3 border-b border-[#E8DFED]"
            : "bg-white dark:bg-[#120924] py-4 border-b border-[#E8DFED]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group hover:opacity-95 transition-opacity">
            <Image
              src="/kelajak.svg"
              alt="Kelajak Markazi Logo"
              width={160}
              height={45}
              className="h-10 sm:h-11 w-auto object-contain dark:brightness-125"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.dropdown &&
                  link.dropdown.some((item) => pathname === item.href));

              return (
              );
            })}
          </div>
      </nav>
    </header>
  );
}
