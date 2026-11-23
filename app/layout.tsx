import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/fraunces/full-italic.css';
import '@fontsource-variable/instrument-sans';
import '@fontsource/jetbrains-mono/400.css';
import { detectLangSource } from '@/lib/langDetect';
import { DICTS } from '@/lib/dict';
import './globals.css';

export const metadata: Metadata = {
  title: DICTS.da.meta.title,
  description: DICTS.da.meta.description,
  icons: { icon: '/icon.svg' },
  openGraph: { title: 'Kerne AI', description: DICTS.da.meta.description, type: 'website' },
};

export const viewport: Viewport = { themeColor: '#f1ece2', colorScheme: 'light' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" data-lang="da" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var L=(${detectLangSource})();var d=document.documentElement;d.lang=L;d.dataset.lang=L;if(L!=='da')setTimeout(function(){d.classList.add('i18n-ready')},1500)}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
