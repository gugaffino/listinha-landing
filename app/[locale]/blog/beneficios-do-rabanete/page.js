import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Benefícios do rabanete: o que é e como usar na cozinha',
  description: 'Rabanete tem vitamina C, fibra e apenas 16 kcal por 100g. Saiba os benefícios, o valor nutricional e como usar esse legume barato na cozinha sem desperdício.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-rabanete',
  },
  openGraph: {
    title: 'Benefícios do rabanete: o que é e como usar na cozinha',
    description: 'Rabanete tem vitamina C, fibra e apenas 16 kcal por 100g. Saiba os benefícios, o valor nutricional e como usar esse legume barato na cozinha sem desperdício.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-rabanete',
    images: [
      {
        url: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Rabanetes vermelhos frescos ao lado de cenouras sobre superfície de madeira',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benefícios do rabanete: o que é e como usar na cozinha',
    description: 'Rabanete tem vitamina C, fibra e apenas 16 kcal por 100g. Saiba os benefícios, o valor nutricional e como usar esse legume barato na cozinha sem desperdício.',
    images: ['https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quantas calorias tem o rabanete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rabanete cru tem aproximadamente 16 kcal por 100g — é um dos legumes mais baixos em caloria que você encontra no hortifruti. Quase tudo é água: cerca de 95% da composição é líquido. Por isso ele sacia bem sem pesar na conta calórica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Rabanete pode ser comido cru?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Cru é a forma mais comum e a que preserva melhor os nutrientes, especialmente a vitamina C. Fatiado fino em saladas ou cortado em palitos com sal, o sabor picante fica mais suave. Se a picância incomodar, deixar de molho em água fria por 10 minutos antes de servir ajuda a reduzi-la.',
      },
    },
    {
      '@type': 'Question',
      name: 'O rabanete faz emagrecer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rabanete não emagrece por si só, mas é um aliado útil para quem controla calorias. São 16 kcal por 100g, com fibra que ajuda na saciedade e alto teor de água. Substitui bem ingredientes mais calóricos em saladas e petiscos sem comprometer o sabor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Rabanete faz bem para o intestino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O rabanete tem fibra alimentar que ajuda no trânsito intestinal e estimula a produção de bile, o que facilita a digestão das gorduras. Compostos como os glucosinolatos também têm ação benéfica sobre a flora intestinal, segundo estudos com vegetais crucíferos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar rabanete depois de comprar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retire as folhas antes de guardar — elas sugam a umidade e murcham a raiz mais rápido. Guarde a raiz na geladeira, envolto em papel-toalha levemente úmido dentro de um saco. Dura até uma semana. As folhas podem ser refogadas como espinafre e não precisam ser descartadas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre rabanete e nabo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os dois são crucíferos de raiz, mas têm perfis bem diferentes. O rabanete é menor, com casca vermelha viva e sabor picante intenso — cru é o modo principal. O nabo é maior, de casca branca ou roxa, sabor mais suave e levemente adocicado quando cozido. Em receitas, não são intercambiáveis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Rabanete tem vitamina C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Uma porção de 100g de rabanete cru fornece cerca de 15mg de vitamina C, equivalente a aproximadamente 17% do valor diário recomendado. É uma fonte razoável — não chega a ser comparável à acerola, mas contribui para a ingestão diária, especialmente para quem come cru regularmente.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Benefícios do rabanete: o que é e como usar na cozinha',
  description: 'Rabanete tem vitamina C, fibra e apenas 16 kcal por 100g. Saiba os benefícios, o valor nutricional e como usar esse legume barato na cozinha sem desperdício.',
  image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-06',
  dateModified: '2026-06-06',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-rabanete',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Benefícios do rabanete', item: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-rabanete' },
  ],
}

export default function BeneficiosDoRabanete({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Benefícios do rabanete</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-06">6 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Rabanete: o legume que você passa reto no hortifruti e não devia
          </h1>
          <p className="blog-desc">
            Barato, fácil de achar, quase sem calorias e com propriedades que a maioria dos legumes mais famosos não tem. O rabanete leva mais do que merece a fama de enfeite de prato. Veja o que é, o que tem dentro e como usar de verdade na cozinha.
          </p>

          <div className="answer-box">
            <p>
              <strong>Rabanete</strong> é um legume crucífero com cerca de <strong>16 kcal por 100g</strong>.
              Rico em vitamina C, fibra e isotiocianatos — compostos com ação antioxidante e anti-inflamatória —
              ele é barato, fácil de encontrar no hortifruti e versátil, cru ou levemente cozido.
              A picância que assusta é exatamente o sinal de que os compostos benéficos estão presentes.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Rabanetes vermelhos frescos ao lado de cenouras sobre superfície de madeira"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Wendy Wei / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é rabanete</a></li>
              <li><a href="#valor-nutricional">Valor nutricional</a></li>
              <li><a href="#beneficios">Benefícios do rabanete para a saúde</a></li>
              <li><a href="#como-usar">Como usar rabanete na cozinha</a></li>
              <li><a href="#como-escolher">Como escolher e guardar</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <h2 id="o-que-e">O que é rabanete</h2>

          <p>
            Rabanete (<em>Raphanus sativus</em>) é um legume da família das crucíferas — parente direto da couve, do brócolis e da mostarda. Você o reconhece pela casca vermelha viva e pelo interior branco firme. O sabor é picante e fresco quando cru, bem mais suave quando passado rapidamente no fogo.
          </p>
          <p>
            A picância vem dos isotiocianatos, compostos que se formam quando o vegetal é cortado ou mastigado. É o mesmo mecanismo da mostarda e do wasabi — e não é à toa que eles têm o mesmo cheiro característico. Esses compostos são parte do que torna o rabanete nutricionalmente interessante, não um defeito a ser eliminado.
          </p>
          <p>
            No Brasil, o mais comum é o rabanete vermelho redondo. Existem outras variedades — o daikon (branco e longo, muito usado na culinária japonesa), o preto e o roxo —, mas a versão vermelha é o que chega na maior parte dos hortifrutis e feiras. O benefícios do rabanete valem para todas as variedades, com pequenas diferenças de intensidade.
          </p>

          {/* VALOR NUTRICIONAL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/775207/pexels-photo-775207.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rabanetes roxos e vermelhos em tigela de cerâmica — close-up de legumes frescos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Rarnie McCudden / Pexels</p>
          </div>

          <h2 id="valor-nutricional" className="img-above">Valor nutricional do rabanete</h2>

          <p>
            Em 100g de rabanete cru — o equivalente a uns cinco ou seis rabanetes médios —, você tem:
          </p>

          <ul className="item-list">
            <li><strong>16 kcal</strong> — quase não tem caloria</li>
            <li><strong>3,4g de carboidratos</strong> — sendo 1,6g de fibra</li>
            <li><strong>0,7g de proteína</strong></li>
            <li><strong>Vitamina C: ~15mg</strong> (17% do valor diário recomendado)</li>
            <li><strong>Potássio: ~233mg</strong> — bom para pressão arterial</li>
            <li><strong>Folato</strong> — importante para metabolismo celular</li>
            <li><strong>Água: ~95%</strong> da composição total</li>
          </ul>

          <p>
            O número que mais importa é esse 95% de água. Rabanete hidrata, sacia e praticamente não pesa na conta calórica. É um dos legumes com melhor relação volume-caloria que você encontra no hortifruti — mais do que pepino, mais do que abobrinha.
          </p>
          <p>
            Os <a href="/blog/alimentos-ricos-em-magnesio">micronutrientes</a> não são espetaculares individualmente, mas a combinação de vitamina C, potássio e compostos fitoquímicos próprios das crucíferas é o que diferencia o rabanete de um vegetal qualquer.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios do rabanete para a saúde</h2>

          <p>
            Os benefícios do rabanete não vêm de um único composto milagroso. Vêm da combinação de fibra, vitamina C, potássio e os glucosinolatos que caracterizam as crucíferas. Cada um age de um jeito diferente.
          </p>

          <h3>Digestão e trânsito intestinal</h3>
          <p>
            A fibra do rabanete estimula o peristaltismo e adiciona volume às fezes. Além disso, o rabanete contém compostos que estimulam a produção e o fluxo de bile — o líquido digestivo que quebra gordura. Quem tem digestão lenta ou sensação de "peso" depois de refeições mais gordurosas pode se beneficiar de adicionar rabanete cru como entrada ou acompanhamento.
          </p>

          <h3>Ação diurética</h3>
          <p>
            O potássio ajuda a equilibrar o sódio no organismo e favorece a eliminação de líquidos via urina. Não é um diurético forte como medicamento, mas para quem come com muito sal regularmente, o rabanete contribui para esse equilíbrio. O alto teor de água amplifica o efeito.
          </p>

          <h3>Antioxidante e anti-inflamatório</h3>
          <p>
            Vitamina C e antocianinas — os pigmentos que dão a cor vermelha à casca — têm ação antioxidante comprovada. Os isotiocianatos, os mesmos compostos responsáveis pela picância, têm propriedades anti-inflamatórias estudadas especialmente em vegetais crucíferos. Quanto mais vivo o vermelho da casca, mais antocianinas presentes.
          </p>

          <h3>Controle de peso</h3>
          <p>
            16 kcal por 100g com fibra e volume alto. Rabanete ocupa espaço no estômago sem praticamente nenhum impacto calórico. Em saladas, substitui ingredientes mais calóricos — croûtons, queijo ralado, grão-de-bico em excesso — sem que a refeição perca textura ou sabor. É o tipo de troca que funciona sem exigir esforço.
          </p>

          <h3>Saúde cardiovascular</h3>
          <p>
            Potássio relaxa as paredes dos vasos sanguíneos e contribui para o controle da pressão arterial. As antocianinas da casca têm associação com menor risco cardiovascular em estudos com vegetais ricos nesses pigmentos. O efeito existe, mas depende de consumo regular — não de uma semana.
          </p>

          <h3>Saúde do fígado</h3>
          <p>
            Esse é o benefício menos conhecido. Compostos do rabanete — especialmente o isotiocianato sulforafeno — têm ação protetora sobre o fígado em estudos com crucíferos. O mecanismo envolve a estimulação de enzimas de detoxificação hepática. A pesquisa ainda é inicial para rabanete especificamente, mas os resultados com a família das crucíferas são consistentes.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8805469/pexels-photo-8805469.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mulher escolhendo rabanetes frescos em seção de vegetais no mercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Mike Jones / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar rabanete na cozinha</h2>

          <p>
            A maioria dos posts sobre rabanete termina nos benefícios. O problema é que sem saber o que fazer com ele, o legume acaba murchando na gaveta da geladeira — o que cancela qualquer benefício. Aqui vai o que realmente funciona na cozinha do dia a dia.
          </p>

          <h3>Cru em saladas</h3>
          <p>
            Fatiar fino é o segredo. Rabanete grosso fica duro e a picância domina tudo. Fatiado em lâminas finas — idealmente numa mandoline ou com uma faca afiada —, ele fica crocante, levemente picante e vai bem com qualquer base verde. Mistura bem com cenoura ralada, pepino e coentro ou salsinha.
          </p>

          <h3>Petisco com sal</h3>
          <p>
            Cortado em palitos ou rodelas grossas, com um pouco de sal grosso e limão. É o tipo de coisa que entra na mesa enquanto o jantar não fica pronto. Funciona melhor do que você imagina — especialmente gelado. Quem prova sem saber o que é raramente adivinham que é rabanete.
          </p>

          <h3>Levemente refogado</h3>
          <p>
            Dois a três minutos em fogo alto com azeite e alho. A picância some quase completamente, o sabor fica suave e levemente adocicado, e a textura mantém a crocância. Serve como acompanhamento no lugar de abobrinha ou vagem. Não cozinhe além disso — rabanete murcho não tem graça.
          </p>

          <h3>Conserva rápida</h3>
          <p>
            A versão mais simples: fatie, coloque num pote, cubra com vinagre de arroz, uma colher de açúcar e uma pitada de sal. Deixe na geladeira por meia hora. O resultado é um picles leve que dura até cinco dias e vai bem em sanduíche, taco, bolinho de arroz ou como acompanhamento de qualquer carne grelhada. Não precisa de processo de esterilização.
          </p>

          <h3>Finalização de pratos quentes</h3>
          <p>
            Esse uso surpreende: rabanete fatiado fino colocado por cima de um prato quente — frango grelhado, lentilha, sopa — murcha levemente com o calor sem perder a textura. Adiciona frescor, cor e um contraste que faz o prato parecer mais elaborado do que foi.
          </p>

          <div className="blog-inline-cta">
            <p>Comprou rabanete. Agora não some da despensa. <em>O Mise lembra.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO ESCOLHER */}
          <h2 id="como-escolher">Como escolher e guardar rabanete</h2>

          <p>
            O rabanete murcho na gaveta é um clássico. Chega do mercado firme, entra na geladeira sem cuidado, e na quinta-feira está mole. Tem solução.
          </p>

          <h3>Como escolher no mercado</h3>
          <p>
            Pressione com o polegar: tem que ser firme, sem ceder. A casca deve estar lisa, sem rachaduras, e a cor vermelha deve ser viva e uniforme. Rabanetes com manchas escuras ou partes amolecidas já passaram do ponto. Se vier com as folhas, elas devem estar verdes e turgentes — folhas murchas indicam que o legume está perdendo umidade há tempo.
          </p>

          <h3>Como guardar em casa</h3>
          <p>
            A regra mais importante: retire as folhas antes de guardar. As folhas sugam a umidade da raiz e aceleram o murchamento. Com as folhas removidas, embrulhe os rabanetes em papel-toalha levemente úmido e coloque num saco fechado na gaveta de legumes da geladeira. Dura até uma semana nessas condições.
          </p>
          <p>
            As folhas não precisam ir para o lixo. Refogadas com azeite e alho, ficam parecidas com espinafre — sabor levemente picante e textura macia. Vão bem com ovo mexido ou como base de uma fritada. Se estiver montando a{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            para não desperdiçar, esse é o tipo de detalhe que faz diferença.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>Depende do que você já come.</p>
          <p>
            Se você já tem o hábito de comprar cenoura, pepino ou abobrinha para a semana, rabanete entra na mesma lógica — vegetal cru, fácil, sem cozinhar necessariamente. O perfil nutricional é bom, o preço é baixo e encontra em qualquer hortifruti. Não é item de{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            — mas cabe bem numa compra semanal se você já tem o hábito de comer legumes crus.
          </p>
          <p>
            Se você não sabe o que vai fazer com ele, não compre. Um legume que você não usa é desperdício — e rabanete murcho não tem salvação. O caso é diferente se você já sabe que vai fazer uma salada na quarta, um petisco no fim de semana ou aquele picles rápido que mencionei acima.
          </p>
          <p>
            O maior obstáculo é a picância. Ela assusta quem não está acostumado. Mas fatiar fino, deixar de molho por dez minutos em água fria, ou passar rapidamente no fogo resolve. Depois de ajustar o preparo, o rabanete vira um ingrediente sem drama — barato, versátil e que estraga rápido se você não planejar o uso. Exatamente como qualquer vegetal fresco que vale a pena comprar.
          </p>
          <p>
            Se você está montando um{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>
            {' '}e quer variar os legumes sem gastar mais, rabanete é uma escolha que funciona. Entra na{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>
            {' '}junto com o que você já compra — sem precisar de uma seção especial.
          </p>
          <p>
            Rabanete é o legume que todo mundo passa reto. Sem motivo válido.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre rabanete</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quantas calorias tem o rabanete?</p>
              <p className="faq-a">
                Aproximadamente 16 kcal por 100g — um dos legumes mais baixos em caloria do hortifruti. A composição é quase toda água (cerca de 95%), o que explica o volume alto com impacto calórico mínimo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Rabanete pode ser comido cru?</p>
              <p className="faq-a">
                Sim, e é a forma mais comum. Cru, preserva melhor a vitamina C e os isotiocianatos. Fatiado fino em saladas ou em palitos com sal, a picância fica mais equilibrada. Para reduzir ainda mais, deixe de molho em água fria por 10 minutos antes de servir.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O rabanete faz emagrecer?</p>
              <p className="faq-a">
                Não emagrece por si só, mas ajuda: 16 kcal por 100g, fibra que sacia e alto teor de água que ocupa espaço no estômago sem calorias. É uma troca útil em saladas e petiscos no lugar de ingredientes mais calóricos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Rabanete faz bem para o intestino?</p>
              <p className="faq-a">
                Sim. A fibra regula o trânsito intestinal e o rabanete estimula a produção de bile, o que facilita a digestão de gorduras. Compostos dos glucosinolatos também têm ação benéfica sobre a flora intestinal, conforme estudos com vegetais da família das crucíferas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar rabanete depois de comprar?</p>
              <p className="faq-a">
                Tire as folhas antes de guardar — elas murcham a raiz mais rápido. Embrulhe em papel-toalha úmido, coloque em saco fechado e deixe na gaveta de legumes da geladeira. Dura até uma semana. As folhas podem ser refogadas como espinafre.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre rabanete e nabo?</p>
              <p className="faq-a">
                Os dois são crucíferos de raiz, mas são bem diferentes na prática. Rabanete é menor, com casca vermelha viva e sabor picante intenso — cru é o modo principal. Nabo é maior, de casca branca ou roxa, sabor mais suave e adocicado quando cozido. Não são intercambiáveis em receitas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Rabanete tem vitamina C?</p>
              <p className="faq-a">
                Sim. 100g de rabanete cru fornecem cerca de 15mg de vitamina C, equivalente a cerca de 17% do valor diário recomendado. Não é uma fonte concentrada como acerola ou pimentão, mas contribui para a ingestão diária — especialmente para quem come legumes crus regularmente.
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
                Criador do Mise. Compra rabanete toda semana porque parece saudável. Usa na salada de terça e esquece o resto na gaveta até sexta-feira. Trabalho em progresso.
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
              O rabanete entra na lista e vai realmente parar no prato — não na lixeira na sexta.
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
