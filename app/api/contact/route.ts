import { NextResponse } from 'next/server';
import { rpc, supabaseReady } from '@/lib/supabaseRest';

export const runtime = 'nodejs';

const TAG = '[Kerne AI]';
const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

/** Tiny in-memory limiter (per server instance). */
const hits = new Map<string, number[]>();
function limited(key: string, max: number, windowMs: number) {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(key, arr);
  return arr.length > max;
}
const ipOf = (req: Request) =>
  (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';

export async function POST(req: Request) {
  if (limited(`contact:${ipOf(req)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ ok: false, error: 'rate' }, { status: 429 });
  }
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }

  // Honeypot: real visitors never fill this hidden field. Pretend success.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160 - TAG.length - 1);
  const message = clean(body.message, 4000);
  const lang = clean(body.lang, 5);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 422 });
  }
  if (!supabaseReady()) return NextResponse.json({ ok: false, error: 'storage' }, { status: 503 });

  // Shares the portfolio's inbox; the tag in the company field marks where it came from.
  const res = await rpc('portfolio_submit_contact', {
    p_name: name, p_email: email, p_company: company ? `${TAG} ${company}` : TAG, p_message: message,
    p_lang: lang || null, p_user_agent: (req.headers.get('user-agent') || '').slice(0, 300),
  });
  if (!res.ok) return NextResponse.json({ ok: false, error: 'storage' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
