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

const scheduleItems = [
  {
    day: "mon",
    time: "14:00 - 15:30",
    subject: "Python va Sun'iy Idrok",
    room: "204-Xona (IT Lab)",
    teacher: "Jasur Rahmatov",
    group: "IT-101",
    status: "Faol",
  },
  {
    day: "mon",
    time: "15:45 - 17:15",
    subject: "Ingliz tili (IELTS Speaking)",
    room: "102-Xona",
    teacher: "Elena Kim",
    group: "ENG-202",
    status: "Faol",
  },
  {
    day: "tue",
    time: "14:00 - 15:30",
    subject: "Robototexnika va Arduino",
    room: "STEM Lab #1",
    teacher: "Bekzod Umarov",
    group: "ROBO-12",
    status: "Faol",
  },
  {
    day: "tue",
    time: "16:00 - 17:30",
    subject: "Web Dasturlash (React.js)",
    room: "205-Xona",
    teacher: "Madina Mirzayeva",
    group: "WEB-04",
    status: "Faol",
  },
  {
    day: "wed",
    time: "14:00 - 15:30",
    subject: "Python va Sun'iy Idrok",
    room: "204-Xona (IT Lab)",
    teacher: "Jasur Rahmatov",
    group: "IT-101",
    status: "Faol",
  },
  {
    day: "wed",
    time: "16:00 - 17:30",
    subject: "Grafik Dizayn va Figma",
    room: "Design Studio",
    teacher: "Nodira Aliyeva",
    group: "DES-01",
    status: "Faol",
  },
  {
    day: "thu",
    time: "14:00 - 15:30",
    subject: "Robototexnika va Arduino",
    room: "STEM Lab #1",
    teacher: "Bekzod Umarov",
    group: "ROBO-12",
    status: "Faol",
  },
  {
    day: "fri",
    time: "14:00 - 15:30",
    subject: "Professional Shaxmat",
    room: "Sport Zali #2",
    teacher: "Xurshid Tursunov",
    group: "CHESS-08",
    status: "Faol",
  },
  {
    day: "sat",
    time: "10:00 - 12:00",
    subject: "Mental Arifmetika va Mantiq",
    room: "301-Xona",
    teacher: "Dilnoza Karimova",
    group: "STEM-02",
    status: "Faol",
  },
];

export default function LessonSchedulePage() {
  const [selectedDay, setSelectedDay] = useState("mon");

  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Haftalik Darslar
          </Badge>
          <h1 className="text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Kelajak Markazlari Dars Jadvali
          </h1>
          <p className="text-sm text-[#666666] dark:text-purple-200">
            Hafta kunlari bo'yicha to'garak dars vaqtlari, xonalar va mas'ul o'qituvchilar jadvali.
          </p>
        </div>
      </div>
    </div>
  );
}
