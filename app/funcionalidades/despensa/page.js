import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'App de Controle de Despensa — Listinha',
  description: 'Listinha é o app de controle de despensa que marca o que tá acabando e gera lista de compras automática. Monta sua despensa ideal uma vez e nunca mais esquece o que falta.',
  openGraph: {
    title: 'App de Controle de Despensa — Listinha',
    description: 'Monta sua despensa, marca o que acabou e gera a lista de compras automaticamente. Grátis.',
    type: 'website',
    url: 'https://listinha-landing-delta.vercel.app/funcionalidades/despensa',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como o app controla o que tem na despensa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Você monta a despensa ideal uma vez — com os itens que sempre tem em casa. Quando algo acaba ou está acabando, marca no app. Na hora de fazer a lista de compras, o Listinha já sabe o que falta.',
      },
    },
    {
      '@type': 'Question',
      name: 'A despensa se conecta com a lista de compras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O que está marcado como esgotado ou acabando na despensa aparece como sugestão na lista de compras com um toque. Sem precisar lembrar de nada.',
      },
    },
    {
      '@type': 'Question',
      name: 'A despensa funciona com as receitas também?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O app cruza a despensa com as receitas salvas e mostra o que dá pra cozinhar hoje sem passar no mercado. Os ingredientes que faltam vão direto pra lista.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso montar a despensa do zero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O Listinha sugere os itens mais comuns — arroz, feijão, azeite, alho — pra você adicionar com um toque. Em dois minutos a despensa já tem o básico da sua casa.',
      },
    },
  ],
}

export default function DespensaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            <div className="eyebrow"><span className="dot"></span> Despensa</div>
            <h1 className="svc-hero-h1">
              Sempre tenha o que<br />
              precisa pra <span className="svc-hero-accent">cozinhar.</span>
            </h1>
            <p className="svc-hero-sub">
              Monta sua despensa ideal uma vez. O que acabou fica marcado —
              quando for fazer a lista, você já sabe o que comprar sem precisar abrir a geladeira.
            </p>
            <div className="svc-hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Abrir o app grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/funcionalidades" className="btn btn-quiet">← Todas as funcionalidades</a>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section how">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Como funciona</div>
            <h2>Monta uma vez. Usa pra sempre.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>Monta a despensa ideal</h4>
              <p>Adiciona os itens que sempre tem em casa — o app sugere os básicos. Arroz, feijão, azeite, alho, cebola. Em dois minutos, sua despensa está pronta.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>Marca o que acabou</h4>
              <p>Usou o último azeite? Um toque e tá marcado como esgotado. Tá quase acabando? Marca como "acabando". O app lembra por você.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>Gera a lista automaticamente</h4>
              <p>Na hora de ir ao mercado, o que está esgotado ou acabando vira sugestão de lista com um toque. Sem abrir a geladeira, sem esquecer nada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="svc-feature">
        <div className="container">
          <div className="svc-feature-inner reveal">

            <div className="svc-feature-text">
              <div className="eyebrow"><span className="dot"></span> O que tem</div>
              <h2>Despensa conectada com lista e receitas.</h2>
              <p>
                Não é só um inventário. A despensa do Listinha fala com a lista de compras e com as receitas —
                pra você saber o que falta comprar e o que já dá pra cozinhar hoje.
              </p>
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
                    <div className="svc-point-title">Sugestões pra montar a despensa completa</div>
                    <div className="svc-point-desc">O app sugere os itens mais comuns pra você adicionar com um toque — sem começar do zero.</div>
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
                    <div className="svc-point-title">Adiciona à lista num toque</div>
                    <div className="svc-point-desc">O que está esgotado vai direto pra lista de compras. Sem copiar, sem digitar de novo.</div>
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
                    <div className="svc-point-title">Cruza com suas receitas</div>
                    <div className="svc-point-desc">O app mostra quais receitas dá pra fazer com o que tem na despensa — sem ir ao mercado primeiro.</div>
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
                    <div className="svc-point-title">Marca o que tá acabando</div>
                    <div className="svc-point-desc">Não precisa esperar acabar pra lembrar. Marca como "acabando" e o app já inclui nas próximas compras.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="svc-visual">
              <div className="vm">
                <div className="vm-hdr">
                  <span>Minha despensa</span>
                  <span className="ph-badge">8 itens</span>
                </div>
                <div className="vm-chips">
                  <span className="vm-chip">Alho</span>
                  <span className="vm-chip">Cebola</span>
                  <span className="vm-chip">Azeite</span>
                  <span className="vm-chip">Arroz</span>
                  <span className="vm-chip">Feijão</span>
                  <span className="vm-chip out">Sal</span>
                  <span className="vm-chip out">Leite</span>
                  <span className="vm-chip">Ovos</span>
                </div>
                <div style={{ marginTop: '16px', padding: '12px', background: 'var(--tomate-claro)', borderRadius: '10px', border: '1px solid #F4CFC1' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--tomate)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Acabou</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--carvao)' }}>
                      <span>Sal</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--verde-folha)', cursor: 'pointer' }}>+ lista</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--carvao)' }}>
                      <span>Leite</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--verde-folha)', cursor: 'pointer' }}>+ lista</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POR QUE FUNCIONA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '680px' }}>
            <h2>O custo de não saber o que tem em casa</h2>
            <p style={{ color: 'var(--carvao-2)', lineHeight: 1.65, marginBottom: '1rem', textWrap: 'pretty' }}>
              A despensa desorganizada não é só questão estética — é financeira. Quando você não
              sabe o que tem em casa, compra duas vezes o mesmo produto, deixa itens vencerem
              no fundo da prateleira e ainda chega ao mercado sem saber o que realmente falta.
            </p>
            <p style={{ color: 'var(--carvao-2)', lineHeight: 1.65, marginBottom: '1rem', textWrap: 'pretty' }}>
              Levantamentos sobre desperdício alimentar mostram que o Brasil descarta cerca de 41 kg
              de alimento por pessoa por ano — e boa parte desse desperdício começa na compra
              errada: você compra o que não precisa porque não sabia que ainda tinha.
            </p>
            <p style={{ color: 'var(--carvao-2)', lineHeight: 1.65, textWrap: 'pretty' }}>
              Com a despensa do Listinha você monta sua lista ideal de estoque uma vez. Depois,
              basta marcar o que acabou no momento em que você percebe — não no dia do mercado,
              quando a memória já falhou. Na hora de ir às compras, a lista já está pré-preenchida
              com o que falta, sem precisar abrir cada armário pra conferir.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Perguntas diretas</div>
            <h2>O que as pessoas perguntam</h2>
          </div>
          <div className="svc-faq-list reveal">
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como o app controla o que tem na despensa?</div>
              <div className="svc-faq-a">Você monta a despensa ideal uma vez — com os itens que sempre tem em casa. Quando algo acaba ou está acabando, marca no app. Na hora de fazer a lista de compras, o Listinha já sabe o que falta.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">A despensa se conecta com a lista de compras?</div>
              <div className="svc-faq-a">Sim. O que está marcado como esgotado ou acabando na despensa aparece como sugestão na lista de compras com um toque. Sem precisar lembrar de nada.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">A despensa funciona com as receitas também?</div>
              <div className="svc-faq-a">Sim. O app cruza a despensa com as receitas salvas e mostra o que dá pra cozinhar hoje sem passar no mercado. Os ingredientes que faltam vão direto pra lista.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Preciso montar a despensa do zero?</div>
              <div className="svc-faq-a">Não. O Listinha sugere os itens mais comuns — arroz, feijão, azeite, alho — pra você adicionar com um toque. Em dois minutos a despensa já tem o básico da sua casa.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final reveal">
            <h2>Despensa pronta. <em>Bora?</em></h2>
            <p>Sem cadastro na largada. Começa a usar agora.</p>
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
