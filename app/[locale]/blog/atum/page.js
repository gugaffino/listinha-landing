import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Atum: o que é, valor nutricional e como usar na cozinha',
  description: 'Atum tem 26g de proteína por 100g e ômega-3 de cadeia longa. Saiba o que é, a diferença entre sólido e ralado, em óleo ou água, e como usar na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/atum',
  },
  openGraph: {
    title: 'Atum: o que é, valor nutricional e como usar na cozinha',
    description: 'Atum tem 26g de proteína por 100g e ômega-3 de cadeia longa. Saiba o que é, a diferença entre sólido e ralado, em óleo ou água, e como usar na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/atum',
    images: [
      {
        url: 'https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mão fatiando atum fresco em tábua de corte — preparação de peixe na cozinha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atum: o que é, valor nutricional e como usar na cozinha',
    description: 'Atum tem 26g de proteína por 100g e ômega-3 de cadeia longa. Saiba o que é, a diferença entre sólido e ralado, em óleo ou água, e como usar na cozinha.',
    images: ['https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quantas latas de atum posso comer por semana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A ANVISA recomenda até 2 a 3 porções de atum por semana para adultos saudáveis. Uma porção equivale a uma lata padrão com 85 a 170g de produto drenado. O atum listrado (bonito do mar), mais comum nas latas brasileiras, tem concentração menor de mercúrio que o atum-rabilho. Gestantes e crianças devem consultar orientação médica antes de consumo frequente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Atum tem ômega-3 de verdade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O ômega-3 do atum é EPA e DHA — de cadeia longa, diferente do ALA presente em chia e linhaça. Uma lata padrão entrega entre 350 e 600mg de EPA+DHA, quantidade relevante para consumo cotidiano. Esse tipo de ômega-3 é absorvido diretamente pelo organismo, sem precisar de conversão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Atum sólido ou ralado: qual é melhor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do uso. Sólido tem pedaços maiores e textura mais firme — ideal para saladas, macarrão e pratos onde os pedaços precisam aparecer. Ralado é mais fino e homogêneo, melhor para patês, recheios de torta e misturas. A diferença está no preparo, não na qualidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Atum em óleo ou em água: qual é mais saudável?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em água tem menos calorias — cerca de 130 kcal por 100g drenado, contra 180 a 200 kcal no em óleo. Também absorve melhor temperos e molhos. O em óleo, especialmente em azeite, tem sabor mais rico. Nutricionalmente, a diferença está nas calorias do óleo de conserva. Nos dois casos, escorra bem antes de usar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá para congelar atum fresco em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Atum fresco congela bem por até 3 meses. Embale individualmente por porção, retire o máximo de ar e leve ao freezer. Para descongelar, transfira para a geladeira com antecedência — nunca descongele na bancada. A textura fica levemente mais mole após o congelamento, mas ainda funciona bem em preparos cozidos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Atum engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atum em água tem 130 kcal por 100g e é um dos alimentos mais proteicos com baixo teor de gordura. O em óleo tem mais calorias por conta do óleo de conserva. O que costuma engordar não é o atum em si, mas o acompanhamento — o macarrão, o pão, a maionese. Como proteína principal de uma refeição, o atum é uma das opções mais eficientes em custo-benefício nutricional.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Atum: o que é, valor nutricional e como usar na cozinha',
  description: 'Atum tem 26g de proteína por 100g e ômega-3 de cadeia longa. Saiba o que é, a diferença entre sólido e ralado, em óleo ou água, e como usar na cozinha.',
  image: 'https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-20',
  dateModified: '2026-06-20',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/atum',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Atum', item: 'https://www.miseemcasa.com.br/pt/blog/atum' },
  ],
}

export default function Atum({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Atum</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-20">20 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Atum fresco ou em lata: guia completo para quem cozinha em casa
          </h1>
          <p className="blog-desc">
            O peixe que tem em toda despensa — e que a maioria das pessoas usa de um jeito só. O que é atum de verdade, a diferença entre listrado e rabilho, sólido e ralado, óleo e água, e como usar além do macarrão de toda semana.
          </p>

          <div className="answer-box">
            <p>
              <strong>Atum</strong> é um peixe de água salgada da família Scombridae, capturado em oceanos tropicais e subtropicais.
              Tem carne firme, avermelhada e sabor intenso. Fresco, aparece em peixarias. Em conserva, está em praticamente toda despensa brasileira — com <strong>26g de proteína por 100g</strong> e ômega-3 de cadeia longa (EPA e DHA).
              É um dos ingredientes mais versáteis e subestimados da cozinha do dia a dia.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mão fatiando atum fresco em tábua de corte — preparação de peixe na cozinha"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: cottonbro studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é atum</a></li>
              <li><a href="#valor-nutricional">Valor nutricional</a></li>
              <li><a href="#fresco-ou-em-lata">Fresco ou em lata</a></li>
              <li><a href="#oleo-ou-agua">Em óleo ou em água</a></li>
              <li><a href="#solido-ou-ralado">Sólido ou ralado</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#mercurio">Atum e mercúrio</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8351649/pexels-photo-8351649.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bancada de peixaria com peixes frescos inteiros expostos sobre gelo"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kindel Media / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é atum</h2>

          <p>
            Atum é o nome comum de várias espécies do gênero <em>Thunnus</em> e de outros peixes próximos da família Scombridae. São peixes de nado rápido, migratórios, encontrados em oceanos tropicais e subtropicais em todo o mundo.
          </p>
          <p>
            No Brasil, o atum mais comum nas latas é o listrado (<em>Katsuwonus pelamis</em>), também chamado de bonito do mar. É menor e tem carne mais avermelhada que o famoso atum-rabilho (<em>Thunnus thynnus</em>), que aparece em sushis e em cortes premium de peixaria. A maior parte do atum em conserva vendido no mercado brasileiro é listrado — e é exatamente ele que vem na lata de R$ 5 que todo mundo tem no armário.
          </p>
          <p>
            Fresco, aparece em peixarias de cidades litorâneas e em mercados maiores. A carne é densa, de cor rosada a vermelho intenso dependendo da espécie, e tem sabor marcante. Peixe raro de se desperdiçar num preparo mal executado.
          </p>
          <p>
            Em conserva, o atum se tornou um dos ingredientes mais democratizados da cozinha brasileira: proteína acessível, prateleira longa, preparo zero. Quem levanta a mão que tem pelo menos uma lata no armário agora — exato.
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="valor-nutricional">Valor nutricional do atum</h2>

          <p>
            Atum é proteico de verdade. Por 100g de atum em água (drenado), os valores aproximados são:
          </p>

          <ul className="item-list">
            <li><strong>130 kcal</strong></li>
            <li><strong>26g de proteína</strong></li>
            <li><strong>3g de gordura</strong> — majoritariamente insaturada, rica em ômega-3</li>
            <li><strong>Menos de 1g de carboidrato</strong></li>
            <li><strong>350–600mg de EPA e DHA</strong> (ômega-3 de cadeia longa)</li>
          </ul>

          <p>
            O ômega-3 do atum é EPA e DHA — de cadeia longa. É diferente do ALA presente em chia e linhaça: o ALA precisa ser convertido pelo organismo em EPA e DHA, com eficiência baixa. No atum, a cadeia já está pronta para uso direto.
          </p>
          <p>
            Uma lata padrão de 170g (peso drenado aproximado de 120g) entrega cerca de 30g de proteína. Para comparação: um ovo grande tem 6g de proteína. A lata inteira de atum equivale a cinco ovos em proteína, com custo que costuma ser menor.
          </p>
          <p>
            Atum também é uma boa fonte de selênio, vitamina B12, niacina e fósforo. Não é um alimento completo sozinho, mas como parte de uma alimentação variada — no arroz, na salada, no macarrão — entrega nutrição real sem trabalho.
          </p>
          <p>
            Se você procura{' '}
            <a href="/blog/alimentos-ricos-em-proteinas">alimentos ricos em proteínas</a>{' '}
            de baixo custo, atum em lata é difícil de bater.
          </p>

          {/* FRESCO OU EM LATA */}
          <h2 id="fresco-ou-em-lata">Fresco ou em lata: qual escolher</h2>

          <p>
            A resposta depende do que você vai fazer com ele — e de onde você mora.
          </p>
          <p>
            <strong>Fresco</strong> tem textura superior: firme, com uma mastigação que a lata não reproduz. Permite preparos que a conserva não permite — tataki, grelhado raro, crudo, sashimi. O sabor é mais limpo e menos salgado. Mas não está disponível em todo supermercado, tem validade de 1 a 2 dias na geladeira e custa significativamente mais por quilo.
          </p>
          <p>
            <strong>Em lata</strong> é a realidade de praticamente toda cozinha brasileira. Pronto para consumo, dura 2 a 3 anos na despensa, disponível em qualquer mercado. Entra direto no arroz, na salada, no macarrão, no sanduíche. Menos glamoroso que o fresco, mas é o que funciona toda semana.
          </p>
          <p>
            Se você mora perto de uma peixaria com bom fornecimento e quer fazer um preparo específico onde a textura importa: fresco vale. Para a rotina semanal, a lata é o ingrediente certo — e faz sentido manter estoque na{' '}
            <a href="/funcionalidades/despensa">despensa</a>.
          </p>
          <p>
            Uma variação que poucos conhecem: o atum em sachê. Mesmo produto da lata, mas em embalagem de plástico selado. Tende a ter textura um pouco mais firme que a lata equivalente, é mais leve pra carregar e não precisa de abridor. Cada vez mais disponível no mercado brasileiro.
          </p>

          {/* EM ÓLEO OU EM ÁGUA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/17942043/pexels-photo-17942043.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Prato com fatias de atum servido com vegetais e ervas frescas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nadin Sh / Pexels</p>
          </div>

          <h2 id="oleo-ou-agua" className="img-above">Em óleo ou em água: a diferença real</h2>

          <p>
            A maioria das pessoas tem preferência. Poucos sabem exatamente o que muda entre os dois formatos.
          </p>

          <h3>Atum em água</h3>
          <p>
            Mais seco, textura mais firme, menos calorias. Por 100g drenado, tem cerca de 130 kcal. Absorve melhor temperos e molhos — o tomate, o limão, o azeite, a maionese entram com mais intensidade porque o atum não vem pré-gorduroso. É o mais versátil para receitas, especialmente quando você vai temperar depois.
          </p>

          <h3>Atum em óleo</h3>
          <p>
            Mais úmido, textura mais macia, sabor mais rico logo de saída. Por 100g drenado, tem entre 180 e 200 kcal dependendo do óleo. O tipo de óleo faz diferença real: atum em azeite de oliva tem sabor notavelmente melhor que atum em óleo de soja. Se vai comer simples — direto no pão ou com arroz e sal — o em azeite compensa a diferença de custo.
          </p>
          <p>
            A escolha prática: se vai temperar muito (pasta de atum, salada com molho, mistura), o em água é mais versátil. Se vai comer com pouco preparo, o em azeite tem sabor que não precisa de ajuda.
          </p>
          <p>
            Uma coisa que todo mundo aprende em algum momento: <strong>escorra sempre</strong>. Especialmente o em óleo. O excesso de líquido de conserva descaracteriza qualquer preparo — macarrão aguado, salada encharcada. Drenagem completa é o passo que faz diferença antes de qualquer receita.
          </p>

          {/* SÓLIDO OU RALADO */}
          <h2 id="solido-ou-ralado">Sólido ou ralado: o que muda na prática</h2>

          <p>
            Essa distinção é menos intuitiva do que parece — e faz diferença real dependendo do que você vai fazer.
          </p>

          <h3>Sólido (ao natural)</h3>
          <p>
            São pedaços maiores, geralmente lombos ou postas. A textura é firme, os pedaços aparecem no prato. Uma lata de 60g de sólido drenado entrega aproximadamente 17g de proteína. É o formato ideal para saladas onde você quer que o atum apareça, para macarrão com pedaços inteiros e para pratos onde a textura faz parte da proposta.
          </p>

          <h3>Ralado (desfiado)</h3>
          <p>
            Migalhas de atum com textura fina e homogênea. A mesma lata de 60g tem aproximadamente 14g de proteína — levemente menos porque o processo deixa mais resíduos na embalagem. É o formato ideal para patê, recheio de torta, pasta de atum e misturas onde você quer homogeneidade, não pedaços.
          </p>
          <p>
            São produtos diferentes com usos diferentes. Não tem um "melhor" — tem o certo pro que você vai fazer. Comprar sólido quando a receita pede ralado resulta em pedaços que atrapalham a textura. O contrário resulta num prato sem aquela mordida que o sólido entrega.
          </p>
          <p>
            Se você mantém atum na{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            com frequência, vale ter os dois formatos. A rotatividade justifica o estoque.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar atum na cozinha</h2>

          <p>
            Atum em lata é um dos ingredientes mais subestimados da despensa. Entra em mais pratos do que a maioria das pessoas usa — e não precisa de muito preparo pra funcionar.
          </p>

          <h3>No arroz e no macarrão</h3>
          <p>
            A combinação clássica. Atum com azeite, alho e limão no macarrão leva 10 minutos e usa ingredientes que todo mundo tem. Com arroz, funciona como proteína fácil no almoço de semana. O sólido tem melhor resultado aqui — os pedaços aparecem e dão estrutura ao prato.
          </p>

          <h3>Em saladas</h3>
          <p>
            Com folhas, tomate, ovos cozidos e azeitona, vira uma refeição completa sem cozinhar nada. O atum em água absorve melhor o tempero da salada. Uma{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            com esses ingredientes resolve o almoço de vários dias.
          </p>

          <h3>Em patê e pasta</h3>
          <p>
            Atum ralado com cream cheese, ricota ou requeijão forma uma pasta versátil para pão e biscoito. Com cebola, salsinha e limão, fica um aperitivo sem trabalho. Tempere no fim e prove antes de salgar — o atum em conserva já tem sódio.
          </p>

          <h3>Em torta e quiche</h3>
          <p>
            Clássico da cozinha caseira brasileira. Atum com cebola, azeitona e tomate é um dos recheios mais simples de preparar — e que some mais rápido da mesa. Funciona tanto em torta assada quanto em versões de liquidificador.
          </p>

          <h3>Grelhado (fresco)</h3>
          <p>
            Se conseguiu atum fresco, corte em medalhão de 2cm de espessura. Tempere com sal, pimenta e azeite. Frigideira bem quente, 1 a 2 minutos de cada lado. O centro deve ficar róseo — atum bem passado perde textura e sabor. É um preparo rápido que impressiona mais do que a maioria dos peixes em tempo equivalente.
          </p>
          <p>
            E veja bem: o{' '}
            <a href="/blog/o-que-e-cavala">atum não é o único peixe que funciona assim</a>.
            A cavala, menos conhecida e geralmente mais barata, tem preparo similar e um perfil nutricional competitivo.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* MERCÚRIO */}
          <h2 id="mercurio">Atum e mercúrio: quantas vezes por semana</h2>

          <p>
            Essa é a pergunta que muita gente tem e poucos fazem em voz alta.
          </p>
          <p>
            Atum concentra mercúrio porque é um predador que se alimenta de peixes menores ao longo da vida. O mercúrio acumula na cadeia alimentar — quanto maior e mais velho o peixe, mais concentrado. O atum-rabilho (<em>Thunnus thynnus</em>), que aparece em sushi premium, tem concentração bem maior que o listrado das latas.
          </p>
          <p>
            O listrado (<em>Katsuwonus pelamis</em>), o bonito do mar das conservas brasileiras, tem ciclo de vida mais curto e concentração significativamente menor de mercúrio. É o formato mais seguro para consumo regular.
          </p>
          <p>
            A{' '}
            <a href="https://www.gov.br/anvisa/pt-br" target="_blank" rel="noopener noreferrer">ANVISA</a>{' '}
            recomenda que adultos saudáveis não excedam 2 a 3 porções de atum por semana. Uma porção é uma lata padrão — 85 a 170g de produto drenado, dependendo da embalagem.
          </p>
          <p>
            Para a maioria das pessoas — adultos saudáveis que comem atum como parte de uma dieta variada — esse limite é fácil de respeitar. Quem precisa ter mais cuidado: gestantes, mulheres que planejam engravidar e crianças pequenas. Nesses casos, vale consultar orientação médica.
          </p>
          <p>
            Comer atum três vezes por semana dentro do limite de porção é diferente de comer atum todos os dias em quantidades grandes. O problema não é o atum em si — é o acúmulo sem variedade.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre atum</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quantas latas de atum posso comer por semana?</p>
              <p className="faq-a">
                A ANVISA recomenda até 2 a 3 porções por semana para adultos saudáveis. Uma porção é uma lata padrão (85 a 170g drenado). O atum listrado das latas brasileiras tem menor concentração de mercúrio que o rabilho. Gestantes e crianças devem consultar orientação médica antes de consumo frequente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Atum tem ômega-3 de verdade?</p>
              <p className="faq-a">
                Sim. O ômega-3 do atum é EPA e DHA — de cadeia longa, diferente do ALA de chia e linhaça. Uma lata padrão entrega entre 350 e 600mg de EPA+DHA, quantidade relevante para consumo cotidiano. Esse tipo de ômega-3 é absorvido diretamente pelo organismo, sem conversão.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Atum sólido ou ralado: qual é melhor?</p>
              <p className="faq-a">
                Depende do uso. Sólido tem pedaços maiores e textura firme — melhor para saladas e macarrão. Ralado é homogêneo — melhor para patês, recheios e misturas. Não tem um superior: tem o certo para o que você vai fazer.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Atum em óleo ou em água: qual é mais saudável?</p>
              <p className="faq-a">
                Em água tem menos calorias (cerca de 130 kcal/100g drenado, contra 180–200 no em óleo) e absorve melhor temperos. O em óleo, especialmente em azeite, tem sabor mais rico. A diferença nutricional está nas calorias do óleo. Nos dois casos, escorra bem antes de usar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Dá para congelar atum fresco em casa?</p>
              <p className="faq-a">
                Dá. Atum fresco congela bem por até 3 meses. Embale por porção, retire o ar e leve ao freezer. Descongele na geladeira — nunca na bancada. A textura fica levemente mais mole após o congelamento, mas funciona bem em preparos cozidos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Atum engorda?</p>
              <p className="faq-a">
                Atum em água tem 130 kcal/100g — proteico e com baixo teor de gordura. O em óleo tem mais calorias pelo óleo de conserva. O que costuma engordar não é o atum, mas o acompanhamento — o macarrão, o pão, a maionese. Como proteína principal, é uma das opções mais eficientes em custo-benefício nutricional.
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
                Criador do Mise. Tem sempre pelo menos duas latas de atum na despensa. Uma pra receita, outra que some no caminho.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Se tem atum na despensa, tem jantar.<br />
              <em>O Mise sabe o que tem em casa.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você nunca vai ao mercado sem saber o que já tem — e o atum não vira surpresa no fundo do armário.
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
