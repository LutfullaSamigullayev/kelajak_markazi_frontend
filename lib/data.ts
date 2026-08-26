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

export const featuredClubs: Club[] = [
  {
    id: "club-1",
    name: "Python va Sun'iy Idrok Asoslari",
    category: "IT va Dasturlash",
    categorySlug: "it",
    ageRange: "12-17 yosh",
    duration: "6 oy",
    schedule: "Dush / Chor / Juma - 15:00",
    location: "Toshkent shahri, Kelajak Markazi #1",
    teacher: "Jasur Rahmatov (Senior Backend Dev)",
    rating: 4.9,
    enrolledCount: 28,
    maxCapacity: 30,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
    description: "Python dasturlash tili sinataksisi, algoritmlar va sun'iy idrok modellari bilan ishlash bo'yicha amaliy to'garak.",
    isPopular: true,
  },
  {
    id: "club-2",
    name: "Ingliz tili (IELTS / Speaking Club)",
    category: "Xorijiy Tillar",
    categorySlug: "languages",
    ageRange: "10-18 yosh",
    duration: "4 oy",
    schedule: "Sech / Pay / Shanba - 14:00",
    location: "Samarqand markazi",
    teacher: "Elena Kim (CELTA, IELTS 8.5)",
    rating: 4.8,
    enrolledCount: 25,
    maxCapacity: 25,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600",
    description: "Interaktiv so'zlashuv mashg'ulotlari, audio-vizual darslar va IELTS imtihoniga tayyorgarlik.",
    isPopular: true,
  },
  {
    id: "club-3",
    name: "Robototexnika va Arduino Injenering",
    category: "STEM va Aniq Fanlar",
    categorySlug: "science",
    ageRange: "9-15 yosh",
    duration: "5 oy",
    schedule: "Dush / Chor / Juma - 16:30",
    location: "Buxoro shahar BAMS",
    teacher: "Bekzod Umarov (Robotics Engineer)",
    rating: 4.95,
    enrolledCount: 22,
    maxCapacity: 24,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
    description: "Mikrosxemalar, mikrokontrollerlar, sensorlar va aqlli robotlarni dasturlash hamda yig'ish mashg'ulotlari.",
    isPopular: true,
  },
  {
    id: "club-4",
    name: "Frontend Web Dasturlash (React & Next.js)",
    category: "IT va Dasturlash",
    categorySlug: "it",
    ageRange: "13-18 yosh",
    duration: "6 oy",
    schedule: "Sech / Pay / Shanba - 16:00",
    location: "Farg'ona viloyati markazi",
    teacher: "Madina Mirzayeva",
    rating: 4.85,
    enrolledCount: 19,
    maxCapacity: 20,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    description: "HTML, CSS, JavaScript hamda zamonaviy React va Next.js karkaslarida zamonaviy veb-saytlar yaratish.",
    isPopular: false,
  },
  {
    id: "club-5",
    name: "Professional Shaxmat Mahorati",
    category: "Sport va Salomatlik",
    categorySlug: "sport",
    ageRange: "7-16 yosh",
    duration: "Cheksiz",
    schedule: "Dush / Juma - 14:00",
    location: "Toshkent shahri",
    teacher: "Xurshid Tursunov (FIDE ustasi)",
    rating: 4.9,
    enrolledCount: 30,
    maxCapacity: 30,
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=600",
    description: "Strategik fikrlash, taktik yurishlar va turnirlarga tayyorgarlik ko'rish shaxmat maktabi.",
    isPopular: false,
  },
  {
    id: "club-6",
    name: "Grafik Dizayn va 3D Modellashtirish",
    category: "Tasviriy San'at",
    categorySlug: "art",
    ageRange: "11-18 yosh",
    duration: "4 oy",
    schedule: "Chor / Shanba - 15:30",
    location: "Andijon markazi",
    teacher: "Nodira Aliyeva (UI/UX Designer)",
    rating: 4.75,
    enrolledCount: 16,
    maxCapacity: 20,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
    description: "Figma, Photoshop, Illustrator va Blender dasturlarida raqamli san'at va brending loyihalarini tuzish.",
    isPopular: false,
  },
];

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
  author: string;
}

export const newsData: NewsItem[] = [
  {
    id: "news-1",
    title: "Respublika Kelajak Markazlarida 'Raqamli Avlod' Respublika IT-Olimpiadasi Start Oldi",
    category: "Tadbirlar",
    date: "20-Avgust, 2026",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    summary: "O'zbekiston Respublikasi Maktabgacha va maktab ta'limi vazirligi tashabbusi bilan barcha hududiy Kelajak markazlarida yosh dasturchilar o'rtasida IT musobaqalariga start berildi.",
    content: "Musobaqada 5000 nafardan ortiq o'quvchilar Web dasturlash, Sun'iy idrok va Robototexnika yo'nalishlarida o'z iqtidorlarini namoyon etmoqdalar. G'oliblar respublika bosqichiga yo'llanma oladilar.",
    author: "Matbuot Xizmati",
  },
  {
    id: "news-2",
    title: "Samarqand va Buxoro Viloyatlarida Yangi Zamonaviy Kelajak Markazlari Foydalanishga Topshirildi",
    category: "Yangiliklar",
    date: "18-Avgust, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
    summary: "Yangi markazlar so'nggi avlod kompyuter texnologiyalari, IT laboratoriyalar hamda robototexnika majmualari bilan to'liq jihozlangan.",
    content: "Yangi ochilgan bino va inshootlar har kuni 2000 dan ortiq o'quvchi-yoshlarni qabul qilish imkoniyatiga ega. Barcha to'garaklar bepul asosda faoliyat yuritadi.",
    author: "Matbuot Xizmati",
  },
  {
    id: "news-3",
    title: "Xalqaro Tillarni O'rganish Bo'yicha Bepul Master-Klasslar Dasturi E'lon Qilindi",
    category: "Ta'lim",
    date: "15-Avgust, 2026",
    readTime: "2 min",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    summary: "Xalqaro sertifikatga ega bo'lgan tajribali ustozlar va ingliz tili egalari (native speakers) ishtirokida maxsus mahorat darslari tashkil etilmoqda.",
    content: "Darslarda o'quvchilar IELTS, CEFR imtihon topshiriqlarini bajarish usullari va jonli so'zlashuv (Speaking) texnikalari bo'yicha tavsiyalar oladilar.",
    author: "Ta'lim Bo'limi",
  },
];

export interface RegionCenter {
  id: string;
  name: string;
  centerName: string;
  address: string;
  phone: string;
  email: string;
  clubsCount: number;
  studentsCount: number;
  director: string;
}

export const regionsData: RegionCenter[] = [
  {
    id: "tashkent-city",
    name: "Toshkent shahri",
    centerName: "Bosh Kelajak Markazi",
    address: "Toshkent sh., Navoiy ko'chasi 2A-uy",
    phone: "+998 71 200-00-11",
    email: "tashkent@kelajak.uz",
    clubsCount: 35,
    studentsCount: 6500,
    director: "Abdullayev Sardor",
  },
  {
    id: "samarkand",
    name: "Samarqand viloyati",
    centerName: "Samarqand Viloyat Kelajak Markazi",
    address: "Samarqand sh., Mirzo Ulug'bek ko'chasi 45-uy",
    phone: "+998 66 230-11-22",
    email: "samarkand@kelajak.uz",
    clubsCount: 22,
    studentsCount: 4200,
    director: "Yusupov Temur",
  },
  {
    id: "bukhara",
    name: "Buxoro viloyati",
    centerName: "Buxoro Viloyat Kelajak Markazi",
    address: "Buxoro sh., Mustaqillik ko'chasi 12-uy",
    phone: "+998 65 221-33-44",
    email: "bukhara@kelajak.uz",
    clubsCount: 18,
    studentsCount: 3800,
    director: "Xodjayev Akmal",
  },
  {
    id: "fergana",
    name: "Farg'ona viloyati",
    centerName: "Farg'ona Viloyat Kelajak Markazi",
    address: "Farg'ona sh., Al-Farg'oniy ko'chasi 88-uy",
    phone: "+998 73 244-55-66",
    email: "fergana@kelajak.uz",
    clubsCount: 25,
    studentsCount: 5100,
    director: "Qodirova Shahnoza",
  },
  {
    id: "andijan",
    name: "Andijon viloyati",
    centerName: "Andijon Viloyat Kelajak Markazi",
    address: "Andijon sh., Bobur shoh ko'chasi 102-uy",
    phone: "+998 74 223-77-88",
    email: "andijan@kelajak.uz",
    clubsCount: 20,
    studentsCount: 4100,
    director: "Soliye Mashrab",
  },
  {
    id: "namangan",
    name: "Namangan viloyati",
    centerName: "Namangan Viloyat Kelajak Markazi",
    address: "Namangan sh., Uychi ko'chasi 15-uy",
    phone: "+998 69 227-99-00",
    email: "namangan@kelajak.uz",
    clubsCount: 19,
    studentsCount: 3900,
    director: "Mirzayev Oybek",
  },
];
