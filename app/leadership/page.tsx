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
            <Card
              key={leader.id}
              className="border-[#E8DFED] dark:border-purple-900 shadow-xl bg-white dark:bg-[#1D0F38] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                {/* Left: Photo & Contact Info */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 border-b lg:border-b-0 lg:border-r border-[#E8DFED] dark:border-purple-900 pb-6 lg:pb-0 lg:pr-8">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#BB94E8] shadow-lg shrink-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-xl font-extrabold text-[#3A1B78] dark:text-white">
                      {leader.name}
                    </h2>
                    <Badge variant="purple" className="w-max mx-auto lg:mx-0 mt-1.5 text-[11px]">
                      {leader.position}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2.5 text-xs text-[#666666] dark:text-purple-200 w-full pt-2">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <Clock className="w-4 h-4 text-[#5C2D91] shrink-0" />
                      <span><b>Qabul kunlari:</b> {leader.receptionDays}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <Phone className="w-4 h-4 text-[#5C2D91] shrink-0" />
                      <a href={`tel:${leader.phone}`} className="font-bold text-[#5C2D91] dark:text-[#BB94E8] hover:underline">
                        {leader.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <Mail className="w-4 h-4 text-[#5C2D91] shrink-0" />
                      <span>{leader.email}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Biography & Accordion Sections */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-[#5C2D91] dark:text-[#BB94E8] uppercase tracking-wider">
                      Qisqacha Ma'lumot
                    </span>
                    <p className="text-sm text-[#1A1A1A] dark:text-gray-200 leading-relaxed">
                      {leader.biography}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
