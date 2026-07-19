import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Margarina: o que é, diferença da manteiga e quando usar',
  description: 'Margarina é feita de óleos vegetais hidrogenados. Saiba o que é, a diferença da manteiga, o que mudou na gordura trans e quando usar cada uma em receitas.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/o-que-e-margarina',
  },
  openGraph: {
    title: 'Margarina: o que é, diferença da manteiga e quando usar',
    description: 'Margarina é feita de óleos vegetais hidrogenados. Saiba o que é, a diferença da manteiga, o que mudou na gordura trans e quando usar cada uma em receitas.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/o-que-e-margarina',
    images: [
      {
        url: 'https://images.pexels.com/photos/4577371/pexels-photo-4577371.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pessoa espalhando margarina ou manteiga sobre fatia de pão — spread cremoso no café da manhã',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Margarina: o que é, diferença da manteiga e quando usar',
    description: 'Margarina é feita de óleos vegetais hidrogenados. Saiba o que é, a diferença da manteiga, o que mudou na gordura trans e quando usar cada uma em receitas.',
    images: ['https://images.pexels.com/photos/4577371/pexels-photo-4577371.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Margarina é vegana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A maioria das margarinas é vegana — são feitas de óleos vegetais e não contêm leite ou derivados. Mas algumas versões levam soro de leite ou outros ingredientes de origem animal para ajustar textura e sabor. Sempre verifique a lista de ingredientes no rótulo. Marcas que se declaram veganas costumam indicar isso na embalagem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Margarina tem lactose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Margarina pura, feita apenas de óleos vegetais, não tem lactose. Mas algumas fórmulas levam soro de leite, o que adiciona lactose ao produto. Se você tem intolerância ou alergia ao leite, leia o rótulo com atenção — especialmente margarinas cremosas, que tendem a ter mais ingredientes lácteos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre margarina e creme vegetal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Brasil, a regulamentação da Anvisa define que "margarina" deve ter mínimo de 80% de lipídios. Produtos com teor menor são chamados de "creme vegetal". Na prática, a maioria dos potes que você encontra no mercado com textura cremosa e menos gordura são cremes vegetais, não margarina técnica. Para receitas, isso importa: cremes vegetais têm mais água e mudam o resultado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Margarina pode substituir manteiga em bolo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, com ressalvas. Margarina culinária (80% de gordura) substitui manteiga em proporção igual na maioria das receitas de bolo. O resultado muda um pouco — textura ligeiramente diferente e sabor menos rico — mas funciona. O creme vegetal (menos de 80% de gordura) tem mais água e pode desequilibrar a receita. Use sempre margarina culinária, não a versão light ou cremosa, para assar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Margarina faz mal à saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O debate mudou. As margarinas antigas tinham gordura trans em quantidade significativa — isso sim fazia mal, com impacto comprovado no risco cardiovascular. A Anvisa proibiu gordura trans industrial no Brasil a partir de 2023. As margarinas atuais não têm gordura trans, mas continuam sendo alimentos ultraprocessados. Consumo moderado e dentro de uma alimentação variada não é problema para a maioria das pessoas. O problema é a quantidade, não o produto em si.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar margarina depois de aberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Margarina aberta deve ficar na geladeira, tampada, longe de alimentos com cheiro forte — ela absorve odores com facilidade. Não guarde perto de queijos curados, cebola ou alho. Use dentro do prazo indicado na embalagem após abertura, geralmente 30 a 45 dias. Nunca recondicione sobras de margarina que já entraram em contato com outros alimentos no mesmo pote.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Margarina: o que é, diferença da manteiga e quando usar',
  description: 'Margarina é feita de óleos vegetais hidrogenados. Saiba o que é, a diferença da manteiga, o que mudou na gordura trans e quando usar cada uma em receitas.',
  image: 'https://images.pexels.com/photos/4577371/pexels-photo-4577371.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
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
    '@id': 'https://www.miseemcasa.com.br/blog/o-que-e-margarina',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é margarina', item: 'https://www.miseemcasa.com.br/blog/o-que-e-margarina' },
  ],
}

export default function OQueEMargarina() {
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
            <li className="breadcrumb-current" aria-current="page">O que é margarina</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-15">15 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">5 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é margarina e quando faz sentido usar no lugar da manteiga
          </h1>
          <p className="blog-desc">
            Tem um pote na geladeira de quase todo mundo. Mas o que é margarina, como é feita, o que aconteceu com a gordura trans e quando ela faz sentido no lugar da manteiga — isso a maioria não sabe de verdade.
          </p>

          <div className="answer-box">
            <p>
              <strong>Margarina</strong> é um produto feito de óleos vegetais que passam por um processo de hidrogenação para ficar sólidos em temperatura ambiente.
              É criada como alternativa à manteiga — mais barata, com ponto de fusão controlado e sem gordura saturada de origem animal.
              No Brasil, a Anvisa proibiu a gordura trans industrial em 2023. As margarinas atuais no mercado não têm gordura trans.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4577371/pexels-photo-4577371.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pessoa espalhando margarina ou manteiga sobre fatia de pão — spread cremoso no café da manhã"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Rachel Claire / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é margarina</a></li>
              <li><a href="#como-e-feita">Como é feita</a></li>
              <li><a href="#tipos">Tipos de margarina no Brasil</a></li>
              <li><a href="#vs-manteiga">Margarina vs manteiga</a></li>
              <li><a href="#quando-usar">Quando usar cada uma</a></li>
              <li><a href="#gordura-trans">Margarina faz mal? Gordura trans hoje</a></li>
              <li><a href="#como-guardar">Como guardar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6957153/pexels-photo-6957153.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pote aberto de margarina cremosa sobre superfície de madeira — textura e cor da margarina em close-up"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Karola G / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é margarina</h2>

          <p>
            Margarina é um produto de origem vegetal criado para imitar a textura e o uso da manteiga. A base são óleos vegetais — de soja, palma, girassol ou canola — que passam por processos industriais para ficar sólidos ou pastosos em temperatura ambiente.
          </p>
          <p>
            A invenção data de 1869. O químico francês Hippolyte Mège-Mouriès desenvolveu o produto a pedido de Napoleão III, que queria uma alternativa barata à manteiga para alimentar o exército. O nome original era "oleomargarina" — daí veio margarina.
          </p>
          <p>
            Durante décadas, foi posicionada como a opção mais saudável que a manteiga — menos gordura saturada, menor custo, mais fácil de espalhar. Esse posicionamento entrou em colapso nos anos 1990 quando pesquisas ligaram a gordura trans, criada no processo de hidrogenação, a riscos cardiovasculares sérios.
          </p>
          <p>
            O que mudou desde então é o processo de fabricação. As indústrias desenvolveram alternativas à hidrogenação parcial — que era o que gerava a gordura trans — e as margarinas atuais têm composição bem diferente das antigas. A Anvisa proibiu a gordura trans industrial no Brasil a partir de 2023, e os produtos que chegam ao mercado hoje precisam estar dentro dessa regulamentação.
          </p>

          {/* COMO É FEITA */}
          <h2 id="como-e-feita">Como é feita</h2>

          <p>
            O processo começa com óleos vegetais líquidos. Para virar sólido, o óleo precisa passar por algum tipo de modificação. O método antigo era a hidrogenação parcial: bombear hidrogênio no óleo com calor e pressão. Funcionava, mas criava gorduras trans como subproduto.
          </p>
          <p>
            Os métodos atuais usam hidrogenação completa (que não gera trans, mas cria gordura saturada) combinada com interesterificação — uma reorganização das moléculas de gordura que ajusta a textura sem criar trans. Depois, óleos líquidos são adicionados de volta para acertar a consistência final.
          </p>
          <p>
            Além dos óleos, a margarina leva água, emulsificantes para misturar óleo e água (lecitina de soja é comum), sal, corantes (o amarelo vem de colorífico, já que o produto seria esbranquiçado sem ele), aromas e conservantes. Algumas versões levam soro de leite para ajustar sabor e textura — o que adiciona lactose.
          </p>
          <p>
            É um alimento ultraprocessado, no sentido técnico do termo. Isso não é um julgamento, é uma descrição do que é: resultado de múltiplas etapas industriais com ingredientes que não existem em cozinha doméstica.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de margarina que você encontra no Brasil</h2>

          <p>
            O mercado brasileiro tem vários produtos chamados de margarina — mas nem todos são tecnicamente iguais. A Anvisa define categorias com base no teor de gordura, e isso muda como cada um se comporta na cozinha.
          </p>

          <h3>Margarina culinária</h3>
          <p>
            Mínimo de 80% de lipídios. É a margarina de verdade, segundo a regulamentação. Comporta-se mais próximo da manteiga em receitas — menos água, mais gordura, resultado mais estável em forno. Se a receita pede manteiga e você vai usar margarina, use esta.
          </p>

          <h3>Creme vegetal</h3>
          <p>
            Entre 35% e 79% de lipídios. A maioria dos potes cremosos que aparecem como "margarina" no mercado são, na verdade, cremes vegetais. Mais água, menos gordura, textura mais mole. Ótimos para passar no pão, mas não substituem manteiga com o mesmo resultado em receitas de forno.
          </p>

          <h3>Margarina light</h3>
          <p>
            Versão com menos calorias — geralmente menos gordura, mais água. O sabor e a textura mudam. Não é indicada para cozinhar ou assar: a água extra afeta o resultado de receitas e pode respingar se for usada para refogar. Funciona apenas como spread direto.
          </p>

          <h3>Margarina sem sal</h3>
          <p>
            Mesma composição da culinária, sem adição de sal. Útil para receitas doces onde o sal da margarina comum desequilibra o sabor, e para dietas com restrição de sódio. Mais versátil na cozinha.
          </p>

          {/* VS MANTEIGA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4109515/pexels-photo-4109515.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pão com manteiga ou margarina ao lado de ingredientes de café da manhã sobre mesa de madeira"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="vs-manteiga" className="img-above">Margarina vs manteiga</h2>

          <p>
            O debate entre margarina e manteiga já foi considerado encerrado pelo menos três vezes. Primeiro a margarina ganhou (menos gordura saturada). Depois a manteiga voltou (gordura trans da margarina). Agora a conversa recomeçou com as novas fórmulas. A ciência não parou de mudar de posição.
          </p>
          <p>
            O que dá pra dizer com segurança hoje:
          </p>

          <ul className="item-list">
            <li><strong>Manteiga</strong> é feita de creme de leite, com ~80% de gordura saturada de origem animal. Tem sabor rico, derrete bem em calor e comporta-se de forma previsível em receitas. Mais cara.</li>
            <li><strong>Margarina culinária</strong> tem gordura similar em quantidade, mas de origem vegetal. Sem colesterol. Sabor neutro. Mais barata. Mais fácil de trabalhar em temperatura ambiente.</li>
            <li><strong>Creme vegetal</strong> tem menos gordura e mais água. Menos calórico por porção, mas não equivalente em receitas.</li>
          </ul>

          <p>
            Em termos de sabor, manteiga ganha — especialmente em preparações onde ela aparece como sabor principal, como croissant, biscoito amanteigado e arroz de forno. Em receitas onde a gordura é só estrutural, como bolo simples ou pão, a diferença final é menor do que parece.
          </p>

          {/* QUANDO USAR */}
          <h2 id="quando-usar">Quando usar cada uma</h2>

          <p>
            A resposta prática depende do uso, não de qual é mais saudável. Esse é o critério que faz diferença na cozinha.
          </p>

          <ul className="item-list">
            <li><strong>Passar no pão:</strong> creme vegetal ou margarina cremosa. Textura fácil de espalhar, sem rasgar o pão. Manteiga gelada racha tudo.</li>
            <li><strong>Bolo simples:</strong> margarina culinária (80%) funciona bem. O resultado é parecido com manteiga, com custo menor.</li>
            <li><strong>Biscoito amanteigado, croissant, folhado:</strong> manteiga. O sabor é parte do prato. Margarina não reproduz.</li>
            <li><strong>Refogar cebola e alho:</strong> qualquer um dos dois, ou{' '}<a href="/blog/azeite-de-oliva">azeite</a>. Sem diferença relevante no resultado final.</li>
            <li><strong>Finalizar massa ou arroz:</strong> manteiga, se quiser o sabor. Margarina culinária, se só quiser a gordura e brilho.</li>
            <li><strong>Receita que pede "manteiga ou margarina":</strong> margarina culinária (80%), nunca creme vegetal.</li>
          </ul>

          <div className="blog-inline-cta">
            <p>Geladeira organizada começa na lista certa. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* GORDURA TRANS */}
          <h2 id="gordura-trans">Margarina faz mal? O que aconteceu com a gordura trans</h2>

          <p>
            A história da gordura trans é um exemplo claro de como um processo industrial pode ter consequências não previstas. A hidrogenação parcial foi desenvolvida no início do século XX e adotada em escala industrial décadas depois. Só nos anos 1990 pesquisas começaram a ligar o consumo de gordura trans a aumento de LDL (colesterol ruim), redução de HDL (colesterol bom) e risco cardiovascular elevado.
          </p>
          <p>
            A margarina era um dos principais veículos de gordura trans na dieta ocidental. As campanhas de saúde que recomendavam trocar manteiga por margarina nas décadas de 70 e 80 acabaram, involuntariamente, substituindo um risco por outro.
          </p>
          <p>
            A resposta regulatória veio aos poucos. Os EUA proibiram gordura trans industrial em 2018. O Brasil estabeleceu limites progressivos e chegou a zero em 2023 — alimentos produzidos a partir dessa data não podem conter gordura trans artificial. Os produtos no mercado hoje estão dentro dessa regra.
          </p>
          <p>
            A margarina atual não é a mesma de 1985. A composição mudou, o processo mudou, a regulamentação mudou. Isso não a transforma em alimento funcional — continua sendo ultraprocessado, com emulsificantes, corantes e aromas. Mas o risco específico que tornou a margarina famosa por fazer mal já não está presente nas versões atuais do mercado.
          </p>
          <p>
            Consumi-la com moderação, como parte de uma alimentação variada, não é um problema documentado. O problema histórico era quantidade, frequência e a composição específica de um produto que não existe mais da mesma forma.
          </p>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Como guardar margarina em casa</h2>

          <p>
            Margarina aberta vai para a geladeira, sempre tampada. O principal cuidado é com absorção de odores — margarina captura cheiro de alimentos fortes com facilidade. Não guarde perto de queijo curado, cebola, alho ou peixe.
          </p>
          <p>
            Não recongele margarina que já descongelou. E não guarde sobras contaminadas de volta no pote — se você usou uma faca que tocou outro alimento, não recoloque no pote original.
          </p>
          <p>
            O prazo depois de aberta costuma ser de 30 a 45 dias, dependendo da marca. Verifique o rótulo — algumas versões com menos conservantes têm validade menor após abertura.
          </p>
          <p>
            Uma boa prática: quando for à{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>,
            {' '}anote a data de abertura no pote. Parece exagero até você encontrar um pote com data que você não se lembra mais.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre margarina</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Margarina é vegana?</p>
              <p className="faq-a">
                A maioria é — feita de óleos vegetais sem ingredientes animais. Mas algumas versões levam soro de leite para ajustar textura e sabor, o que adiciona ingrediente de origem animal. Verifique a lista de ingredientes no rótulo. Marcas que se declaram veganas costumam indicar isso na embalagem.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Margarina tem lactose?</p>
              <p className="faq-a">
                Margarina pura de óleos vegetais não tem lactose. Versões com soro de leite na fórmula têm. Se você tem intolerância ou alergia ao leite, leia o rótulo com atenção — especialmente margarinas cremosas, que tendem a ter mais ingredientes lácteos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre margarina e creme vegetal?</p>
              <p className="faq-a">
                Pela regulamentação da Anvisa, "margarina" tem mínimo de 80% de lipídios. "Creme vegetal" tem entre 35% e 79%. Na prática, a maioria dos potes cremosos vendidos no mercado são cremes vegetais, não margarina técnica. Para receitas, isso importa: cremes vegetais têm mais água e mudam o resultado no forno.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Margarina pode substituir manteiga em bolo?</p>
              <p className="faq-a">
                Pode, com uma condição: use margarina culinária (80% de lipídios), não creme vegetal. Em proporção igual, funciona na maioria das receitas de bolo simples. O sabor muda um pouco — menos rico — mas a textura é próxima. Para biscoitos amanteigados ou folhados, manteiga é insubstituível.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Margarina faz mal à saúde?</p>
              <p className="faq-a">
                O risco histórico era a gordura trans, proibida no Brasil desde 2023. As margarinas atuais não têm gordura trans. Continuam sendo alimentos ultraprocessados — emulsificantes, corantes, aromas — mas o risco específico que tornou o produto famoso por fazer mal não existe mais nas fórmulas atuais. Consumo moderado dentro de alimentação variada não é problema documentado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar margarina depois de aberta?</p>
              <p className="faq-a">
                Na geladeira, sempre tampada. Longe de alimentos com cheiro forte — margarina absorve odores. Use dentro de 30 a 45 dias após aberta, conforme indicação do rótulo. Não recoloque no pote sobras que tocaram outros alimentos.
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
                Criador do Mise. Tem um pote de margarina culinária e outro de manteiga na geladeira ao mesmo tempo. Não vê problema nisso.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa organizada.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você sabe o que tem, compra o que precisa — e o pote de margarina não surpreende ninguém na hora de assar.
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
