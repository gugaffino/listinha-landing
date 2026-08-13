import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Cúrcuma: para qué sirve, cómo usarla y cómo guardarla',
  description: 'La cúrcuma es la especia amarilla del curry y la leche dorada. Qué es la curcumina, por qué necesita pimienta negra para absorberse y cómo cocinar, comprar y guardarla.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-curcuma',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-curcuma',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-curcuma',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-curcuma',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-curcuma',
    },
  },
  openGraph: {
    title: 'Cúrcuma: para qué sirve, cómo usarla y cómo guardarla',
    description: 'La cúrcuma es la especia amarilla del curry y la leche dorada. Qué es la curcumina, por qué necesita pimienta negra para absorberse y cómo cocinar, comprar y guardarla.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-curcuma',
    images: [
      {
        url: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Polvo de cúrcuma amarillo-anaranjado en una cuchara de madera sobre una superficie oscura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cúrcuma: para qué sirve, cómo usarla y cómo guardarla',
    description: 'La cúrcuma es la especia amarilla del curry y la leche dorada. Qué es la curcumina, por qué necesita pimienta negra para absorberse y cómo cocinar, comprar y guardarla.',
    images: ['https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La cúrcuma y el azafrán son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Son plantas completamente distintas. La cúrcuma (Curcuma longa) es una raíz de la familia del jengibre, molida en polvo amarillo. El azafrán verdadero (Crocus sativus) son los filamentos secos de una flor, recolectados a mano —una de las especias más caras del mundo. En varios países de Latinoamérica a la cúrcuma se le llama "azafrán de raíz" o "palillo". Cuando una receta pide "azafrán" sin más detalle, casi siempre se refiere a la cúrcuma.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánta cúrcuma al día es segura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Como especia de cocina, entre 1 y 3 cucharaditas al día es una cantidad común y segura para la mayoría de las personas. Las dosis altas de curcumina en suplementos (más de 1-2g al día durante periodos largos) pueden causar molestias digestivas. Quien tiene cálculos biliares, toma anticoagulantes o tiene problemas de hígado debe consultar con un médico antes de usar dosis altas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La cúrcuma en polvo tiene los mismos beneficios que la raíz fresca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La raíz fresca conserva más compuestos volátiles, que se pierden con el secado y la molienda. El polvo, en cambio, tiene más curcumina concentrada por gramo. En la práctica de cocina, las dos formas funcionan bien. La raíz fresca tiene un sabor más vivo y es ideal rallada directo en el plato. El polvo es más práctico y fácil de guardar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La cúrcuma mancha la ropa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y bastante. La curcumina es un pigmento intenso que se impregna en tela, madera y superficies porosas. Usa una cuchara de acero inoxidable, no de madera. Ponte ropa que no te importe manchar cuando cocines con cúrcuma. Si se mancha, trátala de inmediato con agua fría y jabón —el agua caliente fija la mancha. Con exposición al sol, suele desaparecer con el tiempo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede usar cúrcuma en el embarazo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En cantidades normales de cocina, como condimento en una receta, la cúrcuma es segura durante el embarazo. El problema son los suplementos: dosis altas de curcumina pueden estimular contracciones uterinas. Las embarazadas deben evitar los suplementos de curcumina y consultar con un médico antes de usar cantidades mayores a las de una receta común.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La cúrcuma pierde propiedades al cocinarse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parte de los compuestos volátiles y antioxidantes se degrada con calor prolongado. Pero la curcumina en sí es relativamente estable al calor —sobre todo en preparaciones con grasa, que además mejoran su absorción. La leche dorada y el curry, por ejemplo, se cocinan con grasa y conservan bien los beneficios. Evita hervir mucho tiempo sin líquido, porque eso tiende a degradarla más.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cúrcuma: para qué sirve, cómo usarla y cómo guardarla',
  description: 'La cúrcuma es la especia amarilla del curry y la leche dorada. Qué es la curcumina, por qué necesita pimienta negra para absorberse y cómo cocinar, comprar y guardarla.',
  image: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-curcuma',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cúrcuma', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-curcuma' },
  ],
}

export default function CurcumaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Cúrcuma</li>
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
            Cúrcuma: qué es, para qué sirve y cómo usarla en la cocina de todos los días
          </h1>
          <p className="blog-desc">
            La especia amarilla que aparece en el curry, el arroz y la leche dorada. Todo el mundo la ha visto, pero poca gente sabe por qué necesita pimienta negra para funcionar de verdad —y menos gente todavía sabe guardarla como se debe. Aquí está lo esencial sobre la cúrcuma, sin exagerar el beneficio y sin complicarte con el uso.
          </p>

          <div className="answer-box">
            <p>
              <strong>La cúrcuma</strong> (<em>Curcuma longa</em>) es una raíz de la familia del jengibre, originaria de Asia, que después de hervida, secada y molida se convierte en el polvo amarillo-anaranjado que le da color al curry y al arroz.
              Su compuesto activo principal es la <strong>curcumina</strong>, con propiedades antiinflamatorias y antioxidantes estudiadas desde hace décadas.
              Para que el cuerpo la absorba de verdad, la curcumina necesita dos aliados: pimienta negra y grasa.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Polvo de cúrcuma amarillo-anaranjado en una cuchara de madera sobre una superficie oscura"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: ClickerHappy / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la cúrcuma</a></li>
              <li><a href="#azafran-diferencia">Cúrcuma o azafrán: cuál es la diferencia</a></li>
              <li><a href="#curcumina">Qué es la curcumina (y por qué necesita pimienta)</a></li>
              <li><a href="#beneficios">Beneficios con evidencia</a></li>
              <li><a href="#como-usar">Cómo usarla en la cocina</a></li>
              <li><a href="#comprar-guardar">Cómo comprarla y guardarla</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6220710/pexels-photo-6220710.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Raíces frescas de cúrcuma junto a un recipiente con polvo amarillo — comparación entre raíz y especia molida"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Karl Solano / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la cúrcuma</h2>

          <p>
            La cúrcuma (<em>Curcuma longa</em>) es una planta herbácea de la familia del jengibre (<em>Zingiberaceae</em>), originaria de Asia —India es el principal productor mundial, responsable de más del 75% de la producción global. La parte que se usa es el rizoma: una raíz subterránea que, después de cosechada, hervida, secada y molida, se convierte en el característico polvo amarillo-anaranjado.
          </p>
          <p>
            El color intenso es lo más reconocible. Viene de la curcumina, un pigmento que se impregna en todo lo que toca —tabla de madera, cuchara porosa, ropa. La advertencia no es exagerada: quien cocina con cúrcuma lo aprende la primera vez, casi siempre con una camisa de manga blanca.
          </p>
          <p>
            El sabor es terroso, ligeramente amargo y cálido —más profundo que picante. Funciona como base de sabor en platos que necesitan cuerpo, como el curry, los guisos y las sopas. En cantidades pequeñas, es casi imperceptible al paladar, pero muy visible en el color.
          </p>
          <p>
            En el mercado se encuentra en tres formas: en polvo (la más común y práctica), en raíz fresca (cada vez más disponible en supermercados grandes y tiendas naturistas) y en cápsulas como suplemento. Para el uso diario en la cocina, el polvo resuelve todo.
          </p>

          {/* AZAFRÁN VS CÚRCUMA */}
          <h2 id="azafran-diferencia">Cúrcuma o azafrán: cuál es la diferencia</h2>

          <p>
            La confusión es antigua y ocurre porque en varios países la cúrcuma se conoce popularmente como "azafrán de raíz", "azafrán americano" o "palillo" (en Perú y Ecuador, por ejemplo). El nombre hace referencia al azafrán verdadero, pero las dos plantas no tienen nada que ver entre sí.
          </p>
          <p>
            El azafrán verdadero (<em>Crocus sativus</em>) es una flor de origen mediterráneo. Los filamentos secos que se usan como especia se recolectan a mano, uno por uno —hacen falta cerca de 150.000 flores para producir un kilo. Por eso está entre las especias más caras del mundo, con precios que pueden superar los 2.000 dólares por libra. Tiene sabor floral, ligeramente amargo, y tiñe de un amarillo dorado brillante.
          </p>
          <p>
            La cúrcuma cuesta apenas unos dólares por libra, viene de la raíz de una planta de la familia del jengibre y tiene sabor terroso. Son ingredientes completamente distintos en términos botánicos, sensoriales y de precio.
          </p>
          <p>
            Regla práctica: cuando una receta pide "azafrán" sin más detalle —arroz con azafrán, pollo al azafrán— casi siempre se refiere a la cúrcuma. El precio del azafrán verdadero haría el plato imposible de preparar en el día a día. Si la receta es de origen mediterráneo o pide específicamente "hebras de azafrán" o "saffron", ahí sí se trata del azafrán verdadero.
          </p>

          {/* CURCUMINA */}
          <h2 id="curcumina">Qué es la curcumina —y por qué necesita pimienta negra</h2>

          <p>
            La curcumina es el principal compuesto polifenólico de la cúrcuma, responsable tanto del color como de los efectos estudiados en la investigación científica. Representa cerca del 3-5% del peso de la cúrcuma en polvo. Es la parte que interesa en términos de acción antiinflamatoria y antioxidante.
          </p>
          <p>
            El problema: la biodisponibilidad oral de la curcumina es baja. Consumida sola, la mayor parte pasa por el tracto digestivo sin absorberse. Llega a la sangre en cantidades muy pequeñas —lo que limita cualquier efecto en el organismo.
          </p>
          <p>
            La solución viene de la pimienta negra. La piperina, el compuesto activo de la pimienta, inhibe las enzimas que degradan la curcumina en el intestino y puede aumentar su absorción hasta en un 2.000%. Esta combinación no se descubrió en un laboratorio del siglo XX —está presente en el curry tradicional de la India desde hace miles de años. El mecanismo exacto no se entendía, pero el resultado práctico ya estaba ahí.
          </p>
          <p>
            El segundo aliado es la grasa. La curcumina es liposoluble —se disuelve en grasa, no en agua. Consumida junto con aceite de oliva, leche de coco, mantequilla u otra fuente de grasa, la absorción aumenta de forma significativa. Por eso la leche dorada hecha con leche de coco entera funciona mejor que simplemente disolver cúrcuma en agua caliente.
          </p>
          <p>
            Resumen práctico: cúrcuma con pimienta negra y grasa. Las tres juntas maximizan lo que realmente llega al organismo.
          </p>

          {/* BENEFICIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/18705171/pexels-photo-18705171.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Taza de leche dorada con cúrcuma y canela — bebida antiinflamatoria natural"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Stefan Heurterre / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Beneficios con evidencia</h2>

          <p>
            La lista de beneficios que se le atribuyen a la cúrcuma en internet es demasiado generosa. Aquí quedan los que sí tienen respaldo en estudios publicados —con la advertencia importante de que gran parte de esa investigación usa dosis de curcumina en suplemento, no las cantidades que se consumen como especia de cocina.
          </p>
          <p>
            <strong>Antiinflamatorio.</strong> Es el beneficio mejor documentado. La curcumina inhibe varias vías inflamatorias del cuerpo, incluida la COX-2 —la misma vía que bloquean los antiinflamatorios comunes. Estudios clínicos muestran mejoría en artritis, dolor articular y dolor muscular con suplementos de curcumina (400-1.200mg al día). La especia de cocina entrega dosis mucho menores, pero el consumo regular a lo largo del tiempo sí suma.
          </p>
          <p>
            <strong>Antioxidante.</strong> La curcumina neutraliza radicales libres y, a diferencia de muchos antioxidantes, también estimula las propias enzimas antioxidantes del cuerpo —como la superóxido dismutasa. Es un efecto doble: elimina daño y aumenta la capacidad del cuerpo para eliminarlo.
          </p>
          <p>
            <strong>Salud cardiovascular.</strong> Varios estudios asocian el consumo regular de curcumina con mejoras en el perfil lipídico (menos LDL, más HDL) y en la función del endotelio vascular. Los efectos se ven con más claridad en estudios con suplementos de dosis alta.
          </p>
          <p>
            La advertencia honesta, en los dos sentidos: 1 cucharadita de cúrcuma en polvo tiene cerca de 200mg de curcumina bruta —y con la baja biodisponibilidad sin pimienta ni grasa, mucho menos que eso llega realmente a la sangre. Los beneficios documentados usan dosis concentradas muy por encima de lo que aporta la cocina diaria. La cúrcuma de todos los días es un aporte razonable dentro de una alimentación antiinflamatoria más amplia —no es un medicamento. Y en el otro extremo, hay que tener cuidado con los suplementos de dosis alta sin regulación: un número pequeño de reportes de 2024 vinculó suplementos concentrados de curcumina (no la cúrcuma de cocina) con sobrecarga hepática en algunas personas, casi siempre con dosis muy superiores a las de cualquier receta. Si tomas suplementos de forma regular, vale la pena comentarlo con un médico —la cúrcuma como especia no está en la misma categoría de riesgo.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar cúrcuma en la cocina</h2>

          <p>
            La cúrcuma entra fácil en la rutina porque funciona bien en preparaciones que ya existen —no hace falta inventar una receta nueva para incluirla.
          </p>
          <p>
            <strong>Arroz amarillo.</strong> 1 cucharadita de cúrcuma en polvo por taza de arroz, agregada al sofrito de ajo y cebolla antes de poner el agua. El aceite del sofrito ayuda a la absorción de la curcumina. Buen color, sabor suave. Es la forma más simple de meter cúrcuma en la semana sin cambiar ningún hábito.
          </p>
          <p>
            <strong>Sopas y caldos.</strong> Se disuelve bien en líquido caliente con algo de grasa. Funciona muy bien con papa, zanahoria, calabaza y jengibre —ingredientes con un sabor terroso compatible. Usa 1/2-1 cucharadita por litro de caldo, junto con un chorrito de aceite de oliva o leche de coco.
          </p>
          <p>
            <strong>Leche dorada.</strong> 1 taza de leche vegetal (de coco o de almendra funcionan bien) tibia, 1 cucharadita de cúrcuma, una pizca de pimienta negra, canela al gusto, miel opcional. No la dejes hervir —caliéntala a fuego bajo. La combinación de cúrcuma, pimienta y la grasa de la leche de coco es el trío completo de absorción. Es un sabor que se aprende a querer, pero quien se acostumbra no la deja.
          </p>
          <p>
            <strong>Pollo y pescado.</strong> Espolvoréala junto con el resto del condimento antes de hornear o asar a la parrilla. Combina bien con cilantro, comino y ají. Pollo con cúrcuma, ajo, limón y aceite de oliva, directo al horno, es simple y queda bien.
          </p>
          <p>
            <strong>Huevos revueltos y tortilla.</strong> 1/4 de cucharadita directo en el huevo batido. El color queda bonito y el sabor se nota poco. Agrega pimienta negra junto —funciona como condimento y mejora la absorción.
          </p>
          <p>
            Truco contra las manchas: usa cuchara de acero inoxidable, no de madera. Si mancha la mesada o la tabla, aplica limón con sal de inmediato y enjuaga con agua fría. Nunca agua caliente —fija la mancha.
          </p>

          {/* COMPRAR Y GUARDAR */}
          <h2 id="comprar-guardar">Cómo comprar y guardar la cúrcuma</h2>

          <p>
            La cúrcuma en polvo está en casi cualquier supermercado, en la sección de especias. La variedad en tiendas naturistas y mercados especializados suele ser mayor, pero el producto estándar de supermercado funciona perfecto para el uso diario.
          </p>
          <p>
            Precio típico: entre 2 y 4 dólares por un frasco de 40-50g en supermercado, aunque varía según el país. Comprando presentaciones más grandes al por mayor o en tiendas naturistas, el costo por gramo baja bastante. No hay diferencia relevante de calidad entre marcas para uso de cocina —lo que importa es que esté fresca y tenga un color vivo. Un polvo apagado y amarillo pálido es cúrcuma vieja que ya perdió potencia.
          </p>
          <p>
            La raíz fresca aparece en mercados, tiendas naturistas y algunos supermercados grandes. Tiene un sabor más vivo y compuestos adicionales, pero hay que rallarla en el momento y dura menos (refrigerada, cerca de 3 semanas). Para el día a día, el polvo es más práctico.
          </p>
          <p>
            Cómo guardarla: en un frasco de vidrio cerrado, lejos de la luz, el calor y la humedad —sobre todo lejos del vapor de la estufa. Pásala del empaque de papel a un frasco de vidrio en cuanto la abras. Cerrada, la cúrcuma dura entre 2 y 3 años. Abierta, pierde aroma y color en 6-12 meses si no se guarda bien. En la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>, va bien junto con las demás especias secas, en un lugar fácil de alcanzar.
          </p>
          <p>
            Un frasco pequeño dura meses para la mayoría de las personas, a menos que hagas curry cada semana. Comprar poca cantidad y reponer con más frecuencia mantiene la especia siempre fresca.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la cúrcuma</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿La cúrcuma y el azafrán son lo mismo?</p>
              <p className="faq-a">
                No. Son plantas completamente distintas. La cúrcuma es una raíz de la familia del jengibre, barata y común. El azafrán verdadero (Crocus sativus) son filamentos de flor recolectados a mano —una de las especias más caras del mundo. "Azafrán de raíz" o "palillo" son nombres populares de la cúrcuma en varios países de la región.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánta cúrcuma al día es segura?</p>
              <p className="faq-a">
                Como especia, entre 1 y 3 cucharaditas al día es seguro para la mayoría de las personas. Las dosis altas de suplementos de curcumina pueden causar molestias digestivas. Quien toma anticoagulantes o tiene cálculos biliares debe consultar con un médico antes de usar dosis elevadas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La cúrcuma en polvo tiene los mismos beneficios que la raíz fresca?</p>
              <p className="faq-a">
                La raíz fresca tiene compuestos volátiles adicionales que se pierden con el secado. El polvo tiene más curcumina concentrada por gramo. En la práctica, las dos formas funcionan bien. La raíz tiene un sabor más vivo; el polvo es más práctico y fácil de guardar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La cúrcuma mancha la ropa?</p>
              <p className="faq-a">
                Sí, con facilidad. La curcumina es un pigmento intenso. Usa cuchara de acero inoxidable, no de madera. Si mancha la ropa, trátala con agua fría y jabón de inmediato —el agua caliente fija la mancha. En superficies porosas funciona el limón con sal. Con el sol, suele desaparecer.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede usar cúrcuma en el embarazo?</p>
              <p className="faq-a">
                En cantidades normales de cocina, sí es segura. Los suplementos de curcumina en dosis altas pueden estimular contracciones uterinas —las embarazadas deben evitarlos y consultar con un médico. Como condimento en una receta, no hay problema.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La cúrcuma pierde propiedades al cocinarse?</p>
              <p className="faq-a">
                Parte de los compuestos volátiles se degrada con calor prolongado, pero la curcumina en sí es relativamente estable —sobre todo en preparaciones con grasa. El curry y la leche dorada, por ejemplo, se cocinan con grasa y conservan bien los beneficios. Evita hervir mucho tiempo sin líquido.
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
            <p className="blog-cta-title">Cúrcuma en la despensa. Pimienta negra al lado. Lista ya hecha.</p>
            <p className="blog-cta-desc">
              Con Mise sabes qué tienes en la <a href="/es/funcionalidades/despensa">despensa</a> antes de ir al súper —y armas la{' '}
              <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> sin olvidar lo que se acabó.
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
