import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Aceite de sésamo (ajonjolí): beneficios y cómo usarlo en la cocina',
  description: 'El aceite de sésamo tiene beneficios para el corazón, la piel y la inflamación. La diferencia real entre crudo y tostado, cómo comprarlo y usarlo sin arruinar el plato.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/oleo-de-gergelim',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/oleo-de-gergelim',
      en: 'https://www.miseemcasa.com.br/en/blog/oleo-de-gergelim',
      es: 'https://www.miseemcasa.com.br/es/blog/oleo-de-gergelim',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/oleo-de-gergelim',
    },
  },
  openGraph: {
    title: 'Aceite de sésamo (ajonjolí): beneficios y cómo usarlo en la cocina',
    description: 'El aceite de sésamo tiene beneficios para el corazón, la piel y la inflamación. La diferencia real entre crudo y tostado, cómo comprarlo y usarlo sin arruinar el plato.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/oleo-de-gergelim',
    images: [
      {
        url: 'https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Semillas de sésamo doradas en primer plano — la base del aceite de sésamo tostado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aceite de sésamo (ajonjolí): beneficios y cómo usarlo en la cocina',
    description: 'El aceite de sésamo tiene beneficios para el corazón, la piel y la inflamación. La diferencia real entre crudo y tostado, cómo comprarlo y usarlo sin arruinar el plato.',
    images: ['https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Se puede freír con aceite de sésamo tostado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El aceite de sésamo tostado tiene un punto de humeo bajo y un aroma intenso que se destruye con el calor alto, y queda amargo. Agrégalo al final de la preparación —sobre el plato ya listo, en una salsa o en un aderezo. El aceite de sésamo crudo (claro) es el que puede ir directo a la sartén.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre aceite de sésamo y aceite de ajonjolí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Son nombres distintos para la misma semilla. "Sésamo" es el término más usado en Argentina, Chile y España; "ajonjolí" es el más común en México, Colombia, Venezuela y buena parte de Centroamérica. El producto —y el aceite que se extrae de él— es exactamente el mismo, solo cambia el nombre según el país.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El aceite de sésamo es bueno para la piel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tiene vitamina E y ácidos grasos esenciales que contribuyen a la hidratación y protección de la piel. Se usa mucho en cosmética y en la medicina ayurvédica. Los beneficios que se notan por la alimentación vienen del consumo regular, no de la aplicación directa —para eso existen productos cosméticos formulados específicamente con sésamo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde comprar aceite de sésamo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En tiendas de productos asiáticos, en la sección internacional de supermercados grandes, en tiendas naturistas y en línea. La versión tostada es fácil de conseguir en casi cualquier lugar. La versión cruda exige un poco más de búsqueda —las tiendas naturistas y las compras en línea tienen más variedad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El aceite de sésamo tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El sésamo puro no tiene gluten, y el aceite 100% sésamo tampoco. Revisa la etiqueta en productos que mezclen otros ingredientes —los aderezos y marinados listos con base de sésamo pueden tener gluten de otros componentes, como la salsa de soya. Para una restricción severa, busca marcas con certificación libre de gluten.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo sustituir el aceite de sésamo tostado en una receta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El sabor no tiene un sustituto directo —es muy particular. En una emergencia, el aceite de nuez tostada se acerca más. Para marinados de estilo asiático, puedes omitirlo y compensar con más salsa de soya y jengibre, aunque el resultado va a ser distinto. En platos donde el sésamo es el sabor principal, como una salsa de tahine, la sustitución no funciona.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aceite de sésamo (ajonjolí): beneficios y cómo usarlo en la cocina',
  description: 'El aceite de sésamo tiene beneficios para el corazón, la piel y la inflamación. La diferencia real entre crudo y tostado, cómo comprarlo y usarlo sin arruinar el plato.',
  image: 'https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-07',
  dateModified: '2026-08-07',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/oleo-de-gergelim',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aceite de sésamo', item: 'https://www.miseemcasa.com.br/es/blog/oleo-de-gergelim' },
  ],
}

export default function AceiteDeSesamoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Aceite de sésamo</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-07">7 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Aceite de sésamo: crudo o tostado, y cómo usarlo de verdad en la cocina
          </h1>
          <p className="blog-desc">
            Una botella oscura en la alacena que huele a wok. La compras, intentas freír un huevo con ella, queda amarga, terminas botándola. El problema no es el aceite —es que el crudo y el tostado son dos productos completamente distintos, con usos completamente distintos.
          </p>

          <div className="answer-box">
            <p>
              <strong>El aceite de sésamo</strong> (también llamado aceite de ajonjolí, según el país) se extrae de las semillas de sésamo (<em>Sesamum indicum</em>).
              Existe en dos versiones: <strong>crudo</strong> (claro, suave, apto para la sartén) y <strong>tostado</strong> (oscuro, aroma intenso, solo para finalizar —nunca para freír).
              Tiene un alto contenido de grasas insaturadas, antioxidantes propios del sésamo como la sesamina y la sesamolina, y es uno de los aceites más usados en la cocina asiática desde hace más de 5.000 años.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Semillas de sésamo doradas repartidas sobre una superficie plana — la base del aceite de sésamo"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Castorly Stock / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el aceite de sésamo</a></li>
              <li><a href="#crudo-o-tostado">Crudo o tostado: la diferencia que cambia todo</a></li>
              <li><a href="#beneficios">Beneficios del aceite de sésamo</a></li>
              <li><a href="#como-usar">Cómo usarlo en la cocina</a></li>
              <li><a href="#comprar-guardar">Cómo comprarlo y guardarlo</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Aceite de sésamo en un frasco de vidrio con semillas alrededor — ingrediente clave de la cocina asiática"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Castorly Stock / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el aceite de sésamo</h2>

          <p>
            El aceite de sésamo se extrae por prensado de las semillas de sésamo (<em>Sesamum indicum</em>), una planta originaria de África y cultivada desde hace milenios en el sur de Asia y Medio Oriente. Es uno de los aceites vegetales más antiguos de la historia —hay registros de su uso en Mesopotamia desde alrededor del año 3.000 a. C.
          </p>
          <p>
            Se volvió un ingrediente básico de la cocina del este y sudeste asiático, donde la versión tostada aparece como toque final en platos como los dumplings, los fideos salteados y la ensalada de pepino. En Latinoamérica lo encuentras en supermercados grandes, en la sección de productos internacionales o asiáticos, y en tiendas de productos orientales.
          </p>
          <p>
            Lo que confunde a mucha gente es que dos productos comparten el mismo nombre y se comportan de forma totalmente distinta en la sartén caliente. Uno puede ir al fuego. El otro no. Confundir los dos es el error más común de quien compra aceite de sésamo por primera vez.
          </p>

          {/* CRUDO O TOSTADO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Dos frascos de aceite de sésamo lado a lado — la versión clara (cruda) y la versión oscura (tostada)"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Castorly Stock / Pexels</p>
          </div>

          <h2 id="crudo-o-tostado" className="img-above">Crudo o tostado: la diferencia que cambia todo en la cocina</h2>

          <p>
            Son dos aceites distintos. Mismo origen, uso completamente diferente.
          </p>

          <h3>Aceite de sésamo crudo</h3>
          <p>
            Color amarillo claro, aroma suave. Tiene un punto de humeo alto (cerca de 210 °C) y se puede usar para sofreír, saltear e incluso freír. Es común en la cocina de India y Medio Oriente, y también es el aceite que se combina con la pasta de sésamo para hacer tahine. Es más difícil de conseguir en supermercados comunes —las tiendas naturistas y las compras en línea son la fuente más confiable.
          </p>

          <h3>Aceite de sésamo tostado</h3>
          <p>
            Color ámbar oscuro, casi rojizo. Aroma intenso a nuez tostada —una o dos cucharaditas perfuman todo el plato. Tiene un punto de humeo más bajo, cerca de 177 °C, y si se calienta a temperatura alta queda amargo y pierde justo lo que lo hace especial. La regla es simple: <strong>siempre al final</strong>. Sobre el plato ya listo, en la salsa, en el marinado, justo cuando retiras la sartén del fuego.
          </p>
          <p>
            Lo que se encuentra en la mayoría de los supermercados, etiquetado simplemente como "aceite de sésamo" o "aceite de ajonjolí", casi siempre es el tostado. Si el frasco es oscuro o el aceite adentro se ve color ámbar, es tostado. Si es transparente y el aceite es amarillo pálido, es crudo. Revisa la etiqueta —normalmente dice "tostado" con claridad.
          </p>
          <p>
            Usar el tostado para freír es justo lo que hace que alguien piense que no le gusta el aceite de sésamo. Sí le gusta. Solo lo está usando mal.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios del aceite de sésamo</h2>

          <p>
            El aceite de sésamo tiene un perfil nutricional por encima del promedio entre los aceites vegetales. La composición está bien documentada —lo que varía entre estudios es el tamaño real del efecto en la salud.
          </p>

          <h3>Grasas insaturadas</h3>
          <p>
            Cerca del 82 % de la grasa del aceite de sésamo es insaturada —ácido oleico (omega-9) y ácido linoleico (omega-6), los mismos tipos presentes en el aceite de oliva y el aceite de canola. Las grasas insaturadas están asociadas a menor riesgo cardiovascular cuando reemplazan a las grasas saturadas en la dieta.
          </p>

          <h3>Sesamina y sesamolina: antioxidantes propios del sésamo</h3>
          <p>
            Estos dos lignanos son prácticamente exclusivos del sésamo —no aparecen con la misma concentración en otros alimentos comunes. Revisiones publicadas en revistas científicas indican actividad antioxidante y potencial antiinflamatorio, aunque la mayoría de los estudios se hicieron en modelos animales. Es suficiente para decir que el aceite tiene compuestos bioactivos interesantes, no para afirmar que "trata" ninguna condición específica.
          </p>

          <h3>Vitamina E y vitamina K</h3>
          <p>
            La vitamina E contribuye a la protección celular contra el estrés oxidativo. La vitamina K tiene un papel en la salud ósea y en la coagulación. El aceite de sésamo aporta cantidades relevantes de ambas —algo destacable para un aceite de cocina, que normalmente no se ve como fuente de micronutrientes.
          </p>

          <h3>Propiedades antiinflamatorias</h3>
          <p>
            La medicina ayurvédica usa el aceite de sésamo desde hace siglos en prácticas como el enjuague con aceite (oil pulling) y el masaje. Estudios más recientes confirman que la sesamina tiene acción antiinflamatoria. No es un medicamento. Es un aceite con compuestos bioactivos que, usado con regularidad en lugar de aceites más procesados, puede sumar a una alimentación más equilibrada.
          </p>

          <div className="blog-inline-cta">
            <p>¿Tu aceite de sésamo está bajo control? <em>La despensa de Mise se acuerda por ti.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar el aceite de sésamo en la cocina</h2>

          <p>
            La regla de oro con el tostado (que es el que la mayoría tiene en casa): <strong>agrégalo al final</strong>. Nunca al inicio de la preparación, nunca a fuego alto directo.
          </p>

          <h3>Salsas y aderezos</h3>
          <p>
            Una cucharadita de sésamo tostado con salsa de soya, jengibre rallado y un toque de limón: salsa para dumplings, para fideos fríos, para carne a la parrilla. Sin cocinar —mezclas y sirves. El aceite se emulsiona en el líquido y reparte el aroma de forma pareja.
          </p>
          <p>
            En el arroz frito del día siguiente (el que casi todo el mundo hace con las sobras), un chorrito de sésamo tostado antes de servir transforma el plato. Es la misma técnica que usan los restaurantes asiáticos para dar el toque final.
          </p>

          <h3>Marinados</h3>
          <p>
            Combínalo con salsa de soya, ajo y{' '}
            <a href="/es/blog/o-que-e-gengibre">jengibre</a>{' '}
            para marinar pollo, pescado o tofu. El aceite de sésamo aporta profundidad sin necesitar muchos ingredientes. Para una parrillada de estilo asiático, es lo que diferencia un marinado normal de uno que la gente pide como receta.
          </p>

          <h3>Toque final en platos calientes</h3>
          <p>
            Fideos salteados, arroz frito, verduras salteadas: agrega el sésamo tostado después de apagar el fuego o directo sobre el plato ya servido. La cantidad correcta es menor de lo que parece —empieza con media cucharadita y ajusta. Es un aceite concentrado. Una cucharada sopera ya es demasiado.
          </p>

          <h3>Ensaladas y bowls</h3>
          <p>
            En una ensalada de pepino con vinagre de arroz y salsa de soya, el aceite de sésamo entra junto con esos dos ingredientes. En bowls fríos con verduras crudas y proteína, una o dos cucharaditas en el aderezo marcan la diferencia entre una ensalada genérica y un plato que se ve pensado. Es el mismo principio que usar{' '}
            <a href="/es/blog/o-que-e-amendoa">frutos secos</a>{' '}
            como toque final —un elemento de sabor concentrado que eleva todo lo demás.
          </p>

          {/* CÓMO COMPRAR Y GUARDAR */}
          <h2 id="comprar-guardar">Cómo comprar y guardar el aceite de sésamo</h2>

          <h3>Dónde encontrarlo</h3>
          <p>
            La versión tostada está en supermercados grandes (sección de productos internacionales o asiáticos), en tiendas de productos orientales y en tiendas naturistas. En línea la variedad es mayor —tanto de marcas como de formatos (100 ml, 250 ml, 500 ml). La versión cruda es más difícil de conseguir; busca en tiendas naturistas o compra en línea.
          </p>

          <h3>Qué revisar en la etiqueta</h3>
          <ul className="item-list">
            <li><strong>100 % aceite de sésamo</strong> —sin mezcla con otros aceites. Algunos productos más baratos lo diluyen con aceite de soya.</li>
            <li><strong>Tostado o crudo</strong> —debe estar claramente identificado. Si no lo dice, fíjate en el color a través del frasco.</li>
            <li><strong>Frasco oscuro</strong> —el aceite de sésamo es sensible a la luz. Un frasco de vidrio oscuro o una lata protegen mejor la calidad.</li>
            <li><strong>Fecha de vencimiento</strong> —una vez abierto, úsalo dentro de los 6 meses siguientes para el mejor sabor.</li>
          </ul>

          <h3>Cómo guardarlo</h3>
          <p>
            Lejos de la estufa y de la luz directa. Una alacena cerrada funciona bien —no hace falta refrigerarlo, aunque en cocinas muy calurosas ayuda a conservar el aroma. Una vez abierto: úsalo dentro de 3 a 6 meses. La prueba de calidad es simple: el aceite fresco huele a nuez tostada. El aceite rancio huele a grasa vieja. Si llegó a ese punto, descártalo.
          </p>
          <p>
            Vale la pena tener el aceite de sésamo en la despensa igual que tienes el aceite de oliva —no en gran cantidad, pero siempre disponible. Un frasco pequeño (100 ml) dura meses porque se usa por cucharaditas, no por tazas.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el aceite de sésamo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Se puede freír con aceite de sésamo tostado?</p>
              <p className="faq-a">
                No. El aceite tostado tiene un punto de humeo bajo y un aroma que se destruye con el calor alto, y queda amargo. Úsalo siempre como toque final —sobre el plato ya listo, en salsas o en marinados. Para freír con aceite de sésamo, necesitas la versión cruda (clara).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre aceite de sésamo y aceite de ajonjolí?</p>
              <p className="faq-a">
                Son nombres distintos para la misma semilla. "Sésamo" se usa más en Argentina, Chile y España; "ajonjolí" es el término más común en México, Colombia y Centroamérica. El aceite que se extrae es exactamente el mismo producto, solo cambia el nombre según el país.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El aceite de sésamo es bueno para la piel?</p>
              <p className="faq-a">
                Tiene vitamina E y ácidos grasos esenciales que contribuyen a la salud de la piel cuando se consumen con regularidad. Se usa en cosmética y en la medicina ayurvédica. Desde la alimentación, los beneficios vienen del consumo habitual —para la aplicación directa existen productos cosméticos formulados específicamente para eso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Dónde comprar aceite de sésamo?</p>
              <p className="faq-a">
                En tiendas de productos asiáticos, en la sección internacional de supermercados grandes, en tiendas naturistas y en línea. La versión tostada se consigue fácil en casi cualquier lado. La versión cruda exige un poco más de búsqueda —tiendas naturistas y compras en línea tienen más variedad.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El aceite de sésamo tiene gluten?</p>
              <p className="faq-a">
                El sésamo puro no tiene gluten, y el aceite 100 % sésamo tampoco. En salsas y marinados listos con base de sésamo, revisa los demás ingredientes —la salsa de soya, por ejemplo, tradicionalmente lleva trigo. Para una restricción severa, busca marcas con certificación libre de gluten.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Puedo sustituir el aceite de sésamo tostado en una receta?</p>
              <p className="faq-a">
                El sabor no tiene sustituto directo. En una emergencia, el aceite de nuez tostada se acerca más. Para marinados de estilo asiático, puedes omitirlo y compensar con más salsa de soya y jengibre —el resultado va a ser distinto, pero funciona. En platos donde el sésamo es el sabor principal, la sustitución no resuelve.
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
                Creador de Mise. Compró aceite de sésamo tostado, intentó freír un huevo con él, pensó que estaba malo. No lo estaba. Solo lo usó mal. Le pasa a cualquiera.
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
              Compras lo que realmente vas a usar —y el aceite de sésamo no se queda ahí esperando una ocasión especial.
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
