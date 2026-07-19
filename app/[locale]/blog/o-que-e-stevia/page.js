import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é stevia: o adoçante natural da planta Stevia rebaudiana',
  description: 'Stevia é um adoçante natural 200 vezes mais doce que o açúcar, com zero calorias e índice glicêmico zero. Saiba o que é, de onde vem e como usar na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-stevia',
  },
  openGraph: {
    title: 'O que é stevia: o adoçante natural da planta Stevia rebaudiana',
    description: 'Stevia é um adoçante natural 200 vezes mais doce que o açúcar, com zero calorias e índice glicêmico zero. Saiba o que é, de onde vem e como usar na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-stevia',
    images: [
      {
        url: 'https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Planta de stevia rebaudiana com folhas verdes ovais — arbusto adoçante natural nativo do Paraguai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é stevia: o adoçante natural da planta Stevia rebaudiana',
    description: 'Stevia é um adoçante natural 200 vezes mais doce que o açúcar, com zero calorias e índice glicêmico zero. Saiba o que é, de onde vem e como usar na cozinha.',
    images: ['https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é stevia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stevia é um adoçante natural extraído das folhas da planta Stevia rebaudiana, um arbusto nativo do Paraguai e do sul do Brasil. Seus compostos ativos — os glicosídeos de esteviol — são entre 200 e 300 vezes mais doces que o açúcar, sem adicionar calorias ou elevar a glicemia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Stevia é natural ou artificial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stevia vem de uma planta, então a origem é natural. Mas os extratos comerciais passam por processo industrial de extração e purificação. O resultado é diferente de morder a folha da planta, que tem sabor mais bruto. Nos produtos de supermercado, você consome um extrato concentrado — natural na origem, processado na produção.',
      },
    },
    {
      '@type': 'Question',
      name: 'Stevia pode substituir o açúcar em todas as receitas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não em tudo. Stevia adoça bem em bebidas, sobremesas frias e receitas sem fermento biológico. Onde não funciona como substituto direto: calda de caramelo (não carameliza), pão com fermento biológico (o fermento não se alimenta dos glicosídeos), e receitas que dependem do açúcar para estrutura ou umidade, como certos bolos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Stevia faz mal à saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em consumo normal, não. Em 2008, a FDA classificou os extratos de alta pureza de stevia como "geralmente reconhecidos como seguros" — a mesma categoria do sal e do açúcar. A ANVISA aprovou o uso no Brasil. Estudos em doses muito altas mostraram alguns efeitos em animais, mas a quantidade necessária está muito acima do que qualquer pessoa consumiria no dia a dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Stevia tem calorias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Praticamente zero. Os glicosídeos de esteviol não são metabolizados pelo organismo para geração de energia. Alguns produtos com stevia podem conter cargas (maltodextrina, eritritol) que adicionam calorias mínimas, mas o extrato puro de stevia tem zero calorias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto de stevia equivale a uma colher de chá de açúcar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do formato. Stevia culinária em versão 1:1 substitui o açúcar na mesma medida — 1 colher de chá por 1 colher de chá. Stevia pura em pó é muito mais concentrada: cerca de 1/4 de colher de chá equivale a 1 colher de chá de açúcar. Leia sempre o rótulo do produto, porque a concentração varia entre marcas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Grávida pode usar stevia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, para extratos de alta pureza (rebaudiosídeo A refinado). FDA e ANVISA não restringem o consumo durante a gravidez nessa forma. A folha crua de stevia e extratos não purificados não têm a mesma avaliação de segurança. Verifique o rótulo: o produto deve especificar que contém extrato de stevia purificado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Por que stevia tem gosto amargo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O amargor vem do esteviosídeo, o composto mais abundante na folha. O rebaudiosídeo A, também presente, tem menos amargor e sabor mais limpo — por isso produtos premium usam maior proporção de rebaudiosídeo A. Se o produto que você usa tem gosto muito amargo, experimente uma marca com mais rebaudiosídeo A na composição.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é stevia: o adoçante natural da planta Stevia rebaudiana',
  description: 'Stevia é um adoçante natural 200 vezes mais doce que o açúcar, com zero calorias e índice glicêmico zero. Saiba o que é, de onde vem e como usar na cozinha.',
  image: 'https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-stevia',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é stevia', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-stevia' },
  ],
}

export default function OQueEStevia({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é stevia</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-23">23 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Stevia: o adoçante que vem de uma planta e não tem caloria
          </h1>
          <p className="blog-desc">
            A prateleira de adoçantes é confusa. Stevia aparece em sachê, em pó, em líquido, misturada com outras coisas. O que é stevia de verdade, de onde vem o sabor doce e quando vale usá-la na cozinha.
          </p>

          <div className="answer-box">
            <p>
              <strong>Stevia</strong> é um adoçante natural extraído das folhas da planta{' '}
              <em>Stevia rebaudiana</em>, nativa do Paraguai e do sul do Brasil.
              Seus compostos ativos são entre 200 e 300 vezes mais doces que o açúcar —
              sem calorias e sem elevar a glicemia.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Planta de stevia rebaudiana com folhas verdes ovais — arbusto adoçante natural nativo do Paraguai"
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
              <li><a href="#o-que-e">O que é a planta stevia</a></li>
              <li><a href="#compostos">Os compostos que adoçam: steviosídeos</a></li>
              <li><a href="#vs-acucar">Stevia vs açúcar: o que muda</a></li>
              <li><a href="#faz-mal">Stevia faz mal?</a></li>
              <li><a href="#como-usar">Como usar stevia na cozinha</a></li>
              <li><a href="#quem-pode">Quem pode e quem deve ter atenção</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5721978/pexels-photo-5721978.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Folhas frescas de stevia em close-up sobre superfície rústica — textura das folhas ovais da planta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é a planta stevia</h2>

          <p>
            A <em>Stevia rebaudiana</em> é um arbusto herbáceo da família Asteraceae — a mesma das margaridas e do girassol.
            Cresce no norte do Paraguai e no sul do Brasil, numa região de fronteira onde os Guaranis já usavam as folhas para adoçar bebidas antes do século XVI.
            A planta não é exótica: é de quintal, em algumas regiões.
          </p>
          <p>
            O naturalista suíço Moisés Bertoni descreveu a espécie formalmente em 1899.
            O químico paraguaio Ovídio Rebaudi isolou os compostos adoçantes em 1900 — daí o nome <em>rebaudiana</em> e os rebaudiosídeos que aparecem no rótulo do adoçante.
          </p>
          <p>
            O arbusto tem folhas ovais serrilhadas, de cor verde intensa, e pode chegar a um metro de altura.
            É a folha que concentra o poder adoçante — não a raiz, não o caule.
            O processo de produção do adoçante começa com a secagem dessas folhas e a extração dos compostos em água.
          </p>
          <p>
            Hoje o Brasil é um dos maiores produtores mundiais de stevia.
            O estado de São Paulo concentra grande parte da plantação comercial — mas você provavelmente nunca vai ver isso mencionado na embalagem do adoçante.
          </p>

          {/* COMPOSTOS */}
          <h2 id="compostos">Os compostos que adoçam: steviosídeos e rebaudiosídeo A</h2>

          <p>
            O sabor doce da stevia vem dos glicosídeos de esteviol — compostos naturais que as folhas concentram.
            Os dois principais são o esteviosídeo e o rebaudiosídeo A.
          </p>
          <p>
            O esteviosídeo é o mais abundante na folha, mas carrega um leve amargor residual.
            O rebaudiosídeo A é menos amargo, mais solúvel em água e com sabor mais limpo — por isso produtos premium especificam alta proporção de rebaudiosídeo A na composição.
            Se o adoçante de stevia que você usa tem gosto amargo no final, provavelmente tem mais esteviosídeo do que rebaudiosídeo A.
          </p>
          <p>
            Esses compostos não são metabolizados pelo organismo da mesma forma que os açúcares.
            O corpo não os transforma em energia.
            É por isso que a caloria é zero — não é alegação de marketing, é química básica.
          </p>
          <p>
            A concentração é o detalhe que mais confunde na cozinha.
            Um quilo de açúcar pode ser substituído por apenas 3 a 5 gramas de extrato puro de stevia.
            A quantidade exata depende da pureza do produto e da proporção de rebaudiosídeo A.
            Todo fabricante tem sua própria fórmula — daí a variação entre marcas.
          </p>

          {/* VS AÇÚCAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7369157/pexels-photo-7369157.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sachê de adoçante stevia ao lado de colher com açúcar branco — comparação visual dos dois adoçantes"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="vs-acucar" className="img-above">Stevia vs açúcar: o que muda na prática</h2>

          <p>
            Açúcar refinado tem 4 calorias por grama, índice glicêmico em torno de 65, eleva insulina e fermenta na boca — o que alimenta as bactérias que causam cárie.
            Stevia: zero calorias, índice glicêmico zero, não eleva insulina, não fermenta.
          </p>
          <p>
            Parece simples. Mas tem uma diferença que os números não capturam: o gosto não é idêntico.
          </p>
          <p>
            A stevia adoça bem, mas com um residual diferente do açúcar.
            Para muita gente o amargor leve é imperceptível em concentrações normais.
            Para outras pessoas, especialmente em bebidas quentes, incomoda.
            Não tem forma de saber sem testar — e o resultado muda conforme a marca.
          </p>
          <p>
            O outro ponto: o açúcar faz coisas na culinária além de adoçar.
            Retém umidade em bolos e cookies.
            Fermenta com o fermento biológico em pães.
            Carameliza em calda, pudim e crème brûlée.
            Stevia não faz nenhuma dessas três coisas.
            Uma receita de bolo que só troca açúcar por stevia pode sair com textura diferente — mais seca ou com menos estrutura.
          </p>
          <p>
            Quem quer{' '}
            <a href="/blog/dieta-sem-acucar">reduzir açúcar na alimentação</a>{' '}
            encontra na stevia uma ferramenta útil — mas não uma troca idêntica em tudo.
          </p>

          {/* FAZ MAL */}
          <h2 id="faz-mal">Stevia faz mal?</h2>

          <p>
            A pergunta aparece em todo post sobre o assunto — e faz sentido, porque qualquer coisa que adoça sem caloria parece suspeita.
          </p>
          <p>
            A resposta mais direta: em consumo normal, não faz mal.
          </p>
          <p>
            Em 2008, a FDA classificou os extratos de alta pureza de stevia como "geralmente reconhecidos como seguros" — a mesma categoria do sal de cozinha e do açúcar.
            A ANVISA aprovou o uso como aditivo alimentar no Brasil.
            A Organização Mundial da Saúde define uma ingestão diária aceitável de 4mg de equivalente de esteviol por quilo de peso corporal.
            Para um adulto de 70kg, isso equivale a muitos sachês por dia — muito acima do que alguém usaria no café da manhã.
          </p>
          <p>
            Estudos em doses muito altas, em modelos animais, mostraram alguns efeitos.
            A dose necessária para chegar nesse território está muito além do consumo realista de quem usa stevia no iogurte ou no café.
            Não há evidência de efeito cancerígeno, mutagênico ou hormonal em doses normais de uso.
          </p>
          <p>
            O que isso não significa: que stevia é a solução pra tudo.
            Trocou o açúcar do café por stevia e manteve tudo o mais do mesmo.
            O resultado esperado é a caloria do café — que já é zero sem o açúcar.
            Mais nada muda automaticamente.
          </p>

          <div className="blog-inline-cta">
            <p>A despensa sabe o que tem. <em>A lista sabe o que falta.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar stevia na cozinha</h2>

          <p>
            O ponto de partida: qual formato você comprou.
          </p>

          <h3>Stevia líquida</h3>
          <p>
            Concentrada e fácil de dosar — uma a três gotas adoçam um copo de água ou uma xícara de café.
            Boa pra bebidas frias e quentes.
            Dissolve rápido, sem residual granulado.
            O frasco pequeno dura meses.
          </p>

          <h3>Stevia em pó pura</h3>
          <p>
            Muito concentrada — não substitui o açúcar na mesma medida.
            Para 1 xícara de açúcar, você precisa de cerca de 1 colher de chá de extrato puro.
            O volume menor muda a textura de bolos e cookies: a massa fica com menos estrutura.
            Funciona melhor em receitas onde o açúcar só adoça, sem papel estrutural.
          </p>

          <h3>Stevia culinária (1:1)</h3>
          <p>
            O formato mais fácil de usar em receitas.
            O fabricante diluiu o extrato com cargas (eritritol, maltodextrina) pra que a medida seja igual à do açúcar: 1 xícara de stevia culinária = 1 xícara de açúcar.
            Resolve a confusão de conversão.
            O resultado em bolos e sobremesas é mais próximo do original do que com o extrato puro.
          </p>

          <h3>Onde funciona bem</h3>
          <ul className="item-list">
            <li>Bebidas: café, chá, suco, vitamina</li>
            <li>Sobremesas frias: musse, pudim de gelatina, iogurte</li>
            <li>Molhos e temperos que precisam de adoçante</li>
            <li>Frutas maceradas ou salada de frutas</li>
            <li>Bolos sem fermento biológico (tipo bolo de caneca)</li>
          </ul>

          <h3>Onde não substitui bem o açúcar</h3>
          <ul className="item-list">
            <li>Calda de caramelo — stevia não carameliza</li>
            <li>Pão com fermento biológico — o fermento não se alimenta dos glicosídeos</li>
            <li>Merengue — a estrutura depende do açúcar</li>
            <li>Receitas que precisam de crocância (como biscoito amanteigado clássico)</li>
          </ul>

          <p>
            Uma dica prática: comece substituindo metade do açúcar por stevia.
            Avalie o gosto e a textura.
            Ajuste na próxima vez.
            Trocas totais de primeira tendem a decepcionar em receitas que dependem do açúcar pra mais do que adoçar.
          </p>

          {/* QUEM PODE */}
          <h2 id="quem-pode">Quem pode usar e quem deve ter atenção</h2>

          <p>
            <strong>Diabéticos:</strong> a stevia é uma das opções mais indicadas.
            Não eleva glicemia.
            Não exige dose de insulina compensatória para o adoçante em si.
            Ainda é preciso controlar o total de carboidratos da refeição — stevia não muda o que mais você está comendo.
          </p>
          <p>
            <strong>Crianças:</strong> sem restrição por faixa etária para extratos de alta pureza.
            A recomendação de bom senso: não usar adoçante como substituto constante do açúcar na alimentação infantil — o objetivo devia ser reduzir o dulçor em geral, não trocar uma fonte por outra.
          </p>
          <p>
            <strong>Grávidas:</strong> sim, para extratos de alta pureza de rebaudiosídeo A.
            FDA e ANVISA não restringem o consumo durante a gravidez nessa forma.
            Folha crua e extratos não purificados não têm a mesma avaliação.
            Verifique o rótulo — o produto deve especificar extrato purificado.
          </p>
          <p>
            <strong>Pessoas com pressão baixa:</strong> atenção.
            Stevia tem efeito hipotensor leve.
            Pode reduzir levemente a pressão arterial — o que é positivo para hipertensos, mas pode causar tontura em quem já tem pressão baixa com consumo elevado.
          </p>
          <p>
            <strong>Quem toma medicamentos para diabetes ou pressão:</strong> confirme com o médico.
            Stevia pode potencializar o efeito de medicamentos pra glicemia e pressão, alterando a dose necessária.
          </p>
          <p>
            O restante: não tem contra-indicação relevante em uso normal.
            Manter stevia na{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            como opção de adoçante é razoável — especialmente se você já tem o hábito de adoçar bebidas.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre stevia</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que é stevia?</p>
              <p className="faq-a">
                Stevia é um adoçante natural extraído das folhas da planta <em>Stevia rebaudiana</em>, nativa do Paraguai e do sul do Brasil.
                Seus compostos ativos — os glicosídeos de esteviol — são entre 200 e 300 vezes mais doces que o açúcar, sem calorias e sem elevar a glicemia.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Stevia é natural ou artificial?</p>
              <p className="faq-a">
                A origem é natural — vem de uma planta.
                Os extratos comerciais passam por processo industrial de extração e purificação.
                O resultado é diferente de morder a folha crua, que tem sabor mais bruto.
                Natural na origem, processado na produção.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Stevia pode substituir o açúcar em todas as receitas?</p>
              <p className="faq-a">
                Não em tudo.
                Funciona bem em bebidas, sobremesas frias e receitas sem fermento biológico.
                Não substitui onde o açúcar tem função física: caramelização, fermentação com fermento biológico, estrutura em massas que dependem do açúcar para umidade e volume.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Stevia faz mal à saúde?</p>
              <p className="faq-a">
                Em consumo normal, não.
                A FDA classificou os extratos de alta pureza como "geralmente reconhecidos como seguros" em 2008.
                A ANVISA aprovou o uso no Brasil.
                Estudos em doses muito altas mostraram efeitos em animais, mas a quantidade necessária está bem além do consumo realista de qualquer pessoa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Stevia tem calorias?</p>
              <p className="faq-a">
                Praticamente zero.
                Os glicosídeos de esteviol não são metabolizados pelo organismo para geração de energia.
                Produtos com stevia misturada a eritritol ou maltodextrina podem ter calorias mínimas, mas o extrato puro tem zero.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto de stevia equivale a uma colher de chá de açúcar?</p>
              <p className="faq-a">
                Depende do formato.
                Stevia culinária 1:1 substitui na mesma medida.
                Extrato puro em pó: cerca de 1/4 de colher de chá equivale a 1 colher de chá de açúcar.
                A concentração varia entre marcas — leia sempre o rótulo antes de medir.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Grávida pode usar stevia?</p>
              <p className="faq-a">
                Sim, para extratos de alta pureza de rebaudiosídeo A refinado.
                FDA e ANVISA não restringem durante a gravidez nessa forma.
                Folha crua e extratos não purificados não têm a mesma classificação de segurança.
                Verifique no rótulo se o produto especifica extrato purificado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Por que stevia tem gosto amargo?</p>
              <p className="faq-a">
                O amargor vem do esteviosídeo, o composto mais abundante na folha.
                O rebaudiosídeo A, também presente, tem sabor mais limpo.
                Produtos premium usam maior proporção de rebaudiosídeo A.
                Se o que você usa tem gosto muito amargo, experimente uma marca com mais rebaudiosídeo A na composição.
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
                Criador do Mise. Trocou o açúcar do café por stevia. Manteve o biscoito.
                O café ficou bom.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem na despensa.<br />
              <em>Bora montar a lista.</em>
            </h2>
            <p>
              O Mise conecta despensa, receitas e lista de compras num só lugar.
              Você para de comprar adoçante que já tem — e para de esquecer o que acabou.
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
