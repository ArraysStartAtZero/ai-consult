/**
 * Minimal server-side Supabase client for the contact form (never import from client code).
 * Uses the publishable key and the same locked-down RPC as the portfolio, so enquiries land in
 * the portfolio's /admin inbox, tagged "[Kerne AI]".
 */
const URL_ = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

export const supabaseReady = () => Boolean(URL_ && KEY);

export async function rpc(fn: string, args: Record<string, unknown>) {
  if (!URL_ || !KEY) throw new Error('Supabase is not configured');
  return fetch(`${URL_}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
    cache: 'no-store',
  });
}
