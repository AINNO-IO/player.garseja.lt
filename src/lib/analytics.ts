/**
 * Thin analytics layer. Currently backed by Umami (cookieless, no personal
 * data, no consent banner needed). Swap the loader below to change vendor;
 * the rest of the app only calls `track()` or uses `data-umami-event`
 * attributes on links/buttons.
 *
 * Configure with `VITE_UMAMI_WEBSITE_ID` (public id from the Umami dashboard).
 * Optional: `VITE_UMAMI_SCRIPT_URL` for a self-hosted instance.
 */

type EventData = Record<string, string | number | boolean>

/** Accept a bare website id or a pasted Umami `<script …data-website-id="…">` snippet. */
function resolveWebsiteId(raw: string | undefined): string {
  const v = raw?.trim() ?? ''
  const uuid = v.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)
  return uuid ? uuid[0] : v.includes('<') ? '' : v
}

const WEBSITE_ID = resolveWebsiteId(import.meta.env.VITE_UMAMI_WEBSITE_ID)
const SCRIPT_URL = import.meta.env.VITE_UMAMI_SCRIPT_URL?.trim() || 'https://cloud.umami.is/script.js'

export const analyticsEnabled = WEBSITE_ID.length > 0

/** Inject the tracker once per page load. Page views (with referrer and utm_*) are tracked automatically. */
export function initAnalytics(pageTag: string) {
  if (!analyticsEnabled || typeof document === 'undefined') return
  if (document.querySelector('script[data-website-id]')) return
  const s = document.createElement('script')
  s.defer = true
  s.src = SCRIPT_URL
  s.setAttribute('data-website-id', WEBSITE_ID)
  // Tag lets you split reports by locale / page type in the dashboard.
  s.setAttribute('data-tag', pageTag)
  document.head.appendChild(s)
}

/** Send a custom event. Safe to call before the script has loaded (queued) or when analytics is off (no-op). */
export function track(name: string, data?: EventData) {
  if (!analyticsEnabled || typeof window === 'undefined') return
  if (window.umami) {
    window.umami.track(name, data)
    return
  }
  // Script not ready yet: retry shortly, then give up quietly.
  let attempts = 0
  const retry = () => {
    if (window.umami) {
      window.umami.track(name, data)
    } else if (attempts++ < 20) {
      window.setTimeout(retry, 250)
    }
  }
  window.setTimeout(retry, 250)
}
