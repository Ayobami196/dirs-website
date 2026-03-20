import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        <path d="M6 8h.01M9 8h6"/>
      </svg>
    ),
    title: 'IT Managed Services',
    desc: 'End-to-end management of your IT infrastructure — proactive monitoring, maintenance, helpdesk, and strategic planning so you can focus on your business.',
    link: '/services',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
      </svg>
    ),
    title: 'Data Solutions',
    desc: 'Transform raw data into strategic assets. We design, implement, and optimize data pipelines, storage, analytics, and governance frameworks.',
    link: '/services',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Smart Hands as a Service',
    desc: 'On-demand, highly skilled field technicians deployed at your data center or remote site — cable runs, hardware installs, rack & stack, and physical IT tasks.',
    link: '/services',
  },
]

const stats = [
  { value: '2022', label: 'Founded' },
  { value: '100%', label: 'Women-Owned' },
  { value: '24/7', label: 'Support Available' },
  { value: '99.9%', label: 'Uptime Commitment' },
]

const whyCards = [
  {
    icon: '✓',
    title: 'Done Right. Every Time.',
    desc: 'Our name is our promise. Every engagement is delivered with precision, accountability, and a commitment to excellence.',
  },
  {
    icon: '⚡',
    title: 'Rapid Response',
    desc: 'Time is critical in IT. Our team responds quickly, resolves efficiently, and keeps your operations running without interruption.',
  },
  {
    icon: '🔒',
    title: 'Security-First Mindset',
    desc: 'We build security into every layer of what we do — protecting your infrastructure, data, and people proactively.',
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
            <div className="section-tag">Women-Owned · Est. 2022</div>
            <h1>
              IT Solutions Done <span className="gold-text">Right.</span><br />
              Every Single Time.
            </h1>
            <p className="hero-sub">
              DO IT RIGHT SOLUTIONS (DIRSOL) delivers enterprise-grade IT managed services,
              data solutions, and smart hands support — built for businesses that demand
              reliability and results.
            </p>
            <div className="hero-ctas animate-fade-up-delay-1">
              <Link to="/services" className="btn-primary">Explore Services</Link>
              <Link to="/contact" className="btn-outline">Get a Free Quote</Link>
            </div>
          </div>

          <div className="hero-visual animate-fade-up-delay-2">
            <div className="hero-card-stack">
              <div className="hero-card hc-1">
                <span className="hc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </span>
                <div>
                  <strong>99.9% Uptime</strong>
                  <span>Infrastructure SLA</span>
                </div>
              </div>
              <div className="hero-card hc-2">
                <span className="hc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <div>
                  <strong>24/7 Support</strong>
                  <span>Always available</span>
                </div>
              </div>
              <div className="hero-card hc-3">
                <span className="hc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <div>
                  <strong>Security-First</strong>
                  <span>Every solution</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M12 5v14M5 12l7 7 7-7"/>
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

      {/* ── Services Overview ── */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">What We Do</div>
            <h2 className="section-heading">
              Comprehensive IT <span>Services</span><br />Built for Your Business
            </h2>
            <span className="gold-divider center" />
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              From managing your entire IT environment to deploying field technicians on demand,
              DIRSOL delivers the expertise and reliability you need to move forward with confidence.
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
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DIRSOL ── */}
      <section className="why-dirs">
        <div className="container why-inner">
          <div className="why-left">
            <div className="section-tag">Why DIRSOL</div>
            <h2 className="section-heading">
              A Partner You Can <span>Rely On</span>
            </h2>
            <span className="gold-divider" />
            <p className="section-subtext">
              DIRSOL was founded on a simple principle: technology should work for you,
              not against you. We combine deep technical expertise with a client-first
              approach that ensures every solution truly fits your needs.
            </p>
            <div className="why-highlights">
              <div className="wh-item">
                <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Certified IT professionals
              </div>
              <div className="wh-item">
                <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Women-owned, minority-forward leadership
              </div>
              <div className="wh-item">
                <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Transparent, flat-rate pricing
              </div>
              <div className="wh-item">
                <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Scalable solutions that grow with you
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
            <h2>Ready to Experience IT Done Right?</h2>
            <p>Let's talk about how DIRSOL can transform your technology and drive your business forward.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
