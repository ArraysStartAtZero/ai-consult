'use client';

import { useEffect, useRef, useState } from 'react';
import { useT } from '@/lib/i18n';

/** Fictional team-chat demo: plays once when scrolled into view, can be replayed. */
const STEPS = [0, 900, 2300, 3200, 4100, 5000, 5900];

export default function ChatDemo() {
  const { t } = useT();
  const e = t.example;
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  const timers = useRef<number[]>([]);

  const play = () => {
    timers.current.forEach(clearTimeout);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setStep(STEPS.length); return; }
    setStep(0);
    timers.current = STEPS.map((ms, i) => window.setTimeout(() => setStep(i + 1), ms));
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([en]) => {
      if (en.isIntersecting) { play(); io.disconnect(); }
    }, { threshold: 0.45 });
    io.observe(el);
    return () => { io.disconnect(); timers.current.forEach(clearTimeout); };
  }, []);

  useEffect(() => { if (run) play(); }, [run]);

  const done = step >= STEPS.length;

  return (
    <div className="chat" ref={ref}>
      <div className="chat-bar">
        <span className="dots" aria-hidden><i /><i /><i /></span>
        <span className="mono">{e.channel}</span>
        <span className="chip-fict mono">{e.fictional}</span>
      </div>
      <div className="chat-body" aria-live="polite">
        {step >= 1 && (
          <div className="msg in">
            <span className="av av-h" aria-hidden>M</span>
            <div><b>{e.you}</b> <span className="mono time">14:02</span><p>{e.ask}</p></div>
          </div>
        )}
        {step === 2 && (
          <div className="msg in">
            <span className="av av-b" aria-hidden>K</span>
            <div><b>{e.bot}</b><p className="typing"><span /><span /><span /> <em>{e.thinking}</em></p></div>
          </div>
        )}
        {step >= 3 && (
          <div className="msg in">
            <span className="av av-b" aria-hidden>K</span>
            <div className="bot-reply">
              <b>{e.bot}</b> <span className="app mono">APP</span> <span className="mono time">14:02</span>
              <p>{e.answer}</p>
              {step >= 4 && (
                <table className="mini in">
                  <tbody>
                    {e.rows.map((r) => (
                      <tr key={r[1]}><td>{r[0]}</td><td className="mono">{r[1]}</td><td className="num">{r[2]}</td></tr>
                    ))}
                  </tbody>
                </table>
              )}
              {step >= 5 && <p className="in">{e.draft}</p>}
              {step >= 6 && (
                <div className="actions in">
                  <button type="button" className="b-approve" tabIndex={-1}>{e.approve}</button>
                  <button type="button" className="b-ghost" tabIndex={-1}>{e.edit}</button>
                </div>
              )}
              {step >= 7 && (
                <p className="srcs in mono">
                  {e.sources}: {e.sourcesList.map((s, i) => <span key={s}>{i ? ' · ' : ''}{s}</span>)}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="chat-foot">
        <span className="mono muted">{e.channel.replace('# ', '#')}</span>
        <button type="button" className="replay mono" onClick={() => setRun((r) => r + 1)} disabled={!done}>↻ {e.replay}</button>
      </div>
    </div>
  );
}
