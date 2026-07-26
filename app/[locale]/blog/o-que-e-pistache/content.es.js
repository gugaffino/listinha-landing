import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Pistacho: qué es, tipos y si vale la pena comprarlo',
  description: 'El pistacho es un fruto seco de cáscara dura con centro verde y sabor único. Qué es, los tipos que encuentras en tiendas, dónde comprarlo y si vale el precio.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pistache',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pistache',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pistache',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pistache',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pistache',
    },
  },
  openGraph: {
    title: 'Pistacho: qué es, tipos y si vale la pena comprarlo',
    description: 'El pistacho es un fruto seco de cáscara dura con centro verde y sabor único. Qué es, los tipos que encuentras en tiendas, dónde comprarlo y si vale el precio.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pistache',
    images: [
      {
        url: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pistachos frescos con la cáscara entreabierta mostrando el centro verde — primer plano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pistacho: qué es, tipos y si vale la pena comprarlo',
    description: 'El pistacho es un fruto seco de cáscara dura con centro verde y sabor único. Qué es, los tipos que encuentras en tiendas, dónde comprarlo y si vale el precio.',
    images: ['https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El pistacho es una fruta o un fruto seco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Técnicamente, el pistacho es la semilla de un fruto. El árbol produce una drupa —un fruto carnoso con hueso duro— y lo que comemos es la semilla dentro de ese hueso. En la cocina y en el mercado, sin embargo, se clasifica junto con los frutos secos, porque su perfil nutricional y su uso son los mismos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pistacho engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es calórico, como todo fruto seco: la mayor parte de su energía viene de la grasa. Pero es grasa insaturada, del mismo tipo que la del aceite de oliva. En porciones razonables (un puñado, unos 30 g), el pistacho es un snack más nutritivo y más saciante que la mayoría de los ultraprocesados. El problema suele ser comerse la bolsa entera de una sentada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántos pistachos se pueden comer al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una porción estándar de frutos secos es de unos 30 g —un puñado cerrado, o unos 40 pistachos sin cáscara. Es suficiente para aprovechar los nutrientes sin pasarte de calorías. Si los comes como snack entre comidas, ese es un buen límite.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pistacho salado es peor que el natural?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El pistacho salado tiene más sodio, lo que puede ser un problema si controlas la presión arterial. En el resto de nutrientes, son prácticamente iguales. Para cocinar —recetas dulces o saladas—, el sin sal es más versátil porque tú controlas el condimento. Para comer como snack, el salado es cuestión de gusto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se conserva el pistacho en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con cáscara, en un frasco cerrado y a temperatura ambiente, dura meses sin perder calidad. Sin cáscara se oxida más rápido: guárdalo en un frasco hermético y, si va a durar más de un mes, mételo al refrigerador. Nunca lo dejes expuesto al aire ni en la bolsa abierta por mucho tiempo, porque se pone rancio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pistacho tiene gluten o lactosa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El pistacho puro, natural, no tiene gluten ni lactosa. Pero las versiones procesadas —salado, condimentado, en mezclas— pueden tener contaminación cruzada con gluten según la fábrica. Productos como la pasta de pistacho o el helado de pistacho suelen llevar lactosa si están hechos con leche. Revisa siempre la etiqueta.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pistacho: qué es, tipos y si vale la pena comprarlo',
  description: 'El pistacho es un fruto seco de cáscara dura con centro verde y sabor único. Qué es, los tipos que encuentras en tiendas, dónde comprarlo y si vale el precio.',
  image: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-pistache',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es el pistacho', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pistache' },
  ],
}

export default function PistachoEs() {
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
            <li><a href="/">Inicio</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Qué es el pistacho</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-26">26 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Pistacho: guía de origen, tipos y cómo elegirlo bien
          </h1>
          <p className="blog-desc">
            Ese fruto seco verde que aparece en helados, pastas y en todas partes desde hace unos años. Pero qué es el pistacho en realidad, qué tipos existen y —lo más importante— cómo elegir el correcto sin pagar de más.
          </p>

          <div className="answer-box">
            <p>
              <strong>El pistacho</strong> es la semilla del árbol <em>Pistacia vera</em>, originario de Medio Oriente y Asia Central.
              Tiene una cáscara dura de color beige rosado que se abre sola cuando madura, dejando ver un centro verde característico.
              Es uno de los frutos secos con más proteína y grasas insaturadas —y uno de los más caros en el mercado latinoamericano, porque casi todo el que se vende es importado.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pistachos frescos con la cáscara entreabierta mostrando el centro verde — primer plano"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Engin Akyurt / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el pistacho</a></li>
              <li><a href="#origen-y-precio">De dónde viene y por qué es tan caro</a></li>
              <li><a href="#nutrientes">Qué tiene por dentro: los nutrientes</a></li>
              <li><a href="#tipos">Tipos de pistacho que vas a encontrar</a></li>
              <li><a href="#como-usar">Cómo usar el pistacho en la cocina</a></li>
              <li><a href="#donde-comprar">Dónde comprarlo y cuánto cuesta</a></li>
              <li><a href="#vale-la-pena">Vale la pena ponerlo en la lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4931455/pexels-photo-4931455.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pistachos salados con cáscara en primer plano, mostrando textura y color natural"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anton Uniqueton / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el pistacho</h2>

          <p>
            El pistacho (<em>Pistacia vera</em>) es un fruto seco de cáscara dura que se abre solo cuando está maduro —ese detalle es lo que distingue un pistacho de buena calidad de uno cosechado antes de tiempo. La cáscara queda apenas entreabierta. Si está completamente cerrada, lo cosecharon muy pronto.
          </p>
          <p>
            Técnicamente, lo que comemos es una semilla, no un fruto seco en el sentido estricto. El árbol produce un pequeño fruto carnoso (una drupa) y el pistacho está dentro del hueso de ese fruto. En la cocina y en el mercado, sin embargo, entra en la misma categoría que la almendra, el anacardo o la nuez.
          </p>
          <p>
            El centro verde es su rasgo más reconocible. El color viene de la clorofila —mientras más verde, más fresco y más rico en antioxidantes. Los pistachos que se ven más amarillos suelen ser más viejos o de menor calidad.
          </p>
          <p>
            El sabor es suave, ligeramente dulce y con un cuerpo que funciona tanto en recetas dulces como saladas. Por eso aparece en helado, en pesto, en yogur y en granola —a veces todo en la misma semana.
          </p>

          {/* ORIGEN Y PRECIO */}
          <h2 id="origen-y-precio">De dónde viene y por qué es tan caro</h2>

          <p>
            El árbol del pistacho es originario de Medio Oriente —Irán, Turquía, Siria y Afganistán son su cuna histórica. Hoy los principales productores del mundo son Irán y Estados Unidos, sobre todo California. En Latinoamérica casi no hay producción comercial: la gran mayoría del pistacho que ves en tiendas es importado.
          </p>
          <p>
            Y es caro por razones concretas. El árbol tarda entre 7 y 10 años en empezar a producir de forma comercial. Ya adulto, da una buena cosecha un año y descansa al siguiente —ese ciclo bianual reduce el volumen disponible cada temporada. La cosecha es en gran parte manual y muy sensible al clima. Y Irán, uno de los principales proveedores históricos, enfrenta restricciones comerciales que afectan el precio global.
          </p>
          <p>
            El resultado: el pistacho es caro en todo el mundo, y en Latinoamérica todavía más por los aranceles de importación y el tipo de cambio. Por eso se vende en bolsas pequeñas, y por eso el precio por kilo parece exagerado hasta que lo comparas con el de la almendra importada en el mismo pasillo.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">Qué tiene por dentro: los nutrientes del pistacho</h2>

          <p>
            Una porción de 30 g de pistacho sin cáscara (unas 40 unidades) tiene aproximadamente 160 calorías, 6 g de proteína, 13 g de grasa y 3 g de fibra. Para un fruto seco, ese porcentaje de proteína es alto —supera a la almendra y al anacardo en la misma cantidad.
          </p>
          <p>
            Las grasas son mayoritariamente insaturadas: monoinsaturadas (el mismo tipo que las del aceite de oliva) y poliinsaturadas. Ese perfil está asociado a menor riesgo cardiovascular con un consumo regular y moderado.
          </p>
          <p>
            El pistacho también aporta luteína y zeaxantina, dos carotenoides ligados a la salud visual. Es uno de los pocos alimentos de origen vegetal con una cantidad relevante de ambos. Además, es una buena fuente de vitamina B6, potasio y manganeso.
          </p>
          <p>
            Una nota honesta: el pistacho es nutritivo, pero no es un alimento milagroso. El beneficio viene del consumo regular en cantidad razonable, dentro de una alimentación variada. No cambia nada si es lo único saludable que comiste en la semana.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/11842170/pexels-photo-11842170.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pistachos en un tazón verde rústico sobre una superficie de mármol — listos para una receta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: eat kubba / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de pistacho que vas a encontrar</h2>

          <p>
            El pistacho se vende en varios formatos. Saber la diferencia evita comprar el que no sirve para tu receta —y pagar más de lo necesario.
          </p>

          <h3>Con cáscara</h3>
          <p>
            El más común en las bolsas de snack. La cáscara protege el interior y alarga la vida útil. Es más barato por bolsa, pero parte del peso es cáscara —estás comprando menos pistacho real de lo que parece. Ideal para comer directo, a puño.
          </p>

          <h3>Sin cáscara</h3>
          <p>
            Más caro por bolsa, pero mucho más práctico para cocinar. Si la idea es usarlo en recetas, granola o yogur, el sin cáscara te ahorra trabajo y ocupa menos espacio en la despensa. Es el formato ideal si lo vas a usar seguido en la cocina.
          </p>

          <h3>Natural (crudo)</h3>
          <p>
            Sin tostar, sin sal. Es el más versátil: tú controlas el proceso. Puedes tostarlo en casa en un sartén sin aceite —3 a 5 minutos a fuego medio, moviendo todo el tiempo— y condimentarlo como quieras. El sabor se profundiza bastante después de tostado.
          </p>

          <h3>Tostado</h3>
          <p>
            Ya pasó por el proceso de tostado. Sabor más intenso, textura más crocante. Bueno como snack y para terminar platos. Revisa si fue tostado en seco o con aceite —el tostado en seco conserva mejor el perfil nutricional.
          </p>

          <h3>Salado</h3>
          <p>
            El formato que más se vende como snack. Práctico, pero con más sodio. No es la mejor opción para recetas dulces, donde la sal desequilibra el resultado. Para picar frente a la pantalla, en cambio, es la versión que se acaba más rápido.
          </p>

          <h3>Pasta y picado</h3>
          <p>
            La pasta de pistacho se volvió un producto de repostería en los últimos años —aparece en rellenos, cremas y coberturas. El picado grueso es perfecto para terminar helado, pasteles y platos como el baklava. Ambos suelen encontrarse en tiendas especializadas o en línea.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10060931/pexels-photo-10060931.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pistachos frescos esparcidos sobre una superficie blanca, listos para una receta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: SC Studio / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Cómo usar el pistacho en la cocina</h2>

          <p>
            La regla práctica: el pistacho funciona donde funciona la almendra, pero con un sabor más marcado. El verde también hace trabajo visual —terminar un plato con pistacho picado lo hace ver terminado casi sin esfuerzo.
          </p>

          <h3>Como snack</h3>
          <p>
            El uso más simple. Un puñado con cáscara es más satisfactorio de lo que parece —la cáscara te obliga a ir más despacio, lo que reduce cuánto comes. Compras la bolsa para una receta, te comes la mitad antes de empezar a cocinar, y terminas comprando otra. Le pasa a todo el mundo.
          </p>

          <h3>En el desayuno</h3>
          <p>
            Funciona bien picado grueso sobre yogur natural con miel, o mezclado en la granola. Suma crocancia, proteína y un sabor distinto al de la mezcla de nueces de siempre.
          </p>

          <h3>En postres</h3>
          <p>
            Helado, pastel, brownie, mousse, baklava. El pistacho tiene sabor suficiente para destacar incluso junto a ingredientes intensos como el chocolate. La pasta de pistacho funciona como la crema de maní —en rellenos, coberturas y cremas.
          </p>

          <h3>En platos salados</h3>
          <p>
            Menos obvio, pero una de las mejores formas de usarlo. El pesto de pistacho (en lugar del piñón) va bien con pastas y pollo. El pistacho picado como costra para pescado o pollo al horno es rápido y transforma el plato. En el cuscús marroquí y en platos árabes con cordero, es un ingrediente tradicional, no una moda reciente.
          </p>

          <h3>Cómo tostarlo en casa</h3>
          <p>
            Si compraste el natural, tuéstalo antes de usarlo: sartén sin aceite, fuego medio, 3 a 5 minutos moviendo. El aroma cambia por completo. No dejes que se oscurezca —el pistacho quemado tiene un amargor que no se va.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* DONDE COMPRAR */}
          <h2 id="donde-comprar">Dónde comprar pistacho y cuánto cuesta</h2>

          <p>
            El precio de los frutos secos varía bastante según dónde compres —más de lo que la mayoría se da cuenta. El mismo pistacho puede costar el doble dependiendo del canal.
          </p>

          <h3>Supermercado</h3>
          <p>
            La opción más práctica. La variedad suele ser limitada —generalmente pistacho con cáscara y salado, en bolsas de 100 g a 200 g. El precio por kilo es más alto que en otros canales, pero compras sin esperar ni pagar envío.
          </p>

          <h3>Tienda naturista o a granel</h3>
          <p>
            Por lo general más barato por kilo. Compras la cantidad exacta que necesitas, sin pagar por el empaque. Bueno si lo usas seguido y quieres probarlo antes de comprar en mayor cantidad. Busca en la sección de frutos secos.
          </p>

          <h3>En línea</h3>
          <p>
            La mayor variedad de formatos —natural, sin cáscara, picado, pasta— está en línea, en sitios como MercadoLibre o tiendas especializadas. Compara el peso <em>neto</em> antes de comparar precios: bolsas de tamaños distintos dificultan la comparación directa. El envío suele hacer que no valga la pena comprar poco, así que conviene juntar una lista más grande antes de pedir.
          </p>

          <h3>Mayoreo y tiendas de repostería</h3>
          <p>
            Si usas pistacho seguido en recetas, comprar en mayor cantidad al mayoreo suele bajar bastante el costo por kilo. Las tiendas especializadas en repostería tienen picado y pasta de pistacho en presentaciones más grandes.
          </p>

          <p>
            Un consejo simple: cuando encuentres pistacho a buen precio, anota dónde. El precio de los frutos secos cambia con el tipo de cambio y la temporada —lo que estaba barato en marzo puede no estarlo en julio. Guardar el proveedor correcto es tan útil como tener a mano tu{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena ponerlo en la lista</h2>

          <p>Depende de qué vayas a hacer con él.</p>
          <p>
            Si ya tienes el hábito de comer frutos secos —almendra, nuez, anacardo— el pistacho entra bien como variación. Buen perfil nutricional, sabor distinto, fácil de sumar a lo que ya comes. La{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            lo aguanta bien: dura meses en un frasco cerrado.
          </p>
          <p>
            Si la idea es usarlo en recetas, cómpralo sin cáscara y sin sal —vas a tener más control y de verdad lo vas a usar. El pistacho con cáscara y salado tiende a convertirse en snack antes de llegar a la receta.
          </p>
          <p>
            Si la idea es comprarlo porque es el ingrediente de moda y no tienes muy claro para qué, probablemente termine olvidado en un frasco. Un ingrediente nuevo solo entra en la rutina cuando tiene un uso definido antes de la compra. Es distinto a comprar almendra sin saber por qué —todo el mundo sabe qué hacer con la almendra.
          </p>
          <p>
            No es un básico de despensa como el aceite de oliva o el ajo —pero si cocinas con variedad, o ya tienes al menos un uso en mente, vale la pena sumarlo a la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>
            {' '}cuando el precio esté bueno.
          </p>
          <p>
            Pistacho en la lista. Solo que no te lo acabes antes de llegar a casa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el pistacho</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El pistacho es una fruta o un fruto seco?</p>
              <p className="faq-a">
                Técnicamente es la semilla de un fruto —el árbol produce una drupa con hueso duro, y el pistacho es la semilla dentro de ese hueso. En la cocina y en el mercado se clasifica junto con los frutos secos, porque su perfil nutricional y su uso son los mismos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pistacho engorda?</p>
              <p className="faq-a">
                Es calórico como todo fruto seco —la mayor parte de la energía viene de la grasa, que es insaturada (del mismo tipo que el aceite de oliva). En porciones razonables (unos 30 g), es un snack más nutritivo y saciante que la mayoría de los ultraprocesados. El problema suele ser comerse la bolsa entera.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuántos pistachos se pueden comer al día?</p>
              <p className="faq-a">
                Una porción estándar de frutos secos es de unos 30 g —un puñado cerrado, unos 40 pistachos sin cáscara. Es suficiente para aprovechar los nutrientes sin pasarte de calorías. Como snack entre comidas, ese es un buen límite.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pistacho salado es peor que el natural?</p>
              <p className="faq-a">
                Tiene más sodio, lo que puede ser un problema si controlas la presión arterial. En el resto de nutrientes son prácticamente iguales. Para recetas, prefiere el sin sal —tú controlas el condimento. Para snack directo, es cuestión de gusto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se conserva el pistacho en casa?</p>
              <p className="faq-a">
                Con cáscara, en un frasco cerrado a temperatura ambiente, dura meses. Sin cáscara, guárdalo en un frasco hermético —si va a durar más de un mes, mételo al refrigerador. Expuesto al aire, se pone rancio. Nunca lo dejes en la bolsa abierta por mucho tiempo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pistacho tiene gluten o lactosa?</p>
              <p className="faq-a">
                El pistacho puro no tiene gluten ni lactosa. Pero las versiones procesadas —condimentadas, en mezclas— pueden tener contaminación cruzada con gluten según la fábrica. La pasta y el helado de pistacho suelen llevar lactosa si están hechos con leche. Revisa siempre la etiqueta.
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
                Creador de Mise. Compró pistacho sin cáscara para hacer pesto, se comió la mitad en el camino de vuelta a casa. El pesto quedó para la semana siguiente.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabes lo que hay en la despensa.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Conecta despensa, recetas y lista de compras en un solo lugar.
              Compras lo que realmente vas a usar —y el pistacho no desaparece antes de volverse receta.
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
