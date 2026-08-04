// Supabase Edge Function: send-message
//
// Kontakt formasidan kelgan xabarni Telegram botga yuboradi.
// Bot tokeni bu yerda ochiq yozilmaydi — Supabase "secrets" orqali
// muhit o'zgaruvchisi sifatida saqlanadi (README.md dagi yo'riqnomaga qarang).
//
// Deploy: supabase functions deploy send-message

import { serve } from 'https://deno.land/std@0.192.0/http/server.ts'

const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')
const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  try {
    const { name, phone, message } = await req.json()

    if (!name || !message) {
      return new Response(JSON.stringify({ error: 'Ism va xabar majburiy' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const text =
      `📩 *Yangi xabar — portfolio sayti*\n\n` +
      `*Ism:* ${escapeMd(name)}\n` +
      (phone ? `*Telefon:* ${escapeMd(phone)}\n` : '') +
      `*Xabar:*\n${escapeMd(message)}`

    const tgRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'MarkdownV2',
        }),
      }
    )

    if (!tgRes.ok) {
      const errBody = await tgRes.text()
      console.error('Telegram API error:', errBody)
      return new Response(JSON.stringify({ error: 'Telegram yuborishda xatolik' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Noto‘g‘ri so‘rov' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

// MarkdownV2 uchun maxsus belgilarni ekranlaydi
function escapeMd(str: string) {
  return str.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, '\\$&')
}
