import { regionsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Building2, MapPin, Phone, Mail, Users, Award } from "lucide-react";

export default function BamsPage() {
  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Filiallar
          </Badge>
          <h1 className="text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Kelajak Markazlari Hududiy Filiallari
          </h1>
          <p className="text-sm text-[#666666] dark:text-purple-200">
            O'zbekiston Respublikasi bo'ylab 14 ta hududdagi Kelajak Markazi filiallari ro'yxati va bog'lanish ma'lumotlari.
          </p>
        </div>
      </div>
    </div>
  );
}
