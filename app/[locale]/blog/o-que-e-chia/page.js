import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Chia tem proteína? O que é, para que serve e como usar',
  description: 'Chia é uma semente pequena com muito ômega-3, fibras e proteína. Entenda o que é, para que serve, como fazer o gel, e quando vale mais que a linhaça.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chia',
  },
  openGraph: {
    title: 'Chia tem proteína? O que é, para que serve e como usar',
    description: 'Chia é uma semente pequena com muito ômega-3, fibras e proteína. Entenda o que é, para que serve, como fazer o gel, e quando vale mais que a linhaça.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chia',
    images: [
      {
        url: 'https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sementes de chia pretas em close-up sobre superfície branca — textura detalhada da semente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chia tem proteína? O que é, para que serve e como usar',
    description: 'Chia é uma semente pequena com muito ômega-3, fibras e proteína. Entenda o que é, para que serve, como fazer o gel, e quando vale mais que a linhaça.',
    images: ['https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Chia engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chia é calórica — 100g tem cerca de 486 kcal, a maioria vinda de gordura. Mas uma porção típica é 1-2 colheres de sopa (15-30g), o que entrega cerca de 73-146 kcal. O que ajuda no controle de peso é a fibra: o gel que a chia forma no estômago aumenta a saciedade e retarda a digestão. Em quantidade razoável dentro de uma dieta equilibrada, chia não engorda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto de chia posso comer por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dose mais estudada é de 15-30g por dia — equivalente a 1-2 colheres de sopa. Acima disso, o excesso de fibra pode causar desconforto digestivo, especialmente se você não beber água suficiente. Comece com 1 colher de sopa e veja como seu corpo reage antes de aumentar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso comer chia seca ou precisa hidratar primeiro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode comer seca, mas hidratada é melhor. A chia seca absorve líquido no estômago — se você não beber água suficiente junto, pode causar desconforto intestinal. Hidratada, a fibra já está ativada e a absorção dos nutrientes é mais eficiente. Para polvilhar no iogurte ou vitamina, a quantidade pequena (1 colher) funciona sem problema. Para doses maiores, prefira hidratar antes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chia tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chia pura não tem glúten. Mas pode haver contaminação cruzada na linha de produção se processada no mesmo equipamento que trigo ou outros cereais. Se você tem doença celíaca ou sensibilidade severa ao glúten, verifique se o rótulo traz o selo "sem glúten" ou "certificado gluten free". Para a maioria das pessoas, não há preocupação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chia e linhaça são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. São sementes diferentes com perfis nutricionais parecidos, mas usos distintos. Chia: não precisa moer, forma gel com líquido, sabor neutro. Linhaça: precisa ser moída para absorver os nutrientes (inteira, passa sem ser digerida), tem sabor mais amendoado. Para smoothies e pudins, chia é mais prática. Para pão e bolos, linhaça moída tem mais personalidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chia perde nutrientes quando aquecida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parte dos nutrientes sensíveis ao calor, como alguns antioxidantes, pode diminuir com o cozimento. O ômega-3 (ALA) também é mais estável em preparos frios. Para aproveitar melhor, a chia funciona bem sem calor: em pudim, iogurte, vitamina e salada. Mas usada em bolos e panquecas, ainda entrega fibra e minerais — não é uma perda total.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Chia tem proteína? O que é, para que serve e como usar',
  description: 'Chia é uma semente pequena com muito ômega-3, fibras e proteína. Entenda o que é, para que serve, como fazer o gel, e quando vale mais que a linhaça.',
  image: 'https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chia',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é chia', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chia' },
  ],
}

export default function OQueEChia({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é chia</li>
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
            Chia: o que é, se tem proteína e como usar no dia a dia
          </h1>
          <p className="blog-desc">
            Pequena, sem sabor e com um truque de hidratação que ninguém esperava. Chia virou presença fixa em iogurtes e smoothies no Brasil — mas muita gente ainda não sabe direito o que é, se tem proteína de verdade e qual a diferença pra linhaça. Esse post responde isso tudo.
          </p>

          <div className="answer-box">
            <p>
              <strong>Chia</strong> (<em>Salvia hispanica</em>) é uma semente originária do México e da Guatemala, pequena e oval, com sabor praticamente neutro.
              Em 100g, tem cerca de 17g de proteína, 34g de fibra e 17g de ômega-3 vegetal.
              A característica mais marcante: quando colocada em líquido, absorve até 12 vezes o próprio peso e forma um gel de fibra solúvel — responsável pela saciedade que o pessoal associa a ela.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Sementes de chia pretas em close-up sobre superfície branca — textura detalhada da semente"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Jubair Bin Iqbal / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é chia</a></li>
              <li><a href="#nutrientes">Chia tem proteína</a></li>
              <li><a href="#para-que-serve">Para que serve</a></li>
              <li><a href="#chia-vs-linhaca">Chia vs linhaça</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#comprar-guardar">Como comprar e guardar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7771987/pexels-photo-7771987.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sementes de chia em colher de madeira sobre mesa — grãos pequenos de cor escura"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é chia</h2>

          <p>
            Chia (<em>Salvia hispanica</em>) é uma semente da família da sálvia, cultivada há milhares de anos no México e na Guatemala. Os astecas chamavam de "chia" — que significa força ou energia em maia — e usavam como combustível em marchas longas e batalhas. A planta produz pequenas sementes ovais, de cor cinza a preto ou branco, dependendo da variedade.
          </p>
          <p>
            O sabor é neutro. Quase imperceptível em qualquer preparo. Isso é vantagem e desvantagem ao mesmo tempo: entra em qualquer receita sem interferir no sabor, mas também não entrega nenhuma experiência gustativa por conta própria. Você não come chia pelo sabor.
          </p>
          <p>
            O que torna a chia singular é o comportamento com líquido. As sementes têm uma camada externa de fibra solúvel (mucilagem) que absorve água rapidamente — até 12 vezes o próprio peso. O resultado é um gel que envolve cada semente. Esse gel não é artificialidade culinária: é fibra pura, e é responsável por boa parte dos efeitos de saciedade e digestão que as pessoas relatam.
          </p>
          <p>
            Chegou às prateleiras brasileiras por volta de 2010, impulsionada pelo rótulo de "superalimento". O rótulo é exagerado — nenhum alimento resolve tudo sozinho. Mas o perfil nutricional da chia é de fato expressivo, especialmente comparado a outros grãos e sementes.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">Chia tem proteína: o que tem de nutrientes</h2>

          <p>
            Sim, chia tem proteína. Em 100g, aproximadamente 17g — mais do que muitos grãos como arroz e milho, menos do que leguminosas como feijão e lentilha.
          </p>
          <p>
            O detalhe importante: 100g de chia é muito para comer de uma vez. Uma porção típica é 1-2 colheres de sopa (15-30g), o que entrega 2,5-5g de proteína. Suficiente para contribuir com a ingestão diária, mas longe de ser a principal fonte proteica da refeição. A chia complementa — não substitui frango, ovos, feijão ou tofu.
          </p>
          <p>
            O destaque real são dois outros nutrientes. Primeiro, a fibra: 34g por 100g. Mais do que aveia (10g) e mais do que linhaça (27g). Em 2 colheres de sopa, você já pega cerca de 10g de fibra — um terço da recomendação diária para adultos. Segundo, o ômega-3: 17g por 100g, quase todo como ALA (ácido alfa-linolênico), a forma vegetal do ômega-3.
          </p>
          <p>
            Sobre o ômega-3, há um ponto a considerar. O ALA precisa ser convertido em EPA e DHA pelo corpo para ter os mesmos efeitos do ômega-3 de peixe. Essa conversão é ineficiente — estima-se que apenas 5-15% do ALA se torna EPA, e menos de 1% se torna DHA. Chia complementa uma dieta pobre em peixe, mas não substitui o ômega-3 marinho para quem precisa de doses terapêuticas.
          </p>
          <p>
            Chia também é boa fonte de cálcio (631mg por 100g — mais que o leite), magnésio, fósforo e ferro. Esses minerais têm biodisponibilidade reduzida pela presença de fitatos, mas a quantidade bruta é alta o suficiente para que parte chegue a ser absorvida.
          </p>

          {/* PARA QUE SERVE */}
          <h2 id="para-que-serve">Para que serve: os benefícios com base</h2>

          <p>
            A lista de benefícios atribuídos à chia é longa. Alguns têm evidência robusta. Outros são esperança bem embalada. Aqui ficam os que valem atenção:
          </p>
          <p>
            <strong>Saciedade.</strong> O gel que a chia forma no estômago retarda o esvaziamento gástrico. Você demora mais para sentir fome depois de comer. Estudos mostram que pessoas que incluíram chia no café da manhã relataram menos fome antes do almoço. O efeito é real, mas modesto — não é uma solução de emagrecimento, é um apoio.
          </p>
          <p>
            <strong>Digestão.</strong> A fibra solúvel da chia alimenta as bactérias do intestino grosso (efeito prebiótico) e contribui para a regularidade intestinal. Mas há uma condição: água. Sem hidratação suficiente, a chia pode ter o efeito oposto — constipação, porque absorve o líquido disponível no intestino. Regra prática: beba pelo menos um copo de água depois de comer chia seca.
          </p>
          <p>
            <strong>Glicemia.</strong> O gel retarda a absorção de carboidratos, ajudando a evitar picos de glicose pós-refeição. Útil especialmente para quem tem resistência à insulina ou diabetes tipo 2. O efeito é mais pronunciado quando a chia é consumida junto com a refeição ou logo antes dela.
          </p>
          <p>
            O que a chia não faz: não emagrece por si só, não cura doenças e não substitui alimentação variada. O "superalimento" resolve bem o que a fibra resolve bem. Nada além disso.
          </p>

          {/* CHIA VS LINHAÇA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5150558/pexels-photo-5150558.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pudim de chia com frutas e granola em pote de vidro — café da manhã saudável"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: ROMAN ODINTSOV / Pexels</p>
          </div>

          <h2 id="chia-vs-linhaca" className="img-above">Chia vs linhaça: qual vai pra lista</h2>

          <p>
            As duas sementes aparecem lado a lado na mesma prateleira, têm perfis nutricionais parecidos e geram a mesma dúvida. A diferença prática é de uso — não de superioridade.
          </p>
          <p>
            <strong>Chia:</strong> não precisa moer, forma gel automaticamente, sabor neutro. Funciona direto no iogurte, smoothie e pudim. Hidratação instantânea. Versátil sem esforço.
          </p>
          <p>
            <strong>Linhaça:</strong> precisa ser moída para absorver os nutrientes — a casca da linhaça inteira passa pelo intestino quase sem ser digerida. Tem sabor levemente amendoado. Funciona melhor em pão, bolo e tempero de salada, onde a textura e o sabor contribuem.
          </p>
          <p>
            Se você vai escolher uma só: chia é mais prática no cotidiano. Você polvilha, hidrata e vai embora. Sem moedor, sem preparação extra. Se você já usa linhaça e quer diversificar, as duas se complementam bem — e <a href="/blog/para-que-serve-oleo-de-linhaca">o óleo de linhaça</a> é outra forma de pegar o ômega-3 sem a textura de semente.
          </p>
          <p>
            Nutricionalmente, chia tem mais fibra e mais cálcio. Linhaça tem mais lignanas (compostos com ação estrogênica leve) e o sabor que adiciona algo à receita. A escolha é de conveniência, não de superioridade técnica.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar chia na cozinha</h2>

          <p>
            A versatilidade da chia é real, mas muita gente não vai além de jogar no iogurte — e fica bem, então não tem erro nisso. Para quem quer explorar mais, aqui estão os formatos que funcionam:
          </p>
          <p>
            <strong>Gel de chia.</strong> 1 colher de sopa de chia + 3 colheres de sopa de água. Mistura e espera 15-20 minutos. O resultado é um gel translúcido que substitui ovo em receitas veganas (1 colher de sopa de gel = 1 ovo, em bolos e panquecas) ou serve como espessante em vitaminas e sopas. Faz bastante e guarda na geladeira por até 5 dias.
          </p>
          <p>
            <strong>Pudim de chia.</strong> 3 colheres de sopa de chia + 1 xícara de leite (vegetal ou comum). Mistura bem, espera 5 minutos, mistura de novo para não empacotar, leva à geladeira por no mínimo 4 horas — ou deixa overnight. Na hora de servir, adiciona fruta, granola, mel, ou come puro. Consistência de mousse firme. Simples, barato e dura bem na geladeira.
          </p>
          <p>
            <strong>Polvilhada direto.</strong> Em iogurte, salada de frutas, aveia, vitamina. Nenhuma preparação. Funciona com 1-2 colheres de sopa sem hidratar antes, porque a quantidade pequena não causa problema — especialmente se você já está consumindo outros líquidos junto.
          </p>
          <p>
            <strong>Em receitas de forno.</strong> Pão, bolo, muffin, panqueca — entra como 1-2 colheres de sopa por receita, junto com os ingredientes secos. Acrescenta fibra e nutrientes sem mudar o sabor. Não substitui farinha na estrutura, mas complementa.
          </p>
          <p>
            Uma ressalva de textura: chia seca em saladas frescas com molho pode emborrachar a folha em contato prolongado. Se for misturar, adicione na hora de servir.
          </p>

          {/* COMPRAR E GUARDAR */}
          <h2 id="comprar-guardar">Como comprar e guardar</h2>

          <p>
            Chia está disponível em qualquer supermercado, na seção de cereais, grãos ou produtos naturais. A variedade em lojas de alimentos naturais é maior, mas a qualidade do produto padrão em supermercado é suficiente para uso cotidiano.
          </p>
          <p>
            Preço típico: R$ 12-25 por 200-250g em supermercado. Comprando em embalagem maior (500g ou 1kg) em atacado ou e-commerce, o custo por grama cai bastante. Chia preta e branca têm perfil nutricional praticamente idêntico — a diferença é só visual.
          </p>
          <p>
            O que verificar no rótulo: origem declarada (Peru, Argentina e México são os principais produtores no mercado brasileiro), data de validade, e ausência de ingredientes adicionais. Chia pura tem um ingrediente: chia. Desconfie de misturas com "blend de sementes" se a proporção não estiver clara.
          </p>
          <p>
            Como guardar: pote fechado, fora da luz e longe de fontes de calor e umidade — especialmente longe do fogão. Na <a href="/funcionalidades/despensa">despensa</a>, dura até 2 anos fechada e cerca de 1 ano depois de aberta sem perder qualidade. Não precisa de geladeira. Se a semente estiver úmida, grudenta ou com cheiro rançoso, descarte.
          </p>
          <p>
            Chia é um dos poucos alimentos que se compra com pouca frequência e ocupa pouco espaço. Um pacote de 500g dura semanas pra maioria das pessoas — o que justifica a compra em quantidade maior.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre chia</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Chia engorda?</p>
              <p className="faq-a">
                Chia é calórica — 100g tem cerca de 486 kcal, a maioria vinda de gordura. Mas uma porção típica é 1-2 colheres de sopa (15-30g), o que entrega cerca de 73-146 kcal. O que ajuda no controle de peso é a fibra: o gel que a chia forma no estômago aumenta a saciedade e retarda a digestão. Em quantidade razoável dentro de uma dieta equilibrada, chia não engorda.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto de chia posso comer por dia?</p>
              <p className="faq-a">
                A dose mais estudada é de 15-30g por dia — 1-2 colheres de sopa. Acima disso, o excesso de fibra pode causar desconforto digestivo, especialmente sem água suficiente. Comece com 1 colher de sopa e veja como seu organismo reage antes de aumentar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso comer chia seca ou precisa hidratar?</p>
              <p className="faq-a">
                Pode comer seca, mas hidratada é mais segura. A chia seca absorve líquido no estômago — sem água suficiente junto, pode causar desconforto. Hidratada, a fibra já está ativada e a absorção é mais eficiente. Para 1 colher no iogurte, não há problema. Para doses maiores, prefira hidratar antes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Chia tem glúten?</p>
              <p className="faq-a">
                Chia pura não tem glúten. Mas pode haver contaminação cruzada na produção se processada no mesmo equipamento que trigo. Se você tem doença celíaca, verifique o selo "sem glúten" no rótulo. Para a maioria das pessoas, não há preocupação.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Chia e linhaça são a mesma coisa?</p>
              <p className="faq-a">
                Não. Sementes diferentes com perfis parecidos mas usos distintos. Chia não precisa moer, forma gel, sabor neutro. Linhaça precisa ser moída para liberar os nutrientes, tem sabor amendoado. Para smoothies e pudins, chia é mais prática. Para pão e bolos, linhaça tem mais personalidade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Chia perde nutrientes quando aquecida?</p>
              <p className="faq-a">
                Parte dos antioxidantes e do ômega-3 pode diminuir com o calor. Para aproveitar melhor, chia funciona bem em preparos frios: pudim, iogurte, vitamina, salada. Usada em bolos e panquecas, ainda entrega fibra e minerais — não é perda total, mas o aproveitamento é menor.
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
            <p className="blog-cta-title">Sua despensa sabe o que tem de chia?</p>
            <p className="blog-cta-desc">
              Com o Mise, você controla o estoque da <a href="/funcionalidades/despensa">despensa</a>, monta a{' '}
              <a href="/funcionalidades/lista-de-compras">lista de compras</a> e não volta do mercado sem o que precisa.
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
