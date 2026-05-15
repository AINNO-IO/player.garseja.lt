type HeroVisualProps = {
  chips: readonly string[]
}

function ChipIcon({ type }: { type: 'audio' | 'trial' | 'globe' | 'access' }) {
  const common = { viewBox: '0 0 20 20', className: 'h-4 w-4 shrink-0', 'aria-hidden': true as const }
  switch (type) {
    case 'audio':
      return (
        <svg {...common}>
          <path
            d="M4 10V6.5a1 1 0 0 1 1.6-.8L9 7.2V4.5a1 1 0 0 1 1.6-.8l5 3.75a1 1 0 0 1 0 1.6l-5 3.75a1 1 0 0 1-1.6-.8V12.8l-3.4 2.5A1 1 0 0 1 4 14V10Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'trial':
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 6v4.2l2.6 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 10h14M10 3c2 3 2 11 0 14M10 3c-2 3-2 11 0 14" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        </svg>
      )
    case 'access':
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7.2 10.2l1.8 1.8 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

const chipIcons = ['audio', 'trial', 'globe', 'access'] as const

export function PageBackground() {
  return (
    <div className="page-bg" aria-hidden="true">
      <div className="page-bg__mesh" />
      <div className="page-bg__orb page-bg__orb--a" />
      <div className="page-bg__orb page-bg__orb--b" />
      <div className="page-bg__orb page-bg__orb--c" />
    </div>
  )
}

export function HeroVisual({ chips }: HeroVisualProps) {
  const bars = [20, 36, 52, 40, 68, 50, 34, 60, 44, 30, 56, 26, 48, 38, 62, 42]
  const items = chips.slice(0, 4)

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__layout">
        {items.map((label, i) => (
          <div
            key={label}
            className={`hero-visual__chip hero-visual__chip--slot-${i}`}
            style={{ ['--float-delay' as string]: `${i * 0.5}s` } as React.CSSProperties}
          >
            <ChipIcon type={chipIcons[i] ?? 'audio'} />
            <span className="hero-visual__chip-text">{label}</span>
          </div>
        ))}

        <div className="hero-visual__wave" role="presentation">
          <div className="hero-visual__wave-glow" />
          <div className="hero-visual__bars">
            {bars.map((h, idx) => (
              <span
                key={idx}
                className="hero-visual__bar"
                style={
                  {
                    ['--h' as string]: `${h}%`,
                    ['--d' as string]: `${idx * 0.06}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
