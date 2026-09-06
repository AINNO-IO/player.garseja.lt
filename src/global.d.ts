export {}

declare global {
  interface Window {
    __LOCALE__?: string
    /** Set by the static entry HTML for non-locale pages (terms / privacy). */
    __PAGE__?: 'terms' | 'privacy'
    /** Umami tracker, present once the analytics script has loaded. */
    umami?: {
      track: (name: string, data?: Record<string, string | number | boolean>) => void
    }
  }
}
