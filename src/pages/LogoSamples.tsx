import './LogoSamples.css'

/* ─────────────────────────────────────────
   LOGO CONCEPT A — Shield Classic
   ───────────────────────────────────────── */
const LogoA = ({ dark = false }) => {
  const text  = dark ? '#FFFFFF' : '#0D1B2A'
  const sub   = dark ? 'rgba(255,255,255,0.55)' : '#6B7280'
  return (
    <svg viewBox="0 0 290 62" xmlns="http://www.w3.org/2000/svg">
      {/* Pentagon shield */}
      <path d="M 30 3 L 54 3 L 64 20 L 54 40 L 30 40 L 20 20 Z" fill="#0D1B2A"/>
      {/* Gold rim */}
      <path d="M 30 3 L 54 3 L 64 20 L 54 40 L 30 40 L 20 20 Z"
        fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5"/>
      {/* Checkmark */}
      <polyline points="26,21 33,30 58,11"
        stroke="#C9A84C" strokeWidth="4" fill="none"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Wordmark */}
      <text x="76" y="27" fontFamily="Montserrat,Arial,sans-serif"
        fontWeight="800" fontSize="22" fill={text} letterSpacing="4">
        DIRSOL
      </text>
      {/* Gold rule */}
      <rect x="76" y="31" width="206" height="1.8" fill="#C9A84C" opacity="0.55"/>
      {/* Tagline */}
      <text x="77" y="44" fontFamily="Montserrat,Arial,sans-serif"
        fontSize="8.2" fill={sub} letterSpacing="2.2">
        DO IT RIGHT SOLUTIONS
      </text>
    </svg>
  )
}

/* ─────────────────────────────────────────
   LOGO CONCEPT B — D-Mark Tech
   ───────────────────────────────────────── */
const LogoB = ({ dark = false }) => {
  const text = dark ? '#FFFFFF' : '#0D1B2A'
  const sub  = dark ? 'rgba(255,255,255,0.55)' : '#6B7280'
  return (
    <svg viewBox="0 0 290 62" xmlns="http://www.w3.org/2000/svg">
      {/* D shape (outer - inner = letter D) */}
      <path
        d="M 8 4 L 22 4 Q 58 4 58 31 Q 58 58 22 58 L 8 58 Z
           M 17 13 L 20 13 Q 47 13 47 31 Q 47 49 20 49 L 17 49 Z"
        fill="#0D1B2A" fillRule="evenodd"/>
      {/* Gold horizontal server lines inside D */}
      <line x1="18" y1="22" x2="41" y2="22" stroke="#C9A84C" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="18" y1="31" x2="45" y2="31" stroke="#C9A84C" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="18" y1="40" x2="41" y2="40" stroke="#C9A84C" strokeWidth="3.2" strokeLinecap="round"/>
      {/* Wordmark */}
      <text x="72" y="27" fontFamily="Montserrat,Arial,sans-serif"
        fontWeight="800" fontSize="22" fill={text} letterSpacing="4">
        DIRSOL
      </text>
      {/* Gold rule */}
      <rect x="72" y="31" width="210" height="1.8" fill="#C9A84C" opacity="0.55"/>
      {/* Tagline */}
      <text x="73" y="44" fontFamily="Montserrat,Arial,sans-serif"
        fontSize="8.2" fill={sub} letterSpacing="2.2">
        DO IT RIGHT SOLUTIONS
      </text>
    </svg>
  )
}

/* ─────────────────────────────────────────
   LOGO CONCEPT C — Circle Badge
   ───────────────────────────────────────── */
const LogoC = ({ dark = false }) => {
  const text = dark ? '#FFFFFF' : '#0D1B2A'
  const sub  = dark ? 'rgba(255,255,255,0.55)' : '#6B7280'
  return (
    <svg viewBox="0 0 290 62" xmlns="http://www.w3.org/2000/svg">
      {/* Outer gold ring */}
      <circle cx="31" cy="31" r="29" fill="none" stroke="#C9A84C" strokeWidth="2.5"/>
      {/* Navy fill circle */}
      <circle cx="31" cy="31" r="26" fill="#0D1B2A"/>
      {/* Checkmark */}
      <polyline points="17,31 26,41 46,19"
        stroke="#C9A84C" strokeWidth="4.5" fill="none"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Wordmark */}
      <text x="72" y="27" fontFamily="Montserrat,Arial,sans-serif"
        fontWeight="800" fontSize="22" fill={text} letterSpacing="4">
        DIRSOL
      </text>
      {/* Gold rule */}
      <rect x="72" y="31" width="210" height="1.8" fill="#C9A84C" opacity="0.55"/>
      {/* Tagline */}
      <text x="73" y="44" fontFamily="Montserrat,Arial,sans-serif"
        fontSize="8.2" fill={sub} letterSpacing="2.2">
        DO IT RIGHT SOLUTIONS
      </text>
    </svg>
  )
}

/* ─────────────────────────────────────────
   LOGO CONCEPT D — Chevron Forward
   ───────────────────────────────────────── */
const LogoD = ({ dark = false }) => {
  const text = dark ? '#FFFFFF' : '#0D1B2A'
  const sub  = dark ? 'rgba(255,255,255,0.55)' : '#6B7280'
  return (
    <svg viewBox="0 0 290 62" xmlns="http://www.w3.org/2000/svg">
      {/* Back chevron (faint) */}
      <polyline points="10,8 28,31 10,54"
        stroke="#C9A84C" strokeWidth="6" fill="none"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
      {/* Front chevron (strong) */}
      <polyline points="26,8 44,31 26,54"
        stroke="#C9A84C" strokeWidth="6" fill="none"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Navy vertical anchor bar */}
      <rect x="4" y="8" width="6" height="46" rx="3" fill="#0D1B2A"/>
      {/* Wordmark */}
      <text x="58" y="27" fontFamily="Montserrat,Arial,sans-serif"
        fontWeight="800" fontSize="22" fill={text} letterSpacing="4">
        DIRSOL
      </text>
      {/* Gold rule */}
      <rect x="58" y="31" width="224" height="1.8" fill="#C9A84C" opacity="0.55"/>
      {/* Tagline */}
      <text x="59" y="44" fontFamily="Montserrat,Arial,sans-serif"
        fontSize="8.2" fill={sub} letterSpacing="2.2">
        DO IT RIGHT SOLUTIONS
      </text>
    </svg>
  )
}

const concepts = [
  {
    id: 'A',
    name: 'Shield Classic',
    desc: 'Authoritative pentagon shield with gold checkmark. Communicates security, trust, and protection — ideal for a managed IT brand.',
    Component: LogoA,
  },
  {
    id: 'B',
    name: 'D-Mark Tech',
    desc: 'A bold geometric "D" with internal server/data lines in gold. Modern, technical, and uniquely tied to the DIRSOL name.',
    Component: LogoB,
  },
  {
    id: 'C',
    name: 'Circle Badge',
    desc: 'Clean circular badge with a bold gold checkmark. Timeless, versatile, and works perfectly at any size — from favicon to billboard.',
    Component: LogoC,
  },
  {
    id: 'D',
    name: 'Chevron Forward',
    desc: 'Double gold chevrons with a navy anchor bar. Conveys direction, momentum, and doing it right — always moving forward.',
    Component: LogoD,
  },
]

export default function LogoSamples() {
  return (
    <div className="logo-samples">
      <div className="ls-hero">
        <div className="ls-tag">Brand Identity</div>
        <h1>DIRSOL Logo Concepts</h1>
        <p>Four distinct directions for the DIRSOL brand. Each shown on light and dark backgrounds.</p>
      </div>

      <div className="ls-grid">
        {concepts.map((c) => (
          <div key={c.id} className="ls-card">
            <div className="ls-label">
              <span className="ls-id">{c.id}</span>
              <strong>{c.name}</strong>
            </div>

            {/* Light preview */}
            <div className="ls-preview light">
              <c.Component dark={false} />
            </div>

            {/* Dark preview */}
            <div className="ls-preview dark">
              <c.Component dark={true} />
            </div>

            <p className="ls-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
