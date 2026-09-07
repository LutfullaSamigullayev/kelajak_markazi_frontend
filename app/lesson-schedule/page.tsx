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

        {/* Timetable Tabs */}
        <Tabs defaultValue="mon" onValueChange={setSelectedDay} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto p-2">
              {daysOfWeek.map((day) => (
                <TabsTrigger key={day.id} value={day.id} className="text-xs sm:text-sm font-bold">
                  {day.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {daysOfWeek.map((day) => {
            const dayLessons = scheduleItems.filter((item) => item.day === day.id);

            return (
              <TabsContent key={day.id} value={day.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dayLessons.length > 0 ? (
                    dayLessons.map((lesson, idx) => (
                      <Card
                        key={idx}
                        className="border-[#E8DFED] dark:border-purple-900 shadow-md hover:shadow-xl hover:border-[#5C2D91] transition-all bg-white dark:bg-[#1D0F38]"
                      >
                        <CardHeader className="pb-3 border-b border-[#E8DFED] dark:border-purple-900">
                          <div className="flex items-center justify-between">
                            <Badge variant="purple">{lesson.group}</Badge>
                            <span className="text-xs font-bold text-[#5C2D91] dark:text-[#BB94E8] flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" /> {lesson.time}
                            </span>
                          </div>
                        </CardHeader>
                      </Card>
                    ))
                  ) : (
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
