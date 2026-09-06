import { useEffect, useId, useRef, useState } from 'react'
import { track } from '../lib/analytics'
import type { SiteCopy } from '../locales/siteCopy'

const INDIVIDUAL_THRESHOLD = 3_000_000 // characters / month
const MIN_MONTHLY_EUR = 20
const EUR_PER_MILLION = 80
const YEARLY_DISCOUNT = 0.15

/** Volume the visitor entered when asking for an individual offer. */
export type OfferContext = { articles: number; artLen: number; total: number; yearly: boolean }

type Props = {
  copy: SiteCopy
  numberLocale: string
  ctaHref: string
  onRequestOffer?: (ctx: OfferContext) => void
}

export function PricingCalculator({ copy, numberLocale, ctaHref, onRequestOffer }: Props) {
  const [articles, setArticles] = useState(150)
  const [artLen, setArtLen] = useState(4000)
  const [yearly, setYearly] = useState(false)
  const idArticles = useId()
  const idLen = useId()

  const total = Math.max(0, articles * artLen)
  const standard = total <= INDIVIDUAL_THRESHOLD

  // Report calculator usage once the user pauses typing (not on every keystroke).
  const touched = useRef(false)
  useEffect(() => {
    if (!touched.current) return
    const t = window.setTimeout(() => {
      track('calc_change', { articles, artLen, total, yearly, individual: !standard })
    }, 1200)
    return () => window.clearTimeout(t)
  }, [articles, artLen, yearly, total, standard])
  const base = Math.max(MIN_MONTHLY_EUR, (total / 1_000_000) * EUR_PER_MILLION)
  const monthly = yearly ? base * (1 - YEARLY_DISCOUNT) : base

  const fmtEur = (v: number) =>
    `${v.toLocaleString(numberLocale, {
      minimumFractionDigits: v % 1 ? 2 : 0,
      maximumFractionDigits: 2,
    })} €`

  const parseInt10 = (value: string) => Math.max(0, parseInt(value, 10) || 0)

  return (
    <div className="card calc">
      <div className="flex flex-col gap-[22px]">
        <div className="field">
          <label htmlFor={idArticles} className="field__label">
            {copy.calcArticles}
          </label>
          <input
            id={idArticles}
            type="number"
            min={1}
            className="input"
            value={articles}
            onChange={(e) => {
              touched.current = true
              setArticles(parseInt10(e.target.value))
            }}
          />
        </div>
        <div className="field">
          <label htmlFor={idLen} className="field__label">
            {copy.calcLength}
          </label>
          <input
            id={idLen}
            type="number"
            min={100}
            step={100}
            className="input"
            value={artLen}
            onChange={(e) => {
              touched.current = true
              setArtLen(parseInt10(e.target.value))
            }}
          />
        </div>
        <div className="field">
          <span className="field__label">{copy.calcBilling}</span>
          <div className="segmented" role="group" aria-label={copy.calcBilling}>
            <button
              type="button"
              className="segmented__btn"
              aria-pressed={!yearly}
              onClick={() => {
                touched.current = true
                setYearly(false)
              }}
            >
              {copy.calcMonthly}
            </button>
            <button
              type="button"
              className="segmented__btn"
              aria-pressed={yearly}
              onClick={() => {
                touched.current = true
                setYearly(true)
              }}
            >
              {copy.calcYearly} <span className="segmented__hint">−{Math.round(YEARLY_DISCOUNT * 100)}%</span>
            </button>
          </div>
        </div>
      </div>

      <div className="calc__result">
        <div className="calc__total">
          <span className="calc__muted">{copy.calcTotalSymbols}</span>
          <span className="calc__total-value">{total.toLocaleString(numberLocale)}</span>
        </div>

        {standard ? (
          <>
            <div className="flex flex-col gap-1.5">
              <span className="calc__muted">{yearly ? copy.calcPriceYearly : copy.calcPriceMonthly}</span>
              <div className="flex flex-wrap items-baseline gap-2.5">
                <span className="calc__price">{fmtEur(monthly)}</span>
                <span className="calc__per">{copy.calcPerMonth}</span>
              </div>
              <span className="calc__savings" style={{ visibility: yearly ? 'visible' : 'hidden' }} aria-hidden={!yearly}>
                {copy.calcSavings.replace('{X}', fmtEur(base * YEARLY_DISCOUNT * 12))}
              </span>
            </div>
            <a
              href={ctaHref}
              className="btn-accent btn-accent--md self-start"
              data-umami-event="cta_click"
              data-umami-event-position="calculator"
            >
              {copy.heroCta}
            </a>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2.5">
              <span className="calc__individual">{copy.calcIndividual}</span>
              <span className="calc__individual-sub">{copy.calcIndividualSub}</span>
            </div>
            <a
              href={ctaHref}
              className="btn-accent btn-accent--md self-start"
              data-umami-event="offer_request"
              data-umami-event-position="calculator"
              onClick={() => onRequestOffer?.({ articles, artLen, total, yearly })}
            >
              {copy.calcContact}
            </a>
          </>
        )}
      </div>
    </div>
  )
}
