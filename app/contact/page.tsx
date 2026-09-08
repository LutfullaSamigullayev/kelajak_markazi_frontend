"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Qayta Aloqa
          </Badge>
          <h1 className="text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Biz Bilan Bog'laning
          </h1>
          <p className="text-sm text-[#666666] dark:text-purple-200">
            Savollaringiz, takliflaringiz yoki murojaatlaringiz bo'lsa shaklni to'ldiring yoki call-markazimizga qo'ng'iroq qiling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card className="p-6 border-[#E8DFED] dark:border-purple-900 bg-white dark:bg-[#1D0F38] shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F0E6FA] dark:bg-[#2E0854] flex items-center justify-center text-[#5C2D91] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#3A1B78] dark:text-white">Call-Markaz / Ishonch Telefoni</h3>
                  <a href="tel:+998712000011" className="text-lg font-black text-[#5C2D91] dark:text-[#BB94E8]">
                    +998 (71) 200-00-11
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Dush-Shanba: 09:00 - 18:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#E8DFED] dark:border-purple-900 bg-white dark:bg-[#1D0F38] shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F0E6FA] dark:bg-[#2E0854] flex items-center justify-center text-[#5C2D91] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#3A1B78] dark:text-white">Elektron Pochta</h3>
                  <a href="mailto:info@kelajak.uz" className="text-base font-bold text-[#5C2D91] dark:text-[#BB94E8]">
                    info@kelajak.uz
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Murojaatlar 24 soat ichida ko'rib chiqiladi</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#E8DFED] dark:border-purple-900 bg-white dark:bg-[#1D0F38] shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F0E6FA] dark:bg-[#2E0854] flex items-center justify-center text-[#5C2D91] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#3A1B78] dark:text-white">Bosh Bino Manzili</h3>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    Toshkent shahar, Navoiy ko'chasi 2A-uy
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">Mo'ljal: Alisher Navoiy metrosi</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
