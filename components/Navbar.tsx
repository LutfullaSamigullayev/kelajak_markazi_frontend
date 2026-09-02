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

              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#F0E6FA] text-[#5C2D91] dark:bg-[#2E0854] dark:text-[#BB94E8]"
                          : "text-[#1A1A1A] hover:text-[#5C2D91] hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-purple-950/40"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180 text-[#5C2D91]" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu Box */}
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-72 rounded-2xl bg-white dark:bg-[#1D0F38] shadow-xl border border-[#E8DFED] dark:border-purple-900 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col gap-0.5 p-2.5 rounded-xl transition-all ${
                              pathname === item.href
                                ? "bg-[#F0E6FA] text-[#5C2D91] dark:bg-[#2E0854] dark:text-[#BB94E8] font-bold"
                                : "hover:bg-purple-50 text-[#1A1A1A] dark:text-gray-200 hover:text-[#5C2D91] dark:hover:bg-purple-900/30"
                            }`}
                          >
                            <span className="text-sm font-semibold">{item.label}</span>
                            {item.description && (
                              <span className="text-[11px] text-[#666666] dark:text-purple-300 font-normal">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#F0E6FA] text-[#5C2D91] dark:bg-[#2E0854] dark:text-[#BB94E8]"
                      : "text-[#1A1A1A] hover:text-[#5C2D91] hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-purple-950/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/clubs"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#5C2D91] to-[#3A1B78] hover:from-[#3A1B78] hover:to-[#2E0854] shadow-md shadow-purple-900/20 hover:shadow-lg hover:shadow-purple-900/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <BookOpen className="w-4 h-4 text-[#BB94E8]" />
              <span>To'garakka Yozilish</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#3A1B78] bg-purple-50 dark:bg-purple-900/40 dark:text-purple-200 hover:bg-purple-100 transition-colors"
              aria-label="Menyuni ochish"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[102px] bg-white dark:bg-[#120924] border-b border-[#E8DFED] dark:border-purple-900 shadow-2xl p-4 z-40 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-300">
        </div>
      )}
    </header>
  );
}
