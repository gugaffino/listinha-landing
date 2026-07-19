import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Batata doce: o que é, nutrientes e como usar na cozinha',
  description: 'Batata doce é um tubérculo com betacaroteno, fibras e carboidratos de baixo índice glicêmico. Veja tipos, valor nutricional e como guardar e usar na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/batata-doce',
  },
  openGraph: {
    title: 'Batata doce: o que é, nutrientes e como usar na cozinha',
    description: 'Batata doce é um tubérculo com betacaroteno, fibras e carboidratos de baixo índice glicêmico. Veja tipos, valor nutricional e como guardar e usar na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/batata-doce',
    images: [
      {
        url: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Batatas doces laranjas frescas em close-up sobre superfície escura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batata doce: o que é, nutrientes e como usar na cozinha',
    description: 'Batata doce é um tubérculo com betacaroteno, fibras e carboidratos de baixo índice glicêmico. Veja tipos, valor nutricional e como guardar e usar na cozinha.',
    images: ['https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Batata doce tem muito carboidrato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, batata doce é rica em carboidratos — cerca de 20g por 100g cozida. Mas são carboidratos complexos com fibras, que liberam energia mais gradualmente do que o arroz branco ou a batata inglesa. O índice glicêmico varia com o preparo: cozida em água tem IG menor do que assada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Batata doce emagrece ou engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nenhum alimento emagrece ou engorda isolado. Batata doce é nutritiva, saciante e tem menos calorias do que muitas alternativas de carboidrato. Em refeições balanceadas, entra bem sem ser o vilão da conta calórica. O que importa é o contexto da alimentação como um todo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o índice glicêmico da batata doce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O índice glicêmico depende do preparo. Cozida em água, o IG fica entre 44 e 61 (baixo a moderado). Assada, pode chegar a 82–94, porque o calor seco converte mais amido em açúcares simples. Para menor resposta glicêmica, prefira cozida ou com casca.',
      },
    },
    {
      '@type': 'Question',
      name: 'Batata doce pode ser comida crua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Batata doce crua não é tóxica, mas o amido cru é difícil de digerir e pode causar desconforto gastrointestinal. O sabor também é muito diferente: mais firme, menos doce, levemente terroso. Na prática, cozida, assada ou no forno é quando o sabor e a digestibilidade ficam bons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar batata doce depois de cozida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em pote fechado na geladeira, batata doce cozida dura 3 a 5 dias. Pode ser congelada em porções e dura até 3 meses no freezer com boa textura para purê, sopas e recheios. Congele já amassada ou em pedaços, dependendo do uso que vai dar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Batata doce pode substituir a batata inglesa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na maioria das receitas, sim. Purê, sopa, assada, frita — batata doce funciona nos mesmos contextos da batata inglesa. O sabor é mais adocicado, o que complementa bem alecrim, pimenta e azeite. Em receitas com sabores mais delicados, o dulçor pode aparecer mais do que você esperava na primeira tentativa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Batata doce com casca tem mais nutrientes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A casca da batata doce concentra fibras e parte dos minerais. Quando possível, cozinhar e comer com casca aproveita melhor o alimento inteiro. Basta lavar bem sob água corrente antes de preparar. Assada inteira ou em cubos grandes com casca é a opção mais simples e nutritiva.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Batata doce: o que é, nutrientes e como usar na cozinha',
  description: 'Batata doce é um tubérculo com betacaroteno, fibras e carboidratos de baixo índice glicêmico. Veja tipos, valor nutricional e como guardar e usar na cozinha.',
  image: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-05',
  dateModified: '2026-06-05',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/batata-doce',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Batata doce', item: 'https://www.miseemcasa.com.br/pt/blog/batata-doce' },
  ],
}

export default function BatataDoce({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Batata doce</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-05">5 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">10 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Batata doce: guia de valor nutricional, tipos e como usar sem desperdiçar
          </h1>
          <p className="blog-desc">
            Um dos tubérculos mais completos e baratos do mercado — e ainda assim um dos que mais acaba esquecido na despensa com broto. Aqui está o que você precisa saber: o que contém, como escolher, como guardar e como realmente usar.
          </p>

          <div className="answer-box">
            <p>
              <strong>Batata doce</strong> (<em>Ipomoea batatas</em>) é um tubérculo de polpa alaranjada, roxa ou branca,
              rico em betacaroteno, fibras e carboidratos complexos de baixo índice glicêmico.
              É cultivada no Brasil o ano inteiro, disponível em quase todo mercado e entre as opções mais acessíveis
              de fonte de energia na alimentação do dia a dia.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Batatas doces laranjas frescas em close-up sobre superfície escura"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Jorge Romero / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é batata doce</a></li>
              <li><a href="#valor-nutricional">Valor nutricional</a></li>
              <li><a href="#tipos">Tipos de batata doce no Brasil</a></li>
              <li><a href="#como-escolher">Como escolher no mercado</a></li>
              <li><a href="#como-guardar">Como guardar em casa</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/89247/pexels-photo-89247.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fatia de batata doce cortada ao meio mostrando interior alaranjado vibrante"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ela Haney / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é batata doce</h2>

          <p>
            Batata doce (<em>Ipomoea batatas</em>) é um tubérculo da família Convolvulaceae — a mesma das corriolas.
            Não tem parentesco próximo com a batata inglesa (<em>Solanum tuberosum</em>), que é da família das solanáceas.
            O nome similar é coincidência botânica e causa confusão desde sempre.
          </p>
          <p>
            A parte que se come é a raiz tuberosa, não o caule. A planta cresce rasteira, com folhas em forma de coração.
            No Brasil, a produção acontece o ano inteiro em quase todo o território — por isso ela está sempre disponível e barata,
            independente da estação.
          </p>
          <p>
            A cor da polpa varia por variedade: alaranjada (a mais comum), branca, amarela ou roxa.
            A polpa alaranjada é a mais rica em betacaroteno, o precursor da vitamina A.
            A roxa tem antocianinas, compostos com ação antioxidante estudados em contextos de saúde cardiovascular.
          </p>
          <p>
            O sabor é naturalmente adocicado — mais com o cozimento, porque o calor converte parte do amido em maltose.
            É esse processo que explica por que batata doce assada fica mais doce do que cozida em água.
          </p>
          <p>
            Batata doce e batata inglesa são parentes distantes — do mesmo jeito que você e o colega que não suporta são "da mesma empresa".
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="valor-nutricional">Valor nutricional da batata doce</h2>

          <p>
            100g de batata doce cozida em água têm cerca de 86 calorias, 20g de carboidratos, 3g de fibra e 1,6g de proteína.
            Os dados são da{' '}
            <a href="https://www.tbca.net.br" target="_blank" rel="noopener">TBCA (Tabela Brasileira de Composição de Alimentos)</a>.
          </p>
          <p>
            O destaque é o betacaroteno. Batata doce de polpa alaranjada é uma das fontes mais acessíveis desse nutriente no Brasil.
            Uma porção de 100g cozida pode fornecer mais de 100% da ingestão diária recomendada de vitamina A.
            Sem suplemento, sem produto especial.
          </p>
          <p>
            O teor de fibras contribui pra sensação de saciedade e pra saúde digestiva.
            Comparado ao arroz branco — 0,2g de fibra por 100g cozido — batata doce tem 15 vezes mais fibra na mesma quantidade.
          </p>

          <h3>Vitaminas e minerais relevantes</h3>
          <p>
            Além de betacaroteno, batata doce fornece vitamina C, vitamina B6, potássio e manganês em quantidades relevantes.
            O potássio tem papel na regulação da pressão arterial. A vitamina B6 participa do metabolismo de proteínas
            e do funcionamento do sistema nervoso.
          </p>

          <h3>Índice glicêmico</h3>
          <p>
            O índice glicêmico da batata doce depende do preparo. Cozida em água, o IG fica entre 44 e 61 — baixo a moderado.
            Assada, pode chegar a 82–94, porque o calor seco converte mais amido em açúcares simples.
          </p>
          <p>
            Isso não significa que assar seja ruim. Significa que o método importa quando o controle glicêmico é uma prioridade.
            Comer com casca e não passar do ponto são dois fatores simples que ajudam a manter o IG mais baixo.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13059602/pexels-photo-13059602.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Batatas doces inteiras com casca sobre superfície rústica em close-up"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Marcelo Verfe / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de batata doce no Brasil</h2>

          <p>
            O Brasil tem várias cultivares de batata doce. No mercado, a distinção mais prática é pela cor da polpa e da casca.
          </p>

          <h3>Batata doce laranja</h3>
          <p>
            A mais encontrada nos mercados brasileiros. Casca rosada a avermelhada, polpa alaranjada intensa.
            É a variedade com mais betacaroteno. Sabor adocicado pronunciado, textura macia depois de cozida.
            Funciona bem assada, cozida, em purê e em sopas.
          </p>

          <h3>Batata doce branca</h3>
          <p>
            Casca bege ou marrom clara, polpa branca ou creme. Sabor mais neutro, menos doce.
            Textura mais firme. Boa pra receitas em que o dulçor da laranja interferiria —
            chips, acompanhamentos salgados ou receitas com sabores mais delicados.
          </p>

          <h3>Batata doce roxa</h3>
          <p>
            Menos comum nos mercados convencionais, mais fácil em feiras e lojas de produtos naturais.
            A casca e a polpa são roxas intensas — a cor vem das antocianinas.
            O sabor é levemente terroso. Ótima opção visual pra purê de cor diferente, smoothie ou prato de apresentação.
          </p>

          <h3>Batata doce amarela</h3>
          <p>
            Polpa amarela pálida, sabor intermediário entre a branca e a laranja.
            Não é tão fácil de encontrar fora de feiras. Quando aparece, costuma ser mais barata do que a laranja
            e funciona nos mesmos contextos.
          </p>

          {/* COMO ESCOLHER */}
          <h2 id="como-escolher">Como escolher batata doce no mercado</h2>

          <p>
            Batata doce boa não precisa de muito julgamento. Alguns sinais práticos poupam compra ruim.
          </p>

          <ul className="item-list">
            <li><strong>Casca firme e lisa.</strong> Evite partes moles, afundadas ou escurecidas — sinal de início de deterioração.</li>
            <li><strong>Sem brotos longos.</strong> Broto pequeno ainda é aceitável. Broto longo significa que perdeu umidade — ficou tempo demais na prateleira.</li>
            <li><strong>Tamanho médio.</strong> Batatas muito grandes costumam ter polpa mais fibrosa no centro. Médias (200g a 350g) têm textura mais uniforme.</li>
            <li><strong>Sem rachaduras profundas.</strong> Rachadura pequena na casca é normal. Rachadura que expõe a polpa facilita deterioração.</li>
          </ul>

          <p>
            Na feira, pergunte a origem se quiser. Batata doce colhida há menos tempo tem casca mais resistente e conserva melhor.
            O feirante geralmente sabe dizer — no supermercado, essa informação raramente está disponível.
          </p>
          <p>
            A{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            de quem cozinha regularmente tem batata doce como item fixo.
            Ela aguenta bem a semana — diferente de folhas ou frutas mais delicadas.
          </p>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Como guardar batata doce em casa</h2>

          <p>
            Esse é o ponto onde a maioria erra. Batata doce crua não vai pra geladeira —
            o frio altera o amido e deixa a textura farinhenta depois de cozida.
          </p>

          <h3>Crua, inteira</h3>
          <p>
            Guarde em local fresco, escuro e ventilado — longe do fogão e da luz direta.
            Numa despensa ou armário de cozinha, dura 1 a 2 semanas facilmente.
            Não coloque em saco plástico fechado: precisa de circulação de ar.
            Saco de papel ou cesta aberta funcionam melhor.
          </p>
          <p>
            Não guarde próximo de cebola ou alho — liberam etileno e aceleram o amadurecimento.
            A{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            do Mise permite registrar onde cada item está e quando comprou — útil pra não deixar ela aparecer com broto duas semanas depois.
          </p>

          <h3>Crua, descascada ou cortada</h3>
          <p>
            Se descascar e não for usar imediatamente, coloque em água fria com algumas gotas de limão pra evitar oxidação.
            Na geladeira assim, dura 1 dia. Mais do que isso, a textura começa a mudar.
            O ideal é descascar próximo do preparo.
          </p>

          <h3>Cozida</h3>
          <p>
            Em pote fechado na geladeira, dura 3 a 5 dias. Pode congelar em porções — dura até 3 meses no freezer
            e mantém boa textura pra purê, sopas e recheios. Congele já amassada ou em pedaços, dependendo do uso.
          </p>

          <p>
            O desperdício doméstico de alimentos no Brasil chega a{' '}
            <a href="https://www.embrapa.br" target="_blank" rel="noopener">R$ 1.000–1.400 por domicílio por ano (Embrapa, 2023)</a>.
            Batata doce crua esquecida no fundo da gaveta entra nessa conta toda semana.
            Saber onde guardar é metade da batalha.
          </p>

          <div className="blog-inline-cta">
            <p>Sabe o que tem na despensa antes de ir ao mercado. <em>O Mise faz isso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar batata doce na cozinha</h2>

          <p>
            A batata doce é versátil de verdade — não no sentido de "funciona em tudo teoricamente",
            mas no sentido concreto de que aparece em pratos muito diferentes e performa bem em todos eles.
          </p>

          <h3>Cozida em água</h3>
          <p>
            A forma mais simples. Com casca, em água com sal, por 20 a 25 minutos.
            Espete um garfo pra testar — quando entrar fácil, está pronta.
            Pode comer assim, com azeite e ervas, ou usar como base pra purê.
          </p>

          <h3>Assada inteira</h3>
          <p>
            Forno a 200°C, com casca, por 40 a 50 minutos dependendo do tamanho.
            A polpa fica cremosa e muito adocicada. Pode rechear com iogurte, cottage, ovo mexido ou feijão temperado.
            É o preparo que mais aproveita o sabor natural.
          </p>

          <h3>Em cubos no forno</h3>
          <p>
            Corta em cubos com casca, tempera com azeite, sal, alho e alecrim, assa a 200°C por 25 a 30 minutos.
            Fica crocante por fora, macio por dentro. Serve como acompanhamento de carne, frango ou ovo — entra no{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>{' '}
            sem trabalho extra.
          </p>

          <h3>Em purê</h3>
          <p>
            Cozinha até bem mole, amassa com azeite ou manteiga, sal e um pouco de noz-moscada.
            O dulçor da batata equilibra com o sal e o tempero.
            Uma variação simples: mistura com abóbora — o resultado fica mais complexo sem trabalho extra.
          </p>

          <h3>Em sopas e cremes</h3>
          <p>
            Entra bem em sopas com gengibre, coentro, leite de coco e frango.
            Faz um creme encorpado sozinha, com poucos ingredientes.
            Combina também com cenoura, abóbora ou mandioca.
          </p>

          <h3>Em receitas doces</h3>
          <p>
            Bolo de batata doce, brownie sem farinha, pudim, cookie.
            A polpa cozida e amassada substitui parte da gordura e adiciona umidade natural.
            Receitas com batata doce tendem a ficar mais macias do que com farinha comum — funciona especialmente bem em receitas sem glúten.
          </p>

          <p>
            A batata doce comprada pra virar purê saudável na segunda acaba assada com mel na quarta porque você não teve paciência.
            Tudo bem. O resultado fica bom de qualquer jeito.
          </p>

          <p>
            Se quiser organizar quais ingredientes usar primeiro, o{' '}
            <a href="/blog/como-organizar-a-despensa">guia de organização de despensa</a>{' '}
            ajuda a criar esse hábito sem complicar.
          </p>

          <p>
            Batata doce é o ingrediente que resolve três problemas de uma vez: orçamento, nutrição e variedade.
            O único problema real é lembrar que ela está na despensa antes de comprar de novo.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre batata doce</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Batata doce tem muito carboidrato?</p>
              <p className="faq-a">
                Sim, é rica em carboidratos — cerca de 20g por 100g cozida. Mas são carboidratos complexos com fibras,
                que liberam energia mais gradualmente do que o arroz branco ou a batata inglesa.
                O índice glicêmico varia com o preparo: cozida em água tem IG menor do que assada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Batata doce emagrece ou engorda?</p>
              <p className="faq-a">
                Nenhum alimento emagrece ou engorda isolado. Batata doce é nutritiva, saciante e tem menos calorias
                do que muitas alternativas de carboidrato. Em refeições balanceadas, entra bem sem ser o vilão da conta calórica.
                O que importa é o contexto da alimentação como um todo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual o índice glicêmico da batata doce?</p>
              <p className="faq-a">
                O índice glicêmico depende do preparo. Cozida em água, o IG fica entre 44 e 61 (baixo a moderado).
                Assada, pode chegar a 82–94, porque o calor seco converte mais amido em açúcares simples.
                Para menor resposta glicêmica, prefira cozida ou com casca.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Batata doce pode ser comida crua?</p>
              <p className="faq-a">
                Não é tóxica crua, mas o amido cru é difícil de digerir e pode causar desconforto gastrointestinal.
                O sabor também é muito diferente: mais firme, menos doce, levemente terroso.
                Na prática, cozida, assada ou no forno é quando o sabor e a digestibilidade ficam bons.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar batata doce depois de cozida?</p>
              <p className="faq-a">
                Em pote fechado na geladeira, dura 3 a 5 dias. Pode ser congelada em porções e dura até 3 meses no freezer
                com boa textura para purê, sopas e recheios. Congele já amassada ou em pedaços, dependendo do uso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Batata doce pode substituir a batata inglesa?</p>
              <p className="faq-a">
                Na maioria das receitas, sim. Purê, sopa, assada, frita — batata doce funciona nos mesmos contextos.
                O sabor é mais adocicado, o que complementa bem alecrim, pimenta e azeite.
                Em receitas com sabores mais delicados, o dulçor pode aparecer mais do que você esperava na primeira tentativa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Batata doce com casca tem mais nutrientes?</p>
              <p className="faq-a">
                Sim. A casca concentra fibras e parte dos minerais. Quando possível, cozinhar e comer com casca
                aproveita melhor o alimento inteiro. Basta lavar bem sob água corrente antes de preparar.
                Assada inteira ou em cubos grandes com casca é a opção mais simples e mais nutritiva.
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
                Criador do Mise. Compra 2 kg de batata doce toda semana porque está barata. Usa metade. O resto aparece com broto duas semanas depois no fundo da despensa.
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
              A batata doce entra na lista quando acaba — não quando você encontra o broto.
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
