"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sparkles, Calendar, Clock, MapPin, User, BookOpen } from "lucide-react";

const daysOfWeek = [
  { id: "mon", name: "Dushanba" },
  { id: "tue", name: "Seshanba" },
  { id: "wed", name: "Chorshanba" },
  { id: "thu", name: "Payshanba" },
  { id: "fri", name: "Juma" },
  { id: "sat", name: "Shanba" },
];


export default function LessonSchedulePage() {

  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
      </div>
    </div>
  );
}
