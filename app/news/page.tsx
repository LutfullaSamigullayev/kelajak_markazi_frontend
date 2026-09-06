import Link from "next/link";
import { newsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Sparkles, User } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="py-16 bg-[#F9F6FC] dark:bg-[#120924] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <Badge variant="purple">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Matbuot Xizmati
          </Badge>
          <h1 className="text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
            Yangiliklar va Rasmiy E'lonlar
          </h1>
          <p className="text-sm text-[#666666] dark:text-purple-200">
            Respublika Kelajak Markazlari bo'yicha eng so'nggi ma'lumotlar va tadbirlar dayjesti.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((article) => (
            <Card
              key={article.id}
              className="h-full flex flex-col justify-between overflow-hidden hover:border-[#5C2D91] hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#1D0F38]"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-purple-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="purple">{article.category}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between text-xs text-[#666666] dark:text-purple-300 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#5C2D91]" />
                      {article.date}
                    </span>
                  </div>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
