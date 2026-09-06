import { useId, useState } from 'react'
import type { FaqItem } from '../locales/siteCopy'
import { track } from '../lib/analytics'

export function Faq({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number>(-1)
  const baseId = useId()

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const expanded = open === i
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={f.q} className="card faq">
            <button
              type="button"
              className="faq__q"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => {
                if (!expanded) track('faq_open', { index: i + 1, question: f.q })
                setOpen(expanded ? -1 : i)
              }}
            >
              <span className="faq__q-text">{f.q}</span>
              <span className="faq__chev" aria-hidden="true">
                ▾
              </span>
            </button>
            <div id={panelId} className="faq__a" hidden={!expanded}>
              <p>{f.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
