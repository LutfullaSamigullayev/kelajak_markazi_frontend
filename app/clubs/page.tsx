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
      </div>
    </div>
  );
}
