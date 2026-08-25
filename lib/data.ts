export interface NavLink {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; description?: string }[];
}

export const navLinks: NavLink[] = [
  { label: "Bosh sahifa", href: "/" },
  {
    label: "Markaz haqida",
    href: "/about-us",
    dropdown: [
      { label: "Biz haqimizda", href: "/about-us", description: "Markaz missiyasi, tarixi va maqsadlari" },
      { label: "Rahbariyat", href: "/leadership", description: "Markaz rahbariyati va sohaviy o'rinbosarlar" },
      { label: "Kelajak markazlari", href: "/bams", description: "Respublika bo'ylab filiallar xaritasi va ko'rsatkichlari" },
      { label: "Maktab maslahatchilari", href: "/school-counselors", description: "Psixolog va maslahatchilar katalogi" },
      { label: "O'quvchilar kengashi", href: "/student-council", description: "Kengash a'zolari va respublika tashabbuslari" },
    ],
  },
  { label: "To'garaklar", href: "/clubs" },
  { label: "Dars jadvali", href: "/lesson-schedule" },
  { label: "Yangiliklar", href: "/news" },
  { label: "Aloqa", href: "/contact" },
];
