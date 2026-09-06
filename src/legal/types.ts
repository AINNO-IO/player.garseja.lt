export type LegalBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

export type LegalDoc = {
  title: string
  /** "Atnaujinta …" line as published on the source page. */
  updated: string | null
  source: string
  blocks: LegalBlock[]
}
