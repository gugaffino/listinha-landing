import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'O que é cranberry: para que serve e como usar no dia a dia',
  description: 'Cranberry é uma fruta vermelha com propriedades antioxidantes. Saiba o que é, para que serve, onde encontrar no Brasil e se vale a pena colocar na lista.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/o-que-e-cranberry',
  },
  openGraph: {
    title: 'O que é cranberry: para que serve e como usar no dia a dia',
    description: 'Cranberry é uma fruta vermelha com propriedades antioxidantes. Saiba o que é, para que serve, onde encontrar no Brasil e se vale a pena colocar na lista.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/o-que-e-cranberry',
    images: [
      {
        url: 'https://images.pexels.com/photos/29181506/pexels-photo-29181506.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Cranberries frescos em bandejas no mercado — fruta vermelha da América do Norte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é cranberry: para que serve e como usar no dia a dia',
    description: 'Cranberry é uma fruta vermelha com propriedades antioxidantes. Saiba o que é, para que serve, onde encontrar no Brasil e se vale a pena colocar na lista.',
    images: ['https://images.pexels.com/photos/29181506/pexels-photo-29181506.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cranberry serve para infecção urinária?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O cranberry contém proantocianidinas (PAC), compostos que dificultam a adesão de bactérias — especialmente E. coli — à parede da bexiga. Isso tem suporte em estudos clínicos, especialmente para prevenção de ITUs recorrentes. Mas não trata infecção já instalada. Para isso, é antibiótico com prescrição médica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cranberry seco engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O cranberry desidratado tem açúcar adicionado na maioria das marcas, o que aumenta o valor calórico em relação à fruta fresca. Em pequenas quantidades — uma a duas colheres de sopa como complemento em refeições — não é problema. O rótulo mostra exatamente quanto açúcar tem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde comprar cranberry no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cranberry seco (desidratado) está disponível em supermercados maiores, na seção de frutas secas e oleaginosas. O suco aparece em lojas com seção de produtos importados ou naturais. Suplemento em cápsulas, em farmácias e lojas de nutrição esportiva.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre cranberry fresco, seco e em suco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O fresco é muito ácido e praticamente impossível de encontrar no Brasil. O seco (desidratado) tem açúcar adicionado e funciona parecido com uva-passa, com sabor mais ácido. O suco 100% fruta é intensamente ácido. Para uso culinário cotidiano, o seco é o mais prático e acessível.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso comer cranberry todo dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, em pequenas quantidades. Uma a duas colheres de sopa de cranberry seco por dia, como parte de uma refeição, é suficiente para aproveitar os compostos antioxidantes sem exagerar no açúcar da versão desidratada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cranberry tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fruta em si não tem glúten. Mas o cranberry seco processado pode ter contaminação cruzada dependendo do processo de fabricação. Se você tem doença celíaca ou sensibilidade ao glúten, verifique o rótulo da embalagem antes de comprar.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é cranberry: para que serve e como usar no dia a dia',
  description: 'Cranberry é uma fruta vermelha com propriedades antioxidantes. Saiba o que é, para que serve, onde encontrar no Brasil e se vale a pena colocar na lista.',
  image: 'https://images.pexels.com/photos/29181506/pexels-photo-29181506.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-25',
  dateModified: '2026-05-25',
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
    '@id': 'https://www.miseemcasa.com.br/blog/o-que-e-cranberry',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é cranberry', item: 'https://www.miseemcasa.com.br/blog/o-que-e-cranberry' },
  ],
}

export default function OQueECranberry() {
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
            <li className="breadcrumb-current" aria-current="page">O que é cranberry</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-25">25 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é cranberry, para que serve e se vale colocar na lista
          </h1>
          <p className="blog-desc">
            Você vê aquele pacotinho vermelho no mercado, na seção de frutas secas, e nunca sabe bem se compra. Este guia explica o que é cranberry, pra que serve e — mais importante — se vale a pena colocar na lista.
          </p>

          <div className="answer-box">
            <p>
              <strong>Cranberry</strong> é uma fruta vermelha pequena, originária da América do Norte, de sabor muito ácido.
              No Brasil, você a encontra principalmente na versão <strong>desidratada (cranberry seco)</strong>, em suco ou como suplemento.
              É conhecida pelos antioxidantes e pela associação com a saúde urinária — mas tem usos práticos na cozinha que a maioria ignora.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/29181506/pexels-photo-29181506.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Cranberries frescos em bandejas no mercado — fruta vermelha da América do Norte"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Sergei Starostin / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é cranberry</a></li>
              <li><a href="#para-que-serve">Para que serve: o que a ciência diz</a></li>
              <li><a href="#formas-no-mercado">Onde você encontra no mercado brasileiro</a></li>
              <li><a href="#como-usar">Como usar cranberry no dia a dia</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/699387/pexels-photo-699387.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cranberries frescos numa tigela azul sobre mesa de madeira"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Jessica Lewis / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é cranberry</h2>

          <p>
            Cranberry (<em>Vaccinium macrocarpon</em>) é uma frutinha vermelha de sabor forte — uma acidez que, in natura, ninguém come pura sem fazer cara. O nome em português é oxicoco. Ninguém usa.
          </p>
          <p>
            A fruta é nativa da América do Norte. Lá, é colhida em campos alagados: os fazendeiros entram com botas num lago vermelho-vivo de cranberries flutuando — aquelas imagens que aparecem todo Dia de Ação de Graças. Aqui no Brasil, fresco mesmo você não vai encontrar. O que existe nos supermercados são quatro formatos: seco desidratado, suco, molho e cápsula de suplemento.
          </p>
          <p>
            A versão mais comum é o cranberry desidratado. Parece uma uva-passa vermelha — mastigável, azedo-adocicado, bem diferente da fruta ao natural. É o que você encontra na seção de frutas secas e oleaginosas, ao lado de tâmara, amêndoa e damasco.
          </p>
          <p>
            Do ponto de vista nutricional, o cranberry é rico em vitamina C, fibras e compostos fenólicos — especialmente proantocianidinas, flavonoides e ácido quínico. É essa combinação que sustenta a maior parte das propriedades atribuídas à fruta.
          </p>

          {/* PARA QUE SERVE */}
          <h2 id="para-que-serve">Para que serve: o que a ciência diz</h2>

          <p>
            A fama do cranberry vem principalmente de um grupo de compostos chamado proantocianidinas (PAC). Estudos mostram que esses compostos dificultam a adesão de bactérias — especialmente <em>E. coli</em> — à parede da bexiga. É o mecanismo que explica a associação da fruta com a prevenção de infecções urinárias de repetição.
          </p>
          <p>
            Um detalhe importante: o cranberry não <em>trata</em> infecção já instalada. Para isso, é antibiótico com prescrição. O que a fruta faz é criar um ambiente menos favorável para que as bactérias se fixem. A evidência científica é mais consistente em mulheres com histórico de ITUs recorrentes do que na população geral.
          </p>
          <p>
            Além disso, os antioxidantes do cranberry contribuem pra saúde cardiovascular de forma semelhante a outras frutas ricas em polifenóis: ajudam a reduzir marcadores de inflamação e melhoram o perfil lipídico com consumo regular. Um estudo publicado em 2022 com 45 participantes mostrou melhora em medidas de função endotelial após 30 dias de consumo diário do extrato da fruta.
          </p>
          <p>
            O que não é justo esperar do cranberry: emagrecer, desintoxicar o organismo ou substituir tratamento médico. É uma fruta com nutrientes interessantes — não um remédio.
          </p>

          {/* FORMAS NO MERCADO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/29301902/pexels-photo-29301902.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Frutas vermelhas em potes plásticos expostos em banca de mercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Sergei Starostin / Pexels</p>
          </div>

          <h2 id="formas-no-mercado" className="img-above">Onde você encontra no mercado brasileiro</h2>

          <p>No Brasil, o cranberry aparece em quatro formatos nos supermercados:</p>

          <h3>Seco (desidratado)</h3>
          <p>
            O mais fácil de achar. Fica na seção de frutas secas e oleaginosas — aquela gôndola com amêndoa, castanha e damasco. A maioria das marcas adiciona açúcar no processo de desidratação, o que aumenta o sabor adocicado e o valor calórico. Dura meses numa pote fechado na despensa.
          </p>

          <h3>Suco</h3>
          <p>
            Disponível em versão 100% fruta (muito ácido) ou como mistura com outros sucos. A maioria dos produtos de cranberry no Brasil tem adição significativa de açúcar. Verifique o rótulo: procure "cranberry" nos primeiros ingredientes, não no último lugar da lista.
          </p>

          <h3>Suplemento em cápsula</h3>
          <p>
            Em farmácias e lojas de nutrição. É concentrado de extrato da fruta — a forma mais usada quando o objetivo é específico, como a prevenção de ITUs. A concentração de PAC varia entre marcas.
          </p>

          <h3>Molho (cranberry sauce)</h3>
          <p>
            Menos comum, mas existe em importadoras e alguns supermercados maiores. É o acompanhamento clássico do peru americano. Aqui entra mais como curiosidade do que como item de lista frequente.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/699374/pexels-photo-699374.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cranberries vermelhos com alecrim sobre superfície de madeira rústica"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Jessica Lewis / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar cranberry no dia a dia</h2>

          <p>
            A versão seca é a mais versátil. A regra prática: use em qualquer lugar que você usaria uva-passa. O perfil de sabor é parecido — um pouco mais ácido, menos doce. Vai bem em:
          </p>

          <ul className="item-list">
            <li><strong>Granola ou aveia no café da manhã</strong> — equilibra o sabor com o adocicado da granola</li>
            <li><strong>Saladas com folhas amargas</strong> — rúcula, agrião — a acidez complementa bem</li>
            <li><strong>Mix de castanhas e nozes</strong> como snack da tarde</li>
            <li><strong>Arroz de forno ou farofa</strong> com frango — entra onde normalmente vai uva-passa</li>
            <li><strong>Iogurte natural</strong> com mel e granola</li>
          </ul>

          <p>
            O suco puro — sem adição de açúcar — funciona bem misturado a smoothies ou como base de molho para carne de porco. A acidez corta a gordura da carne e equilibra bem com um toque de mostarda e mel.
          </p>
          <p>
            Quantidade prática: uma a duas colheres de sopa do cranberry seco por refeição já é suficiente. Não precisa de muito pra ter sabor — e o açúcar da versão desidratada some rápido se você exagerar.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>Depende do que você busca.</p>
          <p>
            Se a ideia é ter um alimento funcional na{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            por causa dos antioxidantes: faz sentido. O cranberry seco dura bem, cabe num vidro fechado na prateleira e é fácil de incluir em pequenas quantidades no que você já come — sem mudar nada na rotina.
          </p>
          <p>
            Se a intenção é prevenir ITUs de repetição especificamente: vale conversar com médico. A evidência científica existe, mas a quantidade ideal e a forma (suco, extrato, suplemento) variam por caso.
          </p>
          <p>
            Se a ideia é comer porque é "superfood" e vai mudar a saúde: provavelmente vai acabar no fundo da despensa ao lado do chia que você comprou em 2023 e nunca abriu. Um alimento novo só fica na rotina se entrar com facilidade no que você já faz.
          </p>
          <p>
            Não é item de{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}— mas se você já tem o hábito de comer granola, salada de folhas ou mix de frutas secas, cranberry seco vale uma chance. O pacote dura bastante e o preço não é absurdo.
          </p>
          <p>
            A despensa não precisa de mais um mártir da alimentação saudável.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre cranberry</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Cranberry serve para infecção urinária?</p>
              <p className="faq-a">
                O cranberry tem proantocianidinas (PAC), compostos que dificultam a adesão de bactérias à parede da bexiga. Isso tem suporte em estudos clínicos, especialmente para prevenção de ITUs recorrentes. Mas não trata infecção já instalada — para isso é antibiótico com prescrição médica. Use como prevenção, não como substituto de tratamento.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cranberry seco engorda?</p>
              <p className="faq-a">
                O cranberry desidratado tem açúcar adicionado na maioria das marcas, o que aumenta o valor calórico em relação à fruta fresca. Em pequenas quantidades — uma a duas colheres de sopa como complemento em refeições — não é problema. Se você consumir um pacote inteiro como snack, o açúcar some rápido. Leia o rótulo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde comprar cranberry no Brasil?</p>
              <p className="faq-a">
                Cranberry seco está disponível em supermercados maiores, na seção de frutas secas e oleaginosas. O suco aparece em mercados com seção de produtos naturais ou importados. Suplemento em cápsulas, em farmácias e lojas de nutrição.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre cranberry fresco, seco e em suco?</p>
              <p className="faq-a">
                O fresco é muito ácido e praticamente impossível de encontrar no Brasil. O seco tem açúcar adicionado e funciona parecido com uva-passa, com sabor mais ácido. O suco 100% fruta é intensamente ácido e pouco comum puro. Para uso culinário cotidiano, o seco é o mais prático e acessível.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso comer cranberry todo dia?</p>
              <p className="faq-a">
                Sim, em pequenas quantidades. Uma a duas colheres de sopa de cranberry seco por dia, como parte de uma refeição, é suficiente para aproveitar os antioxidantes sem exagerar no açúcar da versão desidratada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cranberry tem glúten?</p>
              <p className="faq-a">
                A fruta em si não tem glúten. Mas o cranberry seco processado pode ter contaminação cruzada dependendo da fabricação. Se você tem doença celíaca ou sensibilidade ao glúten, verifique o rótulo da embalagem antes de comprar.
              </p>
            </li>
          </ul>

          {/* AUTHOR */}
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
                Criador do Mise. Já comprou cranberry seco achando que ia usar todo dia e deixou o pacote parado por seis meses. Eventualmente virou granola.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem na despensa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você compra o que vai usar — e o cranberry não fica esquecido atrás do chia.
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
