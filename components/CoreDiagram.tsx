'use client';

import { useT } from '@/lib/i18n';

/**
 * Hero visual: the "kerne" (core) with the company's systems around it.
 * Pulses travel along the spokes into the core and back out. Pure SVG + CSS.
 */
const LABELS: Record<string, string[]> = {
  da: ['Regnskab', 'Indbakke', 'CRM', 'Teams', 'Webshop', 'Dokumenter'],
  en: ['Accounting', 'Inbox', 'CRM', 'Teams', 'Webshop', 'Documents'],
  pl: ['Księgowość', 'Poczta', 'CRM', 'Teams', 'Sklep', 'Dokumenty'],
};

export default function CoreDiagram() {
  const { lang } = useT();
  const labels = LABELS[lang];
  const R = 172;
  const nodes = labels.map((l, i) => {
    const a = (-90 + i * 60) * (Math.PI / 180);
    return { l, x: 250 + R * Math.cos(a), y: 250 + R * Math.sin(a), i };
  });

  return (
    <svg className="core" viewBox="0 0 500 500" role="img" aria-label="Kerne AI">
      <defs>
        <radialGradient id="coreFill" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="var(--pollen)" />
          <stop offset="100%" stopColor="var(--moss)" />
        </radialGradient>
      </defs>
      <circle className="ring r3" cx="250" cy="250" r="232" />
      <circle className="ring r2" cx="250" cy="250" r={R} />
      <circle className="ring r1" cx="250" cy="250" r="104" />
      {nodes.map((n) => (
        <g key={n.i}>
          <line className="spoke" x1="250" y1="250" x2={n.x} y2={n.y} />
          <line className="pulse" x1={n.x} y1={n.y} x2="250" y2="250" style={{ animationDelay: `${n.i * 0.55}s` }} />
        </g>
      ))}
      <g className="core-center">
        <circle cx="250" cy="250" r="58" fill="url(#coreFill)" />
        <circle cx="250" cy="250" r="58" className="core-glow" />
        <text x="250" y="256" textAnchor="middle" className="core-txt">kerne</text>
      </g>
      {nodes.map((n) => (
        <g key={`n${n.i}`} className="node">
          <circle cx={n.x} cy={n.y} r="7" />
          <text
            x={n.x + (n.x > 260 ? 16 : n.x < 240 ? -16 : 0)}
            y={n.y + (Math.abs(n.x - 250) < 10 ? (n.y < 250 ? -18 : 28) : 5)}
            textAnchor={n.x > 260 ? 'start' : n.x < 240 ? 'end' : 'middle'}
          >
            {n.l}
          </text>
        </g>
      ))}
    </svg>
  );
}
