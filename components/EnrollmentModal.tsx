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
              </div>
            </form>
          </>
        ) : (
        )}
      </DialogContent>
    </Dialog>
  );
}
