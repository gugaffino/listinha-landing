import { getTranslations, getLocale } from 'next-intl/server'
import { BrandIcon, BrandTrioIcon } from '../../components/Icon'
import SiteNav from '../../components/SiteNav'
import { Link } from '../../i18n/navigation'

export default async function Home() {
  const t = await getTranslations('home')
  const tc = await getTranslations('common')
  const locale = await getLocale()
  return (
    <>

      <SiteNav />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="hero-brand-trio">
              <BrandTrioIcon width={108} height={44} style={{ color: 'var(--verde-folha)' }} />
            </div>
            <h1>{t.rich('hero.title', { accent: (chunks) => <span className="under">{chunks}</span> })}</h1>
            <p className="hero-sub">{t('hero.sub')}</p>
            <div className="hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                {tc('ctaSmall')}
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#como" className="btn btn-quiet">{t('hero.ctaHow')}</a>
            </div>

            <div className="hero-meta">
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                {t('hero.meta1')}
              </div>
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                {t('hero.meta2')}
              </div>
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                {t('hero.meta3')}
              </div>
            </div>
          </div>

          <div className="phone-wrap" aria-hidden="true">
            <div className="float-card tl reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="5" rx="1"/>
                  <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/>
                  <line x1="10" y1="13" x2="14" y2="13"/>
                </svg>
              </div>
              <div>
                <div className="label">{t('hero.float1Label')}</div>
                <div className="sub">{t('hero.float1Sub')}</div>
              </div>
            </div>

            <div className="phone">
              <div className="phone-screen">
                <div className="ph-top">
                  <div className="ph-title">{t('hero.phoneTitle')}</div>
                  <span className="ph-badge">2/5</span>
                </div>
                <div className="ph-body">
                  <div className="ph-sec">{t('hero.phoneSec1')}</div>
                  <div className="ph-item">
                    <div className="ph-qty">2x</div>
                    <div className="ph-nm">{t('hero.phoneItemAlho')}</div>
                    <div className="ph-ck"></div>
                  </div>
                  <div className="ph-item">
                    <div className="ph-qty">1kg</div>
                    <div className="ph-nm">{t('hero.phoneItemTomate')}</div>
                    <div className="ph-ck"></div>
                  </div>
                  <div className="ph-sec">{t('hero.phoneSec2')}</div>
                  <div className="ph-item done">
                    <div className="ph-qty dim">1x</div>
                    <div className="ph-nm">{t('hero.phoneItemAzeite')}</div>
                    <div className="ph-ck on"></div>
                  </div>
                  <div className="ph-item done">
                    <div className="ph-qty dim">12un</div>
                    <div className="ph-nm">{t('hero.phoneItemOvos')}</div>
                    <div className="ph-ck on"></div>
                  </div>
                  <div className="ph-item">
                    <div className="ph-qty">1kg</div>
                    <div className="ph-nm">{t('hero.phoneItemFrango')}</div>
                    <div className="ph-ck"></div>
                  </div>
                </div>
                <div className="ph-tab">
                  <div className="ph-tab-i on">
                    <div className="pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                      </svg>
                    </div>
                    {t('hero.tabLista')}
                  </div>
                  <div className="ph-tab-i">
                    <div className="pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="5" rx="1"/>
                        <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/>
                        <line x1="10" y1="13" x2="14" y2="13"/>
                      </svg>
                    </div>
                    {t('hero.tabDespensa')}
                  </div>
                  <div className="ph-tab-i">
                    <div className="pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                    </div>
                    {t('hero.tabReceitas')}
                  </div>
                  <div className="ph-tab-i">
                    <div className="pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                        <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
                      </svg>
                    </div>
                    {t('hero.tabPlano')}
                  </div>
                </div>
              </div>
            </div>

            <div className="float-card br reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </div>
              <div>
                <div className="label">{t('hero.float2Label')}</div>
                <div className="sub">{t('hero.float2Sub')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main id="main-content">

      {/* DORES */}
      <section className="section pain">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('pain.eyebrow')}</div>
            <h2>{t.rich('pain.title', { br: () => <br /> })}</h2>
            <p>{t('pain.sub')}</p>
          </div>

          <div className="pain-grid">
            <div className="pain-card reveal">
              <span className="n">01</span>
              <h3>{t('pain.card1Title')}</h3>
              <p>{t.rich('pain.card1Desc', { em: (chunks) => <em>{chunks}</em> })}</p>
            </div>
            <div className="pain-card reveal">
              <span className="n">02</span>
              <h3>{t('pain.card2Title')}</h3>
              <p>{t.rich('pain.card2Desc', { em: (chunks) => <em>{chunks}</em> })}</p>
            </div>
            <div className="pain-card reveal">
              <span className="n">03</span>
              <h3>{t('pain.card3Title')}</h3>
              <p>{t.rich('pain.card3Desc', { em: (chunks) => <em>{chunks}</em> })}</p>
            </div>
          </div>

          <div className="pain-transition reveal">
            <div className="mark">
              <BrandIcon size={20} />
            </div>
            <div>
              <div className="label">{t('pain.transitionLabel')}</div>
              <h3>{t.rich('pain.transitionTitle', { em: (chunks) => <em>{chunks}</em> })}</h3>
            </div>
            <svg className="arrow" aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('features.eyebrow')}</div>
            <h2>{t('features.title')}</h2>
            <p>{t('features.sub')}</p>
          </div>

          <div className="features-grid">

            {/* LISTA */}
            <div className="feat reveal">
              <div className="feat-visual">
                <div className="vm">
                  <div className="vm-hdr"><span>{t('features.lista.vmTitle')}</span><span style={{color:'var(--verde-musgo)'}}>2/5</span></div>
                  <div className="vm-li done"><div className="vm-qty">2x</div><div className="vm-nm">{t('features.lista.vmItem1')}</div><div className="vm-ck on"></div></div>
                  <div className="vm-li done"><div className="vm-qty">12un</div><div className="vm-nm">{t('features.lista.vmItem2')}</div><div className="vm-ck on"></div></div>
                  <div className="vm-li"><div className="vm-qty">1x</div><div className="vm-nm">{t('features.lista.vmItem3')}</div><div className="vm-ck"></div></div>
                  <div className="vm-li"><div className="vm-qty">1kg</div><div className="vm-nm">{t('features.lista.vmItem4')}</div><div className="vm-ck"></div></div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  {t('features.lista.tag')}
                </div>
                <h3>{t('features.lista.title')}</h3>
                <p>{t('features.lista.desc')}</p>
                <ul className="feat-bullets">
                  <li>{t('features.lista.b1')}</li>
                  <li>{t('features.lista.b2')}</li>
                  <li>{t('features.lista.b3')}</li>
                </ul>
              </div>
            </div>

            {/* DESPENSA */}
            <div className="feat reveal">
              <div className="feat-visual">
                <div className="vm">
                  <div className="vm-hdr"><span>{t('features.despensa.vmTitle')}</span><span style={{color:'var(--carvao-3)'}}>{t('features.despensa.vmCount')}</span></div>
                  <div className="vm-chips">
                    <span className="vm-chip">{t('features.despensa.chip1')}</span>
                    <span className="vm-chip">{t('features.despensa.chip2')}</span>
                    <span className="vm-chip">{t('features.despensa.chip3')}</span>
                    <span className="vm-chip out">{t('features.despensa.chip4')}</span>
                    <span className="vm-chip">{t('features.despensa.chip5')}</span>
                    <span className="vm-chip out">{t('features.despensa.chip6')}</span>
                    <span className="vm-chip">{t('features.despensa.chip7')}</span>
                    <span className="vm-chip add">{t('features.despensa.chipAdd')}</span>
                  </div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="5" rx="1"/>
                    <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/>
                    <line x1="10" y1="13" x2="14" y2="13"/>
                  </svg>
                  {t('features.despensa.tag')}
                </div>
                <h3>{t('features.despensa.title')}</h3>
                <p>{t('features.despensa.desc')}</p>
                <ul className="feat-bullets">
                  <li>{t('features.despensa.b1')}</li>
                  <li>{t('features.despensa.b2')}</li>
                  <li>{t('features.despensa.b3')}</li>
                </ul>
              </div>
            </div>

            {/* RECEITAS */}
            <div className="feat reveal">
              <div className="feat-visual">
                <div className="vm">
                  <div className="vm-hdr"><span>{t('features.receitas.vmTitle')}</span><span style={{color:'var(--carvao-3)'}}>{t('features.receitas.vmCount')}</span></div>
                  <div className="vm-recipe"><span>{t('features.receitas.recipe1')}</span><span className="vm-source">INSTAGRAM</span></div>
                  <div className="vm-recipe"><span>{t('features.receitas.recipe2')}</span><span className="vm-source">YOUTUBE</span></div>
                  <div className="vm-recipe"><span>{t('features.receitas.recipe3')}</span><span className="vm-source">MANUAL</span></div>
                  <div className="vm-recipe"><span>{t('features.receitas.recipe4')}</span><span className="vm-source">GOOGLE</span></div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  {t('features.receitas.tag')}
                </div>
                <h3>{t('features.receitas.title')}</h3>
                <p>{t('features.receitas.desc')}</p>
                <ul className="feat-bullets">
                  <li>{t('features.receitas.b1')}</li>
                  <li>{t('features.receitas.b2')}</li>
                  <li>{t('features.receitas.b3')}</li>
                </ul>
              </div>
            </div>

            {/* PLANO */}
            <div className="feat reveal">
              <div className="feat-visual">
                <div className="vm">
                  <div className="vm-hdr"><span>{t('features.plano.vmTitle')}</span><span style={{color:'var(--verde-musgo)'}}>{t('features.plano.vmGenerate')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">SEG</span><span>{t('features.plano.day1')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">TER</span><span>{t('features.plano.day2')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">QUA</span><span className="vm-day-empty">{t('features.plano.day3Empty')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">QUI</span><span>{t('features.plano.day4')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">SEX</span><span>{t('features.plano.day5')}</span></div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
                  </svg>
                  {t('features.plano.tag')}
                </div>
                <h3>{t('features.plano.title')}</h3>
                <p>{t('features.plano.desc')}</p>
                <ul className="feat-bullets">
                  <li>{t('features.plano.b1')}</li>
                  <li>{t('features.plano.b2')}</li>
                  <li>{t('features.plano.b3')}</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section how" id="como">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Como funciona</div>
            <h2>Três passos. Sem onboarding chato.</h2>
            <p>Você não vai precisar de tutorial. Sério.</p>
            <p className="how-prose">
              O Mise conecta os quatro pilares da rotina de cozinha — despensa, receitas,
              cardápio semanal e lista de compras — num app só. Quando você marca um item como
              esgotado na despensa, ele aparece como sugestão na lista. Quando monta o cardápio
              com receitas salvas, os ingredientes que faltam entram direto na lista de compras.
              Uma ação no app resolve a próxima etapa automaticamente — sem abrir outro app,
              sem copiar e colar, sem esquecer.
            </p>
          </div>

          <div className="how-grid">
            <div className="how-step reveal">
              <div className="num">1</div>
              <h3>Monta sua despensa</h3>
              <p>Em 2 minutos, você adiciona os básicos que sempre tem em casa. Pode usar as sugestões do app — não precisa começar do zero.</p>
            </div>
            <div className="how-step reveal">
              <div className="num">2</div>
              <h3>Cria a lista de mercado</h3>
              <p>Digita os itens, escolhe um corredor ou loja, e compartilha pelo zap. Quem for às compras vê tudo organizado.</p>
            </div>
            <div className="how-step reveal">
              <div className="num">3</div>
              <h3>Marca o que comprou</h3>
              <p>No corredor do mercado, vai marcando o que pegou. A despensa atualiza sozinha. Pronto, bora cozinhar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNDADOR */}
      <section className="section" id="founder">
        <div className="container">
          <div className="founder-block reveal">
            <div className="founder-avatar">G</div>
            <div>
              <div className="eyebrow"><span className="dot"></span> Por que o Mise existe</div>
              <p className="founder-quote">
                &ldquo;Eu sempre sofria com algo faltando em casa quando queria cozinhar. E os apps que existiam eram cheios de imagens, planejamento elaborado e função demais — só me faziam perder tempo.<br/><br/>
                <strong>Então fiz o Mise:</strong> um jeito fácil de organizar a despensa pra quem gosta de cozinhar.&rdquo;
              </p>
              <div className="founder-name">Gus <span>· Criador do Mise</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Para quem é</div>
            <h2>Para quem é o Mise</h2>
            <p className="how-prose">
              O Mise foi feito para quem cozinha em casa com alguma frequência e já cansou
              de improvisar. Não é para chef, não é para quem quer montar a cozinha perfeita —
              é para quem quer sair do mercado com o que precisa e entrar na cozinha sabendo
              o que vai fazer.
            </p>
            <p className="how-prose">
              Funciona bem para casais que dividem as compras, famílias que planejam a semana
              juntos, quem mora sozinho e tenta não desperdiçar, repúblicas que precisam de
              lista compartilhada. A lógica é a mesma: saber o que tem em casa, planejar o que
              vai cozinhar e comprar só o que falta — sem voltar ao mercado no meio da semana.
            </p>
            <p className="how-prose">
              Quem usa o Mise há mais de um mês normalmente reduz de três para uma a quantidade
              de viagens semanais ao supermercado. A lista gerada pelo cardápio elimina os itens
              por impulso. A despensa elimina a compra duplicada. O resultado aparece na conta
              do mercado — não num tutorial de organização que você nunca vai terminar.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section blog-preview">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Blog</div>
            <h2>Dicas de quem faz lista de verdade</h2>
          </div>
          <div className="blog-grid reveal">
            <a href="/blog/lista-basica-de-compras" className="blog-card">
              <div className="blog-card-img">
                <img
                  src="https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop"
                  alt="Carrinho de compras em supermercado"
                  width="600" height="360"
                  loading="lazy"
                />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">Lista de compras</span>
                <h3>Lista básica de compras: guia com 80+ itens pra copiar</h3>
                <p>Os 7 grupos essenciais, quanto custa por mês e dicas pra economizar no supermercado.</p>
                <span className="blog-card-link">Ler artigo →</span>
              </div>
            </a>
            <a href="/blog/lista-de-compras-para-casa-nova" className="blog-card">
              <div className="blog-card-img">
                <img
                  src="https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop"
                  alt="Mulher entrando em apartamento novo"
                  width="600" height="360"
                  loading="lazy"
                />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">Casa nova</span>
                <h3>Lista de compras para casa nova: o que não pode faltar</h3>
                <p>60+ itens por cômodo, o que comprar primeiro e estimativa de custo por perfil.</p>
                <span className="blog-card-link">Ler artigo →</span>
              </div>
            </a>
          </div>
          <div className="blog-more reveal">
            <a href="/blog" className="btn btn-ghost">Ver todos os artigos →</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section section-pad-0">
        <div className="container">
          <div className="cta-final reveal">
            <div className="eyebrow eyebrow-centered eyebrow-broto">
              <span className="dot"></span> Comece hoje
            </div>
            <h2>Cozinha organizada, <em>do seu jeito.</em></h2>
            <p>Grátis. Sem cartão de crédito. Sem cadastro longo. Bora?</p>
            <div className="actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-on-dark btn-lg" target="_blank" rel="noopener">
                Comece grátis
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className="footnote">CELULAR · TABLET · DESKTOP · OFFLINE</div>
          </div>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Feito com carinho pra quem gosta de cozinhar.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app →</a>
        </div>
      </footer>
    </>
  )
}
