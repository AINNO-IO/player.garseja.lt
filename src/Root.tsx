import { useSyncExternalStore } from 'react'
import App from './App.tsx'
import { LegalPage } from './components/LegalPage'
import { terms } from './legal/terms'
import { privacy } from './legal/privacy'
import type { Locale } from './locales'

export type PageKind = 'terms' | 'privacy'

function referrerBackHref(): string {
  try {
    const ref = new URL(document.referrer)
    if (ref.origin === window.location.origin && /^\/[a-z]{2}\/$/.test(ref.pathname)) return `..${ref.pathname}`
  } catch {
    // no or invalid referrer
  }
  return '../'
}

const noopSubscribe = () => () => {}

/**
 * Return to the locale page the visitor came from; otherwise the root
 * auto-detect redirect. Server snapshot is the fallback so prerendered
 * markup and the first client render match.
 */
function useLegalBackHref(): string {
  return useSyncExternalStore(noopSubscribe, referrerBackHref, () => '../')
}

function Legal({ page }: { page: PageKind }) {
  const backHref = useLegalBackHref()
  return (
    <LegalPage
      doc={page === 'terms' ? terms : privacy}
      backHref={backHref}
      termsHref="../terms/"
      privacyHref="../privacy/"
    />
  )
}

/** Page router for the static multi-page build. Rendered both at build time (prerender) and in the browser (hydrate). */
export function Root({ locale, page }: { locale: Locale; page?: PageKind }) {
  // Legal pages live at /terms/ and /privacy/ (one level below root, like /<locale>/).
  if (page === 'terms' || page === 'privacy') return <Legal page={page} />
  return <App locale={locale} />
}
