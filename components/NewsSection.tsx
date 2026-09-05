import Link from "next/link";
import { newsData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Sparkles, User } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#1D0F38] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <Badge variant="purple" className="w-max mx-auto md:mx-0">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              So'nggi Axborotlar
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#3A1B78] dark:text-[#BB94E8]">
              Yangiliklar va Tadbirlar
            </h2>
            <p className="text-sm text-[#666666] dark:text-purple-200">
              Respublika Kelajak Markazlari hayotidagi eng so'nggi yangiliklar va e'lonlar.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#5C2D91] text-[#5C2D91] dark:border-[#BB94E8] dark:text-[#BB94E8] font-bold text-sm hover:bg-purple-50 dark:hover:bg-purple-900/40 transition-colors"
          >
            <span>Barcha Yangiliklar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((article) => (
            <Link key={article.id} href={`/news`}>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
