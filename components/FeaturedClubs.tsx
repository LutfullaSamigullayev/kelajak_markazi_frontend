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
        </div>
      </div>
    </section>
  );
}
