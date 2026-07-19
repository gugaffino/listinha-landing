import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Avelã: o que é, para que serve e como usar na cozinha',
  description:
    'Avelã é uma oleaginosa rica em vitamina E e gorduras boas — a mesma da pasta de Nutella. Saiba o que é, benefícios, quantas comer e como usar na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/o-que-e-avela',
  },
  openGraph: {
    title: 'Avelã: o que é, para que serve e como usar na cozinha',
    description:
      'Avelã é uma oleaginosa rica em vitamina E e gorduras boas — a mesma da pasta de Nutella. Saiba o que é, benefícios, quantas comer e como usar na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/o-que-e-avela',
    images: [
      {
        url: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Avelãs inteiras numa tigela de madeira, mostrando a textura e cor natural da oleaginosa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avelã: o que é, para que serve e como usar na cozinha',
    description:
      'Avelã é uma oleaginosa rica em vitamina E e gorduras boas — a mesma da pasta de Nutella. Saiba o que é, benefícios, quantas comer e como usar na cozinha.',
    images: [
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é avelã?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avelã é a semente comestível da aveleira (Corylus avellana), uma árvore nativa da Europa e da Ásia Menor. É uma oleaginosa — do mesmo grupo de amêndoa, nozes e castanha — rica em gorduras monossaturadas, vitamina E e fibras.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas avelãs posso comer por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A recomendação é de 30g por dia — 20 a 25 avelãs, a quantidade que cabe numa mão fechada. Isso entrega cerca de 188 kcal, gorduras boas, fibra e vitamina E sem exagerar nas calorias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avelã engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avelã é calórica — 628 kcal por 100g. Usada na porção correta de 30g por dia, a gordura boa e a fibra promovem saciedade. O problema é comer sem controle: avelã processada com açúcar ou cobertura de chocolate tem perfil calórico bem diferente da avelã in natura.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avelã tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avelã in natura não tem glúten — é uma oleaginosa, não um cereal. Mas produtos industrializados com avelã podem conter glúten por contaminação cruzada. Sempre cheque o rótulo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avelã crua ou torrada: qual é melhor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crua preserva um pouco mais de vitamina E. Torrada a seco (sem sal, sem óleo) fica mais saborosa e mais prática na cozinha. A diferença nutricional é pequena — o que importa mais é comer com regularidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar avelã em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avelã com casca dura até 1 ano em local seco e fresco. Pelada e crua: até 3 meses na geladeira em pote hermético. Torrada: até 2 semanas em temperatura ambiente num pote fechado. Calor e umidade aceleram a oxidação da gordura.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre avelã e amêndoa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São oleaginosas de espécies diferentes. Avelã vem da Corylus avellana, amêndoa vem da Prunus dulcis. Avelã tem sabor mais rico e oleoso, amêndoa tem sabor mais neutro. As duas são ricas em gorduras boas e vitamina E, mas avelã tem mais manganês e sabor mais pronunciado. Nas receitas, são intercambiáveis em muitos casos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso dar avelã para criança?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, com atenção. Avelã é um alérgeno do grupo das oleaginosas — introduza gradualmente e observe sinais de alergia. Para crianças menores de 3 anos, evite avelã inteira (risco de engasgo) — use moída ou em pasta. Consulte o pediatra antes de introduzir oleaginosas em crianças com histórico familiar de alergia.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Avelã: o que é, para que serve e como usar na cozinha',
  description:
    'Avelã é uma oleaginosa rica em vitamina E e gorduras boas — a mesma da pasta de Nutella. Saiba o que é, benefícios, quantas comer e como usar na cozinha.',
  image:
    'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-28',
  dateModified: '2026-06-28',
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
    '@id': 'https://www.miseemcasa.com.br/blog/o-que-e-avela',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.miseemcasa.com.br',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.miseemcasa.com.br/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Avelã: o que é, para que serve e como usar na cozinha',
      item: 'https://www.miseemcasa.com.br/blog/o-que-e-avela',
    },
  ],
}

export default function OQueEAvela() {
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
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <SiteNav />
      <main id="main-content" className="blog-page">
        <nav className="breadcrumb" aria-label="Você está aqui">
          <ol className="breadcrumb-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">
              /
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">
              /
            </li>
            <li className="breadcrumb-current" aria-current="page">
              O que é avelã
            </li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-28">
              28 jun. 2026
            </time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">
              Blog
            </a>
          </div>

          <h1 className="blog-h1">
            Avelã: o que é e por que você já comeu sem saber
          </h1>
          <p className="blog-desc">
            A oleaginosa que virou ingrediente de meio mundo de sobremesa — e
            que boa parte do Brasil conhece pelo gosto, não pelo nome.
          </p>

          <div className="answer-box">
            <p>
              <strong>Avelã</strong> é a semente comestível da aveleira (
              <em>Corylus avellana</em>), uma oleaginosa nativa da Europa e da
              Ásia Menor. Rica em gorduras monossaturadas, vitamina E e fibras
              — e o principal ingrediente da pasta de Nutella.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Avelãs inteiras numa tigela de madeira, mostrando a textura e cor natural da oleaginosa"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
        </div>

        <article className="prose">
          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li>
                <a href="#o-que-e">O que é avelã de verdade</a>
              </li>
              <li>
                <a href="#nutricao">Valor nutricional</a>
              </li>
              <li>
                <a href="#beneficios">Benefícios da avelã</a>
              </li>
              <li>
                <a href="#como-usar">Como usar na cozinha</a>
              </li>
              <li>
                <a href="#crua-ou-torrada">Crua ou torrada</a>
              </li>
              <li>
                <a href="#onde-comprar">Onde comprar no Brasil</a>
              </li>
              <li>
                <a href="#quantidade">Quantas avelãs por dia</a>
              </li>
              <li>
                <a href="#faq">Perguntas frequentes</a>
              </li>
            </ol>
          </nav>

          <h2 id="o-que-e">O que é avelã de verdade</h2>

          <p>
            Avelã é a semente comestível da aveleira, árvore de nome científico{' '}
            <em>Corylus avellana</em>, nativa das florestas temperadas da Europa
            e da Ásia Menor. A árvore produz pequenos frutos com casca rígida —
            parecida com uma mini-castanha — que, ao abrir, revelam uma semente
            oval, cor de creme, oleosa e com sabor suave e adocicado.
          </p>

          <p>
            Botanicamente, avelã pertence ao grupo das oleaginosas — parente de{' '}
            <a href="/blog/o-que-e-amendoa">amêndoa</a>, nozes e
            castanha-do-pará. O que todas têm em comum: casca dura, semente rica
            em gordura boa e nenhuma relação com as frutas tropicais da feira.
          </p>

          <p>
            Você provavelmente já comeu avelã sem saber o nome. Nutella é pasta
            de avelã com cacau e açúcar — a oleaginosa representa mais de 13%
            da receita. Ferrero Rocher tem uma avelã inteira no centro. Vários
            sorvetes, bombons e coberturas com sabor de "chocolate especial" são
            feitos com a mesma semente que vem principalmente da Turquia,
            responsável por mais de 70% da produção mundial.
          </p>

          <div className="blog-inline-cta">
            <p>
              Vai usar avelã numa receita esta semana? Adicione à lista e
              registre na despensa antes de ir ao mercado.{' '}
              <em>O Mise lembra quando está acabando.</em>
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              Comece grátis →
            </a>
          </div>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4453193/pexels-photo-4453193.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Avelãs inteiras e partidas ao meio sobre superfície rústica, mostrando a semente interna"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>
          <h2 id="nutricao" className="img-above">
            Valor nutricional da avelã
          </h2>

          <p>
            Avelã é densa em calorias — 628 kcal por 100g — e a maior parte vem
            de gordura. Mas é o tipo certo. Quase 75% da gordura da avelã é
            monossaturada, o mesmo perfil do azeite de oliva. O restante é
            poli-insaturada, com pequena fração saturada.
          </p>

          <p>
            Referência por 100g de avelã crua (USDA):
          </p>

          <div className="copy-box">
            <p>
              <strong>Calorias:</strong> 628 kcal<br />
              <strong>Gordura total:</strong> 61g (monossaturada: 46g)<br />
              <strong>Proteína:</strong> 15g<br />
              <strong>Carboidrato:</strong> 17g<br />
              <strong>Fibra:</strong> 10g<br />
              <strong>Vitamina E:</strong> 15mg — 100% do valor diário<br />
              <strong>Manganês:</strong> 6,2mg — 269% do valor diário<br />
              <strong>Cobre:</strong> 1,7mg — 189% do valor diário<br />
              <strong>Magnésio:</strong> 163mg — 39% do valor diário
            </p>
          </div>

          <p>
            A porção prática do dia a dia é 30g — 20 a 25 avelãs, o que cabe
            numa mão fechada. Entrega ~188 kcal, 18g de gordura boa, 3g de
            fibra e cobertura generosa de vitamina E, manganês e cobre.
          </p>

          <h2 id="beneficios">Benefícios da avelã com base em estudos</h2>

          <p>
            Avelã não é remédio. Mas tem um perfil nutricional que aparece
            consistentemente em estudos sobre alimentação e saúde cardiovascular:
          </p>

          <ul className="item-list">
            <li>
              <strong>Saúde cardiovascular.</strong> As gorduras monossaturadas
              estão associadas à redução do LDL (o colesterol "ruim") e à
              proteção das artérias. Estudos com oleaginosas em geral mostram
              redução de marcadores inflamatórios em consumo regular dentro de
              uma dieta equilibrada.
            </li>
            <li>
              <strong>Proteção antioxidante.</strong> Avelã é uma das maiores
              fontes alimentares de vitamina E, que atua no combate ao estresse
              oxidativo — o processo ligado ao envelhecimento celular e à
              inflamação crônica. Uma porção de 30g cobre a necessidade diária
              recomendada.
            </li>
            <li>
              <strong>Saúde intestinal.</strong> Com 10g de fibra por 100g,
              avelã contribui para o trânsito intestinal e para o funcionamento
              da microbiota. Não substitui vegetais folhosos, mas ajuda a fechar
              a meta diária de fibra.
            </li>
            <li>
              <strong>Saciedade real.</strong> A combinação de gordura + proteína
              + fibra torna a avelã um snack mais satisfatório do que a maioria
              dos ultraprocessados na mesma faixa de calorias.
            </li>
          </ul>

          <p>
            O que a avelã não faz: não emagrece por si só, não trata nenhuma
            doença e não compensa uma alimentação ruim no resto do dia. Os
            benefícios aparecem no contexto de uma dieta variada e consistente
            — não isolados.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5939765/pexels-photo-5939765.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pasta de avelã caseira em colher de madeira ao lado de avelãs inteiras numa bancada"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>
          <h2 id="como-usar" className="img-above">
            Como usar avelã na cozinha
          </h2>

          <p>
            Avelã tem uma versatilidade que boa parte das outras oleaginosas não
            tem. O sabor é marcante o suficiente pra aparecer mesmo em pequenas
            quantidades, mas não agride — combina com doce, com salgado e com
            café.
          </p>

          <ul className="item-list">
            <li>
              <strong>Como petisco.</strong> Crua ou torrada seca, sem sal, sem
              açúcar. Uma tigela de 20-25 unidades entre as refeições. Sem
              complicação.
            </li>
            <li>
              <strong>No café da manhã.</strong> Picada sobre aveia no leite,
              iogurte natural ou granola. Uma colher de sopa já basta pra
              adicionar textura e gordura boa.
            </li>
            <li>
              <strong>Em receitas doces.</strong> Pasta de avelã caseira (processa
              por 8-10 minutos até virar uma pasta lisa), brownie com avelã
              picada, ganache de chocolate. Qualquer receita que pede amêndoa
              picada funciona com avelã.
            </li>
            <li>
              <strong>Em saladas.</strong> Avelã torrada e picada em salada de
              folhas com queijo meia-cura e vinagrete balsâmico — combinação
              clássica de bistrôs europeus que funciona muito bem aqui também.
            </li>
            <li>
              <strong>Na confeitaria.</strong> Farinha de avelã (avelã triturada)
              substitui parte da farinha de trigo em bolos e cookies, deixando o
              resultado mais úmido e com sabor pronunciado.
            </li>
          </ul>

          <p>
            Com o que combina bem: chocolate amargo, café, canela, mel, pera,
            figo, queijo brie. Com o que não combina muito: sabores muito ácidos
            (limão, maracujá) tendem a sobrepor o sabor delicado da avelã.
          </p>

          <p>
            Uma dica prática: se você vai usar avelã com frequência, compre
            pelada. Descascar é trabalhoso — você torra por 10 minutos, deixa
            esfriar, esfrega num pano seco pra soltar a casca interna. Funciona,
            mas é o tipo de coisa que tira a vontade de usar. Pelada já poupa
            uma etapa toda vez.
          </p>

          <h2 id="crua-ou-torrada">Crua ou torrada: qual é melhor</h2>

          <p>
            Torrar avelã reduz marginalmente o teor de vitamina E e alguns
            compostos antioxidantes. A diferença real é pequena — da ordem de
            10-15% dependendo da temperatura e do tempo de forno. O que importa
            mais é a constância: comer 30g de avelã torrada todo dia é melhor
            do que comer avelã crua uma vez por semana.
          </p>

          <p>
            O argumento prático a favor da torrada: o sabor fica mais
            pronunciado, a casca interna (levemente amarga) sai mais fácil, e a
            textura crocante é mais agradável tanto como petisco quanto como
            cobertura em receitas.
          </p>

          <p>
            Como torrar em casa: espalhe numa assadeira, forno a 150°C por 10-12
            minutos. Deixe esfriar por completo antes de guardar — calor retido
            dentro do pote cria umidade e acelera a oxidação.
          </p>

          <p>
            O que evitar: avelã com sal, caramelizada ou coberta de açúcar. O
            perfil nutricional muda completamente. Uma avelã salgada não é uma
            variação saudável da avelã natural — é um snack processado com
            avelã como ingrediente.
          </p>

          <h2 id="onde-comprar">Onde comprar avelã no Brasil e quanto custa</h2>

          <p>
            Avelã não é raridade — está na seção de oleaginosas dos
            supermercados maiores, em lojas de produtos naturais e em mercados
            especializados. A variação de preço depende bastante do tipo e do
            canal:
          </p>

          <ul className="item-list">
            <li>
              <strong>Com casca:</strong> mais barata por grama, mas exige
              trabalho pra descascar. Boa opção se você vai usar em grande
              quantidade e tem paciência com a etapa de torrar e esfregar.
            </li>
            <li>
              <strong>Pelada crua:</strong> a opção mais prática pra receitas. É
              o que a maioria dos supermercados maiores vende — já pronta pra
              usar direto ou torrar em casa.
            </li>
            <li>
              <strong>Torrada sem sal:</strong> já pronta pra consumo direto. Um
              pouco mais cara, mas elimina uma etapa no preparo.
            </li>
            <li>
              <strong>Pasta de avelã industrializada:</strong> verifique os
              ingredientes antes de comprar. Muitas marcas têm mais açúcar e
              gordura vegetal do que avelã de verdade na composição.
            </li>
          </ul>

          <p>
            Preço médio em 2024: R$ 30–70 por 200g, dependendo da marca e do
            ponto de venda. Em plataformas online, especialmente em embalagens
            maiores, o custo por grama costuma ser menor. Se você usa avelã com
            regularidade, vale guardar na{' '}
            <a href="/funcionalidades/despensa">despensa do Mise</a> com a data
            de abertura — assim você sabe quando está chegando no prazo.
          </p>

          <h2 id="quantidade">Quantas avelãs posso comer por dia</h2>

          <p>
            A referência padrão — compartilhada com outras oleaginosas — é uma
            porção de 30g por dia. São 20-25 avelãs, a quantidade que cabe numa
            mão fechada. Entrega ~188 kcal, 18g de gordura boa, 3g de fibra e
            vitamina E suficiente pra cobrir a necessidade diária.
          </p>

          <p>
            Mais do que isso por dia não traz benefício proporcional — e aumenta
            as calorias sem compensação. Avelã é densa. Uma mãozinha é o
            suficiente.
          </p>

          <p>
            Como substituição de snack: trocar uma barrinha de cereal
            ultraprocessada de 30g pelo mesmo peso em avelã entrega mais
            proteína, mais fibra e menos açúcar. A{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a> do
            Mise ajuda a planejar antes de ir ao mercado — você coloca a avelã
            na lista e não esquece no corredor de oleaginosas.
          </p>

          <p>
            Atenção pra quem tem alergia a oleaginosas: avelã está no mesmo
            grupo de alérgenos de amêndoa, nozes e castanha-de-caju. Se você
            tem reação a qualquer uma dessas, consulte um médico antes de
            introduzir avelã.
          </p>

          <h2 id="faq">Perguntas frequentes sobre avelã</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que é avelã?</p>
              <p className="faq-a">
                Avelã é a semente comestível da aveleira (<em>Corylus avellana</em>),
                uma árvore nativa da Europa e da Ásia Menor. É uma oleaginosa —
                do mesmo grupo de amêndoa, nozes e castanha — rica em gorduras
                monossaturadas, vitamina E e fibras.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantas avelãs posso comer por dia?</p>
              <p className="faq-a">
                A recomendação é de 30g por dia — 20 a 25 avelãs, o que cabe
                numa mão fechada. Entrega cerca de 188 kcal, gorduras boas,
                fibra e vitamina E sem exagerar nas calorias.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Avelã engorda?</p>
              <p className="faq-a">
                Avelã é calórica — 628 kcal por 100g. Usada na porção correta de
                30g por dia, a gordura boa e a fibra promovem saciedade. O
                problema é comer sem controle: avelã processada com açúcar ou
                coberta de chocolate tem perfil calórico bem diferente da avelã
                in natura.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Avelã tem glúten?</p>
              <p className="faq-a">
                Avelã in natura não tem glúten — é uma oleaginosa, não um
                cereal. Produtos industrializados com avelã podem conter glúten
                por contaminação cruzada. Cheque sempre o rótulo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Avelã crua ou torrada: qual é melhor?</p>
              <p className="faq-a">
                Crua preserva um pouco mais de vitamina E. Torrada a seco (sem
                sal, sem óleo) fica mais saborosa e mais prática na cozinha. A
                diferença nutricional é pequena — o que importa mais é comer com
                regularidade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar avelã em casa?</p>
              <p className="faq-a">
                Avelã com casca dura até 1 ano em local seco e fresco. Pelada e
                crua: até 3 meses na geladeira em pote hermético. Torrada: até 2
                semanas em temperatura ambiente num pote fechado. Calor e umidade
                aceleram a oxidação da gordura.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre avelã e amêndoa?</p>
              <p className="faq-a">
                São oleaginosas de espécies diferentes. Avelã tem sabor mais
                rico e oleoso, amêndoa tem sabor mais neutro. As duas são ricas
                em gorduras boas e vitamina E, mas avelã tem mais manganês e
                sabor mais pronunciado. Nas receitas, são intercambiáveis em
                muitos casos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso dar avelã para criança?</p>
              <p className="faq-a">
                Sim, com atenção. Avelã é um alérgeno do grupo das oleaginosas —
                introduza gradualmente e observe sinais de alergia. Para crianças
                menores de 3 anos, evite avelã inteira (risco de engasgo) — use
                moída ou em pasta. Consulte o pediatra antes de introduzir
                oleaginosas em crianças com histórico familiar de alergia.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-avatar" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Criador do Mise. Cozinha de segunda a sexta e faz mercado no
                sábado — quando lembra. Construiu o Mise pra parar de voltar do
                mercado sem o que precisava.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sua despensa sabe que tem avelã.
              <br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Anote o que você tem, monte a lista do que falta e nunca mais
              descobre no fundo do pacote que a avelã acabou.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Comece grátis
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Voltar ao topo">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
          <a href="/blog" className="footer-link">
            Blog
          </a>
        </div>
      </footer>
    </>
  )
}
