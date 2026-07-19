import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Pimenta vermelha: tipos, benefícios e como usar na cozinha',
  description: 'Pimenta vermelha cobre desde o pimentão doce até a caiena e a malagueta. Conheça os tipos, os benefícios da capsaicina e como usar cada variedade.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/pimenta-vermelha',
  },
  openGraph: {
    title: 'Pimenta vermelha: tipos, benefícios e como usar na cozinha',
    description: 'Pimenta vermelha cobre desde o pimentão doce até a caiena e a malagueta. Conheça os tipos, os benefícios da capsaicina e como usar cada variedade.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/pimenta-vermelha',
    images: [
      {
        url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pimentões vermelhos frescos sobre tábua de madeira — variedades de pimenta vermelha madura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pimenta vermelha: tipos, benefícios e como usar na cozinha',
    description: 'Pimenta vermelha cobre desde o pimentão doce até a caiena e a malagueta. Conheça os tipos, os benefícios da capsaicina e como usar cada variedade.',
    images: ['https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual a diferença entre pimenta vermelha e pimentão vermelho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pimentão vermelho é um tipo específico de pimenta vermelha — o capsicum annuum maduro, sem ardor, grande e carnoso. "Pimenta vermelha" é o nome genérico para qualquer fruto maduro do gênero Capsicum na cor vermelha. Inclui tanto o pimentão doce quanto variedades picantes como malagueta, dedo-de-moça e caiena. A cor vermelha indica maturação completa em todos os casos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pimenta vermelha faz mal para o estômago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pimentas picantes com capsaicina podem irritar a mucosa gástrica em pessoas com gastrite, úlcera ou intestino sensível. O pimentão vermelho, sem capsaicina, raramente causa problemas estomacais. Se você tem histórico de problemas gástricos, comece com quantidades pequenas das versões picantes e observe a tolerância.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual pimenta vermelha é mais picante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre as variedades comuns no Brasil: pimenta caiena e pimenta malagueta são as mais picantes, com alta concentração de capsaicina. Pimenta dedo-de-moça fica no meio-termo. Pimenta biquinho tem ardor muito suave. Pimentão vermelho não tem ardor nenhum — zero capsaicina. A escala Scoville mede a concentração de capsaicina em cada variedade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pimenta caiena e pimenta vermelha são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pimenta caiena é um tipo específico de pimenta vermelha — uma variedade longa e fina, muito picante, geralmente vendida seca em pó. Toda pimenta caiena é uma pimenta vermelha, mas nem toda pimenta vermelha é caiena. Pimentão vermelho, dedo-de-moça e malagueta são outras variedades de pimenta vermelha com sabor e ardência distintos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pimenta vermelha tem mais vitamina C que laranja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pimentão vermelho tem, sim. 100g de pimentão vermelho cru contêm cerca de 190mg de vitamina C — quase quatro vezes mais que a mesma quantidade de laranja (53mg). O calor destrói parte da vitamina C, então o pimentão cru ou levemente cozido aproveita melhor esse nutriente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar pimenta vermelha em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pimentão vermelho fresco: geladeira, na gaveta de vegetais, dura 1 a 2 semanas. Depois de cortado, use em 3 a 4 dias. Pimentas frescas (dedo-de-moça, malagueta): geladeira em saco ou pote, 1 a 2 semanas. Pimenta seca (calabresa, caiena em pó): pote fechado longe de luz e umidade, dura meses. Pimenta fresca pode ser congelada — perde um pouco da textura mas mantém o ardor.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pimenta vermelha: tipos, benefícios e como usar na cozinha',
  description: 'Pimenta vermelha cobre desde o pimentão doce até a caiena e a malagueta. Conheça os tipos, os benefícios da capsaicina e como usar cada variedade.',
  image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-27',
  dateModified: '2026-06-27',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/pimenta-vermelha',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Pimenta vermelha', item: 'https://www.miseemcasa.com.br/pt/blog/pimenta-vermelha' },
  ],
}

export default function PimentaVermelha({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Pimenta vermelha</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-27">27 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Pimenta vermelha: tipos, benefícios e como usar na cozinha
          </h1>
          <p className="blog-desc">
            "Pimenta vermelha" parece simples até você estar no mercado decidindo entre pimentão, dedo-de-moça, caiena e calabresa. São plantas parecidas, mas com ardência, sabor e usos completamente diferentes. Aqui está o mapa.
          </p>

          <div className="answer-box">
            <p>
              <strong>Pimenta vermelha</strong> é o nome genérico para qualquer fruto maduro do gênero <em>Capsicum</em> que atingiu a cor vermelha.
              Cobre desde o pimentão doce (zero ardor) até a malagueta e a caiena (muito picantes).
              O que define a ardência é a <strong>capsaicina</strong> — e é ela também a responsável pelos principais benefícios nutricionais documentados.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pimentões vermelhos frescos sobre tábua de madeira — variedades de pimenta vermelha madura"
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
              <li><a href="#o-que-e">O que é pimenta vermelha</a></li>
              <li><a href="#tipos">Tipos de pimenta vermelha no Brasil</a></li>
              <li><a href="#beneficios">Benefícios da capsaicina</a></li>
              <li><a href="#nutricional">Valor nutricional</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#paprica">Pimenta vermelha vs páprica</a></li>
              <li><a href="#vale-a-pena">Vale colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Variedades de pimenta vermelha fresca e seca lado a lado — dedo-de-moça, caiena e malagueta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é pimenta vermelha</h2>

          <p>
            "Pimenta vermelha" não é uma espécie. É uma cor.
          </p>
          <p>
            Quando um pimentão verde fica na planta tempo suficiente, ele amadurece. Passa pelo amarelo, pelo laranja e chega ao vermelho. O mesmo acontece com dedo-de-moça, malagueta e caiena — todas começam verdes e ficam vermelhas com a maturação completa.
          </p>
          <p>
            O que muda com o amadurecimento: mais açúcar, mais vitamina C, mais licopeno, mais cor. É por isso que pimentão vermelho é mais doce que o verde. E por isso ele fica mais caro também — ficou mais tempo na planta.
          </p>
          <p>
            A distinção que importa na cozinha não é a cor — é a capsaicina. O pimentão vermelho não tem capsaicina: pode comer de boa. Malagueta e caiena têm concentrações altas: ardência que vai desde "sentiu" até "água não ajuda".
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de pimenta vermelha no Brasil</h2>

          <p>
            O Brasil tem uma das maiores diversidades de pimentas do mundo — mais de 30 espécies nativas do gênero Capsicum, segundo a{' '}
            <a href="https://www.embrapa.br/hortalicas" target="_blank" rel="noopener">Embrapa Hortaliças</a>.
            No mercado e no dia a dia, você vai encontrar as seguintes:
          </p>

          <h3>Pimentão vermelho</h3>
          <p>
            A versão mais comum e mais fácil de usar. Grande, carnoso, sem ardor. Sabor adocicado com umami sutil. Fica excelente refogado, recheado, assado na grelha ou cru em saladas. É o pimentão verde que amadureceu — mesma planta, sabor completamente diferente.
          </p>

          <h3>Pimenta dedo-de-moça</h3>
          <p>
            Longa, fina, vermelha brilhante. Ardência média — picante mas suportável pra maioria das pessoas. É a pimenta mais versátil da cozinha brasileira: vai bem em frango, peixe, carne, molhos e conservas. Encontra em qualquer hortifruti do país.
          </p>

          <h3>Pimenta malagueta</h3>
          <p>
            Pequena, vermelha ou verde, muito picante. É o tempero base do acarajé, do vatapá e da culinária baiana. Usa-se com parcimônia — uma malagueta inteira num refogado pra 4 pessoas já faz diferença. Muito popular em conservas de azeite com alho.
          </p>

          <h3>Pimenta caiena</h3>
          <p>
            Geralmente vendida seca e moída em pó. Alta concentração de capsaicina. Uma pitada muda completamente o perfil de um prato. É usada mundialmente em molhos picantes, temperos em pó e como base de páprica picante. No Brasil, aparece em temperos compostos e em molhos tipo tabasco.
          </p>

          <h3>Pimenta calabresa</h3>
          <p>
            A pimenta da pizza. É pimenta vermelha seca e triturada em flocos com as sementes — onde fica a maior concentração de capsaicina. Tem ardor moderado a forte dependendo do produto. Dura meses no pote fechado e está na despensa de quase todo mundo que gosta de pizza, massas e ovos mexidos.
          </p>

          <h3>Pimenta biquinho</h3>
          <p>
            Pequena, vermelha, com o biquinho característico na ponta. Pouco ardor — quase doce. Muito consumida como petisco pura, em conservas de azeite ou como aperitivo. É uma das poucas pimentas que crianças costumam aceitar. Sabor complexo sem o ardor das outras.
          </p>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2893534/pexels-photo-2893534.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pimentas vermelhas frescas em cesta de vime — capsaicina e nutrientes da pimenta vermelha"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Benefícios da capsaicina</h2>

          <p>
            A capsaicina é o composto bioativo responsável pela ardência das pimentas picantes. E é também onde estão os principais benefícios nutricionais documentados.
          </p>

          <h3>Metabolismo</h3>
          <p>
            Capsaicina aumenta temporariamente a temperatura corporal e o gasto energético — processo chamado termogênese. O efeito é real, mas modesto: uma refeição com pimenta não substitui exercício. Serve como complemento numa alimentação variada e regular.
          </p>

          <h3>Saúde cardiovascular</h3>
          <p>
            Estudos associam consumo regular de capsaicina a menores níveis de colesterol LDL e triglicerídeos. A capsaicina tem ação vasodilatadora — aumenta o diâmetro dos vasos sanguíneos, o que facilita a circulação e reduz o risco de coágulos.
          </p>

          <h3>Ação anti-inflamatória</h3>
          <p>
            Capsaicina, flavonoides e compostos fenólicos das pimentas têm propriedades anti-inflamatórias documentadas. Em uso tópico (cremes e géis), a capsaicina é usada no tratamento de dores musculares e articulares — funciona "cansando" os receptores de dor da região.
          </p>

          <h3>Vitamina C e imunidade</h3>
          <p>
            Pimentão vermelho tem uma das maiores concentrações de vitamina C entre os alimentos. A vitamina C é essencial pra produção e funcionamento das células de defesa imunológica. O pimentão vermelho maduro tem mais vitamina C que o verde — a maturação aumenta o teor do nutriente.
          </p>

          <p>
            Uma observação honesta: pimenta não é remédio. Os benefícios aparecem com consumo regular e moderado dentro de uma dieta variada. Um prato ocasional não muda nada — e exagerar nas versões picantes pode irritar o estômago.
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="nutricional">Valor nutricional</h2>

          <p>
            Os números variam bastante entre pimentão (doce, carnoso) e pimentas picantes (concentradas em capsaicina). A tabela abaixo usa pimentão vermelho como referência — a versão mais consumida no Brasil, segundo a{' '}
            <a href="https://www.unicamp.br/nepa/taco/" target="_blank" rel="noopener">Tabela de Composição de Alimentos TACO (UNICAMP)</a>:
          </p>

          <ul className="item-list">
            <li><strong>Calorias:</strong> ~31 kcal por 100g</li>
            <li><strong>Carboidratos:</strong> ~6g por 100g</li>
            <li><strong>Vitamina C:</strong> ~190mg por 100g — 212% da ingestão diária recomendada</li>
            <li><strong>Licopeno e beta-caroteno:</strong> os pigmentos que dão a cor vermelha, com ação antioxidante</li>
            <li><strong>Potássio:</strong> ~211mg por 100g</li>
            <li><strong>Fibras:</strong> ~2g por 100g</li>
          </ul>

          <p>
            Para comparação direta: 100g de laranja têm em torno de 53mg de vitamina C. O pimentão vermelho tem quase quatro vezes mais — e com menos calorias. Isso não é argumento pra trocar a fruta pelo pimentão, mas é um dado que surpreende bastante na primeira vez que você vê.
          </p>
          <p>
            Pimentas picantes secas têm perfil diferente: mais concentradas e calóricas por peso, mas consumidas em quantidades muito menores. Uma colher de chá de pimenta calabresa tem muito menos vitamina C que 100g de pimentão — mas também muito mais capsaicina. São ingredientes com funções distintas no prato.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar pimenta vermelha na cozinha</h2>

          <p>
            Cada tipo de pimenta vermelha tem seu lugar. Usar a errada na receita dá resultado errado — e não é por falta de técnica, é por não conhecer o ingrediente.
          </p>

          <h3>Pimentão vermelho</h3>
          <p>
            Assado diretamente na chama do fogão e descascado, vira um molho robusto. Refogado com{' '}
            <a href="/blog/beneficios-da-cebola-roxa">cebola</a>
            {' '}e alho, é a base de inúmeros pratos brasileiros. Cru em tiras vai bem em saladas e como acompanhamento. Recheado com arroz e carne é prato completo com pouco esforço.
          </p>

          <h3>Pimenta dedo-de-moça</h3>
          <p>
            Remove as sementes e a membrana interna pra reduzir a ardência. Com as sementes, o ardor fica mais forte. Funciona bem picada fina em marinadas, molhos e como tempero de arroz. Menos é mais — começa com meia pimenta e ajusta ao longo do cozimento.
          </p>

          <h3>Pimenta malagueta</h3>
          <p>
            Em conserva de azeite, dura meses e fica mais suave ao longo do tempo. Uma malagueta inteira no caldo do feijão passa o sabor sem ficar insuportável. Pra quem gosta de muito ardor, malagueta picada direto no prato na hora de comer.
          </p>

          <h3>Pimenta calabresa</h3>
          <p>
            O tempero mais fácil de ter na despensa. Uma pitada em ovos mexidos, em massas ao alho e óleo, em pizza caseira — faz diferença com esforço zero. Não precisa cozinhar: vai direto na finalização do prato.
          </p>

          <h3>Pimenta caiena em pó</h3>
          <p>
            Substitui a calabresa com ardência mais uniforme e menos textura visível. Bom pra molhos, marinadas e receitas onde você não quer os flocos aparentes. Atenção: caiena é mais intensa que calabresa — use menos do que usaria da calabresa.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* PÁPRICA */}
          <h2 id="paprica">Pimenta vermelha vs páprica: qual a diferença</h2>

          <p>
            Páprica vem de pimenta vermelha. É pimenta seca e moída — geralmente pimentão vermelho ou variedades suaves de capsicum.
          </p>
          <p>
            A diferença está no processamento e na variedade usada:
          </p>

          <ul className="item-list">
            <li><strong>Páprica doce:</strong> pimentão vermelho seco e moído, sem ardor. Cor intensa, sabor suave e levemente adocicado.</li>
            <li><strong>Páprica defumada:</strong> pimenta seca em defumação antes de moer. Sabor complexo, levemente amargo. Base de muitos pratos espanhóis e húngaros.</li>
            <li><strong>Páprica picante:</strong> mistura de pimenta mais quente no processo. Tem ardência real, próxima da pimenta calabresa.</li>
          </ul>

          <p>
            Na prática: páprica não substitui pimenta em pó em receitas que pedem ardência, nem o contrário. São ingredientes diferentes com funções diferentes. Páprica defumada e pimenta calabresa são complementares, não intercambiáveis.
          </p>
          <p>
            Uma boa despensa tem os dois. Páprica doce pra cor e sabor de fundo, pimenta calabresa pra ardência pontual. É a mesma lógica de ter{' '}
            <a href="/blog/para-que-serve-o-oregano">orégano</a>
            {' '}e tomilho — mesma família, funções diferentes no prato.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale colocar na lista</h2>

          <p>
            Depende de qual pimenta vermelha você está colocando na lista.
          </p>
          <p>
            <strong>Pimentão vermelho:</strong> sim, é item de{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>.
            Faz parte da base aromática de muitos pratos brasileiros. Versátil o suficiente pra funcionar em refogados, saladas, recheios e molhos. Custo acessível. Quem cozinha regularmente vai usar antes de estragar.
          </p>
          <p>
            <strong>Pimenta calabresa e caiena em pó:</strong> compra uma vez, dura meses na{' '}
            <a href="/funcionalidades/despensa">despensa</a>.
            São temperos de finalização — você usa pouco de cada vez. Vale comprar mesmo que não use toda semana. Pote fechado longe da luz e umidade: seis meses sem perder qualidade. É o tipo de item que você sente falta só quando acaba no meio da receita.
          </p>
          <p>
            <strong>Pimenta fresca (dedo-de-moça, malagueta, biquinho):</strong> compra conforme o uso. Não tem como manter na despensa por tempo longo — dura uma semana na geladeira, duas no máximo. Se você tem um prato específico que pede, compra na semana em que vai fazer.
          </p>
          <p>
            Pimenta em conserva própria — malagueta em azeite com alho — é a solução pro meio-termo. Você compra bastante quando está barata, faz a conserva e tem por meses. O azeite absorve o sabor e fica ótimo por conta própria no pão.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre pimenta vermelha</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre pimenta vermelha e pimentão vermelho?</p>
              <p className="faq-a">
                Pimentão vermelho é um tipo de pimenta vermelha — o capsicum annuum maduro, sem ardor, grande e carnoso. "Pimenta vermelha" é o nome genérico pra qualquer fruto maduro do gênero Capsicum na cor vermelha, incluindo variantes picantes como malagueta, dedo-de-moça e caiena.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pimenta vermelha faz mal para o estômago?</p>
              <p className="faq-a">
                Pimentas picantes com capsaicina podem irritar a mucosa gástrica em pessoas com gastrite ou intestino sensível. Pimentão vermelho, sem capsaicina, raramente causa problemas. Se tiver histórico de gastrite, comece com quantidades pequenas das versões picantes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual pimenta vermelha é mais picante?</p>
              <p className="faq-a">
                Entre as comuns no Brasil: caiena e malagueta são as mais picantes. Dedo-de-moça fica no meio-termo. Biquinho tem ardor muito suave. Pimentão vermelho não tem ardor nenhum. A escala Scoville mede a concentração de capsaicina em cada variedade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pimenta caiena e pimenta vermelha são a mesma coisa?</p>
              <p className="faq-a">
                Pimenta caiena é um tipo específico de pimenta vermelha — variedade longa e fina, muito picante, geralmente vendida seca em pó. Toda caiena é uma pimenta vermelha, mas nem toda pimenta vermelha é caiena. Pimentão, dedo-de-moça e malagueta são outras variedades.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pimenta vermelha tem mais vitamina C que laranja?</p>
              <p className="faq-a">
                Pimentão vermelho tem, sim. 100g de pimentão vermelho cru têm cerca de 190mg de vitamina C — quase quatro vezes mais que a mesma quantidade de laranja (53mg). O calor destrói parte da vitamina C, então o pimentão cru ou levemente cozido aproveita melhor esse nutriente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar pimenta vermelha em casa?</p>
              <p className="faq-a">
                Pimentão fresco: geladeira, gaveta de vegetais, 1 a 2 semanas. Pimentas frescas (dedo-de-moça, malagueta): geladeira em pote, 1 a 2 semanas. Pimenta seca (calabresa, caiena em pó): pote fechado longe de luz e umidade, meses. Pimenta fresca pode ser congelada — perde textura mas mantém o ardor.
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
                Criador do Mise. Pôs pimenta caiena no feijão sem avisar a família. Consenso unânime: a quantidade foi além do necessário.
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
              Você compra o que vai usar — e a pimenta calabresa não some no fundo do armário sem você lembrar.
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
