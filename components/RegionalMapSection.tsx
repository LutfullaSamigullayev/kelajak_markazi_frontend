"use client";

import { useState } from "react";
import { regionsData } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Building, Users, Sparkles, Navigation } from "lucide-react";

export default function RegionalMapSection() {
  const [selectedRegion, setSelectedRegion] = useState(regionsData[0].id);

  return (
    <section className="py-20 bg-[#F9F6FC] dark:bg-[#120924] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Respublika Hududlari
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Kelajak Markazlari Hududlar Kesimida
          </h2>
          <p className="text-sm text-[#666666] dark:text-purple-200 max-w-2xl">
            O'zbekistonning barcha viloyatlarida zamonaviy jihozlangan BAMS filiallari faoliyat yuritmoqda.
          </p>
        </div>

        {/* Tabs Interface */}
        <Tabs defaultValue={regionsData[0].id} onValueChange={setSelectedRegion} className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2 scrollbar-none">
            <TabsList className="flex flex-wrap justify-center gap-1.5 h-auto p-2 max-w-full">
              {regionsData.map((reg) => (
                <TabsTrigger key={reg.id} value={reg.id} className="text-xs sm:text-sm">
                  {reg.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
