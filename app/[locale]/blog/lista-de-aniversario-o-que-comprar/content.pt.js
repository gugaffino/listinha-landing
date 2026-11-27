import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Lista de aniversário: o que comprar e quanto gastar',
  description: 'Lista de aniversário: o que comprar em comida, bebida, descartáveis e decoração por convidado, com dica de orçamento e o que cortar primeiro se apertar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-aniversario-o-que-comprar',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-aniversario-o-que-comprar',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
    },
  },
  openGraph: {
    title: 'Lista de aniversário: o que comprar e quanto gastar',
    description: 'Lista de aniversário: o que comprar em comida, bebida, descartáveis e decoração por convidado, com dica de orçamento e o que cortar primeiro se apertar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
    images: [
      {
        url: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mulher escrevendo lista de compras de aniversário em caderno sobre balcão de cozinha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de aniversário: o que comprar e quanto gastar',
    description: 'Lista de aniversário: o que comprar em comida, bebida, descartáveis e decoração por convidado, com dica de orçamento e o que cortar primeiro se apertar.',
    images: ['https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quantos salgados por pessoa numa festa de aniversário?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Conta de 8 a 10 salgados por adulto em festa com duração de 2-3 horas, e 4 a 6 por criança. Se tiver bolo e docinho também, pode ficar no limite inferior. Festa mais curta, de 1-2 horas, cai pra 5-6 por adulto. Sempre sobra um pouco — é melhor do que faltar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto de refrigerante comprar por convidado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em média, 500ml a 600ml por pessoa numa festa de 2-3 horas, somando todas as bebidas não alcoólicas. Isso dá cerca de 1 litro de refrigerante pra cada 2 convidados, mais suco e água. Em dia de calor ou festa mais longa, soma 20% a mais na conta.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que não pode faltar numa festa de aniversário infantil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bolo, vela, algo pra beber, salgado ou lanche e um motivo pra criançada gastar energia — balão solto, brincadeira simples ou música já resolve. Decoração cara e monitor contratado são opcionais, não obrigatórios. O que garante a festa é comida, bebida e uma atividade, nessa ordem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá pra fazer uma festa de aniversário em casa gastando pouco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dá, e a conta cai bastante quando comida e bebida saem de casa em vez de serviço de buffet. Bolo caseiro, salgado assado em vez de fritado e balão em vez de painel personalizado cortam o custo sem cortar a festa. O gasto que mais pesa costuma ser decoração — é o primeiro lugar pra economizar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Precisa de lembrancinha em festa de aniversário adulto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não precisa. Lembrancinha é tradição mais forte em festa infantil, onde os pais esperam alguma coisa pra criança levar pra casa. Em festa de adulto, é só um detalhe — se sair do orçamento, corta sem culpa. Ninguém lembra de festa de 30, 40 ou 50 anos pela sacolinha.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantos dias antes devo comprar os itens da festa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Decoração, descartáveis e lembrancinha dão pra comprar com 1-2 semanas de antecedência, porque não estragam. Bolo, salgado e qualquer coisa perecível fica pra 1-2 dias antes, ou no mesmo dia se for assar em casa. Bebida e gelo, no dia anterior ou no próprio dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que cortar primeiro se o orçamento apertar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Decoração temática e lembrancinha elaborada saem primeiro — são os itens que custam mais e pesam menos na lembrança da festa. Comida e bebida ficam, porque é o que todo mundo nota quando falta. Um balão colorido e um bolo bom seguram a festa sem painel de parabéns.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de aniversário: o que comprar e quanto gastar',
  description: 'Lista de aniversário: o que comprar em comida, bebida, descartáveis e decoração por convidado, com dica de orçamento e o que cortar primeiro se apertar.',
  image: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-11-27',
  dateModified: '2026-11-27',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de aniversário', item: 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar' },
  ],
}

const copyText = `LISTA DE ANIVERSÁRIO

COMIDA
- Bolo
- Salgados (coxinha, risole, empada)
- Docinhos (brigadeiro, beijinho)
- Pão de queijo ou mini sanduíches
- Frutas picadas
- Pipoca ou batata chips

BEBIDAS
- Refrigerante
- Suco
- Água
- Gelo
- Cerveja ou espumante (festa adulta, opcional)

DESCARTÁVEIS E MESA
- Pratos descartáveis
- Copos descartáveis
- Guardanapos
- Toalha de mesa
- Talheres descartáveis
- Sacos de lixo extra

DECORAÇÃO
- Balões
- Faixa ou painel de "parabéns"
- Toalha temática
- Vela de aniversário
- Fita adesiva

LEMBRANCINHAS (opcional)
- Sacolinha
- Docinho ou brinquedo pequeno
- Cartão de agradecimento`

export default function ListaDeAniversarioOQueComprarPt() {
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
            <li><a href="/pt/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Lista de aniversário</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-11-27">27 nov. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/pt/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista de aniversário: o que comprar sem esquecer nada
          </h1>
          <p className="blog-desc">
            A festa já tem data e já tem bolo prometido. O que falta é a parte chata: decidir o que entra na lista antes que o mercado vire um labirinto de corredor com balão e salgadinho ao mesmo tempo. Aqui está o essencial, organizado por categoria, com quantidade por convidado e o que cortar se o orçamento apertar.
          </p>

          <div className="answer-box">
            <p>
              Uma <strong>lista de aniversário</strong> cobre 5 frentes: <strong>comida, bebida, descartáveis, decoração e lembrancinha</strong> (essa última, opcional).
              Pra festa de 15-20 pessoas, dá pra sair do mercado com tudo isso em uma única lista — sem precisar voltar correndo porque faltou gelo ou guardanapo.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mulher escrevendo lista de compras de aniversário em caderno sobre balcão de cozinha"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Yaroslav Shuraev / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#antes-de-comprar">Antes de sair de casa: convidados e orçamento</a></li>
              <li><a href="#comida">Comida: o que não pode faltar</a></li>
              <li><a href="#bebidas">Bebidas: quanto comprar por pessoa</a></li>
              <li><a href="#descartaveis">Descartáveis e mesa</a></li>
              <li><a href="#decoracao">Decoração: o essencial, sem exagero</a></li>
              <li><a href="#lista-pra-copiar">Lista pra copiar e colar</a></li>
              <li><a href="#economizar">Como economizar sem a festa ficar pobre</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* ANTES DE COMPRAR */}
          <h2 id="antes-de-comprar">Antes de sair de casa: convidados e orçamento</h2>

          <p>
            Toda lista de aniversário boa começa com dois números: quantos convidados e quanto dá pra gastar. Sem esses dois, a lista cresce sozinha — vira três sacos de salgadinho que ninguém pediu e falta exatamente o que o bolo precisava, que era mais uma vela.
          </p>
          <p>
            O número de convidados decide a quantidade de comida e bebida. O orçamento decide o tamanho da decoração. São duas contas separadas, e misturar as duas é como a maioria das festas erra a mão — gasta no painel personalizado e aperta no salgado, quando devia ser o contrário.
          </p>
          <p>
            Regra prática: define o orçamento total primeiro, separa 60% pra comida e bebida, 25% pra decoração e descartáveis, e guarda 15% de folga pro que sempre aparece — vela que não acende, saco de gelo extra, aquele convidado de última hora que avisa em cima da hora.
          </p>
          <p>
            Separar por categoria antes de sair de casa — do jeito que uma{' '}
            <a href="/pt/blog/lista-de-compras-mercado">lista de compras organizada por corredor</a> já faz pra mercado comum — evita passar duas vezes pela mesma seção procurando o que ficou faltando.
          </p>

          {/* COMIDA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/35661532/pexels-photo-35661532.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Variedade de docinhos e salgadinhos coloridos em vitrine de confeitaria"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anderson Alves / Pexels</p>
          </div>

          <h2 id="comida" className="img-above">Comida: o que não pode faltar</h2>

          <p>
            O bolo é o centro, mas ele sozinho não sustenta uma festa de duas horas. A base segura é: bolo, salgado, docinho e alguma coisa salgada mais substancial — pão de queijo, mini sanduíche ou, se a festa for maior, churrasco.
          </p>
          <ul className="item-list">
            <li><strong>Bolo</strong> — 1 fatia por convidado, mais 20% de folga pra quem repete</li>
            <li><strong>Salgados</strong> — 8-10 por adulto, 4-6 por criança, em festa de 2-3 horas</li>
            <li><strong>Docinhos</strong> — 2-3 por pessoa, se tiver bolo também</li>
            <li><strong>Pão de queijo ou mini sanduíche</strong> — opcional, bom pra festa que passa da hora do almoço</li>
            <li><strong>Frutas picadas</strong> — ajuda a equilibrar o açúcar, principalmente em festa infantil</li>
          </ul>
          <p>
            Festa com churrasco entra numa conta diferente: carne vira o prato principal, e salgado passa a ser entrada, não refeição. Nesse caso, calcula carne por pessoa separado do resto — e corta o docinho pela metade, porque ninguém sobremesa depois de churrasco e bolo juntos.
          </p>

          {/* BEBIDAS */}
          <h2 id="bebidas">Bebidas: quanto comprar por pessoa</h2>

          <p>
            A conta de bebida costuma ser a que mais sobra ou mais falta — raramente acerta no meio. A referência que funciona: 500-600ml por pessoa, somando tudo que não é alcoólico, numa festa de 2-3 horas.
          </p>
          <ul className="item-list">
            <li><strong>Refrigerante</strong> — 1 litro pra cada 2 convidados</li>
            <li><strong>Suco</strong> — opcional, bom pra criança e pra quem não bebe refrigerante</li>
            <li><strong>Água</strong> — sempre tem alguém que só quer água, principalmente em dia de calor</li>
            <li><strong>Gelo</strong> — 1kg pra cada 4-5 convidados, mais se a festa for ao ar livre</li>
            <li><strong>Cerveja ou espumante</strong> — festa adulta, calcula separado da conta de refrigerante</li>
          </ul>
          <p>
            Dia de calor ou festa que passa de 3 horas, soma 20% em cima dessa conta. Dá pra sobrar — bebida não estraga igual salgado. Faltar é o erro que todo mundo lembra.
          </p>

          {/* DESCARTÁVEIS */}
          <h2 id="descartaveis">Descartáveis e mesa</h2>

          <p>
            É a parte que ninguém comemora, mas que faz a diferença entre lavar louça até meia-noite ou jogar tudo no saco de lixo e ir dormir.
          </p>
          <ul className="item-list">
            <li><strong>Pratos descartáveis</strong> — conta 1,5 por pessoa, porque alguém sempre pega um segundo</li>
            <li><strong>Copos descartáveis</strong> — o mesmo, 1,5 por pessoa</li>
            <li><strong>Guardanapos</strong> — pacote grande, sempre sobra menos do que parece</li>
            <li><strong>Toalha de mesa</strong> — descartável ou de tecido, dependendo do estilo da festa</li>
            <li><strong>Talheres descartáveis</strong> — só se tiver comida que precisa, tipo churrasco ou massa</li>
            <li><strong>Sacos de lixo extra</strong> — mais do que o normal da casa, a festa gera o triplo</li>
          </ul>

          {/* DECORAÇÃO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8880742/pexels-photo-8880742.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Copo com refrigerante gelado e cubos de gelo sobre mesa de festa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ron Lach / Pexels</p>
          </div>

          <h2 id="decoracao" className="img-above">Decoração: o essencial, sem exagero</h2>

          <p>
            Decoração é onde o orçamento de festa de aniversário mais escapa pelas mãos, porque todo item tem uma versão mais bonita e mais cara logo ao lado da versão simples. O essencial cabe em cinco itens.
          </p>
          <ul className="item-list">
            <li><strong>Balões</strong> — cor do tema ou da festa, soltos ou em arranjo simples</li>
            <li><strong>Faixa ou painel de "parabéns"</strong> — versão impressa simples resolve tão bem quanto a personalizada</li>
            <li><strong>Toalha temática</strong> — se a festa tiver tema, é o item que mais entrega identidade visual por menos dinheiro</li>
            <li><strong>Vela de aniversário</strong> — número ou vela comum, sempre compra reserva, porque alguém apaga antes da foto</li>
            <li><strong>Fita adesiva</strong> — pra prender balão e faixa, item banal que todo mundo esquece até precisar</li>
          </ul>
          <p>
            Lembrancinha entra depois, e só se o orçamento permitir. Sacolinha com docinho ou um brinquedo pequeno resolve pra festa infantil. Em festa adulta, pode pular sem culpa — ninguém volta pra casa reclamando que faltou lembrancinha.
          </p>

          {/* LISTA PRA COPIAR */}
          <h2 id="lista-pra-copiar">Lista de aniversário pra copiar e colar</h2>
          <p>
            Clica em "Copiar lista" e cola no WhatsApp ou no bloco de notas. Risca o que já tem em casa — balão de festa anterior, vela sobrando, saco de lixo que já tinha.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista de aniversário</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Comida</h4>
                <ul>
                  <li>Bolo</li><li>Salgados</li><li>Docinhos</li>
                  <li>Pão de queijo</li><li>Frutas picadas</li><li>Pipoca</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Bebidas</h4>
                <ul>
                  <li>Refrigerante</li><li>Suco</li><li>Água</li>
                  <li>Gelo</li><li>Cerveja ou espumante</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Descartáveis</h4>
                <ul>
                  <li>Pratos</li><li>Copos</li><li>Guardanapos</li>
                  <li>Toalha de mesa</li><li>Talheres</li><li>Sacos de lixo</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Decoração</h4>
                <ul>
                  <li>Balões</li><li>Faixa de parabéns</li>
                  <li>Toalha temática</li><li>Vela</li><li>Fita adesiva</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Lembrancinhas</h4>
                <ul>
                  <li>Sacolinha</li><li>Docinho ou brinquedo</li>
                  <li>Cartão de agradecimento</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ECONOMIZAR */}
          <h2 id="economizar">Como economizar sem a festa ficar pobre</h2>

          <p>
            O jeito mais rápido de cortar custo numa festa de aniversário é trocar serviço por trabalho caseiro — bolo caseiro em vez de encomendado, salgado assado em vez de frito e comprado pronto. A diferença de sabor é pequena; a diferença no bolso, não.
          </p>
          <p>
            Comprar em quantidade maior também ajuda: refrigerante de 2 litros sai mais barato por litro do que lata, e pacote grande de descartável custa menos por unidade do que pacote pequeno. O detalhe é calcular certo antes — sobra de descartável não é problema, sobra de salgado perecível é desperdício.
          </p>
          <p>
            A <a href="/pt/blog/como-economizar-no-mercado">lista de compras organizada por categoria</a> evita duas viagens ao mercado — uma pra esquecer o gelo, outra pra voltar correndo no dia da festa porque faltou guardanapo. Separar comida, bebida, descartáveis e decoração antes de sair já corta metade do risco de esquecer alguma coisa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre lista de aniversário</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quantos salgados por pessoa numa festa de aniversário?</p>
              <p className="faq-a">
                Conta de 8 a 10 salgados por adulto em festa de 2-3 horas, e 4 a 6 por criança. Com bolo e docinho também, fica no limite inferior. Festa mais curta, de 1-2 horas, cai pra 5-6 por adulto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto de refrigerante comprar por convidado?</p>
              <p className="faq-a">
                Em média, 500-600ml por pessoa numa festa de 2-3 horas, somando todas as bebidas não alcoólicas. Isso dá cerca de 1 litro de refrigerante pra cada 2 convidados, mais suco e água. Em dia de calor, soma 20% a mais.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que não pode faltar numa festa de aniversário infantil?</p>
              <p className="faq-a">
                Bolo, vela, bebida, salgado ou lanche e um jeito de gastar energia da criançada — balão solto ou brincadeira simples já resolve. Decoração cara e monitor contratado são opcionais, não obrigatórios.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Dá pra fazer uma festa de aniversário em casa gastando pouco?</p>
              <p className="faq-a">
                Dá, e a conta cai bastante quando comida e bebida saem de casa em vez de serviço de buffet. Bolo caseiro, salgado assado e balão em vez de painel personalizado cortam o custo sem cortar a festa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Precisa de lembrancinha em festa de aniversário adulto?</p>
              <p className="faq-a">
                Não precisa. Lembrancinha é tradição mais forte em festa infantil. Em festa de adulto, é só um detalhe — se sair do orçamento, corta sem culpa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantos dias antes devo comprar os itens da festa?</p>
              <p className="faq-a">
                Decoração, descartáveis e lembrancinha dão pra comprar com 1-2 semanas de antecedência. Bolo, salgado e perecíveis ficam pra 1-2 dias antes. Bebida e gelo, no dia anterior ou no próprio dia.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que cortar primeiro se o orçamento apertar?</p>
              <p className="faq-a">
                Decoração temática e lembrancinha elaborada saem primeiro. Comida e bebida ficam, porque é o que todo mundo nota quando falta. Um balão colorido e um bolo bom seguram a festa sem painel de parabéns.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador do Mise. Faz mercado toda semana e ainda esquece ingrediente às vezes.
                Construiu o app pra resolver a dor que ele mesmo tinha na cozinha.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">Lista de aniversário feita. Nada esquecido no mercado.</p>
            <p className="blog-cta-desc">
              Com o Mise, você monta a <a href="/pt/funcionalidades/lista-de-compras">lista de compras</a> por categoria e confere o que já tem na{' '}
              <a href="/pt/funcionalidades/despensa">despensa</a> antes de sair de casa pra festa.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Comece grátis
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Voltar ao topo">Voltar ao topo ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Feito com cuidado no Brasil.</p>
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="/pt/blog" className="footer-link">Blog</a>
            <a href="/pt/funcionalidades" className="footer-link">Funcionalidades</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
