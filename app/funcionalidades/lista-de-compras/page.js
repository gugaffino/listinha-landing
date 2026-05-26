import RevealObserver from '../../../components/RevealObserver'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'App de Lista de Compras Gratuito e Compartilhada — Mise',
  description: 'Mise é o app gratuito de lista de compras organizada por corredor e compartilhada em tempo real. Funciona offline, sem cadastro obrigatório.',
  openGraph: {
    title: 'App de Lista de Compras Gratuito e Compartilhada — Mise',
    description: 'Lista de compras organizada por corredor, compartilhada pelo WhatsApp, funciona offline. 100% grátis.',
    type: 'website',
    url: 'https://www.miseemcasa.com.br/funcionalidades/lista-de-compras',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O app de lista de compras Mise é gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, 100% gratuito. Lista de compras, compartilhamento e organização por corredor funcionam sem pagar nada e sem cadastro obrigatório.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como compartilhar lista de compras pelo app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Mise você compartilha a lista pelo WhatsApp com um link. Quem receber vê e edita a mesma lista em tempo real — sem instalar nada.',
      },
    },
    {
      '@type': 'Question',
      name: 'A lista de compras funciona sem internet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O Mise é um PWA que funciona offline. A lista fica disponível mesmo dentro do mercado com sinal ruim ou sem conexão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como organizar a lista de compras por corredor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O Mise organiza os itens automaticamente por corredor — hortifruti, carnes, mercearia, limpeza, higiene — na ordem que você encontra no supermercado. Sem precisar voltar atrás.',
      },
    },
  ],
}

export default function ListaDeComprasPage() {
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
            <div className="eyebrow"><span className="dot"></span> Lista de compras</div>
            <h1 className="svc-hero-h1">
              App de lista de compras<br />
              gratuito e <span className="svc-hero-accent">compartilhada.</span>
            </h1>
            <p className="svc-hero-sub">
              Você cria a lista em casa, compartilha pelo zap e vai ao mercado seguindo a ordem dos corredores.
              Sem voltar pro início porque lembrou do papel higiênico na última gôndola.
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
            <h2>Três passos. Nada mais.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h3>Monta a lista em casa</h3>
              <p>Adiciona os itens, o app organiza por corredor automaticamente. Hortifruti, carnes, mercearia — tudo na ordem certa do supermercado.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h3>Compartilha pelo WhatsApp</h3>
              <p>Manda o link pra quem vai ao mercado junto. Os dois veem a mesma lista em tempo real — ninguém compra o que o outro já colocou no carrinho.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h3>Vai ao mercado e marca</h3>
              <p>Funciona offline, com sinal ruim ou sem. Marca cada item conforme coloca no carrinho. Lista zerada na saída do caixa.</p>
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
              <h2>Tudo que uma lista de compras precisa ter.</h2>
              <p>
                Sem funcionalidade desnecessária. Sem cadastro obrigatório antes de poder usar.
                Só o que resolve o problema de sair de casa sem esquecer nada.
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
                    <div className="svc-point-desc">Hortifruti, carnes, mercearia, limpeza e higiene — agrupados na ordem do supermercado.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.8a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">Lista compartilhada em tempo real</div>
                    <div className="svc-point-desc">Link pelo WhatsApp. Dois celulares, uma lista. O que um adiciona aparece pro outro na hora.</div>
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
                    <div className="svc-point-desc">Dentro do mercado, no subsolo, sem sinal. A lista não some.</div>
                  </div>
                </div>
                <div className="svc-point">
                  <div className="svc-point-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="svc-point-body">
                    <div className="svc-point-title">100% gratuito, sem cadastro na largada</div>
                    <div className="svc-point-desc">Começa a usar antes de criar conta. Nenhuma função essencial bloqueada.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="svc-visual">
              <div className="vm">
                <div className="vm-hdr">
                  <span>Lista do mercado</span>
                  <span className="ph-badge">7 itens</span>
                </div>
                <div className="vm-section-lbl">Hortifruti</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Tomate</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">Alho</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">Cebola</span><div className="vm-ck on"></div></div>
                <div className="vm-section-lbl">Mercearia</div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">Arroz 5 kg</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Feijão carioca</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">Macarrão</span><div className="vm-ck on"></div></div>
                <div className="vm-section-lbl">Limpeza</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Detergente</span><div className="vm-ck"></div></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POR QUE FUNCIONA */}
      <section className="section section-pad-0">
        <div className="container">
          <div className="text-col svc-feature-text reveal">
            <h2>Por que a organização por corredor faz diferença</h2>
            <p>
              Ir ao mercado sem lista é improviso com custo. Pesquisas de comportamento de consumo
              mostram que compras sem planejamento tendem a gastar entre 20% e 30% a mais — entre
              itens por impulso e repetições daquilo que você já tinha em casa mas não lembrou.
            </p>
            <p>
              Mas uma lista qualquer resolve só metade do problema. Sem organização por corredor,
              você percorre o supermercado de forma aleatória: vai à seção de limpeza, lembra do
              feijão, volta pra mercearia, passa pelo hortifruti de novo. Além de cansativo,
              aumenta a chance de pegar coisa que não estava na lista.
            </p>
            <p>
              O Mise agrupa os itens na ordem que você encontra no mercado: hortifruti na
              entrada, carnes e proteínas a seguir, mercearia, limpeza e higiene no fundo. Você
              entra, percorre uma vez, marca tudo e sai com o carrinho certo — sem voltar ao
              mesmo corredor duas vezes.
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
          <dl className="svc-faq-list reveal">
            <div className="svc-faq-item">
              <dt className="svc-faq-q">O app de lista de compras é gratuito?</dt>
              <dd className="svc-faq-a">Sim, 100% gratuito. Lista de compras, compartilhamento e organização por corredor funcionam sem pagar nada. Nenhuma funcionalidade essencial está bloqueada atrás de assinatura.</dd>
            </div>
            <div className="svc-faq-item">
              <dt className="svc-faq-q">Como compartilhar a lista de compras?</dt>
              <dd className="svc-faq-a">Você compartilha pelo WhatsApp com um link. Quem receber edita a mesma lista em tempo real — sem precisar instalar nada. Funciona pra casal, família ou qualquer pessoa que divide as compras.</dd>
            </div>
            <div className="svc-faq-item">
              <dt className="svc-faq-q">A lista funciona sem internet dentro do mercado?</dt>
              <dd className="svc-faq-a">Sim. O Mise é um PWA que carrega offline. A lista fica disponível mesmo com sinal ruim ou sem conexão — comum em mercado grande com subsolo.</dd>
            </div>
            <div className="svc-faq-item">
              <dt className="svc-faq-q">Como a lista de compras é organizada por corredor?</dt>
              <dd className="svc-faq-a">O app agrupa os itens automaticamente — hortifruti, carnes, mercearia, limpeza, higiene — na ordem que você encontra no supermercado. Você percorre os corredores uma vez e marca tudo sem precisar voltar.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final reveal">
            <h2>Lista pronta. <em>Bora?</em></h2>
            <p>Sem cadastro na largada. Começa a usar agora.</p>
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
