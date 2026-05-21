import RevealObserver from '../../../components/RevealObserver'
import CopyButton from '../../../components/CopyButton'

export const metadata = {
  title: 'Lista de compras para casa nova: o que não pode faltar',
  description: 'Lista de compras para casa nova: 60+ itens organizados por cômodo, o que comprar no primeiro dia, estimativa de custo por perfil e lista pronta pra copiar.',
  alternates: {
    canonical: 'https://listinha-landing-delta.vercel.app/blog/lista-de-compras-para-casa-nova',
  },
  openGraph: {
    title: 'Lista de compras para casa nova: o que não pode faltar',
    description: '60+ itens por cômodo, o que comprar primeiro, estimativa de custo e lista pra copiar.',
    type: 'article',
    url: 'https://listinha-landing-delta.vercel.app/blog/lista-de-compras-para-casa-nova',
    images: [
      {
        url: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mulher carregando caixa ao entrar em apartamento novo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras para casa nova: o que não pode faltar',
    description: '60+ itens por cômodo, o que comprar primeiro, estimativa de custo e lista pra copiar.',
    images: ['https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que comprar primeiro para a casa nova?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comece pelo pacote de sobrevivência: roupa de cama (lençol, fronha, travesseiro), toalhas, papel higiênico, sabonete, pasta de dente, uma panela, frigideira, pratos e talheres básicos, detergente e saco de lixo. São os itens que você vai precisar na primeira noite — antes de qualquer móvel ou decoração.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que não pode faltar na lista de compras para casa nova?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lista cobre quatro áreas: cozinha (utensílios, eletrodomésticos e despensa inicial), quarto e banheiro (roupa de cama, toalhas e higiene pessoal), limpeza e lavanderia (vassoura, rodo, produtos de limpeza) e itens gerais (lâmpadas, extensões, cortinas). Papel higiênico, panela grande e toalha de banho são os três mais esquecidos na pressa da mudança.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto custa montar uma casa nova do zero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A compra inicial — utensílios, roupa de cama, produtos de limpeza e despensa — fica em torno de R$ 1.000–1.800 para uma pessoa, R$ 1.800–3.000 para um casal e R$ 2.500–4.500 para uma família com filhos. Essas estimativas não incluem móveis e eletrodomésticos principais como geladeira, fogão e máquina de lavar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como organizar as compras para casa nova em etapas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Divida em três ondas: Dia 1 (antes de dormir) — itens de sobrevivência: cama, banho, higiene, cozinha mínima e limpeza básica. Semana 1 — completar cozinha, roupa de cama extra, lâmpadas e extensões. Mês 1 — eletrodomésticos que faltam, complementos de quarto e banheiro. Decoração e itens de conforto ficam para depois que a poeira baixar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como não esquecer nada na lista de compras da mudança?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organize a lista por cômodo — não por tipo de produto. Percorra mentalmente cada ambiente da casa e liste o que vai precisar em cada um. Use um app de lista compartilhada se mais de uma pessoa estiver comprando, para evitar duplicar itens ou esquecer categorias inteiras.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que pode esperar para depois na montagem da casa nova?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Decoração, quadros, tapetes decorativos, utensílios de cozinha especializados (espremedor, air fryer, batedeira), itens de conforto extras e qualquer coisa que você não vai usar na primeira semana. Comprar tudo de uma vez gera gasto impulsivo — você descobre o que realmente precisa depois de morar alguns dias na casa.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras para casa nova: o que não pode faltar',
  description: 'Lista de compras para casa nova com 60+ itens por cômodo, o que comprar no primeiro dia, estimativa de custo por perfil e lista pronta pra copiar.',
  image: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-21',
  dateModified: '2026-05-21',
  author: {
    '@type': 'Person',
    name: 'Gus',
    url: 'https://listinha-landing-delta.vercel.app',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Listinha',
    url: 'https://listinha-landing-delta.vercel.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://listinha-puce.vercel.app/icons/icon-192.png',
      width: 192,
      height: 192,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://listinha-landing-delta.vercel.app/blog/lista-de-compras-para-casa-nova',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://listinha-landing-delta.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://listinha-landing-delta.vercel.app/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras para casa nova', item: 'https://listinha-landing-delta.vercel.app/blog/lista-de-compras-para-casa-nova' },
  ],
}

const copyText = `LISTA DE COMPRAS PARA CASA NOVA

PRIMEIRO DIA — SOBREVIVÊNCIA
- Travesseiro (1 por pessoa)
- Lençol e fronha
- Toalha de banho
- Papel higiênico
- Sabonete, pasta de dente e escova
- Panela grande + frigideira
- Pratos, copos e talheres básicos
- Detergente + esponja + saco de lixo

COZINHA — UTENSÍLIOS
- Panela grande
- Panela média
- Frigideira
- Chaleira
- Tábua de corte
- Faca do chef
- Concha e espátula
- Escorredor de massas
- Pratos (6)
- Bowls (6)
- Copos (6)
- Talheres (6 conjuntos)
- Abridor de lata e de garrafa

COZINHA — ELETRODOMÉSTICOS
- Liquidificador
- Cafeteira
- Micro-ondas

DESPENSA INICIAL
- Azeite ou óleo
- Sal e pimenta
- Alho e cebola
- Arroz e feijão
- Macarrão e molho de tomate
- Café e açúcar
- Leite e ovos

QUARTO
- Jogo de cama (2 por cama)
- Travesseiros (2 por pessoa)
- Coberta ou edredom
- Cabides (mínimo 20)

BANHEIRO
- Toalha de banho (2 por pessoa)
- Toalha de rosto (2 por pessoa)
- Tapete de banheiro
- Shampoo e condicionador
- Sabonete
- Creme dental e escova
- Desodorante
- Papel higiênico (estoque)

LIMPEZA E LAVANDERIA
- Vassoura + rodo + pá de lixo
- Balde
- Pano de chão e pano de microfibra
- Sabão em pó ou cápsulas
- Desinfetante
- Água sanitária
- Detergente para louça
- Esponjas
- Saco de lixo (vários tamanhos)
- Inseticida

GERAL
- Lâmpadas extras
- Régua de extensão ou filtro de linha
- Cortinas ou blackout (quarto primeiro)`

export default function ListaDeComprasParaCasaNova() {
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

      <header id="top" className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </a>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </header>

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="Você está aqui">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Lista de compras para casa nova</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-21">21 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista de compras para casa nova: o que não pode faltar (por cômodo)
          </h1>
          <p className="blog-desc">
            Entrar na casa nova e perceber que não tem papel higiênico. Isso acontece com quem faz mudança sem lista.
            Este guia tem 60+ itens organizados por cômodo, o que comprar no primeiro dia e uma lista pronta pra copiar.
          </p>

          <div className="answer-box">
            <p>
              A <strong>lista de compras para casa nova</strong> cobre quatro áreas:{' '}
              <strong>cozinha</strong> (utensílios, eletrodomésticos e despensa inicial),{' '}
              <strong>quarto e banheiro</strong> (roupa de cama, toalhas e higiene),{' '}
              <strong>limpeza e lavanderia</strong> (produtos e equipamentos) e{' '}
              <strong>itens gerais</strong> (lâmpadas, extensões, cortinas).
              Comece pelo pacote de sobrevivência — o que você precisa na primeira noite — e compre o resto em ondas.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mulher carregando caixa de mudança ao entrar em apartamento novo e iluminado"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Kampus Production / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#primeiro-dia">O que comprar no primeiro dia</a></li>
              <li><a href="#cozinha">Por cômodo: cozinha</a></li>
              <li><a href="#quarto-banheiro">Por cômodo: quarto e banheiro</a></li>
              <li><a href="#sala">Por cômodo: sala de estar</a></li>
              <li><a href="#limpeza">Limpeza e lavanderia</a></li>
              <li><a href="#lista-copiar">Lista completa pra copiar e colar</a></li>
              <li><a href="#etapas">O que pode esperar: compras por etapas</a></li>
              <li><a href="#quanto-custa">Quanto vai custar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* PRIMEIRO DIA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/30811284/pexels-photo-30811284.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Feira com frutas e verduras coloridas, representando as primeiras compras para a casa nova"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: TBD Traveller / Pexels</p>
          </div>

          <h2 id="primeiro-dia" className="img-above">O que comprar no primeiro dia (prioridade máxima)</h2>

          <p>
            Antes de qualquer coisa estética, existe o nível zero: o que você precisa pra sobreviver a primeira noite.
            Sem esses itens, nada mais funciona.
          </p>
          <p>
            A maioria das pessoas esquece pelo menos um item essencial na correria da mudança. O mais comum é o papel higiênico.
            Segundo dado: a segunda coisa mais esquecida é a toalha. Você descobre os dois na mesma noite.
          </p>

          <h3>Pacote de sobrevivência</h3>
          <ul className="item-list">
            <li><strong>Roupa de cama:</strong> lençol, fronha e pelo menos um travesseiro por pessoa</li>
            <li><strong>Toalha de banho</strong> — uma por pessoa</li>
            <li><strong>Higiene mínima:</strong> papel higiênico, sabonete, pasta de dente e escova</li>
            <li><strong>Cozinha de sobrevivência:</strong> uma panela grande, uma frigideira, pratos, copos e talheres</li>
            <li><strong>Despensa inicial:</strong> ovos, café, pão — o suficiente pra não depender de delivery logo de cara</li>
            <li><strong>Limpeza básica:</strong> detergente, esponja e saco de lixo</li>
          </ul>
          <p>
            Tudo que não está nessa lista pode esperar. O sofá pode esperar. A prateleira decorativa pode esperar.
            O papel higiênico, não.
          </p>

          {/* COZINHA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/11295908/pexels-photo-11295908.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cozinha moderna organizada com fogão e bancada, representando a cozinha da casa nova"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vidal Balielo Jr. / Pexels</p>
          </div>

          <h2 id="cozinha" className="img-above">Por cômodo: cozinha</h2>

          <p>
            A cozinha é o cômodo que mais itens demanda — e o mais fácil de subestimar.
            Você lembra da panela. Esquece o abridor de lata. Lembra do café. Não lembra das xícaras.
          </p>

          <h3>Utensílios</h3>
          <ul className="item-list">
            <li>Panela grande + panela média</li>
            <li>Frigideira</li>
            <li>Chaleira</li>
            <li>Tábua de corte</li>
            <li>Faca do chef + facas menores</li>
            <li>Concha, espátula e colher de pau</li>
            <li>Escorredor de massas</li>
            <li>Pratos (6), bowls (6), copos (6)</li>
            <li>Talheres — 6 conjuntos completos</li>
            <li>Abridor de lata e de garrafa</li>
          </ul>

          <h3>Eletrodomésticos básicos</h3>
          <ul className="item-list">
            <li>Liquidificador</li>
            <li>Cafeteira</li>
            <li>Micro-ondas (se não vier com o imóvel)</li>
          </ul>

          <h3>Despensa inicial</h3>
          <p>
            Não é a compra do mês inteiro — é o mínimo pra ter o que comer enquanto você ainda está desembalando caixas.
            Quando a cozinha estiver funcionando, aí sim você faz a{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras completa</a>.
          </p>
          <ul className="item-list">
            <li>Azeite ou óleo, sal e pimenta</li>
            <li>Alho e cebola</li>
            <li>Arroz, feijão e macarrão</li>
            <li>Molho de tomate</li>
            <li>Café, açúcar, leite e ovos</li>
          </ul>

          {/* QUARTO E BANHEIRO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/32173692/pexels-photo-32173692.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Quarto aconchegante com cama arrumada e decoração leve, representando o quarto da casa nova"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: paulo remorini / Pexels</p>
          </div>

          <h2 id="quarto-banheiro" className="img-above">Por cômodo: quarto e banheiro</h2>

          <p>
            Dois jogos de cama por cama fazem diferença. Quando um está na lavanderia, o outro está em uso.
            É o tipo de coisa que parece óbvio e que todo mundo esquece de comprar duplo.
          </p>

          <h3>Quarto</h3>
          <ul className="item-list">
            <li>Jogo de cama — 2 por cama (um em uso, um de reserva)</li>
            <li>Travesseiros — 2 por pessoa</li>
            <li>Coberta ou edredom</li>
            <li>Cabides — começa com 20, vai precisar de mais</li>
          </ul>

          <h3>Banheiro</h3>
          <ul className="item-list">
            <li>Toalha de banho — 2 por pessoa</li>
            <li>Toalha de rosto — 2 por pessoa</li>
            <li>Tapete de banheiro</li>
            <li>Shampoo, condicionador, sabonete, creme dental, desodorante</li>
            <li>Papel higiênico — compra bastante. Você vai usar.</li>
          </ul>

          <p>
            Um detalhe que quase todo mundo esquece: suporte de papel higiênico e de toalha.
            Parece bobagem. Deixa de parecer quando você está tentando secar as mãos em pé no banheiro no primeiro dia.
          </p>

          {/* SALA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/32922272/pexels-photo-32922272.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mulher organizando sala de estar minimalista com almofadas e decoração neutra"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Letícia Alvares / Pexels</p>
          </div>

          <h2 id="sala" className="img-above">Por cômodo: sala de estar</h2>

          <p>
            A sala é onde as pessoas mais gastam por impulso e menos precisam no começo.
            O sofá pode esperar uma semana. O que não pode esperar:
          </p>
          <ul className="item-list">
            <li><strong>Régua de extensão ou filtro de linha</strong> — a casa nova raramente tem tomadas suficientes onde você precisa</li>
            <li><strong>Lâmpadas</strong> — confere a voltagem e o tipo de bocal antes de comprar. Cada casa é diferente.</li>
            <li><strong>Cortinas ou blackout</strong> — pelo menos no quarto. A primeira manhã com sol direto na cara às 6h resolve qualquer dúvida sobre prioridade.</li>
          </ul>

          <p>
            Sala, decoração, quadros e itens de conforto: semana dois, não. Depois que você souber onde vai colocar cada coisa.
          </p>

          {/* LIMPEZA */}
          <h2 id="limpeza">Limpeza e lavanderia</h2>

          <p>
            Não é glamouroso, mas é o que mantém a casa funcionando nos primeiros dias.
            Uma casa recém-desocupada acumula poeira — e se ficou fechada por um tempo, talvez mais do que poeira.
          </p>
          <ul className="item-list">
            <li>Vassoura, rodo e pá de lixo</li>
            <li>Balde</li>
            <li>Pano de chão e pano de microfibra</li>
            <li>Sabão em pó ou cápsulas</li>
            <li>Desinfetante e água sanitária</li>
            <li>Detergente para louça</li>
            <li>Esponjas</li>
            <li>Saco de lixo — compra vários tamanhos</li>
            <li>Inseticida — especialmente se a casa ficou fechada por algum tempo</li>
          </ul>

          <p>
            O{' '}
            <a href="https://www.embrapa.br" target="_blank" rel="noopener">desperdício doméstico no Brasil</a>{' '}
            começa, em grande parte, na falta de organização de despensa e limpeza regular.
            Ter os produtos certos na casa nova desde o início cria o hábito antes que o caos instale.
          </p>

          {/* LISTA COPIAR */}
          <h2 id="lista-copiar">Lista completa pra copiar e colar</h2>
          <p>
            Clica em "Copiar lista", cola no WhatsApp ou no bloco de notas e risca o que já tem.
            O que restar é o que você compra.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista de compras — casa nova (60+ itens)</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Sobrevivência</h4>
                <ul>
                  <li>Lençol e fronha</li><li>Travesseiro</li><li>Toalha de banho</li>
                  <li>Papel higiênico</li><li>Sabonete + pasta</li><li>Panela + frigideira</li>
                  <li>Pratos + talheres</li><li>Detergente + saco de lixo</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Cozinha</h4>
                <ul>
                  <li>Panela grande e média</li><li>Chaleira</li><li>Tábua de corte</li>
                  <li>Facas</li><li>Concha e espátula</li><li>Escorredor</li>
                  <li>Pratos (6) + copos (6)</li><li>Talheres (6)</li><li>Abridor de lata</li>
                  <li>Liquidificador</li><li>Cafeteira</li><li>Micro-ondas</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Despensa</h4>
                <ul>
                  <li>Azeite ou óleo</li><li>Sal e pimenta</li><li>Alho e cebola</li>
                  <li>Arroz e feijão</li><li>Macarrão</li><li>Molho de tomate</li>
                  <li>Café e açúcar</li><li>Leite e ovos</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Quarto</h4>
                <ul>
                  <li>Jogo de cama (×2)</li><li>Travesseiros (×2)</li>
                  <li>Coberta ou edredom</li><li>Cabides (20+)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Banheiro</h4>
                <ul>
                  <li>Toalha de banho (×2)</li><li>Toalha de rosto (×2)</li>
                  <li>Tapete de banheiro</li><li>Shampoo + condicionador</li>
                  <li>Sabonete</li><li>Desodorante</li><li>Papel higiênico (estoque)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Limpeza</h4>
                <ul>
                  <li>Vassoura + rodo + pá</li><li>Balde</li><li>Pano de chão</li>
                  <li>Sabão em pó</li><li>Desinfetante</li><li>Água sanitária</li>
                  <li>Detergente louça</li><li>Esponjas</li><li>Sacos de lixo</li>
                  <li>Inseticida</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Geral</h4>
                <ul>
                  <li>Lâmpadas extras</li><li>Extensão elétrica</li>
                  <li>Cortinas ou blackout</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ETAPAS */}
          <h2 id="etapas">O que pode esperar: compras por etapas</h2>

          <p>
            A maior armadilha de quem está montando a casa nova é querer resolver tudo de uma vez.
            Não resolve — e a conta chega em dobro. Ir ao mercado "de cabeça" já sai{' '}
            <strong>27% mais caro</strong> do que com lista (Nielsen, 2022). Fazer a compra inteira da casa sem planejamento sai mais ainda.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Dia 1 — antes de dormir na casa</strong>
                <span>
                  Pacote de sobrevivência: cama, banho, higiene básica, cozinha mínima e limpeza essencial.
                  Nada mais.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>Semana 1 — completar o funcional</strong>
                <span>
                  Cozinha completa, roupa de cama extra, lâmpadas certas, extensões onde precisa.
                  Já dá pra cozinhar e viver sem depender de delivery.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Mês 1 — o que realmente vai usar</strong>
                <span>
                  Depois de morar alguns dias na casa, você descobre o que faz falta de verdade.
                  Eletrodomésticos de conforto, complementos de quarto e banheiro — compra quando souber que vai usar.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Depois — decoração e conforto</strong>
                <span>
                  Quadros, tapetes decorativos, itens especializados de cozinha, objetos de décor.
                  A casa revela o que precisa depois de um tempo. Não antes.
                </span>
              </div>
            </li>
          </ul>

          <p>
            Com a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras do Listinha</a>{' '}
            você organiza as ondas de compra por categorias, compartilha com quem está ajudando na mudança e não compra em dobro.
          </p>

          {/* QUANTO CUSTA */}
          <h2 id="quanto-custa">Quanto vai custar: estimativa por perfil</h2>

          <p>
            Depende do que você já tem, da qualidade escolhida e do tamanho da casa.
            As estimativas abaixo cobrem utensílios, roupa de cama, produtos de limpeza e despensa inicial — sem incluir móveis e eletrodomésticos principais (geladeira, fogão, máquina de lavar).
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Perfil</th>
                <th>Estimativa primeira compra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pessoa sozinha</td>
                <td>R$ 1.000–1.800</td>
              </tr>
              <tr>
                <td>Casal</td>
                <td>R$ 1.800–3.000</td>
              </tr>
              <tr>
                <td>Família com filhos</td>
                <td>R$ 2.500–4.500</td>
              </tr>
            </tbody>
          </table>

          <p>
            Para reduzir: começa com marcas básicas nos itens utilitários (panelas, panos de limpeza),
            compra embalagens maiores nos produtos de limpeza (mais barato por unidade) e deixa os itens
            de qualidade pra quando souber o que vai usar com frequência. A compra mensal de alimentos
            — depois que a casa estiver montada — fica entre{' '}
            <strong>R$ 1.200 e R$ 1.800 pra um casal</strong>{' '}
            (
              <a href="https://www.ibge.gov.br" target="_blank" rel="noopener">IBGE/FIPE, 2024</a>
            ).
            Com a{' '}
            <a href="/funcionalidades/despensa">despensa do Listinha</a>,
            você monitora o que está acabando antes de precisar — e evita comprar o que já tem.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre lista de compras para casa nova</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que comprar primeiro para a casa nova?</p>
              <p className="faq-a">
                Comece pelo pacote de sobrevivência:{' '}
                <strong>roupa de cama, toalhas, papel higiênico, sabonete, pasta de dente, uma panela, frigideira, pratos e talheres básicos, detergente e saco de lixo.</strong>{' '}
                São os itens que você vai precisar na primeira noite — antes de qualquer móvel ou decoração.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que não pode faltar na lista de compras para casa nova?</p>
              <p className="faq-a">
                A lista cobre quatro áreas: <strong>cozinha</strong> (utensílios, eletrodomésticos e despensa),{' '}
                <strong>quarto e banheiro</strong> (roupa de cama, toalhas e higiene),{' '}
                <strong>limpeza e lavanderia</strong> e <strong>itens gerais</strong> (lâmpadas, extensões, cortinas).
                Os três itens mais esquecidos na correria da mudança: papel higiênico, toalha de banho e abridor de lata.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto custa montar uma casa nova do zero?</p>
              <p className="faq-a">
                A compra inicial — utensílios, roupa de cama, limpeza e despensa — fica em torno de{' '}
                <strong>R$ 1.000–1.800 para uma pessoa</strong>, <strong>R$ 1.800–3.000 para um casal</strong> e{' '}
                <strong>R$ 2.500–4.500 para família com filhos</strong>. Essas estimativas não incluem móveis e
                eletrodomésticos principais como geladeira, fogão e máquina de lavar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como organizar as compras para casa nova em etapas?</p>
              <p className="faq-a">
                Divida em três ondas: <strong>Dia 1</strong> — itens de sobrevivência (cama, banho, cozinha mínima).{' '}
                <strong>Semana 1</strong> — completar cozinha, roupa de cama extra, lâmpadas e extensões.{' '}
                <strong>Mês 1</strong> — eletrodomésticos que faltam, complementos por cômodo.
                Decoração e itens de conforto ficam para depois que você souber o que a casa realmente pede.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como não esquecer nada na lista de compras da mudança?</p>
              <p className="faq-a">
                Organize a lista por cômodo — não por tipo de produto. Percorra mentalmente cada ambiente e liste o que vai
                precisar em cada um. Se mais de uma pessoa estiver comprando, use uma{' '}
                <a href="/funcionalidades/lista-de-compras">lista compartilhada em tempo real</a>{' '}
                para evitar duplicar itens ou esquecer categorias inteiras.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que pode esperar para depois na montagem da casa nova?</p>
              <p className="faq-a">
                Decoração, quadros, tapetes decorativos, utensílios de cozinha especializados (air fryer, batedeira, espremedor)
                e qualquer coisa que você não vai usar na primeira semana. Você descobre o que realmente faz falta depois
                de morar alguns dias na casa — não antes de entrar nela.
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
                Criador do Listinha. Já chegou em casa nova sem papel higiênico uma vez. Só precisou acontecer uma vez.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Casa nova, lista nova.<br />
              <em>Usa o Listinha.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você nunca mais vai descobrir que o azeite acabou na hora de cozinhar.
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
              <path d="M12 19V5M5 12l7 7-7 7" />
            </svg>
            Voltar ao topo
          </a>

        </article>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </a>
          <span className="footer-copy">© 2026 Listinha</span>
          <a href="/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
