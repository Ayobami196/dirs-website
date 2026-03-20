import { Link } from 'react-router-dom'
import './Services.css'

interface SubCategory {
  type: 'greenfield' | 'brownfield'
  label: string
  title: string
  desc: string
  features: string[]
}

interface Service {
  id: string
  icon: JSX.Element
  tag: string
  title: string
  subtitle: string
  description: string
  description2: string
  highlight: string
  features?: string[]
  subcategories?: SubCategory[]
}

const services: Service[] = [
  {
    id: 'managed-it',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        <path d="M6 7h.01M9 7h6"/>
      </svg>
    ),
    tag: 'Core Service',
    title: 'IT Managed Services',
    subtitle: 'Your IT. Fully Managed.',
    description: `DIRSOL provides comprehensive IT managed services that give you full confidence in your technology infrastructure. We act as your dedicated IT department — monitoring, maintaining, optimizing, and securing your entire environment around the clock.`,
    description2: `Whether you need to offload your entire IT operation or supplement an internal team, our flexible managed service plans are designed to scale with your organization.`,
    features: [
      '24/7 infrastructure monitoring & alerting',
      'Proactive maintenance & patch management',
      'Help desk & end-user support',
      'Network management & optimization',
      'Cybersecurity & threat response',
      'Vendor management & coordination',
      'IT strategy & technology roadmapping',
      'Disaster recovery & business continuity',
    ],
    highlight: '99.9% Uptime SLA',
  },
  {
    id: 'data-solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
      </svg>
    ),
    tag: 'Advanced Solutions',
    title: 'Data Solutions',
    subtitle: 'Turn Data Into Decisions.',
    description: `Data is your most valuable asset — but only when it's clean, accessible, and actionable. DIRSOL designs and implements end-to-end data solutions that give you the visibility and intelligence to make smarter, faster decisions.`,
    description2: `From building robust data pipelines to establishing governance frameworks, our data team brings deep expertise across modern data platforms, cloud environments, and analytics tools.`,
    features: [
      'Data architecture & system design',
      'ETL / data pipeline development',
      'Data warehouse & lakehouse solutions',
      'Business intelligence & analytics',
      'Data quality & governance frameworks',
      'Cloud data migration (AWS, Azure, GCP)',
      'Real-time streaming & processing',
      'Data security & compliance consulting',
    ],
    highlight: 'Cloud-Native Ready',
  },
  {
    id: 'data-center',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
        <line x1="10" y1="6" x2="14" y2="6"/><line x1="10" y1="18" x2="14" y2="18"/>
      </svg>
    ),
    tag: 'Infrastructure Service',
    title: 'Data Center Solutions',
    subtitle: 'Build It Right. Modernize It Right.',
    description: `The data center is the heartbeat of your organization. Whether you're commissioning a new facility or modernizing an aging one, DIRSOL delivers end-to-end infrastructure expertise across the full data center lifecycle — with the precision, project discipline, and physical IT craftsmanship that enterprise environments demand.`,
    description2: `Our practice is built around two specialized tracks: Greenfield for ground-up infrastructure deployments, and Brownfield for migrations, modernizations, and ongoing maintenance programs. Both tracks are backed by certified field engineers and governed by the same DIRSOL standard — done right, every time.`,
    highlight: 'Full Lifecycle Coverage',
    subcategories: [
      {
        type: 'greenfield',
        label: 'Greenfield',
        title: 'New Build Infrastructure Deployment',
        desc: 'Deploy with confidence from day one. Our Greenfield practice covers the complete physical layer of your next data center — engineered for high density, full redundancy, and long-term scalability. DIRSOL partners with you from initial site assessment through power-on certification, ensuring every structured system meets enterprise-grade standards before your first production workload goes live. We don\'t just install infrastructure — we build the foundation your business will grow on for years to come.',
        features: [
          'Site readiness assessments & raised floor planning',
          'Structured cabling design & installation (Cat6A, OS2 fiber, OM4)',
          'High-density rack & stack deployment & alignment',
          'Cable tray, ladder rack & hot/cold aisle containment',
          'Power distribution (PDU/UPS) infrastructure coordination',
          'In-row & perimeter cooling system integration',
          'Network & compute equipment staging & deployment',
          'Physical security, access control & surveillance installation',
          'Full commissioning, testing, labeling & as-built documentation',
          'Turnkey project management from design to operational handoff',
        ],
      },
      {
        type: 'brownfield',
        label: 'Brownfield',
        title: 'Migration, Modernization & Ongoing Maintenance',
        desc: 'Legacy environments carry real risk — aging hardware, undocumented configurations, tangled cabling, and mounting technical debt. DIRSOL brings a structured, zero-surprise approach to your data center migration, consolidation, or modernization project. We engineer the path forward with precision scheduling, live-environment discipline, and a relentless focus on protecting your uptime through every phase of change — from the first infrastructure audit to the final go-live cutover.',
        features: [
          'End-to-end data center migration planning & live execution',
          'Hardware installation, staging & phased deployment',
          'Infrastructure refresh & technology lifecycle management',
          'Data center consolidation & facility decommissioning',
          'Cable remediation, re-labeling & cabling system upgrades',
          'Equipment disposition, ITAD & certified secure destruction',
          'Data center maintenance as a service (DCMaaS)',
          'Ongoing capacity planning & infrastructure auditing',
          'Remote hands, break/fix & scheduled preventive maintenance',
          '24/7 on-call field support & incident response',
        ],
      },
    ],
  },
  {
    id: 'smart-hands',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    tag: 'On-Demand Service',
    title: 'Smart Hands as a Service',
    subtitle: 'Skilled Hands, Where You Need Them.',
    description: `When you need certified IT professionals on the ground — at your data center, colocation facility, or remote site — DIRSOL Smart Hands delivers. Our field technicians are experienced, equipped, and ready to execute with precision.`,
    description2: `Eliminate the cost and complexity of maintaining in-house field resources. Our Smart Hands service provides on-demand access to skilled IT personnel who can handle any physical IT task with the same quality and care you'd expect from your own team.`,
    features: [
      'Data center rack & stack',
      'Cable management & structured cabling',
      'Hardware installation & replacement',
      'Server & network equipment deployment',
      'Break/fix & troubleshooting on-site',
      'Asset inventory & auditing',
      'Remote hands / eyes & ears service',
      'Nationwide technician dispatch',
    ],
    highlight: 'On-Demand Dispatch',
  },
]

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="var(--gold)" width="16" height="16">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
)

const BadgeIcon = () => (
  <svg viewBox="0 0 20 20" fill="var(--gold)" width="18" height="18">
    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>
)

export default function Services() {
  return (
    <div className="services-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container page-hero-content animate-fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Services</span>
          </nav>
          <h1>Our <span style={{ color: 'var(--gold)' }}>Services</span></h1>
          <p>Four core service lines engineered to keep your IT running, your data flowing, and your infrastructure built to last.</p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services-detail">
        <div className="container">
          {services.map((svc, i) => (
            <div key={svc.id} id={svc.id} className={`svc-block ${i % 2 === 1 ? 'reverse' : ''}`}>

              {/* Visual col */}
              <div className="svc-block-visual">
                <div className="svc-block-icon">{svc.icon}</div>
                <div className="svc-block-highlight">
                  <BadgeIcon />
                  {svc.highlight}
                </div>
                {/* Sub-nav pills for subcategory services */}
                {svc.subcategories && (
                  <div className="svc-subnav">
                    {svc.subcategories.map((sub) => (
                      <a key={sub.type} href={`#${svc.id}-${sub.type}`} className={`subnav-pill ${sub.type}`}>
                        <span className={`subnav-dot ${sub.type}`} />
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Content col */}
              <div className="svc-block-content">
                <div className="section-tag">{svc.tag}</div>
                <h2 className="section-heading">{svc.title}</h2>
                <p className="svc-subtitle">{svc.subtitle}</p>
                <span className="gold-divider" />
                <p className="svc-desc">{svc.description}</p>
                <p className="svc-desc">{svc.description2}</p>

                {/* Standard features list */}
                {svc.features && (
                  <div className="svc-features">
                    <h4>What's Included</h4>
                    <ul>
                      {svc.features.map((f) => (
                        <li key={f}><CheckIcon />{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sub-categories: Greenfield / Brownfield */}
                {svc.subcategories && (
                  <div className="svc-subcategories">
                    {svc.subcategories.map((sub) => (
                      <div key={sub.type} id={`${svc.id}-${sub.type}`} className={`subcat-card ${sub.type}`}>

                        {/* Header band */}
                        <div className="subcat-head">
                          <div className="subcat-head-icon">
                            {sub.type === 'greenfield' ? (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                              </svg>
                            ) : (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
                                <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>
                              </svg>
                            )}
                          </div>
                          <div className="subcat-head-text">
                            <span className="subcat-track-label">{sub.label}</span>
                            <h4>{sub.title}</h4>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="subcat-body">
                          <p className="subcat-desc">{sub.desc}</p>
                          <div className="subcat-features-label">What's Included</div>
                          <ul className="subcat-features">
                            {sub.features.map((f) => (
                              <li key={f}>
                                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    ))}
                  </div>
                )}

                <Link to="/contact" className="btn-primary" style={{ width: 'fit-content' }}>
                  Request This Service
                  <ArrowIcon />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── Why DIRSOL ── */}
      <section className="services-why">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 48 }}>
            <div className="section-tag">The DIRSOL Difference</div>
            <h2 className="section-heading">Why Clients Choose <span>DIRSOL</span></h2>
            <span className="gold-divider center" />
          </div>
          <div className="diff-grid">
            {[
              { title: 'Single Point of Contact', desc: 'One dedicated team for all your IT needs — no runarounds, no hand-offs to strangers.' },
              { title: 'Proactive, Not Reactive', desc: 'We catch issues before they become outages, protecting your uptime and your reputation.' },
              { title: 'Flexible Engagements', desc: 'Month-to-month, project-based, or long-term managed services — we work on your terms.' },
              { title: 'Women-Owned Advantage', desc: "Partnering with DIRSOL may satisfy supplier diversity requirements for your organization's contracts." },
            ].map((d) => (
              <div key={d.title} className="diff-card">
                <div className="diff-bullet" />
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-inner">
            <div>
              <h2>Let's Find the Right Solution for You</h2>
              <p>Schedule a free consultation with our team and discover how DIRSOL can elevate your technology.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
              <Link to="/about" className="btn-outline">Learn About DIRSOL</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
