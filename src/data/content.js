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
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Tailwind CSS',
  'REST API', 'Git', 'Responsive Design', 'UI/UX asoslari',
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
    link: '#',
  },
  {
    id: 'menu',
    title: 'Restoran menyusi',
    subtitle: 'Raqamli menyu',
    description: 'Restoranlar uchun QR orqali ochiladigan, taomlarni toifalarga ajratilgan raqamli menyu.',
    tags: ['React', 'Responsive'],
    image: '/assets/projects/menu.jpg',
    link: '#',
  },
  {
    id: 'old-portfolio',
    title: 'Eski portfolio',
    subtitle: 'Shaxsiy sayt',
    description: 'Ilk portfolio loyihasi — asosiy sahifa va loyihalar bo‘limi bilan.',
    tags: ['React'],
    image: '/assets/projects/old-portfolio.jpg',
    link: 'https://artportfolio-96uf.vercel.app/',
  },
  {
    id: 'krasofka',
    title: 'Krasofka Dizayn',
    subtitle: 'Landing sahifa',
    description: 'Krasovka/oyoq kiyim brendlari uchun mahsulot kartalari bilan landing sahifa.',
    tags: ['UI', 'Landing'],
    image: '/assets/projects/krasofka.jpg',
    link: 'https://krasofka-dizayn.vercel.app/',
  },
  {
    id: 'tic-tac-toe',
    title: 'X-O O‘yini',
    subtitle: 'Mini o‘yin',
    description: 'JavaScript asosida yozilgan klassik X-O (tic-tac-toe) o‘yini.',
    tags: ['JavaScript', 'Game'],
    image: '/assets/projects/tic-tac-toe.jpg',
    link: 'https://x-o-lik-oyini.vercel.app/',
  },
]
