import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é cúrcuma: benefícios, como usar e onde comprar',
  description: 'Cúrcuma é o tempero amarelo que colore curry, arroz e sopas. Saiba o que é, para que serve a curcumina, como absorver melhor e onde comprar no Brasil.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/o-que-e-curcuma',
  },
  openGraph: {
    title: 'O que é cúrcuma: benefícios, como usar e onde comprar',
    description: 'Cúrcuma é o tempero amarelo que colore curry, arroz e sopas. Saiba o que é, para que serve a curcumina, como absorver melhor e onde comprar no Brasil.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/o-que-e-curcuma',
    images: [
      {
        url: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pó de cúrcuma amarelo-alaranjado em colher de madeira sobre superfície escura — tempero açafrão-da-terra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é cúrcuma: benefícios, como usar e onde comprar',
    description: 'Cúrcuma é o tempero amarelo que colore curry, arroz e sopas. Saiba o que é, para que serve a curcumina, como absorver melhor e onde comprar no Brasil.',
    images: ['https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cúrcuma e açafrão são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. São plantas completamente diferentes. Cúrcuma (Curcuma longa) é uma raiz da família do gengibre, moída em pó amarelo. Açafrão verdadeiro (Crocus sativus) são os filamentos secos de uma flor — uma das especiarias mais caras do mundo. No Brasil, "açafrão-da-terra" e "açafrão-da-Índia" são nomes populares para cúrcuma. Quando uma receita pede "açafrão" sem qualificar, quase sempre quer dizer cúrcuma.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto de cúrcuma por dia é seguro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Como tempero culinário, 1-3 colheres de chá por dia é uma quantidade comum e segura para a maioria das pessoas. Doses altas de curcumina em suplementos (acima de 1-2g/dia por períodos longos) podem causar efeitos gastrointestinais. Pessoas com cálculos biliares, que tomam anticoagulantes ou que têm problemas de fígado devem consultar um médico antes de usar doses altas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cúrcuma em pó tem os mesmos benefícios que a raiz fresca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A raiz fresca tem curcumina mais preservada e compostos voláteis adicionais que se perdem no processo de secagem e moagem. O pó, por outro lado, é mais concentrado em curcumina por grama de peso. Na prática culinária, as duas formas funcionam bem. A raiz fresca tem sabor mais vibrante e é ótima ralada diretamente no prato. O pó é mais prático e fácil de armazenar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cúrcuma mancha roupa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, e bastante. A curcumina é um pigmento intenso que impregna tecido, madeira e superfícies porosas. Use colher de inox, não de madeira. Prefira roupas que não importam quando cozinhar com cúrcuma. Se manchar, trate imediatamente com água fria e sabão — água quente fixa a mancha. Exposta ao sol, a mancha costuma desvanecer com o tempo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso usar cúrcuma na gravidez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em quantidades culinárias normais (como tempero em receitas), cúrcuma é segura durante a gravidez. O problema são as doses de suplemento: quantidades altas podem estimular contrações uterinas. Grávidas devem evitar suplementos de curcumina e consultar médico antes de usar doses acima do que vai numa receita comum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cúrcuma perde propriedades ao cozinhar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parte dos compostos voláteis e antioxidantes se degrada com o calor prolongado. Mas a curcumina em si é relativamente estável no calor — especialmente em preparos com gordura, que aumentam a absorção. O leite dourado e o curry, por exemplo, cozinham com gordura e preservam bem os benefícios. Evite fervura muito longa sem líquido, que tende a degradar mais.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é cúrcuma: benefícios, como usar e onde comprar',
  description: 'Cúrcuma é o tempero amarelo que colore curry, arroz e sopas. Saiba o que é, para que serve a curcumina, como absorver melhor e onde comprar no Brasil.',
  image: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-29',
  dateModified: '2026-05-29',
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
    '@id': 'https://www.miseemcasa.com.br/blog/o-que-e-curcuma',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é cúrcuma', item: 'https://www.miseemcasa.com.br/blog/o-que-e-curcuma' },
  ],
}

export default function OQueECurcuma({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é cúrcuma</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-29">29 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cúrcuma: o que é o açafrão-da-terra e como usar na cozinha
          </h1>
          <p className="blog-desc">
            O tempero amarelo que aparece em curry, arroz e leite dourado. Todo mundo já viu, pouca gente sabe por que precisa de pimenta preta junto — e menos gente ainda sabe guardar do jeito certo. Aqui está o essencial sobre cúrcuma, sem exagero de benefício e sem frescura de uso.
          </p>

          <div className="answer-box">
            <p>
              <strong>Cúrcuma</strong> (<em>Curcuma longa</em>) é uma raiz da família do gengibre, originária da Ásia, que depois de seca e moída vira o pó amarelo-alaranjado que colore curry e arroz.
              Seu composto ativo principal é a <strong>curcumina</strong>, com propriedades anti-inflamatórias e antioxidantes estudadas há décadas.
              Para ser absorvida pelo organismo, a curcumina precisa de dois aliados: pimenta preta e gordura.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pó de cúrcuma amarelo-alaranjado em colher de madeira sobre superfície escura — tempero açafrão-da-terra"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: ClickerHappy / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é cúrcuma</a></li>
              <li><a href="#acafrao-diferenca">Cúrcuma ou açafrão: qual a diferença</a></li>
              <li><a href="#curcumina">O que é a curcumina (e a pimenta)</a></li>
              <li><a href="#beneficios">Benefícios com evidência</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#comprar-guardar">Como comprar e guardar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6220710/pexels-photo-6220710.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Raízes frescas de cúrcuma ao lado de pó amarelo em recipiente — comparação entre raiz e tempero moído"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Karl Solano / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é cúrcuma</h2>

          <p>
            Cúrcuma (<em>Curcuma longa</em>) é uma planta herbácea da família do gengibre (<em>Zingiberaceae</em>), nativa da Ásia — com a Índia como principal produtor, responsável por mais de 75% da produção mundial. A parte usada é o rizoma: uma raiz subterrânea que, depois de colhida, cozida, seca e moída, vira o pó amarelo-alaranjado característico.
          </p>
          <p>
            A cor intensa é o traço mais reconhecível. Vem da curcumina, um pigmento que impregna tudo que toca — tábua de madeira, colher porosa, roupas. O aviso não é decorativo: quem cozinha com cúrcuma aprende isso da primeira vez, geralmente com uma blusa de manga branca.
          </p>
          <p>
            O sabor é terroso, levemente amargo e morno — mais fundo do que picante. Funciona como base de sabor em pratos que precisam de corpo, como curry, ensopados e sopas. Em quantidades pequenas, é quase imperceptível ao paladar mas visível na cor.
          </p>
          <p>
            No mercado brasileiro, aparece em três formas: pó (mais comum e prático), raiz fresca (em algumas feiras e empórios) e em cápsulas como suplemento. Para uso culinário cotidiano, o pó resolve tudo.
          </p>

          {/* AÇAFRÃO VS CÚRCUMA */}
          <h2 id="acafrao-diferenca">Cúrcuma ou açafrão: qual a diferença</h2>

          <p>
            A confusão é antiga e acontece porque a cúrcuma tem dois apelidos populares no Brasil: açafrão-da-terra e açafrão-da-Índia. Os dois nomes fazem referência ao açafrão verdadeiro, mas as plantas não têm nada a ver uma com a outra.
          </p>
          <p>
            O açafrão verdadeiro (<em>Crocus sativus</em>) é uma flor de origem mediterrânea. Os filamentos secos que se usam como especiaria são coletados à mão, um por um. Por isso está entre as especiarias mais caras do mundo — pode custar R$ 2.000-8.000 por quilo. Tem sabor floral, levemente amargo, e tinge de amarelo dourado brilhante.
          </p>
          <p>
            A cúrcuma custa R$ 20-60 por quilo, vem da raiz de uma planta da família do gengibre e tem sabor terroso. São ingredientes completamente diferentes em termos botânicos, sensoriais e de preço.
          </p>
          <p>
            Regra prática para receitas brasileiras: quando uma receita pede "açafrão" sem qualificar — arroz de açafrão, frango com açafrão — quase sempre é cúrcuma. O preço do açafrão verdadeiro tornaria o prato impossível de fazer no dia a dia. Se a receita de origem estrangeira (espanhola, marroquina) pede "saffron", aí sim é o açafrão verdadeiro.
          </p>

          {/* CURCUMINA */}
          <h2 id="curcumina">O que é a curcumina — e por que precisa de pimenta preta</h2>

          <p>
            Curcumina é o principal composto polifenólico da cúrcuma, responsável pela cor e pelos efeitos estudados em pesquisa. Representa cerca de 3-5% do peso da cúrcuma em pó. É a parte que interessa em termos de ação anti-inflamatória e antioxidante.
          </p>
          <p>
            O problema: a biodisponibilidade oral da curcumina é baixa. Quando consumida pura, a maior parte passa pelo trato digestivo sem ser absorvida. Chega ao sangue em quantidade pequena — o que limita os efeitos sistêmicos.
          </p>
          <p>
            A solução veio da pimenta preta. A piperina, composto ativo da pimenta, inibe enzimas que degradam a curcumina no intestino e aumenta sua absorção em até 2.000%. Essa combinação não foi descoberta em laboratório no século XX — está no curry tradicional indiano há milênios. O motivo exato não era conhecido, mas o resultado prático era.
          </p>
          <p>
            O segundo aliado é a gordura. A curcumina é lipossolúvel — dissolve em gordura, não em água. Consumida com azeite, leite de coco, manteiga ou outra fonte de gordura, a absorção aumenta significativamente. É por isso que o leite dourado feito com leite vegetal gordo funciona melhor do que dissolver cúrcuma em água quente.
          </p>
          <p>
            Resumo prático: cúrcuma com pimenta preta e gordura. Os três juntos maximizam o que chega ao organismo.
          </p>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/18705171/pexels-photo-18705171.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Xícara de leite dourado com cúrcuma e canela — bebida anti-inflamatória natural"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Stefan Heurterre / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Benefícios com evidência</h2>

          <p>
            A lista de benefícios atribuídos à cúrcuma na internet é generosa demais. Aqui ficam os que têm base em estudos publicados — com a ressalva importante de que grande parte das pesquisas usa doses de curcumina em suplemento, não as quantidades de tempero culinário.
          </p>
          <p>
            <strong>Anti-inflamatório.</strong> É o benefício mais documentado. A curcumina inibe várias vias inflamatórias no corpo, incluindo a COX-2 — a mesma via que anti-inflamatórios comuns bloqueiam. Estudos clínicos mostram melhora em quadros de artrite, artrose e dor muscular com uso de suplementos de curcumina (400-1200mg/dia). O tempero culinário entrega doses menores, mas o consumo regular ao longo do tempo contribui.
          </p>
          <p>
            <strong>Antioxidante.</strong> A curcumina neutraliza radicais livres e, diferente de muitos antioxidantes, também estimula as próprias enzimas antioxidantes do corpo — como a superóxido dismutase. Efeito duplo: elimina e aumenta a capacidade de eliminar dano oxidativo.
          </p>
          <p>
            <strong>Saúde cardiovascular.</strong> Pesquisas associam consumo regular de curcumina com melhora no perfil lipídico (redução de LDL, aumento de HDL) e função do endotélio vascular. Os efeitos aparecem mais claramente em estudos com suplementos de alta dose.
          </p>
          <p>
            A ressalva honesta: 1 colher de chá de cúrcuma em pó tem cerca de 200mg de curcumina bruta — e com biodisponibilidade baixa sem pimenta e gordura, chega muito menos ao sangue. Os benefícios de saúde documentados usam quantidades concentradas. O tempero diário contribui como parte de uma alimentação anti-inflamatória mais ampla. Não é remédio.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar cúrcuma na cozinha</h2>

          <p>
            Cúrcuma entra fácil na rotina porque vai bem em preparos que já existem — não precisa criar receita nova para incluir.
          </p>
          <p>
            <strong>Arroz amarelo.</strong> 1 colher de chá de cúrcuma em pó por xícara de arroz, adicionada junto ao refogado de alho e cebola, antes de colocar a água. O óleo do refogado facilita a absorção da curcumina. Cor bonita, sabor suave. É a forma mais simples de incluir cúrcuma na semana sem nenhuma mudança de hábito.
          </p>
          <p>
            <strong>Sopas e caldos.</strong> Dissolve bem em líquido quente com gordura. Funciona muito bem com batata, cenoura, abóbora e gengibre — ingredientes que têm sabor terroso compatível. Coloque 1/2-1 colher de chá por litro de caldo, junto com um fio de azeite ou leite de coco.
          </p>
          <p>
            <strong>Leite dourado.</strong> 1 xícara de leite vegetal (coco ou amêndoa funcionam bem) aquecido, 1 colher de chá de cúrcuma, pitada de pimenta preta, canela a gosto, mel opcional. Não ferve — aquece em fogo baixo. A combinação cúrcuma + pimenta + gordura do leite de coco é o trio completo de absorção. Gosto adquirido, mas quem acostuma não abre mão.
          </p>
          <p>
            <strong>Frango e peixe.</strong> Polvilhe junto com o tempero antes de assar ou grelhar. Combina com coentro, cominho, pimenta. Frango temperado com cúrcuma, alho, limão e azeite — direto no forno — é simples e fica bom.
          </p>
          <p>
            <strong>Ovos mexidos e omelete.</strong> 1/4 de colher de chá direto no ovo batido. A cor fica bonita e o sabor é sutil. Adicione pimenta preta junto — já serve como tempero e melhora a absorção.
          </p>
          <p>
            Dica sobre mancha: use colher de inox, não de madeira. Se manchar bancada ou tábua, aplique limão com sal imediatamente e enxágue com água fria. Nunca água quente — fixa a mancha.
          </p>

          {/* COMPRAR E GUARDAR */}
          <h2 id="comprar-guardar">Como comprar e guardar na despensa</h2>

          <p>
            Cúrcuma em pó está em qualquer supermercado, na seção de especiarias e temperos. A variedade em empórios e lojas naturais é maior, mas o produto padrão de supermercado atende bem o uso culinário cotidiano.
          </p>
          <p>
            Preço típico: R$ 6-15 por 50g em supermercado. Em embalagens maiores em empório ou a granel, o custo por grama é menor. Não há diferença significativa de qualidade entre marcas para uso culinário — o que importa é frescor e cor viva. Pó desbotado, amarelado-pálido, é cúrcuma antiga que perdeu potência.
          </p>
          <p>
            A raiz fresca aparece em feiras, empórios e alguns supermercados maiores. Tem sabor mais vibrante e compostos adicionais, mas exige ralação na hora e dura menos (refrigerada, cerca de 3 semanas). Para uso cotidiano, o pó é mais prático.
          </p>
          <p>
            Como guardar: pote de vidro fechado, longe de luz, calor e umidade — especialmente longe do vapor do fogão. Transferia da embalagem de papel para vidro assim que abrir. Fechada, a cúrcuma dura 2-3 anos. Aberta, perde aroma e cor em 6-12 meses se mal guardada. Na <a href="/funcionalidades/despensa">despensa</a>, vai bem junto com outros temperos secos em local de fácil acesso.
          </p>
          <p>
            Um pote de 50g dura meses pra maioria das pessoas, a não ser que você faça curry toda semana. Comprar quantidade pequena e renovar com mais frequência garante o tempero sempre fresco.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre cúrcuma</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Cúrcuma e açafrão são a mesma coisa?</p>
              <p className="faq-a">
                Não. São plantas completamente diferentes. Cúrcuma é uma raiz da família do gengibre, barata e comum. Açafrão verdadeiro (Crocus sativus) são filamentos de flor coletados à mão — uma das especiarias mais caras do mundo. "Açafrão-da-terra" e "açafrão-da-Índia" são nomes populares para cúrcuma no Brasil.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto de cúrcuma por dia é seguro?</p>
              <p className="faq-a">
                Como tempero, 1-3 colheres de chá por dia é seguro para a maioria das pessoas. Doses altas de suplemento de curcumina podem causar efeitos gastrointestinais. Quem toma anticoagulantes ou tem cálculos biliares deve consultar médico antes de usar doses elevadas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cúrcuma em pó tem os mesmos benefícios que a raiz fresca?</p>
              <p className="faq-a">
                A raiz fresca tem compostos voláteis adicionais que se perdem na secagem. O pó é mais concentrado em curcumina por grama. Na prática culinária, as duas formas funcionam bem. A raiz tem sabor mais vibrante; o pó é mais prático e fácil de armazenar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cúrcuma mancha roupa?</p>
              <p className="faq-a">
                Sim, com facilidade. A curcumina é um pigmento intenso. Use colher de inox, não de madeira. Se manchar roupa, trate com água fria e sabão imediatamente — água quente fixa. Manchas em superfícies porosas: limão com sal. Com exposição ao sol, costuma desvanecer.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso usar cúrcuma na gravidez?</p>
              <p className="faq-a">
                Em quantidades culinárias normais, é segura. Suplementos de curcumina em doses altas podem estimular contrações uterinas — gestantes devem evitar e consultar médico. Como tempero numa receita, sem problema.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cúrcuma perde propriedades ao cozinhar?</p>
              <p className="faq-a">
                Parte dos compostos voláteis se degrada com o calor prolongado, mas a curcumina em si é relativamente estável — especialmente em preparos com gordura. O curry e o leite dourado, por exemplo, cozinham com gordura e preservam bem os benefícios. Evite fervura longa e intensa sem líquido.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador do Mise. Faz mercado toda semana e ainda esquece ingrediente às vezes.
                Construiu o app pra resolver a dor que ele mesmo tinha na cozinha.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">Cúrcuma na despensa. Pimenta preta do lado. Lista pronta.</p>
            <p className="blog-cta-desc">
              Com o Mise, você sabe o que tem na <a href="/funcionalidades/despensa">despensa</a> antes de ir ao mercado — e monta a{' '}
              <a href="/funcionalidades/lista-de-compras">lista de compras</a> sem esquecer o que acabou.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Comece grátis
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Voltar ao topo">Voltar ao topo ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Feito com cuidado no Brasil.</p>
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="/blog" className="footer-link">Blog</a>
            <a href="/funcionalidades" className="footer-link">Funcionalidades</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
