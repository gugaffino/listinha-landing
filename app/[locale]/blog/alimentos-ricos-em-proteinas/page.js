import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: '10 alimentos ricos em proteínas para o dia a dia',
  description: 'Os 10 alimentos ricos em proteínas mais práticos para quem cozinha em casa: ovos, frango, feijão e mais. Quantidade por porção e como incluir sem complicar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-proteinas',
  },
  openGraph: {
    title: '10 alimentos ricos em proteínas para o dia a dia',
    description: 'Os 10 alimentos ricos em proteínas mais práticos para quem cozinha em casa: ovos, frango, feijão e mais. Quantidade por porção e como incluir sem complicar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-proteinas',
    images: [
      {
        url: 'https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Flatlay de alimentos nutritivos variados sobre superfície clara — fontes de proteínas incluindo ovos, nozes e leguminosas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 alimentos ricos em proteínas para o dia a dia',
    description: 'Os 10 alimentos ricos em proteínas mais práticos para quem cozinha em casa: ovos, frango, feijão e mais. Quantidade por porção e como incluir sem complicar.',
    images: ['https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto de proteína preciso comer por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A recomendação geral é de 0,8g de proteína por quilo de peso corporal para adultos sedentários. Para quem faz exercício regular, a faixa sobe para 1,2g a 2g/kg. Uma pessoa de 70kg sedentária precisa de cerca de 56g por dia — dois ovos, uma porção de frango no almoço e um iogurte grego já chegam perto disso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é o alimento mais rico em proteína do dia a dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre os alimentos acessíveis, o peito de frango tem uma das maiores concentrações: cerca de 31g por 100g grelhado. O atum em lata fica próximo, com 26g por 100g. O amendoim tem 26g por 100g e é a maior fonte vegetal concentrada que você encontra facilmente no mercado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ovo tem muita proteína?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Um ovo médio tem cerca de 6g de proteína. Dois ovos já somam 12g — uma base sólida para o café da manhã. O diferencial do ovo é a qualidade: ele contém todos os aminoácidos essenciais em boas proporções, o que o torna uma das proteínas mais aproveitáveis pelo organismo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Feijão tem proteína suficiente pra substituir a carne?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Feijão tem proteína, mas não contém todos os aminoácidos essenciais na proporção ideal. A solução — que o brasileiro já faz sem saber — é combinar feijão com arroz. Os dois juntos formam um perfil de aminoácidos mais completo. Para quem não come carne, feijão com arroz é uma base sólida, desde que a quantidade total no dia seja suficiente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como incluir mais proteína no café da manhã?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As opções mais práticas: ovo mexido ou cozido (6g por unidade), iogurte grego natural (8–10g por 100g), queijo cottage (11g por 100g) ou pasta de amendoim em pão (26g por 100g). Qualquer combinação de dois desses já garante uma base proteica decente antes do almoço.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual fonte de proteína é mais barata no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ovo e feijão são as fontes de proteína mais baratas por grama no Brasil. O ovo custa entre R$0,60 e R$1,00 por unidade com 6g de proteína cada. O feijão carioca fica em torno de R$7 a R$9 por quilo (FIPE/IBGE, 2024), com cerca de 8g de proteína por 100g cozido. Para quem controla custo sem abrir mão de proteína, esses dois são o ponto de partida.',
      },
    },
    {
      '@type': 'Question',
      name: 'Proteína vegetal é tão boa quanto a animal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proteína animal tem um perfil de aminoácidos mais completo e é mais fácil de absorver. Mas isso não significa que proteína vegetal é ruim — significa que você precisa variar as fontes. Combinar leguminosas com grãos ao longo do dia cobre bem as necessidades de quem não come carne.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '10 alimentos ricos em proteínas para o dia a dia',
  description: 'Os 10 alimentos ricos em proteínas mais práticos para quem cozinha em casa: ovos, frango, feijão e mais. Quantidade por porção e como incluir sem complicar.',
  image: 'https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-proteinas',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: '10 alimentos ricos em proteínas', item: 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-proteinas' },
  ],
}

export default function AlimentosRicosEmProteinas({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">10 alimentos ricos em proteínas</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-15">15 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Alimentos ricos em proteínas: os 10 que já estão na sua cozinha
          </h1>
          <p className="blog-desc">
            Não precisa de suplemento, não precisa de dieta cara. Os alimentos com mais proteína por porção são quase todos os que você já compra toda semana — você só ainda não sabe quanto tem em cada um.
          </p>

          <div className="answer-box">
            <p>
              Os <strong>10 alimentos mais ricos em proteínas</strong> para o dia a dia são: peito de frango (~31g/100g), atum em lata (~26g/100g), amendoim (~26g/100g), carne bovina magra (~21–26g/100g), queijo cottage (~11g/100g), lentilha (~9g/100g cozida), grão-de-bico (~9g/100g cozido), feijão (~8g/100g cozido), iogurte grego (~8–10g/100g) e ovo (~6g/unidade). Cinco de origem animal, cinco de origem vegetal — todos no mercado de bairro.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Flatlay de alimentos nutritivos variados sobre superfície clara — fontes de proteínas incluindo ovos, nozes e leguminosas"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Vanessa Loring / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é proteína e por que ela importa</a></li>
              <li><a href="#fontes-animais">Fontes animais: os mais concentrados</a></li>
              <li><a href="#fontes-vegetais">Fontes vegetais: proteína sem carne</a></li>
              <li><a href="#quantidade">Quanto de proteína por dia</a></li>
              <li><a href="#como-incluir">Como incluir mais na rotina</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É PROTEÍNA */}
          <h2 id="o-que-e">O que é proteína e por que ela importa</h2>

          <p>
            Proteína é um nutriente essencial — o corpo usa para construir e reparar tecidos, produzir enzimas e hormônios, e manter o sistema imunológico funcionando. Diferente de carboidratos e gordura, o organismo não armazena proteína em reserva. Isso significa que você precisa ingerir o suficiente todos os dias.
          </p>
          <p>
            A sensação de saciedade também tem relação direta com proteína. Refeições com mais proteína seguram a fome por mais tempo do que refeições com a mesma caloria vinda de carboidrato. É a razão pela qual o café da manhã só com pão branco dura menos que o com ovo.
          </p>
          <p>
            Na prática, o problema não costuma ser falta de conhecimento — é não ter os alimentos certos em casa. Uma <a href="/funcionalidades/despensa">despensa</a> que tem ovo, feijão e atum já tem proteína pra boa parte da semana, sem nenhum planejamento elaborado.
          </p>

          {/* FONTES ANIMAIS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6544260/pexels-photo-6544260.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Prato com atum, feijão verde e ovo cozido cortado ao meio — combinação de fontes de proteína animal"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Alesia Kozik / Pexels</p>
          </div>

          <h2 id="fontes-animais" className="img-above">Fontes animais: os mais concentrados</h2>

          <p>
            Proteínas animais têm um perfil de aminoácidos mais completo e são mais facilmente absorvidas pelo organismo. Não significa que as vegetais sejam ruins — mas, por volume, as fontes animais costumam entregar mais proteína por porção.
          </p>

          <h3>1. Peito de frango — ~31g por 100g</h3>
          <p>
            O mais concentrado da lista entre os alimentos acessíveis. Peito grelhado sem tempero tem cerca de 31g de proteína por 100g, com pouca gordura. É fácil de preparar em quantidade e vai bem frio na marmita do dia seguinte. A versão mais barata de frango com alto teor de proteína no mercado brasileiro.
          </p>

          <h3>2. Atum em lata — ~26g por 100g</h3>
          <p>
            Atum em conserva de água tem cerca de 26g de proteína por 100g já escorrido. Não precisa de preparo, dura meses na despensa e é uma das fontes de proteína mais baratas por grama. O atum em óleo tem a mesma proteína, com mais gordura — fica a gosto. Uma lata padrão de 170g entrega perto de 40g de proteína pronta em 30 segundos.
          </p>

          <h3>3. Carne bovina magra — ~21–26g por 100g</h3>
          <p>
            Cortes magros como patinho e músculo ficam entre 21g e 26g de proteína por 100g grelhado. Cortes mais gordurosos têm proporcionalmente menos proteína porque o peso da gordura dilui o percentual. Se o objetivo é proteína, prefira cortes com pouca gordura visível.
          </p>

          <h3>4. Queijo cottage — ~11g por 100g</h3>
          <p>
            Subestimado. Cottage tem cerca de 11g de proteína por 100g com pouca gordura e caloria baixa em comparação com outros queijos. Vai bem no café da manhã com fruta, no pão ou como substituto do creme de leite em molhos. Não concorre em sabor com outros queijos — mas é funcional.
          </p>

          <h3>5. Iogurte grego natural — ~8–10g por 100g</h3>
          <p>
            O iogurte comum tem menos da metade da proteína do grego. O grego natural integral tem entre 8g e 10g por 100g. Com granola e fruta, começa o dia com proteína sem nenhum esforço. Verifique o rótulo — produtos com "estilo grego" ou muitos adicionados podem ter bem menos do que o rótulo sugere.
          </p>

          <h3>6. Ovo — ~6g por unidade</h3>
          <p>
            Um ovo médio tem cerca de 6g de proteína. Dois ovos somam 12g. Não é o número mais alto por 100g, mas o ovo tem uma das proteínas de maior qualidade disponíveis: todos os aminoácidos essenciais em boas proporções. É por isso que virou referência de comparação nutricional. Custa entre R$0,60 e R$1,00 por unidade — difícil de bater em custo-benefício.
          </p>

          {/* FONTES VEGETAIS */}
          <h2 id="fontes-vegetais">Fontes vegetais: proteína sem carne</h2>

          <p>
            A proteína vegetal costuma ter um perfil de aminoácidos incompleto quando comparada à animal. Mas isso se resolve com variedade — combinar fontes diferentes ao longo do dia cobre as necessidades sem suplemento. O Brasil tem sorte: feijão com arroz já era a solução antes de virar tendência de nutrição funcional.
          </p>

          <h3>7. Amendoim — ~26g por 100g</h3>
          <p>
            A maior concentração de proteína entre os vegetais da lista. Amendoim e pasta de amendoim têm cerca de 26g de proteína por 100g. É calórico — a maior parte do peso é gordura —, mas em quantidade moderada é um dos snacks mais nutritivos e saciantes que existem. Pasta de amendoim no pão integral é difícil de bater em praticidade e custo.
          </p>

          <h3>8. Lentilha — ~9g por 100g cozida</h3>
          <p>
            Lentilha cozida tem cerca de 9g de proteína por 100g e cozinha rápido — em 20 minutos sem precisar deixar de molho, ao contrário do feijão. É das leguminosas mais práticas. Vai bem em sopa, salada ou como substituto do feijão numa refeição. Tem ferro também, o que é relevante pra quem não come carne.
          </p>

          <h3>9. Grão-de-bico — ~9g por 100g cozido</h3>
          <p>
            Mesmo percentual da lentilha. O grão-de-bico assado mantém a proteína com textura crocante. Precisa de mais tempo pra cozinhar do que a lentilha, mas comprado enlatado ou em conserva é imediatamente prático. Uma lata de 400g tem, líquida, cerca de 240g de grão-de-bico escorrido — perto de 22g de proteína por lata.
          </p>

          <h3>10. Feijão — ~8g por 100g cozido</h3>
          <p>
            O clássico. Feijão carioca ou preto cozido tem cerca de 8g de proteína por 100g. Não é o número mais alto, mas feijão entra em todas as refeições sem esforço — o que significa que a quantidade total no dia soma rápido. Junto com arroz, o perfil de aminoácidos melhora bastante. A <a href="/blog/lista-basica-de-compras">lista básica de compras</a> sem feijão está incompleta.
          </p>

          {/* QUANTO POR DIA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/162712/pexels-photo-162712.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Ovos marrons em tigela de madeira sobre fundo escuro — fonte de proteína acessível e versátil"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
          </div>

          <h2 id="quantidade" className="img-above">Quanto de proteína por dia</h2>

          <p>
            A recomendação geral da{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">OMS</a>
            {' '}para adultos sedentários é de 0,8g de proteína por quilo de peso corporal por dia. Uma pessoa de 70kg precisa de cerca de 56g por dia. Para quem faz exercício com regularidade, a faixa sobe para 1,2g a 2g/kg.
          </p>
          <p>
            Para visualizar como 56g aparecem numa alimentação comum:
          </p>

          <ul className="item-list">
            <li>Café da manhã: 2 ovos + iogurte grego 100g → ~20g</li>
            <li>Almoço: 100g de frango grelhado + feijão 50g cozido → ~25g</li>
            <li>Lanche: pasta de amendoim 2 colheres → ~7g</li>
            <li>Jantar: atum em lata 1 lata (170g) → ~22g</li>
          </ul>

          <p>
            Esse exemplo passa de 70g — suficiente pra maioria das pessoas. Sem suplemento, sem proteína em pó, sem nada que você não encontre em qualquer mercado de bairro. O que trava não é o acesso — é não ter esses itens em casa quando precisa.
          </p>

          {/* COMO INCLUIR */}
          <h2 id="como-incluir">Como incluir mais proteína na rotina sem complicar</h2>

          <p>
            A dificuldade geralmente não é comer proteína no almoço — que já tem frango ou carne. O problema é o café da manhã e o lanche, que costumam ser só carboidrato. Pão, biscoito, tapioca. Bom, mas sem proteína que segure a fome até o almoço. Você chega no restaurante com fome de duas refeições.
          </p>
          <p>
            Três mudanças simples que somam bastante ao longo da semana:
          </p>

          <ul className="item-list">
            <li>Adicionar um ovo ao café da manhã — frito, mexido, cozido. Qualquer formato. São 6g a mais por dia sem esforço adicional.</li>
            <li>Trocar biscoito por amendoim ou pasta de amendoim como lanche. Mais proteína, mais gordura boa, mais saciedade até o jantar.</li>
            <li>Ter atum em lata fixo na <a href="/funcionalidades/lista-de-compras">lista de compras</a>. Proteína pronta em 30 segundos pra qualquer refeição — salada, torrada, arroz.</li>
          </ul>

          <p>
            O que muda o jogo não é a refeição principal — é o que você come entre elas. Quem tem proteína nos lanches come menos no jantar sem nem perceber. O problema é que esses itens somem da despensa sem aparecer na lista. Amendoim acaba. Atum acaba. E na hora que precisa, tem só biscoito.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa organizada é proteína no lugar certo. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre alimentos ricos em proteínas</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quanto de proteína preciso comer por dia?</p>
              <p className="faq-a">
                A recomendação geral é de 0,8g por quilo de peso corporal para adultos sedentários. Para quem faz exercício regular, a faixa sobe para 1,2g a 2g/kg. Uma pessoa de 70kg sedentária precisa de cerca de 56g por dia — dois ovos, uma porção de frango no almoço e um iogurte grego já chegam perto disso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual é o alimento mais rico em proteína do dia a dia?</p>
              <p className="faq-a">
                Entre os alimentos acessíveis, o peito de frango tem uma das maiores concentrações: cerca de 31g por 100g grelhado. O atum em lata fica próximo, com 26g por 100g. O amendoim tem 26g por 100g e é a maior fonte vegetal concentrada que você encontra facilmente no mercado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Ovo tem muita proteína?</p>
              <p className="faq-a">
                Um ovo médio tem cerca de 6g de proteína. Dois ovos já somam 12g — uma base sólida para o café da manhã. O diferencial do ovo é a qualidade: ele contém todos os aminoácidos essenciais em boas proporções, o que o torna uma das proteínas mais aproveitáveis pelo organismo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Feijão tem proteína suficiente pra substituir a carne?</p>
              <p className="faq-a">
                Feijão tem proteína, mas não contém todos os aminoácidos essenciais na proporção ideal. A solução — que o brasileiro já faz sem saber — é combinar feijão com arroz. Os dois juntos formam um perfil de aminoácidos mais completo. Para quem não come carne, feijão com arroz é uma base sólida, desde que a quantidade total no dia seja suficiente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como incluir mais proteína no café da manhã?</p>
              <p className="faq-a">
                As opções mais práticas: ovo mexido ou cozido (6g por unidade), iogurte grego natural (8–10g por 100g), queijo cottage (11g por 100g) ou pasta de amendoim em pão (26g por 100g). Qualquer combinação de dois desses já garante uma base proteica decente antes do almoço.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual fonte de proteína é mais barata no Brasil?</p>
              <p className="faq-a">
                Ovo e feijão são as fontes de proteína mais baratas por grama no Brasil. O ovo custa entre R$0,60 e R$1,00 por unidade com 6g de proteína cada. O feijão carioca fica em torno de R$7 a R$9 por quilo (FIPE/IBGE, 2024), com cerca de 8g de proteína por 100g cozido. Para quem controla custo sem abrir mão de proteína, esses dois são o ponto de partida.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Proteína vegetal é tão boa quanto a animal?</p>
              <p className="faq-a">
                A proteína animal tem um perfil de aminoácidos mais completo e é mais fácil de absorver. Mas isso não significa que proteína vegetal é ruim — significa que você precisa variar as fontes. Combinar leguminosas com grãos ao longo do dia cobre bem as necessidades de quem não come carne.
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
                Criador do Mise. Sabe de cabeça quanto de proteína tem num ovo mas ainda esquece de comprar feijão. Está trabalhando nisso.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Proteína no lugar certo.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Despensa, lista de compras e receitas conectadas. Você sabe o que tem em casa — e o atum não some da despensa sem aparecer na lista.
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
