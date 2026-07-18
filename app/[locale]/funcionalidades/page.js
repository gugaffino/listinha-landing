import { getTranslations } from 'next-intl/server'
import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon, BrandTrioIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'
import { Link } from '../../../i18n/navigation'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'funcionalidadesHub.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}/funcionalidades`,
    },
  }
}

const ICONS = {
  lista: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
    </svg>
  ),
  despensa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="2" y="4" width="20" height="5" rx="1"/>
      <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9"/>
      <line x1="10" y1="13" x2="14" y2="13"/>
    </svg>
  ),
  cardapio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
    </svg>
  ),
  receitas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
    </svg>
  ),
}

const FEATURE_DEFS = [
  { href: '/funcionalidades/lista-de-compras', key: 'lista' },
  { href: '/funcionalidades/despensa', key: 'despensa' },
  { href: '/funcionalidades/cardapio-semanal', key: 'cardapio' },
  { href: '/funcionalidades/receitas', key: 'receitas' },
]

export default async function FuncionalidadesPage() {
  const t = await getTranslations('funcionalidadesHub')
  const tc = await getTranslations('common')

  const features = FEATURE_DEFS.map((d) => ({
    href: d.href,
    icon: ICONS[d.key],
    eyebrow: t(`cards.${d.key}.eyebrow`),
    title: t(`cards.${d.key}.title`),
    desc: t(`cards.${d.key}.desc`),
    tags: [t(`cards.${d.key}.tag1`), t(`cards.${d.key}.tag2`), t(`cards.${d.key}.tag3`)],
  }))

  return (
    <>
      <RevealObserver />

      <SiteNav />

      {/* HERO */}
      <section id="main-content" className="svc-hero">
        <div className="container">
          <div className="reveal">
            <div style={{ marginBottom: 20 }}>
              <BrandTrioIcon width={108} height={44} style={{ color: 'var(--verde-folha)' }} />
            </div>
            <div className="eyebrow"><span className="dot"></span> {t('hero.eyebrow')}</div>
            <h1 className="svc-hero-h1">
              {t.rich('hero.title', {
                br: () => <br />,
                accent: (chunks) => <span className="svc-hero-accent">{chunks}</span>,
              })}
            </h1>
            <p className="svc-hero-sub">{t('hero.sub')}</p>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="section">
        <div className="container">
          <div className="svc-hub-grid reveal">
            {features.map((f) => (
              <Link key={f.href} href={f.href} className="svc-hub-card">
                <div className="svc-hub-icon">{f.icon}</div>
                <div className="svc-hub-eyebrow">{f.eyebrow}</div>
                <h2 className="svc-hub-title">{f.title}</h2>
                <p className="svc-hub-desc">{f.desc}</p>
                <div className="svc-hub-tags">
                  {f.tags.map((tag) => (
                    <span key={tag} className="svc-hub-tag">{tag}</span>
                  ))}
                </div>
                <div className="svc-hub-link">
                  {t('cards.cardLink')}
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMO TUDO SE CONECTA */}
      <section className="section section-pad-0">
        <div className="container">
          <div className="text-col svc-feature-text reveal">
            <h2>{t('connect.title')}</h2>
            <p>{t('connect.p1')}</p>
            <p>{t('connect.p2')}</p>
            <p>{t('connect.p3')}</p>
            <p>{t('connect.p4')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-pad-0">
        <div className="container">
          <div className="cta-final reveal">
            <h2>{t.rich('cta.title', { br: () => <br />, em: (chunks) => <em>{chunks}</em> })}</h2>
            <p>{t('cta.sub')}</p>
            <div className="actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-on-dark btn-lg" target="_blank" rel="noopener">
                {tc('ctaOpenMiseFree')}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <p className="footnote">{tc('footnoteNoSignup')}</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </Link>
          <span className="footer-copy">{tc('footerCopyright')}</span>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">{tc('openApp')}</a>
        </div>
      </footer>
    </>
  )
}
