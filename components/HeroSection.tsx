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
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-bold w-max mx-auto lg:mx-0 shadow-lg">
              <Sparkles className="w-4 h-4 text-[#BB94E8] animate-pulse" />
              <span>Respublika bo'yicha bepul ta'lim to'garaklari</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Kelajagingizni <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#BB94E8] via-purple-200 to-white bg-clip-text text-transparent">
                biz bilan quring
              </span>
            </h1>

            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              O'zbekiston Respublikasi "Kelajak Markazi" — yoshlarning IT, dasturlash, xorijiy tillar hamda zamonaviy STEM fanlarini puxta o'rganishlari uchun zamonaviy imkoniyatlar makonidir.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/clubs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-[#2E0854] font-black text-base hover:bg-purple-50 shadow-xl shadow-purple-950/40 hover:scale-105 active:scale-95 transition-all"
              >
                <BookOpen className="w-5 h-5 text-[#5C2D91]" />
                <span>To'garaklarga Yozilish</span>
                <ArrowRight className="w-4 h-4 text-[#5C2D91]" />
              </Link>

              <Link
                href="/about-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base backdrop-blur-md hover:border-white transition-all"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Markaz Video Taqdimoti</span>
              </Link>
            </div>

            {/* Badges / Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 border-t border-purple-400/20 text-xs text-purple-200 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#BB94E8]" />
                <span>Davlat sertifikati beriladi</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#BB94E8]" />
                <span>850+ sertifikatlangan ustozlar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
