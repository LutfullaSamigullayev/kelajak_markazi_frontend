"use client";

import { leadershipData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Sparkles, Phone, Mail, Clock, Award, Briefcase, FileText } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Tashkiliy Tuzilma
          </Badge>
          <h1 className="text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Respublika "Kelajak Markazi" Rahbariyati
          </h1>
          <p className="text-sm text-[#666666] dark:text-purple-200">
            Markaz faoliyatini muvofiqlashtiruvchi, ta'lim sifatini va sohaviy yo'nalishlarni boshqaruvchi rahbarlar.
          </p>
        </div>

        {/* Leadership List */}
        <div className="flex flex-col gap-8">
          {leadershipData.map((leader) => (
          ))}
        </div>
      </div>
    </div>
  );
}
