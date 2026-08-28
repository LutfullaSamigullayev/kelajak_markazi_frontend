"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2, User, Phone, MapPin, BookOpen } from "lucide-react";
import { Club } from "@/lib/data";

interface EnrollmentModalProps {
  club: Club | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ club, isOpen, onClose }: EnrollmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    age: "",
    region: "Toshkent shahri",
  });

  if (!club) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="purple">{club.category}</Badge>
                <Badge variant="outline">{club.ageRange}</Badge>
              </div>
              <DialogTitle className="text-xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
                {club.name}
              </DialogTitle>
              <DialogDescription>
                To'garakka ariza topshirish uchun quyidagi ma'lumotlarni to'ldiring. Ariza 24 soat ichida ko'rib chiqiladi.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1A1A1A] dark:text-gray-200 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#5C2D91]" />
                  <span>O'quvchi / Validain F.I.SH.</span>
                </label>
                <Input
                  required
                  placeholder="Masalan: Abdullayev Sardor"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1A1A1A] dark:text-gray-200 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#5C2D91]" />
                    <span>Telefon Raqam</span>
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+998 90 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
            </form>
          </>
        ) : (
        )}
      </DialogContent>
    </Dialog>
  );
}
