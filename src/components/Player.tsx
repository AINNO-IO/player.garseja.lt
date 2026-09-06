import { useEffect, useMemo, useRef, useState } from 'react'
import type { LocaleBundle } from '../locales'
import { assetHref } from '../lib/locale'
import { PAUSE_OTHERS_EVENT } from '../lib/audioBus'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="block h-5 w-5">
      <path d="M8 5.2V18.8L19 12L8 5.2Z" fill="currentColor" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="block h-5 w-5">
      <path d="M7 5.5H10.6V18.5H7V5.5Z" fill="currentColor" />
      <path d="M13.4 5.5H17V18.5H13.4V5.5Z" fill="currentColor" />
    </svg>
  )
}

function formatTime(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return '00:00'
  const s = Math.floor(totalSeconds)
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m.toString().padStart(2, '0')}:${r.toString().padStart(2, '0')}`
}

export function Player({
  bundle,
  listenLabel,
  className,
}: {
  bundle: LocaleBundle
  /** Overrides the bundle's "Listen…" label (used by the landing copy). */
  listenLabel?: string
  className?: string
}) {
  const strings = bundle.player
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [voiceId, setVoiceId] = useState<string>(bundle.defaultVoiceId)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const resumeAfterSwitch = useRef(false)

  const voice = useMemo(
    () => bundle.voices.find((v) => v.id === voiceId) ?? bundle.voices[0],
    [bundle.voices, voiceId],
  )

  const src = useMemo(() => assetHref(voice.audioPathFromRoot), [voice])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onTimeUpdate = () => setCurrentTime(audio.currentTime || 0)
    const onDurationChange = () => setDuration(audio.duration || 0)
    const onWaiting = () => setIsLoading(true)
    const onCanPlay = () => {
      setIsLoading(false)
      if (resumeAfterSwitch.current) {
        resumeAfterSwitch.current = false
        void audio.play().catch(() => setHasError(true))
      }
    }
    const onLoadStart = () => {
      setHasError(false)
      setIsLoading(true)
    }
    const onError = () => {
      setHasError(true)
      setIsLoading(false)
    }
    const onEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('durationchange', onDurationChange)
    audio.addEventListener('waiting', onWaiting)
    audio.addEventListener('canplay', onCanPlay)
    audio.addEventListener('loadstart', onLoadStart)
    audio.addEventListener('error', onError)
    audio.addEventListener('ended', onEnded)

    const onPauseOthers = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== 'demo') audio.pause()
    }
    window.addEventListener(PAUSE_OTHERS_EVENT, onPauseOthers)

    return () => {
      window.removeEventListener(PAUSE_OTHERS_EVENT, onPauseOthers)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('durationchange', onDurationChange)
      audio.removeEventListener('waiting', onWaiting)
      audio.removeEventListener('canplay', onCanPlay)
      audio.removeEventListener('loadstart', onLoadStart)
      audio.removeEventListener('error', onError)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  // When the source changes, restart audio (and resume if it was playing).
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setHasError(false)
    audio.load()
  }, [src])

  async function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    setHasError(false)
    try {
      if (audio.paused) {
        window.dispatchEvent(new CustomEvent(PAUSE_OTHERS_EVENT, { detail: 'demo' }))
        await audio.play()
      } else {
        audio.pause()
      }
    } catch {
      setHasError(true)
      setIsPlaying(false)
    }
  }

  function selectVoice(id: string) {
    if (id === voiceId) return
    resumeAfterSwitch.current = isPlaying
    setVoiceId(id)
  }

  function seek(next: number) {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = next
    setCurrentTime(next)
  }

  const progressMax = duration > 0 ? duration : 0
  const progressValue = Math.min(currentTime, progressMax || currentTime)
  const canSeek = Number.isFinite(progressMax) && progressMax > 0 && !hasError
  const progressPercent =
    progressMax > 0 ? `${Math.min(100, Math.max(0, (progressValue / progressMax) * 100))}%` : '0%'

  const started = isPlaying || currentTime > 0
  const timeLabel = started
    ? `${formatTime(currentTime)} / ${formatTime(duration)}`
    : formatTime(duration)

  return (
    <div className={['gp', className ?? ''].join(' ')}>
      <div className="gp__row">
        <button
          type="button"
          onClick={togglePlay}
          className="gp__play"
          aria-label={isPlaying ? strings.pause : strings.play}
          disabled={hasError}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className="gp__label">
          <span className="gp__label-title">{listenLabel ?? strings.listenLabel}</span>
          <span className="gp__label-time">– {timeLabel}</span>
        </div>

      </div>

      <input
        type="range"
        min={0}
        max={progressMax || 1}
        step={0.01}
        value={progressValue}
        onChange={(e) => seek(Number(e.target.value))}
        className="gp__seek"
        style={{ ['--progress' as string]: progressPercent }}
        aria-label="Seek"
        disabled={!canSeek}
      />

      {bundle.voices.length > 1 ? (
        <div className="gp__voices" role="group" aria-label={strings.voice}>
          {bundle.voices.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => selectVoice(v.id)}
              className="gp__voice"
              aria-pressed={v.id === voiceId}
            >
              {v.name}
            </button>
          ))}
        </div>
      ) : null}

      {hasError ? (
        <div className="gp__status gp__status--error">{strings.error}</div>
      ) : isLoading && isPlaying ? (
        <div className="gp__status">{strings.loading}</div>
      ) : null}

      <audio ref={audioRef} preload="metadata">
        <source src={src} />
      </audio>
    </div>
  )
}
