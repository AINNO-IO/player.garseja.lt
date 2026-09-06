import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Root } from './Root'
import { initAnalytics } from './lib/analytics'

initAnalytics(window.__PAGE__ ?? window.__LOCALE__ ?? 'unknown')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
