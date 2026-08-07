import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Beneficios de la cebolla morada: nutrientes y cómo usarla en la cocina',
  description: 'La cebolla morada tiene antocianinas y quercetina que la blanca casi no tiene. Los beneficios confirmados, qué se pierde al cocinarla y cómo usarla más.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/beneficios-da-cebola-roxa',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/beneficios-da-cebola-roxa',
      en: 'https://www.miseemcasa.com.br/en/blog/beneficios-da-cebola-roxa',
      es: 'https://www.miseemcasa.com.br/es/blog/beneficios-da-cebola-roxa',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/beneficios-da-cebola-roxa',
    },
  },
  openGraph: {
    title: 'Beneficios de la cebolla morada: nutrientes y cómo usarla en la cocina',
    description: 'La cebolla morada tiene antocianinas y quercetina que la blanca casi no tiene. Los beneficios confirmados, qué se pierde al cocinarla y cómo usarla más.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/beneficios-da-cebola-roxa',
    images: [
      {
        url: 'https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Cebollas moradas cortadas por la mitad mostrando las capas y el color intenso — una hortaliza rica en antocianinas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficios de la cebolla morada: nutrientes y cómo usarla en la cocina',
    description: 'La cebolla morada tiene antocianinas y quercetina que la blanca casi no tiene. Los beneficios confirmados, qué se pierde al cocinarla y cómo usarla más.',
    images: ['https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La cebolla morada es más saludable que la blanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, en términos de antioxidantes. La cebolla morada tiene antocianinas —los compuestos que le dan el color y que tienen acción antioxidante y antiinflamatoria comprobada— que la cebolla blanca casi no tiene. Cruda, la morada gana por lejos. En preparaciones con cocción larga, la diferencia se reduce porque el calor destruye parte de las antocianinas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son los principales beneficios de la cebolla morada para la salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los beneficios mejor documentados son: acción antioxidante (por las antocianinas y la quercetina), efecto antiinflamatorio, apoyo a la salud cardiovascular, efecto prebiótico (fibra que alimenta las bacterias buenas del intestino) y refuerzo de la inmunidad por la vitamina C. Los efectos son acumulativos y dependen del consumo regular, no de una sola porción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cocinar la cebolla morada elimina los antioxidantes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En parte. Las antocianinas son sensibles al calor y una parte importante se destruye con la cocción larga. La quercetina es más resistente y aguanta temperaturas moderadas. La fibra no se ve afectada por el calor. Para aprovechar el diferencial, cómela cruda o en escabeche rápido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánta cebolla morada se puede comer al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay un límite oficial. Media cebolla mediana (unos 50 g) por comida ya aporta una cantidad relevante de quercetina y antocianinas. Los beneficios se acumulan con el tiempo —el consumo regular importa más que la cantidad en una sola comida. Si eres sensible a los FODMAP, puedes sentir hinchazón con porciones grandes de cebolla cruda.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La cebolla morada es buena para el intestino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La cebolla morada tiene fructooligosacáridos (FOS), fibras prebióticas que alimentan las bacterias buenas del intestino. Con consumo regular, contribuye a una microbiota intestinal más diversa. La salvedad: si eres sensible a los FODMAP, puedes sentir hinchazón y gases, sobre todo con cantidades grandes de cebolla cruda.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se le quita el picor a la cebolla morada antes de comerla cruda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dos métodos funcionan bien. El primero: deja la cebolla fileteada en remojo en agua con hielo por 10 a 15 minutos —el picor baja bastante sin que pierda la textura crocante. El segundo: adereza con limón o vinagre y deja reposar 5 minutos —la acidez suaviza el sabor. Los dos conservan el color y la mayoría de los nutrientes.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Beneficios de la cebolla morada: nutrientes y cómo usarla en la cocina',
  description: 'La cebolla morada tiene antocianinas y quercetina que la blanca casi no tiene. Los beneficios confirmados, qué se pierde al cocinarla y cómo usarla más.',
  image: 'https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/beneficios-da-cebola-roxa',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Beneficios de la cebolla morada', item: 'https://www.miseemcasa.com.br/es/blog/beneficios-da-cebola-roxa' },
  ],
}

export default function BeneficiosCebollaMoradaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Beneficios de la cebolla morada</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-07">7 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lo que tiene la cebolla morada y la blanca no: beneficios y cómo usarla
          </h1>
          <p className="blog-desc">
            La cebolla morada termina en la ensalada porque se ve bien. Pero hay algo más allá del color: antocianinas, quercetina y un perfil antioxidante que la cebolla blanca no alcanza al mismo nivel. Esto es lo que está confirmado —y lo que cambia cuando la cocinas.
          </p>

          <div className="answer-box">
            <p>
              <strong>La cebolla morada</strong> tiene antocianinas —los pigmentos que le dan el color— que la cebolla blanca casi no tiene.
              Estos compuestos tienen acción antioxidante y antiinflamatoria comprobada en estudios.
              Además, aporta quercetina, vitamina C, fibra prebiótica y unas 40 calorías por cada 100 g.
              El detalle: el calor destruye parte de las antocianinas. Para aprovechar el diferencial, úsala cruda.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Cebollas moradas cortadas por la mitad mostrando las capas y el color intenso — una hortaliza rica en antocianinas"
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
              <li><a href="#que-tiene-de-diferente">Qué tiene de diferente la cebolla morada</a></li>
              <li><a href="#nutrientes">Qué tiene por dentro: los nutrientes</a></li>
              <li><a href="#beneficios">Los principales beneficios</a></li>
              <li><a href="#cruda-o-cocida">Cruda o cocida: qué cambia</a></li>
              <li><a href="#como-usar">Cómo usarla en la cocina</a></li>
              <li><a href="#elegir-y-guardar">Cómo elegirla y guardarla</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ TIENE DE DIFERENTE */}
          <h2 id="que-tiene-de-diferente">Qué tiene de diferente la cebolla morada</h2>

          <p>
            La cebolla morada no es solo una variación estética de la blanca. El color viene de las antocianinas —los mismos pigmentos que hacen que el arándano sea azul y la col morada tenga ese tono violeta. Color y nutrición están conectados aquí: mientras más intenso el color, mayor la concentración de antioxidantes.
          </p>
          <p>
            La cebolla blanca también tiene quercetina, pero en menor concentración, y no tiene antocianinas en cantidad relevante. Las dos son hortalizas nutritivas, pero el perfil de fitoquímicos es distinto —y esa diferencia importa según el uso que le vayas a dar.
          </p>
          <p>
            En la cocina, la cebolla morada tiene sabor más suave cuando está cruda. La blanca es más fuerte y funciona mejor sofrita. La morada aguanta el calor, pero pierde parte de su color vivo durante la cocción —y con eso se va también parte de las antocianinas.
          </p>
          <p>
            La regla práctica: cebolla morada cruda en ensaladas, vinagretas y encurtidos rápidos. Cebolla blanca para sofritos, guisos y base de salsas. Las dos tienen su lugar en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a> —cada una con su función.
          </p>

          {/* NUTRIENTES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7890176/pexels-photo-7890176.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cebolla morada cortada en aros sobre una tabla de madera — detalle de las capas internas violetas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="nutrientes" className="img-above">Qué tiene por dentro: los nutrientes</h2>

          <p>
            Cien gramos de cebolla morada cruda tienen aproximadamente 40 calorías, 9 g de carbohidratos, 1,7 g de fibra y 1 g de proteína. Como referencia: una rebanada de pan de molde pesa más o menos lo mismo y tiene más del doble de calorías.
          </p>
          <p>
            La vitamina C está presente en cantidad relevante —cerca del 9 % de la recomendación diaria en 100 g. También tiene potasio, folato y vitamina B6 en cantidades menores. El sodio es prácticamente nulo.
          </p>
          <p>
            Lo que no aparece en la etiqueta nutricional convencional son los fitoquímicos: antocianinas y quercetina. Estos dos compuestos son la razón principal por la que la cebolla morada llama más la atención de los investigadores que la blanca. No es la composición de macronutrientes lo que la distingue —es lo que viene junto.
          </p>
          <p>
            La quercetina de la cebolla se absorbe particularmente bien en el cuerpo. Los estudios muestran una absorción mayor que la de otras fuentes vegetales, como el té. No es un suplemento lo que cambia la ecuación —es la cebolla del mercado de siempre, cruda, en la vinagreta del jueves.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Los principales beneficios de la cebolla morada</h2>

          <p>
            Los beneficios documentados son consistentes con lo que se sabe de las antocianinas y la quercetina en general. Ninguno aparece con una sola comida —son efectos de consumo regular a lo largo del tiempo.
          </p>

          <h3>Acción antioxidante</h3>
          <p>
            Las antocianinas neutralizan radicales libres —moléculas inestables que contribuyen al envejecimiento celular y a enfermedades crónicas. El consumo regular de alimentos ricos en antocianinas se asocia con menor riesgo cardiovascular y metabólico en estudios de largo plazo.
          </p>

          <h3>Efecto antiinflamatorio</h3>
          <p>
            La quercetina es uno de los compuestos antiinflamatorios más estudiados en la alimentación. En ensayos clínicos, muestra una reducción de marcadores inflamatorios frente a placebo. No es antiinflamatoria como un medicamento —el efecto es preventivo y acumulativo.
          </p>

          <h3>Salud cardiovascular</h3>
          <p>
            Estudios controlados muestran que el consumo regular de cebolla puede contribuir a reducir el colesterol LDL (el "malo") y a favorecer una presión arterial saludable. El mecanismo probable involucra los flavonoides —la quercetina principalmente— y su efecto sobre la oxidación del colesterol.
          </p>

          <h3>Efecto prebiótico</h3>
          <p>
            La cebolla tiene fructooligosacáridos (FOS) —fibras que el cuerpo no digiere y que sirven de alimento para las bacterias buenas del intestino. Con consumo regular, contribuyen a una microbiota intestinal más diversa, asociada a la inmunidad y al metabolismo.
          </p>

          <h3>Inmunidad y salud ósea</h3>
          <p>
            La vitamina C contribuye al sistema inmunológico. La quercetina ha mostrado, en estudios de laboratorio, potencial para reducir la actividad de los osteoclastos —las células que degradan el tejido óseo. Los estudios en humanos todavía son limitados, pero es una de las líneas de investigación activas con la cebolla.
          </p>

          {/* CRUDA O COCIDA */}
          <h2 id="cruda-o-cocida">Cruda o cocida: qué cambia</h2>

          <p>
            Las antocianinas son termolábiles —sensibles al calor. Un sofrito largo o una sopa que se cocina 20 minutos destruye una parte importante de ellas. La quercetina es más resistente y aguanta temperaturas moderadas. La fibra no se ve afectada por la cocción.
          </p>
          <p>
            Esto no significa que la cebolla morada cocida sea mala opción. Sigue teniendo fibra, algo de vitamina C, quercetina y minerales. Pero si la intención es aprovechar el diferencial —las antocianinas— cruda es la respuesta.
          </p>

          <ul className="item-list">
            <li>Para máximo aprovechamiento de antioxidantes → cebolla morada cruda en ensalada o aderezada con limón</li>
            <li>Para suavizar el picor sin perder nutrientes → escabeche rápido en vinagre por 5 minutos</li>
            <li>Para sofrito y base de salsas → la cebolla blanca funciona igual de bien y sale más barata</li>
          </ul>

          <p>
            La distinción importa porque cambia la decisión de compra. Si compras cebolla morada solo para sofreír, estás pagando más por algo que va a perder su principal ventaja apenas toque la sartén. Tiene más sentido tener las dos en la lista de compras y usar cada una donde realmente rinde.
          </p>

          {/* CÓMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7601442/pexels-photo-7601442.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Ensalada con cebolla morada en fileteado fino, tomate y hojas verdes — un uso típico casero"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Los Muertos Crew / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Cómo usar la cebolla morada en la cocina</h2>

          <p>
            El uso más obvio es la ensalada —pero la cebolla morada tiene más espacio del que parece en la cocina de todos los días.
          </p>

          <h3>Vinagreta rápida</h3>
          <p>
            Cebolla morada fileteada fina con limón, aceite de oliva y sal. Deja reposar 10 minutos. Queda distinta a la vinagreta con cebolla blanca —más suave, con color más vivo. Funciona sobre arroz con frijoles, pollo a la parrilla o tacos.
          </p>

          <h3>Encurtido rápido</h3>
          <p>
            Cebolla morada con vinagre de manzana, sal, una pizca de azúcar y agua caliente. Espera 30 minutos en el refrigerador. Va bien en hamburguesas, huevo revuelto y sándwiches. Dura hasta una semana y cambia el sabor de lo que le pongas encima.
          </p>

          <h3>Cruda en ensaladas de granos</h3>
          <p>
            Lentejas, garbanzos, frijoles. La cebolla morada cruda y fileteada fina aguanta el peso de los granos y le suma crocancia. Si el picor molesta, un remojo de 10 minutos en agua con hielo lo resuelve —el color queda todavía más vivo después.
          </p>

          <h3>Caramelizada</h3>
          <p>
            El calor destruye las antocianinas, pero la cebolla morada caramelizada tiene un sabor distinto a la blanca —más dulce, con un color que pasa del morado al dorado. En sándwiches, con queso, mezclada en pastas. Si de todos modos vas a caramelizar cebolla, la morada funciona igual de bien.
          </p>

          <h3>En guacamole y dips</h3>
          <p>
            Picada bien pequeña, reemplaza a la cebolla blanca sin el picor tan marcado. En hummus, en dips de frijol, en salsas de yogur —la cebolla morada entra sin dominar el sabor.
          </p>

          <div className="blog-inline-cta">
            <p>Una despensa organizada es la mitad del trabajo. <em>Mise se encarga de la otra mitad.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* ELEGIR Y GUARDAR */}
          <h2 id="elegir-y-guardar">Cómo elegir y guardar la cebolla morada</h2>

          <p>
            A la hora de comprar, una buena cebolla morada se siente firme al tacto. Sin partes blandas, sin verse marchita, con la piel intacta y sin manchas oscuras. El tamaño mediano es más práctico que el grande —se desperdicia menos por uso.
          </p>
          <p>
            Guardarla entera es simple: un lugar fresco, seco y con buena ventilación. No va al refrigerador entera —el frío y la humedad aceleran que se marchite. Lejos de las papas, que liberan etileno e interfieren en cómo maduran las dos.
          </p>
          <p>
            ¿La cortaste y sobró la mitad? Al refrigerador, en un recipiente cerrado. Dura de 3 a 5 días. No la dejes en contacto directo con alimentos de sabor delicado —la cebolla contamina el aroma de lo que tiene cerca.
          </p>
          <p>
            La cebolla morada es una de las hortalizas más fáciles de controlar en una despensa organizada —te das cuenta de que se está acabando antes de que se acabe. A diferencia del ajo, que desaparece sin dejar rastro y solo se nota que falta cuando ya estás frente a la estufa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la cebolla morada</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿La cebolla morada es más saludable que la blanca?</p>
              <p className="faq-a">
                Sí, en términos de antioxidantes. La cebolla morada tiene antocianinas —compuestos que le dan el color y que tienen acción antioxidante y antiinflamatoria comprobada— que la cebolla blanca casi no tiene. Cruda, la morada gana por lejos. En preparaciones con cocción larga, la diferencia se reduce porque el calor destruye parte de las antocianinas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuáles son los principales beneficios de la cebolla morada para la salud?</p>
              <p className="faq-a">
                Los beneficios mejor documentados son: acción antioxidante (por las antocianinas y la quercetina), efecto antiinflamatorio, apoyo a la salud cardiovascular, efecto prebiótico (fibra que alimenta las bacterias buenas del intestino) y refuerzo de la inmunidad por la vitamina C. Los efectos son acumulativos y dependen del consumo regular.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cocinar la cebolla morada elimina los antioxidantes?</p>
              <p className="faq-a">
                En parte. Las antocianinas son sensibles al calor y una parte importante se destruye con la cocción larga. La quercetina es más resistente y aguanta temperaturas moderadas. La fibra no se ve afectada por el calor. Para aprovechar el diferencial, cómela cruda o en escabeche.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánta cebolla morada se puede comer al día?</p>
              <p className="faq-a">
                No hay un límite oficial. Media cebolla mediana (unos 50 g) por comida ya aporta una cantidad relevante de quercetina y antocianinas. Los beneficios se acumulan con el tiempo —el consumo regular importa más que la cantidad en una sola comida. Si eres sensible a los FODMAP, puedes sentir hinchazón con porciones grandes de cebolla cruda.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La cebolla morada es buena para el intestino?</p>
              <p className="faq-a">
                Sí. La cebolla morada tiene fructooligosacáridos (FOS), fibras prebióticas que alimentan las bacterias buenas del intestino. Con consumo regular, contribuye a una microbiota intestinal más diversa. La salvedad: si eres sensible a los FODMAP, puedes sentir hinchazón y gases, sobre todo con cantidades grandes de cebolla cruda.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se le quita el picor a la cebolla morada antes de comerla cruda?</p>
              <p className="faq-a">
                Dos métodos funcionan bien. El primero: deja la cebolla fileteada en remojo en agua con hielo por 10 a 15 minutos —el picor baja bastante sin que pierda la textura crocante. El segundo: adereza con limón o vinagre y deja reposar 5 minutos —la acidez suaviza el sabor. Los dos conservan el color y la mayoría de los nutrientes.
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
                Creador de Mise. Usó cebolla morada por primera vez en una vinagreta un viernes por la noche —esa versión se quedó. La blanca pasó a ser la de sofrito; la morada entró como ítem fijo en la lista.
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
              Compras lo que realmente vas a usar —y la cebolla morada entra a la lista antes de que se acabe.
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
