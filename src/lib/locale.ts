import type { Locale } from '../locales'
import { isLocale } from '../locales'

export function getInitialLocale(): Locale {
  const injected = typeof window !== 'undefined' ? window.__LOCALE__ : undefined
  if (injected && isLocale(injected)) return injected
  return 'en'
}

export function localeHref(currentLocale: Locale, targetLocale: Locale): string {
  // All locales (including `en`) live at `/<locale>/index.html`.
  // We intentionally use relative URLs so this works on GitHub Pages
  // (custom domain or repo pages) without server rewrites.
  if (targetLocale === currentLocale) return './'
  return `../${targetLocale}/`
}

export function assetHref(pathFromRoot: string): string {
  // Assets live at the site root (e.g. /audio/test.mp3).
  // With static nested pages (/<locale>/index.html), we need "../audio/..." to reach them.
  return `../${pathFromRoot}`
}

