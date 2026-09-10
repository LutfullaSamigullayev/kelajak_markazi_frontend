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
      </div>
    </div>
  );
}
