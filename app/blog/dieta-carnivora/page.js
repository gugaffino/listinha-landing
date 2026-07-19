import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Dieta carnívora: o que é, alimentos e como começar',
  description: 'A dieta carnívora elimina plantas e mantém só alimentos de origem animal. Veja o que comer, o que cortar, cardápio de 7 dias e os riscos que precisa conhecer.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/dieta-carnivora',
  },
  openGraph: {
    title: 'Dieta carnívora: o que é, alimentos e como começar',
    description: 'A dieta carnívora elimina plantas e mantém só alimentos de origem animal. Veja o que comer, o que cortar, cardápio de 7 dias e os riscos que precisa conhecer.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/dieta-carnivora',
    images: [
      {
        url: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Bife suculento grelhado com molho em prato escuro — dieta carnívora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dieta carnívora: o que é, alimentos e como começar',
    description: 'A dieta carnívora elimina plantas e mantém só alimentos de origem animal. Veja o que comer, o que cortar, cardápio de 7 dias e os riscos que precisa conhecer.',
    images: ['https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A dieta carnívora é segura a longo prazo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não há estudos de longo prazo suficientes para responder isso com certeza. A dieta elimina fibras e vários micronutrientes presentes em vegetais — como vitamina C e magnésio — o que gera preocupações reais entre nutricionistas. Quem decide seguir a dieta carnívora por tempo prolongado precisa de acompanhamento médico e exames regulares para monitorar marcadores de saúde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para ver resultados na dieta carnívora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A maioria das pessoas que relata perda de peso na dieta carnívora começa a notar mudanças nas primeiras 2 a 4 semanas, principalmente por redução de retenção de líquidos e queda no apetite. Resultados mais consistentes no peso e na composição corporal costumam aparecer após 4 a 8 semanas de adesão rigorosa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso comer frango e peixe na dieta carnívora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A dieta carnívora inclui todos os animais — boi, frango, porco, peixe e frutos do mar são todos permitidos. A maioria dos praticantes prioriza cortes gordurosos de carne bovina porque o perfil de nutrientes é mais completo, mas frango e peixe fazem parte da dieta sem restrição.',
      },
    },
    {
      '@type': 'Question',
      name: 'A dieta carnívora pode causar colesterol alto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O alto consumo de gordura saturada pode elevar o LDL em algumas pessoas. Os efeitos variam individualmente — parte dos praticantes relata melhora nos marcadores lipídicos, outros relatam piora. Exames periódicos são indispensáveis. Quem já tem histórico de colesterol elevado deve consultar um médico antes de começar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso comer carne crua na dieta carnívora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A dieta carnívora não exige alimentos crus. Você pode grelhar, assar, cozinhar, refogar — qualquer método de preparo com calor. Algumas pessoas preferem carnes mal passadas, mas isso é preferência pessoal, não regra. Comer carne crua sem controle de qualidade e origem traz riscos de contaminação que não fazem sentido assumir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso tomar café na dieta carnívora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Café é de origem vegetal e tecnicamente fora dos limites estritos da dieta carnívora. Na prática, muitos praticantes mantêm o café, especialmente no início da adaptação. Depende do nível de restrição que você decide seguir. Chá também entra nessa zona cinzenta.',
      },
    },
    {
      '@type': 'Question',
      name: 'A dieta carnívora emagrece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em muitos casos sim, principalmente porque a proteína e a gordura animal aumentam a saciedade e reduzem o apetite — o que leva a comer menos calorias no total, mesmo sem contar. A restrição de carboidratos também reduz a retenção de líquidos, o que aparece rápido na balança. Mas o emagrecimento depende do equilíbrio calórico total, não da exclusão de plantas por si só.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dieta carnívora: o que é, alimentos e como começar',
  description: 'A dieta carnívora elimina plantas e mantém só alimentos de origem animal. Veja o que comer, o que cortar, cardápio de 7 dias e os riscos que precisa conhecer.',
  image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/blog/dieta-carnivora',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Dieta carnívora', item: 'https://www.miseemcasa.com.br/blog/dieta-carnivora' },
  ],
}

export default function DietaCarnivora() {
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
            <li className="breadcrumb-current" aria-current="page">Dieta carnívora</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-05">5 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Dieta carnívora: o guia prático de alimentos, cardápio e riscos
          </h1>
          <p className="blog-desc">
            Uma dieta que elimina tudo que não é de origem animal. Sem frutas, sem vegetais, sem grãos. Apenas carne, ovos e derivados. Entenda como funciona, o que pode comer, o que fica de fora e o que a ciência diz sobre os riscos.
          </p>

          <div className="answer-box">
            <p>
              <strong>Dieta carnívora</strong> é um padrão alimentar baseado exclusivamente em alimentos de origem animal — carnes, peixes, ovos e laticínios com baixo teor de lactose.
              Todo alimento vegetal é eliminado: frutas, vegetais, grãos, leguminosas, açúcar e óleos vegetais ficam fora.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Bife suculento grelhado com molho escuro em prato — dieta carnívora"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Snapwire / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é a dieta carnívora</a></li>
              <li><a href="#como-funciona">Como funciona na prática</a></li>
              <li><a href="#o-que-comer">O que pode comer</a></li>
              <li><a href="#o-que-cortar">O que fica de fora</a></li>
              <li><a href="#cardapio">Cardápio de 7 dias</a></li>
              <li><a href="#beneficios">Benefícios relatados</a></li>
              <li><a href="#riscos">Riscos que você precisa conhecer</a></li>
              <li><a href="#vale-a-pena">Vale a pena?</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bife com osso grelhado acompanhado de vegetais e molho em prato rústico"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Malidate Van / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é a dieta carnívora</h2>

          <p>
            A <strong>dieta carnívora</strong> é um padrão alimentar que elimina todo alimento de origem vegetal. Quem segue come exclusivamente produtos animais: carne bovina, frango, porco, peixe, frutos do mar, ovos e alguns laticínios. Nada de frutas, nada de vegetais, nada de grãos ou leguminosas.
          </p>
          <p>
            É uma versão radical da dieta sem carboidratos. Enquanto o <a href="/blog/dieta-low-carb-cardapio">low carb</a> reduz carboidratos mas mantém vegetais, a dieta carnívora elimina a categoria inteira. A premissa é que o corpo humano pode funcionar usando apenas proteína e gordura como combustível — e que muitos problemas de saúde modernos vêm de compostos presentes em plantas.
          </p>
          <p>
            A popularização da dieta é recente — ganhou força nos últimos anos principalmente em comunidades de fitness e emagrecimento nos Estados Unidos e chegou ao Brasil principalmente pelo YouTube e redes sociais. Não tem respaldo na maioria das diretrizes nutricionais oficiais, mas tem uma base significativa de praticantes que relatam resultados.
          </p>

          {/* COMO FUNCIONA */}
          <h2 id="como-funciona">Como funciona na prática</h2>

          <p>
            A mecânica é simples. Você come quando tem fome, até saciar, e só consome alimentos de origem animal. Sem contar calorias, sem controlar porções, sem janelas de alimentação obrigatórias. A ideia é que a proteína e a gordura animal regulam o apetite de forma natural, o que leva a comer menos sem esforço consciente.
          </p>
          <p>
            Na fase de adaptação — geralmente as primeiras 2 a 4 semanas — é comum sentir fadiga, dor de cabeça e alterações no trânsito intestinal. Isso acontece porque o corpo está mudando de carboidratos para gordura como principal fonte de energia, o mesmo processo da dieta cetogênica. Muitos praticantes chamam esse período de "adaptação carnívora".
          </p>
          <p>
            Quanto à água: beba a quantidade que quiser. Bebidas sem açúcar como água com gás são aceitas por muitos praticantes. Café e chá são tecnicamente de origem vegetal — a maioria flexibiliza no início, outros evitam completamente.
          </p>

          {/* O QUE PODE COMER */}
          <h2 id="o-que-comer">O que pode comer na dieta carnívora</h2>

          <p>
            A lista de alimentos permitidos é intencionalmente curta. Isso é parte do apelo: você não precisa memorizar listas de exceções, checar rótulos ou calcular índice glicêmico. A pergunta "isso tem origem animal?" resolve tudo.
          </p>

          <h3>Carnes e aves</h3>
          <ul className="item-list">
            <li><strong>Carne bovina:</strong> picanha, costela, alcatra, filé, contrafilé, acém, fraldinha, cupim, patinho</li>
            <li><strong>Porco:</strong> pernil, lombo, costelinha, bacon (sem aditivos de açúcar)</li>
            <li><strong>Aves:</strong> frango, peru, pato — inteiros ou por partes</li>
            <li><strong>Cordeiro e cabrito:</strong> cortes gordurosos são preferidos</li>
          </ul>

          <h3>Peixes e frutos do mar</h3>
          <ul className="item-list">
            <li>Salmão, sardinha, cavala, arenque — peixes gordurosos têm perfil nutricional mais rico</li>
            <li>Atum, tilápia, bacalhau, peixe-espada</li>
            <li>Camarão, lula, polvo, mexilhão, ostra</li>
          </ul>

          <h3>Miúdos e vísceras</h3>
          <p>
            Fígado, coração, rim, língua, tutano. Muitos praticantes incluem miúdos regularmente porque têm alta densidade nutricional — o fígado bovino, em particular, tem vitamina B12, ferro, cobre e vitamina A em quantidades significativas.
          </p>

          <h3>Ovos e laticínios</h3>
          <ul className="item-list">
            <li>Ovos: sem restrição de quantidade — são um dos alimentos mais completos da dieta</li>
            <li>Queijo curado e manteiga: aceitos pela maioria (baixo teor de lactose)</li>
            <li>Creme de leite e leite integral: aceitos por alguns, excluídos por outros</li>
            <li>Iogurte e leite: geralmente evitados pela lactose</li>
          </ul>

          <h3>Gorduras animais</h3>
          <p>
            Banha de porco, sebo bovino e manteiga são usados pra cozinhar. Óleos vegetais — canola, girassol, milho — ficam completamente fora.
          </p>

          {/* O QUE CORTAR */}
          <h2 id="o-que-cortar">O que fica de fora</h2>

          <p>
            A lista do que cortar é mais longa do que parece à primeira vista. Inclui alimentos que a maioria das dietas considera saudáveis.
          </p>
          <ul className="item-list">
            <li>Frutas — todas, sem exceção, incluindo frutas com "baixo açúcar" como limão</li>
            <li>Vegetais — folhas, raízes, tubérculos, tomate, cebola, alho</li>
            <li>Grãos — arroz, aveia, trigo, milho, cevada</li>
            <li>Leguminosas — feijão, lentilha, grão-de-bico, soja</li>
            <li>Oleaginosas — amêndoa, castanha, nozes, amendoim</li>
            <li>Óleos vegetais — azeite, canola, girassol, coco</li>
            <li>Açúcar e adoçantes — mel, xarope, adoçantes artificiais</li>
            <li>Bebidas — sucos, refrigerantes, bebidas vegetais</li>
            <li>Condimentos com ingredientes vegetais — ketchup, mostarda, molhos industrializados</li>
          </ul>
          <p>
            A lista de compras fica muito mais curta. Carne, ovos, manteiga, alguns queijos. Fácil de memorizar — difícil de explicar pro restante da família.
          </p>

          {/* CARDÁPIO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Filé de carne fatiado sobre tábua de madeira — cardápio da dieta carnívora"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Terje Sollie / Pexels</p>
          </div>

          <h2 id="cardapio" className="img-above">Cardápio de 7 dias</h2>

          <p>
            Um exemplo de cardápio semanal pra quem está começando. Foque em cortes gordurosos, que saciam mais e fornecem mais energia do que cortes magros. O ideal é montar o seu <a href="/funcionalidades/cardapio-semanal">cardápio semanal</a> com antecedência pra simplificar as compras.
          </p>

          <ul className="item-list">
            <li><strong>Segunda:</strong> Ovos mexidos com bacon (manhã) · Picanha grelhada (almoço) · Salmão assado (jantar)</li>
            <li><strong>Terça:</strong> Omelete de queijo (manhã) · Costela bovina (almoço) · Coxas de frango assadas (jantar)</li>
            <li><strong>Quarta:</strong> Ovos cozidos (manhã) · Contrafilé na manteiga (almoço) · Sardinha com ovos (jantar)</li>
            <li><strong>Quinta:</strong> Ovos pochê com bacon (manhã) · Fígado bovino grelhado (almoço) · Alcatra grelhada (jantar)</li>
            <li><strong>Sexta:</strong> Omelete (manhã) · Frango assado inteiro (almoço) · Carne moída com queijo (jantar)</li>
            <li><strong>Sábado:</strong> Ovos com bacon (manhã) · Pernil de porco (almoço) · Picanha ou costela (jantar)</li>
            <li><strong>Domingo:</strong> Omelete de queijo e presunto (manhã) · Peixe assado (almoço) · Contrafilé com manteiga (jantar)</li>
          </ul>

          <p>
            Não tem lanche obrigatório. Se sentir fome entre refeições, ovos cozidos, fatias de queijo curado ou carne fria resolvem. A maioria das pessoas relata que a necessidade de beliscar diminui nas primeiras semanas.
          </p>

          <div className="blog-inline-cta">
            <p>Monta o cardápio antes de ir ao mercado. <em>O Mise organiza tudo.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios relatados</h2>

          <p>
            Os benefícios abaixo vêm majoritariamente de relatos de praticantes e de estudos pequenos — a dieta carnívora tem poucos ensaios clínicos de longo prazo. Trate como evidência preliminar, não como conclusão definitiva.
          </p>

          <h3>Controle do apetite e perda de peso</h3>
          <p>
            Proteína é o macronutriente mais saciante. Gordura também tem alta saciedade. A combinação faz com que muitas pessoas comam menos calorias no total sem controlar porções — o apetite simplesmente cai. Perda de peso acontece como consequência, não como meta direta.
          </p>

          <h3>Estabilidade glicêmica</h3>
          <p>
            Sem carboidratos, não há picos de glicose. Pessoas com resistência à insulina ou diabetes tipo 2 relatam melhora nos níveis de açúcar no sangue. Isso não substitui acompanhamento médico e ajuste de medicação — mas o mecanismo faz sentido fisiologicamente.
          </p>

          <h3>Simplicidade de decisões</h3>
          <p>
            Decide o que jantar esta noite? Carne. Qual? Qualquer uma. Essa redução de decisões sobre alimentação é um dos aspectos que mais aparece nos relatos de praticantes. Não é um benefício clínico, mas é real pra quem sente fadiga de escolhas alimentares toda semana. A <a href="/funcionalidades/lista-de-compras">lista de compras</a> fica com menos de 10 itens fixos.
          </p>

          {/* RISCOS */}
          <h2 id="riscos">Riscos que você precisa conhecer</h2>

          <p>
            Aqui a conversa fica mais séria. A dieta carnívora elimina grupos alimentares inteiros com benefícios bem documentados para a saúde — e isso tem consequências.
          </p>

          <h3>Fibras e saúde intestinal</h3>
          <p>
            A dieta não tem fibra alimentar. Fibra alimenta as bactérias benéficas do intestino e regula o trânsito. Sem ela, constipação é comum nas primeiras semanas, e os efeitos de longo prazo na microbiota intestinal ainda não são conhecidos. Muitos praticantes relatam normalização depois de um tempo, mas a evidência científica sobre o impacto no microbioma é preocupante.
          </p>

          <h3>Vitamina C e micronutrientes</h3>
          <p>
            Vitamina C está presente principalmente em frutas e vegetais. Carne crua tem pequenas quantidades, mas carne cozida perde boa parte. Deficiência grave de vitamina C leva ao escorbuto — uma doença que parece medieval mas existe. Praticantes que cozinham bem a carne e evitam miúdos correm mais risco. Exames periódicos são indispensáveis.
          </p>

          <h3>Gordura saturada e colesterol</h3>
          <p>
            Alto consumo de gordura saturada pode elevar o LDL em algumas pessoas. Os efeitos variam — parte dos praticantes melhora os marcadores lipídicos, outros pioram. A relação entre gordura saturada e doenças cardiovasculares é um debate ativo na ciência nutricional, sem consenso definitivo, mas o risco individual não pode ser ignorado sem exames.
          </p>

          <h3>Sustentabilidade a longo prazo</h3>
          <p>
            Comer fora fica difícil. Eventos sociais ficam complicados. A dieta exige comprometimento constante e pode gerar isolamento alimentar. Além disso, uma <a href="/funcionalidades/despensa">despensa</a> exclusivamente carnívora é mais cara do que a média — cortes de boa qualidade têm custo elevado no Brasil. A compra mensal de uma família de dois adultos nessa dieta pode facilmente superar R$ 2.000 só em proteína animal.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena?</h2>

          <p>Depende do que você está tentando resolver.</p>
          <p>
            Se você tem uma condição específica — resistência à insulina, doença inflamatória intestinal, sensibilidade a alimentos vegetais — e está considerando a dieta com acompanhamento médico, faz sentido explorar. Há relatos consistentes de melhora em condições autoimunes e inflamatórias, embora a evidência seja preliminar.
          </p>
          <p>
            Se o objetivo é perder peso sem contar calorias, existem formas menos restritivas de chegar lá — como o low carb ou uma <a href="/blog/lista-de-compras-saudavel">lista de compras saudável</a> bem estruturada — com menos riscos e mais sustentabilidade no dia a dia. A dieta carnívora funciona para algumas pessoas porque elimina decisões e reduz o apetite. Mas o mesmo efeito pode ser conseguido com uma dieta menos extrema.
          </p>
          <p>
            O que a dieta carnívora ensina de válido: proteína saciante, menos ultraprocessados, menos açúcar, cortes integrais em vez de produtos processados. Esses princípios funcionam dentro de qualquer padrão alimentar, sem precisar cortar tudo que cresce na terra.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre a dieta carnívora</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">A dieta carnívora é segura a longo prazo?</p>
              <p className="faq-a">
                Não há estudos de longo prazo suficientes para responder com certeza. A dieta elimina fibras e micronutrientes importantes de vegetais — como vitamina C e magnésio. Quem decide seguir por tempo prolongado precisa de acompanhamento médico e exames regulares.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto tempo leva para ver resultados na dieta carnívora?</p>
              <p className="faq-a">
                Mudanças iniciais aparecem nas primeiras 2 a 4 semanas — principalmente redução de retenção de líquidos e queda no apetite. Resultados mais consistentes surgem após 4 a 8 semanas de adesão rigorosa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso comer frango e peixe na dieta carnívora?</p>
              <p className="faq-a">
                Sim. A dieta inclui todos os animais — boi, frango, porco, peixe e frutos do mar são permitidos sem restrição. A maioria dos praticantes prioriza cortes gordurosos de carne bovina pelo perfil nutricional mais completo, mas frango e peixe fazem parte.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">A dieta carnívora pode causar colesterol alto?</p>
              <p className="faq-a">
                O alto consumo de gordura saturada pode elevar o LDL em algumas pessoas. Os efeitos variam individualmente. Exames periódicos são indispensáveis — quem tem histórico de colesterol elevado deve consultar um médico antes de começar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Preciso comer carne crua na dieta carnívora?</p>
              <p className="faq-a">
                Não. Você pode grelhar, assar, cozinhar — qualquer método de preparo. Comer carne crua sem controle de qualidade traz riscos de contaminação que não fazem sentido assumir.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso tomar café na dieta carnívora?</p>
              <p className="faq-a">
                Café é de origem vegetal e tecnicamente fora dos limites estritos. Muitos praticantes mantêm o café, especialmente no início. Depende do nível de restrição que você decide seguir — a maioria não corta o café e pronto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">A dieta carnívora emagrece?</p>
              <p className="faq-a">
                Em muitos casos sim — a proteína e a gordura aumentam a saciedade, o que leva a comer menos calorias no total sem contar. Mas o emagrecimento depende do equilíbrio calórico total, não da exclusão de plantas por si só.
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
                Criador do Mise. Testou a dieta carnívora por três dias, no quarto sentiu saudade de brócolis. Não recomenda fazer isso numa semana de reunião importante.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Decide o que comprar.<br />
              <em>O Mise lembra por você.</em>
            </h2>
            <p>
              Conecta cardápio, despensa e lista de compras num só lugar.
              Dieta carnívora, low carb ou feijão com arroz — o que você comer, a lista já tá pronta.
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
