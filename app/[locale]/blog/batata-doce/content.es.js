import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Camote: información nutricional, tipos y cómo cocinarlo',
  description: 'El camote (batata, boniato) aporta betacaroteno, fibra y carbohidratos de absorción lenta. Descubre su valor nutricional, variedades y cómo guardarlo y cocinarlo sin desperdiciar nada.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/batata-doce',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/batata-doce',
      en: 'https://www.miseemcasa.com.br/en/blog/batata-doce',
      es: 'https://www.miseemcasa.com.br/es/blog/batata-doce',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/batata-doce',
    },
  },
  openGraph: {
    title: 'Camote: información nutricional, tipos y cómo cocinarlo',
    description: 'El camote (batata, boniato) aporta betacaroteno, fibra y carbohidratos de absorción lenta. Descubre su valor nutricional, variedades y cómo guardarlo y cocinarlo sin desperdiciar nada.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/batata-doce',
    images: [
      {
        url: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Camotes naranjas frescos en primer plano sobre una superficie oscura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camote: información nutricional, tipos y cómo cocinarlo',
    description: 'El camote (batata, boniato) aporta betacaroteno, fibra y carbohidratos de absorción lenta. Descubre su valor nutricional, variedades y cómo guardarlo y cocinarlo sin desperdiciar nada.',
    images: ['https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El camote es lo mismo que el ñame?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Son plantas distintas, de familias distintas. El ñame (género Dioscorea) es más fibroso, más seco y típico de África Occidental y el Caribe, y casi nunca se vende en los supermercados de América Latina. La confusión viene de que en algunos países se usan "camote", "batata" y "boniato" como sinónimos del mismo tubérculo (Ipomoea batatas), pero ninguno de esos tres es ñame.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El camote engorda o ayuda a bajar de peso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ningún alimento por sí solo hace que subas o bajes de peso. El camote llena, aporta nutrientes y tiene menos calorías que muchas otras fuentes de carbohidratos. Dentro de una dieta equilibrada, entra bien sin ser el problema. Lo que importa es el patrón general de lo que comes, no un ingrediente aislado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el índice glucémico del camote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende mucho de cómo lo cocines. Hervido, el índice glucémico está entre 44 y 61 — bajo a moderado. Al horno puede subir a 80 o incluso 90, porque el calor seco convierte más almidón en azúcares simples. Si te importa la respuesta glucémica, hervirlo o cocinarlo al vapor lo mantiene más bajo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer la cáscara del camote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y en general conviene hacerlo. La cáscara concentra buena parte de la fibra y los minerales. Lávala bien bajo el chorro de agua antes de cocinar. Asado entero o en trozos grandes con cáscara es la forma más simple de aprovechar todo el alimento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer el camote crudo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No es tóxico, pero el almidón crudo es difícil de digerir y puede causar molestias estomacales. La textura además es dura y almidonada, no agradable. Cocido — hervido, horneado o asado — es cuando el sabor y la digestibilidad realmente funcionan.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura el camote cocido en el refrigerador?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En un recipiente cerrado en el refrigerador, entre tres y cinco días. También se puede congelar en porciones — hecho puré o en cubos — y mantiene buena textura hasta por tres meses, listo para sopas, purés o rellenos.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Camote: información nutricional, tipos y cómo cocinarlo',
  description: 'El camote (batata, boniato) aporta betacaroteno, fibra y carbohidratos de absorción lenta. Descubre su valor nutricional, variedades y cómo guardarlo y cocinarlo sin desperdiciar nada.',
  image: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-25',
  dateModified: '2026-07-25',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/batata-doce',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Camote', item: 'https://www.miseemcasa.com.br/es/blog/batata-doce' },
  ],
}

export default function BatataDoceEs() {
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
            <li className="breadcrumb-current" aria-current="page">Camote</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-25">25 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Camote 101: valor nutricional, variedades y cómo aprovecharlo sin desperdiciar nada
          </h1>
          <p className="blog-desc">
            Uno de los tubérculos más completos y baratos que existen — y también uno de los que más termina brotando al fondo de la despensa. Esto es lo que realmente contiene, cómo elegirlo bien, cómo guardarlo y cómo cocinarlo.
          </p>

          <div className="answer-box">
            <p>
              El <strong>camote</strong> (<em>Ipomoea batatas</em>) — también llamado batata o boniato según el país —
              es un tubérculo de pulpa naranja, blanca o morada, rico en betacaroteno, fibra y carbohidratos
              complejos de índice glucémico bajo a moderado. Se cultiva y se vende todo el año, y es uno de los
              alimentos más nutritivos y accesibles que puedes poner en el carrito.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Camotes naranjas frescos en primer plano sobre una superficie oscura"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Jorge Romero / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el camote</a></li>
              <li><a href="#valor-nutricional">Información nutricional</a></li>
              <li><a href="#tipos">Tipos de camote</a></li>
              <li><a href="#como-elegir">Cómo elegirlo en el mercado</a></li>
              <li><a href="#como-guardar">Cómo guardarlo en casa</a></li>
              <li><a href="#como-cocinar">Cómo cocinarlo</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/89247/pexels-photo-89247.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Camote cortado a la mitad mostrando el interior naranja intenso"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ela Haney / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el camote</h2>

          <p>
            El camote (<em>Ipomoea batatas</em>) es un tubérculo de la familia Convolvulaceae, la misma de la campanilla.
            No tiene parentesco cercano con la papa común (<em>Solanum tuberosum</em>), que pertenece a la familia
            de las solanáceas. El parecido del nombre es pura coincidencia botánica, y lleva generaciones confundiendo a la gente.
          </p>
          <p>
            El nombre cambia según el país: camote en México, Perú, Centroamérica y buena parte de la región andina;
            batata en Argentina, Uruguay, Paraguay y el Caribe; boniato en España y Cuba. Es el mismo alimento —
            la etiqueta simplemente varía según dónde hagas el mercado.
          </p>
          <p>
            La parte que se come es la raíz tuberosa, no el tallo. La planta crece rastrera, con hojas en forma de corazón.
            En la mayoría de las regiones productoras se cosecha todo el año, por eso se mantiene barato y disponible
            sin importar la temporada.
          </p>
          <p>
            El color de la pulpa depende de la variedad: naranja (la más común), blanca, amarilla o morada.
            La pulpa naranja tiene la mayor cantidad de betacaroteno, el compuesto que tu cuerpo convierte en vitamina A.
            La morada es rica en antocianinas, compuestos antioxidantes estudiados por su papel en la salud cardiovascular.
          </p>
          <p>
            El sabor es naturalmente dulce, y se vuelve más dulce con la cocción — el calor convierte parte del almidón
            en maltosa. Por eso un camote asado sabe más dulce que uno hervido.
          </p>
          <p>
            El camote y la papa son parientes lejanos — más o menos como tú y ese primo que solo ves en las fiestas,
            técnicamente "de la misma familia".
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="valor-nutricional">Información nutricional del camote</h2>

          <p>
            Un camote mediano, asado con cáscara (unos 114g), tiene aproximadamente 100 calorías, 24g de carbohidratos,
            4g de fibra y 2g de proteína, según{' '}
            <a href="https://fdc.nal.usda.gov" target="_blank" rel="noopener">USDA FoodData Central</a>.
          </p>
          <p>
            Lo que más destaca es el betacaroteno. Un camote mediano de pulpa naranja puede cubrir más del 100%
            de la ingesta diaria recomendada de vitamina A. Sin suplemento, sin producto fortificado — solo el tubérculo.
          </p>
          <p>
            La fibra es donde le gana en silencio a muchos acompañamientos. Comparado con el arroz blanco
            — apenas 0,4g de fibra por cada 100g cocido — el camote tiene alrededor de siete veces más fibra
            en la misma cantidad. También aporta más potasio que un plátano, gramo por gramo.
          </p>

          <h3>Vitaminas y minerales que vale la pena conocer</h3>
          <p>
            Además del betacaroteno, el camote aporta vitamina C, vitamina B6, potasio y manganeso en cantidades
            relevantes. El potasio participa en la regulación de la presión arterial. La vitamina B6 interviene
            en el metabolismo de las proteínas y en el funcionamiento del sistema nervioso.
          </p>

          <h3>Índice glucémico</h3>
          <p>
            El índice glucémico del camote depende de cómo lo cocines. Hervido, se ubica entre 44 y 61 —
            bajo a moderado. Al horno puede subir a 80 o incluso 90, porque el calor seco convierte más
            almidón en azúcares simples.
          </p>
          <p>
            Eso no significa que hornearlo sea una mala idea. Significa que el método de cocción importa
            cuando la respuesta glucémica es una prioridad para ti. Comerlo con cáscara y no pasarte del punto
            de cocción ayudan a mantener esa respuesta más baja.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13059602/pexels-photo-13059602.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Camotes enteros sin pelar sobre una superficie rústica en primer plano"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Marcelo Verfe / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de camote</h2>

          <p>
            Existen decenas de variedades, pero en el mercado la forma práctica de distinguirlas es por el
            color de la piel y de la pulpa.
          </p>

          <h3>Camote de pulpa naranja</h3>
          <p>
            El que más vas a encontrar. Piel de tono cobrizo a rojizo, pulpa naranja intensa, el contenido
            más alto de betacaroteno del grupo. Sabor marcadamente dulce, textura suave una vez cocido.
            Funciona asado, hervido, en puré o en sopa.
          </p>

          <h3>Camote blanco</h3>
          <p>
            Piel bronceada o café clara, pulpa blanca a crema. Sabor más suave, menos dulce, textura más firme.
            Bueno para platos donde el dulzor del naranja compite con otros sabores — chips, guarniciones saladas
            o recetas más delicadas.
          </p>

          <h3>Camote morado</h3>
          <p>
            Menos común en el supermercado estándar, más fácil de encontrar en mercados locales o tiendas
            de productos naturales. Piel y pulpa profundamente moradas, por las mismas antocianinas que le dan
            color al repollo morado. El sabor es ligeramente terroso. Una opción llamativa para puré, licuados
            o cualquier plato que quiera verse diferente.
          </p>

          <h3>Camote japonés</h3>
          <p>
            Piel morada rojiza con pulpa clara, casi blanca, que se vuelve cremosa y densa al hornearse.
            El sabor recuerda a la castaña — más seco y menos aguado que el naranja.
            Se ha vuelto un favorito de mercados especializados, y rinde especialmente bien asado entero.
          </p>

          {/* CÓMO ELEGIR */}
          <h2 id="como-elegir">Cómo elegir camote en el mercado</h2>

          <p>
            Elegir un buen camote no requiere mucha ciencia. Unos cuantos chequeos prácticos te evitan una mala compra.
          </p>

          <ul className="item-list">
            <li><strong>Piel firme y lisa.</strong> Evita los que estén blandos, hundidos u oscurecidos — señal de que empiezan a echarse a perder.</li>
            <li><strong>Sin brotes largos.</strong> Un brote diminuto todavía está bien. Uno largo significa que perdió humedad y llevó demasiado tiempo en el estante.</li>
            <li><strong>Tamaño mediano.</strong> Los camotes muy grandes tienden a tener el centro más fibroso. Los medianos (200g a 350g) se cocinan de manera más pareja.</li>
            <li><strong>Sin grietas profundas.</strong> Una grieta pequeña en la piel es normal. Una que deje la pulpa expuesta acelera el deterioro.</li>
          </ul>

          <p>
            En el mercado local vale la pena preguntar cuándo lo cosecharon — el camote recién cosechado tiene
            la piel más resistente y dura más. En el supermercado, esa información casi nunca está disponible.
          </p>
          <p>
            Quien cocina seguido termina poniendo el camote en su{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            como un ítem fijo. Aguanta bien toda la semana — a diferencia de las verduras de hoja o la fruta más delicada.
          </p>

          {/* CÓMO GUARDAR */}
          <h2 id="como-guardar">Cómo guardar el camote en casa</h2>

          <p>
            Aquí es donde la mayoría se equivoca. El camote crudo no va al refrigerador —
            el frío altera el almidón y deja la textura harinosa después de cocinado.
          </p>

          <h3>Crudo, entero</h3>
          <p>
            Guárdalo en un lugar fresco, oscuro y ventilado — lejos de la estufa y de la luz directa.
            En una despensa o alacena, dura fácilmente de una a dos semanas.
            No lo metas en una bolsa de plástico cerrada; necesita circulación de aire.
            Una bolsa de papel o una canasta abierta funcionan mejor.
          </p>
          <p>
            Mantenlo lejos de la cebolla y el ajo — liberan etileno y aceleran su deterioro.
            La{' '}
            <a href="/es/funcionalidades/despensa">despensa de Mise</a>{' '}
            te deja registrar dónde está cada cosa y cuándo la compraste, que es justo lo que evita
            que el camote aparezca brotado dos semanas después.
          </p>

          <h3>Crudo, pelado o cortado</h3>
          <p>
            Si lo pelas y no lo vas a usar de inmediato, sumérgelo en agua fría con un chorrito de limón
            para que no se oxide. Así, en el refrigerador, dura alrededor de un día. Más allá de eso,
            la textura empieza a cambiar. Lo mejor es pelarlo justo antes de cocinar.
          </p>

          <h3>Cocido</h3>
          <p>
            En un recipiente cerrado en el refrigerador, dura de tres a cinco días. Se puede congelar en
            porciones — hasta tres meses en el congelador, con buena textura para puré, sopa o rellenos.
            Congélalo ya hecho puré o en cubos, según cómo lo vayas a usar.
          </p>

          <p>
            Los hogares desperdician en promedio{' '}
            <a href="https://www.unep.org/resources/report/unep-food-waste-index-report-2021" target="_blank" rel="noopener">el 17% de los alimentos disponibles cada año, según el Índice de Desperdicio de Alimentos del PNUMA</a>.
            Un camote crudo olvidado al fondo de un cajón forma parte de esa cifra, semana tras semana.
            Saber dónde guardarlo resuelve la mitad del problema.
          </p>

          <div className="blog-inline-cta">
            <p>Sabe qué tienes en la despensa antes de ir al mercado. <em>Eso es lo que hace Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CÓMO COCINAR */}
          <h2 id="como-cocinar">Cómo cocinar el camote</h2>

          <p>
            El camote es realmente versátil — no en el sentido vago de "funciona con todo", sino en el sentido
            concreto de que aparece en platos muy distintos y rinde bien en todos ellos.
          </p>

          <h3>Hervido</h3>
          <p>
            El método más simple. Con cáscara, en agua con sal, de 20 a 25 minutos.
            Pruébalo con un tenedor — cuando entra fácil, está listo.
            Cómelo así, con aceite de oliva y hierbas, o úsalo como base para un puré.
          </p>

          <h3>Asado entero</h3>
          <p>
            Horno a 200°C, con cáscara, de 40 a 50 minutos según el tamaño.
            La pulpa queda cremosa y muy dulce. Rellénalo con yogur, requesón, huevo revuelto
            o frijoles sazonados. Es el método que más resalta su sabor natural.
          </p>

          <h3>En cubos al horno</h3>
          <p>
            Córtalo en cubos con cáscara, mézclalo con aceite de oliva, sal, ajo y romero, y hornea a
            200°C de 25 a 30 minutos. Queda crujiente por fuera, suave por dentro. Funciona como
            guarnición de carne, pollo o huevo — un agregado fácil a cualquier{' '}
            <a href="/es/funcionalidades/cardapio-semanal">plan de comidas semanal</a>{' '}
            sin esfuerzo extra.
          </p>

          <h3>En puré</h3>
          <p>
            Cocina hasta que esté suave, machaca con aceite de oliva o mantequilla, sal y un poco de nuez moscada.
            El dulzor natural equilibra la sal y la especia.
            Una variación fácil: mézclalo con calabaza — sabor más complejo, sin trabajo extra.
          </p>

          <h3>Sopas y purés espesos</h3>
          <p>
            Funciona bien en sopas con jengibre, cilantro, leche de coco y pollo.
            Solo, hace un puré espeso y satisfactorio con muy pocos ingredientes.
            También combina bien con zanahoria, calabaza o chirivía.
          </p>

          <h3>Recetas dulces</h3>
          <p>
            Pastel de camote, brownies sin harina, budín, galletas.
            Cocido y machacado, reemplaza parte de la grasa y aporta humedad natural.
            Las recetas hechas con camote tienden a quedar más suaves que las hechas con harina común —
            funciona especialmente bien en repostería sin gluten.
          </p>

          <p>
            El camote que compraste para un puré saludable el lunes termina asado con miel el miércoles
            porque se te acabó la paciencia. Está bien. De cualquier forma queda bueno.
          </p>

          <p>
            El camote resuelve tres problemas a la vez: presupuesto, nutrición y variedad.
            El único problema real es acordarte de que ya lo tienes en la despensa antes de comprar más.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el camote</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El camote es lo mismo que el ñame?</p>
              <p className="faq-a">
                No. Son plantas distintas, de familias distintas. El ñame (género Dioscorea) es más fibroso,
                más seco y típico de África Occidental y el Caribe, y casi nunca se vende en los supermercados
                de América Latina. La confusión viene de que en algunos países se usan "camote", "batata" y
                "boniato" como sinónimos del mismo tubérculo, pero ninguno de esos tres es ñame.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El camote engorda o ayuda a bajar de peso?</p>
              <p className="faq-a">
                Ningún alimento por sí solo hace que subas o bajes de peso. El camote llena, aporta nutrientes
                y tiene menos calorías que muchas otras fuentes de carbohidratos. Dentro de una dieta equilibrada,
                entra bien sin ser el problema. Lo que importa es el patrón general de lo que comes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es el índice glucémico del camote?</p>
              <p className="faq-a">
                Depende mucho de cómo lo cocines. Hervido, el índice glucémico está entre 44 y 61 — bajo a
                moderado. Al horno puede subir a 80 o incluso 90, porque el calor seco convierte más almidón
                en azúcares simples. Hervirlo o cocinarlo al vapor lo mantiene más bajo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer la cáscara del camote?</p>
              <p className="faq-a">
                Sí, y en general conviene hacerlo. La cáscara concentra buena parte de la fibra y los minerales.
                Lávala bien bajo el chorro de agua antes de cocinar. Asado entero o en trozos grandes con
                cáscara es la forma más simple de aprovechar todo el alimento.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer el camote crudo?</p>
              <p className="faq-a">
                No es tóxico crudo, pero el almidón crudo es difícil de digerir y puede causar molestias
                estomacales. La textura además es dura y almidonada, no agradable. Cocido — hervido, horneado
                o asado — es cuando el sabor y la digestibilidad realmente funcionan.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto dura el camote cocido en el refrigerador?</p>
              <p className="faq-a">
                En un recipiente cerrado, de tres a cinco días. También se puede congelar en porciones —
                hecho puré o en cubos — y mantiene buena textura hasta por tres meses, listo para sopas,
                purés o rellenos.
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
                Fundador de Mise. Compra 2kg de camote cada semana porque está barato. Usa la mitad.
                El resto aparece brotado al fondo de la despensa dos semanas después.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe qué hay en la despensa.<br />
              <em>Deja que Mise lo controle.</em>
            </h2>
            <p>
              Despensa, recetas y lista de compras, todo en un solo lugar.
              El camote entra a la lista cuando se acaba — no cuando encuentras el brote.
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
