import { getTranslations, getLocale } from 'next-intl/server'
import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import { Link } from '../../../../i18n/navigation'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'svcDespensa.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}/funcionalidades/despensa`,
    },
  }
}

export default async function DespensaPage() {
  const t = await getTranslations('svcDespensa')
  const tc = await getTranslations('common')
  const locale = await getLocale()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [1, 2, 3, 4].map((n) => ({
      '@type': 'Question',
      name: t(`faq.q${n}`),
      acceptedAnswer: { '@type': 'Answer', text: t(`faq.a${n}`) },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RevealObserver />

      <SiteNav />

      {/* HERO */}
      <section className="svc-hero">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow"><span className="dot"></span> {t('hero.eyebrow')}</div>
            <h1 className="svc-hero-h1">
              {t.rich('hero.title', {
                br: () => <br />,
                accent: (chunks) => <span className="svc-hero-accent">{chunks}</span>,
              })}
            </h1>
            <p className="svc-hero-sub">{t('hero.sub')}</p>
            <div className="svc-hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                {tc('ctaOpenAppFree')}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <Link href="/funcionalidades" className="btn btn-quiet">{tc('allFeatures')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section how">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('how.eyebrow')}</div>
            <h2>{t('how.title')}</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>{t('how.step1Title')}</h4>
              <p>{t('how.step1Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>{t('how.step2Title')}</h4>
              <p>{t('how.step2Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>{t('how.step3Title')}</h4>
              <p>{t('how.step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="svc-feature">
        <div className="container">
          <div className="svc-feature-inner reveal">

            <div className="svc-feature-text">
              <div className="eyebrow"><span className="dot"></span> {t('feature.eyebrow')}</div>
              <h2>{t('feature.title')}</h2>
              <p>{t('feature.desc')}</p>
              <div className="svc-points">
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <rect x="2" y="4" width="20" height="5" rx="1"/>
                      <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9"/>
                      <line x1="10" y1="13" x2="14" y2="13"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">{t('feature.point1Title')}</div>
                    <div className="svc-point-desc">{t('feature.point1Desc')}</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">{t('feature.point2Title')}</div>
                    <div className="svc-point-desc">{t('feature.point2Desc')}</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">{t('feature.point3Title')}</div>
                    <div className="svc-point-desc">{t('feature.point3Desc')}</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">{t('feature.point4Title')}</div>
                    <div className="svc-point-desc">{t('feature.point4Desc')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="svc-visual">
              <div className="vm">
                <div className="vm-hdr">
                  <span>{t('feature.vmTitle')}</span>
                  <span className="ph-badge">{t('feature.vmCount')}</span>
                </div>
                <div className="vm-chips">
                  <span className="vm-chip">{t('feature.chip1')}</span>
                  <span className="vm-chip">{t('feature.chip2')}</span>
                  <span className="vm-chip">{t('feature.chip3')}</span>
                  <span className="vm-chip">{t('feature.chip4')}</span>
                  <span className="vm-chip">{t('feature.chip5')}</span>
                  <span className="vm-chip out">{t('feature.chip6')}</span>
                  <span className="vm-chip out">{t('feature.chip7')}</span>
                  <span className="vm-chip">{t('feature.chip8')}</span>
                </div>
                <div style={{ marginTop: '16px', padding: '12px', background: 'var(--tomate-claro)', borderRadius: '10px', border: '1px solid #F4CFC1' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--tomate)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>{t('feature.outLabel')}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--carvao)' }}>
                      <span>{t('feature.outItem1')}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--verde-folha)', cursor: 'pointer' }}>{t('feature.addToList')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--carvao)' }}>
                      <span>{t('feature.outItem2')}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--verde-folha)', cursor: 'pointer' }}>{t('feature.addToList')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POR QUE FUNCIONA */}
      <section className="section section-pad-0">
        <div className="container">
          <div className="text-col svc-feature-text reveal">
            <h2>{t('why.title')}</h2>
            <p>{t('why.p1')}</p>
            <p>{t('why.p2')}</p>
            <p>
              {t('why.p3')}
              {locale === 'pt' && (
                <>
                  {' '}Veja também como{' '}
                  <a href="/pt/blog/como-organizar-a-despensa">organizar a despensa do zero em 7 passos</a>.
                </>
              )}
            </p>
            <p>{t('why.p4')}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('faq.eyebrow')}</div>
            <h2>{t('faq.title')}</h2>
          </div>
          <div className="svc-faq-list reveal">
            {[1, 2, 3, 4].map((n) => (
              <div className="svc-faq-item" key={n}>
                <div className="svc-faq-q">{t(`faq.q${n}`)}</div>
                <div className="svc-faq-a">{t(`faq.a${n}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
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
