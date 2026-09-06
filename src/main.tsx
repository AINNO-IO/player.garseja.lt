import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import { Root } from './Root'
import { getInitialLocale } from './lib/locale'
import { initAnalytics } from './lib/analytics'

const locale = getInitialLocale()
const page = window.__PAGE__

initAnalytics(page ?? locale)

const container = document.getElementById('root')!
const tree = (
  <StrictMode>
    <Root locale={locale} page={page} />
  </StrictMode>
)

// The build prerenders every page into the HTML; hydrate that markup. Fall back to a
// client render when the HTML is empty (dev server).
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
