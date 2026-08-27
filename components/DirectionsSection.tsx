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
                <Card className="h-full hover:border-[#5C2D91] hover:shadow-2xl hover:shadow-purple-900/15 hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden bg-white dark:bg-[#1D0F38]">
                  {/* Top Color Accent Ribbon */}
                  <div className={`h-2 w-full bg-gradient-to-r ${item.color}`} />

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-[#F0E6FA] dark:bg-[#2E0854] flex items-center justify-center text-[#5C2D91] dark:text-[#BB94E8] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="font-bold">
                        {item.badge}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl font-extrabold text-[#1A1A1A] dark:text-white group-hover:text-[#5C2D91] dark:group-hover:text-[#BB94E8] transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col justify-between gap-6">

                    <div className="flex items-center justify-between pt-4 border-t border-[#E8DFED] dark:border-purple-900 text-xs font-bold text-[#5C2D91] dark:text-[#BB94E8]">
                      <span>{item.clubCount} ta Faol To'garaklar</span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Batafsil <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
