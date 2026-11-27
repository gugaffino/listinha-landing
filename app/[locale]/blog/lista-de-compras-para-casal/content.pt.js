import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Lista de compras para casal: guia com quantidades certas',
  description: 'Lista de compras para casal com quantidades certas pra 2 pessoas: o que comprar toda semana, o que comprar uma vez por mês, quanto custa e como dividir sem duplicar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casal',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casal',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
    },
  },
  openGraph: {
    title: 'Lista de compras para casal: guia com quantidades certas',
    description: 'Lista de compras para casal com quantidades certas pra 2 pessoas: o que comprar toda semana, o que comprar uma vez por mês, quanto custa e como dividir sem duplicar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
    images: [
      {
        url: 'https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Casal cozinhando junto em cozinha clara — mulher cortando vegetais enquanto homem cozinha no fogão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras para casal: guia com quantidades certas',
    description: 'Lista de compras para casal com quantidades certas pra 2 pessoas: o que comprar toda semana, o que comprar uma vez por mês, quanto custa e como dividir sem duplicar.',
    images: ['https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto um casal gasta de mercado por mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A compra mensal de uma casa de 2 pessoas fica entre R$ 1.200 e R$ 1.800, segundo levantamento FIPE/IBGE de 2024. O valor varia com o quanto vocês cozinham em casa, se compram carne toda semana e se seguem lista ou vão "de cabeça" — ir sem lista costuma custar cerca de 27% a mais por compra.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vale a pena fazer compra mensal ou semanal pra casal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As duas, cada uma com seu papel. Itens que não estragam — arroz, feijão, óleo, produtos de limpeza — compram uma vez por mês, em quantidade maior e com preço melhor. Hortifruti, pão, laticínios e carne fresca compram toda semana, porque em quantidade de 2 pessoas eles estragam antes de acabar se comprados em excesso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como dividir a lista de compras entre os dois sem duplicar item?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma lista compartilhada, atualizada por qualquer um dos dois assim que um item acaba, resolve a duplicação. O problema não é falta de comunicação — é lista que existe só na cabeça de uma pessoa. Assim que vira lista escrita e visível pros dois, cada um risca o que já resolveu e ninguém compra o mesmo detergente duas vezes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais quantidades comprar pra não desperdiçar sendo só 2 pessoas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regra prática: compre hortifruti e proteína fresca pra 4-5 dias, não pra semana inteira. Pacotes de "tamanho família" de itens perecíveis raramente compensam pra 2 pessoas — o que sobra estraga antes de ser usado. Para não perecíveis (arroz, feijão, macarrão), o tamanho família compensa, porque não tem prazo apertado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lista de compras pra casal é diferente de lista pra 1 pessoa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, principalmente em perecíveis. Uma pessoa sozinha compra em porção individual e corre risco real de desperdiçar qualquer coisa em pacote grande. Casal já consome o dobro, o que abre espaço pra comprar alguns itens em embalagem maior — mas ainda é longe da quantidade de uma família de 4, que é a referência mais comum nas listas prontas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como adaptar uma receita de 4 porções pra 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Divida por dois os ingredientes que têm medida (carne, arroz, legumes, líquido). Temperos como sal, alho e pimenta não dividem na mesma proporção — comece com um pouco mais da metade e ajuste no fim. Para receitas que rendem mais do que o casal come em uma refeição, vale fazer a receita inteira e congelar a sobra em porção individual.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que não pode faltar na lista de compras de um casal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arroz, feijão, óleo, ovos, uma proteína (frango, carne ou peixe), hortifruti da semana, café, pão, produtos de limpeza básicos e papel higiênico. É a base que sustenta o cardápio da semana mesmo em dias corridos, antes de pensar em qualquer receita mais elaborada.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras para casal: guia com quantidades certas',
  description: 'Lista de compras para casal com quantidades certas pra 2 pessoas: o que comprar toda semana, o que comprar uma vez por mês, quanto custa e como dividir sem duplicar.',
  image: 'https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras para casal', item: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal' },
  ],
}

export default function ListaCasalPt() {
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
            <li><a href="/pt/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Lista de compras para casal</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-21">21 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/pt/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista de compras pra casal: o tanto certo pra 2, sem sobrar nem faltar
          </h1>
          <p className="blog-desc">
            Toda lista pronta na internet é calibrada pra família de 4. Casal que segue à risca acaba com meio quilo de queijo mofando na geladeira ou sem arroz na quarta-feira. As quantidades certas pra 2 pessoas são outra conta — e aqui está ela.
          </p>

          <div className="answer-box">
            <p>
              Uma <strong>lista de compras para casal</strong> divide o que compra toda semana (hortifruti, carne fresca, pão, laticínios) do que compra uma vez por mês (arroz, feijão, óleo, limpeza).
              A regra prática é comprar perecíveis pra 4-5 dias, não pra semana inteira — em quantidade de 2 pessoas, pacote "tamanho família" estraga antes de acabar.
              Uma casa de 2 pessoas gasta entre <strong>R$ 1.200 e R$ 1.800 por mês</strong> com bom planejamento.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Casal cozinhando junto em cozinha clara — mulher cortando vegetais enquanto homem cozinha no fogão"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Amina Filkins / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#diferenca">Por que a lista de casal não é "família dividida por dois"</a></li>
              <li><a href="#semanal-mensal">Compra semanal vs. compra mensal</a></li>
              <li><a href="#quantidades">Quantidades certas por categoria</a></li>
              <li><a href="#quanto-custa">Quanto custa por mês</a></li>
              <li><a href="#dividir">Como dividir a lista sem duplicar</a></li>
              <li><a href="#desperdicio">Erros que fazem sobrar (e estragar) comida</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* DIFERENÇA */}
          <h2 id="diferenca">Por que a lista de casal não é "família dividida por dois"</h2>

          <p>
            A maioria das listas prontas na internet foi pensada pra família de 4 pessoas. Isso não é acidente — é a média usada em pesquisa de consumo. O problema é que casal não consome metade do que uma família de 4 consome, item por item.
          </p>
          <p>
            Um pacote de queijo de 500g dividido por 2 pessoas some rápido se vocês comem sanduíche toda manhã. O mesmo pacote, comprado achando que "é só pra dois, então compra menos", pode sobrar e mofar se o consumo real for menor do que parece.
          </p>
          <p>
            A questão nunca é dividir a quantidade da família por dois. É observar o que a sua casa consome de verdade, categoria por categoria — e isso muda conforme quem cozinha mais em casa, quem trabalha fora o dia todo e quantas refeições vocês realmente fazem juntos na semana.
          </p>
          <p>
            Casal que tenta usar lista de família de 4 sem ajustar acaba em um dos dois extremos: geladeira lotada de coisa que não dá tempo de comer, ou mercado extra na quarta-feira porque o arroz acabou antes do previsto.
          </p>

          {/* SEMANAL VS MENSAL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mulher de camisa rosa escrevendo em caderno sobre bancada de cozinha — montando a lista de compras"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Yaroslav Shuraev / Pexels</p>
          </div>

          <h2 id="semanal-mensal" className="img-above">Compra semanal vs. compra mensal</h2>

          <p>
            A separação mais útil não é por categoria de alimento — é por prazo de validade. Itens que aguentam semanas ou meses na despensa entram numa compra mensal maior. Itens que estragam em dias entram numa compra semanal menor, ajustada ao que vocês vão realmente cozinhar.
          </p>
          <p>
            <strong>Compra mensal (uma vez por mês, em quantidade maior):</strong> arroz, feijão, óleo, açúcar, café, macarrão, molho de tomate, produtos de limpeza, papel higiênico, itens de higiene. Não estragam, e comprar em quantidade maior costuma sair mais barato por unidade.
          </p>
          <p>
            <strong>Compra semanal (toda semana, em quantidade pequena):</strong> hortifruti, pão, laticínios, carne e peixe frescos, ovos. Comprados em excesso, são exatamente o que vira desperdício na geladeira até sexta-feira.
          </p>
          <p>
            Esse formato — uma compra grande de base mais reposições semanais de fresco — é o que a maioria dos casais que consegue manter orçamento sob controle já faz, mesmo sem chamar disso "sistema".
          </p>

          {/* QUANTIDADES */}
          <h2 id="quantidades">Quantidades certas por categoria</h2>

          <p>
            Números de referência pra 2 pessoas, pensados pra uma semana de consumo médio. Ajuste pra cima ou pra baixo conforme quantas refeições vocês realmente fazem em casa.
          </p>
          <ul className="item-list">
            <li><strong>Arroz e feijão:</strong> 1kg de cada dura cerca de 2-3 semanas pra 2 pessoas que almoçam em casa na maioria dos dias</li>
            <li><strong>Proteína (frango, carne, peixe):</strong> 1-1,2kg por semana, dividido em 3-4 refeições com proteína</li>
            <li><strong>Ovos:</strong> uma dúzia dura a semana se aparece no café da manhã algumas vezes</li>
            <li><strong>Hortifruti fresco:</strong> compre pra 4-5 dias, não pra 7 — folhas e verduras murcham antes disso</li>
            <li><strong>Pão:</strong> pacote pequeno ou padaria a cada 2-3 dias, se não tiver freezer disponível</li>
            <li><strong>Leite e laticínios:</strong> 2 litros de leite por semana é referência comum pra café e receitas do dia a dia</li>
            <li><strong>Produtos de limpeza:</strong> compre no mês — detergente, sabão em pó e desinfetante não estragam esperando</li>
          </ul>
          <p>
            Essas são referências, não regra fixa. O casal que faz academia e cozinha frango todo dia consome proteína diferente do casal que come fora três vezes por semana. A lista existe pra ser ajustada pela sua rotina, não o contrário.
          </p>

          {/* QUANTO CUSTA */}
          <h2 id="quanto-custa">Quanto custa por mês</h2>

          <p>
            A compra mensal de uma casa de 2 pessoas fica entre <strong>R$ 1.200 e R$ 1.800</strong>, segundo levantamento FIPE/IBGE de 2024. A variação depende de quanto vocês cozinham em casa versus pedem delivery, e se compram carne nobre ou cortes mais em conta.
          </p>
          <p>
            Um dado que pesa nessa conta: ir ao mercado sem lista custa em média <strong>27% a mais</strong> por compra do que ir com lista pronta. Em uma casa que gasta R$ 1.500 por mês, isso equivale a mais de R$ 400 por ano só de item comprado por impulso — 3 a 5 itens não planejados por ida ao mercado, segundo pesquisa de comportamento de compra. Separar a <a href="/pt/blog/lista-de-compras-mercado">lista por categoria</a> antes de sair de casa já corta boa parte disso.
          </p>
          <p>
            Comparar com delivery ajuda a colocar em perspectiva: um ticket médio de jantar por aplicativo fica entre R$ 55 e R$ 90. Cozinhar em casa sai, em média, 65% mais barato que pedir — e a diferença mensal entre um casal que cozinha e um que pede com frequência costuma superar o valor da compra do mês inteiro.
          </p>

          {/* DIVIDIR */}
          <h2 id="dividir">Como dividir a lista sem duplicar</h2>

          <p>
            O detergente comprado duas vezes na mesma semana não é falha de comunicação. É lista que existe só na cabeça de uma pessoa, enquanto a outra também percebeu que faltava e resolveu sozinha.
          </p>
          <p>
            A solução não é combinar quem compra o quê — é ter uma lista visível pros dois, que qualquer um atualiza assim que percebe que algo acabou. Quando o item já está riscado ou marcado como resolvido, a segunda pessoa não compra de novo.
          </p>
          <p>
            Funciona melhor quando a lista mora em algum lugar que os dois acessam, não no bloco de notas de um celular só. É exatamente esse o ponto de uma lista compartilhada: o alho que faltou na terça aparece pros dois, não só pra quem lembrou de anotar.
          </p>
          <p>
            Vale combinar também quem vai ao mercado em qual semana, ou dividir por tipo de compra — um cuida do hortifruti semanal, o outro da reposição mensal, seguindo a mesma lógica de uma <a href="/pt/blog/lista-de-compras-do-mes">compra mensal</a> bem planejada. O que importa é que a decisão de "quem compra o quê" não recaia sempre na mesma pessoa por padrão.
          </p>

          {/* DESPERDÍCIO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4124939/pexels-photo-4124939.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Corredor de supermercado colorido com carrinho de compras — compra do mês em andamento"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Christian Naccarato / Pexels</p>
          </div>

          <h2 id="desperdicio" className="img-above">Erros que fazem sobrar (e estragar) comida</h2>

          <p>
            O Brasil desperdiça cerca de 46 milhões de toneladas de alimento por ano, e um terço disso acontece dentro de casa, não na cadeia de produção. Pra um casal, o desperdício doméstico médio fica entre R$ 1.000 e R$ 1.400 por ano — o preço de uma viagem de fim de semana, jogado fora aos poucos.
          </p>
          <p>
            <strong>Erro 1: comprar tamanho família achando que rende mais barato.</strong> Rende mais barato por grama, não pelo que efetivamente vira comida no prato. Se metade estraga antes de ser usado, o preço por grama deixou de importar.
          </p>
          <p>
            <strong>Erro 2: fazer a compra da semana no domingo pra render até o sábado seguinte.</strong> Hortifruti pra 2 pessoas raramente aguenta 7 dias com qualidade. Uma reposição no meio da semana, mesmo pequena, evita que a última folha de alface vire caldo.
          </p>
          <p>
            <strong>Erro 3: comprar sem saber o que já tem na despensa.</strong> É a causa mais comum de comprar duplicado — ou de descobrir, três semanas depois, um pacote de macarrão escondido atrás do óleo. Checar a despensa antes de sair de casa resolve isso em menos de um minuto.
          </p>
          <p>
            <strong>Erro 4: não planejar o cardápio antes da compra.</strong> Comprar sem saber o que vai cozinhar gera ingrediente avulso que nunca vira receita. Um <a href="/pt/blog/cardapio-semanal-simples-caseiro">cardápio semanal simples</a> resolve isso antes de entrar no mercado, não depois.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre lista de compras para casal</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quanto um casal gasta de mercado por mês?</p>
              <p className="faq-a">
                Entre R$ 1.200 e R$ 1.800, segundo FIPE/IBGE 2024. O valor varia com o quanto vocês cozinham em casa e se seguem lista — ir sem lista costuma custar cerca de 27% a mais por compra.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Vale a pena fazer compra mensal ou semanal pra casal?</p>
              <p className="faq-a">
                As duas. Não perecíveis (arroz, feijão, limpeza) compram uma vez por mês, em quantidade maior. Hortifruti, pão e carne fresca compram toda semana, porque em quantidade de 2 pessoas estragam antes de acabar se comprados em excesso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como dividir a lista de compras entre os dois sem duplicar item?</p>
              <p className="faq-a">
                Uma lista compartilhada, atualizada por qualquer um assim que um item acaba. O problema raramente é falta de comunicação — é lista que existe só na cabeça de uma pessoa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quais quantidades comprar pra não desperdiçar sendo só 2 pessoas?</p>
              <p className="faq-a">
                Compre hortifruti e proteína fresca pra 4-5 dias, não pra semana inteira. Pacotes "tamanho família" de perecíveis raramente compensam pra 2 pessoas. Para não perecíveis, o tamanho família compensa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Lista de compras pra casal é diferente de lista pra 1 pessoa?</p>
              <p className="faq-a">
                Sim, principalmente em perecíveis. Casal consome o dobro de uma pessoa sozinha, o que abre espaço pra embalagens um pouco maiores — mas ainda longe da quantidade de uma família de 4, referência mais comum nas listas prontas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como adaptar uma receita de 4 porções pra 2?</p>
              <p className="faq-a">
                Divida por dois os ingredientes com medida (carne, arroz, líquido). Temperos como sal e alho não dividem na mesma proporção — comece com um pouco mais da metade e ajuste no fim.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que não pode faltar na lista de compras de um casal?</p>
              <p className="faq-a">
                Arroz, feijão, óleo, ovos, uma proteína, hortifruti da semana, café, pão, produtos de limpeza básicos e papel higiênico. É a base que sustenta a semana antes de qualquer receita mais elaborada.
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
            <p className="blog-cta-title">Lista dos dois, num lugar só. Ninguém compra detergente em dobro de novo.</p>
            <p className="blog-cta-desc">
              Com o Mise, a <a href="/pt/funcionalidades/lista-de-compras">lista de compras</a> é compartilhada e a{' '}
              <a href="/pt/funcionalidades/despensa">despensa</a> mostra o que já tem em casa antes de sair pro mercado.
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
            <a href="/pt/blog" className="footer-link">Blog</a>
            <a href="/pt/funcionalidades" className="footer-link">Funcionalidades</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
