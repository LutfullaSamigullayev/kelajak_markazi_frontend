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
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <Badge variant="purple" className="px-4 py-1 text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#5C2D91]" />
            Ta'lim Yo'nalishlari
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A1B78] dark:text-[#BB94E8] tracking-tight">
            Zamonaviy Kasblar va Kelajak Fanlari
          </h2>
          <p className="text-base text-[#666666] dark:text-purple-200 max-w-2xl">
            Har bir o'quvchi o'z iqtidoriga mos keladigan amaliy to'garakni tanlab, malakali ustozlardan bilim olishi mumkin.
          </p>
        </div>

        {/* Directions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directionsData.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Code2;

            return (
              <Link key={item.id} href={`/clubs?cat=${item.id}`}>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
