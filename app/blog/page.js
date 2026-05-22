import NavDropdown from '../../components/NavDropdown'

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
  {
    slug: 'como-organizar-a-despensa',
    tag: 'Organização',
    title: 'Como organizar a despensa: guia prático em 7 passos',
    description: '7 passos pra esvaziar, agrupar, rotular e manter organizado — incluindo como organizar a geladeira por zonas.',
    img: 'https://images.pexels.com/photos/6660254/pexels-photo-6660254.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Despensa organizada com potes transparentes e prateleiras bem distribuídas',
    date: '2026-05-21',
    dateLabel: 'Mai 2026',
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
            <NavDropdown />
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
            <p style={{ color: 'var(--carvao-2)', lineHeight: 1.65, marginTop: '1.25rem', maxWidth: '600px', textWrap: 'pretty' }}>
              Aqui você encontra guias práticos sobre listas de compras, organização de despensa
              e planejamento de refeições. Sem técnicas mirabolantes nem produtos caros — só o
              que funciona pra quem cozinha em casa de verdade. Cada artigo vem com listas pra
              copiar, estimativas de custo e respostas diretas às dúvidas mais comuns.
            </p>
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
