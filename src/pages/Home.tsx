import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'IT Staffing',
    desc: 'Help desk, network, systems, cloud, security, and data professionals placed on contract, contract-to-hire, or direct hire — screened by people who have done the work.',
    link: '/staffing',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="6" rx="1" /><rect x="3" y="11" width="18" height="6" rx="1" />
        <path d="M7 6h.01M7 14h.01M12 19v2M8 21h8" />
      </svg>
    ),
    title: 'Data Center Staffing',
    desc: 'Badge-ready technicians for rack & stack, structured cabling, smart hands, NOC shifts, and critical facilities — nationwide, including nights and weekends.',
    link: '/staffing',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V8l9-5 9 5v13" /><path d="M9 21v-6h6v6" /><path d="M3 12h18" />
      </svg>
    ),
    title: 'Managed Project Teams',
    desc: 'When you need an outcome instead of a headcount, we deploy a full crew with an on-site lead and own the supervision, schedule, and deliverables.',
    link: '/staffing#managed-teams',
  },
]

const stats = [
  { value: '2024', label: 'Founded' },
  { value: '48–72h', label: 'Target First Submittal' },
  { value: 'W2', label: 'Employer of Record' },
  { value: '24/7', label: 'Shift Coverage' },
]

const whyCards = [
  {
    icon: '✓',
    title: 'Done Right. Every Time.',
    desc: 'Our name is our promise. Every placement and every project is delivered with precision, accountability, and a commitment to excellence.',
  },
  {
    icon: '⚡',
    title: 'Fast, Calibrated Submittals',
    desc: 'You get a short slate of qualified people — typically within 48 to 72 hours — not a stack of resumes to sort through yourself.',
  },
  {
    icon: '🔒',
    title: 'Compliance Carried by Us',
    desc: 'W2 employment, payroll, taxes, insurance, background checks, and drug screening all sit on our side of the engagement.',
  },
  {
    icon: '🤝',
    title: 'Trusted Partnership',
    desc: 'We become an extension of your team — learning your environment, anticipating your needs, and growing with your business.',
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-text animate-fade-up">
            <div className="section-tag">IT &amp; Data Center Staffing · Est. 2024</div>
            <h1>
              Technical Talent Done <span className="gold-text">Right.</span><br />
              Every Single Time.
            </h1>
            <p className="hero-sub">
              DO IT RIGHT SOLUTIONS (DIRSOL) staffs the IT departments and data center floors that
              keep businesses running — contract, contract-to-hire, direct hire, and fully managed
              project crews, backed by the technical services team behind them.
            </p>
            <div className="hero-ctas animate-fade-up-delay-1">
              <Link to="/staffing" className="btn-primary">Hire Talent</Link>
              <Link to="/careers" className="btn-outline">Find Your Next Role</Link>
            </div>
          </div>

          <div className="hero-visual animate-fade-up-delay-2">
            <div className="hero-card-stack">
              <div className="hero-card hc-1">
                <span className="hc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <div>
                  <strong>48–72 Hours</strong>
                  <span>To first submittal</span>
                </div>
              </div>
              <div className="hero-card hc-2">
                <span className="hc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87" />
                  </svg>
                </span>
                <div>
                  <strong>W2 Contractors</strong>
                  <span>Compliance on us</span>
                </div>
              </div>
              <div className="hero-card hc-3">
                <span className="hc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <div>
                  <strong>Badge-Ready</strong>
                  <span>Screened &amp; vetted</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Staffing Overview ── */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">What We Do</div>
            <h2 className="section-heading">
              Staffing Built for <span>IT &amp; Data Centers</span>
            </h2>
            <span className="gold-divider center" />
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              DIRSOL was registered as an IT staffing company, and that is still the heart of the
              business. We place the technical people your operation depends on — from a single
              service desk seat to a full deployment crew.
            </p>
          </div>

          <div className="service-cards">
            {services.map((svc) => (
              <div key={svc.title} className="service-card">
                <div className="svc-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <Link to={svc.link} className="svc-link">
                  Learn More
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M10.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-3.3-3.3a1 1 0 010-1.4z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Services support band */}
          <div className="delivery-band">
            <div className="delivery-band-text">
              <span className="delivery-band-tag">Beyond Staffing</span>
              <h3>We can also deliver the work ourselves.</h3>
              <p>
                Because our team runs managed IT, data solutions, data center builds, and smart hands
                engagements, a staffing conversation can become a full scope of work without you
                changing vendors.
              </p>
            </div>
            <Link to="/services" className="btn-outline-dark">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* ── Dual audience ── */}
      <section className="audience-split">
        <div className="container audience-grid">
          <div className="audience-card employers">
            <span className="audience-tag">For Employers</span>
            <h3>Need to fill a role?</h3>
            <p>
              Send us the requirement and we come back with a short, calibrated slate — screening
              notes, rates, and availability attached. Contract, contract-to-hire, direct hire,
              or a full managed crew.
            </p>
            <Link to="/staffing" className="btn-primary">Request Talent</Link>
          </div>

          <div className="audience-card candidates">
            <span className="audience-tag">For Job Seekers</span>
            <h3>Looking for your next assignment?</h3>
            <p>
              Join the DIRSOL bench. W2 employment, honest rates stated up front, real project work,
              and redeployment when an assignment ends — at no cost to you, ever.
            </p>
            <Link to="/careers" className="btn-outline">Submit Your Profile</Link>
          </div>
        </div>
      </section>

      {/* ── Why DIRSOL ── */}
      <section className="why-dirs">
        <div className="container why-inner">
          <div className="why-left">
            <div className="section-tag">Why DIRSOL</div>
            <h2 className="section-heading">
              A Staffing Partner You Can <span>Rely On</span>
            </h2>
            <span className="gold-divider" />
            <p className="section-subtext">
              DIRSOL was founded on a simple principle: the right people, placed the right way,
              solve most technology problems. We combine deep technical screening with a
              client-first approach that makes every placement actually fit.
            </p>
            <div className="why-highlights">
              <div className="wh-item">
                <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                Certified IT &amp; data center professionals
              </div>
              <div className="wh-item">
                <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                Minority-forward leadership
              </div>
              <div className="wh-item">
                <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                Transparent, all-in bill rates
              </div>
              <div className="wh-item">
                <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                One seat or a whole crew — we scale either way
              </div>
            </div>
            <Link to="/about" className="btn-outline-dark">Our Story</Link>
          </div>

          <div className="why-right">
            {whyCards.map((c) => (
              <div key={c.title} className="why-card">
                <div className="why-card-icon">{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Get the Right People In Place?</h2>
            <p>Tell us about the role — or the project — and we will come back with a plan and a slate.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Request Talent</Link>
            <Link to="/staffing" className="btn-outline">How We Staff</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
