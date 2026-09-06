import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { Root, type PageKind } from './Root'
import { LOCALES, isLocale, type Locale } from './locales'
import { getPageUi } from './locales/pageUi'
import { getSiteCopy, hasFullCopy } from './locales/siteCopy'

export type RenderResult = {
  html: string
  /** Extra JSON-LD (FAQPage) for landing pages; null for legal pages. */
  jsonLd: Record<string, unknown> | null
}

/** Used by scripts/prerender.mjs after `vite build` to fill each static HTML entry with real markup. */
export function render(opts: { locale: string; page?: PageKind }): RenderResult {
  const locale: Locale = isLocale(opts.locale) ? opts.locale : 'en'
  const html = renderToString(
    <StrictMode>
      <Root locale={locale} page={opts.page} />
    </StrictMode>,
  )

  if (opts.page) return { html, jsonLd: null }

  const bundle = LOCALES[locale]
  const copy = getSiteCopy(locale, bundle, getPageUi(locale))
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // Locales without their own translation show the English FAQ.
    inLanguage: hasFullCopy(locale) ? locale : 'en',
    mainEntity: copy.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: Array.isArray(f.a) ? f.a.join('\n\n') : f.a },
    })),
  }
  return { html, jsonLd }
}
