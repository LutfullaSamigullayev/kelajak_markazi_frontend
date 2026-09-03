"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, Award, ShieldCheck, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#2E0854] via-[#5C2D91] to-[#3A1B78] text-white py-20 lg:py-28 overflow-hidden">
      {/* Dynamic Background Glow & Grid Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        </div>
      </div>
    </section>
  );
}
