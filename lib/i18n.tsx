'use client';

import { createContext, Fragment, useContext, type ReactNode } from 'react';
import { DICTS, type Dict, type Lang } from './dict';
import { detectLangSource, LANG_KEY } from './langDetect';

// eslint-disable-next-line no-new-func
export const detectLang = (): Lang => new Function(`return (${detectLangSource})()`)() as Lang;

export function saveLang(l: Lang) {
  try { localStorage.setItem(LANG_KEY, l); } catch {}
}

const Ctx = createContext<{ t: Dict; lang: Lang }>({ t: DICTS.da, lang: 'da' });
export const LangProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => (
  <Ctx.Provider value={{ t: DICTS[lang], lang }}>{children}</Ctx.Provider>
);
export const useT = () => useContext(Ctx);

/** *text* → highlighted em. */
export function rich(s: string): ReactNode {
  return s.split(/(\*[^*]+\*)/g).filter(Boolean).map((p, i) =>
    p.startsWith('*') ? <em key={i}>{p.slice(1, -1)}</em> : <Fragment key={i}>{p}</Fragment>
  );
}
