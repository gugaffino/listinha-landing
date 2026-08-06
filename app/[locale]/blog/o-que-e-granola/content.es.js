import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Qué es la granola: composición, tipos y cómo elegirla',
  description: 'La granola es una mezcla de cereales tostados con frutos secos y fruta deshidratada. Qué es, sus tipos, cómo consumirla y qué revisar en la etiqueta antes de comprarla.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-granola',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-granola',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-granola',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-granola',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-granola',
    },
  },
  openGraph: {
    title: 'Qué es la granola: composición, tipos y cómo elegirla',
    description: 'La granola es una mezcla de cereales tostados con frutos secos y fruta deshidratada. Qué es, sus tipos, cómo consumirla y qué revisar en la etiqueta antes de comprarla.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-granola',
    images: [
      {
        url: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Granola con avena, semillas y fruta deshidratada en primer plano — textura detallada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué es la granola: composición, tipos y cómo elegirla',
    description: 'La granola es una mezcla de cereales tostados con frutos secos y fruta deshidratada. Qué es, sus tipos, cómo consumirla y qué revisar en la etiqueta antes de comprarla.',
    images: ['https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La granola engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La granola es calórica: la mayor parte de su energía viene de los carbohidratos, la grasa de los frutos secos y el azúcar añadido. En porciones de 30 g (3–4 cucharadas), encaja bien en una alimentación equilibrada. El problema suele ser servir el doble o el triple de la porción indicada, sobre todo en las versiones industriales con más azúcar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la porción correcta de granola al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La porción estándar en las etiquetas es de 30 g, unas 3–4 cucharadas, entre 130 y 145 calorías. Usada como topping de yogur o fruta, esa cantidad es fácil de controlar. Servida como plato principal en un tazón hondo, se sirve más de lo que parece.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La granola tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La avena convencional puede tener contaminación cruzada con gluten durante el procesamiento industrial, aunque la avena en sí no lo contiene de forma natural. Si eres celíaco, busca granola hecha con avena certificada sin gluten, o versiones a base de arroz, quinoa o amaranto. La etiqueta necesita el sello de certificación real; que diga "sin gluten" en el empaque no basta por sí solo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre granola dulce y salada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La granola dulce lleva fruta deshidratada, miel o azúcar, y va bien en el desayuno con yogur o leche. La granola salada cambia los endulzantes por hierbas, chile y frutos secos, y funciona en ensaladas, sopas y como snack. La base de avena tostada es la misma en ambos casos; lo que cambia es el condimento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La granola casera es mejor que la industrial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La granola casera te da control total sobre los ingredientes y el azúcar. La industrial es más práctica, pero muchas marcas usan más azúcar y conservadores de los necesarios. Leer la etiqueta resuelve el tema en ambos casos: una granola industrial con pocos ingredientes reconocibles puede ser una buena opción sin necesidad de prender el horno.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se conserva la granola en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En un frasco de vidrio o recipiente hermético, en un lugar seco y lejos de la luz directa, la granola dura bien entre 2 y 3 meses. La humedad es el enemigo: la granola expuesta al aire se ablanda y se echa a perder más rápido. El refrigerador no es necesario para las versiones industriales, pero ayuda con la granola casera hecha con ingredientes más frescos.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Qué es la granola: composición, tipos y cómo elegirla',
  description: 'La granola es una mezcla de cereales tostados con frutos secos y fruta deshidratada. Qué es, sus tipos, cómo consumirla y qué revisar en la etiqueta antes de comprarla.',
  image: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-granola',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es la granola', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-granola' },
  ],
}

export default function GranolaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Qué es la granola</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">6 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Granola: qué es, de qué está hecha y cómo elegir una buena
          </h1>
          <p className="blog-desc">
            Está en todos los desayunos con yogur, le queda bien al açaí y se acaba del frasco antes de lo esperado. Pero ¿qué es la granola en realidad, de qué está hecha y cómo elegir una buena en el supermercado?
          </p>

          <div className="answer-box">
            <p>
              <strong>La granola</strong> es una mezcla de cereales tostados —principalmente avena— combinada con frutos secos,
              semillas y fruta deshidratada, unida con un endulzante como miel o azúcar.
              Existe en versiones industriales y caseras. Se usa sobre todo en el desayuno con yogur o leche,
              pero también aparece en recetas saladas y como snack.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Granola con avena, semillas y fruta deshidratada en primer plano — textura detallada"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la granola</a></li>
              <li><a href="#composicion">De qué está hecha</a></li>
              <li><a href="#nutrientes">Los nutrientes</a></li>
              <li><a href="#tipos">Tipos que vas a encontrar</a></li>
              <li><a href="#como-consumir">Cómo consumirla</a></li>
              <li><a href="#como-elegir">Cómo elegirla en el supermercado</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3551698/pexels-photo-3551698.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Granola en cuchara de madera sobre un tazón — cereales mezclados con fruta deshidratada"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Fallon Michael / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la granola</h2>

          <p>
            La granola es una mezcla de cereales —la avena es siempre la base— tostados con aceite y endulzante hasta quedar crujientes.
            Después del horno, se le agregan fruta deshidratada, frutos secos y semillas.
            El resultado es un producto que aguanta meses guardado y le queda bien a casi cualquier cosa cremosa.
          </p>
          <p>
            Es distinta al muesli, que es crudo y no pasa por el proceso de tostado.
            La granola tiene una textura más crujiente, un sabor más intenso y más calorías por gramo, precisamente por el azúcar y el aceite del horneado.
          </p>
          <p>
            El producto lo creó el médico estadounidense James Caleb Jackson en 1863.
            Preparaba un cereal horneado llamado "granula" para pacientes con dietas restringidas.
            John Harvey Kellogg adaptó la receta, agregó más cereales y la rebautizó como granola.
            Se volvió popular de verdad en los años sesenta y setenta, cuando se convirtió en símbolo de la alimentación natural.
          </p>
          <p>
            Hoy es un producto de desayuno tan común que mucha gente lo pone en el carrito sin detenerse a leer qué lleva dentro.
            Vale la pena hacer la pausa.
          </p>

          {/* COMPOSICIÓN */}
          <h2 id="composicion">De qué está hecha la granola</h2>

          <p>
            Una granola básica tiene cinco componentes: cereal base, grasa, endulzante, frutos secos y fruta deshidratada.
            La proporción entre ellos es lo que determina la calidad —y las calorías.
          </p>

          <p>Los ingredientes típicos de una granola simple y honesta:</p>

          <ul className="item-list">
            <li><strong>Avena en hojuelas</strong> — la base de casi toda granola, principal fuente de fibra</li>
            <li><strong>Aceite vegetal</strong> (canola, coco u oliva) — le da lo crujiente durante el horneado</li>
            <li><strong>Endulzante</strong> — miel, jarabe de maple, azúcar mascabado o panela</li>
            <li><strong>Frutos secos</strong> — almendra, anacardo, nuez, avellana</li>
            <li><strong>Semillas</strong> — linaza, girasol, calabaza, chía</li>
            <li><strong>Fruta deshidratada</strong> — pasas, plátano deshidratado, dátil, arándano seco</li>
          </ul>

          <p>
            La granola industrial puede llevar conservadores, saborizantes y grasa vegetal hidrogenada.
            Las versiones más baratas a veces cambian los frutos secos por más hojuelas y más azúcar.
            Eso se ve en la lista de ingredientes, y es el primer lugar donde fijarte antes de comprar.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">Qué tiene por dentro: los nutrientes</h2>

          <p>
            En 30 g de granola —la porción estándar que indican las etiquetas, unas 3–4 cucharadas— tienes en promedio:
          </p>

          <ul className="item-list">
            <li><strong>~130–145 kcal</strong> — concentradas, principalmente de carbohidratos y grasa</li>
            <li><strong>3–4 g de proteína</strong> — aporte de la avena y los frutos secos</li>
            <li><strong>4–6 g de grasa</strong> — mayormente insaturada, cuando hay frutos secos de verdad</li>
            <li><strong>2–3 g de fibra</strong> — ayuda con la saciedad y la salud digestiva</li>
          </ul>

          <p>
            El problema es que 30 g parece muy poco cuando lo estás sirviendo en el tazón.
            En la práctica, la mayoría de la gente sirve el doble sin darse cuenta.
          </p>
          <p>
            El aporte real de la granola es la fibra —sobre todo la betaglucana de la avena, una fibra soluble
            asociada a la saciedad y al control del colesterol.
            Los frutos secos suman grasa buena y micronutrientes como{' '}
            <a href="/es/blog/alimentos-ricos-em-magnesio">magnesio</a>, zinc y vitamina E.
            La fruta deshidratada agrega antioxidantes y, también, azúcar; ahí está el balance que importa.
          </p>
          <p>
            Una nota honesta: la granola es un complemento nutritivo, no un superalimento.
            El beneficio aparece cuando forma parte de un desayuno variado y equilibrado,
            no cuando es lo único saludable del día.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Barras de granola caseras con avena y fruta deshidratada sobre superficie de madera"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de granola que vas a encontrar</h2>

          <p>
            La versión más común es la granola dulce con fruta deshidratada y miel.
            Pero existen otras variaciones que mucha gente no conoce, y que valen el espacio en la despensa.
          </p>

          <h3>Granola dulce</h3>
          <p>
            La más vendida. Con fruta deshidratada, miel o azúcar, le queda bien al yogur, la leche y los bowls de fruta.
            El nivel de azúcar varía mucho entre marcas; compara la etiqueta, no el nombre del producto.
          </p>

          <h3>Granola salada</h3>
          <p>
            Sin endulzante. Lleva hierbas, chile, ajo deshidratado y frutos secos.
            Funciona como topping de ensaladas y sopas, o como snack directo.
            Es menos conocida en el supermercado normal, pero aparece en tiendas naturistas y en línea.
            Si todavía no has probado granola salada en una ensalada verde, esta es la semana para hacerlo.
          </p>

          <h3>Granola sin gluten</h3>
          <p>
            Usa avena certificada sin gluten, o cambia la base por arroz, quinoa o amaranto.
            Pensada para quien tiene enfermedad celíaca o sensibilidad al gluten.
            La etiqueta necesita el sello de certificación real; que diga "sin gluten" en el diseño del empaque no basta.
          </p>

          <h3>Granola sin azúcar añadida</h3>
          <p>
            Endulzada solo con fruta, o sin ningún endulzante.
            Tiene menos calorías y es una opción para quien controla el carbohidrato simple.
            El sabor es menos intenso que el de la versión dulce, pero funciona bien mezclada con fruta fresca.
          </p>

          <h3>Granola casera</h3>
          <p>
            Hecha en casa con ingredientes que tú eliges.
            Control total: tipo de azúcar, cantidad de frutos secos, sin conservadores.
            El esfuerzo es bajo: 20 a 25 minutos en el horno a 160°C, revolviendo de vez en cuando.
            Es una buena opción para sumar al{' '}
            <a href="/es/blog/cardapio-semanal-simples-caseiro">plan semanal</a>{' '}
            del fin de semana.
          </p>

          {/* CÓMO CONSUMIR */}
          <h2 id="como-consumir">Cómo consumir granola en el día a día</h2>

          <p>
            La granola le queda bien a cualquier cosa cremosa, líquida o que necesite un poco de textura crujiente.
            Las combinaciones más comunes:
          </p>

          <ul className="item-list">
            <li><strong>Con yogur natural</strong> — la combinación más clásica, equilibrada en proteína y fibra</li>
            <li><strong>Con leche o bebida vegetal</strong> — absorbe el líquido, pierde lo crujiente, se parece más a un cereal</li>
            <li><strong>En bowls de fruta o açaí</strong> — le suma textura y proteína</li>
            <li><strong>Con fruta fresca</strong> — plátano, fresas, mango, la fruta de temporada</li>
            <li><strong>Como snack seco</strong> — directo del frasco, sin nada más</li>
          </ul>

          <p>
            La granola salada abre otras posibilidades: ensalada verde con granola en lugar de croutones,
            o sopa de calabaza con granola de hierbas por encima.
            Menos obvio, pero funciona bien.
          </p>

          <div className="blog-inline-cta">
            <p>Granola en todos los desayunos. <em>Ponla en la lista antes de que se acabe.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CÓMO ELEGIR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8892364/pexels-photo-8892364.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tazón de yogur con granola y frutos rojos visto desde arriba — desayuno saludable"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anastasia Belousova / Pexels</p>
          </div>

          <h2 id="como-elegir" className="img-above">Cómo elegir granola en el supermercado</h2>

          <p>
            El nombre del producto no dice mucho. "Natural", "original", "premium", "artesanal" son palabras
            sin regulación específica en la etiqueta.
            Lo que realmente importa es la lista de ingredientes y la tabla nutricional.
          </p>

          <h3>El primer ingrediente es el más importante</h3>
          <p>
            Los ingredientes aparecen en la etiqueta en orden decreciente de cantidad.
            Si el primero es "avena" o cualquier cereal, es una buena base.
            Si es "azúcar", "jarabe de glucosa" o "harina enriquecida", el producto es más postre que cereal.
          </p>

          <h3>¿Cuánta azúcar es demasiada?</h3>
          <p>
            En la porción de 30 g: hasta 5 g de azúcar total es razonable para una granola dulce.
            Por encima de 8 g ya es mucho; estás comprando dulce con avena, no al revés.
            Muchas granolas de supermercado quedan entre 6 g y 9 g por cada 30 g.
          </p>

          <h3>Grasas trans y fibra</h3>
          <p>
            La grasa trans debe aparecer como 0 g. Si no es así, descártala; mucha granola barata usa grasa vegetal
            hidrogenada para dar textura crujiente sin gastar en frutos secos de verdad.
            Para la fibra: mínimo 2,5 g por cada 30 g. Por debajo de eso, hay poca avena real.
            Una proteína de 3 g o más suele indicar que sí hay frutos secos en la mezcla.
          </p>

          <h3>Reconoce los ingredientes</h3>
          <p>
            La granola buena es simple: puedes reconocer todo lo que dice la lista.
            Avena, miel, almendra, pasas: tiene sentido.
            "Jarabe de glucosa, maltodextrina, saborizante artificial de vainilla" ya es otra historia.
          </p>

          <p>
            Una vez que elijas, guárdala en un frasco cerrado lejos de la humedad.
            La granola pierde lo crujiente rápido si queda expuesta al aire.
            En una <a href="/es/funcionalidades/despensa">despensa</a> bien organizada, dura hasta tres meses sin problema.
          </p>
          <p>
            Cuando se acabe —lo que pasa antes de lo esperado— solo hay que agregarla a la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            antes de ir al súper. O dejarla como artículo fijo en tu lista semanal, porque siempre hace falta de nuevo.
          </p>
          <p>
            Una buena granola empieza en la etiqueta, no en el nombre del producto.
            El resto es solo un buen desayuno.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la granola</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿La granola engorda?</p>
              <p className="faq-a">
                Es calórica: la mayor parte de la energía viene de carbohidratos, grasa y azúcar añadida. En porciones de 30 g (3–4 cucharadas), encaja bien en una alimentación equilibrada. El problema suele ser servir el doble o el triple de esa porción, sobre todo en las versiones industriales con más azúcar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la porción correcta de granola al día?</p>
              <p className="faq-a">
                La porción estándar en las etiquetas es de 30 g —unas 3–4 cucharadas, entre 130 y 145 calorías según la mezcla. Como topping de yogur o fruta, esa cantidad es fácil de controlar. Servida como plato principal en un tazón hondo, se sirve más de lo que parece.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La granola tiene gluten?</p>
              <p className="faq-a">
                La avena convencional puede tener contaminación cruzada con gluten durante el procesamiento industrial, aunque la avena en sí no lo contiene de forma natural. Si eres celíaco, busca granola con avena certificada sin gluten, o versiones a base de arroz, quinoa o amaranto. La etiqueta necesita el sello de certificación real; que diga "sin gluten" en el empaque no basta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre granola dulce y salada?</p>
              <p className="faq-a">
                La granola dulce lleva fruta deshidratada, miel o azúcar y va bien en el desayuno con yogur o leche. La granola salada cambia los endulzantes por hierbas, chile y frutos secos, y funciona en ensaladas, sopas y como snack. La base de avena tostada es la misma; lo que cambia es el condimento y el uso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La granola casera es mejor que la industrial?</p>
              <p className="faq-a">
                La granola casera te da control total sobre los ingredientes y el azúcar. La industrial es más práctica, pero muchas marcas usan más azúcar y conservadores de los necesarios. Leer la etiqueta resuelve el tema: una granola industrial con pocos ingredientes reconocibles puede ser una buena opción sin necesidad de prender el horno.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se conserva la granola en casa?</p>
              <p className="faq-a">
                En un frasco de vidrio o recipiente hermético, en un lugar seco y lejos de la luz directa, dura bien entre 2 y 3 meses. La humedad es el enemigo: la granola expuesta al aire se ablanda y se echa a perder más rápido. El refrigerador no es necesario para las versiones industriales, pero ayuda con la granola casera hecha con ingredientes más frescos.
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
                Creador de Mise. Compra granola todas las semanas para ponerle al yogur. Se come la mitad antes de llegar a casa. El yogur sigue esperando.
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
              Compras lo que realmente vas a usar —y la granola no desaparece antes de volverse desayuno.
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
