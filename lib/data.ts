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

export const directionsData = [
  {
    id: "it",
    title: "IT va Raqamli Texnologiyalar",
    description: "Web dasturlash, Python, Sun'iy idrok va Grafik dizayn bo'yicha amaliy to'garaklar.",
    icon: "Code2",
    color: "from-purple-600 to-indigo-600",
    badge: "Eng ommabop",
    clubCount: 24,
  },
  {
    id: "languages",
    title: "Xorijiy Tillarni O'rganish",
    description: "Ingliz tili (IELTS/CEFR), Nemis tili, Xitoy va Koreys tillari bo'yicha intensiv kurslar.",
    icon: "Languages",
    color: "from-violet-600 to-purple-800",
    badge: "Sertifikatli",
    clubCount: 18,
  },
  {
    id: "science",
    title: "Aniq va Tabiiy Fanlar (STEM)",
    description: "Robototexnika, Mental arifmetika, Fizika va Matematika to'garaklari.",
    icon: "Cpu",
    color: "from-indigo-600 to-purple-600",
    badge: "Amaliy",
    clubCount: 15,
  },
  {
    id: "art",
    title: "Tasviriy San'at va Madaniyat",
    description: "Rasm chizish, Shaxmat, Musiqa va Teatr mahorat darslari.",
    icon: "Palette",
    color: "from-fuchsia-600 to-purple-700",
    badge: "Ijodiy",
    clubCount: 20,
  },
  {
    id: "sport",
    title: "Sport va Salomatlik",
    description: "Shaxmat, Stol tennisi, Gimnastika va jismoniy rivojlanish to'garaklari.",
    icon: "Trophy",
    color: "from-purple-700 to-violet-900",
    badge: "Sog'lom hayot",
    clubCount: 12,
  },
];

export interface Club {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  ageRange: string;
  duration: string;
  schedule: string;
  location: string;
  teacher: string;
  rating: number;
  enrolledCount: number;
  maxCapacity: number;
  image: string;
  description: string;
  isPopular?: boolean;
}
