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

          <Link
            href="/clubs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#5C2D91] text-[#5C2D91] dark:border-[#BB94E8] dark:text-[#BB94E8] font-bold text-sm hover:bg-purple-50 dark:hover:bg-purple-900/40 transition-colors"
          >
            <span>Barcha To'garaklarni Ko'rish</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClubs.map((club) => (
            <Card
              key={club.id}
              className="flex flex-col justify-between overflow-hidden hover:border-[#5C2D91] hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-300 group bg-white dark:bg-[#120924]"
            >
              <div>
                {/* Image & Badge overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-purple-100">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge variant="purple" className="shadow-md">
                      {club.category}
                    </Badge>
                    {club.isPopular && <Badge variant="accent">HOT</Badge>}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{club.rating}</span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-black text-[#1A1A1A] dark:text-white line-clamp-1 group-hover:text-[#5C2D91] dark:group-hover:text-[#BB94E8] transition-colors">
                    {club.name}
                  </CardTitle>
                  <p className="text-xs text-[#666666] dark:text-purple-300 line-clamp-2 mt-1">
                    {club.description}
                  </p>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
