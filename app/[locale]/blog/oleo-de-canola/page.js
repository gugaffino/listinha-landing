import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Óleo de canola: o que é, para que serve e como usar',
  description: 'Óleo de canola tem ponto de fumaça de 204 °C, sabor neutro e baixo teor de gordura saturada. Saiba o que é, se faz mal e como usar certo na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/oleo-de-canola',
  },
  openGraph: {
    title: 'Óleo de canola: o que é, para que serve e como usar',
    description: 'Óleo de canola tem ponto de fumaça de 204 °C, sabor neutro e baixo teor de gordura saturada. Saiba o que é, se faz mal e como usar certo na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/oleo-de-canola',
    images: [
      {
        url: 'https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Óleo vegetal sendo vertido em frigideira durante cozimento em cozinha doméstica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Óleo de canola: o que é, para que serve e como usar',
    description: 'Óleo de canola tem ponto de fumaça de 204 °C, sabor neutro e baixo teor de gordura saturada. Saiba o que é, se faz mal e como usar certo na cozinha.',
    images: ['https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é óleo de canola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Óleo de canola é um óleo vegetal extraído das sementes da planta canola, uma variedade de colza desenvolvida no Canadá na década de 1970. Tem sabor neutro, ponto de fumaça de 204 °C e é um dos óleos com menor teor de gordura saturada disponíveis no mercado — cerca de 7%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Óleo de canola faz mal para a saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não existe evidência científica consistente de que o óleo de canola comercial faz mal quando usado com moderação. O óleo moderno tem menos de 2% de ácido erúcico — bem abaixo do limite estabelecido pela ANVISA. É um óleo refinado, então não é um alimento funcional, mas também não é um perigo. Faz parte de uma alimentação comum e equilibrada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é o ponto de fumaça do óleo de canola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O ponto de fumaça do óleo de canola refinado é de aproximadamente 204 °C. Isso o torna adequado para refogar, saltear e fritar em temperaturas moderadas. Para frituras imersas em temperaturas acima de 180 °C por longos períodos, óleos com ponto de fumaça mais alto são mais indicados.',
      },
    },
    {
      '@type': 'Question',
      name: 'Óleo de canola ou azeite de oliva: qual é melhor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do uso. O azeite extra virgem tem mais compostos antioxidantes e sabor mais complexo — ideal para finalizar pratos e temperar frio. O óleo de canola tem sabor neutro, ponto de fumaça mais previsível e custa menos. Para cozinhar no dia a dia, os dois funcionam bem. Não é necessário escolher um e abolir o outro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Óleo de canola pode ser reutilizado após fritura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode ser reutilizado uma ou duas vezes, desde que não tenha passado do ponto de fumaça — não ficou escuro e com cheiro forte. Filtre antes de guardar para remover resíduos de comida. Óleo que passou do ponto, ficou muito escuro ou tem cheiro de queimado deve ser descartado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar óleo de canola em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guarde em lugar fresco, escuro e longe do fogão. A garrafa fechada dura até a data de validade indicada. Depois de aberta, o ideal é consumir em até 3 a 6 meses. Não precisa de geladeira, mas evite deixar perto de fontes de calor — a oxidação acelera com temperatura alta e luz direta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Canola é uma planta transgênica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A maioria da canola cultivada no mundo e no Brasil é geneticamente modificada. A modificação confere resistência a herbicidas específicos, o que facilita o manejo agrícola. Isso não altera a composição do óleo extraído das sementes. Se você evita transgênicos, procure produtos rotulados como "não GMO" — existem versões convencionais no mercado.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Óleo de canola: o que é, para que serve e como usar',
  description: 'Óleo de canola tem ponto de fumaça de 204 °C, sabor neutro e baixo teor de gordura saturada. Saiba o que é, se faz mal e como usar certo na cozinha.',
  image: 'https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/oleo-de-canola',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Óleo de canola', item: 'https://www.miseemcasa.com.br/pt/blog/oleo-de-canola' },
  ],
}

export default function OleoDeCanola({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Óleo de canola</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-03">3 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Óleo de canola: guia completo para usar certo na cozinha
          </h1>
          <p className="blog-desc">
            Está em quase toda despensa brasileira. Aparece em receitas de bolo, fritura e refogado. Mas poucas pessoas sabem o que é de verdade, se faz mal ou quando trocar pelo azeite.
          </p>

          <div className="answer-box">
            <p>
              <strong>Óleo de canola</strong> é um óleo vegetal extraído das sementes da planta canola — uma variedade de colza desenvolvida no Canadá nos anos 1970.
              Tem sabor neutro, ponto de fumaça de 204 °C e baixo teor de gordura saturada (cerca de 7%).
              É um dos óleos mais usados no Brasil e um dos menos compreendidos.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Óleo vegetal sendo vertido em frigideira durante cozimento em cozinha doméstica"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é óleo de canola</a></li>
              <li><a href="#a-planta">De onde vem — a planta canola</a></li>
              <li><a href="#composicao">O que tem dentro: composição</a></li>
              <li><a href="#faz-mal">Faz mal? O mito explicado</a></li>
              <li><a href="#ponto-de-fumaca">Ponto de fumaça e quando usar</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#canola-vs-azeite">Canola ou azeite: quando usar cada um</a></li>
              <li><a href="#vale-a-pena">Vale colocar na despensa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5737246/pexels-photo-5737246.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pessoa segurando garrafa de óleo vegetal transparente — frasco de vidro sobre superfície clara"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é óleo de canola</h2>

          <p>
            Óleo de canola é extraído pressionando as sementes da planta canola até liberar o óleo, que depois passa por refino para remover impurezas e garantir sabor neutro e estabilidade.
          </p>
          <p>
            O resultado é um óleo claro, sem cor intensa e sem sabor marcante. Ele não vai competir com o sabor do que você está cozinhando — e essa é exatamente a função dele.
          </p>
          <p>
            Você provavelmente tem uma garrafa no armário agora mesmo. Não sabe ao certo o que é, mas está lá.
          </p>
          <p>
            É um dos óleos mais baratos do mercado brasileiro, produzido em larga escala e disponível em qualquer supermercado. Essa combinação de custo, versatilidade e sabor neutro explica por que está em tantas cozinhas.
          </p>

          {/* A PLANTA */}
          <h2 id="a-planta">De onde vem — a planta canola</h2>

          <p>
            Canola não é um nome científico — é uma marca comercial criada no Canadá na década de 1970. O nome vem de <em>Canadian oil, low acid</em>.
          </p>
          <p>
            A planta é uma variedade da colza (<em>Brassica napus</em>), cultivada há séculos na Europa e na Ásia. O problema da colza tradicional era o ácido erúcico — um ácido graxo que, em grandes quantidades, causava problemas em estudos com animais. Pesquisadores canadenses desenvolveram uma variedade com teor drasticamente reduzido desse ácido. Foi essa versão que virou canola.
          </p>
          <p>
            No Brasil, a{' '}
            <a href="https://www.cnpt.embrapa.br" target="_blank" rel="noopener">Embrapa Trigo</a>{' '}
            conduziu décadas de pesquisa para adaptar a cultura ao clima brasileiro, principalmente no Sul do país. Hoje, o Brasil produz canola nos estados do Paraná, Rio Grande do Sul e Santa Catarina.
          </p>
          <p>
            A planta floresce com flores amarelas pequenas e produz vagens com sementes escuras e minúsculas. Da semente sai o óleo — extraído por prensagem a frio ou por processo industrial com solvente, seguido de refino.
          </p>

          {/* COMPOSIÇÃO */}
          <h2 id="composicao">O que tem dentro: composição</h2>

          <p>
            O perfil de gordura do óleo de canola é um dos mais equilibrados entre os óleos vegetais comuns:
          </p>

          <ul className="item-list">
            <li><strong>Gordura saturada:</strong> cerca de 7% — o menor índice entre os óleos mais vendidos no Brasil</li>
            <li><strong>Gordura monoinsaturada (ômega-9):</strong> cerca de 63% — o mesmo tipo predominante no azeite de oliva</li>
            <li><strong>Gordura poli-insaturada:</strong> cerca de 28%, incluindo ômega-6 e ômega-3</li>
            <li><strong>Ômega-3 (ALA):</strong> cerca de 11% — valor relevante para um óleo de cozinha comum</li>
          </ul>

          <p>
            Para comparar: óleo de soja tem cerca de 15% de gordura saturada. Óleo de coco tem cerca de 87%. O canola fica no extremo oposto.
          </p>
          <p>
            A presença de ômega-3 em quantidade relevante diferencia o canola de outros óleos de cozinha. É um ácido graxo essencial — o corpo não produz, precisa vir da alimentação. Não é a mesma forma de ômega-3 do peixe (EPA e DHA), mas o ALA presente no canola é convertível em pequenas quantidades. Se você quer se aprofundar na diferença entre tipos de gordura vegetal, veja o que explicamos no post sobre{' '}
            <a href="/blog/para-que-serve-oleo-de-linhaca">óleo de linhaça</a>, que tem concentração ainda maior de ALA.
          </p>
          <p>
            O óleo de canola refinado também tem vitamina E (tocoferol) em pequena quantidade — um antioxidante que ajuda a estabilizar o óleo durante o armazenamento.
          </p>

          {/* FAZ MAL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5093677/pexels-photo-5093677.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mulher cozinhando em cozinha doméstica — preparando refogado em frigideira no fogão"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
          </div>

          <h2 id="faz-mal" className="img-above">Faz mal? O mito explicado</h2>

          <p>
            A principal crítica ao óleo de canola é o ácido erúcico — o mesmo ácido que motivou o desenvolvimento da canola moderna. Estudos antigos com animais alimentados com altas doses mostraram problemas cardíacos. Esse dado virou a base de inúmeros artigos alarmistas.
          </p>
          <p>
            O que esses textos ignoram: o óleo de canola moderno tem menos de 2% de ácido erúcico. A{' '}
            <a href="https://www.gov.br/anvisa/pt-br" target="_blank" rel="noopener">ANVISA</a>{' '}
            regula esse limite e os óleos comercializados no Brasil precisam segui-lo. Não é o mesmo produto dos estudos originais.
          </p>
          <p>
            Esse mito circula em grupo de família com a mesma confiança de tantas outras informações que chegam como imagem de baixa resolução. Vale checar antes de repassar.
          </p>
          <p>
            O ponto legítimo de preocupação é outro: o processo de refino pode gerar pequenas quantidades de gorduras trans durante a desodorização em alta temperatura. Estudos mostram que o nível no produto final é muito baixo — menos de 1% — mas existe. É uma diferença real em relação ao óleo de canola prensado a frio, que não passa por esse processo.
          </p>
          <p>
            Conclusão prática: o óleo de canola refinado é um óleo comum. Não é um superalimento, mas também não é um perigo. Faz parte de uma alimentação normal quando usado com moderação — como qualquer óleo vegetal.
          </p>

          {/* PONTO DE FUMAÇA */}
          <h2 id="ponto-de-fumaca">Ponto de fumaça e quando usar</h2>

          <p>
            Ponto de fumaça é a temperatura em que um óleo começa a se degradar e liberar compostos indesejados — a fumaça visível é o sinal. Cozinhar acima desse ponto não é seguro e não é saboroso.
          </p>
          <p>
            O óleo de canola refinado tem ponto de fumaça de aproximadamente 204 °C. Óleo queimando na frigideira não é o começo de um bom refogado.
          </p>
          <p>
            Para referência, alguns comparativos:
          </p>

          <ul className="item-list">
            <li><strong>Óleo de canola refinado:</strong> ~204 °C</li>
            <li><strong>Azeite extra virgem:</strong> ~160–190 °C (varia por qualidade e acidez)</li>
            <li><strong>Azeite refinado:</strong> ~220 °C</li>
            <li><strong>Óleo de soja:</strong> ~227 °C</li>
            <li><strong>Óleo de coco refinado:</strong> ~232 °C</li>
            <li><strong>Manteiga:</strong> ~150 °C</li>
          </ul>

          <p>
            O azeite extra virgem — aquele que você guarda para finalização — tem ponto de fumaça mais baixo. Usá-lo para fritar em alta temperatura é desperdiçar o sabor e os compostos que o diferenciam, além de degradar o óleo antes da hora.
          </p>
          <p>
            O canola, com seus 204 °C, aguenta bem o refogado do dia a dia, a panela de arroz, o bolo. Para frituras imersas em temperaturas mais altas (acima de 180 °C por longos períodos), óleos de soja ou amendoim têm mais margem de segurança.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar na cozinha</h2>

          <p>
            O sabor neutro do canola é a característica mais útil para a cozinha do dia a dia. Ele não compete com nenhum tempero, nenhum ingrediente, nenhum perfil de receita.
          </p>

          <h3>Refogar e saltear</h3>
          <p>
            O uso mais comum. Funciona para refogar cebola e alho, saltear legumes, selar carne em fogo médio. A temperatura do fogão doméstico raramente passa de 180 °C no uso cotidiano — o canola suporta sem problema.
          </p>

          <h3>Fritura rasa</h3>
          <p>
            Boa escolha para fritar ovo, panqueca, croquete e outros que usam pouco óleo em temperatura moderada. Para fritura imersa com temperatura mais alta e por mais tempo, o óleo de soja tem mais margem de segurança.
          </p>

          <h3>Receitas de bolo e pão</h3>
          <p>
            Ótimo substituto para outros óleos em massas. O sabor neutro não interfere com baunilha, chocolate ou frutas. Deixa o bolo úmido sem adicionar gosto próprio. É o padrão de muitas receitas que pedem "óleo vegetal" sem especificar qual.
          </p>

          <h3>Molhos frios e maionese</h3>
          <p>
            Funciona como base para maionese caseira — o sabor neutro é essencial aqui. Em molhos de salada frios, mistura bem e não solidifica na geladeira, ao contrário de alguns outros óleos vegetais.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* CANOLA VS AZEITE */}
          <h2 id="canola-vs-azeite">Canola ou azeite: quando usar cada um</h2>

          <p>
            A pergunta aparece toda hora. A resposta é: não precisa escolher um. Os dois têm funções diferentes.
          </p>

          <h3>Use canola quando:</h3>
          <ul className="item-list">
            <li>A receita pede "óleo vegetal" sem especificar</li>
            <li>Você vai cozinhar em fogo médio ou alto e não quer desperdiçar o sabor do azeite bom</li>
            <li>Vai fazer massa de bolo ou pão — o sabor neutro não interfere</li>
            <li>Vai fritar em quantidade e quer economizar</li>
            <li>Vai fazer maionese caseira</li>
          </ul>

          <h3>Use azeite extra virgem quando:</h3>
          <ul className="item-list">
            <li>O sabor do azeite faz parte do prato — pão com azeite, salada, bruschetta</li>
            <li>Vai finalizar um prato quente já fora do fogo</li>
            <li>A receita é simples e o azeite é o tempero principal</li>
            <li>Vai cozinhar em fogo baixo ou médio-baixo</li>
          </ul>

          <p>
            Guardar os dois na{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            e usar cada um no contexto certo é mais prático — e mais econômico — do que tentar substituir um pelo outro em todo uso.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale colocar na despensa</h2>

          <p>
            Sim. Para quem cozinha no dia a dia, o óleo de canola é um item de base — tão fundamental quanto sal e cebola.
          </p>
          <p>
            O preço é acessível, a validade é longa (geralmente 12 a 18 meses a partir da fabricação) e o uso é amplo. Não é um ingrediente que você vai usar uma vez e esquecer na prateleira.
          </p>
          <p>
            A única consideração é o armazenamento: guarde longe do fogão e da luz direta. Calor e luz aceleram a oxidação. O óleo guardado errado fica rançoso antes do prazo — você percebe pelo cheiro.
          </p>
          <p>
            Se você está montando uma{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            ou reorganizando a despensa, o óleo de canola entra na categoria de itens que nunca devem faltar. Junto com o azeite para finalização, você cobre 90% das necessidades de gordura de uma cozinha doméstica.
          </p>
          <p>
            Coloca na{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            quando estiver acabando — não espera chegar ao fim. Descobrir que o óleo acabou no meio de um refogado é uma das pequenas frustrações que não precisam existir.
          </p>
          <p>
            Não precisa de muita atenção. Só precisa estar lá.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre óleo de canola</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que é óleo de canola?</p>
              <p className="faq-a">
                É um óleo vegetal extraído das sementes da planta canola, uma variedade de colza desenvolvida no Canadá nos anos 1970. Tem sabor neutro, ponto de fumaça de 204 °C e baixo teor de gordura saturada — cerca de 7%.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Óleo de canola faz mal para a saúde?</p>
              <p className="faq-a">
                Não existe evidência consistente de que faz mal quando usado com moderação. O óleo moderno tem menos de 2% de ácido erúcico — bem abaixo do limite da ANVISA. É um óleo refinado comum. Faz parte de uma alimentação equilibrada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual é o ponto de fumaça do óleo de canola?</p>
              <p className="faq-a">
                Aproximadamente 204 °C. Adequado para refogar, saltear e fritura rasa em temperatura moderada. Para frituras imersas em temperatura mais alta, óleos de soja ou amendoim têm mais margem de segurança.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Óleo de canola ou azeite de oliva: qual é melhor?</p>
              <p className="faq-a">
                Depende do uso. O azeite extra virgem tem mais compostos antioxidantes e sabor mais complexo — ideal para finalizar e temperar frio. O canola tem sabor neutro e ponto de fumaça mais previsível — ideal para cozinhar no dia a dia. Não é necessário escolher um e abolir o outro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Óleo de canola pode ser reutilizado após fritura?</p>
              <p className="faq-a">
                Pode ser reutilizado uma ou duas vezes, desde que não tenha passado do ponto de fumaça. Filtre antes de guardar. Óleo que ficou muito escuro ou com cheiro de queimado deve ser descartado — reutilizá-lo produz compostos que não fazem bem.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar óleo de canola em casa?</p>
              <p className="faq-a">
                Em lugar fresco, escuro e longe do fogão. Depois de aberto, consuma em até 3 a 6 meses. Não precisa de geladeira. Evite calor e luz direta — aceleram a oxidação e deixam o óleo rançoso antes do prazo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Canola é uma planta transgênica?</p>
              <p className="faq-a">
                A maioria da canola cultivada no mundo e no Brasil é geneticamente modificada — a modificação confere resistência a herbicidas. Isso não altera a composição do óleo extraído. Se você evita transgênicos, procure versões rotuladas como "não GMO".
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
                Criador do Mise. Usa óleo de canola pra tudo no meio da semana e reserva o azeite pra finalização. O azeite bom fica na mesma prateleira faz meses. Tudo certo.
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
              O óleo de canola aparece na lista antes de acabar — não depois.
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
