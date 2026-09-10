"use client";

import { useState } from "react";
import { featuredClubs, directionsData, Club } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EnrollmentModal from "@/components/EnrollmentModal";
import { Search, Filter, Star, Clock, MapPin, Users, Sparkles } from "lucide-react";

export default function ClubsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredClubs = featuredClubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || club.categorySlug === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEnroll = (club: Club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            To'garaklar Katalogi
          </Badge>
          <h1 className="text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Respublika Bo'yicha Barcha To'garaklar
          </h1>
          <p className="text-sm text-[#666666] dark:text-purple-200">
            Yo'nalish, yosh toifasi hamda hudud bo'yicha saralab o'zingizga mos to'garakni tanlang.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1D0F38] border border-[#E8DFED] dark:border-purple-900 shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5C2D91]" />
            <Input
              placeholder="To'garak nomi yoki kalit so'z..."
              className="pl-10 h-11"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-[#5C2D91] text-white shadow-md shadow-purple-900/20"
                  : "bg-[#F0E6FA] text-[#5C2D91] hover:bg-purple-200 dark:bg-[#2E0854] dark:text-[#BB94E8]"
              }`}
            >
              Barchasi
            </button>
            {directionsData.map((dir) => (
              <button
                key={dir.id}
                onClick={() => setSelectedCategory(dir.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === dir.id
                    ? "bg-[#5C2D91] text-white shadow-md shadow-purple-900/20"
                    : "bg-[#F0E6FA] text-[#5C2D91] hover:bg-purple-200 dark:bg-[#2E0854] dark:text-[#BB94E8]"
                }`}
              >
                {dir.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club) => (
              <Card
                key={club.id}
                className="flex flex-col justify-between overflow-hidden hover:border-[#5C2D91] hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#1D0F38]"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-purple-100">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="purple">{club.category}</Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{club.rating}</span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-black text-[#1A1A1A] dark:text-white line-clamp-1">
                      {club.name}
                    </CardTitle>
                    <p className="text-xs text-[#666666] dark:text-purple-300 line-clamp-2 mt-1">
                      {club.description}
                    </p>
                  </CardHeader>
                </div>

              </Card>
            ))
          ) : (
          )}
        </div>
      </div>
    </div>
  );
}
