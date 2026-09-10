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

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regionsData.map((reg) => (
            <Card
              key={reg.id}
              className="border-[#E8DFED] dark:border-purple-900 shadow-lg hover:shadow-2xl hover:border-[#5C2D91] transition-all bg-white dark:bg-[#1D0F38]"
            >
              <CardHeader className="pb-3 border-b border-[#E8DFED] dark:border-purple-900">
                <div className="flex items-center justify-between">
                  <Badge variant="purple">{reg.name}</Badge>
                  <span className="text-xs font-bold text-[#5C2D91] dark:text-[#BB94E8]">
                    {reg.clubsCount} ta To'garak
                  </span>
                </div>
                <CardTitle className="text-xl font-extrabold text-[#3A1B78] dark:text-white mt-2">
                  {reg.centerName}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-4 flex flex-col gap-3 text-xs text-[#666666] dark:text-purple-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#5C2D91] shrink-0 mt-0.5" />
                  <span className="font-semibold text-foreground">{reg.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#5C2D91] shrink-0" />
                  <a href={`tel:${reg.phone}`} className="font-bold text-[#5C2D91] dark:text-[#BB94E8]">
                    {reg.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#5C2D91] shrink-0" />
                  <span>{reg.email}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#E8DFED] dark:border-purple-900 mt-1">
                  <span className="flex items-center gap-1 font-bold text-[#1A1A1A] dark:text-gray-200">
                    <Users className="w-3.5 h-3.5 text-[#5C2D91]" />
                    {reg.studentsCount} o'quvchilar
                  </span>
                  <Badge variant="outline">Rahbar: {reg.director}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
