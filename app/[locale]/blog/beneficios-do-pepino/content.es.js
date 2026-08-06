import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Beneficios del pepino: tabla nutricional y cómo usarlo',
  description: 'El pepino tiene entre 12 y 16 kcal por 100 g y más del 95% de agua. Conoce sus beneficios, el valor nutricional completo, los tipos que existen y cómo usarlo en la cocina.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-pepino',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-pepino',
      en: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-pepino',
      es: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-pepino',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-pepino',
    },
  },
  openGraph: {
    title: 'Beneficios del pepino: tabla nutricional y cómo usarlo',
    description: 'El pepino tiene entre 12 y 16 kcal por 100 g y más del 95% de agua. Conoce sus beneficios, el valor nutricional completo, los tipos que existen y cómo usarlo en la cocina.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-pepino',
    images: [
      {
        url: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pepinos frescos enteros apilados en primer plano — vegetales verdes brillantes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficios del pepino: tabla nutricional y cómo usarlo',
    description: 'El pepino tiene entre 12 y 16 kcal por 100 g y más del 95% de agua. Conoce sus beneficios, el valor nutricional completo, los tipos que existen y cómo usarlo en la cocina.',
    images: ['https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El pepino ayuda a bajar de peso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ningún alimento adelgaza por sí solo. Pero con unas 15 kcal por 100 g y más del 95% de agua, el pepino le da volumen a una comida sin sumar calorías. Eso ayuda a sentirte satisfecho y facilita controlar el total calórico del día —lo que contribuye a bajar de peso dentro de una alimentación equilibrada, no por sí mismo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer el pepino con cáscara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La cáscara es comestible y tiene más fibra que la pulpa. En el pepino persa y en el inglés es fina y casi imperceptible. En variedades de cáscara más gruesa puede tener un ligero amargor —en ese caso, pélalo si te molesta. Lávalo siempre bien antes de comerlo con cáscara.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el pepino persa y el criollo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El criollo es más grande, con cáscara más gruesa, más semillas y pulpa firme —bueno para ensaladas con vinagreta y para encurtidos. El persa es más pequeño, con cáscara fina, casi sin semillas y sabor más suave —se come entero, sin pelar. El criollo suele ser más barato.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pepino es una fruta o una verdura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Botánicamente es un fruto —se desarrolla a partir de la flor y tiene semillas. En la cocina y en el mercado se trata como verdura por su sabor neutro y su uso en platos salados. Las dos respuestas son correctas según el contexto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura el pepino en el refrigerador?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entero, de 7 a 10 días en el cajón de verduras. No lo laves antes de guardarlo —la humedad acelera que se ablande. Cortado, úsalo dentro de 2 días cubierto con plástico. Para que dure más, prepara un encurtido rápido con sal y vinagre —se conserva hasta 2 semanas en un frasco cerrado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pepino tiene vitamina C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí tiene —cerca de 2,8 mg por 100 g, según USDA FoodData Central. No es una fuente destacada si la comparas con el pimiento o la naranja, pero suma al total del día. Está presente tanto en la cáscara como en la pulpa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pepino es bueno para la piel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La vitamina C participa en la síntesis de colágeno y el alto contenido de agua ayuda a la hidratación. Ponerse rodajas de pepino en la cara es un hábito popular, pero el efecto es superficial y temporal. El beneficio real viene de comer el pepino, no de aplicarlo sobre la piel.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Beneficios del pepino: tabla nutricional y cómo usarlo',
  description: 'El pepino tiene entre 12 y 16 kcal por 100 g y más del 95% de agua. Conoce sus beneficios, el valor nutricional completo, los tipos que existen y cómo usarlo en la cocina.',
  image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/beneficios-do-pepino',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Beneficios del pepino', item: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-pepino' },
  ],
}

export default function BeneficiosDelPepinoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Beneficios del pepino</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-04">4 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Pepino: por qué vale la pena tenerlo siempre en la lista
          </h1>
          <p className="blog-desc">
            Ese vegetal que todos compran para la ensalada y terminan olvidando en el cajón. Con unas 15 kcal por 100 g y más del 95% de agua, el pepino es uno de los más versátiles de la verdulería —y uno de los menos aprovechados.
          </p>

          <div className="answer-box">
            <p>
              <strong>El pepino</strong> (<em>Cucumis sativus</em>) es un fruto de la familia de las cucurbitáceas, con cerca de 95% de agua y unas 15 kcal por 100 g.
              Tiene cáscara verde, pulpa clara y semillas en el centro. Se consigue todo el año en distintas variedades —el criollo, el persa y el inglés son las más comunes en Latinoamérica.
              Es barato, aguanta bien en el refrigerador y sirve para mucho más que ensalada.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pepinos frescos enteros apilados en primer plano — vegetales verdes brillantes"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Lo / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el pepino</a></li>
              <li><a href="#valor-nutricional">Valor nutricional</a></li>
              <li><a href="#beneficios">Beneficios del pepino</a></li>
              <li><a href="#tipos">Tipos de pepino</a></li>
              <li><a href="#como-usar">Cómo usarlo en la cocina</a></li>
              <li><a href="#como-guardar">Cómo elegirlo y guardarlo</a></li>
              <li><a href="#vale-la-pena">Vale la pena ponerlo en la lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4929719/pexels-photo-4929719.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rodajas de pepino y zanahoria en un plato blanco — preparación para una ensalada ligera"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Justin Doherty / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el pepino</h2>

          <p>
            El pepino (<em>Cucumis sativus</em>) es técnicamente un fruto, no una verdura —hablando en términos botánicos. Esa distinción no cambia nada en la cocina, donde siempre se trata como verdura. Lo que sí importa: es de la misma familia que el calabacín, el melón y la sandía. Eso explica la textura acuosa y el sabor neutro.
          </p>
          <p>
            La pulpa es blanca o ligeramente verdosa, con semillas en el centro que varían según la variedad. La cáscara es comestible en la mayoría de los casos. El sabor es suave, con un frescor que funciona tanto como base neutra como en combinaciones más intensas —salsa de yogur, salsa de soya, vinagre.
          </p>
          <p>
            Existen decenas de variedades de pepino en el mundo. En los mercados de Latinoamérica, las que más vas a encontrar son el criollo, el persa y el inglés —cada una con características que cambian su uso en la cocina.
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="valor-nutricional">Valor nutricional del pepino</h2>

          <p>
            A continuación, los principales nutrientes del pepino crudo con cáscara, por 100 g, según{' '}
            <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener">USDA FoodData Central</a>.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Nutriente</th>
                <th>Por 100 g</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Energía</td>
                <td>15 kcal</td>
              </tr>
              <tr>
                <td>Agua</td>
                <td>95%</td>
              </tr>
              <tr>
                <td>Proteína</td>
                <td>0,65 g</td>
              </tr>
              <tr>
                <td>Carbohidratos</td>
                <td>3,6 g</td>
              </tr>
              <tr>
                <td>Fibra</td>
                <td>0,5 g</td>
              </tr>
              <tr>
                <td>Grasa total</td>
                <td>{'<'}0,2 g</td>
              </tr>
              <tr>
                <td>Potasio</td>
                <td>147 mg</td>
              </tr>
              <tr>
                <td>Vitamina K</td>
                <td>16,4 mcg</td>
              </tr>
              <tr>
                <td>Vitamina C</td>
                <td>2,8 mg</td>
              </tr>
            </tbody>
          </table>

          <p>
            Estos números explican por qué el pepino aparece tanto en dietas con control de calorías: puedes comer 300 g y quedarte por debajo de las 50 kcal. El volumen es real, la caloría es mínima.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios del pepino para la salud</h2>

          <p>
            Con 95% de agua en su peso, el pepino es una de las verduras más hidratantes que puedes comprar. Comer alimentos ricos en agua suma a tu hidratación general —no reemplaza tomar agua, pero se acumula con ella. En días de calor o después de hacer ejercicio, esa diferencia se nota.
          </p>
          <p>
            El potasio —147 mg por 100 g— tiene un papel en el control de la presión arterial. El mecanismo es directo: el potasio ayuda a los riñones a eliminar sodio. Para quien tiene una dieta alta en sodio, sumar alimentos ricos en potasio a lo largo del día es una forma práctica de compensarlo.
          </p>
          <p>
            El pepino también es una de las pocas verduras con una cantidad relevante de vitamina K —cerca del 14% del valor diario en una porción de 100 g. La vitamina K participa en la coagulación de la sangre y en la salud de los huesos, y casi nadie piensa en buscarla fuera de las hojas verdes.
          </p>
          <p>
            Existe la creencia de que el pepino hace milagros para la piel. La vitamina C que aporta (2,8 mg/100 g) sí participa en la producción de colágeno —eso es real. Lo que el pepino no hace es "desintoxicar" nada. La desintoxicación es trabajo del hígado y los riñones, que funcionan bien sin necesitar ayuda de una verdura en particular.
          </p>
          <p>
            El pepino es uno de los productos que más se compra en la verdulería y, al mismo tiempo, uno de los que más se desperdicia —no por falta de beneficios, sino por falta de plan. Se compra para una ensalada que nunca se hace, y termina blando en el cajón antes de que alguien lo note.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Ensalada colorida con pepino en rodajas en un plato — combinación fresca de verduras"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Chan Walrus / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de pepino</h2>

          <p>
            Saber qué pepino estás comprando cambia el resultado en la cocina. La diferencia entre el persa y el criollo no es solo el tamaño —es la textura, la cantidad de semillas y para qué sirve mejor cada uno.
          </p>

          <h3>Pepino criollo</h3>
          <p>
            El pepino tradicional que encuentras en la mayoría de los mercados. Más grande, cáscara más gruesa, más semillas y pulpa firme. Bueno para ensaladas con vinagreta y para encurtidos. Es el más barato y el más fácil de conseguir todo el año. La cáscara puede tener un ligero amargor —si te molesta, pélalo o elige uno más pequeño.
          </p>

          <h3>Pepino persa</h3>
          <p>
            Pequeño, casi sin semillas, cáscara fina y tierna. El más práctico de todos: se come entero como snack, sin pelar ni sacar semillas. Ideal para encurtidos rápidos y para cortar en bastones. Se consigue con facilidad en supermercados grandes.
          </p>

          <h3>Pepino inglés (europeo)</h3>
          <p>
            Largo y delgado, normalmente envuelto en plástico en el supermercado. Casi sin semillas visibles, cáscara fina, sabor muy suave. Bueno para cortar en rodajas finas para ensaladas o para botanas. El plástico protege la cáscara, que es donde está buena parte del sabor y la textura.
          </p>

          <h3>Pepinillo (para encurtir)</h3>
          <p>
            Pequeño, de cáscara rugosa, pulpa firme y menos acuosa que las otras variedades —pensado para mantener su crocancia durante el encurtido. No es la mejor opción para comer crudo en ensalada, por la cáscara más gruesa, pero es la elección clásica para pepinillos caseros.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar el pepino en la cocina</h2>

          <p>
            El pepino va mucho más allá de la ensalada con sal. Conocer otros usos ayuda a que lo que compraste se aproveche de verdad —y no termine descartado el viernes.
          </p>

          <h3>En ensaladas</h3>
          <p>
            El uso más obvio, y fácil de hacer mal. El pepino en rodajas finas mantiene mejor la textura y se mezcla mejor con el aderezo. Las rodajas gruesas se ponen acuosas rápido si llevan mucho tiempo condimentadas. Sazona justo antes de comer, no antes.
          </p>

          <h3>Como snack</h3>
          <p>
            Bastones de pepino persa o inglés con hummus, salsa de ajo o salsa de yogur son un antojo rápido sin necesidad de cocinar. Corta, agrega sal y limón si quieres, y listo. Funciona bien para quien busca algo ligero entre comidas.
          </p>

          <h3>En salsas frías</h3>
          <p>
            El tzatziki, el raita indio, la salsa de yogur con pepino —todas estas preparaciones usan el pepino como base. La lógica es la misma en todas: el agua y el frescor del pepino equilibran la grasa y la acidez. Rállalo, exprímelo bien para quitar el exceso de agua, mézclalo con yogur, ajo y hierbas.
          </p>

          <h3>En encurtidos</h3>
          <p>
            La forma más eficiente de aprovechar el pepino que te está sobrando. Córtalo en rodajas, cúbrelo con una mezcla de agua, vinagre, sal y azúcar. Déjalo en el refrigerador al menos 2 horas. Se conserva hasta 2 semanas en un frasco cerrado. Combina bien con sándwiches, carne asada y con casi cualquier plato del día a día.
          </p>

          <h3>Cocido</h3>
          <p>
            Poco común, pero funciona. El pepino salteado queda con una textura parecida al calabacín —tiene sentido, son de la misma familia. En un salteado rápido con ajo y aceite de oliva, queda bien. No necesita más de 3 a 4 minutos al fuego para ablandarse sin deshacerse.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CÓMO GUARDAR */}
          <h2 id="como-guardar">Cómo elegir y guardar el pepino</h2>

          <p>
            En el mercado, elige el pepino firme y de color uniforme. Que esté blando en la punta o tenga manchas amarillas es señal de que ya pasó su punto. La cáscara debe tener un brillo ligero —opaca es señal de tiempo.
          </p>
          <p>
            En casa, guárdalo en el cajón de verduras del refrigerador, sin lavar. El pepino absorbe humedad y se ablanda si se moja. Entero, dura de 7 a 10 días. Cortado, cúbrelo con plástico y úsalo dentro de 2 días —después la pulpa empieza a soltar agua y la textura se pierde.
          </p>
          <p>
            Si compraste más de lo que vas a usar, prepara un encurtido rápido: córtalo en rodajas, cúbrelo con vinagre, sal y un poco de azúcar. En un frasco cerrado en el refrigerador, dura hasta 2 semanas. Es la forma más simple de aprovechar el exceso antes de que se convierta en desperdicio.
          </p>
          <p>
            Buena parte de lo que se desperdicia en una casa se compra sin un plan de uso claro, y el pepino es uno de los que más se repite en esa lista. Saber más o menos cuánto pepino vas a usar antes de comprarlo es la decisión más simple —y la que hace diferencia real.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena ponerlo en la lista</h2>

          <p>
            Sí. Es uno de los casos más directos. El pepino es barato, se consigue todo el año, aguanta bien en el refrigerador y sirve para más usos de los que la mayoría explora.
          </p>
          <p>
            El único cuidado es comprar la cantidad correcta. Si cocinas para 1 o 2 personas, con 2 o 3 pepinos alcanza para la semana. Comprar más de eso empieza a correr el riesgo de que el cajón haga su propia selección natural.
          </p>
          <p>
            El pepino entra bien como producto fijo en la lista de compras de quien cocina durante la semana. Es de esas verduras que rinden para varias comidas distintas sin esfuerzo extra.
          </p>
          <p>
            Mantener la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            al día ayuda a comprar mejor. Saber que todavía tienes pepino evita comprarlo de nuevo en la siguiente ida al mercado —y evita la típica escena de dos pepinos ablandándose al mismo tiempo, sin plan para ninguno de los dos.
          </p>
          <p>
            En la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>
            , el pepino entra con más intención cuando ya sabes para qué lo vas a usar. "Pepino para la ensalada del lunes" cierra el motivo antes de salir del mercado —y reduce la probabilidad de que termine solo en el cajón hasta el viernes.
          </p>
          <p>
            El pepino no desaparece del cajón por arte de magia. Desaparece porque olvidas que lo compraste.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el pepino</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El pepino ayuda a bajar de peso?</p>
              <p className="faq-a">
                Ningún alimento adelgaza por sí solo. Pero con unas 15 kcal por 100 g y más del 95% de agua, el pepino le da volumen a una comida sin sumar calorías. Eso ayuda a sentirte satisfecho y facilita controlar el total calórico del día —lo que contribuye a bajar de peso dentro de una alimentación equilibrada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer el pepino con cáscara?</p>
              <p className="faq-a">
                Sí. La cáscara es comestible y tiene más fibra que la pulpa. En el pepino persa y en el inglés es fina y casi imperceptible. En variedades de cáscara más gruesa puede tener un ligero amargor —en ese caso, pélalo si te molesta. Lávalo siempre bien antes de comerlo con cáscara.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el pepino persa y el criollo?</p>
              <p className="faq-a">
                El criollo es más grande, con cáscara más gruesa, más semillas y pulpa firme —bueno para ensaladas y encurtidos. El persa es más pequeño, con cáscara fina, casi sin semillas y sabor más suave —se come entero, sin pelar. El criollo suele ser más barato.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pepino es una fruta o una verdura?</p>
              <p className="faq-a">
                Botánicamente es un fruto —se desarrolla a partir de la flor y tiene semillas. En la cocina y en el mercado se trata como verdura por su sabor neutro y su uso en platos salados. Las dos respuestas son correctas según el contexto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto dura el pepino en el refrigerador?</p>
              <p className="faq-a">
                Entero, de 7 a 10 días en el cajón de verduras. No lo laves antes de guardarlo —la humedad acelera que se ablande. Cortado, úsalo dentro de 2 días cubierto con plástico. Para que dure más, prepara un encurtido rápido con sal y vinagre —se conserva hasta 2 semanas en un frasco cerrado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pepino tiene vitamina C?</p>
              <p className="faq-a">
                Sí tiene —cerca de 2,8 mg por 100 g, según USDA FoodData Central. No es una fuente destacada si la comparas con el pimiento o la naranja, pero suma al total del día. Está presente tanto en la cáscara como en la pulpa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pepino es bueno para la piel?</p>
              <p className="faq-a">
                La vitamina C participa en la síntesis de colágeno y el alto contenido de agua ayuda a la hidratación. Ponerse rodajas de pepino en la cara es un hábito popular, pero el efecto es superficial y temporal. El beneficio real viene de comer el pepino, no de aplicarlo sobre la piel.
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
                Creador de Mise. Compra pepino cada semana con la intención de hacer ensalada. Lo encuentra el viernes, blando en el cajón. Hizo un encurtido rápido una vez y funcionó. Se le olvidó que había funcionado. Va a repetir este ciclo indefinidamente.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabes lo que hay en la despensa.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Despensa, recetas y lista de compras en un solo lugar.
              El pepino entra en la lista cuando lo necesitas —y sale del cajón antes de ablandarse.
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
