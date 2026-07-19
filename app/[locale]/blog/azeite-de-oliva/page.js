import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Azeite de oliva extra virgem: benefícios e como usar',
  description: 'Azeite de oliva extra virgem tem gorduras insaturadas e ação anti-inflamatória comprovada. Veja os tipos, como usar, quanto consumir por dia e como guardar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/azeite-de-oliva',
  },
  openGraph: {
    title: 'Azeite de oliva extra virgem: benefícios e como usar',
    description: 'Azeite de oliva extra virgem tem gorduras insaturadas e ação anti-inflamatória comprovada. Veja os tipos, como usar, quanto consumir por dia e como guardar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/azeite-de-oliva',
    images: [
      {
        url: 'https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pessoa despejando azeite de oliva extra virgem sobre salada fresca com tomates e folhas verdes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azeite de oliva extra virgem: benefícios e como usar',
    description: 'Azeite de oliva extra virgem tem gorduras insaturadas e ação anti-inflamatória comprovada. Veja os tipos, como usar, quanto consumir por dia e como guardar.',
    images: ['https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual a diferença entre azeite extra virgem e azeite virgem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A principal diferença é a acidez livre: extra virgem tem acidez abaixo de 0,8%, virgem fica entre 0,8% e 2%. O extra virgem vem da primeira prensagem a frio e preserva mais polifenóis — compostos bioativos responsáveis pelos benefícios anti-inflamatórios e antioxidantes. O virgem ainda é de boa qualidade, mas com menos desses compostos. Ambos são superiores ao azeite refinado ou composto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pode fritar com azeite de oliva extra virgem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode. O ponto de fumaça do azeite extra virgem fica entre 190°C e 210°C, acima das frituras domésticas (~170°C–180°C). O mito de que vira veneno ao aquecer não tem base científica. O azeite extra virgem é mais estável ao calor do que óleos de sementes refinados. O único motivo real para evitar em frituras é o custo: é caro para usar em volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto azeite de oliva posso consumir por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os estudos associam benefícios cardiovasculares ao consumo de cerca de 2 colheres de sopa por dia (20–30 ml). Não existe evidência de que mais seja melhor. Azeite é calórico — cerca de 120 calorias por colher de sopa, como qualquer gordura. Quem já usa no tempero do dia a dia provavelmente está dentro da faixa sem precisar medir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Azeite de oliva perde os benefícios quando aquece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parte dos polifenóis se perde com calor intenso, mas o azeite não vira um alimento prejudicial. Pesquisa da Universidade de São Paulo mostrou que cozinhar com azeite extra virgem ajuda inclusive a preservar nutrientes dos alimentos preparados. Para aproveitar ao máximo os compostos bioativos, o ideal é usar também cru — finalizar pratos e temperar saladas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como saber se o azeite de oliva é de boa qualidade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indicadores no rótulo: acidez baixa (abaixo de 0,3% nos de alta qualidade), data de safra além do vencimento, embalagem de vidro escuro ou lata, certificação de origem controlada (DOP ou similar). Azeites ricos em polifenóis costumam ter sabor amargo e picante na garganta — um bom sinal de frescor e qualidade. Se for completamente suave e sem amargor, provavelmente tem pouca acidez mas também poucos compostos bioativos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar azeite em casa para não perder qualidade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guarde em local fresco, escuro e fechado. Longe do fogão e de janelas com luz direta. Não precisa de geladeira — o frio deixa o azeite turvo mas não afeta a qualidade. Uma vez aberto, o extra virgem mantém a qualidade por até 6 meses. Embalagem de vidro escuro ou lata preserva mais do que plástico ou vidro claro.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Azeite de oliva extra virgem: benefícios e como usar',
  description: 'Azeite de oliva extra virgem tem gorduras insaturadas e ação anti-inflamatória comprovada. Veja os tipos, como usar, quanto consumir por dia e como guardar.',
  image: 'https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-11',
  dateModified: '2026-06-11',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/azeite-de-oliva',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Azeite de oliva', item: 'https://www.miseemcasa.com.br/pt/blog/azeite-de-oliva' },
  ],
}

export default function AzeiteDeOliva({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Azeite de oliva</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-11">11 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Azeite de oliva: o que é, quais os benefícios e como usar na cozinha
          </h1>
          <p className="blog-desc">
            Todo mundo tem um frasco de azeite na cozinha. Nem todo mundo sabe o que diferencia o extra virgem do comum, se pode fritar ou quanto usar por dia. Guia direto ao ponto.
          </p>

          <div className="answer-box">
            <p>
              <strong>Azeite de oliva</strong> é o óleo extraído da azeitona por processo mecânico — prensagem — sem solventes químicos.
              O extra virgem, primeira prensagem a frio com acidez abaixo de 0,8%, preserva os polifenóis responsáveis pelos benefícios cardiovasculares, anti-inflamatórios e antioxidantes.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pessoa despejando azeite de oliva extra virgem sobre salada fresca com tomates e folhas verdes"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Dario Garcia / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é azeite de oliva</a></li>
              <li><a href="#tipos">Tipos de azeite de oliva</a></li>
              <li><a href="#beneficios">Benefícios do azeite extra virgem</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#fritar">Pode fritar com azeite extra virgem?</a></li>
              <li><a href="#quanto">Quanto consumir por dia</a></li>
              <li><a href="#guardar">Como guardar em casa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <h2 id="o-que-e">O que é azeite de oliva</h2>

          <p>
            Azeite de oliva é o óleo extraído da azeitona por prensagem mecânica, sem uso de solventes químicos ou refinamento. É o único óleo vegetal que pode ser consumido diretamente no estado em que sai da prensa — daí o "extra virgem".
          </p>
          <p>
            A oliveira tem origem no Mediterrâneo e é cultivada principalmente na Espanha, Itália, Grécia e Marrocos. O Brasil não produz em escala comercial. Todo o azeite nas prateleiras é importado, o que explica por que o preço sobe com o câmbio.
          </p>
          <p>
            O que diferencia o azeite de outros óleos vegetais não é só o sabor: é o perfil de gorduras e os compostos bioativos. O ácido oleico — uma gordura monoinsaturada — representa 55% a 85% da composição. Os polifenóis, presentes em maior concentração no extra virgem de qualidade, têm ação antioxidante e anti-inflamatória documentada em estudos clínicos.
          </p>
          <p>
            O rótulo importa mais do que a marca. A maioria dos azeites mais baratos no supermercado não é extra virgem — são refinados, compostos ou de qualidade inferior. Entender os tipos antes de comprar poupa dinheiro sem abrir mão do que realmente importa.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13562521/pexels-photo-13562521.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cesto com azeitonas frescas coloridas em mercado ao ar livre — variedades usadas na produção de azeite"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: César Guillotel / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de azeite de oliva</h2>

          <p>
            A diferença entre os tipos não é de sabor preferido — é de processo e composição. Escolher o tipo certo para cada uso poupa dinheiro sem sacrificar qualidade onde ela faz diferença.
          </p>

          <h3>Extra virgem</h3>
          <p>
            Acidez livre abaixo de 0,8%, primeira prensagem a frio, sem refino. É o tipo com maior concentração de polifenóis e o mais nutritivo. O sabor vai do frutado suave ao amargo e picante, dependendo da variedade da azeitona e da safra. Serve para tudo: cru, refogado e finalização.
          </p>

          <h3>Virgem</h3>
          <p>
            Acidez entre 0,8% e 2%. Ainda obtido por processo mecânico, sem refino. Menos polifenóis que o extra virgem, mas qualidade ainda sólida. Boa escolha para cozinhar quando o extra virgem de qualidade é caro demais para usar em volume.
          </p>

          <h3>Refinado e composto</h3>
          <p>
            O refinado passa por processo químico para reduzir acidez alta. Perde a maior parte dos polifenóis. Sabor neutro, cor mais clara. Frequentemente misturado com azeite virgem e vendido como "azeite de oliva" — sem o "extra virgem" no rótulo. O composto adiciona outros óleos vegetais à mistura e tem ainda menos benefícios. São os mais baratos na gôndola.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios do azeite extra virgem</h2>

          <p>
            O estudo PREDIMED, publicado no <em>New England Journal of Medicine</em>, acompanhou mais de 7.000 pessoas com risco cardiovascular. Quem seguiu dieta mediterrânea suplementada com azeite extra virgem teve redução de cerca de 30% em eventos cardiovasculares graves — infarto, derrame, morte por causas cardíacas — em comparação ao grupo controle. É um dos estudos de nutrição mais citados dos últimos 20 anos.
          </p>
          <p>
            O mecanismo principal: o ácido oleico reduz o LDL (colesterol ruim) sem afetar o HDL (bom). Os polifenóis — oleocanthal, oleuropeína, hidroxitirosol — têm ação anti-inflamatória e antioxidante. O oleocanthal em particular age de forma similar ao ibuprofeno em doses baixas, inibindo as mesmas enzimas inflamatórias.
          </p>
          <p>
            O azeite extra virgem também contribui para a saúde intestinal. Estimula a produção de bile, facilita a digestão de outras gorduras e favorece bactérias benéficas da microbiota. Pesquisas recentes apontam efeito protetor na mucosa intestinal com consumo regular.
          </p>
          <p>
            Uma observação necessária: os benefícios vêm do consumo regular dentro de uma{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">alimentação variada ao longo da semana</a>.
            Dois colheres de sopa por dia é o que os estudos associam a resultados. Não é o único alimento que importa — é um componente de um padrão alimentar mais amplo.
          </p>

          <div className="blog-inline-cta">
            <p>Sabe o que tem na despensa antes de ir ao mercado. <em>O Mise ajuda.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1239312/pexels-photo-1239312.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Salada de tomate com azeite de oliva — tempero mediterrâneo simples com ingredientes frescos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Dana Tentis / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar azeite na cozinha</h2>

          <p>
            O azeite funciona em praticamente qualquer contexto culinário. A escolha do tipo certo para cada uso poupa dinheiro sem abrir mão da qualidade onde ela faz diferença.
          </p>

          <h3>Cru — saladas e finalização</h3>
          <p>
            É aqui que o extra virgem aparece com mais força. Um fio sobre salada, legumes assados, sopa pronta, pão, carne ou massa finalizada. Os polifenóis ficam intactos, o sabor aparece limpo. É a forma mais simples e eficiente de usar o azeite de qualidade — e também a mais subutilizada por quem só lembra dele na frigideira.
          </p>

          <h3>Refogado e cozimento médio</h3>
          <p>
            Para alho, cebola e tomate em temperatura de refogado (~180°C), o azeite extra virgem aguenta bem. Não é preciso usar o mais caro pra isso — um virgem de boa qualidade resolve sem desperdício.
          </p>

          <h3>Assar no forno</h3>
          <p>
            Legumes, frango e peixe assados com azeite ficam com sabor mais complexo do que com óleo refinado. A temperatura de 200°C está dentro do ponto de fumaça. A questão é custo: se vai usar volume, reserve o extra virgem premium para a finalização e use um virgem para assar.
          </p>

          {/* FRITAR */}
          <h2 id="fritar">Pode fritar com azeite de oliva extra virgem?</h2>

          <p>
            Pode. O ponto de fumaça do azeite extra virgem fica entre 190°C e 210°C, dependendo da acidez e qualidade. Frituras domésticas ficam em torno de 170°C–180°C. O azeite aguenta.
          </p>
          <p>
            O mito de que "vira veneno" ao aquecer não tem base científica. O azeite extra virgem é mais estável ao calor do que a maioria dos óleos de sementes refinados por causa dos ácidos graxos monoinsaturados e da presença de antioxidantes. Pesquisa da{' '}
            <a href="https://jornal.usp.br/ciencias/cozinhar-com-azeite-extravirgem-ajuda-a-preservar-os-nutrientes-dos-alimentos/" target="_blank" rel="noopener">
              Universidade de São Paulo
            </a>{' '}
            confirmou que cozinhar com azeite extra virgem ajuda a preservar os nutrientes dos alimentos preparados.
          </p>
          <p>
            O único motivo real para não usar azeite extra virgem em fritura é financeiro: é caro para usar em volume. Para frituras frequentes,{' '}
            <a href="/blog/oleo-de-canola">óleo de canola</a>{' '}
            ou um azeite refinado resolve a mesma função com muito menos custo. Guarde o extra virgem bom para o cru e a finalização.
          </p>

          {/* QUANTO */}
          <h2 id="quanto">Quanto consumir por dia</h2>

          <p>
            Os estudos associam benefícios cardiovasculares ao consumo de cerca de 2 colheres de sopa por dia (20–30 ml). Não existe evidência sólida de que mais seja melhor.
          </p>
          <p>
            Azeite é calórico — cerca de 120 calorias por colher de sopa, como qualquer gordura. Para quem já usa azeite no tempero do dia a dia, provavelmente já está dentro da faixa sem precisar medir. Para quem está tentando incluir mais, um fio na salada e um fio no prato para finalizar é suficiente pra começar.
          </p>

          {/* GUARDAR */}
          <h2 id="guardar">Como guardar azeite em casa</h2>

          <p>
            Calor, luz e ar são os inimigos do azeite. Guarde em local fresco, escuro e fechado. A porta ao lado do fogão — onde a maioria guarda — é exatamente o pior lugar possível. Ciclos de calor e variação de temperatura aceleram a oxidação e o ranço.
          </p>
          <p>
            Geladeira não é necessária e deixa o azeite turvo, o que assusta mas não afeta a qualidade — volta ao normal em temperatura ambiente. Refrigeração só faz sentido se o frasco ficar aberto por mais de dois ou três meses em clima muito quente.
          </p>
          <p>
            Uma vez aberto, azeite extra virgem mantém a qualidade por até 6 meses. Embalagem de vidro escuro ou lata preserva melhor do que vidro claro ou plástico. Vale registrar na{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            a data em que abriu — o que importa não é o vencimento na embalagem, mas quando começou a usar.
          </p>
          <p>
            O frasco com meio fundo na prateleira desde o ano passado já passou do ponto. Não faz mal, mas perdeu a graça de ter comprado o bom.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale colocar na lista</h2>

          <p>
            Sim — se você cozinha em casa com alguma regularidade. É um dos poucos ingredientes em que qualidade faz diferença real: entre um extra virgem de boa safra e um composto barato, o que muda não é só o sabor, é o que o alimento faz por você.
          </p>
          <p>
            Para quem está montando uma{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>,
            {' '}o azeite extra virgem entra na categoria de itens que vale ter sempre — não como luxo, mas como base. Um frasco de 500 ml dura semanas se você usar com inteligência: extra virgem cru e para finalizar, virgem ou outro óleo para cozinhar em volume.
          </p>
          <p>
            O azeite na lista. Só não guarda na porta do fogão.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre azeite de oliva</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre azeite extra virgem e azeite virgem?</p>
              <p className="faq-a">
                A principal diferença é a acidez livre: extra virgem tem acidez abaixo de 0,8%, virgem fica entre 0,8% e 2%. O extra virgem preserva mais polifenóis — compostos bioativos responsáveis pelos benefícios anti-inflamatórios e antioxidantes. O virgem ainda é de boa qualidade, mas com menos desses compostos. Ambos são superiores ao azeite refinado ou composto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pode fritar com azeite de oliva extra virgem?</p>
              <p className="faq-a">
                Pode. O ponto de fumaça fica entre 190°C e 210°C — acima das frituras domésticas. O mito de que vira veneno ao aquecer não tem base científica. O único motivo para evitar em frituras frequentes é o custo: é caro para usar em volume. Para frituras, um azeite virgem ou outro óleo estável é mais econômico.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto azeite de oliva posso consumir por dia?</p>
              <p className="faq-a">
                Os estudos associam benefícios cardiovasculares ao consumo de cerca de 2 colheres de sopa por dia (20–30 ml). Não existe evidência de que mais seja melhor. Azeite é calórico — cerca de 120 calorias por colher de sopa. Quem já usa no tempero diário provavelmente já está dentro da faixa sem precisar medir.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Azeite de oliva perde os benefícios quando aquece?</p>
              <p className="faq-a">
                Parte dos polifenóis se perde com calor intenso, mas o azeite não vira um alimento prejudicial ao cozinhar. Pesquisa da USP mostrou que o extra virgem ajuda a preservar nutrientes dos alimentos preparados. Para aproveitar ao máximo os compostos bioativos, o ideal é usar também cru — finalizar pratos e temperar saladas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como saber se o azeite de oliva é de boa qualidade?</p>
              <p className="faq-a">
                Indicadores no rótulo: acidez baixa (abaixo de 0,3% nos de alta qualidade), data de safra além do vencimento, embalagem de vidro escuro ou lata, e certificação de origem controlada (DOP ou similar). Azeites ricos em polifenóis costumam ter sabor amargo e picante — um bom sinal de frescor. Completamente suave e sem amargor pode indicar baixo teor de compostos bioativos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar azeite em casa para não perder qualidade?</p>
              <p className="faq-a">
                Guarde em local fresco, escuro e fechado. Longe do fogão e de janelas com luz direta. Geladeira não é necessária — o frio deixa o azeite turvo mas não afeta a qualidade. Uma vez aberto, o extra virgem mantém a qualidade por até 6 meses. Vidro escuro ou lata preserva mais do que plástico ou vidro claro.
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
                Criador do Mise. Guardava azeite na porta ao lado do fogão por anos. Aprendeu da pior forma que esse é o lugar errado.
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
              O azeite entra na lista quando acabar — sem precisar lembrar na hora do mercado.
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
