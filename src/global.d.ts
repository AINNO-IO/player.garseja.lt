export {}

declare global {
  interface Window {
    __LOCALE__?: string
    /** Set by the static entry HTML for non-locale pages (terms / privacy). */
    __PAGE__?: 'terms' | 'privacy'
  }
}
