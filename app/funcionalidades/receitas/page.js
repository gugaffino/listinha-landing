import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'App para Anotar Receitas e Cozinhar com o que Tem em Casa — Mise',
  description: 'Mise é o app para anotar receitas e filtrar pelo que você tem em casa. Salva as suas receitas, cruza com a despensa e mostra o que dá pra cozinhar hoje.',
  openGraph: {
    title: 'App para Anotar Receitas e Filtrar pelo que Tem em Casa — Mise',
    description: 'Salva receitas, filtra pelo que tem em casa, gera lista de compras dos ingredientes que faltam. Grátis.',
    type: 'website',
    url: 'https://www.miseemcasa.com.br/funcionalidades/receitas',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como anotar receitas no app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Mise você salva qualquer receita com nome, ingredientes, quantidades e modo de preparo. As receitas ficam disponíveis para o cardápio semanal e para o filtro de "o que dá pra fazer hoje".',
      },
    },
    {
      '@type': 'Question',
      name: 'Como encontrar receitas com o que tem em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O Mise cruza as receitas salvas com o conteúdo da sua despensa. O filtro "com o que tenho" mostra só as receitas cujos ingredientes você já tem — sem precisar passar no mercado antes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como gerar lista de compras a partir de uma receita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Com um toque na receita, os ingredientes que não estão na despensa entram automaticamente na lista de compras. Você não precisa anotar um por um.',
      },
    },
    {
      '@type': 'Question',
      name: 'O app para anotar receitas é gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, o Mise é 100% gratuito. Salvar receitas, filtrar por ingredientes e gerar lista de compras funcionam sem pagar nada.',
      },
    },
  ],
}

export default function ReceitasPage() {
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
            <div className="eyebrow"><span className="dot"></span> Receitas</div>
            <h1 className="svc-hero-h1">
              App para anotar receitas e<br />
              <span className="svc-hero-accent">cozinhar com o que tem em casa.</span>
            </h1>
            <p className="svc-hero-sub">
              Salva as receitas que você já faz. O app filtra pelo que tem na despensa e mostra
              o que dá pra cozinhar hoje — sem precisar passar no mercado antes.
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
            <h2>Da receita ao prato sem improvisos.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>Anota suas receitas</h4>
              <p>Salva as receitas que você já faz com ingredientes, quantidades e modo de preparo. As suas, não as de influencer que você nunca vai fazer.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>Filtra pelo que tem em casa</h4>
              <p>O app cruza as receitas salvas com o conteúdo da despensa e mostra o que dá pra cozinhar hoje — sem ir ao mercado antes.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>Ingredientes que faltam vão pra lista</h4>
              <p>Escolheu uma receita que falta ingrediente? Com um toque, o que está faltando entra direto na lista de compras.</p>
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
              <h2>Receitas que funcionam com o que você tem. Não com o que deveria ter.</h2>
              <p>
                O problema não é falta de receitas na internet. É saber qual delas você consegue
                fazer hoje, com o que tem em casa, sem passar no mercado.
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
                    <div className="svc-point-title">App para anotar qualquer receita</div>
                    <div className="svc-point-desc">Nome, ingredientes com quantidades e modo de preparo. Suas receitas no app, sempre acessíveis.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Receitas com o que tem em casa</div>
                    <div className="svc-point-desc">Cruza com a despensa e mostra só o que você consegue fazer hoje — sem ir ao mercado.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Lista gerada da receita</div>
                    <div className="svc-point-desc">Os ingredientes que faltam entram na lista de compras com um toque. Sem anotar um por um.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Integrado com o cardápio semanal</div>
                    <div className="svc-point-desc">As receitas salvas alimentam o plano da semana. Tudo conectado no mesmo lugar.</div>
                  </div>
                </div>
              </div>
            </div>

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

      {/* POR QUE FUNCIONA */}
      <section className="section section-pad-0">
        <div className="container">
          <div className="text-col svc-feature-text reveal">
            <h2>Cozinhar com o que tem, não com o que devia ter</h2>
            <p>
              A maioria dos apps de receita tem o mesmo problema: eles mostram o que você poderia
              cozinhar em condições ideais, com todos os ingredientes disponíveis. Na vida real,
              você escolhe uma receita, vai até a cozinha e descobre que faltam três ingredientes.
              Aí ou improvisa ou pede entrega.
            </p>
            <p>
              O Mise inverte a lógica. Em vez de mostrar receitas e depois você checar o que
              tem em casa, o app filtra as receitas automaticamente pelo conteúdo da sua despensa.
              Aparecem só as que você consegue fazer agora — sem precisar passar no mercado antes.
            </p>
            <p>
              Para os ingredientes que faltam numa receita que você quer fazer, o app adiciona tudo
              à lista de compras com um toque. Você organiza o cardápio com o que tem, compra só
              o que precisa e entra na cozinha sabendo exatamente o que vai preparar.
            </p>
            <p>
              Manter as receitas que você já faz no app — e não num caderno, numa foto ou numa
              aba do Chrome que você fecha sem salvar — elimina o "vamos fazer aquele frango
              mas eu não lembro os ingredientes". Em dois minutos, os ingredientes que faltam
              estão na lista. Em três toques, a receita está no cardápio da semana. Sem
              depender de sinal pra acessar site de receita no meio do cozimento.
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
              <div className="svc-faq-q">Como anotar receitas no app?</div>
              <div className="svc-faq-a">Você salva qualquer receita com nome, ingredientes, quantidades e modo de preparo. As receitas ficam no app e ficam disponíveis para o cardápio semanal e para o filtro de "o que dá pra fazer hoje".</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como ver receitas com o que tem em casa?</div>
              <div className="svc-faq-a">O Mise cruza as receitas salvas com o conteúdo da sua despensa. O filtro "com o que tenho" mostra só as receitas cujos ingredientes você já tem — sem precisar ir ao mercado antes de cozinhar.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como gerar lista de compras a partir de uma receita?</div>
              <div className="svc-faq-a">Com um toque na receita, os ingredientes que não estão na sua despensa entram automaticamente na lista de compras. Você não precisa copiar um por um.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">O app para anotar receitas é gratuito?</div>
              <div className="svc-faq-a">Sim, 100% gratuito. Salvar receitas, filtrar por ingredientes e gerar lista de compras funcionam sem pagar nada e sem cadastro obrigatório.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final reveal">
            <h2>Suas receitas. <em>Com o que você tem.</em></h2>
            <p>Sem precisar passar no mercado antes de cozinhar.</p>
            <div className="actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-on-dark btn-lg" target="_blank" rel="noopener">
                Abrir o Mise grátis
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
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <span className="footer-copy">© 2024 Mise</span>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app</a>
        </div>
      </footer>
    </>
  )
}
