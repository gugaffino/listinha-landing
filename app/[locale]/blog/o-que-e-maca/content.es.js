import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Manzana: tipos, valor nutricional y usos en la cocina',
  description: 'La manzana tiene unas 52 kcal por 100g y aporta fibra soluble y vitamina C. Conoce los tipos (gala, verde, roja, amarilla), cuál usar en cada receta y cómo guardarla.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-maca',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-maca',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-maca',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-maca',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-maca',
    },
  },
  openGraph: {
    title: 'Manzana: tipos, valor nutricional y usos en la cocina',
    description: 'La manzana tiene unas 52 kcal por 100g y aporta fibra soluble y vitamina C. Conoce los tipos (gala, verde, roja, amarilla), cuál usar en cada receta y cómo guardarla.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-maca',
    images: [
      {
        url: 'https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Manzana roja fresca en primer plano sobre una superficie oscura — variedad gala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manzana: tipos, valor nutricional y usos en la cocina',
    description: 'La manzana tiene unas 52 kcal por 100g y aporta fibra soluble y vitamina C. Conoce los tipos (gala, verde, roja, amarilla), cuál usar en cada receta y cómo guardarla.',
    images: ['https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Se puede comer la manzana con cáscara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y es lo recomendable. La cáscara concentra buena parte de la fibra y los antioxidantes de la manzana, incluida la quercetina. La mayoría de los datos nutricionales de la manzana se miden con cáscara. Lávala bien con agua corriente antes de comerla, porque suele traer una capa de cera comercial usada para conservarla.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Manzana verde, roja o amarilla: cuál es más saludable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las tres tienen un perfil nutricional parecido — las diferencias de vitaminas y fibra entre variedades son pequeñas. La verde (Granny Smith) tiene un poco menos de azúcar y un poco más de vitamina C, lo que puede ser relevante para quien controla su glucosa. La roja y la amarilla son más dulces y prácticas para comer así, sin más. La más saludable suele ser la que realmente vas a comer, no la que se va a marchitar en el frutero.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas manzanas al día es lo ideal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una al día es el clásico, y tiene sentido. Una manzana mediana (180g) tiene alrededor de 95 kcal y 4g de fibra — suficiente para aportar a la meta diaria de fruta sin pasarte de azúcar. Dos al día todavía es razonable. Más que eso empieza a subir la ingesta de fructosa sin un beneficio adicional claro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La manzana engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La manzana tiene unas 52 kcal por 100g — una de las frutas más moderadas en calorías. El azúcar que contiene es fructosa natural, que viene junto con fibra y agua, lo que retrasa su absorción. Comer una manzana no engorda. Lo que sí puede pasar es el efecto "permiso": comerte la manzana y sentir que ganaste pase libre para las galletas después. Ese problema no es de la manzana.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo guardar la manzana en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La manzana dura semanas en el refrigerador y solo días a temperatura ambiente. Lo ideal es guardarla en el cajón de frutas y verduras, lejos de otras frutas sensibles al etileno — la manzana libera este gas, que acelera la maduración de lo que tiene cerca. Si la compras en cantidad, el refrigerador es indispensable. Fuera de él, consúmela en 3 a 5 días.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede congelar la manzana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, pero pierde textura al descongelarse — ya no sirve para comer así o en ensaladas. Funciona bien para licuados, puré y relleno de pay o tarta (en ese caso ni siquiera hace falta descongelarla, va directo al horno). Pélala, córtala, congélala extendida en una bandeja y luego pásala a una bolsa hermética.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de manzana usar para pay o tarta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Granny Smith (verde) es la opción clásica: mantiene su forma después de hornearse y su acidez equilibra la masa dulce. La Golden también funciona bien y carameliza con facilidad. Evita variedades muy suaves como la Red Delicious en pay horneado — se deshacen demasiado y pueden dejar el relleno aguado.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Manzana: tipos, valor nutricional y usos en la cocina',
  description: 'La manzana tiene unas 52 kcal por 100g y aporta fibra soluble y vitamina C. Conoce los tipos (gala, verde, roja, amarilla), cuál usar en cada receta y cómo guardarla.',
  image: 'https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-26',
  dateModified: '2026-07-26',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-maca',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Manzana', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-maca' },
  ],
}

export default function OQueEMacaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Manzana</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-26">26 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Manzana: guía de tipos, cómo elegirla y usarla en la cocina
          </h1>
          <p className="blog-desc">
            Existen más de 7.500 variedades de manzana en el mundo, pero el supermercado promedio solo tiene unas pocas en el estante. Cada una sirve para algo distinto — y elegir la equivocada es la razón por la que a veces el pay de manzana no queda bien.
          </p>

          <div className="answer-box">
            <p>
              La <strong>manzana</strong> es el fruto del manzano (<em>Malus domestica</em>), una de las frutas más cultivadas y consumidas del planeta.
              Tiene unas 52 kcal por 100g, y destaca por la pectina — fibra soluble asociada a la saciedad y a la salud digestiva.
              En los mercados de América Latina las variedades más comunes son gala, roja (Red Delicious), verde (Granny Smith) y amarilla (Golden Delicious), cada una con un uso ideal en la cocina.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Manzana roja fresca en primer plano sobre una superficie oscura — variedad gala"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la manzana</a></li>
              <li><a href="#tipos">Tipos de manzana</a></li>
              <li><a href="#valor-nutricional">Valor nutricional y calorías</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#como-elegir">Cómo elegirla en el mercado</a></li>
              <li><a href="#como-guardar">Cómo guardarla en casa</a></li>
              <li><a href="#como-usar">Cómo usarla en la cocina</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Manzanas rojas y verdes mezcladas sobre una superficie rústica de madera"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la manzana</h2>

          <p>
            La manzana es el fruto de <em>Malus domestica</em>, un árbol de la familia de las rosáceas — la misma del durazno, la pera y la ciruela. Es una de las frutas cultivadas más antiguas: los ancestros silvestres se remontan a los bosques de lo que hoy es Kazajistán, considerado el centro de origen de las variedades modernas.
          </p>
          <p>
            En América Latina, Argentina y Chile son los principales productores — la región del Alto Valle de Río Negro, en la Patagonia argentina, concentra buena parte de la producción de manzana y pera del continente. México también produce, sobre todo en Chihuahua, aunque buena parte de la manzana que se vende en el país es importada. La temporada de cosecha va de fines de verano a otoño en el hemisferio correspondiente, que es cuando la manzana nacional es más fresca y barata.
          </p>
          <p>
            Botánicamente, la manzana es un falso fruto — lo que comemos es el receptáculo floral engrosado, no el ovario. Es más un dato curioso que algo que cambie tu forma de comprar, pero explica por qué el corazón duro del centro es distinto al resto de la pulpa.
          </p>
          <p>
            El sabor varía mucho según la variedad: de muy dulce (gala, fuji) a bien ácido (verde/Granny Smith), pasando por perfiles equilibrados como la amarilla. Esa diferencia importa en la cocina — no es solo cuestión de gusto personal.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de manzana</h2>

          <p>
            Existen más de 7.500 variedades registradas en el mundo. En el mercado de América Latina vas a encontrar con frecuencia entre cuatro y seis, y la forma práctica de distinguirlas es por cómo se comportan: unas son mejores para comer así, otras para hornear.
          </p>

          <h3>Gala</h3>
          <p>
            Una de las más consumidas en la región. Pulpa blanca, textura firme, sabor dulce con acidez leve. Cáscara roja con franjas amarillas. Buena para comer así y para recetas crudas, como ensaladas de fruta. Con el calor pierde textura más rápido que la fuji — cómprala en cantidades menores si no la vas a refrigerar.
          </p>

          <h3>Roja (Red Delicious)</h3>
          <p>
            La más reconocible por su forma alargada y su color rojo intenso. Pulpa suave, sabor dulce sin mucha acidez. Se pensó más para verse bien que para cocinarse: al hornear se vuelve harinosa, así que no es la mejor opción para pay.
          </p>

          <h3>Verde (Granny Smith)</h3>
          <p>
            La más ácida de las comunes. Cáscara verde brillante, pulpa firme y muy crujiente. Tiene menos azúcar natural que la gala o la roja, lo que la hace una opción interesante para quien controla su glucosa. En la cocina funciona bien en platos salados — ensalada con queso, salsas, acompañamiento de cerdo — y es la mejor opción para pay, porque mantiene la forma al hornear.
          </p>

          <h3>Amarilla (Golden Delicious)</h3>
          <p>
            Cáscara amarilla, pulpa suave y dulce con un toque de acidez. Caramelina con facilidad al cocinarse, lo que la hace buena para tartas horneadas y para puré de manzana — se deshace más rápido que la verde, lo que facilita la cocción.
          </p>

          <h3>Fuji</h3>
          <p>
            Muy dulce, densa y crujiente. Originaria de Japón (el nombre viene de Fujisaki, la ciudad donde se desarrolló), hoy se cultiva en varias regiones del continente. Excelente para comer sola y dura más en el refrigerador que la gala.
          </p>

          {/* VALOR NUTRICIONAL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rebanadas de manzana fresca sobre una tabla de madera — pulpa blanca firme en primer plano"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
          </div>

          <h2 id="valor-nutricional" className="img-above">Valor nutricional y calorías de la manzana</h2>

          <p>
            Según <a href="https://fdc.nal.usda.gov" target="_blank" rel="noopener">USDA FoodData Central</a>, una manzana mediana con cáscara (unos 180g) tiene aproximadamente:
          </p>

          <ul className="item-list">
            <li><strong>Calorías:</strong> 95 kcal</li>
            <li><strong>Carbohidratos:</strong> 25 g (de los cuales ~19 g son azúcares naturales)</li>
            <li><strong>Fibra dietética:</strong> 4 g</li>
            <li><strong>Proteína:</strong> 0,5 g</li>
            <li><strong>Grasa total:</strong> 0,3 g</li>
            <li><strong>Vitamina C:</strong> 8,4 mg (cerca del 9% del valor diario)</li>
            <li><strong>Potasio:</strong> 195 mg</li>
            <li><strong>Agua:</strong> alrededor del 86% del peso total</li>
          </ul>

          <p>
            La mayor parte del peso es agua, lo que explica por qué llena sin ser calórica. La fibra presente es principalmente pectina, una fibra soluble que forma gel en el intestino y tiene efecto documentado en la regulación del colesterol y en el control de la glucosa después de comer.
          </p>
          <p>
            El aporte de vitamina C es modesto comparado con los cítricos, pero constante. La fuerza nutricional de la manzana no está en un nutriente aislado, sino en la combinación de fibra, hidratación y antioxidantes en un snack que no requiere preparación y cuesta menos que la mayoría de los productos envasados.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios de la manzana</h2>

          <p>
            La manzana no es un superalimento. No cura nada, no "desintoxica" nada, no reemplaza ningún medicamento. Lo que hace es ser consistentemente buena dentro de una alimentación variada — y eso tiene valor.
          </p>
          <p>
            La pectina es el componente con más respaldo científico. Estudios observacionales asocian el consumo regular de manzana con niveles más bajos de colesterol LDL — el mecanismo es que la pectina se une a los ácidos biliares en el intestino y reduce la reabsorción de colesterol. Para notar el efecto, el consumo tiene que ser regular, no ocasional.
          </p>
          <p>
            Los polifenoles de la cáscara tienen actividad antioxidante relevante. La quercetina, presente sobre todo en la piel, se asocia con efecto antiinflamatorio en estudios de laboratorio. Es un argumento más para comerla con cáscara, no para tomar un suplemento de quercetina.
          </p>
          <p>
            En la práctica diaria, el mayor beneficio de la manzana es logístico: es barata, está disponible casi todo el año, es fácil de transportar, no necesita preparación y a la mayoría de la gente le gusta. Para quien intenta comer más fruta sin cambiar mucho su rutina, es un punto de entrada razonable — siempre que realmente se coma, y no termine olvidada en el frutero.
          </p>

          <div className="blog-inline-cta">
            <p>Pon la manzana — y todo lo demás — en la lista antes de ir al mercado.</p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CÓMO ELEGIR */}
          <h2 id="como-elegir">Cómo elegir manzana en el mercado</h2>

          <p>
            Una manzana mala no mejora en casa. Vale la pena invertir 30 segundos en elegir bien antes de meterla al carrito.
          </p>

          <ul className="item-list">
            <li><strong>Firmeza:</strong> presiona levemente con el pulgar. Debe resistir. Una manzana blanda ya está pasada de punto.</li>
            <li><strong>Cáscara:</strong> sin golpes profundos, manchas oscuras o zonas hundidas. Pequeñas variaciones de color son normales y no afectan el sabor.</li>
            <li><strong>Peso:</strong> una buena manzana se siente pesada para su tamaño. Una manzana liviana suele estar reseca por dentro.</li>
            <li><strong>Aroma:</strong> la manzana madura tiene un aroma dulce y ligeramente floral. Sin aroma suele significar poco sabor. Aroma fermentado significa que ya pasó su punto.</li>
            <li><strong>Temporada:</strong> la cosecha va de fines de verano a otoño según la región. En temporada, la manzana nacional suele ser más fresca y barata. El resto del año, buena parte viene de cámara fría o es importada.</li>
          </ul>

          <p>
            En el mercado, las manzanas suelen venir con una capa de cera comercial para conservarlas. Es segura para el consumo, pero significa que conviene lavarla bien antes de comerla con cáscara.
          </p>

          {/* CÓMO GUARDAR */}
          <h2 id="como-guardar">Cómo guardar la manzana en casa</h2>

          <p>
            La manzana es sensible al etileno — un gas natural que las frutas liberan al madurar. El problema es que la manzana libera etileno <em>activamente</em>, lo que acelera la maduración de lo que tiene cerca. En el refrigerador, guárdala en el cajón de frutas, separada de hojas verdes, fresas y uvas, que son especialmente sensibles a este gas.
          </p>
          <p>
            Fuera del refrigerador, la manzana dura de 3 a 5 días dependiendo de la variedad y la temperatura ambiente. Refrigerada, puede durar de 4 a 6 semanas. Si tienes el hábito de comprar fruta para toda la semana de una vez — algo que{' '}
            <a href="/es/funcionalidades/despensa">la despensa de Mise</a>{' '}
            ayuda a controlar — el refrigerador es prácticamente obligatorio.
          </p>
          <p>
            La manzana cortada se oxida y oscurece rápido. Un chorrito de jugo de limón sobre las rebanadas retrasa esa reacción si no la vas a comer de inmediato.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar la manzana en la cocina</h2>

          <p>
            La manzana va mucho más allá de comerla sola. Es un ingrediente versátil que funciona bien en platos dulces, salados y bebidas — pero cada variedad tiene su lugar.
          </p>

          <h3>Cruda y al natural</h3>
          <p>
            El uso más simple y más nutritivo — la pectina y los antioxidantes de la cáscara quedan intactos. Buena en ensaladas (con nueces, queso y hojas amargas), en tablas de quesos, en rebanadas con crema de cacahuate o simplemente como snack. Cualquier variedad funciona, pero gala y fuji son las preferidas por su sabor más dulce.
          </p>

          <h3>Horneada y cocida</h3>
          <p>
            La verde (Granny Smith) es la elección correcta. Mantiene su forma después de hornearse, no se deshace y su sabor se profundiza con el calor. La manzana horneada con canela y avena es de esos postres que toman diez minutos y convencen a cualquiera. Para pays y tartas, usa verde o amarilla — evita la roja, que se ablanda demasiado y puede dejar el relleno aguado.
          </p>
          <p>
            Para un{' '}
            <a href="/es/funcionalidades/cardapio-semanal">plan de comidas semanal</a>{' '}
            que incluya un postre simple, la manzana horneada entra fácil: no requiere destreza técnica y casi toda cocina tiene canela a la mano.
          </p>

          <h3>En ensaladas y platos salados</h3>
          <p>
            La verde brilla aquí. Su acidez corta la grasa de carnes y quesos, y su textura crujiente aguanta bien las vinagretas ácidas. Combinación clásica: queso azul, nueces y arúgula. También funciona como acompañamiento de lomo o costillas de cerdo — la acidez complementa la grasa de la carne.
          </p>

          <h3>Jugo y licuados</h3>
          <p>
            El jugo de manzana tiene menos fibra que comer la fruta entera — el prensado elimina buena parte de la pectina. Si el objetivo es conservar la fibra, mejor comer la fruta. Para licuados, la manzana entera puede ir directo a la licuadora, con cáscara incluida, conservando el perfil nutricional completo.
          </p>

          <h3>Recetas clásicas</h3>
          <p>
            El pay de manzana es el uso más clásico, tanto la versión abierta como la de tapa cerrada. El puré de manzana es simple de preparar y una buena forma de aprovechar manzanas que ya perdieron firmeza — la amarilla se deshace más rápido, justo lo que se necesita aquí. La manzana horneada con canela o el strudel completan las recetas que aparecen cada temporada.
          </p>
          <p>
            Si compras manzana con regularidad y quieres asegurarte de que siempre esté en tu{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            antes de que se acabe, Mise lleva el registro de tu despensa y avisa cuando un artículo está por terminarse.
          </p>

          <p>
            Compraste cuatro manzanas verdes el lunes para hacer un pay el sábado. Te las comiste todas antes del jueves. El pay queda pendiente para la próxima semana.
          </p>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Preguntas frecuentes sobre la manzana</h2>
            <dl className="faq-list">

              <div className="faq-item">
                <dt className="faq-q">¿Se puede comer la manzana con cáscara?</dt>
                <dd className="faq-a">
                  Sí, y es lo recomendable. La cáscara concentra buena parte de la fibra y los antioxidantes, incluida la quercetina. La mayoría de los datos nutricionales de la manzana se miden con cáscara. Lávala bien con agua corriente antes de comerla, porque suele traer cera comercial usada para conservarla.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">¿Manzana verde, roja o amarilla: cuál es más saludable?</dt>
                <dd className="faq-a">
                  Las tres tienen un perfil nutricional parecido. La verde tiene un poco menos de azúcar y un poco más de vitamina C, lo que puede importar para quien controla su glucosa. La roja y la amarilla son más dulces y prácticas para comer así. La más saludable suele ser la que de verdad vas a comer.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">¿Cuántas manzanas al día es lo ideal?</dt>
                <dd className="faq-a">
                  Una al día es el clásico, y tiene sentido. Una manzana mediana (180g) tiene alrededor de 95 kcal y 4g de fibra. Dos al día todavía es razonable. Más que eso empieza a subir la ingesta de fructosa sin un beneficio claro adicional.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">¿La manzana engorda?</dt>
                <dd className="faq-a">
                  Tiene unas 52 kcal por 100g — una de las frutas más moderadas en calorías. El azúcar que contiene es fructosa natural, que viene con fibra y agua, lo que retrasa su absorción. Comer una manzana no engorda. El efecto "permiso" — sentir que te ganaste las galletas después — no es problema de la manzana.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">¿Cómo guardar la manzana en casa?</dt>
                <dd className="faq-a">
                  El refrigerador es lo ideal — dura de 4 a 6 semanas en el cajón de frutas. Fuera de él, consúmela en 3 a 5 días. Guárdala lejos de hojas verdes y fresas, porque la manzana libera etileno, un gas que acelera la maduración de lo que tiene cerca.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">¿Se puede congelar la manzana?</dt>
                <dd className="faq-a">
                  Sí, pero pierde textura al descongelarse — ya no sirve para comer así. Funciona bien para licuados, puré y relleno de pay (en ese caso va directo al horno sin descongelar). Pélala, córtala, congélala extendida en una bandeja y luego pásala a una bolsa hermética.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">¿Qué tipo de manzana usar para pay o tarta?</dt>
                <dd className="faq-a">
                  La verde (Granny Smith) es la mejor opción: mantiene su forma al hornearse, sabor equilibrado, libera poca agua. La amarilla también funciona bien. Evita la roja en pay horneado — se ablanda demasiado y puede dejar el relleno aguado.
                </dd>
              </div>

            </dl>
          </section>

          <div className="blog-author">
            <div className="blog-author-inner">
              <div className="blog-author-info">
                <span className="blog-author-name">Gus</span>
                <p className="blog-author-bio">
                  Fundador de Mise. Compró cuatro manzanas verdes el lunes para hacer un pay el sábado. Se las comió todas antes del jueves. El pay nunca pasó. Fuentes: <a href="https://fdc.nal.usda.gov" target="_blank" rel="noopener">USDA FoodData Central</a> y <a href="https://www.usapple.org" target="_blank" rel="noopener">US Apple Association</a>.
                </p>
              </div>
            </div>
          </div>

        </article>

        <div className="blog-cta reveal">
          <p className="blog-cta-title">¿Ya pusiste la manzana en la lista?</p>
          <p className="blog-cta-sub">Mise mantiene tu despensa al día y arma la lista antes de que vayas al mercado.</p>
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
          <p className="footer-copy">Hecho con cariño para quienes disfrutan cocinar.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir la app →</a>
        </div>
      </footer>
    </>
  )
}
