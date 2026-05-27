import NavDropdown from './NavDropdown'
import { BrandIcon } from './Icon'

export default function SiteNav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand">
          <div className="brand-mark">
            <BrandIcon size={20} />
          </div>
          <span className="brand-name">Mise</span>
        </a>
        <nav className="nav-links">
          <NavDropdown />
          <a href="/blog" className="nav-link">Blog</a>
        </nav>
        <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
          Comece grátis
          <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </header>
  )
}
