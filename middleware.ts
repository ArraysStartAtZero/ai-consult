import { NextResponse, type NextRequest } from 'next/server';

/** Remember the visitor's country (Vercel IP geolocation) so the client can pick DA / PL / EN. */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const country = req.headers.get('x-vercel-ip-country');
  if (country && req.cookies.get('kerne-country')?.value !== country) {
    res.cookies.set('kerne-country', country, { path: '/', maxAge: 60 * 60 * 24 * 30, sameSite: 'lax' });
  }
  return res;
}

export const config = { matcher: ['/'] };
