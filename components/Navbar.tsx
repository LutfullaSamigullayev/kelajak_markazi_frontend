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

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
    </header>
  );
}
