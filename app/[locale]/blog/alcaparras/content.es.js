import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Alcaparras: qué son, tipos y cómo usarlas en la cocina',
  description: 'Las alcaparras son botones florales encurtidos, de sabor salado y ácido. Descubre qué son, la diferencia con los alcaparrones, y cómo usarlas en la cocina.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/alcaparras',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/alcaparras',
      en: 'https://www.miseemcasa.com.br/en/blog/alcaparras',
      es: 'https://www.miseemcasa.com.br/es/blog/alcaparras',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/alcaparras',
    },
  },
  openGraph: {
    title: 'Alcaparras: qué son, tipos y cómo usarlas en la cocina',
    description: 'Las alcaparras son botones florales encurtidos, de sabor salado y ácido. Descubre qué son, la diferencia con los alcaparrones, y cómo usarlas en la cocina.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/alcaparras',
    images: [
      {
        url: 'https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Alcaparras en un frasco de vidrio — botones florales conservados en salmuera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alcaparras: qué son, tipos y cómo usarlas en la cocina',
    description: 'Las alcaparras son botones florales encurtidos, de sabor salado y ácido. Descubre qué son, la diferencia con los alcaparrones, y cómo usarlas en la cocina.',
    images: ['https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué son las alcaparras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las alcaparras son los botones florales de la planta Capparis spinosa, nativa del Mediterráneo. Se recolectan a mano antes de que la flor abra y se conservan en salmuera, vinagre o sal gruesa, lo que les da un sabor salado, ácido y ligeramente amargo. Se usan como condimento, no como verdura — en salsas, pastas, pescados y carnes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre alcaparras y alcaparrones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las alcaparras son el botón floral cerrado. Los alcaparrones son el fruto que se forma después de que la flor abre y es polinizada: más grandes, con un tallo, de sabor más suave y textura más jugosa por las semillas que tienen dentro. Se conservan del mismo modo, pero se usan distinto: el alcaparrón suele servirse entero, como aperitivo, no picado dentro de una salsa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se desalan las alcaparras en sal gruesa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se colocan en un recipiente con agua fría a temperatura ambiente. Se dejan en remojo de 15 a 20 minutos, cambiando el agua al menos una vez. Prueba antes de usarlas — la sal residual ya va a condimentar la receta, así que ajusta la sal del plato al final.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Las alcaparras son buenas para la salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las alcaparras tienen propiedades antiinflamatorias por flavonoides como la rutina y la quercetina, además de vitamina K, algo de vitamina A y C, y fibra. El punto de atención es el sodio: incluso enjuagadas, conservan una cantidad relevante de sal. Quien controla la presión arterial debe usarlas con moderación y enjuagarlas bien.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué puedo usar si no tengo alcaparras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aceitunas verdes picadas son el sustituto más cercano — mismo punto salado y ácido. Las aceitunas kalamata funcionan en platos con sabores más intensos. Un pepinillo encurtido picado cubre la acidez y el crujiente. En un apuro, jugo de limón con una pizca de sal se acerca al efecto, aunque sin la textura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se conservan las alcaparras después de abrir el frasco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el refrigerador, siempre cubiertas por su líquido de conserva. Si el líquido baja, se completa con agua ligeramente salada. Bien conservadas, duran meses. Nunca se debe escurrir todo el líquido para guardarlas secas — sin él, pierden textura y se marchitan rápido.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alcaparras: qué son, tipos y cómo usarlas en la cocina',
  description: 'Las alcaparras son botones florales encurtidos, de sabor salado y ácido. Descubre qué son, la diferencia con los alcaparrones, y cómo usarlas en la cocina.',
  image: 'https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/alcaparras',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Alcaparras', item: 'https://www.miseemcasa.com.br/es/blog/alcaparras' },
  ],
}

export default function AlcaparrasEs() {
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
            <li><a href="/es">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Alcaparras</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-26">26 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Qué son las alcaparras y cómo usarlas sin arruinar la receta
          </h1>
          <p className="blog-desc">
            Ese frasco pequeño junto a las aceitunas y los encurtidos. Lo has visto cien veces y lo has usado quizás dos. Las alcaparras son botones florales — ni fruta, ni condimento industrial — y entender eso cambia bastante cuánto le pones al plato.
          </p>

          <div className="answer-box">
            <p>
              <strong>Las alcaparras</strong> son los botones florales de la planta <em>Capparis spinosa</em>, nativa del Mediterráneo.
              Conservadas en salmuera, vinagre o sal gruesa, tienen un sabor salado, ácido y ligeramente amargo.
              Funcionan como condimento — un punto de profundidad en salsas, pescados y pastas.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Alcaparras en un frasco de vidrio — botones florales conservados en salmuera"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-son">Qué son las alcaparras</a></li>
              <li><a href="#alcaparras-o-alcaparrones">Alcaparras o alcaparrones</a></li>
              <li><a href="#tipos-de-conserva">Tipos de conserva</a></li>
              <li><a href="#como-usar">Cómo usarlas en la cocina</a></li>
              <li><a href="#nutricion">Nutrición y sodio</a></li>
              <li><a href="#sustitutos">Sustitutos si no tienes</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUE SON */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Alcaparras pequeñas en primer plano — botones florales verdes de la planta Capparis spinosa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-son" className="img-above">Qué son las alcaparras</h2>

          <p>
            Las alcaparras son botones florales — no una fruta, no una semilla. Son los brotes de la planta <em>Capparis spinosa</em>, recolectados antes de que la flor abra.
            Si el botón florece, ya perdió el punto. La ventana de cosecha es corta.
          </p>
          <p>
            La planta crece bien en terreno árido, sol fuerte y poca agua. Laderas pedregosas, muros viejos, acantilados del sur de Europa — ahí se siente en casa.
            Es nativa del Mediterráneo y de Medio Oriente. Crece de forma silvestre, pero la cosecha sigue siendo manual: cada botón recogido a mano, uno por uno, antes de abrir.
          </p>
          <p>
            Recién cortado, el botón es casi insípido. El proceso de curado es lo que transforma el sabor: salmuera, vinagre o sal gruesa.
            Ese tiempo en conserva crea el sabor característico — salado, ácido, con un amargor leve que desaparece cuando se usa bien.
          </p>
          <p>
            El tamaño importa. Cuanto más pequeño el botón, más delicado el sabor y más alto el precio.
            Las <em>nonpareil</em> — menos de 7mm — son las más pequeñas y las más valoradas en la cocina europea.
            Los tamaños más grandes tienen sabor más marcado y cuestan menos. En el súper, el tamaño casi nunca viene indicado en la etiqueta — compras por marca, no por calibre.
          </p>

          {/* ALCAPARRAS O ALCAPARRONES */}
          <h2 id="alcaparras-o-alcaparrones">Alcaparras o alcaparrones: no son lo mismo</h2>

          <p>
            En algunas tiendas gourmet aparece otro producto de la misma planta: el alcaparrón.
            Confundirlo con la alcaparra es fácil, pero cambian de sabor, tamaño y uso.
          </p>
          <p>
            El alcaparrón es el fruto que se forma después de que la flor abre y es polinizada — no el botón cerrado.
            Es notablemente más grande, todavía tiene el tallo pegado, y por dentro trae semillas que le dan una textura más jugosa y carnosa.
            El sabor es más suave que el de la alcaparra, menos intenso, con un punto casi crocante.
          </p>
          <p>
            Se conservan del mismo modo — salmuera o vinagre — pero se usan distinto.
            El alcaparrón suele servirse entero: en una tabla de quesos, como aperitivo con palillo, o dentro de una copa de vermú.
            La alcaparra, en cambio, casi siempre se pica o se usa entera dentro de una salsa. Si una receta pide alcaparras y solo tienes alcaparrones, se puede picar y usar en menor cantidad — el sabor es más suave, así que compensa con un poco más de cantidad.
          </p>

          {/* TIPOS DE CONSERVA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3297902/pexels-photo-3297902.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Frascos de conservas mediterráneas en un estante — aceitunas, alcaparras y antipasti"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="tipos-de-conserva" className="img-above">Tipos de conserva: salmuera, vinagre y sal gruesa</h2>

          <p>
            Tres tipos llegan al súper o a la tienda gourmet. Saber la diferencia evita una sorpresa en la receta — y plata gastada en el frasco equivocado.
          </p>

          <h3>Salmuera</h3>
          <p>
            La más común: agua y sal, a veces con un poco de vinagre.
            Lista para usar — un enjuague rápido quita el exceso de sal.
            Es la opción sin complicaciones. En el buen sentido de sin complicaciones.
            La elección correcta si usas alcaparras seguido y quieres cero preparación.
            Guarda el frasco cerrado en la <a href="/es/funcionalidades/despensa">despensa</a>; ya abierto, va al refrigerador.
          </p>

          <h3>Vinagre</h3>
          <p>
            Más ácida que la salmuera. Aparece en frascos gourmet y antipasti importados.
            Funciona bien donde la acidez es bienvenida — salsa de tomate, pescados, ensaladas.
            Cuidado en platos que ya llevan acidez: el vinagre empieza a competir en vez de sumar.
          </p>

          <h3>Sal gruesa</h3>
          <p>
            La versión tradicional de las islas del Mediterráneo — Pantelleria, en Sicilia, es la más conocida.
            Sabor más complejo, textura más firme. La preferida de quien cocina italiano en serio.
            Necesitan desalado antes de usar: 15 a 20 minutos en agua fría, cambiando el agua una vez.
            Prueba antes de sazonar el plato — la sal residual ya va a condimentar la receta.
            Difíciles de encontrar fuera de tiendas especializadas o en línea, pero valen la pena cuando la textura importa.
          </p>

          <p>
            Un dato directo: si la receta pide "alcaparras" sin especificar, asume salmuera. Funciona en casi todo.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Cómo usar alcaparras en la cocina</h2>

          <p>
            La alcaparra es condimento, no ingrediente principal.
            Funciona como potenciador — un punto de sal y acidez en un plato que necesita profundidad sin sumar volumen.
          </p>

          <h3>Salsa puttanesca</h3>
          <p>
            El uso clásico. Tomate pelado, aceituna negra, alcaparras, anchoas y ajo — todo de despensa, 20 minutos.
            Es el tipo de receta que sale cuando el refrigerador está casi vacío.
            Todos los ingredientes son de conserva y la salsa toma diez minutos.
            Si tu <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> está bien armada, este plato aparece sin ir al súper solo por él.
          </p>

          <h3>Con pescados</h3>
          <p>
            Salmón ahumado con queso crema, cebolla morada y alcaparras es un clásico escandinavo.
            Con <a href="/es/blog/atum">atún en conserva</a>, las alcaparras reemplazan al pepinillo picado de siempre.
            Sobre bacalao al horno o un pescado blanco a la parrilla, van como toque final — alcaparras, aceite de oliva y limón, así de simple.
          </p>

          <h3>Salsas frías</h3>
          <p>
            En la salsa tártara, la alcaparra entra picada junto con pepinillo y hierbas frescas.
            Funciona bien con hamburguesa, pollo empanizado o pescado frito.
            Con atún en conserva, alcaparras picadas y un limón, hay almuerzo listo en cinco minutos.
            Suena a flojera. Es Mediterráneo. Puede ser las dos cosas.
          </p>

          <h3>Como toque final</h3>
          <p>
            Alcaparras enteras sobre carpaccio, ensalada con rúcula o una tabla de fiambres.
            Picadas finas en mantequilla con hierbas — se esparcen sobre pescado o pollo antes de servir.
            Fritas rápido en aceite de oliva quedan crocantes y se vuelven un garnish de sabor más concentrado.
          </p>

          <p>
            Un detalle técnico importante: escurre y enjuaga antes de usar, incluso en salmuera suave.
            La sal de la conserva es fuerte — sin enjuagar, puedes salar el plato sin querer.
            La alcaparra ya va a condimentar. Deja que haga su trabajo y ajusta al final.
          </p>

          <div className="blog-inline-cta">
            <p>La cocina no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* NUTRICION */}
          <h2 id="nutricion">Nutrición y cuidado con el sodio</h2>

          <p>
            Las alcaparras tienen propiedades antiinflamatorias por dos flavonoides: rutina y quercetina.
            También son fuente de vitamina K, algo de vitamina A y vitamina C.
            El contenido de fibra es relevante para un condimento — la cantidad por porción es pequeña, pero está ahí.
          </p>
          <p>
            El punto de atención es el sodio. Las alcaparras en conserva tienen bastante sal — es lo que las conserva y lo que crea el sabor.
            Incluso enjuagadas, siguen cargando una cantidad relevante.
            Para la mayoría no es un problema: la cantidad usada en una receta es pequeña, como cualquier condimento.
            Quien tiene la presión alta o necesita controlar el sodio debe usarlas con moderación y enjuagarlas con cuidado.
          </p>
          <p>
            No son un superalimento. Son un condimento con nutrientes interesantes — como la mayoría de las especias mediterráneas.
            La diferencia es que la alcaparra tiene sabor suficiente para usar poca cantidad, y usar poca cantidad es la forma correcta de usarla.
            Ese mismo principio aplica a cualquier condimento en una{' '}
            <a href="/es/funcionalidades/despensa">despensa bien organizada</a>
            {': '}se compra una vez, dura meses, condimenta decenas de recetas.
          </p>

          {/* SUSTITUTOS */}
          <h2 id="sustitutos">Sustitutos si no tienes alcaparras</h2>

          <p>
            No hay frasco en casa y la receta las pide de todos modos. Algunas opciones sí funcionan, no solo técnicamente sirven.
          </p>
          <p>
            <strong>Aceitunas verdes picadas</strong> son el sustituto más cercano — mismo punto salado, textura parecida. Pícalas del tamaño de una alcaparra y usa la misma cantidad.
            <strong>Aceitunas kalamata</strong> funcionan en platos con sabores más intensos, donde un toque más fuerte no desentona.
            <strong>Pepinillo encurtido picado</strong> cubre la acidez y suma crujiente — útil en salsas frías y untables.
            <strong>Cebolla morada encurtida</strong> aporta el golpe de vinagre sin tanta sal — buena en ensaladas.
          </p>
          <p>
            En un apuro, sin nada encurtido en casa: jugo de limón con una pizca de sal se acerca bastante.
            Falta la textura que aporta la alcaparra, pero el balance de sal y acidez que la receta busca se cubre.
          </p>
          <p>
            Ninguno es un reemplazo perfecto — la alcaparra tiene un sabor propio que nada más replica del todo.
            Pero para el trabajo que hace en la mayoría de las recetas (sal, acidez, un punto de textura), estas opciones se acercan lo suficiente como para que el plato funcione igual.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre alcaparras</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué son las alcaparras?</p>
              <p className="faq-a">
                Las alcaparras son los botones florales de la planta <em>Capparis spinosa</em>, nativa del Mediterráneo.
                Se recolectan a mano antes de que la flor abra y se conservan en salmuera, vinagre o sal gruesa, lo que les da un sabor salado, ácido y ligeramente amargo.
                Se usan como condimento en salsas, pastas, pescados y carnes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre alcaparras y alcaparrones?</p>
              <p className="faq-a">
                Las alcaparras son el botón floral cerrado. Los alcaparrones son el fruto que se forma después de que la flor abre y es polinizada: más grandes, con tallo, de sabor más suave.
                Se conservan igual, pero se usan distinto — el alcaparrón se sirve entero, no picado en una salsa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se desalan las alcaparras en sal gruesa?</p>
              <p className="faq-a">
                Se colocan en un recipiente con agua fría a temperatura ambiente.
                Se dejan en remojo de 15 a 20 minutos, cambiando el agua al menos una vez.
                Prueba antes de usarlas — la sal residual ya va a condimentar la receta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Las alcaparras son buenas para la salud?</p>
              <p className="faq-a">
                Tienen propiedades antiinflamatorias, vitaminas K, A y C, fibra y flavonoides como rutina y quercetina.
                El punto de atención es el sodio: incluso enjuagadas, conservan una cantidad relevante de sal.
                Quien controla la presión arterial debe usarlas con moderación y enjuagarlas bien antes de cocinar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué puedo usar si no tengo alcaparras?</p>
              <p className="faq-a">
                Aceitunas verdes picadas son el sustituto más cercano — mismo punto salado y ácido.
                Las aceitunas kalamata funcionan en platos con sabores más intensos. Un pepinillo encurtido picado cubre la acidez y el crujiente.
                En un apuro, jugo de limón con una pizca de sal se acerca al efecto, aunque sin la textura.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se conservan las alcaparras después de abrir el frasco?</p>
              <p className="faq-a">
                En el refrigerador, siempre cubiertas por su líquido de conserva.
                Si el líquido baja, se completa con agua ligeramente salada.
                Bien conservadas, duran meses. Nunca escurras todo el líquido para guardarlas secas — sin él, pierden textura y se marchitan rápido.
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
                Creador de Mise. Tiene un frasco de alcaparras abierto en el refrigerador desde noviembre. Las va a usar en la próxima puttanesca — en cuanto se acuerde de que las tiene.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabes lo que hay en la despensa.<br />
              <em>Dale, usa Mise.</em>
            </h2>
            <p>
              Conecta despensa, recetas y lista de compras en un solo lugar.
              Compras lo que vas a usar — y las alcaparras no se quedan olvidadas desde noviembre.
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
          <a href="/es" className="brand">
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
