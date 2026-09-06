import App from './App.tsx'
import { LegalPage } from './components/LegalPage'
import { terms } from './legal/terms'
import { privacy } from './legal/privacy'

/** Return to the locale page the visitor came from; otherwise the root auto-detect redirect. */
function legalBackHref(): string {
  if (typeof document === 'undefined') return '../'
  try {
    const ref = new URL(document.referrer)
    if (ref.origin === window.location.origin && /^\/[a-z]{2}\/$/.test(ref.pathname)) return `..${ref.pathname}`
  } catch {
    // no or invalid referrer
  }
  return '../'
}

export function Root() {
  const page = typeof window !== 'undefined' ? window.__PAGE__ : undefined
  // Legal pages live at /terms/ and /privacy/ (one level below root, like /<locale>/).
  if (page === 'terms' || page === 'privacy') {
    return (
      <LegalPage
        doc={page === 'terms' ? terms : privacy}
        backHref={legalBackHref()}
        termsHref="../terms/"
        privacyHref="../privacy/"
      />
    )
  }
  return <App />
}
