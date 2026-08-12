// Barcha matn va loyihalar shu yerda — dizaynga tegmasdan
// kontentni yangilash uchun faqat shu faylni tahrirlang.

export const profile = {
  name: 'Nurbek Buriyev',
  role: 'Frontend Developer',
  location: 'Samarqand, O‘zbekiston',
  bio: `HTML, CSS, JavaScript va React asosida ishlaydigan junior frontend
  dasturchiman. Tez, tushunarli va responsive interfeyslar yasashni,
  hamda g‘oyani ishlaydigan mahsulotga aylantirishni yoqtiraman.`,
  phone: '+998 93 113 30 24',
  telegram: 'Nurbek_Buriyev',
  instagram: 'nurbegiy',
  email: 'bnurbek704@gmail.com',
  resumeUrl: 'https://www.kickresume.com/cv/4bd5Mp/',
}

export const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 70 },
  { name: 'Vite', level: 70 },
  { name: 'Tailwind CSS', level: 65 },
  { name: 'REST API', level: 70 },
  { name: 'Git', level: 75 },
  { name: 'Responsive Design', level: 85 },
  { name: 'UI/UX asoslari', level: 75 },
]

export const strengths = [
  'Muammoni yechish', 'Jamoada ishlash', 'Moslashuvchanlik',
  'Mentorlik', 'Muloqot',
]

// Loyihalar: rasm maydoni (image) — o'zingiz screenshot qo'shasiz,
// src/assets/projects/ papkasiga joylang va yo'lni shu yerga yozing.
export const projects = [
  {
    id: 'shop',
    title: 'Do‘kon dasturi',
    subtitle: 'Qarz daftarcha',
    description: 'Mayda do‘konlar uchun qarz va sotuvlarni yozib boradigan boshqaruv dasturi.',
    tags: ['React', 'Supabase'],
    image: '/assets/projects/shop.jpg',
    link: 'https://t.me/DukonAppbot',
  },
  {
    id: 'menu',
    title: 'Restoran menyusi',
    subtitle: 'Raqamli menyu',
    description: 'Restoranlar uchun QR orqali ochiladigan, taomlarni toifalarga ajratilgan raqamli menyu.',
    tags: ['React', 'Responsive'],
    image: '/assets/projects/menu.jpg',
    link: 'https://e-oshxona.vercel.app/',
  },
  {
    id: 'old-portfolio',
    title: 'Eski portfolio',
    subtitle: 'Shaxsiy sayt',
    description: 'Ilk portfolio loyihasi — asosiy sahifa va loyihalar bo‘limi bilan.',
    tags: ['Html', 'CSS', 'JavaScript'],
    image: '/assets/projects/tic-tac-toe.jpg',
    link: 'https://artportfolio-96uf.vercel.app/',
  },
  {
    id: 'krasofka',
    title: 'Krasofka Dizayn',
    subtitle: 'Landing sahifa',
    description: 'Krasovka/oyoq kiyim brendlari uchun mahsulot kartalari bilan landing sahifa.',
    tags: ['UI', 'Landing'],
    image: '/assets/projects/old-portfolio.jpg',
    link: 'https://krasofka-dizayn.vercel.app/',
  },
  {
    id: 'tic-tac-toe',
    title: 'X-O O‘yini',
    subtitle: 'Mini o‘yin',
    description: 'JavaScript asosida yozilgan klassik X-O (tic-tac-toe) o‘yini.',
    tags: ['JavaScript', 'Game'],
    image: '/assets/projects/krasofka.jpg',
    link: 'https://x-o-lik-oyini.vercel.app/',
  },
]
