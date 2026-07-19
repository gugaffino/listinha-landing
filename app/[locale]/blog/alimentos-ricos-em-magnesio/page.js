import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Alimentos ricos em magnésio: lista completa e dicas práticas',
  description: 'Magnésio está em sementes, oleaginosas e feijão. Veja 12 fontes com as quantidades por porção e como incluir mais na sua semana sem precisar de suplemento.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-magnesio',
  },
  openGraph: {
    title: 'Alimentos ricos em magnésio: lista completa e dicas práticas',
    description: 'Magnésio está em sementes, oleaginosas e feijão. Veja 12 fontes com as quantidades por porção e como incluir mais na sua semana sem precisar de suplemento.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-magnesio',
    images: [
      {
        url: 'https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Flatlay de amêndoas, sementes, lentilhas e nozes em tigelas de porcelana sobre superfície de madeira',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alimentos ricos em magnésio: lista completa e dicas práticas',
    description: 'Magnésio está em sementes, oleaginosas e feijão. Veja 12 fontes com as quantidades por porção e como incluir mais na sua semana sem precisar de suplemento.',
    images: ['https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual alimento tem mais magnésio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As sementes de abóbora são a fonte mais concentrada: 30g têm cerca de 160 mg de magnésio, quase 40% da necessidade diária de um adulto. Na sequência vêm amêndoas (80 mg por 30g), espinafre cozido (78 mg por xícara) e feijão preto cozido (60 mg por meia xícara).',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto magnésio uma pessoa precisa por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A recomendação para adultos é de 310 a 420 mg por dia, variando conforme sexo e faixa etária. Mulheres grávidas precisam de mais. Essa quantidade é alcançável com alimentação variada — sementes, oleaginosas, vegetais de folha escura e leguminosas combinados ao longo do dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais são os sintomas de falta de magnésio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os primeiros sinais costumam ser câimbras musculares, cansaço, irritabilidade e dificuldade para dormir. Em casos mais severos, podem ocorrer palpitações cardíacas e dormência. São sintomas vagos que parecem desconexos entre si — por isso a deficiência demora para ser identificada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chocolate amargo tem magnésio de verdade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '30g de chocolate com 70% ou mais de cacau têm cerca de 65 mg de magnésio. É uma fonte real do mineral, não uma justificativa. O chocolate ao leite tem muito menos porque o percentual de cacau é mais baixo. Para contar como fonte de magnésio, precisa ser o amargo de verdade.',
      },
    },
    {
      '@type': 'Question',
      name: 'O cozimento reduz o magnésio dos alimentos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cozinhar em água e descartar o caldo sim — parte do mineral vai para o líquido. Refogar, cozinhar no vapor ou assar perde muito menos. No caso do feijão, o caldo de cozimento retém boa parte do magnésio, então o caldinho conta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vale a pena suplementar magnésio sem orientação médica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geralmente não. Para a maioria das pessoas sem condição médica específica, ajustar a alimentação já resolve. Suplementação sem necessidade pode causar efeitos gastrointestinais, especialmente diarreia. Se quiser investigar deficiência, exame de sangue com médico é o caminho certo.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alimentos ricos em magnésio: lista completa e dicas práticas',
  description: 'Magnésio está em sementes, oleaginosas e feijão. Veja 12 fontes com as quantidades por porção e como incluir mais na sua semana sem precisar de suplemento.',
  image: 'https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/blog/alimentos-ricos-em-magnesio',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Alimentos ricos em magnésio', item: 'https://www.miseemcasa.com.br/blog/alimentos-ricos-em-magnesio' },
  ],
}

export default function AlimentosRicosEmMagnesio({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Alimentos ricos em magnésio</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-30">30 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que comer pra ter mais magnésio: 12 alimentos que a sua despensa precisa
          </h1>
          <p className="blog-desc">
            Magnésio é um dos minerais mais falados quando o assunto é saúde — e um dos menos lembrados na hora de montar a lista de compras. Não é difícil de encontrar. É questão de saber onde ele está de verdade.
          </p>

          <div className="answer-box">
            <p>
              <strong>Alimentos ricos em magnésio</strong> incluem sementes de abóbora, amêndoas, espinafre cozido, feijão preto, aveia em flocos, arroz integral e chocolate amargo acima de 70% de cacau. A necessidade diária para adultos é de{' '}
              <a href="https://ods.od.nih.gov/factsheets/Magnesium-Consumer/" target="_blank" rel="noopener">310 a 420 mg</a>{' '}
              — alcançável com alimentação variada, sem suplemento na maioria dos casos.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Flatlay de amêndoas, sementes, lentilhas, quinoa e nozes em tigelas de porcelana sobre superfície de madeira"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Vie Studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é magnésio e por que falta na dieta</a></li>
              <li><a href="#lista">12 alimentos ricos em magnésio</a></li>
              <li><a href="#absorcao">O que reduz a absorção</a></li>
              <li><a href="#suplemento">Suplemento ou alimentação</a></li>
              <li><a href="#como-incluir">Como incluir mais na semana</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <h2 id="o-que-e">O que é magnésio e por que falta na dieta de tanta gente</h2>

          <p>
            Magnésio participa de mais de 300 reações no organismo: produção de energia, contração muscular, regulação da pressão arterial, síntese de proteínas. É um mineral de fundo — quando está em equilíbrio, você não percebe. Quando falta, o corpo avisa de formas que parecem desconexas entre si.
          </p>
          <p>
            O problema está na dieta típica. Arroz branco, pão refinado, carnes magras e ultraprocessados são naturalmente pobres em magnésio. O arroz branco tem cerca de quatro vezes menos magnésio do que o integral. O pão branco, menos que o de grão inteiro. A tendência de comer mais industrializado foi retirando as fontes naturais do cardápio sem que a maioria das pessoas percebesse.
          </p>
          <p>
            Não é preciso mudar tudo de uma vez. Mas vale saber quais alimentos entregam o mineral de verdade — e quais parecem saudáveis mas não contribuem tanto quanto aparentam.
          </p>

          {/* LISTA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Flatlay de alimentos nutritivos — amêndoas, sementes de girassol, linhaça, lentilhas e nozes em tigelas brancas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vanessa Loring / Pexels</p>
          </div>

          <h2 id="lista" className="img-above">12 alimentos ricos em magnésio para colocar na lista</h2>

          <p>
            Todas as fontes abaixo são acessíveis no mercado brasileiro. As quantidades por porção são aproximadas — variam conforme o preparo, a origem e a marca.
          </p>

          <h3>Sementes de abóbora</h3>
          <p>
            A fonte mais concentrada de magnésio da lista. 30g de sementes de abóbora torradas têm cerca de 160 mg do mineral — quase 40% da necessidade diária de um adulto. Come como snack, mistura no iogurte ou polvilha na salada. Preço baixo, impacto alto.
          </p>

          <h3>Amêndoas</h3>
          <p>
            30g de amêndoas têm aproximadamente 80 mg de magnésio. Não precisam de geladeira, são fáceis de carregar e vão bem em qualquer horário. O detalhe: o pacote costuma acabar bem antes do planejado. Isso não é problema do magnésio.
          </p>

          <h3>Espinafre cozido</h3>
          <p>
            Uma xícara de espinafre cozido entrega cerca de 78 mg de magnésio. O cozimento concentra o mineral — você come mais folha em menos volume. Refogado no azeite, a absorção é boa. O espinafre cru na salada tem menos impacto por porção, mas ainda conta.
          </p>

          <h3>Feijão preto cozido</h3>
          <p>
            Meia xícara de feijão preto cozido tem aproximadamente 60 mg de magnésio. O feijão que já deveria estar na maioria dos cardápios brasileiros. O feijão carioca tem um pouco menos, mas ainda é boa fonte. Bônus: o caldo de cozimento retém parte do mineral.
          </p>

          <h3>Aveia em flocos</h3>
          <p>
            40g de aveia crua no café da manhã entregam cerca de 70 mg de magnésio. Fácil de incluir, vai bem com frutas e oleaginosas na mesma refeição. Se você já come aveia regularmente, já está contribuindo bem sem perceber.
          </p>

          <h3>Arroz integral</h3>
          <p>
            Uma xícara de arroz integral cozido tem cerca de 84 mg de magnésio. Compare com o arroz branco — a mesma porção tem cerca de 19 mg. A diferença é grande. Não é preciso abandonar o branco, mas misturar os dois já faz diferença ao longo da semana.
          </p>

          <h3>Castanha de caju</h3>
          <p>
            30g de castanha de caju têm em torno de 75 mg de magnésio. Versátil: come pura, usa em receitas, coloca no iogurte. Na hora de comprar, compare o preço por 100g — embalagens menores costumam sair mais caro sem justificativa.
          </p>

          <h3>Amendoim</h3>
          <p>
            30g de amendoim têm cerca de 50 mg de magnésio. A maioria das pessoas esquece que amendoim é oleaginosa — e uma das mais baratas disponíveis no Brasil. Pasta de amendoim integral, sem açúcar adicionado, também conta e é fácil de incluir no café da manhã.
          </p>

          <h3>Quinoa cozida</h3>
          <p>
            Uma xícara de quinoa cozida entrega cerca de 63 mg de magnésio. Mais do que o arroz branco na mesma porção, com proteína completa junto. Se já entra na sua rotina, ótimo. Se não entra, não é obrigatório — há outras fontes igualmente boas e mais baratas.
          </p>

          <h3>Chocolate amargo (70%+)</h3>
          <p>
            30g de chocolate amargo com mais de 70% de cacau têm cerca de 65 mg de magnésio. É uma fonte real, não uma justificativa. O chocolate ao leite tem muito menos porque o percentual de cacau é mais baixo. Para contar como fonte de magnésio, precisa ser o amargo de verdade.
          </p>

          <h3>Banana</h3>
          <p>
            Uma banana média tem cerca de 32 mg de magnésio — menos do que oleaginosas e sementes, mas é fácil de comer e de carregar. Boa para complementar o conjunto, não para ser a fonte principal.
          </p>

          <h3>Abacate</h3>
          <p>
            Meio abacate médio tem cerca de 30 mg de magnésio. Não é a fonte mais expressiva da lista, mas entra junto com gordura boa e fibra na mesma porção. Se já faz parte da dieta, conta — e bem.
          </p>

          {/* ABSORÇÃO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8230033/pexels-photo-8230033.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tigela com frutas, nozes e sementes coloridas sobre mesa — café da manhã nutritivo com fontes de magnésio"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Los Muertos Crew / Pexels</p>
          </div>

          <h2 id="absorcao" className="img-above">O que reduz a absorção de magnésio</h2>

          <p>
            Saber quais alimentos têm magnésio é metade da equação. A outra metade é o que pode atrapalhar o aproveitamento pelo organismo.
          </p>
          <p>
            Álcool em excesso interfere na absorção e aumenta a excreção urinária do mineral. Dieta rica em ultraprocessados tende a ser pobre em magnésio por natureza. Cozinhar vegetais em muita água e descartar o caldo elimina parte do mineral — refogar ou cozinhar no vapor perde muito menos. Café e chá em quantidade moderada têm impacto pequeno e não precisam de preocupação específica.
          </p>
          <p>
            Condições como diabetes tipo 2, doenças inflamatórias intestinais e alcoolismo aumentam o risco de deficiência independentemente do que se come. Nesses casos, suplementação pode ser indicada — mas sempre com orientação médica.
          </p>

          {/* SUPLEMENTO */}
          <h2 id="suplemento">Suplemento ou alimentação: o que realmente funciona</h2>

          <p>
            Para a maioria das pessoas sem condição médica específica, ajustar a alimentação já resolve. Suplementação de magnésio pode ser indicada para quem tem síndrome de má-absorção, diabetes não controlado, alcoolismo ou usa certos medicamentos — mas sempre com acompanhamento.
          </p>
          <p>
            O problema com suplementação sem necessidade: excesso de magnésio causa efeitos gastrointestinais, em especial diarreia. Não é grave, mas é incômodo. E não faz sentido suplementar se a alimentação já resolve com ajustes simples.
          </p>
          <p>
            Se você está pensando em suplementar porque "come mal", a resposta prática é resolver o que compra antes de adicionar uma cápsula. Atualizar dois ou três itens da{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            — trocar arroz branco por integral, adicionar oleaginosas — já gera diferença real ao longo do mês.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa organizada é o começo de comer melhor. <em>O Mise resolve isso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO INCLUIR */}
          <h2 id="como-incluir">Como incluir mais magnésio na semana — sem mudar tudo</h2>

          <p>
            Não é necessário redesenhar a dieta inteira. São ajustes de compra que somam ao longo da semana sem exigir mais tempo na cozinha.
          </p>

          <ul className="item-list">
            <li>Troque o arroz branco pelo integral — ou misture meio a meio para começar.</li>
            <li>Adicione sementes de abóbora ao mix de castanhas que você já compra.</li>
            <li>Compre chocolate amargo 70%+ em vez do ao leite quando for beliscar algo.</li>
            <li>Se o café da manhã é pão, adicione pasta de amendoim integral sem açúcar.</li>
            <li>Inclua espinafre ou outra folha verde escura em pelo menos três refeições por semana.</li>
            <li>Mantenha feijão preto na{' '}
              <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
              — e a{' '}
              <a href="/funcionalidades/despensa">despensa</a>{' '}
              sempre abastecida com leguminosas.
            </li>
          </ul>

          <p>
            Nenhuma dessas mudanças exige orçamento maior. Exige só atualizar o que está na lista antes de sair de casa.
          </p>
          <p>
            Quando você sabe o que tem em casa, para de comprar em duplicata e começa a comprar o que falta de verdade — incluindo os alimentos que fazem diferença no dia a dia. É para isso que existe a{' '}
            <a href="/funcionalidades">despensa do Mise</a>.
          </p>
          <p>
            Magnésio já está na lista de compras. Só falta saber qual versão do alimento você está levando pra casa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre alimentos com magnésio</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Qual alimento tem mais magnésio?</p>
              <p className="faq-a">
                Sementes de abóbora são a fonte mais concentrada: 30g têm cerca de 160 mg de magnésio, quase 40% da necessidade diária de um adulto. Na sequência vêm amêndoas (80 mg por 30g), espinafre cozido (78 mg por xícara) e feijão preto cozido (60 mg por meia xícara).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto magnésio uma pessoa precisa por dia?</p>
              <p className="faq-a">
                A recomendação para adultos é de 310 a 420 mg por dia, variando conforme sexo e faixa etária. Mulheres grávidas precisam de mais. Essa quantidade é alcançável com alimentação variada — oleaginosas, sementes, folhas escuras e leguminosas combinadas ao longo do dia.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quais são os sintomas de falta de magnésio?</p>
              <p className="faq-a">
                Os primeiros sinais costumam ser câimbras musculares, cansaço, irritabilidade e dificuldade para dormir. Em casos mais severos, podem ocorrer palpitações cardíacas e dormência nas extremidades. São sintomas vagos que parecem desconexos — por isso a deficiência demora para ser identificada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Chocolate amargo tem magnésio de verdade?</p>
              <p className="faq-a">
                Tem. 30g de chocolate com 70% ou mais de cacau têm cerca de 65 mg de magnésio — uma fonte real, não uma justificativa. O chocolate ao leite tem muito menos por conta do percentual menor de cacau. Para contar como fonte do mineral, precisa ser o amargo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O cozimento reduz o magnésio dos alimentos?</p>
              <p className="faq-a">
                Cozinhar em água e descartar o caldo sim — parte do mineral vai para o líquido. Refogar, cozinhar no vapor ou assar perde muito menos. No caso do feijão, o caldo de cozimento retém boa parte do magnésio — o caldinho conta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Vale a pena suplementar magnésio sem orientação médica?</p>
              <p className="faq-a">
                Geralmente não. Para a maioria das pessoas sem condição específica, ajustar a alimentação já resolve. Suplementação sem necessidade pode causar efeitos gastrointestinais, especialmente diarreia. Se quiser investigar deficiência, exame de sangue com médico é o caminho certo — não a tentativa e erro com cápsula.
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
                Criador do Mise. Trocou o arroz branco pelo integral há três anos. O arroz integral continuou sendo arroz.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              A despensa lembra.<br />
              <em>Você só precisa comprar o certo.</em>
            </h2>
            <p>
              Mise conecta despensa, receitas e lista de compras. Você sabe o que tem em casa antes de ir ao mercado — e para de comprar errado.
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
