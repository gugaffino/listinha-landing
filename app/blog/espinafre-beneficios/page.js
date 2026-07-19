import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Espinafre: benefícios, valor nutricional e como usar',
  description: 'Espinafre tem 23 kcal por 100g e vitamina K acima de 400% do VD. Conheça os benefícios, o que muda entre cru e cozido e como usar de verdade na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/espinafre-beneficios',
  },
  openGraph: {
    title: 'Espinafre: benefícios, valor nutricional e como usar',
    description: 'Espinafre tem 23 kcal por 100g e vitamina K acima de 400% do VD. Conheça os benefícios, o que muda entre cru e cozido e como usar de verdade na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/espinafre-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Folhas frescas de espinafre sobre fundo verde — close-up detalhado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espinafre: benefícios, valor nutricional e como usar',
    description: 'Espinafre tem 23 kcal por 100g e vitamina K acima de 400% do VD. Conheça os benefícios, o que muda entre cru e cozido e como usar de verdade na cozinha.',
    images: ['https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Espinafre tem muito ferro? Ajuda na anemia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Espinafre tem ferro, mas é ferro não-heme (de origem vegetal), que o organismo absorve com menos eficiência do que o ferro animal. Para melhorar a absorção, consuma espinafre com alimentos ricos em vitamina C — limão espremido, tomate ou laranja. Sozinho não trata anemia, mas contribui para uma dieta rica em ferro quando combinado com outras fontes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso comer espinafre todo dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para a maioria das pessoas, sim. O único cuidado é para quem tem histórico de pedras nos rins do tipo oxalato de cálcio: o espinafre tem alta concentração de oxalato, o que pode agravar esse quadro. Sem esse histórico, o consumo diário é seguro.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é o oxalato do espinafre? É perigoso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oxalato de cálcio é um composto natural do espinafre que pode reduzir a absorção de cálcio e, em pessoas com predisposição, contribuir para pedras nos rins. O cozimento reduz o teor de oxalato. Para a maioria das pessoas sem histórico de litíase renal, não representa risco no consumo regular.',
      },
    },
    {
      '@type': 'Question',
      name: 'Espinafre cru ou cozido tem mais nutrientes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do nutriente. Cru preserva mais vitamina C, folato e luteína, que são sensíveis ao calor. Cozido concentra os minerais — você obtém mais ferro e cálcio por porção porque o volume reduz muito. O cozimento também diminui o oxalato, melhorando a absorção do cálcio. Variar o preparo é a estratégia mais equilibrada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar espinafre fresco para durar mais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Envolva as folhas em papel toalha levemente úmido e coloque num saco fechado na geladeira. Só lave na hora de usar — lavar antes de guardar acelera a deterioração. Assim dura 3 a 5 dias. Para durar meses, branqueie rapidamente e congele em porções.',
      },
    },
    {
      '@type': 'Question',
      name: 'Espinafre congelado é tão nutritivo quanto o fresco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para receitas cozidas, sim. O congelamento preserva bem os minerais e boa parte das vitaminas, especialmente se branqueado antes de congelar. A textura fica mais mole depois de descongelar, então não funciona para saladas cruas — mas vai bem em refogados, sopas, massas e omeletes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Espinafre engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Com 23 kcal por 100g e 91% de água, o espinafre tem uma das menores densidades calóricas entre os alimentos. As fibras ainda contribuem para a saciedade. O que pode engordar é o que vai junto — muito azeite, queijo ou molho pesado.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Espinafre: benefícios, valor nutricional e como usar',
  description: 'Espinafre tem 23 kcal por 100g e vitamina K acima de 400% do VD. Conheça os benefícios, o que muda entre cru e cozido e como usar de verdade na cozinha.',
  image: 'https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-06',
  dateModified: '2026-06-06',
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
    '@id': 'https://www.miseemcasa.com.br/blog/espinafre-beneficios',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Benefícios do espinafre', item: 'https://www.miseemcasa.com.br/blog/espinafre-beneficios' },
  ],
}

export default function EspinafreBeneficios() {
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
            <li className="breadcrumb-current" aria-current="page">Benefícios do espinafre</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-06">6 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Espinafre na prática: por que vale colocar na lista toda semana
          </h1>
          <p className="blog-desc">
            Uma das folhosas mais baratas do mercado, com uma das maiores concentrações de micronutrientes. O que o espinafre oferece de verdade, o que muda entre cru e cozido, e como usar sem complicar.
          </p>

          <div className="answer-box">
            <p>
              <strong>Espinafre</strong> é uma hortaliça folhosa com apenas 23 kcal por 100g, rica em vitamina K (acima de 400% do valor diário recomendado), ferro, cálcio, folato e antioxidantes como luteína e zeaxantina. É uma das fontes mais densas de micronutrientes que você encontra em qualquer feira ou supermercado.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Folhas frescas de espinafre sobre fundo verde — close-up detalhado"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: SHVETS production / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é espinafre</a></li>
              <li><a href="#nutricional">Valor nutricional por 100g</a></li>
              <li><a href="#beneficios">Benefícios do espinafre</a></li>
              <li><a href="#cru-ou-cozido">Cru ou cozido: o que muda</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#como-guardar">Como escolher e guardar</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/159094/pexels-photo-159094.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Folhas de espinafre fresco em tigela de madeira sobre superfície escura"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é espinafre</h2>

          <p>
            Espinafre (<em>Spinacia oleracea</em>) é uma hortaliça folhosa de origem persa, cultivada hoje em boa parte do Brasil durante o ano todo — com melhores resultados no outono e inverno, quando o calor não prejudica o crescimento das folhas. Está em praticamente todo supermercado, feira e mercearia.
          </p>
          <p>
            A versão do Popeye é uma lenda bem-intencionada que exagerou um pouco. O espinafre não transforma ninguém num fisiculturista. O que ele faz é entregar uma quantidade expressiva de vitaminas e minerais com poucas calorias — o que já é suficiente pra justificar um lugar fixo na lista.
          </p>
          <p>
            Dois tipos são mais comuns no mercado brasileiro: o de folha lisa (mais suave, bom cru) e o crespo (textura mais firme, bom em refogados). Para receitas quentes ou smoothies, qualquer um funciona igualmente bem.
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="nutricional">Valor nutricional do espinafre por 100g</h2>

          <p>
            100g de espinafre cru têm aproximadamente 23 kcal, 2,9g de proteína, 3,6g de carboidratos e 2,2g de fibra. A densidade calórica é baixíssima — quase 91% do peso é água.
          </p>
          <p>
            O destaque não está nos macros. Está nos micros:
          </p>

          <ul className="item-list">
            <li><strong>Vitamina K:</strong> acima de 400% do valor diário recomendado — uma das fontes mais concentradas em alimentos comuns</li>
            <li><strong>Vitamina A (betacaroteno):</strong> alta, importante para visão e imunidade</li>
            <li><strong>Ácido fólico:</strong> relevante especialmente para quem planeja gestação</li>
            <li><strong>Ferro:</strong> 2,7 mg por 100g (ferro não-heme, de absorção mais lenta)</li>
            <li><strong>Cálcio:</strong> cerca de 99 mg por 100g</li>
            <li><strong>Magnésio, potássio e fósforo:</strong> presentes em quantidades relevantes</li>
            <li><strong>Luteína e zeaxantina:</strong> antioxidantes para saúde ocular, mais concentrados no cru</li>
          </ul>

          <p>
            Poucos alimentos de origem vegetal reúnem esse perfil numa folha que custa alguns reais o maço.
          </p>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tigela branca com espinafre fresco — folhas verdes vibrantes sobre superfície clara"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Jacqueline Howell / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Benefícios do espinafre</h2>

          <h3>Saúde dos olhos</h3>
          <p>
            Luteína e zeaxantina são carotenoides que se acumulam na retina e protegem contra a luz azul e contra a degeneração macular relacionada à idade. O espinafre é uma das melhores fontes desses dois compostos. A absorção melhora quando consumido com gordura — um fio de azeite já resolve.
          </p>

          <h3>Controle da pressão arterial</h3>
          <p>
            O potássio ajuda a equilibrar o sódio no organismo. Dietas ricas em potássio estão associadas a menor pressão arterial. Uma porção de espinafre refogado com pouco sal contribui para esse balanço sem nenhum esforço adicional.
          </p>

          <h3>Saúde óssea</h3>
          <p>
            A vitamina K é essencial para a produção de osteocalcina, proteína que ajuda a fixar o cálcio nos ossos. O espinafre entrega os dois juntos — cálcio e vitamina K — numa combinação que não é comum em muitos outros alimentos. O oxalato presente reduz parte da absorção do cálcio, mas o efeito é parcial.
          </p>

          <h3>Ferro e energia</h3>
          <p>
            O ferro do espinafre é não-heme, de absorção mais lenta que o ferro animal. Para aproveitar melhor, combine com vitamina C: limão na salada, tomate no prato, ou uma fruta logo depois. Esse par simples aumenta significativamente a taxa de absorção.
          </p>

          <h3>Folato para quem planeja gravidez</h3>
          <p>
            O ácido fólico é fundamental nos primeiros meses de gestação para o desenvolvimento do tubo neural do bebê. O espinafre é uma das fontes mais acessíveis de folato no Brasil. Quem está tentando engravidar deve manter folhas verdes escuras na rotina — e discutir suplementação com o médico, já que a alimentação raramente supre sozinha a dose recomendada.
          </p>

          <h3>Digestão e saciedade</h3>
          <p>
            As fibras regulam o trânsito intestinal e contribuem para a saciedade. Com 23 kcal e bastante volume, o espinafre ocupa espaço no prato sem ocupar muito no orçamento calórico do dia.
          </p>

          {/* CRU OU COZIDO */}
          <h2 id="cru-ou-cozido">Cru ou cozido: o que muda</h2>

          <p>
            A resposta direta: cru preserva mais vitaminas termossensíveis; cozido concentra mais minerais por porção. Os dois têm valor — não precisa escolher.
          </p>
          <p>
            Cru mantém mais vitamina C, folato e luteína, que se degradam com o calor. Se o objetivo é aproveitar os antioxidantes, a salada crua com azeite é o caminho mais direto.
          </p>
          <p>
            Com o cozimento, o volume cai muito — 100g de folha crua viram cerca de 30g depois de refogados. O resultado é que você come muito mais espinafre numa porção cozida, e os minerais (ferro, cálcio, magnésio) ficam mais concentrados. O cozimento também reduz o teor de oxalato, o que pode melhorar a absorção do cálcio disponível.
          </p>
          <p>
            O erro mais comum é cozinhar tempo demais. Três a quatro minutos de refogado são suficientes. Fervido por mais de cinco minutos perde cor, textura e boa parte das vitaminas.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar espinafre na cozinha</h2>

          <p>
            O espinafre tem uma propriedade útil: desaparece. Em smoothies, sopas e omeletes, ele some visualmente e quase some no sabor. Isso facilita incluir no dia a dia sem precisar fazer uma salada toda vez. Para quem está montando um{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>
            {' '}e quer mais folhosa sem complicar, é o ponto de entrada mais fácil.
          </p>

          <h3>Refogado rápido</h3>
          <p>
            Aqueça azeite, adicione alho picado, jogue as folhas e mexa por 3 a 4 minutos. Tempere com sal. Pronto. Combina com arroz, massa, frango grelhado ou ovo. É o preparo mais rápido e o que aparece mais vezes numa semana real.
          </p>

          <h3>Em saladas cruas</h3>
          <p>
            Folhas jovens e macias funcionam bem cruas. Combinam com vinagrete de limão — que também aumenta a absorção do ferro — tomate, cebola roxa e proteína. O espinafre aguenta molho ácido por mais tempo que a alface sem murchar.
          </p>

          <h3>Em omeletes e ovos mexidos</h3>
          <p>
            Jogue as folhas na frigideira quando o ovo já está quase pronto. Dois minutos são suficientes para murchar sem perder a cor. Adiciona volume e micronutrientes sem mudar o sabor.
          </p>

          <h3>Em massas, risotos e sopas</h3>
          <p>
            Adicione nos últimos dois minutos de cozimento. Em massas com molho cremoso, desaparece na textura. Em sopas, adicione fora do fogo para manter a cor. Em risotos, entra no final com o queijo.
          </p>

          <h3>Em smoothie verde</h3>
          <p>
            Meia xícara de espinafre cru some no sabor quando misturada com banana e maçã no liquidificador. A cor fica esverdeada. O gosto não lembra folha. É a forma mais rápida de incluir pra quem não tem costume com folhosas.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa conectada à lista. <em>Assim funciona o Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Como escolher e guardar espinafre</h2>

          <h3>Como escolher no mercado</h3>
          <p>
            Procure folhas firmes e verde intenso, sem manchas amarelas ou marrons na borda. Caule fino indica folhas mais jovens e mais macias. Folhas moles ou com cheiro forte já estão passando do ponto. Na dúvida, compra menos e vai mais vezes — espinafre não é item pra estocar por semanas.
          </p>

          <h3>Como guardar na geladeira</h3>
          <p>
            Envolva as folhas em papel toalha levemente úmido e coloque num saco ou pote fechado. Não lave antes de guardar — a umidade extra acelera a deterioração. Lave só na hora de usar. Guardado assim, dura 3 a 5 dias. Se quiser manter mais tempo na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {', '}a opção é congelar.
          </p>

          <h3>Como congelar</h3>
          <p>
            Branqueie rapidamente — 30 segundos em água fervendo, depois em água gelada. Escorra bem, divida em porções e congele. Dura até 3 meses e mantém a maior parte dos minerais. A textura muda, então serve para receitas cozidas, não para salada crua.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>
            Sim. Sem muita hesitação.
          </p>
          <p>
            Espinafre é barato, está em todo lugar e oferece uma das maiores densidades nutricionais do hortifrúti. Não é um suplemento verde importado com promessas de detox — é uma folha que você refoga em 4 minutos e que vai bem em praticamente qualquer prato.
          </p>
          <p>
            O único cuidado real é para quem tem histórico de pedras nos rins do tipo oxalato de cálcio. Para quem não tem esse histórico, o consumo regular não representa risco e traz um ganho concreto de micronutrientes que a maioria das dietas brasileiras poderia usar.
          </p>
          <p>
            Se você já tem alface e rúcula na rotina, espinafre entra como variação natural. Se quase não come folhosa, é por onde começar — some em receitas, não precisa de espaço próprio no prato, e ainda aparece nos nutrientes.
          </p>
          <p>
            Um alimento que vai pra{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}sem precisar de argumento. É raro isso acontecer com algo que também é barato.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre espinafre</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Espinafre tem muito ferro? Ajuda na anemia?</p>
              <p className="faq-a">
                Tem ferro — 2,7 mg por 100g — mas é ferro não-heme (vegetal), absorvido com menos eficiência que o ferro animal. Para melhorar a absorção, combine com vitamina C: limão espremido, tomate ou laranja no mesmo prato. Sozinho não trata anemia, mas contribui para uma alimentação rica em ferro quando combinado com outras fontes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso comer espinafre todo dia?</p>
              <p className="faq-a">
                Para a maioria das pessoas, sim. O cuidado é para quem tem histórico de pedras nos rins do tipo oxalato de cálcio: o espinafre tem alta concentração de oxalato, o que pode agravar esse quadro. Sem esse histórico, o consumo diário é seguro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que é o oxalato do espinafre? É perigoso?</p>
              <p className="faq-a">
                Oxalato de cálcio é um composto natural que pode reduzir a absorção de cálcio e, em pessoas com predisposição, contribuir para pedras nos rins. O cozimento reduz parte do oxalato presente. Para a maioria das pessoas sem histórico de litíase renal, não representa risco no consumo regular.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Espinafre cru ou cozido tem mais nutrientes?</p>
              <p className="faq-a">
                Cru preserva mais vitamina C, folato e luteína — compostos sensíveis ao calor. Cozido concentra os minerais por porção porque o volume cai muito: 100g de folha crua viram cerca de 30g após o refogado. O cozimento também reduz o oxalato, melhorando a absorção do cálcio. Variar o preparo é a estratégia mais equilibrada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar espinafre fresco para durar mais?</p>
              <p className="faq-a">
                Envolva as folhas em papel toalha levemente úmido, coloque num saco fechado na geladeira e só lave na hora de usar. Assim dura 3 a 5 dias. Lavar antes de guardar acelera a deterioração.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Espinafre congelado é tão nutritivo quanto o fresco?</p>
              <p className="faq-a">
                Para receitas cozidas, sim. O congelamento preserva bem os minerais e boa parte das vitaminas, especialmente se branqueado antes de congelar. A textura muda — não funciona para salada crua — mas vai bem em refogados, sopas, massas e omeletes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Espinafre engorda?</p>
              <p className="faq-a">
                Com 23 kcal por 100g e 91% de água, o espinafre tem uma das menores densidades calóricas entre os alimentos. As fibras contribuem para a saciedade. O que pode pesar na conta calórica é o que vai junto — azeite em excesso, queijo ou molho pesado.
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
                Criador do Mise. Comprou espinafre pra salada na segunda, refogou tudo na quinta quando já estava quase murchando. Ficou ótimo. Não era o plano, mas funcionou.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              A despensa que não vira surpresa.<br />
              <em>Esse é o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e{' '}
              <a href="/funcionalidades/lista-de-compras" style={{color: 'rgba(251,249,242,0.85)', fontWeight: 500}}>lista de compras</a>
              {' '}num só lugar. Você compra o que vai usar — e o espinafre não apodrece no fundo da gaveta da geladeira.
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
