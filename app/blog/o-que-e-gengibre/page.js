import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'O que é gengibre: tipos, usos na cozinha e como guardar',
  description: 'Gengibre é um rizoma de sabor picante e aroma intenso. Saiba o que é, a diferença entre fresco e em pó, como usar nas receitas e como guardar sem perder.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/o-que-e-gengibre',
  },
  openGraph: {
    title: 'O que é gengibre: tipos, usos na cozinha e como guardar',
    description: 'Gengibre é um rizoma de sabor picante e aroma intenso. Saiba o que é, a diferença entre fresco e em pó, como usar nas receitas e como guardar sem perder.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/o-que-e-gengibre',
    images: [
      {
        url: 'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Raízes de gengibre fresco ao lado de pó de gengibre em recipiente metálico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é gengibre: tipos, usos na cozinha e como guardar',
    description: 'Gengibre é um rizoma de sabor picante e aroma intenso. Saiba o que é, a diferença entre fresco e em pó, como usar nas receitas e como guardar sem perder.',
    images: ['https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Gengibre fresco e em pó têm o mesmo sabor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O gengibre fresco tem sabor mais brilhante, picante e aromático — com notas cítricas que desaparecem no processo de secagem. O gengibre em pó é mais terroso, mais quente e mais concentrado. São ingredientes complementares, não substitutos diretos. Em receitas de chá ou marinada, o fresco faz diferença. Em bolos e biscoitos, o pó funciona melhor porque distribui por igual na massa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto gengibre usar em uma receita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para gengibre fresco ralado, uma receita para 4 pessoas geralmente usa 1 a 2 colheres de chá. Para gengibre em pó, a proporção é menor: 1 colher de chá de pó equivale a cerca de 1 colher de sopa de fresco ralado. Em chás, uma fatia de 2 cm em 300 ml de água já é suficiente para sentir o sabor sem dominar. Comece menos e ajuste — gengibre é fácil de exagerar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar gengibre fresco para durar mais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na geladeira, em um saco ou pote bem fechado, o gengibre fresco dura 2 a 3 semanas. Se quiser mais tempo, congele: descasque, corte em pedaços ou rale em porções, e guarde em pote hermético no freezer — dura até 6 meses. O melhor truque é ralar diretamente do estado congelado na hora de usar. Não precisa descongelar antes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso congelar gengibre fresco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, e é a melhor forma de evitar desperdício. O gengibre congelado mantém sabor e aroma por até 6 meses. Você pode congelar inteiro, em pedaços ou já ralado em porções. A vantagem de congelar inteiro é poder ralar direto do freezer com um ralador fino — a casca sai junto, sem desperdício, e o resultado é melhor do que o fresco que ficou muito tempo na geladeira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gengibre faz mal para o estômago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em quantidades normais de uso culinário, não. O gengibre tem efeito antiemético (ajuda com náusea) e pode aliviar desconforto digestivo leve. Em doses muito altas — acima de 5g por dia — pode causar irritação gástrica em pessoas sensíveis. Para quem toma anticoagulantes, vale consultar um médico antes de usar gengibre em suplementos concentrados. No uso culinário cotidiano, sem problema para a maioria das pessoas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gengibre e cúrcuma combinam juntos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, e é uma das combinações mais clássicas da culinária asiática e indiana. Os dois têm sabores complementares — gengibre é picante e cítrico, cúrcuma é terrosa e levemente amarga. Funcionam bem juntos em chás, caldos, sopas e marinadas. A combinação com pimenta-do-reino potencializa os compostos ativos de ambos. Em chá, gengibre + cúrcuma + pimenta preta + leite vegetal é um clássico do latte dourado.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é gengibre: tipos, usos na cozinha e como guardar',
  description: 'Gengibre é um rizoma de sabor picante e aroma intenso. Saiba o que é, a diferença entre fresco e em pó, como usar nas receitas e como guardar sem perder.',
  image: 'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-01',
  dateModified: '2026-06-01',
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
    '@id': 'https://www.miseemcasa.com.br/blog/o-que-e-gengibre',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é gengibre', item: 'https://www.miseemcasa.com.br/blog/o-que-e-gengibre' },
  ],
}

export default function OQueEGengibre() {
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
            <li className="breadcrumb-current" aria-current="page">O que é gengibre</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-01">1 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Gengibre na cozinha: guia de tipos, usos e como não desperdiçar
          </h1>
          <p className="blog-desc">
            A raiz que aparece em chá, marinada, curry, bolo e em quase toda receita que precisa de personalidade. O que é gengibre de verdade, qual a diferença entre fresco e em pó, e por que você não precisa jogar fora aquela raiz que ficou na geladeira.
          </p>

          <div className="answer-box">
            <p>
              <strong>Gengibre</strong> é o rizoma da planta <em>Zingiber officinale</em>, originária do sul da Ásia.
              Tem sabor picante, levemente adocicado e aroma intenso — que vêm do gingerol, seu principal composto ativo.
              É usado na culinária há mais de 5.000 anos, tanto fresco quanto seco e em pó, e está entre os ingredientes mais versáteis de uma despensa bem montada.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Raízes de gengibre fresco ao lado de pó de gengibre em recipiente metálico"
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
              <li><a href="#o-que-e">O que é gengibre</a></li>
              <li><a href="#origem">De onde vem</a></li>
              <li><a href="#fresco-ou-po">Fresco ou em pó: qual a diferença</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#guardar">Como guardar sem perder</a></li>
              <li><a href="#vale-a-pena">Vale a pena ter na despensa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/20234970/pexels-photo-20234970.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Raízes de gengibre fresco com textura irregular sobre superfície rústica"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nothing Ahead / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é gengibre</h2>

          <p>
            Gengibre não é uma raiz no sentido botânico estrito — é um rizoma, um caule subterrâneo que a planta usa para armazenar energia. Mas no mercado e na cozinha, a distinção não importa: o que você encontra na feira ou no supermercado é esse pedaço irregular, com casca bege-amarelada e interior fibroso e aromático.
          </p>
          <p>
            O sabor vem principalmente do gingerol, composto que também é responsável pelo ardor característico. Quando o gengibre é seco, o gingerol se transforma em shogaol — mais intenso e quente. É por isso que o gengibre em pó tem um perfil de sabor diferente do fresco: não é a mesma coisa seca, é quimicamente distinto.
          </p>
          <p>
            A raiz fresca tem notas cítricas e frescas além do picante. O pó é mais terroso e concentrado. Os dois têm lugar na cozinha — não é uma questão de qual é melhor, mas de qual serve para cada uso.
          </p>
          <p>
            É o formato que a maioria das pessoas compra e deixa murchar antes de usar tudo. Isso muda com uma técnica simples — que aparece na seção de como guardar.
          </p>

          {/* ORIGEM */}
          <h2 id="origem">De onde vem o gengibre</h2>

          <p>
            O gengibre é originário do sul e sudeste da Ásia — provavelmente da Índia ou da China. É cultivado e usado na culinária há mais de 5.000 anos, o que o torna um dos ingredientes com história documentada mais longa da humanidade. Chegou ao Mediterrâneo com as rotas de especiarias, foi levado para a Europa pelos romanos e se espalhou pelo mundo com a expansão colonial.
          </p>
          <p>
            Hoje, os maiores produtores são Índia, China, Nigéria e Nepal. O Brasil produz gengibre comercialmente — especialmente no Pará e no Espírito Santo — mas a maior parte do que você encontra no mercado nacional ainda é importada ou de produção paraense.
          </p>
          <p>
            Ao contrário de oleaginosas importadas como o pistache, gengibre é um ingrediente acessível no Brasil. Você encontra fresco em qualquer feira livre, hortifruti ou supermercado. O em pó está na gôndola de temperos. Não é ingrediente de nicho — é item de despensa básica.
          </p>

          {/* FRESCO OU PÓ */}
          <h2 id="fresco-ou-po">Fresco ou em pó: qual a diferença na prática</h2>

          <p>
            São ingredientes complementares, não substitutos. Saber quando usar cada um evita frustração com receitas que pedem um quando você tem só o outro.
          </p>

          <h3>Gengibre fresco</h3>
          <p>
            Tem sabor mais brilhante, picante e aromático — com notas cítricas que somem no processo de secagem. Funciona melhor em receitas onde o gengibre é protagonista: chás, marinadas, caldos, refogados, sucos e pratos de wok. O frescor aparece mesmo depois de cozido, porque os compostos voláteis resistem parcialmente ao calor quando o tempo de cozimento é curto.
          </p>
          <p>
            Compre firme, com casca lisa. Quanto mais irregular e enrugada a casca, mais velho. Gengibre velho não é inútil — mas tem menos potência e mais fibra.
          </p>

          <h3>Gengibre em pó</h3>
          <p>
            Mais concentrado, mais quente e mais terroso. É o formato certo para bolos, biscoitos, pão de mel, cookies e qualquer massa onde você precisa que o ingrediente se distribua por igual — e onde um pedaço de fibra de gengibre seria indesejável. Também é prático para temperar no dia a dia sem precisar ralar ou descascar nada.
          </p>
          <p>
            A proporção de substituição quando não tem escolha: 1 colher de chá de pó para 1 colher de sopa de fresco ralado. O resultado não é idêntico, mas funciona na maioria dos casos.
          </p>

          <h3>Gengibre em conserva e cristalizado</h3>
          <p>
            O gengibre em conserva (gari, aquele cor-de-rosa que vem com sushi) é marinado em vinagre e açúcar. Tem sabor completamente diferente — doce, ácido, suave. Não substitui fresco nem pó em receitas. O cristalizado (coberto de açúcar) é confeitaria — funciona em sobremesas e como snack, não como tempero.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/128403/pexels-photo-128403.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Gengibre fresco fatiado ao lado de limões sobre superfície branca"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Angele J. / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar gengibre na cozinha</h2>

          <p>
            A regra prática: gengibre acrescenta calor, aroma e profundidade. Qualquer prato que parece "faltando alguma coisa" costuma melhorar com uma dose pequena de gengibre ralado no final.
          </p>

          <h3>Em chás e bebidas</h3>
          <p>
            O uso mais imediato. Uma fatia de 2 cm de gengibre fresco em 300 ml de água quente já faz um chá funcional. Com limão e mel é o clássico de quando você está resfriado — e funciona. Para latte dourado, combina gengibre em pó com{' '}
            <a href="/blog/o-que-e-curcuma">cúrcuma</a>{' '}
            e pimenta preta em leite vegetal quente.
          </p>

          <h3>Em marinadas e refogados</h3>
          <p>
            Gengibre ralado em marinadas de frango, peixe e carne funciona como amaciante natural além de tempero. Num refogado de alho e óleo, adicionar gengibre fresco ralado no início (junto com o alho) transforma a base aromática de qualquer prato. É a diferença entre um frango salteado comum e um com personalidade.
          </p>

          <h3>Em caldos e sopas</h3>
          <p>
            Caldos de frango e legumes ganham profundidade com uma fatia de gengibre cozida junto. Retire antes de servir se não quiser a textura fibrosa. Em sopas asiáticas — ramen, pho, laksa — o gengibre é parte do tripé aromático junto com alho e cebola.
          </p>

          <h3>Em bolos e receitas doces</h3>
          <p>
            O pão de mel sem gengibre em pó não é pão de mel. Biscoito de gengibre é uma categoria inteira da confeitaria. Em bolos de cenoura, banana ou maçã, uma colher de chá de gengibre em pó junto com a canela muda completamente o perfil aromático. É um ingrediente que eleva receitas doces sem que as pessoas consigam identificar exatamente o que mudou.
          </p>

          <h3>Como finalização</h3>
          <p>
            Gengibre fresco ralado adicionado depois do fogo apagado — em curry, em salada quente, em legumes no vapor — preserva o aroma cítrico que se perderia com o calor. Uma quantidade pequena, no final, é mais eficiente do que uma quantidade grande no início.
          </p>

          <h3>Quanto usar</h3>
          <p>
            Gengibre é fácil de exagerar. Para quatro pessoas, comece com 1 colher de chá de fresco ralado ou ½ colher de chá de pó. Ajuste ao gosto. Um erro comum é dobrar a quantidade achando que vai ficar mais gostoso — o resultado é um prato que queima mais do que agrada.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* GUARDAR */}
          <h2 id="guardar">Como guardar gengibre sem perder</h2>

          <p>
            O gengibre fresco murcha antes do tempo na maioria das cozinhas. Compra-se para uma receita, usa-se metade, a outra metade fica na gaveta da geladeira até virar uma versão enrugada e triste de si mesma. Isso tem solução.
          </p>

          <h3>Na geladeira</h3>
          <p>
            Embrulhado em papel toalha e guardado em saco fechado ou pote hermético, o gengibre fresco dura 2 a 3 semanas na geladeira. O papel absorve a umidade que acelera o apodrecimento. Sem proteção, dura menos da metade disso.
          </p>

          <h3>No freezer — o truque que muda tudo</h3>
          <p>
            Congele o gengibre inteiro, sem descascar. Na hora de usar, rale diretamente do estado congelado com um ralador fino. A casca sai junto com o primeiro toque do ralador, sem desperdício. O resultado é melhor do que ralar gengibre fresco que ficou dias na geladeira — mais aromático, sem fibra grossa, sem esforço. Dura até 6 meses no freezer.
          </p>
          <p>
            Essa é a melhor descoberta de cozinha que a maioria das pessoas faz tarde demais. Guardar gengibre no freezer inteiro e ralar na hora deixou de ser truque de chef e virou padrão de quem cozinha toda semana.
          </p>

          <h3>Gengibre em pó na despensa</h3>
          <p>
            Pote fechado, longe do fogão e da luz direta — as mesmas regras de qualquer tempero seco. A validade impressa no rótulo costuma ser de 2 a 3 anos, mas o aroma começa a enfraquecer depois de 12 a 18 meses. Se cheirar fraco, está na hora de trocar. Um saquinho de 50g de tempero que perdeu a potência não serve de nada na receita.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena ter gengibre na despensa</h2>

          <p>
            Sim. Sem muito debate.
          </p>
          <p>
            Gengibre fresco é barato, fácil de encontrar e dura meses no freezer. Gengibre em pó tem validade longa e ocupa pouco espaço. Os dois juntos cobrem a maioria dos usos sem custo relevante. É um ingrediente que aparece em chá, em marinada, em caldo, em bolo — e que faz diferença em todos eles.
          </p>
          <p>
            O único cenário onde não faz sentido é se você realmente não cozinha nada que peça gengibre. Mas nesse caso, também não tem feijão na despensa, então esse artigo não é pra você.
          </p>
          <p>
            Para quem quer estruturar melhor a despensa, gengibre entra junto com alho, cebola, azeite, vinagre e os temperos secos básicos. É a base que faz qualquer refeição de segunda-feira funcionar sem precisar pensar muito. Para montar uma{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            que funcione de verdade, esses ingredientes de base são o primeiro passo.
          </p>
          <p>
            O gengibre que você comprou na feira vai aparecer na lista da próxima semana — antes de murchar. Basta saber guardar.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre gengibre</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Gengibre fresco e em pó têm o mesmo sabor?</p>
              <p className="faq-a">
                Não. O fresco tem sabor mais brilhante, picante e com notas cítricas que desaparecem na secagem. O pó é mais terroso, mais quente e mais concentrado. São complementares, não substitutos diretos. Em chá e marinada, o fresco faz diferença. Em bolos e biscoitos, o pó distribui melhor na massa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto gengibre usar em uma receita?</p>
              <p className="faq-a">
                Para 4 pessoas, comece com 1 colher de chá de fresco ralado ou ½ colher de chá de pó. Em chás, uma fatia de 2 cm em 300 ml já é suficiente. A proporção de substituição quando necessário: 1 colher de chá de pó equivale a 1 colher de sopa de fresco ralado. Gengibre é fácil de exagerar — comece menos e ajuste.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar gengibre fresco para durar mais?</p>
              <p className="faq-a">
                Na geladeira, embrulhado em papel toalha dentro de um saco fechado, dura 2 a 3 semanas. Para mais tempo, congele inteiro: rale diretamente do freezer na hora de usar, sem descongelar. Dura até 6 meses e o resultado é melhor do que gengibre que ficou dias na geladeira.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso congelar gengibre fresco?</p>
              <p className="faq-a">
                Pode — é a melhor opção. Congele inteiro, sem descascar. Na hora de usar, rale direto do estado congelado com um ralador fino. A casca sai junto. Não precisa descongelar antes. Dura até 6 meses com aroma preservado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Gengibre faz mal para o estômago?</p>
              <p className="faq-a">
                Em quantidades normais de uso culinário, não. Tem efeito antiemético e pode aliviar desconforto digestivo leve. Em doses muito altas pode causar irritação gástrica em pessoas sensíveis. No uso cotidiano como tempero, sem problema para a maioria das pessoas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Gengibre e cúrcuma combinam juntos?</p>
              <p className="faq-a">
                Sim — é uma das combinações mais clássicas da culinária asiática. Os sabores são complementares: gengibre é picante e cítrico, <a href="/blog/o-que-e-curcuma">cúrcuma</a> é terrosa e levemente amarga. Funcionam juntos em chás, caldos e marinadas. No latte dourado — gengibre, cúrcuma, pimenta preta e leite vegetal — a combinação é o prato.
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
                Criador do Mise. Tem gengibre fresco congelado há três meses e rala diretamente do freezer. É a melhor descoberta de cozinha dos últimos anos.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              O gengibre tá na despensa.<br />
              <em>A lista faz o resto.</em>
            </h2>
            <p>
              O Mise conecta despensa, receitas e lista de compras num só lugar.
              O gengibre que você comprou na feira aparece na lista da próxima semana — antes de murchar.
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
