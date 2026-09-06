"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, Search, UserCheck, Phone, MapPin, School, Mail } from "lucide-react";

const counselorsList = [
  {
    id: "c-1",
    name: "Narzullayeva Shahnoza Alisherovna",
    role: "Bosh Maslahatchi Psixolog",
    school: "Toshkent sh., 110-sonli Umumta'lim Maktabi",
    region: "Toshkent shahri",
    phone: "+998 90 111-22-33",
    email: "shahnoza@counselor.uz",
    experience: "12 yil",
    rating: "4.9",
  },
  {
    id: "c-2",
    name: "Tursunov Bobur Ergashovich",
    role: "Kasbga Yo'naltiruvchi Maslahatchi",
    school: "Samarqand sh., 14-sonli Maktab",
    region: "Samarqand viloyati",
    phone: "+998 91 222-33-44",
    email: "bobur@counselor.uz",
    experience: "9 yil",
    rating: "4.85",
  },
  {
    id: "c-3",
    name: "Alimova Zarina Odilovna",
    role: "Maktab Psixologi",
    school: "Buxoro sh., 5-sonli IDUM",
    region: "Buxoro viloyati",
    phone: "+998 93 333-44-55",
    email: "zarina@counselor.uz",
    experience: "7 yil",
    rating: "4.95",
  },
  {
    id: "c-4",
    name: "Qosimov Alisher Bahodirovich",
    role: "Iqtidorli Yoshlar Maslahatchisi",
    school: "Farg'ona sh., 2-sonli Maktab",
    region: "Farg'ona viloyati",
    phone: "+998 94 444-55-66",
    email: "alisher@counselor.uz",
    experience: "11 yil",
    rating: "4.8",
  },
];

export default function SchoolCounselorsPage() {
  const [search, setSearch] = useState("");

  const filtered = counselorsList.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.school.toLowerCase().includes(search.toLowerCase()) ||
    c.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Maktab Maslahatchilari
          </Badge>
          <h1 className="text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Maktab Psixologlari va Maslahatchilari Catalogi
          </h1>
          <p className="text-sm text-[#666666] dark:text-purple-200">
            O'quvchilar va validaynlar uchun kasbga yo'naltirish, psixologik ko'mak va maslahat xizmati.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto w-full relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5C2D91]" />
          <Input
            placeholder="Maslahatchi ismi, maktab yoki viloyat bo'yicha qidiruv..."
            className="pl-10 h-11"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
