/**
 * All site copy for Kerne AI, in Danish, English and Polish.
 * Markup in strings: *text* → highlighted <em>.
 */
export type Lang = 'da' | 'en' | 'pl';
export const LANGS: Lang[] = ['da', 'en', 'pl'];

type Pair = [string, string];

export type Dict = {
  meta: { title: string; description: string };
  nav: { services: string; example: string; process: string; about: string; faq: string; cta: string; skip: string; langLabel: string; home: string };
  hero: { kicker: string; title: string; lede: string; cta1: string; cta2: string; points: string[] };
  marquee: string[];
  services: {
    eyebrow: string; title: string; lede: string;
    items: { tag: string; title: string; body: string; bullets: string[] }[];
  };
  example: {
    eyebrow: string; title: string; lede: string; fictional: string;
    channel: string; you: string; bot: string;
    ask: string; thinking: string; answer: string; rows: [string, string, string][]; draft: string; approve: string; edit: string; sources: string;
    sourcesList: string[]; replay: string;
    notes: Pair[];
  };
  connects: { eyebrow: string; title: string; lede: string; groups: [string, string[]][]; note: string };
  process: {
    eyebrow: string; title: string; lede: string;
    steps: { n: string; title: string; time: string; body: string[] }[];
    price: string;
  };
  principles: { eyebrow: string; title: string; items: Pair[] };
  about: { eyebrow: string; title: string; body: string[]; facts: string[]; link: string; role: string; photoAlt: string };
  faq: { eyebrow: string; title: string; items: Pair[] };
  contact: {
    eyebrow: string; title: string; lede: string;
    name: string; email: string; company: string; message: string; messagePh: string;
    send: string; sending: string; sent: string; error: string; privacy: string; orMail: string;
  };
  footer: { line: string; rights: string };
};

const da: Dict = {
  meta: {
    title: 'Kerne AI: AI-assistenter og automatisering for små og mellemstore virksomheder',
    description: 'Jeg sætter AI op, der kender din virksomhed og taler med de systemer, I allerede bruger: regnskab, mail, CRM og webshop. Fast pris, I ejer det hele.',
  },
  nav: { services: 'Ydelser', example: 'Eksempel', process: 'Forløb', about: 'Om', faq: 'FAQ', cta: 'Book en samtale', skip: 'Gå til indhold', langLabel: 'Sprog', home: 'Kerne AI, til toppen' },
  hero: {
    kicker: 'AI-rådgivning og udvikling · Næstved',
    title: 'AI der kender din virksomhed, og *taler med jeres systemer.*',
    lede: 'De fleste virksomheder har prøvet ChatGPT. Få har fået det ind i hverdagen. Jeg bygger AI-assistenter og automatiseringer, der er koblet direkte på jeres regnskab, mail og kundedata, så de gør rigtigt arbejde i stedet for at være endnu et faneblad.',
    cta1: 'Book en gratis samtale', cta2: 'Se et eksempel',
    points: ['Bygget af en udvikler, ikke en præsentation', 'Kører på jeres egne konti', 'Fast pris efter første samtale'],
  },
  marquee: ['Tilbud og prislister', 'Rykkere og betalinger', 'Indbakke og kundeservice', 'Ordrer og fakturaer', 'Mødenoter og opfølgning', 'Månedsrapporter', 'Onboarding af nye medarbejdere', 'AI-politik og GDPR'],
  services: {
    eyebrow: 'Ydelser',
    title: 'Tre måder at komme i gang på',
    lede: 'Start med det, der fylder mest. Alt bygges i de værktøjer, I allerede har.',
    items: [
      {
        tag: '01 · Assistent', title: 'Jeres egen AI-assistent',
        body: 'En assistent i Teams, Slack eller på mail, der kender jeres priser, kunder, dokumenter og procedurer. I skriver til den som til en kollega.',
        bullets: ['Svarer ud fra jeres egne data og viser kilden', 'Skriver udkast til mails, men intet sendes før I godkender', 'Tager imod stemmebeskeder fra bilen'],
      },
      {
        tag: '02 · Integration', title: 'Automatisering der rammer systemerne',
        body: 'Her er forskellen: jeg er udvikler og bygger rigtige integrationer til regnskab, CRM og webshop. Ikke copy-paste mellem vinduer.',
        bullets: ['Fakturaer, rykkere og ordrer direkte i e-conomic, Dinero eller Billy', 'Data fra webshop og CRM samlet ét sted', 'Rapporter der laver sig selv hver måned'],
      },
      {
        tag: '03 · Workshop', title: 'AI i hverdagen og en klar politik',
        body: 'En halv dag med jeres team: hvad AI er godt til, hvad det ikke er godt til, og hvordan I bruger det sikkert. Med en AI-politik I kan stå inde for.',
        bullets: ['Praktisk workshop på jeres egne opgaver', 'AI-politik og GDPR: hvad må og må ikke deles', 'Overblik over EU AI Act for en lille virksomhed'],
      },
    ],
  },
  example: {
    eyebrow: 'Eksempel',
    title: 'Sådan ser det ud i praksis',
    lede: 'En tænkt VVS-virksomhed med 14 ansatte. Assistenten sidder i deres team-chat og er koblet på regnskabet.',
    fictional: 'Opdigtede data',
    channel: '# kontor', you: 'Mette', bot: 'Kerne',
    ask: '@Kerne hvem skylder os mere end 30 dage? Lav rykkere klar.',
    thinking: 'Slår op i regnskabet…',
    answer: '3 kunder har fakturaer over 30 dage, i alt 48.250 kr.:',
    rows: [['Holm Ejendomme', 'Faktura 2214', '31.900 kr.'], ['Café Bryggen', 'Faktura 2231', '9.600 kr.'], ['S. Jakobsen', 'Faktura 2240', '6.750 kr.']],
    draft: 'Jeg har lavet 3 rykkere klar i jeres tone. De ligger som kladder.',
    approve: 'Send alle 3', edit: 'Se kladder', sources: 'Kilder',
    sourcesList: ['Regnskab: åbne poster', 'Rykkerskabelon v2', 'Kundekartotek'],
    replay: 'Afspil igen',
    notes: [
      ['Koblet på regnskabet', 'Den slår op i de rigtige tal, i stedet for at gætte.'],
      ['I godkender', 'Intet sendes, bogføres eller slettes, før et menneske trykker.'],
      ['Viser sine kilder', 'Hvert svar viser, hvor tallene kommer fra.'],
    ],
  },
  connects: {
    eyebrow: 'Integrationer',
    title: 'Den taler med det, I allerede bruger',
    lede: 'Ingen nye systemer at lære. Assistenten og automatiseringerne bygges ind i jeres eksisterende værktøjer.',
    groups: [
      ['Regnskab', ['e-conomic', 'Dinero', 'Billy', 'Uniconta']],
      ['Arbejdsplads', ['Microsoft 365', 'Teams', 'Google Workspace', 'Slack']],
      ['Kunder og salg', ['HubSpot', 'Pipedrive', 'Shopify', 'WooCommerce']],
      ['AI-modeller', ['Claude', 'ChatGPT', 'Azure OpenAI', 'Lokale modeller']],
    ],
    note: 'Bruger I noget andet? Har det et API, kan jeg som regel bygge til det.',
  },
  process: {
    eyebrow: 'Forløb',
    title: 'Tre trin, fast pris for hvert',
    lede: 'Uanset om I starter med en assistent eller en automatisering.',
    steps: [
      { n: '01', title: 'Kortlægning', time: '1–2 dage', body: ['Gratis første samtale på 30 minutter', 'Jeg taler med dem, der laver arbejdet, og ser jeres systemer', 'I får et kort overblik: hvor AI hjælper mest, hvad det sparer, og hvad I skal lade være', 'I beslutter, om vi går videre'] },
      { n: '02', title: 'Byg', time: '1–4 uger', body: ['Jeg bygger sammen med jeres team, på jeres egne data', 'Integrationer testes mod de rigtige systemer', 'Én person hos jer lærer, hvordan det hænger sammen', 'Overdragelse med dokumentation'] },
      { n: '03', title: 'Drift', time: 'Valgfrit, månedligt', body: ['Viden og data holdes opdateret', 'Fejl rettes, og integrationer følger med, når systemerne ændrer sig', 'Én ny forbedring om måneden', 'Kan opsiges, og I ejer det hele uanset'] },
    ],
    price: 'Fast pris for hvert trin, aftalt efter første samtale. Ingen timer der tikker.',
  },
  principles: {
    eyebrow: 'Principper',
    title: 'Det kan I regne med',
    items: [
      ['I ejer det', 'Alt kører på jeres egne konti og servere. Jeg hoster intet, og I er ikke låst til mig.'],
      ['GDPR først', 'Vi afklarer fra start, hvilke data der må bruges, og vælger modeller med EU-databehandling.'],
      ['Mennesket trykker', 'AI laver udkast og forslag. Det, der går ud af huset, godkendes af en person.'],
      ['Ærlige råd', 'Hvis noget ikke giver mening at automatisere, siger jeg det.'],
    ],
  },
  about: {
    photoAlt: 'Filip Tomczak i mørk hættetrøje med sin sort-hvide kat',
    eyebrow: 'Om',
    title: 'Hvem du arbejder med',
    role: 'Grundlægger, Kerne AI',
    body: [
      'Jeg hedder Filip og er full-stack udvikler. I flere år har jeg bygget interne forretningssystemer: planlægning, timesedler, løn og integrationer til regnskab, til virksomheder med folk ude i marken.',
      'Kerne AI er det næste skridt: at sætte AI ind i kernen af den måde, en virksomhed arbejder på. Ikke som en chatbot på hjemmesiden, men koblet på de systemer, hvor arbejdet faktisk foregår.',
    ],
    facts: ['Forretningssystemer og regnskabsintegrationer', 'Webplatforme med booking og betaling (Stripe)', 'Taler dansk, engelsk og polsk'],
    link: 'Se mine projekter',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Det bliver jeg tit spurgt om',
    items: [
      ['Skal vi skifte nogle systemer?', 'Nej. Det hele bygges ind i det, I allerede bruger. Det er hele pointen.'],
      ['Hvor ender vores data?', 'Hos jer og hos den AI-udbyder, vi vælger sammen, med en databehandleraftale og EU-behandling hvor muligt. Vi kortlægger fra start, hvad der må bruges.'],
      ['Hvad koster det?', 'Hvert trin har en fast pris, som vi aftaler efter første samtale. Den første samtale er gratis og uforpligtende.'],
      ['Hvad hvis det går i stykker?', 'Med drift-aftalen retter jeg det. Uden den får I dokumentation og en person hos jer, der ved, hvordan det hænger sammen.'],
      ['Er vi for små til det her?', 'Sandsynligvis ikke. Det er netop små virksomheder, hvor en håndfuld sparede timer om ugen kan mærkes.'],
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Hvad fylder på dit skrivebord?',
    lede: 'Skriv kort, hvad der tager jeres tid, så tager vi en gratis samtale på 30 minutter. Intet er aftalt, før I siger ja.',
    name: 'Navn', email: 'E-mail', company: 'Virksomhed', message: 'Hvad tager jeres tid?', messagePh: 'F.eks. rykkere, tilbud, indbakken…',
    send: 'Send', sending: 'Sender…', sent: 'Tak! Jeg vender tilbage inden for én arbejdsdag.', error: 'Noget gik galt. Prøv igen, eller skriv direkte på mail.',
    privacy: 'Jeg bruger kun dine oplysninger til at svare dig.', orMail: 'Eller skriv direkte:',
  },
  footer: { line: 'Kerne AI · Næstved, Danmark', rights: 'Alle rettigheder forbeholdes.' },
};

const en: Dict = {
  meta: {
    title: 'Kerne AI: AI assistants and automation for small and mid-sized businesses',
    description: 'I set up AI that knows your business and talks to the systems you already use: accounting, email, CRM and webshop. Fixed price, and you own all of it.',
  },
  nav: { services: 'Services', example: 'Example', process: 'Process', about: 'About', faq: 'FAQ', cta: 'Book a call', skip: 'Skip to content', langLabel: 'Language', home: 'Kerne AI, back to top' },
  hero: {
    kicker: 'AI consulting and development · Denmark',
    title: 'AI that knows your business, and *talks to your systems.*',
    lede: "Most companies have tried ChatGPT. Few have got it into everyday work. I build AI assistants and automations wired straight into your accounting, email and customer data, so they do real work instead of being one more browser tab.",
    cta1: 'Book a free call', cta2: 'See an example',
    points: ['Built by a developer, not a slide deck', 'Runs on your own accounts', 'Fixed price after the first call'],
  },
  marquee: ['Quotes and price lists', 'Payment reminders', 'Inbox and customer service', 'Orders and invoices', 'Meeting notes and follow-up', 'Monthly reports', 'Onboarding new staff', 'AI policy and GDPR'],
  services: {
    eyebrow: 'Services',
    title: 'Three ways to get started',
    lede: 'Start with whatever takes the most time. Everything is built inside the tools you already have.',
    items: [
      {
        tag: '01 · Assistant', title: 'Your own AI assistant',
        body: 'An assistant in Teams, Slack or email that knows your prices, customers, documents and procedures. Your team writes to it like a colleague.',
        bullets: ['Answers from your own data and shows the source', 'Drafts emails, but nothing goes out until you approve', 'Takes voice notes from the car'],
      },
      {
        tag: '02 · Integration', title: 'Automation that reaches your systems',
        body: "Here's the difference: I'm a developer, and I build real integrations with accounting, CRM and webshop. No copy-paste between windows.",
        bullets: ['Invoices, reminders and orders straight into your accounting system', 'Webshop and CRM data in one place', 'Reports that build themselves every month'],
      },
      {
        tag: '03 · Workshop', title: 'AI in daily work, and a clear policy',
        body: "Half a day with your team: what AI is good at, what it isn't, and how to use it safely. Plus an AI policy you can stand behind.",
        bullets: ['Hands-on workshop on your own tasks', 'AI policy and GDPR: what can and cannot be shared', 'The EU AI Act, explained for a small company'],
      },
    ],
  },
  example: {
    eyebrow: 'Example',
    title: 'What it looks like in practice',
    lede: 'A made-up plumbing company with 14 people. The assistant sits in their team chat and is connected to their accounting.',
    fictional: 'Made-up data',
    channel: '# office', you: 'Mette', bot: 'Kerne',
    ask: '@Kerne who owes us for more than 30 days? Get reminders ready.',
    thinking: 'Checking the accounts…',
    answer: '3 customers have invoices over 30 days, DKK 48,250 in total:',
    rows: [['Holm Properties', 'Invoice 2214', 'DKK 31,900'], ['Café Bryggen', 'Invoice 2231', 'DKK 9,600'], ['S. Jakobsen', 'Invoice 2240', 'DKK 6,750']],
    draft: "I've drafted 3 reminders in your usual tone. They're saved as drafts.",
    approve: 'Send all 3', edit: 'Open drafts', sources: 'Sources',
    sourcesList: ['Accounting: open items', 'Reminder template v2', 'Customer records'],
    replay: 'Play again',
    notes: [
      ['Connected to accounting', 'It looks up the real numbers instead of guessing.'],
      ['You approve', 'Nothing is sent, booked or deleted until a person presses the button.'],
      ['Shows its sources', 'Every answer shows where the numbers came from.'],
    ],
  },
  connects: {
    eyebrow: 'Integrations',
    title: 'It talks to what you already use',
    lede: 'No new systems to learn. The assistant and automations are built into your existing tools.',
    groups: [
      ['Accounting', ['Xero', 'QuickBooks', 'Sage', 'e-conomic']],
      ['Workplace', ['Microsoft 365', 'Teams', 'Google Workspace', 'Slack']],
      ['Customers and sales', ['HubSpot', 'Pipedrive', 'Shopify', 'WooCommerce']],
      ['AI models', ['Claude', 'ChatGPT', 'Azure OpenAI', 'Local models']],
    ],
    note: 'Using something else? If it has an API, I can usually build for it.',
  },
  process: {
    eyebrow: 'Process',
    title: 'Three steps, a fixed price for each',
    lede: 'Whether you start with an assistant or an automation.',
    steps: [
      { n: '01', title: 'Mapping', time: '1–2 days', body: ['Free 30-minute first call', 'I talk with the people who do the work and look at your systems', 'You get a short overview: where AI helps most, what it saves, and what to leave alone', 'You decide whether we go on'] },
      { n: '02', title: 'Build', time: '1–4 weeks', body: ['I build with your team, on your own data', 'Integrations are tested against the real systems', 'One person on your team learns how it fits together', 'Handover with documentation'] },
      { n: '03', title: 'Upkeep', time: 'Optional, monthly', body: ['Knowledge and data kept up to date', 'Fixes, and integrations kept working when your systems change', 'One new improvement a month', 'Cancel any time; you own everything either way'] },
    ],
    price: 'A fixed price for each step, agreed after the first call. No hours ticking.',
  },
  principles: {
    eyebrow: 'Principles',
    title: 'What you can count on',
    items: [
      ['You own it', "Everything runs on your own accounts and servers. I host nothing, and you're not locked in to me."],
      ['GDPR first', 'We agree from the start which data may be used, and pick models with EU data processing.'],
      ['A person presses send', 'AI drafts and suggests. Anything that leaves the building is approved by a person.'],
      ['Honest advice', "If something isn't worth automating, I'll tell you."],
    ],
  },
  about: {
    photoAlt: 'Filip Tomczak in a dark hoodie with his black and white cat',
    eyebrow: 'About',
    title: "Who you'll work with",
    role: 'Founder, Kerne AI',
    body: [
      "I'm Filip, a full-stack developer. For years I've built internal business systems (planning, timesheets, payroll and accounting integrations) for companies with people out in the field.",
      'Kerne AI is the next step: putting AI into the core of how a business works. Not as a chatbot on the website, but connected to the systems where the work actually happens.',
    ],
    facts: ['Business systems and accounting integrations', 'Web platforms with booking and payments (Stripe)', 'Speaks Danish, English and Polish'],
    link: 'See my projects',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions I often get',
    items: [
      ['Do we have to change any systems?', "No. Everything is built into what you already use. That's the whole point."],
      ['Where does our data go?', 'To you and to the AI provider we choose together, with a data processing agreement and EU processing where possible. We map what may be used from the start.'],
      ['What does it cost?', 'Each step has a fixed price, agreed after the first call. The first call is free and commits you to nothing.'],
      ['What if it breaks?', 'With the upkeep plan, I fix it. Without it, you get documentation and a person on your team who knows how it fits together.'],
      ['Are we too small for this?', "Probably not. It's small companies where a handful of saved hours a week really shows."],
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "What's on your desk?",
    lede: "Tell me briefly what takes your time, and we'll have a free 30-minute call. Nothing is agreed until you say yes.",
    name: 'Name', email: 'Email', company: 'Company', message: 'What takes your time?', messagePh: 'E.g. payment reminders, quotes, the inbox…',
    send: 'Send', sending: 'Sending…', sent: "Thanks! I'll get back to you within one working day.", error: 'Something went wrong. Try again, or email me directly.',
    privacy: 'I only use your details to reply to you.', orMail: 'Or email directly:',
  },
  footer: { line: 'Kerne AI · Næstved, Denmark', rights: 'All rights reserved.' },
};

const pl: Dict = {
  meta: {
    title: 'Kerne AI: asystenci AI i automatyzacja dla małych i średnich firm',
    description: 'Wdrażam AI, które zna Twoją firmę i współpracuje z systemami, których już używasz: księgowością, pocztą, CRM i sklepem. Stała cena, a wszystko należy do Ciebie.',
  },
  nav: { services: 'Usługi', example: 'Przykład', process: 'Proces', about: 'O mnie', faq: 'FAQ', cta: 'Umów rozmowę', skip: 'Przejdź do treści', langLabel: 'Język', home: 'Kerne AI, do góry' },
  hero: {
    kicker: 'Doradztwo i wdrożenia AI · Dania',
    title: 'AI, które zna Twoją firmę i *rozmawia z Twoimi systemami.*',
    lede: 'Większość firm próbowała ChatGPT. Niewiele wprowadziło go do codziennej pracy. Buduję asystentów AI i automatyzacje podłączone bezpośrednio do księgowości, poczty i danych klientów, żeby wykonywały prawdziwą pracę, a nie były kolejną kartą w przeglądarce.',
    cta1: 'Umów bezpłatną rozmowę', cta2: 'Zobacz przykład',
    points: ['Buduje programista, nie prezentacja', 'Działa na Twoich własnych kontach', 'Stała cena po pierwszej rozmowie'],
  },
  marquee: ['Oferty i cenniki', 'Przypomnienia o płatnościach', 'Skrzynka i obsługa klienta', 'Zamówienia i faktury', 'Notatki ze spotkań', 'Raporty miesięczne', 'Wdrażanie nowych pracowników', 'Polityka AI i RODO'],
  services: {
    eyebrow: 'Usługi',
    title: 'Trzy sposoby, by zacząć',
    lede: 'Zacznij od tego, co zajmuje najwięcej czasu. Wszystko powstaje w narzędziach, które już masz.',
    items: [
      {
        tag: '01 · Asystent', title: 'Własny asystent AI',
        body: 'Asystent w Teams, Slacku lub w poczcie, który zna Twoje ceny, klientów, dokumenty i procedury. Zespół pisze do niego jak do kolegi.',
        bullets: ['Odpowiada na podstawie Twoich danych i pokazuje źródło', 'Przygotowuje e-maile, ale nic nie wychodzi bez akceptacji', 'Przyjmuje notatki głosowe z samochodu'],
      },
      {
        tag: '02 · Integracja', title: 'Automatyzacja, która sięga do systemów',
        body: 'Na tym polega różnica: jestem programistą i buduję prawdziwe integracje z księgowością, CRM i sklepem. Bez kopiowania między oknami.',
        bullets: ['Faktury, przypomnienia i zamówienia prosto w systemie księgowym', 'Dane ze sklepu i CRM w jednym miejscu', 'Raporty, które tworzą się same co miesiąc'],
      },
      {
        tag: '03 · Warsztat', title: 'AI na co dzień i jasna polityka',
        body: 'Pół dnia z zespołem: w czym AI jest dobre, w czym nie, i jak korzystać z niego bezpiecznie. Do tego polityka AI, pod którą możesz się podpisać.',
        bullets: ['Praktyczny warsztat na Twoich zadaniach', 'Polityka AI i RODO: co wolno, a czego nie wolno udostępniać', 'AI Act w wersji dla małej firmy'],
      },
    ],
  },
  example: {
    eyebrow: 'Przykład',
    title: 'Jak to wygląda w praktyce',
    lede: 'Wymyślona firma hydrauliczna z 14 pracownikami. Asystent działa na czacie zespołu i jest podłączony do księgowości.',
    fictional: 'Dane fikcyjne',
    channel: '# biuro', you: 'Mette', bot: 'Kerne',
    ask: '@Kerne kto zalega z płatnością ponad 30 dni? Przygotuj przypomnienia.',
    thinking: 'Sprawdzam księgowość…',
    answer: '3 klientów ma faktury starsze niż 30 dni, łącznie 48 250 DKK:',
    rows: [['Holm Ejendomme', 'Faktura 2214', '31 900 DKK'], ['Café Bryggen', 'Faktura 2231', '9 600 DKK'], ['S. Jakobsen', 'Faktura 2240', '6 750 DKK']],
    draft: 'Przygotowałem 3 przypomnienia w Waszym stylu. Czekają jako wersje robocze.',
    approve: 'Wyślij wszystkie 3', edit: 'Otwórz wersje robocze', sources: 'Źródła',
    sourcesList: ['Księgowość: otwarte pozycje', 'Szablon przypomnienia v2', 'Kartoteka klientów'],
    replay: 'Odtwórz ponownie',
    notes: [
      ['Podłączony do księgowości', 'Sprawdza prawdziwe liczby, zamiast zgadywać.'],
      ['Ty zatwierdzasz', 'Nic nie zostaje wysłane, zaksięgowane ani usunięte, dopóki człowiek nie kliknie.'],
      ['Pokazuje źródła', 'Każda odpowiedź pokazuje, skąd pochodzą liczby.'],
    ],
  },
  connects: {
    eyebrow: 'Integracje',
    title: 'Współpracuje z tym, czego już używasz',
    lede: 'Żadnych nowych systemów do nauki. Asystent i automatyzacje powstają w Twoich obecnych narzędziach.',
    groups: [
      ['Księgowość', ['Comarch', 'Symfonia', 'wFirma', 'inFakt']],
      ['Miejsce pracy', ['Microsoft 365', 'Teams', 'Google Workspace', 'Slack']],
      ['Klienci i sprzedaż', ['HubSpot', 'Pipedrive', 'Shopify', 'WooCommerce']],
      ['Modele AI', ['Claude', 'ChatGPT', 'Azure OpenAI', 'Modele lokalne']],
    ],
    note: 'Używasz czegoś innego? Jeśli ma API, zwykle mogę to podłączyć.',
  },
  process: {
    eyebrow: 'Proces',
    title: 'Trzy kroki, stała cena za każdy',
    lede: 'Niezależnie od tego, czy zaczynasz od asystenta, czy od automatyzacji.',
    steps: [
      { n: '01', title: 'Analiza', time: '1–2 dni', body: ['Bezpłatna, 30-minutowa pierwsza rozmowa', 'Rozmawiam z osobami, które wykonują pracę, i przeglądam systemy', 'Dostajesz krótkie podsumowanie: gdzie AI pomoże najbardziej, ile zaoszczędzi i czego nie ruszać', 'Ty decydujesz, czy idziemy dalej'] },
      { n: '02', title: 'Wdrożenie', time: '1–4 tygodnie', body: ['Buduję razem z zespołem, na Twoich danych', 'Integracje testowane na prawdziwych systemach', 'Jedna osoba z zespołu poznaje, jak to działa', 'Przekazanie z dokumentacją'] },
      { n: '03', title: 'Utrzymanie', time: 'Opcjonalnie, co miesiąc', body: ['Wiedza i dane na bieżąco aktualne', 'Poprawki i integracje działające mimo zmian w systemach', 'Jedno nowe usprawnienie miesięcznie', 'Możesz zrezygnować w każdej chwili; wszystko i tak należy do Ciebie'] },
    ],
    price: 'Stała cena za każdy krok, ustalana po pierwszej rozmowie. Bez liczenia godzin.',
  },
  principles: {
    eyebrow: 'Zasady',
    title: 'Na to możesz liczyć',
    items: [
      ['Wszystko jest Twoje', 'Działa na Twoich kontach i serwerach. Niczego nie hostuję i nie jesteś ode mnie uzależniony.'],
      ['Najpierw RODO', 'Od początku ustalamy, jakie dane można wykorzystać, i wybieramy modele z przetwarzaniem w UE.'],
      ['Człowiek klika „wyślij”', 'AI przygotowuje szkice i propozycje. To, co wychodzi z firmy, zatwierdza człowiek.'],
      ['Szczere rady', 'Jeśli czegoś nie warto automatyzować, powiem to wprost.'],
    ],
  },
  about: {
    photoAlt: 'Filip Tomczak w ciemnej bluzie z kapturem ze swoim czarno-białym kotem',
    eyebrow: 'O mnie',
    title: 'Z kim będziesz pracować',
    role: 'Założyciel, Kerne AI',
    body: [
      'Nazywam się Filip i jestem programistą full-stack. Od lat buduję wewnętrzne systemy biznesowe (planowanie, karty czasu pracy, płace i integracje z księgowością) dla firm, których ludzie pracują w terenie.',
      'Kerne AI to kolejny krok: wprowadzenie AI do samego rdzenia pracy firmy. Nie jako chatbota na stronie, ale podłączonego do systemów, w których naprawdę dzieje się praca.',
    ],
    facts: ['Systemy biznesowe i integracje z księgowością', 'Platformy webowe z rezerwacjami i płatnościami (Stripe)', 'Mówię po duńsku, angielsku i polsku'],
    link: 'Zobacz moje projekty',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Częste pytania',
    items: [
      ['Czy musimy zmieniać systemy?', 'Nie. Wszystko powstaje w tym, czego już używacie. W tym cały sens.'],
      ['Gdzie trafiają nasze dane?', 'Do Was i do dostawcy AI, którego wybierzemy razem, z umową powierzenia danych i przetwarzaniem w UE, gdzie to możliwe. Od początku ustalamy, co można wykorzystać.'],
      ['Ile to kosztuje?', 'Każdy krok ma stałą cenę, ustalaną po pierwszej rozmowie. Pierwsza rozmowa jest bezpłatna i do niczego nie zobowiązuje.'],
      ['A jeśli coś się zepsuje?', 'W ramach utrzymania naprawiam to. Bez niego dostajecie dokumentację i osobę w zespole, która wie, jak to działa.'],
      ['Czy nie jesteśmy za mali?', 'Raczej nie. Właśnie w małych firmach kilka zaoszczędzonych godzin tygodniowo naprawdę widać.'],
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Co leży na Twoim biurku?',
    lede: 'Napisz krótko, co zabiera Wam czas, a umówimy bezpłatną, 30-minutową rozmowę. Nic nie jest ustalone, dopóki nie powiesz „tak”.',
    name: 'Imię i nazwisko', email: 'E-mail', company: 'Firma', message: 'Co zabiera Wam czas?', messagePh: 'Np. przypomnienia o płatnościach, oferty, skrzynka…',
    send: 'Wyślij', sending: 'Wysyłanie…', sent: 'Dziękuję! Odezwę się w ciągu jednego dnia roboczego.', error: 'Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio.',
    privacy: 'Używam Twoich danych tylko po to, żeby odpowiedzieć.', orMail: 'Lub napisz bezpośrednio:',
  },
  footer: { line: 'Kerne AI · Næstved, Dania', rights: 'Wszelkie prawa zastrzeżone.' },
};

export const DICTS: Record<Lang, Dict> = { da, en, pl };
