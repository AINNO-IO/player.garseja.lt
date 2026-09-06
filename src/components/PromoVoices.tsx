import { useEffect, useRef, useState } from 'react'
import { assetHref } from '../lib/locale'
import { PAUSE_OTHERS_EVENT } from '../lib/audioBus'
import type { PromoVoice } from '../locales/siteCopy'

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="block h-4 w-4">
      <path d="M8 5.2V18.8L19 12L8 5.2Z" fill="currentColor" />
    </svg>
  )
}

function PauseGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="block h-4 w-4">
      <path d="M7 5.5H10.6V18.5H7V5.5Z" fill="currentColor" />
      <path d="M13.4 5.5H17V18.5H13.4V5.5Z" fill="currentColor" />
    </svg>
  )
}

/** "Hear how it sounds" sample list for the Garsio TTS cross-promo. */
export function PromoVoices({ voices, label }: { voices: readonly PromoVoice[]; label: string }) {
  const [playing, setPlaying] = useState(-1)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function stop() {
    const a = audioRef.current
    if (a) {
      a.pause()
      a.src = ''
      audioRef.current = null
    }
    setPlaying(-1)
  }

  useEffect(() => {
    const onPauseOthers = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== 'promo') stop()
    }
    window.addEventListener(PAUSE_OTHERS_EVENT, onPauseOthers)
    return () => {
      window.removeEventListener(PAUSE_OTHERS_EVENT, onPauseOthers)
      stop()
    }
  }, [])

  function toggle(i: number) {
    if (playing === i) {
      stop()
      return
    }
    stop()
    window.dispatchEvent(new CustomEvent(PAUSE_OTHERS_EVENT, { detail: 'promo' }))
    const a = new Audio(assetHref(voices[i].audioPathFromRoot))
    audioRef.current = a
    const done = () => {
      if (audioRef.current === a) {
        audioRef.current = null
        setPlaying(-1)
      }
    }
    a.addEventListener('ended', done)
    a.addEventListener('error', done)
    setPlaying(i)
    void a.play().catch(done)
  }

  return (
    <div className="promo__list">
      <div className="promo__list-label">{label}</div>
      {voices.map((v, i) => {
        const active = playing === i
        return (
          <button key={v.name} type="button" className="promo__voice" onClick={() => toggle(i)} aria-pressed={active}>
            <span className="promo__voice-icon" aria-hidden="true">
              {active ? <PauseGlyph /> : <PlayGlyph />}
            </span>
            <span className="promo__voice-name">{v.name}</span>
            <span className="promo__voice-desc">{v.desc}</span>
          </button>
        )
      })}
    </div>
  )
}
