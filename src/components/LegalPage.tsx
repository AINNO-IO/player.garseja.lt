import { GarsioLogo } from './GarsioLogo'
import type { LegalDoc } from '../legal/types'
import { COMPANY_LABEL } from '../locales/siteCopy'

/**
 * Shell for the Terms / Privacy pages, mirroring the Claude Design
 * "Garsio Terms" / "Garsio Privacy" layouts: logo header with a back link,
 * title + "Atnaujinta" line, a 760px text column, and the shared footer.
 * Legal texts are Lithuanian only (source: garseja.lt).
 */
export function LegalPage({ doc, backHref, termsHref, privacyHref }: {
  doc: LegalDoc
  backHref: string
  termsHref: string
  privacyHref: string
}) {
  return (
    <div className="legal">
      <nav className="legal__nav" aria-label="Main">
        <a href={backHref} className="brand-link">
          <GarsioLogo />
        </a>
        <a href={backHref} className="btn-nav-ghost">
          ← Grįžti
        </a>
      </nav>

      <main className="legal__main">
        <h1 className="legal__title">{doc.title}</h1>
        {doc.updated ? <p className="legal__updated">{doc.updated}</p> : null}
        <div className="legal__body">
          {doc.blocks.map((b, i) => {
            switch (b.type) {
              case 'h2':
                return <h2 key={i}>{b.text}</h2>
              case 'ul':
                return (
                  <ul key={i}>
                    {b.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              default:
                return <p key={i}>{b.text}</p>
            }
          })}
        </div>
      </main>

      <footer className="legal__footer">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <GarsioLogo size="sm" />
          <span>© {new Date().getFullYear()}</span>
          <span>{COMPANY_LABEL}</span>
        </div>
        <div className="site-footer__links">
          <a href={termsHref}>Naudojimosi taisyklės</a>
          <a href={privacyHref}>Privatumo politika</a>
          <a href="mailto:info@ainno.io">info@ainno.io</a>
        </div>
      </footer>
    </div>
  )
}
