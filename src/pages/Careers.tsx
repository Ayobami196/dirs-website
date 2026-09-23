import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './Careers.css'

const roleOptions = [
  'Help Desk / Service Desk',
  'Desktop & Field Support',
  'Network Engineering',
  'Systems / Server Administration',
  'Cloud & DevOps',
  'Cybersecurity',
  'Data Engineering & Analytics',
  'Data Center Technician',
  'Structured Cabling',
  'Smart Hands / Remote Hands',
  'Critical Facilities (Electrical / Mechanical)',
  'NOC Operations',
  'Project Management / Coordination',
  'Other — I will describe below',
]

const experienceOptions = [
  'Entry level (0–2 years)',
  'Mid level (3–5 years)',
  'Senior (6–10 years)',
  'Expert / Lead (10+ years)',
]

const benefits = [
  {
    title: 'W2 Employment, Not 1099 Roulette',
    desc: 'You work as a DIRSOL employee with real payroll, tax withholding, workers’ compensation, and access to benefits — not as a disposable independent contractor.',
  },
  {
    title: 'Recruiters Who Speak Your Language',
    desc: 'You will not be asked to explain what a patch panel is. Our screening is run alongside engineers who have done the work, so your experience gets read correctly the first time.',
  },
  {
    title: 'Honest Rates, Stated Up Front',
    desc: 'We tell you the pay range, the shift, the location, and the length of the assignment before you interview. No bait-and-switch on the start date.',
  },
  {
    title: 'Work That Builds a Resume',
    desc: 'Data center builds, migrations, refreshes, and enterprise IT environments — assignments that add real, verifiable skills, not just hours.',
  },
  {
    title: 'Redeployment When It Ends',
    desc: 'A contract ending should not mean starting over. We keep good people on the bench and bring you the next assignment before the current one closes out.',
  },
  {
    title: 'A Path to Permanent',
    desc: 'Many of our contract and contract-to-hire placements convert to full-time roles with the client. When that is what you want, we help you get there.',
  },
]

const steps = [
  { n: '01', title: 'Submit Your Profile', desc: 'Fill out the form below or email your resume. Tell us what you do, where you can work, and what you are looking for.' },
  { n: '02', title: 'Screening Conversation', desc: 'A recruiter walks through your background, certifications, shift availability, and rate expectations — usually a 20 to 30 minute call.' },
  { n: '03', title: 'Matched to an Opening', desc: 'When a role fits your profile, we present it to you with the full details before submitting you anywhere. Nothing goes out without your approval.' },
  { n: '04', title: 'Onboarding & Start', desc: 'We handle the client interview scheduling, offer, background check, drug screening, and site badging so your start date holds.' },
]

interface FormState {
  name: string
  email: string
  phone: string
  location: string
  role: string
  experience: string
  resume: string
  message: string
}

const emptyForm: FormState = {
  name: '', email: '', phone: '', location: '',
  role: '', experience: '', resume: '', message: '',
}

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
  </svg>
)

export default function Careers() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim())  e.name  = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.role)         e.role  = 'Please select a role type'
    if (!form.experience)   e.experience = 'Please select your experience level'
    return e
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  return (
    <div className="careers-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container page-hero-content animate-fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>&rsaquo;</span>
            <span>Careers</span>
          </nav>
          <h1>Build Your Career <span style={{ color: 'var(--gold)' }}>Right</span></h1>
          <p>
            We place IT and data center professionals into contract, contract-to-hire, and
            permanent roles across the country. Join the DIRSOL bench and let us find your next assignment.
          </p>
        </div>
      </section>

      {/* ── Why join ── */}
      <section className="careers-why">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Why DIRSOL</div>
            <h2 className="section-heading">What You Get <span>Working With Us</span></h2>
            <span className="gold-divider center" />
            <p className="section-subtext careers-centered">
              Plenty of agencies will submit your resume and disappear. We built ours around
              the way we would want to be treated on an assignment.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-card">
                <div className="benefit-bullet" />
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="careers-process">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">What to Expect</div>
            <h2 className="section-heading">How Placement <span>Works</span></h2>
            <span className="gold-divider center" />
          </div>

          <div className="careers-steps">
            {steps.map((s) => (
              <div key={s.n} className="careers-step">
                <div className="cstep-num">{s.n}</div>
                <div className="cstep-body">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Talent form ── */}
      <section className="careers-form-section" id="apply">
        <div className="container careers-form-grid">

          <div className="careers-form-intro">
            <div className="section-tag">Join the Bench</div>
            <h2 className="section-heading">Submit Your <span>Profile</span></h2>
            <span className="gold-divider" />
            <p>
              We are always building our pipeline of IT and data center talent. Even if we do not
              have an opening that matches today, a profile on file means you are first in line
              when one opens.
            </p>

            <ul className="careers-intro-points">
              <li><CheckIcon />No cost to you, ever</li>
              <li><CheckIcon />Your resume is never submitted without your approval</li>
              <li><CheckIcon />Contract, contract-to-hire and permanent roles</li>
              <li><CheckIcon />Nationwide assignments, including travel work</li>
            </ul>

            <div className="careers-direct">
              <span>Prefer email?</span>
              <a href="mailto:info@dirsol.com?subject=Candidate%20Submission">info@dirsol.com</a>
            </div>
          </div>

          <div className="careers-form-wrap">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3>Profile Received</h3>
                <p>
                  Thanks for reaching out to DO IT RIGHT SOLUTIONS. A recruiter will review your
                  background and get in touch if there is a fit &mdash; and we will keep your
                  profile on file for future assignments.
                </p>
                <button className="btn-primary" onClick={() => { setSubmitted(false); setForm(emptyForm) }}>
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form className="careers-form" onSubmit={handleSubmit} noValidate>
                <h3>Candidate Submission</h3>

                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="c-name">Full Name <span className="req">*</span></label>
                    <input id="c-name" type="text" placeholder="Jane Smith" value={form.name} onChange={set('name')} />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="c-email">Email Address <span className="req">*</span></label>
                    <input id="c-email" type="email" placeholder="jane@email.com" value={form.email} onChange={set('email')} />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="c-phone">Phone Number <span className="req">*</span></label>
                    <input id="c-phone" type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={set('phone')} />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-location">City &amp; State</label>
                    <input id="c-location" type="text" placeholder="Newark, NJ" value={form.location} onChange={set('location')} />
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.role ? 'has-error' : ''}`}>
                    <label htmlFor="c-role">Role Type <span className="req">*</span></label>
                    <select id="c-role" value={form.role} onChange={set('role')}>
                      <option value="">Select a role type...</option>
                      {roleOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    {errors.role && <span className="field-error">{errors.role}</span>}
                  </div>
                  <div className={`form-group ${errors.experience ? 'has-error' : ''}`}>
                    <label htmlFor="c-exp">Experience Level <span className="req">*</span></label>
                    <select id="c-exp" value={form.experience} onChange={set('experience')}>
                      <option value="">Select experience...</option>
                      {experienceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    {errors.experience && <span className="field-error">{errors.experience}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-resume">Resume Link (LinkedIn, Google Drive, Dropbox)</label>
                  <input id="c-resume" type="url" placeholder="https://linkedin.com/in/yourprofile" value={form.resume} onChange={set('resume')} />
                </div>

                <div className="form-group">
                  <label htmlFor="c-message">Certifications, Availability &amp; Anything Else</label>
                  <textarea
                    id="c-message"
                    rows={4}
                    placeholder="CompTIA A+, CCNA, BICSI... available immediately, open to travel, night shift OK..."
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>

                <button type="submit" className="btn-primary form-submit">
                  Submit My Profile
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M10.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-3.3-3.3a1 1 0 010-1.4z" clipRule="evenodd" />
                  </svg>
                </button>

                <p className="careers-form-note">
                  DIRSOL is an equal opportunity employer. We never charge candidates a fee.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-inner">
            <div>
              <h2>Hiring Instead of Job Hunting?</h2>
              <p>If you are the one who needs to fill a role, we can help on that side too.</p>
            </div>
            <div className="cta-actions">
              <Link to="/staffing" className="btn-primary">Our Staffing Services</Link>
              <Link to="/contact" className="btn-outline">Talk to a Recruiter</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
