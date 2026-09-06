import { useState, type FormEvent } from 'react'
import type { Locale } from '../locales'
import { LOCALES } from '../locales'
import type { PageUiStrings } from '../locales/pageUi'
import type { SiteCopy } from '../locales/siteCopy'
import { track } from '../lib/analytics'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

type Props = {
  locale: Locale
  ui: PageUiStrings
  copy: SiteCopy
}

/** Inline trial request form (website URL + email) posting to Web3Forms. */
export function TrialForm({ locale, ui, copy }: Props) {
  const [siteUrl, setSiteUrl] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? ''

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!accessKey) {
      setStatus('error')
      setErrorMessage(ui.trialErrMissingKey)
      track('trial_submit_error', { locale, reason: 'missing_key' })
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const message = [
      'Free trial request from player.garsio.io',
      `Locale: ${locale} (${LOCALES[locale].languageName})`,
      `Website: ${siteUrl.trim() || '(not provided)'}`,
    ].join('\n')

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Garsio Player — Free trial request',
          email: email.trim(),
          message,
          botcheck: false,
        }),
      })

      const data = (await res.json()) as { success?: boolean; message?: string }

      if (!res.ok || !data.success) {
        setStatus('error')
        setErrorMessage(data.message || ui.trialErrGeneric)
        track('trial_submit_error', { locale, reason: 'rejected' })
        return
      }

      setStatus('success')
      track('trial_submit', { locale, hasWebsite: siteUrl.trim().length > 0 })
    } catch {
      setStatus('error')
      setErrorMessage(ui.trialErrNetwork)
      track('trial_submit_error', { locale, reason: 'network' })
    }
  }

  if (status === 'success') {
    return (
      <div className="trial__thanks" role="status" aria-live="polite">
        <span aria-hidden="true">✓</span> {copy.trialThanks}
      </div>
    )
  }

  return (
    <>
      <form className="trial__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="website"
          inputMode="url"
          autoComplete="url"
          className="trial__input"
          placeholder={copy.trialUrlPh}
          aria-label={ui.trialUrlLabel}
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
        />
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          className="trial__input"
          placeholder={copy.trialEmailPh}
          aria-label={ui.trialEmailLabel}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn-accent trial__btn" disabled={status === 'submitting'}>
          {status === 'submitting' ? ui.trialSubmitting : copy.trialBtn}
        </button>
      </form>
      {status === 'error' && errorMessage ? (
        <div className="trial__error" role="alert">
          {errorMessage}
        </div>
      ) : null}
      <p className="trial__note">{copy.trialNote}</p>
    </>
  )
}
