import { useEffect, useMemo, useRef, useState } from 'react'
import { LOCALES, type Locale } from './locales'
import { getPageUi } from './locales/pageUi'
import { getSiteCopy, garsioHref, LEGAL_LINKS } from './locales/siteCopy'
import { localeHref } from './lib/locale'
import { GarsioLogo } from './components/GarsioLogo'
import { Player } from './components/Player'
import { TrialForm } from './components/TrialForm'
import { PricingCalculator } from './components/PricingCalculator'
import { Faq } from './components/Faq'
import { PromoVoices } from './components/PromoVoices'
import { track } from './lib/analytics'

function Flag({ locale, title }: { locale: Locale; title: string }) {
  const common = {
    viewBox: '0 0 24 16',
    className: 'h-4 w-6 shrink-0 overflow-hidden rounded-[4px] border border-[rgba(32,23,17,0.12)] bg-white',
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
  variant = 'default',
  showName = false,
}: {
  locale: Locale
  menuAlign: 'left' | 'right'
  menuAriaLabel: string
  variant?: 'default' | 'tinted'
  showName?: boolean
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

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={['pill-select', variant === 'tinted' ? 'pill-select--tinted' : ''].join(' ')}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={menuAriaLabel}
      >
        <Flag locale={activeLang.locale} title={LOCALES[activeLang.locale].languageName} />
        <span>{showName ? LOCALES[activeLang.locale].languageName : activeLang.short}</span>
        <span className="pill-select__chev" aria-hidden="true">
          ▾
        </span>
      </button>

      {open ? (
        <div role="menu" aria-label={menuAriaLabel} className={['lang-menu', menuAlign === 'right' ? 'right-0' : 'left-0'].join(' ')}>
          <div className="max-h-[60vh] overflow-auto">
            {languageOptions.map((opt) => {
              const active = opt.locale === locale
              const name = LOCALES[opt.locale].languageName
              return (
                <a
                  key={opt.locale}
                  href={localeHref(locale, opt.locale)}
                  role="menuitem"
                  onClick={() => {
                    setOpen(false)
                    if (!active) track('lang_switch', { from: locale, to: opt.locale, where: menuAlign === 'right' && variant === 'default' ? 'nav' : 'demo' })
                  }}
                  className="lang-menu__item"
                  aria-current={active ? 'page' : undefined}
                >
                  <Flag locale={opt.locale} title={name} />
                  <span className="min-w-0 truncate">{name}</span>
                  <span className="lang-menu__code">{opt.short}</span>
                </a>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function App({ locale }: { locale: Locale }) {
  const bundle = LOCALES[locale]
  const ui = useMemo(() => getPageUi(locale), [locale])
  const copy = useMemo(() => getSiteCopy(locale, bundle, ui), [locale, bundle, ui])
  const numberLocale = localeDateTag(locale)

  return (
    <div className="min-h-dvh">
      {/* ── Sticky nav ── */}
      <nav className="site-nav" aria-label="Main">
        <div className="site-nav__inner">
          <a href="#" className="brand-link">
            <GarsioLogo />
          </a>
          <div className="site-nav__actions">
            <LanguageDropdown locale={locale} menuAlign="right" menuAriaLabel={ui.ariaLanguageMenu} />
            <a href="#trial" className="btn-accent" data-umami-event="cta_click" data-umami-event-position="nav">
              {copy.navCta}
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero with live demo ── */}
        <header className="container-wide">
          <div className="hero">
            <div className="hero__glow hero__glow--a" aria-hidden="true" />
            <div className="hero__glow hero__glow--b" aria-hidden="true" />

            <div className="relative">
              <div className="hero__badge">
                <span className="hero__badge-dot" aria-hidden="true" />
                {copy.heroBadge}
              </div>
              <h1 className="hero__title">
                {copy.heroTitle1}
                {copy.heroTitle2 ? (
                  <>
                    {' '}
                    <span>{copy.heroTitle2}</span>
                  </>
                ) : null}
              </h1>
              <p className="hero__sub">{copy.heroSub}</p>
              <div className="flex flex-wrap items-center gap-3.5">
                <a href="#trial" className="btn-accent btn-accent--lg" data-umami-event="cta_click" data-umami-event-position="hero">
                  {copy.heroCta}
                </a>
              </div>
              <div className="hero__chips">
                {copy.chips.map((chip) => (
                  <div key={chip} className="hero__chip">
                    <span className="hero__chip-check" aria-hidden="true">
                      ✓
                    </span>
                    {chip}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" id="demo">
              <article className="demo-card">
                <div className="demo-card__head">
                  <div className="demo-card__label">{copy.demoLabel}</div>
                  <LanguageDropdown
                    locale={locale}
                    menuAlign="right"
                    menuAriaLabel={ui.ariaLanguageMenu}
                    variant="tinted"
                    showName
                  />
                </div>

                <h2 className="demo-card__title">{bundle.article.title}</h2>

                <Player bundle={bundle} listenLabel={copy.listenLabel} />

                <div className="demo-card__body">
                  {bundle.article.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </header>

        {/* ── Setup ── */}
        <section id="setup" className="container-wide pt-[clamp(56px,8vw,88px)] pb-6">
          <div className="section-head">
            <h2 className="section-title section-title--lg">{copy.setupTitle}</h2>
          </div>
          <div className="steps-grid">
            {copy.steps.map((s) => (
              <div key={s.n} className="card step">
                <div className="step__num" aria-hidden="true">
                  {s.n}
                </div>
                <div className="step__title">{s.title}</div>
                <div className="step__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Monetisation ── */}
        <section className="container-wide py-[clamp(32px,5vw,56px)]">
          <div className="card mon">
            <div>
              <div className="kicker">{copy.monKicker}</div>
              <h2 className="section-title mb-3.5">{copy.monTitle}</h2>
              <p className="mon__body">{copy.monBody}</p>
            </div>

            {/* Ad-in-player illustration: mirrors the hero player widget */}
            <div aria-hidden="true">
              <div className="mon__widget">
                <div className="pt-4 pb-3.5 px-0.5">
                  <div className="gp__row">
                    <span className="gp__play" style={{ cursor: 'default' }}>
                      <svg viewBox="0 0 24 24" className="block h-5 w-5">
                        <path d="M8 5.2V18.8L19 12L8 5.2Z" fill="currentColor" />
                      </svg>
                    </span>
                    <div className="gp__label">
                      <span className="gp__label-title">{copy.monArticleLabel}</span>
                      <span className="gp__label-time">– 04:14</span>
                    </div>
                  </div>
                  <div className="mon__bar">
                    <div className="mon__bar-fill" />
                    <span className="mon__ad mon__ad--start">{copy.monAdBadge}</span>
                    <span className="mon__ad mon__ad--mid">{copy.monAdBadge}</span>
                  </div>
                </div>
              </div>
              <div className="mon__caption">{copy.monCaption}</div>
            </div>
          </div>
        </section>

        {/* ── Pricing calculator ── */}
        <section className="container-wide py-[clamp(24px,4vw,40px)]">
          <div className="section-head" style={{ marginBottom: 34 }}>
            <h2 className="section-title">{copy.calcTitle}</h2>
          </div>
          <PricingCalculator copy={copy} numberLocale={numberLocale} ctaHref="#trial" />
        </section>

        {/* ── Trial CTA ── */}
        <section id="trial" className="container-wide pt-[clamp(24px,4vw,40px)] pb-[clamp(56px,8vw,80px)]">
          <div className="trial">
            <div className="trial__glow" aria-hidden="true" />
            <h2 className="trial__title">{copy.trialTitle}</h2>
            <p className="trial__sub">{copy.trialSub}</p>
            <TrialForm locale={locale} ui={ui} copy={copy} />
            <div className="trial__questions">
              {copy.trialQuestions}{' '}
              <a href="mailto:info@ainno.io" data-umami-event="contact_click" data-umami-event-position="trial">
                info@ainno.io
              </a>
            </div>
          </div>
        </section>

        {/* ── Garsio TTS cross-promo ── */}
        <section className="container-wide pb-[clamp(56px,8vw,88px)]">
          <div className="promo">
            <div className="promo__glow" aria-hidden="true" />
            <div className="relative">
              <div className="hero__badge promo__badge">
                <span className="hero__badge-dot" aria-hidden="true" />
                {copy.promoBadge}
              </div>
              <h2 className="promo__title">
                {copy.promoTitle1} <span>{copy.promoTitle2}</span>
              </h2>
              <p className="promo__body">{copy.promoBody}</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={garsioHref(locale, '')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent btn-accent--md"
                  data-umami-event="promo_click"
                  data-umami-event-target="garsio_home"
                >
                  {copy.promoCta}
                </a>
                <a
                  href={garsioHref(locale, 'plans-and-pricing')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-light"
                  data-umami-event="promo_click"
                  data-umami-event-target="garsio_pricing"
                >
                  {copy.promoPricing}
                </a>
              </div>
            </div>
            <PromoVoices voices={copy.promoVoices} label={copy.promoListen} />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="container-wide pb-[clamp(56px,8vw,88px)]">
          <h2 className="section-title text-center" style={{ marginBottom: 28 }}>
            {copy.faqTitle}
          </h2>
          <Faq items={copy.faqs} />
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="container-wide site-footer">
        <div className="flex items-center gap-2.5">
          <GarsioLogo size="sm" />
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="site-footer__links">
          <a href="https://garsio.io/" target="_blank" rel="noreferrer">
            garsio.io
          </a>
          <a href={LEGAL_LINKS.terms}>
            {copy.footTerms}
          </a>
          <a href={LEGAL_LINKS.privacy}>
            {copy.footPrivacy}
          </a>
          <a href="mailto:info@ainno.io" data-umami-event="contact_click" data-umami-event-position="footer">
            info@ainno.io
          </a>
        </div>
        <p className="site-footer__company">{copy.companyLine}</p>
        {/* Static language links so every locale is crawlable without opening the dropdown */}
        <nav className="site-footer__langs" aria-label={ui.ariaLanguageMenu}>
          {languageOptions.map((opt) => (
            <a
              key={opt.locale}
              href={localeHref(locale, opt.locale)}
              hrefLang={opt.locale}
              lang={opt.locale}
              aria-current={opt.locale === locale ? 'page' : undefined}
            >
              {LOCALES[opt.locale].languageName}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  )
}

export default App
