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

export const statsData = [
  { id: 1, value: "14+", label: "Hududiy markazlar", icon: "Building2", change: "O'zbekiston bo'ylab" },
  { id: 2, value: "50,000+", label: "Faol o'quvchilar", icon: "Users", change: "2026-yil holatiga" },
  { id: 3, value: "120+", label: "Zamonaviy to'garaklar", icon: "GraduationCap", change: "15 ta yo'nalishda" },
  { id: 4, value: "850+", label: "Malakali ustozlar", icon: "Award", change: "Xalqaro sertifikatli" },
];
