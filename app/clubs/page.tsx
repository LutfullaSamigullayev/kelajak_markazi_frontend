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

  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
      </div>
    </div>
  );
}
