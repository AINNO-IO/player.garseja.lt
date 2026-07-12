export type Locale =
  | 'en'
  | 'lt'
  | 'cs'
  | 'sk'
  | 'hu'
  | 'ro'
  | 'bg'
  | 'hr'
  | 'sr'
  | 'sl'
  | 'de'
  | 'es'
  | 'da'
  | 'sv'
  | 'no'
  | 'fi'

export type Voice = {
  id: string
  name: string
  audioPathFromRoot: string
}

export type PlayerStrings = {
  play: string
  pause: string
  listenLabel: string
  loading: string
  error: string
  voice: string
  speed: string
  seconds: string
}

export type LandingCopy = {
  navBrand: string
  navTagline: string
  heroTitle: string
  heroSubtitle: string
  heroCta: string
  demoHeading: string
  demoLead: string
  benefitsHeading: string
  benefits: string[]
  footerCta: string
  footerNote: string
}

export type DemoArticle = {
  title: string
  paragraphs: string[]
}

export type LocaleBundle = {
  locale: Locale
  languageName: string
  landing: LandingCopy
  article: DemoArticle
  player: PlayerStrings
  voices: Voice[]
  defaultVoiceId: string
}

export const LOCALES: Record<Locale, LocaleBundle> = {
  en: {
    locale: 'en',
    languageName: 'English',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Article audio player for publishers',
      heroTitle: 'Let readers listen instead of scroll.',
      heroSubtitle:
        'A clean, publisher-ready player that helps readers listen on the go — multilingual, accessible, and easy to embed.',
      heroCta: 'Test on your website',
      demoHeading: 'Demo: article + player',
      demoLead:
        'This page is a static demo. Switch language and everything updates together: copy, article, UI labels, available voices, and audio sample.',
      benefitsHeading: 'Why publishers use it',
      benefits: [
        'Increase time-on-page with listen-through sessions',
        'Improve accessibility for busy or visually impaired audiences',
        'Offer a consistent player UI across sites and sections',
        'Keep control: use your own content, your own voice choices',
        'No backend needed for this demo — fully static on GitHub Pages',
      ],
      footerCta: 'Want this on your site?',
      footerNote: 'Contact us to discuss integration, languages, and voice options.',
    },
    article: {
      title: 'Listening is the new reading',
      paragraphs: [
        'More and more people are choosing not only to read but also to listen to articles. Audio allows content to be consumed conveniently while traveling, exercising, or doing everyday tasks.',
        'For publishers, this becomes a simple way to increase reader engagement and reach a wider audience. Articles can be listened to, not just read.',
        'By implementing an audio player on a website, content becomes more accessible and flexible. Readers can choose the way that suits them best to consume information – reading or listening.',
      ],
    },
    player: {
      play: 'Play',
      pause: 'Pause',
      listenLabel: 'Listen to text',
      loading: 'Loading audio…',
      error: 'Could not load audio.',
      voice: 'Voice',
      speed: 'Speed',
      seconds: 's',
    },
    voices: [
      { id: 'en-1', name: 'Emma', audioPathFromRoot: 'audio/en/voice-1.mp3' },
      { id: 'en-2', name: 'James', audioPathFromRoot: 'audio/en/voice-2.mp3' },
    ],
    defaultVoiceId: 'en-1',
  },

  lt: {
    locale: 'lt',
    languageName: 'Lietuvių',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Straipsnių audio grotuvas leidėjams',
      heroTitle: 'Leiskite skaitytojams klausytis jūsų straipsnių.',
      heroSubtitle:
        'Pridėkite švarų audio grotuvą prie straipsnių, tinklaraščių ir naujienlaiškių — su lokalizuotais balsais ir paprastu įdiegimu.',
      heroCta: 'Išbandykite savo svetainėje',
      demoHeading: 'Demo: straipsnis + grotuvas',
      demoLead:
        'Tai statinis demo puslapis. Pakeitus kalbą, kartu pasikeičia tekstai, straipsnis, UI žymos, balsai ir audio pavyzdys.',
      benefitsHeading: 'Kodėl tai tinka leidėjams',
      benefits: [
        'Skaitytojai gali klausytis vietoj vien skaitymo',
        'Didesnis įsitraukimas ir laikas puslapyje',
        'Aiškus balso ir greičio pasirinkimas',
        'Lengva įdėti į esamą straipsnio šabloną',
        'Šis demo veikia be backend — visiškai statinis',
      ],
      footerCta: 'Norite tai įsidiegti savo svetainėje?',
      footerNote: 'Susisiekite — aptarsime integraciją, kalbas ir balsų parinktis.',
    },
    article: {
      title: 'Klausymas – naujas skaitymas',
      paragraphs: [
        'Šiuolaikiniai skaitytojai dažnai daro kelis darbus vienu metu. Kai straipsnį galima klausytis, turinys keliauja kartu — į darbą, sportuojant ar tvarkant kasdienius reikalus.',
        'Leidėjams audio nėra tik dar vienas formatas. Tai būdas praplėsti auditoriją, didinti įsitraukimą ir padaryti turinį prieinamesnį.',
        'Geras straipsnio grotuvas turi atrodyti natūraliai svetainėje, būti lengvai įdedamas ir suteikti aiškius greičio bei balso valdiklius.',
      ],
    },
    player: {
      play: 'Leisti',
      pause: 'Pauzė',
      listenLabel: 'Klausykite teksto',
      loading: 'Kraunamas audio…',
      error: 'Nepavyko įkelti audio.',
      voice: 'Balsas',
      speed: 'Greitis',
      seconds: 's',
    },
    voices: [
      { id: 'lt-1', name: 'Laura', audioPathFromRoot: 'audio/lt/voice-1.mp3' },
      { id: 'lt-2', name: 'Andrius', audioPathFromRoot: 'audio/lt/voice-2.mp3' },
      { id: 'lt-3', name: 'Aira', audioPathFromRoot: 'audio/lt/voice-3.mp3' },
      { id: 'lt-4', name: 'Benas', audioPathFromRoot: 'audio/lt/voice-4.mp3' },
    ],
    defaultVoiceId: 'lt-1',
  },

  cs: {
    locale: 'cs',
    languageName: 'Čeština',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Audio přehrávač článků pro vydavatele',
      heroTitle: 'Proměňte články na audio během pár minut.',
      heroSubtitle:
        'Čistý přehrávač připravený pro web vydavatele. Pomáhá čtenářům poslouchat na cestách — vícejazyčně, přístupně a bez rušení.',
      heroCta: 'Vyzkoušejte na svém webu',
      demoHeading: 'Demo: článek + přehrávač',
      demoLead:
        'Toto je statické demo. Při změně jazyka se vše přepne společně: texty stránky, článek, popisky UI, dostupné hlasy i audio ukázka.',
      benefitsHeading: 'Proč to vydavatelé používají',
      benefits: [
        'Delší čas na stránce díky poslechovým relacím',
        'Lepší přístupnost pro zaneprázdněné nebo zrakově znevýhodněné publikum',
        'Jednotné ovládání přehrávače napříč webem',
        'Kontrola nad obsahem i výběrem hlasů',
        'Žádný backend pro toto demo — vše staticky na GitHub Pages',
      ],
      footerCta: 'Chcete to na svém webu?',
      footerNote: 'Ozvěte se nám — probereme integraci, jazyky a možnosti hlasů.',
    },
    article: {
      title: 'Poslech je nové čtení',
      paragraphs: [
        'Stále více lidí si vybírá nejen čtení, ale i poslech článků. Audio umožňuje pohodlně konzumovat obsah při cestování, sportu nebo při každodenních činnostech.',
        'Pro vydavatele se to stává jednoduchým způsobem, jak zvýšit zapojení čtenářů a oslovit širší publikum. Články mohou být slyšeny, nejen přečteny.',
        'Zavedením audio přehrávače na webu se obsah stává dostupnějším a flexibilnějším. Čtenáři si mohou zvolit, jakým způsobem jim nejvíce vyhovuje konzumovat informace – číst nebo poslouchat.',
      ],
    },
    player: {
      play: 'Přehrát',
      pause: 'Pozastavit',
      listenLabel: 'Poslouchejte text',
      loading: 'Načítám audio…',
      error: 'Audio se nepodařilo načíst.',
      voice: 'Hlas',
      speed: 'Rychlost',
      seconds: 's',
    },
    voices: [
      { id: 'cs-1', name: 'Tereza', audioPathFromRoot: 'audio/cs/voice-1.mp3' },
      { id: 'cs-2', name: 'Antonín', audioPathFromRoot: 'audio/cs/voice-2.mp3' },
    ],
    defaultVoiceId: 'cs-1',
  },

  sk: {
    locale: 'sk',
    languageName: 'Slovenčina',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Audio prehrávač článkov pre vydavateľov',
      heroTitle: 'Zmeňte články na audio za pár minút.',
      heroSubtitle:
        'Čistý prehrávač pripravený pre publisher web. Pomáha čitateľom počúvať na cestách — viacjazyčne, prístupne a jednoducho.',
      heroCta: 'Vyskúšajte na svojej stránke',
      demoHeading: 'Demo: článok + prehrávač',
      demoLead:
        'Toto je statické demo. Pri zmene jazyka sa všetko prepne spolu: texty stránky, článok, UI popisky, dostupné hlasy aj audio ukážka.',
      benefitsHeading: 'Prečo to vydavatelia používajú',
      benefits: [
        'Dlhší čas na stránke vďaka počúvaniu',
        'Lepšia prístupnosť pre zaneprázdnené alebo zrakovo znevýhodnené publikum',
        'Jednotné ovládanie prehrávača naprieč webom',
        'Kontrola nad obsahom aj výberom hlasov',
        'Žiadny backend pre toto demo — plne statické na GitHub Pages',
      ],
      footerCta: 'Chcete to na svojom webe?',
      footerNote: 'Napíšte nám — preberieme integráciu, jazyky a možnosti hlasov.',
    },
    article: {
      title: 'Počúvanie je nové čítanie',
      paragraphs: [
        'Čoraz viac ľudí si vyberá nielen čítanie, ale aj počúvanie článkov. Audio umožňuje pohodlne konzumovať obsah pri cestovaní, športovaní alebo pri každodenných činnostiach.',
        'Pre vydavateľov sa to stáva jednoduchým spôsobom, ako zvýšiť zapojenie čitateľov a osloviť širšie publikum. Články môžu byť vypočuté, nielen prečítané.',
        'Zavedením audio prehrávača na webovej stránke sa obsah stáva dostupnejším a flexibilnejším. Čitatelia si môžu zvoliť, aký spôsob im najviac vyhovuje pri konzumácii informácií – čítať alebo počúvať.',
      ],
    },
    player: {
      play: 'Prehrať',
      pause: 'Pozastaviť',
      listenLabel: 'Počúvajte text',
      loading: 'Načítavam audio…',
      error: 'Audio sa nepodarilo načítať.',
      voice: 'Hlas',
      speed: 'Rýchlosť',
      seconds: 's',
    },
    voices: [
      { id: 'sk-1', name: 'Nina', audioPathFromRoot: 'audio/sk/voice-1.mp3' },
      { id: 'sk-2', name: 'Lukáš', audioPathFromRoot: 'audio/sk/voice-2.mp3' },
    ],
    defaultVoiceId: 'sk-1',
  },

  hu: {
    locale: 'hu',
    languageName: 'Magyar',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Cikk-hanglejátszó kiadóknak',
      heroTitle: 'Alakítsd a cikkeket hanggá néhány perc alatt.',
      heroSubtitle:
        'Letisztult, kiadói környezetbe illő lejátszó, hogy az olvasók útközben is hallgathassák a tartalmat — több nyelven, akadálymentesen.',
      heroCta: 'Próbálja ki a webhelyén',
      demoHeading: 'Demó: cikk + lejátszó',
      demoLead:
        'Ez egy statikus demó. Nyelvváltáskor minden együtt frissül: az oldal szövege, a cikk, a felület címkéi, a hangok és a hangminta.',
      benefitsHeading: 'Miért választják a kiadók',
      benefits: [
        'Növeli az oldalon töltött időt a meghallgatásokkal',
        'Javítja az akadálymentességet és a mobilos fogyasztást',
        'Egységes, átlátható lejátszófelület az egész oldalon',
        'Kontroll a tartalom és a hangválaszték felett',
        'Ehhez a demóhoz nem kell backend — teljesen statikus',
      ],
      footerCta: 'Kipróbálnád a saját oldaladon?',
      footerNote: 'Írj nekünk: integráció, nyelvek és hangopciók egyeztetéséhez.',
    },
    article: {
      title: 'A hallgatás az új olvasás',
      paragraphs: [
        'Egyre többen választják nemcsak az olvasást, hanem a cikkek meghallgatását is. A hang lehetővé teszi, hogy kényelmesen fogyasszunk tartalmat útközben, sportolás közben vagy a mindennapi teendők mellett.',
        'A kiadók számára ez egyszerű módja annak, hogy növeljék az olvasók elköteleződését és szélesebb közönséget érjenek el. A cikkeket lehet hallgatni is — nem csak olvasni.',
        'Hangos lejátszó bevezetésével a webhely tartalma elérhetőbb és rugalmasabb lesz. Az olvasók maguk választhatják meg, számukra melyik mód a legkényelmesebb az információ elfogyasztására: olvasás vagy hallgatás.',
      ],
    },
    player: {
      play: 'Lejátszás',
      pause: 'Szünet',
      listenLabel: 'Hallgasd meg a szöveget',
      loading: 'Audio betöltése…',
      error: 'Az audio nem tölthető be.',
      voice: 'Hang',
      speed: 'Sebesség',
      seconds: 'mp',
    },
    voices: [
      { id: 'hu-1', name: 'Noémi', audioPathFromRoot: 'audio/hu/voice-1.mp3' },
      { id: 'hu-2', name: 'Tamás', audioPathFromRoot: 'audio/hu/voice-2.mp3' },
    ],
    defaultVoiceId: 'hu-1',
  },

  ro: {
    locale: 'ro',
    languageName: 'Română',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Player audio pentru articole, pentru publisheri',
      heroTitle: 'Transformă articolele în audio în câteva minute.',
      heroSubtitle:
        'Un player curat, potrivit pentru site-uri de publishing, care îi ajută pe cititori să asculte din mers — multilingv, accesibil și ușor de integrat.',
      heroCta: 'Testează pe site-ul tău',
      demoHeading: 'Demo: articol + player',
      demoLead:
        'Acesta este un demo static. La schimbarea limbii, totul se actualizează împreună: textele paginii, articolul, etichetele UI, vocile și eșantionul audio.',
      benefitsHeading: 'De ce îl folosesc publisherii',
      benefits: [
        'Crește timpul petrecut pe pagină prin sesiuni de ascultare',
        'Îmbunătățește accesibilitatea și consumul pe mobil',
        'UI consecvent pentru player, indiferent de secțiune',
        'Control asupra conținutului și opțiunilor de voce',
        'Fără backend pentru acest demo — complet static pe GitHub Pages',
      ],
      footerCta: 'Vrei asta pe site-ul tău?',
      footerNote: 'Scrie-ne ca să discutăm integrarea, limbile și vocile disponibile.',
    },
    article: {
      title: 'Ascultarea este noua citire',
      paragraphs: [
        'Tot mai mulți oameni aleg nu doar să citească, ci și să asculte articole. Audio-ul permite consumul confortabil al conținutului în timpul deplasărilor, al activităților sportive sau al sarcinilor zilnice.',
        'Pentru editori, aceasta devine o modalitate simplă de a crește implicarea cititorilor și de a ajunge la un public mai larg. Articolele pot fi ascultate, nu doar citite.',
        'Prin implementarea unui player audio pe site, conținutul devine mai accesibil și mai flexibil. Cititorii pot alege modul care le este cel mai convenabil pentru a consuma informațiile – citind sau ascultând.',
      ],
    },
    player: {
      play: 'Redare',
      pause: 'Pauză',
      listenLabel: 'Ascultă textul',
      loading: 'Se încarcă audio…',
      error: 'Nu s-a putut încărca audio.',
      voice: 'Voce',
      speed: 'Viteză',
      seconds: 's',
    },
    voices: [
      { id: 'ro-1', name: 'Alina', audioPathFromRoot: 'audio/ro/voice-1.mp3' },
      { id: 'ro-2', name: 'Andrei', audioPathFromRoot: 'audio/ro/voice-2.mp3' },
    ],
    defaultVoiceId: 'ro-1',
  },

  bg: {
    locale: 'bg',
    languageName: 'Български',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Аудио плейър за статии за издатели',
      heroTitle: 'Превърнете статиите в аудио за минути.',
      heroSubtitle:
        'Изчистен плейър, подходящ за медийни сайтове. Помага на читателите да слушат в движение — многоезично, достъпно и лесно за вграждане.',
      heroCta: 'Тествайте на вашия сайт',
      demoHeading: 'Демо: статия + плейър',
      demoLead:
        'Това е статична демо страница. При смяна на езика се обновяват и текстовете, и статията, и UI етикетите.',
      benefitsHeading: 'Защо издателите го използват',
      benefits: [
        'Повече време на страницата чрез слушане',
        'По-добра достъпност за заети или зрително затруднени аудитории',
        'Консистентен UI на плейъра в целия сайт',
        'Контрол върху съдържанието и гласовете',
        'Това демо е изцяло статично — без бекенд',
      ],
      footerCta: 'Искате го и на вашия сайт?',
      footerNote: 'Свържете се с нас за интеграция, езици и гласове.',
    },
    article: {
      title: 'Слушането е новото четене',
      paragraphs: [
        'Все повече хора избират не само да четат, но и да слушат статии. Аудиото позволява удобно консумиране на съдържание по време на пътуване, спорт или при изпълнение на ежедневни задачи.',
        'За издателите това се превръща в лесен начин да увеличат ангажираността на читателите и да достигнат до по-широка аудитория. Статиите могат да бъдат слушани, а не само прочетени.',
        'С внедряването на аудио плейър в уебсайта съдържанието става по-достъпно и по-гъвкаво. Читателите могат да изберат най-удобния за тях начин да консумират информацията – да четат или да слушат.',
      ],
    },
    player: {
      play: 'Пускане',
      pause: 'Пауза',
      listenLabel: 'Слушайте текста',
      loading: 'Зареждане на аудио…',
      error: 'Неуспешно зареждане на аудио.',
      voice: 'Глас',
      speed: 'Скорост',
      seconds: 's',
    },
    voices: [
      { id: 'bg-1', name: 'Elena', audioPathFromRoot: 'audio/bg/voice-1.mp3' },
      { id: 'bg-2', name: 'Ivan', audioPathFromRoot: 'audio/bg/voice-2.mp3' },
    ],
    defaultVoiceId: 'bg-1',
  },

  hr: {
    locale: 'hr',
    languageName: 'Hrvatski',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Audio player za članke za izdavače',
      heroTitle: 'Pretvorite članke u audio za nekoliko minuta.',
      heroSubtitle:
        'Čist player spreman za izdavačke webove. Pomaže čitateljima slušati u pokretu — višejezično i jednostavno za ugradnju.',
      heroCta: 'Isprobajte na svojoj stranici',
      demoHeading: 'Demo: članak + player',
      demoLead:
        'Ovo je statični demo. Promjena jezika mijenja i sadržaj i UI oznake.',
      benefitsHeading: 'Zašto izdavači koriste ovo',
      benefits: [
        'Više vremena na stranici kroz slušanje',
        'Bolja pristupačnost',
        'Dosljedan UI playera',
        'Kontrola nad sadržajem i glasovima',
        'Demo radi bez backenda — potpuno statično',
      ],
      footerCta: 'Želite ovo na svojoj stranici?',
      footerNote: 'Javite se za integraciju, jezike i glasove.',
    },
    article: {
      title: 'Slušanje je novo čitanje',
      paragraphs: [
        'Sve više ljudi bira ne samo čitanje, već i slušanje članaka. Audio omogućuje praktičnu konzumaciju sadržaja tijekom putovanja, sporta ili obavljanja svakodnevnih aktivnosti.',
        'Za izdavače to postaje jednostavan način za povećanje angažmana čitatelja i dosezanje šire publike. Članci se mogu slušati, a ne samo čitati.',
        'Uvođenjem audio playera na web stranicu sadržaj postaje pristupačniji i fleksibilniji. Čitatelji mogu odabrati način koji im najviše odgovara za konzumaciju informacija – čitanje ili slušanje.',
      ],
    },
    player: {
      play: 'Pokreni',
      pause: 'Pauza',
      listenLabel: 'Slušajte tekst',
      loading: 'Učitavanje audio…',
      error: 'Ne mogu učitati audio.',
      voice: 'Glas',
      speed: 'Brzina',
      seconds: 's',
    },
    voices: [
      { id: 'hr-1', name: 'Ana', audioPathFromRoot: 'audio/hr/voice-1.mp3' },
      { id: 'hr-2', name: 'Marko', audioPathFromRoot: 'audio/hr/voice-2.mp3' },
    ],
    defaultVoiceId: 'hr-1',
  },

  sr: {
    locale: 'sr',
    languageName: 'Srpski',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Audio plejer za članke za izdavače',
      heroTitle: 'Pretvorite članke u audio za nekoliko minuta.',
      heroSubtitle:
        'Čist plejer spreman za izdavačke sajtove. Pomaže čitaocima da slušaju u pokretu — višejezično i lako za ugradnju.',
      heroCta: 'Тестирајте на вашем сајту',
      demoHeading: 'Demo: članak + plejer',
      demoLead:
        'Ovo je statičan demo. Promena jezika menja i sadržaj i UI oznake.',
      benefitsHeading: 'Zašto izdavači koriste ovo',
      benefits: [
        'Više vremena na stranici kroz slušanje',
        'Bolja pristupačnost',
        'Dosledan UI plejera',
        'Kontrola nad sadržajem i glasovima',
        'Demo radi bez backenda — potpuno statično',
      ],
      footerCta: 'Želite ovo na svom sajtu?',
      footerNote: 'Pišite nam za integraciju, jezike i glasove.',
    },
    article: {
      title: 'Slušanje je novo čitanje',
      paragraphs: [
        'Све више људи бира но не само лијена, већ и слушање чланака. Аудио омогућава практичну конзумацију садржаја током путовања, бављења спортом или обављања свакодневних активности.',
        'За издавача, овај пост је једноставан начин да повећа ангажовање читалаца и допре до ове публике. Могу да слушам чланак, али не могу да га читам.',
        'Увођењем аудио плејера на веб-сајт почетне странице постаје приступачније и флексибилније. Читаоци могу да изаберу начин који им највише одговара за конзумирање информација - читање или слушање.',
      ],
    },
    player: {
      play: 'Pusti',
      pause: 'Pauza',
      listenLabel: 'Slušajte tekst',
      loading: 'Učitavanje audio…',
      error: 'Ne mogu da učitam audio.',
      voice: 'Glas',
      speed: 'Brzina',
      seconds: 's',
    },
    voices: [
      { id: 'sr-1', name: 'Milica', audioPathFromRoot: 'audio/sr/voice-1.mp3' },
      { id: 'sr-2', name: 'Nikola', audioPathFromRoot: 'audio/sr/voice-2.mp3' },
    ],
    defaultVoiceId: 'sr-1',
  },

  sl: {
    locale: 'sl',
    languageName: 'Slovenščina',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Avdio predvajalnik člankov za založnike',
      heroTitle: 'Spremenite članke v avdio v nekaj minutah.',
      heroSubtitle:
        'Čist predvajalnik za medijske strani. Bralcem omogoča poslušanje na poti — večjezično in preprosto za vgradnjo.',
      heroCta: 'Preizkusite na svoji strani',
      demoHeading: 'Demo: članek + predvajalnik',
      demoLead:
        'To je statični demo. Menjava jezika posodobi tudi besedilo in UI oznake.',
      benefitsHeading: 'Zakaj ga založniki uporabljajo',
      benefits: [
        'Več časa na strani s poslušanjem',
        'Boljša dostopnost',
        'Dosleden UI predvajalnika',
        'Nadzor nad vsebino in glasovi',
        'Demo deluje brez backenda — popolnoma statično',
      ],
      footerCta: 'Želite to na svoji strani?',
      footerNote: 'Kontaktirajte nas za integracijo, jezike in glasove.',
    },
    article: {
      title: 'Poslušanje je novo branje',
      paragraphs: [
        'Vedno več ljudi se odloča ne le za branje, temveč tudi za poslušanje člankov. Avdio omogoča udobno spremljanje vsebine med potovanjem, športom ali opravljanjem vsakodnevnih opravil.',
        'Za založnike to postaja preprost način za povečanje angažiranosti bralcev in doseganje širšega občinstva. Članke je mogoče poslušati, ne le brati.',
        'Z uvedbo avdio predvajalnika na spletni strani vsebina postane dostopnejša in bolj prilagodljiva. Bralci lahko izberejo način, ki jim najbolj ustreza za spremljanje informacij – branje ali poslušanje.',
      ],
    },
    player: {
      play: 'Predvajaj',
      pause: 'Pavza',
      listenLabel: 'Poslušajte besedilo',
      loading: 'Nalaganje avdia…',
      error: 'Avdia ni mogoče naložiti.',
      voice: 'Glas',
      speed: 'Hitrost',
      seconds: 's',
    },
    voices: [
      { id: 'sl-1', name: 'Maja', audioPathFromRoot: 'audio/sl/voice-1.mp3' },
      { id: 'sl-2', name: 'Luka', audioPathFromRoot: 'audio/sl/voice-2.mp3' },
    ],
    defaultVoiceId: 'sl-1',
  },

  de: {
    locale: 'de',
    languageName: 'Deutsch',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Audio-Player für Artikel (für Publisher)',
      heroTitle: 'Let readers listen instead of scroll.',
      heroSubtitle:
        'A clean, publisher-ready player that helps readers listen on the go — multilingual, accessible, and easy to embed.',
      heroCta: 'Auf Ihrer Website testen',
      demoHeading: 'Demo: article + player',
      demoLead:
        'This preview shows how the player feels as a native part of an article — readers can listen instead of only reading.',
      benefitsHeading: 'Publisher value',
      benefits: [
        'Increase engagement and session time with listening',
        'Improve accessibility for busy and visually impaired readers',
        'Serve mobile and multitasking audiences',
        'Keep a consistent, premium player UI across sections',
        'Monetize audio with ads inside the player (optional)',
      ],
      footerCta: 'Want listenable articles on your site?',
      footerNote: 'Send a link to an article and we’ll generate a sample player.',
    },
    article: {
      title: 'Hören ist das neue Lesen',
      paragraphs: [
        'Immer mehr Menschen entscheiden sich dafür, Artikel nicht nur zu lesen, sondern auch anzuhören. Audio ermöglicht es, Inhalte bequem unterwegs, beim Sport oder bei alltäglichen Aufgaben zu konsumieren.',
        'Für Verlage wird dies zu einer einfachen Möglichkeit, die Leserbindung zu erhöhen und ein breiteres Publikum zu erreichen. Artikel können gehört und nicht nur gelesen werden.',
        'Durch die Implementierung eines Audioplayers auf einer Website werden Inhalte zugänglicher und flexibler. Leserinnen und Leser können selbst wählen, auf welche Weise sie Informationen am liebsten konsumieren – durch Lesen oder Hören.',
      ],
    },
    player: {
      play: 'Abspielen',
      pause: 'Pause',
      listenLabel: 'Text anhören',
      loading: 'Audio wird geladen…',
      error: 'Audio konnte nicht geladen werden.',
      voice: 'Stimme',
      speed: 'Tempo',
      seconds: 's',
    },
    voices: [
      { id: 'de-1', name: 'Seraphina', audioPathFromRoot: 'audio/de/voice-1.mp3' },
      { id: 'de-2', name: 'Florian', audioPathFromRoot: 'audio/de/voice-2.mp3' },
    ],
    defaultVoiceId: 'de-1',
  },

  es: {
    locale: 'es',
    languageName: 'Español',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Reproductor de audio para artículos (para publishers)',
      heroTitle: 'Let readers listen instead of scroll.',
      heroSubtitle:
        'A clean, publisher-ready player that helps readers listen on the go — multilingual, accessible, and easy to embed.',
      heroCta: 'Pruébelo en su web',
      demoHeading: 'Demo: artículo + reproductor',
      demoLead:
        'This preview shows how the player feels as a native part of an article — readers can listen instead of only reading.',
      benefitsHeading: 'Publisher value',
      benefits: [
        'Increase engagement and session time with listening',
        'Improve accessibility for busy and visually impaired readers',
        'Serve mobile and multitasking audiences',
        'Keep a consistent, premium player UI across sections',
        'Monetize audio with ads inside the player (optional)',
      ],
      footerCta: 'Want listenable articles on your site?',
      footerNote: 'Send a link to an article and we’ll generate a sample player.',
    },
    article: {
      title: 'Escuchar es el nuevo leer',
      paragraphs: [
        'Cada vez más personas eligen no solo leer artículos, sino también escucharlos. El audio permite consumir contenido cómodamente mientras se viaja, se hace ejercicio o se realizan tareas cotidianas.',
        'Para los editores, esto se convierte en una forma sencilla de aumentar la participación de los lectores y llegar a una audiencia más amplia. Los artículos pueden escucharse, no solo leerse.',
        'Al implementar un reproductor de audio en un sitio web, el contenido se vuelve más accesible y flexible. Los lectores pueden elegir la forma que mejor se adapte a ellos para consumir información: leyendo o escuchando.',
      ],
    },
    player: {
      play: 'Reproducir',
      pause: 'Pausa',
      listenLabel: 'Escucha el texto',
      loading: 'Cargando audio…',
      error: 'No se pudo cargar el audio.',
      voice: 'Voz',
      speed: 'Velocidad',
      seconds: 's',
    },
    voices: [
      { id: 'es-1', name: 'Elvira', audioPathFromRoot: 'audio/es/voice-1.mp3' },
      { id: 'es-2', name: 'Álvaro', audioPathFromRoot: 'audio/es/voice-2.mp3' },
    ],
    defaultVoiceId: 'es-1',
  },

  da: {
    locale: 'da',
    languageName: 'Dansk',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Lydafspiller til artikler (til udgivere)',
      heroTitle: 'Let readers listen instead of scroll.',
      heroSubtitle:
        'A clean, publisher-ready player that helps readers listen on the go — multilingual, accessible, and easy to embed.',
      heroCta: 'Test på dit website',
      demoHeading: 'Demo: artikel + afspiller',
      demoLead:
        'This preview shows how the player feels as a native part of an article — readers can listen instead of only reading.',
      benefitsHeading: 'Publisher value',
      benefits: [
        'Increase engagement and session time with listening',
        'Improve accessibility for busy and visually impaired readers',
        'Serve mobile and multitasking audiences',
        'Keep a consistent, premium player UI across sections',
        'Monetize audio with ads inside the player (optional)',
      ],
      footerCta: 'Want listenable articles on your site?',
      footerNote: 'Send a link to an article and we’ll generate a sample player.',
    },
    article: {
      title: 'At lytte er det nye at læse',
      paragraphs: [
        'Flere og flere mennesker vælger ikke kun at læse artikler, men også at lytte til dem. Lyd gør det muligt at konsumere indhold bekvemt, mens man reiser, træner eller udfører daglige gøremål.',
        'For udgivere bliver dette en enkel måde at øge læserengagementet og nå ud til et bredere publikum. Artikler kan lyttes til – ikke kun læses.',
        'Ved at implementere en lydafspiller på en hjemmeside bliver indholdet mere tilgængeligt og fleksibelt. Læserne kan vælge den måde, der passer dem bedst til at konsumere information – ved at læse eller lytte.',
      ],
    },
    player: {
      play: 'Afspil',
      pause: 'Pause',
      listenLabel: 'Lyt til teksten',
      loading: 'Indlæser lyd…',
      error: 'Kunne ikke indlæse lyd.',
      voice: 'Stemme',
      speed: 'Hastighed',
      seconds: 's',
    },
    voices: [
      { id: 'da-1', name: 'Christel', audioPathFromRoot: 'audio/da/voice-1.mp3' },
      { id: 'da-2', name: 'Jeppe', audioPathFromRoot: 'audio/da/voice-2.mp3' },
    ],
    defaultVoiceId: 'da-1',
  },

  sv: {
    locale: 'sv',
    languageName: 'Svenska',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Ljudspelare för artiklar (för publicister)',
      heroTitle: 'Let readers listen instead of scroll.',
      heroSubtitle:
        'A clean, publisher-ready player that helps readers listen on the go — multilingual, accessible, and easy to embed.',
      heroCta: 'Testa på er webbplats',
      demoHeading: 'Demo: artikel + spelare',
      demoLead:
        'This preview shows how the player feels as a native part of an article — readers can listen instead of only reading.',
      benefitsHeading: 'Publisher value',
      benefits: [
        'Increase engagement and session time with listening',
        'Improve accessibility for busy and visually impaired readers',
        'Serve mobile and multitasking audiences',
        'Keep a consistent, premium player UI across sections',
        'Monetize audio with ads inside the player (optional)',
      ],
      footerCta: 'Want listenable articles on your site?',
      footerNote: 'Send a link to an article and we’ll generate a sample player.',
    },
    article: {
      title: 'Att lyssna är det nya att läsa',
      paragraphs: [
        'Allt fler människor väljer att inte bara läsa artiklar, utan även att lyssna på dem. Ljud gör det möjligt att ta del av innehåll på ett bekvämt sätt när man reser, tränar eller utför vardagliga sysslor.',
        'För publicister blir detta ett enkelt sätt att öka läsarengagemanget och nå en bredare publik. Artiklar kan lyssnas på – inte bara läsas.',
        'Genom att implementera en ljudspelare på en webbplats blir innehållet mer tillgängligt och flexibelt. Läsarna kan välja det sätt som passar dem bäst för att ta del av information – genom att läsa eller lyssna.',
      ],
    },
    player: {
      play: 'Spela',
      pause: 'Paus',
      listenLabel: 'Lyssna på texten',
      loading: 'Laddar ljud…',
      error: 'Kunde inte ladda ljud.',
      voice: 'Röst',
      speed: 'Hastighet',
      seconds: 's',
    },
    voices: [
      { id: 'sv-1', name: 'Sofie', audioPathFromRoot: 'audio/sv/voice-1.mp3' },
      { id: 'sv-2', name: 'Mattias', audioPathFromRoot: 'audio/sv/voice-2.mp3' },
    ],
    defaultVoiceId: 'sv-1',
  },

  no: {
    locale: 'no',
    languageName: 'Norsk',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Lydspiller for artikler (for publisister)',
      heroTitle: 'Let readers listen instead of scroll.',
      heroSubtitle:
        'A clean, publisher-ready player that helps readers listen on the go — multilingual, accessible, and easy to embed.',
      heroCta: 'Test på nettstedet',
      demoHeading: 'Demo: artikkel + spiller',
      demoLead:
        'This preview shows how the player feels as a native part of an article — readers can listen instead of only reading.',
      benefitsHeading: 'Publisher value',
      benefits: [
        'Increase engagement and session time with listening',
        'Improve accessibility for busy and visually impaired readers',
        'Serve mobile and multitasking audiences',
        'Keep a consistent, premium player UI across sections',
        'Monetize audio with ads inside the player (optional)',
      ],
      footerCta: 'Want listenable articles on your site?',
      footerNote: 'Send a link to an article and we’ll generate a sample player.',
    },
    article: {
      title: 'Å lytte er det nye å lese',
      paragraphs: [
        'Stadig flere velger ikke bare å lese artikler, men også å lytte til dem. Lyd gjør det mulig å konsumere innhold på en praktisk måte mens man reiser, trener eller gjør hverdagslige oppgaver.',
        'For utgivere blir dette en enkel måte å øke leserengasjementet og nå et bredere publikum på. Artikler kan lyttes til – ikke bare leses.',
        'Ved å implementere en lydspiller på et nettsted blir innholdet mer tilgjengelig og fleksibelt. Leserne kan velge den måten som passer dem best for å konsumere informasjon – ved å lese eller lytte.',
      ],
    },
    player: {
      play: 'Spill av',
      pause: 'Pause',
      listenLabel: 'Lytt til teksten',
      loading: 'Laster lyd…',
      error: 'Kunne ikke laste lyd.',
      voice: 'Stemme',
      speed: 'Hastighet',
      seconds: 's',
    },
    voices: [
      { id: 'no-1', name: 'Pernille', audioPathFromRoot: 'audio/no/voice-1.mp3' },
      { id: 'no-2', name: 'Finn', audioPathFromRoot: 'audio/no/voice-2.mp3' },
    ],
    defaultVoiceId: 'no-1',
  },

  fi: {
    locale: 'fi',
    languageName: 'Suomi',
    landing: {
      navBrand: 'Garsio',
      navTagline: 'Artikkelien äänisoitin julkaisijoille',
      heroTitle: 'Let readers listen instead of scroll.',
      heroSubtitle:
        'A clean, publisher-ready player that helps readers listen on the go — multilingual, accessible, and easy to embed.',
      heroCta: 'Kokeile sivustollasi',
      demoHeading: 'Demo: artikkeli + soitin',
      demoLead:
        'This preview shows how the player feels as a native part of an article — readers can listen instead of only reading.',
      benefitsHeading: 'Publisher value',
      benefits: [
        'Increase engagement and session time with listening',
        'Improve accessibility for busy and visually impaired readers',
        'Serve mobile and multitasking audiences',
        'Keep a consistent, premium player UI across sections',
        'Monetize audio with ads inside the player (optional)',
      ],
      footerCta: 'Want listenable articles on your site?',
      footerNote: 'Send a link to an article and we’ll generate a sample player.',
    },
    article: {
      title: 'Kuunteleminen on uusi lukeminen',
      paragraphs: [
        'Yhä useammat ihmiset valitsevat artikkelien lukemisen lisäksi myös niiden kuuntelemisen. Ääni mahdollistaa sisällön kätevän kuluttamisen matkustaessa, liikuntaa harrastaessa tai arjen askareita tehdessä.',
        'Julkaisijoille tämä on yksinkertainen tapa lisätä lukijoiden sitoutumista ja tavoittaa laajempi yleisö. Artikkeleita voidaan kuunnella – ei vain lukea.',
        'Kun verkkosivustolle lisätään äänisoitin, sisällöstä tulee saavutettavampaa ja joustavampaa. Lukijat voivat valita heille parhaiten sopivan tavan käyttää tietoa – lukemalla tai kuuntelemalla.',
      ],
    },
    player: {
      play: 'Toista',
      pause: 'Tauko',
      listenLabel: 'Kuuntele teksti',
      loading: 'Ladataan ääntä…',
      error: 'Ääntä ei voitu ladata.',
      voice: 'Ääni',
      speed: 'Nopeus',
      seconds: 's',
    },
    voices: [
      { id: 'fi-1', name: 'Selma', audioPathFromRoot: 'audio/fi/voice-1.mp3' },
      { id: 'fi-2', name: 'Harry', audioPathFromRoot: 'audio/fi/voice-2.mp3' },
    ],
    defaultVoiceId: 'fi-1',
  },
}

export const SUPPORTED_LOCALES: Locale[] = [
  'en',
  'lt',
  'cs',
  'sk',
  'hu',
  'ro',
  'bg',
  'hr',
  'sr',
  'sl',
  'de',
  'es',
  'da',
  'sv',
  'no',
  'fi',
]

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as string[]).includes(value)
}

