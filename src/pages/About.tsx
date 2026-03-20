import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'Integrity',
    desc: 'We do what we say, and say what we do. Every promise made is a promise kept.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Reliability',
    desc: "When downtime isn't an option, you need a partner you can count on around the clock.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Partnership',
    desc: 'We invest in your success as deeply as you do. Your growth is our growth.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standard — because mediocre IT is not an option.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
    title: 'Transparency',
    desc: 'No hidden fees. No tech jargon runaround. Clear communication from day one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Innovation',
    desc: "Technology doesn't stand still, and neither do we. We continuously evolve our solutions.",
  },
]

const milestones = [
  { year: '2022', label: 'DIRSOL Founded', detail: 'Established as a women-owned IT managed services company with a mission to deliver enterprise-grade solutions to businesses of all sizes.' },
  { year: '2022', label: 'Smart Hands Launch', detail: 'Launched our Smart Hands as a Service offering, connecting businesses with certified field technicians on demand.' },
  { year: '2023', label: 'Data Solutions Division', detail: 'Expanded into comprehensive data solutions — architecture, pipelines, analytics, and governance frameworks.' },
  { year: '2024', label: 'Growing Client Base', detail: 'Grew our portfolio of managed service clients across multiple industries, delivering 99.9% uptime SLAs.' },
]

export default function About() {
  return (
    <div className="about">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero-content animate-fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About</span>
          </nav>
          <h1>About <span style={{ color: 'var(--gold)' }}>DIRSOL</span></h1>
          <p>Women-owned, mission-driven, and built to deliver IT excellence since 2022.</p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="about-story">
        <div className="container story-grid">
          <div className="story-visual">
            <div className="story-emblem">
              <svg viewBox="0 0 120 120" width="120" height="120">
                <polygon points="60,6 108,28 108,92 60,114 12,92 12,28" fill="#0D1B2A"/>
                <polyline points="36,60 52,76 84,44" stroke="#C9A84C" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="story-emblem-text">
                <strong>DIRSOL</strong>
                <span>Est. 2022</span>
              </div>
            </div>
            <div className="story-badge wob-highlight">
              <svg viewBox="0 0 24 24" fill="var(--gold)" width="24" height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              <div>
                <strong>Women-Owned Business</strong>
                <span>Certified · Founded 2022</span>
              </div>
            </div>
          </div>

          <div className="story-content">
            <div className="section-tag">Our Story</div>
            <h2 className="section-heading">
              Built on Purpose. <span>Driven by Excellence.</span>
            </h2>
            <span className="gold-divider" />
            <p>
              DO IT RIGHT SOLUTIONS (DIRSOL) was founded in 2022 with a bold, simple conviction:
              businesses deserve IT that actually works — delivered by people who genuinely care
              about doing it right.
            </p>
            <p>
              As a women-owned small business, DIRSOL was built to challenge the status quo in
              managed IT services. Our founder recognized a gap between what businesses needed
              from their technology partners and what the market was delivering — and decided
              to close it.
            </p>
            <p>
              From our first engagement, we committed to being the partner we always wished
              existed: responsive, transparent, technically excellent, and deeply invested
              in the success of every client we serve. That commitment is reflected in every
              ticket we close, every data pipeline we build, and every rack we configure.
            </p>
          </div>
        </div>
      </section>

      {/* ── WOB Highlight ── */}
      <section className="wob-section">
        <div className="container wob-inner">
          <div className="wob-text">
            <div className="section-tag">Women-Owned Business</div>
            <h2 className="section-heading" style={{ color: 'var(--white)' }}>
              Diverse Leadership.<br /><span>Exceptional Results.</span>
            </h2>
            <span className="gold-divider" />
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
              As a certified women-owned business, DIRSOL brings a distinct perspective to
              technology — one centered on communication, empathy, and a commitment to building
              equitable, inclusive workplaces. We believe diverse leadership drives better
              outcomes, and we're proud to be a role model in the IT industry.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginTop: 12 }}>
              When you partner with DIRSOL, you're also supporting a business that invests in
              diverse talent and champions equal opportunity across the technology sector.
            </p>
          </div>
          <div className="wob-stat-grid">
            <div className="wob-stat">
              <strong>2022</strong>
              <span>Year Founded</span>
            </div>
            <div className="wob-stat">
              <strong>WOB</strong>
              <span>Certified</span>
            </div>
            <div className="wob-stat">
              <strong>100%</strong>
              <span>Client Focus</span>
            </div>
            <div className="wob-stat">
              <strong>3+</strong>
              <span>Core Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 56 }}>
            <div className="section-tag">Our Journey</div>
            <h2 className="section-heading">Milestones That <span>Define Us</span></h2>
            <span className="gold-divider center" />
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-year">{m.year}</div>
                  <h4>{m.label}</h4>
                  <p>{m.detail}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="values-section">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 56 }}>
            <div className="section-tag">What We Stand For</div>
            <h2 className="section-heading">Our Core <span>Values</span></h2>
            <span className="gold-divider center" />
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              These principles aren't just words on a wall — they're embedded in every
              decision we make and every client relationship we build.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner" style={{ marginTop: 0 }}>
        <div className="container cta-inner-about">
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--white)', marginBottom: 10 }}>
              Ready to Work With a Partner That Gets It Right?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520 }}>
              Let's connect and explore how DIRSOL can become the IT partner your business deserves.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', flexShrink: 0 }}>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
