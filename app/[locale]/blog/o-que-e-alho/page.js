import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Alho: o que é, benefícios e como usar na cozinha',
  description: 'Alho é um bulbo aromático da família da cebola. Saiba o que é, os tipos, como usar cru ou cozido, os benefícios comprovados e como guardar direito.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-alho',
  },
  openGraph: {
    title: 'Alho: o que é, benefícios e como usar na cozinha',
    description: 'Alho é um bulbo aromático da família da cebola. Saiba o que é, os tipos, como usar cru ou cozido, os benefícios comprovados e como guardar direito.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-alho',
    images: [
      {
        url: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Cabeças de alho sobre superfície marrom — bulbos inteiros com dentes visíveis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alho: o que é, benefícios e como usar na cozinha',
    description: 'Alho é um bulbo aromático da família da cebola. Saiba o que é, os tipos, como usar cru ou cozido, os benefícios comprovados e como guardar direito.',
    images: ['https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Alho cru é melhor que alho cozido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para aproveitar a alicina — o principal composto ativo do alho — o ideal é consumir cru ou minimamente processado. O calor degrada a alicina rapidamente. Mas uma técnica resolve isso: pique ou amasse o alho e espere 10 minutos antes de cozinhar. Nesse tempo, a alicina se forma e fica mais estável ao calor. Alho cozido ainda tem benefícios, mas em menor concentração.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantos dentes de alho por dia é seguro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para a maioria dos adultos, 1 a 2 dentes por dia é suficiente para aproveitar os benefícios sem efeitos indesejáveis. Quantidades maiores podem causar desconforto gastrointestinal em algumas pessoas — especialmente com o estômago vazio. Não há dose mágica estabelecida pela ciência, e mais nem sempre é melhor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Alho em pó substitui o alho fresco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para sabor, substitui parcialmente — o alho em pó é mais suave e tem perfil aromático diferente do fresco. Para benefícios nutricionais, a substituição é menos eficiente porque o processo de desidratação reduz os compostos ativos. Em emergências, 1/4 de colher de chá de alho em pó equivale aproximadamente a 1 dente fresco. Mas o fresco sempre entrega mais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Por que o alho fica verde quando frita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O alho muda de cor em contato com calor alto ou ácidos por causa de reações entre os compostos sulfurados e os aminoácidos presentes no bulbo. Não indica que estragou nem que ficou tóxico — é uma reação química normal. O sabor pode ficar levemente diferente, mais amargo. Para evitar, refogue em fogo médio, nunca alto, e adicione o alho quando o óleo ainda estiver morno.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como tirar cheiro de alho das mãos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O truque mais eficiente é esfregar as mãos em aço inoxidável — uma colher, a pia de inox ou um sabonete de inox — debaixo d\'água fria por alguns segundos. O metal neutraliza os compostos sulfurados responsáveis pelo cheiro. Lavar com sabão comum ajuda pouco porque o odor está nos poros. Esfregando no inox, o cheiro vai embora quase todo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como escolher alho bom no mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cabeças firmes, com casca íntegra e sem brotos visíveis. Se a cabeça estiver mole ou com pontos moles quando você aperta, está passando. Brotou? Ainda dá pra usar — o broto central fica amargo, então retire-o antes. Prefira o alho nacional (roxo ou branco) ao importado chinês, que costuma ser tratado para inibir brotamento e tem sabor mais neutro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Alho pode ser congelado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, e é uma boa solução quando você tem muito alho ou quer praticidade. O jeito mais fácil é bater no processador com um fio de azeite e congelar em formas de gelo. Cada cubinho equivale a 1 colher de sopa de alho picado. A textura muda depois de congelado — fica mais mole — mas o sabor e os compostos ativos se preservam bem por até 3 meses.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alho: o que é, benefícios e como usar na cozinha',
  description: 'Alho é um bulbo aromático da família da cebola. Saiba o que é, os tipos, como usar cru ou cozido, os benefícios comprovados e como guardar direito.',
  image: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-12',
  dateModified: '2026-06-12',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-alho',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é alho', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-alho' },
  ],
}

export default function OQueEAlho({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é alho</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-12">12 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Alho: o guia completo pra quem coloca na panela toda semana
          </h1>
          <p className="blog-desc">
            Entra no refogado, no molho, na marinada e na sopa. Mas o que é alho de verdade, quais os tipos disponíveis no Brasil, como usar sem perder o aroma — e onde fica guardado quando a receita pede e você nunca tem?
          </p>

          <div className="answer-box">
            <p>
              <strong>Alho</strong> (<em>Allium sativum</em>) é um bulbo comestível da família das aliáceas —
              a mesma família da cebola, do alho-poró e da cebolinha.
              O aroma e o sabor intensos vêm da <strong>alicina</strong>, um composto sulfurado
              liberado quando o dente é esmagado ou picado. É um dos ingredientes mais
              usados na culinária brasileira.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Cabeças de alho sobre superfície marrom — bulbos inteiros com dentes visíveis"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é alho</a></li>
              <li><a href="#tipos">Tipos de alho no mercado</a></li>
              <li><a href="#como-usar">Como usar alho na cozinha</a></li>
              <li><a href="#beneficios">O que a ciência diz sobre os benefícios</a></li>
              <li><a href="#como-guardar">Como guardar alho em casa</a></li>
              <li><a href="#na-lista">Alho na lista de compras</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13800740/pexels-photo-13800740.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Dentes de alho descascados em close-up — interior branco e firme"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é alho</h2>

          <p>
            Alho é um bulbo — não uma raiz, não um tubérculo. A planta cresce do solo e
            forma uma cabeça composta por vários dentes, cada um envolto numa casca fina.
            A cabeça inteira tem uma casca externa mais papelosa que mantém tudo unido.
          </p>
          <p>
            O composto que dá o cheiro e o sabor característicos é a alicina. Ela não
            existe no dente inteiro: só é formada quando você corta, esmaga ou pica o
            alho. Antes disso, os precursores ficam separados dentro da célula. O contato
            mecânico desencadeia a reação. É por isso que alho amassado tem sabor mais
            intenso do que alho fatiado — mais células destruídas, mais alicina liberada.
          </p>
          <p>
            A planta é originária da Ásia Central e está na cozinha humana há pelo menos
            5.000 anos. No Brasil, entrou com os colonizadores europeus e hoje é
            ingrediente indispensável no refogado base de qualquer cozinha — junto com
            cebola, é o ponto de partida de 80% das receitas do cotidiano.
          </p>
          <p>
            Cada dente de alho tem aproximadamente 4 a 5g e fornece menos de 5 calorias.
            O impacto na refeição é de sabor, não de macronutrientes.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de alho no mercado</h2>

          <p>
            O mercado brasileiro vende dois grupos principais de alho: o nacional e o
            importado. A diferença não é só de origem — o perfil de sabor e o
            comportamento na cozinha são distintos.
          </p>

          <h3>Alho roxo nacional</h3>
          <p>
            Produzido principalmente em Goiás, Minas Gerais e no Nordeste. Tem casca com
            listras roxas e sabor mais intenso e adocicado do que o importado. É o que
            aparece nos mercados populares e feiras. Quando você encontra alho roxo,
            compra — tem mais aroma e vai mais longe na panela.
          </p>

          <h3>Alho branco importado</h3>
          <p>
            Vem principalmente da China e da Argentina. Cabeças maiores, dentes maiores,
            casca totalmente branca. O sabor é mais neutro e uniforme. Costuma ser
            tratado com inibidor de brotamento para aguentar o transporte longo — por
            isso bota menos facilmente em casa, mas tem menos compostos ativos do que o
            nacional fresco. É o mais comum nos supermercados grandes.
          </p>

          <h3>Alho orgânico</h3>
          <p>
            Sem agrotóxicos, cultivado em menor escala. O sabor tende a ser mais
            complexo. Você encontra em feiras orgânicas, empórios e online. O preço por
            quilo é mais alto, mas a intensidade de sabor significa que você usa menos.
          </p>

          <h3>Alho picado e processado</h3>
          <p>
            Alho picado em conserva (em óleo ou em água), pasta de alho e alho granulado
            existem como conveniência. Praticidade real, mas sem o perfil aromático do
            fresco. A alicina se degrada rapidamente depois de processada — alho picado
            em conserva tem sabor diferente do fresco picado na hora. Funciona como
            substituto emergencial, não como primeira escolha.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10258187/pexels-photo-10258187.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cacho de alho fresco inteiro com folhas — bulbos curados prontos para uso"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar alho na cozinha</h2>

          <p>
            A forma de preparar o alho muda completamente o resultado na panela. Não é
            indiferente se você esmaga, fatia, pica fino ou coloca inteiro.
          </p>

          <h3>Amassado ou picado fino</h3>
          <p>
            O método padrão do refogado brasileiro. Quanto mais você destrói a estrutura
            do dente, mais alicina é liberada e mais intenso fica o sabor. Um truque
            rápido: esmague o dente com a lateral da faca antes de picar. O alho
            descasca mais fácil e o aroma se intensifica. Em fogo médio, 1 a 2 minutos
            são suficientes antes de adicionar os outros ingredientes.
          </p>

          <h3>Fatiado</h3>
          <p>
            Sabor mais suave e textura presente. Usado em refogar vegetais folhosos,
            finalizar massas ou fritar em azeite para criar um óleo aromatizado. Em
            temperaturas altas, fatias douradas ficam crocantes — mas a linha entre
            dourado e queimado é fina. Alho queimado amarga o prato inteiro.
          </p>

          <h3>Inteiro</h3>
          <p>
            Quando vai na panela inteiro e sem descascar, libera sabor lentamente. Bom
            para cozidos longos, caldos e carnes assadas. O dente fica macio e quase
            adocicado depois de muito tempo no forno. Alho assado inteiro na casca é
            outra categoria — vira uma pasta sedosa que vai bem em pão, em molhos e em
            purê.
          </p>

          <h3>Cru</h3>
          <p>
            Nas saladas, no guacamole, no molho de tahine e na finalização de pratos frios.
            O sabor é pungente — use com moderação. Uma técnica que suaviza sem
            cozinhar: deixe o alho picado de molho em suco de limão por 10 minutos antes
            de misturar ao prato. O ácido diminui a agressividade sem eliminar o aroma.
          </p>

          <h3>Alho em pó</h3>
          <p>
            Substituto de conveniência. Dissolve bem em marinadas e temperos secos. Não
            tosta como o fresco e não tem a mesma profundidade de sabor. Use quando não
            tem fresco disponível ou quando a receita pede textura homogênea. A
            proporção geral: 1 dente fresco ≈ ¼ de colher de chá de alho em pó.
          </p>

          <div className="blog-inline-cta">
            <p>Alho na despensa, lista gerada na hora. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">O que a ciência diz sobre os benefícios do alho</h2>

          <p>
            Alho tem um volume alto de estudos — mais do que a maioria dos ingredientes
            do mercado. Os resultados são consistentes em algumas áreas e ainda incertos
            em outras. Aqui está o que está mais estabelecido:
          </p>

          <h3>Saúde cardiovascular</h3>
          <p>
            Essa é a área com mais evidências. Estudos de revisão mostram que o consumo
            regular de alho está associado a redução modesta da pressão arterial sistólica
            e do colesterol LDL. O efeito não substitui medicação, mas é relevante como
            hábito alimentar. O mecanismo principal é a alicina, que inibe enzimas
            envolvidas na síntese do colesterol.
          </p>

          <h3>Ação antimicrobiana</h3>
          <p>
            A alicina tem atividade antimicrobiana documentada em estudos in vitro — ela
            inibe o crescimento de diversas bactérias e fungos. Na prática cotidiana, não
            significa que o alho substitui antibióticos. Mas explica o uso histórico
            como conservante e o senso popular de que "mata o bicho".
          </p>

          <h3>Propriedades antioxidantes</h3>
          <p>
            O alho contém compostos que reduzem o estresse oxidativo celular. Isso
            contribui para os efeitos anti-inflamatórios observados em estudos. O alho
            envelhecido (fermentado ou em extrato) tem concentração mais alta de
            antioxidantes do que o fresco — é a versão que aparece em suplementos.
          </p>

          <h3>O que ainda não está provado</h3>
          <p>
            Curas milagrosas, tratamento de câncer, detox. Existem estudos preliminares
            em algumas dessas áreas, mas sem conclusões sólidas. O alho é um ingrediente
            com benefícios reais — não precisa de exagero pra ter valor na cozinha e na
            alimentação.
          </p>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Como guardar alho em casa</h2>

          <p>
            Alho inteiro, com casca, em local fresco e com boa circulação de ar. Nada de
            geladeira para a cabeça inteira — o frio e a umidade fazem o alho brotar mais
            rápido e mudar de textura. Em cesto, numa fruteira ou num pote de cerâmica,
            ele dura semanas sem problema.
          </p>

          <h3>Dente descascado</h3>
          <p>
            Dente solto, sem casca, em pote fechado dentro da geladeira. Dura até uma
            semana. Depois disso começa a ressecar e perder sabor. Se quiser durar mais,
            cubra com azeite — o azeite aromatizado que sobra ainda é ótimo pra temperar.
          </p>

          <h3>Alho picado</h3>
          <p>
            Dura até 3 dias na geladeira, em pote fechado. A alicina começa a se degradar
            logo depois do corte, então o sabor vai perdendo força. Para uso frequente,
            vale picar em porções pequenas e sempre na hora.
          </p>

          <h3>Alho brotado</h3>
          <p>
            Não vai pro lixo. O broto verde central fica amargo — retire-o antes de usar.
            O restante do dente funciona normalmente. O alho brotado tem sabor levemente
            diferente, mais suave, mas ainda é aproveitável em refogados e assados.
          </p>

          <h3>Congelar</h3>
          <p>
            Bata o alho descascado no processador com um fio de azeite e congele em forma
            de gelo. Cada cubinho equivale a cerca de 1 colher de sopa picada. Direto do
            freezer pra panela — sem descongelar. Textura muda depois de congelado, então
            não sirva cru depois de congelado. Dura até 3 meses.
          </p>

          {/* NA LISTA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13059593/pexels-photo-13059593.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Alho sobre mesa de madeira — cabeças e dentes soltos prontos para cozinhar"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="na-lista" className="img-above">Alho na lista de compras</h2>

          <p>
            Alho é um dos itens que as pessoas mais esquecem de comprar — não porque é
            raro, mas porque é barato, pequeno e parece que vai durar para sempre. Não
            vai. A cabeça some mais rápido do que você pensa quando você cozinha todo dia.
          </p>
          <p>
            Uma cabeça de alho tem em média 10 a 14 dentes. Se você usa 2 dentes por
            refeição e cozinha 5 vezes por semana, uma cabeça dura menos de 2 semanas.
            Com uma família de 4, some na semana. Não é exagero colocar alho na lista
            toda semana — é realismo.
          </p>
          <p>
            Para quem cozinha de forma organizada, manter o alho rastreado na{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            é mais útil do que parece. Você sabe quantas cabeças tem, quando vai acabar
            e não chega na quinta com a panela no fogo sem ele.
          </p>
          <p>
            Uma estratégia simples: compre 3 a 4 cabeças de vez quando o preço estiver
            bom. Alho inteiro com casca dura bem por 3 semanas sem cuidado especial. Não
            há risco de estragar antes de usar — ao contrário de outras folhas e legumes
            que exigem atenção.
          </p>
          <p>
            O alho está na{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            de qualquer cozinha. Junto com cebola, é o ingrediente que aparece em quase
            tudo que você vai cozinhar na semana. Falta um, a receita muda. Faltam os
            dois, você improvisa — e improviso nem sempre funciona.
          </p>
          <p>
            Nunca mais vai esquecer o alho na volta pra casa. Exceto se esquecer de
            olhar a lista.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre alho</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Alho cru é melhor que alho cozido?</p>
              <p className="faq-a">
                Para aproveitar a alicina — o principal composto ativo — o cru ou
                minimamente processado é mais eficiente. O calor degrada a alicina
                rapidamente. Mas um truque resolve: pique ou amasse o alho e espere
                10 minutos antes de cozinhar. Nesse tempo, a alicina se forma e fica
                mais resistente ao calor. Alho cozido ainda tem benefícios, só em menor
                concentração.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantos dentes de alho por dia é seguro?</p>
              <p className="faq-a">
                Para a maioria dos adultos, 1 a 2 dentes por dia é uma quantidade razoável
                para aproveitar os benefícios sem desconforto gastrointestinal. Quantidades
                maiores podem causar queimação ou irritação, principalmente com o estômago
                vazio. Mais nem sempre é melhor — não há dose mágica estabelecida pela
                ciência.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Alho em pó substitui o alho fresco?</p>
              <p className="faq-a">
                Para sabor, substitui parcialmente — mais suave e com perfil diferente.
                Para benefícios, a substituição é menos eficiente porque a desidratação
                reduz os compostos ativos. Em emergências: ¼ de colher de chá de alho
                em pó equivale a aproximadamente 1 dente fresco. Mas o fresco sempre
                entrega mais.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Por que o alho fica verde quando frita?</p>
              <p className="faq-a">
                Reação entre os compostos sulfurados e os aminoácidos do bulbo em contato
                com calor alto ou ácidos. Não indica que estragou nem que ficou tóxico —
                é química normal. O sabor pode ficar levemente mais amargo. Para evitar,
                refogue em fogo médio com o óleo ainda morno, nunca em frigideira
                superaquecida.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como tirar cheiro de alho das mãos?</p>
              <p className="faq-a">
                Esfregue as mãos em qualquer superfície de aço inoxidável — colher, pia
                ou sabonete de inox — debaixo d'água fria por alguns segundos. O metal
                neutraliza os compostos sulfurados. Sabão comum ajuda pouco porque o
                odor fica nos poros. Com inox, vai embora quase todo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como escolher alho bom no mercado?</p>
              <p className="faq-a">
                Cabeças firmes, casca íntegra e sem brotos visíveis. Se apertar e sentir
                partes moles, está passando. Se brotou, ainda dá pra usar — retire o
                broto amargo antes. Prefira o alho nacional (roxo) ao importado chinês:
                sabor mais intenso e sem tratamento inibidor de brotamento.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Alho pode ser congelado?</p>
              <p className="faq-a">
                Pode. Bata descascado no processador com azeite e congele em forma de
                gelo. Cada cubinho equivale a cerca de 1 colher de sopa. Direto do
                freezer pra panela, sem descongelar. Não use cru depois de congelado —
                a textura muda. Dura bem até 3 meses.
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
                Criador do Mise. Tem certeza de que tem alho em casa toda vez que precisa.
                Está errado na maioria das vezes.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa que lembra.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              O alho não acaba sem aviso — você sabe quando está chegando no fim.
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
