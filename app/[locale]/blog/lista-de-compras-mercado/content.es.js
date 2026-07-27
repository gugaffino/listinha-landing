import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Lista del súper por categorías: cómo organizarla y ahorrar',
  description: 'Lista del súper organizada por categoría — frutas y verduras, carnes, lácteos, despensa, limpieza — más lo que revisar antes de salir y cinco hábitos para no gastar de más.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-mercado',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-mercado',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-mercado',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-mercado',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-mercado',
    },
  },
  openGraph: {
    title: 'Lista del súper por categorías: cómo organizarla y ahorrar',
    description: 'Lista del súper organizada por categoría — frutas y verduras, carnes, lácteos, despensa, limpieza — más lo que revisar antes de salir y cinco hábitos para no gastar de más.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-mercado',
    images: [
      {
        url: 'https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Familia haciendo las compras en el supermercado con la lista en la mano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista del súper por categorías: cómo organizarla y ahorrar',
    description: 'Lista del súper organizada por categoría — frutas y verduras, carnes, lácteos, despensa, limpieza — más lo que revisar antes de salir y cinco hábitos para no gastar de más.',
    images: ['https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo organizo una lista del súper por categorías?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Divídela en grupos que coincidan con las secciones de la tienda: frutas y verduras, carnes y proteínas, lácteos, despensa y artículos de limpieza y aseo. Dentro de cada grupo, anota solo lo que realmente falta en casa. Revisa refrigerador, congelador y alacena antes de escribir nada — así evitas comprar un tercer frasco de algo que ya tienes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué no puede faltar en una lista del súper completa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los grupos esenciales son: frutas y verduras de la semana, carnes y proteínas (pollo, carne molida, huevo, pescado), lácteos (leche, queso, mantequilla, yogur), despensa (arroz, pasta, aceite, enlatados, especias) y limpieza e higiene (papel higiénico, detergente, jabón). Ajusta las cantidades al tamaño de la familia y a la frecuencia con la que sales a comprar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto se puede ahorrar realmente con la lista del súper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La lista en sí es lo que más ahorra: quien sale a comprar sin lista reporta bastantes más artículos no planeados por visita, y algunas estimaciones sitúan el ahorro de comprar con lista organizada entre 20% y 30% frente a comprar por impulso. Dentro de la tienda: no vayas con hambre, compara precio por kilo o por unidad (no por empaque), prefiere marca propia en básicos y solo aprovecha ofertas de cosas que ya ibas a comprar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el mejor orden para recorrer el súper con la lista?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sigue el recorrido de la tienda: frutas y verduras primero (suele estar cerca de la entrada), después carnes y fiambres, lácteos, despensa y limpieza al final. Los congelados van siempre al final del carrito, sin importar en qué parte de la tienda estén, para que no pierdan la cadena de frío mientras terminas el resto del recorrido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cada cuánto conviene hacer la lista del súper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del tamaño de la familia y del espacio para guardar las compras. A la mayoría le funciona mejor una compra semanal completa armada con lista, más una o dos paradas rápidas entre semana para frutas y verduras frescas que no aguantan tanto tiempo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Lista en papel o en el celular — cuál conviene más?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El papel funciona bien si siempre vas al mismo súper y ya te sabes el recorrido de memoria. El celular tiene la ventaja de que nunca se queda olvidado en casa, se puede compartir con otra persona en tiempo real y es fácil de actualizar durante la semana. Una app específica de lista de compras va un paso más allá: evita andar buscando en un grupo de WhatsApp qué fue lo que pidieron.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista del súper por categorías: cómo organizarla y ahorrar',
  description: 'Lista del súper organizada por categoría — frutas y verduras, carnes, lácteos, despensa, limpieza — más lo que revisar antes de salir y cinco hábitos para no gastar de más.',
  image: 'https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-26',
  dateModified: '2026-07-26',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-mercado',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista del súper por categorías', item: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-mercado' },
  ],
}

export default function ListaDelSuperEs() {
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

      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      <SiteNav />

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="Estás aquí">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Lista del súper por categorías</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-26">26 jul 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cómo armar la lista del súper para no salir con la mitad de lo que hacía falta
          </h1>
          <p className="blog-desc">
            Lista organizada por categoría, qué revisar antes de salir de casa y cinco hábitos para no llegar a la caja con el doble de lo planeado.
          </p>

          <div className="answer-box">
            <p>
              La <strong>lista del súper</strong> funciona mejor cuando está organizada por categoría — frutas y verduras, carnes, lácteos, despensa, limpieza — y armada antes de salir, según lo que realmente falta en casa. Quien sale sin lista reporta más artículos no planeados por visita, y algunas estimaciones ubican el ahorro de comprar con lista organizada entre 20% y 30%.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Familia haciendo las compras en el supermercado con la lista en la mano"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Gustavo Fring / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Contenido del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#por-que-importa">Por qué la lista cambia el total de la cuenta</a></li>
              <li><a href="#antes-de-salir">Antes de armarla: revisa lo que ya tienes en casa</a></li>
              <li><a href="#categorias-esenciales">Las categorías esenciales de la lista</a></li>
              <li><a href="#por-pasillo">Recorrer por pasillo ahorra tiempo de verdad</a></li>
              <li><a href="#habitos-caja">Cinco hábitos para no gastar de más en la caja</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* POR QUÉ IMPORTA */}
          <h2 id="por-que-importa">Por qué la lista del súper cambia el total de la cuenta</h2>

          <p>
            Una buena parte de las personas entra al súper sin ninguna lista, y las compras por impulso se estiman en más de la mitad del gasto total en algunos análisis del sector — en ciertas categorías, bastante más. No es casualidad. El acomodo de los pasillos, las góndolas de entrada y la fila de caja están pensados justo para eso.
          </p>
          <p>
            Ir al súper sin lista no es exactamente optimismo. Es la razón por la que aparece una bolsa de papas fritas que nadie pidió, mientras el papel higiénico se queda pendiente para la próxima semana por tercera vez seguida.
          </p>
          <p>
            Una lista bien organizada resuelve dos problemas a la vez: evita que se te olvide algo y evita que compres lo que no necesitabas. Lo que realmente hace que una lista funcione no es solo tenerla, sino cómo está armada.
          </p>

          {/* ANTES DE SALIR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8422685/pexels-photo-8422685.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mujer revisando su lista de compras mientras hace las compras en el súper"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kampus Production / Pexels</p>
          </div>

          <h2 id="antes-de-salir" className="img-above">Antes de armar la lista: revisa lo que ya tienes en casa</h2>

          <p>
            La lista del súper empieza en la cocina, no en la app ni en el papel. Antes de anotar el primer artículo, abre el refrigerador, el congelador y la alacena. Vas a descubrir que tienes tres latas de tomate que ya habías olvidado, pero ni una gota de aceite. O que el arroz se acabó el martes — y te enteras el sábado por la noche, parado frente a la estufa.
          </p>
          <p>
            Esa revisión rápida cumple dos funciones. Primero, evita comprar algo que ya tienes duplicado — más común de lo que parece cuando la alacena está desordenada. Segundo, muestra qué se está acabando antes de que se acabe del todo, así puedes reponerlo sin la carrera de último momento.
          </p>
          <p>
            Quien mantiene una{' '}
            <a href="/es/funcionalidades/despensa">despensa actualizada en la app</a>{' '}
            tiene esto resuelto de forma automática. El sistema ya sabe qué hay, qué se está acabando y qué desapareció. La{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            se arma a partir de ahí, no desde cero.
          </p>

          {/* CATEGORÍAS ESENCIALES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/28670064/pexels-photo-28670064.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pasillo de frutas y verduras con productos frescos de colores en el supermercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: novianadss / Pexels</p>
          </div>

          <h2 id="categorias-esenciales" className="img-above">Las categorías esenciales de la lista del súper</h2>

          <p>
            Una lista del súper bien estructurada divide los artículos en cinco grupos. Cada grupo suele coincidir con una zona de la tienda. Eso reduce el tiempo caminando de un lado a otro y baja la probabilidad de olvidar algo dentro de cada categoría.
          </p>

          <h3>Frutas y verduras</h3>
          <ul className="item-list">
            <li>Ajo y cebolla — la base de casi todo, siempre en la lista</li>
            <li>Tomate y alguna hoja verde de la semana (espinaca, lechuga o acelga)</li>
            <li>Verduras según lo que vayas a cocinar: calabacita, zanahoria o papa</li>
            <li>Fruta de rutina: plátano, manzana y naranja</li>
            <li>Fruta de temporada — sale más barata y sabe mejor</li>
          </ul>

          <h3>Carnes y proteínas</h3>
          <ul className="item-list">
            <li>Pollo o carne molida para las comidas principales de la semana</li>
            <li>Huevo — se conserva, es versátil y sale más barato que casi cualquier otra proteína</li>
            <li>Pescado, si forma parte de tu rutina en la cocina</li>
            <li>Carne para el fin de semana, aparte del plan semanal</li>
          </ul>

          <h3>Lácteos</h3>
          <ul className="item-list">
            <li>Leche o bebida vegetal</li>
            <li>Queso del día a día (panela, manchego o el que más uses)</li>
            <li>Mantequilla o crema</li>
            <li>Yogur natural, si forma parte del desayuno</li>
          </ul>

          <h3>Despensa</h3>
          <ul className="item-list">
            <li>Arroz y frijol — revisa cuánto queda antes de comprar más</li>
            <li>Pasta y alguna otra harina o grano seco de reserva</li>
            <li>Aceite de cocina, aceite de oliva y vinagre</li>
            <li>Especias que se están acabando: sal, pimienta, comino, ajo en polvo</li>
            <li>Enlatados de emergencia: atún, tomate, elote</li>
          </ul>

          <h3>Limpieza e higiene</h3>
          <ul className="item-list">
            <li>Papel higiénico — en cuanto vayas a la mitad del paquete</li>
            <li>Detergente para ropa</li>
            <li>Lavatrastes y una esponja nueva</li>
            <li>Multiusos para cocina y baño</li>
          </ul>

          <p>
            Esta misma división en cinco grupos es la base que usan la mayoría de las plantillas de lista del súper. La diferencia aquí está en el orden — qué agarras primero y qué dejas para el final del recorrido.
          </p>

          <div className="blog-inline-cta">
            <p>Una lista conectada a tu despensa — sin tener que acordarte de qué se acabó. <em>Eso hace Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* POR PASILLO */}
          <h2 id="por-pasillo">Recorrer por pasillo ahorra tiempo de verdad</h2>

          <p>
            La mayoría de los súpers sigue un recorrido parecido: frutas y verduras cerca de la entrada, carnes y lácteos en los costados o al fondo, despensa en los pasillos del medio y limpieza cerca de la caja. Cuando la lista sigue ese orden, haces el recorrido una sola vez y sales. Sin regresar al pasillo del arroz después de haber pasado por caja.
          </p>
          <p>
            La diferencia entre una lista sin orden y una organizada por pasillo no es solo velocidad. Es disciplina. Cuando empiezas por frutas y verduras con la lista en la mano, es mucho más difícil terminar "por accidente" en el pasillo de las botanas. Cada desvío tiene un costo.
          </p>
          <p>
            Una regla que aplica sin importar la tienda: los congelados y el helado van siempre al final del carrito, sin importar en qué parte de la tienda estén. Todo lo que necesita frío entra al carrito al final — sobre todo si el camino de regreso a casa es largo.
          </p>

          {/* HÁBITOS CAJA */}
          <h2 id="habitos-caja">Cinco hábitos para no gastar de más en la caja</h2>

          <p>
            La lista resuelve la primera mitad del problema. La segunda mitad pasa dentro de la tienda.
          </p>

          <ol className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>No vayas con hambre</strong>
                <span>Suena obvio. Aun así, buena parte de lo que entra al carrito sin estar planeado tiene olor y sabor. Ve al súper después de comer — cualquier comida sirve.</span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Compara precio por kilo, no por empaque</strong>
                <span>El empaque más grande no siempre sale más barato por gramo. Cuando los precios se ven parecidos, el más grande suele convenir — pero revisa la etiqueta antes de meterlo al carrito.</span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Marca propia en básicos de despensa y limpieza</strong>
                <span>En arroz, frijol, sal, azúcar y productos de limpieza, la diferencia de calidad entre marca propia y marca conocida suele ser mínima. La de precio no.</span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">4</div>
              <div className="tip-body">
                <strong>La oferta solo vale si ya la ibas a comprar</strong>
                <span>Tres paquetes de galletas a mitad de precio es buen negocio si comes galletas. Si no, es gasto doble en algo que va a caducar antes de que lo uses.</span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">5</div>
              <div className="tip-body">
                <strong>Revisa la lista antes de hacer la fila de la caja</strong>
                <span>Ese momento en el que ya estás en la fila y te acuerdas del suavizante — es más fácil revisar la lista antes de cerrar el carrito que después.</span>
              </div>
            </li>
          </ol>

          <p>
            Una lista del súper completa no garantiza una cocina organizada. Es el punto de partida. El resto viene del{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a>
            {' '}— si sabes qué vas a cocinar, sabes qué necesitas comprar. La lista es la consecuencia, no la causa.
          </p>

          <p>
            La lista no te hace cocinar mejor. Solo garantiza que el arroz va a estar ahí cuando lo necesites.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la lista del súper</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cómo organizo una lista del súper por categorías?</p>
              <p className="faq-a">
                Divídela en grupos: frutas y verduras, carnes, lácteos, despensa y limpieza e higiene. Anota solo lo que realmente falta en casa antes de salir. Organizar por categoría ayuda a seguir el recorrido de la tienda y reduce el ir y venir entre pasillos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué no puede faltar en una lista del súper completa?</p>
              <p className="faq-a">
                Los grupos esenciales son: frutas y verduras de la semana, carnes y proteínas (pollo, carne molida, huevo), lácteos (leche, queso, mantequilla), despensa (arroz, pasta, aceite, especias) y limpieza (papel higiénico, detergente, jabón). Ajusta las cantidades al tamaño de la familia.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto se puede ahorrar realmente con la lista del súper?</p>
              <p className="faq-a">
                La lista en sí es lo que más ahorra — algunas estimaciones ubican el ahorro entre 20% y 30% frente a comprar por impulso. Dentro de la tienda: no vayas con hambre, compara precio por kilo, prefiere marca propia en básicos y aprovecha solo las ofertas de lo que ya ibas a comprar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es el mejor orden para recorrer el súper con la lista?</p>
              <p className="faq-a">
                Sigue el recorrido de la tienda: frutas y verduras primero (cerca de la entrada), después carnes y fiambres, lácteos, despensa y limpieza al final. Los congelados van siempre al final, sin importar dónde estén, para que no pierdan la cadena de frío en el carrito.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cada cuánto conviene hacer la lista del súper?</p>
              <p className="faq-a">
                Depende de la familia y del espacio para guardar las compras. A la mayoría le funciona mejor una compra semanal completa armada con lista, más una o dos paradas rápidas entre semana para frutas y verduras frescas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Lista en papel o en el celular — cuál conviene más?</p>
              <p className="faq-a">
                El papel funciona bien si siempre vas al mismo súper. El celular nunca se queda olvidado en casa, se puede compartir en tiempo real y es fácil de actualizar durante la semana. Una app de lista de compras va un paso más allá: evita andar buscando en un grupo de WhatsApp qué fue lo que pidieron.
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
                Creador de Mise. Fue al súper por 3 cosas y volvió con 11. El papel higiénico estaba entre las 3 originales. Las otras 8, no.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              La lista lista antes de salir de casa.<br />
              <em>Así funciona Mise.</em>
            </h2>
            <p>
              Conecta la despensa, el menú semanal y la lista de compras en un solo lugar.
              Sabes qué tienes, planeas qué vas a cocinar y la lista se arma sola.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Empieza gratis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Volver arriba">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Volver arriba
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
          <a href="/es/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
