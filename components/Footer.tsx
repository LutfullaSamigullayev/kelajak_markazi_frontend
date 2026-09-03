import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Globe,
  ChevronRight,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4C5.6 5 12 5 12 5s6.4 0 8.1.6A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4c-1.7.6-8.1.6-8.1.6s-6.4 0-8.1-.6A2 2 0 0 1 2.5 17z" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2E0854] via-[#240643] to-[#17032D] text-white pt-16 pb-8 border-t border-purple-900/60 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5C2D91]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#BB94E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-800/40">
          {/* Col 1: About Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-purple-400/20">
                <Image
                  src="/kelajak.svg"
                  alt="Kelajak Markazi Logo"
                  width={160}
                  height={45}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-sm text-purple-200/80 leading-relaxed max-w-sm">
              O'quvchi-yoshlarning intellektual va ijodiy salohiyatini oshirish, zamonaviy kasblar, IT va xorijiy tillarni puxta o'zlashtirishlari uchun yaratilgan respublika ta'lim platformasi.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-[#5C2D91] border border-purple-700/50 flex items-center justify-center text-purple-200 hover:text-white transition-all hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-[#5C2D91] border border-purple-700/50 flex items-center justify-center text-purple-200 hover:text-white transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-[#5C2D91] border border-purple-700/50 flex items-center justify-center text-purple-200 hover:text-white transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-[#5C2D91] border border-purple-700/50 flex items-center justify-center text-purple-200 hover:text-white transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white tracking-wide border-l-2 border-[#BB94E8] pl-2.5">
              Sayt Bo'limlari
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-purple-200/80">
              <li>
                <Link href="/" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>Bosh sahifa</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>Biz haqimizda</span>
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>Rahbariyat</span>
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>To'garaklar Katalogi</span>
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>Yangiliklar va Tadbirlar</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Direction */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white tracking-wide border-l-2 border-[#BB94E8] pl-2.5">
              Kelajak Yo'nalishlari
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-purple-200/80">
              <li>
                <Link href="/clubs?cat=it" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>IT va Web Dasturlash</span>
                </Link>
              </li>
              <li>
                <Link href="/clubs?cat=languages" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>Xorijiy Tillar (IELTS/CEFR)</span>
                </Link>
              </li>
              <li>
                <Link href="/clubs?cat=science" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>Robototexnika va STEM</span>
                </Link>
              </li>
              <li>
                <Link href="/bams" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>Hududiy Markazlar</span>
                </Link>
              </li>
              <li>
                <Link href="/school-counselors" className="hover:text-[#BB94E8] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span>Maktab Maslahatchilari</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white tracking-wide border-l-2 border-[#BB94E8] pl-2.5">
              Bog'lanish
            </h3>
            <div className="flex flex-col gap-3 text-sm text-purple-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BB94E8] shrink-0 mt-1" />
                <span>Toshkent shahar, Navoiy ko'chasi, 2A-uy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BB94E8] shrink-0" />
                <a href="tel:+998712000011" className="hover:text-white transition-colors">
                  +998 (71) 200-00-11
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BB94E8] shrink-0" />
                <a href="mailto:info@kelajak.uz" className="hover:text-white transition-colors">
                  info@kelajak.uz
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#BB94E8] shrink-0" />
                <span>Dush - Shanba: 09:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
