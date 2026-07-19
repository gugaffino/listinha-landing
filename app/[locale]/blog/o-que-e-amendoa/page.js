import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Amêndoa: o que é, benefícios e como usar na cozinha',
  description:
    'Saiba o que é amêndoa, para que serve, quantas comer por dia, a diferença entre crua e torrada e como guardar em casa. O guia completo antes de comprar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-amendoa',
  },
  openGraph: {
    title: 'Amêndoa: o que é, benefícios e como usar na cozinha',
    description:
      'Saiba o que é amêndoa, para que serve, quantas comer por dia, a diferença entre crua e torrada e como guardar em casa. O guia completo antes de comprar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-amendoa',
    images: [
      {
        url: 'https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Amêndoas cruas espalhadas em close, mostrando a textura natural da semente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amêndoa: o que é, benefícios e como usar na cozinha',
    description:
      'Saiba o que é amêndoa, para que serve, quantas comer por dia, a diferença entre crua e torrada e como guardar em casa. O guia completo antes de comprar.',
    images: [
      'https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quantas amêndoas devo comer por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A recomendação geral é de 20 a 25 amêndoas por dia, o equivalente a cerca de 30g. Mais do que isso não traz benefícios extras — a amêndoa é calórica e a dose ótima é essa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Amêndoa crua ou torrada: qual é melhor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crua conserva um pouco mais de vitamina E e polifenóis. Torrada sem sal e sem óleo perde muito pouco e fica mais saborosa para muita gente. Qualquer uma das duas vale — o que não vale é a torrada com sal, mel ou cobertura.',
      },
    },
    {
      '@type': 'Question',
      name: 'Amêndoa tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amêndoa pura não tem glúten. Quem tem doença celíaca pode consumir sem problema. A ressalva é para produtos industrializados — biscoito de amêndoa ou granola podem ter contaminação cruzada dependendo da fábrica. Sempre confira o rótulo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Amêndoa tem lactose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Amêndoa é de origem vegetal e não contém lactose. O leite de amêndoa também é livre de lactose e serve como substituto do leite de vaca para quem tem intolerância.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar amêndoas em casa para durar mais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em pote fechado, longe da luz e do calor, amêndoas duram até 12 meses. Na geladeira chegam a 2 anos. Se comprou a granel, transfira para um vidro com tampa assim que chegar em casa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Amêndoa emagrece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A amêndoa não emagrece por conta própria. Ela tem 167 calorias em 30g — não é um alimento de comer à vontade. O que as pesquisas mostram é que quem come amêndoas como lanche tende a comer menos nas refeições seguintes, pela saciedade que a gordura boa e a fibra proporcionam.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Amêndoa: o que é, benefícios e como usar na cozinha',
  description:
    'Saiba o que é amêndoa, para que serve, quantas comer por dia, a diferença entre crua e torrada e como guardar em casa. O guia completo antes de comprar.',
  image:
    'https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-amendoa',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.miseemcasa.com.br',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.miseemcasa.com.br/pt/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Amêndoa: o que é e benefícios',
      item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-amendoa',
    },
  ],
}

export default function OQueEAmendoaPage({ params }) {
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
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <SiteNav />
      <main id="main-content" className="blog-page">
        <nav className="breadcrumb" aria-label="Você está aqui">
          <ol className="breadcrumb-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">
              /
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">
              /
            </li>
            <li className="breadcrumb-current" aria-current="page">
              Amêndoa: o que é e benefícios
            </li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-17">
              17 jun. 2026
            </time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">
              Blog
            </a>
          </div>
          <h1 className="blog-h1">
            Amêndoa: o que é, benefícios reais e como usar no dia a dia
          </h1>
          <p className="blog-desc">
            A amêndoa está em todo lugar — no granola, no leite vegetal, no snack de academia. Mas
            o que ela é de verdade, quanto você deve comer e se vale o preço? Aqui tem a resposta
            direta.
          </p>
          <div className="answer-box">
            <p>
              <strong>Amêndoa</strong> é a semente do fruto da amendoeira (<em>Prunus dulcis</em>
              ), árvore nativa do Mediterrâneo. Rica em gorduras boas, vitamina E, magnésio e
              fibras, é consumida crua, torrada ou em forma de leite e pasta — sem glúten e sem
              lactose por natureza.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Amêndoas cruas espalhadas em close, mostrando a textura natural da semente"
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
              <li>
                <a href="#o-que-e">O que é amêndoa</a>
              </li>
              <li>
                <a href="#valor-nutricional">Valor nutricional</a>
              </li>
              <li>
                <a href="#beneficios">Benefícios no dia a dia</a>
              </li>
              <li>
                <a href="#crua-ou-torrada">Crua ou torrada</a>
              </li>
              <li>
                <a href="#quantidade">Quantas por dia</a>
              </li>
              <li>
                <a href="#como-guardar">Como guardar em casa</a>
              </li>
              <li>
                <a href="#gluten-lactose">Glúten e lactose</a>
              </li>
              <li>
                <a href="#faq">Perguntas frequentes</a>
              </li>
            </ol>
          </nav>

          <h2 id="o-que-e">O que é amêndoa</h2>

          <p>
            A amêndoa é a semente do fruto da amendoeira. A árvore produz uma drupa parecida com um
            pêssego verde. O que a gente come é o caroço de dentro — a parte que parece uma
            castanha.
          </p>
          <p>
            Tecnicamente, amêndoa não é uma castanha. É uma semente. Mas o Brasil inteiro chama
            assim e ninguém vai discutir isso no mercado.
          </p>
          <p>
            A amendoeira é nativa da região Mediterrânea. Hoje os Estados Unidos — especialmente a
            Califórnia — são o maior produtor do mundo. No Brasil, quase toda amêndoa que você
            encontra no supermercado é importada, o que explica o preço.
          </p>
          <p>
            Existem dois tipos: doce e amarga. A doce é a que você come. A amarga tem compostos
            tóxicos em quantidade e não é comercializada in natura.
          </p>

          <h2 id="valor-nutricional">Valor nutricional das amêndoas</h2>

          <p>
            A porção padrão de amêndoa é 30g — cerca de 23 unidades. Segundo o{' '}
            <a
              href="https://fdc.nal.usda.gov"
              target="_blank"
              rel="noopener"
            >
              USDA FoodData Central
            </a>
            , nessa quantidade você tem:
          </p>
          <ul className="item-list">
            <li>
              <strong>Calorias:</strong> 167 kcal
            </li>
            <li>
              <strong>Gorduras totais:</strong> 15g (principalmente monoinsaturadas)
            </li>
            <li>
              <strong>Proteínas:</strong> 6g
            </li>
            <li>
              <strong>Fibras:</strong> 3,5g
            </li>
            <li>
              <strong>Vitamina E:</strong> 7,3mg (cerca de 50% da necessidade diária)
            </li>
            <li>
              <strong>Magnésio:</strong> 76mg (18% da necessidade diária)
            </li>
            <li>
              <strong>Carboidratos:</strong> 6g
            </li>
          </ul>
          <p>
            É um alimento calórico e denso em nutrientes. Pouca quantidade, muito entregue.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8758386/pexels-photo-8758386.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Amêndoas ao lado de um copo de leite sobre tábua de madeira, mostrando formas de consumo"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
          </div>
          <h2 id="beneficios" className="img-above">
            Benefícios das amêndoas no dia a dia
          </h2>

          <p>
            Aqui o que os estudos mostram na prática — sem promessa de cura e sem o exagero do
            marketing de suplemento.
          </p>
          <p>
            <strong>Colesterol.</strong> As gorduras monoinsaturadas das amêndoas ajudam a reduzir
            o LDL. O efeito aparece em estudos com consumo regular de 30g por dia por pelo menos
            quatro semanas — não uma semana e depois nunca mais.
          </p>
          <p>
            <strong>Glicose.</strong> A amêndoa tem índice glicêmico baixo. Consumida junto de uma
            refeição com carboidrato, ela reduz o pico de glicose no sangue. Isso importa mais para
            quem tem resistência à insulina — mas ajuda qualquer um.
          </p>
          <p>
            <strong>Saciedade.</strong> Amêndoa tem fibra + gordura boa. Essa combinação sacia de
            verdade. Um punhado no lanche da tarde e você não chega na janta com fome de lobo.
          </p>
          <p>
            <strong>Vitamina E.</strong> É um antioxidante que protege as células de dano
            oxidativo. 30g de amêndoa entrega metade da necessidade diária. É raro encontrar uma
            fonte tão concentrada em algo que cabe no bolso do paletó.
          </p>
          <p>
            <strong>Proteínas vegetais.</strong> Com 6g por porção, a amêndoa entra bem numa dieta
            que tenta reduzir carne. Se você quer explorar mais{' '}
            <a href="/blog/alimentos-ricos-em-proteinas">alimentos ricos em proteína</a>, tem um
            guia completo no blog.
          </p>
          <p>
            <strong>Ossos.</strong> Magnésio e fósforo contribuem para a saúde óssea. Não é a
            única fonte, mas é uma fonte prática que você come sem cozinhar nada.
          </p>

          <h2 id="crua-ou-torrada">Amêndoa crua ou torrada: o que muda na prática</h2>

          <p>
            A versão crua mantém mais vitamina E e polifenóis. A torra leve — sem óleo, sem sal —
            perde pouco desses nutrientes e melhora muito o sabor para a maioria das pessoas.
          </p>
          <p>
            O problema não é torrada. O problema é torrada com mel, sal, açúcar ou cobertura de
            chocolate. Nesses casos você está adicionando calorias e sódio sem necessidade.
          </p>
          <p>
            Regra simples: amêndoa crua ou torrada sem cobertura. Qualquer outra versão
            industrializada, leia o rótulo antes de comprar. Tem muita amêndoa "saudável" no
            mercado que é basicamente um biscoito.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7420934/pexels-photo-7420934.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Amêndoas e nozes em superfície plana, mostrando a variedade de oleaginosas disponíveis"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vie Studio / Pexels</p>
          </div>
          <h2 id="quantidade" className="img-above">
            Quantas amêndoas por dia é o suficiente
          </h2>

          <p>
            A recomendação mais consistente na literatura é de 20 a 25 unidades por dia — 30g. É a
            dose usada na maioria dos estudos que mostram efeito em colesterol e glicose.
          </p>
          <p>
            Mais do que isso não acrescenta benefício proporcional. Como 30g já tem 167 calorias,
            ir para 60g dobra a caloria sem dobrar o efeito. A lógica é a mesma de qualquer coisa
            densa em nutrientes: a dose certa importa.
          </p>
          <p>
            O melhor horário não existe. Como lanche entre refeições faz sentido porque é quando a
            saciedade vai fazer mais diferença. Mas de manhã com iogurte, picado em cima de salada
            ou direto do pote funcionam igual.
          </p>
          <p>
            A amêndoa se parece com o{' '}
            <a href="/blog/o-que-e-pistache">pistache</a> nesse ponto: são oleaginosas que rendem
            mais quando você cria o hábito do que quando come de vez em quando.
          </p>

          <div className="blog-inline-cta">
            <p>
              Amêndoa é daqueles itens que somem da despensa sem você perceber. Controle o estoque
              e nunca chegue em casa pro lanche e não ter mais.{' '}
              <em>Com Mise.</em>
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

          <h2 id="como-guardar">Como guardar amêndoas em casa</h2>

          <p>
            Amêndoa estraga por ranço — a gordura oxida quando fica exposta ao calor, luz ou
            umidade. Não pelo prazo de validade impresso na embalagem, mas pela forma de
            armazenamento.
          </p>
          <p>
            <strong>Na despensa:</strong> pote fechado, longe do fogão e da janela. Dura até 12
            meses assim.
          </p>
          <p>
            <strong>Na geladeira:</strong> pote fechado, dura até 2 anos. Vale a pena se você
            compra em quantidade.
          </p>
          <p>
            <strong>No freezer:</strong> dura mais ainda, mas o sabor e a textura mudam um pouco
            depois de descongelar. Não é necessário na maioria dos casos.
          </p>
          <p>
            Se comprou a granel, nunca deixe no saquinho plástico da feira. Transfira para um vidro
            com tampa no mesmo dia. Saquinho plástico aberto é convite para ranço rápido.
          </p>
          <p>
            Saber o que tem em casa — e em que quantidade — evita comprar de novo algo que ainda
            tem, ou deixar acabar sem perceber. É o que a{' '}
            <a href="/funcionalidades/despensa">despensa do Mise</a> resolve: você vê o estoque
            antes de montar a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>.
          </p>

          <h2 id="gluten-lactose">Amêndoa tem glúten ou lactose</h2>

          <p>
            Amêndoa in natura não tem glúten e não tem lactose. É uma semente de origem vegetal —
            sem trigo, sem leite, sem derivados.
          </p>
          <p>
            Quem tem doença celíaca pode comer amêndoa sem problema. Quem tem intolerância à
            lactose também.
          </p>
          <p>
            A ressalva é para produtos industrializados. Biscoito de amêndoa, granola com amêndoa e
            farinha de amêndoa processada em linhas que também processam trigo podem ter
            contaminação cruzada. Se tiver restrição séria, leia sempre o rótulo.
          </p>
          <p>
            Leite de amêndoa é livre de lactose, mas não substitui nutricionalmente o leite de vaca
            — tem muito menos proteína e cálcio, a não ser que seja enriquecido. Para tomar no
            café, funciona bem. Para quem depende do cálcio, não é substituto completo.{' '}
            <a
              href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
              target="_blank"
              rel="noopener"
            >
              A OMS recomenda diversificar as fontes de cálcio
            </a>{' '}
            — leite de amêndoa é uma delas, não a única.
          </p>

          <h2 id="faq">Perguntas frequentes sobre amêndoas</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quantas amêndoas devo comer por dia?</p>
              <p className="faq-a">
                A recomendação geral é de 20 a 25 amêndoas por dia, o equivalente a cerca de 30g.
                Mais do que isso não traz benefícios extras — a amêndoa é calórica e a dose ótima
                é essa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Amêndoa crua ou torrada: qual é melhor?</p>
              <p className="faq-a">
                Crua conserva um pouco mais de vitamina E e polifenóis. Torrada sem sal e sem óleo
                perde muito pouco e fica mais saborosa para muita gente. Qualquer uma das duas vale
                — o que não vale é a torrada com sal, mel ou cobertura.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Amêndoa tem glúten?</p>
              <p className="faq-a">
                Amêndoa pura não tem glúten. Quem tem doença celíaca pode consumir sem problema. A
                ressalva é para produtos industrializados — biscoito de amêndoa ou granola podem
                ter contaminação cruzada dependendo da fábrica. Sempre confira o rótulo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Amêndoa tem lactose?</p>
              <p className="faq-a">
                Não. Amêndoa é de origem vegetal e não contém lactose. O leite de amêndoa também é
                livre de lactose e serve como substituto do leite de vaca para quem tem
                intolerância.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar amêndoas em casa para durar mais?</p>
              <p className="faq-a">
                Em pote fechado, longe da luz e do calor, amêndoas duram até 12 meses. Na geladeira
                chegam a 2 anos. Se comprou a granel, transfira para um vidro com tampa assim que
                chegar em casa — o saquinho plástico aberto acelera o ranço.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Amêndoa emagrece?</p>
              <p className="faq-a">
                A amêndoa não emagrece por conta própria. Ela tem 167 calorias em 30g — não é um
                alimento de comer à vontade. O que as pesquisas mostram é que quem come amêndoas
                como lanche tende a comer menos nas refeições seguintes, pela saciedade que a
                gordura boa e a fibra proporcionam.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
                <path
                  d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z"
                  fill="#2D5F2F"
                />
                <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A" />
              </svg>
            </div>
            <div>
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador do Mise. Tem amêndoa na despensa desde que descobriu que ela dura 12 meses
                fechada — o que significa que a embalagem que comprou em fevereiro ainda está válida
                em dezembro, provavelmente.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Amêndoa comprada.
              <br />
              <em>Agora não some mais da despensa.</em>
            </h2>
            <p>
              Com o Mise, você controla o estoque da despensa e monta a lista de compras antes de
              sair de casa. Sem comprar de novo o que ainda tem. Sem chegar em casa e descobrir que
              acabou.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Comece grátis{' '}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Voltar ao topo">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="16"
              height="16"
              aria-hidden="true"
            >
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
          <a href="/blog" className="footer-link">
            Blog
          </a>
        </div>
      </footer>
    </>
  )
}
