import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand col */}
          <div className="footer-brand">
            <Logo variant="light" size="md" />
            <p className="footer-tagline">
              Reliable IT solutions delivered with precision, integrity, and care — done right, every time.
            </p>
            <div className="wob-badge">
              <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--gold)">
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm.75-9.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 1.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 8.75z"/>
              </svg>
              Women-Owned Business · Est. 2022
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">IT Managed Services</Link></li>
              <li><Link to="/services">Data Solutions</Link></li>
              <li><Link to="/services">Smart Hands as a Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                info@dirsol.com
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                (732) 732-5972
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                United States
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} DO IT RIGHT SOLUTIONS, LLC (DIRS). All rights reserved.</p>
          <p className="footer-wob-note">Proud Women-Owned Small Business</p>
        </div>
      </div>
    </footer>
  )
}
