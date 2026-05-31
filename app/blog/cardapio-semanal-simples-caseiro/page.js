import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Cardápio semanal simples caseiro: como montar do zero',
  description: 'Cardápio semanal simples caseiro: exemplo prático de 7 dias com almoço e jantar, como transformar em lista de compras e dicas pra manter funcionando toda semana.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/cardapio-semanal-simples-caseiro',
  },
  openGraph: {
    title: 'Cardápio semanal simples caseiro: como montar do zero',
    description: 'Cardápio semanal simples caseiro: exemplo prático de 7 dias com almoço e jantar, como transformar em lista de compras e dicas pra manter funcionando toda semana.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/cardapio-semanal-simples-caseiro',
    images: [
      {
        url: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Família reunida cozinhando juntos na cozinha de casa — cena de planejamento e preparo de refeições',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardápio semanal simples caseiro: como montar do zero',
    description: 'Cardápio semanal simples caseiro: exemplo prático de 7 dias com almoço e jantar, como transformar em lista de compras e dicas pra manter funcionando toda semana.',
    images: ['https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é cardápio semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cardápio semanal é a lista das refeições planejadas para os sete dias da semana — normalmente almoços e jantares, às vezes com café da manhã. Ele serve como guia para saber o que cozinhar a cada dia, evitar o dilema "o que tem pra comer hoje?" e fazer um mercado mais eficiente, comprando só o que vai usar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como montar um cardápio semanal simples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para montar um cardápio semanal simples: 1) Liste de 5 a 7 refeições que você já sabe fazer; 2) Distribua pelos dias da semana levando em conta o tempo disponível — pratos rápidos nos dias mais corridos; 3) Verifique o que já tem na despensa antes de fazer o mercado; 4) Monte a lista de compras a partir do cardápio. Não precisa planejar 100% dos dias de início — comece com 3 dias e expanda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é um exemplo de cardápio semanal simples caseiro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exemplo de cardápio semanal simples para a semana: Segunda — frango grelhado com arroz e salada; Terça — macarrão ao sugo com ovo mexido; Quarta — feijão temperado com arroz e legumes refogados; Quinta — omelete com batata cozida; Sexta — peixe assado com arroz e cenoura. Repetir proteínas ao longo da semana reduz o número de ingredientes na lista de compras.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como transformar o cardápio semanal em lista de compras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para transformar o cardápio em lista de compras: passe por cada refeição planejada, anote os ingredientes necessários e as quantidades. Depois, cruce com o que já tem na despensa e remova o que não precisa comprar. O resultado é uma lista precisa, sem itens esquecidos e sem compras desnecessárias. Um app de lista conectado à despensa faz esse processo automaticamente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cardápio semanal funciona pra quem mora sozinho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Funciona bem e tem uma vantagem extra: você pode planejar preparações em maior quantidade no domingo e dividir pelos dias da semana. Uma panela de feijão, arroz cozido e proteína preparada em porções maiores eliminam a necessidade de cozinhar todo dia. O planejamento reduz desperdício, que costuma ser maior para quem mora sozinho e compra por impulso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas refeições preciso planejar no cardápio semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não precisa planejar todas as refeições de todos os dias para começar. Planejar só o almoço ou só o jantar da semana já gera impacto real na lista de compras e no desperdício. Começa com 3 ou 4 dias e vai adicionando conforme o ritmo fica natural. Planejar 100% já de início cria pressão desnecessária e aumenta a chance de abandonar.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cardápio semanal simples caseiro: como montar do zero',
  description: 'Cardápio semanal simples caseiro: exemplo prático de 7 dias com almoço e jantar, como transformar em lista de compras e dicas pra manter funcionando toda semana.',
  image: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
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
    '@id': 'https://www.miseemcasa.com.br/blog/cardapio-semanal-simples-caseiro',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cardápio semanal simples caseiro', item: 'https://www.miseemcasa.com.br/blog/cardapio-semanal-simples-caseiro' },
  ],
}

export default function CardapioSemanalSimplesCaseiro() {
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
            <li className="breadcrumb-current" aria-current="page">Cardápio semanal simples caseiro</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-31">31 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cardápio semanal: como planejar sete dias de refeições sem enlouquecer
          </h1>
          <p className="blog-desc">
            Montar um cardápio semanal simples não exige planilha, chef ou domingo inteiro. Precisa de 20 minutos, uma lista das receitas que você já sabe fazer e disposição pra parar de abrir a geladeira sem saber o que cozinhar.
          </p>

          <div className="answer-box">
            <p>
              <strong>Cardápio semanal</strong> é a lista das refeições planejadas para os sete dias — normalmente almoços e jantares.
              Ele resolve o "o que tem pra comer hoje?" antes que a pergunta apareça,
              torna a lista de compras mais precisa e reduz o desperdício de alimentos.
              Não precisa ser perfeito: planejar metade da semana já faz diferença.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Família reunida cozinhando juntos na cozinha de casa — cena de planejamento e preparo de refeições"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: cottonbro studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#por-que">Por que montar um cardápio semanal</a></li>
              <li><a href="#como-montar">Como montar: passo a passo</a></li>
              <li><a href="#exemplo">Exemplo de cardápio semanal simples</a></li>
              <li><a href="#lista-de-compras">Como transformar em lista de compras</a></li>
              <li><a href="#quando-nao-segue">Quando o plano não segue o roteiro</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          <p>
            Quarta-feira, seis da tarde, geladeira aberta. Tem meia cebola, dois ovos, um pote de iogurte e alguma coisa no fundo que pode ser carne ou pode ser sobra de semana passada. Isso não é cozinhar — é arqueologia.
          </p>
          <p>
            O cardápio semanal existe pra evitar exatamente esse momento. Não porque você vai cozinhar prato perfeito todo dia, mas porque sem um plano mínimo cada refeição vira uma decisão nova. E decidir o que comer quando você já está com fome é a pior hora pra decidir.
          </p>
          <p>
            Segundo pesquisa da Nielsen (2022), apenas 38% dos brasileiros fazem lista de compras regularmente — o que explica em parte por que as compras sem planejamento custam em média 27% a mais. O cardápio semanal é o passo anterior à lista: sem ele, a lista também fica incompleta.
          </p>

          {/* POR QUE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mesa posta com refeição caseira equilibrada — arroz, legumes e proteína em pratos coloridos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="por-que" className="img-above">Por que montar um cardápio semanal faz diferença</h2>

          <p>
            A diferença principal não é a alimentação ficar mais saudável — é parar de gastar energia mental toda hora decidindo o que comer. Cada "o que a gente vai almoçar hoje?" resolvido de antemão é uma decisão a menos no dia.
          </p>
          <p>
            No mercado, o efeito é direto. Quem vai às compras com um cardápio definido sabe exatamente quais ingredientes precisa — e não compra frango quando a receita da semana pede carne moída. Pesquisas de comportamento de compra estimam que compras sem lista custam em média 27% a mais do que compras planejadas. O cardápio é o que torna a lista realmente precisa.
          </p>
          <p>
            Para o desperdício, o impacto é ainda mais claro. O Brasil desperdiça cerca de 46 milhões de toneladas de alimentos por ano (Embrapa, 2023), e ~33% desse desperdício acontece nos domicílios. A causa principal: compra de itens sem planejamento de uso. Quando você sabe que vai usar a abobrinha na quinta-feira, ela não fica esquecida na gaveta da geladeira até apodrecer.
          </p>
          <p>
            Além disso, o cardápio semanal torna as idas ao mercado menos frequentes. A média brasileira é de 2 a 3 visitas por semana (ABRAS, 2023) — boa parte delas pra buscar um ingrediente esquecido ou porque não havia plano. Com um cardápio claro e uma{' '}
            <a href="/blog/lista-de-compras-do-mes">lista de compras bem feita</a>,
            {' '}uma ida semanal é suficiente.
          </p>

          {/* COMO MONTAR */}
          <h2 id="como-montar">Como montar o cardápio semanal: passo a passo</h2>

          <p>
            Não precisa de template sofisticado nem de planilha com fórmulas. Quatro passos são suficientes pra montar um cardápio que funciona na prática.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Liste o que você já sabe fazer</strong>
                <span>
                  Não é hora de experimentar. Escreve de 7 a 10 receitas que fazem parte da sua rotina — frango grelhado, macarrão ao sugo, omelete, arroz com feijão e legumes, peixe assado. Receitas conhecidas têm execução automática e não exigem decisão na hora de cozinhar.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Distribua pelos dias levando em conta seu tempo</strong>
                <span>
                  Segunda e quarta costumam ser dias corridos — coloque as receitas mais rápidas nesses dias. Sexta ou sábado têm mais tempo — reserve pra algo que exige mais preparo. Domingo pode ser o dia da preparação em quantidade: arroz, feijão e proteína que durem 2 ou 3 dias.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Verifique a despensa antes de fazer o mercado</strong>
                <span>
                  Antes de montar a lista de compras, confere o que já tem em casa. Azeite, arroz, feijão, temperos — ingredientes base que já estão na{' '}
                  <a href="/funcionalidades/despensa">despensa</a>{' '}
                  não precisam ir pra lista. Esse passo sozinho elimina boa parte das compras duplicadas.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">4</div>
              <div className="tip-body">
                <strong>Gere a lista de compras a partir do cardápio</strong>
                <span>
                  Com o cardápio definido e a despensa verificada, a lista de compras praticamente se escreve sozinha. Vai ingrediente por ingrediente de cada refeição planejada, marca o que já tem, e o restante é o que você precisa comprar. O{' '}
                  <a href="/funcionalidades/cardapio-semanal">plano semanal do Mise</a>{' '}
                  faz esse cruzamento automaticamente.
                </span>
              </div>
            </li>
          </ul>

          {/* EXEMPLO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5593102/pexels-photo-5593102.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pessoa escrevendo cardápio semanal em papel sobre mesa de madeira com caderno e caneta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
          </div>

          <h2 id="exemplo" className="img-above">Exemplo de cardápio semanal simples caseiro</h2>

          <p>
            Abaixo um exemplo funcional pra uma pessoa ou casal — sem ingredientes exóticos, sem técnicas complicadas. O critério foi tempo de preparo real no dia a dia: nada que passe de 30 minutos num dia de semana.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Dia</th>
                <th>Almoço / Jantar</th>
                <th>Preparo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda</td>
                <td>Frango grelhado, arroz e salada verde</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Terça</td>
                <td>Macarrão ao sugo com ovo mexido</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>Quarta</td>
                <td>Feijão temperado, arroz e legumes refogados</td>
                <td>25 min</td>
              </tr>
              <tr>
                <td>Quinta</td>
                <td>Omelete com batata cozida e salada</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Sexta</td>
                <td>Peixe assado com arroz e cenoura</td>
                <td>30 min</td>
              </tr>
            </tbody>
          </table>

          <p>
            Algumas escolhas têm lógica: frango aparece no começo da semana — quando está fresco. Feijão no meio — aproveita o que foi feito no domingo ou cozinha uma quantidade maior que dura. Peixe na sexta — compra no dia, prepara na hora.
          </p>
          <p>
            Repetir proteínas ao longo da semana também reduz o número de itens diferentes na lista de compras. Frango segunda e quarta, por exemplo: uma compra serve pras duas refeições. Menos itens distintos na lista significa menos tempo no mercado e menos chance de esquecer alguma coisa.
          </p>
          <p>
            O fim de semana fica fora do exemplo por uma razão simples: sábado e domingo tendem a ter outra dinâmica — saídas, delivery, almoço em família. Planejar a semana de trabalho é o suficiente pra ver o impacto. Quem quiser incluir o fim de semana depois, inclui.
          </p>

          {/* LISTA DE COMPRAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6995262/pexels-photo-6995262.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pessoa conferindo lista de compras no celular ao lado de carrinho de supermercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Mart Production / Pexels</p>
          </div>

          <h2 id="lista-de-compras" className="img-above">Como transformar o cardápio em lista de compras</h2>

          <p>
            Esse é o passo que a maioria das pessoas pula — e por isso faz mercado com uma lista genérica que não reflete o que vai comer na semana.
          </p>
          <p>
            O processo é direto: pega o cardápio, passa por cada refeição, anota os ingredientes e as quantidades necessárias. Frango grelhado segunda e arroz com feijão quarta — frango: 600g, arroz: já tem, feijão: já tem, temperos: verificar. Depois cruza com o que já tem na despensa e remove o que não precisa comprar.
          </p>
          <p>
            O resultado é uma{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            precisa — sem itens esquecidos e sem compras que vão parar no fundo do armário sem uso. Essa precisão é o que separa ir ao mercado uma vez na semana de ir três vezes porque sempre falta alguma coisa.
          </p>
          <p>
            Para quem usa o Mise, esse cruzamento é automático: o cardápio da semana gera a lista de compras levando em conta o que já está registrado na despensa. O que precisa comprar fica separado do que já tem em casa.
          </p>

          <div className="blog-inline-cta">
            <p>Cardápio feito. <em>A lista sai sozinha no Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* QUANDO NÃO SEGUE */}
          <h2 id="quando-nao-segue">Quando o plano não segue o roteiro</h2>

          <p>
            Cardápio semanal não é contrato. Na quinta você planejou peixe, mas saiu mais tarde e o supermercado já estava fechado. Na quarta planejou frango, mas tinha sobra da terça que precisava ser usada antes. Isso é normal — não é falha no sistema.
          </p>
          <p>
            O cardápio funciona como referência, não como obrigação. Ele resolve a maioria dos dias. Os que fogem do plano são exceção, e exceções não invalidam o sistema. O que invalida o sistema é não ter plano nenhum — aí cada dia é uma exceção.
          </p>
          <p>
            Três ajustes práticos pra quando o roteiro muda:
          </p>

          <ul className="item-list">
            <li><strong>Proteínas congelam.</strong> Frango que não foi usado na segunda vai pro freezer. Na semana seguinte, já está na despensa.</li>
            <li><strong>Sobra vira almoço.</strong> Planejar porções ligeiramente maiores no jantar elimina a necessidade de cozinhar no almoço do dia seguinte.</li>
            <li><strong>Troca de dia, não de receita.</strong> Se a receita da quinta não foi possível, ela vai pra sexta — não some do cardápio. Os ingredientes já estão em casa.</li>
          </ul>

          <p>
            Quem abandona o cardápio semanal geralmente faz isso porque criou expectativas demais: planejar todas as refeições de todos os dias, incluir preparações novas todo dia, nunca repetir. Isso não é cardápio semanal — é produção de programa de culinária. Começa simples. Repete o que funciona. Adapta aos poucos.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre cardápio semanal</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que é cardápio semanal?</p>
              <p className="faq-a">
                É a lista das refeições planejadas para os sete dias da semana — normalmente almoços e jantares. Serve como guia para saber o que cozinhar a cada dia, evitar o dilema "o que tem pra comer hoje?" e fazer um mercado mais eficiente, comprando só o que vai usar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como montar um cardápio semanal simples?</p>
              <p className="faq-a">
                Liste de 5 a 7 refeições que você já sabe fazer. Distribua pelos dias levando em conta o tempo disponível. Verifique o que já tem na despensa antes de ir ao mercado. Monte a lista de compras a partir do cardápio. Não precisa planejar 100% dos dias de início — começa com 3 dias e vai ampliando.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual é um exemplo de cardápio semanal simples caseiro?</p>
              <p className="faq-a">
                Segunda: frango grelhado com arroz e salada. Terça: macarrão ao sugo com ovo. Quarta: feijão, arroz e legumes refogados. Quinta: omelete com batata cozida. Sexta: peixe assado com arroz e cenoura. Repetir proteínas ao longo da semana reduz os itens na lista de compras e simplifica o mercado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como transformar o cardápio semanal em lista de compras?</p>
              <p className="faq-a">
                Passa por cada refeição do cardápio, anota os ingredientes e as quantidades necessárias. Cruza com o que já tem na despensa e remove o que não precisa comprar. O resultado é uma lista precisa — sem itens esquecidos e sem compras que vão parar no fundo do armário.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cardápio semanal funciona pra quem mora sozinho?</p>
              <p className="faq-a">
                Funciona e tem vantagem extra: dá pra preparar porções maiores no domingo — arroz, feijão, proteína — e dividir pelos dias da semana. Elimina a necessidade de cozinhar todo dia. Também reduz o desperdício, que costuma ser maior pra quem mora sozinho e compra por impulso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantas refeições preciso planejar no cardápio semanal?</p>
              <p className="faq-a">
                Não precisa planejar todas as refeições de todos os dias pra começar. Planejar só o almoço ou só o jantar da semana já gera impacto real. Começa com 3 ou 4 dias e vai adicionando conforme o ritmo fica natural. Planejar 100% de início cria pressão desnecessária e aumenta a chance de abandonar.
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
                Criador do Mise. Montou cardápio semanal por anos no papel, perdeu o papel toda semana. Agora usa o app.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Cardápio feito. Lista gerada.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você planeja a semana, o Mise gera a lista — sem esquecer nada.
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
