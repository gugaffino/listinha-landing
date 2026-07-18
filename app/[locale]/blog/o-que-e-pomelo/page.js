import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é pomelo: diferença da toranja e como comer',
  description: 'Pomelo é a maior fruta cítrica do mundo e ancestral da grapefruit. Saiba o que é, o que a diferencia da toranja, como comer e onde encontrar no Brasil.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/o-que-e-pomelo',
  },
  openGraph: {
    title: 'O que é pomelo: diferença da toranja e como comer',
    description: 'Pomelo é a maior fruta cítrica do mundo e ancestral da grapefruit. Saiba o que é, o que a diferencia da toranja, como comer e onde encontrar no Brasil.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/o-que-e-pomelo',
    images: [
      {
        url: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fatias de frutas cítricas dispostas em mármore — limão, laranja e toranja em flatlay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é pomelo: diferença da toranja e como comer',
    description: 'Pomelo é a maior fruta cítrica do mundo e ancestral da grapefruit. Saiba o que é, o que a diferencia da toranja, como comer e onde encontrar no Brasil.',
    images: ['https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pomelo e toranja são a mesma fruta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Pomelo (Citrus maxima) é uma espécie pura, nativa do Sudeste Asiático. Toranja (grapefruit, Citrus paradisi) é um híbrido acidental entre pomelo e laranja doce — descoberto em Barbados no século 18. A toranja é menor, mais ácida e mais amarga. O nome "pomelo" é frequentemente usado de forma errada pra descrever grapefruit no Brasil, o que aumenta a confusão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pomelo é amargo como grapefruit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Menos. O pomelo tem sabor agridoce mais equilibrado — cítrico e refrescante, mas sem o amargor intenso que caracteriza o grapefruit (toranja). A polpa rosa e vermelha tende a ser mais doce; a amarela e branca, levemente mais ácida. Quem acha toranja amarga demais geralmente tolera bem o pomelo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pomelo pode ser tomado com remédio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuidado com estatinas e outros remédios que pedem pra evitar grapefruit. Pomelo contém furanocumarinas — compostos que interferem na metabolização de certas drogas, da mesma forma que o grapefruit. Se a bula do seu remédio menciona grapefruit, aplica ao pomelo também. Consulte o médico ou farmacêutico antes de consumir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como saber se o pomelo está maduro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sinta o peso — tem que ser pesado para o tamanho. Cor não é indicador confiável: pomelo pode ser verde por fora e maduro por dentro, dependendo da variedade. Aperte levemente: deve ceder um pouco e voltar. Mole demais ou com manchas escuras: passou do ponto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar pomelo em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inteiro, dura de 1 a 2 semanas em temperatura ambiente. Na geladeira, pode durar até um mês. A casca espessa protege bem o interior e desacelera a perda de umidade. Cortado, cubra e use em até 3 dias na geladeira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde comprar pomelo no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Supermercados maiores nas capitais, feiras livres e hortifrútis gourmet. Em São Paulo, mais fácil de achar em lojas orientais no bairro da Liberdade e em redes como Pão de Açúcar e St. Marche. A temporada principal vai de maio a outubro. Fora de época, pode não encontrar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pomelo faz bem pra saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É rico em vitamina C, fibras e potássio, com cerca de 38 kcal por 100g. Tem antioxidantes como naringenina e licopeno. Como qualquer fruta, faz parte de uma alimentação variada — não é superalimento, mas é boa escolha quando estiver na temporada e você gostar do sabor.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é pomelo: diferença da toranja e como comer',
  description: 'Pomelo é a maior fruta cítrica do mundo e ancestral da grapefruit. Saiba o que é, o que a diferencia da toranja, como comer e onde encontrar no Brasil.',
  image: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-01',
  dateModified: '2026-06-01',
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
    '@id': 'https://www.miseemcasa.com.br/blog/o-que-e-pomelo',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é pomelo', item: 'https://www.miseemcasa.com.br/blog/o-que-e-pomelo' },
  ],
}

export default function OQueEPomelo({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é pomelo</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-01">1 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Pomelo: a maior fruta cítrica que existe (e não é toranja)
          </h1>
          <p className="blog-desc">
            Aquela fruta grande, de casca bem grossa e nome confuso no mercado. O que é pomelo de verdade, o que tem a ver com toranja e grapefruit, e se vale colocar na lista de compras.
          </p>

          <div className="answer-box">
            <p>
              <strong>Pomelo</strong> (<em>Citrus maxima</em>) é a maior fruta cítrica que existe — pode chegar a 2 kg, com casca espessa que vai do verde ao amarelo-pálido.
              É uma espécie pura, nativa do Sudeste Asiático, e <strong>ancestral da grapefruit</strong> (toranja), não a mesma coisa.
              Sabor agridoce, menos amargo que o grapefruit, com polpa que pode ser branca, amarela, rosa ou vermelha.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fatias de frutas cítricas — laranja, toranja e limão dispostas em mármore branco em flatlay"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Aleksandar Pasaric / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é pomelo</a></li>
              <li><a href="#vs-toranja">Pomelo vs toranja: a confusão que todo mundo tem</a></li>
              <li><a href="#nutrientes">O que tem dentro: nutrientes por porção</a></li>
              <li><a href="#como-comer">Como comer pomelo</a></li>
              <li><a href="#como-escolher">Como escolher e guardar</a></li>
              <li><a href="#onde-comprar">Onde encontrar no Brasil e quanto custa</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/9466718/pexels-photo-9466718.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Homem segurando um pomelo inteiro na frente do rosto — mostrando o tamanho real da fruta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ron Lach / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é pomelo</h2>

          <p>
            Pomelo é uma fruta cítrica — a maior de todas. O nome científico é <em>Citrus maxima</em>, também chamado de <em>Citrus grandis</em>. Uma peça adulta pesa entre 1 e 2 kg. Boa parte desse peso é casca: grossa, esponjosa, com 3 a 5 cm de espessura.
          </p>
          <p>
            A polpa fica dentro de gomos, como laranja ou toranja. A cor muda pela variedade: branca e amarela pálida são as mais comuns. Rosa e vermelha são as mais doces e menos ácidas.
          </p>
          <p>
            O sabor é cítrico e refrescante. Menos amargo do que o grapefruit que a maioria das pessoas conhece. A casca grossa tem óleos essenciais aromáticos — funciona como zesto em receitas, como qualquer cítrico.
          </p>
          <p>
            A árvore é nativa do Sudeste Asiático — principalmente Malásia, Tailândia e sul da China. Na China, tem séculos de história e aparece em celebrações como o Ano Novo Chinês. No Brasil, a produção é pequena. A variedade mais cultivada aqui é a Marsh Seedless, no interior de São Paulo.
          </p>

          {/* VS TORANJA */}
          <h2 id="vs-toranja">Pomelo vs toranja: a confusão que todo mundo tem</h2>

          <p>
            A etiqueta do mercado diz "pomelo" mas a fruta parece grapefruit. Pode ser toranja mesmo — ou pode ser pomelo de verdade com outro tamanho. Essa confusão acontece o tempo todo.
          </p>
          <p>
            São frutas diferentes:
          </p>
          <ul className="item-list">
            <li><strong>Pomelo</strong> (<em>Citrus maxima</em>) — espécie pura e original. Maior. Casca muito grossa. Sabor mais suave e adocicado.</li>
            <li><strong>Toranja / grapefruit</strong> (<em>Citrus paradisi</em>) — híbrido acidental de pomelo com laranja doce, surgido em Barbados no século 18. Menor. Casca mais fina. Mais ácida e amarga.</li>
          </ul>
          <p>
            Pomelo é o ancestral. Toranja descende dele. São primas — não a mesma fruta.
          </p>
          <p>
            Em espanhol, "pomelo" significa grapefruit. Isso exportou a confusão pro Brasil. No mercado brasileiro, a etiqueta "pomelo" pode estar em qualquer uma das duas. Se tiver dúvida: pomelo real é visivelmente maior e tem casca muito mais grossa.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">O que tem dentro: nutrientes por porção</h2>

          <p>
            Pomelo tem cerca de 38 calorias por 100g de polpa. Para uma fruta desse tamanho, é baixo. O detalhe é que uma peça inteira tem muito mais de 100g comestível.
          </p>
          <p>
            É uma boa fonte de vitamina C — uma porção razoável cobre boa parte da necessidade diária. Tem fibras, potássio e antioxidantes: naringenina e licopeno são os principais. A naringenina é o mesmo flavonoide presente em alta concentração no grapefruit, associado a efeitos anti-inflamatórios em estudos.
          </p>
          <p>
            <strong>Um aviso importante:</strong> pomelo tem furanocumarinas — os mesmos compostos do grapefruit que interferem na metabolização de certos remédios. Se você toma estatinas para colesterol, ou qualquer medicamento com instrução de evitar grapefruit, evite o pomelo também. É a mesma interação. Consulte o médico ou farmacêutico.
          </p>

          {/* COMO COMER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fatias de frutas cítricas variadas em tábua de madeira — laranja, toranja e limão cortados ao meio"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Jane T D. / Pexels</p>
          </div>

          <h2 id="como-comer" className="img-above">Como comer pomelo</h2>

          <p>
            A casca grossa tem uma vantagem prática: é fácil de descascar sem faca especial. Corte uma tampa de uns 3 cm no topo. Faça incisões verticais pela casca, de cima a baixo, espaçadas como os gomos de uma laranja. Puxe com os dedos — a casca sai em pedaços grandes.
          </p>
          <p>
            Depois separe os gomos. Cada gomo tem uma película mais grossa do que a de laranja. Você pode comer com ela ou tirar. Sem a película, a polpa fica mais suave.
          </p>
          <p>
            Formas de usar:
          </p>
          <ul className="item-list">
            <li><strong>In natura</strong> — o jeito mais simples. Gelado fica ainda melhor.</li>
            <li><strong>Em saladas</strong> — vai bem com folhas amargas, queijo de cabra e castanhas. A doçura equilibra o amargo das folhas.</li>
            <li><strong>Em sucos e drinques</strong> — mistura bem com abacaxi, maçã verde e gengibre. O suco puro pode ser intenso — combine com outra fruta.</li>
            <li><strong>Com frutos do mar</strong> — combinação clássica em pratos tailandeses. Tente com camarão grelhado e molho de peixe.</li>
          </ul>
          <p>
            A casca, por sinal, é comestível. Cristalizada funciona como doce, e o zesto vai bem em qualquer receita que peça cítrico. Mas a maioria das pessoas come só a polpa.
          </p>
          <p>
            Se você está montando um{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>
            {' '}e quer incluir mais frutas no café da manhã, pomelo na temporada é uma boa variação — diferente o suficiente pra não entediar, mas prático de preparar.
          </p>

          {/* COMO ESCOLHER */}
          <h2 id="como-escolher">Como escolher e guardar</h2>

          <p>
            Pegue a fruta e sinta o peso. Tem que ser pesada para o tamanho. Leve demais indica que está ressecada por dentro. A cor da casca não é indicador confiável de maturidade — pomelo pode ser verde por fora e maduro por dentro, dependendo da variedade.
          </p>
          <p>
            Aperte levemente: deve ceder um pouco e voltar. Manchas escuras ou consistência muito mole: passou do ponto.
          </p>
          <p>
            Para guardar: inteiro, dura de 1 a 2 semanas fora da geladeira. Na geladeira, pode durar até um mês. A casca espessa desacelera a perda de umidade — vantagem real em relação a frutas de casca fina. Cortado, cubra e use em até 3 dias.
          </p>

          {/* ONDE COMPRAR */}
          <h2 id="onde-comprar">Onde encontrar no Brasil e quanto custa</h2>

          <p>
            A distribuição é irregular. Não é commodity — não aparece em todo supermercado de qualquer cidade o ano inteiro.
          </p>
          <p>
            Onde procurar:
          </p>
          <ul className="item-list">
            <li><strong>Supermercados maiores nas capitais</strong> — redes gourmet têm com mais frequência. Em São Paulo, St. Marche e Pão de Açúcar em bairros específicos.</li>
            <li><strong>Feiras e hortifrútis</strong> — depende da época. Temporada principal no Brasil: maio a outubro.</li>
            <li><strong>Lojas orientais</strong> — em cidades com comunidades asiáticas, aparece com regularidade. No bairro da Liberdade em São Paulo, mais fácil de achar.</li>
          </ul>
          <p>
            O preço varia bastante. A fruta parece grande mas parte do peso é casca. Compare pelo peso real da polpa, não pelo preço da peça. Uma dica: quando encontrar por um bom preço, anote onde. Assim como qualquer ingrediente de disponibilidade irregular, guardar o fornecedor certo vale — a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>
            {' '}ajuda a não esquecer.
          </p>

          <div className="blog-inline-cta">
            <p>Frutas da temporada, despensa organizada. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>Depende do que você vai fazer com ela.</p>
          <p>
            Se você já come frutas cítricas com regularidade e quer variar, pomelo é uma boa adição. Sabor distinto, baixa caloria, durável na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}— semanas sem estragar, graças à casca grossa.
          </p>
          <p>
            Se a ideia é comprar porque o nome apareceu numa receita ou você ficou curioso no mercado: compra uma peça, testa, decide se entra na rotina. Pomelo não é fruta que você vai comprar toda semana sem saber se gosta do sabor.
          </p>
          <p>
            Não é item de{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}— mas quando estiver na temporada (maio a outubro) e o preço estiver justo, vale a tentativa. É uma das poucas frutas cítricas que ainda surpreende quem prova pela primeira vez.
          </p>
          <p>
            A casca vai pro lixo mesmo assim.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre pomelo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Pomelo e toranja são a mesma fruta?</p>
              <p className="faq-a">
                Não. Pomelo (<em>Citrus maxima</em>) é espécie pura, nativa do Sudeste Asiático. Toranja (<em>Citrus paradisi</em>) é híbrido acidental de pomelo com laranja doce — surgido em Barbados no século 18. A toranja é menor, mais ácida e mais amarga. O nome "pomelo" é frequentemente usado de forma errada pra descrever grapefruit no Brasil, o que aumenta a confusão.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pomelo é amargo como grapefruit?</p>
              <p className="faq-a">
                Menos. O sabor é agridoce mais equilibrado — cítrico e refrescante, mas sem o amargor intenso do grapefruit. A polpa rosa e vermelha tende a ser mais doce; a amarela e branca, levemente mais ácida. Quem acha toranja amarga demais geralmente tolera bem o pomelo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pomelo pode ser tomado com remédio?</p>
              <p className="faq-a">
                Cuidado com estatinas e outros remédios que pedem pra evitar grapefruit. Pomelo tem furanocumarinas — compostos que interferem na metabolização de certas drogas, da mesma forma que o grapefruit. Se a bula menciona grapefruit, aplica ao pomelo também. Consulte o médico ou farmacêutico antes de consumir.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como saber se o pomelo está maduro?</p>
              <p className="faq-a">
                Sinta o peso — tem que ser pesado para o tamanho. Cor não é indicador confiável: pomelo pode ser verde por fora e maduro por dentro. Aperte levemente: deve ceder um pouco e voltar. Mole demais ou com manchas escuras: passou do ponto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar pomelo em casa?</p>
              <p className="faq-a">
                Inteiro, dura de 1 a 2 semanas em temperatura ambiente. Na geladeira, até um mês. A casca espessa protege bem o interior e desacelera a perda de umidade. Cortado, cubra e use em até 3 dias.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde comprar pomelo no Brasil?</p>
              <p className="faq-a">
                Supermercados maiores nas capitais, feiras livres e hortifrútis gourmet. Em São Paulo, mais fácil em lojas orientais na Liberdade e em redes como Pão de Açúcar. A temporada principal vai de maio a outubro. Fora de época, pode não encontrar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pomelo faz bem pra saúde?</p>
              <p className="faq-a">
                É rico em vitamina C, fibras e potássio, com cerca de 38 kcal por 100g de polpa. Tem antioxidantes como naringenina e licopeno. Como qualquer fruta, faz parte de uma alimentação variada — não é superalimento, mas é boa escolha quando estiver na temporada e você gostar do sabor.
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
                Criador do Mise. Viu "pomelo" no mercado, comprou animado, chegou em casa e descobriu que era toranja. Ficou satisfeito mesmo assim.
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
              Você compra o que vai usar — e o pomelo não fica esquecido na gaveta da geladeira.
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
