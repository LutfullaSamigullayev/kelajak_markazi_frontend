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
          </div>
        </div>
      </div>
    </header>
  );
}
