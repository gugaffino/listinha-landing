import RevealObserver from '../../../components/RevealObserver'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'App de Cardápio Semanal com Lista de Compras Integrada — Mise',
  description: 'Mise é o app para criar cardápio semanal integrado com lista de compras. Você planeja os 7 dias, o app gera a lista automaticamente com o que falta na despensa.',
  openGraph: {
    title: 'App para Criar Cardápio Semanal com Lista de Compras — Mise',
    description: 'Cardápio semanal que gera lista de compras automática. Integrado com a despensa. Grátis.',
    type: 'website',
    url: 'https://www.miseemcasa.com.br/funcionalidades/cardapio-semanal',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como criar um cardápio semanal com lista de compras integrada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Mise você seleciona receitas para cada dia da semana. O app cruza com o que está na despensa e adiciona automaticamente os ingredientes que faltam na lista de compras.',
      },
    },
    {
      '@type': 'Question',
      name: 'O app para criar cardápio semanal é gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, o Mise é 100% gratuito. O plano da semana, a integração com lista de compras e a despensa funcionam sem pagar nada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como o cardápio semanal ajuda a economizar no mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quem planeja o cardápio antes de ir ao mercado compra só o que vai usar — sem itens por impulso. Quem vai sem lista gasta em média 27% a mais por compra.',
      },
    },
    {
      '@type': 'Question',
      name: 'O plano semanal funciona para família?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A lista gerada pelo cardápio é compartilhável pelo WhatsApp. Todo mundo vê o plano da semana e a lista de compras em tempo real no mesmo lugar.',
      },
    },
  ],
}

export default function CardapioSemanalPage() {
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
            <div className="eyebrow"><span className="dot"></span> Plano da semana</div>
            <h1 className="svc-hero-h1">
              App de cardápio semanal que gera<br />
              <span className="svc-hero-accent">lista de compras automática.</span>
            </h1>
            <p className="svc-hero-sub">
              Você monta o cardápio de segunda a domingo. O app cruza com o que tem na despensa
              e adiciona os ingredientes que faltam direto na lista. Acabou a surpresa de sexta-feira.
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
            <h2>Do cardápio à lista em três passos.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>Escolhe as receitas da semana</h4>
              <p>Seleciona o que vai cozinhar de segunda a domingo usando as receitas salvas no app. Pode deixar dias livres sem problema.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>App cruza com a despensa</h4>
              <p>O Mise verifica o que você já tem em casa e separa só os ingredientes que faltam. Você não compra o que não precisa.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>Lista gerada, mercado resolvido</h4>
              <p>Uma ida ao mercado cobre a semana inteira. Sem improvisar na quinta porque faltou um ingrediente da receita de sexta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="svc-feature svc-feature-alt">
        <div className="container">
          <div className="svc-feature-inner svc-feature-flip reveal">

            <div className="svc-feature-text">
              <div className="eyebrow"><span className="dot"></span> O que tem</div>
              <h2>Planejamento que conecta cardápio, despensa e lista.</h2>
              <p>
                Não é só um calendário de refeições. É um sistema que elimina o espaço entre
                "o que vou cozinhar" e "o que preciso comprar".
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
                    <div className="svc-point-desc">Planeja toda a semana antes de ir ao mercado. Uma viagem. Sem improvisos no meio da semana.</div>
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
                    <div className="svc-point-title">Lista gerada automaticamente</div>
                    <div className="svc-point-desc">Os ingredientes que faltam entram na lista de compras sem precisar anotar um por um.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Integrado com a despensa</div>
                    <div className="svc-point-desc">O que você já tem em casa não entra na lista. Só compra o que realmente precisa.</div>
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
                    <div className="svc-point-desc">Você compra o que vai usar — não o que parece útil na hora. O frango fica na geladeira certo prazo.</div>
                  </div>
                </div>
              </div>
            </div>

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

      {/* POR QUE FUNCIONA */}
      <section className="section section-pad-0">
        <div className="container">
          <div className="text-col svc-feature-text reveal">
            <h2>Por que planejar a semana antes de ir ao mercado</h2>
            <p>
              Quem vai ao mercado sem saber o que vai cozinhar na semana compra por instinto.
              Pega o que parece útil, lembra de algo que estava acabando, joga no carrinho o que
              estava em promoção. O resultado é uma geladeira cheia de itens desconexos e a dúvida
              de quarta-feira: o que faço com isso tudo?
            </p>
            <p>
              Famílias que planejam o cardápio semanal antes de ir ao mercado tendem a gastar
              menos nas compras e desperdiçar menos alimento. O cardápio funciona como filtro:
              você compra o que vai usar, não o que parece que vai usar.
            </p>
            <p>
              O Mise conecta o cardápio com a despensa. Você escolhe as receitas da semana,
              o app verifica o que já tem em casa e monta automaticamente a lista dos ingredientes
              que faltam. Uma ação resolve a semana inteira — sem improvisar na quinta, sem
              volta extra ao mercado na sexta.
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
              <div className="svc-faq-q">Como criar cardápio semanal com lista de compras integrada?</div>
              <div className="svc-faq-a">Você seleciona receitas para cada dia da semana. O Mise cruza com o que tem na despensa e adiciona automaticamente os ingredientes que faltam na lista de compras. Uma ação gera a lista da semana inteira.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">O app para criar cardápio semanal é gratuito?</div>
              <div className="svc-faq-a">Sim, 100% gratuito. O plano da semana, a integração com lista e a despensa funcionam sem pagar nada e sem cadastro obrigatório.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Como o cardápio semanal ajuda a economizar no mercado?</div>
              <div className="svc-faq-a">Quem planeja antes de ir ao mercado compra só o que vai usar. Quem vai sem planejamento gasta em média 27% a mais — são itens por impulso e ingredientes que ficam na geladeira até virar lixo.</div>
            </div>
            <div className="svc-faq-item">
              <div className="svc-faq-q">Funciona para família ou casal?</div>
              <div className="svc-faq-a">Sim. A lista gerada pelo cardápio é compartilhável pelo WhatsApp. Todos veem o plano da semana e a lista em tempo real no mesmo lugar — sem grupo de texto bagunçado.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final reveal">
            <h2>Semana planejada.<br /><em>Mercado resolvido.</em></h2>
            <p>Do cardápio à lista em três passos. Grátis.</p>
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
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="currentColor"/>
              <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A"/>
            </svg>
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
