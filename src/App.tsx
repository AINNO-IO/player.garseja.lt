import { LOCALES, type Locale } from './locales'
import { getPageUi } from './locales/pageUi'
import { assetHref, getInitialLocale, localeHref } from './lib/locale'
import { Player } from './components/Player'
import { TrialRequestModal } from './components/TrialRequestModal'
import { HeroVisual, PageBackground } from './components/PageDecor'
import { useEffect, useMemo, useRef, useState } from 'react'

function Flag({ locale, title }: { locale: Locale; title: string }) {
  const common = {
    viewBox: '0 0 24 16',
    className: 'h-4 w-6 overflow-hidden rounded-[4px] border border-[rgba(21,37,53,0.12)] bg-white',
    role: 'img' as const,
    'aria-label': title,
  }

  switch (locale) {
    case 'lt':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#FDB913" />
          <rect y="5.333" width="24" height="5.333" fill="#006A44" />
          <rect y="10.666" width="24" height="5.334" fill="#C1272D" />
        </svg>
      )
    case 'cs':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#ffffff" />
          <rect y="8" width="24" height="8" fill="#D7141A" />
          <path d="M0 0 L10 8 L0 16 Z" fill="#11457E" />
        </svg>
      )
    case 'sk':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#ffffff" />
          <rect y="5.333" width="24" height="5.333" fill="#0B4EA2" />
          <rect y="10.666" width="24" height="5.334" fill="#EE1C25" />
        </svg>
      )
    case 'hu':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#CE2939" />
          <rect y="5.333" width="24" height="5.333" fill="#ffffff" />
          <rect y="10.666" width="24" height="5.334" fill="#477050" />
        </svg>
      )
    case 'ro':
      return (
        <svg {...common}>
          <rect width="8" height="16" x="0" fill="#002B7F" />
          <rect width="8" height="16" x="8" fill="#FCD116" />
          <rect width="8" height="16" x="16" fill="#CE1126" />
        </svg>
      )
    case 'bg':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#ffffff" />
          <rect y="5.333" width="24" height="5.333" fill="#00966E" />
          <rect y="10.666" width="24" height="5.334" fill="#D62612" />
        </svg>
      )
    case 'hr':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#FF0000" />
          <rect y="5.333" width="24" height="5.333" fill="#ffffff" />
          <rect y="10.666" width="24" height="5.334" fill="#171796" />
        </svg>
      )
    case 'sr':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#C6363C" />
          <rect y="5.333" width="24" height="5.333" fill="#0C4076" />
          <rect y="10.666" width="24" height="5.334" fill="#ffffff" />
        </svg>
      )
    case 'sl':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#ffffff" />
          <rect y="5.333" width="24" height="5.333" fill="#0B4EA2" />
          <rect y="10.666" width="24" height="5.334" fill="#EE1C25" />
        </svg>
      )
    case 'de':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#000000" />
          <rect y="5.333" width="24" height="5.333" fill="#DD0000" />
          <rect y="10.666" width="24" height="5.334" fill="#FFCE00" />
        </svg>
      )
    case 'es':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
        </svg>
      )
    case 'da':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#C60C30" />
          <rect x="7" width="2.6" height="16" fill="#ffffff" />
          <rect y="6.5" width="24" height="2.6" fill="#ffffff" />
        </svg>
      )
    case 'sv':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#006AA7" />
          <rect x="7" width="2.8" height="16" fill="#FECC00" />
          <rect y="6.5" width="24" height="2.8" fill="#FECC00" />
        </svg>
      )
    case 'no':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#BA0C2F" />
          <rect x="6.5" width="3.6" height="16" fill="#ffffff" />
          <rect y="6.2" width="24" height="3.6" fill="#ffffff" />
          <rect x="7.2" width="2.2" height="16" fill="#00205B" />
          <rect y="6.9" width="24" height="2.2" fill="#00205B" />
        </svg>
      )
    case 'fi':
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#ffffff" />
          <rect x="7" width="3.2" height="16" fill="#003580" />
          <rect y="6.2" width="24" height="3.2" fill="#003580" />
        </svg>
      )
    case 'en':
    default:
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#012169" />
          <path d="M0 0 L24 16 M24 0 L0 16" stroke="#ffffff" strokeWidth="3.6" />
          <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="2" />
          <rect x="10.2" width="3.6" height="16" fill="#ffffff" />
          <rect y="6.2" width="24" height="3.6" fill="#ffffff" />
          <rect x="10.8" width="2.4" height="16" fill="#C8102E" />
          <rect y="6.8" width="24" height="2.4" fill="#C8102E" />
        </svg>
      )
  }
}

const languageOptions: Array<{ locale: Locale; short: string }> = [
  { locale: 'en', short: 'EN' },
  { locale: 'lt', short: 'LT' },
  { locale: 'cs', short: 'CS' },
  { locale: 'sk', short: 'SK' },
  { locale: 'hu', short: 'HU' },
  { locale: 'ro', short: 'RO' },
  { locale: 'bg', short: 'BG' },
  { locale: 'hr', short: 'HR' },
  { locale: 'sr', short: 'SR' },
  { locale: 'sl', short: 'SL' },
  { locale: 'de', short: 'DE' },
  { locale: 'es', short: 'ES' },
  { locale: 'da', short: 'DA' },
  { locale: 'sv', short: 'SV' },
  { locale: 'no', short: 'NO' },
  { locale: 'fi', short: 'FI' },
]

function localeDateTag(locale: Locale): string {
  if (locale === 'sr') return 'sr-Latn-RS'
  return locale
}

function LanguageDropdown({
  locale,
  menuAlign,
  menuAriaLabel,
}: {
  locale: Locale
  menuAlign: 'left' | 'right'
  menuAriaLabel: string
}) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement | null>(null)

  const activeLang = useMemo(
    () => languageOptions.find((o) => o.locale === locale) ?? languageOptions[0],
    [locale],
  )

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      const el = wrapRef.current
      if (!el) return
      if (e.target instanceof Node && el.contains(e.target)) return
      setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const menuPositionClass = menuAlign === 'right' ? 'right-0' : 'left-0'

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full border border-[rgba(21,37,53,0.1)] bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#152535] shadow-sm transition hover:bg-white"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Flag locale={activeLang.locale} title={LOCALES[activeLang.locale].languageName} />
        <span>{activeLang.short}</span>
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#5c6f82]" aria-hidden="true">
          <path d="M5.5 7.5 10 12l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={menuAriaLabel}
          className={[
            'absolute z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-[rgba(21,37,53,0.08)] bg-white p-1 shadow-xl',
            menuPositionClass,
          ].join(' ')}
        >
          <div className="max-h-[60vh] overflow-auto">
            {languageOptions.map((opt) => {
              const active = opt.locale === locale
              const name = LOCALES[opt.locale].languageName
              return (
                <a
                  key={opt.locale}
                  href={localeHref(locale, opt.locale)}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={[
                    'flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition',
                    active
                      ? 'bg-amber-50 font-medium text-amber-900'
                      : 'text-[#3d4f63] hover:bg-[#f6f8fb]',
                  ].join(' ')}
                  aria-current={active ? 'page' : undefined}
                >
                  <Flag locale={opt.locale} title={name} />
                  <span className="min-w-0 truncate">{name}</span>
                  <span className="ml-auto text-xs text-[#5c6f82]">{opt.short}</span>
                </a>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function App() {
  const locale = getInitialLocale()
  const bundle = LOCALES[locale]
  const ui = useMemo(() => getPageUi(locale), [locale])
  const articleMetaDate = useMemo(
    () =>
      new Date().toLocaleDateString(localeDateTag(locale), {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }),
    [locale],
  )
  const [trialOpen, setTrialOpen] = useState(false)
  const [trialKey, setTrialKey] = useState(0)

  function openTrialRequest() {
    setTrialKey((k) => k + 1)
    setTrialOpen(true)
  }

  return (
    <div className="site-shell">
      <PageBackground />

      <header className="site-header">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <img
              src={assetHref('logo.png')}
              alt={bundle.landing.navBrand}
              width={160}
              height={36}
              className="brand-logo"
              decoding="async"
            />
            <span className="hidden truncate text-xs text-[#5c6f82] md:block">{bundle.landing.navTagline}</span>
          </a>

          <div className="flex items-center gap-2">
            <button type="button" onClick={openTrialRequest} className="btn-primary hidden sm:inline-flex">
              {bundle.landing.heroCta}
            </button>
            <LanguageDropdown locale={locale} menuAlign="right" menuAriaLabel={ui.ariaLanguageMenu} />
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-10 sm:pt-14">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">Garsėja</p>
              <h1 className="mt-3 text-balance font-sans text-[2.35rem] font-bold leading-[1.12] tracking-tight text-[#152535] sm:text-5xl lg:text-[3.1rem]">
                {bundle.landing.heroTitle}
              </h1>
              <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-[#5c6f82]">
                {bundle.landing.heroSubtitle}
              </p>

              <div className="mt-8">
                <button type="button" onClick={openTrialRequest} className="btn-primary">
                  {bundle.landing.heroCta}
                </button>
              </div>

              <p className="mt-4 text-sm text-[#5c6f82]">{ui.heroCtaHint}</p>
            </div>

            <div className="reveal reveal-delay-1 flex justify-center lg:justify-end">
              <HeroVisual chips={ui.heroPills} />
            </div>
          </div>
        </section>

        {/* Live demo */}
        <section id="demo" className="mx-auto w-full max-w-6xl px-4 pb-20">
          <div className="mb-6 reveal reveal-delay-2">
            <h2 className="font-display text-2xl font-semibold text-[#152535]">{ui.asideTitle}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-start">
            <article className="panel-elevated overflow-hidden reveal reveal-delay-1">
              <div className="border-b border-[rgba(21,37,53,0.06)] px-6 py-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#e8a96a] to-[#d9965b] text-sm font-bold text-white shadow-md">
                      {ui.publisherInitials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#152535]">{ui.publisherName}</div>
                      <div className="text-xs text-[#5c6f82]">
                        {ui.publishingLabel} · {articleMetaDate} · {ui.minRead}
                      </div>
                    </div>
                  </div>
                  <LanguageDropdown locale={locale} menuAlign="left" menuAriaLabel={ui.ariaLanguageMenu} />
                </div>
              </div>

              <div className="px-6 py-6">
                <h3 className="font-display text-pretty text-2xl font-semibold leading-snug text-[#152535] sm:text-3xl">
                  {bundle.article.title}
                </h3>

                <div className="mt-5 border-y border-slate-200 py-4">
                  <Player bundle={bundle} />
                </div>

                <div className="prose-article mt-7">
                  {bundle.article.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-4 reveal reveal-delay-2">
              <div className="panel p-5">
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {ui.asideMiniCards.map((x) => (
                    <div key={x.title} className="mini-stat">
                      <div className="text-sm font-semibold text-[#152535]">{x.title}</div>
                      <div className="mt-0.5 text-xs leading-relaxed text-[#5c6f82]">{x.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel p-5">
                <h3 className="text-sm font-bold text-[#152535]">{ui.asideTrialTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c6f82]">{ui.asideTrialLead}</p>
                <button type="button" onClick={openTrialRequest} className="btn-primary mt-4 w-full">
                  {bundle.landing.heroCta}
                </button>
                <p className="mt-3 text-center text-xs text-[#5c6f82]">{ui.asideTrialFoot}</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-24">
          <div className="cta-band reveal p-8 lg:p-10">
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#152535] sm:text-3xl">{ui.bottomTitle}</h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#5c6f82] lg:text-base">{ui.bottomLead}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {ui.bottomCards.map((x) => (
                    <div key={x.h} className="mini-stat">
                      <div className="text-sm font-semibold text-[#152535]">{x.h}</div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#5c6f82]">{x.p}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel relative p-6 lg:p-7">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-dark">{ui.bottomAsideEyebrow}</p>
                <h3 className="font-display mt-2 text-xl font-semibold text-[#152535]">{ui.bottomAsideTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c6f82]">{ui.bottomAsideLead}</p>
                <button type="button" onClick={openTrialRequest} className="btn-primary mt-5 w-full">
                  {bundle.landing.heroCta}
                </button>
                <p className="mt-4 text-xs text-[#5c6f82]">{ui.bottomAsideFoot}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TrialRequestModal
        key={trialKey}
        open={trialOpen}
        onClose={() => setTrialOpen(false)}
        locale={locale}
        ui={ui}
        ctaLabel={bundle.landing.heroCta}
      />

      <footer className="border-t border-[rgba(21,37,53,0.06)] bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#152535]">{bundle.landing.footerCta}</p>
            <p className="mt-1 text-sm text-[#5c6f82]">{bundle.landing.footerNote}</p>
          </div>
          <p className="text-xs text-[#5c6f82]">© {new Date().getFullYear()} Garsėja</p>
        </div>
      </footer>
    </div>
  )
}

export default App
