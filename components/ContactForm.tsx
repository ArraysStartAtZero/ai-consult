'use client';

import { useState } from 'react';
import { useT } from '@/lib/i18n';

export default function ContactForm() {
  const { t, lang } = useT();
  const c = t.contact;
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setState('sending');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, lang }) });
      setState(r.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  };

  if (state === 'sent') return <p className="form-sent" role="status">{c.sent}</p>;

  return (
    <form className="cform" onSubmit={submit}>
      <div className="row2">
        <label><span>{c.name}</span><input name="name" required maxLength={120} autoComplete="name" /></label>
        <label><span>{c.email}</span><input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
      </div>
      <label><span>{c.company}</span><input name="company" maxLength={140} autoComplete="organization" /></label>
      <label><span>{c.message}</span><textarea name="message" required maxLength={4000} rows={4} placeholder={c.messagePh} /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden />
      <div className="cform-foot">
        <button className="btn btn-primary" disabled={state === 'sending'}>{state === 'sending' ? c.sending : c.send} <span aria-hidden>→</span></button>
        <span className="small muted">{c.privacy}</span>
      </div>
      {state === 'error' && <p className="form-err" role="alert">{c.error}</p>}
    </form>
  );
}
