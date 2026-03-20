interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const widths = { sm: 170, md: 220, lg: 260 }
  const w = widths[size]
  const textColor = variant === 'light' ? '#FFFFFF' : '#0D1B2A'
  const subColor  = variant === 'light' ? 'rgba(255,255,255,0.6)' : '#6B7280'

  return (
    <svg
      viewBox="0 0 260 52"
      width={w}
      height={w * 52 / 260}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DO IT RIGHT SOLUTIONS — DIRSOL logo"
    >
      {/* Hexagon shield icon */}
      <polygon
        points="26,3 44,3 52,17 44,33 26,33 18,17"
        fill="#0D1B2A"
      />
      {/* Gold checkmark */}
      <polyline
        points="24,18 30,25 46,10"
        stroke="#C9A84C"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* DIRSOL wordmark */}
      <text
        x="62"
        y="24"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill={textColor}
        letterSpacing="3"
      >
        DIRSOL
      </text>
      {/* Tagline */}
      <text
        x="63"
        y="37"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="7.8"
        fill={subColor}
        letterSpacing="1.8"
      >
        DO IT RIGHT SOLUTIONS
      </text>
      {/* Gold accent line */}
      <rect x="62" y="27" width="188" height="1.5" fill="#C9A84C" opacity="0.5" />
    </svg>
  )
}
