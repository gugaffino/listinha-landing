import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Arroz parboilizado: o que é, diferenças e como cozinhar',
  description: 'Arroz parboilizado passa por um pré-cozimento que preserva nutrientes do grão. Veja a diferença do branco e integral, como cozinhar e quando vale comprar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-arroz-parboilizado',
  },
  openGraph: {
    title: 'Arroz parboilizado: o que é, diferenças e como cozinhar',
    description: 'Arroz parboilizado passa por um pré-cozimento que preserva nutrientes do grão. Veja a diferença do branco e integral, como cozinhar e quando vale comprar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-arroz-parboilizado',
    images: [
      {
        url: 'https://images.pexels.com/photos/1311771/pexels-photo-1311771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Bowl de arroz cozido com grãos soltos sobre superfície de madeira clara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arroz parboilizado: o que é, diferenças e como cozinhar',
    description: 'Arroz parboilizado passa por um pré-cozimento que preserva nutrientes do grão. Veja a diferença do branco e integral, como cozinhar e quando vale comprar.',
    images: ['https://images.pexels.com/photos/1311771/pexels-photo-1311771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Arroz parboilizado é mais saudável que o arroz branco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O processo de parboilização move nutrientes da casca para o interior do grão antes do beneficiamento — vitaminas do complexo B, minerais e fibras que o arroz branco perde no polimento. O parboilizado também tem índice glicêmico mais baixo que o branco comum. Não chega ao nível do integral, mas é uma escolha melhor dentro dos arroz brancos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arroz parboilizado engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O parboilizado tem calorias semelhantes ao branco — cerca de 130 kcal por 100g cozido. O diferencial é o índice glicêmico mais baixo: a digestão é mais lenta, o que prolonga a saciedade. Não é um alimento de emagrecimento, mas dentro de uma alimentação equilibrada é uma escolha mais adequada que o branco polido.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre arroz parboilizado e arroz integral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O integral mantém todas as camadas do grão — farelo, gérmen e endosperma — e tem mais fibra, mais vitaminas e índice glicêmico mais baixo. O parboilizado ainda perde parte da casca no beneficiamento. Em compensação, cozinha mais rápido que o integral, tem textura mais próxima do branco e fica com grãos mais soltos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arroz parboilizado serve para risoto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Risoto precisa de amido de superfície para criar a cremosidade — o arbóreo ou carnaroli liberam esse amido durante o cozimento. O parboilizado tem amido gelatinizado internamente, o que deixa os grãos soltos e resistentes a absorver líquido em excesso. O resultado seria seco e sem cremosidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como armazenar arroz parboilizado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em pote fechado, em local seco e fresco, longe de umidade e luz direta. Dura até 2 anos sem perda de qualidade. Depois de aberto, transfira para um pote hermético — a embalagem aberta atrai umidade e pragas. Nunca guarde próximo ao fogão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arroz parboilizado tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arroz não contém glúten naturalmente, incluindo o parboilizado. É seguro para celíacos e pessoas com sensibilidade ao glúten. A única ressalva é contaminação cruzada em fábricas que processam trigo — verifique o rótulo se a restrição for por doença celíaca.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arroz parboilizado: o que é, diferenças e como cozinhar',
  description: 'Arroz parboilizado passa por um pré-cozimento que preserva nutrientes do grão. Veja a diferença do branco e integral, como cozinhar e quando vale comprar.',
  image: 'https://images.pexels.com/photos/1311771/pexels-photo-1311771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-arroz-parboilizado',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é arroz parboilizado', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-arroz-parboilizado' },
  ],
}

export default function OQueEArrozParboilizado({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é arroz parboilizado</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-10">10 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é arroz parboilizado e quando escolher no mercado
          </h1>
          <p className="blog-desc">
            Ele fica entre o branco e o integral na prateleira, custa um pouco mais e a embalagem diz que é mais nutritivo. Mas o que é arroz parboilizado, de onde vem esse nome e quando faz sentido escolher ele no lugar dos outros?
          </p>

          <div className="answer-box">
            <p>
              <strong>Arroz parboilizado</strong> é o arroz que passa por um pré-cozimento antes do beneficiamento.
              O grão é submerso em água quente sob pressão — isso gelatiniza o amido interno e move os nutrientes da casca para dentro do grão.
              Depois, o arroz é seco e polido normalmente. A casca vai embora, mas os nutrientes já migraram para dentro.
              O resultado: mais nutritivo que o branco, grãos mais soltos depois de cozido e índice glicêmico mais baixo.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1311771/pexels-photo-1311771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Bowl de arroz cozido com grãos soltos sobre superfície de madeira clara"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Suzy Hazelwood / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é e de onde vem o nome</a></li>
              <li><a href="#processo">Como o processo funciona</a></li>
              <li><a href="#comparacao">Parboilizado vs branco vs integral</a></li>
              <li><a href="#sabor">Sabor, cor e textura</a></li>
              <li><a href="#como-cozinhar">Como cozinhar</a></li>
              <li><a href="#pratos">Para quais pratos funciona</a></li>
              <li><a href="#vale-a-pena">Vale a pena comprar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7421204/pexels-photo-7421204.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Grãos de arroz branco sobre colheres de madeira em fundo neutro"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vie Studio / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é e de onde vem o nome</h2>

          <p>
            O nome vem do inglês <em>parboiled</em> — <em>partially boiled</em>: parcialmente cozido.
            Antes de descascar e polir o grão, o arroz é submerso em água quente sob pressão.
            O calor gelatiniza o amido e move vitaminas do complexo B e minerais da casca para o interior do grão.
          </p>
          <p>
            O processo não é novo. Surgiu na Índia e no Oriente Médio há mais de 2.000 anos, originalmente para facilitar o descascamento manual e preservar o arroz mais tempo em climas úmidos.
            No Brasil, chegou comercialmente na segunda metade do século XX e é hoje o segundo tipo mais vendido no país, atrás apenas do branco polido.
          </p>
          <p>
            O grão mais amarelado que você vê na embalagem não é defeito — é o beta-caroteno e as vitaminas que permaneceram no grão depois do processo.
            Arroz branco polido é translúcido porque perdeu esses compostos no beneficiamento.
            No prato, depois de cozido, a diferença visual praticamente desaparece.
          </p>

          {/* PROCESSO */}
          <h2 id="processo">Como o processo de parboilização funciona</h2>

          <p>
            Em três etapas: o arroz em casca é encharcado em água quente por várias horas; depois passa por vapor sob pressão, que gelatiniza o amido e empurra os nutrientes do farelo para dentro do endosperma; por fim, é seco lentamente antes de seguir para o beneficiamento normal.
          </p>
          <p>
            O resultado prático: o grão fica mais denso, os nutrientes estão incorporados ao interior e a estrutura do amido gelatinizado faz com que os grãos cozidos fiquem mais soltos — menos propensos a empapar do que o branco polido.
            A{' '}
            <a href="https://www.embrapa.br/arroz-e-feijao" target="_blank" rel="noopener">Embrapa Arroz e Feijão</a>
            {' '}documenta as propriedades do grão parboilizado e sua adaptação ao cultivo e consumo brasileiro.
          </p>
          <p>
            O processo também melhora o tempo de vida útil. Com o amido gelatinizado, o parboilizado resiste melhor a umidade e infestação do que o branco polido — o que explica parte da popularidade em países tropicais como o Brasil.
          </p>

          {/* COMPARAÇÃO */}
          <h2 id="comparacao">Parboilizado vs branco vs integral: as diferenças principais</h2>

          <div className="cost-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Arroz branco</th>
                  <th>Arroz parboilizado</th>
                  <th>Arroz integral</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Nutrientes</strong></td>
                  <td>Baixo — casca removida</td>
                  <td>Médio — migram pro grão</td>
                  <td>Alto — casca preservada</td>
                </tr>
                <tr>
                  <td><strong>Índice glicêmico</strong></td>
                  <td>Alto (~73)</td>
                  <td>Médio (~47)</td>
                  <td>Baixo (~50)</td>
                </tr>
                <tr>
                  <td><strong>Cozimento</strong></td>
                  <td>~15 min</td>
                  <td>~15–20 min</td>
                  <td>~40 min</td>
                </tr>
                <tr>
                  <td><strong>Textura</strong></td>
                  <td>Macia, empapa fácil</td>
                  <td>Solta, firme</td>
                  <td>Firme, mais resistente</td>
                </tr>
                <tr>
                  <td><strong>Sabor</strong></td>
                  <td>Neutro</td>
                  <td>Levemente encorpado</td>
                  <td>Terroso, mais intenso</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Os valores nutricionais de cada tipo de arroz estão documentados na{' '}
            <a href="https://www.tbca.net.br" target="_blank" rel="noopener">Tabela Brasileira de Composição de Alimentos (TBCA/UNICAMP)</a>
            {' '}com detalhamento por tipo de preparo.
          </p>
          <p>
            O parboilizado ocupa um meio-termo funcional: mais nutritivo que o branco, mais rápido e de textura mais acessível que o integral.
            Para quem quer melhorar a qualidade do arroz do dia a dia sem mudar radicalmente o hábito, é a troca mais direta disponível na gôndola.
          </p>

          {/* SABOR E TEXTURA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8108020/pexels-photo-8108020.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bowl de cerâmica branca com arroz cozido solto sobre mesa de madeira"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: MART PRODUCTION / Pexels</p>
          </div>

          <h2 id="sabor" className="img-above">Sabor, cor e textura</h2>

          <p>
            O parboilizado tem sabor mais presente que o branco, mas longe da profundidade do integral.
            Quem vem do branco polido vai notar: o grão é mais firme, menos amiláceo, não empapa com a mesma facilidade.
          </p>
          <p>
            A textura solta é a principal vantagem prática. O parboilizado aguenta bem o repouso depois de pronto, ressoca melhor no dia seguinte e funciona bem em panela elétrica — onde o branco tende a virar pasta se o ciclo se estender um pouco.
            Quem já tentou fazer arroz branco na elétrica e terminou com uma massa homogênea sabe exatamente do que estou falando.
          </p>
          <p>
            A cor levemente amarelada desaparece depois de cozido. No prato, fica praticamente branco — sem diferença visual aparente para quem não conhece os tipos.
          </p>

          {/* COMO COZINHAR */}
          <h2 id="como-cozinhar">Como cozinhar arroz parboilizado</h2>

          <p>
            A técnica básica é a mesma do branco — mas com alguns ajustes que fazem diferença no resultado.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Lave antes de cozinhar</strong>
                <p>O parboilizado não perde muito amido na lavagem, diferente do branco. Mas lavar remove impurezas do beneficiamento. Uma ou duas águas são suficientes — não precisa lavar até sair completamente transparente.</p>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>Proporção: 1 xícara de arroz para 2 de água</strong>
                <p>A proporção padrão funciona bem. O parboilizado absorve água de forma mais uniforme que o branco. Se quiser grãos mais al dente, reduza a água para 1,8 xícara. Nunca mexa depois que ferver — o amido gelatinizado faz os grãos grudarem se perturbados durante o cozimento.</p>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Tempo: 15 a 20 minutos em fogo baixo com tampa</strong>
                <p>Ligue em fogo médio-alto até ferver, reduza ao mínimo e tampe. O vapor faz o trabalho. Abrir a tampa antes do tempo libera vapor e pode resultar em arroz cru por baixo. Depois de desligar, deixe descansar 5 minutos com a tampa.</p>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Solte com garfo antes de servir</strong>
                <p>Depois do repouso, solte os grãos com um garfo em movimentos leves de baixo pra cima. Essa etapa separa os grãos e libera o excesso de vapor. O parboilizado fica visivelmente mais solto que o branco nessa etapa — é o sinal de que o processo funcionou.</p>
              </div>
            </li>
          </ul>

          {/* PARA QUAIS PRATOS */}
          <h2 id="pratos">Para quais pratos o parboilizado funciona</h2>

          <p>
            O parboilizado funciona bem em qualquer preparo onde você quer grãos soltos e firmes.
            Tem um caso específico onde <strong>não</strong> funciona: risoto.
          </p>

          <ul className="item-list">
            <li>Arroz branco simples do dia a dia — a substituição direta mais fácil</li>
            <li>Arroz de panela elétrica — aguenta o ciclo completo sem empapar</li>
            <li>Salada de arroz — grãos soltos mesmo frios</li>
            <li>Arroz de forno — textura firme resiste ao tempo no forno</li>
            <li>Arroz com frango ou carne — grãos bem definidos no prato</li>
            <li>Bolinho de arroz — funciona igual ao branco, com um pouco mais de sabor</li>
          </ul>

          <p>
            Para risoto, use arbóreo ou carnaroli — o amido de superfície desses grãos é o que cria a cremosidade característica.
            O parboilizado foi feito pra fazer o oposto: grãos que não soltam amido, que não grudam entre si.
            É o tipo certo pro arroz de todo dia. O tipo errado pra qualquer prato que depende de cremosidade.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa organizada significa saber que o arroz acabou antes de ir ao mercado. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena comprar arroz parboilizado</h2>

          <p>
            Depende do que você quer do arroz.
          </p>
          <p>
            Se você come arroz todo dia e quer melhorar a qualidade sem mudar a rotina, o parboilizado é a troca mais direta disponível.
            Custa em média R$ 1 a R$ 2 a mais por pacote de 5kg em relação ao branco comum — e entrega grãos mais nutritivos, mais soltos e mais resistentes a empapar.
            Para uma{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}de quem come arroz regularmente, a troca faz sentido direto.
          </p>
          <p>
            Se a prioridade é nutrição máxima e você está disposto a mudar a textura e o tempo de preparo, o integral é a escolha melhor.
            Mas 40 minutos de cozimento e textura mais firme são barreiras reais — a maioria das pessoas que tenta o integral volta ao branco em poucas semanas.
            O parboilizado é o meio-termo que efetivamente vira hábito.
          </p>
          <p>
            Na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {', '}dura até 2 anos em pote fechado — mais que o branco comum.
            É um item que dá pra comprar em quantidade maior sem risco de perder.
            Se você estiver montando um{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>
            {', '}entra em praticamente qualquer refeição sem precisar ajustar a receita.
            E se montar a{' '}
            <a href="/blog/lista-de-compras-do-mes">lista do mês</a>
            {', '}um pacote de 5kg costuma fechar bem pra uma família de duas pessoas.
          </p>
          <p>
            Arroz parboilizado não é ingrediente novo, nem modismo. É o mesmo grão de sempre — só que com um pouco mais de cuidado antes de chegar na sua panela.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre arroz parboilizado</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Arroz parboilizado é mais saudável que o arroz branco?</p>
              <p className="faq-a">
                Sim. O processo move nutrientes da casca para o interior do grão antes do beneficiamento — vitaminas do complexo B, minerais e fibras que o branco polido perde no polimento. O parboilizado também tem índice glicêmico mais baixo que o branco comum. Não chega ao nível do integral, mas é uma escolha melhor dentro dos arroz brancos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Arroz parboilizado engorda?</p>
              <p className="faq-a">
                Tem calorias semelhantes ao branco — cerca de 130 kcal por 100g cozido. O diferencial é o índice glicêmico mais baixo: a digestão é mais lenta, o que prolonga a saciedade. Não é alimento de emagrecimento, mas dentro de uma alimentação equilibrada é uma escolha mais adequada que o branco polido.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre arroz parboilizado e arroz integral?</p>
              <p className="faq-a">
                O integral mantém todas as camadas do grão — farelo, gérmen e endosperma — e tem mais fibra, mais vitaminas e índice glicêmico mais baixo. O parboilizado ainda perde parte da casca no beneficiamento. Em compensação, cozinha mais rápido que o integral, tem textura mais próxima do branco e fica com grãos mais soltos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Arroz parboilizado serve para risoto?</p>
              <p className="faq-a">
                Não. Risoto precisa de amido de superfície para criar a cremosidade — o arbóreo ou carnaroli liberam esse amido durante o cozimento. O parboilizado tem amido gelatinizado internamente, o que deixa os grãos soltos e resistentes a absorver líquido em excesso. O resultado seria seco e sem cremosidade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como armazenar arroz parboilizado?</p>
              <p className="faq-a">
                Em pote fechado, em local seco e fresco, longe de umidade e luz direta. Dura até 2 anos sem perda de qualidade. Depois de aberto, transfira para um pote hermético — a embalagem aberta atrai umidade e pragas. Nunca guarde próximo ao fogão.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Arroz parboilizado tem glúten?</p>
              <p className="faq-a">
                Arroz não contém glúten naturalmente, incluindo o parboilizado. É seguro para celíacos e pessoas com sensibilidade ao glúten. A única ressalva é contaminação cruzada em fábricas que processam trigo — verifique o rótulo se a restrição for por doença celíaca.
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
                Criador do Mise. Comprou arroz branco por anos sem questionar. Trocou pro parboilizado numa promoção e nunca voltou — não porque é saudável, mas porque os grãos ficam soltos na panela elétrica.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem em casa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Despensa, receitas e lista de compras num só lugar.
              Você sabe o que tem, compra o que precisa e para de descobrir que o arroz acabou quando o feijão já está na panela.
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
