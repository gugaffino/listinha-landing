import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é cavala: o peixe com mais ômega-3 que o salmão',
  description: 'Cavala é um peixe azul com 5.100mg de ômega-3 por 100g — mais que o salmão. Saiba o que é, onde encontrar no mercado, como preparar e se vale na lista.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cavala',
  },
  openGraph: {
    title: 'O que é cavala: o peixe com mais ômega-3 que o salmão',
    description: 'Cavala é um peixe azul com 5.100mg de ômega-3 por 100g — mais que o salmão. Saiba o que é, onde encontrar no mercado, como preparar e se vale na lista.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cavala',
    images: [
      {
        url: 'https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Cavala azul fresca sobre gelo em peixaria — peixe inteiro com coloração azul metálica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é cavala: o peixe com mais ômega-3 que o salmão',
    description: 'Cavala é um peixe azul com 5.100mg de ômega-3 por 100g — mais que o salmão. Saiba o que é, onde encontrar no mercado, como preparar e se vale na lista.',
    images: ['https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cavala e cavalinha são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. "Cavalinha" é o nome popular mais usado no cotidiano para a mesma espécie (Scomber spp.). Em peixarias e supermercados pode aparecer como cavala, cavalinha ou mackerel em produtos importados. É o mesmo peixe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre cavala e atum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cavala e atum são da mesma família (Scombridae), mas espécies diferentes. A cavala é menor, tem mais ômega-3 por 100g e costuma ser mais barata. O atum em conserva vendido no Brasil é geralmente atum-albacora, com menos gordura e menos ômega-3 do que a cavala. O sabor da cavala é mais intenso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cavala em conserva tem os mesmos nutrientes que a fresca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em grande parte, sim. O processo de conserva preserva bem as proteínas e os ômega-3. O sódio é maior na conserva salgada — se isso for uma preocupação, procure versão sem sal adicionado ou escorra e lave antes de servir. A vitamina D e B12 também se mantêm bem após o processo industrial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas vezes por semana posso comer cavala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A OMS recomenda pelo menos duas porções de peixe por semana. A cavala do Atlântico tem teor de mercúrio baixo — diferente de espécies grandes como atum-rabilho e peixe-espada. Porções de 85g a 100g, duas a três vezes por semana, são seguras e nutritivas para adultos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cavala tem mercúrio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cavala do Atlântico (Scomber scombrus) tem teor de mercúrio baixo e é considerada segura para consumo frequente. As espécies com mercúrio elevado são as de grande porte — atum-rabilho, cavala-rei e peixe-espada. Não confundir: a cavala comum não é a cavala-rei.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como saber se a cavala fresca está boa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Olhos brilhantes e transparentes (não opacos), guelras vermelhas ou rosadas, carne firme ao toque e cheiro de mar — não de peixe velho. A pele azul-metálica brilhante é sinal de frescor. Quando começa a apagar, já passou do ponto ideal. Peça ao peixeiro o que chegou no dia.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é cavala: o peixe com mais ômega-3 que o salmão',
  description: 'Cavala é um peixe azul com 5.100mg de ômega-3 por 100g — mais que o salmão. Saiba o que é, onde encontrar no mercado, como preparar e se vale na lista.',
  image: 'https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-14',
  dateModified: '2026-06-14',
  author: {
    '@type': 'Person',
    name: 'Gus',
    url: 'https://www.miseemcasa.com.br',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mise',
    url: 'https://www.miseemcasa.com.br',
    logo: {
      '@type': 'ImageObject',
      url: 'https://listinha-puce.vercel.app/icons/icon-192.png',
      width: 192,
      height: 192,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cavala',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é cavala', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cavala' },
  ],
}

export default function OQueECavala({ params }) {
  const { locale } = params
  if (locale !== 'pt') {
    notFound()
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RevealObserver />

      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>

      <SiteNav />

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="Você está aqui">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">O que é cavala</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-14">14 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">5 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é cavala: guia do peixe azul com mais ômega-3 que o salmão
          </h1>
          <p className="blog-desc">
            Cavala é um peixe da família do atum com alto teor de ômega-3 — mais que o salmão e bem mais que o atum em conserva. Encontrada fresca em peixarias e em lata no supermercado, custa menos e fica de fora de muita lista sem motivo.
          </p>

          <div className="answer-box">
            <p>
              <strong>Cavala</strong> (Scomber spp.) é um peixe de mar da família Scombridae — a mesma do atum e do bonito.
              Classificada como peixe azul pelo alto teor de gorduras insaturadas, tem cerca de <strong>5.100mg de ômega-3 por 100g</strong>.
              É encontrada fresca em peixarias e em conserva na maioria dos supermercados brasileiros.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Cavala azul fresca sobre gelo em peixaria — peixe inteiro com coloração azul metálica"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é cavala</a></li>
              <li><a href="#omega3">Por que tem mais ômega-3 que o salmão</a></li>
              <li><a href="#nutricao">O que tem dentro: o valor nutricional</a></li>
              <li><a href="#mercado">Como encontrar no mercado</a></li>
              <li><a href="#preparo">Como preparar cavala em casa</a></li>
              <li><a href="#vale-a-pena">Vale colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8351649/pexels-photo-8351649.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Peixes frescos variados sobre gelo em peixaria — peixes marinhos azuis inteiros à venda"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é cavala</h2>

          <p>
            Cavala é um peixe de água salgada da família Scombridae — a mesma família do atum, do bonito e da cavala-rei. No Brasil, o nome "cavalinha" aparece bastante no cotidiano para a mesma espécie. Em peixaria, nos dois. No supermercado, depende do produto.
          </p>
          <p>
            É classificada como <strong>peixe azul</strong> por causa da concentração alta de gorduras insaturadas no músculo. A carne é escura e firme, com sabor mais intenso do que tilápia ou merluza — menos neutra, mais marcante. Pra quem come salmão com frequência, a cavala cai em território familiar.
          </p>
          <p>
            A cor azul-metálica da pele é o traço mais característico. Peixes frescos têm brilho intenso — quando a coloração começa a apagar, passou do ponto. Na cavala, a pele entrega mais rápido o estado de conservação do que em outros peixes.
          </p>
          <p>
            O sabor é marcante, mas não agressivo. Em preparações simples — grelhada com azeite e alho — não precisa de muito mais. Tempero pesado aqui esconde o peixe, não melhora.
          </p>

          <h2 id="omega3">Por que tem mais ômega-3 que o salmão</h2>

          <p>
            O dado que sempre surpreende: cavala tem cerca de 5.100mg de ômega-3 por 100g. Salmão tem em torno de 1.640mg. Atum em conserva, cerca de 400mg. A cavala ganha os dois com folga. O salmão tem mais assessoria de imprensa.
          </p>
          <p>
            O motivo é o estilo de vida do peixe. Cavala é migratória, nada em mar aberto em águas frias e se alimenta de peixes menores ricos em gordura. Esse perfil — peixe ativo, de água fria — é o que mais acumula ômega-3 no músculo.
          </p>
          <p>
            O ômega-3 dos peixes vem na forma <strong>EPA e DHA</strong> — prontos para uso direto pelo organismo. Diferente das fontes vegetais como linhaça e chia, onde o ômega-3 vem como ALA e precisa de conversão — processo com eficiência variável. Pra saúde cardiovascular e função cerebral, EPA e DHA são as formas com mais evidência clínica.
          </p>

          <h2 id="nutricao">O que tem dentro: o valor nutricional</h2>

          <p>
            Em 100g de cavala: aproximadamente 205 kcal, 19g de proteína e 14g de gordura — com a maior parte sendo insaturada. A quantidade de proteína é comparável à do frango, com a vantagem do perfil de gordura completamente diferente.
          </p>
          <p>
            Cavala é uma das melhores fontes alimentares de vitamina D — difícil de obter em quantidade relevante nos alimentos do dia a dia. Tem vitamina B12 em quantidade alta, selênio e niacina. Para quem come pouca carne vermelha, é uma combinação interessante.
          </p>
          <p>
            Em porções de 85g a 100g, duas a três vezes por semana, a cavala do Atlântico não acumula mercúrio — diferente de espécies grandes como o atum-rabilho e o peixe-espada. É considerada segura para consumo frequente, inclusive por grávidas e crianças, segundo as recomendações da OMS.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2597565/pexels-photo-2597565.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Close-up de peixe cozido fatiado — filé de peixe azul grelhado pronto para servir"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Oleksandr Pidvalnyi / Pexels</p>
          </div>

          <h2 id="mercado" className="img-above">Como encontrar cavala no mercado</h2>

          <p>
            Fresca, em peixarias e hipermercados com seção de pescados. O preço fica bem abaixo do salmão — e a disponibilidade varia por região. No litoral e nas grandes cidades, é mais fácil de encontrar regularmente. Em algumas regiões, aparece de forma mais esporádica.
          </p>
          <p>
            Em conserva é onde a cavala ganha em acessibilidade. Enlatada em azeite, em água ou no próprio suco, tem nos supermercados de todo o Brasil — junto ao atum e à sardinha na gôndola. O processo de conserva preserva bem as proteínas e os ômega-3, diferente da fritura, que oxida parte das gorduras insaturadas.
          </p>
          <p>
            Defumada aparece em delicatessens e lojas especializadas. Boa para servir em tostadas, com{' '}
            <a href="/blog/o-que-e-cream-cheese">cream cheese</a>
            {' '}ou em receitas de patê. É um produto de uso pontual, não de despensa semanal.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          <h2 id="preparo">Como preparar cavala em casa</h2>

          <p>
            A forma mais simples é a que preserva melhor os nutrientes: grelhada ou assada. Em filé, 4 a 5 minutos de cada lado em frigideira com azeite, sal e alho. O sabor é marcante o suficiente pra não precisar de molho. Limão na finalização, se quiser.
          </p>

          <h3>No forno em papelote</h3>
          <p>
            Papel alumínio fechado com rodelas de limão, ervas e azeite. Forno a 200°C por 20 minutos. Sai macio, sem ressecar, e quase sem cheiro de peixe na cozinha — um jeito de preparar que funciona bem pra quem prefere não anunciar o jantar pelo corredor do apartamento.
          </p>

          <h3>No escabeche</h3>
          <p>
            Preparação tradicional: grelhe o filé, depois cubra com cebola fatiada, vinagre, azeite, pimenta-do-reino e louro. Descansa por pelo menos 4 horas na geladeira. Serve fria, com pão ou arroz. É uma das poucas preparações de peixe que fica melhor no dia seguinte.
          </p>

          <h3>Em conserva, direto da lata</h3>
          <p>
            O preparo mais prático: abre, escorre, serve. Sobre arroz, em salada verde, misturada com batata cozida. Refeição com proteína e ômega-3 em menos de 10 minutos. Se tiver na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {', '}é o recurso quando o planejamento da semana falhou — e falha.
          </p>

          <h2 id="vale-a-pena">Vale colocar na lista</h2>

          <p>
            Em conserva, sim — sem discussão. É uma das opções de proteína de melhor custo-benefício no supermercado. Fica na prateleira, tem preparo rápido e entrega o perfil nutricional que o salmão promove a preços bem mais altos.
          </p>
          <p>
            Se você já compra atum em conserva, a cavala substitui diretamente. O sabor é um pouco mais intenso, mas a troca faz sentido: mais ômega-3 pelo mesmo preço, ou menos. Vale experimentar primeiro numa receita que você já faz com atum — salada, wrap, macarrão — antes de substituir tudo.
          </p>
          <p>
            Fresca, entra na{' '}
            <a href="/funcionalidades/lista-de-compras">lista</a>
            {' '}quando você passa na peixaria ou encontra por um preço bom. Em filé, funciona em qualquer receita que você faria com um peixe de sabor mais robusto. Não substitui tilápia (mais neutra), mas vai bem onde você usaria merluza ou tainha.
          </p>
          <p>
            Cavala em lata é um item que não devia faltar em nenhuma{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}— proteína, ômega-3 e prateleira, tudo junto. Simples assim.
          </p>

          <h2 id="faq">Perguntas frequentes sobre cavala</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Cavala e cavalinha são a mesma coisa?</p>
              <p className="faq-a">
                Sim. "Cavalinha" é o nome popular mais usado no cotidiano para a mesma espécie (Scomber spp.). Em peixarias e supermercados pode aparecer como cavala, cavalinha ou mackerel em produtos importados. É o mesmo peixe.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre cavala e atum?</p>
              <p className="faq-a">
                Cavala e atum são da mesma família (Scombridae), mas espécies diferentes. A cavala é menor, tem mais ômega-3 por 100g e costuma ser mais barata. O atum em conserva vendido no Brasil é geralmente atum-albacora, com menos gordura e menos ômega-3 do que a cavala. O sabor da cavala é mais intenso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cavala em conserva tem os mesmos nutrientes que a fresca?</p>
              <p className="faq-a">
                Em grande parte, sim. O processo de conserva preserva bem as proteínas e os ômega-3. O sódio é maior na conserva salgada — se isso for uma preocupação, procure versão sem sal adicionado ou escorra e lave antes de servir. A vitamina D e B12 também se mantêm bem após o processo industrial.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantas vezes por semana posso comer cavala?</p>
              <p className="faq-a">
                A OMS recomenda pelo menos duas porções de peixe por semana. A cavala do Atlântico tem teor de mercúrio baixo — diferente de espécies grandes como atum-rabilho e peixe-espada. Porções de 85g a 100g, duas a três vezes por semana, são seguras e nutritivas para adultos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cavala tem mercúrio?</p>
              <p className="faq-a">
                A cavala do Atlântico (Scomber scombrus) tem teor de mercúrio baixo e é considerada segura para consumo frequente. As espécies com mercúrio elevado são as de grande porte — atum-rabilho, cavala-rei e peixe-espada. Não confundir: a cavala comum não é a cavala-rei.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como saber se a cavala fresca está boa?</p>
              <p className="faq-a">
                Olhos brilhantes e transparentes (não opacos), guelras vermelhas ou rosadas, carne firme ao toque e cheiro de mar — não de peixe velho. A pele azul-metálica brilhante é sinal de frescor. Quando começa a apagar, já passou do ponto ideal. Peça ao peixeiro o que chegou no dia.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Criador do Mise. Comprou cavala em lata porque estava barata, descobriu que tem mais ômega-3 que o salmão, ficou constrangido de não ter sabido antes.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Cavala na lista.<br />
              <em>Despensa que não esquece.</em>
            </h2>
            <p>
              O Mise conecta despensa, receitas e lista de compras num só lugar.
              Você compra o que vai usar — e a cavala não fica de fora por falta de lembrança.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Comece grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Voltar ao topo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Voltar ao topo
          </a>

        </article>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <span className="footer-copy">© 2026 Mise</span>
          <a href="/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
