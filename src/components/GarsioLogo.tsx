const ORANGE = '#F26522'
const DARK = '#1A1714'

type GarsioLogoProps = {
  className?: string
}

export function GarsioLogo({ className }: GarsioLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 248 40"
      fill="none"
      role="img"
      aria-label="Garsio Player"
      className={className}
    >
      <rect x="0" y="26" width="5" height="14" rx="2.5" fill={ORANGE} />
      <rect x="8" y="18" width="5" height="22" rx="2.5" fill={ORANGE} />
      <rect x="16" y="22" width="5" height="18" rx="2.5" fill={DARK} />
      <rect x="24" y="8" width="5" height="32" rx="2.5" fill={ORANGE} />
      <rect x="32" y="30" width="5" height="10" rx="2.5" fill={DARK} />
      <text
        x="46"
        y="29"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        <tspan fill={DARK}>Garsio </tspan>
        <tspan fill={ORANGE}>Player</tspan>
      </text>
    </svg>
  )
}
