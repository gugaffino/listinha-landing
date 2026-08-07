import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Cardamomo: para qué sirve, tipos y cómo usarlo',
  description: 'El cardamomo es una especia de aroma intenso usada en café, té, curry y repostería. Tipos, beneficios reales y cómo usarlo sin pasarte de la mano.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/cardamomo-para-que-serve',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/cardamomo-para-que-serve',
      en: 'https://www.miseemcasa.com.br/en/blog/cardamomo-para-que-serve',
      es: 'https://www.miseemcasa.com.br/es/blog/cardamomo-para-que-serve',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/cardamomo-para-que-serve',
    },
  },
  openGraph: {
    title: 'Cardamomo: para qué sirve, tipos y cómo usarlo',
    description: 'El cardamomo es una especia de aroma intenso usada en café, té, curry y repostería. Tipos, beneficios reales y cómo usarlo sin pasarte de la mano.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/cardamomo-para-que-serve',
    images: [
      {
        url: 'https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Vainas de cardamomo verde sobre una mesa de madera rústica — primer plano de la especia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardamomo: para qué sirve, tipos y cómo usarlo',
    description: 'El cardamomo es una especia de aroma intenso usada en café, té, curry y repostería. Tipos, beneficios reales y cómo usarlo sin pasarte de la mano.',
    images: ['https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El cardamomo verde y el negro son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Son plantas distintas de la misma familia. El verde (Elettaria cardamomum) es el más común —aroma floral, ligeramente cítrico, se usa en té, postres y platos con curry. El negro (Amomum subulatum) es más grande, seco, con aroma ahumado y terroso. Va mejor en platos salados fuertes como biryanis y guisos de carne. En la mayoría de los mercados, el verde es el que vas a encontrar sin buscar mucho.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede reemplazar el cardamomo por otra especia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No tiene reemplazo directo —el aroma es único. Si no tienes, la opción más cercana es mezclar una pizca de jengibre en polvo con una pizca de nuez moscada, aunque el resultado es distinto. En té, jengibre con canela da un perfil parecido, pero sin el lado floral del cardamomo. Para platos donde el cardamomo es el protagonista, usar el original hace diferencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cardamomo en polvo o en vaina: cuál conviene usar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En vaina, el aroma es más intenso y dura más —las semillas están protegidas por la cáscara. Es ideal para té, caldos y arroz, donde la vaina queda en el líquido y se retira antes de servir. El polvo es más práctico para masas de bizcocho, galletas y mezclas secas de especias. El polvo pierde aroma más rápido: en 6 a 8 meses ya está débil. Comprar en vaina y moler justo antes de usar es lo mejor de los dos mundos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde comprar cardamomo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En supermercados grandes, casi siempre en el pasillo de especias, en polvo o en vaina. En tiendas naturistas y negocios a granel, normalmente más barato por gramo y con más rotación, lo que significa producto más fresco. Tiendas especializadas en cocina árabe o india suelen tener ambos tipos, verde y negro, en vaina. Online también hay buena variedad, aunque el envío a veces encarece el precio final.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo guardar el cardamomo en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En un frasco hermético, lejos de la luz, el calor y la humedad. Nunca cerca de la estufa —el calor evapora los aceites esenciales, que son justamente los que le dan el aroma. En vaina, bien guardado, dura hasta 2 años. En polvo, empieza a perder fuerza después de 6 a 8 meses. Si compraste una cantidad grande, puedes guardar parte en el congelador —conserva el aroma por más tiempo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cardamomo usar en una receta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El cardamomo es fuerte —menos es más. Para té: 2 a 3 vainas machacadas por 2 tazas de agua. Para arroz o caldo: 3 a 4 vainas para 4 porciones. Para bizcocho o galletas: 1/4 a 1/2 cucharadita de polvo alcanza para 8 porciones. Si te pasas, el aroma se vuelve medicinal y domina todo el plato. Empieza con menos y ajusta después.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cardamomo: para qué sirve, tipos y cómo usarlo',
  description: 'El cardamomo es una especia de aroma intenso usada en café, té, curry y repostería. Tipos, beneficios reales y cómo usarlo sin pasarte de la mano.',
  image: 'https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-26',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/cardamomo-para-que-serve',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cardamomo', item: 'https://www.miseemcasa.com.br/es/blog/cardamomo-para-que-serve' },
  ],
}

export default function CardamomoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Cardamomo</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-26">26 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cardamomo: qué es, para qué sirve y cómo usarlo en la cocina
          </h1>
          <p className="blog-desc">
            Aparece en recetas de té chai, café árabe, curry y repostería escandinava. El aroma es imposible de ignorar —y casi imposible de reemplazar. Pero ¿qué es exactamente el cardamomo, qué tipo comprar y cuánto usar sin pasarte?
          </p>

          <div className="answer-box">
            <p>
              <strong>El cardamomo</strong> es una especia de la familia del jengibre, originaria del sur de la India.
              Guatemala es hoy el mayor exportador del mundo —el cultivo llegó al país hace poco más de un siglo
              y se adaptó tan bien a las tierras altas que superó a la propia India en volumen exportado.
              Viene en vainas pequeñas con semillas aromáticas adentro. El aroma es floral, ligeramente cítrico,
              con notas que recuerdan al eucalipto. Sirve para dar sabor a té, café, platos con curry, postres y carnes.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Vainas de cardamomo verde sobre una mesa de madera rústica — primer plano de la especia"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Nidhin K S / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el cardamomo</a></li>
              <li><a href="#verde-o-negro">Verde o negro: cuál es cuál</a></li>
              <li><a href="#para-que-sirve">Para qué sirve en la cocina</a></li>
              <li><a href="#beneficios">Beneficios para la salud</a></li>
              <li><a href="#como-usar">Cómo usarlo: vaina, polvo y té</a></li>
              <li><a href="#donde-comprar">Cómo guardarlo y dónde comprarlo</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6086300/pexels-photo-6086300.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Vainas de cardamomo verde apiladas en primer plano mostrando textura y color vivo"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Eva Bronzini / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el cardamomo</h2>

          <p>
            El cardamomo (<em>Elettaria cardamomum</em>) es una planta de la misma familia que el jengibre
            y la cúrcuma. Lo que se usa en la cocina son las vainas —pequeñas, ovaladas, de 1 a 2 cm—
            con semillas aromáticas adentro. Las semillas son la parte que de verdad tiene aroma.
            La vaina protege ese aroma hasta el momento de usarla.
          </p>
          <p>
            Se considera una de las especias más caras del mundo, detrás solo del azafrán y la vainilla.
            El precio no es arbitrario: la planta tarda de 3 a 4 años en empezar a producir,
            la cosecha se hace vaina por vaina a mano, y los aceites esenciales —responsables del aroma—
            son volátiles. Cualquier error en el secado y el cardamomo llega sin gracia al estante.
          </p>
          <p>
            Durante siglos, India fue el principal productor mundial. Pero Guatemala cambió esa historia:
            el cultivo llegó al país a principios del siglo XX y se adaptó tan bien al clima de las tierras
            altas —sobre todo en Alta Verapaz— que hoy Guatemala exporta más cardamomo que cualquier otro país,
            la mayor parte con destino a Medio Oriente, donde la demanda de café con cardamomo es enorme.
          </p>
          <p>
            El aroma es difícil de describir sin exagerar. Floral, ligeramente cítrico, con notas
            de eucalipto y un dulzor suave que no aparece en ninguna otra especia. No tiene reemplazo
            directo —quien ya preparó té con cardamomo sabe que jengibre con canela no es lo mismo,
            por más que se intente acercar.
          </p>

          {/* VERDE O NEGRO */}
          <h2 id="verde-o-negro">Verde o negro: cuál es cuál</h2>

          <p>
            Es común confundir los dos tipos porque comparten nombre. Son plantas distintas,
            con usos distintos en la cocina.
          </p>

          <h3>Cardamomo verde</h3>
          <p>
            El más común. Más pequeño, con cáscara fina y verde clara, semillas oscuras por dentro.
            Aroma floral y cítrico —es el que aparece en el chai indio, el café árabe, los postres
            de Medio Oriente y el pan de especias escandinavo. Es el cardamomo que vas a encontrar
            en el supermercado o en una tienda de especias sin tener que buscar mucho.
          </p>

          <h3>Cardamomo negro</h3>
          <p>
            Más grande, más oscuro, con cáscara rugosa y textura seca. El aroma es completamente
            distinto: ahumado, terroso, con notas que recuerdan al humo. Va bien en platos salados
            fuertes —biryanis, guisos de carne, salsas densas. No los reemplaces uno por otro:
            cardamomo negro en un postre pensado para el verde no va a salir bien.
          </p>
          <p>
            El negro es menos fácil de conseguir —lo encuentras en tiendas de cocina india o árabe,
            o en línea. Si una receta pide cardamomo sin especificar, da por hecho que es el verde.
          </p>

          {/* PARA QUÉ SIRVE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10126645/pexels-photo-10126645.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Plato con variedad de especias, incluido cardamomo, canela y hojas de laurel"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Suvaiba / Pexels</p>
          </div>

          <h2 id="para-que-sirve" className="img-above">Para qué sirve el cardamomo en la cocina</h2>

          <p>
            El cardamomo sirve para dar aroma sin dominar el plato. Una buena especia no se impone
            —profundiza. Eso es justo lo que hace el cardamomo: agrega una capa de aroma que se
            percibe antes de lograr identificarla.
          </p>

          <h3>Café y té</h3>
          <p>
            El uso más directo. Dos o tres vainas machacadas en agua caliente con jengibre y canela
            hacen un té que ninguna bolsita va a igualar. El chai indio clásico lleva cardamomo.
            El café árabe (qahwa) también —a veces la vaina se muele junto con el café antes de
            prepararlo. Si nunca probaste café con una vaina de cardamomo, vale la pena intentarlo.
          </p>

          <h3>Arroz y platos con curry</h3>
          <p>
            En la cocina india y árabe, el cardamomo va directo al arroz —junto con canela y clavo,
            en el aceite caliente, antes de agregar el grano. El resultado es un arroz con aroma
            propio, que no necesita salsa para tener personalidad. En platos con curry, entra en el
            masala como una de las especias base, junto con cilantro, comino y chile.
          </p>

          <h3>Repostería y postres</h3>
          <p>
            En los países escandinavos, el cardamomo es la especia por excelencia en la repostería
            —el rol que ocupa la canela en otros lugares, pero con un lado más floral. En la cocina
            árabe aparece en el baklava, el arroz con leche y las cremas. En la India, en el kheer
            (arroz con leche y cardamomo) y en dulces con leche condensada.
          </p>

          <h3>Carnes y marinados</h3>
          <p>
            Menos obvio, pero funciona bien. En marinados de pollo y cordero, el cardamomo agrega
            profundidad sin amargar. Combina bien con yogur, ajo y comino —una base clásica del
            pollo al horno estilo libanés. También aparece en albóndigas y kaftas como parte del
            condimento.
          </p>

          <div className="blog-inline-cta">
            <p>Una despensa organizada es la mitad del trabajo. <em>Mise resuelve la otra mitad.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios del cardamomo para la salud</h2>

          <p>
            El cardamomo tiene compuestos antioxidantes —flavonoides, terpenos, aceites esenciales
            como el cineol. Los estudios existentes asocian su consumo regular con algunos efectos
            concretos.
          </p>

          <h3>Digestión</h3>
          <p>
            El cardamomo estimula la producción de enzimas digestivas y tiene efecto carminativo
            —ayuda a reducir los gases. Por eso aparece en tés después de comer en la medicina
            ayurvédica desde hace siglos. La evidencia científica todavía es preliminar pero
            consistente: funciona como apoyo digestivo, no como remedio.
          </p>

          <h3>Salud bucal</h3>
          <p>
            Los aceites esenciales del cardamomo tienen propiedades antibacterianas. En Medio
            Oriente, masticar una vaina después de comer es una práctica común —una versión
            aromática del enjuague bucal. El cineol, componente principal del aroma, contribuye
            a esto. Es también el motivo por el que el cardamomo aparece en algunos tés digestivos
            y recetas con mucho ajo de la cocina india.
          </p>

          <h3>Antioxidantes</h3>
          <p>
            Como toda especia aromática intensa —orégano, cúrcuma, clavo—, el cardamomo es rico
            en compuestos antioxidantes. El consumo regular de especias, en general, se asocia
            con una alimentación más variada y menos dependencia de la sal y el azúcar para dar
            sabor. Puede que ese sea el beneficio más práctico de todos.
          </p>

          <p>
            Una aclaración necesaria: el cardamomo no es un suplemento, es una especia.
            La cantidad que se usa en una receta es demasiado pequeña para tener un efecto
            clínico aislado. El beneficio real es que agrega sabor a platos que, sin él,
            necesitarían más sal o azúcar para resultar interesantes.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar el cardamomo: vaina, polvo y té</h2>

          <h3>En vaina</h3>
          <p>
            Machaca ligeramente la vaina con el lado del cuchillo antes de usarla —eso abre la
            cáscara y libera más aroma. Agrégala entera a tés, caldos, arroz y marinados.
            Retírala antes de servir: la cáscara no es agradable de comer. El aroma que queda
            en el líquido alcanza para transformar el plato.
          </p>

          <h3>En polvo</h3>
          <p>
            Más práctico para masas de bizcocho, galletas y mezclas secas de especias. Úsalo con
            moderación —1/4 de cucharadita alcanza en una receta de bizcocho para 8 porciones.
            El polvo pierde aroma más rápido que la vaina: después de 6 a 8 meses, la fuerza
            baja bastante. Si tienes un mortero, comprar en vaina y moler justo antes de usar
            es lo mejor de los dos mundos.
          </p>

          <h3>Proporciones de referencia</h3>
          <p>
            Para té: 2 a 3 vainas machacadas por 2 tazas de agua.
            Para arroz: 3 a 4 vainas para 4 porciones.
            Para bizcocho: 1/4 a 1/2 cucharadita de polvo por receta.
            El cardamomo es fuerte —empieza con menos. Si te pasas, el aroma se vuelve
            medicinal y domina todo el plato. La diferencia se nota enseguida.
          </p>

          <p>
            El cardamomo es una de esas especias donde la receta pide "2 vainas" y abres el
            paquete y trae 50. Van a quedar en tu despensa por dos años. Pero en el momento
            justo, van a resolver la receta —y vas a estar contento de tenerlas a mano.
          </p>

          {/* DÓNDE COMPRAR */}
          <h2 id="donde-comprar">Cómo guardar el cardamomo y dónde comprarlo</h2>

          <h3>Cómo guardarlo</h3>
          <p>
            En un frasco hermético, lejos de la luz, el calor y la humedad. Nunca cerca de la
            estufa —el calor evapora los aceites esenciales, que son justamente los que le dan
            el aroma. En vaina, bien guardado, el cardamomo dura hasta 2 años sin perder calidad.
            En polvo, empieza a debilitarse después de 6 a 8 meses. Si compraste una cantidad
            grande, puedes guardar parte en el congelador —conserva el aroma por más tiempo.
          </p>
          <p>
            Vale la pena anotar en la{' '}
            <a href="/es/funcionalidades/despensa">despensa de Mise</a>{' '}
            lo que tienes y cuándo lo compraste. Las especias viejas no se echan a perder,
            pero pierden fuerza. Y sin control, la misma vaina termina en el fondo de tres
            frascos distintos.
          </p>

          <h3>Dónde comprarlo</h3>
          <p>
            En supermercados grandes, el cardamomo verde en polvo o en vaina está en el pasillo
            de especias. En tiendas naturistas y negocios a granel suele venderse por peso
            —más barato por gramo y con más rotación, lo que significa producto más fresco.
            Tiendas especializadas en cocina árabe o india suelen tener ambos tipos, verde y
            negro, en vaina.
          </p>
          <p>
            En línea la variedad es mayor —incluidas versiones orgánicas y de origen único,
            entre ellas el cardamomo guatemalteco, que hoy es de los más exportados del mundo.
            Si compras en línea, revisa si la tienda indica la fecha de cosecha o vencimiento:
            especia vieja vendida como nueva es un problema más común de lo que parece.
            La misma atención que le pondrías a cualquier{' '}
            <a href="/es/funcionalidades/lista-de-compras">producto de tu lista de compras</a>{' '}
            aplica aquí —saber qué estás comprando antes de salir de casa hace la diferencia.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el cardamomo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El cardamomo verde y el negro son lo mismo?</p>
              <p className="faq-a">
                No. Son plantas distintas de la misma familia. El verde tiene aroma floral y
                cítrico —va en té, postres y platos con curry. El negro tiene aroma ahumado y
                terroso —va en platos salados fuertes. El verde es el que encuentras con
                facilidad. Si la receta no especifica, da por hecho que es el verde.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede reemplazar el cardamomo por otra especia?</p>
              <p className="faq-a">
                No tiene reemplazo directo —el aroma es único. Si no tienes, la aproximación
                más cercana es una pizca de jengibre en polvo con una pizca de{' '}
                <a href="/es/blog/para-que-serve-noz-moscada">nuez moscada</a>,
                {' '}aunque el resultado es distinto. Para platos donde el cardamomo es
                protagonista, el reemplazo no cierra igual.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cardamomo en polvo o en vaina: cuál conviene usar?</p>
              <p className="faq-a">
                En vaina, el aroma es más intenso y dura más. Ideal para té, caldos y arroz.
                El polvo es más práctico para masas de bizcocho y mezclas secas, pero pierde
                aroma después de 6 a 8 meses. Comprar en vaina y moler justo antes de usar
                es lo mejor de los dos mundos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Dónde comprar cardamomo?</p>
              <p className="faq-a">
                En supermercados grandes, tiendas naturistas, negocios a granel y tiendas
                especializadas en cocina árabe o india. Online también hay buena variedad.
                A granel suele salir más barato y más fresco que un empaque cerrado que
                lleva meses en el estante.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo guardar el cardamomo en casa?</p>
              <p className="faq-a">
                En un frasco hermético, lejos de la luz, el calor y la humedad. Nunca cerca
                de la estufa. En vaina, dura hasta 2 años bien guardado. En polvo, pierde
                fuerza después de 6 a 8 meses. Si compraste una cantidad grande, congela
                parte para conservar el aroma por más tiempo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto cardamomo usar en una receta?</p>
              <p className="faq-a">
                Con moderación: 2 a 3 vainas para 2 tazas de té; 3 a 4 vainas para arroz de
                4 porciones; 1/4 a 1/2 cucharadita de polvo por receta de bizcocho.
                El cardamomo es fuerte. Empieza con menos —puedes agregar más después,
                pero no puedes sacar el exceso del plato.
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
                Creador de Mise. Compró cardamomo en vaina para hacer chai, usó dos y todavía
                le quedan 48 en el frasco. Va a usarlas en la próxima receta árabe, lo promete.
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
              Compras lo que realmente vas a usar —y el cardamomo no desaparece en el
              fondo de tres frascos.
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
