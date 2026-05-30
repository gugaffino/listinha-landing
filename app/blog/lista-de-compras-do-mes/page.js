import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Lista de compras do mês: quantidades e como gastar menos',
  description: 'Lista de compras do mês com quantidades por perfil de família, itens essenciais por categoria e dicas práticas para não estourar o orçamento no supermercado.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/lista-de-compras-do-mes',
  },
  openGraph: {
    title: 'Lista de compras do mês: quantidades e como gastar menos',
    description: 'Lista de compras do mês com quantidades por perfil de família, itens essenciais por categoria e dicas práticas para não estourar o orçamento no supermercado.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/lista-de-compras-do-mes',
    images: [
      {
        url: 'https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mulher empurrando carrinho de compras em corredor de supermercado com frutas e verduras',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras do mês: quantidades e como gastar menos',
    description: 'Lista de compras do mês com quantidades por perfil de família, itens essenciais por categoria e dicas práticas para não estourar o orçamento no supermercado.',
    images: ['https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que não pode faltar numa lista de compras do mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os itens que não podem faltar são os de estoque (arroz, feijão, macarrão, óleo, açúcar, sal, café), proteínas (frango, ovos, carne), e os de limpeza e higiene (detergente, sabão em pó, papel higiênico). Esses grupos formam a base de qualquer compra mensal, independentemente do tamanho da família. O hortifruti e os laticínios entram em reposições semanais por não durarem o mês todo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto gasta uma família de 2 pessoas no supermercado por mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A compra mensal média de uma família de 2 pessoas fica entre R$ 1.200 e R$ 1.800, segundo dados FIPE/IBGE de 2024. O valor varia bastante dependendo dos hábitos alimentares, da região e de onde se compra. Quem planeja com lista e evita compras por impulso tende a ficar no limite inferior dessa faixa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto gasta uma família de 4 pessoas no supermercado por mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para uma família de 4 pessoas, o gasto mensal com supermercado costuma ficar entre R$ 2.400 e R$ 3.600 por mês, dependendo dos hábitos e da região. Esse valor inclui alimentos e produtos de limpeza e higiene. Com planejamento de cardápio e lista de compras, é possível reduzir em até 27% o gasto comparado a compras sem lista.',
      },
    },
    {
      '@type': 'Question',
      name: 'Com que frequência devo ir ao supermercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os brasileiros vão ao supermercado em média 2 a 3 vezes por semana, segundo a ABRAS (2023). O ideal é reduzir para 1 a 2 idas maiores por semana, usando a compra mensal para estoque e produtos de limpeza, e idas menores para repor hortifruti, laticínios e pão. Idas frequentes sem lista aumentam o gasto por impulso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre lista de compras semanal e lista mensal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lista semanal cobre o que você precisa para a semana — o cardápio de refeições e os perecíveis. A lista mensal cobre os itens de estoque e limpeza que duram mais tempo, com quantidades definidas. As duas funcionam juntas: a mensal garante que a despensa nunca vai falhar, e a semanal garante que o frescor está garantido.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como definir as quantidades na lista de compras do mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O ponto de partida é estimar o consumo mensal por pessoa. Para arroz, a média é cerca de 2 a 2,5 kg por pessoa por mês. Para feijão, 1 a 1,5 kg. Para frango, 1,5 a 2 kg. Para ovos, 1 dúzia por pessoa. Anote o que acabou antes do previsto durante o primeiro mês — três semanas de registro mostram o padrão real da sua casa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como não esquecer itens na lista de compras mensal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A forma mais eficaz é organizar a lista por categoria (estoque, proteínas, hortifruti, laticínios, limpeza, higiene) e revisar cada grupo antes de sair de casa. Acompanhar o que tem na despensa em tempo real — com um app como o Mise — elimina a necessidade de lembrar: quando um item está acabando, ele já aparece na lista automaticamente.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras do mês: quantidades e como gastar menos',
  description: 'Lista de compras do mês com quantidades por perfil de família, itens essenciais por categoria e dicas práticas para não estourar o orçamento no supermercado.',
  image: 'https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-30',
  dateModified: '2026-05-30',
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
    '@id': 'https://www.miseemcasa.com.br/blog/lista-de-compras-do-mes',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras do mês', item: 'https://www.miseemcasa.com.br/blog/lista-de-compras-do-mes' },
  ],
}

export default function ListaDeComprasDoMes() {
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
            <li className="breadcrumb-current" aria-current="page">Lista de compras do mês</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-30">30 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Como montar a lista de compras mensal sem voltar pro mercado na quarta-feira
          </h1>
          <p className="blog-desc">
            A lista semanal cobre o cardápio. A lista de compras do mês cobre o consumo — arroz, feijão, detergente, papel higiênico, tudo com quantidade definida. A diferença é que uma você lembra de fazer. A outra você sente falta quando não faz.
          </p>

          <div className="answer-box">
            <p>
              A <strong>lista de compras do mês</strong> é a versão planejada da lista semanal: em vez de listar só os itens, ela define quanto de cada coisa comprar para não precisar voltar ao mercado antes da hora.
              Funciona quando você estima o consumo por categoria — estoque, proteínas, hortifruti, laticínios, limpeza — ajustado ao número de pessoas em casa.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mulher empurrando carrinho de compras em corredor de supermercado com frutas e verduras"
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
              <li><a href="#lista-mensal-vs-semanal">Lista mensal vs. lista semanal</a></li>
              <li><a href="#por-categoria">Como organizar por categoria</a></li>
              <li><a href="#quantidades">Quantidades por tamanho de família</a></li>
              <li><a href="#o-que-nao-pode-faltar">O que não pode faltar</a></li>
              <li><a href="#orcamento">Como não estourar o orçamento</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* LISTA MENSAL VS SEMANAL */}
          <h2 id="lista-mensal-vs-semanal">Lista mensal e lista semanal não são a mesma coisa</h2>

          <p>
            A lista semanal resolve o cardápio. Você define o que vai comer, anota os ingredientes que faltam e vai ao mercado. Funciona bem — desde que você já saiba o que tem em casa.
          </p>
          <p>
            A lista de compras do mês resolve o estoque. Ela cobre os itens de consumo constante, com quantidade definida por período. Arroz, feijão, óleo, detergente, papel higiênico. Não é sobre o que você vai cozinhar essa semana — é sobre o que a casa consome o tempo todo.
          </p>
          <p>
            Quem vai ao mercado sem lista — e cerca de 62% dos brasileiros vão, segundo a Nielsen (2022) — costuma descobrir o que faltava na volta pra casa. Quem vai sem lista gasta, em média, 27% a mais por compra. A lista mensal não é sobre gastar menos num único dia. É sobre não precisar voltar na terça porque acabou o sal.
          </p>
          <p>
            As duas listas funcionam juntas. A mensal garante o estoque. A semanal garante o cardápio. Sem a mensal, você faz a semanal direito mas fica sem papel higiênico. Já aconteceu.
          </p>

          {/* POR CATEGORIA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6837789/pexels-photo-6837789.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Lista de compras escrita em papel com caneta — checklist de itens a comprar"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nataliya Vaitkevich / Pexels</p>
          </div>

          <h2 id="por-categoria" className="img-above">Como organizar a lista de compras do mês por categoria</h2>

          <p>
            Organizar por categoria tem dois benefícios diretos: você segue o corredor do supermercado sem voltar duas vezes ao mesmo lugar, e não esquece grupos inteiros de itens.
          </p>

          <h3>Estoque — compra uma vez por mês</h3>
          <ul>
            <li>Arroz, feijão, macarrão, fubá, farinha de trigo</li>
            <li>Óleo de soja ou girassol, azeite, vinagre</li>
            <li>Açúcar, sal, café, açúcar mascavo (se usa)</li>
            <li>Molho de tomate, extrato de tomate, caldo em cubo ou sachê</li>
            <li>Atum, sardinha em lata, milho e ervilha em lata</li>
            <li>Leite em pó, achocolatado (se usa)</li>
          </ul>
          <p>
            Esses itens formam a base da despensa. Compra uma vez e eles duram. Se você acompanha o que tem em casa com a{' '}
            <a href="/funcionalidades/despensa">despensa do Mise</a>, sabe exatamente o que está acabando antes de ir ao mercado. Não precisa abrir cada armário pra verificar.
          </p>

          <h3>Proteínas — compra mensal ou quinzenal</h3>
          <ul>
            <li>Frango inteiro, coxa, peito — escolha o que usa com mais frequência</li>
            <li>Carne bovina: acém, patinho, músculo ou o que entrar no cardápio</li>
            <li>Ovos (não congelam, mas duram até 3 semanas)</li>
            <li>Peixe fresco ou congelado, conforme o hábito</li>
            <li>Linguiça, presunto, atum — o que usa regularmente</li>
          </ul>
          <p>
            Carnes congelam bem. Dá pra comprar o mês inteiro de uma vez, porcionar em saquinhos e guardar no freezer. Ovos não congelam, mas duram bastante na geladeira e você vai precisar comprar de novo antes do fim do mês de qualquer jeito.
          </p>

          <h3>Hortifruti — compra semanal</h3>
          <ul>
            <li>Alho, cebola, batata, cenoura — esses duram mais e você compra em quantidade</li>
            <li>Tomate, pimentão, abobrinha — duram 1 a 2 semanas</li>
            <li>Verduras folhosas, frutas — compra semanal, não mensal</li>
          </ul>
          <p>
            Aqui não tem como fazer o mês inteiro numa ida. Alho, cebola e batata duram bem. O resto precisa de reposição semanal. Tente entrar no hortifruti sempre com um plano de refeições da semana — o{' '}
            <a href="/funcionalidades/cardapio-semanal">cardápio semanal</a> resolve exatamente isso.
          </p>

          <h3>Laticínios — compra semanal</h3>
          <ul>
            <li>Leite longa vida ou pasteurizado, iogurte, queijo, manteiga ou margarina</li>
          </ul>
          <p>
            Duram pouco. Entram na reposição semanal, não na compra mensal.
          </p>

          <h3>Limpeza e higiene — compra uma vez por mês</h3>
          <ul>
            <li>Detergente, sabão em pó ou líquido, amaciante</li>
            <li>Desinfetante, multiuso, esponja de aço, pano de chão</li>
            <li>Sabonete, shampoo, condicionador, pasta de dente</li>
            <li>Papel higiênico, papel-toalha</li>
          </ul>
          <p>
            Essa categoria é fácil de esquecer no meio de proteína e hortifruti. É também exatamente o grupo que faz você voltar ao mercado no meio da semana quando acaba. Papel higiênico não é item de urgência — é item de planejamento.
          </p>

          {/* QUANTIDADES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/27926903/pexels-photo-27926903.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Corredor de supermercado com frutas e verduras coloridas organizadas em display"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Markus Winkler / Pexels</p>
          </div>

          <h2 id="quantidades" className="img-above">Quantidades: quanto comprar por tamanho de família</h2>

          <p>
            Não existe quantidade certa universal. Depende de hábito, do que se cozinha e de quantas refeições a família faz em casa. Mas dá pra partir de referências e ajustar com o tempo.
          </p>

          <h3>Para 2 pessoas</h3>
          <ul>
            <li>Arroz: 4–5 kg por mês</li>
            <li>Feijão: 2–3 kg por mês</li>
            <li>Frango: 3–4 kg por mês</li>
            <li>Ovos: 2 dúzias por mês</li>
            <li>Óleo: 1 garrafa de 900 ml por mês</li>
            <li>Papel higiênico: 12 rolos por mês</li>
            <li>Sabão em pó: 1 kg por mês</li>
          </ul>
          <p>
            A compra mensal média de uma família de 2 pessoas fica entre R$ 1.200 e R$ 1.800 (FIPE/IBGE, 2024). Esse número inclui alimentos e produtos de limpeza e higiene. Varia bastante conforme os hábitos e onde se compra.
          </p>

          <h3>Para 4 pessoas</h3>
          <ul>
            <li>Arroz: 8–10 kg por mês</li>
            <li>Feijão: 4–5 kg por mês</li>
            <li>Frango: 6–8 kg por mês</li>
            <li>Ovos: 4 dúzias por mês</li>
            <li>Óleo: 2 garrafas por mês</li>
            <li>Papel higiênico: 24 rolos por mês</li>
            <li>Sabão em pó: 2 kg por mês</li>
          </ul>
          <p>
            A melhor forma de calibrar as quantidades é anotar o que acabou antes do previsto nos primeiros meses. Três semanas de registro já mostram o padrão real de consumo da casa. A estimativa acima é ponto de partida, não regra.
          </p>

          {/* O QUE NÃO PODE FALTAR */}
          <h2 id="o-que-nao-pode-faltar">O que não pode faltar na lista de compras do mês</h2>

          <p>
            Independente do tamanho da família ou dos hábitos alimentares, alguns itens devem entrar em qualquer lista mensal. São os que, quando acabam, afetam todas as refeições ao mesmo tempo.
          </p>
          <ul>
            <li><strong>Arroz e feijão</strong> — a base. Se faltou, não tem jantar fácil</li>
            <li><strong>Óleo</strong> — entra em quase tudo</li>
            <li><strong>Sal, açúcar, café</strong> — consumo constante e difícil de estimar quando vai acabar</li>
            <li><strong>Ovos</strong> — versáteis, baratos e resolvem qualquer refeição rápida</li>
            <li><strong>Alho e cebola</strong> — base de tempero, acabam rápido</li>
            <li><strong>Detergente e sabão em pó</strong> — limpeza básica</li>
            <li><strong>Papel higiênico</strong> — não precisa explicar</li>
          </ul>
          <p>
            Esses itens formam o núcleo da{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>.
            Se a sua lista mensal começa por eles e avança para o que é específico da sua rotina, você já elimina os espaços em branco que causam as idas extras ao mercado.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa conectada à lista de compras. <em>O Mise faz isso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* ORÇAMENTO */}
          <h2 id="orcamento">Como não estourar o orçamento no supermercado</h2>

          <p>
            Tem uma cena que todo mundo já viveu: você entra no supermercado sem lista, pega o carrinho e começa a andar pelos corredores. Tudo parece necessário. Você sai com três coisas que não precisava e sem o que precisava.
          </p>
          <p>
            Lista escrita antes de sair já resolve grande parte disso. Mas lista com o que tem em casa resolve melhor ainda — porque você não compra o que já tem. O Brasil desperdiça cerca de R$ 1.000 a R$ 1.400 por domicílio em comida jogada fora por ano,{' '}
            <a href="https://www.embrapa.br" target="_blank" rel="noopener">segundo a Embrapa (2023)</a>.
            Boa parte disso vem de comprar sem saber o que tinha na despensa.
          </p>
          <p>
            Algumas práticas que reduzem o gasto sem exigir sacrifício:
          </p>
          <ul>
            <li>Vai ao mercado depois de comer — nunca com fome</li>
            <li>Compara o preço por quilo, não por embalagem</li>
            <li>Compra pelo cardápio da semana — se sabe o que vai cozinhar, sabe o que precisa</li>
            <li>Evita os corredores que não estão na lista</li>
          </ul>
          <p>
            Conectar a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            com a{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            faz exatamente isso: quando você sabe o que está acabando em casa, compra o que falta — não o que acha que falta. Mais sobre como economizar está no guia de{' '}
            <a href="/blog/como-economizar-no-mercado">como economizar no mercado</a>.
          </p>
          <p>
            A lista de compras do mês não resolve tudo. Mas resolve a terça-feira sem papel higiênico.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre lista de compras do mês</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que não pode faltar numa lista de compras do mês?</p>
              <p className="faq-a">
                Os itens que não podem faltar são os de estoque (arroz, feijão, macarrão, óleo, açúcar, sal, café), proteínas (frango, ovos, carne) e os de limpeza e higiene (detergente, sabão em pó, papel higiênico). O hortifruti e os laticínios entram em reposições semanais por não durarem o mês todo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto gasta uma família de 2 pessoas no supermercado por mês?</p>
              <p className="faq-a">
                A compra mensal média de uma família de 2 pessoas fica entre R$ 1.200 e R$ 1.800 (FIPE/IBGE, 2024). O valor varia conforme os hábitos alimentares, a região e onde se compra. Quem planeja com lista e evita compras por impulso tende a ficar no limite inferior da faixa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto gasta uma família de 4 pessoas no supermercado por mês?</p>
              <p className="faq-a">
                Para uma família de 4 pessoas, o gasto mensal costuma ficar entre R$ 2.400 e R$ 3.600, dependendo dos hábitos e da região. Esse valor inclui alimentos e produtos de limpeza e higiene. Com planejamento de cardápio e lista de compras, é possível reduzir em até 27% o gasto comparado a compras sem lista.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Com que frequência devo ir ao supermercado?</p>
              <p className="faq-a">
                Os brasileiros vão ao supermercado em média 2 a 3 vezes por semana (ABRAS, 2023). O ideal é reduzir para 1 a 2 idas maiores por semana — usando a compra mensal para estoque e limpeza, e idas menores para repor hortifruti e laticínios. Idas frequentes sem lista aumentam o gasto por impulso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre lista de compras semanal e lista mensal?</p>
              <p className="faq-a">
                A lista semanal cobre o cardápio — o que você vai cozinhar e os perecíveis da semana. A lista mensal cobre os itens de estoque e limpeza com quantidades definidas. As duas funcionam juntas: a mensal garante que a despensa não vai falhar, e a semanal garante que o frescor está garantido.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como definir as quantidades na lista de compras do mês?</p>
              <p className="faq-a">
                O ponto de partida é estimar o consumo mensal por pessoa: arroz, cerca de 2 a 2,5 kg; feijão, 1 a 1,5 kg; frango, 1,5 a 2 kg; ovos, 1 dúzia. Anote o que acabou antes do previsto durante o primeiro mês — três semanas de registro mostram o padrão real da sua casa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como não esquecer itens na lista de compras mensal?</p>
              <p className="faq-a">
                Organize a lista por categoria (estoque, proteínas, hortifruti, laticínios, limpeza, higiene) e revise cada grupo antes de sair de casa. Acompanhar o que tem na despensa em tempo real — com um app como o Mise — elimina a necessidade de lembrar: quando um item está acabando, ele já aparece na lista.
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
                Criador do Mise. Voltou ao mercado na quinta por causa do papel higiênico. Na semana seguinte colocou na lista mensal e nunca mais precisou voltar no meio da semana por isso.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem na despensa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, cardápio semanal e lista de compras num só lugar.
              Você compra o que vai usar — e o papel higiênico nunca vai acabar numa terça-feira de novo.
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
