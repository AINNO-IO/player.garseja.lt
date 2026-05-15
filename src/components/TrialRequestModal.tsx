import { useEffect, useId, useRef, useState, type FormEvent, type MouseEvent } from 'react'
import type { Locale } from '../locales'
import { LOCALES } from '../locales'
import type { PageUiStrings } from '../locales/pageUi'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

function SuccessCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-700" aria-hidden="true">
      <path
        d="M20 6.5L9.2 17.3 4 12.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type Props = {
  open: boolean
  onClose: () => void
  locale: Locale
  ui: PageUiStrings
  ctaLabel: string
}

export function TrialRequestModal({ open, onClose, locale, ui, ctaLabel }: Props) {
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [email, setEmail] = useState('')
  const [articleUrl, setArticleUrl] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? ''

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLInputElement>('input[name="email"]')?.focus()
    }, 0)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && status !== 'submitting') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, status])

  if (!open) return null

  const langLabel = LOCALES[locale].languageName

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!accessKey) {
      setStatus('error')
      setErrorMessage(ui.trialErrMissingKey)
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const message = [
      `Demo request from player.garseja.lt`,
      `Locale: ${locale} (${langLabel})`,
      `Article URL: ${articleUrl.trim() || '(not provided)'}`,
      '',
      'Notes:',
      notes.trim() || '(none)',
    ].join('\n')

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Garsėja demo — Website request',
          email: email.trim(),
          message,
          botcheck: false,
        }),
      })

      const data = (await res.json()) as { success?: boolean; message?: string }

      if (!res.ok || !data.success) {
        setStatus('error')
        setErrorMessage(data.message || ui.trialErrGeneric)
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage(ui.trialErrNetwork)
    }
  }

  function handleBackdropPointerDown(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget && status !== 'submitting') onClose()
  }

  const inputClass =
    'mt-1.5 w-full rounded-xl border border-[rgba(21,37,53,0.1)] bg-[#fffbf7] px-3.5 py-2.5 text-sm text-[#152535] outline-none transition placeholder:text-[#5c6f82]/60 focus:border-[#d9965b] focus:bg-white focus:ring-2 focus:ring-[#d9965b]/25'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#152535]/20 p-4 backdrop-blur-md"
      onMouseDown={handleBackdropPointerDown}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[rgba(21,37,53,0.08)] bg-white shadow-[0_24px_64px_rgba(21,37,53,0.14)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="h-1 bg-gradient-to-r from-[#e8a96a] via-[#d9965b] to-[#b87a42]" aria-hidden="true" />

        <div className="p-6 pt-5">
          {status !== 'success' ? (
            <button
              type="button"
              onClick={() => {
                if (status !== 'submitting') onClose()
              }}
              className="absolute right-4 top-5 grid h-9 w-9 place-items-center rounded-full border border-[rgba(21,37,53,0.1)] bg-white text-[#5c6f82] transition hover:bg-[#f6f8fb] disabled:opacity-50"
              disabled={status === 'submitting'}
              aria-label={ui.trialCloseAria}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          ) : null}

          {status === 'success' ? (
            <div aria-live="polite">
              <div className="flex flex-col items-center text-center">
                <div
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-50 ring-1 ring-amber-200/80"
                  aria-hidden="true"
                >
                  <SuccessCheckIcon />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-amber-800">{ui.trialSuccessTitle}</p>
                <h2 id={titleId} className="font-display mt-1 text-2xl font-semibold text-[#152535]">
                  {ui.trialSuccessHeadline}
                </h2>
                <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-[#5c6f82]">{ui.trialSuccessBody}</p>
                <p className="mt-3 max-w-sm text-pretty text-xs leading-relaxed text-[#5c6f82]/80">{ui.trialSuccessHint}</p>
              </div>
              <button type="button" onClick={onClose} className="btn-primary mt-8 w-full">
                {ui.trialSuccessCta}
              </button>
            </div>
          ) : (
            <>
              <div className="pr-10">
                <div id={titleId} className="text-base font-bold text-[#152535]">
                  {ctaLabel}
                </div>
                <div className="mt-1 text-sm text-[#5c6f82]">{ui.trialModalSubtitle}</div>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="trial-email" className="text-xs font-semibold text-[#3d4f63]">
                    {ui.trialEmailLabel}
                  </label>
                  <input
                    id="trial-email"
                    name="email"
                    type="email"
                    className={inputClass}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="trial-url" className="text-xs font-semibold text-[#3d4f63]">
                    {ui.trialUrlLabel}
                  </label>
                  <input
                    id="trial-url"
                    name="articleUrl"
                    type="url"
                    inputMode="url"
                    placeholder="https://"
                    className={inputClass}
                    value={articleUrl}
                    onChange={(e) => setArticleUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="trial-notes" className="text-xs font-semibold text-[#3d4f63]">
                    {ui.trialNotesLabel}
                  </label>
                  <textarea
                    id="trial-notes"
                    name="notes"
                    rows={3}
                    className={`${inputClass} resize-none`}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={ui.trialNotesPlaceholder}
                  />
                </div>

                {status === 'error' && errorMessage ? (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                    {errorMessage}
                  </div>
                ) : null}

                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60">
                  {status === 'submitting' ? ui.trialSubmitting : ui.trialSubmit}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
