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

        {/* Council Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#5C2D91] to-[#3A1B78] text-white flex flex-col gap-3 shadow-xl">
            <Trophy className="w-8 h-8 text-[#BB94E8]" />
            <h3 className="text-xl font-bold">Yoshlar Loyihalari Granti</h3>
            <p className="text-xs text-purple-200">
              Kengash a'zolari tomonidan ilgari surilgan eng yaxshi 50 ta IT va ta'limiy tashabbuslar moliyalashtiriladi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3A1B78] to-[#2E0854] text-white flex flex-col gap-3 shadow-xl">
            <HeartHandshake className="w-8 h-8 text-[#BB94E8]" />
            <h3 className="text-xl font-bold">Tengdoshdan-Tengdoshga</h3>
            <p className="text-xs text-purple-200">
              Iqtidorli o'quvchilar tengdoshlariga bepul mentorlik qiluvchi volontyorlik harakati.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2E0854] to-[#120924] text-white flex flex-col gap-3 shadow-xl border border-purple-800">
            <Award className="w-8 h-8 text-[#BB94E8]" />
            <h3 className="text-xl font-bold">Xalqaro Sammitlar</h3>
            <p className="text-xs text-purple-200">
              Har yili eng faol 100 nafar kengash a'zolari xalqaro yoshlar forumi va sammitlarida ishtirok etadi.
            </p>
          </div>
        </div>

        {/* Council Members Grid */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-black text-[#3A1B78] dark:text-[#BB94E8] text-center">
            Kengash Yetakchilari
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {councilMembers.map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden border-[#E8DFED] dark:border-purple-900 shadow-lg hover:shadow-xl transition-all bg-white dark:bg-[#1D0F38]"
              >
                <div className="h-60 w-full overflow-hidden bg-purple-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="purple">{member.region}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-black text-[#3A1B78] dark:text-white">
                    {member.name}
                  </CardTitle>
                  <span className="text-xs font-bold text-[#5C2D91] dark:text-[#BB94E8]">
                    {member.role}
                  </span>
                </CardHeader>

                <CardContent className="pt-0 text-xs text-[#666666] dark:text-purple-200">
                  <p><b>Asosiy Loyihasi:</b> {member.project}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
