import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Beneficios del kiwi: nutrientes, vitamina C y cómo comerlo',
  description: 'El kiwi tiene más vitamina C que la naranja, una enzima que ayuda a digerir proteína y solo 61 kcal por 100 g. Beneficios reales, kiwi verde vs dorado y cómo guardarlo.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/kiwi-beneficios',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/kiwi-beneficios',
      en: 'https://www.miseemcasa.com.br/en/blog/kiwi-beneficios',
      es: 'https://www.miseemcasa.com.br/es/blog/kiwi-beneficios',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/kiwi-beneficios',
    },
  },
  openGraph: {
    title: 'Beneficios del kiwi: nutrientes, vitamina C y cómo comerlo',
    description: 'El kiwi tiene más vitamina C que la naranja, una enzima que ayuda a digerir proteína y solo 61 kcal por 100 g. Beneficios reales, kiwi verde vs dorado y cómo guardarlo.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/kiwi-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Kiwis frescos cortados por la mitad mostrando el interior verde con semillas negras — primer plano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficios del kiwi: nutrientes, vitamina C y cómo comerlo',
    description: 'El kiwi tiene más vitamina C que la naranja, una enzima que ayuda a digerir proteína y solo 61 kcal por 100 g. Beneficios reales, kiwi verde vs dorado y cómo guardarlo.',
    images: ['https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuántos kiwis se pueden comer al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dos kiwis al día cubren con margen la necesidad diaria de vitamina C de un adulto. Comer más de eso no aporta un beneficio proporcional y puede causar molestias intestinales por la fibra. Con una o dos unidades es suficiente para aprovechar los nutrientes sin excederte.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El kiwi engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El kiwi tiene solo 61 kcal por 100 g y 3 g de fibra, lo que aumenta la saciedad. No engorda en porciones normales. El problema nunca es el kiwi, es el resto de la alimentación. Como snack o parte del desayuno, es una de las frutas con mejor relación entre calorías y nutrientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer la cáscara del kiwi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La cáscara del kiwi verde es técnicamente comestible —tiene fibra y antioxidantes extra— pero su textura vellosa no le gusta a la mayoría. El kiwi dorado tiene una cáscara más fina y menos agresiva, más fácil de comer entera. Si quieres probar el verde con cáscara, lávalo bien y prueba un pedacito antes de decidir.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El kiwi dorado es más nutritivo que el verde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los perfiles nutricionales son parecidos. El kiwi dorado tiene un poco más de vitamina C y menos acidez, y su cáscara se come más fácil. El verde tiene más vitamina K. En el día a día, la diferencia es pequeña —el dorado suele costar más y ser más difícil de encontrar. Usa el que tengas a mano.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la mejor hora para comer kiwi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay un horario obligatorio. El kiwi ayuda a la digestión cuando se come después de comidas con proteína, gracias a la actinidina. Algunos estudios pequeños sugieren comerlo por la noche por su contenido de serotonina, pero el efecto en el sueño es modesto. Cómelo cuando te acomode en tu rutina.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede congelar el kiwi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Pélalo, córtalo en rodajas o cubos, distribúyelo en una bandeja y congélalo por dos horas. Luego pásalo a un recipiente hermético. Dura hasta tres meses. La textura cambia después de descongelarlo —queda más blando—, lo que funciona bien en licuados pero no tanto en el plato.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué el kiwi crudo no funciona en postres con gelatina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El kiwi crudo contiene actinidina, una enzima que descompone la proteína de la gelatina e impide que cuaje. Si quieres usar kiwi en un postre con gelatina, cocina la fruta antes —unos minutos en sartén o al horno inactivan la enzima. Después puedes mezclarlo sin problema.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Beneficios del kiwi: nutrientes, vitamina C y cómo comerlo',
  description: 'El kiwi tiene más vitamina C que la naranja, una enzima que ayuda a digerir proteína y solo 61 kcal por 100 g. Beneficios reales, kiwi verde vs dorado y cómo guardarlo.',
  image: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/kiwi-beneficios',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Beneficios del kiwi', item: 'https://www.miseemcasa.com.br/es/blog/kiwi-beneficios' },
  ],
}

export default function KiwiBeneficiosEs() {
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
            <li className="breadcrumb-current" aria-current="page">Beneficios del kiwi</li>
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
            Kiwi: qué es, para qué sirve y cómo usarlo en la cocina
          </h1>
          <p className="blog-desc">
            Una fruta que nació en China, que Nueva Zelanda renombró y llevó al mundo entero, y que hoy encuentras en cualquier verdulería. Tiene más vitamina C que la naranja, una enzima que ayuda a digerir proteína y solo 61 kcal por 100 g. Esto es lo que necesitas saber antes de sumarlo a la lista.
          </p>

          <div className="answer-box">
            <p>
              <strong>El kiwi</strong> (<em>Actinidia deliciosa</em>) es una fruta originaria de China que productores neozelandeses convirtieron en un producto de exportación global desde los años 1950.
              El interior verde con semillas negras y la cáscara marrón aterciopelada son sus rasgos más reconocibles.
              Es una de las frutas con mayor concentración de vitamina C —más que la naranja— y contiene actinidina, una enzima que ayuda a digerir proteínas.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Kiwis frescos cortados por la mitad mostrando el interior verde con semillas negras — primer plano"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: AS Photography / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el kiwi</a></li>
              <li><a href="#vitamina-c">Vitamina C: el número que sorprende</a></li>
              <li><a href="#nutrientes">Qué tiene por dentro: los nutrientes</a></li>
              <li><a href="#beneficios">Beneficios del kiwi para la salud</a></li>
              <li><a href="#tipos">Kiwi verde vs kiwi dorado</a></li>
              <li><a href="#como-comer">Cómo comer kiwi</a></li>
              <li><a href="#elegir-guardar">Cómo elegirlo y guardarlo</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUE ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/14083854/pexels-photo-14083854.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Kiwi entero y kiwi cortado por la mitad sobre una mesa de madera rústica — vista detallada"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Chasity Campbell / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el kiwi</h2>

          <p>
            Kiwi es el nombre que los neozelandeses le pusieron a una fruta que en realidad viene de China. En los años 1950, los productores de Nueva Zelanda le cambiaron el nombre a la &quot;grosella china&quot; para venderla mejor en el mercado estadounidense, que no estaba muy entusiasmado con nombres asociados a China en plena Guerra Fría. El nombre nuevo se quedó para siempre.
          </p>
          <p>
            La planta es una enredadera (<em>Actinidia deliciosa</em>) que necesita un invierno frío y un verano cálido para producir bien. La mayoría del kiwi que se vende en Latinoamérica llega importado de Chile, Nueva Zelanda o Italia, según la temporada.
          </p>
          <p>
            El interior verde con semillas negras en círculo alrededor de un centro blanco es su rasgo más reconocible. La textura es suave y jugosa, con un equilibrio entre lo ácido y lo dulce que no tiene sustituto directo —el sabor del kiwi es del kiwi, nada más se le parece.
          </p>
          <p>
            Es una fruta que casi todo el mundo conoce desde siempre, pero que se compra solo de vez en cuando. Eso no tiene que ver con la calidad —es simplemente un hábito que no se formó. Y cambia en cuanto ves lo que realmente aporta por cada 100 g.
          </p>

          {/* VITAMINA C */}
          <h2 id="vitamina-c">Vitamina C: el número que sorprende</h2>

          <p>
            100 g de kiwi tienen unos 92,7 mg de vitamina C. La naranja tiene alrededor de 53 mg. Ese es el dato que cambia la perspectiva: la fruta famosa por su vitamina C no es la que más tiene —esa corona es del kiwi.
          </p>
          <p>
            La recomendación diaria para adultos está entre 75 y 90 mg, según el sexo. Dos kiwis cubren eso sin suplemento, sin jugo procesado y sin vitamina masticable. Solo fruta.
          </p>
          <p>
            La vitamina C se degrada con el calor y la oxidación. El kiwi comido fresco —cortado justo antes de comerlo— entrega casi todo lo que la fruta tiene. El jugo de kiwi procesado ya perdió parte de eso. La forma más eficiente de consumirlo es también la más simple.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">Qué tiene por dentro: los nutrientes del kiwi</h2>

          <p>
            Por cada 100 g de kiwi verde, los principales nutrientes son:
          </p>

          <ul className="item-list">
            <li><strong>Calorías:</strong> 61 kcal</li>
            <li><strong>Fibra:</strong> 3 g — importante para la saciedad y el tránsito intestinal</li>
            <li><strong>Vitamina C:</strong> 92,7 mg — más del 100% de la ingesta diaria recomendada</li>
            <li><strong>Vitamina K:</strong> 40 µg — cerca del 34% del valor diario, relevante para la coagulación y la salud ósea</li>
            <li><strong>Potasio:</strong> 312 mg — contribuye al control de la presión arterial</li>
            <li><strong>Folato:</strong> 25 µg — especialmente relevante durante el embarazo</li>
            <li><strong>Vitamina E:</strong> 1,5 mg — antioxidante que complementa a la vitamina C</li>
          </ul>

          <p>
            El conjunto es equilibrado. Ningún nutriente está en una cantidad exagerada, pero varios aparecen en niveles relevantes al mismo tiempo. Eso vale más que un solo nutriente aislado en dosis alta.
          </p>
          <p>
            Si ya leíste sobre los{' '}
            <a href="/es/blog/alimentos-ricos-em-magnesio">alimentos ricos en magnesio</a>:
            {' '}el kiwi también tiene, aunque en cantidad modesta (17 mg por 100 g). No es la fuente principal, pero suma dentro de una alimentación variada.
          </p>

          {/* BENEFICIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1414134/pexels-photo-1414134.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rodajas de kiwi, limón y naranja sobre una superficie de mármol — frutas frescas y coloridas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Lukas / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Beneficios del kiwi para la salud</h2>

          <p>
            Los beneficios del kiwi no vienen de un solo compuesto milagroso. Vienen de la combinación de vitamina C, fibra, vitamina K y actinidina trabajando juntas. Estos son los efectos con base más sólida:
          </p>

          <h3>Sistema inmunológico</h3>
          <p>
            Más vitamina C de la que necesitas en un día, en una sola fruta. El efecto sobre el sistema inmune no es instantáneo —es cuestión de consistencia en el tiempo. Quien come kiwi seguido mantiene una reserva estable de vitamina C sin depender de un suplemento ni de un jugo.
          </p>

          <h3>Digestión</h3>
          <p>
            La actinidina es una enzima proteolítica: descompone cadenas de proteína. En la práctica, eso significa que comer kiwi después de una comida con proteína —carne, pollo, huevo— facilita la digestión. La fibra insoluble complementa el efecto, regulando el tránsito intestinal y ayudando a prevenir el estreñimiento.
          </p>
          <p>
            Un detalle que casi nadie sabe: el kiwi crudo en gelatina impide que el gel cuaje. La actinidina descompone la proteína del colágeno que le da estructura a la gelatina. Si quieres usar kiwi en un postre con gelatina, cocina la fruta antes —el calor inactiva la enzima.
          </p>

          <h3>Salud cardiovascular</h3>
          <p>
            La fibra y el potasio tienen una relación bien documentada con el control de la presión arterial y el colesterol. No es el efecto de una sola dosis —es consumo regular a lo largo de semanas y meses. El kiwi no sustituye ningún tratamiento, pero encaja bien en una alimentación que cuida el corazón.
          </p>

          <h3>Piel y antioxidantes</h3>
          <p>
            La vitamina C es necesaria para sintetizar colágeno. La vitamina E protege las membranas celulares del daño oxidativo. Las dos juntas, en la cantidad que aporta el kiwi, funcionan mejor que cada una por separado en dosis altas de suplemento.
          </p>

          <h3>Sueño</h3>
          <p>
            Estudios pequeños muestran que comer dos kiwis una hora antes de dormir reduce el tiempo que tarda una persona en conciliar el sueño. El mecanismo probable es la serotonina presente en la fruta. La base de investigación todavía es limitada —es una observación interesante, no una conclusión definitiva.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa conectada con la lista de compras. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* TIPOS */}
          <h2 id="tipos">Kiwi verde vs kiwi dorado</h2>

          <p>
            En la mayoría de tiendas encuentras dos variedades con acceso razonable. Saber la diferencia evita sorpresas de sabor —y te dice cómo comerlo.
          </p>

          <h3>Kiwi verde (Hayward)</h3>
          <p>
            El más común. Cáscara marrón aterciopelada, interior verde intenso con semillas negras alrededor del centro blanco. Sabor más ácido, con un dulzor que lo equilibra. Es el kiwi de referencia —cuando alguien dice &quot;kiwi&quot; sin especificar, es este.
          </p>
          <p>
            La cáscara es comestible, pero su textura vellosa no le gusta a la mayoría. Casi todos lo pelan antes de comerlo. Si quieres probar la cáscara, lávala muy bien y empieza con un pedacito pequeño.
          </p>

          <h3>Kiwi dorado (SunGold)</h3>
          <p>
            Más reciente en la mayoría de mercados. Cáscara amarilla y lisa, sin los vellos del verde. Interior amarillo dorado, con menos semillas visibles alrededor del centro. Sabor más dulce, menos ácido —se acerca al mango y al durazno al mismo tiempo.
          </p>
          <p>
            Suele costar más y ser más difícil de encontrar, apareciendo principalmente en supermercados grandes o secciones especializadas. Su cáscara se come más fácil que la del verde, casi como una manzana. Nutricionalmente, los dos son parecidos.
          </p>

          {/* COMO COMER */}
          <h2 id="como-comer">Cómo comer kiwi</h2>

          <p>
            La forma más simple: cortarlo por la mitad, en horizontal, y comerlo con cuchara directo de la cáscara. No ensucia, no necesita plato ni cubiertos especiales. Así es como la mayoría lo come en el desayuno, y el hábito rara vez cambia una vez que se instala.
          </p>
          <p>
            Pelado y en rodajas funciona bien en yogur, granola, ensalada de frutas y licuados. En un licuado, el sabor se nota incluso mezclado con otros ingredientes —es una de las pocas frutas que no se pierde en la licuadora.
          </p>
          <p>
            En platos salados, el kiwi en rodajas funciona bien en un carpaccio de fruta con jamón serrano, en un ceviche de pescado blanco o acompañando quesos. Su acidez corta bien la grasa.
          </p>
          <p>
            En postres horneados —crumbles, tartas— el kiwi pierde parte de sus antioxidantes pero conserva sabor y una textura interesante. Combínalo con fresa o mango para equilibrar la acidez.
          </p>
          <p>
            Sobre la cáscara: técnicamente comestible en los dos tipos, más agradable en el dorado. La cáscara del verde tiene fibra y antioxidantes extra en sus capas externas, pero la textura no convence a la mayoría. Comerla es opcional, nunca obligatorio.
          </p>

          {/* ELEGIR Y GUARDAR */}
          <h2 id="elegir-guardar">Cómo elegir y guardar kiwi</h2>

          <p>
            En la tienda, presiona suavemente el kiwi con el pulgar. El maduro cede un poco —como un durazno o un aguacate en su punto. Si está completamente duro, necesita entre 2 y 5 días más a temperatura ambiente. Si cede demasiado o tiene manchas blandas, ya pasó su punto.
          </p>
          <p>
            El color de la cáscara no es un indicador confiable de madurez en el kiwi verde —todos mantienen el mismo tono marrón aterciopelado sin importar el punto en que estén. Confía en el tacto.
          </p>

          <h3>Cómo guardarlo</h3>
          <p>
            Kiwi duro: a temperatura ambiente, lejos del sol, hasta que madure. No lo guardes junto a plátanos o manzanas —liberan etileno y aceleran la maduración de lo que tienen cerca. Si justo quieres que madure más rápido, ese mismo truco te sirve: ponlo cerca de un plátano a propósito.
          </p>
          <p>
            Kiwi maduro: en el refrigerador, en una bolsa o recipiente cerrado. Dura hasta tres semanas sin perder calidad. Es una fruta que no pide mucha atención una vez guardada —a diferencia de la fresa, que se queja apenas la dejas de ver.
          </p>
          <p>
            Se puede congelar: pélalo, córtalo en rodajas, distribúyelo en una bandeja por dos horas y pásalo a un recipiente hermético. Funciona bien en licuados o como base de helado casero. La textura cambia después de descongelar —queda más blanda—, pero el sabor se mantiene.
          </p>
          <p>
            El kiwi es una fruta que vale la pena tener seguido en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>.
            {' '}Aguanta bien, es versátil y entra en cualquier{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            sin ocuparte la cabeza. Lo difícil es acordarte de anotarlo cuando el kiwi de la semana pasada se acabó sin que te dieras cuenta.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el kiwi</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuántos kiwis se pueden comer al día?</p>
              <p className="faq-a">
                Dos kiwis al día cubren con margen la necesidad diaria de vitamina C de un adulto. Comer más de eso no aporta un beneficio proporcional y puede causar molestias intestinales por la fibra. Con una o dos unidades es suficiente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El kiwi engorda?</p>
              <p className="faq-a">
                Tiene 61 kcal por 100 g y 3 g de fibra que aumentan la saciedad. No engorda en porciones normales. Como snack o parte del desayuno, es una de las frutas con mejor relación entre calorías y nutrientes que puedes encontrar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer la cáscara del kiwi?</p>
              <p className="faq-a">
                La cáscara del kiwi verde es comestible —tiene fibra y antioxidantes extra— pero su textura vellosa no le gusta a la mayoría. El kiwi dorado tiene una cáscara más fina. Si quieres probar el verde, lávalo bien y prueba antes de decidir. No hay obligación.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El kiwi dorado es más nutritivo que el verde?</p>
              <p className="faq-a">
                Los perfiles son parecidos. El dorado tiene un poco más de vitamina C y una cáscara más fácil de comer. El verde tiene más vitamina K. La diferencia en el día a día es pequeña —el dorado cuesta más y es más difícil de encontrar. Usa el que tengas disponible.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la mejor hora para comer kiwi?</p>
              <p className="faq-a">
                No hay un horario obligatorio. Después de comidas con proteína, la actinidina ayuda a la digestión. Algunos estudios pequeños sugieren comerlo por la noche por su serotonina, pero el efecto en el sueño es modesto. Cómelo cuando te acomode.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede congelar el kiwi?</p>
              <p className="faq-a">
                Sí. Pélalo, córtalo, distribúyelo en una bandeja y congélalo por dos horas. Luego pásalo a un recipiente hermético. Dura hasta tres meses. La textura queda más blanda después de descongelar, lo que funciona bien en licuados.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Por qué el kiwi crudo no funciona en postres con gelatina?</p>
              <p className="faq-a">
                El kiwi crudo contiene actinidina, una enzima que descompone la proteína de la gelatina e impide que cuaje. Para usar kiwi en un postre con gelatina, cocina la fruta antes —unos minutos en sartén o al horno inactivan la enzima. Después se puede mezclar sin problema.
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
                Creador de Mise. Durante años estuvo convencido de que tenía kiwi en casa. No tenía. Construyó una app para resolver ese problema —y otros peores.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Nunca más te olvidas del kiwi.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Conecta despensa, recetas y{' '}
              <a href="/es/funcionalidades/lista-de-compras" style={{color: 'var(--verde-broto)'}}>lista de compras</a>{' '}
              en un solo lugar. Compras lo que realmente vas a usar —y el kiwi no se pudre en el cajón antes de volverse licuado.
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
