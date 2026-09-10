import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Compass, Award, Shield, Users, CheckCircle2 } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Header Hero */}
        <div className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Markaz Haqida
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Kelajak Markazining Missiyasi va Maqsadlari
          </h1>
          <p className="text-base text-[#666666] dark:text-purple-200 leading-relaxed">
            Respublika "Kelajak Markazi" — maktab o'quvchilarining darsdan tashqari vaqtlarini mazmunli tashkil etish, ularga zamonaviy IT, xorijiy tillar va kasb-hunar ko'nikmalarini bepul o'rgatuvchi davlat muassasasidir.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 border-[#BB94E8]/50 shadow-xl bg-white dark:bg-[#1D0F38] relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#F0E6FA] dark:bg-[#2E0854] flex items-center justify-center text-[#5C2D91] dark:text-[#BB94E8] mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-[#3A1B78] dark:text-white mb-3">
              Asosiy Missiyamiz
            </h2>
            <p className="text-sm text-[#666666] dark:text-purple-200 leading-relaxed">
              O'zbekistonning barcha tuman va shaharlaridagi har bir o'quvchiga zamonaviy raqamli texnologiyalar, sun'iy idrok hamda xalqaro tillarni o'rganishda teng va sifatli imkoniyatlarni taqdim etish.
            </p>
          </Card>

          <Card className="p-8 border-[#BB94E8]/50 shadow-xl bg-white dark:bg-[#1D0F38] relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#F0E6FA] dark:bg-[#2E0854] flex items-center justify-center text-[#5C2D91] dark:text-[#BB94E8] mb-6">
              <Compass className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-[#3A1B78] dark:text-white mb-3">
              Rivojlanish Strategiyamiz
            </h2>
            <p className="text-sm text-[#666666] dark:text-purple-200 leading-relaxed">
              2026-2030 yillarga mo'ljallangan dasturga ko'ra, respublika bo'ylab to'garaklar sonini 200 dan oshirish hamda har yili 100,000 dan ziyod o mezonli iqtidorlarni saralab xalqaro olimpiadalarga tayyorlash.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
