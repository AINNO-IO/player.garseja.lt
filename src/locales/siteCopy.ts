import type { Locale, LocaleBundle } from './index'
import type { PageUiStrings } from './pageUi'

/**
 * Marketing copy for the redesigned landing page (nav, hero, setup steps,
 * monetisation, pricing calculator, trial CTA, Garsio TTS cross-promo, FAQ,
 * footer).
 *
 * Full copy exists for `en` and `lt` (taken from the Claude Design
 * "Garsio Player" file). Other locales reuse their existing localized hero /
 * player / trial strings and fall back to English for the new sections.
 */

export type SetupStep = { n: string; title: string; desc: string }
/** `a` may be one paragraph or several. */
export type FaqItem = { q: string; a: string | readonly string[] }
export type PromoVoice = { name: string; desc: string; audioPathFromRoot: string }

export type SiteCopy = {
  navCta: string
  heroBadge: string
  /** First part of the headline (plain). */
  heroTitle1: string
  /** Second part of the headline (accent colour). May be empty. */
  heroTitle2: string
  heroSub: string
  heroCta: string
  chips: readonly [string, string, string]
  demoLabel: string
  listenLabel: string
  setupTitle: string
  steps: readonly [SetupStep, SetupStep, SetupStep]
  companyLine: string
  monKicker: string
  monTitle: string
  monBody: string
  monArticleLabel: string
  /** Short badge shown on the progress bar of the monetisation illustration. */
  monAdBadge: string
  monCaption: string
  calcTitle: string
  calcArticles: string
  calcLength: string
  calcBilling: string
  calcMonthly: string
  calcYearly: string
  calcTotalSymbols: string
  calcPriceMonthly: string
  calcPriceYearly: string
  calcPerMonth: string
  /** Use `{X}` as the placeholder for the formatted amount. */
  calcSavings: string
  calcIndividual: string
  calcIndividualSub: string
  calcContact: string
  trialTitle: string
  trialSub: string
  trialUrlPh: string
  trialEmailPh: string
  trialBtn: string
  trialNote: string
  trialQuestions: string
  trialThanks: string
  promoBadge: string
  promoTitle1: string
  promoTitle2: string
  promoBody: string
  promoCta: string
  promoPricing: string
  promoListen: string
  promoVoices: readonly [PromoVoice, PromoVoice, PromoVoice, PromoVoice]
  faqTitle: string
  faqs: readonly FaqItem[]
  footTerms: string
  footPrivacy: string
}

const PROMO_AUDIO = {
  ads: 'audio/promo/ads.mp3',
  learning: 'audio/promo/learning.mp3',
  story: 'audio/promo/story.mp3',
  news: 'audio/promo/news.mp3',
} as const

const EN: SiteCopy = {
  navCta: 'Start free trial',
  heroBadge: 'Free 7-day trial',
  heroTitle1: 'Your articles,',
  heroTitle2: 'out loud',
  heroSub:
    'A clean audio player your readers press play on — natural voices, any language, and a new revenue stream built in.',
  heroCta: 'Start free 7-day trial',
  chips: ['Multilingual', 'Accessible', 'Ad monetisation'],
  demoLabel: 'Try it — pick a voice',
  listenLabel: 'Listen to the article',
  setupTitle: 'Setup is easy',
  steps: [
    { n: '1', title: 'Start your trial', desc: 'Tell us your website address — that’s all we need to begin.' },
    { n: '2', title: 'Get instructions', desc: 'We prepare the player for your site and email you simple setup steps.' },
    {
      n: '3',
      title: 'Readers listen',
      desc: 'A play button appears on your articles. Audio stays in sync with your content.',
    },
  ],
  companyLine: 'Garsio Player is a product of MB „AI sprendimai“, Laisvės g. 13-1, Bukiškio k., Vilniaus r., Lithuania.',
  monKicker: 'Monetisation',
  monTitle: 'Listening that pays for itself',
  monBody:
    'The player can run short audio ads turning every listen into an additional revenue stream for your site.',
  monArticleLabel: 'Your article',
  monAdBadge: 'AD',
  monCaption: 'Short ads during playback. You earn per listen.',
  calcTitle: 'What would it cost?',
  calcArticles: 'Articles per month',
  calcLength: 'Average article length (characters)',
  calcBilling: 'Billing',
  calcMonthly: 'Monthly',
  calcYearly: 'Yearly',
  calcTotalSymbols: 'Characters per month',
  calcPriceMonthly: 'Your monthly price',
  calcPriceYearly: 'Your monthly price (billed yearly)',
  calcPerMonth: '/ month',
  calcSavings: 'You save {X} per year',
  calcIndividual: 'Let’s talk — individual pricing',
  calcIndividualSub: 'For volumes like yours we prepare a custom offer — better rates included.',
  calcContact: 'Contact us',
  trialTitle: 'Try it free for 7 days',
  trialSub:
    'Leave your website address — we’ll set up the player for your articles and send simple install instructions.',
  trialUrlPh: 'yourwebsite.com',
  trialEmailPh: 'you@email.com',
  trialBtn: 'Start free trial',
  trialNote: 'No credit card required.',
  trialQuestions: 'Questions?',
  trialThanks: 'Thanks! Check your inbox — instructions are on the way.',
  promoBadge: 'Free start — 1,000 characters',
  promoTitle1: 'Need a voice for your own text?',
  promoTitle2: 'Try Garsio',
  promoBody:
    'Our text-to-speech studio for everyone: paste any text, pick from 20+ natural voices and a speaking style — get an MP3 in seconds. Presentations, ads, stories, learning materials.',
  promoCta: 'Try Garsio free',
  promoPricing: 'Plans & pricing',
  promoListen: 'Hear how it sounds',
  promoVoices: [
    { name: 'Ads', desc: 'Energetic', audioPathFromRoot: PROMO_AUDIO.ads },
    { name: 'Learning & courses', desc: 'Professional', audioPathFromRoot: PROMO_AUDIO.learning },
    { name: 'Children’s stories', desc: 'Warm, narrative', audioPathFromRoot: PROMO_AUDIO.story },
    { name: 'News', desc: 'Clear, neutral', audioPathFromRoot: PROMO_AUDIO.news },
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'What is Garsio Player?',
      a: 'Garsio Player is a text-to-speech (TTS) player that turns your written content into high-quality audio — so visitors can listen to articles, blogs, and other text-based content, not just read it.',
    },
    {
      q: 'How does the integration work?',
      a: [
        'Garsio Player is a small script that turns each article into an audio track and shows a play button where you place it. You add the snippet to your article template or through your tag manager — no backend changes, and it works with WordPress, Drupal and custom CMSs alike.',
        'When an article is published, its text is converted to speech once. The audio is ready within minutes and reused for every listener. If you edit the article, the audio is regenerated automatically and only the new conversion counts toward your character allowance.',
        'The player fits above the first paragraph, next to the byline or in a sticky bar, takes your brand colour and loads asynchronously.',
      ],
    },
    {
      q: 'How easy is it to integrate?',
      a: 'Integration is simple — usually under a couple of hours, including testing and deployment, and our support team is there to help at every step. We recommend placing the player above the first line of the article, where it’s most visible and easy for listeners to reach.',
    },
    {
      q: 'Which languages and voices are available?',
      a: 'Garsio Player currently speaks 16 languages: English, Lithuanian, Czech, Slovak, Hungarian, Romanian, Bulgarian, Croatian, Serbian, Slovenian, German, Spanish, Danish, Swedish, Norwegian and Finnish, each with at least two natural-sounding voices. You can preview every voice on this page by switching the language, and choose the voice per site, per section or per article when you go live.',
    },
    {
      q: 'Who is Garsio Player for?',
      a: [
        'News portals: give commuters a way to follow the day’s stories hands-free and keep them on your site longer.',
        'Magazines and long reads: long features suit listening, and audio makes a 3,000-word piece approachable on a phone.',
        'Blogs and newsletters: add an audio version to every post without recording anything yourself.',
        'Public institutions and NGOs: meet accessibility expectations for readers with visual impairments or reading difficulties, in every language you publish in.',
      ],
    },
    {
      q: 'Why do publishers add audio to articles?',
      a: [
        'More time with your content: listeners stay with a story while walking, driving or cooking — moments when reading is not an option.',
        'Accessibility by default: audio versions help readers with visual impairments, dyslexia or low literacy, and support accessibility requirements for public-sector sites.',
        'A new revenue line: short audio ads before or during playback turn listening into income, on top of your existing display inventory.',
      ],
    },
    {
      q: 'Does the player work with WordPress and other CMSs?',
      a: 'Yes. The player is a single script tag, so it works with WordPress, Drupal, Joomla, Webflow, custom CMSs and tag managers alike. We send step-by-step instructions for your platform when you start the trial.',
    },
    {
      q: 'Does the audio player slow down my website?',
      a: 'No. The script loads asynchronously after your page content, and audio is streamed only when a reader presses play.',
    },
    {
      q: 'How much does it cost?',
      a: 'Pricing is based on the number of characters converted per month, starting from 20 € per month, with a 15% discount on yearly billing. Use the calculator above for an estimate; for very large volumes we prepare an individual offer.',
    },
    {
      q: 'How many people can listen to a single piece of content?',
      a: 'There’s no limit. Content is converted to audio once, and only that conversion counts toward your character allowance — no matter how many people listen.',
    },
    {
      q: 'What happens if I edit my content?',
      a: 'As long as the content stays unchanged, its audio remains available to listeners without using any additional characters. If you modify the content, the audio is regenerated and the new conversion counts toward your character allowance.',
    },
    {
      q: 'What happens when I run out of characters?',
      a: 'Existing audio keeps working seamlessly, but the player won’t appear on new content. You can upgrade your plan or purchase additional characters at any time to keep using Garsio Player for new content.',
    },
  ],
  footTerms: 'Terms of Use',
  footPrivacy: 'Privacy Policy',
}

const LT: SiteCopy = {
  navCta: 'Išbandyk nemokamai',
  heroBadge: '7 dienos nemokamai',
  heroTitle1: 'Tavo straipsniai —',
  heroTitle2: 'įgarsinti',
  heroSub:
    'Skaitytojai klauso tavo straipsnių — kelyje, sporte, virtuvėje. Natūralūs balsai, kelios kalbos ir papildomos pajamos iš reklamos.',
  heroCta: 'Išbandyk 7 dienas nemokamai',
  chips: ['Kelios kalbos', 'Natūralūs balsai', 'Pajamos iš reklamos'],
  demoLabel: 'Išbandyk — pasirink balsą',
  listenLabel: 'Klausyti teksto',
  setupTitle: 'Įdiegti — paprasta',
  steps: [
    { n: '1', title: 'Užpildyk formą', desc: 'Atsiųsime trumpą diegimo instrukciją.' },
    { n: '2', title: 'Įdėk grotuvą į svetainę', desc: 'Keli paprasti žingsniai pagal instrukciją.' },
    { n: '3', title: 'Grotuvas veikia', desc: 'Prie straipsnių atsiranda „Klausyti“ mygtukas.' },
  ],
  companyLine: '„Garsio Player“ — MB „AI sprendimai“ produktas. Laisvės g. 13-1, Bukiškio k., Vilniaus r., Lietuva.',
  monKicker: 'Papildomos pajamos',
  monTitle: 'Grotuvas, kuris uždirba',
  monBody:
    'Prieš straipsnį ar jo metu grotuvas paleidžia trumpą garso reklamą. Kiekvienas paklausymas — pajamos tau, o grotuvas atsiperka pats.',
  monArticleLabel: 'Tavo straipsnis',
  monAdBadge: 'Reklama',
  monCaption: 'Trumpa reklama — tavo pajamos už kiekvieną paklausymą.',
  calcTitle: 'Kiek kainuos tau?',
  calcArticles: 'Straipsnių per mėnesį',
  calcLength: 'Vidutinis straipsnio ilgis (simboliais)',
  calcBilling: 'Mokėjimo planas',
  calcMonthly: 'Mėnesinis',
  calcYearly: 'Metinis',
  calcTotalSymbols: 'Simbolių per mėnesį',
  calcPriceMonthly: 'Tavo mėnesio kaina',
  calcPriceYearly: 'Tavo mėnesio kaina (mokant už metus)',
  calcPerMonth: '/ mėn.',
  calcSavings: 'Sutaupai {X} per metus',
  calcIndividual: 'Dideliems kiekiams — individuali kaina',
  calcIndividualSub: 'Tokiems kiekiams paruošiame individualų pasiūlymą — su geresne kaina.',
  calcContact: 'Gauti pasiūlymą',
  trialTitle: 'Išbandyk nemokamai 7 dienas',
  trialSub:
    'Palik svetainės adresą ir el. paštą — per 1 darbo dieną atsiųsime diegimo instrukciją ir prieigą. Jokių įsipareigojimų.',
  trialUrlPh: 'tavosvetaine.lt',
  trialEmailPh: 'tavo@pastas.lt',
  trialBtn: 'Išbandyti nemokamai',
  trialNote: 'Banko kortelės nereikia.',
  trialQuestions: 'Turi klausimų?',
  trialThanks: 'Ačiū! Instrukcija netrukus atkeliaus į tavo paštą.',
  promoBadge: 'Nemokamas startas — 1000 simbolių',
  promoTitle1: 'Reikia balso tavo tekstui?',
  promoTitle2: 'Išbandyk Garsio',
  promoBody:
    'Teksto įgarsinimas kiekvienam: įklijuok tekstą, pasirink balsą ir stilių, atsisiųsk MP3. Prezentacijoms, reklamai, pasakoms, mokymams.',
  promoCta: 'Išbandyk nemokamai',
  promoPricing: 'Planai ir kainos',
  promoListen: 'Paklausyk, kaip skamba',
  promoVoices: [
    { name: 'Reklama', desc: 'Energingas stilius', audioPathFromRoot: PROMO_AUDIO.ads },
    { name: 'Audio mokymai ir kursai', desc: 'Dalykiškas stilius', audioPathFromRoot: PROMO_AUDIO.learning },
    { name: 'Vaikiškos pasakos', desc: 'Šiltas, pasakojantis', audioPathFromRoot: PROMO_AUDIO.story },
    { name: 'Naujienos', desc: 'Aiškus, neutralus', audioPathFromRoot: PROMO_AUDIO.news },
  ],
  faqTitle: 'Dažniausiai užduodami klausimai',
  faqs: [
    {
      q: 'Kas yra „Garsio Player“?',
      a: 'Grotuvas, kuris automatiškai įgarsina tavo straipsnius natūraliu balsu, kad lankytojai galėtų juos ne tik skaityti, bet ir klausyti.',
    },
    {
      q: 'Kaip veikia integracija?',
      a: [
        '„Garsio Player“ — nedidelis skriptas, kuris kiekvieną straipsnį paverčia garso įrašu ir parodo „Klausyti“ mygtuką ten, kur jį įdėsi. Kodo fragmentą įdedi į straipsnio šabloną arba per žymų tvarkyklę — serverio dalies keisti nereikia, tinka WordPress, Drupal ir individualioms TVS.',
        'Paskelbus straipsnį, jo tekstas į garsą konvertuojamas vieną kartą. Įrašas paruošiamas per kelias minutes ir naudojamas visiems klausytojams. Pataisius straipsnį, garsas sugeneruojamas iš naujo automatiškai, o į simbolių limitą skaičiuojama tik nauja konversija.',
        'Grotuvas tinka virš pirmos pastraipos, prie autoriaus eilutės ar prilipusioje juostoje, perima tavo prekės ženklo spalvą ir įkeliamas asinchroniškai.',
      ],
    },
    {
      q: 'Ar sudėtinga įdiegti?',
      a: 'Diegimas paprastas — paprastai užtrunka vos porą valandų, įskaitant testavimą ir paleidimą, o mūsų komanda padės kiekviename žingsnyje. Rekomenduojame grotuvą įdėti virš pirmos straipsnio eilutės — ten jis geriausiai matomas ir lengvai pasiekiamas.',
    },
    {
      q: 'Kokios kalbos ir balsai prieinami?',
      a: '„Garsio Player“ šiuo metu kalba 16 kalbų: anglų, lietuvių, čekų, slovakų, vengrų, rumunų, bulgarų, kroatų, serbų, slovėnų, vokiečių, ispanų, danų, švedų, norvegų ir suomių — kiekviena su bent dviem natūraliai skambančiais balsais. Visus balsus gali išgirsti šiame puslapyje perjungęs kalbą, o paleidus grotuvą balsą rinksi visai svetainei, atskirai rubrikai ar straipsniui.',
    },
    {
      q: 'Kam skirtas „Garsio Player“?',
      a: [
        'Naujienų portalams: leisk keliaujantiems sekti dienos naujienas neliečiant ekrano ir ilgiau išlaikyk juos savo svetainėje.',
        'Žurnalams ir ilgiems tekstams: ilgi straipsniai puikiai tinka klausyti, o garsas 3000 žodžių tekstą padaro patogų ir telefone.',
        'Tinklaraščiams ir naujienlaiškiams: pridėk garso versiją prie kiekvieno įrašo nieko neįrašinėdamas pats.',
        'Viešajam sektoriui ir NVO: atitik prieinamumo reikalavimus skaitytojams su regos ar skaitymo sutrikimais — visomis kalbomis, kuriomis publikuoji.',
      ],
    },
    {
      q: 'Kodėl leidėjai prideda garsą prie straipsnių?',
      a: [
        'Daugiau laiko su tavo turiniu: klausytojai lieka su istorija einant, vairuojant ar gaminant — tada, kai skaityti neįmanoma.',
        'Prieinamumas iš karto: garso versijos padeda skaitytojams su regos sutrikimais, disleksija ar silpnesniais skaitymo įgūdžiais ir padeda atitikti viešojo sektoriaus prieinamumo reikalavimus.',
        'Nauja pajamų eilutė: trumpa garso reklama prieš įrašą ar jo metu klausymą paverčia pajamomis — papildomai prie esamos reklamos.',
      ],
    },
    {
      q: 'Ar grotuvas veikia su WordPress ir kitomis TVS?',
      a: 'Taip. Grotuvas — vienas skripto tagas, todėl veikia su WordPress, Drupal, Joomla, Webflow, individualiomis TVS ir žymų tvarkyklėmis. Pradėjus bandymą atsiųsime instrukciją tavo platformai.',
    },
    {
      q: 'Ar grotuvas sulėtina svetainę?',
      a: 'Ne. Skriptas įkeliamas asinchroniškai po puslapio turinio, o garsas transliuojamas tik skaitytojui paspaudus „Klausyti“.',
    },
    {
      q: 'Kiek tai kainuoja?',
      a: 'Kaina priklauso nuo per mėnesį konvertuojamų simbolių skaičiaus ir prasideda nuo 20 € per mėnesį; mokant už metus taikoma 15 % nuolaida. Pasinaudok skaičiuokle aukščiau, o dideliems kiekiams paruošime individualų pasiūlymą.',
    },
    {
      q: 'Kiek žmonių gali klausyti to paties turinio?',
      a: 'Limito nėra. Turinys į garsą konvertuojamas vieną kartą, ir tik ši konversija skaičiuojama į simbolių limitą — nesvarbu, kiek žmonių klausys.',
    },
    {
      q: 'Kas nutinka, jei redaguoju turinį?',
      a: 'Kol turinys nepakeistas, garso įrašas lieka pasiekiamas nenaudojant papildomų simbolių. Pakeitus turinį, garsas sugeneruojamas iš naujo, ir nauja konversija skaičiuojama į simbolių limitą.',
    },
    {
      q: 'Kas nutinka pasibaigus simbolių limitui?',
      a: 'Esamas turinys veikia kaip veikęs, tačiau prie naujo turinio grotuvas neberodomas. Bet kada gali atnaujinti planą arba įsigyti papildomų simbolių ir toliau naudoti „Garsio Player“ naujam turiniui.',
    },
  ],
  footTerms: 'Naudojimosi taisyklės',
  footPrivacy: 'Privatumo politika',
}

const FULL: Partial<Record<Locale, SiteCopy>> = { en: EN, lt: LT }

/** True when the locale has its own landing-page translation (vs. English fallback). */
export const hasFullCopy = (locale: Locale): boolean => locale in FULL

/**
 * Resolve the landing-page copy for a locale. Locales without a dedicated
 * translation reuse their existing localized strings where an equivalent
 * exists and fall back to English for the rest.
 */
export function getSiteCopy(locale: Locale, bundle: LocaleBundle, ui: PageUiStrings): SiteCopy {
  const full = FULL[locale]
  if (full) return full

  return {
    ...EN,
    navCta: bundle.landing.heroCta,
    heroTitle1: bundle.landing.heroTitle,
    heroTitle2: '',
    heroSub: bundle.landing.heroSubtitle,
    heroCta: bundle.landing.heroCta,
    chips: [ui.heroPills[2], ui.heroPills[3], ui.heroPills[1]],
    listenLabel: bundle.player.listenLabel,
    trialBtn: ui.trialSubmit,
    trialThanks: ui.trialSuccessBody,
  }
}

/**
 * On-site legal pages (/terms/, /privacy/), relative from a /<locale>/ page.
 * Their text is the original Lithuanian from garseja.lt (see src/legal/).
 */
export const LEGAL_LINKS = {
  terms: '../terms/',
  privacy: '../privacy/',
} as const

/** Locale-aware links to the Garsio B2C site (garsio.io has en and lt versions). */
export function garsioHref(locale: Locale, page: 'plans-and-pricing' | ''): string {
  const lang = locale === 'lt' ? 'lt' : 'en'
  return page ? `https://garsio.io/${lang}/${page}` : `https://garsio.io/${lang}/`
}
