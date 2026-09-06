type GarsioLogoProps = {
  className?: string
  size?: 'md' | 'sm'
}

/** Wordmark from the design: five equaliser bars + "Garsio Player". */
export function GarsioLogo({ className, size = 'md' }: GarsioLogoProps) {
  const bars: Array<{ h: number; dark?: boolean }> = [
    { h: 9 },
    { h: 20 },
    { h: 13, dark: true },
    { h: 24 },
    { h: 7, dark: true },
  ]
  return (
    <span className={['brand', size === 'sm' ? 'brand--sm' : '', className ?? ''].join(' ')} role="img" aria-label="Garsio Player">
      {size === 'md' ? (
        <span className="brand__bars" aria-hidden="true">
          {bars.map((b, i) => (
            <span
              key={i}
              className={['brand__bar', b.dark ? 'brand__bar--dark' : ''].join(' ')}
              style={{ height: b.h }}
            />
          ))}
        </span>
      ) : null}
      <span className="brand__name">
        Garsio <span>Player</span>
      </span>
    </span>
  )
}
