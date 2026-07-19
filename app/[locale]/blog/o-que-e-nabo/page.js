import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Nabo: o que é, para que serve e como usar na cozinha',
  description: 'Nabo é um legume raiz pouco usado no Brasil, com apenas 35 calorias por 100g, vitamina C e fibras. Descubra o que é, para que serve e como usar na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-nabo',
  },
  openGraph: {
    title: 'Nabo: o que é, para que serve e como usar na cozinha',
    description: 'Nabo é um legume raiz pouco usado no Brasil, com apenas 35 calorias por 100g, vitamina C e fibras. Descubra o que é, para que serve e como usar na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-nabo',
    images: [
      {
        url: 'https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Nabo fresco sobre superfície clara — legume raiz branco e roxo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabo: o que é, para que serve e como usar na cozinha',
    description: 'Nabo é um legume raiz pouco usado no Brasil, com apenas 35 calorias por 100g, vitamina C e fibras. Descubra o que é, para que serve e como usar na cozinha.',
    images: ['https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Nabo é fruta ou legume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nabo é um legume — tecnicamente, a raiz tuberosa de uma planta herbácea. Frutas são o produto reprodutivo da planta (onde estão as sementes). O nabo é a raiz, que a planta usa para armazenar nutrientes. Na cozinha, entra na categoria de raízes e legumes, junto com cenoura, beterraba e batata.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nabo pode ser comido cru?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O sabor cru é mais amargo e a textura é crocante, parecida com rabanete. Cortado em fatias finas ou ralado, vai bem em salada. Se o amargor incomodar, deixe as fatias de molho em água com algumas gotas de limão ou vinagre por 15 minutos antes de usar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre nabo e rabanete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São da mesma família (crucíferas), mas plantas diferentes. O rabanete costuma ser menor, redondo, com casca vermelha ou rosa e sabor mais picante. O nabo é maior, oval, com casca branco-arroxeada e sabor mais suave e terroso. Os dois servem bem crus, mas o nabo tem mais uso como legume cozido — em sopas, purês e assados.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nabo engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Com 35 calorias por 100g cozido, é um dos legumes mais leves disponíveis. Não engorda mais do que qualquer alimento consumido em excesso. A combinação de fibras e alto teor de água aumenta saciedade com poucas calorias. O problema seria o que se coloca junto — manteiga, creme, molhos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Folha de nabo pode comer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, e é nutritiva. As folhas têm vitamina K, vitamina C, beta-caroteno e cálcio em quantidades mais altas do que a raiz. Refogadas com alho e azeite ficam boas, parecidas com couve. O sabor é mais amargo do que a raiz — quem não gosta de amargor pode usar as folhas em caldos, onde suavizam no cozimento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como suavizar o sabor amargo do nabo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O cozimento é a forma mais simples — quanto mais tempo no fogo, mais suave fica. Para usar cru, coloque as fatias de molho em água com um pouco de vinagre ou limão por 15-20 minutos. Assar suaviza o amargor e adiciona dulçor natural. Combinar com azeite, manteiga ou ingredientes ácidos também ajuda a equilibrar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nabo pode ser congelado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, mas com preparo. Congele cozido: branqueie por 1 minuto em água fervendo, resfrie em água gelada, seque e congele em porções. Dura 3-4 meses. Cru não funciona bem — a textura fica mole ao descongelar. Para quem faz sopa ou cozido com frequência, congelar porções pré-cozidas é um atalho útil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nabo tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Nabo puro, in natura, é naturalmente livre de glúten. Atenção apenas para produtos industrializados que usam nabo como ingrediente — conservas, sopas prontas, condimentos — que podem ter contaminação cruzada dependendo da fábrica. Verifique o rótulo se tiver restrição grave.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nabo: o que é, para que serve e como usar na cozinha',
  description: 'Nabo é um legume raiz pouco usado no Brasil, com apenas 35 calorias por 100g, vitamina C e fibras. Descubra o que é, para que serve e como usar na cozinha.',
  image: 'https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-19',
  dateModified: '2026-06-19',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-nabo',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é nabo', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-nabo' },
  ],
}

export default function OQueENabo({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é nabo</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-19">19 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Nabo: o que é, para que serve e como usar na cozinha
          </h1>
          <p className="blog-desc">
            O legume que aparece em todo hortifruti do Brasil e quase nunca entra na lista de compras. O que é, o que tem de nutriente, como preparar sem desperdiçar — e quando vale a pena colocar no carrinho.
          </p>

          <div className="answer-box">
            <p>
              <strong>Nabo</strong> é um legume raiz da família das crucíferas — a mesma do brócolis, repolho e couve.
              Tem casca branco-arroxeada, interior branco e firme, sabor levemente amargo quando cru.
              Com cerca de 35 calorias por 100g cozido, entra bem em sopas, purês, assados e saladas.
              Está disponível o ano todo nos hortifrutis brasileiros — e é ignorado na maioria das listas de compras.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Nabo fresco sobre superfície clara — legume raiz com casca branco-arroxeada"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é nabo</a></li>
              <li><a href="#brasil">Por que ninguém compra nabo no Brasil</a></li>
              <li><a href="#valor-nutricional">O que tem dentro: valor nutricional</a></li>
              <li><a href="#tipos">Tipos de nabo no mercado</a></li>
              <li><a href="#como-usar">Como usar nabo na cozinha</a></li>
              <li><a href="#comprar-guardar">Como comprar e guardar nabo</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7988009/pexels-photo-7988009.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Raízes e legumes frescos variados sobre fundo rústico — nabo, cenoura e outros vegetais"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é nabo</h2>

          <p>
            Nabo (<em>Brassica rapa</em> subsp. <em>rapa</em>) é um legume raiz da família das crucíferas.
            A mesma família do brócolis, da couve, do repolho e do rabanete. Uma família com bastante amargor e muita nutrição.
          </p>
          <p>
            A parte principal que se come é a raiz: arredondada ou levemente oval, com casca branca na base e arroxeada no topo, onde fica exposta ao sol.
            O interior é branco, firme e crocante — parecido com rabanete, mas maior e com sabor mais terroso.
          </p>
          <p>
            O sabor muda bastante dependendo do preparo. Cru, é levemente amargo e picante. Cozido, suaviza.
            Assado, fica mais adocicado, com bordas levemente caramelizadas. É um legume que se transforma — para melhor — com calor.
          </p>
          <p>
            As folhas também são comestíveis. Sabor mais acentuado, parecido com couve-manteiga ou mostarda.
            Em Portugal, os grelos de nabo são prato tradicional. No Brasil, a maioria joga fora.
          </p>
          <p>
            Nabo não é o mesmo que nabo japonês (daikon), apesar de serem primos próximos. O daikon é mais comprido, inteiramente branco e tem sabor mais suave.
            Os dois entram na mesma família e têm usos parecidos na cozinha, mas o nabo comum é o que você vai encontrar na maioria dos hortifrutis brasileiros.
          </p>

          {/* POR QUE NINGUÉM COMPRA */}
          <h2 id="brasil">Por que ninguém compra nabo no Brasil</h2>

          <p>
            Nabo está disponível em praticamente todo hortifruti do Brasil, o ano todo. Aparece na banca de legumes, ao lado da cenoura e do chuchu.
            E sai pouco.
          </p>
          <p>
            É um dos vegetais com maior presença nas bancas e menor saída — uma espécie de legume que todo mundo vê e quase ninguém compra.
            Parte disso é falta de familiaridade. Muita gente não sabe o que fazer com ele.
            A outra parte é o sabor levemente amargo, que afasta quem não está habituado.
          </p>
          <p>
            O nabo tem papel importante na culinária de vários países.
            No Japão, o daikon aparece em conservas, sopas e acompanhamentos.
            Na Alemanha, entra no chucrute junto com o repolho.
            Na França, faz parte do <em>pot-au-feu</em>, o cozido tradicional.
            Em Portugal, os grelos de nabo são ingrediente básico.
            O Brasil ficou de fora — não porque o produto seja ruim, mas porque o costume não foi.
          </p>
          <p>
            Resultado: um legume nutritivo, barato e disponível que fica na banca enquanto a cenoura e a batata somem.
            Não é culpa de ninguém. É só falta de prática.
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="valor-nutricional">O que tem dentro: valor nutricional do nabo</h2>

          <p>
            100g de nabo cozido tem aproximadamente:
          </p>
          <ul className="item-list">
            <li><strong>35 kcal</strong></li>
            <li><strong>8g</strong> de carboidratos</li>
            <li><strong>2,2g</strong> de fibras</li>
            <li><strong>13mg</strong> de vitamina C (cerca de 14% da ingestão diária de referência)</li>
            <li><strong>191mg</strong> de potássio</li>
            <li><strong>12mcg</strong> de folato (vitamina B9)</li>
          </ul>
          <p>
            Baixo em calorias, razoável em fibras, boa fonte de vitamina C e potássio.
            Nada extraordinário — é um legume comum, não um superalimento.
            Mas para montar uma sopa ou um purê nutritivo com poucas calorias, é uma opção sólida.
          </p>
          <p>
            As folhas superam a raiz em alguns nutrientes: têm mais vitamina K, vitamina C, beta-caroteno e cálcio.
            Se você comprar nabo com as folhas, use. Refogadas com alho ficam boas.
            Isso é jogar fora nutrição que já veio junto sem custo extra.
          </p>
          <p>
            Uma nota honesta: os números vêm de estimativas baseadas em dados de composição nutricional de alimentos similares (
            <a href="https://www.nepa.unicamp.br/taco/" target="_blank" rel="noopener">Tabela TACO</a>
            {' '}e fontes internacionais comparáveis). Os valores variam com o tamanho, a variedade e o método de preparo.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de nabo que você encontra no mercado</h2>

          <p>
            No hortifruti brasileiro, você vai encontrar principalmente dois tipos:
          </p>

          <h3>Nabo comum (<em>Brassica rapa</em>)</h3>
          <p>
            O que chamamos de nabo no Brasil. Raiz branco-arroxeada, oval ou arredondada, tamanho de maçã grande.
            Sabor levemente amargo. Entra bem em sopa, purê, cozido e salada crua.
            É o mais barato e mais fácil de encontrar.
          </p>

          <h3>Daikon (nabo japonês)</h3>
          <p>
            Mais comprido, inteiramente branco, sabor mais suave. Aparece em mercearias japonesas e, às vezes, em mercados maiores nas capitais.
            Muito usado em conservas, pratos orientais e saladas cruas.
            Se você nunca experimentou nabo e quer começar, o daikon tem barreira de entrada menor — o sabor é mais suave.
          </p>

          <p>
            Os dois têm uso parecido na cozinha. A diferença principal é o sabor: o daikon é mais gentil com quem não está habituado ao amargor do nabo comum.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Legumes e verduras variados em banca de hortifruti — cenoura, beterraba e raízes frescas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar nabo na cozinha</h2>

          <p>
            Nabo é versátil. O erro mais comum é experimentar cru sem preparo e achar que não gosta.
            O sabor cru é o mais intenso. Com calor, muda completamente.
          </p>

          <h3>Cru — em saladas</h3>
          <p>
            Cortado em fatias finas ou ralado, entra bem em salada.
            O sabor amargo é mais presente. Combine com temperos ácidos — vinagre, limão — para equilibrar.
            Uma dica útil: fatias de molho em água com algumas gotas de limão ou vinagre por 15 minutos antes de usar.
            O amargor diminui bastante.
          </p>

          <h3>Cozido — em sopas e caldos</h3>
          <p>
            O uso mais comum no Brasil. Em sopas, caldos e cozidos, o sabor do nabo suaviza e ele absorve bem o tempero do caldo.
            Corte em cubos médios e adicione junto com cenoura, batata e chuchu.
            O nabo cozinha um pouco mais rápido que a batata — coloque depois se quiser texturas parecidas.
          </p>
          <p>
            Para quem monta um{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>
            {' '}com sopa de quarta ou quinta, nabo é um ingrediente que varia o caldo sem complicar.
          </p>

          <h3>Assado — a versão que converte</h3>
          <p>
            Cubos de nabo, azeite, sal e alecrim. Forno a 200°C por 25-30 minutos.
            As bordas ficam levemente douradas e caramelizadas. O sabor adoça.
            É a versão que converte quem tentou cru e não gostou.
            Fica bom ao lado de frango assado ou como parte de uma assadeira de legumes mistos.
          </p>

          <h3>Purê — mais leve que batata</h3>
          <p>
            Cozinhe o nabo até ficar macio, processe com manteiga, sal e pimenta.
            O resultado é parecido com purê de batata, mas mais leve.
            Uma combinação que funciona bem: metade batata, metade nabo.
            Mais cremoso, menos calórico.
          </p>

          <h3>Conserva — picles rápido</h3>
          <p>
            Fatias finas em salmoura (água, vinagre e sal) ficam prontas em 24h na geladeira.
            Boa para acompanhar carnes grelhadas, no lugar do picles convencional.
            Dura até 2 semanas na geladeira em pote fechado.
          </p>

          <div className="blog-inline-cta">
            <p>Menos decisões do que cozinhar. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMPRAR E GUARDAR */}
          <h2 id="comprar-guardar">Como comprar e guardar nabo em casa</h2>

          <h3>Na hora de comprar</h3>
          <ul className="item-list">
            <li><strong>Raiz firme</strong> — sem partes moles ou enrugadas ao toque</li>
            <li><strong>Casca sem manchas escuras</strong> ou bolores visíveis</li>
            <li><strong>Tamanho médio</strong> (tamanho de maçã grande) — os menores costumam ter sabor mais suave</li>
            <li><strong>Folhas verdes e frescas</strong> indicam produto recente — folhas amareladas sinalizam tempo longo na banca</li>
          </ul>
          <p>
            Prefira nabos menores quando for comer cru. Os maiores ficam melhores cozidos ou assados.
          </p>

          <h3>Como guardar</h3>
          <p>
            Sem as folhas, o nabo dura 1-2 semanas na gaveta de vegetais da geladeira.
            Com as folhas, guarde a raiz e as folhas separadas — as folhas murcham mais rápido.
            Cortado e embalado, dura 3-4 dias.
          </p>
          <p>
            Para congelar: cozinhe, branqueie brevemente (1 minuto em água fervente, depois imediatamente em água gelada), seque bem e congele em porções.
            Dura 3-4 meses. Cru não congela bem — a textura fica mole ao descongelar.
          </p>
          <p>
            Se você tem o hábito de guardar legumes na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}ou registrar o que tem em casa antes de ir ao mercado, nabo é um ingrediente que some rápido da memória — fácil de esquecer que tem, fácil de deixar passar do ponto.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>Depende do que você está tentando resolver.</p>
          <p>
            Se você quer adicionar um legume de baixo custo e sabor diferente à sopa semanal, nabo é uma boa escolha.
            Barato, disponível o ano todo, e faz o caldo ficar mais interessante do que só batata e cenoura.
            Um quilo de nabo custa entre R$3 e R$6 no hortifruti, dependendo da época e cidade — por esse preço, dá pra testar sem comprometer o orçamento.
          </p>
          <p>
            Se você nunca experimentou e não sabe ainda o que vai fazer com ele, o risco é comprar, não usar, e jogar fora.
            Antes de colocar na{' '}
            <a href="/blog/lista-de-compras-mercado">lista de compras</a>
            , tenha um uso em mente — mesmo que seja só "vou colocar na sopa de quarta".
            Um ingrediente novo só entra na rotina quando tem um destino antes da compra.
          </p>
          <p>
            O nabo também faz sentido quando você quer reduzir calorias sem reduzir volume no prato.
            Substituir metade das batatas do cozido por nabo corta calorias sem cortar satisfação.
            Não é uma promessa de dieta — é só matemática de legume.
          </p>
          <p>
            Não é item de lista básica. Mas se você cozinha sopa com regularidade ou quer diversificar o cozido semanal,
            nabo merece sair do anonimato da banca uma vez por semana.
          </p>
          <p>
            Ele já está lá toda semana quando você passa. Você que nunca parou pra olhar de volta.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre nabo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Nabo é fruta ou legume?</p>
              <p className="faq-a">
                Legume — tecnicamente, a raiz tuberosa de uma planta herbácea. Frutas são o produto reprodutivo da planta, onde estão as sementes. O nabo é a raiz, que a planta usa para armazenar nutrientes. Na cozinha, entra na categoria de raízes e legumes, junto com cenoura, beterraba e batata.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Nabo pode ser comido cru?</p>
              <p className="faq-a">
                Sim. O sabor cru é mais amargo e a textura é crocante, parecida com rabanete. Cortado em fatias finas ou ralado, vai bem em salada. Se o amargor incomodar, deixe as fatias de molho em água com algumas gotas de limão por 15 minutos antes de usar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre nabo e rabanete?</p>
              <p className="faq-a">
                São da mesma família, mas plantas diferentes. O rabanete costuma ser menor, redondo, com casca vermelha ou rosa e sabor mais picante. O nabo é maior, oval, com casca branco-arroxeada e sabor mais terroso e suave. Os dois servem bem crus, mas o nabo tem mais uso como legume cozido — em sopas, purês e assados.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Nabo engorda?</p>
              <p className="faq-a">
                Com 35 calorias por 100g cozido, é um dos legumes mais leves do hortifruti. Não engorda mais do que qualquer alimento em excesso. A combinação de fibras e alto teor de água aumenta saciedade com poucas calorias. O problema seria o que você coloca junto — manteiga, creme, molhos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Folha de nabo pode comer?</p>
              <p className="faq-a">
                Pode — e é nutritiva. As folhas têm vitamina K, vitamina C, beta-caroteno e cálcio em quantidades mais altas do que a raiz. Refogadas com alho e azeite ficam boas, parecidas com couve. O sabor é mais amargo — quem não gosta pode usar as folhas em caldos, onde suavizam no cozimento.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como suavizar o sabor amargo do nabo?</p>
              <p className="faq-a">
                O cozimento é a forma mais simples — quanto mais tempo no fogo, mais suave fica. Para usar cru, coloque as fatias de molho em água com vinagre ou limão por 15-20 minutos. Assar suaviza o amargor e adiciona dulçor natural. Combinar com azeite, manteiga ou ingredientes ácidos também equilibra bem.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Nabo pode ser congelado?</p>
              <p className="faq-a">
                Pode, mas com preparo. Congele cozido: branqueie por 1 minuto em água fervendo, resfrie em água gelada, seque e congele em porções. Dura 3-4 meses. Cru não funciona bem — a textura fica mole ao descongelar. Para quem faz sopa com frequência, congelar nabo pré-cozido é um atalho útil.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Nabo tem glúten?</p>
              <p className="faq-a">
                Não. Nabo puro, in natura, é naturalmente livre de glúten. Atenção para produtos industrializados com nabo como ingrediente — conservas, sopas prontas — que podem ter contaminação cruzada dependendo da fábrica. Verifique o rótulo se tiver restrição grave.
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
                Criador do Mise. Passa em frente à banca de nabo toda semana desde 2019. O nabo olha de lá. Essa semana, finalmente entrou na lista.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sopa montada. Lista feita.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você sabe o que tem em casa — e o nabo não some esquecido na gaveta.
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
