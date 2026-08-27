import Link from "next/link";
import { directionsData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Languages, Cpu, Palette, Trophy, ArrowRight, Sparkles } from "lucide-react";

const iconMap = {
  Code2: Code2,
  Languages: Languages,
  Cpu: Cpu,
  Palette: Palette,
  Trophy: Trophy,
};

export default function DirectionsSection() {
  return (
    <section className="py-20 bg-[#F9F6FC] dark:bg-[#120924] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      </div>
    </section>
  );
}
