import { getTranslations } from 'next-intl/server'
import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import LanguageSwitcher from '../../../../components/LanguageSwitcher'
import { Link } from '../../../../i18n/navigation'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'svcListaDeCompras.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}/funcionalidades/lista-de-compras`,
    },
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/funcionalidades/lista-de-compras`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/funcionalidades/lista-de-compras',
        en: 'https://www.miseemcasa.com.br/en/funcionalidades/lista-de-compras',
        es: 'https://www.miseemcasa.com.br/es/funcionalidades/lista-de-compras',
        'x-default': 'https://www.miseemcasa.com.br/pt/funcionalidades/lista-de-compras',
      },
    },
  }
}

export default async function ListaDeComprasPage() {
  const t = await getTranslations('svcListaDeCompras')
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
      <section id="main-content" className="svc-hero">
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
              <h3>{t('how.step1Title')}</h3>
              <p>{t('how.step1Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h3>{t('how.step2Title')}</h3>
              <p>{t('how.step2Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h3>{t('how.step3Title')}</h3>
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
                      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
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
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.8a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
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
                      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16"/><path d="M16 6v16"/>
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
                      <polyline points="20 6 9 17 4 12"/>
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
                <div className="vm-section-lbl">{t('feature.vmSec1')}</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">{t('feature.vmItem1')}</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">{t('feature.vmItem2')}</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">{t('feature.vmItem3')}</span><div className="vm-ck on"></div></div>
                <div className="vm-section-lbl">{t('feature.vmSec2')}</div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">{t('feature.vmItem4')}</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">{t('feature.vmItem5')}</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">{t('feature.vmItem6')}</span><div className="vm-ck on"></div></div>
                <div className="vm-section-lbl">{t('feature.vmSec3')}</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">{t('feature.vmItem7')}</span><div className="vm-ck"></div></div>
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
          <dl className="svc-faq-list reveal">
            {[1, 2, 3, 4].map((n) => (
              <div className="svc-faq-item" key={n}>
                <dt className="svc-faq-q">{t(`faq.q${n}`)}</dt>
                <dd className="svc-faq-a">{t(`faq.a${n}`)}</dd>
              </div>
            ))}
          </dl>
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
          <LanguageSwitcher />
        </div>
      </footer>
    </>
  )
}
