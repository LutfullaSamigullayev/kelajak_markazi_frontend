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

  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
      </div>
    </div>
  );
}
