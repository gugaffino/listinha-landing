import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Lista de compras mercado: como organizar e gastar menos',
  description: 'Lista de compras para o mercado organizada por categoria. Hortifruti, carnes, laticínios, limpeza: guia completo com dicas para gastar menos no supermercado.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/lista-de-compras-mercado',
  },
  openGraph: {
    title: 'Lista de compras mercado: como organizar e gastar menos',
    description: 'Lista de compras para o mercado organizada por categoria. Hortifruti, carnes, laticínios, limpeza: guia completo com dicas para gastar menos no supermercado.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/lista-de-compras-mercado',
    images: [
      {
        url: 'https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Família fazendo compras no supermercado com lista de compras na mão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras mercado: como organizar e gastar menos',
    description: 'Lista de compras para o mercado organizada por categoria. Hortifruti, carnes, laticínios, limpeza: guia completo com dicas para gastar menos no supermercado.',
    images: ['https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como organizar uma lista de compras para o mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A forma mais eficiente é dividir por categoria: hortifruti, carnes e proteínas, laticínios, mercearia seca, limpeza e higiene. Dentro de cada categoria, liste os itens que faltam na despensa. Antes de montar a lista, cheque geladeira, armários e despensa para evitar comprar o que já tem.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que não pode faltar em uma lista de compras de supermercado completa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os grupos essenciais são: hortifruti (legumes, verduras e frutas da semana), carnes e proteínas (frango, carne moída, ovos), laticínios (leite, queijo, manteiga), mercearia seca (arroz, feijão, macarrão, óleo, temperos) e limpeza (sabão, detergente, papel higiênico). Adapte as quantidades ao tamanho da família e à frequência de mercado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como economizar com a lista de compras de mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lista em si já economiza — compras com lista custam cerca de 27% menos do que compras por impulso. Dentro do mercado: não vá com fome, compare preço por peso (não por embalagem), prefira marcas próprias em itens básicos e só aproveite promoções de coisas que você ia comprar mesmo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a melhor ordem para a lista de compras no supermercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Siga o layout do mercado: hortifruti primeiro (geralmente na entrada), depois carnes e frios, laticínios, mercearia seca e limpeza por último. Congelados ficam sempre no final — independente de onde estejam — para não ficarem fora da refrigeração enquanto você termina o restante.',
      },
    },
    {
      '@type': 'Question',
      name: 'Com que frequência devo fazer a lista de compras do mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do tamanho da família e do espaço de armazenamento. Brasileiros vão ao mercado em média 2 a 3 vezes por semana, segundo a ABRAS (2023). O mais eficiente costuma ser uma compra semanal completa — com lista organizada — e uma ou duas paradas rápidas para hortifruti fresco no meio da semana.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto colocar de cada item na lista de compras do mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma referência para 2 a 3 pessoas por semana: 1 kg de carne moída ou frango, 1 dúzia de ovos, 1 kg de arroz, 500 g de feijão, 1 litro de leite por dia de consumo. Para hortifruti, planeje pelo cardápio da semana — compre o que vai usar, não o que parece saudável comprar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lista de compras no papel ou no celular — qual é melhor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Papel funciona bem para quem vai sempre no mesmo mercado e conhece o layout. Celular tem a vantagem de nunca ficar esquecido em casa, pode ser compartilhado com outra pessoa em tempo real e é fácil de atualizar ao longo da semana. Um app específico de lista de compras é ainda melhor porque evita procurar o que foi pedido em grupos de WhatsApp ou em notas espalhadas.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras mercado: como organizar e gastar menos',
  description: 'Lista de compras para o mercado organizada por categoria. Hortifruti, carnes, laticínios, limpeza: guia completo com dicas para gastar menos no supermercado.',
  image: 'https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-14',
  dateModified: '2026-06-14',
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
    '@id': 'https://www.miseemcasa.com.br/blog/lista-de-compras-mercado',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras mercado', item: 'https://www.miseemcasa.com.br/blog/lista-de-compras-mercado' },
  ],
}

export default function ListaDeComprasMercado() {
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
            <li className="breadcrumb-current" aria-current="page">Lista de compras mercado</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-14">14 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Como organizar a lista de compras do mercado e não esquecer nada
          </h1>
          <p className="blog-desc">
            Lista por categoria, o que checar antes de sair de casa e cinco hábitos para não chegar no caixa com o dobro do que planejava.
          </p>

          <div className="answer-box">
            <p>
              A <strong>lista de compras para o mercado</strong> funciona melhor quando organizada por categoria — hortifruti, carnes, laticínios, mercearia, limpeza — e montada antes de sair, com base no que falta na despensa. Compras sem lista custam em média 27% a mais e geram 3 a 5 itens não planejados por visita, segundo estimativas de comportamento de consumo.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Família fazendo compras no supermercado com lista de compras na mão"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Gustavo Fring / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#por-que-a-lista">Por que a lista muda a conta do mercado</a></li>
              <li><a href="#antes-de-sair">Antes de montar: cheque o que tem em casa</a></li>
              <li><a href="#grupos-essenciais">Os grupos essenciais da lista</a></li>
              <li><a href="#por-corredor">Organizar por corredor economiza tempo</a></li>
              <li><a href="#dicas-caixa">Cinco hábitos para não extrapolar no caixa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* POR QUE A LISTA */}
          <h2 id="por-que-a-lista">Por que a lista de compras muda a conta do mercado</h2>

          <p>
            Cerca de 62% dos brasileiros fazem mercado sem lista. Quem vai sem lista compra em média 27% a mais. Traz também 3 a 5 itens não planejados por visita — não porque quer, mas porque o mercado foi projetado para isso acontecer.
          </p>
          <p>
            Ir ao mercado sem lista não é exatamente otimismo. É a razão do biscoito que entrou no carrinho sem estar no plano. O papel higiênico que ficou para a próxima semana pela terceira vez.
          </p>
          <p>
            A lista organizada resolve dois problemas de uma vez: evita esquecer o que precisa e evita comprar o que não precisa. A eficiência de uma lista de compras de supermercado depende de como ela está estruturada — não só do que está nela.
          </p>

          {/* ANTES DE SAIR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8422685/pexels-photo-8422685.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mulher olhando para lista de compras enquanto faz compras no mercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kampus Production / Pexels</p>
          </div>

          <h2 id="antes-de-sair" className="img-above">Antes de montar a lista: cheque o que tem em casa</h2>

          <p>
            A lista de compras do mercado começa em casa, não no app ou no papel. Antes de escrever qualquer item, passe pela geladeira, despensa e armários. Você vai descobrir que tem três latas de extrato de tomate, mas está sem óleo. Ou que o feijão acabou na terça — e você só vai descobrir isso no sábado, na frente do fogão.
          </p>
          <p>
            Essa inspeção rápida tem dois efeitos práticos. Primeiro, evita comprar o que já tem — um problema mais comum do que parece em despensas desorganizadas. Segundo, revela o que está acabando antes de acabar. Dá tempo de repor sem correria.
          </p>
          <p>
            Quem mantém uma{' '}
            <a href="/funcionalidades/despensa">despensa atualizada no app</a>{' '}
            tem isso resolvido automaticamente. O sistema sabe o que tem, o que está acabando e o que sumiu. A{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            parte dali, não do zero.
          </p>

          {/* GRUPOS ESSENCIAIS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/28670064/pexels-photo-28670064.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Corredor de hortifruti com verduras e legumes coloridos dispostos em supermercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: novianadss / Pexels</p>
          </div>

          <h2 id="grupos-essenciais" className="img-above">Os grupos essenciais para a lista de compras do mercado</h2>

          <p>
            Uma lista de compras supermercado bem estruturada divide os itens em cinco grupos. Cada grupo corresponde, em geral, a uma área do mercado. Isso reduz o tempo gasto andando entre corredores e a chance de esquecer algo dentro de cada categoria.
          </p>

          <h3>Hortifruti</h3>
          <ul className="item-list">
            <li>Alho e cebola — base de todo tempero, sempre na lista</li>
            <li>Tomate e alguma folhosa da semana (couve, alface ou rúcula)</li>
            <li>Legumes conforme o cardápio: abobrinha, cenoura ou batata</li>
            <li>Frutas de rotina: banana, laranja e maçã</li>
            <li>Fruta da estação — é quando está mais barata e com melhor sabor</li>
          </ul>

          <h3>Carnes e proteínas</h3>
          <ul className="item-list">
            <li>Frango ou carne moída para as refeições principais da semana</li>
            <li>Ovos — duram, são versáteis e saem mais baratos que qualquer proteína</li>
            <li>Peixe, se fizer parte da sua rotina de cozinha</li>
            <li>Carne do final de semana, separada do planejamento semanal</li>
          </ul>

          <h3>Laticínios e frios</h3>
          <ul className="item-list">
            <li>Leite ou bebida vegetal</li>
            <li>Queijo para o dia a dia (mussarela ou prato)</li>
            <li>Manteiga ou requeijão</li>
            <li>Iogurte natural, se fizer parte do café da manhã</li>
          </ul>

          <h3>Mercearia seca</h3>
          <ul className="item-list">
            <li>Arroz e feijão — cheque quanto tem antes de comprar mais</li>
            <li>Macarrão e alguma massa seca como fundo de armário</li>
            <li>Óleo de cozinha, azeite e vinagre</li>
            <li>Temperos que estão acabando: sal, pimenta, colorau, alho em pó</li>
            <li>Enlatados de emergência: sardinha, extrato de tomate, milho</li>
          </ul>

          <h3>Limpeza e higiene</h3>
          <ul className="item-list">
            <li>Papel higiênico — sempre que estiver na metade do estoque</li>
            <li>Sabão em pó ou detergente para roupas</li>
            <li>Detergente de cozinha e esponja</li>
            <li>Multiuso para cozinha e banheiro</li>
          </ul>

          <p>
            Essa divisão em grupos é a mesma que a{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            usa como base. A diferença aqui é o foco na sequência — o que você pega primeiro e o que deixa para o final.
          </p>

          <div className="blog-inline-cta">
            <p>Lista conectada à despensa — sem ter que lembrar o que acabou. <em>O Mise faz isso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* POR CORREDOR */}
          <h2 id="por-corredor">Organizar por corredor economiza tempo dentro do mercado</h2>

          <p>
            A maioria dos supermercados segue um layout parecido: hortifruti na entrada, frios e laticínios nas laterais ou no fundo, mercearia seca no meio e limpeza perto da saída. Quando a lista de compras de mercado segue essa ordem, você faz o percurso uma vez e sai. Sem voltar no corredor do arroz depois de já ter passado pelo caixa.
          </p>
          <p>
            A diferença entre uma lista aleatória e uma lista organizada por corredor não é só eficiência. É disciplina. Quando você começa pelo hortifruti com a lista na mão, não tem como passar pelo corredor de salgadinhos "por acidente". Cada desvio de rota tem custo.
          </p>
          <p>
            Uma regra prática independente de mercado: congelados e sorvetes ficam sempre por último, independente de onde estejam na loja. Itens que precisam de refrigeração entram no carrinho no final — especialmente quando a volta para casa for longa.
          </p>

          {/* DICAS CAIXA */}
          <h2 id="dicas-caixa">Cinco hábitos para não extrapolar no caixa</h2>

          <p>
            A lista resolve a primeira metade do problema. A segunda metade acontece dentro do mercado.
          </p>

          <ol className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Não vá com fome</strong>
                <span>Parece óbvio. Mesmo assim, metade dos itens não planejados que entram no carrinho têm cheiro e sabor. Faça mercado depois de comer — qualquer refeição resolve.</span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Compare preço por peso, não por embalagem</strong>
                <span>A embalagem maior nem sempre é mais barata por grama. Quando os preços são parecidos, a maior costuma sair melhor — mas confira antes de colocar no carrinho.</span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Marcas próprias em básicos de mercearia e limpeza</strong>
                <span>Em arroz, feijão, sal, açúcar e produtos de limpeza, a diferença de qualidade entre marca própria e marca premium costuma ser pequena. O preço não é.</span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">4</div>
              <div className="tip-body">
                <strong>Promoção só vale se você ia comprar de qualquer forma</strong>
                <span>Três caixas de biscoito pela metade do preço é boa oferta se você come biscoito. Se não come, é gasto duplo com algo que vai perder a validade antes de ser usado.</span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">5</div>
              <div className="tip-body">
                <strong>Cheque a lista antes de ir para a fila do caixa</strong>
                <span>Sabe aquele momento em que você já chegou na fila e lembra do amaciante? É mais fácil checar a lista antes de fechar o carrinho do que depois.</span>
              </div>
            </li>
          </ol>

          <p>
            Uma lista de compras completa de supermercado não é garantia de cozinha organizada. É o ponto de partida. O resto vem do{' '}
            <a href="/funcionalidades/cardapio-semanal">cardápio da semana</a>
            {' '}— se você sabe o que vai cozinhar, sabe o que precisa comprar. A lista é a consequência, não a causa.
          </p>

          <p>
            A lista não te faz cozinhar melhor. Só garante que o feijão vai estar lá quando você precisar.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre lista de compras mercado</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Como organizar uma lista de compras para o mercado?</p>
              <p className="faq-a">
                Divida por categoria: hortifruti, carnes, laticínios, mercearia seca, limpeza e higiene. Liste os itens que faltam na despensa antes de sair. A organização por categoria ajuda a seguir o layout do supermercado e reduz o zigue-zague entre corredores.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que não pode faltar em uma lista de compras de supermercado completa?</p>
              <p className="faq-a">
                Os grupos essenciais são: hortifruti (legumes, verduras e frutas da semana), carnes e proteínas (frango, carne moída, ovos), laticínios (leite, queijo, manteiga), mercearia seca (arroz, feijão, macarrão, óleo, temperos) e limpeza (sabão, detergente, papel higiênico). Adapte as quantidades ao tamanho da família.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como economizar com a lista de compras de mercado?</p>
              <p className="faq-a">
                A lista em si já economiza — compras com lista custam cerca de 27% menos. Dentro do mercado: não vá com fome, compare preço por peso, prefira marcas próprias em básicos e só aproveite promoções de coisas que você ia comprar mesmo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a melhor ordem para a lista de compras no supermercado?</p>
              <p className="faq-a">
                Siga o layout do mercado: hortifruti primeiro (entrada), depois carnes e frios, laticínios, mercearia seca e limpeza por último. Congelados sempre no final, independente de onde estejam, para não derreter no carrinho.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Com que frequência devo fazer a lista de compras?</p>
              <p className="faq-a">
                Depende da família e do espaço de armazenamento. Brasileiros vão ao mercado 2 a 3 vezes por semana em média, segundo a ABRAS (2023). O mais eficiente costuma ser uma compra semanal completa e uma ou duas paradas rápidas para hortifruti fresco no meio da semana.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto colocar de cada item na lista de compras do mês?</p>
              <p className="faq-a">
                Uma referência para 2 a 3 pessoas por semana: 1 kg de carne ou frango, 1 dúzia de ovos, 1 kg de arroz, 500 g de feijão, 1 litro de leite por dia de consumo. Para hortifruti, planeje pelo cardápio da semana — compre o que vai usar, não o que parece saudável comprar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Lista de compras no papel ou no celular — qual é melhor?</p>
              <p className="faq-a">
                Papel funciona bem para quem vai sempre no mesmo mercado. Celular nunca fica esquecido em casa, pode ser compartilhado em tempo real e é fácil de atualizar ao longo da semana. Um app específico de lista é ainda melhor: evita procurar o que foi pedido em grupos de WhatsApp ou notas espalhadas.
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
                Criador do Mise. Foi ao mercado buscar 3 coisas e voltou com 11. O papel higiênico estava entre as 3 originais. Os outros 8, não.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              A lista pronta antes de sair de casa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, cardápio semanal e lista de compras num só lugar.
              Você sabe o que tem, planeja o que vai cozinhar e a lista se monta sozinha.
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
