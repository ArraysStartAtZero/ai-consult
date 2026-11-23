import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/fraunces/full-italic.css';
import '@fontsource-variable/instrument-sans';
import '@fontsource/jetbrains-mono/400.css';
import { detectLangSource } from '@/lib/langDetect';
import { DICTS } from '@/lib/dict';
import { PORTFOLIO, SITE_URL } from '@/lib/site';
import './globals.css';

const d = DICTS.da.meta;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: d.title,
  description: d.description,
  keywords: ['AI-rådgivning', 'AI konsulent', 'AI-assistent', 'automatisering', 'e-conomic integration', 'AI for små virksomheder', 'ChatGPT i virksomheden', 'Næstved', 'Sjælland', 'AI-politik GDPR'],
  alternates: { canonical: '/' },
  icons: { icon: '/icon.svg' },
  openGraph: { title: 'Kerne AI', description: d.description, type: 'website', url: '/', siteName: 'Kerne AI', locale: 'da_DK', alternateLocale: ['en_GB', 'pl_PL'] },
  twitter: { card: 'summary_large_image', title: 'Kerne AI', description: d.description },
  robots: { index: true, follow: true },
  // Set GOOGLE_SITE_VERIFICATION in Vercel to the value Google Search Console gives you.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

/** Structured data so search engines understand the business (schema.org ProfessionalService). */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kerne AI',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  description: d.description,
  address: { '@type': 'PostalAddress', addressLocality: 'Næstved', addressCountry: 'DK' },
  areaServed: [{ '@type': 'Country', name: 'Denmark' }, { '@type': 'Country', name: 'Poland' }],
  availableLanguage: ['da', 'en', 'pl'],
  founder: { '@type': 'Person', name: 'Filip Tomczak', jobTitle: 'Founder', url: PORTFOLIO },
  knowsAbout: ['AI assistants', 'Business process automation', 'Accounting integrations', 'e-conomic', 'GDPR'],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-assistent til virksomheden' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisering og integrationer' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-workshop og AI-politik' } },
  ],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
