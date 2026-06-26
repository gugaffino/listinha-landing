import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Cardamomo para que serve: tipos, usos e benefícios',
  description: 'Cardamomo é uma especiaria de aroma intenso e sabor único, usada em chás, doces e pratos árabes. Saiba para que serve, tipos e como usar na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/cardamomo-para-que-serve',
  },
  openGraph: {
    title: 'Cardamomo para que serve: tipos, usos e benefícios',
    description: 'Cardamomo é uma especiaria de aroma intenso e sabor único, usada em chás, doces e pratos árabes. Saiba para que serve, tipos e como usar na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/cardamomo-para-que-serve',
    images: [
      {
        url: 'https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Vagens de cardamomo verde sobre mesa de madeira rústica — close-up detalhado da especiaria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardamomo para que serve: tipos, usos e benefícios',
    description: 'Cardamomo é uma especiaria de aroma intenso e sabor único, usada em chás, doces e pratos árabes. Saiba para que serve, tipos e como usar na cozinha.',
    images: ['https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cardamomo verde e preto são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. São plantas distintas da mesma família. O verde (Elettaria cardamomum) é o mais comum — aroma floral, levemente cítrico, usado em chás, doces e pratos com curry. O preto (Amomum subulatum) é maior, seco, com aroma defumado e terroso. Vai melhor em pratos salgados robustos como biryanis e guisados de carne. No Brasil, o verde é o que você encontra na maioria dos lugares.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá pra substituir cardamomo por outra especiaria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não tem substituto direto — o aroma do cardamomo é único. Se não tiver, a opção mais próxima é misturar uma pitada de gengibre em pó com uma pitada de noz-moscada, mas o resultado é diferente. Em chás, gengibre com canela entrega um perfil parecido, mas sem o lado floral do cardamomo. Para pratos onde o cardamomo é o tempero principal, faz diferença ter o original.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cardamomo em pó ou em vagem: qual usar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em vagem, o aroma é mais intenso e dura mais — as sementes ficam protegidas pela casca. É ideal para chás, caldos e arroz, onde a vagem fica no líquido e é retirada antes de servir. O pó é mais prático para massas de bolo, biscoitos e temperos secos, onde a textura importa. O pó perde aroma mais rápido — em 6 a 8 meses já está fraco. Comprar em vagem e moer na hora é o melhor dos dois mundos, se você tiver um pilão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde comprar cardamomo no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em supermercados maiores (geralmente no corredor de especiarias, em pó ou em vagem). Em empórios e lojas de produtos naturais, em vagem a granel — normalmente mais barato por grama. Lojas especializadas em temperos e culinária árabe ou indiana costumam ter as duas versões, verde e preto. Online também tem boa variedade, mas o frete às vezes encarece. Vale procurar em feiras de produtores quando tem estande de especiarias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar cardamomo em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em pote hermético, longe de luz, calor e umidade. Nunca guarde perto do fogão — o calor evapora os óleos essenciais, que são exatamente o que tem cheiro. Em vagem, dura até 2 anos bem guardado. Em pó, começa a perder aroma depois de 6 a 8 meses. Se comprou em quantidade maior, pode guardar parte no congelador — não perde qualidade e preserva o aroma por mais tempo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto cardamomo usar numa receita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O cardamomo é forte — menos é mais. Para chá: 2 a 3 vagens amassadas para 2 xícaras de água. Para arroz ou caldo: 3 a 4 vagens para 4 porções. Para bolo ou biscoito: 1/4 a 1/2 colher de chá de pó já é suficiente para 8 porções. Se exagerar, o aroma fica medicinal e domina o prato inteiro. Comece com menos e ajuste.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cardamomo para que serve: tipos, usos e benefícios',
  description: 'Cardamomo é uma especiaria de aroma intenso e sabor único, usada em chás, doces e pratos árabes. Saiba para que serve, tipos e como usar na cozinha.',
  image: 'https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-26',
  dateModified: '2026-06-26',
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
    '@id': 'https://www.miseemcasa.com.br/blog/cardamomo-para-que-serve',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cardamomo para que serve', item: 'https://www.miseemcasa.com.br/blog/cardamomo-para-que-serve' },
  ],
}

export default function CardamomoParaQueServe() {
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
            <li className="breadcrumb-current" aria-current="page">Cardamomo para que serve</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-26">26 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cardamomo: o que é, para que serve e como usar na cozinha
          </h1>
          <p className="blog-desc">
            Aparece em receitas de chá, café árabe, curry e biscoito nórdico. O aroma é impossível de ignorar — e impossível de substituir. Mas o que é cardamomo, qual tipo comprar e como usar sem errar a mão?
          </p>

          <div className="answer-box">
            <p>
              <strong>Cardamomo</strong> é uma especiaria da família do gengibre, nativa da Índia e Guatemala.
              Vem em vagens pequenas com sementes aromáticas dentro. O aroma é floral, levemente cítrico,
              com notas que lembram eucalipto. Serve para aromatizar chás, cafés, pratos com curry, doces e carnes.
              No Brasil, o tipo verde é o mais fácil de encontrar — em vagem ou em pó.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Vagens de cardamomo verde sobre mesa de madeira rústica — close-up detalhado da especiaria"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Nidhin K S / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é cardamomo</a></li>
              <li><a href="#tipos">Verde ou preto: qual é qual</a></li>
              <li><a href="#para-que-serve">Para que serve na cozinha</a></li>
              <li><a href="#beneficios">Benefícios para a saúde</a></li>
              <li><a href="#como-usar">Como usar: vagem, pó e chá</a></li>
              <li><a href="#guardar">Como guardar e onde comprar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6086300/pexels-photo-6086300.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Vagens de cardamomo verde empilhadas em close-up mostrando textura e cor vibrante"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Eva Bronzini / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é cardamomo</h2>

          <p>
            Cardamomo (<em>Elettaria cardamomum</em>) é uma planta da mesma família do gengibre e da cúrcuma.
            O que a gente usa na cozinha são as vagens — pequenas, ovais, de 1 a 2 cm —
            com sementes aromáticas dentro. As sementes são a parte que tem cheiro de verdade.
            A vagem protege o aroma até a hora de usar.
          </p>
          <p>
            É considerado uma das especiarias mais caras do mundo, atrás só do açafrão e da baunilha.
            O preço não é arbitrário: a planta demora de 3 a 4 anos pra começar a produzir,
            a colheita é manual e os óleos essenciais — responsáveis pelo aroma — são voláteis.
            Qualquer descuido no processamento e o cardamomo chega sem graça na prateleira.
          </p>
          <p>
            O aroma é difícil de descrever sem exagerar. Floral, levemente cítrico, com notas
            de eucalipto e uma suavidade adocicada que não aparece em nenhuma outra especiaria.
            Não tem como substituir diretamente — quem já usou cardamomo em chá sabe que gengibre
            com canela não é a mesma coisa, por mais que se tente.
          </p>
          <p>
            No Brasil, a especiaria chegou principalmente pelas culinárias árabe, indiana e nórdica.
            Quem cresceu em família libanesa ou síria provavelmente tem cardamomo na despensa faz tempo.
            Pra todo mundo que descobriu recentemente: bem-vindo ao clube das vagens misteriosas.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Verde ou preto: qual é qual</h2>

          <p>
            Existe confusão frequente entre os dois tipos porque o nome é o mesmo.
            São plantas diferentes, com usos diferentes.
          </p>

          <h3>Cardamomo verde</h3>
          <p>
            O mais comum no Brasil. Menor, com casca fina e verde-clara. Sementes escuras por dentro.
            Aroma floral e cítrico — é ele que aparece no chai indiano, no café árabe, nos doces orientais
            e nos pães nórdicos de natal. É o cardamomo que você vai encontrar em supermercado,
            empório ou loja de especiarias sem precisar procurar muito.
          </p>

          <h3>Cardamomo preto</h3>
          <p>
            Maior, mais escuro, com casca rugosa e textura seca. O aroma é completamente diferente:
            defumado, terroso, com notas que lembram alcatrão e fumaça. Vai bem em pratos salgados
            robustos — biryanis, guisados de carne, molhos densos. Não substitua um pelo outro:
            cardamomo preto num bolo de cardamomo verde não vai ficar bom.
          </p>
          <p>
            No Brasil, o preto é menos acessível. Você encontra em lojas de culinária indiana,
            árabe, ou online. Se a receita pedir cardamomo sem especificar, assuma que é o verde.
          </p>

          {/* PARA QUE SERVE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10126645/pexels-photo-10126645.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Prato com variedade de especiarias incluindo cardamomo, canela e folhas de louro"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Suvaiba / Pexels</p>
          </div>

          <h2 id="para-que-serve" className="img-above">Para que serve na cozinha</h2>

          <p>
            O cardamomo serve para aromatizar sem dominar. Uma boa especiaria não toma o prato —
            ela aprofunda. Cardamomo faz isso: adiciona uma camada de aroma que você sente antes
            de conseguir nomear.
          </p>

          <h3>Chás e bebidas</h3>
          <p>
            O uso mais direto. Duas ou três vagens amassadas em água quente com gengibre e canela
            fazem um chá que aquece de um jeito que o de saquinho nunca vai conseguir.
            O chai indiano clássico leva cardamomo. O café árabe (qahwa) também.
            Se você ainda não experimentou café com uma vagem de cardamomo, coloque na lista pra hoje.
          </p>

          <h3>Arroz e pratos com curry</h3>
          <p>
            Na culinária indiana e árabe, o cardamomo vai direto no arroz — junto com canela e cravo,
            no óleo quente, antes de adicionar o grão. O resultado é um arroz com aroma que não precisa
            de molho pra ter personalidade. Em pratos com curry, entra no masala como uma das especiarias
            de base, junto com coentro, cominho e pimenta.
          </p>

          <h3>Doces e sobremesas</h3>
          <p>
            Nos países nórdicos, cardamomo é o tempero dos pães de natal — como a canela é aqui, só que
            mais floral. Na culinária árabe, aparece no baklava, no arroz-doce e em cremes de leite.
            Na Índia, no kheer (arroz com leite e cardamomo) e em doces com leite condensado.
            No Brasil, funciona bem em bolo de banana, arroz-doce revisitado e biscoitos de especiarias.
          </p>

          <h3>Carnes e marinadas</h3>
          <p>
            Menos óbvio, mas eficiente. Em marinadas de frango e cordeiro, o cardamomo adiciona
            profundidade sem amargar. Mistura bem com iogurte, alho e cominho —
            uma base clássica do frango assado ao estilo libanês. Também aparece em almôndegas
            e kaftas como parte do tempero.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios do cardamomo para a saúde</h2>

          <p>
            O cardamomo tem compostos antioxidantes — flavonoides, terpenos, óleos essenciais como
            o cineol. Os estudos existentes associam o consumo regular a alguns efeitos concretos.
          </p>

          <h3>Digestão</h3>
          <p>
            Cardamomo estimula a produção de enzimas digestivas e tem efeito carminativo —
            ajuda a reduzir gases. É por isso que aparece em chás pós-refeição na medicina
            ayurvédica há séculos. A evidência científica é preliminar mas consistente: funciona
            como auxiliar digestivo, não como remédio.
          </p>

          <h3>Saúde bucal</h3>
          <p>
            Os óleos essenciais do cardamomo têm propriedades antibacterianas. No Oriente Médio,
            mastigar uma vagem depois de comer é prática comum — uma versão aromática de enxaguante bucal.
            O cineol, principal componente do aroma, contribui com isso. É o motivo pelo qual
            cardamomo aparece em alguns chás digestivos e receitas de alho da culinária indiana.
          </p>

          <h3>Antioxidantes</h3>
          <p>
            Como toda especiaria aromática intensa — orégano, cúrcuma, cravo — o cardamomo é rico
            em compostos antioxidantes. O consumo regular de especiarias, em geral, está associado
            a uma alimentação com mais variedade e menos dependência de sal e açúcar para dar sabor.
            Esse pode ser o benefício mais prático de todos.
          </p>

          <p>
            Uma ressalva necessária: cardamomo não é suplemento, é especiaria.
            A quantidade usada numa receita é pequena demais para ter efeito clínico isolado.
            O benefício concreto é que ele adiciona sabor a pratos que, sem ele,
            precisariam de mais sódio ou açúcar pra ficar interessantes.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar cardamomo: vagem, pó e chá</h2>

          <h3>Em vagem</h3>
          <p>
            Amasse levemente a vagem com a lateral da faca antes de usar — isso abre a casca
            e libera mais aroma. Coloque inteira em chás, caldos, arroz e marinadas.
            Retire antes de servir: a casca não é agradável de comer.
            O aroma que fica no líquido é suficiente pra transformar o prato.
          </p>

          <h3>Em pó</h3>
          <p>
            Mais prático para massas de bolo, biscoitos e misturas secas de tempero.
            Use com moderação — 1/4 de colher de chá já é suficiente em uma receita de bolo de 8 porções.
            O pó perde aroma mais rápido que a vagem: depois de 6 a 8 meses, a força cai bastante.
            Se você tiver um pilão, comprar em vagem e moer na hora é o melhor dos dois mundos.
          </p>

          <h3>Proporções de referência</h3>
          <p>
            Para chá: 2 a 3 vagens amassadas para 2 xícaras de água.
            Para arroz: 3 a 4 vagens para 4 porções.
            Para bolo: 1/4 a 1/2 colher de chá de pó por receita.
            Cardamomo é forte — comece com menos. Se exagerar, o aroma fica medicinal
            e domina o prato inteiro. Dá pra sentir a diferença.
          </p>

          <p>
            Aliás, cardamomo é uma das especiarias que a receita pede "2 vagens" e você
            abre o pacote e tem 50 vagens dentro. Vão ficar na sua despensa por dois anos.
            Mas na hora certa, vão resolver — e você vai ficar feliz de ter.
          </p>

          {/* GUARDAR */}
          <h2 id="guardar">Como guardar cardamomo e onde comprar</h2>

          <h3>Como guardar</h3>
          <p>
            Em pote hermético, longe de luz, calor e umidade. Nunca guarde perto do fogão —
            o calor evapora os óleos essenciais, que são exatamente o que tem cheiro.
            Em vagem bem guardada, o cardamomo dura até 2 anos sem perder qualidade.
            Em pó, começa a enfraquecer depois de 6 a 8 meses.
            Se comprou em quantidade, pode guardar parte no congelador — preserva o aroma por mais tempo.
          </p>
          <p>
            Vale registrar na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}o que você tem e quando comprou. Especiarias antigas não estragam,
            mas perdem o ponto. E sem controle, a mesma vagem aparece no fundo de três potes diferentes.
          </p>

          <h3>Onde comprar no Brasil</h3>
          <p>
            Em supermercados maiores, o cardamomo verde em pó ou em vagem fica no corredor de especiarias.
            Em empórios e lojas de produtos naturais, você costuma encontrar a granel —
            mais barato por grama e com rotatividade maior, o que significa produto mais fresco.
            Lojas de culinária árabe, indiana ou de temperos importados têm ambos os tipos,
            verde e preto, em vagem.
          </p>
          <p>
            Online, a variedade é maior — inclusive versões orgânicas e de origem única.
            Se você for comprar online, veja se a loja informa a data de colheita ou validade:
            especiaria antiga vendida como nova é problema mais comum do que parece.
            A mesma atenção que você teria com qualquer{' '}
            <a href="/blog/lista-basica-de-compras">item da lista</a>
            {' '}vale aqui — saber o que está comprando antes de sair de casa faz diferença.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre cardamomo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Cardamomo verde e preto são a mesma coisa?</p>
              <p className="faq-a">
                Não. São plantas distintas da mesma família. O verde tem aroma floral e cítrico —
                vai em chás, doces e pratos com curry. O preto tem aroma defumado e terroso —
                vai em pratos salgados robustos. No Brasil, o verde é o que você encontra com facilidade.
                Se a receita não especificar, assuma o verde.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Dá pra substituir cardamomo por outra especiaria?</p>
              <p className="faq-a">
                Não tem substituto direto — o aroma é único. Se não tiver, a aproximação mais próxima
                é uma pitada de gengibre em pó com uma pitada de{' '}
                <a href="/blog/para-que-serve-noz-moscada">noz-moscada</a>,
                {' '}mas o resultado é diferente. Para pratos onde o cardamomo é protagonista,
                o substituto não fecha o mesmo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cardamomo em pó ou em vagem: qual usar?</p>
              <p className="faq-a">
                Em vagem, o aroma é mais intenso e dura mais. Ideal para chás, caldos e arroz.
                O pó é mais prático para massas de bolo e temperos secos, mas perde aroma
                depois de 6 a 8 meses. Comprar em vagem e moer na hora é o melhor dos dois mundos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde comprar cardamomo no Brasil?</p>
              <p className="faq-a">
                Em supermercados grandes, empórios, lojas de produtos naturais e lojas de culinária
                árabe ou indiana. Online também tem boa variedade. Em granel costuma ser mais barato
                e mais fresco do que embalagem fechada parada na prateleira.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar cardamomo em casa?</p>
              <p className="faq-a">
                Em pote hermético, longe de luz, calor e umidade. Nunca perto do fogão.
                Em vagem, dura até 2 anos bem guardado. Em pó, perde força depois de 6 a 8 meses.
                Se comprou em quantidade, guarde parte no congelador — preserva o aroma por mais tempo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto cardamomo usar numa receita?</p>
              <p className="faq-a">
                Com moderação: 2 a 3 vagens para 2 xícaras de chá; 3 a 4 vagens para arroz de 4 porções;
                1/4 a 1/2 colher de chá de pó por receita de bolo. Cardamomo é forte.
                Comece com menos — dá pra ajustar, mas não tem como tirar o excesso do prato.
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
                Criador do Mise. Comprou cardamomo em vagem pra fazer chai, usou duas vagens e ainda tem 48 guardadas. Vai usar na próxima receita árabe, promete.
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
              Você compra o que vai usar — e o cardamomo não some no fundo de três potes.
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
