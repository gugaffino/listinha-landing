import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Arándano azul: beneficios, nutrición y si es mejor fresco o congelado',
  description: 'El arándano azul es una fruta pequeña y oscura, rica en antocianinas. Conoce los datos nutricionales reales, si el congelado es tan bueno como el fresco y cómo conservarlo sin que se eche a perder en tres días.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-mirtilo',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-mirtilo',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-mirtilo',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-mirtilo',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-mirtilo',
    },
  },
  openGraph: {
    title: 'Arándano azul: beneficios, nutrición y si es mejor fresco o congelado',
    description: 'El arándano azul es una fruta pequeña y oscura, rica en antocianinas. Conoce los datos nutricionales reales, si el congelado es tan bueno como el fresco y cómo conservarlo sin que se eche a perder en tres días.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-mirtilo',
    images: [
      {
        url: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Arándanos azules frescos en primer plano — fruta pequeña y oscura rica en antocianinas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arándano azul: beneficios, nutrición y si es mejor fresco o congelado',
    description: 'El arándano azul es una fruta pequeña y oscura, rica en antocianinas. Conoce los datos nutricionales reales, si el congelado es tan bueno como el fresco y cómo conservarlo sin que se eche a perder en tres días.',
    images: ['https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Arándano azul y arándano rojo son la misma fruta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El arándano azul (blueberry) es dulce, se come fresco o congelado y crece en arbustos. El arándano rojo (cranberry) es mucho más ácido, casi nunca se come crudo y se consume sobre todo seco, en jugo o en salsa. Comparten familia botánica y el mismo tipo de antioxidantes (antocianinas), pero son frutas distintas con usos distintos en la cocina.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es más saludable el arándano fresco o el congelado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Están muy parejos. Congelar rompe un poco las células de la piel, lo que puede facilitar que el cuerpo absorba ciertos antioxidantes, mientras que el fresco tiene una ligera ventaja en vitamina C que se pierde mientras más tiempo pasa en el refrigerador. Para batidos y repostería, el congelado es la opción práctica. Para comer directo, el fresco gana en textura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto duran los arándanos frescos en el refrigerador?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De 1 a 2 semanas si los mantienes secos y sin lavar hasta el momento de comerlos. Lavar toda la caja apenas la compras acelera la aparición de moho. Aparta los arándanos blandos o arrugados antes de guardar el resto — uno malo contamina al resto más rápido de lo que parece.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se pueden congelar los arándanos en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Lávalos y sécalos por completo, extiéndelos en una sola capa sobre una bandeja para que no se peguen entre sí, congélalos un par de horas y luego pásalos a una bolsa o recipiente. Así conservados, duran hasta un año sin convertirse en un bloque sólido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El arándano azul es bueno para la diabetes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tiene un índice glucémico bajo, alrededor de 40, y su fibra ayuda a moderar la respuesta glucémica. Varios estudios asocian el consumo regular con una mejor sensibilidad a la insulina. Cualquier ajuste en la dieta para manejar la diabetes debe hacerse con acompañamiento profesional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántos arándanos se pueden comer al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una porción típica es de una taza (unos 150 g), la cantidad que usa la mayoría de los estudios sobre salud cardiovascular y función cognitiva. Comer más un día cualquiera no es un problema — esa cantidad es solo la que se midió en la investigación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El arándano deshidratado tiene los mismos beneficios que el fresco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En parte. El proceso de secado concentra azúcar y calorías por gramo, y muchas marcas agregan azúcar o aceite, lo que reduce el beneficio. El deshidratado natural conserva algo de antioxidantes, pero revisa la etiqueta — solo la versión sin azúcar añadida vale la pena comparar con el fresco o el congelado.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arándano azul: beneficios, nutrición y si es mejor fresco o congelado',
  description: 'El arándano azul es una fruta pequeña y oscura, rica en antocianinas. Conoce los datos nutricionales reales, si el congelado es tan bueno como el fresco y cómo conservarlo sin que se eche a perder en tres días.',
  image: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-04',
  dateModified: '2026-08-04',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-mirtilo',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Arándano azul: beneficios', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-mirtilo' },
  ],
}

export default function ArandanoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Arándano azul: beneficios</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-04">4 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Arándano azul: nutrición, beneficios reales y fresco vs. congelado
          </h1>
          <p className="blog-desc">
            La frutita azul que aparece en cada receta de batido y en cada lista de "superalimentos". Qué hace de verdad el arándano azul por tu salud, si la bolsa congelada rinde igual que la fresca y cómo evitar que la mitad de la caja se eche a perder antes de terminarla.
          </p>

          <div className="answer-box">
            <p>
              <strong>El arándano azul</strong> es una fruta pequeña y redonda, de piel azul-morada, sabor entre dulce y ácido, con una de las mayores concentraciones de antocianinas de cualquier fruta común.
              Crece en arbustos bajos y se vende fresco, congelado y deshidratado.
              El congelado conserva prácticamente todos los nutrientes del fresco —y para la mayoría de los usos diarios, es la mejor compra.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Arándanos azules frescos en primer plano — fruta pequeña y oscura rica en antocianinas"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Lisa / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el arándano azul</a></li>
              <li><a href="#nutricion">Nutrición: qué tiene realmente por dentro</a></li>
              <li><a href="#beneficios">Beneficios — qué dice la investigación</a></li>
              <li><a href="#fresco-vs-congelado">Fresco vs. congelado vs. deshidratado</a></li>
              <li><a href="#como-conservar">Cómo conservarlo sin que se eche a perder</a></li>
              <li><a href="#como-usar">Cómo usarlo en la cocina</a></li>
              <li><a href="#vale-la-pena">Vale la pena comprarlo cada semana</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2539170/pexels-photo-2539170.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Primer plano de arándanos azules frescos mostrando el color azul-morado característico"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kelly / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el arándano azul</h2>

          <p>
            El arándano azul es una fruta pequeña, del tamaño de una canica, con piel delgada y pulpa firme. El color va del azul al morado casi negro, según la variedad y el punto de maduración. El sabor equilibra dulce y ácido —suave lo suficiente como para funcionar en casi cualquier combinación, desde la avena hasta una salsa para carne.
          </p>
          <p>
            El color azul intenso no es solo estético. Viene de las antocianinas, un grupo de antioxidantes que se concentran en la piel de la fruta. Mientras más oscuro y uniforme el color, mayor la concentración. Un arándano opaco o arrugado ya perdió parte de lo que lo hace valer la pena.
          </p>
          <p>
            A diferencia de otras frutas, no hay semilla que evitar ni parte que descartar. Lo lavas y lo comes, o lo lavas y lo cocinas. La piel es donde está la mayor parte del contenido antioxidante, así que no hay nada que pelar.
          </p>

          {/* NUTRICIÓN */}
          <h2 id="nutricion">Nutrición: qué tiene realmente por dentro</h2>

          <p>
            Cien gramos de arándano azul fresco tienen aproximadamente 57 kcal, 14 g de carbohidratos (de los cuales 10 g son azúcares naturales), 2,4 g de fibra y 0,7 g de proteína. Es una fruta de índice glucémico bajo —alrededor de 40— lo que significa una respuesta de insulina más lenta comparada con frutas como el plátano o el mango.
          </p>
          <p>
            Los micronutrientes más notables son la vitamina K (salud ósea y coagulación), una buena dosis de vitamina C, manganeso y algo de potasio. Pero ninguno de esos explica por qué el arándano azul recibe tanta atención. Eso se debe al perfil de antocianinas: tiene una de las concentraciones más altas entre las frutas comunes, y esa es la base de la mayoría de las investigaciones sobre sus beneficios.
          </p>
          <p>
            Si ya incluyes{' '}
            <a href="/es/blog/alimentos-ricos-em-magnesio">alimentos ricos en magnesio</a>
            {' '}como nueces y semillas en tu alimentación, el arándano azul suma antocianinas que esas fuentes no tienen. Son compuestos distintos con efectos complementarios.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa conectada con la lista de compras. <em>Eso es lo que hace Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* BENEFICIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7937520/pexels-photo-7937520.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Arándanos azules y moras sobre yogur en un tazón de cerámica — una forma práctica de comer la fruta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nicola Barts / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Beneficios del arándano azul: qué dice la investigación</h2>

          <p>
            El interés científico en el arándano azul viene sobre todo de las antocianinas. Los efectos más estudiados y con evidencia más consistente son estos:
          </p>

          <ul className="item-list">
            <li>
              <strong>Memoria y función cognitiva:</strong> varios estudios asocian el consumo regular con un menor declive cognitivo en adultos mayores. Las antocianinas se acumulan en tejido cerebral y parecen tener un efecto antiinflamatorio local.
            </li>
            <li>
              <strong>Salud cardiovascular:</strong> el consumo regular se asocia con menor presión arterial sistólica y mejor perfil lipídico. El efecto parece venir de cómo las antocianinas influyen en la flexibilidad de los vasos sanguíneos.
            </li>
            <li>
              <strong>Control del azúcar en sangre:</strong> el índice glucémico bajo y la fibra moderaron la respuesta de insulina en estudios con personas prediabéticas. No sustituye ningún medicamento, pero encaja en una alimentación que ayuda con el control.
            </li>
            <li>
              <strong>Salud visual:</strong> las antocianinas se acumulan en la retina y pueden reducir la fatiga visual y proteger contra el estrés oxidativo —un mecanismo parecido al de la luteína y la zeaxantina.
            </li>
          </ul>

          <p>
            Una aclaración honesta: estos beneficios aparecen con el consumo regular durante semanas, no con una caja ocasional. Y una fruta nutritiva dentro de una dieta mala no resuelve gran cosa por sí sola. El efecto es acumulativo y depende del patrón general de alimentación.
          </p>

          {/* FRESCO VS CONGELADO */}
          <h2 id="fresco-vs-congelado">Fresco vs. congelado vs. deshidratado</h2>

          <p>
            Esta es la pregunta que de verdad importa al comprar, más que cualquier etiqueta de "superalimento".
          </p>

          <h3>Fresco</h3>
          <p>
            Mejor textura, ideal para comer directo o poner sobre yogur cuando quieres que el arándano quede entero. El problema: el arándano fresco pierde calidad rápido —normalmente en 1 a 2 semanas— y el que se cosechó verde o viajó una distancia larga puede saber a poco.
          </p>

          <h3>Congelado</h3>
          <p>
            La mejor relación calidad-precio en la mayoría de las cocinas. Congelar rompe parte de las paredes celulares de la piel, lo que puede facilitar que el cuerpo absorba ciertos antioxidantes —el congelado no es una versión inferior del fresco desde el punto de vista nutricional. Para batidos, repostería y salsas, rinde exactamente igual que el fresco y dura hasta un año.
          </p>

          <h3>Deshidratado</h3>
          <p>
            Más concentrado en azúcar y calorías por gramo, y más caro por gramo que el congelado. Útil en pequeñas cantidades en granola o mezcla de frutos secos. No es para picar libremente —el azúcar se acumula rápido, y muchas marcas agregan azúcar o aceite durante el proceso. Revisa la etiqueta antes de asumir que tiene los mismos beneficios que el fresco.
          </p>

          <p>
            Para el uso diario, el congelado es la opción práctica por defecto. Guarda el fresco para las semanas en que de verdad planeas comerlo solo, y deja el deshidratado para cuando una receta lo pida específicamente.
          </p>

          {/* CÓMO CONSERVAR */}
          <h2 id="como-conservar">Cómo conservar el arándano azul sin que se eche a perder</h2>

          <p>
            El arándano azul es una de las frutas más afectadas por cómo la manejas justo después de comprarla. Unos pocos hábitos marcan la diferencia entre una semana completa de uso y una caja con moho al cuarto día.
          </p>

          <h3>Fresco, en el refrigerador</h3>
          <p>
            No lo laves hasta el momento de comerlo o cocinarlo —la humedad acelera el moho. Guarda la caja tal cual en el refrigerador y aparta los arándanos blandos o arrugados en cuanto los notes. Uno malo contamina al resto más rápido de lo que parece razonable.
          </p>

          <h3>Congelarlo en casa</h3>
          <p>
            Lava y seca los arándanos por completo, extiéndelos en una sola capa sobre una bandeja para que se congelen separados en vez de pegarse en un bloque, y luego pásalos a una bolsa o recipiente una vez sólidos. Así conservados, duran hasta un año y puedes sacar exactamente la cantidad que necesitas.
          </p>

          <p>
            Para planear recetas con arándano azul y generar la lista automáticamente, el{' '}
            <a href="/es/funcionalidades/cardapio-semanal">plan semanal</a>
            {' '}de Mise conecta cada receta con la lista de compras. No tienes que acordarte de qué comprar.
          </p>

          {/* CÓMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7937520/pexels-photo-7937520.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tazón de arándanos azules y yogur sobre la barra de la cocina, listo para comer"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nicola Barts / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Cómo usar el arándano azul en la cocina</h2>

          <p>
            El arándano azul funciona en cualquier lugar donde entre una fruta pequeña y dulce-ácida —y mejor todavía donde el color y la acidez marcan la diferencia.
          </p>

          <h3>Como snack</h3>
          <p>
            El uso más simple. Fresco, directo, sin preparación. Lo compras para el pastel del fin de semana, picas la mitad mientras guardas las compras, y terminas comprando de nuevo. Le pasa a todo el mundo.
          </p>

          <h3>Con yogur y avena</h3>
          <p>
            El uso más común. Lo ácido del arándano contrasta bien con la grasa del yogur natural. En granola o avena al desayuno, suma color y sabor sin esfuerzo. El congelado funciona bien aquí si no te importa la textura un poco más blanda después de descongelar.
          </p>

          <h3>En batidos</h3>
          <p>
            El congelado rinde igual que el fresco. Licúa con plátano, yogur o una bebida vegetal. El arándano azul deja el batido de un morado intenso. El sabor no es agresivo y combina bien con casi cualquier fruta.
          </p>

          <h3>En repostería</h3>
          <p>
            El muffin de arándano es un clásico por algo —funciona. Pastel, panqueques, cheesecake y coberturas también. El calor altera parte de las antocianinas, pero el sabor queda bien de todos modos. Por algo el muffin de arándano nunca falta en ninguna panadería.
          </p>

          <h3>En platos salados</h3>
          <p>
            Menos obvio, pero funciona mejor de lo que parece. Arándano en ensalada verde con queso de cabra y nueces es una combinación que sorprende para bien. Una salsa rápida de arándano con cerdo o pato es clásica en la cocina nórdica y europea —lo ácido de la fruta corta la grasa de la carne.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena comprarlo cada semana</h2>

          <p>
            Si ya comes fruta variada en el día a día: sí, el arándano azul entra bien. El fresco no es barato, pero el congelado es accesible y funciona en la mayoría de los usos. Tener una bolsa en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>
            {' '}—o mejor dicho, en el congelador— es más práctico que comprar fresco cada semana sin un plan claro.
          </p>
          <p>
            Si nunca lo has probado: compra una sola caja fresca primero. No es un compromiso grande. Es suficiente para saber si de verdad te gusta el sabor y si lo vas a usar. Un arándano olvidado en el refrigerador no sirve ni para un batido después de diez días.
          </p>
          <p>
            El arándano azul no es esencial. Pero es una de las pocas frutas con respaldo real de investigación, disponible todo el año en versión congelada, y con un sabor que funciona en casi cualquier contexto. La bolsa congelada resuelve la mayoría de los problemas prácticos —y la bolsa vacía en el congelador va a pasar mucho antes de lo que crees.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el arándano azul</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Arándano azul y arándano rojo son la misma fruta?</p>
              <p className="faq-a">
                No. El arándano azul es dulce, se come fresco o congelado y crece en arbustos. El arándano rojo (cranberry) es mucho más ácido, casi nunca se come crudo y se consume sobre todo seco, en jugo o en salsa. Comparten familia botánica y el mismo tipo de antioxidantes, pero son frutas distintas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Es más saludable el arándano fresco o el congelado?</p>
              <p className="faq-a">
                Están muy parejos. Congelar rompe un poco las células de la piel, lo que puede facilitar la absorción de ciertos antioxidantes, mientras que el fresco tiene una ligera ventaja en vitamina C que se pierde con el tiempo en el refrigerador. Congelado es lo práctico para batidos y repostería; fresco gana en textura para comer directo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto duran los arándanos frescos en el refrigerador?</p>
              <p className="faq-a">
                De 1 a 2 semanas si los mantienes secos y sin lavar hasta el momento de comerlos. Lavar toda la caja apenas la compras acelera el moho. Aparta los blandos o arrugados antes de guardar el resto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se pueden congelar los arándanos en casa?</p>
              <p className="faq-a">
                Sí. Lávalos y sécalos por completo, extiéndelos en una sola capa sobre una bandeja para que no se peguen, congélalos un par de horas y pásalos a una bolsa o recipiente. Duran hasta un año así.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El arándano azul es bueno para la diabetes?</p>
              <p className="faq-a">
                Tiene un índice glucémico bajo, alrededor de 40, y su fibra ayuda a moderar la respuesta glucémica. Varios estudios asocian el consumo regular con mejor sensibilidad a la insulina. Cualquier ajuste en la dieta debe hacerse con acompañamiento profesional.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuántos arándanos se pueden comer al día?</p>
              <p className="faq-a">
                Una porción típica es de una taza (unos 150 g), la cantidad usada en la mayoría de los estudios sobre salud cardiovascular y función cognitiva. Comer más un día cualquiera no es un problema.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El arándano deshidratado tiene los mismos beneficios que el fresco?</p>
              <p className="faq-a">
                En parte. El secado concentra azúcar y calorías, y muchas marcas agregan azúcar o aceite, lo que reduce el beneficio. El deshidratado natural conserva algo de antioxidantes, pero revisa siempre la etiqueta.
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
                Creador de Mise. Compró arándanos frescos para un pastel del fin de semana. Se los comió todos directo de la caja en dos días. El pastel quedó para la semana siguiente.
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
              El arándano entra en la lista cuando lo necesitas —y desaparece de la despensa solo cuando de verdad lo usaste.
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
