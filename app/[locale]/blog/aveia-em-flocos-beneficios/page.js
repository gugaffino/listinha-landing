import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Aveia em flocos: benefícios e como usar na cozinha',
  description: 'Aveia em flocos tem betaglucana, fibra que reduz colesterol LDL e controla glicemia. Saiba os benefícios e como incluir aveia na rotina semanal de cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/aveia-em-flocos-beneficios',
  },
  openGraph: {
    title: 'Aveia em flocos: benefícios e como usar na cozinha',
    description: 'Aveia em flocos tem betaglucana, fibra que reduz colesterol LDL e controla glicemia. Saiba os benefícios e como incluir aveia na rotina semanal de cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/aveia-em-flocos-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Tigela com aveia em flocos servida no café da manhã com frutas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aveia em flocos: benefícios e como usar na cozinha',
    description: 'Aveia em flocos tem betaglucana, fibra que reduz colesterol LDL e controla glicemia. Saiba os benefícios e como incluir aveia na rotina semanal de cozinha.',
    images: ['https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Aveia em flocos engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não por si só. Aveia em flocos tem cerca de 360 kcal por 100g — similar ao arroz — mas a betaglucana gera saciedade alta. Uma porção regular não engorda mais do que outros carboidratos. O problema costuma ser o que se adiciona junto: açúcar, mel em excesso ou granola industrializada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Aveia em flocos tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A aveia naturalmente não contém glúten, mas é frequentemente processada nas mesmas instalações que o trigo, podendo haver contaminação cruzada. Para celíacos ou sensíveis ao glúten, é necessário comprar aveia certificada "sem glúten", que passou por processamento separado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso comer aveia em flocos todo dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O consumo diário é seguro e recomendado para quem quer os benefícios da betaglucana. A dose efetiva para controle do colesterol é 3g de betaglucana por dia, equivalente a cerca de 3 colheres de sopa de flocos grossos (40g). Não é necessário comer mais do que isso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Aveia em flocos crua ou cozida — tem diferença?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A betaglucana funciona tanto crua quanto cozida. No overnight oats (aveia hidratada crua na geladeira) ou no mingau cozido, o efeito na saciedade e no colesterol é comparável. A diferença é só na textura e no tempo de preparo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre aveia em flocos finos e grossos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flocos grossos são menos processados e preservam melhor a estrutura da betaglucana. Flocos finos têm textura mais cremosa e cozinham mais rápido, mas com menor concentração de fibra solúvel. Para efeito no colesterol e saciedade, flocos grossos são mais eficazes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Aveia em flocos serve para dieta low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aveia tem carboidratos — não é um alimento low carb. Mas o índice glicêmico é baixo graças à betaglucana: o açúcar é absorvido mais devagar, sem pico brusco de insulina. Para dieta cetogênica estrita, aveia não cabe. Para dietas de controle glicêmico moderado, pode ser incluída em porção controlada.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aveia em flocos: benefícios e como usar na cozinha',
  description: 'Aveia em flocos tem betaglucana, fibra que reduz colesterol LDL e controla glicemia. Saiba os benefícios e como incluir aveia na rotina semanal de cozinha.',
  image: 'https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-28',
  dateModified: '2026-06-28',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/aveia-em-flocos-beneficios',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aveia em flocos: benefícios', item: 'https://www.miseemcasa.com.br/pt/blog/aveia-em-flocos-beneficios' },
  ],
}

export default function AveiaEmFlocosPage({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Aveia em flocos: benefícios</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-28">28 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Aveia em flocos: benefícios reais e como usar todo dia
          </h1>
          <p className="blog-desc">
            Aveia em flocos ficou famosa pelos benefícios — e, desta vez, a fama é merecida. Mas tem uma diferença importante entre os tipos. Aqui está o que realmente importa saber antes de comprar.
          </p>

          <div className="answer-box">
            <p>
              <strong>Aveia em flocos</strong> é rica em <strong>betaglucana</strong>, uma fibra solúvel que reduz o colesterol LDL,
              controla a glicemia e aumenta a saciedade. Para ter efeito, o consumo precisa ser regular —
              cerca de 3 colheres de sopa de flocos grossos por dia é suficiente.
              Flocos grossos preservam mais betaglucana do que os finos ou a aveia instantânea.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Tigela com aveia em flocos servida no café da manhã com frutas frescas"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Regina Ferraz / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é aveia em flocos</a></li>
              <li><a href="#betaglucana">Betaglucana: o principal ativo</a></li>
              <li><a href="#outros-beneficios">Outros benefícios documentados</a></li>
              <li><a href="#flocos-farelo-farinha">Flocos, farelo ou farinha?</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#quanto-consumir">Quanto consumir por dia</a></li>
              <li><a href="#despensa">Aveia e a despensa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2290077/pexels-photo-2290077.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Aveia em flocos e sementes em close-up mostrando textura e cor natural dos grãos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é aveia em flocos</h2>

          <p>
            Aveia em flocos é o grão de aveia (<em>Avena sativa</em>) processado em lâminas. O processo é simples: o grão passa por vapor e depois por cilindros que o achata. Dependendo da espessura do resultado, você tem flocos grossos, flocos finos ou aveia instantânea.
          </p>
          <p>
            Isso não é detalhe de rótulo. A espessura muda a concentração de betaglucana — a fibra responsável pelos principais benefícios que a aveia é famosa por ter. Quanto menos processado, mais betaglucana preservada.
          </p>
          <p>
            O grão completo de aveia (aveia em grão ou aveia integral) tem a maior concentração. Os flocos grossos ficam logo abaixo. Aveia instantânea — a de sachê — é o extremo mais processado: conveniente, mas com menor teor da fibra que interessa.
          </p>

          {/* BETAGLUCANA */}
          <h2 id="betaglucana">Betaglucana: o que está por trás dos benefícios</h2>

          <p>
            Betaglucana é uma fibra solúvel. No intestino, ela absorve água e forma um gel espesso. Esse gel faz duas coisas ao mesmo tempo: captura parte do colesterol LDL antes de ele ser absorvido e retarda a entrada de açúcar na corrente sanguínea.
          </p>
          <p>
            O efeito no colesterol é bem documentado — tão bem que a Agência Nacional de Vigilância Sanitária (ANVISA) aprova alegações de saúde para produtos com aveia baseadas exatamente nessa fibra. Não é promessa de influenciador. É evidência com embasamento suficiente pra órgão regulador aprovar comunicação ao consumidor.
          </p>
          <p>
            Estudos clínicos mostram redução consistente no colesterol LDL com consumo regular. O mecanismo: a betaglucana literalmente sequestra parte do colesterol no intestino, levando embora antes da absorção.
          </p>
          <p>
            Para atingir a quantidade efetiva, a referência é <strong>3g de betaglucana por dia</strong>. Isso equivale a cerca de 3 colheres de sopa de flocos grossos (40g) ou 2 colheres de sopa de farelo de aveia. Uma porção no café da manhã já resolve. Não precisa comer aveia em toda refeição.
          </p>

          {/* OUTROS BENEFÍCIOS */}
          <h2 id="outros-beneficios">Outros benefícios documentados</h2>

          <p>
            O colesterol é o mais estudado. Mas a mesma betaglucana age em outras frentes:
          </p>

          <h3>Controle de glicemia</h3>
          <p>
            O gel formado no intestino retarda a absorção de açúcar. A glicemia sobe mais devagar depois de uma refeição com aveia — pico menor de insulina, sensação de energia mais estável. Para quem tem diabetes tipo 2 ou pré-diabetes, é especialmente relevante. Para qualquer pessoa, evita aquela queda de energia de manhã cedo.
          </p>

          <h3>Saciedade</h3>
          <p>
            O gel ocupa espaço no estômago e retarda o esvaziamento gástrico. Um mingau de aveia às 8h pode sustentar até o almoço sem necessidade de beliscar biscoito às 10h30.
          </p>
          <p>
            Você sabe de qual biscoito estou falando.
          </p>

          <h3>Saúde intestinal</h3>
          <p>
            As fibras da aveia alimentam as bactérias benéficas do intestino — função prebiótica — e regularizam o trânsito. Funciona no médio prazo, com consumo consistente. Não resolve nada em dois dias.
          </p>

          <h3>Pressão arterial e outros ativos</h3>
          <p>
            O consumo regular de aveia está associado a pequenas reduções na pressão sistólica. Além da betaglucana, o grão tem avenantramidas — antioxidantes exclusivos da aveia com ação anti-inflamatória. Tem também magnésio, ferro, zinco e vitaminas do complexo B. Aveia é um dos{' '}
            <a href="/blog/alimentos-ricos-em-magnesio">alimentos ricos em magnésio</a>{' '}
            que você consegue comprar em qualquer mercado por poucos reais.
          </p>

          {/* FLOCOS FARELO FARINHA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5604832/pexels-photo-5604832.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tigela de aveia com frutas vermelhas frescas — overnight oats pronto para servir"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: thea a / Pexels</p>
          </div>

          <h2 id="flocos-farelo-farinha" className="img-above">Flocos, farelo ou farinha — qual usar?</h2>

          <p>
            Os três vêm do mesmo grão. Mas diferem em processamento, concentração de fibra solúvel e uso na cozinha. Comprar o tipo errado pra receita errada é o jeito mais fácil de desperdiçar dinheiro em ingrediente saudável.
          </p>

          <h3>Flocos grossos</h3>
          <p>
            Menos processados. Preservam melhor a estrutura da betaglucana. São os mais versáteis: funcionam no mingau, no overnight oats, em granola caseira e em panquecas. Se você vai comprar apenas um tipo de aveia, é este.
          </p>

          <h3>Flocos finos</h3>
          <p>
            Cozinham mais rápido, textura mais cremosa. Usados em vitaminas, iogurte e receitas onde textura não importa. Menor concentração de betaglucana pelo processamento mais intenso.
          </p>

          <h3>Farelo de aveia</h3>
          <p>
            O mais concentrado em betaglucana — é o extrato fibroso do grão. Funciona bem em vitaminas, iogurte e sopas. Textura quase pulverulenta limita o uso em preparações com estrutura.
          </p>

          <h3>Farinha de aveia</h3>
          <p>
            Usada em bolos, panquecas e pães. Perde a maior parte da betaglucana no processamento. É nutritiva e tem menos glúten que a farinha de trigo, mas não é a escolha certa se o objetivo é o efeito no colesterol ou na glicemia.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar aveia em flocos na cozinha</h2>

          <p>
            Aveia não precisa de receita elaborada. As formas mais simples são as que realmente entram na rotina e ficam lá.
          </p>

          <h3>Overnight oats</h3>
          <p>
            O preparo mais prático: aveia flocos + leite ou iogurte + banana amassada ou fruta picada. Mistura numa tigela, cobre com plástico, deixa na geladeira de véspera. De manhã, está pronto. Pode adicionar mel, canela, frutas secas. Não precisa de fogo. Você prepara enquanto janta e come no dia seguinte.
          </p>

          <h3>Mingau</h3>
          <p>
            Uma xícara de aveia + leite + pitada de canela + panela em fogo médio por 5 minutos. Simples como parece. Adiciona mel no final se quiser doce.
          </p>

          <h3>Granola caseira</h3>
          <p>
            Aveia flocos misturada com mel, azeite, nozes e coco ralado, espalhada em assadeira e assada por 20 minutos a 180°C. O resultado é muito melhor do que granola de caixinha — e você controla o açúcar. Se quiser o passo a passo completo, tem o guia de{' '}
            <a href="/blog/o-que-e-granola">granola caseira</a>{' '}
            com proporções e variações.
          </p>

          <h3>Panquecas rápidas</h3>
          <p>
            Duas colheres de sopa de aveia + 1 ovo + 1 banana amassada. Bate no liquidificador ou mistura numa tigela com garfo. Frita em frigideira antiaderente. Não é a panqueca francesa — é a panqueca de quem tem 10 minutos de manhã.
          </p>

          <h3>Em sopas e caldos</h3>
          <p>
            Aveia em flocos finos engrossa caldos naturalmente. Adiciona 2 colheres na sopa cremosa no lugar do amido de milho. Não altera o sabor, só a textura.
          </p>

          <div className="blog-inline-cta">
            <p>Aveia na despensa, lista sempre atualizada. <em>O Mise cuida disso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* QUANTO CONSUMIR */}
          <h2 id="quanto-consumir">Quanto consumir por dia</h2>

          <p>
            A dose de referência para efeito no colesterol é <strong>3g de betaglucana por dia</strong>. Na prática:
          </p>

          <ul className="item-list">
            <li>3 colheres de sopa de flocos grossos (cerca de 40g)</li>
            <li>ou 2 colheres de sopa de farelo de aveia (cerca de 30g)</li>
          </ul>

          <p>
            Não é necessário dividir em várias refeições. Uma porção por dia, consumida com regularidade, produz os efeitos documentados. O efeito no colesterol começa a aparecer em 4 a 8 semanas de consumo consistente — não é resultado de uma semana.
          </p>
          <p>
            Aveia tem cerca de 360 kcal por 100g — densidade calórica similar ao arroz. Não é um alimento "livre". Mas a saciedade que gera tende a compensar: você come menos nas horas seguintes.
          </p>

          {/* DESPENSA */}
          <h2 id="despensa">Aveia e a despensa</h2>

          <p>
            Aveia em flocos é daqueles itens que faz sentido ter sempre em casa — junto com arroz, feijão, azeite e macarrão. Tem longa validade. Custa pouco. Resolve vários tipos de refeição, do café da manhã ao jantar leve.
          </p>
          <p>
            O único problema é que você só percebe que acabou no momento em que vai usar. Segunda de manhã, sem aveia pra fazer overnight oats. Aveia deveria ser item fixo na lista — daqueles que você repõe antes de acabar. A{' '}
            <a href="/blog/lista-de-compras-saudavel">lista de compras saudável</a>{' '}
            tem outros itens que funcionam da mesma forma: presença discreta na despensa, uso frequente, consequência grande quando falta.
          </p>
          <p>
            Para guardar bem: aveia em flocos em pote fechado, fora da geladeira, dura até 12 meses. Depois de aberta, verifique se não tem cheiro rançoso — sinal de oxidação. Se quiser organizar os cereais e grãos de casa de forma mais sistemática, o guia de{' '}
            <a href="/blog/como-organizar-a-despensa">como organizar a despensa</a>{' '}
            cobre exatamente isso.
          </p>
          <p>
            Junto com outros grãos funcionais como{' '}
            <a href="/blog/quinoa-para-que-serve">quinoa</a>
            , aveia compõe o estoque básico de uma cozinha que funciona na semana. A diferença é que aveia tem mais usos no café da manhã — e custa muito menos por kilo.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre aveia em flocos</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Aveia em flocos engorda?</p>
              <p className="faq-a">
                Não por si só. Aveia tem cerca de 360 kcal por 100g, mas a betaglucana gera saciedade alta — você fica com menos fome nas horas seguintes. Uma porção regular não engorda mais do que outros carboidratos. O problema costuma ser o que se adiciona junto: açúcar em excesso, granola industrializada por cima, mel em quantidade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Aveia em flocos tem glúten?</p>
              <p className="faq-a">
                A aveia em si não contém glúten. Mas é frequentemente processada nas mesmas instalações que o trigo, podendo ter contaminação cruzada. Para celíacos ou sensíveis ao glúten, é necessário comprar aveia com certificação "sem glúten", que passa por processamento e embalagem separados do trigo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso comer aveia em flocos todo dia?</p>
              <p className="faq-a">
                Sim. O consumo diário é seguro e recomendado para quem quer os benefícios da betaglucana. A dose efetiva para controle de colesterol é 3g de betaglucana por dia — cerca de 3 colheres de sopa de flocos grossos. Não é necessário consumir mais do que isso. O efeito aparece com consistência ao longo de semanas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Aveia em flocos crua ou cozida — tem diferença nos benefícios?</p>
              <p className="faq-a">
                A betaglucana funciona tanto crua quanto cozida. No overnight oats — aveia hidratada crua na geladeira — ou no mingau cozido no fogão, o efeito na saciedade e no colesterol é comparável. A diferença está na textura e no tempo de preparo, não na eficácia.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre aveia em flocos finos e grossos?</p>
              <p className="faq-a">
                Flocos grossos são menos processados e preservam melhor a estrutura da betaglucana. Flocos finos têm textura mais cremosa e cozinham mais rápido, mas com menor concentração de fibra solúvel. Para efeito no colesterol e saciedade, flocos grossos são mais eficazes. Para vitaminas e receitas cremosas, os finos funcionam melhor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Aveia em flocos serve para dieta low carb?</p>
              <p className="faq-a">
                Aveia tem carboidratos — não é um alimento low carb. Mas o índice glicêmico é baixo graças à betaglucana: o açúcar é absorvido mais devagar, sem pico brusco de insulina. Para dieta cetogênica estrita, aveia não cabe. Para dietas de controle glicêmico moderado, pode ser incluída em porção controlada (1 a 2 colheres).
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
                Criador do Mise. Tem aveia em flocos grossos na despensa há dois anos. Usou toda semana durante três meses, depois ficou quatro semanas sem comprar e ficou sem. É exatamente esse tipo de coisa que o Mise existe pra evitar.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Aveia na lista.<br />
              <em>Nunca mais falta na despensa.</em>
            </h2>
            <p>
              Com o Mise, aveia em flocos fica como item fixo da despensa. Quando acabar, aparece automaticamente na lista de compras. Sem surpresa na segunda-feira de manhã.
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
