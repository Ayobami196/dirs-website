import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const serviceOptions = [
  'IT Managed Services',
  'Data Solutions',
  'Smart Hands as a Service',
  'General Inquiry',
  'Partnership Opportunity',
]

interface FormState {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.service)        e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Message is required'
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
    <div className="contact-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container page-hero-content animate-fade-up">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Contact</span>
          </nav>
          <h1>Let's <span style={{ color: 'var(--gold)' }}>Connect</span></h1>
          <p>Ready to get started? Reach out and let's talk about how DIRSOL can solve your IT challenges.</p>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* Info col */}
          <div className="contact-info">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-heading">
              We'd Love to <span>Hear From You</span>
            </h2>
            <span className="gold-divider" />
            <p className="contact-intro">
              Whether you're ready to get started, have a quick question, or just
              want to learn more about DIRSOL — we're here for it. Fill out the form
              and a member of our team will be in touch within one business day.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="cm-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:info@dirsol.com">info@dirsol.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="cm-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:7327325972">(732) 732-5972</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="cm-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4>Response Time</h4>
                  <span>Within 1 business day</span>
                </div>
              </div>
            </div>

            <div className="contact-wob">
              <svg viewBox="0 0 24 24" fill="var(--gold)" width="20" height="20">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
              <span>Women-Owned Business · Founded 2022</span>
            </div>
          </div>

          {/* Form col */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out to DO IT RIGHT SOLUTIONS. A member of our team
                  will be in touch with you within one business day.
                </p>
                <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', company:'', phone:'', service:'', message:'' }) }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3>Send Us a Message</h3>

                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">Full Name <span className="req">*</span></label>
                    <input id="name" type="text" placeholder="Jane Smith" value={form.name} onChange={set('name')} />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">Email Address <span className="req">*</span></label>
                    <input id="email" type="email" placeholder="jane@company.com" value={form.email} onChange={set('email')} />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input id="company" type="text" placeholder="Acme Corp" value={form.company} onChange={set('company')} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={set('phone')} />
                  </div>
                </div>

                <div className={`form-group ${errors.service ? 'has-error' : ''}`}>
                  <label htmlFor="service">Service of Interest <span className="req">*</span></label>
                  <select id="service" value={form.service} onChange={set('service')}>
                    <option value="">Select a service...</option>
                    {serviceOptions.map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {errors.service && <span className="field-error">{errors.service}</span>}
                </div>

                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">How Can We Help? <span className="req">*</span></label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your IT needs, current challenges, or any questions you have..."
                    value={form.message}
                    onChange={set('message')}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary form-submit">
                  Send Message
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
