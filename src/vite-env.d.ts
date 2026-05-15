/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms access key (public, safe to embed in static builds). */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
