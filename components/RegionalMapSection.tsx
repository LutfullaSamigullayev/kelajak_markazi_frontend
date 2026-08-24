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

          {regionsData.map((reg) => (
            <TabsContent key={reg.id} value={reg.id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Detailed Info Card */}
                <div className="lg:col-span-6">
                  <Card className="border-[#BB94E8]/50 shadow-xl bg-white dark:bg-[#1D0F38]">
                    <CardHeader className="border-b border-[#E8DFED] dark:border-purple-900 pb-4">
                      <div className="flex items-center justify-between gap-2">
                        <Badge variant="purple">{reg.name}</Badge>
                        <span className="text-xs font-bold text-[#5C2D91] dark:text-[#BB94E8] flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" /> {reg.clubsCount} ta To'garaklar
                        </span>
                      </div>
                      <CardTitle className="text-2xl font-black text-[#3A1B78] dark:text-white mt-2">
                        {reg.centerName}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-6 flex flex-col gap-5 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#F0E6FA] dark:bg-[#2E0854] flex items-center justify-center text-[#5C2D91] shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">Manzil</span>
                          <span className="font-semibold text-foreground">{reg.address}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
