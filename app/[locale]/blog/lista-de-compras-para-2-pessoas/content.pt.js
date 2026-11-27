import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Lista de compras para 2 pessoas: guia de quantidade certa',
  description: 'Lista de compras para 2 pessoas com quantidade certa por categoria, lista pronta pra copiar, quanto custa por mês e como não sobrar nem faltar comida.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-2-pessoas',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-2-pessoas',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
    },
  },
  openGraph: {
    title: 'Lista de compras para 2 pessoas: guia de quantidade certa',
    description: 'Lista de compras para 2 pessoas com quantidade certa por categoria, lista pronta pra copiar, quanto custa por mês e como não sobrar nem faltar comida.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
    images: [
      {
        url: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mulher escrevendo lista de compras em caderno sobre bancada da cozinha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras para 2 pessoas: guia de quantidade certa',
    description: 'Lista de compras para 2 pessoas com quantidade certa por categoria, lista pronta pra copiar, quanto custa por mês e como não sobrar nem faltar comida.',
    images: ['https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto custa a lista de compras para 2 pessoas por mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para um casal, a compra mensal de supermercado fica entre R$ 1.200 e R$ 1.800 (estimativa FIPE/IBGE, 2024), cobrindo hortifruti, carnes, laticínios, mercearia e limpeza. O valor varia com a cidade e com quanto vocês comem fora de casa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantos quilos de arroz e feijão pra 2 pessoas por semana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1 kg de arroz e 500 g de feijão cobrem a semana de um casal que come essa combinação quase todo dia. Se vocês comem fora com frequência ou trocam o arroz por outro carboidrato em algumas refeições, dá pra esticar pra 10-12 dias.',
      },
    },
    {
      '@type': 'Question',
      name: 'É melhor fazer compra semanal ou mensal para 2 pessoas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O ideal pra 2 pessoas é misto: mercearia seca e limpeza numa compra mensal (não estraga, ocupa espaço fixo na despensa), e hortifruti, carnes e laticínios numa compra semanal (perecível, precisa estar fresco). Comprar tudo mensal pra 2 pessoas costuma gerar desperdício de perecível.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vale a pena comprar embalagem família pra 2 pessoas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Só pra itens não perecíveis que vocês realmente consomem — arroz, feijão, papel higiênico, produtos de limpeza. Pra carne, pão e laticínios, embalagem grande costuma significar metade no freezer ou no lixo antes de acabar. Compare o preço por quilo, não o preço total da embalagem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como evitar desperdício de comida comprando pra 2 pessoas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compre porções pensando em quantas refeições você realmente vai cozinhar naquela semana, não no tamanho da embalagem no mercado. Congele carne em porções individuais assim que chegar em casa e confira a despensa antes de sair — a maior causa de desperdício doméstico é comprar sem saber o que já tem.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que muda na lista quando aparece visita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some 1 porção extra de proteína e de acompanhamento por pessoa que vai ficar pra refeição, mas não dobre a lista inteira — pão, café e itens de mercearia geralmente já têm sobra suficiente pra casa de 2 pessoas. Ajuste hortifruti e proteína, mantenha o resto como está.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo dura a compra de mercado pra um casal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hortifruti e pão duram de 3 a 7 dias. Carnes frescas, de 2 a 3 dias na geladeira (ou meses no freezer, já porcionadas). Mercearia seca, limpeza e higiene duram semanas — às vezes um mês inteiro, dependendo do item.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras para 2 pessoas: guia de quantidade certa',
  description: 'Lista de compras para 2 pessoas com quantidade certa por categoria, lista pronta pra copiar, quanto custa por mês e como não sobrar nem faltar comida.',
  image: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-17',
  dateModified: '2026-08-17',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras para 2 pessoas', item: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas' },
  ],
}

const copyText = `LISTA DE COMPRAS PRA 2 PESSOAS (SEMANA)

HORTIFRUTI
- Cebola, alho, tomate
- Batata ou mandioca
- Cenoura
- Folhas verdes (alface, couve ou espinafre)
- Frutas variadas (1,5-2 kg)

PROTEÍNAS
- Frango (800 g-1 kg)
- Carne moída ou bovina (500 g)
- Ovos (1 dúzia)
- Atum ou sardinha em lata (2 unidades)

LATICÍNIOS
- Leite (2 litros)
- Iogurte natural
- Queijo (200 g)
- Manteiga ou margarina

MERCEARIA (compra mensal)
- Arroz (4 kg)
- Feijão (2 kg)
- Macarrão (2 pacotes)
- Óleo ou azeite
- Café
- Açúcar e sal

LIMPEZA E HIGIENE (compra mensal)
- Detergente e sabão em pó
- Papel higiênico
- Sabonete e creme dental
- Saco de lixo`

export default function ListaDeComprasPara2PessoasPt() {
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
            <li className="breadcrumb-current" aria-current="page">Lista de compras para 2 pessoas</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-17">17 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/pt/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista de compras para 2 pessoas: quanto comprar sem sobrar nem faltar
          </h1>
          <p className="blog-desc">
            Duas pessoas moram juntas, uma compra o dobro do arroz de sempre "porque agora é casa de dois" e três semanas depois tem um saco de 5kg parado no fundo do armário. A lista de compras pra 2 pessoas não é a lista de solteiro dobrada nem a lista de família cortada ao meio. Aqui vai a quantidade que realmente faz sentido.
          </p>

          <div className="answer-box">
            <p>
              Uma <strong>lista de compras para 2 pessoas</strong> gira em torno de 1 kg de arroz e 500 g de feijão por semana, 800 g-1 kg de proteína por semana e 1,5-2 kg de frutas e verduras variadas.
              A compra mensal de um casal fica entre <strong>R$ 1.200 e R$ 1.800</strong> somando hortifruti, carnes, laticínios, mercearia e limpeza.
              A regra que evita desperdício: perecível na compra semanal, mercearia e limpeza na compra mensal.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mulher escrevendo lista de compras em caderno sobre bancada da cozinha"
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
              <li><a href="#o-que-muda">O que muda numa lista pra 2 pessoas</a></li>
              <li><a href="#quantidade-certa">Quantidade certa por categoria</a></li>
              <li><a href="#lista-copiar">Lista pronta pra copiar</a></li>
              <li><a href="#semanal-mensal">Compra semanal, quinzenal ou mensal</a></li>
              <li><a href="#erros-comuns">Erros que fazem sobrar ou faltar comida</a></li>
              <li><a href="#quanto-custa">Quanto custa por mês</a></li>
              <li><a href="#visita">Quando aparece visita</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE MUDA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4124939/pexels-photo-4124939.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Carrinho de compras em corredor colorido de supermercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Christian Naccarato / Pexels</p>
          </div>

          <h2 id="o-que-muda" className="img-above">O que muda numa lista de compras pra 2 pessoas</h2>

          <p>
            O erro mais comum não é esquecer item. É calcular quantidade errado. Quem mora sozinho aprende a comprar pouco. Quem tem família grande aprende a comprar em volume. Casal fica no meio — e é justamente esse meio que ninguém explica direito.
          </p>
          <p>
            Não é a lista básica dividida por dois. Duas pessoas não comem metade do que uma família de quatro come — comem mais que a metade em quase tudo, porque item básico tem um piso de compra que não escala linear. Um pacote de café não fica "meio pacote" só porque são duas pessoas em vez de quatro.
          </p>
          <p>
            Também não é a lista de solteiro multiplicada por dois. Duas pessoas dividem panela, dividem tempero, dividem sobra. O que sobra de um jantar de terça vira almoço de quarta. Isso muda a lógica de quanto comprar de cada coisa — principalmente proteína e hortifruti, que são os itens que mais estragam parado.
          </p>
          <p>
            A referência certa é: quantidade pensada pra 2 pessoas específicas, não uma fração de outra lista. É isso que evita as duas dores de cabeça opostas — sobrar comida no fundo da geladeira ou ter que voltar ao mercado na quarta-feira porque faltou algo básico.
          </p>

          {/* QUANTIDADE CERTA */}
          <h2 id="quantidade-certa">Quantidade certa por categoria pra 2 pessoas</h2>

          <p>
            A tabela abaixo é uma referência semanal pra um casal com rotina comum — cozinha em casa na maioria dos dias, come fora ocasionalmente. Ajuste pra cima ou pra baixo conforme o quanto vocês realmente cozinham.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantidade semanal</th>
                <th>Dura até</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arroz</td>
                <td>1 kg</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Feijão</td>
                <td>500 g</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Macarrão</td>
                <td>500 g</td>
                <td>2 semanas</td>
              </tr>
              <tr>
                <td>Frango</td>
                <td>800 g-1 kg</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Carne moída ou bovina</td>
                <td>500 g</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Ovos</td>
                <td>1 dúzia</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Leite</td>
                <td>2 litros</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Frutas variadas</td>
                <td>1,5-2 kg</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Verduras e legumes</td>
                <td>1-1,5 kg</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Pão</td>
                <td>1 pacote ou 300 g</td>
                <td>3-4 dias</td>
              </tr>
              <tr>
                <td>Café</td>
                <td>250 g</td>
                <td>2-3 semanas</td>
              </tr>
              <tr>
                <td>Papel higiênico</td>
                <td>1 pacote (4-8 rolos)</td>
                <td>3-4 semanas</td>
              </tr>
            </tbody>
          </table>

          <p>
            Repare que arroz e feijão são semanais, mas papel higiênico e café esticam pra semanas. É por isso que a compra de casal não deveria ser um único evento mensal — separar o que é perecível do que não é economiza dinheiro e evita jogar comida fora.
          </p>

          {/* LISTA PRA COPIAR */}
          <div className="blog-inline-cta">
            <p>Sabe o que já tem em casa. <em>Sabe o que falta.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          <h2 id="lista-copiar">Lista de compras para 2 pessoas pronta pra copiar</h2>
          <p>
            Essa é a versão semanal, separada por categoria. Copia, cola no celular e risca o que já tem em casa antes de sair — o que sobrar é o que você compra de verdade.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista pra 2 pessoas — semana</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Hortifruti</h4>
                <ul>
                  <li>Cebola, alho, tomate</li>
                  <li>Batata ou mandioca</li>
                  <li>Cenoura</li>
                  <li>Folhas verdes</li>
                  <li>Frutas variadas</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Proteínas</h4>
                <ul>
                  <li>Frango</li>
                  <li>Carne moída ou bovina</li>
                  <li>Ovos</li>
                  <li>Atum ou sardinha</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Laticínios</h4>
                <ul>
                  <li>Leite</li>
                  <li>Iogurte natural</li>
                  <li>Queijo</li>
                  <li>Manteiga</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Mercearia (mensal)</h4>
                <ul>
                  <li>Arroz 4 kg</li>
                  <li>Feijão 2 kg</li>
                  <li>Macarrão</li>
                  <li>Óleo ou azeite</li>
                  <li>Café</li>
                  <li>Açúcar e sal</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Limpeza (mensal)</h4>
                <ul>
                  <li>Detergente</li>
                  <li>Sabão em pó</li>
                  <li>Papel higiênico</li>
                  <li>Saco de lixo</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Higiene (mensal)</h4>
                <ul>
                  <li>Sabonete</li>
                  <li>Creme dental</li>
                  <li>Shampoo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEMANAL, QUINZENAL, MENSAL */}
          <h2 id="semanal-mensal">Compra semanal, quinzenal ou mensal pra 2 pessoas</h2>
          <p>
            A pergunta certa não é "qual frequência é melhor" — é "qual frequência é melhor pra qual item". Misturar tudo numa compra mensal única é o erro mais comum de quem tenta economizar tempo e acaba desperdiçando comida.
          </p>
          <p>
            <strong>Mercearia e limpeza:</strong> compra mensal funciona bem. Arroz, feijão, óleo, produtos de limpeza e higiene não estragam rápido — comprar de uma vez economiza viagem ao mercado e geralmente sai mais barato por quilo.
          </p>
          <p>
            <strong>Hortifruti, carnes e laticínios:</strong> compra semanal é o que evita desperdício. Comprar hortifruti pro mês inteiro de uma vez garante que metade vira sopa de geladeira antes da segunda semana. Isso não é falta de disciplina — é biologia. Alface não dura um mês, não importa quão organizado você seja.
          </p>
          <p>
            Pra quem tem <a href="/pt/funcionalidades/despensa">despensa organizada</a>, o esquema misto funciona sozinho: você sabe o que já tem em estoque (mercearia) e o que precisa repor toda semana (perecível), sem precisar recalcular do zero toda vez que entra no mercado.
          </p>

          {/* ERROS COMUNS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4443442/pexels-photo-4443442.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Frutas e verduras frescas organizadas dentro da geladeira"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="erros-comuns" className="img-above">Erros que fazem sobrar ou faltar comida</h2>

          <p>
            <strong>Comprar pelo tamanho da embalagem, não pela quantidade que vai usar.</strong> A bandeja de frango com 1,5 kg parece vantajosa até você perceber que só ia usar 800 g na semana. Compare preço por quilo antes de decidir — embalagem grande só compensa se você realmente consome tudo antes de estragar.
          </p>
          <p>
            <strong>Não separar o que vai congelar.</strong> Carne comprada em quantidade maior precisa ser porcionada e congelada assim que chega em casa — não guardada inteira pra "decidir depois". Duas pessoas com um pacote de 1 kg de carne moída inteiro no freezer vão descongelar o pacote todo pra usar metade.
          </p>
          <p>
            <strong>Comprar de cabeça, sem checar a despensa.</strong> É a versão a dois do clássico "achava que tinha alho em casa". Dois adultos morando juntos significa duas memórias diferentes do que tem no armário — e as duas costumam estar erradas.
          </p>
          <p>
            <strong>Ignorar o que sobrou da última compra.</strong> Duas pessoas geram menos sobra que quatro, mas geram sobra. Antes de fazer lista nova, vale 2 minutos olhando o que ainda está bom pra usar essa semana.
          </p>

          {/* QUANTO CUSTA */}
          <h2 id="quanto-custa">Quanto custa a compra de um casal por mês</h2>
          <p>
            A estimativa pra um casal fica entre <strong>R$ 1.200 e R$ 1.800 por mês</strong>, considerando os grupos essenciais em supermercados de cidade grande (estimativa baseada em dados FIPE/IBGE, 2024). O valor varia com a cidade, com marca própria versus marca famosa, e com quantas refeições vocês fazem fora de casa.
          </p>
          <ul className="item-list">
            <li><strong>Hortifruti e proteínas</strong> — a maior fatia, entre R$ 550 e R$ 800</li>
            <li><strong>Laticínios e mercearia</strong> — entre R$ 350 e R$ 500</li>
            <li><strong>Limpeza e higiene</strong> — entre R$ 150 e R$ 250</li>
          </ul>
          <p>
            Pra reduzir sem cortar o que importa: marca própria em arroz, feijão e produtos de limpeza costuma custar até 30% menos com qualidade equivalente. Se quiser ir fundo no assunto, o guia sobre{' '}
            <a href="/pt/blog/como-economizar-no-mercado">como economizar no mercado</a> tem 12 hábitos que fazem diferença de verdade — não só pra 2 pessoas.
          </p>

          {/* VISITA */}
          <h2 id="visita">O que muda quando aparece visita</h2>
          <p>
            Visita ocasional não pede lista nova do zero. Pede ajuste pontual: some 1 porção de proteína e 1 porção de acompanhamento por pessoa extra na refeição em que ela vai estar presente. O resto da lista — mercearia, limpeza, café da manhã — já tem folga suficiente pra casa de 2 pessoas.
          </p>
          <p>
            O erro comum é dobrar a lista inteira "por precaução" e sobrar comida a semana toda depois que a visita vai embora. Ajusta o que muda, mantém o resto.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre lista de compras para 2 pessoas</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Quanto custa a lista de compras para 2 pessoas por mês?</p>
              <p className="faq-a">
                Entre <strong>R$ 1.200 e R$ 1.800</strong> por mês (estimativa FIPE/IBGE, 2024), cobrindo hortifruti, carnes, laticínios, mercearia e limpeza. O valor varia com a cidade e com quanto vocês comem fora de casa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantos quilos de arroz e feijão pra 2 pessoas por semana?</p>
              <p className="faq-a">
                1 kg de arroz e 500 g de feijão cobrem a semana de um casal que come essa combinação quase todo dia. Comendo fora com frequência, dá pra esticar pra 10-12 dias.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">É melhor fazer compra semanal ou mensal para 2 pessoas?</p>
              <p className="faq-a">
                O ideal é misto: mercearia seca e limpeza numa compra mensal, hortifruti, carnes e laticínios numa compra semanal. Comprar tudo mensal pra 2 pessoas costuma gerar desperdício de perecível.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Vale a pena comprar embalagem família pra 2 pessoas?</p>
              <p className="faq-a">
                Só pra não perecíveis que vocês realmente consomem — arroz, feijão, papel higiênico, limpeza. Pra carne, pão e laticínios, embalagem grande costuma virar sobra no freezer ou no lixo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como evitar desperdício de comida comprando pra 2 pessoas?</p>
              <p className="faq-a">
                Compre pensando em quantas refeições vai cozinhar naquela semana, não no tamanho da embalagem. Congele carne em porções assim que chegar em casa e confira a despensa antes de sair.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que muda na lista quando aparece visita?</p>
              <p className="faq-a">
                Some 1 porção extra de proteína e acompanhamento por pessoa que vai comer com vocês. Não dobre a lista inteira — mercearia e itens de café da manhã já têm folga suficiente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto tempo dura a compra de mercado pra um casal?</p>
              <p className="faq-a">
                Hortifruti e pão duram de 3 a 7 dias. Carnes frescas, 2 a 3 dias na geladeira (ou meses no freezer, porcionadas). Mercearia, limpeza e higiene duram semanas, às vezes um mês inteiro.
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
            <p className="blog-cta-title">Quantidade certa. Despensa em dia. Zero sobra no fundo da geladeira.</p>
            <p className="blog-cta-desc">
              Com o Mise, você monta a <a href="/pt/funcionalidades/lista-de-compras">lista de compras</a> sabendo o que já tem na{' '}
              <a href="/pt/funcionalidades/despensa">despensa</a> — sem comprar em dobro nem esquecer o básico.
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
