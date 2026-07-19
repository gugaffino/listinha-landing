import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Ricota: o que é, diferença do cottage e como usar',
  description: 'Ricota é feita do soro do leite, não do leite em si. Saiba o que é, a diferença do cottage e requeijão, o valor nutricional e como usar na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/o-que-e-ricota',
  },
  openGraph: {
    title: 'Ricota: o que é, diferença do cottage e como usar',
    description: 'Ricota é feita do soro do leite, não do leite em si. Saiba o que é, a diferença do cottage e requeijão, o valor nutricional e como usar na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/o-que-e-ricota',
    images: [
      {
        url: 'https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Close-up de queijo fresco branco sobre superfície de madeira — ricota fresca para receitas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricota: o que é, diferença do cottage e como usar',
    description: 'Ricota é feita do soro do leite, não do leite em si. Saiba o que é, a diferença do cottage e requeijão, o valor nutricional e como usar na cozinha.',
    images: ['https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ricota é queijo ou não é?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tecnicamente, ricota não é queijo. Queijo é feito do coalho do leite (proteínas de caseína). Ricota é produzida do soro que sobra desse processo, usando proteínas diferentes (albumina e globulina). A Anvisa classifica como "produto lácteo fresco". Na prática culinária, vai na mesma gôndola e nos mesmos usos dos queijos frescos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre ricota e cottage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cottage é feito do leite integral, tem grãos firmes e levemente salgados, e é mais proteico (cerca de 11–12g por 100g). Ricota é feita do soro do leite, tem textura cremosa-granulada e sabor mais neutro (cerca de 8–10g de proteína por 100g). Cottage é melhor como snack ou café da manhã; ricota é mais versátil em receitas doces e salgadas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ricota pode congelar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não é recomendado. Após o congelamento, a textura da ricota muda: fica aquosa e granulada de forma desagradável. Se for usar em molho, sopa ou recheio cozido, a diferença é menor. Para pastinha, lasanha fria ou uso direto, o resultado não presta. O ideal é comprar na quantidade que vai usar em até 4 dias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ricota engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por 100g, a ricota regular tem cerca de 150 kcal e 11g de gordura. Para um laticínio fresco, não é baixo — mas também não é alto. A versão light cai para cerca de 80 kcal e 4–5g de gordura com proteína similar. Em porções razoáveis (50–100g), é uma boa fonte de proteína sem exagerar em calorias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar ricota depois de aberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na geladeira, coberta ou em pote fechado, a ricota aberta dura de 3 a 4 dias. Esse é o limite — não tente esticar. Se a ricota ficou com cheiro azedo ou aparência aguada demais, está passada. Compre a quantidade que você vai usar dentro desse prazo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ricota light tem diferença no sabor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na maioria das receitas, a diferença de sabor é mínima. A textura pode ser ligeiramente mais firme e menos cremosa, mas em pratos cozidos (lasanha, torta, bolo) é imperceptível. Para pastinha onde a cremosidade importa mais, a ricota regular leva vantagem. Mas a troca funciona na maior parte dos usos do dia a dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como usar ricota no café da manhã?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As formas mais simples: amassada com mel e canela em torrada ou tapioca; misturada com fruta fresca (banana, morango, manga); batida com um pouco de leite e mel como pasta para pão. Ricota também vai bem em ovo mexido — adiciona cremosidade sem mudar o sabor. É um acréscimo de proteína discreto.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ricota: o que é, diferença do cottage e como usar',
  description: 'Ricota é feita do soro do leite, não do leite em si. Saiba o que é, a diferença do cottage e requeijão, o valor nutricional e como usar na cozinha.',
  image: 'https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
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
    '@id': 'https://www.miseemcasa.com.br/blog/o-que-e-ricota',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é ricota', item: 'https://www.miseemcasa.com.br/blog/o-que-e-ricota' },
  ],
}

export default function OQueERicota() {
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
            <li className="breadcrumb-current" aria-current="page">O que é ricota</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-13">13 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é ricota: guia completo com valor nutricional, usos e diferenças
          </h1>
          <p className="blog-desc">
            Ricota aparece em lasanha, torta, bolo e café da manhã. Mas o que exatamente é ricota, se é queijo ou não, e qual a diferença pra cottage e requeijão — a maioria não sabe de cor.
          </p>

          <div className="answer-box">
            <p>
              <strong>Ricota</strong> é um laticínio fresco feito do soro do leite — o líquido que sobra quando se produz queijo.
              Tecnicamente não é queijo (que usa as proteínas do leite, não do soro), mas na prática vai na mesma gôndola e nos mesmos usos dos frescos.
              Tem sabor neutro, textura cremosa-granulada e é uma das fontes de proteína mais baratas do setor de laticínios.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Close-up de queijo fresco branco e cremoso em superfície de madeira — ricota fresca para receitas"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é ricota</a></li>
              <li><a href="#como-e-feita">Como a ricota é feita</a></li>
              <li><a href="#e-queijo">Ricota é queijo?</a></li>
              <li><a href="#comparacao">Ricota vs cottage vs requeijão</a></li>
              <li><a href="#nutricional">Valor nutricional</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#escolher-guardar">Como escolher e guardar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5953784/pexels-photo-5953784.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Produção de ricota em laticínio — soro do leite sendo processado em tanque industrial"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: MART PRODUCTION / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é ricota</h2>

          <p>
            Ricota é um laticínio fresco de textura suave e sabor quase neutro. O nome vem do italiano <em>ricotta</em> — "recozida" — e descreve exatamente como é feita: o líquido que sobra da produção de queijo vai pro fogo uma segunda vez.
          </p>
          <p>
            No mercado brasileiro você encontra ricota fresca em tablete, ricota cremosa em pote e ricota defumada. A mais usada em receitas é a fresca, em tablete — dá pra amassar, misturar e modelar com facilidade.
          </p>
          <p>
            O sabor é discreto de propósito. Ricota não compete com os outros ingredientes — ela carrega tempero, erva e condimento sem impor o próprio sabor. É por isso que funciona igualmente bem em lasanha de espinafre e em bolo com goiabada.
          </p>

          {/* COMO É FEITA */}
          <h2 id="como-e-feita">Como a ricota é feita</h2>

          <p>
            Quando o leite vira queijo, as proteínas de caseína coagulam e formam a massa sólida. O que sobra é o soro — um líquido amarelado, rico em proteínas de outro tipo: albumina e globulina.
          </p>
          <p>
            Esse soro é reaquecido a cerca de 90°C com um agente ácido (ácido cítrico, lático ou, nas versões caseiras, vinagre ou limão). O calor mais o ácido fazem as proteínas do soro coagular. Elas sobem à superfície formando uma massa leve e delicada. Essa massa é coletada, drenada e embalada — é a ricota.
          </p>
          <p>
            O processo é simples e rende pouco: de muito soro, sai pouca ricota. Por isso o preço é relativamente baixo mas o rendimento em fábrica é pequeno. Quem produz queijo em escala usa a ricota pra aproveitar o soro em vez de descartar.
          </p>

          {/* É QUEIJO? */}
          <h2 id="e-queijo">Ricota é queijo?</h2>

          <p>
            Tecnicamente, não. A distinção importa mais do que parece. Queijo usa caseína — a proteína principal do leite. Ricota usa albumina e globulina do soro. São proteínas diferentes, com comportamentos diferentes no cozimento e valores nutricionais diferentes.
          </p>
          <p>
            A{' '}
            <a
              href="https://www.gov.br/agricultura/pt-br/assuntos/inspecao/produtos-animal/legislacao/regulamentos-tecnicos-de-identidade-e-qualidade-de-produtos-lacteos"
              target="_blank"
              rel="noopener"
            >
              legislação brasileira do MAPA
            </a>{' '}
            classifica ricota como "produto lácteo fresco" — não como queijo. Na prática do mercado e da cozinha, porém, vai na mesma gôndola e serve nos mesmos contextos.
          </p>
          <p>
            Para quem tem restrição à caseína, essa diferença é relevante. Ricota contém caseína em concentração muito menor que queijos convencionais — mas não é ausente. Se for restrição clínica, consulte um nutricionista antes de incluir.
          </p>

          {/* COMPARAÇÃO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/11281331/pexels-photo-11281331.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Prato com cottage cheese ao lado de tigela de creme de leite e copo de leite — laticínios frescos para comparação"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Konstantin Klimov / Pexels</p>
          </div>

          <h2 id="comparacao" className="img-above">Ricota vs cottage vs requeijão</h2>

          <p>
            Os três estão na gôndola de frescos e parecem intercambiáveis. Não são. A diferença de base muda sabor, textura e resultado final na receita.
          </p>

          <table className="cost-table" aria-label="Comparação entre ricota, cottage e requeijão">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Ricota</th>
                <th>Cottage</th>
                <th>Requeijão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base</td>
                <td>Soro do leite</td>
                <td>Leite integral</td>
                <td>Leite + creme</td>
              </tr>
              <tr>
                <td>Textura</td>
                <td>Cremosa-granulada</td>
                <td>Grãos firmes</td>
                <td>Pastosa / líquida</td>
              </tr>
              <tr>
                <td>Sabor</td>
                <td>Neutro, suave</td>
                <td>Levemente salgado</td>
                <td>Amanteigado, rico</td>
              </tr>
              <tr>
                <td>Calorias /100g</td>
                <td>~150 kcal</td>
                <td>~100 kcal</td>
                <td>~260 kcal</td>
              </tr>
              <tr>
                <td>Proteína /100g</td>
                <td>~9g</td>
                <td>~12g</td>
                <td>~8g</td>
              </tr>
              <tr>
                <td>Melhor uso</td>
                <td>Lasanha, bolo, torta, pastinha</td>
                <td>Café da manhã, salada</td>
                <td>Torrada, tapioca</td>
              </tr>
            </tbody>
          </table>

          <p>
            Cottage tem mais proteína e textura mais firme — melhor pra quem quer aumentar proteína com sabor discreto. Requeijão é o mais calórico e tem sabor mais forte — não dá pra substituir em receitas que pedem sabor rico. Ricota é a mais versátil: funciona em doce, salgado, frio e quente.
          </p>
          <p>
            O erro mais comum é comprar cottage achando que vai comportar igual à ricota em lasanha. O grão firme do cottage não dissolve da mesma forma — o resultado fica diferente. Troca funciona, mas o prato muda.
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="nutricional">Valor nutricional da ricota</h2>

          <p>
            Valores por 100g de ricota fresca regular, com base na{' '}
            <a
              href="https://www.tbca.net.br/"
              target="_blank"
              rel="noopener"
            >
              Tabela Brasileira de Composição de Alimentos (TBCA)
            </a>:
          </p>

          <ul className="item-list">
            <li><strong>Calorias:</strong> ~150 kcal</li>
            <li><strong>Proteína:</strong> ~9g</li>
            <li><strong>Gordura total:</strong> ~11g (predominantemente saturada)</li>
            <li><strong>Carboidratos:</strong> ~3g</li>
            <li><strong>Sódio:</strong> ~50–100mg — bem abaixo de queijos curados</li>
          </ul>

          <p>
            A versão light reduz a gordura para cerca de 4–5g e cai para ~80 kcal por 100g, com proteína similar. É uma substituição simples na maioria das receitas — o resultado final muda pouco.
          </p>
          <p>
            Um dado útil: ricota é uma das fontes de proteína mais baratas no corredor de laticínios. Comparando proteína por real gasto, dificilmente perde para outras opções frescas no mercado brasileiro.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa e lista de compras no mesmo lugar. <em>O Mise conecta os dois.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7525004/pexels-photo-7525004.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tigela de vidro com queijo fresco cremoso sobre bancada de madeira — ricota pronta para uso em receitas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: SHVETS production / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar ricota na cozinha</h2>

          <p>
            Ricota funciona melhor onde você quer proteína e cremosidade sem um sabor dominante. Ela carrega tempero sem impor o próprio gosto — é um ingrediente de suporte, não de destaque.
          </p>

          <h3>Em pratos salgados</h3>
          <p>
            <strong>Lasanha e massas recheadas</strong> são o uso clássico. Ricota misturada com espinafre, alho e pimenta-do-reino é o recheio padrão de lasanha italiana, cannelloni e ravioli. Amasse bem com um garfo antes de misturar — textura homogênea faz diferença no resultado.
          </p>
          <p>
            <strong>Tortas e quiches</strong> ficam mais leves com ricota no lugar de creme de leite. A textura muda um pouco — menos untuosa — mas o resultado é bom e reduz calorias.
          </p>
          <p>
            <strong>Pastinha</strong> é o uso mais rápido. Ricota amassada com azeite, sal, pimenta e erva a gosto — sai em 5 minutos. Vai bem com pão integral, torrada ou tapioca. Você faz no café da manhã enquanto o café passa. Ou faz na véspera e cobre com filme — dura até o dia seguinte na geladeira.
          </p>

          <h3>Em doces</h3>
          <p>
            <strong>Bolo de ricota</strong> tem textura diferente do bolo com queijo — menos denso, mais úmido. Funciona bem com frutas (maçã, pera, goiabada). <strong>Panqueca</strong> com ricota na massa fica mais fofa: substitua parte da farinha por ricota amassada.
          </p>
          <p>
            Em <strong>cheesecake</strong>, ricota pode substituir parte do cream cheese — o resultado é menos denso e mais ácido. Quem prefere cheesecake mais leve considera uma vantagem. Veja mais sobre a diferença entre os dois no{' '}
            <a href="/blog/o-que-e-cream-cheese">guia de cream cheese</a>.
          </p>

          <h3>No café da manhã</h3>
          <p>
            Em torrada com mel e canela. Com banana fatiada. Misturada no ovo mexido pra adicionar cremosidade. A ricota não muda o sabor do ovo — só deixa mais encorpado. É uma forma silenciosa de adicionar proteína sem mudar o café da manhã de sempre.
          </p>

          {/* ESCOLHER E GUARDAR */}
          <h2 id="escolher-guardar">Como escolher no mercado e como guardar</h2>

          <h3>Escolhendo no mercado</h3>
          <p>
            Na gôndola você vai encontrar basicamente três formatos: <strong>tablete fresco</strong> (o mais versátil), <strong>cremosa em pote</strong> (mais prática pra pastinha e uso direto) e <strong>defumada</strong> (sabor próprio, não substitui a fresca em receitas doces).
          </p>
          <p>
            Pra receitas que precisam de estrutura — lasanha, torta salgada, bolo recheado — prefira o tablete. Fica mais firme depois de amassado. A cremosa em pote é melhor quando vai usar como pasta ou misturar em molho sem cozimento.
          </p>
          <p>
            Versão light funciona na maior parte das receitas sem diferença perceptível. A troca vale se você usa com frequência — a{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            te ajuda a saber qual versão tem e quando precisa repor.
          </p>

          <h3>Guardando em casa</h3>
          <p>
            Ricota fresca vai pra geladeira imediatamente. Aberta, dura de 3 a 4 dias — não mais. Esse é o ponto que mais gera desperdício: você compra pra usar na quarta, abre no sábado pra experimentar, e na segunda está fora do prazo.
          </p>
          <p>
            Congelar não funciona bem. A textura após descongelamento fica aguada e quebradiça. Se for usar em sopa ou molho cozido, a diferença é menor. Pra pastinha, lasanha ou qualquer uso onde a textura importa, não vale.
          </p>
          <p>
            Uma regra simples: compra na quantidade certa pra usar em até 4 dias. Ricota não é o tipo de ingrediente que você guarda "pra quando precisar". Diferente do queijo curado que dura semanas no fundo da geladeira.
          </p>
          <p>
            Ricota na{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>{' '}
            é opcional — entra quando você tem receita em mente. Sem uso definido, vai estragar antes de virar lasanha.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre ricota</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Ricota é queijo ou não é?</p>
              <p className="faq-a">
                Tecnicamente não é queijo. Queijo usa a proteína caseína do leite. Ricota usa as proteínas do soro que sobra desse processo. A Anvisa classifica como produto lácteo fresco. Na prática da cozinha, vai na mesma gôndola e nos mesmos usos — mas a distinção importa pra quem tem restrição à caseína.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre ricota e cottage?</p>
              <p className="faq-a">
                Cottage é feito do leite integral, tem grãos firmes e levemente salgados, e é mais proteico (~12g por 100g). Ricota tem textura cremosa-granulada, sabor mais neutro e menos proteína (~9g por 100g). Cottage é melhor como snack; ricota é mais versátil em receitas. A troca funciona, mas o resultado muda.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Ricota pode congelar?</p>
              <p className="faq-a">
                Não é recomendado. Após o congelamento, a textura fica aguada e quebradiça. Em molho ou sopa cozida, a diferença é menor. Pra pastinha, lasanha ou uso onde a textura importa, o resultado não presta. Compre na quantidade que vai usar em até 4 dias.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Ricota engorda?</p>
              <p className="faq-a">
                Por 100g, a ricota regular tem cerca de 150 kcal e 11g de gordura. Para um laticínio fresco, não é alto. A versão light cai para ~80 kcal e 4–5g de gordura com proteína similar. Em porções de 50–100g, é uma boa fonte de proteína sem exagerar em calorias.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar ricota depois de aberta?</p>
              <p className="faq-a">
                Na geladeira, coberta ou em pote fechado, a ricota aberta dura de 3 a 4 dias. Não tente esticar. Se ficou com cheiro azedo ou aparência muito aguada, está passada. Compre a quantidade certa pra usar dentro desse prazo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Ricota light tem diferença no sabor?</p>
              <p className="faq-a">
                Em receitas cozidas (lasanha, torta, bolo), a diferença de sabor e textura é mínima ou imperceptível. Na pastinha fria onde a cremosidade importa mais, a regular leva vantagem. Mas a troca funciona na maioria dos usos do dia a dia — e a proteína por 100g é quase a mesma.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como usar ricota no café da manhã?</p>
              <p className="faq-a">
                Amassada com mel e canela em torrada ou tapioca. Misturada com fruta fresca. Batida com leite e mel como pasta para pão. Misturada no ovo mexido — adiciona cremosidade sem mudar o sabor. É uma forma discreta de adicionar proteína ao café da manhã sem mudar a rotina.
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
                Criador do Mise. Comprou ricota pra fazer lasanha na quarta. Abriu no sábado pra experimentar. Jogou fora na segunda. A lasanha ficou pra semana seguinte.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem na despensa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e{' '}
              <a href="/funcionalidades/lista-de-compras" style={{color: 'rgba(251,249,242,0.7)'}}>lista de compras</a>{' '}
              num só lugar. Você compra a ricota certa — e usa antes de estragar.
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
