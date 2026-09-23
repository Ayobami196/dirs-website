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
      viewBox="0 0 290 62"
      width={w}
      height={w * 62 / 290}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DO IT RIGHT SOLUTIONS — DIRSOL logo"
    >
      {/* DIRSOL wordmark */}
      <text
        x="6"
        y="32"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="30"
        fill={textColor}
        letterSpacing="4"
      >
        DIRSOL
      </text>

      {/* Gold smile sweeping under the wordmark, rising at the right end */}
      <path
        d="M 10 40 Q 100 50 175 32"
        stroke="#C9A84C"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Arrowhead at smile tip (points up-right, clears tagline) */}
      <polyline
        points="168,28 175,32 172,38"
        stroke="#C9A84C"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tagline */}
      <text
        x="8"
        y="58"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="8.2"
        fill={subColor}
        letterSpacing="2.4"
      >
        DO IT RIGHT SOLUTIONS
      </text>
    </svg>
  )
}
