import NavDropdown from './NavDropdown'

export default function SiteNav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand">
          <div className="brand-mark">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </div>
          <span className="brand-name">Listinha</span>
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
