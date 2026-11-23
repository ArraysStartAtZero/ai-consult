export const LANG_KEY = 'kerne-lang';

/**
 * Language pick order: the visitor's own choice → country from Vercel geo (cookie set by middleware)
 * → time zone as a fallback → Danish for Denmark, Polish for Poland, else English.
 * Shared as a string so the same logic runs in the pre-paint boot script.
 */
export const detectLangSource = `function(){try{var s=localStorage.getItem('${LANG_KEY}');if(s==='en'||s==='da'||s==='pl')return s}catch(e){}
var m=document.cookie.match(/(?:^|; )kerne-country=([A-Za-z]{2})/);if(m){var c=m[1].toUpperCase();return c==='DK'?'da':c==='PL'?'pl':'en'}
try{var tz=Intl.DateTimeFormat().resolvedOptions().timeZone;if(tz==='Europe/Copenhagen')return 'da';if(tz==='Europe/Warsaw')return 'pl'}catch(e){}
return 'en'}`;
