"use client";

import { useState } from "react";
import Link from "next/link";
import { featuredClubs, Club } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EnrollmentModal from "@/components/EnrollmentModal";
import { Star, Users, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function FeaturedClubs() {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = (club: Club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-white dark:bg-[#1D0F38] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <Badge variant="purple" className="w-max mx-auto md:mx-0">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Ommabop Ta'lim Dasturlari
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
              Mashhur To'garaklar Katalo'gi
            </h2>
            <p className="text-sm text-[#666666] dark:text-purple-200">
              Eng yuqori reytingga ega va qabuli davom etayotgan to'garaklar ro'yxati.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
