import { useEffect, useMemo, useRef, useState } from 'react'
import type { LocaleBundle } from '../locales'
import { assetHref } from '../lib/locale'
import './garsejaPlayer.css'

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={['block', className ?? ''].join(' ')}
    >
      <path d="M7 4.7V19.3L20 12L7 4.7Z" fill="currentColor" />
    </svg>
  )
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={['block', className ?? ''].join(' ')}
    >
      <path d="M6.8 5.8H10.8V18.2H6.8V5.8Z" fill="currentColor" />
      <path d="M13.2 5.8H17.2V18.2H13.2V5.8Z" fill="currentColor" />
    </svg>
  )
}

function formatTime(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return '0:00'
  const s = Math.floor(totalSeconds)
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m.toString().padStart(2, '0')}:${r.toString().padStart(2, '0')}`
}

export function Player({
  bundle,
  className,
}: {
  bundle: LocaleBundle
  className?: string
}) {
  const strings = bundle.player
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const defaultVoiceId = bundle.defaultVoiceId
  const [voiceId, setVoiceId] = useState<string>(defaultVoiceId)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const voice = useMemo(() => {
    return bundle.voices.find((v) => v.id === voiceId) ?? bundle.voices[0]
  }, [bundle.voices, voiceId])

  const src = useMemo(() => assetHref(voice.audioPathFromRoot), [voice])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onTimeUpdate = () => setCurrentTime(audio.currentTime || 0)
    const onDurationChange = () => setDuration(audio.duration || 0)
    const onWaiting = () => setIsLoading(true)
    const onCanPlay = () => setIsLoading(false)
    const onLoadStart = () => {
      setHasError(false)
      setIsLoading(true)
    }
    const onError = () => {
      setHasError(true)
      setIsLoading(false)
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('durationchange', onDurationChange)
    audio.addEventListener('waiting', onWaiting)
    audio.addEventListener('canplay', onCanPlay)
    audio.addEventListener('loadstart', onLoadStart)
    audio.addEventListener('error', onError)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('durationchange', onDurationChange)
      audio.removeEventListener('waiting', onWaiting)
      audio.removeEventListener('canplay', onCanPlay)
      audio.removeEventListener('loadstart', onLoadStart)
      audio.removeEventListener('error', onError)
    }
  }, [])

  // When source changes, restart audio.
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
        await audio.play()
      } else {
        audio.pause()
      }
    } catch {
      setHasError(true)
      setIsPlaying(false)
    }
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
  const showTimeline = isPlaying || currentTime > 0 || isLoading
  const progressPercent =
    progressMax > 0 ? `${Math.min(100, Math.max(0, (progressValue / progressMax) * 100))}%` : '0%'

  const labelDuration = duration > 0 ? formatTime(duration) : '0:00'

  return (
    <div className={className ?? ''}>
      {showTimeline ? (
        <div className="flex h-10 items-center gap-1">
          <button
            type="button"
            onClick={togglePlay}
            className={[
              'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black text-white overflow-hidden',
              'focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-60',
            ].join(' ')}
            aria-label={isPlaying ? strings.pause : strings.play}
            disabled={hasError}
          >
            {isPlaying ? (
              <PauseIcon className="h-[20px] w-[20px]" />
            ) : (
              <PlayIcon className="h-[20px] w-[20px]" />
            )}
          </button>

          <span className="ml-1.5 w-8 shrink-0 text-xs leading-none text-slate-400 tabular-nums">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min={0}
            max={progressMax}
            step={0.01}
            value={progressValue}
            onChange={(e) => seek(Number(e.target.value))}
            className="garsejaPlayerRange w-full"
            style={{ ['--progress' as string]: progressPercent }}
            aria-label="Seek"
            disabled={!canSeek}
          />

          <div className="w-11 shrink-0 text-right">
            <div className="text-xs leading-none text-slate-400 tabular-nums">{formatTime(duration)}</div>
            <a
              href="https://garseja.lt"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-500 hover:text-slate-700"
            >
              garseja.lt
            </a>
          </div>
        </div>
      ) : (
        <div className="flex h-10 items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className={[
              'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black text-white overflow-hidden',
              'focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-60',
            ].join(' ')}
            aria-label={isPlaying ? strings.pause : strings.play}
            disabled={hasError}
          >
            <PlayIcon className="h-[20px] w-[20px]" />
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="truncate text-base font-semibold leading-tight text-slate-900">
                {strings.listenLabel}
              </span>
              <span className="shrink-0 text-base font-semibold leading-tight text-slate-900 tabular-nums">
                - {labelDuration}
              </span>
            </div>
          </div>

          <a
            href="https://garseja.lt"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs text-slate-500 hover:text-slate-700"
          >
            garseja.lt
          </a>
        </div>
      )}

      {hasError ? (
        <div className="mt-2 text-xs text-rose-600">{strings.error}</div>
      ) : isLoading ? (
        <div className="mt-2 text-xs text-slate-500">{strings.loading}</div>
      ) : null}

      {bundle.voices.length > 1 ? (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {bundle.voices.map((v) => {
            const active = v.id === voiceId
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVoiceId(v.id)}
                className={[
                  'rounded-full border px-3 py-1 text-xs',
                  active
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
                ].join(' ')}
              >
                {v.name}
              </button>
            )
          })}
        </div>
      ) : null}

      <audio ref={audioRef} preload="metadata">
        <source src={src} />
      </audio>
    </div>
  )
}

