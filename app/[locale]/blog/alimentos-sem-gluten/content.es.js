import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Alimentos sin gluten: la lista completa para hacer las compras',
  description: 'El arroz, el maíz, la papa, las carnes frescas y casi todas las frutas y verduras son naturalmente sin gluten. Mira la lista completa, dónde se esconde el gluten y cómo leer una etiqueta.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/alimentos-sem-gluten',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/alimentos-sem-gluten',
      en: 'https://www.miseemcasa.com.br/en/blog/alimentos-sem-gluten',
      es: 'https://www.miseemcasa.com.br/es/blog/alimentos-sem-gluten',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/alimentos-sem-gluten',
    },
  },
  openGraph: {
    title: 'Alimentos sin gluten: la lista completa para hacer las compras',
    description: 'El arroz, el maíz, la papa, las carnes frescas y casi todas las frutas y verduras son naturalmente sin gluten. Mira la lista completa, dónde se esconde el gluten y cómo leer una etiqueta.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/alimentos-sem-gluten',
    images: [
      {
        url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Tazones coloridos de arroz, quinoa y vegetales frescos — una selección de alimentos naturalmente sin gluten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alimentos sin gluten: la lista completa para hacer las compras',
    description: 'El arroz, el maíz, la papa, las carnes frescas y casi todas las frutas y verduras son naturalmente sin gluten. Mira la lista completa, dónde se esconde el gluten y cómo leer una etiqueta.',
    images: ['https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El arroz tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El arroz — blanco, integral o parbolizado — es naturalmente sin gluten. El gluten viene del trigo, la cebada y el centeno, no del arroz. La única excepción son las mezclas de arroz con condimentos o saborizantes industrializados, que pueden incluir aditivos con gluten. El arroz simple, sin mezclas, es seguro para personas celíacas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Los celíacos pueden comer avena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La avena no contiene gluten por naturaleza, pero casi siempre se cultiva, transporta o procesa junto con trigo, cebada o centeno, lo que genera contaminación cruzada. Las personas celíacas solo deberían comprar avena con certificación específica "libre de gluten", procesada en líneas dedicadas. La avena común de una fábrica compartida no es una apuesta segura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El maíz tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, el maíz es naturalmente sin gluten. El choclo, la harina de maíz, la maicena, las palomitas naturales y la harina precocida de maíz son seguros. El riesgo aparece en productos de maíz industrializados que agregan otros ingredientes — snacks condimentados o mezclas listas, por ejemplo. Revisa siempre la lista de ingredientes en lo procesado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Todo el mundo debería evitar el gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Para quien no tiene enfermedad celíaca ni sensibilidad al gluten diagnosticada, eliminar el gluten no trae ningún beneficio comprobado y puede significar comer menos fibra y menos nutrientes presentes en los cereales integrales. Una dieta sin gluten es tratamiento médico para la enfermedad celíaca — para el resto de las personas, es una restricción, no una mejora.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué alimentos con gluten sorprenden más?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los más comunes: la salsa de soya tradicional (hecha con trigo), los caldos en cubo y las sopas enlatadas espesadas con harina de trigo, los embutidos que usan almidón de trigo como aglutinante, el surimi (imitación de cangrejo), los cereales con sabor a malta, las mezclas de condimentos y la cerveza (hecha con cebada malteada). Revisa siempre la lista de ingredientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo sé si un producto realmente es libre de gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mayoría de las regulaciones alimentarias, incluido el Codex Alimentarius, solo permiten la etiqueta "libre de gluten" en alimentos con menos de 20 partes por millón de gluten — el nivel más bajo detectable de forma confiable con las pruebas actuales. Busca esa etiqueta y luego revisa los ingredientes por trigo, cebada, centeno, malta o avena sin certificación. La leyenda "puede contener trazas de trigo" señala riesgo de contaminación cruzada, algo clave para la enfermedad celíaca.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alimentos sin gluten: la lista completa para hacer las compras',
  description: 'El arroz, el maíz, la papa, las carnes frescas y casi todas las frutas y verduras son naturalmente sin gluten. Mira la lista completa, dónde se esconde el gluten y cómo leer una etiqueta.',
  image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/alimentos-sem-gluten',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Alimentos sin gluten', item: 'https://www.miseemcasa.com.br/es/blog/alimentos-sem-gluten' },
  ],
}

export default function AlimentosSemGlutenEs() {
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
            <li className="breadcrumb-current" aria-current="page">Alimentos sin gluten</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-28">28 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Alimentos sin gluten: qué puedes comer, qué vigilar y cómo hacer las compras sin adivinar
          </h1>
          <p className="blog-desc">
            La lista de alimentos sin gluten es más larga de lo que la mayoría piensa. El arroz, el maíz, la papa, las carnes frescas y casi cualquier fruta o verdura entran sin problema. El verdadero problema no es lo que ya sabes evitar — es el gluten escondido en productos procesados que parecen completamente inofensivos.
          </p>

          <div className="answer-box">
            <p>
              <strong>Los alimentos sin gluten</strong> son todos aquellos que no contienen trigo, cebada,
              centeno ni avena con riesgo de contaminación cruzada: arroz, maíz, papa, legumbres, carnes
              frescas, huevos, lácteos puros y casi cualquier fruta o verdura en su estado natural. Lo
              complicado son los alimentos procesados — la salsa de soya, las sopas enlatadas, los
              embutidos y las mezclas de condimentos llevan gluten más seguido de lo que la gente espera.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Tazones coloridos de arroz, quinoa y vegetales frescos — una selección de alimentos naturalmente sin gluten"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Contenido del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es-el-gluten">Qué es el gluten y quién realmente necesita evitarlo</a></li>
              <li><a href="#alimentos-seguros">Alimentos naturalmente sin gluten</a></li>
              <li><a href="#gluten-escondido">Lo que parece seguro pero no lo es</a></li>
              <li><a href="#como-leer-etiquetas">Cómo leer una etiqueta sin gluten</a></li>
              <li><a href="#lista-de-compras">La lista de compras sin gluten</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES EL GLUTEN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pan y alimentos con trigo junto a alternativas sin gluten como el arroz y el maíz"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="que-es-el-gluten" className="img-above">Qué es el gluten y quién realmente necesita evitarlo</h2>

          <p>
            El gluten es un grupo de proteínas que se encuentra naturalmente en el trigo, la cebada y el
            centeno. Es lo que le da elasticidad a la masa de pan — la capacidad de estirarse sin
            romperse. Para la mayoría de las personas es completamente inofensivo y forma parte de la
            dieta humana desde hace miles de años.
          </p>
          <p>
            Dos condiciones convierten al gluten en un problema real: la <strong>enfermedad celíaca</strong> y
            la <strong>sensibilidad al gluten no celíaca</strong>. La enfermedad celíaca es una condición
            autoinmune — comer gluten dispara una respuesta del sistema inmunológico que ataca el
            intestino delgado y daña su capacidad de absorber nutrientes. Se estima que afecta
            aproximadamente al 1% de la población, y una gran parte no está diagnosticada. La
            sensibilidad al gluten es distinta: provoca malestar digestivo real, pero sin la respuesta
            autoinmune ni el daño intestinal de la enfermedad celíaca.
          </p>
          <p>
            Para alguien con enfermedad celíaca, eliminar el gluten por completo no es una preferencia —
            es tratamiento. Incluso una cantidad pequeña puede causar daño, por eso saber exactamente qué
            hay en el plato y en el carrito importa tanto.
          </p>
          <p>
            Una nota honesta: eliminar el gluten sin diagnóstico no tiene ningún beneficio comprobado para
            quien no tiene estas condiciones. De hecho, puede significar comer menos cereales integrales,
            y con ellos, menos fibra y menos nutrientes. Una dieta sin gluten es tratamiento para algunas
            personas — no es una mejora de bienestar para las demás.
          </p>

          {/* ALIMENTOS SEGUROS */}
          <h2 id="alimentos-seguros">Alimentos naturalmente sin gluten</h2>

          <p>
            La base de una dieta sin gluten es más amplia de lo que casi todos suponen. La lista de
            alimentos naturales y sin procesar que son seguros es larga — el problema empieza cuando algo
            se procesa, se mezcla o se fabrica en equipos compartidos con trigo.
          </p>

          <h3>Cereales, harinas y almidones seguros</h3>

          <ul className="item-list">
            <li>Arroz (blanco, integral, parbolizado)</li>
            <li>Maíz, harina de maíz y maicena</li>
            <li>Quinoa</li>
            <li>Trigo sarraceno (a pesar del nombre, no lleva trigo)</li>
            <li>Mijo</li>
            <li>Amaranto</li>
            <li>Sorgo</li>
            <li>Avena con certificación sin gluten</li>
            <li>Harina de arroz</li>
            <li>Harina de almendra</li>
            <li>Harina de coco</li>
            <li>Harina de garbanzo</li>
            <li>Yuca, tapioca y almidón de arrurruz</li>
          </ul>

          <p>
            Estos son los sustitutos directos de la harina de trigo en las recetas. Cada uno se comporta
            distinto — la harina de arroz es neutra, la harina de almendra agrega grasa y humedad, el
            almidón de tapioca da una textura elástica. La mayoría de las recetas de repostería sin gluten
            funcionan mejor combinando dos o tres de estas harinas en vez de reemplazar con una sola.
          </p>

          <h3>Proteína animal</h3>

          <p>
            Las carnes frescas, las aves, el pescado y los mariscos son naturalmente sin gluten. Lo mismo
            los huevos. El problema empieza cuando la proteína se procesa: los empanizados usan harina de
            trigo, los embutidos y las salchichas suelen usar almidón de trigo como aglutinante, y la
            salsa de soya tradicional se elabora con trigo.
          </p>

          <h3>Lácteos puros</h3>

          <p>
            La leche, el queso, la mantequilla y el yogur natural no tienen gluten. Ten cuidado con los
            yogures saborizados (los espesantes pueden llevar gluten), el queso procesado en rebanadas y
            las bebidas lácteas con malta.
          </p>

          <h3>Frutas, verduras y legumbres</h3>

          <p>
            Todas las verduras frescas son seguras. Toda la fruta es segura. Los frijoles, las lentejas,
            los garbanzos y las arvejas secas o frescas no tienen gluten. La excepción son las versiones
            enlatadas o procesadas — los caldos de verduras listos, las sopas en caja y las verduras
            marinadas pueden llevar espesantes o aditivos con gluten.
          </p>

          <h3>Grasas y condimentos naturales</h3>

          <p>
            El aceite de oliva, otros aceites vegetales, la mantequilla y la manteca son sin gluten. La
            sal, el azúcar, la miel y el vinagre puro también son seguros. Las hierbas frescas y las
            especias enteras — ajo, cebolla, ají, comino, cúrcuma — no tienen gluten. El riesgo está en
            las mezclas de condimentos ya preparadas y en los sobres que combinan varias especias con un
            relleno.
          </p>

          <div className="blog-inline-cta">
            <p>
              Armar una <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> sin gluten es
              mucho más fácil cuando ya tienes guardados los alimentos seguros. Mise te deja llevar el
              control de tu despensa y generar la lista directo de lo que realmente compras.
            </p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" rel="noopener">
              Abrir Mise
            </a>
          </div>

          {/* GLUTEN ESCONDIDO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640742/pexels-photo-1640742.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Estante de supermercado con productos empaquetados — donde suele esconderse el gluten"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="gluten-escondido" className="img-above">Lo que parece seguro pero no lo es</h2>

          <p>
            Esta es la parte que sorprende a la mayoría. No es el pan ni la pasta lo que causa problemas —
            es la lista de ingredientes de productos que parecen no tener nada que ver con el trigo.
          </p>

          <h3>Salsa de soya</h3>
          <p>
            La salsa de soya tradicional se elabora con trigo y soya — la mayoría de las botellas en un
            supermercado común contienen trigo. El sustituto sin gluten es el <strong>tamari</strong>, una
            salsa de soya de estilo japonés hecha sin trigo, aunque no todo el tamari es automáticamente
            libre de gluten tampoco. Si cocinas mucha comida asiática, revisa la etiqueta o busca
            específicamente uno marcado como sin gluten.
          </p>

          <h3>Avena</h3>
          <p>
            La avena no contiene gluten de forma natural. Pero la avena común se cultiva casi siempre en
            rotación con trigo y se procesa en equipos compartidos, lo que hace que la contaminación
            cruzada sea casi segura salvo que el empaque diga lo contrario. Para la enfermedad celíaca, la
            única opción segura es la avena etiquetada específicamente como certificada sin gluten —
            cada vez más disponible, solo que no en la misma caja que la avena regular.
          </p>

          <h3>Sopas enlatadas y caldos en cubo</h3>
          <p>
            Los cubos de caldo, las sopas enlatadas y los caldos listos usan con frecuencia harina de
            trigo como espesante. Esta es una de las fuentes más comunes de gluten escondido en una
            cocina cualquiera. Si usas sopa o caldo empaquetado seguido, lee la etiqueta o cámbiate a una
            versión casera.
          </p>

          <h3>Embutidos y fiambres</h3>
          <p>
            El jamón, el salame y las salchichas procesadas pueden contener harina de trigo o almidón de
            trigo como aglutinante. No todos lo llevan — pero sí los suficientes como para que alguien con
            enfermedad celíaca tenga que revisar cada marca. Que diga "carne" en el frente del empaque no
            garantiza que sea sin gluten por detrás.
          </p>

          <h3>Surimi (imitación de cangrejo)</h3>
          <p>
            Una sorpresa clásica: el surimi, usado en rollos de sushi y ensaladas de mariscos, suele
            hacerse con pasta de pescado unida con almidón de trigo. El cangrejo real es naturalmente sin
            gluten — la versión imitación casi nunca lo es.
          </p>

          <h3>Sobres de condimentos y mezclas de especias</h3>
          <p>
            Los sobres de condimentos, las mezclas para tacos y las especias ya combinadas pueden usar
            harina de trigo como antiaglomerante o relleno. Eso no siempre es obvio desde el empaque. Lee
            la lista de ingredientes — el trigo puede aparecer como "almidón de trigo", "harina de trigo"
            o simplemente "gluten".
          </p>

          <h3>Cerveza y bebidas malteadas</h3>
          <p>
            La cerveza se hace con cebada malteada — que contiene gluten. Existen cervezas sin gluten,
            hechas con sorgo, arroz o maíz en su lugar, pero siguen siendo una porción pequeña del
            mercado. Revisa siempre la etiqueta si la restricción es por enfermedad celíaca.
          </p>

          <h3>Salsas de tomate industrializadas</h3>
          <p>
            No todas, pero algunas marcas de salsa de tomate usan harina de trigo como espesante para dar
            consistencia. La salsa de tomate casera — tomate, aceite de oliva, sal y hierbas — es
            naturalmente sin gluten y más fácil de controlar.
          </p>

          {/* CÓMO LEER ETIQUETAS */}
          <h2 id="como-leer-etiquetas">Cómo leer una etiqueta sin gluten</h2>

          <p>
            La mayoría de las normas alimentarias del mundo, incluido el Codex Alimentarius que sirve de
            referencia en gran parte de Latinoamérica, solo permite la leyenda "libre de gluten" o "sin
            gluten" en alimentos con menos de 20 partes por millón (ppm) de gluten — el nivel más bajo que
            se puede detectar de forma confiable con las pruebas de laboratorio actuales. Esa
            declaración suele estar regulada, lo que la vuelve la forma más rápida y confiable de decidir
            frente al estante.
          </p>

          <p>
            Más allá de la leyenda "sin gluten" en sí, vale la pena revisar la lista de ingredientes y el
            aviso de alérgenos. En muchos países el trigo es uno de los alérgenos que se debe declarar de
            forma clara — normalmente en una línea tipo "contiene trigo" justo debajo de los
            ingredientes. El gluten también puede aparecer en la lista de ingredientes como:
          </p>

          <ul className="item-list">
            <li>Trigo (harina de trigo, almidón de trigo, salvado de trigo, germen de trigo)</li>
            <li>Cebada (malta de cebada, extracto de malta, saborizante de malta)</li>
            <li>Centeno</li>
            <li>Avena (salvo que esté certificada sin gluten)</li>
            <li>Malta (generalmente derivada de la cebada)</li>
          </ul>

          <p>
            Un aviso de "puede contener trazas de trigo" o "elaborado en una planta que también procesa
            trigo" señala riesgo de contaminación cruzada — el producto no se fabricó con gluten a
            propósito, pero se hizo en equipos o instalaciones que también manejan cereales con gluten.
            Para una sensibilidad leve, ese riesgo puede ser aceptable. Para la enfermedad celíaca, es un
            riesgo real que conviene evitar.
          </p>
          <p>
            Los sellos de certificación de organizaciones independientes, como el símbolo internacional de
            la espiga barrada, añaden una capa extra de confianza más allá de la leyenda del fabricante.
            No son obligatorios por ley en todos los países, pero significan que el producto fue probado
            de forma independiente, no solo declarado por quien lo fabrica.
          </p>

          {/* LISTA DE COMPRAS */}
          <h2 id="lista-de-compras">La lista de compras sin gluten</h2>

          <p>
            Armar una <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> sin gluten
            requiere algo de atención las primeras veces. Una vez que ya sabes qué marcas son seguras y
            dónde suele esconderse el gluten en tu propia rutina de cocina, se vuelve mucho más
            automático.
          </p>

          <p>
            Una forma útil de pensarlo: divide tus compras en tres grupos — lo que va al carrito sin
            preocupación, lo que necesita revisión de etiqueta y lo que hay que sustituir cuando una
            receta lo pida.
          </p>

          <h3>Va al carrito sin revisar</h3>

          <ul className="item-list">
            <li>Arroz blanco, integral o parbolizado</li>
            <li>Papa, camote y yuca</li>
            <li>Frijoles, lentejas, garbanzos y arvejas secas</li>
            <li>Carnes frescas, aves, pescado y mariscos</li>
            <li>Huevos</li>
            <li>Leche, queso, mantequilla y yogur natural</li>
            <li>Frutas y verduras frescas</li>
            <li>Aceite de oliva y aceites vegetales puros</li>
            <li>Azúcar, sal y miel</li>
            <li>Ajo, cebolla, hierbas frescas y especias enteras</li>
            <li>Choclo en mazorca y palomitas naturales</li>
            <li>Harina de arroz y harina de maíz</li>
          </ul>

          <h3>Necesita revisión de etiqueta</h3>

          <ul className="item-list">
            <li>Embutidos y fiambres</li>
            <li>Sopas enlatadas y caldos en cubo</li>
            <li>Salsa de tomate en lata o caja</li>
            <li>Sobres de condimentos y mezclas de especias</li>
            <li>Salsa de soya</li>
            <li>Avena (comprar solo la certificada sin gluten)</li>
            <li>Papas fritas de bolsa y snacks empaquetados</li>
            <li>Yogures saborizados y bebidas malteadas</li>
            <li>Surimi y otros mariscos procesados</li>
          </ul>

          <h3>Sustitutos para recetas</h3>

          <ul className="item-list">
            <li>Harina de trigo → harina de arroz, mezcla de harinas sin gluten</li>
            <li>Pasta común → pasta de arroz o pasta de maíz</li>
            <li>Pan de molde → pan certificado sin gluten</li>
            <li>Salsa de soya → tamari (revisa que diga sin gluten)</li>
            <li>Cubo de caldo → caldo casero o caldo certificado sin gluten</li>
          </ul>

          <p>
            Mantener estos productos organizados en tu <a href="/es/funcionalidades/despensa">despensa</a> facilita
            saber qué tienes y evita sorpresas a mitad de semana. Saber qué hay en casa antes de salir a
            comprar importa todavía más cuando la restricción alimentaria es real — improvisar puede
            salir caro rápido.
          </p>

          <p>
            Ya sea por enfermedad celíaca, por una sensibilidad diagnosticada o porque cocinas para
            alguien que lo necesita, el enfoque es el mismo: define qué marcas son seguras, mantén la
            lista organizada por pasillo y reduce la adivinanza cada vez que vas al mercado.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre alimentos sin gluten</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El arroz tiene gluten?</p>
              <p className="faq-a">
                No. El arroz — blanco, integral o parbolizado — es naturalmente sin gluten. El gluten
                viene del trigo, la cebada y el centeno, no del arroz. La única excepción son las mezclas
                de arroz con condimentos industrializados, que pueden llevar aditivos con gluten. El arroz
                simple es seguro para personas celíacas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Los celíacos pueden comer avena?</p>
              <p className="faq-a">
                La avena no tiene gluten por sí sola, pero casi siempre se cultiva, transporta o procesa
                junto con trigo, cebada o centeno, lo que causa contaminación cruzada. Las personas
                celíacas deberían comprar solo avena etiquetada como certificada sin gluten — probada y
                procesada en líneas dedicadas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El maíz tiene gluten?</p>
              <p className="faq-a">
                Sí, el maíz es naturalmente sin gluten. El choclo, la harina de maíz, la maicena, las
                palomitas y la harina precocida de maíz son seguros. El riesgo aparece en productos de
                maíz industrializados que agregan otros ingredientes — snacks condimentados o mezclas
                listas, por ejemplo. Revisa siempre la etiqueta en lo procesado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Todo el mundo debería evitar el gluten?</p>
              <p className="faq-a">
                No. Para quien no tiene enfermedad celíaca ni sensibilidad al gluten diagnosticada,
                eliminar el gluten no tiene ningún beneficio comprobado y puede significar comer menos
                fibra y menos nutrientes de los cereales integrales. Una dieta sin gluten es
                médicamente necesaria para la enfermedad celíaca — para el resto, es una restricción, no
                una mejora.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué alimentos con gluten sorprenden más?</p>
              <p className="faq-a">
                Los más comunes: la salsa de soya tradicional (hecha con trigo), las sopas y caldos en
                cubo espesados con harina de trigo, los embutidos que usan almidón de trigo como
                aglutinante, el surimi, los cereales con sabor a malta, las mezclas de condimentos y la
                cerveza. Revisa siempre la lista de ingredientes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo sé si un producto realmente es sin gluten?</p>
              <p className="faq-a">
                La mayoría de las normas, incluido el Codex Alimentarius, solo permite la leyenda "libre
                de gluten" en alimentos con menos de 20 partes por millón de gluten. Busca esa leyenda y
                luego revisa los ingredientes por trigo, cebada, centeno, malta o avena sin certificar.
                "Puede contener trazas de trigo" señala riesgo de contaminación cruzada, algo clave para
                la enfermedad celíaca.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-avatar">
              <svg viewBox="0 0 40 40" fill="none" width="40" height="40" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="#E8F3DD" />
                <circle cx="20" cy="16" r="7" fill="#2D5F2F" />
                <ellipse cx="20" cy="34" rx="11" ry="8" fill="#2D5F2F" />
              </svg>
            </div>
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador de Mise. Cocina casi todos los días de la semana y aprendió por las malas que
                "sin trigo" en una etiqueta no es lo mismo que sin gluten. Construyó la app porque llegar
                al mercado sin plan — sin gluten o no — siempre termina costando más.
              </p>
            </div>
          </div>

        </article>

        <div className="blog-cta reveal">
          <p className="blog-cta-title">Tu lista sin gluten, de verdad organizada</p>
          <p className="blog-cta-sub">
            Arma tu lista de compras con los alimentos que ya sabes que son seguros, controla lo que hay
            en la despensa y sabe siempre qué falta reponer. Sin papel, sin olvidos. Mise es gratis.
          </p>
          <a
            href="https://listinha-puce.vercel.app"
            className="btn btn-on-dark btn-lg"
            target="_blank"
            rel="noopener"
          >
            Empieza gratis →
          </a>
        </div>

        <a href="#main-content" className="back-to-top" aria-label="Volver arriba">↑</a>

      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Hecho con cariño para quienes aman cocinar.</p>
          <a href="/es/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
