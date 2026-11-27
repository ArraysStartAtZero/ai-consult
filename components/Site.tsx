'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LANGS, type Lang } from '@/lib/dict';
import { detectLang, LangProvider, rich, saveLang, useT } from '@/lib/i18n';
import { EMAIL, PORTFOLIO } from '@/lib/site';
import CoreDiagram from './CoreDiagram';
import ChatDemo from './ChatDemo';
import ContactForm from './ContactForm';

export default function Site() {
  const [lang, setLang] = useState<Lang>('da');

  useEffect(() => {
    const l = detectLang();
    setLang(l);
    requestAnimationFrame(() => document.documentElement.classList.add('i18n-ready'));
  }, []);

  useEffect(() => {
    const d = document.documentElement;
    d.lang = lang;
    d.dataset.lang = lang;
  }, [lang]);

  const change = (l: Lang) => { saveLang(l); setLang(l); };

  return (
    <LangProvider lang={lang}>
      <Page onLang={change} />
    </LangProvider>
  );
}

function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden className="mark">
      <circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".55" />
      <circle cx="16" cy="16" r="4" fill="var(--pollen)" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function useReveal(dep: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.shown)');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('shown'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('shown'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function Page({ onLang }: { onLang: (l: Lang) => void }) {
  const { t, lang } = useT();
  const [open, setOpen] = useState<number | null>(0);
  useReveal(lang);

  const nav: [string, string][] = [
    ['#ydelser', t.nav.services], ['#eksempel', t.nav.example], ['#forloeb', t.nav.process], ['#om', t.nav.about], ['#faq', t.nav.faq],
  ];

  return (
    <>
      <a className="skip" href="#main">{t.nav.skip}</a>
      <header className="top">
        <div className="wrap top-in">
          <a href="#" className="brand" aria-label={t.nav.home}><Mark /> <span>Kerne<i>AI</i></span></a>
          <nav className="links" aria-label="Primary">
            {nav.map(([h, l]) => <a key={h} href={h}>{l}</a>)}
          </nav>
          <div className="top-r">
            <div className="seg" role="radiogroup" aria-label={t.nav.langLabel}>
              {LANGS.map((l) => (
                <button key={l} role="radio" aria-checked={lang === l} className={lang === l ? 'on' : ''} lang={l} onClick={() => onLang(l)}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#kontakt" className="btn btn-sm btn-primary hide-s">{t.nav.cta}</a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="kicker mono"><span className="blip" aria-hidden />{t.hero.kicker}</p>
            <h1 className="display">{rich(t.hero.title)}</h1>
            <p className="lede">{t.hero.lede}</p>
            <div className="ctas">
              <a href="#kontakt" className="btn btn-primary">{t.hero.cta1} <span aria-hidden>→</span></a>
              <a href="#eksempel" className="btn btn-ghost">{t.hero.cta2}</a>
            </div>
            <ul className="points">
              {t.hero.points.map((p) => <li key={p}><Check />{p}</li>)}
            </ul>
          </div>
          <div className="hero-art" aria-hidden><CoreDiagram /></div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden>
          <div className="mq-track">
            {[0, 1].map((k) => (
              <div className="mq-set" key={k}>
                {t.marquee.map((m) => <span key={m + k}>{m}<Mark size={14} /></span>)}
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section id="ydelser" className="sec wrap">
          <Head eyebrow={t.services.eyebrow} title={t.services.title} lede={t.services.lede} />
          <div className="cards">
            {t.services.items.map((s, i) => (
              <article className={`card c${i}`} key={s.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="mono tag">{s.tag}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        {/* EXAMPLE */}
        <section id="eksempel" className="sec dark">
          <div className="wrap ex-grid">
            <div className="ex-copy">
              <Head eyebrow={t.example.eyebrow} title={t.example.title} lede={t.example.lede} />
              <dl className="notes">
                {t.example.notes.map(([a, b], i) => (
                  <div key={a} data-reveal style={{ transitionDelay: `${i * 90}ms` }}><dt><span className="mono">0{i + 1}</span>{a}</dt><dd>{b}</dd></div>
                ))}
              </dl>
            </div>
            <ChatDemo />
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="sec wrap">
          <Head eyebrow={t.connects.eyebrow} title={t.connects.title} lede={t.connects.lede} />
          <div className="groups">
            {t.connects.groups.map(([g, items], i) => (
              <div className="group" key={g} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <p className="mono tag">{g}</p>
                <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="small muted note">{t.connects.note}</p>
        </section>

        {/* PROCESS */}
        <section id="forloeb" className="sec wrap">
          <Head eyebrow={t.process.eyebrow} title={t.process.title} lede={t.process.lede} />
          <ol className="steps">
            {t.process.steps.map((s, i) => (
              <li className="step" key={s.n} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="step-h">
                  <span className="step-n">{s.n}</span>
                  <div><h3>{s.title}</h3><p className="mono time">{s.time}</p></div>
                </div>
                <ul>{s.body.map((b) => <li key={b}>{b}</li>)}</ul>
              </li>
            ))}
          </ol>
          <p className="price-note"><Mark size={18} /> {t.process.price}</p>
        </section>

        {/* PRINCIPLES */}
        <section className="sec wrap">
          <Head eyebrow={t.principles.eyebrow} title={t.principles.title} />
          <div className="princ">
            {t.principles.items.map(([a, b], i) => (
              <div key={a} data-reveal style={{ transitionDelay: `${i * 70}ms` }}><h3>{a}</h3><p>{b}</p></div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="om" className="sec wrap about">
          <div className="about-card" data-reveal>
            <div className="portrait"><Image src="/me.webp" alt={t.about.photoAlt} width={662} height={828} sizes="(max-width: 980px) 280px, 360px" /></div>
            <p className="who"><b>Filip Tomczak</b><span className="muted">{t.about.role}</span></p>
          </div>
          <div>
            <Head eyebrow={t.about.eyebrow} title={t.about.title} />
            {t.about.body.map((p) => <p className="body" key={p.slice(0, 20)}>{p}</p>)}
            <ul className="points">{t.about.facts.map((f) => <li key={f}><Check />{f}</li>)}</ul>
            <a className="link" href={PORTFOLIO} target="_blank" rel="noopener">{t.about.link} ↗</a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sec wrap faq">
          <Head eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <div className="qa">
            {t.faq.items.map(([q, a], i) => (
              <div className={`q ${open === i ? 'open' : ''}`} key={q}>
                <h3>
                  <button aria-expanded={open === i} aria-controls={`qa-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                    {q}<span className="pm" aria-hidden />
                  </button>
                </h3>
                <div className="a" id={`qa-${i}`} role="region"><div><p>{a}</p></div></div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="sec contact">
          <div className="wrap contact-grid">
            <div>
              <Head eyebrow={t.contact.eyebrow} title={t.contact.title} lede={t.contact.lede} />
              <p className="small mail-line">{t.contact.orMail} <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="foot wrap">
        <span className="brand sm"><Mark size={16} /> {t.footer.line}</span>
        <span className="muted small">© {new Date().getFullYear()} Kerne AI. {t.footer.rights}</span>
      </footer>
    </>
  );
}

function Head({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="head" data-reveal>
      <p className="eyebrow mono">{eyebrow}</p>
      <h2 className="display">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="check">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
