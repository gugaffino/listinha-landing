import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Kiwi: benefícios, nutrientes e como escolher no mercado',
  description: 'Kiwi tem mais vitamina C que a laranja, actinidina para digestão e apenas 61 kcal por 100g. Veja os benefícios, os tipos disponíveis no Brasil e como guardar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/kiwi-beneficios',
  },
  openGraph: {
    title: 'Kiwi: benefícios, nutrientes e como escolher no mercado',
    description: 'Kiwi tem mais vitamina C que a laranja, actinidina para digestão e apenas 61 kcal por 100g. Veja os benefícios, os tipos disponíveis no Brasil e como guardar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/kiwi-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Kiwis frescos fatiados ao meio mostrando o interior verde com sementes pretas — close-up detalhado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiwi: benefícios, nutrientes e como escolher no mercado',
    description: 'Kiwi tem mais vitamina C que a laranja, actinidina para digestão e apenas 61 kcal por 100g. Veja os benefícios, os tipos disponíveis no Brasil e como guardar.',
    images: ['https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quantos kiwis dá pra comer por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dois kiwis por dia já cobrem a necessidade diária de vitamina C de um adulto com folga. Mais do que isso não traz benefício proporcional e pode causar desconforto intestinal por conta das fibras. Uma ou duas unidades é o suficiente pra aproveitar os nutrientes sem excesso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kiwi engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kiwi tem apenas 61 kcal por 100g e 3g de fibra, o que aumenta saciedade. Não engorda em porções normais. O problema não é o kiwi — é o resto da alimentação. Como snack ou parte do café da manhã, é uma das frutas com melhor relação caloria/nutriente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso comer a casca do kiwi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A casca do kiwi verde é tecnicamente comestível — tem fibra e antioxidantes extras — mas a textura aveludada desagrada a maioria das pessoas. O kiwi amarelo tem casca mais fina e menos agressiva, e dá pra comer mais facilmente. Se quiser tentar com o verde, lave bem e experimente uma mordida antes de decidir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kiwi amarelo é mais nutritivo que o verde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os perfis nutricionais são próximos. O kiwi amarelo tem levemente mais vitamina C e menos acidez, e sua casca é comestível com mais facilidade. O verde tem mais vitamina K. No dia a dia, a diferença é pequena — o amarelo é mais caro e mais difícil de encontrar. Use o que está disponível.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a melhor hora pra comer kiwi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não tem horário obrigatório. Kiwi é digestivo quando consumido após refeições proteicas, por conta da actinidina. Estudos de pequeno porte sugerem consumo à noite por conta da serotonina — mas o efeito no sono é modesto. Coma quando fizer sentido na sua rotina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kiwi pode ser congelado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode. Descasque, fatie ou corte em cubos, espalhe numa assadeira forrada com papel manteiga e leve ao freezer por duas horas. Depois transfira para pote hermético. Dura até três meses. Textura muda depois de descongelar — fica mais mole, o que funciona bem em smoothies mas não no prato.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kiwi cru em gelatina funciona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A actinidina do kiwi cru destrói a proteína da gelatina e impede que firme. Se quiser usar kiwi em sobremesas com gelatina, cozinhe o kiwi antes (alguns minutos no forno ou na frigideira) — o calor inativa a enzima. Depois pode misturar normalmente.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kiwi: benefícios, nutrientes e como escolher no mercado',
  description: 'Kiwi tem mais vitamina C que a laranja, actinidina para digestão e apenas 61 kcal por 100g. Veja os benefícios, os tipos disponíveis no Brasil e como guardar.',
  image: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
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
    '@id': 'https://www.miseemcasa.com.br/blog/kiwi-beneficios',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Kiwi: benefícios e nutrientes', item: 'https://www.miseemcasa.com.br/blog/kiwi-beneficios' },
  ],
}

export default function KiwiBeneficios() {
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
            <li className="breadcrumb-current" aria-current="page">Kiwi: benefícios e nutrientes</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-08">8 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Kiwi: o que é, para que serve e como usar na cozinha
          </h1>
          <p className="blog-desc">
            A fruta que veio da China, foi renomeada pela Nova Zelândia e chegou ao hortifruti brasileiro vinda do Chile. Tem mais vitamina C que a laranja, uma enzima que facilita a digestão e só 61 kcal por 100g. Aqui está o que você precisa saber antes de colocar na lista.
          </p>

          <div className="answer-box">
            <p>
              <strong>Kiwi</strong> (<em>Actinidia deliciosa</em>) é uma fruta de origem chinesa comercializada mundialmente pela Nova Zelândia a partir dos anos 1950.
              O interior verde com sementes pretas e a casca marrom-aveludada são os traços mais reconhecíveis.
              É uma das frutas com maior concentração de vitamina C — mais que a laranja — e contém actinidina, enzima que auxilia na digestão de proteínas.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Kiwis frescos fatiados ao meio mostrando o interior verde com sementes pretas — close-up detalhado"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: AS Photography / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é kiwi</a></li>
              <li><a href="#vitamina-c">Vitamina C: o número que surpreende</a></li>
              <li><a href="#nutrientes">O que tem dentro: os nutrientes</a></li>
              <li><a href="#beneficios">Benefícios do kiwi para a saúde</a></li>
              <li><a href="#tipos">Tipos de kiwi no Brasil</a></li>
              <li><a href="#como-comer">Como comer kiwi</a></li>
              <li><a href="#escolher-guardar">Como escolher e guardar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/14083854/pexels-photo-14083854.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Kiwi inteiro e kiwi cortado ao meio sobre mesa de madeira rústica — vista detalhada"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Chasity Campbell / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é kiwi</h2>

          <p>
            Kiwi é o nome que os neozelandeses deram à fruta que veio da China. Os produtores da Nova Zelândia rebatizaram a "groselha chinesa" nos anos 1950 pra facilitar a venda no mercado americano, que não estava animado com nomes que lembravam a China na época da Guerra Fria. O nome pegou e virou definitivo.
          </p>
          <p>
            A planta é uma trepadeira (<em>Actinidia deliciosa</em>) que precisa de inverno frio e verão quente. No Brasil não há produção comercial. O kiwi que você encontra no hortifruti veio provavelmente do Chile ou da Itália — os dois maiores fornecedores do país.
          </p>
          <p>
            O interior verde com sementes pretas dispostas em círculo ao redor de um miolo branco central é o traço mais reconhecível. A textura é macia, suculenta, com equilíbrio entre acidez e dulçor. O sabor não tem substituto direto na cozinha brasileira — é kiwi ou é kiwi.
          </p>
          <p>
            Uma fruta que a maioria das pessoas conhece faz anos mas continua comprando só ocasionalmente. Isso não é por falta de qualidade — é por falta de hábito. A questão muda quando você entende o que ela entrega por 100g.
          </p>

          {/* VITAMINA C */}
          <h2 id="vitamina-c">Vitamina C: o número que surpreende</h2>

          <p>
            100g de kiwi tem 92,7mg de vitamina C. A laranja tem 53mg. Esse é o dado que muda a perspectiva: a fruta que ficou famosa como fonte de vitamina C não é a mais rica nela.
          </p>
          <p>
            A recomendação diária pra adultos fica entre 75 e 90mg dependendo do sexo. Dois kiwis cobrem isso sem suplemento, sem suco industrializado, sem vitamina mastigável. Só fruta.
          </p>
          <p>
            Vitamina C deteriora com calor e com oxidação. Kiwi comido fresco — cortado na hora — entrega quase tudo que está na fruta. Suco de kiwi processado já perdeu parte disso. A forma mais eficiente de consumir é a mais simples.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">O que tem dentro: os nutrientes do kiwi</h2>

          <p>
            Por 100g de kiwi verde, os principais nutrientes são:
          </p>

          <ul className="item-list">
            <li><strong>Calorias:</strong> 61 kcal</li>
            <li><strong>Fibra:</strong> 3g — importante para saciedade e trânsito intestinal</li>
            <li><strong>Vitamina C:</strong> 92,7mg — 103% da ingestão diária recomendada</li>
            <li><strong>Vitamina K:</strong> 40µg — 34% do VD, importante na coagulação e saúde óssea</li>
            <li><strong>Potássio:</strong> 312mg — contribui para controle da pressão arterial</li>
            <li><strong>Folato:</strong> 25µg — relevante especialmente na gestação</li>
            <li><strong>Vitamina E:</strong> 1,5mg — antioxidante complementar à vitamina C</li>
          </ul>

          <p>
            O conjunto é equilibrado. Não tem nenhum nutriente em quantidade absurda, mas tem vários em quantidade relevante ao mesmo tempo. Isso é mais valioso do que um único nutriente isolado em dose alta.
          </p>
          <p>
            Para quem já leu sobre{' '}
            <a href="/blog/alimentos-ricos-em-magnesio">alimentos ricos em magnésio</a>:
            {' '}kiwi tem magnésio também, mas em quantidade modesta (17mg/100g). Não é a fonte principal, mas contribui dentro de uma alimentação variada.
          </p>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1414134/pexels-photo-1414134.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fatias de kiwi, limão e laranja dispostas sobre superfície de mármore — frutas frescas coloridas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Lukas / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Benefícios do kiwi para a saúde</h2>

          <p>
            Os benefícios do kiwi não vêm de um único composto milagroso. Vêm da combinação de vitamina C, fibra, vitamina K e actinidina trabalhando juntos. Aqui estão os efeitos com base mais sólida:
          </p>

          <h3>Sistema imunológico</h3>
          <p>
            Vitamina C em quantidade acima da necessidade diária em uma só fruta. O efeito no sistema imune não é instantâneo — é de consistência ao longo do tempo. Quem come kiwi regularmente tem um reservatório de vitamina C que não depende de suplemento nem de suco.
          </p>

          <h3>Digestão</h3>
          <p>
            Actinidina é uma enzima proteolítica: ela quebra cadeias de proteínas. Na prática, isso significa que kiwi comido após uma refeição proteica — carne, frango, ovo — facilita a digestão. A fibra insolúvel complementa: regula o trânsito intestinal e previne constipação.
          </p>
          <p>
            Um detalhe que a maioria não sabe: kiwi cru em gelatina impede o gel de firmar. A actinidina destrói a proteína do colágeno que forma a gelatina. Se quiser usar kiwi em sobremesas de gelatina, cozinhe a fruta antes — o calor inativa a enzima.
          </p>

          <h3>Saúde cardiovascular</h3>
          <p>
            Fibra e potássio têm relação bem documentada com controle de pressão arterial e colesterol. Não é efeito de uma dose — é de consumo regular ao longo de semanas e meses. Kiwi não substitui tratamento, mas entra bem numa alimentação que protege o coração.
          </p>

          <h3>Pele e antioxidantes</h3>
          <p>
            Vitamina C é necessária pra síntese de colágeno. Vitamina E protege membranas celulares contra dano oxidativo. Os dois juntos, na quantidade que o kiwi entrega, são mais eficientes do que os dois separados em doses altas de suplemento.
          </p>

          <h3>Sono</h3>
          <p>
            Estudos de pequeno porte mostram que comer dois kiwis uma hora antes de dormir reduz o tempo para adormecer. O mecanismo provável é a serotonina presente na fruta. A base de pesquisa ainda é limitada — é uma observação interessante, não uma conclusão definitiva.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa conectada com a lista de compras. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de kiwi que você encontra no Brasil</h2>

          <p>
            O mercado brasileiro tem dois tipos com acesso razoável. Saber a diferença evita surpresa no sabor e na hora de comer.
          </p>

          <h3>Kiwi verde (Hayward)</h3>
          <p>
            O mais comum. Casca marrom-aveludada, interior verde-vivo com sementes pretas em volta do miolo branco central. Sabor mais ácido, com dulçor equilibrado. É o kiwi de referência — quando alguém fala em kiwi sem especificar, é este.
          </p>
          <p>
            A casca é comestível, mas a textura peluda desagrada a maioria. A maioria descasca antes de comer. Se quiser tentar a casca, lave muito bem e corte uma pequena fatia primeiro.
          </p>

          <h3>Kiwi amarelo (SunGold)</h3>
          <p>
            Chegou ao mercado brasileiro nos últimos anos. Casca amarela e mais lisa, sem os pelos do verde. Interior amarelo-dourado, sem sementes visíveis ao redor do miolo. Sabor mais doce, menos ácido — se aproxima de manga e pêssego ao mesmo tempo.
          </p>
          <p>
            É mais caro e mais difícil de encontrar — aparece em supermercados maiores e importadoras de frutas. A casca é mais palatável do que a do verde e dá pra comer como uma maçã. Nutricionalmente, os perfis são próximos.
          </p>

          {/* COMO COMER */}
          <h2 id="como-comer">Como comer kiwi</h2>

          <p>
            A forma mais simples: cortar ao meio na horizontal e comer com colher, direto da casca. Não suja, não precisa de prato, não precisa de talheres especiais. É o jeito que a maioria usa pra comer kiwi no café da manhã e nunca muda.
          </p>
          <p>
            Descascado e fatiado funciona em iogurte, granola, salada de frutas e smoothie. Em smoothie, o sabor aparece mesmo com outros ingredientes. É uma das frutas que não some no liquidificador.
          </p>
          <p>
            Em receitas salgadas, o kiwi fatiado funciona bem em carpaccio de fruta com presunto cru, em ceviche de peixe branco ou como acompanhamento de queijo. O ácido corta a gordura bem.
          </p>
          <p>
            Em sobremesas quentes — crumbles, tartes — o kiwi perde parte dos antioxidantes mas mantém sabor e textura interessante. Combine com morango ou manga para equilibrar a acidez.
          </p>
          <p>
            Sobre a casca: tecnicamente comestível nos dois tipos, mais palatável no amarelo. A casca do verde tem fibra extra e antioxidantes nas camadas externas, mas a textura não convence a maioria das pessoas. Não tem obrigação nenhuma de comer.
          </p>

          {/* ESCOLHER E GUARDAR */}
          <h2 id="escolher-guardar">Como escolher e guardar kiwi</h2>

          <p>
            No hortifruti, pressione levemente o kiwi com o polegar. O maduro cede um pouco — como um pêssego ou abacate no ponto. Completamente duro significa que precisa de mais 2 a 5 dias em temperatura ambiente. Cede demais ou tem manchas moles: passou do ponto.
          </p>
          <p>
            Cor da casca não é indicador confiável de maturidade no kiwi verde — todos têm a mesma cor marrom-aveludada independente do ponto. Confie no toque.
          </p>

          <h3>Como guardar</h3>
          <p>
            Kiwi duro: temperatura ambiente, longe do sol, até madurar. Não coloque junto com bananas ou maçãs — elas liberam etileno e aceleram o amadurecimento dos vizinhos. Se quiser que o kiwi madure mais rápido, aí sim: coloque perto de uma banana.
          </p>
          <p>
            Kiwi maduro: geladeira, em saco ou pote fechado. Dura até 3 semanas sem perder qualidade. É uma fruta que não precisa de atenção especial depois de guardada — ao contrário do morango, que reclama se você piscar.
          </p>
          <p>
            Pode congelar: descasque, fatie, congele espalhado numa assadeira por 2 horas e transfira para pote hermético. Funciona bem em smoothie ou como base de sorvete caseiro. A textura depois de descongelar muda — fica mais mole — mas o sabor permanece.
          </p>
          <p>
            Kiwi é uma fruta pra ter na{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            com frequência. Dura bem, é versátil e entra em qualquer{' '}
            <a href="/blog/lista-basica-de-compras">lista de compras</a>{' '}
            sem ocupar espaço de cabeça. A dificuldade é lembrar de colocar na lista quando o kiwi da semana anterior acabou sem que você percebesse.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre kiwi</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quantos kiwis dá pra comer por dia?</p>
              <p className="faq-a">
                Dois kiwis por dia já cobrem a necessidade diária de vitamina C de um adulto com folga. Mais do que isso não traz benefício proporcional e pode causar desconforto intestinal por conta das fibras. Uma ou duas unidades é o suficiente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Kiwi engorda?</p>
              <p className="faq-a">
                Kiwi tem 61 kcal por 100g e 3g de fibra que aumentam saciedade. Não engorda em porções normais. Como snack ou parte do café da manhã, é uma das frutas com melhor relação caloria/nutriente disponíveis no mercado brasileiro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso comer a casca do kiwi?</p>
              <p className="faq-a">
                A casca do kiwi verde é comestível — tem fibra e antioxidantes extras — mas a textura aveludada desagrada a maioria. O kiwi amarelo tem casca mais fina e menos agressiva. Se quiser tentar com o verde, lave bem e prove antes de decidir. Nenhuma obrigação.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Kiwi amarelo é mais nutritivo que o verde?</p>
              <p className="faq-a">
                Os perfis são próximos. O amarelo tem levemente mais vitamina C e casca mais palatável. O verde tem mais vitamina K. A diferença no dia a dia é pequena. O amarelo custa mais e é mais difícil de encontrar — use o que está disponível.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a melhor hora pra comer kiwi?</p>
              <p className="faq-a">
                Não tem horário obrigatório. Após refeições proteicas, a actinidina ajuda na digestão. Estudos de pequeno porte sugerem consumo à noite por conta da serotonina — mas o efeito no sono é modesto. Coma quando fizer sentido na sua rotina.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Kiwi pode ser congelado?</p>
              <p className="faq-a">
                Pode. Descasque, fatie, espalhe numa assadeira e leve ao freezer por duas horas. Depois transfira para pote hermético. Dura até três meses. A textura fica mais mole depois de descongelar, o que funciona bem em smoothies.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Por que o kiwi cru impede a gelatina de firmar?</p>
              <p className="faq-a">
                A actinidina do kiwi cru destrói a proteína da gelatina e impede o gel de solidificar. Para usar kiwi em sobremesas de gelatina, cozinhe a fruta antes — alguns minutos no forno ou na frigideira inativam a enzima. Depois pode misturar normalmente.
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
                Criador do Mise. Por anos foi ao mercado convicto de que tinha kiwi em casa. Não tinha. Construiu um app pra resolver esse problema — e outros piores que esse.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Nunca mais esquece o kiwi.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e{' '}
              <a href="/funcionalidades/lista-de-compras" style={{color: 'var(--verde-broto)'}}>lista de compras</a>{' '}
              num só lugar. Você compra o que vai usar — e o kiwi não apodrece na gaveta antes de virar smoothie.
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
