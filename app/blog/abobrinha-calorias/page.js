import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Abobrinha: calorias, valor nutricional e benefícios',
  description: 'Abobrinha tem 17 kcal por 100g, baixo carboidrato e é uma das hortaliças mais versáteis da cozinha brasileira. Tabela nutricional, tipos e como guardar.',
  alternates: { canonical: 'https://www.miseemcasa.com.br/blog/abobrinha-calorias' },
  openGraph: {
    title: 'Abobrinha: calorias, valor nutricional e benefícios',
    description: 'Abobrinha tem 17 kcal por 100g, baixo carboidrato e é uma das hortaliças mais versáteis da cozinha brasileira. Tabela nutricional, tipos e como guardar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/abobrinha-calorias',
    images: [
      {
        url: 'https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Abobrinha italiana verde crescendo com flores amarelas no jardim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abobrinha: calorias, valor nutricional e benefícios',
    description: 'Abobrinha tem 17 kcal por 100g, baixo carboidrato e é uma das hortaliças mais versáteis da cozinha brasileira. Tabela nutricional, tipos e como guardar.',
    images: ['https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quantas calorias tem uma abobrinha inteira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma abobrinha italiana média (cerca de 200g) tem aproximadamente 34 calorias. Uma abobrinha brasileira pequena (100g) tem cerca de 17 calorias. O valor varia um pouco com o tipo, mas todas ficam na faixa de 15–20 kcal por 100g.',
      },
    },
    {
      '@type': 'Question',
      name: 'Abobrinha é carboidrato ou proteína?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nem um nem outro de forma significativa. Por 100g, a abobrinha tem 3,4g de carboidrato e 1,2g de proteína. É composta principalmente de água (cerca de 95%). É considerada um legume de baixo carboidrato, comum em dietas low carb e cetogênica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Abobrinha engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Com 17 kcal por 100g, dificilmente. O que pode aumentar a caloria do prato é o que você adiciona: azeite, manteiga, queijo. A abobrinha em si tem baixíssimo impacto calórico e é mais provável que ajude no controle do peso do que atrapalhe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Abobrinha pode ser comida crua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Crua, ela tem textura crocante e sabor suave. Vai bem em saladas fatiadas finas e como macarrão feito com espiralizador. O cozimento reduz levemente a vitamina C, mas não altera o valor nutricional de forma significativa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre abobrinha italiana e abobrinha brasileira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A italiana é mais comprida, verde-escura e de sabor neutro. A brasileira (caipira ou menina) é arredondada, verde-clara e um pouco mais doce. Nutricionalmente são muito parecidas, mas a brasileira costuma ser mais barata no mercado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar abobrinha na geladeira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inteira, no compartimento de legumes da geladeira, dura até 7 dias. Cortada, coloca em um container fechado e usa em até 3 dias. Não precisa lavar antes de guardar — lava só na hora de usar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Abobrinha tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Abobrinha é naturalmente sem glúten. Pode ser consumida sem restrições por pessoas com doença celíaca ou sensibilidade ao glúten.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Abobrinha: calorias, valor nutricional e benefícios',
  description: 'Abobrinha tem 17 kcal por 100g, baixo carboidrato e é uma das hortaliças mais versáteis da cozinha brasileira. Tabela nutricional, tipos e como guardar.',
  image: 'https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
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
    '@id': 'https://www.miseemcasa.com.br/blog/abobrinha-calorias',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Abobrinha: calorias, valor nutricional e benefícios', item: 'https://www.miseemcasa.com.br/blog/abobrinha-calorias' },
  ],
}

export default function AbobrinhaCaloriasPage() {
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
            <li className="breadcrumb-current" aria-current="page">Abobrinha: calorias e valor nutricional</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-24">24 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Abobrinha: calorias, tabela nutricional e por que vale a pena
          </h1>
          <p className="blog-desc">
            17 kcal por 100g, baixo carboidrato e versatilidade de sobra. Tudo que você precisa saber antes de colocar na lista.
          </p>

          <div className="answer-box">
            <p>
              <strong>Abobrinha calorias:</strong> a abobrinha crua tem cerca de 17 calorias por 100g, segundo a tabela TACO (UNICAMP). Uma abobrinha italiana média (200g) tem aproximadamente 34 calorias, 6,8g de carboidratos e 2,4g de fibra. O valor nutricional varia pouco com o cozimento — o que muda é o que você adiciona durante o preparo.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Abobrinha italiana verde crescendo com flores amarelas no jardim"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Karola G / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#calorias">Quantas calorias tem a abobrinha</a></li>
              <li><a href="#tabela-nutricional">Tabela nutricional</a></li>
              <li><a href="#beneficios">Benefícios da abobrinha</a></li>
              <li><a href="#tipos">Tipos de abobrinha no Brasil</a></li>
              <li><a href="#como-escolher">Como escolher no mercado</a></li>
              <li><a href="#como-guardar">Como guardar em casa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          <p>
            Abobrinha tem 17 calorias por 100 gramas. Isso coloca ela entre os legumes mais leves que você encontra no mercado — junto com <a href="/blog/beneficios-do-pepino">pepino</a> e alface. O que chama atenção não é só a caloria baixa: é a combinação de água, fibra e vitaminas que faz a abobrinha valer o espaço na <a href="/funcionalidades/despensa">despensa</a> toda semana.
          </p>
          <p>
            Ela é barata, fácil de cozinhar e entra em praticamente qualquer receita. Refogada, grelhada, no forno, crua em salada ou como espaguete. É o tipo de ingrediente que trabalha mais do que parece.
          </p>

          <h2 id="calorias">Quantas calorias tem a abobrinha</h2>

          <p>
            A abobrinha crua tem <strong>17 kcal por 100g</strong>, segundo a{' '}
            <a href="https://www.unicamp.br/nepa/taco/" target="_blank" rel="noopener">Tabela de Composição de Alimentos TACO (UNICAMP)</a>.
            Cozida, o valor sobe muito pouco — para cerca de 18 kcal/100g — porque ela absorve água durante o cozimento.
          </p>
          <p>
            Uma abobrinha italiana média tem cerca de 200g. Crua, isso dá aproximadamente 34 calorias. Uma porção de 150g refogada com alho e sal fica em torno de 27 kcal.
          </p>
          <p>
            O que muda a caloria é o que vai junto:
          </p>

          <ul className="item-list">
            <li>Abobrinha crua (100g): ~17 kcal</li>
            <li>Abobrinha cozida (100g): ~18 kcal</li>
            <li>Refogada com 1 colher de azeite (100g + 5ml azeite): ~57 kcal</li>
            <li>Gratinada com muçarela (100g + 20g queijo): ~95 kcal</li>
          </ul>

          <p>
            A abobrinha em si não engorda. O que pode pesar na conta calórica é o método de preparo — e isso se controla facilmente.
          </p>

          <h2 id="tabela-nutricional">Tabela nutricional da abobrinha</h2>

          <p>
            Valores por 100g de abobrinha crua, com casca, conforme a tabela TACO:
          </p>

          <ul className="item-list">
            <li><strong>Energia:</strong> 17 kcal</li>
            <li><strong>Carboidratos:</strong> 3,4g</li>
            <li><strong>Fibras:</strong> 1,2g</li>
            <li><strong>Proteínas:</strong> 1,2g</li>
            <li><strong>Gorduras totais:</strong> 0,3g</li>
            <li><strong>Água:</strong> 94,6g</li>
            <li><strong>Vitamina C:</strong> ~17mg (aprox. 19% do valor diário recomendado)</li>
            <li><strong>Potássio:</strong> ~262mg</li>
            <li><strong>Ácido fólico:</strong> ~24µg</li>
          </ul>

          <p>
            Noventa e quatro por cento de água. É por isso que a abobrinha tem tão poucas calorias — e por que ela ocupa bem o estômago sem pesar.
          </p>
          <p>
            O teor de fibras está concentrado principalmente na casca. Comer com casca faz diferença para o funcionamento do intestino.
          </p>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5419333/pexels-photo-5419333.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fatias de abobrinha e tomate em prato branco de cerâmica"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Benefícios da abobrinha</h2>

          <p>
            A abobrinha não é um superalimento. É um alimento muito bom — e essa distinção importa para quem cozinha de verdade.
          </p>

          <p>
            <strong>Saciedade com poucas calorias.</strong> Com 95% de água, a abobrinha ocupa espaço no estômago sem adicionar calorias relevantes. Aumenta o volume da refeição sem aumentar o total calórico.
          </p>
          <p>
            <strong>Intestino funcionando.</strong> As fibras da casca ajudam no trânsito intestinal. Para quem tem tendência a intestino preso, comer abobrinha com casca regularmente — fatiada ou crua — faz diferença.
          </p>
          <p>
            <strong>Boa digestão.</strong> A abobrinha cozida é fácil de digerir. Vai bem em refeições leves quando o estômago está sensível, como em casos de gastrite. Só evite o óleo em excesso no preparo.
          </p>
          <p>
            <strong>Vitamina C e antioxidantes.</strong> 100g de abobrinha fornecem cerca de 17mg de vitamina C — quase 19% do valor diário recomendado. A casca verde também contém betacaroteno, precursor da vitamina A. A{' '}
            <a href="https://www.embrapa.br/hortalicas" target="_blank" rel="noopener">Embrapa Hortaliças</a>{' '}
            documenta a composição antioxidante da abobrinha entre as hortaliças de referência no Brasil.
          </p>
          <p>
            <strong>Potássio para pressão arterial.</strong> Com ~262mg de potássio por 100g, a abobrinha ajuda a equilibrar o sódio da dieta. Relevante para quem consome muito sal — que é a maioria de nós.
          </p>

          <div className="blog-inline-cta">
            <p>
              Abobrinha entra na lista toda semana, mas é fácil esquecer de comprar quando a despensa fica na cabeça.{' '}
              <em>O Mise lembra por você.</em>
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              Comece grátis →
            </a>
          </div>

          <h2 id="tipos">Tipos de abobrinha no Brasil</h2>

          <p>
            Não é tudo igual. O que você encontra no mercado varia bastante — e vale saber a diferença antes de escolher.
          </p>

          <ul className="item-list">
            <li><strong>Abobrinha italiana:</strong> a mais comum nos supermercados. Verde-escura, comprida, sabor neutro. Boa para refogar, grelhar e fazer espaguete de abobrinha.</li>
            <li><strong>Abobrinha brasileira (caipira ou menina):</strong> arredondada, verde-clara ou com listras. Mais doce e geralmente mais barata. Excelente para rechear e fazer no forno.</li>
            <li><strong>Abobrinha amarela:</strong> similar à italiana na forma, mas com cor amarela. Sabor mais suave. Menos comum nos mercados convencionais.</li>
            <li><strong>Abobrinha de pescoço:</strong> tipo botija, com um pescoço curvado. Comum no interior do Brasil. Boa para sopas e cozidos.</li>
          </ul>

          <p>
            Abobrinha cresce rápido demais. Quem tem horta sabe: você planta uma e em duas semanas tem mais do que consegue usar — e passa a dar para os vizinhos sem cerimônia.
          </p>
          <p>
            Para o dia a dia, italiana e brasileira são as mais fáceis de achar. A diferença nutricional entre elas é mínima — escolha pela receita e pelo preço.
          </p>

          <h2 id="como-escolher">Como escolher abobrinha no mercado</h2>

          <p>
            Abobrinha amolecida é abobrinha velha. Parece óbvio, mas é fácil passar batido quando você está com pressa.
          </p>

          <ul className="item-list">
            <li><strong>Firme ao toque:</strong> pressione levemente com o polegar. Não deve ceder. Se amoleceu, já está passada.</li>
            <li><strong>Casca lisa e sem manchas:</strong> evite abobrinhas com marcas escuras ou casca enrugada.</li>
            <li><strong>Tamanho médio:</strong> abobrinhas muito grandes têm mais água e menos sabor. As de 150–200g são as mais versáteis.</li>
            <li><strong>Cabo úmido e verde:</strong> o cabinho não ressecado indica colheita recente.</li>
          </ul>

          <p>
            Uma abobrinha boa não precisa de muito tempero para ser gostosa. Uma passada, nenhum tempero salva.
          </p>
          <p>
            Vale a pena checar a <a href="/funcionalidades/lista-de-compras">lista de compras</a> antes de sair de casa e já deixar anotado quantas abobrinhas você vai precisar na semana. Evita comprar demais e encontrar duas murchas no fundo da gaveta na quinta-feira.
          </p>

          <h2 id="como-guardar">Como guardar abobrinha em casa</h2>

          <p>
            A abobrinha não dura muito fora da geladeira — especialmente no calor do Brasil. O básico:
          </p>

          <ul className="item-list">
            <li><strong>Inteira na geladeira:</strong> no compartimento de legumes, dura 5 a 7 dias. Não precisa embrulhar.</li>
            <li><strong>Cortada na geladeira:</strong> coloca em container fechado ou envolve em plástico-filme. Usa em até 3 dias.</li>
            <li><strong>No freezer:</strong> cozinha por 2 minutos em água fervente (branqueamento), seca bem e congela em saquinho. Dura até 3 meses. A textura muda — fica mais mole — mas serve bem para sopas e refogados.</li>
          </ul>

          <p>
            Não lave antes de guardar. Lava na hora de usar. A umidade acelera o apodrecimento.
          </p>
          <p>
            Se você costuma esquecer o que tem na geladeira, a{' '}
            <a href="/funcionalidades/despensa">despensa do Mise</a>{' '}
            ajuda a registrar o que precisa ser usado logo — e evita a surpresa da abobrinha murcha descoberta três dias depois da compra.
          </p>
          <p>
            Uma estratégia simples: comprar 2 abobrinhas por semana e decidir em qual dia vai usar cada uma. O{' '}
            <a href="/funcionalidades/cardapio-semanal">cardápio semanal</a>{' '}
            funciona bem para isso — você define o menu antes de ir ao mercado e compra exatamente o que vai usar. Sem desperdício e sem comprar o mesmo legume que você já tem em casa.
          </p>
          <p>
            Para comparação: o <a href="/blog/espinafre-beneficios">espinafre</a> também tem perfil nutricional parecido (23 kcal/100g) e costuma entrar na mesma semana de compras. Os dois juntos são uma boa base de hortaliças verdes para a semana.
          </p>

          <h2 id="faq">Perguntas frequentes</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quantas calorias tem uma abobrinha inteira?</p>
              <p className="faq-a">Uma abobrinha italiana média (cerca de 200g) tem aproximadamente 34 calorias. Uma abobrinha brasileira pequena (100g) tem cerca de 17 calorias. O valor varia um pouco com o tipo, mas todas ficam na faixa de 15–20 kcal por 100g.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Abobrinha é carboidrato ou proteína?</p>
              <p className="faq-a">Nem um nem outro de forma significativa. Por 100g, tem 3,4g de carboidrato e 1,2g de proteína. É composta principalmente de água (cerca de 95%). É considerada um legume de baixo carboidrato, comum em dietas low carb e cetogênica.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Abobrinha engorda?</p>
              <p className="faq-a">Com 17 kcal por 100g, dificilmente. O que pode aumentar a caloria do prato é o que você adiciona: azeite, manteiga, queijo. A abobrinha em si tem baixíssimo impacto calórico. É mais provável que ajude no controle do peso do que atrapalhe.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Abobrinha pode ser comida crua?</p>
              <p className="faq-a">Sim. Crua, ela tem textura crocante e sabor suave. Vai bem em saladas fatiadas finas e como "macarrão" feito com espiralizador. O cozimento reduz levemente a vitamina C, mas não altera o valor nutricional de forma significativa.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre abobrinha italiana e abobrinha brasileira?</p>
              <p className="faq-a">A italiana é mais comprida, verde-escura e de sabor neutro. A brasileira (caipira ou menina) é arredondada, verde-clara e um pouco mais doce. Nutricionalmente são muito parecidas, mas a brasileira costuma ser mais barata no mercado.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar abobrinha na geladeira?</p>
              <p className="faq-a">Inteira, no compartimento de legumes, dura até 7 dias. Cortada, coloca em um container fechado e usa em até 3 dias. Não precisa lavar antes de guardar — lava só na hora de usar.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Abobrinha tem glúten?</p>
              <p className="faq-a">Não. Abobrinha é naturalmente sem glúten. Pode ser consumida sem restrições por pessoas com doença celíaca ou sensibilidade ao glúten.</p>
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
                Criador do Mise. Comprou abobrinha na segunda com a melhor das intenções e refogou na quinta quando já estava quase murchando. Ficou ótimo. O problema era a falta de planejamento, não a abobrinha.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Abobrinha na despensa,<br />
              <em>sem esquecer de comprar.</em>
            </h2>
            <p>
              O Mise conecta{' '}
              <a href="/funcionalidades/lista-de-compras" style={{color: 'rgba(251,249,242,0.85)', fontWeight: 500}}>lista de compras</a>,
              despensa e cardápio semanal. Você compra o que vai usar — e a abobrinha não murcha no fundo da gaveta.
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
