import NavDropdown from './NavDropdown'

export default function SiteNav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand">
          <div className="brand-mark">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="currentColor"/>
              <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A"/>
            </svg>
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
