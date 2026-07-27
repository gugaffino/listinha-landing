import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Vinagre balsámico: qué es, tipos y cómo usarlo bien',
  description: 'El vinagre balsámico es mosto de uva cocido y añejado en barricas, no vinagre de vino con caramelo. Qué es, cómo distinguirlo, usos y sustitutos.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/vinagre-balsamico',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/vinagre-balsamico',
      en: 'https://www.miseemcasa.com.br/en/blog/vinagre-balsamico',
      es: 'https://www.miseemcasa.com.br/es/blog/vinagre-balsamico',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/vinagre-balsamico',
    },
  },
  openGraph: {
    title: 'Vinagre balsámico: qué es, tipos y cómo usarlo bien',
    description: 'El vinagre balsámico es mosto de uva cocido y añejado en barricas, no vinagre de vino con caramelo. Qué es, cómo distinguirlo, usos y sustitutos.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/vinagre-balsamico',
    images: [
      {
        url: 'https://images.pexels.com/photos/18754796/pexels-photo-18754796.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mesa con ingredientes de cocina italiana — productos mediterráneos, vinagre y aceite de oliva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinagre balsámico: qué es, tipos y cómo usarlo bien',
    description: 'El vinagre balsámico es mosto de uva cocido y añejado en barricas, no vinagre de vino con caramelo. Qué es, cómo distinguirlo, usos y sustitutos.',
    images: ['https://images.pexels.com/photos/18754796/pexels-photo-18754796.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el vinagre balsámico y el vinagre normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El vinagre normal se hace de vino o alcohol fermentado — acidez directa, sin dulzor. El balsámico empieza con mosto de uva, el jugo concentrado de la uva, y se añeja en barricas de madera. El resultado es más denso, agridulce, con capas de sabor. Son productos completamente distintos en proceso, sabor y uso en la cocina.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El vinagre balsámico tiene alcohol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El balsámico tiene un contenido de alcohol residual muy bajo — por lo general menos del 1,5%. La fermentación acética convierte casi todo el alcohol durante el añejamiento en barrica. Para efectos prácticos de cocina y consumo, se trata como un producto sin alcohol.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se hace una reducción de vinagre balsámico en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vierte 1 taza (240 ml) de balsámico IGP en una olla pequeña. Cocina a fuego medio-bajo, sin tapar, durante 15 a 20 minutos, revolviendo de vez en cuando, hasta que quede aproximadamente 1/4 de taza (60 ml). Espesa más al enfriarse. Guárdalo en un frasco cerrado en el refrigerador hasta 3 meses. Úsalo en gotas sobre quesos, fresas o platos ya servidos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura el vinagre balsámico después de abierto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El balsámico tiene una acidez alta que funciona como conservante natural. Abierto, bien tapado, a temperatura ambiente y lejos de la luz directa, dura sin problema de 3 a 5 años. No necesita refrigeración. Lo más probable es que termines la botella mucho antes de eso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Vale la pena pagar más por un balsámico caro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para ensaladas y uso diario, una botella IGP entre 8 y 20 dólares funciona muy bien. El caro — el Tradizionale DOP, añejado de 12 a 25 años — tiene un sabor mucho más complejo y casi nada de acidez fuerte. Ese es para usar en gotas sobre quesos especiales o platos simples donde el vinagre es el protagonista. Para la cocina de todos los días, el IGP es la opción correcta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué puedo usar si no tengo vinagre balsámico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vinagre de vino tinto mezclado con un poco de miel o jarabe de maple (unas 4 partes de vinagre por 1 de endulzante) es el sustituto más cercano para aderezos y marinadas. Vinagre de manzana con una pizca de azúcar morena también funciona en un apuro. Ninguno replica el sabor completo, pero ambos cubren el balance agridulce que busca la receta cuando no hay botella en la despensa.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Vinagre balsámico: qué es, tipos y cómo usarlo bien',
  description: 'El vinagre balsámico es mosto de uva cocido y añejado en barricas, no vinagre de vino con caramelo. Qué es, cómo distinguirlo, usos y sustitutos.',
  image: 'https://images.pexels.com/photos/18754796/pexels-photo-18754796.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/vinagre-balsamico',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Vinagre balsámico', item: 'https://www.miseemcasa.com.br/es/blog/vinagre-balsamico' },
  ],
}

export default function VinagreBalsamicoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Vinagre balsámico</li>
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

          <h1 className="blog-h1">Vinagre balsámico: qué es en realidad y cómo usarlo bien</h1>
          <p className="blog-desc">
            No es vinagre de vino con colorante oscuro. Esto es lo que diferencia al balsámico real de la imitación, cómo usarlo en ensaladas, carnes y fresas — y qué revisar en la etiqueta antes de comprarlo.
          </p>

          <div className="answer-box">
            <p>
              <strong>El vinagre balsámico</strong> es un condimento italiano hecho de mosto de uva cocido y añejado en barricas de madera. Tiene color oscuro, textura levemente espesa y sabor agridulce. Se usa como toque final en ensaladas, carnes, quesos y fresas — nunca en cocción prolongada.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/18754796/pexels-photo-18754796.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mesa con ingredientes de cocina italiana — productos mediterráneos, vinagre y aceite de oliva"
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
              <li><a href="#que-es">Qué es el vinagre balsámico</a></li>
              <li><a href="#real-o-imitacion">Real o imitación: cómo leer la etiqueta</a></li>
              <li><a href="#como-usar">Cómo usarlo en la cocina</a></li>
              <li><a href="#cuanto-usar">Cuánto usar — y qué evitar</a></li>
              <li><a href="#sustitutos">Los mejores sustitutos</a></li>
              <li><a href="#como-comprar">Cómo comprarlo y guardarlo</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10071322/pexels-photo-10071322.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Ingredientes de cocina italiana — vinagre, aceite de oliva, hierbas y especias sobre mesa de madera"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ron Lach / Pexels</p>
          </div>
          <h2 id="que-es" className="img-above">Qué es el vinagre balsámico</h2>

          <p>El vinagre balsámico no es vinagre de vino con colorante oscuro. Muchos productos en el estante imitan esa idea, pero el balsámico de verdad empieza en otro lugar: el mosto de uva, el jugo recién prensado de uvas Trebbiano, cultivadas en Emilia-Romaña, en el norte de Italia.</p>

          <p>El proceso tiene casi mil años. El mosto se cocina a fuego bajo hasta reducirse a la mitad, luego fermenta lentamente y se añeja en barricas de madera. No en una barrica — en una serie de barricas de tamaño decreciente, cada una de una madera distinta: roble, cerezo, mora, castaño, fresno. Cada trasiego suma una capa de sabor. Para el producto tradicional, el mínimo son 12 años en esas barricas. Hay versiones de 25.</p>

          <p>El resultado es un líquido denso, oscuro y agridulce. La acidez es más suave que la del vinagre de vino. El dulzor no viene de azúcar añadida — viene de la uva y de la concentración natural durante el añejamiento. Quien prueba un buen balsámico por primera vez suele pensar que tiene almíbar de fruta mezclado. No lo tiene. Es solo uva que pasó mucho tiempo en una barrica.</p>

          <h2 id="real-o-imitacion">Real o imitación: cómo leer la etiqueta</h2>

          <p>Hay una diferencia enorme entre la botella que cuesta 150 dólares por 100 ml en una tienda especializada y la que está en el estante del súper por 8 dólares. Y no es solo el empaque.</p>

          <p><strong>Aceto Balsamico Tradizionale di Modena DOP</strong> — el original. Añejamiento mínimo de 12 años, producción artesanal limitada, certificación europea estricta. Una botella de 100 ml cuesta entre 60 y 200 dólares o más. Este no se usa en chorro sobre la ensalada — va en gotas sobre parmesano o carpaccio. La mayoría de las personas nunca va a comprar uno. No lo necesitan.</p>

          <p><strong>Aceto Balsamico di Modena IGP</strong> — el que está en el súper. Mezcla controlada de mosto de uva con vinagre de vino y caramelo para el color. Tiene certificación europea (el sello IGP azul y amarillo en el empaque), pero la producción es industrial. Para el uso diario en ensaladas y platos de todos los días, funciona perfecto. Es el que la mayoría de la gente va a usar — y está bien así.</p>

          <p><strong>Glaseado o crema balsámica</strong> — el balsámico ya reducido, más espeso y más dulce, casi siempre en envase tipo squeeze. Ideal para rociar pizza, fresas y quesos. No reemplaza al balsámico líquido en una vinagreta.</p>

          <p>Lo que existe en abundancia sin ninguna de estas certificaciones es básicamente caramelo con un chorrito de vinagre. Revisa los ingredientes antes de comprar: el mosto de uva o el vinagre de vino deben ir primero. Si el primer ingrediente es caramelo, colorante caramelo o jarabe de maíz, el producto es una imitación.</p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/30925485/pexels-photo-30925485.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sándwich caprese con tomate fresco, mozzarella y albahaca — combinación clásica con vinagre balsámico"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Electra Studio / Pexels</p>
          </div>
          <h2 id="como-usar" className="img-above">Cómo usarlo en la cocina</h2>

          <p>La regla más importante: el balsámico va al final. El calor alto destruye los compuestos aromáticos que hacen que valga la pena usarlo. No va a la sartén junto con el aceite de oliva. Va sobre la ensalada ya servida, sobre la carne ya lista, sobre las fresas ya cortadas.</p>

          <p>Las combinaciones que siempre funcionan en la cocina de casa:</p>

          <ul className="item-list">
            <li><strong>Ensalada verde</strong> — aceite de oliva extra virgen, sal, pimienta y balsámico. Con hojas de carácter como rúcula o radicchio, funciona todavía mejor — el dulzor del balsámico equilibra el amargor. Un buen aceite de oliva importa tanto como el vinagre en esta combinación.</li>
            <li><strong>Caprese</strong> — tomate en rodajas, mozzarella fresca, albahaca, sal en escamas, aceite de oliva y balsámico. Con un buen tomate, este es uno de los platos más simples y satisfactorios que existen.</li>
            <li><strong>Carnes</strong> — pollo a la parrilla, cerdo, res. Una cucharadita sobre el corte ya listo, fuera del fuego. El calor residual de la carne resalta el balsámico sin destruirlo.</li>
            <li><strong>Fresas</strong> — suena raro. Funciona muy bien. Fresas en rodajas, una pizca de azúcar y unas gotas de balsámico. Se deja reposar 15 minutos. El jugo que suelta, mezclado con el balsámico, se vuelve un almíbar natural.</li>
            <li><strong>Quesos duros</strong> — parmesano, grana padano, pecorino. Una rebanada de queso con una gota de balsámico resuelve cualquier entrada de último momento.</li>
          </ul>

          <p>El balsámico también funciona en marinadas de carne, pero para eso usa el más barato. El sabor se pierde en parte con el calor prolongado — no tiene sentido gastar en el bueno para marinar.</p>

          <div className="blog-inline-cta">
            <p>Saber qué hay en la despensa antes de ir al súper cambia toda la lista. <em>Mise se encarga.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          <h2 id="cuanto-usar">Cuánto usar — y qué evitar</h2>

          <p>Una cucharadita a una cucharada por porción es suficiente. El balsámico tiene sabor concentrado — más no es mejor. En exceso, domina todo lo que hay en el plato.</p>

          <p>Qué evitar:</p>

          <ul className="item-list">
            <li>Reemplazarlo con limón o vinagre de manzana en recetas que piden acidez ligera. El balsámico tiene un dulzor importante — el cambio altera todo el perfil del plato.</li>
            <li>Combinarlo con demasiados ingredientes ya dulces — mango, uva, miel al mismo tiempo. Azúcar sobre azúcar, aunque sea azúcar elegante.</li>
            <li>Calentarlo directo a temperatura alta. Si necesitas usarlo caliente, agrégalo fuera del fuego o a fuego muy bajo por pocos segundos.</li>
          </ul>

          <p><strong>Reducción casera</strong> — el glaseado que compras listo se puede hacer en casa. Pon 1 taza (240 ml) de balsámico IGP a fuego medio-bajo, sin tapar. Reduce por 15 a 20 minutos, revolviendo de vez en cuando, hasta que quede cerca de 1/4 de taza (60 ml). Al enfriarse, espesa. Guárdalo en un frasco tapado en el refrigerador hasta 3 meses.</p>

          <h2 id="sustitutos">Los mejores sustitutos del balsámico</h2>

          <p>No hay botella en casa y la receta lo pide de todos modos. Algunas combinaciones sí se acercan, no solo cumplen técnicamente.</p>

          <p><strong>Vinagre de vino tinto con miel o jarabe de maple</strong> es el sustituto más cercano — unas 4 partes de vinagre por 1 de endulzante para aderezos, una proporción un poco más generosa si lo vas a usar en gotas como toque final. <strong>Vinagre de manzana con una pizca de azúcar morena</strong>, batido y dejado reposar unos minutos, cubre la mayoría de los usos diarios. En un verdadero apuro, hervir vinagre simple con un poco de azúcar a fuego bajo hasta disolver da un sustituto básico para un glaseado.</p>

          <p>Ninguno replica del todo la complejidad de un balsámico añejado en barrica. Pero para lo que suele hacer en una receta — dulzor más acidez — se acercan lo suficiente como para que el plato funcione igual.</p>

          <h2 id="como-comprar">Cómo comprarlo y guardarlo</h2>

          <p>En el súper, revisa tres cosas en la etiqueta antes de ponerlo en el carrito:</p>

          <ul className="item-list">
            <li><strong>Primer ingrediente</strong> — debe ser mosto de uva o vinagre de vino de uva. Si el primero es caramelo, colorante caramelo o jarabe de maíz, el producto es una imitación.</li>
            <li><strong>Sello IGP</strong> — el símbolo azul y amarillo de la Unión Europea indica certificación de origen. No garantiza que sea artesanal, pero sí que es balsámico real.</li>
            <li><strong>Acidez</strong> — el balsámico IGP estándar tiene una acidez de entre 6% y 7%. Entre más baja, generalmente más diluido.</li>
          </ul>

          <p>Marcas con calidad consistente: Colavita, Monari Federzoni, y marcas propias de supermercado. Espera pagar entre 8 y 20 dólares por una botella IGP decente de 250 ml.</p>

          <p>Guardarlo es simple — tapado, lejos de la luz directa, a temperatura ambiente. No necesita refrigeración. La acidez alta funciona como conservante natural, igual que la mayoría de los vinagres bien guardados en una <a href="/es/funcionalidades/despensa">despensa organizada</a>.</p>

          <p>Igual que <a href="/es/blog/alcaparras">las alcaparras</a> — otro condimento mediterráneo que asusta en la primera compra y se vuelve indispensable después —, el balsámico es de esos ingredientes que parecen demasiado para el día a día hasta que dejas de tenerles miedo.</p>

          <h2 id="faq">Preguntas frecuentes sobre el vinagre balsámico</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el vinagre balsámico y el vinagre normal?</p>
              <p className="faq-a">El vinagre normal se hace de vino o alcohol fermentado — acidez directa, sin dulzor. El balsámico empieza con mosto de uva, el jugo concentrado de la uva, y se añeja en barricas de madera. El resultado es más denso, agridulce, con capas de sabor. Son productos completamente distintos en proceso, sabor y uso en la cocina.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El vinagre balsámico tiene alcohol?</p>
              <p className="faq-a">El balsámico tiene un contenido de alcohol residual muy bajo — por lo general menos del 1,5%. La fermentación acética convierte casi todo el alcohol durante el añejamiento en barrica. Para efectos prácticos de cocina y consumo, se trata como un producto sin alcohol.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se hace una reducción de vinagre balsámico en casa?</p>
              <p className="faq-a">Vierte 1 taza (240 ml) de balsámico IGP en una olla pequeña. Cocina a fuego medio-bajo, sin tapar, durante 15 a 20 minutos, revolviendo de vez en cuando, hasta que quede aproximadamente 1/4 de taza (60 ml). Espesa más al enfriarse. Guárdalo en un frasco cerrado en el refrigerador hasta 3 meses. Úsalo en gotas sobre quesos, fresas o platos ya servidos.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto dura el vinagre balsámico después de abierto?</p>
              <p className="faq-a">El balsámico tiene una acidez alta que funciona como conservante natural. Abierto, bien tapado, a temperatura ambiente y lejos de la luz directa, dura sin problema de 3 a 5 años. No necesita refrigeración. Lo más probable es que termines la botella mucho antes de eso.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Vale la pena pagar más por un balsámico caro?</p>
              <p className="faq-a">Para ensaladas y uso diario, una botella IGP entre 8 y 20 dólares funciona muy bien. El caro — el Tradizionale DOP, añejado de 12 a 25 años — tiene un sabor mucho más complejo y casi nada de acidez fuerte. Ese es para usar en gotas sobre quesos especiales o platos simples donde el vinagre es el protagonista. Para la cocina de todos los días, el IGP es la opción correcta.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué puedo usar si no tengo vinagre balsámico?</p>
              <p className="faq-a">Vinagre de vino tinto mezclado con un poco de miel o jarabe de maple (unas 4 partes de vinagre por 1 de endulzante) es el sustituto más cercano para aderezos y marinadas. Vinagre de manzana con una pizca de azúcar morena también funciona en un apuro. Ninguno replica el sabor completo, pero ambos cubren el balance agridulce que busca la receta cuando no hay botella en la despensa.</p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
                <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="#2D5F2F"/>
                <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A"/>
              </svg>
            </div>
            <div>
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">Fundador de Mise. Cocina de lunes a viernes porque comer afuera todos los días sale caro y cansa. Tiene un balsámico de diario para la ensalada y uno más caro que nadie tiene permiso de usar para cocinar.</p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>Tu cocina, en piloto automático.<br /><em>Sin lista, sin despensa, sin plan.</em></h2>
            <p>Mise junta tu lista de compras, despensa y recetas en un solo lugar. Vas al súper sabiendo exactamente qué tienes y qué realmente te falta.</p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Empieza gratis{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Volver arriba">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
              <path d="M18 15l-6-6-6 6"/>
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
