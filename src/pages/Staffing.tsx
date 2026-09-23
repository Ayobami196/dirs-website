import { Link } from 'react-router-dom'
import './Staffing.css'

/* ── Engagement models ── */
const models = [
  {
    id: 'contract',
    label: 'Contract',
    title: 'Contract & Staff Augmentation',
    desc: 'Scale your team up or down without adding headcount. DIRSOL contractors work as W2 employees of record — we carry payroll, benefits, workers’ comp, and general liability so you carry none of the administrative burden.',
    points: [
      'W2 employer of record — payroll, taxes & benefits handled',
      'Assignments from 4 weeks to multi-year',
      'Background checks, drug screening & badging support',
      'Payrolling service for talent you have already sourced',
    ],
    meta: 'Best for: surge capacity, backfill, shift coverage',
  },
  {
    id: 'contract-to-hire',
    label: 'Contract-to-Hire',
    title: 'Contract-to-Hire',
    desc: 'Evaluate performance on the job before you commit. Candidates start on the DIRSOL payroll for an agreed trial period, then convert to your team with no additional conversion fee once the term is complete.',
    points: [
      'Standard 3–6 month evaluation period',
      'No conversion fee after the agreed term',
      'Full performance visibility before you commit headcount',
      'Replacement at no cost if the fit is wrong',
    ],
    meta: 'Best for: critical roles where fit matters as much as skill',
  },
  {
    id: 'direct-hire',
    label: 'Direct Hire',
    title: 'Direct Hire & Executive Search',
    desc: 'For permanent roles, we run a structured search built around your environment, your team culture, and the technical bar the role actually requires — not a keyword match against a job description.',
    points: [
      'Contingent or retained search engagements',
      'Technical screening by people who have done the work',
      'Calibrated shortlists, not resume volume',
      'Replacement guarantee on every placement',
    ],
    meta: 'Best for: leadership, niche skills & permanent build-out',
  },
  {
    id: 'managed-teams',
    label: 'Managed Teams',
    title: 'Managed Project Teams (SOW)',
    desc: 'When you need an outcome rather than a headcount, DIRSOL deploys a full crew with an on-site lead and owns the supervision, scheduling, and deliverables. You manage the milestone — we manage the people.',
    points: [
      'Deliverable-based statements of work',
      'On-site DIRSOL lead & daily reporting',
      'Full crews for deployments, migrations & refreshes',
      'Single invoice, single point of accountability',
    ],
    meta: 'Best for: data center builds, migrations & rollouts',
  },
]

/* ── Talent tracks ── */
const tracks = [
  {
    type: 'it',
    label: 'IT Services Talent',
    title: 'The People Who Keep Your Environment Running',
    desc: 'From the service desk to the cloud team, we place the technical staff that day-to-day IT operations depend on — screened on real skills, not buzzwords, and matched to the tooling and tier structure you actually run.',
    roles: [
      'Help Desk & Service Desk Technicians (Tier 1–3)',
      'Desktop Support & Field Service Technicians',
      'Network Engineers & Administrators (CCNA / CCNP)',
      'Systems & Server Administrators (Windows / Linux)',
      'Cloud & DevOps Engineers (AWS, Azure, GCP)',
      'Cybersecurity Analysts & SOC Operators',
      'Data Engineers, Analysts & BI Developers',
      'Database Administrators & Platform Engineers',
      'IT Project Managers, Coordinators & Scrum Masters',
      'Application, ERP & Unified Communications Support',
    ],
  },
  {
    type: 'dc',
    label: 'Data Center Talent',
    title: 'Boots on the Floor, Around the Clock',
    desc: 'Data center work is physical, scheduled, and unforgiving of no-shows. We maintain a bench of badge-ready technicians who understand raised floor discipline, change control, and what it means to work live in a production hall.',
    roles: [
      'Data Center Technicians (Tier I–III)',
      'Rack & Stack / Deployment Technicians',
      'Structured Cabling Installers (Cat6A, fiber, splicing)',
      'Smart Hands & Remote Hands Technicians',
      'Critical Facilities, Electrical & Mechanical Techs',
      'NOC Technicians & Operators (24/7 shift coverage)',
      'Hardware Break/Fix & Field Service Engineers',
      'Migration, Consolidation & Decommission Crews',
      'Site Managers, Shift Leads & Project Supervisors',
      'Asset, Inventory & Logistics Specialists',
    ],
  },
]

/* ── Process ── */
const steps = [
  { n: '01', title: 'Intake & Role Calibration', desc: 'We meet with your hiring manager — not just HR — to understand the environment, the tooling, the shift pattern, and what separates a good hire from a great one.' },
  { n: '02', title: 'Sourcing & Technical Screening', desc: 'We work our existing bench first, then run targeted outreach. Every candidate is screened against the real technical bar of the role before you ever see a resume.' },
  { n: '03', title: 'Qualified Submittals', desc: 'You receive a short, calibrated slate — typically within 48 to 72 hours — with screening notes, rate expectations, and availability attached to every candidate.' },
  { n: '04', title: 'Interview, Select & Onboard', desc: 'We coordinate scheduling, manage offers, and run background checks, drug screening, badging, and site onboarding so start dates do not slip.' },
  { n: '05', title: 'Deploy, Manage & Redeploy', desc: 'Contractors get regular check-ins and managed timekeeping. When an assignment ends, we redeploy the people you liked — so the knowledge stays in your ecosystem.' },
]

const commitments = [
  { value: '48–72h', label: 'Target first submittal' },
  { value: 'W2', label: 'Employer of record' },
  { value: '24/7', label: 'Shift & on-call coverage' },
  { value: 'Nationwide', label: 'Technician dispatch' },
]

const whyItems = [
  { title: 'We Have Done the Work', desc: 'Our recruiting is backed by engineers who have racked the servers and run the service desk. Candidates get screened on the job, not on the keyword.' },
  { title: 'Compliance Is Ours, Not Yours', desc: 'W2 employment, payroll, taxes, workers’ comp, general liability, background checks, and drug screening are all carried by DIRSOL.' },
  { title: 'A Real Bench', desc: 'We keep an active pipeline of badge-ready data center and IT technicians, so urgent coverage does not have to start from a cold search.' },
  { title: 'Staffing That Can Become Delivery', desc: 'If a role turns out to be a project, we can shift the same engagement to a managed team or a full service scope without you changing vendors.' },
  { title: 'Supplier Diversity Credit', desc: 'Engaging DIRSOL contributes to your supplier diversity goals while meeting the same technical bar as any national staffing vendor.' },
  { title: 'Redeployment, Not Turnover', desc: 'When assignments end we keep good people in the ecosystem and bring them back to you — institutional knowledge stays where it is useful.' },
]

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-3.3-3.3a1 1 0 010-1.4z" clipRule="evenodd" />
  </svg>
)

export default function Staffing() {
  return (
    <div className="staffing-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container page-hero-content animate-fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>&rsaquo;</span>
            <span>Staffing</span>
          </nav>
          <h1>IT &amp; Data Center <span style={{ color: 'var(--gold)' }}>Staffing</span></h1>
          <p>
            DIRSOL was founded as an IT staffing company, and talent is still the core of what we do.
            We put screened, badge-ready technical people on your team &mdash; on contract,
            contract-to-hire, direct hire, or as a fully managed project crew.
          </p>
        </div>
      </section>

      {/* ── Commitments bar ── */}
      <section className="staffing-commitments">
        <div className="container commitments-grid">
          {commitments.map((c) => (
            <div key={c.label} className="commitment-item">
              <strong>{c.value}</strong>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Engagement models ── */}
      <section className="staffing-models">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">How We Engage</div>
            <h2 className="section-heading">Four Ways to <span>Add Talent</span></h2>
            <span className="gold-divider center" />
            <p className="section-subtext staffing-centered">
              Every organization staffs differently. Choose the model that matches your budget cycle,
              your headcount constraints, and how much of the day-to-day management you want to own.
            </p>
          </div>

          <div className="models-grid">
            {models.map((m) => (
              <div key={m.id} id={m.id} className="model-card">
                <span className="model-label">{m.label}</span>
                <h3>{m.title}</h3>
                <p className="model-desc">{m.desc}</p>
                <ul className="model-points">
                  {m.points.map((p) => (
                    <li key={p}><CheckIcon />{p}</li>
                  ))}
                </ul>
                <div className="model-meta">{m.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Talent tracks ── */}
      <section className="staffing-tracks">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Who We Place</div>
            <h2 className="section-heading">Two Specialized <span>Talent Tracks</span></h2>
            <span className="gold-divider center" />
            <p className="section-subtext staffing-centered">
              Our recruiting practice is built around the two environments we know best &mdash;
              corporate IT operations and the data center floor.
            </p>
          </div>

          <div className="tracks-grid">
            {tracks.map((t) => (
              <div key={t.type} className={`track-card ${t.type}`}>
                <div className="track-head">
                  <div className="track-head-icon">
                    {t.type === 'it' ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
                        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
                        <rect x="3" y="3" width="18" height="6" rx="1" /><rect x="3" y="11" width="18" height="6" rx="1" />
                        <path d="M7 6h.01M7 14h.01M12 19v2M8 21h8" />
                      </svg>
                    )}
                  </div>
                  <div className="track-head-text">
                    <span className="track-label">{t.label}</span>
                    <h3>{t.title}</h3>
                  </div>
                </div>
                <div className="track-body">
                  <p className="track-desc">{t.desc}</p>
                  <div className="track-roles-label">Roles We Fill</div>
                  <ul className="track-roles">
                    {t.roles.map((r) => (
                      <li key={r}><CheckIcon />{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="tracks-footnote">
            Need a role that is not on this list? If it lives in an IT department or a data hall,
            we can most likely source it. <Link to="/contact">Tell us what you need.</Link>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="staffing-process">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Our Process</div>
            <h2 className="section-heading">From Intake to <span>Start Date</span></h2>
            <span className="gold-divider center" />
          </div>

          <div className="process-steps">
            {steps.map((s) => (
              <div key={s.n} className="process-step">
                <div className="step-num">{s.n}</div>
                <div className="step-body">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DIRSOL ── */}
      <section className="staffing-why">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 44 }}>
            <div className="section-tag">Why DIRSOL</div>
            <h2 className="section-heading">Staffing Built by <span>Technical People</span></h2>
            <span className="gold-divider center" />
          </div>
          <div className="staffing-why-grid">
            {whyItems.map((w) => (
              <div key={w.title} className="staffing-why-item">
                <div className="why-bullet" />
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
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
              <h2>Tell Us What You Need to Fill</h2>
              <p>Send us the role and we will come back with a calibrated slate &mdash; typically within 48 to 72 hours.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Request Talent<ArrowIcon /></Link>
              <Link to="/careers" className="btn-outline">I&rsquo;m Looking for Work</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
