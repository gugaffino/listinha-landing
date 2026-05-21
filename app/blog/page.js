export const metadata = {
  title: 'Blog — Listinha',
  description: 'Dicas de organização de cozinha, listas de compras e planejamento semanal.',
  alternates: {
    canonical: 'https://listinha-landing-delta.vercel.app/blog',
  },
}

const posts = [
  {
    slug: 'lista-basica-de-compras',
    tag: 'Lista de compras',
    title: 'Lista básica de compras: guia com 80+ itens pra copiar',
    description: 'Os 7 grupos essenciais, quanto custa por mês por perfil de família e dicas pra economizar no supermercado.',
    img: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Carrinho de compras em supermercado',
    date: '2025-03-10',
    dateLabel: 'Mar 2025',
  },
  {
    slug: 'lista-de-compras-para-casa-nova',
    tag: 'Casa nova',
    title: 'Lista de compras para casa nova: o que não pode faltar',
    description: '60+ itens organizados por cômodo, o que comprar no primeiro dia e estimativa de custo por perfil.',
    img: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mulher carregando caixa ao entrar em apartamento novo',
    date: '2025-04-02',
    dateLabel: 'Abr 2025',
  },
]

export default function BlogPage() {
  return (
    <>
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
          <nav className="nav-links">
            <div className="nav-dropdown">
              <a href="/funcionalidades" className="nav-dropdown-trigger">
                Funcionalidades
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </a>
              <div className="nav-dropdown-menu">
                <a href="/funcionalidades/lista-de-compras" className="nav-dropdown-item">
                  <div className="nav-dropdown-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                  </div>
                  <div>
                    <div className="nav-dropdown-label">Lista de compras</div>
                    <div className="nav-dropdown-desc">Organizada por corredor, offline</div>
                  </div>
                </a>
                <a href="/funcionalidades/receitas" className="nav-dropdown-item">
                  <div className="nav-dropdown-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                  </div>
                  <div>
                    <div className="nav-dropdown-label">Receitas</div>
                    <div className="nav-dropdown-desc">Filtra pelo que tem em casa</div>
                  </div>
                </a>
                <a href="/funcionalidades/cardapio-semanal" className="nav-dropdown-item">
                  <div className="nav-dropdown-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h2M14 14h2M8 18h2M14 18h2"/></svg>
                  </div>
                  <div>
                    <div className="nav-dropdown-label">Cardápio semanal</div>
                    <div className="nav-dropdown-desc">Gera lista de compras automática</div>
                  </div>
                </a>
              </div>
            </div>
            <a href="/blog" className="nav-link" style={{color: 'var(--carvao)'}}>Blog</a>
          </nav>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </header>

      <main>
        {/* HERO DO BLOG */}
        <section className="blog-index-hero">
          <div className="container">
            <div className="eyebrow"><span className="dot"></span> Blog</div>
            <h1>Dicas de quem faz lista de verdade</h1>
            <p className="blog-index-sub">Organização de cozinha, supermercado e planejamento semanal — sem frescura.</p>
          </div>
        </section>

        {/* POSTS */}
        <section className="blog-index-posts">
          <div className="container">
            <div className="blog-index-grid">
              {posts.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="blog-index-card">
                  <div className="blog-index-img">
                    <img
                      src={post.img}
                      alt={post.imgAlt}
                      width="800"
                      height="480"
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-index-body">
                    <div className="blog-index-meta">
                      <span className="blog-card-tag">{post.tag}</span>
                      <span className="blog-index-date">{post.dateLabel}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span className="blog-card-link">Ler artigo →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="blog-index-cta">
          <div className="container">
            <div className="blog-index-cta-inner">
              <p>Já que você chegou até aqui — testa o app. É grátis.</p>
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
                Abrir o Listinha →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </div>
          <p className="footer-copy">Feito com carinho pra quem gosta de cozinhar.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app →</a>
        </div>
      </footer>
    </>
  )
}
