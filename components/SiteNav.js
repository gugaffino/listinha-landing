import { getTranslations } from 'next-intl/server'
import NavDropdown from './NavDropdown'
import LanguageSwitcher from './LanguageSwitcher'
import { BrandIcon } from './Icon'
import { Link } from '../i18n/navigation'

export default async function SiteNav() {
  const t = await getTranslations('nav')
  const tc = await getTranslations('common')
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">
            <BrandIcon size={20} />
          </div>
          <span className="brand-name">Mise</span>
        </Link>
        <nav className="nav-links">
          <NavDropdown />
          <Link href="/blog" className="nav-link">{t('blog')}</Link>
        </nav>
        <LanguageSwitcher />
        <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
          {tc('ctaSmall')}
          <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </header>
  )
}
