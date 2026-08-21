import { statsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, GraduationCap, Award } from "lucide-react";

const iconMap = {
  Building2: Building2,
  Users: Users,
  GraduationCap: GraduationCap,
  Award: Award,
};

export default function StatsSection() {
  return (
    <section className="py-12 bg-white dark:bg-[#120924] relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Building2;

            return (
              <Card
                key={stat.id}
                className="hover:border-[#BB94E8] hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-[#1D0F38]"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0E6FA] dark:bg-[#2E0854] flex items-center justify-center text-[#5C2D91] dark:text-[#BB94E8] shrink-0 border border-purple-200 dark:border-purple-800">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-3xl font-black tracking-tight text-[#3A1B78] dark:text-[#BB94E8]">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold text-[#1A1A1A] dark:text-gray-200">
                      {stat.label}
                    </span>
                    <span className="text-xs text-[#666666] dark:text-purple-300">
                      {stat.change}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
