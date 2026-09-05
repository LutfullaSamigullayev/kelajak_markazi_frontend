import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Trophy, Users, Star, Award, ShieldAlert, HeartHandshake } from "lucide-react";

const councilMembers = [
  {
    id: "m-1",
    name: "Ergashova Mohira",
    role: "Respublika O'quvchilar Kengashi Raisi",
    region: "Toshkent shahri",
    project: "Raqamli Tenglik loyihasi tashabbuskori",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "m-2",
    name: "Akramov Diyorbek",
    role: "IT va Innovatsiyalar Bo'limi Yetakchisi",
    region: "Samarqand viloyati",
    project: "Yosh Dasturchilar Hamjamiyati yo'lboshchisi",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "m-3",
    name: "Ismoilova Sevinch",
    role: "Xalqaro Aloqalar va Tillar Kengashi",
    region: "Farg'ona viloyati",
    project: "Youth Speaking Club koordinatori",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
  },
];

export default function StudentCouncilPage() {
  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Yoshlar Tashabbusi
          </Badge>
          <h1 className="text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Respublika O'quvchilar Kengashi
          </h1>
          <p className="text-sm text-[#666666] dark:text-purple-200">
            Iqtidorli va faol o'quvchi-yoshlarning yetakchilik salohiyatini oshirish hamda tashabbuslarini qo'llab-quvvatlash tizimi.
          </p>
        </div>
      </div>
    </div>
  );
}
