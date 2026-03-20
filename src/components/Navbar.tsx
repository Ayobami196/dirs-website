import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Logo variant={scrolled ? 'dark' : 'light'} size="md" />
        </Link>

        <nav className={`navbar-nav${menuOpen ? ' open' : ''}`}>
          <NavLink to="/"        onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>Home</NavLink>
          <NavLink to="/about"   onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
          <button
            className="btn-primary nav-cta"
            onClick={() => { navigate('/contact'); closeMenu() }}
          >
            Get a Quote
          </button>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}
    </header>
  )
}
