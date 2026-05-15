import type { Locale } from './index'

export type MiniCard = { title: string; note: string }
export type FeatureCard = { title: string; desc: string }
export type QuadCard = { h: string; p: string }

export type PageUiStrings = {
  heroCtaHint: string
  heroPills: readonly [string, string, string, string]
  publisherInitials: string
  publisherName: string
  publishingLabel: string
  minRead: string
  asideTitle: string
  asideMiniCards: readonly [MiniCard, MiniCard, MiniCard, MiniCard]
  asideTrialTitle: string
  asideTrialLead: string
  asideTrialFoot: string
  featureCards: readonly [FeatureCard, FeatureCard, FeatureCard, FeatureCard]
  bottomTitle: string
  bottomLead: string
  bottomCards: readonly [QuadCard, QuadCard, QuadCard, QuadCard]
  bottomAsideEyebrow: string
  bottomAsideTitle: string
  bottomAsideLead: string
  bottomAsideFoot: string
  ariaLanguageMenu: string
  trialModalSubtitle: string
  trialEmailLabel: string
  trialUrlLabel: string
  trialNotesLabel: string
  trialNotesPlaceholder: string
  trialSubmit: string
  trialSubmitting: string
  trialCloseAria: string
  trialSuccessTitle: string
  trialSuccessHeadline: string
  trialSuccessBody: string
  trialSuccessHint: string
  trialSuccessCta: string
  trialErrMissingKey: string
  trialErrGeneric: string
  trialErrNetwork: string
}

const EN: PageUiStrings = {
  heroCtaHint: 'Send your article URL and we’ll prepare a free audio sample.',
  heroPills: ['Free onboarding', '7-day trial', 'Multilingual', 'Accessibility ready'],
  publisherInitials: 'MP',
  publisherName: 'Morning Post',
  publishingLabel: 'Publishing',
  minRead: '4 min read',
  asideTitle: 'Built for publishers and institutions',
  asideMiniCards: [
    { title: 'Automatic narration', note: 'Generate audio from articles automatically.' },
    { title: '15+ languages', note: 'Local voices per market, per section.' },
    { title: 'Accessibility-ready', note: 'WCAG-friendly, editorial-first UX.' },
    { title: 'Listening analytics', note: 'Understand listening, not vanity metrics.' },
  ],
  asideTrialTitle: 'Start a free 7-day trial',
  asideTrialLead: 'Send an article URL — we’ll return a sample player on your content.',
  asideTrialFoot: 'Free onboarding help • 7-day trial • Installation support included',
  featureCards: [
    {
      title: 'Automatic narration',
      desc: 'Articles are narrated without extra workflow. Readers press play and keep reading (or listening).',
    },
    {
      title: 'Accessibility',
      desc: 'A practical audio layer for busy readers and for audiences with visual impairments.',
    },
    {
      title: 'Multilingual & voices',
      desc: 'Serve audiences in multiple languages with premium voice options per market.',
    },
    {
      title: 'Listening analytics',
      desc: 'Track listen rates, time spent, and completion — refine your audio strategy.',
    },
  ],
  bottomTitle: 'Built for publishers — stable, automated, and easy to install',
  bottomLead:
    'This is not a dashboard experience. It’s an audio layer that lives inside articles — readers can listen instead of only reading.',
  bottomCards: [
    {
      h: 'Listening analytics',
      p: 'Track how often articles are played, listen-through, and listening trends across your site — so you know what actually gets heard.',
    },
    {
      h: 'More time in the article',
      p: 'Listeners tend to stay with the story longer. That usually means more time on page, more ad inventory as they scroll, and stronger yield for publishers.',
    },
    {
      h: 'Onboarding & help',
      p: 'Free setup guidance and integration support for your templates.',
    },
    {
      h: 'Auto re-generation',
      p: 'If an article changes, audio can be regenerated automatically.',
    },
  ],
  bottomAsideEyebrow: 'Free trial',
  bottomAsideTitle: 'Send your article URL — we’ll return a sample',
  bottomAsideLead:
    'See how a listenable article feels on your content. Get voice options, multilingual support, and a production-ready player.',
  bottomAsideFoot: 'Send your article URL and we’ll prepare a free audio sample. Free onboarding help included.',
  ariaLanguageMenu: 'Language',
  trialModalSubtitle: 'Send your email — we’ll reply with a sample and next steps.',
  trialEmailLabel: 'Your email',
  trialUrlLabel: 'Article URL (optional)',
  trialNotesLabel: 'Notes (optional)',
  trialNotesPlaceholder: 'Publisher name, CMS, markets, timeline…',
  trialSubmit: 'Send request',
  trialSubmitting: 'Sending…',
  trialCloseAria: 'Close',
  trialSuccessTitle: 'Message sent',
  trialSuccessHeadline: 'Thank you',
  trialSuccessBody:
    'We received your request. We’ll get back to you shortly by email with a sample or next steps.',
  trialSuccessHint: 'You can keep exploring the player on this page while you wait.',
  trialSuccessCta: 'Close',
  trialErrMissingKey: 'Missing Web3Forms key. Set VITE_WEB3FORMS_ACCESS_KEY in your environment.',
  trialErrGeneric: 'Something went wrong. Please try again.',
  trialErrNetwork: 'Network error. Please try again.',
}

const RO: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Trimite URL-ul articolului și îți pregătim un eșantion audio gratuit.',
  heroPills: ['Onboarding gratuit', 'Probă 7 zile', 'Multilingv', 'Pregătit pentru accesibilitate'],
  publisherInitials: 'MP',
  publisherName: 'Morning Post',
  publishingLabel: 'Publicare',
  minRead: '4 min citire',
  asideTitle: 'Creat pentru editori și instituții',
  asideMiniCards: [
    {
      title: 'Narațiune automată',
      note: 'Generează audio din articole în mod automat.',
    },
    {
      title: 'Peste 15 limbi',
      note: 'Voci locale pe piețe și secțiuni.',
    },
    {
      title: 'Pregătit pentru accesibilitate',
      note: 'UX prietenos WCAG, gândit editorial.',
    },
    {
      title: 'Analitică de ascultare',
      note: 'Înțelege ascultarea, nu doar cifre de vanitate.',
    },
  ],
  asideTrialTitle: 'Începe o probă gratuită de 7 zile',
  asideTrialLead: 'Trimite URL-ul unui articol — îți returnăm un player demo pe conținutul tău.',
  asideTrialFoot: 'Ajutor onboarding gratuit • Probă 7 zile • Suport la instalare inclus',
  featureCards: [
    {
      title: 'Narațiune automată',
      desc: 'Articolele sunt narate fără pași suplimentari în workflow. Cititorii apasă play și continuă să citească sau să asculte.',
    },
    {
      title: 'Accesibilitate',
      desc: 'Un strat audio practic pentru cititori ocupați și pentru publicuri cu deficiențe de vedere.',
    },
    {
      title: 'Multilingv și voci',
      desc: 'Deservește publicuri în mai multe limbi, cu opțiuni premium de voce pe piață.',
    },
    {
      title: 'Analitică de ascultare',
      desc: 'Urmărește rate de ascultare, timp petrecut și finalizare — rafinează strategia audio.',
    },
  ],
  bottomTitle: 'Creat pentru editori — stabil, automatizat și ușor de instalat',
  bottomLead:
    'Nu este o experiență de tip dashboard. Este un strat audio care trăiește în articole — cititorii pot asculta, nu doar citi.',
  bottomCards: [
    {
      h: 'Analitică de ascultare',
      p: 'Urmărește cât de des sunt redate articolele, listen-through și tendințe pe site — ca să știi ce se ascultă cu adevărat.',
    },
    {
      h: 'Mai mult timp în articol',
      p: 'Ascultătorii rămân de obicei mai mult în poveste. Asta înseamnă adesea mai mult timp pe pagină, mai mult inventar publicitar la scroll și randament mai bun pentru editori.',
    },
    {
      h: 'Onboarding și ajutor',
      p: 'Ghidare gratuită de configurare și suport de integrare pentru șabloanele tale.',
    },
    {
      h: 'Regenerare automată',
      p: 'Dacă un articol se schimbă, audio poate fi regenerat automat.',
    },
  ],
  bottomAsideEyebrow: 'Probă gratuită',
  bottomAsideTitle: 'Trimite URL-ul articolului — îți trimitem un eșantion',
  bottomAsideLead:
    'Vezi cum se simte un articol ascultabil pe conținutul tău. Opțiuni de voce, suport multilingv și player pregătit pentru producție.',
  bottomAsideFoot:
    'Trimite URL-ul articolului și pregătim un eșantion audio gratuit. Ajutor onboarding inclus.',
  ariaLanguageMenu: 'Limbă',
  trialModalSubtitle: 'Trimite adresa ta de email — răspundem cu un eșantion și pașii următori.',
  trialEmailLabel: 'Emailul tău',
  trialUrlLabel: 'URL articol (opțional)',
  trialNotesLabel: 'Note (opțional)',
  trialNotesPlaceholder: 'Nume editor, CMS, piețe, termen…',
  trialSubmit: 'Trimite cererea',
  trialSubmitting: 'Se trimite…',
  trialCloseAria: 'Închide',
  trialSuccessTitle: 'Mesaj trimis',
  trialSuccessHeadline: 'Mulțumim',
  trialSuccessBody:
    'Am primit cererea ta. Te vom contacta în curând prin email cu un eșantion sau pașii următori.',
  trialSuccessHint: 'Poți continua să explorezi playerul pe această pagină între timp.',
  trialSuccessCta: 'Închide',
  trialErrMissingKey: 'Lipsește cheia Web3Forms. Setează VITE_WEB3FORMS_ACCESS_KEY în mediu.',
  trialErrGeneric: 'A apărut o problemă. Te rugăm să încerci din nou.',
  trialErrNetwork: 'Eroare de rețea. Te rugăm să încerci din nou.',
}

const LT: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Atsiųskite straipsnio nuorodą — paruošime nemokamą audio pavyzdį.',
  heroPills: ['Nemokama pagalba', '7 dienų bandomasis', 'Daugiakalbis', 'Pritaikyta prieinamumui'],
  publishingLabel: 'Leidyba',
  minRead: '4 min. skaitymui',
  asideTitle: 'Kurta leidėjams ir institucijoms',
  asideMiniCards: [
    { title: 'Automatinis įgarsinimas', note: 'Audio generuojamas iš straipsnių automatiškai.' },
    { title: '15+ kalbų', note: 'Vietiniai balsai rinkai ir skyriui.' },
    { title: 'Pritaikyta prieinamumui', note: 'WCAG kryptimi, redakcijai pritaikyta UX.' },
    { title: 'Klausymo analitika', note: 'Supraskite klausymą, ne tuščias rodiklis.' },
  ],
  asideTrialTitle: 'Nemokamas 7 dienų bandomasis laikotarpis',
  asideTrialLead: 'Atsiųskite straipsnio URL — grąžinsime pavyzdinį grotuvą jūsų turinyje.',
  asideTrialFoot: 'Nemokama pagalba diegiant • 7 dienų bandomasis • Diegimo palaikymas įskaičiuotas',
  featureCards: [
    {
      title: 'Automatinis įgarsinimas',
      desc: 'Straipsniai įgarsinami be papildomų redakcijos žingsnių. Skaitytojai spaudžia „play“ ir toliau skaito arba klauso.',
    },
    {
      title: 'Prieinamumas',
      desc: 'Praktinis audio sluoksnis užimtiems skaitytojams ir žmonėms su regos negalia.',
    },
    {
      title: 'Daugiakalbystė ir balsai',
      desc: 'Pasiekite auditorijas keliomis kalbomis ir rinkai parinktais balsais.',
    },
    {
      title: 'Klausymo analitika',
      desc: 'Stebėkite klausymą, laiką ir užbaigimą — tobulinkite audio strategiją.',
    },
  ],
  bottomTitle: 'Kurta leidėjams — stabili, automatizuota ir lengvai diegiama',
  bottomLead:
    'Tai ne valdymo skydelis. Tai audio sluoksnis straipsniuose — skaitytojai gali klausyti, ne tik skaityti.',
  bottomCards: [
    {
      h: 'Klausymo analitika',
      p: 'Stebėkite, kaip dažnai grojami straipsniai, klausymo pabaigą ir tendencijas visame portale — matysite, kas iš tiesų klausoma.',
    },
    {
      h: 'Daugiau laiko straipsnyje',
      p: 'Klausytojai dažnai ilgiau lieka su tekstu. Tai paprastai reiškia daugiau laiko puslapyje, daugiau reklamos inventoriaus slenkant ir geresnį rezultatą leidėjams.',
    },
    {
      h: 'Įvedimas ir pagalba',
      p: 'Nemokama diegimo pagalba ir integracijos palaikymas jūsų šablonams.',
    },
    {
      h: 'Automatinis pergeneravimas',
      p: 'Pasikeitus straipsniui, audio galima pergeneruoti automatiškai.',
    },
  ],
  bottomAsideEyebrow: 'Bandomasis laikotarpis',
  bottomAsideTitle: 'Atsiųskite straipsnio URL — atsiųsime pavyzdį',
  bottomAsideLead:
    'Pamatykite, kaip skamba įgarsintas straipsnis jūsų turinyje. Balsai, daugiakalbystė ir gamybai paruoštas grotuvas.',
  bottomAsideFoot: 'Atsiųskite straipsnio URL — paruošime nemokamą audio pavyzdį. Pagalba įvedant įskaičiuota.',
  ariaLanguageMenu: 'Kalba',
  trialModalSubtitle: 'Parašykite el. paštą — atsakysime su pavyzdžiu ir kitais žingsniais.',
  trialEmailLabel: 'Jūsų el. paštas',
  trialUrlLabel: 'Straipsnio URL (nebūtina)',
  trialNotesLabel: 'Pastabos (nebūtina)',
  trialNotesPlaceholder: 'Leidėjo pavadinimas, CMS, rinkos, terminas…',
  trialSubmit: 'Siųsti užklausą',
  trialSubmitting: 'Siunčiama…',
  trialCloseAria: 'Uždaryti',
  trialSuccessTitle: 'Žinutė išsiųsta',
  trialSuccessHeadline: 'Ačiū',
  trialSuccessBody:
    'Gavome jūsų užklausą. Netrukus susisieksime el. paštu su pavyzdžiu ar kitais žingsniais.',
  trialSuccessHint: 'Kol lauiate, toliau galite naudotis grotuvu šiame puslapyje.',
  trialSuccessCta: 'Gerai',
  trialErrMissingKey: 'Trūksta Web3Forms rakto. Nustatykite VITE_WEB3FORMS_ACCESS_KEY aplinkoje.',
  trialErrGeneric: 'Įvyko klaida. Bandykite dar kartą.',
  trialErrNetwork: 'Tinklo klaida. Bandykite dar kartą.',
}

const DE: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Senden Sie die Artikel-URL — wir bereiten ein kostenloses Audio-Sample vor.',
  heroPills: ['Kostenloses Onboarding', '7-Tage-Test', 'Mehrsprachig', 'Barrierefreiheit'],
  publishingLabel: 'Verlag',
  minRead: '4 Min. Lesezeit',
  asideTitle: 'Für Verlage und Institutionen gebaut',
  asideMiniCards: [
    { title: 'Automatische Narration', note: 'Audio wird automatisch aus Artikeln erzeugt.' },
    { title: '15+ Sprachen', note: 'Lokale Stimmen pro Markt und Rubrik.' },
    { title: 'Barrierefrei', note: 'WCAG-orientiert, editorial gedacht.' },
    { title: 'Hör-Analytik', note: 'Verstehen, was wirklich gehört wird.' },
  ],
  asideTrialTitle: 'Kostenlose 7-Tage-Testphase',
  asideTrialLead: 'Artikel-URL senden — wir liefern einen Beispiel-Player für Ihre Inhalte.',
  asideTrialFoot: 'Kostenloses Onboarding • 7-Tage-Test • Installations-Support inklusive',
  featureCards: [
    {
      title: 'Automatische Narration',
      desc: 'Artikel werden ohne Extra-Workflow vertont. Leserinnen und Leser drücken Play und lesen oder hören weiter.',
    },
    {
      title: 'Barrierefreiheit',
      desc: 'Praktischer Audio-Layer für unterwegs und für Menschen mit Sehbeeinträchtigung.',
    },
    {
      title: 'Mehrsprachig & Stimmen',
      desc: 'Mehrere Märkte mit passenden Premium-Stimmen bedienen.',
    },
    {
      title: 'Hör-Analytik',
      desc: 'Hörquoten, Zeit und Abschluss messen — Ihre Audio-Strategie schärfen.',
    },
  ],
  bottomTitle: 'Für Verlage — stabil, automatisiert, einfach zu installieren',
  bottomLead:
    'Kein Dashboard-Produkt. Ein Audio-Layer direkt im Artikel — Leserinnen und Leser können hören statt nur lesen.',
  bottomCards: [
    {
      h: 'Hör-Analytik',
      p: 'Messbar: wie oft Artikel abgespielt werden, Listen-through und Trends auf Ihrer Site — damit Sie sehen, was wirklich gehört wird.',
    },
    {
      h: 'Mehr Zeit im Artikel',
      p: 'Hörerinnen und Hörer bleiben oft länger in der Story. Das bedeutet mehr Verweildauer, mehr Ad-Inventory beim Scrollen und bessere Economics für Publisher.',
    },
    {
      h: 'Onboarding & Hilfe',
      p: 'Kostenlose Einrichtungshilfe und Integrations-Support für Ihre Templates.',
    },
    {
      h: 'Auto-Neugenerierung',
      p: 'Wenn sich ein Artikel ändert, kann Audio automatisch neu erzeugt werden.',
    },
  ],
  bottomAsideEyebrow: 'Kostenlose Testphase',
  bottomAsideTitle: 'Artikel-URL senden — wir schicken ein Sample',
  bottomAsideLead:
    'Erleben Sie hörbare Artikel auf Ihren Inhalten. Stimmen, Mehrsprachigkeit und produktionsreifer Player.',
  bottomAsideFoot:
    'Artikel-URL senden — wir bereiten ein kostenloses Audio-Sample vor. Onboarding-Hilfe inklusive.',
  ariaLanguageMenu: 'Sprache',
  trialModalSubtitle: 'E-Mail senden — wir antworten mit einem Sample und den nächsten Schritten.',
  trialEmailLabel: 'Ihre E-Mail',
  trialUrlLabel: 'Artikel-URL (optional)',
  trialNotesLabel: 'Notizen (optional)',
  trialNotesPlaceholder: 'Verlag, CMS, Märkte, Zeitplan…',
  trialSubmit: 'Anfrage senden',
  trialSubmitting: 'Wird gesendet…',
  trialCloseAria: 'Schließen',
  trialSuccessTitle: 'Nachricht gesendet',
  trialSuccessHeadline: 'Danke',
  trialSuccessBody:
    'Wir haben Ihre Anfrage erhalten. Wir melden uns in Kürze per E-Mail mit einem Sample oder den nächsten Schritten.',
  trialSuccessHint: 'Sie können den Player auf dieser Seite weiter ansehen.',
  trialSuccessCta: 'Schließen',
  trialErrMissingKey: 'Web3Forms-Schlüssel fehlt. Setzen Sie VITE_WEB3FORMS_ACCESS_KEY in der Umgebung.',
  trialErrGeneric: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  trialErrNetwork: 'Netzwerkfehler. Bitte erneut versuchen.',
}

const ES: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Envíe la URL del artículo y prepararemos una muestra de audio gratuita.',
  heroPills: ['Onboarding gratuito', 'Prueba 7 días', 'Multilingüe', 'Listo para accesibilidad'],
  publishingLabel: 'Editorial',
  minRead: '4 min de lectura',
  asideTitle: 'Pensado para editores e instituciones',
  asideMiniCards: [
    { title: 'Narración automática', note: 'Genera audio a partir de artículos automáticamente.' },
    { title: 'Más de 15 idiomas', note: 'Voces locales por mercado y sección.' },
    { title: 'Listo para accesibilidad', note: 'UX alineada con WCAG, pensada editorialmente.' },
    { title: 'Analítica de escucha', note: 'Entienda la escucha, no solo métricas vanidosas.' },
  ],
  asideTrialTitle: 'Prueba gratuita de 7 días',
  asideTrialLead: 'Envíe la URL de un artículo — le devolvemos un reproductor de muestra sobre su contenido.',
  asideTrialFoot: 'Ayuda de onboarding gratuita • Prueba 7 días • Soporte de instalación incluido',
  featureCards: [
    {
      title: 'Narración automática',
      desc: 'Los artículos se narran sin flujos extra. Los lectores pulsan play y siguen leyendo u oyendo.',
    },
    {
      title: 'Accesibilidad',
      desc: 'Una capa de audio práctica para lectores ocupados y para públicos con discapacidad visual.',
    },
    {
      title: 'Multilingüe y voces',
      desc: 'Atienda mercados en varios idiomas con voces premium por región.',
    },
    {
      title: 'Analítica de escucha',
      desc: 'Mida tasas de escucha, tiempo y finalización — afine su estrategia de audio.',
    },
  ],
  bottomTitle: 'Para editores — estable, automatizado y fácil de instalar',
  bottomLead:
    'No es un panel tipo dashboard. Es una capa de audio dentro del artículo: los lectores pueden oír además de leer.',
  bottomCards: [
    {
      h: 'Analítica de escucha',
      p: 'Vea con qué frecuencia se reproducen los artículos, el listen-through y tendencias en su sitio — para saber qué se escucha de verdad.',
    },
    {
      h: 'Más tiempo en el artículo',
      p: 'Quienes escuchan suelen permanecer más con la historia. Eso suele significar más tiempo en página, más inventario publicitario al desplazarse y mejor rendimiento para editores.',
    },
    {
      h: 'Onboarding y ayuda',
      p: 'Guía gratuita de configuración y soporte de integración para sus plantillas.',
    },
    {
      h: 'Regeneración automática',
      p: 'Si cambia un artículo, el audio puede regenerarse automáticamente.',
    },
  ],
  bottomAsideEyebrow: 'Prueba gratuita',
  bottomAsideTitle: 'Envíe la URL del artículo — le enviamos una muestra',
  bottomAsideLead:
    'Vea cómo se siente un artículo escuchable en su contenido. Voces, multilingüe y reproductor listo para producción.',
  bottomAsideFoot:
    'Envíe la URL del artículo y prepararemos una muestra de audio gratuita. Ayuda de onboarding incluida.',
  ariaLanguageMenu: 'Idioma',
  trialModalSubtitle: 'Envíe su correo — responderemos con una muestra y los siguientes pasos.',
  trialEmailLabel: 'Su correo electrónico',
  trialUrlLabel: 'URL del artículo (opcional)',
  trialNotesLabel: 'Notas (opcional)',
  trialNotesPlaceholder: 'Editorial, CMS, mercados, plazos…',
  trialSubmit: 'Enviar solicitud',
  trialSubmitting: 'Enviando…',
  trialCloseAria: 'Cerrar',
  trialSuccessTitle: 'Mensaje enviado',
  trialSuccessHeadline: 'Gracias',
  trialSuccessBody:
    'Hemos recibido su solicitud. Nos pondremos en contacto pronto por correo con una muestra o los siguientes pasos.',
  trialSuccessHint: 'Puede seguir explorando el reproductor en esta página mientras tanto.',
  trialSuccessCta: 'Cerrar',
  trialErrMissingKey: 'Falta la clave de Web3Forms. Configure VITE_WEB3FORMS_ACCESS_KEY en el entorno.',
  trialErrGeneric: 'Algo salió mal. Inténtelo de nuevo.',
  trialErrNetwork: 'Error de red. Inténtelo de nuevo.',
}

const CS: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Pošlete URL článku a připravíme bezplatný audio vzorek.',
  heroPills: ['Bezplatné zavedení', '7denní zkušební verze', 'Vícejazyčné', 'Připraveno na přístupnost'],
  publishingLabel: 'Vydavatelství',
  minRead: '4 min čtení',
  asideTitle: 'Navrženo pro vydavatele a instituce',
  asideMiniCards: [
    { title: 'Automatická narrace', note: 'Audio se generuje z článků automaticky.' },
    { title: '15+ jazyků', note: 'Lokální hlasy pro trh a rubriku.' },
    { title: 'Připraveno na přístupnost', note: 'UX v souladu s WCAG, editorsky zaměřené.' },
    { title: 'Analytika poslechu', note: 'Pochopte poslech, ne jen plané metriky.' },
  ],
  asideTrialTitle: 'Bezplatná 7denní zkušební verze',
  asideTrialLead: 'Pošlete URL článku — vrátíme ukázkový přehrávač na vašem obsahu.',
  asideTrialFoot: 'Bezplatná pomoc se zavedením • 7denní zkušební verze • Podpora instalace zahrnuta',
  featureCards: [
    {
      title: 'Automatická narrace',
      desc: 'Články se namluví bez dalších kroků v procesu. Čtenáři stisknou play a dál čtou nebo poslouchají.',
    },
    {
      title: 'Přístupnost',
      desc: 'Praktická audio vrstva pro zaneprázdněné čtenáře a pro zrakově postižené publikum.',
    },
    {
      title: 'Vícejazyčnost a hlasy',
      desc: 'Obsluhujte trhy v několika jazycích s prémiovými hlasy podle regionu.',
    },
    {
      title: 'Analytika poslechu',
      desc: 'Sledujte míru poslechu, čas a dokončení — vylaďte strategii audia.',
    },
  ],
  bottomTitle: 'Pro vydavatele — stabilní, automatizované a snadno instalovatelné',
  bottomLead:
    'Není to dashboard. Je to audio vrstva přímo v článku — čtenáři mohou poslouchat, ne jen číst.',
  bottomCards: [
    {
      h: 'Analytika poslechu',
      p: 'Sledujte, jak často se články přehrávají, poslech do konce a trendy na webu — uvidíte, co se opravdu poslouchá.',
    },
    {
      h: 'Více času v článku',
      p: 'Posluchači často zůstanou u příběhu déle. To obvykle znamená více času na stránce, více reklamního inventáře při scrollování a lepší ekonomiku pro vydavatele.',
    },
    {
      h: 'Zavedení a pomoc',
      p: 'Bezplatné nastavení a integrační podpora pro vaše šablony.',
    },
    {
      h: 'Automatická regenerace',
      p: 'Když se článek změní, audio lze znovu vygenerovat automaticky.',
    },
  ],
  bottomAsideEyebrow: 'Zkušební verze',
  bottomAsideTitle: 'Pošlete URL článku — pošleme vzorek',
  bottomAsideLead:
    'Podívejte se, jak zní poslouchatelný článek na vašem obsahu. Hlasy, více jazyků a produkční přehrávač.',
  bottomAsideFoot:
    'Pošlete URL článku a připravíme bezplatný audio vzorek. Pomoc se zavedením zahrnuta.',
  ariaLanguageMenu: 'Jazyk',
  trialModalSubtitle: 'Napište e-mail — odpovíme vzorkem a dalšími kroky.',
  trialEmailLabel: 'Váš e-mail',
  trialUrlLabel: 'URL článku (volitelné)',
  trialNotesLabel: 'Poznámky (volitelné)',
  trialNotesPlaceholder: 'Vydavatelství, CMS, trhy, termín…',
  trialSubmit: 'Odeslat žádost',
  trialSubmitting: 'Odesílání…',
  trialCloseAria: 'Zavřít',
  trialSuccessTitle: 'Zpráva odeslána',
  trialSuccessHeadline: 'Děkujeme',
  trialSuccessBody:
    'Obdrželi jsme vaši žádost. Brzy se ozveme e-mailem se vzorkem nebo dalšími kroky.',
  trialSuccessHint: 'Mezitím můžete dál prozkoumávat přehrávač na této stránce.',
  trialSuccessCta: 'Zavřít',
  trialErrMissingKey: 'Chybí klíč Web3Forms. Nastavte VITE_WEB3FORMS_ACCESS_KEY v prostředí.',
  trialErrGeneric: 'Něco se pokazilo. Zkuste to znovu.',
  trialErrNetwork: 'Chyba sítě. Zkuste to znovu.',
}

const SK: PageUiStrings = {
  ...CS,
  heroCtaHint: 'Pošlite URL článku a pripravíme bezplatnú audio ukážku.',
  heroPills: ['Bezplatné zavedenie', '7-dňová skúška', 'Viacjazyčné', 'Pripravené na prístupnosť'],
  publishingLabel: 'Vydavateľstvo',
  minRead: '4 min čítania',
  asideTitle: 'Určené pre vydavateľov a inštitúcie',
  asideMiniCards: [
    { title: 'Automatická narrácia', note: 'Audio sa generuje z článkov automaticky.' },
    { title: '15+ jazykov', note: 'Lokálne hlasy pre trh a rubriku.' },
    { title: 'Pripravené na prístupnosť', note: 'UX v súlade s WCAG, editorsky zamerané.' },
    { title: 'Analytika počúvania', note: 'Pochopte počúvanie, nielen plané metriky.' },
  ],
  asideTrialTitle: 'Bezplatná 7-dňová skúška',
  asideTrialLead: 'Pošlite URL článku — vrátime ukážkový prehrávač na vašom obsahu.',
  asideTrialFoot: 'Bezplatná pomoc so zavedením • 7-dňová skúška • Podpora inštalácie zahrnutá',
  featureCards: [
    {
      title: 'Automatická narrácia',
      desc: 'Články sa nahovoria bez ďalších krokov. Čitatelia stlačia play a ďalej čítajú alebo počúvajú.',
    },
    {
      title: 'Prístupnosť',
      desc: 'Praktická audio vrstva pre zaneprázdnených čitateľov a zrakovo postihnuté publikum.',
    },
    {
      title: 'Viacjazyčnosť a hlasy',
      desc: 'Obsluhujte trhy vo viacerých jazykoch s prémiovými hlasmi podľa regiónu.',
    },
    {
      title: 'Analytika počúvania',
      desc: 'Sledujte mieru počúvania, čas a dokončenie — vylaďte stratégiu audia.',
    },
  ],
  bottomTitle: 'Pre vydavateľov — stabilné, automatizované a ľahko inštalovateľné',
  bottomLead:
    'Nie je to dashboard. Je to audio vrstva priamo v článku — čitatelia môžu počúvať, nielen čítať.',
  bottomCards: [
    {
      h: 'Analytika počúvania',
      p: 'Sledujte, ako často sa články prehrávajú, počúvanie do konca a trendy na webe — uvidíte, čo sa naozaj počúva.',
    },
    {
      h: 'Viac času v článku',
      p: 'Počúvači často ostanú pri príbehu dlhšie. To zvyčajne znamená viac času na stránke, viac reklamného inventára pri scrollovaní a lepšiu ekonomiku pre vydavateľov.',
    },
    {
      h: 'Zavedenie a pomoc',
      p: 'Bezplatné nastavenie a integračná podpora pre vaše šablóny.',
    },
    {
      h: 'Automatická regenerácia',
      p: 'Keď sa článok zmení, audio sa dá znova vygenerovať automaticky.',
    },
  ],
  bottomAsideEyebrow: 'Skúšobná verzia',
  bottomAsideTitle: 'Pošlite URL článku — pošleme ukážku',
  bottomAsideLead:
    'Pozrite sa, ako znie počúvateľný článok na vašom obsahu. Hlasy, viac jazykov a produkčný prehrávač.',
  bottomAsideFoot:
    'Pošlite URL článku a pripravíme bezplatnú audio ukážku. Pomoc so zavedením zahrnutá.',
  ariaLanguageMenu: 'Jazyk',
  trialModalSubtitle: 'Napíšte e-mail — odpovieme ukážkou a ďalšími krokmi.',
  trialEmailLabel: 'Váš e-mail',
  trialUrlLabel: 'URL článku (voliteľné)',
  trialNotesLabel: 'Poznámky (voliteľné)',
  trialNotesPlaceholder: 'Vydavateľstvo, CMS, trhy, termín…',
  trialSubmit: 'Odoslať žiadosť',
  trialSubmitting: 'Odosielanie…',
  trialCloseAria: 'Zavrieť',
  trialSuccessTitle: 'Správa odoslaná',
  trialSuccessHeadline: 'Ďakujeme',
  trialSuccessBody:
    'Dostali sme vašu žiadosť. Čoskoro sa ozveme e-mailom s ukážkou alebo ďalšími krokmi.',
  trialSuccessHint: 'Medzitým môžete ďalej skúmať prehrávač na tejto stránke.',
  trialSuccessCta: 'Zavrieť',
  trialErrMissingKey: 'Chýba kľúč Web3Forms. Nastavte VITE_WEB3FORMS_ACCESS_KEY v prostredí.',
  trialErrGeneric: 'Niečo sa pokazilo. Skúste znova.',
  trialErrNetwork: 'Chyba siete. Skúste znova.',
}

const HU: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Küldje el a cikk URL-jét, és ingyenes hangmintát készítünk.',
  heroPills: ['Ingyenes bevezetés', '7 napos próba', 'Többnyelvű', 'Akadálymentesség'],
  publishingLabel: 'Kiadvány',
  minRead: '4 perc olvasás',
  asideTitle: 'Kiadók és intézmények számára',
  asideMiniCards: [
    { title: 'Automatikus narráció', note: 'A hang a cikkekből automatikusan készül.' },
    { title: '15+ nyelv', note: 'Helyi hangok piac és rovat szerint.' },
    { title: 'Akadálymentesség', note: 'WCAG-kompatibilis, szerkesztői szemléletű UX.' },
    { title: 'Hallgatási analitika', note: 'Értse a hallgatást, ne csak a mutatószámokat.' },
  ],
  asideTrialTitle: 'Ingyenes 7 napos próba',
  asideTrialLead: 'Küldjön cikk URL-t — visszaküldünk egy minta lejátszót a tartalmára.',
  asideTrialFoot: 'Ingyenes bevezető segítség • 7 napos próba • Telepítési támogatás benne',
  featureCards: [
    {
      title: 'Automatikus narráció',
      desc: 'A cikkek extra munkafolyamat nélkül hangosítódnak. Az olvasók megnyomják a lejátszást, és tovább olvasnak vagy hallgatnak.',
    },
    {
      title: 'Akadálymentesség',
      desc: 'Gyakorlati audio réteg elfoglalt olvasóknak és látássérült közönségnek.',
    },
    {
      title: 'Többnyelvűség és hangok',
      desc: 'Szolgáljon ki piacokat több nyelven, piaconként prémium hangokkal.',
    },
    {
      title: 'Hallgatási analitika',
      desc: 'Kövesse a hallgatási arányt, időt és befejezést — finomítsa audio stratégiáját.',
    },
  ],
  bottomTitle: 'Kiadóknak — stabil, automatizált és könnyen telepíthető',
  bottomLead:
    'Ez nem irányítópult. Ez egy audio réteg a cikkben — az olvasók hallgatni is tudnak, nem csak olvasni.',
  bottomCards: [
    {
      h: 'Hallgatási analitika',
      p: 'Kövesse, milyen gyakran játsszák le a cikkeket, a végighallgatást és a trendeket az oldalon — lássa, mit hallgatnak tényleg.',
    },
    {
      h: 'Több idő a cikkben',
      p: 'A hallgatók gyakran tovább maradnak a történetnél. Ez általában több időt az oldalon, több hirdetési lehetőséget görgetéskor és jobb eredményt jelent a kiadóknak.',
    },
    {
      h: 'Bevezetés és segítség',
      p: 'Ingyenes beállítási útmutató és integrációs támogatás a sablonjaihoz.',
    },
    {
      h: 'Automatikus újragenerálás',
      p: 'Ha a cikk változik, a hang automatikusan újragenerálható.',
    },
  ],
  bottomAsideEyebrow: 'Próbaverzió',
  bottomAsideTitle: 'Küldje el a cikk URL-jét — küldünk mintát',
  bottomAsideLead:
    'Nézze meg, milyen egy meghallgatható cikk a tartalmán. Hangok, többnyelvűség, éles környezetre kész lejátszó.',
  bottomAsideFoot:
    'Küldje el a cikk URL-jét, és ingyenes hangmintát készítünk. Bevezető segítség benne van.',
  ariaLanguageMenu: 'Nyelv',
  trialModalSubtitle: 'Írja meg az e-mail címét — válaszolunk mintával és a következő lépésekkel.',
  trialEmailLabel: 'Az Ön e-mail címe',
  trialUrlLabel: 'Cikk URL (opcionális)',
  trialNotesLabel: 'Megjegyzés (opcionális)',
  trialNotesPlaceholder: 'Kiadó, CMS, piacok, ütemezés…',
  trialSubmit: 'Küldés',
  trialSubmitting: 'Küldés…',
  trialCloseAria: 'Bezárás',
  trialSuccessTitle: 'Üzenet elküldve',
  trialSuccessHeadline: 'Köszönjük',
  trialSuccessBody:
    'Megkaptuk a kérését. Hamarosan e-mailben jelentkezünk mintával vagy a következő lépésekkel.',
  trialSuccessHint: 'Addig is felfedezheti a lejátszót ezen az oldalon.',
  trialSuccessCta: 'Bezárás',
  trialErrMissingKey: 'Hiányzik a Web3Forms kulcs. Állítsa be a VITE_WEB3FORMS_ACCESS_KEY értéket.',
  trialErrGeneric: 'Hiba történt. Próbálja újra.',
  trialErrNetwork: 'Hálózati hiba. Próbálja újra.',
}

const BG: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Изпратете URL на статията и ще подготвим безплатен аудио образец.',
  heroPills: ['Безплатно въвеждане', '7-дневен пробен период', 'Многоезично', 'Готово за достъпност'],
  publishingLabel: 'Издателство',
  minRead: '4 мин четене',
  asideTitle: 'Създадено за издатели и институции',
  asideMiniCards: [
    { title: 'Автоматично озвучаване', note: 'Аудиото се генерира от статии автоматично.' },
    { title: '15+ езика', note: 'Локални гласове за пазар и рубрика.' },
    { title: 'Готово за достъпност', note: 'UX в духа на WCAG, редакционно насочено.' },
    { title: 'Аналитика на слушането', note: 'Разберете слушането, не само показатели.' },
  ],
  asideTrialTitle: 'Безплатен 7-дневен пробен период',
  asideTrialLead: 'Изпратете URL на статия — връщаме примерен плейър върху вашето съдържание.',
  asideTrialFoot: 'Безплатна помощ при въвеждане • 7-дневен пробен период • Поддръжка при инсталация включена',
  featureCards: [
    {
      title: 'Автоматично озвучаване',
      desc: 'Статиите се озвучават без допълнителен работен поток. Читателите натискат play и продължават да четат или слушат.',
    },
    {
      title: 'Достъпност',
      desc: 'Практичен аудио слой за заети читатели и за аудитории с увредено зрение.',
    },
    {
      title: 'Многоезичност и гласове',
      desc: 'Обслужвайте пазари на няколко езика с премиум гласове по регион.',
    },
    {
      title: 'Аналитика на слушането',
      desc: 'Следете слушания, времето и завършването — подобрете аудио стратегията.',
    },
  ],
  bottomTitle: 'За издатели — стабилно, автоматизирано и лесно за инсталация',
  bottomLead:
    'Това не е табло. Това е аудио слой в статията — читателите могат да слушат, не само да четат.',
  bottomCards: [
    {
      h: 'Аналитика на слушането',
      p: 'Следете колко често се пускат статиите, дослушването и тенденциите в сайта — вижте какво наистина се слуша.',
    },
    {
      h: 'Повече време в статията',
      p: 'Слушателите често остават по-дълго с историята. Обикновено това означава повече време на страницата, повече рекламен инвентар при скрол и по-добър резултат за издателите.',
    },
    {
      h: 'Въвеждане и помощ',
      p: 'Безплатно насочване при настройка и интеграционна поддръжка за вашите шаблони.',
    },
    {
      h: 'Автоматично регенериране',
      p: 'При промяна на статията аудиото може да се регенерира автоматично.',
    },
  ],
  bottomAsideEyebrow: 'Пробен период',
  bottomAsideTitle: 'Изпратете URL на статия — изпращаме образец',
  bottomAsideLead:
    'Вижте как звучи слушаема статия върху вашето съдържание. Гласове, многоезичност и плейър за продукция.',
  bottomAsideFoot:
    'Изпратете URL на статия и ще подготвим безплатен аудио образец. Помощ при въвеждане включена.',
  ariaLanguageMenu: 'Език',
  trialModalSubtitle: 'Изпратете имейл — отговаряме с образец и следващи стъпки.',
  trialEmailLabel: 'Вашият имейл',
  trialUrlLabel: 'URL на статия (по избор)',
  trialNotesLabel: 'Бележки (по избор)',
  trialNotesPlaceholder: 'Издателство, CMS, пазари, срок…',
  trialSubmit: 'Изпрати заявка',
  trialSubmitting: 'Изпращане…',
  trialCloseAria: 'Затвори',
  trialSuccessTitle: 'Съобщението е изпратено',
  trialSuccessHeadline: 'Благодарим',
  trialSuccessBody:
    'Получихме заявката ви. Скоро ще се свържем по имейл с образец или следващи стъпки.',
  trialSuccessHint: 'Междувременно може да разглеждате плейъра на тази страница.',
  trialSuccessCta: 'Затвори',
  trialErrMissingKey: 'Липсва ключ на Web3Forms. Задайте VITE_WEB3FORMS_ACCESS_KEY в средата.',
  trialErrGeneric: 'Нещо се обърка. Опитайте отново.',
  trialErrNetwork: 'Мрежова грешка. Опитайте отново.',
}

const HR: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Pošaljite URL članka i pripremit ćemo besplatan audio uzorak.',
  heroPills: ['Besplatno uvođenje', '7-dnevno probno razdoblje', 'Višejezično', 'Spremno za pristupačnost'],
  publishingLabel: 'Izdavaštvo',
  minRead: '4 min čitanja',
  asideTitle: 'Namijenjeno izdavačima i institucijama',
  asideMiniCards: [
    { title: 'Automatska naracija', note: 'Audio se generira iz članaka automatski.' },
    { title: '15+ jezika', note: 'Lokalni glasovi po tržištu i rubrici.' },
    { title: 'Spremno za pristupačnost', note: 'UX u skladu s WCAG-om, editorialno usmjeren.' },
    { title: 'Analitika slušanja', note: 'Razumijte slušanje, a ne prazne metrike.' },
  ],
  asideTrialTitle: 'Besplatno 7-dnevno probno razdoblje',
  asideTrialLead: 'Pošaljite URL članka — vratit ćemo uzorak playera na vašem sadržaju.',
  asideTrialFoot: 'Besplatna pomoć pri uvođenju • 7-dnevno probno razdoblje • Podrška za instalaciju uključena',
  featureCards: [
    {
      title: 'Automatska naracija',
      desc: 'Članci se nariraju bez dodatnih koraka u radnom tijeku. Čitatelji pritisnu play i nastave čitati ili slušati.',
    },
    {
      title: 'Pristupačnost',
      desc: 'Praktičan audio sloj za zaposlene čitatelje i za publiku s oštećenjem vida.',
    },
    {
      title: 'Višejezičnost i glasovi',
      desc: 'Opslužujte tržišta na više jezika s premium glasovima po regiji.',
    },
    {
      title: 'Analitika slušanja',
      desc: 'Pratite stope slušanja, vrijeme i dovršetak — usavršite audio strategiju.',
    },
  ],
  bottomTitle: 'Za izdavače — stabilno, automatizirano i lako za instalaciju',
  bottomLead:
    'Ovo nije nadzorna ploča. To je audio sloj unutar članka — čitatelji mogu slušati, ne samo čitati.',
  bottomCards: [
    {
      h: 'Analitika slušanja',
      p: 'Pratite koliko se često članci reproduciraju, slušanje do kraja i trendove na webu — vidite što se stvarno sluša.',
    },
    {
      h: 'Više vremena u članku',
      p: 'Slušatelji često duže ostaju uz priču. To obično znači više vremena na stranici, više inventara oglasa pri pomicanju i bolje rezultate za izdavače.',
    },
    {
      h: 'Uvođenje i pomoć',
      p: 'Besplatno usmjeravanje pri postavljanju i integracijska podrška za vaše predloške.',
    },
    {
      h: 'Automatska regeneracija',
      p: 'Ako se članak promijeni, audio se može automatski regenerirati.',
    },
  ],
  bottomAsideEyebrow: 'Probno razdoblje',
  bottomAsideTitle: 'Pošaljite URL članka — šaljemo uzorak',
  bottomAsideLead:
    'Pogledajte kako zvuči članak za slušanje na vašem sadržaju. Glasovi, više jezika i player za produkciju.',
  bottomAsideFoot:
    'Pošaljite URL članka i pripremit ćemo besplatan audio uzorak. Pomoć pri uvođenju uključena.',
  ariaLanguageMenu: 'Jezik',
  trialModalSubtitle: 'Pošaljite e-mail — odgovaramo uzorkom i sljedećim koracima.',
  trialEmailLabel: 'Vaš e-mail',
  trialUrlLabel: 'URL članka (opcionalno)',
  trialNotesLabel: 'Bilješke (opcionalno)',
  trialNotesPlaceholder: 'Izdavač, CMS, tržišta, rok…',
  trialSubmit: 'Pošalji zahtjev',
  trialSubmitting: 'Slanje…',
  trialCloseAria: 'Zatvori',
  trialSuccessTitle: 'Poruka poslana',
  trialSuccessHeadline: 'Hvala',
  trialSuccessBody:
    'Primili smo vaš zahtjev. Uskoro ćemo se javiti e-poštom s uzorkom ili sljedećim koracima.',
  trialSuccessHint: 'U međuvremu možete nastaviti istraživati player na ovoj stranici.',
  trialSuccessCta: 'Zatvori',
  trialErrMissingKey: 'Nedostaje Web3Forms ključ. Postavite VITE_WEB3FORMS_ACCESS_KEY u okruženju.',
  trialErrGeneric: 'Nešto je pošlo po zlu. Pokušajte ponovo.',
  trialErrNetwork: 'Mrežna greška. Pokušajte ponovo.',
}

const SR: PageUiStrings = {
  ...HR,
  heroCtaHint: 'Пошаљите URL чланка и припремићемо бесплатан аудио узорак.',
  heroPills: ['Бесплатно увођење', '7-дневни пробни период', 'Вишејезично', 'Спремно за приступачност'],
  publishingLabel: 'Издаваштво',
  minRead: '4 мин читања',
  asideTitle: 'Намењено издавачима и институцијама',
  asideMiniCards: [
    { title: 'Аутоматска нарација', note: 'Аудио се генерише из чланака аутоматски.' },
    { title: '15+ језика', note: 'Локални гласови по тржишту и рубрици.' },
    { title: 'Спремно за приступачност', note: 'UX у складу са WCAG-ом, едиторијално усмерен.' },
    { title: 'Аналитика слушања', note: 'Разумите слушање, не само метрике.' },
  ],
  asideTrialTitle: 'Бесплатан 7-дневни пробни период',
  asideTrialLead: 'Пошаљите URL чланка — враћамо узорак плејера на вашем садржају.',
  asideTrialFoot: 'Бесплатна помоћ при увођењу • 7-дневни пробни период • Подршка за инсталацију укључена',
  featureCards: [
    {
      title: 'Аутоматска нарација',
      desc: 'Чланци се наратују без додатних корака. Читаоци притисну play и наставе да читају или слушају.',
    },
    {
      title: 'Приступачност',
      desc: 'Практичан аудио слој за заузете читаоце и за публику са оштећењем вида.',
    },
    {
      title: 'Вишејезичност и гласови',
      desc: 'Опслужујте тржишта на више језика са премијум гласовима по региону.',
    },
    {
      title: 'Аналитика слушања',
      desc: 'Пратите стопе слушања, време и завршетак — усавршите аудио стратегију.',
    },
  ],
  bottomTitle: 'За издаваче — стабилно, аутоматизовано и лако за инсталацију',
  bottomLead:
    'Ово није контролна табла. То је аудио слој у чланку — читаоци могу да слушају, не само да читају.',
  bottomCards: [
    {
      h: 'Аналитика слушања',
      p: 'Пратите колико се често чланци пуштају, слушање до краја и трендове на сајту — видите шта се заиста слуша.',
    },
    {
      h: 'Више времена у чланку',
      p: 'Слушаоци често дуже остају уз причу. То обично значи више времена на страници, више рекламног инвентара при скроловању и боље резултате за издаваче.',
    },
    {
      h: 'Увођење и помоћ',
      p: 'Бесплатно усмеравање при подешавању и интеграциона подршка за ваше шаблоне.',
    },
    {
      h: 'Аутоматска регенерација',
      p: 'Ако се чланак промени, аудио се може аутоматски регенерисати.',
    },
  ],
  bottomAsideEyebrow: 'Пробни период',
  bottomAsideTitle: 'Пошаљите URL чланка — шаљемо узорак',
  bottomAsideLead:
    'Погледајте како звучи чланак за слушање на вашем садржају. Гласови, више језика и плејер за продукцију.',
  bottomAsideFoot:
    'Пошаљите URL чланка и припремићемо бесплатан аудио узорак. Помоћ при увођењу укључена.',
  ariaLanguageMenu: 'Језик',
  trialModalSubtitle: 'Пошаљите е-пошту — одговарамо узорком и следећим корацима.',
  trialEmailLabel: 'Ваша е-пошта',
  trialUrlLabel: 'URL чланка (опционо)',
  trialNotesLabel: 'Белешке (опционо)',
  trialNotesPlaceholder: 'Издавач, CMS, тржишта, рок…',
  trialSubmit: 'Пошаљи захтев',
  trialSubmitting: 'Слање…',
  trialCloseAria: 'Затвори',
  trialSuccessTitle: 'Порука послата',
  trialSuccessHeadline: 'Хвала',
  trialSuccessBody:
    'Примили смо ваш захтев. Ускоро ћемо се јавити е-поштом са узорком или следећим корацима.',
  trialSuccessHint: 'У међувремену можете да истражујете плејер на овој страници.',
  trialSuccessCta: 'Затвори',
  trialErrMissingKey: 'Недостаје Web3Forms кључ. Поставите VITE_WEB3FORMS_ACCESS_KEY у окружењу.',
  trialErrGeneric: 'Нешто није у реду. Покушајте поново.',
  trialErrNetwork: 'Мрежна грешка. Покушајте поново.',
}

const SL: PageUiStrings = {
  ...CS,
  heroCtaHint: 'Pošljite URL članka in pripravili bomo brezplačen zvočni vzorec.',
  heroPills: ['Brezplačna uvedba', '7-dnevno preskušanje', 'Večjezično', 'Pripravljeno na dostopnost'],
  publishingLabel: 'Založništvo',
  minRead: '4 min branja',
  asideTitle: 'Namenjeno založnikom in institucijam',
  asideMiniCards: [
    { title: 'Samodejna naracija', note: 'Zvok se ustvari iz člankov samodejno.' },
    { title: '15+ jezikov', note: 'Lokalni glasovi za trg in rubriko.' },
    { title: 'Pripravljeno na dostopnost', note: 'UX v skladu z WCAG, uredniško naravnan.' },
    { title: 'Analitika poslušanja', note: 'Razumite poslušanje, ne le številke.' },
  ],
  asideTrialTitle: 'Brezplačno 7-dnevno preskušanje',
  asideTrialLead: 'Pošljite URL članka — vrnemo vzorčni predvajalnik na vaši vsebini.',
  asideTrialFoot: 'Brezplačna pomoč pri uvedbi • 7-dnevno preskušanje • Podpora pri namestitvi vključena',
  featureCards: [
    {
      title: 'Samodejna naracija',
      desc: 'Članki se opremijo z zvokom brez dodatnih korakov. Bralci pritisnejo predvajanje in nadaljujejo z branjem ali poslušanjem.',
    },
    {
      title: 'Dostopnost',
      desc: 'Praktičen zvočni sloj za zaposlene bralce in za občinstvo s slabšim vidom.',
    },
    {
      title: 'Večjezičnost in glasovi',
      desc: 'Storite trge v več jezikih s premium glasovi po regijah.',
    },
    {
      title: 'Analitika poslušanja',
      desc: 'Spremljajte stopnje poslušanja, čas in dokončanje — izpopolnite strategijo zvoka.',
    },
  ],
  bottomTitle: 'Za založnike — stabilno, avtomatizirano in enostavno za namestitev',
  bottomLead:
    'To ni nadzorna plošča. To je zvočni sloj v članku — bralci lahko poslušajo, ne le berejo.',
  bottomCards: [
    {
      h: 'Analitika poslušanja',
      p: 'Spremljajte, kako pogosto se članki predvajajo, poslušanje do konca in trende na spletu — vidite, kaj se res posluša.',
    },
    {
      h: 'Več časa v članku',
      p: 'Poslušalci pogosto ostanejo dlje ob zgodbi. To običajno pomeni več časa na strani, več oglasnega inventarja pri drsenju in boljše rezultate za založnike.',
    },
    {
      h: 'Uvedba in pomoč',
      p: 'Brezplačno usmerjanje pri nastavitvi in integracijska podpora za vaše predloge.',
    },
    {
      h: 'Samodejna regeneracija',
      p: 'Če se članek spremeni, je zvok mogoče samodejno znova ustvariti.',
    },
  ],
  bottomAsideEyebrow: 'Preskušanje',
  bottomAsideTitle: 'Pošljite URL članka — pošljemo vzorec',
  bottomAsideLead:
    'Oglejte si, kako zveni članek za poslušanje na vaši vsebini. Glasovi, več jezikov in predvajalnik za produkcijo.',
  bottomAsideFoot:
    'Pošljite URL članka in pripravili bomo brezplačen zvočni vzorec. Pomoč pri uvedbi vključena.',
  ariaLanguageMenu: 'Jezik',
  trialModalSubtitle: 'Pošljite e-pošto — odgovorimo z vzorcem in naslednjimi koraki.',
  trialEmailLabel: 'Vaš e-poštni naslov',
  trialUrlLabel: 'URL članka (neobvezno)',
  trialNotesLabel: 'Opombe (neobvezno)',
  trialNotesPlaceholder: 'Založnik, CMS, trgi, rok…',
  trialSubmit: 'Pošlji zahtevo',
  trialSubmitting: 'Pošiljanje…',
  trialCloseAria: 'Zapri',
  trialSuccessTitle: 'Sporočilo poslano',
  trialSuccessHeadline: 'Hvala',
  trialSuccessBody:
    'Prejeli smo vašo zahtevo. Kmalu se bomo javili po e-pošti z vzorcem ali naslednjimi koraki.',
  trialSuccessHint: 'Medtem lahko še naprej raziskujete predvajalnik na tej strani.',
  trialSuccessCta: 'Zapri',
  trialErrMissingKey: 'Manjka ključ Web3Forms. Nastavite VITE_WEB3FORMS_ACCESS_KEY v okolju.',
  trialErrGeneric: 'Nekaj je šlo narobe. Poskusite znova.',
  trialErrNetwork: 'Omrežna napaka. Poskusite znova.',
}

const DA: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Send artikel-URL, så forbereder vi en gratis lydprøve.',
  heroPills: ['Gratis onboarding', '7 dages prøve', 'Flersproget', 'Klar til tilgængelighed'],
  publishingLabel: 'Udgivelse',
  minRead: '4 min læsning',
  asideTitle: 'Bygget til forlag og institutioner',
  asideMiniCards: [
    { title: 'Automatisk narration', note: 'Genererer lyd fra artikler automatisk.' },
    { title: '15+ sprog', note: 'Lokale stemmer pr. marked og sektion.' },
    { title: 'Klar til tilgængelighed', note: 'WCAG-orienteret, redaktionelt UX.' },
    { title: 'Lytteanalyse', note: 'Forstå lytning — ikke bare vanity-metrics.' },
  ],
  asideTrialTitle: 'Gratis 7-dages prøveperiode',
  asideTrialLead: 'Send en artikel-URL — vi returnerer en sample-afspiller på dit indhold.',
  asideTrialFoot: 'Gratis onboarding-hjælp • 7 dages prøve • Installationssupport inkluderet',
  featureCards: [
    {
      title: 'Automatisk narration',
      desc: 'Artikler narreres uden ekstra workflow. Læsere trykker play og fortsætter med at læse eller lytte.',
    },
    {
      title: 'Tilgængelighed',
      desc: 'Et praktisk audiolag for travle læsere og for målgrupper med nedsat syn.',
    },
    {
      title: 'Flersproget og stemmer',
      desc: 'Betjen markeder på flere sprog med premium-stemmer pr. region.',
    },
    {
      title: 'Lytteanalyse',
      desc: 'Følg lytterater, tid og fuldførelse — finpuds din lydstrategi.',
    },
  ],
  bottomTitle: 'Til forlag — stabilt, automatiseret og nemt at installere',
  bottomLead:
    'Det er ikke et dashboard. Det er et audiolag i artiklen — læsere kan lytte i stedet for kun at læse.',
  bottomCards: [
    {
      h: 'Lytteanalyse',
      p: 'Følg hvor ofte artikler afspilles, lytning til ende og tendenser på sitet — så du ved, hvad der faktisk bliver lyttet til.',
    },
    {
      h: 'Mere tid i artiklen',
      p: 'Lyttere bliver ofte længere ved historien. Det betyder typisk mere tid på siden, mere annonceinventar ved scroll og bedre økonomi for udgivere.',
    },
    {
      h: 'Onboarding og hjælp',
      p: 'Gratis opsætningsvejledning og integrationssupport til dine skabeloner.',
    },
    {
      h: 'Automatisk regenerering',
      p: 'Hvis en artikel ændres, kan lyd regenereres automatisk.',
    },
  ],
  bottomAsideEyebrow: 'Gratis prøve',
  bottomAsideTitle: 'Send artikel-URL — vi sender en prøve',
  bottomAsideLead:
    'Se, hvordan en lytbar artikel føles på dit indhold. Stemmer, flersproget og produktionsklar afspiller.',
  bottomAsideFoot:
    'Send artikel-URL, så forbereder vi en gratis lydprøve. Onboarding-hjælp inkluderet.',
  ariaLanguageMenu: 'Sprog',
  trialModalSubtitle: 'Send din e-mail — vi svarer med en prøve og næste skridt.',
  trialEmailLabel: 'Din e-mail',
  trialUrlLabel: 'Artikel-URL (valgfrit)',
  trialNotesLabel: 'Noter (valgfrit)',
  trialNotesPlaceholder: 'Forlag, CMS, markeder, tidsplan…',
  trialSubmit: 'Send anmodning',
  trialSubmitting: 'Sender…',
  trialCloseAria: 'Luk',
  trialSuccessTitle: 'Besked sendt',
  trialSuccessHeadline: 'Tak',
  trialSuccessBody:
    'Vi har modtaget din anmodning. Vi vender tilbage pr. mail med en prøve eller næste skridt.',
  trialSuccessHint: 'Du kan fortsætte med at udforske afspilleren på denne side.',
  trialSuccessCta: 'Luk',
  trialErrMissingKey: 'Mangler Web3Forms-nøgle. Angiv VITE_WEB3FORMS_ACCESS_KEY i miljøet.',
  trialErrGeneric: 'Noget gik galt. Prøv igen.',
  trialErrNetwork: 'Netværksfejl. Prøv igen.',
}

const SV: PageUiStrings = {
  ...DA,
  heroCtaHint: 'Skicka artikel-URL så förbereder vi ett gratis ljudprov.',
  heroPills: ['Gratis onboarding', '7 dagars prov', 'Flerspråkigt', 'Redo för tillgänglighet'],
  publishingLabel: 'Publicering',
  minRead: '4 min läsning',
  asideTitle: 'Byggt för förlag och institutioner',
  asideMiniCards: [
    { title: 'Automatisk narration', note: 'Genererar ljud från artiklar automatiskt.' },
    { title: '15+ språk', note: 'Lokala röster per marknad och avdelning.' },
    { title: 'Redo för tillgänglighet', note: 'WCAG-inriktat, redaktionellt UX.' },
    { title: 'Lyssningsanalys', note: 'Förstå lyssnandet — inte bara yta-siffror.' },
  ],
  asideTrialTitle: 'Gratis 7-dagars provperiod',
  asideTrialLead: 'Skicka en artikel-URL — vi returnerar en sample-spelare på ditt innehåll.',
  asideTrialFoot: 'Gratis onboarding-hjälp • 7 dagars prov • Installationssupport ingår',
  featureCards: [
    {
      title: 'Automatisk narration',
      desc: 'Artiklar narreras utan extra arbetsflöde. Läsare trycker på play och fortsätter läsa eller lyssna.',
    },
    {
      title: 'Tillgänglighet',
      desc: 'Ett praktiskt ljudlager för upptagna läsare och för målgrupper med nedsatt syn.',
    },
    {
      title: 'Flerspråkigt och röster',
      desc: 'Betjäna marknader på flera språk med premiumröster per region.',
    },
    {
      title: 'Lyssningsanalys',
      desc: 'Följ lyssningsfrekvens, tid och slutförande — förfina din ljudstrategi.',
    },
  ],
  bottomTitle: 'För förlag — stabilt, automatiserat och enkelt att installera',
  bottomLead:
    'Det här är inte en instrumentpanel. Det är ett ljudlager i artikeln — läsare kan lyssna i stället för att bara läsa.',
  bottomCards: [
    {
      h: 'Lyssningsanalys',
      p: 'Följ hur ofta artiklar spelas upp, lyssning till slut och trender på webbplatsen — så du ser vad som verkligen lyssnas på.',
    },
    {
      h: 'Mer tid i artikeln',
      p: 'Lyssnare stannar ofta längre med berättelsen. Det innebär oftast mer tid på sidan, mer annonsinventarie vid scroll och bättre ekonomi för utgivare.',
    },
    {
      h: 'Onboarding och hjälp',
      p: 'Gratis uppsättningsstöd och integrationssupport för dina mallar.',
    },
    {
      h: 'Automatisk regenerering',
      p: 'Om en artikel ändras kan ljud regenereras automatiskt.',
    },
  ],
  bottomAsideEyebrow: 'Gratis prov',
  bottomAsideTitle: 'Skicka artikel-URL — vi skickar ett prov',
  bottomAsideLead:
    'Se hur en lyssningsbar artikel känns på ditt innehåll. Röster, flerspråkigt och produktionsklar spelare.',
  bottomAsideFoot:
    'Skicka artikel-URL så förbereder vi ett gratis ljudprov. Onboarding-hjälp ingår.',
  ariaLanguageMenu: 'Språk',
  trialModalSubtitle: 'Skicka din e-post — vi svarar med ett prov och nästa steg.',
  trialEmailLabel: 'Din e-post',
  trialUrlLabel: 'Artikel-URL (valfritt)',
  trialNotesLabel: 'Anteckningar (valfritt)',
  trialNotesPlaceholder: 'Förlag, CMS, marknader, tidsplan…',
  trialSubmit: 'Skicka förfrågan',
  trialSubmitting: 'Skickar…',
  trialCloseAria: 'Stäng',
  trialSuccessTitle: 'Meddelande skickat',
  trialSuccessHeadline: 'Tack',
  trialSuccessBody:
    'Vi har tag emot din förfrågan. Vi återkommer snart via e-post med ett prov eller nästa steg.',
  trialSuccessHint: 'Du kan fortsätta utforska spelaren på den här sidan under tiden.',
  trialSuccessCta: 'Stäng',
  trialErrMissingKey: 'Web3Forms-nyckel saknas. Ange VITE_WEB3FORMS_ACCESS_KEY i miljön.',
  trialErrGeneric: 'Något gick fel. Försök igen.',
  trialErrNetwork: 'Nätverksfel. Försök igen.',
}

const NO: PageUiStrings = {
  ...SV,
  heroCtaHint: 'Send artikkel-URL, så forbereder vi en gratis lydprøve.',
  heroPills: ['Gratis onboarding', '7 dagers prøve', 'Flerspråklig', 'Klar for tilgjengelighet'],
  publishingLabel: 'Utgivelse',
  minRead: '4 min lesing',
  asideTitle: 'Bygget for forlag og institusjoner',
  asideMiniCards: [
    { title: 'Automatisk narrasjon', note: 'Genererer lyd fra artikler automatisk.' },
    { title: '15+ språk', note: 'Lokale stemmer per marked og seksjon.' },
    { title: 'Klar for tilgjengelighet', note: 'WCAG-orientert, redaksjonelt UX.' },
    { title: 'Lytteanalyse', note: 'Forstå lytting — ikke bare overflate-tall.' },
  ],
  asideTrialTitle: 'Gratis 7-dagers prøveperiode',
  asideTrialLead: 'Send en artikkel-URL — vi returnerer en sample-spiller på innholdet ditt.',
  asideTrialFoot: 'Gratis onboarding-hjelp • 7 dagers prøve • Installasjonsstøtte inkludert',
  featureCards: [
    {
      title: 'Automatisk narrasjon',
      desc: 'Artikler narreres uten ekstra arbeidsflyt. Lesere trykker play og fortsetter å lese eller lytte.',
    },
    {
      title: 'Tilgjengelighet',
      desc: 'Et praktisk lydlag for travle lesere og for målgrupper med nedsatt syn.',
    },
    {
      title: 'Flerspråklig og stemmer',
      desc: 'Betjen markeder på flere språk med premium-stemmer per region.',
    },
    {
      title: 'Lytteanalyse',
      desc: 'Følg lytterater, tid og fullføring — finjuster lydstrategien.',
    },
  ],
  bottomTitle: 'For forlag — stabilt, automatisert og enkelt å installere',
  bottomLead:
    'Dette er ikke et dashbord. Det er et lydlag i artikkelen — lesere kan lytte i stedet for bare å lese.',
  bottomCards: [
    {
      h: 'Lytteanalyse',
      p: 'Følg hvor ofte artikler spilles av, lytting til slutt og trender på nettstedet — slik at du ser hva som faktisk blir lyttet til.',
    },
    {
      h: 'Mer tid i artikkelen',
      p: 'Lyttere blir ofte lenger med historien. Det betyr vanligvis mer tid på siden, mer annonseinventar ved scrolling og bedre økonomi for utgivere.',
    },
    {
      h: 'Onboarding og hjelp',
      p: 'Gratis oppsettveiledning og integrasjonsstøtte for malene dine.',
    },
    {
      h: 'Automatisk regenerering',
      p: 'Hvis en artikkel endres, kan lyd regenereres automatisk.',
    },
  ],
  bottomAsideEyebrow: 'Gratis prøve',
  bottomAsideTitle: 'Send artikkel-URL — vi sender et eksempel',
  bottomAsideLead:
    'Se hvordan en lyttbar artikkel føles på innholdet ditt. Stemmer, flerspråklig og produksjonsklar spiller.',
  bottomAsideFoot:
    'Send artikkel-URL, så forbereder vi en gratis lydprøve. Onboarding-hjelp inkludert.',
  ariaLanguageMenu: 'Språk',
  trialModalSubtitle: 'Send e-posten din — vi svarer med et eksempel og neste steg.',
  trialEmailLabel: 'Din e-post',
  trialUrlLabel: 'Artikkel-URL (valgfritt)',
  trialNotesLabel: 'Notater (valgfritt)',
  trialNotesPlaceholder: 'Forlag, CMS, markeder, tidsplan…',
  trialSubmit: 'Send forespørsel',
  trialSubmitting: 'Sender…',
  trialCloseAria: 'Lukk',
  trialSuccessTitle: 'Melding sendt',
  trialSuccessHeadline: 'Takk',
  trialSuccessBody:
    'Vi har mottatt forespørselen din. Vi tar kontakt på e-post snart med et eksempel eller neste steg.',
  trialSuccessHint: 'Du kan fortsette å utforske spilleren på denne siden i mellomtiden.',
  trialSuccessCta: 'Lukk',
  trialErrMissingKey: 'Mangler Web3Forms-nøkkel. Angi VITE_WEB3FORMS_ACCESS_KEY i miljøet.',
  trialErrGeneric: 'Noe gikk galt. Prøv igjen.',
  trialErrNetwork: 'Nettverksfeil. Prøv igjen.',
}

const FI: PageUiStrings = {
  ...EN,
  heroCtaHint: 'Lähetä artikkelin URL — valmistelemme ilmaisen audio-näytteen.',
  heroPills: ['Ilmainen käyttöönotto', '7 päivän kokeilu', 'Monikielinen', 'Esteettömyysvalmis'],
  publishingLabel: 'Julkaisu',
  minRead: '4 min lukuaika',
  asideTitle: 'Rakennettu kustantajille ja laitoksille',
  asideMiniCards: [
    { title: 'Automaattinen narrointi', note: 'Ääni luodaan artikkeleista automaattisesti.' },
    { title: '15+ kieltä', note: 'Paikalliset äänet markkina- ja osastoittain.' },
    { title: 'Esteettömyysvalmis', note: 'WCAG-linjainen, toimituksellinen UX.' },
    { title: 'Kuunteluanalytiikka', note: 'Ymmärrä kuuntelu, ei vain pintalukuja.' },
  ],
  asideTrialTitle: 'Ilmainen 7 päivän kokeilu',
  asideTrialLead: 'Lähetä artikkelin URL — palautamme esimerkkisoittimen sisällöllesi.',
  asideTrialFoot: 'Ilmainen käyttöönottoapu • 7 päivän kokeilu • Asennustuki mukana',
  featureCards: [
    {
      title: 'Automaattinen narrointi',
      desc: 'Artikkelit äänitetään ilman ylimääräisiä työnkulkuja. Lukijat painavat toistoa ja jatkavat lukemista tai kuuntelua.',
    },
    {
      title: 'Esteettömyys',
      desc: 'Käytännöllinen äänikerros kiireisille lukijoille ja näkövammaisille yleisöille.',
    },
    {
      title: 'Monikielisyys ja äänet',
      desc: 'Palvele markkinoita useilla kielillä premium-äänillä alueittain.',
    },
    {
      title: 'Kuunteluanalytiikka',
      desc: 'Seuraa kuuntelukertoja, aikaa ja loppuun kuuntelua — hiosta äänistrategiaa.',
    },
  ],
  bottomTitle: 'Kustantajille — vakaa, automatisoitu ja helppo asentaa',
  bottomLead:
    'Tämä ei ole hallintapaneeli. Se on äänikerros artikkelissa — lukijat voivat kuunnella, eivät vain lukea.',
  bottomCards: [
    {
      h: 'Kuunteluanalytiikka',
      p: 'Seuraa, kuinka usein artikkeleita toistetaan, kuuntelu loppuun ja trendejä sivustolla — näet, mitä oikeasti kuunnellaan.',
    },
    {
      h: 'Enemmän aikaa artikkelissa',
      p: 'Kuuntelijat pysyvät usein pidempään tarinan äärellä. Se tarkoittaa yleensä enemmän aikaa sivulla, enemmän mainostilaa vieritettäessä ja parempaa tulosta kustantajille.',
    },
    {
      h: 'Käyttöönotto ja apu',
      p: 'Ilmainen käyttöönoton ohjaus ja integraatiotuki malleillesi.',
    },
    {
      h: 'Automaattinen uudelleenluonti',
      p: 'Kun artikkeli muuttuu, äänen voi luoda uudelleen automaattisesti.',
    },
  ],
  bottomAsideEyebrow: 'Ilmainen kokeilu',
  bottomAsideTitle: 'Lähetä artikkelin URL — lähetämme näytteen',
  bottomAsideLead:
    'Näe, miltä kuunneltava artikkeli tuntuu sisällölläsi. Äänet, monikielisyys ja tuotantovalmis soitin.',
  bottomAsideFoot:
    'Lähetä artikkelin URL ja valmistelemme ilmaisen audio-näytteen. Käyttöönottoapu mukana.',
  ariaLanguageMenu: 'Kieli',
  trialModalSubtitle: 'Lähetä sähköpostisi — vastaamme näytteellä ja seuraavilla askelilla.',
  trialEmailLabel: 'Sähköpostisi',
  trialUrlLabel: 'Artikkelin URL (valinnainen)',
  trialNotesLabel: 'Muistiinpanot (valinnainen)',
  trialNotesPlaceholder: 'Kustantaja, CMS, markkinat, aikataulu…',
  trialSubmit: 'Lähetä pyyntö',
  trialSubmitting: 'Lähetetään…',
  trialCloseAria: 'Sulje',
  trialSuccessTitle: 'Viesti lähetetty',
  trialSuccessHeadline: 'Kiitos',
  trialSuccessBody:
    'Olemme vastaanottaneet pyyntösi. Palaamme pian sähköpostitse näytteellä tai seuraavilla askelilla.',
  trialSuccessHint: 'Voit silti tutkia soitinta tällä sivulla.',
  trialSuccessCta: 'Sulje',
  trialErrMissingKey: 'Web3Forms-avain puuttuu. Aseta VITE_WEB3FORMS_ACCESS_KEY ympäristöön.',
  trialErrGeneric: 'Jokin meni pieleen. Yritä uudelleen.',
  trialErrNetwork: 'Verkkovirhe. Yritä uudelleen.',
}

const PAGE_UI: Record<Locale, PageUiStrings> = {
  en: EN,
  ro: RO,
  lt: LT,
  de: DE,
  es: ES,
  cs: CS,
  sk: SK,
  hu: HU,
  bg: BG,
  hr: HR,
  sr: SR,
  sl: SL,
  da: DA,
  sv: SV,
  no: NO,
  fi: FI,
}

export function getPageUi(locale: Locale): PageUiStrings {
  return PAGE_UI[locale] ?? EN
}
