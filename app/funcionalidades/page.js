import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Funcionalidades — Listinha',
  description: 'Lista de compras gratuita e compartilhada, cardápio semanal com lista automática e receitas com o que tem em casa. Tudo conectado no mesmo app.',
  openGraph: {
    title: 'Funcionalidades — Listinha',
    description: 'Lista de compras, cardápio semanal e receitas. Três coisas que funcionam juntas. Grátis.',
    type: 'website',
    url: 'https://listinha-landing-delta.vercel.app/funcionalidades',
  },
}

const features = [
  {
    href: '/funcionalidades/lista-de-compras',
    eyebrow: 'Lista de compras',
    title: 'Organizada por corredor. Compartilhada. Grátis.',
    desc: 'Cria a lista em casa, compartilha pelo WhatsApp e vai ao mercado na ordem dos corredores. Funciona offline.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    ),
    tags: ['100% grátis', 'Compartilhada', 'Offline'],
  },
  {
    href: '/funcionalidades/cardapio-semanal',
    eyebrow: 'Plano da semana',
    title: 'Cardápio semanal que gera lista de compras automática.',
    desc: 'Monta o cardápio de segunda a domingo. O app cruza com a despensa e joga os ingredientes que faltam direto na lista.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
      </svg>
    ),
    tags: ['7 dias', 'Lista automática', 'Menos desperdício'],
  },
  {
    href: '/funcionalidades/receitas',
    eyebrow: 'Receitas',
    title: 'Suas receitas. Filtradas pelo que você tem em casa.',
    desc: 'Salva as receitas que já faz. O app mostra o que dá pra cozinhar hoje — sem passar no mercado antes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    tags: ['Anotar receitas', 'Filtro por ingredientes', 'Lista da receita'],
  },
]

export default function FuncionalidadesPage() {
  return (
    <>
      <RevealObserver />

      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </a>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="svc-hero">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow"><span className="dot"></span> Funcionalidades</div>
            <h1 className="svc-hero-h1">
              Três coisas que funcionam juntas.<br />
              <span className="svc-hero-accent">Grátis.</span>
            </h1>
            <p className="svc-hero-sub">
              Lista de compras, cardápio semanal e receitas — conectados no mesmo app.
              Cada um resolve um pedaço do problema. Juntos, resolvem a semana.
            </p>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="section">
        <div className="container">
          <div className="svc-hub-grid reveal">
            {features.map((f) => (
              <a key={f.href} href={f.href} className="svc-hub-card">
                <div className="svc-hub-icon">{f.icon}</div>
                <div className="svc-hub-eyebrow">{f.eyebrow}</div>
                <h2 className="svc-hub-title">{f.title}</h2>
                <p className="svc-hub-desc">{f.desc}</p>
                <div className="svc-hub-tags">
                  {f.tags.map((t) => (
                    <span key={t} className="svc-hub-tag">{t}</span>
                  ))}
                </div>
                <div className="svc-hub-link">
                  Ver funcionalidade
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-final reveal">
            <h2>Começa pela lista.<br /><em>O resto cai no lugar.</em></h2>
            <p>Grátis, sem cadastro na largada, funciona offline.</p>
            <div className="actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-on-dark btn-lg" target="_blank" rel="noopener">
                Abrir o Listinha grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <p className="footnote">sem cadastro · sem cartão · funciona offline</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </a>
          <span className="footer-copy">© 2024 Listinha</span>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app</a>
        </div>
      </footer>
    </>
  )
}
