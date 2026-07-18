import { getTranslations } from 'next-intl/server'
import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import { Link } from '../../../../i18n/navigation'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'svcCardapioSemanal.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}/funcionalidades/cardapio-semanal`,
    },
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/funcionalidades/cardapio-semanal`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/funcionalidades/cardapio-semanal',
        en: 'https://www.miseemcasa.com.br/en/funcionalidades/cardapio-semanal',
        es: 'https://www.miseemcasa.com.br/es/funcionalidades/cardapio-semanal',
        'x-default': 'https://www.miseemcasa.com.br/pt/funcionalidades/cardapio-semanal',
      },
    },
  }
}

export default async function CardapioSemanalPage() {
  const t = await getTranslations('svcCardapioSemanal')
  const tc = await getTranslations('common')

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
      <section className="svc-feature svc-feature-alt">
        <div className="container">
          <div className="svc-feature-inner svc-feature-flip reveal">

            <div className="svc-feature-text">
              <div className="eyebrow"><span className="dot"></span> {t('feature.eyebrow')}</div>
              <h2>{t('feature.title')}</h2>
              <p>{t('feature.desc')}</p>
              <div className="svc-points">
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
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
                      <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
                      <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
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
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
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
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
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
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day1Lbl')}</span><span>{t('feature.day1')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day2Lbl')}</span><span>{t('feature.day2')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day3Lbl')}</span><span>{t('feature.day3')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day4Lbl')}</span><span>{t('feature.day4')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day5Lbl')}</span><span>{t('feature.day5')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day6Lbl')}</span><span className="vm-day-empty">{t('feature.day6Empty')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day7Lbl')}</span><span className="vm-day-empty">{t('feature.day7Empty')}</span></div>
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
            <p>{t('why.p3')}</p>
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
