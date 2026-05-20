import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'App de Lista de Compras Gratuito, Cardápio Semanal e Receitas — Listinha',
  description: 'Listinha é o app gratuito de lista de compras compartilhada, cardápio semanal e receitas com o que tem em casa. Três coisas que funcionam juntas. Sem cadastro chato.',
  openGraph: {
    title: 'App de Lista de Compras Gratuito, Cardápio e Receitas — Listinha',
    description: 'Lista de compras compartilhada, cardápio semanal e receitas com o que tem em casa. 100% grátis.',
    type: 'website',
    url: 'https://listinha-landing-delta.vercel.app/funcionalidades',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O app de lista de compras Listinha é gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, 100% gratuito. Lista de compras, cardápio semanal e receitas funcionam sem pagar nada e sem cadastro obrigatório. Nenhuma funcionalidade essencial está bloqueada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como compartilhar lista de compras pelo app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Listinha você compartilha a lista pelo WhatsApp com um link. Quem receber edita a mesma lista em tempo real — sem instalar nada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como criar cardápio semanal com lista de compras integrada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Você monta o cardápio de segunda a domingo escolhendo receitas para cada dia. O Listinha cruza com o que tem na despensa e adiciona automaticamente os ingredientes que faltam na lista de compras.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como usar um app para criar cardápio semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Listinha você planeja os 7 dias escolhendo receitas salvas para cada refeição. O app gera a lista de compras automaticamente com base no cardápio e no que já está na despensa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como anotar receitas no app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Listinha você salva qualquer receita com nome, ingredientes e modo de preparo. As receitas ficam disponíveis para o cardápio semanal e para o filtro de "o que dá pra fazer hoje".',
      },
    },
    {
      '@type': 'Question',
      name: 'Como encontrar receitas com o que tem em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O Listinha cruza as receitas salvas com o conteúdo da despensa. O filtro "com o que tenho" mostra só as receitas que você consegue fazer hoje — sem ir ao mercado antes.',
      },
    },
  ],
}

export default function FuncionalidadesPage() {
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
            <div className="eyebrow"><span className="dot"></span> Funcionalidades</div>
            <h1 className="svc-hero-h1">
              App de lista de compras,<br />
              cardápio semanal e receitas.<br />
              <span className="svc-hero-accent">Gratuito.</span>
            </h1>
            <p className="svc-hero-sub">
              Três coisas que funcionam juntas. Você monta a lista, planeja a semana e sabe exatamente
              o que tem em casa — sem improvisar no mercado.
            </p>
            <div className="svc-hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Abrir o app
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#lista" className="btn btn-ghost">Ver funcionalidades ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE 1: Lista de compras ── */}
      <section className="svc-feature" id="lista">
        <div className="container">
          <div className="svc-feature-inner reveal">

            <div className="svc-feature-text">
              <div className="eyebrow"><span className="dot"></span> Lista de compras</div>
              <h2>Lista organizada por corredor. Compartilha pelo zap. 100% grátis.</h2>
              <p>
                Você cria a lista em casa, vai ao mercado e segue a ordem dos corredores.
                Sem voltar pro início porque lembrou do papel higiênico na última gôndola.
              </p>
              <div className="svc-points">
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Organizada por corredor</div>
                    <div className="svc-point-desc">Hortifruti, carnes, mercearia, limpeza — na mesma ordem que você encontra no mercado.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.8a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Lista de compras compartilhada</div>
                    <div className="svc-point-desc">Manda o link pelo WhatsApp. Dois celulares, uma lista — o que um adicionar aparece pro outro na hora.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16"/><path d="M16 6v16"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Funciona offline</div>
                    <div className="svc-point-desc">Dentro do mercado, com sinal ruim ou sem. A lista tá lá.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">App de lista de compras gratuito</div>
                    <div className="svc-point-desc">Nenhuma função atrás de assinatura. Grátis de verdade.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual mockup: lista por corredor */}
            <div className="svc-visual">
              <div className="vm">
                <div className="vm-hdr">
                  <span>Lista do mercado</span>
                  <span className="ph-badge">7 itens</span>
                </div>
                <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--carvao-3)', padding: '8px 0 4px' }}>Hortifruti</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Tomate</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">Alho</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">Cebola</span><div className="vm-ck on"></div></div>
                <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--carvao-3)', padding: '12px 0 4px' }}>Mercearia</div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">Arroz 5 kg</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Feijão carioca</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">Macarrão</span><div className="vm-ck on"></div></div>
                <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--carvao-3)', padding: '12px 0 4px' }}>Limpeza</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Detergente</span><div className="vm-ck"></div></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURE 2: Plano da semana ── */}
      <section className="svc-feature svc-feature-alt" id="cardapio">
        <div className="container">
          <div className="svc-feature-inner svc-feature-flip reveal">

            <div className="svc-feature-text">
              <div className="eyebrow"><span className="dot"></span> Plano da semana</div>
              <h2>Cardápio semanal que vira lista de compras automática.</h2>
              <p>
                Você monta o cardápio de segunda a domingo. O app cruza com o que tem na despensa
                e joga os ingredientes que faltam direto na lista. Acabou a surpresa de sexta-feira.
              </p>
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
                    <div className="svc-point-title">7 dias de uma vez</div>
                    <div className="svc-point-desc">Planeja toda a semana antes de ir ao mercado. Uma viagem, sem improvisos na quinta.</div>
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
                    <div className="svc-point-title">Ingredientes vão pra lista sozinhos</div>
                    <div className="svc-point-desc">O que está no cardápio e não está na despensa aparece automaticamente na lista de compras.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Menos desperdício</div>
                    <div className="svc-point-desc">Você só compra o que vai usar. Sem ingrediente esquecido na geladeira até virar lixo.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual mockup: semana */}
            <div className="svc-visual">
              <div className="vm">
                <div className="vm-hdr">
                  <span>Plano da semana</span>
                  <span className="ph-badge">5 refeições</span>
                </div>
                <div className="vm-day"><span className="vm-day-lbl">SEG</span><span>Frango grelhado com arroz</span></div>
                <div className="vm-day"><span className="vm-day-lbl">TER</span><span>Macarrão ao sugo</span></div>
                <div className="vm-day"><span className="vm-day-lbl">QUA</span><span>Omelete de legumes</span></div>
                <div className="vm-day"><span className="vm-day-lbl">QUI</span><span>Feijão tropeiro</span></div>
                <div className="vm-day"><span className="vm-day-lbl">SEX</span><span>Peixe assado</span></div>
                <div className="vm-day"><span className="vm-day-lbl">SAB</span><span className="vm-day-empty">— livre —</span></div>
                <div className="vm-day"><span className="vm-day-lbl">DOM</span><span className="vm-day-empty">— livre —</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURE 3: Receitas ── */}
      <section className="svc-feature" id="receitas">
        <div className="container">
          <div className="svc-feature-inner reveal">

            <div className="svc-feature-text">
              <div className="eyebrow"><span className="dot"></span> Receitas</div>
              <h2>Receitas com o que você tem em casa. Sem precisar ir ao mercado antes.</h2>
              <p>
                Salva as receitas que você já faz. O app filtra pelo que tem na despensa e mostra
                o que dá pra cozinhar hoje — sem improvisos de última hora.
              </p>
              <div className="svc-points">
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">App para anotar receitas</div>
                    <div className="svc-point-desc">As receitas que você já faz na prática — com ingredientes, quantidades e modo de preparo.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Filtra pelo que tem em casa</div>
                    <div className="svc-point-desc">Cruza com a despensa e mostra só o que você consegue cozinhar hoje, sem ir ao mercado.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Ingredientes que faltam vão pra lista</div>
                    <div className="svc-point-desc">Com um toque, o que está faltando na receita entra direto na lista de compras.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual mockup: receitas */}
            <div className="svc-visual">
              <div className="vm">
                <div className="vm-hdr">
                  <span>Minhas receitas</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, background: 'var(--verde-claro)', color: 'var(--verde-musgo)', padding: '3px 9px', borderRadius: '999px' }}>Com o que tenho</span>
                </div>
                <div className="vm-recipe">
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Frango xadrez</div>
                    <div className="vm-chips">
                      <span className="vm-chip">Frango</span>
                      <span className="vm-chip">Pimentão</span>
                      <span className="vm-chip">Shoyu</span>
                      <span className="vm-chip out">Castanha</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--verde-folha)', whiteSpace: 'nowrap', paddingLeft: 12 }}>+ lista</div>
                </div>
                <div className="vm-recipe">
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Omelete de legumes</div>
                    <div className="vm-chips">
                      <span className="vm-chip">Ovos</span>
                      <span className="vm-chip">Cebola</span>
                      <span className="vm-chip">Tomate</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--verde-folha)', whiteSpace: 'nowrap', paddingLeft: 12 }}>+ lista</div>
                </div>
                <div className="vm-recipe" style={{ opacity: 0.45 }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Risoto de cogumelos</div>
                    <div className="vm-chips">
                      <span className="vm-chip out">Cogumelos</span>
                      <span className="vm-chip out">Vinho branco</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
              <div className="svc-faq-q">O app de lista de compras é gratuito?</div>
              <div className="svc-faq-a">Sim, 100% gratuito. Lista de compras, cardápio semanal e receitas funcionam sem pagar nada e sem cadastro obrigatório. Nenhuma funcionalidade essencial está bloqueada.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como compartilhar lista de compras pelo app?</div>
              <div className="svc-faq-a">Você compartilha pelo WhatsApp com um link. Quem receber edita a mesma lista em tempo real — sem instalar nada. Funciona pra casais, família, ou qualquer pessoa que divide as compras.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como criar um cardápio semanal com lista de compras integrada?</div>
              <div className="svc-faq-a">Você monta o cardápio de segunda a domingo escolhendo receitas para cada dia. O Listinha cruza com o que tem na despensa e adiciona os ingredientes que faltam automaticamente na lista de compras.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como usar um app para criar cardápio semanal?</div>
              <div className="svc-faq-a">No Listinha você planeja os 7 dias selecionando receitas salvas para cada refeição. O app gera a lista de compras com base no cardápio e no que já está na despensa — você vai ao mercado uma vez e compra só o que precisa.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como anotar minhas receitas no app?</div>
              <div className="svc-faq-a">No Listinha você salva qualquer receita com nome, ingredientes e modo de preparo. As receitas ficam disponíveis para o cardápio semanal e para o filtro de "o que dá pra fazer com o que tenho em casa".</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como ver receitas com o que tem em casa?</div>
              <div className="svc-faq-a">O Listinha cruza as receitas salvas com o conteúdo da sua despensa. O filtro "com o que tenho" mostra só as receitas que você consegue fazer hoje — sem precisar passar no mercado antes.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="section">
        <div className="container">
          <div className="cta-final reveal">
            <h2>Três coisas que funcionam juntas.<br /><em>Grátis.</em></h2>
            <p>Começa pela lista. O resto cai no lugar.</p>
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
