import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Damascos secos: o que são, benefícios e como usar na cozinha',
  description: 'Damasco seco é o damasco fresco desidratado — concentra ferro, potássio e betacaroteno. Veja o que é, os benefícios reais e como usar além do chazinho.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/damascos-secos',
  },
  openGraph: {
    title: 'Damascos secos: o que são, benefícios e como usar na cozinha',
    description: 'Damasco seco é o damasco fresco desidratado — concentra ferro, potássio e betacaroteno. Veja o que é, os benefícios reais e como usar além do chazinho.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/damascos-secos',
    images: [
      {
        url: 'https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Damascos secos laranjas em close-up — textura e cor características da fruta desidratada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damascos secos: o que são, benefícios e como usar na cozinha',
    description: 'Damasco seco é o damasco fresco desidratado — concentra ferro, potássio e betacaroteno. Veja o que é, os benefícios reais e como usar além do chazinho.',
    images: ['https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Damasco seco engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Damasco seco tem 241 kcal por 100g — mais calórico do que o fresco por conta da concentração de açúcar no processo de desidratação. Em porções razoáveis (30-40g, equivalente a 4-6 damascos), são cerca de 70-100 kcal, o que não é problema dentro de uma alimentação equilibrada. O risco é comer sem prestar atenção na quantidade, como acontece com qualquer fruta seca.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantos damascos secos posso comer por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A porção razoável é 4-6 unidades (cerca de 30-40g). Nessa quantidade você aproveita a fibra, o ferro e o potássio sem exagerar no açúcar. Se você tem diabetes ou precisa controlar o índice glicêmico, consulte um nutricionista para ajustar a quantidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Damasco e damasco seco são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São a mesma fruta — o damasco seco é o damasco fresco (Prunus armeniaca) que passou por desidratação. O processo concentra os nutrientes e o açúcar, altera a textura e aumenta muito a validade. No Brasil, o fresco é raro. Você provavelmente só vai encontrar o seco no mercado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como reidratar damasco seco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cubra os damascos com água quente (não fervendo) e deixe de molho por 20 a 30 minutos. Eles absorvem líquido e ficam mais macios, próximos da textura da fruta fresca. A água que sobra tem sabor intenso — pode usar como base para molhos ou misturar com sucos. Para receitas frias, reidratar em suco de laranja ajuda na absorção do ferro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Damasco seco tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O damasco seco puro não tem glúten. Mas verifique o rótulo: algumas marcas processam em fábricas que também manipulam trigo, o que pode causar contaminação cruzada. Se você tem doença celíaca, procure versões com certificação sem glúten na embalagem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Damasco seco funciona em pratos salgados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Funciona muito bem. Em carnes assadas — frango, porco, cordeiro — o damasco seco cria um toque agridoce sem precisar de molho elaborado. É ingrediente clássico da culinária persa e marroquina. Picado fino, também vai bem em cuscuz, arroz com lentilha e saladas com queijo.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Damascos secos: o que são, benefícios e como usar na cozinha',
  description: 'Damasco seco é o damasco fresco desidratado — concentra ferro, potássio e betacaroteno. Veja o que é, os benefícios reais e como usar além do chazinho.',
  image: 'https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
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
    '@id': 'https://www.miseemcasa.com.br/blog/damascos-secos',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Damascos secos', item: 'https://www.miseemcasa.com.br/blog/damascos-secos' },
  ],
}

export default function DamascosSecos() {
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
            <li className="breadcrumb-current" aria-current="page">Damascos secos</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-29">29 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Damasco seco: a fruta que fica meses na despensa e que quase ninguém usa direito
          </h1>
          <p className="blog-desc">
            Aparece em chazinhos e receitas de confeitaria, mas o damasco seco vai muito além disso. É uma das frutas secas com maior concentração de ferro, potássio e betacaroteno — e funciona tanto em pratos doces quanto em carnes assadas.
          </p>

          <div className="answer-box">
            <p>
              <strong>Damasco seco</strong> é o damasco fresco (<em>Prunus armeniaca</em>) desidratado — a fruta perde água no processo, concentrando nutrientes e sabor.
              No Brasil, é mais fácil encontrar o seco do que o fresco. Dura meses na despensa e vai bem em snacks, receitas doces e pratos salgados agridoces.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Damascos secos laranjas em close-up — textura e cor características da fruta desidratada"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Engin Akyurt / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é damasco seco</a></li>
              <li><a href="#fresco-vs-seco">Fresco vs seco: o que muda</a></li>
              <li><a href="#nutrientes">O que tem dentro: os nutrientes</a></li>
              <li><a href="#beneficios">Benefícios do damasco seco</a></li>
              <li><a href="#como-usar">Como usar damasco seco na cozinha</a></li>
              <li><a href="#guardar">Como guardar e onde encontrar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/29060107/pexels-photo-29060107.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Damascos secos expostos em banca de mercado — frutas laranjas à venda"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é damasco seco</h2>

          <p>
            Damasco é uma fruta de caroço da espécie <em>Prunus armeniaca</em>, originária da Ásia Central e do Oriente Médio. O nome em português vem de Damasco, cidade da Síria por onde a fruta chegou ao Mediterrâneo há milênios. Hoje é cultivado principalmente no Irã, Turquia, Paquistão e Espanha.
          </p>
          <p>
            O damasco fresco é delicado. Dura poucos dias, tem safra curta e é difícil de encontrar no mercado brasileiro. O damasco seco resolve esse problema: mesmo fruto, água retirada, nutrientes e sabor concentrados, validade de meses.
          </p>
          <p>
            O processo de desidratação pode ser feito ao sol (método tradicional, que produz damascos mais escuros e rústicos) ou em equipamentos industriais (que preserva a cor laranja com ajuda de dióxido de enxofre, o aditivo que aparece no rótulo como sulfito). A versão sem sulfito fica mais escura, mas não é menos nutritiva.
          </p>
          <p>
            Nos mercados brasileiros, a versão mais comum é a laranja intensa, com textura macia e sabor adocicado. Fica na gôndola de frutas secas, do lado de uva-passa, ameixa e tâmara. Se você não acha o fresco, é porque o fresco quase não existe por aqui.
          </p>

          {/* FRESCO VS SECO */}
          <h2 id="fresco-vs-seco">Fresco vs seco: o que realmente muda</h2>

          <p>
            A comparação não é só "o seco tem mais calorias". O que muda é a concentração de tudo — por bem e por mal.
          </p>
          <p>
            Em 100g de damasco fresco: 48 kcal, 11g de carboidrato, 9g de açúcar, 2g de fibra, 1mg de ferro, 259mg de potássio.
          </p>
          <p>
            Em 100g de damasco seco: 241 kcal, 63g de carboidrato, 53g de açúcar, 7,3g de fibra, 2,7mg de ferro, 1.160mg de potássio.
          </p>
          <p>
            Concentração de quase 4 vezes. Fibra, ferro e potássio sobem junto com o açúcar. A vitamina C, no entanto, cai muito no processo — é instável ao calor.
          </p>
          <p>
            O ponto prático: 100g de damasco seco não é porção razoável. Porção razoável é 30-40g — cerca de 4-6 damascos. Nessa quantidade: 72-100 kcal, 2-3g de fibra, 0,8-1mg de ferro e 350-460mg de potássio. Com esse contexto, o damasco seco faz mais sentido do que parece na embalagem.
          </p>

          {/* NUTRIENTES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Damascos frescos laranjas numa tigela — a fruta fresca da qual vem o damasco seco"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="nutrientes" className="img-above">O que tem dentro: os nutrientes do damasco seco</h2>

          <p>
            Por 100g, o damasco seco entrega nutrientes em quantidades relevantes — mais do que a maioria das frutas frescas, porque a concentração amplifica tudo.
          </p>

          <ul className="item-list">
            <li><strong>Betacaroteno:</strong> 22.690 mcg por 100g — um dos alimentos vegetais mais ricos. O organismo converte em vitamina A.</li>
            <li><strong>Potássio:</strong> 1.160mg — mais do que a banana (358mg/100g). Importante para controle de pressão arterial e função muscular.</li>
            <li><strong>Ferro:</strong> 2,7mg — ferro não-heme (vegetal), menos absorvido que o animal, mas relevante como fonte complementar.</li>
            <li><strong>Fibra:</strong> 7,3g — com destaque para a pectina (fibra solúvel), que alimenta as bactérias intestinais benéficas.</li>
            <li><strong>Calorias:</strong> 241 kcal por 100g — alta, por conta do açúcar concentrado no processo de desidratação.</li>
          </ul>

          <p>
            O betacaroteno é o destaque real. Poucas fontes vegetais chegam perto desse número. Cenoura crua tem 8.285 mcg por 100g. Damasco seco tem quase três vezes mais.
          </p>
          <p>
            Uma ressalva direta: o ferro vegetal precisa de vitamina C para ser absorvido com eficiência. Se você usa damasco seco como fonte de ferro, combine com algo cítrico — suco de laranja, limão numa salada. Sem isso, boa parte do ferro fica na comida e não passa para o sangue como devia.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios do damasco seco</h2>

          <h3>Saúde dos olhos</h3>
          <p>
            O betacaroteno se converte em vitamina A no organismo. Vitamina A é essencial para a função da retina — especialmente para visão em condições de pouca luz. É um dos nutrientes mais ligados à saúde ocular disponíveis em fontes vegetais.
          </p>

          <h3>Funcionamento intestinal</h3>
          <p>
            A pectina do damasco seco é fibra solúvel. Ela forma um gel no intestino, desacelera a absorção de açúcar e alimenta as bactérias benéficas do cólon. Quarenta gramas de damasco seco entregam cerca de 3g de fibra — 10% da necessidade diária de um adulto.
          </p>

          <h3>Controle de pressão arterial</h3>
          <p>
            Potássio e sódio atuam em equilíbrio no organismo. Uma dieta com potássio adequado ajuda a reduzir a retenção de sódio e contribui para controle da pressão. O damasco seco tem um dos maiores teores de potássio entre as frutas secas — mais até do que a tâmara.
          </p>

          <h3>Complemento para quem tem risco de anemia</h3>
          <p>
            Não substitui carne vermelha ou suplemento de ferro em casos de anemia instalada. Mas como adição à alimentação de quem tem risco, faz sentido. O ponto-chave é combinar com vitamina C para melhorar a absorção. Sem isso, o ferro fica na comida e não chega onde precisa.
          </p>

          <h3>Pele</h3>
          <p>
            Vitamina A e betacaroteno contribuem para renovação celular e produção de colágeno. Não é efeito imediato nem milagroso — é acumulado com consumo regular ao longo do tempo. O mesmo vale para qualquer alimento com esse perfil nutricional.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5498379/pexels-photo-5498379.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Frutas secas variadas com canela numa tigela rústica — damascos secos entre os ingredientes"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar damasco seco na cozinha</h2>

          <p>
            A maioria das pessoas compra damasco seco pra chazinho ou porque viu numa receita — e para por aí. É um ingrediente mais versátil do que parece.
          </p>

          <h3>Como snack</h3>
          <p>
            O uso mais direto. Quatro damascos no bolso, sem geladeira, sem embalagem extra. Mais nutritivo do que biscoito, com sabor adocicado que sustenta bem entre refeições. Só não senta e come o pacote inteiro — 100g de damasco seco de uma vez é muita coisa.
          </p>

          <h3>Com iogurte e granola</h3>
          <p>
            Picado grosso, vai bem com{' '}
            <a href="/blog/o-que-e-granola">granola</a>{' '}
            e iogurte natural. A doçura do damasco dispensa mel — o conjunto já tem equilíbrio de sabor. É um café da manhã que não precisa de receita.
          </p>

          <h3>Em carnes assadas</h3>
          <p>
            Pouca gente usa, mas é onde o damasco seco realmente brilha. Em frango assado, porco ou cordeiro, o damasco cria um toque agridoce sem precisar de molho especial. A receita básica: refogue cebola e alho, adicione frango em pedaços, jogue damascos picados e um pouco de caldo de frango. Cozinha junto até o frango estar macio. O damasco derrete no caldo e vira molho por conta própria.
          </p>
          <p>
            Essa combinação não é invenção recente. É clássica na culinária persa e marroquina — está lá há séculos.
          </p>

          <h3>Em saladas</h3>
          <p>
            Cortado em pedaços pequenos, vai bem em salada de folhas com queijo de cabra, nozes e vinagrete de mostarda. A doçura equilibra o amargor de rúcula ou agrião. Mais interessante do que uva-passa na salada, porque o sabor é menos óbvio.
          </p>

          <h3>Em bolos e tortas</h3>
          <p>
            Substitui uva-passa em praticamente qualquer receita. O sabor é mais delicado e a textura depois de assado fica melhor. Cake inglês de frutas, bolo de frutas secas, torta de damasco com amêndoas — todos funcionam bem.
          </p>

          <h3>Reidratado</h3>
          <p>
            Quando a receita pede textura mais macia ou você quer usar como base de molho: cubra com água quente por 20-30 minutos. O damasco fica próximo da textura fresca e absorve o líquido. A água de reidratação tem sabor concentrado — serve bem em molhos para carnes ou misturada a sucos.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa organizada é metade do trabalho. <em>O Mise resolve a outra metade.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* GUARDAR E COMPRAR */}
          <h2 id="guardar">Como guardar damasco seco e onde encontrar</h2>

          <p>
            Pote com tampa, longe de luz direta e calor. Nessas condições, o damasco seco dura de 3 a 6 meses sem perder qualidade. Na geladeira, dura até 1 ano. No freezer, mais ainda — mas a textura muda depois de descongelar.
          </p>
          <p>
            Nunca guarde na embalagem aberta. Damasco seco absorve umidade do ambiente e fica grudento e com sabor alterado. Um vidro de conserva ou pote hermético de plástico resolve o problema.
          </p>

          <h3>Onde comprar no Brasil</h3>
          <p>
            O supermercado comum tem na maioria das vezes — gôndola de frutas secas, entre uva-passa e tâmara. Preço por quilo costuma ser mais alto do que em outros canais.
          </p>
          <p>
            Lojas de produtos naturais e empórios têm variedades a granel. Você compra a quantidade que precisa e testa o produto antes de levar em quantidade maior. Preço por quilo geralmente mais baixo.
          </p>
          <p>
            Online é onde você encontra a maior variedade: damasco turco, iraniano, chileno, com ou sem sulfito, em diferentes tamanhos. A origem afeta cor, textura e doçura — vale comparar. Só lembra de comparar pelo peso líquido, porque embalagens de tamanhos diferentes tornam a comparação de preço confusa.
          </p>
          <p>
            Se você usa damasco seco com frequência, vale deixar na{' '}
            <a href="/funcionalidades/despensa">despensa do Mise</a>{' '}
            e na{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>.
            Assim você sabe quando está acabando antes de chegar na quinta-feira pra fazer frango com damascos e descobrir que a embalagem tá vazia.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre damascos secos</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Damasco seco engorda?</p>
              <p className="faq-a">
                Tem 241 kcal por 100g — mais calórico do que o fresco por conta da concentração de açúcar. Em porções razoáveis (30-40g, 4-6 damascos), são cerca de 70-100 kcal, o que não é problema em uma alimentação equilibrada. O risco é comer sem prestar atenção na quantidade, como acontece com qualquer fruta seca.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantos damascos secos posso comer por dia?</p>
              <p className="faq-a">
                A porção razoável é 4-6 unidades (cerca de 30-40g). Nessa quantidade você aproveita a fibra, o ferro e o potássio sem exagerar no açúcar. Se você tem diabetes ou controla o índice glicêmico, consulte um nutricionista para ajustar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Damasco e damasco seco são a mesma coisa?</p>
              <p className="faq-a">
                São a mesma fruta — o seco é o fresco desidratado. O processo concentra os nutrientes e o açúcar, muda a textura e aumenta muito a validade. No Brasil, o fresco é raro. O que você vê no mercado é quase sempre o seco.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como reidratar damasco seco?</p>
              <p className="faq-a">
                Cubra com água quente (não fervendo) e deixe de molho por 20-30 minutos. Os damascos absorvem o líquido e ficam mais macios, próximos da textura fresca. A água que sobra tem sabor intenso — use como base para molhos ou misture a suco. Para receitas frias, reidratar em suco de laranja ajuda na absorção do ferro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Damasco seco tem glúten?</p>
              <p className="faq-a">
                O damasco seco puro não tem glúten. Mas verifique o rótulo: algumas marcas processam em fábricas que também manipulam trigo, o que pode causar contaminação cruzada. Se você tem doença celíaca, procure versões com certificação sem glúten na embalagem.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Damasco seco funciona em pratos salgados?</p>
              <p className="faq-a">
                Funciona muito bem. Em carnes assadas — frango, porco, cordeiro — o damasco seco cria um toque agridoce sem precisar de molho elaborado. É ingrediente clássico da culinária persa e marroquina. Picado fino, também vai bem em cuscuz, arroz com lentilha e saladas com queijo.
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
                Criador do Mise. Comprou damasco seco pra fazer frango com molho agridoce — comeu metade da embalagem no caminho de volta do mercado. O frango ficou pra semana seguinte.
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
              Você compra o que vai usar — e o damasco seco não some antes de virar receita.
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
