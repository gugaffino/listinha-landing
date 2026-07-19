import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Arenque: o que é, benefícios e como usar o defumado',
  description: 'Arenque é primo da sardinha, mas com mais ômega-3 e vitamina D. Saiba o que é, onde comprar no Brasil, como usar o defumado e a diferença pra sardinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/arenque',
  },
  openGraph: {
    title: 'Arenque: o que é, benefícios e como usar o defumado',
    description: 'Arenque é primo da sardinha, mas com mais ômega-3 e vitamina D. Saiba o que é, onde comprar no Brasil, como usar o defumado e a diferença pra sardinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/arenque',
    images: [
      {
        url: 'https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Filé de peixe grelhado com legumes em prato sobre mesa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arenque: o que é, benefícios e como usar o defumado',
    description: 'Arenque é primo da sardinha, mas com mais ômega-3 e vitamina D. Saiba o que é, onde comprar no Brasil, como usar o defumado e a diferença pra sardinha.',
    images: ['https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é arenque?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arenque é um peixe de água salgada da família Clupeidae — a mesma da sardinha e da anchova. A espécie mais comum é a Clupea harengus, nativa das águas frias do Atlântico Norte, Mar do Norte e Mar Báltico. No Brasil, é encontrado principalmente defumado e importado, pois não habita o Atlântico Sul. Tem sabor mais intenso que a sardinha e é rico em ômega-3, vitamina D e proteína.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre arenque e sardinha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arenque e sardinha são da mesma família (Clupeidae), mas espécies diferentes. O arenque é maior, tem sabor mais intenso — especialmente na versão defumada — e tem mais ômega-3 por 100g (cerca de 1,7g vs 1,0–1,5g da sardinha). A sardinha é muito mais fácil de encontrar no Brasil e mais barata. Para o dia a dia, sardinha. Para variar ou buscar mais nutrientes por porção, arenque.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde comprar arenque no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em empórios especializados em produtos europeus (busque por "empório escandinavo" ou "deli alemão" na sua cidade), em supermercados de grande porte nas capitais na seção de importados, e online em sites como Amazon e Mercado Livre. O produto mais comum é o filé de arenque defumado em embalagem a vácuo, sem espinhas. O preço varia entre R$30 e R$60 por embalagem de 200–300g.',
      },
    },
    {
      '@type': 'Question',
      name: 'O arenque defumado tem espinhos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O arenque defumado que vem em embalagem importada quase sempre já vem sem espinhos — é filetado antes do processo de defumação. Diferente do arenque fresco, que tem espinhas finas em quantidade. Para quem está comprando a versão em embalagem a vácuo ou em conserva, não há preocupação com espinhas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como usar arenque defumado na cozinha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arenque defumado não precisa de cozimento — já está pronto para consumo. Vai bem em pasta com azeite e limão, em bruschetta com cream cheese e alcaparras, em saladas com batata e cebola roxa, em ovos mexidos (30–40g transforma o prato) e em patê processado com cream cheese. O sabor é intenso, então use em quantidade menor do que usaria sardinha.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arenque faz bem para a saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Arenque é rico em ômega-3 (importante para saúde cardiovascular e cerebral), vitamina D (uma das melhores fontes alimentares naturais), vitamina B12 e proteína. Em 100g de arenque defumado há cerca de 24g de proteína e 1,7g de ômega-3. A versão defumada tem sódio elevado — cerca de 750mg por 100g — o que requer atenção para quem controla pressão arterial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arenque tem muito sódio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A versão defumada sim — cerca de 750mg por 100g, que é bastante. O sódio é parte do processo de conservação e defumação. Quem controla sódio na dieta pode limitar a porção a cerca de 50g e equilibrar com o restante das refeições do dia. O arenque fresco tem muito menos sódio, mas é praticamente impossível de encontrar no Brasil.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arenque: o que é, benefícios e como usar o defumado',
  description: 'Arenque é primo da sardinha, mas com mais ômega-3 e vitamina D. Saiba o que é, onde comprar no Brasil, como usar o defumado e a diferença pra sardinha.',
  image: 'https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-25',
  dateModified: '2026-06-25',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/arenque',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Arenque', item: 'https://www.miseemcasa.com.br/pt/blog/arenque' },
  ],
}

export default function Arenque({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Arenque</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-25">25 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Arenque: o que é esse peixe, por que é nutritivo e como usar na cozinha
          </h1>
          <p className="blog-desc">
            Arenque aparece em receitas europeias, em rótulos de importados e em toda conversa sobre ômega-3. No Brasil, é ingrediente de nicho — mas fácil de usar quando você sabe o que é. O que é arenque, onde encontrar, como usar o defumado e por que ele entra na lista.
          </p>

          <div className="answer-box">
            <p>
              <strong>Arenque</strong> é um peixe de água salgada da família da sardinha (<em>Clupeidae</em>),
              nativo das águas frias do Atlântico Norte. No Brasil, é encontrado principalmente defumado e importado
              — sem espinhas na embalagem, pronto para usar. Rico em ômega-3, vitamina D e proteína, com sabor
              mais intenso que a sardinha.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Filé de peixe grelhado com legumes em prato sobre mesa"
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
              <li><a href="#o-que-e">O que é arenque</a></li>
              <li><a href="#por-que-nutritivo">Por que o arenque é tão nutritivo</a></li>
              <li><a href="#no-brasil">Arenque defumado no Brasil</a></li>
              <li><a href="#como-usar">Como usar arenque na cozinha</a></li>
              <li><a href="#arenque-ou-sardinha">Arenque ou sardinha: qual escolher</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É ARENQUE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6839650/pexels-photo-6839650.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Close-up de prato de peixe preparado com acompanhamentos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é arenque</h2>

          <p>
            Arenque (<em>Clupea harengus</em>) é um peixe de água salgada da família Clupeidae — a mesma da sardinha, da anchova e da manjuba. Corpo alongado, escamas prateadas, entre 20 e 40 cm de comprimento.
          </p>
          <p>
            Vive em cardumes no Atlântico Norte, no Mar do Norte e no Mar Báltico. Águas frias, próximas da superfície. Em quantidade enorme — arenque é um dos peixes mais pescados do mundo há séculos. Por isso é barato e comum na Europa. Por isso aparece em tanta receita europeia tradicional.
          </p>
          <p>
            No Brasil, a história é diferente. O peixe não habita o Atlântico Sul. O que chega por aqui é importado, quase sempre já processado: defumado, em conserva ou em salmoura. Arenque fresco não tem no mercado brasileiro — e provavelmente nunca vai ter.
          </p>
          <p>
            O jeito mais comum de encontrar é o filé de arenque defumado em embalagem a vácuo, sem espinhas, pronto para usar. Às vezes vem em azeite. Às vezes em salmoura. O sabor é mais intenso do que sardinha — mais gorduroso, mais marcante.
          </p>
          <p>
            Na Europa, arenque é ingrediente de cozinha corriqueira. Na Holanda, come-se fresco e marinado em vinagre com cebola crua — o <em>Hollandse Nieuwe</em> é prato da estação. Na Escandinávia, defumado ou em conserva com mostarda e endro. Na Grã-Bretanha, entra nos <em>kippers</em> — o arenque defumado inteiro, servido no café da manhã. No Brasil, é ingrediente de nicho que aparece eventualmente em receitas de origem europeia.
          </p>

          {/* POR QUE NUTRITIVO */}
          <h2 id="por-que-nutritivo">Por que o arenque é tão nutritivo</h2>

          <p>
            Para um peixe de custo baixo na origem, o arenque tem perfil nutricional que rivaliza com ingredientes muito mais caros. Por 100g de arenque defumado:
          </p>

          <ul className="item-list">
            <li>Calorias: ~217 kcal</li>
            <li>Proteína: ~24 g</li>
            <li>Gordura total: ~12 g (predominantemente insaturada)</li>
            <li>Ômega-3: ~1,7 g</li>
            <li>Vitamina D: ~16 µg — cerca de 107% da ingestão diária recomendada</li>
            <li>Vitamina B12: ~13 µg — mais de 5× a recomendação diária</li>
            <li>Selênio: ~34 µg</li>
          </ul>

          <p>
            O ômega-3 é o destaque. 1,7g por 100g é mais do que a sardinha em lata oferece na média — que fica entre 1,0 e 1,5g dependendo da espécie e da conserva. Para comparar: atum em água tem apenas 0,1 a 0,3g de ômega-3 por 100g. A{' '}
            <a href="https://www.fao.org/fishery/en" target="_blank" rel="noopener noreferrer">FAO</a>{' '}
            lista arenque entre os peixes de maior valor nutricional para consumo humano.
          </p>
          <p>
            A vitamina D é o outro motivo de prestar atenção. Alimento com vitamina D natural em quantidade significativa é raro. Um ovo tem cerca de 2 µg por unidade. Arenque defumado tem ~16 µg por 100g — uma das fontes alimentares mais densas que existem. Para quem busca aumentar vitamina D sem suplemento, arenque é uma das opções mais concretas.
          </p>
          <p>
            O ponto de atenção: a versão defumada tem sódio elevado, em torno de 750mg por 100g. Faz parte do processo de conservação. Quem precisa controlar sódio na dieta precisa levar isso em conta — não elimina o arenque, mas define a quantidade razoável de consumo.
          </p>
          <p>
            A comparação direta com peixes acessíveis mais comuns no Brasil:
          </p>

          <ul className="item-list">
            <li>Ômega-3 no arenque: ~1,7g por 100g</li>
            <li>Ômega-3 na sardinha em lata: ~1,0–1,5g por 100g</li>
            <li>Ômega-3 no atum em água: ~0,1–0,3g por 100g</li>
            <li>Ômega-3 no salmão: ~2,0–2,5g por 100g — mais, mas custa consideravelmente mais por quilo</li>
          </ul>

          <p>
            Arenque fica entre sardinha e salmão em nutrição, e bem abaixo do salmão em preço. Não é o item mais acessível no mercado brasileiro — mas por porção, entrega mais ômega-3 do que qualquer enlatado de atum.
          </p>

          {/* ARENQUE NO BRASIL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7426869/pexels-photo-7426869.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Embalagem de produto defumado sobre superfície de madeira com ervas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="no-brasil" className="img-above">Arenque defumado no Brasil</h2>

          <p>
            Sem acesso ao peixe fresco, o arenque defumado é o que existe para comprar no Brasil. E tem uma vantagem concreta sobre o fresco: já vem pronto. Não precisa de cozimento. Abre a embalagem, usa diretamente. Para quem cozinha em dia de semana com pouco tempo, isso é relevante.
          </p>
          <p>
            O produto mais comum é o filé de arenque defumado em embalagem a vácuo, sem espinhas, em pacotes de 200 a 300g. Às vezes em azeite, às vezes em salmoura. O em azeite tem sabor mais suave; o em salmoura, mais intenso. Para quem está experimentando pela primeira vez, o em azeite é o ponto de partida mais fácil.
          </p>

          <p>Onde encontrar:</p>
          <ul className="item-list">
            <li><strong>Empórios especializados em importados europeus</strong> — busque "empório escandinavo", "deli alemão" ou "loja de produtos nórdicos" na sua cidade; capitais têm mais opções</li>
            <li><strong>Supermercados de grande porte</strong>, seção de importados — estoque irregular, mas aparece com frequência em redes maiores</li>
            <li><strong>Online</strong> — Amazon, Mercado Livre e lojas especializadas em produtos europeus têm boa oferta; compare o preço por 100g, não pela embalagem</li>
          </ul>

          <p>
            O preço varia de R$30 a R$60 por embalagem de 200–300g. O custo por 100g é maior que o da sardinha, mas você compra sem ossos e sem desperdício.
          </p>
          <p>
            Para guardar: embalagem fechada na geladeira. Depois de aberta, use em dois a três dias. Não congela bem — a textura do defumado muda com o congelamento. Se sobrou e você não vai usar nos próximos dias, o patê resolve o problema (ver seção abaixo).
          </p>
          <p>
            Arenque enlatado existe, mas é menos comum no Brasil do que a versão em embalagem a vácuo. Se encontrar, funciona da mesma forma — sabor similar, mesma praticidade.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar arenque na cozinha</h2>

          <p>
            Arenque defumado tem sabor forte. A regra de uso: comece com menos do que você acha que precisa, especialmente na primeira vez. O peixe se afirma no prato — não precisa de quantidade grande para aparecer.
          </p>

          <h3>Pasta com arenque</h3>
          <p>
            O uso mais direto. Cozinha o macarrão. Tira os filés em pedaços pequenos. Mistura com azeite, suco de limão e endro ou erva-doce picada. Pronto em 20 minutos. O sabor do arenque sustenta o prato sem precisar de muito acompanhamento — funciona bem com espaguete, fettuccine ou penne.
          </p>

          <h3>Bruschetta ou torrada</h3>
          <p>
            Cream cheese na base, filé de arenque por cima, alcaparras e cebolinha. Funciona como entrada ou jantar rápido. A gordura do cream cheese equilibra a intensidade do peixe. Se tiver endro fresco, melhor ainda — mas sem ele também funciona.
          </p>

          <h3>Salada com batata</h3>
          <p>
            Combinação clássica da culinária do norte europeu. Batata cozida, cebola roxa, arenque em pedaços, mostarda e um pouco de maionese ou iogurte natural. A gordura do arenque equilibra com o amido da batata. Sustenta, é fácil de montar e dura na geladeira — pode ser preparada com antecedência.
          </p>

          <h3>Ovos mexidos</h3>
          <p>
            30 a 40g de arenque em pedaços pequenos dentro dos ovos mexidos muda o prato completamente. Funciona como usar defumado de salmão em receitas escandinavas — adiciona proteína e sabor com quase nenhum esforço extra. Comprou arenque, tem ovos em casa, refeição resolvida.
          </p>

          <h3>Patê de arenque</h3>
          <p>
            Processa arenque defumado com cream cheese, suco de limão e pimenta. O patê dura três a quatro dias na geladeira e vai bem com crackers ou vegetais crus. Se sobrou arenque da embalagem e você não sabe o que fazer com ele, o patê é a saída mais rápida — e funciona como petisco ou lanche.
          </p>

          <p>
            Um uso que não funciona: arenque como ingrediente principal em prato delicado ou de sabores suaves. O sabor é marcante demais para pratos que dependem de sutileza. Funciona quando o prato aguenta intensidade — não quando a intenção é algo leve.
          </p>

          <div className="blog-inline-cta">
            <p>Sabe o que tem na despensa antes de ir ao mercado. <em>O Mise ajuda.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* ARENQUE OU SARDINHA */}
          <h2 id="arenque-ou-sardinha">Arenque ou sardinha: qual escolher</h2>

          <p>
            A comparação mais direta: sardinha vence em praticidade, arenque vence em densidade nutricional.
          </p>
          <p>
            Sardinha em lata está em todo mercado do Brasil. Custa entre R$4 e R$12 a unidade. Tem ômega-3, proteína e cálcio dos ossos. É um dos alimentos mais completos e acessíveis da{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>.
            Arenque defumado custa mais, é mais difícil de encontrar e tem sabor mais intenso — o que limita os contextos de uso.
          </p>

          <p>Onde o arenque leva vantagem:</p>
          <ul className="item-list">
            <li>Mais ômega-3 por 100g (~1,7g vs ~1,0–1,5g da sardinha)</li>
            <li>Mais vitamina D natural por porção</li>
            <li>Sem espinhas na versão embalada — sardinha em lata às vezes tem</li>
            <li>Pronto para usar sem preparação adicional</li>
            <li>Sabor mais marcante — menos quantidade faz o mesmo efeito no prato</li>
          </ul>

          <p>Onde sardinha vence:</p>
          <ul className="item-list">
            <li>Disponibilidade — em qualquer mercado do Brasil</li>
            <li>Preço — consideravelmente mais barata por 100g</li>
            <li>Praticidade de estoque — lata dura muito mais na despensa</li>
            <li>Versatilidade — funciona em mais tipos de receita</li>
          </ul>

          <p>
            A conclusão prática: sardinha é o item da lista de todo mês. Arenque é a compra para variar, experimentar ou buscar mais ômega-3 por porção sem mudar o cardápio todo.
          </p>
          <p>
            Se você já tem sardinha na{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            e está funcionando, não precisa trocar. Arenque entra quando você quer ampliar o repertório de peixes em casa — não como substituto, mas como adição eventual.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre arenque</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que é arenque?</p>
              <p className="faq-a">
                Arenque é um peixe de água salgada da família Clupeidae — a mesma da sardinha e da anchova. A espécie mais comum é a <em>Clupea harengus</em>, nativa do Atlântico Norte. No Brasil, é encontrado principalmente defumado e importado. Tem sabor mais intenso que a sardinha e é rico em ômega-3, vitamina D e proteína.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre arenque e sardinha?</p>
              <p className="faq-a">
                São da mesma família, mas espécies diferentes. O arenque é maior, tem sabor mais intenso — especialmente defumado — e tem mais ômega-3 por 100g (~1,7g vs 1,0–1,5g da sardinha). A sardinha é muito mais fácil de encontrar no Brasil e mais barata. Para o dia a dia, sardinha. Para variar ou buscar mais nutrientes por porção, arenque.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde comprar arenque no Brasil?</p>
              <p className="faq-a">
                Em empórios especializados em produtos europeus, em supermercados de grande porte na seção de importados e online (Amazon, Mercado Livre). O produto mais comum é o filé de arenque defumado em embalagem a vácuo, sem espinhas. O preço varia entre R$30 e R$60 por embalagem de 200–300g.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O arenque defumado tem espinhos?</p>
              <p className="faq-a">
                O arenque defumado em embalagem importada quase sempre já vem sem espinhos — é filetado antes do processo de defumação. Diferente do arenque fresco, que tem espinhas finas em quantidade. Para quem compra a versão embalada ou em conserva, não há preocupação com espinhas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como usar arenque defumado na cozinha?</p>
              <p className="faq-a">
                Arenque defumado não precisa de cozimento. Vai bem em pasta com azeite e limão, em bruschetta com cream cheese e alcaparras, em saladas com batata e cebola roxa, em ovos mexidos e em patê. O sabor é intenso — use em quantidade menor do que usaria sardinha e ajuste ao gosto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Arenque faz bem para a saúde?</p>
              <p className="faq-a">
                Sim. É rico em ômega-3, vitamina D (uma das melhores fontes alimentares naturais), vitamina B12 e proteína. Em 100g há cerca de 24g de proteína e 1,7g de ômega-3. A versão defumada tem sódio elevado (~750mg por 100g), o que requer atenção para quem controla pressão arterial.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Arenque tem muito sódio?</p>
              <p className="faq-a">
                A versão defumada sim — cerca de 750mg por 100g. O sódio é parte do processo de conservação. Quem controla sódio pode limitar a porção a cerca de 50g e equilibrar com o restante das refeições do dia. O arenque fresco tem muito menos sódio, mas é praticamente impossível de encontrar no Brasil.
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
                Criador do Mise. Comprou arenque defumado por curiosidade, ficou sem ideia do que fazer com ele por uma semana, acabou colocando na pasta. Ficou bom. Ainda tem meia embalagem na geladeira.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa organizada.<br />
              <em>Lista pronta antes de sair.</em>
            </h2>
            <p>
              O Mise conecta despensa, receitas e lista de compras num só lugar.
              Você sabe o que tem em casa antes de ir ao mercado — e para de comprar o que já tem.
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
