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
    </footer>
  );
}
