# Nurbek Buriyev — Portfolio

React (Vite) + Tailwind CSS asosida qurilgan shaxsiy portfolio sayti.
Contact formasi Supabase Edge Function orqali to‘g‘ridan-to‘g‘ri
Telegram botga xabar yuboradi.

## 1. Loyihani ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` ochiladi.

Production build uchun:

```bash
npm run build
```

Natija `dist/` papkasida chiqadi — uni Vercel yoki istalgan static
hostingga yuklashingiz mumkin (Vercel’ga `vercel` buyrug‘i bilan
to‘g‘ridan-to‘g‘ri deploy qilsangiz bo‘ladi, chunki eski loyihalaringiz
ham Vercel’da turibdi).

## 2. O‘z suratlaringizni qo‘yish

Rasm joylari ataylab bo‘sh qoldirilgan (siz aytganingizdek):

- **Hero surat** — `src/components/Hero.jsx` ichida, izohli qatorni
  toping:
  ```jsx
  {/* TODO: shu joyga o'z suratingizni qo'ying */}
  ```
  O‘rniga:
  ```jsx
  <img src="/assets/profile.jpg" alt={profile.name} className="w-full h-full object-cover" />
  ```
- **About surat** — xuddi shunday `src/components/About.jsx` ichida.
- Rasmlarni `public/assets/` papkasiga joylang (masalan
  `public/assets/profile.jpg`), shunda `/assets/profile.jpg` yo‘li
  ishlaydi.

Loyiha rasmlari (screenshotlar) `public/assets/projects/` papkasida —
`krasofka.jpg`, `old-portfolio.jpg`, `tic-tac-toe.jpg` — siz yuborgan
skrinshotlar allaqachon shu yerga joylashtirildi. **Do‘kon dasturi**
va **Restoran menyusi** uchun hali skrinshot yo‘q — tayyor bo‘lgach
xuddi shu papkaga `shop.jpg` va `menu.jpg` nomlari bilan qo‘shsangiz,
avtomatik chiqadi.

## 3. Matnni tahrirlash

Barcha matn (ism, bio, ko‘nikmalar, loyihalar tavsifi, telefon,
Telegram, Instagram) bitta faylda: **`src/data/content.js`**. Dizaynga
tegmasdan shu yerdan hammasini o‘zgartirishingiz mumkin.

## 4. Contact forma → Telegram sozlash

Forma ishlashi uchun 2 ta narsa kerak: Telegram bot va Supabase
Edge Function (bot tokenini xavfsiz saqlash uchun — uni frontendga
yozib bo‘lmaydi, chunki har kim ko‘rib qoladi).

### 4.1. Telegram bot yaratish

1. Telegram’da **@BotFather** ga yozing → `/newbot` → nom bering.
2. Sizga bot **token** beradi (masalan `123456:ABC-...`) — saqlab qo‘ying.
3. Botga o‘zingiz `/start` bosing (bot sizga xabar yubora olishi uchun).
4. Chat ID’ingizni bilish uchun **@userinfobot** ga yozing — u sizga
   raqamli ID beradi (masalan `123456789`) — shuni ham saqlang.

### 4.2. Supabase loyihasi va Edge Function

1. [supabase.com](https://supabase.com) da bepul loyiha oching.
2. Supabase CLI o‘rnating va login qiling:
   ```bash
   npm install -g supabase
   supabase login
   supabase link --project-ref <PROJECT_REF>
   ```
3. Maxfiy kalitlarni (bot token va chat id) Supabase’ga saqlang:
   ```bash
   supabase secrets set TELEGRAM_BOT_TOKEN=123456:ABC-...
   supabase secrets set TELEGRAM_CHAT_ID=123456789
   ```
4. Functionni deploy qiling (kodi `supabase/functions/send-message/index.ts`
   da tayyor turibdi):
   ```bash
   supabase functions deploy send-message --no-verify-jwt
   ```
5. Supabase sizga function manzilini beradi, masalan:
   ```
   https://xxxxx.supabase.co/functions/v1/send-message
   ```

### 4.3. Frontendga ulash

`.env` fayl yarating (`.env.example` dan nusxa oling) va manzilni
yozing:

```
VITE_CONTACT_ENDPOINT=https://xxxxx.supabase.co/functions/v1/send-message
```

Shundan so‘ng saytdagi forma to‘ldirilib yuborilganda xabar
to‘g‘ridan-to‘g‘ri sizning Telegram’ingizga keladi.

> Vercel’ga deploy qilganda shu `VITE_CONTACT_ENDPOINT` o‘zgaruvchisini
> Vercel loyihasining **Settings → Environment Variables** bo‘limiga
> ham qo‘shishni unutmang.

## 5. Struktura

```
src/
  components/    → Navbar, Hero, About, Skills, Projects, Contact, Footer
  data/content.js → barcha matn va loyihalar ro'yxati
  hooks/useReveal.js → scroll animatsiyasi uchun
supabase/functions/send-message/ → Telegram’ga yuboruvchi backend
public/assets/ → rasmlar
```
