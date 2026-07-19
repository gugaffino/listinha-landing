import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Feijão preto: benefícios, nutrição e como usar toda semana',
  description: 'Feijão preto é fonte de proteína vegetal, ferro e fibras em cada porção. Veja os benefícios, diferença do feijão carioca e como sempre ter na despensa.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/feijao-preto-beneficios',
  },
  openGraph: {
    title: 'Feijão preto: benefícios, nutrição e como usar toda semana',
    description: 'Feijão preto é fonte de proteína vegetal, ferro e fibras em cada porção. Veja os benefícios, diferença do feijão carioca e como sempre ter na despensa.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/feijao-preto-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Feijão preto seco em close-up — grãos escuros e brilhantes sobre superfície rústica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feijão preto: benefícios, nutrição e como usar toda semana',
    description: 'Feijão preto é fonte de proteína vegetal, ferro e fibras em cada porção. Veja os benefícios, diferença do feijão carioca e como sempre ter na despensa.',
    images: ['https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Feijão preto engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Feijão preto tem cerca de 130 calorias por 100g cozido. Não é um alimento de baixa caloria, mas as fibras aumentam a saciedade e reduzem o total calórico da refeição. Consumo regular de leguminosas está associado a menor índice de massa corporal em estudos populacionais — o oposto de engordar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre feijão preto e feijão carioca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Feijão preto tem mais antioxidantes — flavonoides e polifenóis concentrados na casca escura. O perfil de proteína e fibras é similar entre os dois. O feijão preto tem sabor mais terroso; o carioca é mais neutro. Nutricionalmente, o preto leva vantagem nos antioxidantes. No sabor, depende da preferência e da receita.',
      },
    },
    {
      '@type': 'Question',
      name: 'Feijão preto pode ser comido todo dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Não há restrição conhecida para consumo diário em quantidade razoável — uma xícara de feijão cozido por refeição. Quem tem sensibilidade intestinal pode começar com porções menores e aumentar gradualmente. Deixar de molho por 8 a 12 horas antes de cozinhar reduz os compostos que causam gases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como reduzir o gás do feijão preto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deixar de molho por 8 a 12 horas e descartar a água antes de cozinhar. Isso reduz os oligossacarídeos responsáveis pela fermentação intestinal. Cozinhar bem também ajuda — feijão mal cozido fermenta mais. Quem não tem o hábito de comer feijão regularmente pode introduzir gradualmente: o organismo se adapta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Feijão preto tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Feijão preto in natura não tem glúten. Quem tem doença celíaca ou sensibilidade deve verificar o rótulo de marcas industrializadas — pode haver contaminação cruzada no processamento dependendo da fábrica. Feijão enlatado temperado também pode conter aditivos — verifique sempre os ingredientes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar feijão preto em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seco: em pote fechado fora da geladeira, dura meses — respeite a validade da embalagem. Cozido: na geladeira por até 4 dias, em recipiente tampado. No freezer, em porções separadas, por até 3 meses. Congela bem e descongela rápido em banho-maria ou no fogão direto.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Feijão preto: benefícios, nutrição e como usar toda semana',
  description: 'Feijão preto é fonte de proteína vegetal, ferro e fibras em cada porção. Veja os benefícios, diferença do feijão carioca e como sempre ter na despensa.',
  image: 'https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-22',
  dateModified: '2026-06-22',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/feijao-preto-beneficios',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Feijão preto: benefícios', item: 'https://www.miseemcasa.com.br/pt/blog/feijao-preto-beneficios' },
  ],
}

export default function FeijaoPreto({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Feijão preto: benefícios</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-22">22 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Feijão preto: o que tem dentro e por que faz diferença na semana
          </h1>
          <p className="blog-desc">
            Um grão barato, fácil de guardar e com mais nutrição do que a maioria das pessoas repara. Proteína vegetal, ferro, fibras e antioxidantes — tudo junto no mesmo grão que já devia estar na sua despensa toda semana.
          </p>

          <div className="answer-box">
            <p>
              <strong>Feijão preto</strong> concentra proteína vegetal, ferro e fibras num grão só.
              Por 100g cozido: cerca de 8g de proteína, 8g de fibras e 2mg de ferro.
              É o feijão com maior concentração de antioxidantes entre os tipos mais comuns no Brasil — a casca escura é o indicativo.
              Custa entre R$ 7 e R$ 9 o quilo, congela sem perder qualidade e combina com praticamente qualquer tempero.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Feijão preto seco em close-up — grãos escuros e brilhantes sobre superfície rústica"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#nutrientes">O que tem no feijão preto</a></li>
              <li><a href="#beneficios">Benefícios para a saúde</a></li>
              <li><a href="#feijao-carioca">Feijão preto ou feijão carioca</a></li>
              <li><a href="#como-preparar">Como preparar em casa</a></li>
              <li><a href="#frequencia">Quanto e com que frequência</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE TEM NO FEIJÃO PRETO */}
          <h2 id="nutrientes">O que tem no feijão preto</h2>

          <p>
            O feijão preto tem um perfil nutricional melhor do que a maioria das pessoas imagina.
            Não é um alimento especial ou difícil de encontrar — é o grão de R$ 8 o quilo que já estava na sua dispensa.
          </p>
          <p>
            Por 100g de feijão preto cozido, segundo a{' '}
            <a href="https://tbca.net.br" target="_blank" rel="noopener">Tabela Brasileira de Composição de Alimentos</a>:
          </p>

          <ul className="item-list">
            <li>~8g de proteína vegetal</li>
            <li>~8g de fibras (incluindo amido resistente)</li>
            <li>~2mg de ferro</li>
            <li>~60mg de magnésio</li>
            <li>~130 kcal</li>
          </ul>

          <p>
            A proteína é vegetal — incompleta sozinha. Mas combinada com arroz, os dois grãos se complementam.
            Os aminoácidos que faltam no feijão estão no arroz, e vice-versa.
            O prato mais clássico da culinária brasileira não é tradição por acaso.
          </p>
          <p>
            As fibras incluem amido resistente: um tipo que não é digerido no estômago.
            Chega intacto ao intestino grosso e vira alimento pra bactérias benéficas.
            Resultado: melhor absorção de nutrientes e menos inflamação ao longo do tempo.
          </p>
          <p>
            O ferro do feijão é não-heme — mais difícil de absorver do que o ferro de carnes.
            O truque: comer com vitamina C na mesma refeição.
            Uma laranja de sobremesa ou pimentão no tempero já ajudam na absorção.
          </p>
          <p>
            A casca preta tem alta concentração de flavonoides e polifenóis — antioxidantes que combatem radicais livres.
            É exatamente isso que diferencia o feijão preto dos outros tipos na nutrição.
            Quanto mais escura a casca, maior a concentração desses compostos.
          </p>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5388653/pexels-photo-5388653.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Feijão preto cozido em bowl escuro — pronto para servir"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ruslan Khmelevsky / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Benefícios do feijão preto para a saúde</h2>

          <p>
            Com esse perfil nutricional, os benefícios são diretos.
            Não precisa de promessa — os dados já estão no grão.
          </p>

          <h3>Saúde intestinal</h3>
          <p>
            As fibras regulam o trânsito intestinal e alimentam o microbioma.
            O amido resistente é especialmente importante pra diversidade bacteriana.
            Uma dieta rica em ultraprocessados destrói essa diversidade ao longo do tempo.
            O feijão vai na direção contrária.
          </p>

          <h3>Controle da glicemia</h3>
          <p>
            As fibras reduzem a velocidade de absorção dos carboidratos.
            Isso evita pico de glicose depois da refeição.
            Relevante pra quem quer manter energia estável ao longo do dia — e pra quem tem resistência à insulina.
          </p>

          <h3>Colesterol</h3>
          <p>
            As fibras solúveis se ligam ao colesterol LDL no intestino e ajudam na excreção.
            Não substitui nenhum tratamento médico, mas é um coadjuvante consistente e barato.
          </p>

          <h3>Ferro e anemia</h3>
          <p>
            O feijão preto é uma das melhores fontes de ferro vegetal disponíveis no mercado brasileiro.
            Relevante especialmente pra mulheres em idade reprodutiva, vegetarianos e veganos.
            Lembra: ferro não-heme precisa de vitamina C pra absorver melhor.
          </p>

          <h3>Proteína vegetal acessível</h3>
          <p>
            Cerca de 8g por 100g cozido. Numa porção de 200g, são 16g de proteína.
            Não é frango, mas é muito mais do que a maioria das pessoas imagina.
            Quem busca{' '}
            <a href="/blog/alimentos-ricos-em-proteinas">alimentos ricos em proteína</a>{' '}
            geralmente ignora o feijão — e paga mais caro por opções piores.
          </p>

          <h3>Antioxidantes</h3>
          <p>
            Os polifenóis da casca preta têm ação antioxidante documentada.
            A concentração é maior no feijão preto do que no carioca ou no branco.
            Não é milagre — é um efeito cumulativo de consumo regular ao longo de anos.
          </p>

          <p>
            Uma porção toda semana não transforma nada. Todo dia, ao longo de anos — os exames de dois em dois anos vão notar.
          </p>

          {/* FEIJÃO PRETO OU CARIOCA */}
          <h2 id="feijao-carioca">Feijão preto ou feijão carioca: qual escolher?</h2>

          <p>
            A pergunta aparece bastante. A resposta curta: os dois são bons.
            Mas têm diferenças reais que valem saber.
          </p>
          <p>
            O feijão preto tem mais antioxidantes.
            A casca escura indica maior concentração de flavonoides e polifenóis — compostos que o carioca, de casca mais clara, tem em menor quantidade.
            Essa diferença é real e documentada em análises comparativas,{' '}
            <a href="https://www.embrapa.br/arroz-e-feijao" target="_blank" rel="noopener">incluindo dados da Embrapa</a>.
          </p>
          <p>
            O perfil de proteína e fibras é similar entre os dois.
            A diferença fica nos micronutrientes e antioxidantes — onde o preto tem vantagem.
          </p>
          <p>
            O feijão carioca tem sabor mais neutro.
            O feijão preto tem sabor mais terroso e marcado — funciona bem com louro, alho e cominho.
            Feijoada é feijão preto. Arroz com feijão do dia a dia em boa parte do Brasil é carioca.
            No Sul, o preto é o padrão.
          </p>
          <p>
            Qual usar? Depende do que você vai cozinhar.
            Se a escolha for só nutricional: feijão preto tem vantagem nos antioxidantes.
            Mas a diferença não justifica trocar de hábito se você já come carioca toda semana.
            Comer o feijão que você gosta mais é melhor do que comer o "mais saudável" com menos frequência.
          </p>

          <div className="blog-inline-cta">
            <p>Feijão preto sempre na despensa. <em>O Mise avisa quando tá acabando.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO PREPARAR */}
          <h2 id="como-preparar">Como preparar feijão preto em casa</h2>

          <p>
            Não tem segredo. Tem jeito de ficar melhor — e jeito de estragar.
          </p>

          <h3>De molho (não pule essa etapa)</h3>
          <p>
            Deixe o feijão preto de molho por 8 a 12 horas antes de cozinhar.
            Descarte a água do molho.
            Isso reduz os oligossacarídeos — os açúcares responsáveis pela produção de gás.
            Não elimina completamente, mas faz diferença suficiente pra valer o trabalho.
          </p>

          <h3>Na panela de pressão</h3>
          <p>
            20 a 25 minutos depois que a panela entrar em pressão.
            Feijão já de molho, água suficiente pra cobrir bem.
            Não precisa medir com precisão — feijão absorve e incha.
            Resultado: grãos macios, caldo encorpado.
          </p>

          <h3>Na panela normal</h3>
          <p>
            1h30 a 2h em fogo médio com tampa.
            Mesma regra do molho.
            Mais tempo, mais controle — você vê a textura enquanto cozinha e decide a hora de parar.
          </p>

          <h3>O sal vai no final</h3>
          <p>
            Sal no começo endurece a casca.
            Coloque só depois que o feijão estiver macio — nos últimos 5 minutos.
            A textura fica consistente e o caldo absorve o tempero melhor.
          </p>

          <h3>O tempero base</h3>
          <p>
            Alho, folha de louro e cebola: o mínimo que transforma feijão simples em feijão de verdade.
            Cominho e pimenta-do-reino são opcionais que melhoram.
            Tomate depois de cozido, se quiser algo mais encorpado.
          </p>

          <h3>Cozinhe em quantidade e congele</h3>
          <p>
            Feijão cozido congela bem.
            Separe em porções de uma ou duas xícaras, coloque em potes, leve ao freezer.
            Dura até 3 meses sem perder qualidade.
            Você vai agradecer na quarta-feira quando não tiver tempo pra cozinhar nada.
          </p>

          <p>
            O momento em que você decide cozinhar feijão é o mesmo momento em que percebe que acabou.
            A{' '}
            <a href="/funcionalidades/despensa">despensa do Mise</a>{' '}
            mostra o que tem antes de você precisar — sem precisar abrir o armário pra descobrir.
          </p>

          {/* FREQUÊNCIA */}
          <h2 id="frequencia">Quanto feijão preto comer e com que frequência</h2>

          <p>
            Não há restrição conhecida pra comer feijão preto todo dia.
            Em quantidade razoável — uma xícara de feijão cozido (cerca de 200g) por refeição — é um dos melhores hábitos alimentares pra quem cozinha em casa.
          </p>
          <p>
            O padrão de arroz com feijão que a culinária brasileira construiu não é bobagem.
            É eficiente: custo baixo, proteína complementar, fibras, minerais, antioxidantes.
            A combinação que pesquisadores de nutrição levaram décadas pra "descobrir" como ideal já estava no prato da maioria das famílias brasileiras há gerações.
          </p>
          <p>
            Quem tem gases com frequência pode tentar reduzir a quantidade inicial e aumentar gradualmente.
            O organismo se adapta — e o molho prévio ajuda.
          </p>
          <p>
            A quantidade razoável é 150 a 200g de feijão cozido por refeição.
            Mais do que isso é muito de uma vez.
            Menos, tudo bem — mas se for a única fonte de proteína vegetal do dia, vale revisar o cardápio geral.
          </p>
          <p>
            Proteína de grife em pó custando 200 reais o quilo não tem muito a acrescentar frente a 8g de proteína por 100g de feijão a R$ 8 o quilo.
            A conta é simples.
          </p>
          <p>
            Feijão preto na{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            toda semana. Ao lado do arroz, onde sempre deveria estar.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre feijão preto</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Feijão preto engorda?</p>
              <p className="faq-a">
                Tem cerca de 130 calorias por 100g cozido — não é um alimento de baixa caloria.
                Mas as fibras aumentam a saciedade e reduzem o total calórico da refeição.
                Consumo regular de leguminosas está associado a menor índice de massa corporal em estudos populacionais.
                O problema nunca é o feijão: é o que vem junto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre feijão preto e feijão carioca?</p>
              <p className="faq-a">
                Feijão preto tem mais antioxidantes — flavonoides e polifenóis concentrados na casca escura.
                O perfil de proteína e fibras é similar entre os dois.
                O feijão preto tem sabor mais terroso; o carioca é mais neutro.
                No uso: feijoada é feijão preto, arroz com feijão do dia a dia varia por região.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Feijão preto pode ser comido todo dia?</p>
              <p className="faq-a">
                Sim. Não há restrição conhecida pra consumo diário em quantidade razoável.
                Quem tem sensibilidade intestinal pode começar com porções menores e aumentar gradualmente.
                Deixar de molho antes de cozinhar e descartar a água reduz os compostos que causam gases.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como reduzir o gás do feijão preto?</p>
              <p className="faq-a">
                Deixar de molho por 8 a 12 horas e descartar a água do molho.
                Isso reduz os oligossacarídeos responsáveis pela fermentação intestinal.
                Cozinhar bem também ajuda — feijão mal cozido fermenta mais.
                O organismo se adapta com o consumo regular: quem come toda semana tem menos gases do que quem come uma vez por mês.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Feijão preto tem glúten?</p>
              <p className="faq-a">
                Feijão preto in natura não tem glúten.
                Quem tem doença celíaca deve verificar o rótulo de marcas industrializadas — pode haver contaminação cruzada no processamento dependendo da fábrica.
                Feijão enlatado temperado pode conter aditivos com glúten. Verifique os ingredientes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar feijão preto em casa?</p>
              <p className="faq-a">
                Seco: em pote fechado fora da geladeira, dura meses — respeite a validade da embalagem.
                Cozido: na geladeira por até 4 dias, em recipiente tampado.
                No freezer, em porções separadas, por até 3 meses.
                Congela bem e descongela rápido em banho-maria ou no fogão direto.
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
                Criador do Mise. Sempre teve feijão preto na despensa. Já saiu pra comprar achando que tinha acabado — tinha, estava atrás do arroz.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Feijão preto na despensa.<br />
              <em>Bora saber o que mais tem.</em>
            </h2>
            <p>
              O Mise conecta despensa, receitas e{' '}
              <a href="/blog/lista-basica-de-compras" className="cta-link">lista de compras</a>{' '}
              num só lugar. Você compra o que vai usar — e nunca descobre que acabou no meio da semana.
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
