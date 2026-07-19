import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Alcaparras: o que são, como usar e onde comprar no Brasil',
  description: 'Alcaparras são os botões florais do Mediterrâneo, conservados em salmoura ou sal grosso. Saiba o que são, como usar em receitas e onde encontrar no Brasil.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/alcaparras',
  },
  openGraph: {
    title: 'Alcaparras: o que são, como usar e onde comprar no Brasil',
    description: 'Alcaparras são os botões florais do Mediterrâneo, conservados em salmoura ou sal grosso. Saiba o que são, como usar em receitas e onde encontrar no Brasil.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/alcaparras',
    images: [
      {
        url: 'https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Alcaparras em pote de vidro — botões florais conservados em salmoura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alcaparras: o que são, como usar e onde comprar no Brasil',
    description: 'Alcaparras são os botões florais do Mediterrâneo, conservados em salmoura ou sal grosso. Saiba o que são, como usar em receitas e onde encontrar no Brasil.',
    images: ['https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que são alcaparras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alcaparras são os botões florais da planta Capparis spinosa, nativa do Mediterrâneo. Colhidos antes de florescer e conservados em salmoura, vinagre ou sal grosso, têm sabor intensamente salgado, ácido e levemente amargo. São usadas como tempero em molhos, massas, peixes e carnes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre alcaparras em salmoura e em sal grosso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alcaparras em salmoura são as mais comuns nos supermercados — prontas pra usar com uma rápida enxaguada. As conservadas em sal grosso têm qualidade superior e sabor mais complexo, mas precisam ser dessalgadas antes: mergulhe em água fria por 15 a 20 minutos, trocando a água uma vez.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como dessalgar alcaparras em sal grosso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coloque as alcaparras em recipiente com água fria em temperatura ambiente. Deixe de molho por 15 a 20 minutos, trocando a água pelo menos uma vez. Prove antes de usar — o sal residual vai temperar a receita.',
      },
    },
    {
      '@type': 'Question',
      name: 'Alcaparras fazem bem à saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alcaparras têm propriedades anti-inflamatórias, vitaminas K, A e C, fibras e flavonoides como rutina e quercetina. O ponto de atenção é o sódio: mesmo depois de enxaguadas, ainda carregam quantidade relevante de sal. Quem tem pressão alta deve usar com moderação e dessalgar bem antes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde comprar alcaparras no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em supermercados médios e grandes, na seção de conservas junto com azeitonas e antipastos. Empórios e lojas gourmet têm mais variedade de tipos e tamanhos. Online, a variedade é ainda maior — inclusive alcaparras sicilianas em sal grosso, que raramente aparecem em supermercado comum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como armazenar alcaparras depois de abrir o pote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guarde na geladeira, sempre cobertas pelo líquido de conserva. Se o líquido baixar, complete com água levemente salgada. Bem conservadas, duram meses. Nunca escorra todo o líquido — sem ele, perdem a textura e murcham.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alcaparras: o que são, como usar e onde comprar no Brasil',
  description: 'Alcaparras são os botões florais do Mediterrâneo, conservados em salmoura ou sal grosso. Saiba o que são, como usar em receitas e onde encontrar no Brasil.',
  image: 'https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/alcaparras',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Alcaparras', item: 'https://www.miseemcasa.com.br/pt/blog/alcaparras' },
  ],
}

export default function AlcaparrasPost({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Alcaparras</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-07">7 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que são alcaparras e para que servem na cozinha
          </h1>
          <p className="blog-desc">
            Aquele pote pequeno na gôndola de conservas, perto das azeitonas. Você sabe o que é, mas não sabe exatamente o que fazer. Alcaparras são botões florais — não frutas, não tempero industrializado — e entender isso muda bastante como você vai usar.
          </p>

          <div className="answer-box">
            <p>
              <strong>Alcaparras</strong> são os botões florais da planta <em>Capparis spinosa</em>, nativa do Mediterrâneo.
              Conservados em salmoura, vinagre ou sal grosso, têm sabor salgado, ácido e levemente amargo.
              Funcionam como tempero — um ponto de profundidade em molhos, peixes e massas.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Alcaparras em pote de vidro — botões florais conservados em salmoura"
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
              <li><a href="#o-que-sao">O que são alcaparras</a></li>
              <li><a href="#tipos-de-conserva">Tipos de conserva</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#nutricao">Nutrição e sódio</a></li>
              <li><a href="#onde-comprar">Onde comprar no Brasil</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE SÃO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Alcaparras pequenas em close-up — botões florais verdes da planta Capparis spinosa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-sao" className="img-above">O que são alcaparras</h2>

          <p>
            Alcaparras são botões florais — não frutas, não sementes. São os brotos da planta <em>Capparis spinosa</em>, colhidos antes de abrir em flor.
            Se o botão florescer, já passou do ponto. A janela de colheita é curta.
          </p>
          <p>
            A planta cresce bem em terreno árido, sol forte e pouca água.
            Encostas pedregosas, muros velhos, falésias no sul da Europa — é onde ela se sente em casa.
            É nativa do Mediterrâneo e do Oriente Médio. Cresce rústica, mas a colheita ainda é manual: cada botão apanhado à mão, um a um, antes de abrir.
          </p>
          <p>
            Depois de colhido, o botão é curado: vai pra salmoura, vinagre ou sal grosso.
            Esse processo cria o sabor característico: salgado, ácido, com um amargor leve que some quando você usa certo.
            A alcaparra in natura é quase insossa. O tempo em conserva é o que transforma.
          </p>
          <p>
            O tamanho importa. Quanto menor o botão, mais delicado o sabor e mais alto o preço.
            Os <em>nonpareil</em> — menos de 7mm — são os menores e mais valorizados na culinária europeia.
            Os maiores têm sabor mais pronunciado e custam menos. No supermercado brasileiro, o tamanho raramente vem descrito na embalagem.
          </p>

          {/* TIPOS DE CONSERVA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3297902/pexels-photo-3297902.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Potes de conservas mediterrâneas em prateleira — azeitonas, alcaparras e antipastos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="tipos-de-conserva" className="img-above">Tipos de conserva: salmoura, vinagre e sal grosso</h2>

          <p>
            Três tipos chegam ao mercado brasileiro. Saber a diferença evita surpresa na receita — e dinheiro gasto com o tipo errado.
          </p>

          <h3>Salmoura</h3>
          <p>
            O mais comum nos supermercados: água e sal, às vezes com um pouco de vinagre.
            Está pronto pra usar — uma rápida enxaguada tira o excesso de sal.
            Salmoura é a versão preguiçosa. No bom sentido da palavra preguiçosa.
            É a escolha certa pra quem usa alcaparras com frequência e quer praticidade.
            Guarde na <a href="/funcionalidades/despensa">despensa</a> antes de abrir; na geladeira depois.
          </p>

          <h3>Vinagre</h3>
          <p>
            Mais ácido que a salmoura. Aparece em potes gourmet e antipastos importados.
            Funciona bem onde a acidez é bem-vinda — molho de tomate, peixes, saladas.
            Cuidado em pratos que já têm acidez: o vinagre compete.
          </p>

          <h3>Sal grosso</h3>
          <p>
            A versão tradicional das ilhas mediterrâneas — Pantelleria, na Sicília, é a mais famosa.
            Sabor mais complexo, textura mais firme. São as preferidas de quem cozinha italiano de verdade.
            Exigem dessalgar antes de usar: 15 a 20 minutos em água fria, trocando a água uma vez.
            Prove antes de usar — o sal residual já vai temperar a receita.
            Difíceis de achar fora de empórios ou online, mas valem quando você quer o melhor resultado.
          </p>

          <p>
            Uma dica direta: se a receita pede "alcaparras" sem especificar, assume salmoura. Funciona em tudo.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar alcaparras na cozinha</h2>

          <p>
            Alcaparra é tempero, não ingrediente principal.
            Funciona como potencializador — um ponto de sal e acidez num prato que precisa de profundidade sem adicionar volume.
          </p>

          <h3>Molho puttanesca</h3>
          <p>
            O uso clássico. Tomate pelado, azeitona preta, alcaparras, anchovas e alho — tudo de pote, 20 minutos.
            É o tipo de receita que sai da despensa num dia em que a geladeira está quase vazia.
            Todos os ingredientes estão em conserva e a pasta leva 10 minutos.
            Se você fizer a <a href="/funcionalidades/lista-de-compras">lista de compras</a> direito, esse prato aparece sem ir ao mercado especificamente pra ele.
          </p>

          <h3>Com peixes</h3>
          <p>
            Salmão defumado com cream cheese, cebola roxa e alcaparras é um clássico escandinavo.
            Com atum em conserva, no lugar de salsa comum.
            Com bacalhau assado ou peixe branco grelhado como finalização — alcaparras com azeite e limão, simples assim.
          </p>

          <h3>Molhos frios</h3>
          <p>
            No molho tártaro, a alcaparra entra picada junto com pepino em conserva e ervas.
            Funciona bem com hamburguer, frango empanado ou peixe frito.
            Com atum em conserva, alcaparras e um limão, você tem almoço pronto em 5 minutos.
            Parece preguiça. É Mediterrâneo. Pode ser as duas coisas.
          </p>

          <h3>Como finalização</h3>
          <p>
            Alcaparras inteiras sobre carpaccio, salada com rúcula ou charcuterie.
            Picadas finas em manteiga com ervas — espalha sobre peixe ou frango antes de servir.
            Fritadas rapidamente em azeite ficam crocantes e viram garnish com sabor mais concentrado.
          </p>

          <p>
            Detalhe técnico importante: escorra e enxague antes de usar, mesmo em salmoura leve.
            O sal da conserva é forte — sem enxaguar, você pode salgar o prato sem querer.
            A alcaparra já vai temperar. Deixa ela fazer o trabalho e ajusta no final.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* NUTRIÇÃO */}
          <h2 id="nutricao">Nutrição e cuidados com o sódio</h2>

          <p>
            Alcaparras têm propriedades anti-inflamatórias vindas de dois flavonoides: rutina e quercetina.
            São também fonte de vitamina K, vitamina A e vitamina C.
            O teor de fibras é relevante pra um condimento — a quantidade por porção é pequena, mas está lá.
          </p>
          <p>
            O ponto de atenção é o sódio. Alcaparras em conserva têm muito sal — é o que as preserva e é o que cria o sabor.
            Mesmo depois de enxaguadas, ainda carregam quantidade relevante.
            Pra maioria das pessoas não é problema: a quantidade usada numa receita é pequena, como qualquer tempero.
            Quem tem pressão alta ou precisa controlar sódio deve usar com moderação e dessalgar com cuidado.
          </p>
          <p>
            Não são um superalimento. São um condimento com nutrientes interessantes — como a maioria dos temperos mediterrâneos.
            A diferença é que a alcaparra carrega sabor suficiente pra usar pouco, e usar pouco é a forma certa de usar.
            Esse princípio vale pra qualquer tempero na{' '}
            <a href="/blog/como-organizar-a-despensa">despensa bem organizada</a>
            {': '}compra uma vez, dura meses, tempera dezenas de receitas.
          </p>

          {/* ONDE COMPRAR */}
          <h2 id="onde-comprar">Onde comprar alcaparras no Brasil</h2>

          <p>
            No supermercado, fique na seção de conservas — perto das azeitonas, pepinos e antipastos.
            Nas grandes redes, é item padrão. Em supermercados menores, pode não ter.
          </p>
          <p>
            Empórios e lojas gourmet costumam ter mais variedade: tamanhos diferentes, versões em sal grosso, marcas italianas ou espanholas.
            Vale quando você quer qualidade superior ou quando a versão do supermercado esgotou.
          </p>
          <p>
            Online, a variedade é maior ainda — e o preço por pote costuma ser melhor que no empório.
            O frete pesa em compras pequenas: vale acumular com outros itens antes de pedir.
          </p>
          <p>
            O preço varia bastante. Versão em salmoura: de R$10 a R$20 por pote de 100 a 200g.
            As importadas em sal grosso chegam a R$30 ou mais.
            Quando encontrar um preço bom de algo que usa com frequência, anota o fornecedor na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}antes de esquecer onde estava.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre alcaparras</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que são alcaparras?</p>
              <p className="faq-a">
                Alcaparras são os botões florais da planta <em>Capparis spinosa</em>, nativa do Mediterrâneo.
                Conservados em salmoura, vinagre ou sal grosso, têm sabor intensamente salgado, ácido e levemente amargo.
                São usadas como tempero em molhos, massas, peixes e carnes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre alcaparras em salmoura e em sal grosso?</p>
              <p className="faq-a">
                Alcaparras em salmoura são as mais comuns nos supermercados — prontas pra usar com uma rápida enxaguada.
                As conservadas em sal grosso têm qualidade superior e sabor mais complexo, mas precisam ser dessalgadas antes: mergulhe em água fria por 15 a 20 minutos, trocando a água uma vez.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como dessalgar alcaparras em sal grosso?</p>
              <p className="faq-a">
                Coloque as alcaparras em recipiente com água fria em temperatura ambiente.
                Deixe de molho por 15 a 20 minutos, trocando a água pelo menos uma vez.
                Prove antes de usar — o sal residual já vai temperar a receita.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Alcaparras fazem bem à saúde?</p>
              <p className="faq-a">
                Alcaparras têm propriedades anti-inflamatórias, vitaminas K, A e C, fibras e flavonoides como rutina e quercetina.
                O ponto de atenção é o sódio: mesmo depois de enxaguadas, ainda carregam quantidade relevante de sal.
                Quem tem pressão alta deve usar com moderação e dessalgar bem antes de cozinhar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde comprar alcaparras no Brasil?</p>
              <p className="faq-a">
                Em supermercados médios e grandes, na seção de conservas junto com azeitonas e antipastos.
                Empórios e lojas gourmet têm mais variedade de tipos e tamanhos.
                Online, a variedade é ainda maior — inclusive alcaparras sicilianas em sal grosso, que raramente aparecem em supermercado comum.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como armazenar alcaparras depois de abrir o pote?</p>
              <p className="faq-a">
                Guarde na geladeira, sempre cobertas pelo líquido de conserva.
                Se o líquido baixar, complete com água levemente salgada.
                Bem conservadas, duram meses. Nunca escorra todo o líquido — sem ele, perdem a textura e murcham.
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
                Criador do Mise. Tem um pote de alcaparras aberto na geladeira desde novembro. Vai usar na próxima puttanesca — assim que lembrar que tem.
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
              Você compra o que vai usar — e as alcaparras não ficam esquecidas desde novembro.
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
