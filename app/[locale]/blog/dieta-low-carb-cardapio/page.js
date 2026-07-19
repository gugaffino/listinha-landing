import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Cardápio low carb para 7 dias: refeições prontas pra copiar',
  description: 'Cardápio low carb com 7 dias de refeições prontas para café da manhã, almoço e jantar. Inclui lista de compras e dicas para não abandonar na quarta-feira.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/dieta-low-carb-cardapio',
  },
  openGraph: {
    title: 'Cardápio low carb para 7 dias: refeições prontas pra copiar',
    description: 'Cardápio low carb com 7 dias de refeições prontas para café da manhã, almoço e jantar. Inclui lista de compras e dicas para não abandonar na quarta-feira.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/dieta-low-carb-cardapio',
    images: [
      {
        url: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Flat-lay de alimentos low carb: abacate, folhas verdes, oleaginosas e vegetais frescos sobre fundo escuro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardápio low carb para 7 dias: refeições prontas pra copiar',
    description: 'Cardápio low carb com 7 dias de refeições prontas para café da manhã, almoço e jantar. Inclui lista de compras e dicas para não abandonar na quarta-feira.',
    images: ['https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que comer no café da manhã na dieta low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ovos são a opção mais prática: mexidos, cozidos ou em omelete, prontos em menos de dez minutos. Iogurte natural integral com nozes ou castanhas também funciona bem. O que sai é o pão, a tapioca, o suco industrializado e qualquer cereal com açúcar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso comer feijão na dieta low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Feijão tem carboidrato — mais do que brócolis, menos do que arroz. A maioria das abordagens low carb reduz o feijão, mas não elimina completamente. Uma porção pequena e ocasional não desfaz o padrão da semana. Depende do nível de restrição que você está seguindo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre low carb e dieta cetogênica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Low carb é qualquer alimentação que reduz carboidratos de forma significativa, sem limite rígido. Cetogênica (keto) é uma versão mais restrita, com menos de 20 a 50 g de carboidrato por dia, que leva o metabolismo ao estado de cetose. Este cardápio é low carb genérico — não exige contagem estrita nem restrição extrema.',
      },
    },
    {
      '@type': 'Question',
      name: 'Low carb é caro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não necessariamente. Ovos, frango e vegetais da época estão entre os alimentos mais acessíveis do mercado. O mito de que low carb é caro vem de produtos específicos, como farinha de amêndoa e laticínios premium, que não são obrigatórios. A proteína barata da semana continua sendo ovo e frango.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá pra fazer low carb sem cozinhar todos os dias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, com preparo antecipado. Grelhar frango e carne no domingo resolve três a quatro dias de almoço. Ovos cozidos ficam na geladeira por uma semana. Frango desfiado serve em salada, omelete ou direto no prato. Não precisa cozinhar do zero todo dia — só ter o básico pronto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso seguir low carb só durante a semana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Alguns praticantes seguem o padrão durante a semana e relaxam no final de semana — é uma abordagem comum. O efeito varia conforme a pessoa. O importante é ter um padrão consistente, não perfeição diária. Um dia de arroz não cancela os outros seis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva pra ver resultado com low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varia bastante conforme metabolismo, ponto de partida e como está o restante da alimentação. Este post é um plano de refeições — não um guia de resultados prometidos. Para acompanhamento individualizado, consulte um nutricionista.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cardápio low carb para 7 dias: refeições prontas pra copiar',
  description: 'Cardápio low carb com 7 dias de refeições prontas para café da manhã, almoço e jantar. Inclui lista de compras e dicas para não abandonar na quarta-feira.',
  image: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/dieta-low-carb-cardapio',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cardápio low carb para 7 dias', item: 'https://www.miseemcasa.com.br/pt/blog/dieta-low-carb-cardapio' },
  ],
}

export default function DietaLowCarbCardapio({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Cardápio low carb para 7 dias</li>
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
            Cardápio low carb semanal: 7 dias de refeições prontas sem reinventar o prato
          </h1>
          <p className="blog-desc">
            Você decidiu seguir a dieta low carb. O cardápio da semana ainda não existe. Este guia resolve isso: sete dias completos de refeições, do café da manhã ao jantar, com a lista de compras que vai junto.
          </p>

          <div className="answer-box">
            <p>
              O <strong>cardápio low carb semanal</strong> tem como base proteínas (ovos, carne, frango, peixe),
              vegetais de baixo amido (brócolis, couve-flor, abobrinha, folhas verdes) e gorduras como azeite,
              manteiga e abacate. Arroz, pão, macarrão, batata e açúcar saem do prato — ou ficam só
              nos dias em que você decidir incluí-los.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Flat-lay de alimentos low carb: abacate, folhas verdes, oleaginosas e vegetais frescos sobre fundo escuro"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Elle Hughes / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é low carb na prática</a></li>
              <li><a href="#o-que-comer">O que entra e o que sai do prato</a></li>
              <li><a href="#cardapio">Cardápio dos 7 dias</a></li>
              <li><a href="#lista">Lista de compras da semana</a></li>
              <li><a href="#como-manter">Como não abandonar na quarta-feira</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É LOW CARB */}
          <h2 id="o-que-e">O que é low carb na prática</h2>

          <p>
            Low carb não tem nome de cientista nem patente registrada. É uma instrução simples:
            coma menos carboidrato. Quanto menos depende da abordagem que você escolheu, mas o modelo
            mais comum funciona assim — proteínas e gorduras no centro do prato, vegetais que crescem
            acima da terra, e carboidratos refinados fora da equação na maior parte do tempo.
          </p>
          <p>
            Na prática brasileira, isso muda bastante a cozinha. O trio arroz, feijão e macarrão
            responde por boa parte dos carboidratos da dieta típica. Retirar o arroz não é só tirar
            um ingrediente — é reorganizar o que o almoço significa. É isso que a maioria das pessoas
            não esperava quando decidiu comer low carb na segunda-feira de manhã.
          </p>
          <p>
            A dificuldade real não é entender a regra. É planejar a semana sem o arroz como base.
            Decidir todo dia o que entra no lugar esgota antes do cansaço físico chegar. Pesquisa
            da Nielsen (2022) mostra que 62% dos brasileiros vão ao mercado sem lista — que dirá
            com um cardápio semanal já montado. A fadiga de decisão é o que derruba mais gente
            do que qualquer vontade de comer pão.
          </p>
          <p>
            Este cardápio não tenta convencer você a comer low carb. Assume que você já decidiu
            isso e resolve o próximo problema: o que você vai comer segunda de manhã, quarta à noite,
            e no domingo quando a semana inteira ainda está por planejar. O cardápio da dieta low carb
            abaixo responde isso prato a prato.
          </p>

          {/* O QUE ENTRA E O QUE SAI */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Flatlay de alimentos nutritivos: legumes coloridos, proteínas e oleaginosas em tigelas brancas sobre mesa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vanessa Loring / Pexels</p>
          </div>

          <h2 id="o-que-comer" className="img-above">O que entra e o que sai do prato</h2>

          <p>
            A base do cardápio low carb usa ingredientes acessíveis e disponíveis em qualquer
            mercado. Não tem nada exótico na lista.
          </p>

          <h3>Proteínas — o centro de cada refeição</h3>
          <ul className="item-list">
            <li><strong>Ovos</strong> — mexidos, cozidos, omelete ou estrelado. O curinga do cardápio.</li>
            <li><strong>Frango</strong> — filé, sobrecoxa, frango moído. A proteína mais barata da semana.</li>
            <li><strong>Carne</strong> — contrafilé, patinho moído, costelinha.</li>
            <li><strong>Peixe</strong> — tilápia, merluza, qualquer filé branco.</li>
            <li><strong>Laticínios</strong> — queijo, iogurte natural integral, manteiga.</li>
            <li><strong>Outros</strong> — bacon, presunto, linguiça (com moderação).</li>
          </ul>

          <h3>Vegetais — sem restrição nas folhas e crucíferas</h3>
          <ul className="item-list">
            <li><strong>Folhas verdes</strong> — alface, rúcula, agrião, espinafre, couve.</li>
            <li><strong>Crucíferas</strong> — brócolis e couve-flor substituem arroz em vários formatos.</li>
            <li><strong>Outros legumes</strong> — abobrinha, chuchu, vagem, pimentão, pepino.</li>
            <li><strong>Com moderação</strong> — tomate, cenoura, cebola (têm mais carboidrato).</li>
            <li><strong>Abacate</strong> — rico em gordura boa, sacia bem entre refeições.</li>
          </ul>

          <h3>O que sai</h3>
          <ul className="item-list">
            <li>Arroz, macarrão, pão, tapioca, beiju</li>
            <li>Batata, mandioca, inhame, cará</li>
            <li>Açúcar em qualquer forma — mel, rapadura, adoçantes calóricos</li>
            <li>Suco industrializado, refrigerante, isotônico com açúcar</li>
            <li>Biscoito, bolacha, ultraprocessados com lista de ingredientes interminável</li>
          </ul>

          <p>
            Uma observação prática: low carb não exige que você conte carboidrato em gramas
            nem calcule porções. Se os ingredientes do seu prato têm nome reconhecível —
            frango, brócolis, azeite — você provavelmente está dentro do modelo.
            Se o rótulo tem doze ingredientes com nomes de laboratório, provavelmente não.
          </p>

          {/* CARDÁPIO DOS 7 DIAS */}
          <h2 id="cardapio">Cardápio dos 7 dias</h2>

          <p>
            O cardápio abaixo assume três refeições por dia. Se tiver fome entre elas, nozes
            e castanhas resolvem sem precisar de lanche elaborado. As refeições foram pensadas
            com ingredientes que se repetem durante a semana — frango grelhado de uma refeição
            vira frango desfiado na outra. Menos desperdício, menos tempo na cozinha.
          </p>

          <ol className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Segunda-feira</strong>
                <span>
                  Café: Ovos mexidos com queijo<br />
                  Almoço: Frango grelhado + salada de folhas + abobrinha refogada<br />
                  Jantar: Omelete de presunto e queijo
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Terça-feira</strong>
                <span>
                  Café: Iogurte natural integral com nozes<br />
                  Almoço: Carne moída com couve-flor refogada no lugar de arroz<br />
                  Jantar: Tilápia grelhada com brócolis no alho e óleo
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Quarta-feira</strong>
                <span>
                  Café: Ovos cozidos + abacate com sal e limão<br />
                  Almoço: Filé de frango com vagem e pimentão salteados<br />
                  Jantar: Costelinha assada com repolho refogado
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">4</div>
              <div className="tip-body">
                <strong>Quinta-feira</strong>
                <span>
                  Café: Omelete de espinafre com queijo<br />
                  Almoço: Patinho moído com vagem e cenoura<br />
                  Jantar: Peixe assado com salada de tomate e pepino
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">5</div>
              <div className="tip-body">
                <strong>Sexta-feira</strong>
                <span>
                  Café: Ovos mexidos com bacon<br />
                  Almoço: Frango ensopado com cenoura e chuchu<br />
                  Jantar: Hambúrguer sem pão com salada de folhas
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">6</div>
              <div className="tip-body">
                <strong>Sábado</strong>
                <span>
                  Café: Iogurte natural com sementes de chia e castanhas<br />
                  Almoço: Contrafilé grelhado com brócolis no alho e óleo<br />
                  Jantar: Frango desfiado com couve refogada
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">7</div>
              <div className="tip-body">
                <strong>Domingo</strong>
                <span>
                  Café: Ovos mexidos com tomate e queijo<br />
                  Almoço: Costelinha de porco com purê de couve-flor<br />
                  Jantar: Omelete de queijo e ervas
                </span>
              </div>
            </li>
          </ol>

          <p>
            Este cardápio pode — e deve — ser adaptado. Se você não come peixe, troca por frango.
            Se não tem costelinha, entra contrafilé. O que importa é manter a lógica: proteína + vegetal,
            sem a base de carboidrato refinado. Para montar o seu{' '}
            <a href="/funcionalidades/cardapio-semanal">cardápio semanal</a>{' '}
            e já gerar a lista de compras automática, o Mise faz isso.
          </p>

          {/* LISTA DE COMPRAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tigela colorida com salada de folhas verdes, tomate e legumes frescos — refeição low carb simples"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="lista" className="img-above">Lista de compras da semana</h2>

          <p>
            A lista abaixo cobre os sete dias do cardápio acima. As quantidades são estimadas
            para uma pessoa — dobre se for para duas. Para salvar e adaptar na sua{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>,
            basta abrir o Mise e marcar o que você já tem na{' '}
            <a href="/funcionalidades/despensa">despensa</a>.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista de compras — semana low carb</span>
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Proteínas</h4>
                <ul>
                  <li>Frango filé ou sobrecoxa (2 kg)</li>
                  <li>Carne moída (500 g)</li>
                  <li>Ovos (2 dúzias)</li>
                  <li>Tilápia ou peixe branco (500 g)</li>
                  <li>Costelinha (1 kg)</li>
                  <li>Bacon (200 g)</li>
                  <li>Presunto fatiado (200 g)</li>
                  <li>Hambúrguer artesanal (4 unid.)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Vegetais e folhas</h4>
                <ul>
                  <li>Alface e rúcula</li>
                  <li>Brócolis (2 cabeças)</li>
                  <li>Couve-flor (1 cabeça)</li>
                  <li>Abobrinha (3 unid.)</li>
                  <li>Vagem (300 g)</li>
                  <li>Repolho (½ unid.)</li>
                  <li>Couve (1 maço)</li>
                  <li>Espinafre, pimentão, tomate</li>
                  <li>Pepino, cenoura, chuchu</li>
                  <li>Abacate (3 unid.)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Laticínios e outros</h4>
                <ul>
                  <li>Queijo muçarela ou prato</li>
                  <li>Iogurte natural integral (2 potes)</li>
                  <li>Manteiga</li>
                  <li>Nozes ou castanhas (200 g)</li>
                  <li>Sementes de chia</li>
                  <li>Azeite de oliva</li>
                  <li>Alho, sal, temperos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO MANTER */}
          <h2 id="como-manter">Como não abandonar na quarta-feira</h2>

          <p>
            A maior razão para desistir do low carb não é falta de vontade. É chegar em casa
            com fome, a geladeira sem nada pronto, e o app de delivery a três cliques de distância.
            Não é fraqueza — é ausência de infraestrutura.
          </p>

          <ol className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Grelhe proteína no domingo</strong>
                <span>
                  Frango desfiado, ovos cozidos e carne moída temperada ficam na geladeira
                  por três a quatro dias. Quando o almoço está a quinze minutos de ficar pronto,
                  é mais difícil ceder ao que estava mais fácil.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Tenha um fallback</strong>
                <span>
                  Ovos estão sempre disponíveis. Omelete em três minutos resolve qualquer
                  refeição de emergência — e está no cardápio de qualquer forma. Quando você
                  não planejou o jantar, a resposta já é conhecida.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Monte a lista antes de ir ao mercado</strong>
                <span>
                  62% dos brasileiros vão ao mercado sem lista (Nielsen, 2022). Ir com a{' '}
                  <a href="/blog/lista-basica-de-compras">lista de compras</a>{' '}
                  da semana montada evita decisões por impulso — e evita chegar em casa
                  sem nenhum vegetal e com três pacotes de biscoito.
                </span>
              </div>
            </li>
          </ol>

          <p>
            Para conectar o{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>{' '}
            à lista de compras de forma automática, o Mise faz isso: você monta o cardápio
            e a lista sai pronta, com os ingredientes agrupados por categoria. Sem copiar
            item por item de um papel amassado.
          </p>

          <p>
            Nenhum cardápio funciona 100% dos sete dias. Se você comeu arroz na quinta,
            isso não cancela os outros seis. Low carb é um padrão, não uma prova de disciplina
            que reinicia do zero no primeiro deslize.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre cardápio low carb</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que comer no café da manhã na dieta low carb?</p>
              <p className="faq-a">
                Ovos são a opção mais prática: mexidos, cozidos ou em omelete, prontos em menos
                de dez minutos. Iogurte natural integral com nozes ou castanhas também funciona bem.
                O que sai é o pão, a tapioca, o suco industrializado e qualquer cereal com açúcar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso comer feijão na dieta low carb?</p>
              <p className="faq-a">
                Feijão tem carboidrato — mais do que brócolis, bem menos do que macarrão. A maioria
                das abordagens low carb reduz o feijão, mas não elimina completamente. Uma porção
                pequena e ocasional não desfaz o padrão da semana. Depende do nível de restrição
                que você está seguindo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre low carb e dieta cetogênica?</p>
              <p className="faq-a">
                Low carb é qualquer alimentação que reduz carboidratos de forma significativa,
                sem limite rígido. Cetogênica (keto) é uma versão mais restrita, com menos de
                20 a 50 g de carboidrato por dia, que leva o metabolismo ao estado de cetose.
                Este cardápio é low carb genérico — não exige contagem estrita nem restrição extrema.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Low carb é caro?</p>
              <p className="faq-a">
                Não necessariamente. Ovos, frango e vegetais da época estão entre os alimentos
                mais acessíveis do mercado. O mito de que low carb é caro vem de produtos
                específicos — farinha de amêndoa, laticínios premium — que não são obrigatórios.
                A proteína barata da semana continua sendo ovo e frango.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Dá pra fazer low carb sem cozinhar todos os dias?</p>
              <p className="faq-a">
                Sim, com preparo antecipado. Grelhar frango e carne no domingo resolve
                três a quatro dias de almoço. Ovos cozidos ficam na geladeira por uma semana.
                Frango desfiado serve em salada, omelete ou direto no prato. Não precisa
                cozinhar do zero todo dia — só ter o básico pronto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso seguir low carb só durante a semana?</p>
              <p className="faq-a">
                Sim. Alguns praticantes seguem o padrão durante a semana e relaxam no final
                de semana — é uma abordagem comum. O efeito varia conforme a pessoa. O
                importante é ter um padrão consistente, não perfeição diária. Um dia de arroz
                não cancela os outros seis.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto tempo leva pra ver resultado com low carb?</p>
              <p className="faq-a">
                Varia bastante conforme metabolismo, ponto de partida e o restante da alimentação.
                Este post é um plano de refeições — não um guia de resultados prometidos.
                Para acompanhamento individualizado, consulte um nutricionista.
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
                Criador do Mise. Fez low carb por três semanas, foi ótimo. Na quarta semana,
                chegou em casa com fome e sem nada na geladeira. Criou o app pra resolver exatamente esse problema.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Cardápio montado.<br />
              <em>A lista sai sozinha.</em>
            </h2>
            <p>
              Com o Mise, você monta o cardápio da semana e a lista de compras aparece pronta.
              Despensa conectada, sem copiar item por item.
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
