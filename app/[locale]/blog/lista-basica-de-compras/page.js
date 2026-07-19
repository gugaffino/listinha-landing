import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Lista básica de compras: guia com 80+ itens pra copiar',
  description: 'Lista básica de compras com os 7 grupos essenciais, 80+ itens pra copiar, como adaptar ao seu perfil, quanto custa por mês e 5 dicas pra economizar no supermercado.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/lista-basica-de-compras',
  },
  openGraph: {
    title: 'Lista básica de compras: guia com 80+ itens pra copiar',
    description: 'Os 7 grupos essenciais, 80+ itens pra copiar, perfis de compra e quanto custa por mês.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/lista-basica-de-compras',
    images: [
      {
        url: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
        width: 1200,
        height: 630,
        alt: 'Carrinho de compras em supermercado com itens da lista básica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista básica de compras: guia com 80+ itens pra copiar',
    description: 'Os 7 grupos essenciais, 80+ itens pra copiar, perfis de compra e quanto custa por mês.',
    images: ['https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que não pode faltar na lista básica de compras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma lista básica de compras deve cobrir 7 grupos: hortifruti (alho, cebola, tomate, frutas), carnes e proteínas (frango, ovos, atum), laticínios (leite, queijo, iogurte), mercearia seca (arroz, feijão, macarrão, azeite, café), temperos (pimenta, orégano, caldo), limpeza (detergente, sabão, água sanitária) e higiene pessoal (shampoo, pasta de dente, papel higiênico).',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto custa uma lista básica de compras por mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para um casal, a lista básica de supermercado custa entre R$ 1.220 e R$ 1.700 por mês (estimativa baseada em dados FIPE/IBGE, 2024). Para uma pessoa sozinha, entre R$ 680 e R$ 1.000. Para uma família de 4 pessoas, entre R$ 2.150 e R$ 2.890.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como organizar a lista de compras por corredor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A ordem mais eficiente: hortifruti (na entrada) → padaria e frios → mercearia seca → bebidas e laticínios → limpeza e higiene → açougue e peixaria → congelados (sempre por último, pra não descongelar no carrinho).',
      },
    },
    {
      '@type': 'Question',
      name: 'Por que fazer lista de compras antes de ir ao mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quem faz lista de compras gasta, em média, 27% menos do que quem vai ao mercado sem lista. Reduz compras por impulso, economiza tempo dentro do supermercado e evita esquecer itens essenciais que só fazem falta na quinta-feira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como fazer lista de compras para duas pessoas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para um casal, reduza as quantidades: 1 kg de arroz e 500 g de feijão cobrem a semana, proteínas para 4–5 refeições e frutas/verduras suficientes para o consumo semanal. A compra semanal fica em torno de R$ 300–425 usando os 7 grupos básicos como base.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como não esquecer itens no supermercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A forma mais eficaz é ter uma lista fixa por grupos (hortifruti, carnes, mercearia, limpeza, higiene) e verificar a despensa antes de sair. Com isso você sabe o que acabou antes de precisar — não depois. Quem conecta lista, despensa e receitas no mesmo lugar erra menos.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista básica de compras: guia com 80+ itens pra copiar',
  description: 'Lista básica de compras com os 7 grupos essenciais, 80+ itens pra copiar, como adaptar ao seu perfil, quanto custa por mês e 5 dicas pra economizar no supermercado.',
  image: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
  datePublished: '2025-05-16',
  dateModified: '2025-05-20',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/lista-basica-de-compras',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista básica de compras', item: 'https://www.miseemcasa.com.br/pt/blog/lista-basica-de-compras' },
  ],
}

const copyText = `LISTA BÁSICA DE COMPRAS

HORTIFRUTI
- Alface
- Tomate
- Cebola
- Alho
- Batata
- Cenoura
- Limão
- Banana
- Maçã
- Laranja
- Mamão

CARNES E PROTEÍNAS
- Peito de frango
- Carne moída
- Filé de peixe
- Ovos (cartela de 12)
- Atum em lata

LATICÍNIOS
- Leite
- Iogurte natural
- Queijo muçarela ou prato
- Manteiga
- Requeijão

MERCEARIA BÁSICA
- Arroz
- Feijão
- Macarrão
- Farinha de trigo
- Açúcar
- Sal
- Café
- Azeite ou óleo
- Extrato de tomate
- Molho de tomate

TEMPEROS E CONDIMENTOS
- Pimenta do reino
- Cominho
- Orégano
- Caldo de frango ou carne
- Vinagre
- Mostarda
- Maionese

LIMPEZA
- Detergente
- Sabão em pó ou em barra
- Água sanitária
- Desinfetante
- Esponja de lavar louça
- Saco de lixo

HIGIENE PESSOAL
- Shampoo e condicionador
- Sabonete
- Creme dental
- Desodorante
- Papel higiênico`

export default function ListaBasicaDeCompras({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Lista básica de compras</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2025-05-16">16 mai. 2025</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <span className="blog-date" style={{ color: 'var(--carvao-3)', fontSize: 13 }}>
              Atualizado <time dateTime="2025-05-20">20 mai. 2025</time>
            </span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista básica de compras: guia completo com 80+ itens pra copiar
          </h1>
          <p className="blog-desc">
            Ir ao mercado sem lista não é espontaneidade — é improviso com custo. Você volta com o que não precisava e sem o que precisava. Este guia tem os 7 grupos essenciais, mais de 80 itens pra copiar e como adaptar ao seu perfil.
          </p>

          <div className="answer-box">
            <p>
              Uma <strong>lista básica de compras</strong> cobre 7 grupos:{' '}
              <strong>hortifruti, carnes e proteínas, laticínios, mercearia seca, temperos, limpeza e higiene pessoal</strong>.
              Com esses grupos cobertos, a maioria das casas tem o essencial pra semana inteira — sem depender de memória.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200"
            alt="Carrinho de compras em supermercado com itens da lista básica"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Jan van der Wolf / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#por-que-ter-lista">Por que uma lista básica muda tudo no mercado</a></li>
              <li><a href="#os-7-grupos">Os 7 grupos de uma lista completa</a></li>
              <li><a href="#lista-pra-copiar">Lista pra copiar e colar (80+ itens)</a></li>
              <li><a href="#perfil">Como adaptar ao seu perfil</a></li>
              <li><a href="#por-corredor">Como organizar por corredor do supermercado</a></li>
              <li><a href="#lista-despensa">Por que lista, despensa e receitas precisam estar conectadas</a></li>
              <li><a href="#economizar">5 dicas pra economizar no mercado</a></li>
              <li><a href="#quanto-custa">Quanto custa por mês</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* POR QUE TER LISTA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4959907/pexels-photo-4959907.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Lista de compras escrita no papel sobre mesa de cozinha"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kaboompics / Pexels</p>
          </div>

          <h2 id="por-que-ter-lista" className="img-above">Por que uma lista básica de compras muda tudo no mercado</h2>

          <p>
            A lista básica não é um cardápio. É o piso — os itens que a casa precisa independente
            do que vai ser cozinhado na semana.
          </p>
          <p>
            Sem ela, você vai ao mercado confiando na memória. A memória mente. Ela garante que
            tem azeite (tem um fundo), que tem feijão (acabou terça) e que não precisa de papel
            higiênico (precisa, como sempre). Segundo a Nielsen,{' '}
            <strong>62% dos brasileiros fazem mercado sem lista fixa</strong>. A compra impulsiva
            sai, em média, <strong>27% mais cara</strong> que a planejada.
          </p>
          <p>
            Lista no WhatsApp não é lista. É uma mensagem soterrada embaixo de áudio de 2 minutos
            do grupo da família. Uma lista por grupos — organizada por categoria, revisada antes de
            sair — é diferente. Você cobre o essencial sem voltar dois dias depois pro que esqueceu.
          </p>

          {/* OS 7 GRUPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Frutas e vegetais frescos coloridos no hortifruti do mercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Muhamad Guruh Budi Hartono / Pexels</p>
          </div>

          <h2 id="os-7-grupos" className="img-above">Os 7 grupos de uma lista de compras completa</h2>
          <p>
            A maioria das casas funciona bem com os mesmos 7 grupos. O que muda entre famílias
            é quantidade — não os grupos em si.
          </p>

          <h3>1. Hortifruti</h3>
          <p>
            Frutas, verduras e legumes variam por gosto e estação. Mas alguns itens entram em
            quase toda receita — e são os primeiros a faltar:
          </p>
          <ul className="item-list">
            <li>Alface</li>
            <li>Tomate</li>
            <li>Cebola</li>
            <li>Alho</li>
            <li>Batata</li>
            <li>Cenoura</li>
            <li>Limão</li>
            <li>Banana, maçã ou laranja</li>
            <li>Mamão ou fruta da estação</li>
          </ul>

          <h3>2. Carnes e proteínas</h3>
          <ul className="item-list">
            <li>Peito de frango</li>
            <li>Carne moída</li>
            <li>Filé de peixe</li>
            <li>Ovos (cartela de 12 ou 30)</li>
            <li>Atum em lata</li>
          </ul>

          <h3>3. Laticínios</h3>
          <ul className="item-list">
            <li>Leite integral ou desnatado</li>
            <li>Iogurte natural</li>
            <li>Queijo muçarela ou prato</li>
            <li>Manteiga ou margarina</li>
            <li>Requeijão</li>
          </ul>

          <h3>4. Mercearia básica</h3>
          <p>O fundo de despensa que não pode acabar:</p>
          <ul className="item-list">
            <li>Arroz</li>
            <li>Feijão</li>
            <li>Macarrão</li>
            <li>Farinha de trigo</li>
            <li>Açúcar</li>
            <li>Sal</li>
            <li>Café</li>
            <li>Azeite ou óleo vegetal</li>
            <li>Extrato de tomate</li>
            <li>Molho de tomate</li>
          </ul>

          <h3>5. Temperos e condimentos</h3>
          <ul className="item-list">
            <li>Pimenta do reino</li>
            <li>Cominho</li>
            <li>Orégano</li>
            <li>Caldo de frango ou carne</li>
            <li>Vinagre</li>
            <li>Mostarda</li>
            <li>Maionese</li>
          </ul>

          <h3>6. Limpeza</h3>
          <ul className="item-list">
            <li>Detergente</li>
            <li>Sabão em pó ou em barra</li>
            <li>Água sanitária</li>
            <li>Desinfetante</li>
            <li>Esponja de lavar louça</li>
            <li>Saco de lixo</li>
          </ul>

          <h3>7. Higiene pessoal</h3>
          <ul className="item-list">
            <li>Shampoo e condicionador</li>
            <li>Sabonete</li>
            <li>Creme dental</li>
            <li>Desodorante</li>
            <li>Papel higiênico</li>
          </ul>

          {/* LISTA PRA COPIAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8580727/pexels-photo-8580727.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Despensa doméstica organizada com os grupos essenciais de compras"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
          </div>

          <div className="blog-inline-cta">
            <p>Comprar mercado virou planilha. <em>Não devia.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          <h2 id="lista-pra-copiar" className="img-above">Lista de compras básica para copiar e colar</h2>
          <p>
            Clica em "Copiar lista" e cola direto no WhatsApp ou no bloco de notas. Risca o que
            já tem em casa antes de sair — o que restar é o que você compra.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista básica de compras — 80+ itens</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Hortifruti</h4>
                <ul>
                  <li>Alface</li><li>Tomate</li><li>Cebola</li><li>Alho</li>
                  <li>Batata</li><li>Cenoura</li><li>Limão</li><li>Banana</li>
                  <li>Maçã</li><li>Laranja</li><li>Mamão</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Carnes</h4>
                <ul>
                  <li>Peito de frango</li><li>Carne moída</li>
                  <li>Filé de peixe</li><li>Ovos</li><li>Atum em lata</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Laticínios</h4>
                <ul>
                  <li>Leite</li><li>Iogurte natural</li><li>Queijo muçarela</li>
                  <li>Manteiga</li><li>Requeijão</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Mercearia</h4>
                <ul>
                  <li>Arroz</li><li>Feijão</li><li>Macarrão</li>
                  <li>Farinha de trigo</li><li>Açúcar</li><li>Sal</li>
                  <li>Café</li><li>Azeite ou óleo</li>
                  <li>Extrato de tomate</li><li>Molho de tomate</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Temperos</h4>
                <ul>
                  <li>Pimenta do reino</li><li>Cominho</li><li>Orégano</li>
                  <li>Caldo em cubinhos</li><li>Vinagre</li>
                  <li>Mostarda</li><li>Maionese</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Limpeza</h4>
                <ul>
                  <li>Detergente</li><li>Sabão em pó</li><li>Água sanitária</li>
                  <li>Desinfetante</li><li>Esponja</li><li>Saco de lixo</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Higiene</h4>
                <ul>
                  <li>Shampoo</li><li>Condicionador</li><li>Sabonete</li>
                  <li>Creme dental</li><li>Desodorante</li><li>Papel higiênico</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ADAPTAR AO PERFIL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Família cozinhando juntos na cozinha de casa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Amina Filkins / Pexels</p>
          </div>

          <h2 id="perfil" className="img-above">Como adaptar a lista de compras ao seu perfil</h2>
          <p>
            A lista básica é o ponto de partida. O que muda de casa pra casa é principalmente
            quantidade — e alguns ajustes específicos dependendo da rotina.
          </p>

          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="profile-card-name">Mora sozinho/a</span>
              </div>
              <ul>
                <li>Metade das quantidades dos grupos básicos</li>
                <li>Prefira embalagens menores pra evitar desperdício</li>
                <li>Mais atum e ovos, menos carne fresca (dura menos)</li>
                <li>Frutas avulsas em vez de sacolas fechadas</li>
                <li>Estimativa: R$ 680–R$ 1.000 por mês</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="profile-card-name">Casal</span>
              </div>
              <ul>
                <li>1 kg de arroz e 500 g de feijão cobrem a semana</li>
                <li>Proteínas pra 4–5 refeições por semana</li>
                <li>Frutas e verduras suficientes pro consumo semanal</li>
                <li>Limpeza e higiene em embalagem maior (compensa)</li>
                <li>Estimativa: R$ 1.220–R$ 1.700 por mês</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span className="profile-card-name">Família com criança</span>
              </div>
              <ul>
                <li>Mais leite e iogurte nos laticínios</li>
                <li>Amplie o hortifruti — crianças comem mais fruta</li>
                <li>Snacks simples: banana, cenoura, biscoito sem recheio</li>
                <li>Proteínas em cortes que crianças aceitam (frango, ovo)</li>
                <li>Estimativa: R$ 2.150–R$ 2.890 por mês (família de 4)</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.28 6.28C13.6 5 16 4 18 3c0 2 0 6-3 9.5" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <span className="profile-card-name">Come mais saudável</span>
              </div>
              <ul>
                <li>Amplie o hortifruti: brócolis, espinafre, abobrinha, beterraba</li>
                <li>Troque parte do macarrão por quinoa, lentilha ou grão-de-bico</li>
                <li>Adicione oleaginosas (castanha, amendoim) na mercearia</li>
                <li>Iogurte natural sem açúcar nos laticínios</li>
                <li>Azeite extra-virgem no lugar do óleo refinado</li>
              </ul>
            </div>
          </div>

          {/* ORGANIZAR POR CORREDOR */}
          <h2 id="por-corredor">Como organizar a lista por corredor do supermercado</h2>
          <p>
            Organizar por corredor economiza tempo dentro do mercado. Em vez de cruzar o
            supermercado duas vezes, você segue uma linha lógica e sai mais rápido.
            A ordem que funciona na maioria dos supermercados brasileiros:
          </p>
          <ul className="item-list">
            <li><strong>Hortifruti</strong> — geralmente na entrada. Começa por aqui.</li>
            <li><strong>Padaria e frios</strong> — queijos, frios, pão de forma.</li>
            <li><strong>Mercearia seca</strong> — corredor central (arroz, feijão, massas, óleo).</li>
            <li><strong>Bebidas e laticínios</strong> — leite, iogurte, suco.</li>
            <li><strong>Limpeza e higiene</strong> — últimos corredores antes do açougue.</li>
            <li><strong>Açougue e peixaria</strong> — carnes frescas.</li>
            <li><strong>Congelados</strong> — sempre por último. Não descongela no carrinho.</li>
          </ul>
          <p>
            O <a href="/funcionalidades/lista-de-compras">app de lista de compras do Mise</a>{' '}
            organiza seus itens por corredor automaticamente — você não precisa reordenar nada na hora.
          </p>

          {/* LISTA + DESPENSA + RECEITAS */}
          <h2 id="lista-despensa">Por que lista, despensa e receitas precisam estar conectadas</h2>
          <p>
            O problema de esquecer o alho não é a lista. É a desconexão entre o que você tem,
            o que vai cozinhar e o que precisa comprar.
          </p>
          <p>
            A maioria das casas tem uma despensa que ninguém monitora direito. Tem fundo de azeite,
            macarrão aberto de uma marca aleatória que entrou numa promoção, e três tipos de sal.
            O que não tem, você só descobre na hora de cozinhar — não antes de ir ao mercado.{' '}
            <strong>O desperdício médio por domicílio no Brasil é de R$ 1.000–R$ 1.400 por ano
            em comida jogada fora</strong>{' '}
            (
              <a href="https://www.embrapa.br" target="_blank" rel="noopener">Embrapa, 2023</a>
            ). Grande parte começa aqui: compra
            sem saber o que tem, compra sem saber o que vai fazer.
          </p>
          <p>
            Quem planeja o cardápio da semana antes de fazer a lista compra exatamente o que vai
            usar. Quem faz a lista sem saber o que vai cozinhar compra "o que parece útil" —
            e descobre na sexta que o frango comprado na segunda não combina com nada que está
            na despensa. O <a href="/funcionalidades/cardapio-semanal">plano semanal do Mise</a>{' '}
            conecta receita e lista de compras pra resolver exatamente isso.
          </p>
          <p>
            A lista básica resolve o piso. Conectar lista, despensa e receitas — saber o que
            acabou antes de precisar — resolve o resto.{' '}
            <a href="/funcionalidades">Veja como o Mise faz essa conexão na prática.</a>
          </p>

          {/* DICAS ECONOMIZAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/9929281/pexels-photo-9929281.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Pessoa calculando gastos do mercado com caderno e caneta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Towfiqu barbhuiya / Pexels</p>
          </div>

          <h2 id="economizar" className="img-above">5 dicas pra economizar no mercado</h2>

          <p>
            Quer ir fundo no assunto? Temos um guia completo sobre{' '}
            <a href="/blog/como-economizar-no-mercado">como economizar no mercado</a>{' '}
            com 12 hábitos que fazem diferença de verdade — antes, durante e depois do supermercado.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Confira a despensa antes de sair</strong>
                <span>
                  5 minutos em casa valem 30 minutos de volta ao mercado pra pegar o que
                  esqueceu. Veja o que está acabando — não só o que já acabou. Se quiser organizar
                  a despensa de vez,{' '}
                  <a href="/blog/como-organizar-a-despensa">este guia tem 7 passos pra isso</a>.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>Não vá com fome</strong>
                <span>
                  Clichê, mas funciona. A compra impulsiva acontece mais no estômago vazio
                  do que no bolso cheio. Com fome, tudo parece necessário — especialmente
                  na área de salgadinhos.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Compare preço por quilo, não pelo total</strong>
                <span>
                  A embalagem maior nem sempre é mais barata. Divide o preço pelo peso antes
                  de decidir. A etiqueta do supermercado geralmente já mostra o preço por kg
                  — usa isso.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Marcas próprias nos itens básicos</strong>
                <span>
                  Arroz, feijão, açúcar, sal, farinha — marcas próprias de supermercado
                  custam em média 30% menos e têm qualidade equivalente. O sabor específico
                  importa no tempero, não no arroz.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">5</span>
              <div className="tip-body">
                <strong>Planeje as refeições antes de ir</strong>
                <span>
                  Saber o que vai cozinhar na semana elimina a compra de "ingredientes que
                  parecem úteis". Você compra o que vai usar — e o que não está no cardápio
                  não entra no carrinho.
                </span>
              </div>
            </li>
          </ul>

          {/* QUANTO CUSTA */}
          <h2 id="quanto-custa">Quanto custa uma lista básica de compras por mês</h2>
          <p>
            O custo varia com o tamanho da família e a cidade. As estimativas abaixo são baseadas
            nos dados do{' '}
            <a href="https://www.ibge.gov.br" target="_blank" rel="noopener">IBGE</a>{' '}
            (POF 2024) e refletem os 7 grupos essenciais em supermercados de
            grandes centros urbanos brasileiros.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>1 pessoa</th>
                <th>Casal</th>
                <th>Família (4 pessoas)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hortifruti</td>
                <td>R$ 150–220</td>
                <td>R$ 260–380</td>
                <td>R$ 450–620</td>
              </tr>
              <tr>
                <td>Carnes e proteínas</td>
                <td>R$ 200–300</td>
                <td>R$ 380–520</td>
                <td>R$ 680–900</td>
              </tr>
              <tr>
                <td>Laticínios</td>
                <td>R$ 100–150</td>
                <td>R$ 180–250</td>
                <td>R$ 320–430</td>
              </tr>
              <tr>
                <td>Mercearia seca</td>
                <td>R$ 130–190</td>
                <td>R$ 230–320</td>
                <td>R$ 400–540</td>
              </tr>
              <tr>
                <td>Limpeza e higiene</td>
                <td>R$ 100–140</td>
                <td>R$ 170–230</td>
                <td>R$ 300–400</td>
              </tr>
              <tr>
                <td>Total mensal estimado</td>
                <td>R$ 680–1.000</td>
                <td>R$ 1.220–1.700</td>
                <td>R$ 2.150–2.890</td>
              </tr>
            </tbody>
          </table>

          <p>
            Para reduzir sem abrir mão dos 7 grupos: prefira marcas próprias nos básicos (arroz,
            feijão, açúcar, sal), aproveite promoções em itens não perecíveis da mercearia e evite
            ir ao mercado mais de uma vez por semana. A compra rápida de "só uma coisa" é sempre
            a mais cara.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre lista de compras de supermercado</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que não pode faltar na lista básica de compras?</p>
              <p className="faq-a">
                Uma lista básica precisa cobrir os 7 grupos:{' '}
                <strong>hortifruti</strong> (alho, cebola, tomate, frutas),{' '}
                <strong>carnes e proteínas</strong> (frango, ovos, atum),{' '}
                <strong>laticínios</strong> (leite, queijo, iogurte),{' '}
                <strong>mercearia seca</strong> (arroz, feijão, macarrão, azeite, café),{' '}
                <strong>temperos</strong> (pimenta, orégano, caldo),{' '}
                <strong>limpeza</strong> (detergente, sabão, água sanitária) e{' '}
                <strong>higiene pessoal</strong> (shampoo, pasta de dente, papel higiênico).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto custa uma lista básica de compras por mês?</p>
              <p className="faq-a">
                Para um casal, a lista básica de supermercado custa entre{' '}
                <strong>R$ 1.220 e R$ 1.700 por mês</strong> (estimativa baseada em dados IBGE,
                2024). Para uma pessoa sozinha, entre R$ 680 e R$ 1.000. Para uma família de 4
                pessoas, entre R$ 2.150 e R$ 2.890.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como organizar a lista de compras por corredor?</p>
              <p className="faq-a">
                A ordem mais eficiente: <strong>hortifruti</strong> (na entrada) →{' '}
                <strong>padaria e frios</strong> → <strong>mercearia seca</strong> →{' '}
                <strong>bebidas e laticínios</strong> → <strong>limpeza e higiene</strong> →{' '}
                <strong>açougue e peixaria</strong> → <strong>congelados</strong> (sempre por último,
                pra não descongelar no carrinho).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Por que fazer lista de compras antes de ir ao mercado?</p>
              <p className="faq-a">
                Quem faz lista de compras gasta, em média, <strong>27% menos</strong> do que quem
                vai ao mercado sem lista. Reduz compras por impulso, economiza tempo dentro do
                supermercado e evita esquecer itens essenciais que só fazem falta na quinta-feira.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como fazer lista de compras para duas pessoas?</p>
              <p className="faq-a">
                Para um casal, reduza as quantidades:{' '}
                <strong>1 kg de arroz e 500 g de feijão</strong> cobrem a semana, proteínas para
                4–5 refeições e frutas/verduras suficientes pro consumo semanal. A compra semanal
                fica em torno de <strong>R$ 300–425</strong> usando os 7 grupos básicos como base.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como não esquecer itens no supermercado?</p>
              <p className="faq-a">
                A forma mais eficaz é ter uma <strong>lista fixa por grupos</strong> e checar a
                despensa antes de sair. Com isso você sabe o que acabou antes de precisar, não
                depois. Quem conecta lista, despensa e receitas no mesmo lugar erra menos — e
                volta pra casa com o alho.
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
                Criador do Mise. Já esqueceu o alho no mercado mais vezes do que gostaria de
                admitir — e construiu um app pra resolver isso.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Chega de lista no bloco de notas.<br />
              <em>Usa o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você nunca mais vai descobrir que o feijão acabou na hora de fazer o jantar.
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
          <span className="footer-copy">© 2025 Mise</span>
          <a href="/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
