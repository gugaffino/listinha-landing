import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Nabo: qué es, sus beneficios y cómo cocinarlo bien',
  description: 'El nabo es una verdura de raíz con pocas calorías, vitamina C y fibra que casi nadie compra en la verdulería. Qué es, sus beneficios y cómo cocinarlo bien.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-nabo',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-nabo',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-nabo',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-nabo',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-nabo',
    },
  },
  openGraph: {
    title: 'Nabo: qué es, sus beneficios y cómo cocinarlo bien',
    description: 'El nabo es una verdura de raíz con pocas calorías, vitamina C y fibra que casi nadie compra en la verdulería. Qué es, sus beneficios y cómo cocinarlo bien.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-nabo',
    images: [
      {
        url: 'https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Nabo fresco sobre una superficie clara — verdura de raíz blanca y morada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabo: qué es, sus beneficios y cómo cocinarlo bien',
    description: 'El nabo es una verdura de raíz con pocas calorías, vitamina C y fibra que casi nadie compra en la verdulería. Qué es, sus beneficios y cómo cocinarlo bien.',
    images: ['https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El nabo es fruta o verdura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una verdura — técnicamente, la raíz de una planta herbácea. La fruta es la parte reproductiva de la planta, donde están las semillas. El nabo es la raíz, que la planta usa para almacenar energía. En la cocina entra en la misma categoría que la zanahoria, la remolacha y la papa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer nabo crudo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Crudo tiene un sabor más picante y una textura crujiente, parecida al rábano. Cortado en láminas finas o rallado, funciona bien en ensalada. Si el amargor molesta, deja las láminas en agua con unas gotas de limón o vinagre por 15 minutos antes de usarlas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el nabo y el rábano?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Son de la misma familia, pero plantas distintas. El rábano suele ser más pequeño, redondo, de piel roja o rosada y sabor más picante. El nabo es más grande, ovalado, de piel blanca y morada, con sabor más suave y terroso. Los dos funcionan crudos, pero el nabo se usa más como verdura cocida — en sopas, purés y al horno.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El nabo engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con unas 22 calorías por 100g cocido, es una de las verduras más ligeras que existen. No engorda más que cualquier alimento comido en exceso. La combinación de fibra y alto contenido de agua da saciedad con pocas calorías. El problema sería lo que le agregas encima — mantequilla, crema, salsas pesadas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se pueden comer las hojas de nabo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y son nutritivas. Las hojas tienen más vitamina K, vitamina C, betacaroteno y calcio que la raíz misma. Salteadas con ajo y aceite de oliva saben parecido a la acelga. El sabor es más amargo que el de la raíz — si no te gusta, úsalas en un caldo, donde se suavizan al cocinarse.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se le quita el sabor amargo al nabo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cocinarlo es la forma más simple — mientras más tiempo pase al fuego, más suave queda. Para comerlo crudo, deja las láminas en agua con un poco de vinagre o limón por 15 a 20 minutos. Asarlo suaviza el amargor y le suma dulzor natural. Combinarlo con aceite de oliva, mantequilla o algo ácido también ayuda a equilibrarlo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede congelar el nabo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, pero con preparación. Congélalo cocido: blanquéalo 1 minuto en agua hirviendo, enfríalo en agua con hielo, sécalo bien y congélalo en porciones. Aguanta de 3 a 4 meses. Crudo no funciona bien — la textura queda blanda al descongelarse. Si cocinas sopa seguido, congelar porciones precocidas es un atajo útil.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El nabo tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El nabo natural, sin procesar, es naturalmente libre de gluten. Cuidado solo con productos industrializados que lo usan como ingrediente — encurtidos, sopas listas, conservas — que pueden tener contaminación cruzada según la fábrica. Revisa la etiqueta si tienes una restricción seria.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nabo: qué es, sus beneficios y cómo cocinarlo bien',
  description: 'El nabo es una verdura de raíz con pocas calorías, vitamina C y fibra que casi nadie compra en la verdulería. Qué es, sus beneficios y cómo cocinarlo bien.',
  image: 'https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-nabo',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es el nabo', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-nabo' },
  ],
}

export default function NaboEs() {
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
            <li className="breadcrumb-current" aria-current="page">Qué es el nabo</li>
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
            El nabo: la verdura que está en toda verdulería y nadie compra
          </h1>
          <p className="blog-desc">
            Está en el puesto de verduras de casi cualquier mercado, al lado de la zanahoria, sin hacer nada por ganarse un lugar en tu bolsa. Qué es el nabo en realidad, qué tiene de nutritivo, cómo prepararlo sin desperdiciarlo — y cuándo vale la pena agregarlo a la lista.
          </p>

          <div className="answer-box">
            <p>
              <strong>El nabo</strong> es una verdura de raíz de la familia de las crucíferas — la misma del brócoli, el repollo y el kale.
              Tiene piel blanca y morada, pulpa firme y blanca por dentro, y un sabor levemente amargo cuando está crudo.
              Con cerca de 22 calorías por 100g cocido, funciona bien en sopas, purés, al horno y en ensaladas.
              Se consigue todo el año en la mayoría de los mercados — y es una de las verduras más ignoradas del puesto.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Nabo fresco sobre una superficie clara — verdura de raíz con piel blanca y morada"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Contenido del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el nabo</a></li>
              <li><a href="#nabo-vs-rabano">Nabo vs. rábano: cómo diferenciarlos</a></li>
              <li><a href="#nutricion">Lo que tiene por dentro: información nutricional</a></li>
              <li><a href="#tipos">Tipos de nabo que vas a encontrar</a></li>
              <li><a href="#como-cocinar">Cómo cocinar nabo</a></li>
              <li><a href="#comprar-guardar">Cómo comprar y guardar nabo</a></li>
              <li><a href="#vale-la-pena">Vale la pena agregarlo a la lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7988009/pexels-photo-7988009.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Variedad de raíces y verduras frescas sobre fondo rústico — nabo, zanahoria y otros vegetales"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el nabo</h2>

          <p>
            El nabo (<em>Brassica rapa</em> subsp. <em>rapa</em>) es una verdura de raíz de la familia de las crucíferas.
            La misma familia del brócoli, el kale, el repollo y el rábano. Una familia con bastante amargor y mucha nutrición en partes casi iguales.
          </p>
          <p>
            La parte que se come es la raíz: redonda o levemente ovalada, con piel blanca en la base y morada en la parte de arriba, donde queda expuesta al sol.
            Por dentro es blanca, firme y crujiente — parecida al rábano, pero más grande y con sabor más terroso.
          </p>
          <p>
            El sabor cambia bastante según cómo se prepare. Crudo, es picante y algo amargo. Cocido, se suaviza.
            Al horno, se vuelve casi dulce, con los bordes ligeramente caramelizados. Es una verdura que se transforma — para mejor — con el calor.
          </p>
          <p>
            Las hojas también se comen. Sabor más marcado, parecido a la acelga o la mostaza. En algunos países se aprovechan en sopas y guisos tradicionales.
            La mayoría de la gente que compra nabo en el súper las tira sin pensarlo dos veces.
          </p>
          <p>
            El nabo no es lo mismo que el rábano, aunque en la verdulería y en las recetas se confunden todo el tiempo. Esa confusión es lo bastante común como para merecer su propia sección — sigue leyendo.
          </p>

          {/* NABO VS RÁBANO */}
          <h2 id="nabo-vs-rabano">Nabo vs. rábano: cómo diferenciarlos</h2>

          <p>
            Si alguna vez llevaste a casa lo que creías que era un nabo y resultó ser más pequeño, más picante y de otro color, ya sabes que la confusión es real. Acá está la diferencia real.
          </p>
          <p>
            El nabo pertenece al género <em>Brassica</em>; el rábano, al género <em>Raphanus</em> — son parientes lejanos, no la misma planta con otro nombre.
          </p>
          <p>
            En apariencia, el rábano es más pequeño y de piel roja o rosada. El nabo es más grande, de piel blanca con la parte superior morada, y de forma más redondeada y aplanada.
          </p>
          <p>
            En sabor, los dos son picantes cuando están tiernos. Al madurar, el rábano se vuelve más amargo y el nabo se vuelve más dulce — justo lo contrario de lo que la mayoría asume. Cocido, el rábano gana dulzor; el nabo gana un sabor a nuez y a tierra que el rábano no tiene.
          </p>
          <p>
            En tiempo de cultivo también se diferencian: el rábano está listo en unos 22 días, el nabo necesita al menos 60. Eso explica por qué el rábano es la verdura de crecimiento rápido en cualquier huerta y el nabo casi nunca lo es.
          </p>
          <p>
            Vale mencionar también al colinabo (o rutabaga), un pariente más grande y de piel cerosa, cruce natural entre el nabo y el repollo. Se usa de forma parecida en sopas y guisos, pero tarda más en cocinarse por ser más denso.
          </p>

          {/* NUTRICIÓN */}
          <h2 id="nutricion">Lo que tiene por dentro: información nutricional del nabo</h2>

          <p>
            100g de nabo cocido tiene aproximadamente:
          </p>
          <ul className="item-list">
            <li><strong>22 kcal</strong></li>
            <li><strong>5g</strong> de carbohidratos</li>
            <li><strong>1,8g</strong> de fibra</li>
            <li><strong>12mg</strong> de vitamina C (cerca del 13% de la ingesta diaria de referencia)</li>
            <li><strong>191mg</strong> de potasio</li>
            <li><strong>9mcg</strong> de folato (vitamina B9)</li>
          </ul>
          <p>
            Bajo en calorías, con fibra razonable, buena fuente de vitamina C y potasio.
            Nada extraordinario — es una verdura común, no un superalimento.
            Pero para armar una sopa o un puré nutritivo con pocas calorías, es una opción sólida.
          </p>
          <p>
            Las hojas superan a la raíz en varios nutrientes: tienen más vitamina K, vitamina C, betacaroteno y calcio.
            Si compras el nabo con las hojas, úsalas. Salteadas con ajo quedan bien.
            Tirarlas es desperdiciar nutrición que ya vino incluida sin costo extra.
          </p>
          <p>
            Una nota honesta: estos números son estimaciones basadas en bases de datos de composición nutricional comparables (USDA FoodData Central y fuentes similares). Los valores varían según el tamaño, la variedad y el método de cocción.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de nabo que vas a encontrar</h2>

          <p>
            En la mayoría de las verdulerías vas a encontrar principalmente dos variantes:
          </p>

          <h3>Nabo común (<em>Brassica rapa</em>)</h3>
          <p>
            El que la mayoría imagina al escuchar la palabra nabo. Raíz blanca y morada, ovalada o redonda, del tamaño de una manzana grande.
            Sabor levemente amargo. Funciona bien en sopa, puré, guiso y ensalada cruda.
            Es el más barato y el más fácil de conseguir.
          </p>

          <h3>Nabos baby o de ensalada</h3>
          <p>
            Más pequeños, más dulces y tiernos — suelen venderse en manojo con las hojas todavía pegadas, sobre todo en mercados de productores.
            Estos son los que vale la pena comer crudos: en láminas finas con aceite de oliva y sal, sin necesidad de cocinarlos.
            Si el nabo común no te convenció antes, esta versión es la que hay que probar antes de descartar la verdura por completo.
          </p>

          <h3>Colinabo y daikon</h3>
          <p>
            No son técnicamente nabo, pero se usan de forma tan parecida que vale la pena conocerlos — ver la comparación de arriba para más detalle. El colinabo funciona en cualquier receta donde iría el nabo, solo que tarda más en cocinarse. El daikon (rábano japonés) es más suave y aparece más en platos asiáticos y encurtidos rápidos.
          </p>

          {/* CÓMO COCINAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Verduras variadas en un puesto de mercado — zanahoria, remolacha y raíces frescas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="como-cocinar" className="img-above">Cómo cocinar nabo</h2>

          <p>
            El nabo es versátil. El error más común es probarlo crudo sin ninguna preparación y decidir que no gusta.
            Crudo es la versión más intensa de esta verdura. Con calor, cambia por completo.
          </p>

          <h3>Crudo — en ensaladas</h3>
          <p>
            Cortado en láminas finas o rallado, funciona bien en ensalada.
            El sabor amargo está más presente. Combínalo con algo ácido — vinagre, limón — para equilibrarlo.
            Un truco útil: deja las láminas en agua con unas gotas de limón o vinagre por 15 minutos antes de usarlas.
            El amargor baja bastante.
          </p>

          <h3>Cocido — en sopas y caldos</h3>
          <p>
            El uso más común, y la forma más fácil de convencer a alguien que dice que no le gusta. En sopas, caldos y guisos, el nabo se suaviza y absorbe bien el sazón del caldo.
            Córtalo en cubos medianos y agrégalo junto con zanahoria, papa y apio.
            El nabo se cocina un poco más rápido que la papa — agrégalo después si quieres texturas parecidas.
          </p>

          <h3>Al horno — la versión que convierte</h3>
          <p>
            Cubos de nabo, aceite de oliva, sal y romero. Horno a 200°C por 25 a 30 minutos.
            Los bordes quedan levemente dorados y caramelizados. El sabor se vuelve más dulce.
            Es la versión que convence a quien lo probó crudo y no le gustó.
            Queda bien al lado de pollo al horno o como parte de una bandeja de verduras asadas.
          </p>

          <h3>Puré — más ligero que la papa</h3>
          <p>
            Cocina el nabo hasta que quede blando, procésalo con mantequilla, sal y pimienta.
            El resultado se parece al puré de papa, pero más ligero.
            Una combinación que funciona bien: mitad papa, mitad nabo.
            Más cremoso, menos calórico.
          </p>

          <h3>En escabeche — encurtido rápido</h3>
          <p>
            Láminas finas en salmuera (agua, vinagre y sal) quedan listas en 24 horas en el refrigerador.
            Bueno para acompañar carnes a la parrilla, en lugar del pepinillo de siempre.
            Aguanta hasta 2 semanas en el refrigerador, en un frasco cerrado.
          </p>

          <div className="blog-inline-cta">
            <p>Menos decisiones que tomar al cocinar. <em>Mise se encarga.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* COMPRAR Y GUARDAR */}
          <h2 id="comprar-guardar">Cómo comprar y guardar nabo en casa</h2>

          <h3>Al momento de comprar</h3>
          <ul className="item-list">
            <li><strong>Raíz firme</strong> — sin partes blandas o arrugadas al tacto</li>
            <li><strong>Piel sin manchas oscuras</strong> ni moho visible</li>
            <li><strong>Tamaño mediano</strong> (como una manzana grande) — los más pequeños suelen tener sabor más suave</li>
            <li><strong>Hojas verdes y frescas</strong> indican que es reciente — hojas amarillas señalan que lleva tiempo en el puesto</li>
          </ul>
          <p>
            Prefiere los nabos más pequeños si vas a comerlos crudos. Los más grandes rinden mejor cocidos o al horno.
          </p>

          <h3>Cómo guardarlo</h3>
          <p>
            Sin las hojas, el nabo dura de 1 a 2 semanas en el cajón de verduras del refrigerador.
            Con las hojas, guarda la raíz y las hojas por separado — las hojas se marchitan más rápido que la raíz se echa a perder.
            Cortado y guardado en un recipiente cerrado, dura de 3 a 4 días.
          </p>
          <p>
            Para congelar: cocínalo, blanquéalo brevemente (1 minuto en agua hirviendo, luego directo a agua con hielo), sécalo bien y congélalo en porciones.
            Aguanta de 3 a 4 meses. Crudo no se congela bien — la textura queda blanda al descongelarse.
          </p>
          <p>
            Si tienes el hábito de llevar registro de lo que hay en tu{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            antes de ir al mercado, el nabo es un ingrediente que se olvida rápido — fácil de olvidar que lo tienes, fácil de dejar que se pase de tiempo.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena agregarlo a la lista</h2>

          <p>Depende de lo que estés tratando de resolver.</p>
          <p>
            Si quieres sumar una verdura barata y de sabor distinto a la sopa de la semana, el nabo es una buena opción.
            Barato, disponible todo el año, y hace que el caldo se sienta más interesante que solo con papa y zanahoria.
            Un kilo de nabo suele costar poco en cualquier mercado — a ese precio, probarlo no compromete el presupuesto.
          </p>
          <p>
            Si nunca lo has probado y todavía no sabes qué vas a hacer con él, el riesgo es comprarlo, no usarlo y terminar tirándolo.
            Antes de agregarlo a la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>,
            ten un uso en mente — aunque sea algo tan simple como &quot;va en la sopa del miércoles&quot;.
            Un ingrediente nuevo solo se queda en la rutina cuando tiene un destino antes de la compra.
          </p>
          <p>
            El nabo también tiene sentido cuando quieres reducir calorías sin reducir el volumen del plato.
            Cambiar la mitad de la papa de un guiso por nabo corta calorías sin cortar la sensación de plato lleno.
            No es una promesa de dieta — es solo matemática de verdura.
          </p>
          <p>
            No es un ingrediente básico de despensa. Pero si cocinas sopa con regularidad o quieres variar el guiso de la semana,
            el nabo se merece salir del anonimato del puesto al menos una vez al mes.
          </p>
          <p>
            Ya está ahí cada semana que pasas por el puesto. Nunca te habías detenido a mirarlo bien.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el nabo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El nabo es fruta o verdura?</p>
              <p className="faq-a">
                Verdura — técnicamente, la raíz de una planta herbácea. La fruta es la parte reproductiva de la planta, donde están las semillas. El nabo es la raíz, que la planta usa para almacenar energía. En la cocina entra en la misma categoría que la zanahoria, la remolacha y la papa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer nabo crudo?</p>
              <p className="faq-a">
                Sí. Crudo tiene un sabor más picante y una textura crujiente, parecida al rábano. Cortado en láminas finas o rallado, funciona bien en ensalada. Si el amargor molesta, deja las láminas en agua con jugo de limón por 15 minutos antes de usarlas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el nabo y el rábano?</p>
              <p className="faq-a">
                Son parientes, pero plantas distintas — el nabo es del género Brassica, el rábano del género Raphanus. El rábano es más pequeño y de piel roja o rosada. El nabo es más grande, de piel blanca y morada, y de sabor más terroso. Los dos funcionan crudos, pero el nabo se usa más cocido.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El nabo engorda?</p>
              <p className="faq-a">
                Con unas 22 calorías por 100g cocido, es una de las verduras más ligeras que hay. No engorda más que cualquier alimento comido en exceso. La fibra y el alto contenido de agua dan saciedad con pocas calorías. El riesgo es lo que le agregas encima — mantequilla, crema, salsas pesadas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se pueden comer las hojas de nabo?</p>
              <p className="faq-a">
                Sí — y son nutritivas. Las hojas tienen más vitamina K, vitamina C, betacaroteno y calcio que la raíz. Salteadas con ajo y aceite de oliva saben parecido a la acelga. El sabor es más amargo que el de la raíz — en un caldo, se suavizan al cocinarse.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se le quita el sabor amargo al nabo?</p>
              <p className="faq-a">
                Cocinarlo es la forma más simple — mientras más tiempo pase al fuego, más suave queda. Para comerlo crudo, deja las láminas en agua con vinagre o limón por 15 a 20 minutos. Asarlo suaviza el amargor y suma dulzor natural. Combinarlo con aceite de oliva, mantequilla o algo ácido también ayuda.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede congelar el nabo?</p>
              <p className="faq-a">
                Sí, con preparación. Congélalo cocido: blanquéalo 1 minuto en agua hirviendo, enfríalo en agua con hielo, sécalo y congélalo en porciones. Aguanta de 3 a 4 meses. Crudo no funciona bien — queda blando al descongelarse. Si cocinas sopa seguido, congelar nabo precocido es un atajo útil.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El nabo tiene gluten?</p>
              <p className="faq-a">
                No. El nabo natural, sin procesar, es naturalmente libre de gluten. Cuidado con productos industrializados que lo usan como ingrediente — encurtidos, sopas listas — que pueden tener contaminación cruzada según la fábrica. Revisa la etiqueta si tienes una restricción seria.
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
                Creador de Mise. Pasa frente al puesto de nabos cada semana desde hace años. El nabo lo mira desde ahí. Esta semana, por fin, entró a la lista.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sopa lista. Lista hecha.<br />
              <em>Vamos con Mise.</em>
            </h2>
            <p>
              Mise conecta tu despensa, tus recetas y tu lista de compras en un solo lugar.
              Sabes lo que tienes en casa — y el nabo no se pierde olvidado en el cajón del refrigerador.
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
