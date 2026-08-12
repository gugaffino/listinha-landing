import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Semillas de chía: ¿tienen proteína? Beneficios y cómo usarlas',
  description: 'La chía tiene fibra, omega-3 y una proteína vegetal casi completa. Conoce las cifras reales, cómo funciona el gel y cuándo conviene más que la linaza.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chia',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chia',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-chia',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chia',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chia',
    },
  },
  openGraph: {
    title: 'Semillas de chía: ¿tienen proteína? Beneficios y cómo usarlas',
    description: 'La chía tiene fibra, omega-3 y una proteína vegetal casi completa. Conoce las cifras reales, cómo funciona el gel y cuándo conviene más que la linaza.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chia',
    images: [
      {
        url: 'https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Semillas de chía negras en primer plano sobre superficie blanca — textura detallada de la semilla',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semillas de chía: ¿tienen proteína? Beneficios y cómo usarlas',
    description: 'La chía tiene fibra, omega-3 y una proteína vegetal casi completa. Conoce las cifras reales, cómo funciona el gel y cuándo conviene más que la linaza.',
    images: ['https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La chía engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La chía es calórica — 100g tienen cerca de 486 kcal, la mayoría de grasa. Pero una porción típica es de 1-2 cucharadas soperas (15-30g), lo que equivale a unas 70-140 kcal. Lo que ayuda a controlar el peso es la fibra: el gel que la chía forma en el estómago aumenta la saciedad y ralentiza la digestión. En cantidades razonables dentro de una dieta equilibrada, la chía no engorda.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánta chía se puede comer al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La dosis más estudiada es de 15-30g al día — 1-2 cucharadas soperas. Por encima de eso, el exceso de fibra puede causar molestias digestivas, sobre todo si no tomas suficiente agua. Empieza con 1 cucharada y observa cómo reacciona tu cuerpo antes de aumentar la cantidad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer chía seca o hay que hidratarla primero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se puede comer seca, pero hidratada es más segura. La chía seca absorbe líquido en el estómago —si no tomas suficiente agua junto con ella, puede causar molestias. Hidratada, la fibra ya está activada y la absorción de nutrientes es más eficiente. Para una cucharada sobre el yogur no hay problema. Para dosis mayores, mejor hidratarla antes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La chía tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La chía pura no tiene gluten. Puede haber contaminación cruzada si se procesa en la misma línea que el trigo u otros cereales. Si tienes enfermedad celíaca o sensibilidad severa al gluten, busca el sello "libre de gluten" en la etiqueta. Para la mayoría de las personas, no es un problema.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La chía y la linaza son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Son semillas distintas con perfiles nutricionales parecidos pero usos diferentes. Chía: no necesita molienda, forma gel con líquido, sabor neutro. Linaza: hay que molerla para aprovechar los nutrientes (entera, pasa casi sin digerirse), tiene sabor más parecido a la nuez. Para batidos y pudines, la chía es más práctica. Para pan y bizcochos, la linaza molida aporta más carácter.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La chía pierde nutrientes al cocinarse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parte de los nutrientes sensibles al calor, como algunos antioxidantes, puede disminuir con la cocción. El omega-3 (ALA) también es más estable en preparaciones frías. Para aprovecharla mejor, la chía funciona bien sin calor: en pudín, yogur, batidos y ensaladas. Pero usada en bizcochos y panqueques, sigue aportando fibra y minerales —no es una pérdida total.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Semillas de chía: ¿tienen proteína? Beneficios y cómo usarlas',
  description: 'La chía tiene fibra, omega-3 y una proteína vegetal casi completa. Conoce las cifras reales, cómo funciona el gel y cuándo conviene más que la linaza.',
  image: 'https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-29',
  dateModified: '2026-08-12',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-chia',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Semillas de chía', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chia' },
  ],
}

export default function SemillasDeChiaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Semillas de chía</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-29">29 may. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Chía: qué es, si realmente tiene proteína y cómo usarla cada día
          </h1>
          <p className="blog-desc">
            Pequeña, sin sabor y con un truco de hidratación que sorprende a quien no lo conoce. La chía ya es parte fija del yogur y los batidos en toda Latinoamérica, pero mucha gente todavía no tiene claro qué es realmente, si aporta proteína de verdad o en qué se diferencia de la linaza. Este artículo responde todo eso.
          </p>

          <div className="answer-box">
            <p>
              <strong>La chía</strong> (<em>Salvia hispanica</em>) es una semilla pequeña y ovalada, originaria de México y Guatemala, con un sabor prácticamente neutro.
              Por cada 100g tiene cerca de 17g de proteína, 34g de fibra y 17g de omega-3 vegetal —y es una de las pocas proteínas vegetales que aporta los nueve aminoácidos esenciales.
              Su característica más particular: en contacto con líquido, absorbe hasta 12 veces su propio peso y forma un gel de fibra soluble, responsable de la saciedad que la gente le atribuye.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Semillas de chía negras en primer plano sobre superficie blanca — textura detallada de la semilla"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Jubair Bin Iqbal / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la chía</a></li>
              <li><a href="#proteina">Chía y proteína: las cifras reales</a></li>
              <li><a href="#para-que-sirve">Para qué sirve</a></li>
              <li><a href="#chia-vs-linaza">Chía vs. linaza</a></li>
              <li><a href="#como-usar">Cómo usarla en la cocina</a></li>
              <li><a href="#comprar-guardar">Cómo comprarla y guardarla</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7771987/pexels-photo-7771987.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Semillas de chía en una cuchara de madera sobre la mesa — granos pequeños de color oscuro"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la chía</h2>

          <p>
            La chía (<em>Salvia hispanica</em>) es una semilla de la familia de la salvia, cultivada desde hace miles de años en México y Guatemala. Los aztecas la llamaban "chía" —que en maya significa fuerza o energía— y la usaban como combustible para marchas largas y batallas. La planta produce semillas pequeñas y ovaladas, de color gris, negro o blanco según la variedad.
          </p>
          <p>
            El sabor es neutro. Casi imperceptible en cualquier preparación. Eso es ventaja y limitación al mismo tiempo: entra en cualquier receta sin alterar el sabor, pero tampoco aporta ninguna experiencia propia. Nadie come chía por el sabor.
          </p>
          <p>
            Lo que hace única a la chía es su comportamiento con el líquido. Las semillas tienen una capa externa de fibra soluble (mucílago) que absorbe agua muy rápido —hasta 12 veces su propio peso. El resultado es un gel que envuelve cada semilla. Ese gel no es un truco culinario: es fibra pura, y es responsable de buena parte de los efectos de saciedad y digestión que la gente reporta.
          </p>
          <p>
            Llegó a los supermercados de la región hace poco más de una década, impulsada por la etiqueta de "superalimento". Esa etiqueta exagera —ningún alimento resuelve todo por sí solo. Pero el perfil nutricional de la chía sí es realmente sólido, en especial comparado con otros granos y semillas.
          </p>

          {/* PROTEÍNA */}
          <h2 id="proteina">Chía y proteína: las cifras reales</h2>

          <p>
            Sí, la chía tiene proteína —y es más completa que la de la mayoría de los alimentos vegetales. Por cada 100g aporta cerca de 17g de proteína, y contiene los nueve aminoácidos esenciales, lo que la coloca en el pequeño grupo de proteínas vegetales completas junto a la quinoa y la soya.
          </p>
          <p>
            El detalle importante: 100g de chía es mucho para comer de una sola vez. Una porción real es de 1-2 cucharadas soperas (15-30g), lo que entrega entre 2,5 y 5g de proteína. Suficiente para sumar a la ingesta diaria, pero lejos de ser la fuente principal de proteína de una comida. La chía complementa —no reemplaza el pollo, el huevo, los frijoles o el tofu.
          </p>
          <p>
            Lo que realmente destaca son otros dos nutrientes. Primero, la fibra: 34g por cada 100g. Más que la avena (10g) y más que la linaza (27g). Con solo 2 cucharadas ya obtienes cerca de 10g de fibra —un tercio de la recomendación diaria para un adulto. Segundo, el omega-3: 17g por cada 100g, casi todo en forma de ALA (ácido alfa-linolénico), la versión vegetal del omega-3.
          </p>
          <p>
            Sobre el omega-3 hay un matiz importante. El ALA tiene que ser convertido por el cuerpo en EPA y DHA para tener los mismos efectos que el omega-3 del pescado. Esa conversión es poco eficiente —se estima que solo entre 5% y 15% del ALA se convierte en EPA, y menos del 1% en DHA. La chía es un buen refuerzo para una dieta baja en pescado, pero no reemplaza el omega-3 marino para quien necesita dosis terapéuticas.
          </p>
          <p>
            La chía también es una buena fuente de calcio (631mg por cada 100g —más que la leche), magnesio, fósforo y hierro. Los fitatos presentes en la semilla reducen la biodisponibilidad de esos minerales, pero la cantidad bruta es alta y una parte importante sí llega a absorberse.
          </p>

          {/* PARA QUÉ SIRVE */}
          <h2 id="para-que-sirve">Para qué sirve: los beneficios con base real</h2>

          <p>
            La lista de beneficios que se le atribuyen a la chía es larga. Algunos tienen evidencia sólida. Otros son ilusión bien empaquetada. Estos son los que sí valen la pena:
          </p>
          <p>
            <strong>Saciedad.</strong> El gel que la chía forma en el estómago retrasa el vaciado gástrico. Tarda más en aparecer el hambre después de comer. Estudios con personas que agregaron chía al desayuno mostraron menos apetito antes del almuerzo. El efecto es real pero moderado —no es una solución para bajar de peso, es un apoyo.
          </p>
          <p>
            <strong>Digestión.</strong> La fibra soluble de la chía alimenta las bacterias del intestino grueso (efecto prebiótico) y ayuda a la regularidad intestinal. Pero hay una condición: el agua. Sin suficiente hidratación, la chía puede tener el efecto contrario —estreñimiento, porque absorbe el líquido disponible en el intestino. Regla práctica: toma al menos un vaso de agua después de comer chía seca.
          </p>
          <p>
            <strong>Glucosa en sangre.</strong> El gel ralentiza la absorción de carbohidratos, lo que ayuda a evitar picos de glucosa después de comer. Especialmente útil para personas con resistencia a la insulina o diabetes tipo 2. El efecto es más notorio cuando la chía se consume junto con la comida o justo antes.
          </p>
          <p>
            Lo que la chía no hace: no adelgaza por sí sola, no cura enfermedades y no reemplaza una alimentación variada. El "superalimento" cumple lo que la fibra cumple. Nada más que eso.
          </p>

          {/* CHÍA VS LINAZA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5150558/pexels-photo-5150558.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pudín de chía con frutas y granola en un frasco de vidrio — desayuno saludable"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: ROMAN ODINTSOV / Pexels</p>
          </div>

          <h2 id="chia-vs-linaza" className="img-above">Chía vs. linaza: cuál va en tu lista</h2>

          <p>
            Las dos semillas están una junto a la otra en el mismo pasillo del súper, tienen perfiles nutricionales parecidos y generan la misma duda. La diferencia práctica es de uso —no de cuál es mejor.
          </p>
          <p>
            <strong>Chía:</strong> no necesita molienda, forma gel de forma automática, sabor neutro. Funciona directo en el yogur, el batido y el pudín. Hidratación instantánea. Versátil sin esfuerzo.
          </p>
          <p>
            <strong>Linaza:</strong> hay que molerla para aprovechar los nutrientes —entera, la cáscara pasa por el intestino casi sin digerirse. Tiene un sabor ligeramente parecido a la nuez. Funciona mejor en pan, bizcochos y aderezos de ensalada, donde la textura y el sabor sí aportan.
          </p>
          <p>
            Si solo vas a elegir una: la chía es más práctica en el día a día. La espolvoreas, la hidratas y listo. Sin molinillo, sin preparación extra. Si ya usas linaza y quieres variar, las dos se complementan bien —y{' '}
            <a href="/es/blog/para-que-serve-oleo-de-linhaca">el aceite de linaza</a>{' '}
            es otra forma de obtener el omega-3 sin la textura de la semilla.
          </p>
          <p>
            En términos nutricionales, la chía tiene más fibra y más calcio. La linaza tiene más lignanos (compuestos con actividad estrogénica leve) y un sabor que sí le suma a la receta. La elección es de conveniencia, no de superioridad técnica.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar chía en la cocina</h2>

          <p>
            La versatilidad de la chía es real, aunque mucha gente nunca pasa de espolvorearla sobre el yogur —y está perfecto, no hay nada malo en eso. Para quien quiere explorar más, estos son los formatos que funcionan:
          </p>
          <p>
            <strong>Gel de chía.</strong> 1 cucharada sopera de chía + 3 cucharadas soperas de agua. Mezcla y espera 15-20 minutos. El resultado es un gel translúcido que reemplaza el huevo en recetas veganas (1 cucharada de gel = 1 huevo, en bizcochos y panqueques) o funciona como espesante en batidos y sopas. Rinde bastante y se guarda en el refrigerador hasta 5 días.
          </p>
          <p>
            <strong>Pudín de chía.</strong> 3 cucharadas soperas de chía + 1 taza de leche (vegetal o entera). Mezcla bien, espera 5 minutos, mezcla otra vez para que no se apelmace, y refrigera al menos 4 horas —o toda la noche. Al servir, agrega fruta, granola, miel, o cómelo así solo. Textura firme, tipo mousse. Simple, económico y se conserva bien en el refrigerador.
          </p>
          <p>
            <strong>Espolvoreada directo.</strong> Sobre yogur, ensalada de frutas, avena, batidos. Sin preparación. Funciona con 1-2 cucharadas sin hidratar antes, porque la cantidad pequeña no causa ningún problema —sobre todo si ya estás tomando líquido junto con ella.
          </p>
          <p>
            <strong>En recetas de horno.</strong> Pan, bizcocho, muffins, panqueques —se agrega 1-2 cucharadas por receta, junto con los ingredientes secos. Suma fibra y nutrientes sin cambiar el sabor. No reemplaza la harina en la estructura, pero la complementa.
          </p>
          <p>
            Una advertencia de textura: la chía seca en ensaladas frescas ya aderezadas puede ablandar las hojas si pasa mucho tiempo en contacto. Si vas a mezclarla, agrégala justo antes de servir.
          </p>

          {/* COMPRAR Y GUARDAR */}
          <h2 id="comprar-guardar">Cómo comprarla y guardarla</h2>

          <p>
            La chía está disponible en casi cualquier supermercado, en la sección de cereales, granos o productos naturales. La variedad en tiendas naturistas suele ser mayor, pero la calidad del producto estándar de supermercado es suficiente para el uso diario.
          </p>
          <p>
            Precio típico: entre 4.000 y 8.000 pesos colombianos (o el equivalente local) por 200-250g en supermercado, aunque el precio varía bastante según el país. Comprando en presentaciones más grandes (500g o 1kg) al por mayor o en línea, el costo por gramo baja bastante. La chía negra y la blanca tienen un perfil nutricional prácticamente idéntico —la diferencia es solo visual.
          </p>
          <p>
            Qué revisar en la etiqueta: origen declarado (Perú, Argentina y México son los principales productores que llegan a la región), fecha de vencimiento, y que no tenga ingredientes agregados. La chía pura tiene un solo ingrediente: chía. Desconfía de mezclas de "semillas variadas" si la proporción no está clara.
          </p>
          <p>
            Cómo guardarla: en un frasco cerrado, lejos de la luz y de fuentes de calor y humedad —sobre todo lejos de la estufa. En la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>, dura hasta 2 años cerrada y cerca de 1 año después de abierta sin perder calidad. No necesita refrigeración. Si la semilla está húmeda, apelmazada o huele rancia, deséchala.
          </p>
          <p>
            La chía es uno de los pocos alimentos que se compra con poca frecuencia y ocupa muy poco espacio. Una bolsa de 500g dura semanas para la mayoría de las personas —lo que justifica comprarla en presentación grande.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la chía</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿La chía engorda?</p>
              <p className="faq-a">
                La chía es calórica —100g tienen cerca de 486 kcal, la mayoría de grasa. Pero una porción típica es de 1-2 cucharadas soperas (15-30g), lo que equivale a unas 70-140 kcal. Lo que ayuda a controlar el peso es la fibra: el gel que la chía forma en el estómago aumenta la saciedad y ralentiza la digestión. En cantidades razonables dentro de una dieta equilibrada, la chía no engorda.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánta chía se puede comer al día?</p>
              <p className="faq-a">
                La dosis más estudiada es de 15-30g al día —1-2 cucharadas soperas. Por encima de eso, el exceso de fibra puede causar molestias digestivas, sobre todo sin suficiente agua. Empieza con 1 cucharada y observa cómo reacciona tu organismo antes de aumentar la cantidad.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer chía seca o hay que hidratarla?</p>
              <p className="faq-a">
                Se puede comer seca, pero hidratada es más segura. La chía seca absorbe líquido en el estómago —sin suficiente agua junto con ella, puede causar molestias. Hidratada, la fibra ya está activada y la absorción es más eficiente. Para 1 cucharada sobre el yogur no hay problema. Para dosis mayores, mejor hidratarla antes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La chía tiene gluten?</p>
              <p className="faq-a">
                La chía pura no tiene gluten. Puede haber contaminación cruzada si se procesa en la misma línea que el trigo. Si tienes enfermedad celíaca, busca el sello "libre de gluten" en la etiqueta. Para la mayoría de las personas, no es un problema.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La chía y la linaza son lo mismo?</p>
              <p className="faq-a">
                No. Semillas distintas con perfiles parecidos pero usos diferentes. La chía no necesita molienda, forma gel, sabor neutro. La linaza hay que molerla para liberar los nutrientes, tiene sabor a nuez. Para batidos y pudines, la chía es más práctica. Para pan y bizcochos, la linaza aporta más carácter.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La chía pierde nutrientes al cocinarse?</p>
              <p className="faq-a">
                Parte de los antioxidantes y del omega-3 puede disminuir con el calor. Para aprovecharla mejor, la chía funciona bien en preparaciones frías: pudín, yogur, batidos, ensaladas. Usada en bizcochos y panqueques, sigue aportando fibra y minerales —no es una pérdida total, pero el aprovechamiento es menor.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador de Mise. Hace las compras cada semana y todavía se le olvida algún ingrediente.
                Construyó la app para resolver el problema que él mismo tenía en la cocina.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">¿Tu despensa sabe cuánta chía te queda?</p>
            <p className="blog-cta-desc">
              Con Mise controlas el inventario de tu <a href="/es/funcionalidades/despensa">despensa</a>, armas la{' '}
              <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> y no vuelves del súper sin lo que necesitas.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Empieza gratis
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Volver arriba">Volver arriba ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Hecho con cuidado en Brasil.</p>
          <nav className="footer-links" aria-label="Enlaces del pie de página">
            <a href="/es/blog" className="footer-link">Blog</a>
            <a href="/es/funcionalidades" className="footer-link">Funcionalidades</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
