import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Cómo ahorrar en el supermercado: 12 hábitos que sí funcionan',
  description: 'Ahorrar en el súper empieza antes de salir de casa. 12 hábitos prácticos de lista, despensa y menú semanal que reducen el gasto sin sacrificar lo que comes.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/como-economizar-no-mercado',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/como-economizar-no-mercado',
      en: 'https://www.miseemcasa.com.br/en/blog/como-economizar-no-mercado',
      es: 'https://www.miseemcasa.com.br/es/blog/como-economizar-no-mercado',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/como-economizar-no-mercado',
    },
  },
  openGraph: {
    title: 'Cómo ahorrar en el supermercado: 12 hábitos que sí funcionan',
    description: 'Ahorrar en el súper empieza antes de salir de casa. Lista, despensa y menú conectados reducen el gasto sin que notes la diferencia en el plato.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/como-economizar-no-mercado',
    images: [
      {
        url: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
        width: 1200,
        height: 630,
        alt: 'Familia haciendo mercado en el supermercado con la lista en la mano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo ahorrar en el supermercado: 12 hábitos que sí funcionan',
    description: 'Ahorrar en el súper empieza antes de salir de casa. Lista, despensa y menú conectados reducen el gasto sin que notes la diferencia en el plato.',
    images: ['https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo ahorrar en el supermercado de forma práctica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El ahorro empieza en casa: revisar la despensa para no comprar lo que ya tienes, planear el menú de la semana y armar una lista completa organizada por secciones. Dentro del súper: comer antes de ir, seguir la lista al pie de la letra, evitar las exhibiciones especiales y comparar el precio por kilo o litro, no el precio del paquete. Quien compra con lista fija gasta menos que quien va sin planear.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto puedo ahorrar al mes haciendo una lista de compras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del hogar y de los hábitos actuales, pero el mecanismo es el mismo en cualquier país: las compras no planeadas representan una parte enorme de lo que termina en el carrito. Eliminar duplicados, compras por impulso y comida que se echa a perder puede representar, en un cálculo conservador, entre el 10% y el 20% del gasto mensual en el súper.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Conviene más ir al súper una vez por semana o varias veces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una vez por semana con lista completa sale más barato. Cada visita extra es una exposición más a las estrategias de venta del supermercado: exhibiciones especiales, comparación de precios, productos a la altura de los ojos. Ir menos veces con una lista completa reduce cuántas oportunidades de compra por impulso te das a ti mismo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hacer para no gastar más del presupuesto en el supermercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Define el presupuesto antes de armar la lista. Planea el menú de la semana primero, luego anota solo los ingredientes que faltan. Revisa la despensa antes de escribir cualquier cosa: vas a descubrir que ya tienes buena parte. En el súper, compra sin hambre y sigue la lista. Evita los pasillos que no están en tu ruta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evitar el desperdicio de comida y ahorrar al mismo tiempo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La causa principal del desperdicio en los hogares es comprar sin saber qué ya tienes en casa. Con una despensa organizada y conectada a la lista, compras solo lo que vas a usar. Según la FAO, los hogares de América Latina desperdician en promedio entre 90 y 110 kg de comida por persona al año, y buena parte de ese desperdicio empieza en el supermercado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre precio por unidad y precio por kilo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El precio que aparece en la etiqueta suele ser por paquete o por unidad de venta. El precio por kilo o por litro es el que permite comparar de verdad entre marcas y tamaños distintos. El paquete más chico parece más barato, pero el precio por kilo casi siempre es mayor. En muchos países es obligatorio mostrarlo en el estante —revísalo antes de decidir entre dos opciones.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cómo ahorrar en el supermercado: 12 hábitos que sí funcionan',
  description: 'Ahorrar en el súper empieza antes de salir de casa. 12 hábitos prácticos de lista, despensa y menú semanal que reducen el gasto sin sacrificar lo que comes.',
  image: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
  datePublished: '2026-08-12',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/como-economizar-no-mercado',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cómo ahorrar en el supermercado', item: 'https://www.miseemcasa.com.br/es/blog/como-economizar-no-mercado' },
  ],
}

export default function ComoAhorrarEnElSupermercadoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Cómo ahorrar en el supermercado</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">12 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">10 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            12 hábitos para ahorrar en el supermercado que sí funcionan
          </h1>
          <p className="blog-desc">
            Ir al súper una vez por semana con lista sale más barato que ir tres veces &quot;rapidito&quot;. La compra express es la más cara de todas. Aquí están los hábitos que hacen una diferencia real —antes, durante y después del supermercado.
          </p>

          <div className="answer-box">
            <p>
              <strong>¿Cómo ahorrar en el supermercado?</strong> El ahorro empieza en casa:{' '}
              revisa la despensa, planea el menú de la semana y arma una lista organizada por secciones.
              Dentro del súper: nunca vayas con hambre, sigue la lista y compara el precio por kilo.
              Quien compra con lista fija gasta menos que quien va sin planear.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200"
            alt="Familia haciendo mercado en el supermercado con la lista en la mano"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Gustavo Fring / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#por-que-gastas-mas">Por qué la mayoría gasta más de lo que debería</a></li>
              <li><a href="#antes-de-salir">Antes de salir de casa: dónde empieza el ahorro</a></li>
              <li><a href="#dentro-del-super">Dentro del súper: hábitos que reducen el gasto</a></li>
              <li><a href="#lista-que-funciona">La lista de compras que sí funciona</a></li>
              <li><a href="#lista-despensa-menu">Lista, despensa y menú: el mayor ahorro</a></li>
              <li><a href="#cuanto-ahorrar">Cuánto puedes ahorrar al mes</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* POR QUÉ GASTAS MÁS */}
          <h2 id="por-que-gastas-mas">Por qué la mayoría gasta más de lo que debería en el supermercado</h2>

          <p>
            Un estudio que analizó cerca de 30.000 compras encontró que las compras no planeadas representan{' '}
            <strong>hasta el 68% de lo que se lleva en un viaje grande al supermercado</strong>, y{' '}
            <strong>alrededor del 54% en un viaje más chico</strong>. Otras encuestas de la industria calculan
            que entre el 20% y el 50% de los compradores hace al menos una compra por impulso cada vez que
            entra al súper. Como se mire, el patrón se repite en cualquier país: buena parte de lo que
            termina en el carrito no se decidió en casa.
          </p>

          <p>
            Eso se traduce en dinero real. Cada producto que no estaba en el plan es o algo que vas a usar
            eventualmente (bien, pero pagaste espacio y tiempo de despensa que no necesitabas) o algo que
            termina olvidado al fondo del refrigerador. Según la FAO, los hogares de América Latina
            desperdician en promedio entre <strong>90 y 110 kg de comida por persona al año</strong> —con
            variaciones importantes entre países—, y buena parte de ese desperdicio arranca en una compra
            hecha sin plan.
          </p>

          <p>
            El problema no es falta de disciplina. Es falta de sistema. Ir al súper sin plan es como comprar
            con los ojos cerrados: llegas a algún lado, pero el camino es torcido y el carrito termina
            lleno de sorpresas.
          </p>

          <p>
            Y hay más: cada visita extra al supermercado es una exposición más a las estrategias de venta
            del retail. Exhibiciones especiales, comparación de precios, productos ubicados a la altura de
            los ojos —todo diseñado para subir el ticket promedio. Ir menos veces con una lista completa
            es, en sí mismo, una defensa.
          </p>

          {/* ANTES DE SALIR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6214370/pexels-photo-6214370.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Persona escribiendo la lista de compras en papel con planeación semanal"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nataliya Vaitkevich / Pexels</p>
          </div>

          <h2 id="antes-de-salir" className="img-above">Antes de salir de casa: dónde empieza el ahorro</h2>

          <p>
            La mayoría de los consejos para ahorrar en el súper se enfocan en qué hacer dentro de la
            tienda. Pero la mayor parte del dinero que ahorras se decide antes de que salgas de casa.
          </p>

          <h3>1. Revisa la despensa antes de escribir la lista</h3>
          <p>
            Suena obvio, pero casi nadie lo hace. Abre cada gabinete, revisa el refri y el congelador antes
            de sentarte a hacer la lista. Vas a descubrir que tienes dos latas de puré de tomate, arroz
            para dos semanas y ese queso que todavía sirve. Comprar duplicado es la forma más silenciosa
            de desperdicio que existe. Si tu despensa está desordenada, vale la pena organizarla primero:
            agrupa por tipo, etiqueta lo que puedas y dale a cada cosa un lugar que sí vayas a recordar.
          </p>

          <h3>2. Planea el menú de la semana antes de ir</h3>
          <p>
            Sin saber qué vas a cocinar, la lista es una adivinanza. Terminas comprando proteínas sin saber
            qué hacer con ellas, verduras que no combinan con nada planeado, y aun así pides comida a
            domicilio el miércoles.
          </p>
          <p>
            Dedicar 10 minutos a elegir de 5 a 7 comidas para la semana convierte la lista en algo preciso:
            sabes exactamente qué ingredientes necesitas y en qué cantidad. El{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal de Mise</a> hace esto
            automáticamente —eliges las recetas y la app arma la lista de lo que te falta.
          </p>

          <h3>3. Arma la lista por secciones, no de memoria</h3>
          <p>
            Una lista organizada por secciones (frutas y verduras, carnes, lácteos, despensa, limpieza,
            higiene) cubre todos los pasillos sin dejar huecos. Cuando escribes de memoria, se te olvidan
            categorías enteras —y terminas haciendo un segundo viaje a media semana. Si necesitas un
            punto de partida, tener una lista maestra de los básicos de tu hogar te evita reconstruirla
            desde cero cada vez.
          </p>

          <h3>4. Define el presupuesto antes de ir</h3>
          <p>
            Saber cuánto vas a gastar cambia lo que pones en la lista. Con presupuesto definido, priorizas:
            la proteína de toda la semana se queda, el yogur especial se queda para otra vez. Sin
            presupuesto, todo parece necesario en el momento.
          </p>

          <h3>5. No vayas con hambre</h3>
          <p>
            Clásico porque es real. Con hambre, todo parece urgente y necesario. Agarras la botana en
            oferta, el chocolate de la fila de la caja, la pizza congelada &quot;solo por esta vez&quot;.
            Come antes de ir.
          </p>

          {/* DENTRO DEL SÚPER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/16211537/pexels-photo-16211537.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Pasillo de supermercado con estantes organizados"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: ha ha / Pexels</p>
          </div>

          <h2 id="dentro-del-super" className="img-above">Dentro del súper: hábitos que reducen el gasto</h2>

          <h3>6. Sigue la lista, no el pasillo</h3>
          <p>
            Los supermercados están diseñados para que camines por todos los pasillos. Los básicos (leche,
            huevo, pan) están al fondo para que pases por todo lo demás antes de llegar. Si no está en la
            lista, no entres al pasillo. Cada pasillo es una nueva oportunidad de compra por impulso.
          </p>

          <h3>7. Compara el precio por kilo, no el precio del paquete</h3>
          <p>
            El paquete chico parece más barato que el grande, pero el precio por kilo casi siempre
            contradice esa intuición. En muchos países es obligatorio que el supermercado muestre el
            precio por unidad de medida en el estante. Usa esa información —ya está ahí.
          </p>

          <h3>8. Evita las exhibiciones especiales</h3>
          <p>
            Una exhibición especial no es necesariamente una oferta. Ese espacio se les vende a las marcas
            como destaque. Antes de llevar algo exhibido en un lugar especial, compáralo con el producto
            equivalente en el estante normal de su categoría.
          </p>

          <h3>9. Prefiere marcas propias en productos básicos</h3>
          <p>
            Arroz, frijol, harina, azúcar, sal, jabón de trastes: productos sin diferencia real de sabor
            o desempeño. La marca propia del supermercado suele ser entre 20% y 40% más barata, y muchas
            veces sale de la misma fábrica que la marca reconocida. Ahorra donde de verdad no vas a notar
            la diferencia.
          </p>

          <h3>10. No compres algo fuera del plan solo porque está en oferta</h3>
          <p>
            Una oferta solo es ahorro si de todas formas ibas a comprar eso. Llevarte 3 frascos de salsa
            porque tienen descuento, cuando usas uno al mes, es gastar ahora el dinero que ibas a gastar
            meses después —sin el beneficio real de tener ese dinero disponible mientras tanto.
          </p>

          <div className="blog-inline-cta">
            <p>Menos decisiones. <em>Más cocina.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* LISTA QUE FUNCIONA */}
          <h2 id="lista-que-funciona">La lista de compras que sí funciona</h2>

          <p>
            Una buena lista de compras tiene tres características: está organizada por secciones (para no
            volver sobre tus pasos), está basada en el menú de la semana (para comprar solo lo que vas a
            usar) y refleja lo que ya tienes en casa (para no comprar duplicado).
          </p>

          <p>
            El formato más eficiente no es una lista corrida de productos —es una lista organizada por
            sección. Entras a frutas y verduras, marcas todo ahí, sigues a carnes, luego lácteos, luego
            despensa. Sin regresar. Sin un olvido que obligue a un segundo viaje.
          </p>

          <p>
            La <a href="/es/funcionalidades/lista-de-compras">lista de compras de Mise</a> ya organiza los
            productos por sección automáticamente. Agregas lo que necesitas, la app los agrupa por categoría
            y sales del súper más rápido —y sin salirte del presupuesto.
          </p>

          <h3>11. Compra una vez por semana, no varias veces</h3>
          <p>
            Cada viaje al súper tiene un costo invisible más allá del carrito: traslado, tiempo y, sobre
            todo, exposición a más oportunidades de compra no planeada. Quien va al súper tres veces por
            semana &quot;solo por unas cosas&quot; suele gastar más en total que quien va una vez con la
            lista completa.
          </p>

          <h3>12. Revisa la lista después, no durante</h3>
          <p>
            Al terminar la compra, mira qué quedó sin marcar en la lista (lo que no encontraste o decidiste
            no llevar) y qué entró al carrito que no estaba en la lista. Ese ejercicio de dos minutos
            revela patrones: qué se te olvida cada semana, qué compras por impulso siempre, en qué se te
            va el presupuesto.
          </p>

          {/* LISTA + DESPENSA + MENÚ */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4443442/pexels-photo-4443442.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Refrigerador bien organizado con frutas y verduras frescas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="lista-despensa-menu" className="img-above">Lista, despensa y menú: dónde está el mayor ahorro</h2>

          <p>
            Cada uno de estos hábitos ayuda por separado. Pero la mayor ganancia aparece cuando los tres
            están conectados.
          </p>

          <p>
            Funciona así: planeas el menú de la semana con base en lo que ya tienes en la despensa. Lo que
            falta va directo a la lista. En el súper, compras solo esos productos. De regreso, actualizas
            la despensa. Cuando algo se termina, lo marcas —no el día del súper, cuando ya se te olvidó,
            sino en el momento en que lo notas.
          </p>

          <p>
            Ese ciclo elimina los dos mayores culpables del gasto en el súper: comprar algo que ya tenías
            (porque no sabías que lo tenías) y no comprar algo que necesitabas (porque se te olvidó
            anotarlo). La <a href="/es/funcionalidades/despensa">despensa de Mise</a> funciona como un
            inventario conectado a la lista —sabes qué tienes sin necesidad de abrir cada gabinete.
          </p>

          <p>
            En la práctica, quien combina los tres elementos tiende a gastar menos no porque compre
            productos más baratos, sino porque compra lo que de verdad va a usar. Sin nada que se venza
            al fondo del refrigerador. Sin segundo viaje a media semana por lo que se le olvidó.
          </p>

          {/* CUÁNTO AHORRAR */}
          <h2 id="cuanto-ahorrar">Cuánto puedes ahorrar al mes</h2>

          <p>
            El gasto mensual en el súper varía muchísimo según el país, la ciudad y el tamaño del hogar,
            así que un número exacto en dólares o pesos no te sirve de mucho. Lo que sí es consistente
            entre estudios de finanzas personales es el patrón: reducir compras duplicadas, impulsos y
            comida que se echa a perder suele representar, en un cálculo conservador, entre{' '}
            <strong>el 10% y el 20% del gasto mensual</strong> en el supermercado.
          </p>

          <p>
            No es una proyección abstracta. Es el costo de las compras por impulso en cada visita, de
            comprar duplicado porque no revisaste la despensa, de un segundo viaje porque se te olvidó
            algo esencial, de tirar comida que se venció porque compraste sin plan. Según la FAO, los
            hogares de la región desperdician en promedio entre <strong>90 y 110 kg de comida por
            persona al año</strong> —dinero que se compró y terminó en la basura.
          </p>

          <p>
            Una familia que compra sin ningún plan puede recortar una parte real de ese gasto con una
            lista fija, un menú semanal y una despensa organizada. La diferencia no viene de cambiar de
            supermercado ni de eliminar categorías enteras —viene de comprar, con precisión, solo lo que
            de verdad se va a usar.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre cómo ahorrar en el supermercado</h2>

          <ul className="faq-list">

            <li className="faq-item">
              <p className="faq-q">¿Cómo ahorrar en el supermercado de forma práctica?</p>
              <p className="faq-a">
                El ahorro empieza en casa: revisa la despensa antes de armar la lista, planea el menú de
                la semana y escribe todo organizado por secciones. Dentro del súper, come antes de ir,
                sigue la lista y compara el precio por kilo —no el precio del paquete. Quien compra con
                lista fija gasta menos que quien va sin planear.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">¿Cuánto puedo ahorrar al mes haciendo una lista de compras?</p>
              <p className="faq-a">
                Depende del hogar y de los hábitos actuales, pero las compras no planeadas representan
                buena parte de lo que termina en el carrito. Eliminar duplicados, impulsos y comida
                desperdiciada puede representar entre <strong>el 10% y el 20% del gasto mensual</strong> en
                el súper.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">¿Conviene más ir al súper una vez por semana o varias veces?</p>
              <p className="faq-a">
                Una vez por semana con lista completa sale más barato. Cada visita extra es una exposición
                más a las estrategias de venta del retail —y más oportunidades de compra por impulso. Quien
                concentra sus compras tiende a gastar menos en total.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">¿Qué hacer para no gastar más del presupuesto en el supermercado?</p>
              <p className="faq-a">
                Define el presupuesto antes de armar la lista. Planea el menú primero, luego anota los
                ingredientes que faltan. Revisa la despensa antes de escribir cualquier cosa. En el súper,
                sigue la lista y evita pasillos que no están en tu ruta.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">¿Cómo evitar el desperdicio de comida y ahorrar al mismo tiempo?</p>
              <p className="faq-a">
                La causa principal del desperdicio en los hogares es comprar sin saber qué ya tienes. Con
                una despensa organizada y conectada a la lista, compras solo lo que vas a usar. Según la
                FAO, los hogares de América Latina desperdician en promedio entre{' '}
                <strong>90 y 110 kg de comida por persona al año</strong> —buena parte empieza en el súper.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre precio por unidad y precio por kilo?</p>
              <p className="faq-a">
                El precio que aparece en la etiqueta suele ser por paquete. El precio por kilo o litro es
                el que permite comparar de verdad entre marcas y tamaños. En muchos países es obligatorio
                mostrarlo en el estante —revísalo siempre antes de elegir entre dos opciones.
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
                Creador de Mise. Hace la lista de compras cada semana desde que aprendió a cocinar —y aun así se le olvida el ajo de vez en cuando.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Basta de ir al súper sin plan.<br />
              <em>Usa Mise.</em>
            </h2>
            <p>
              Lista de compras, despensa y menú semanal en un solo lugar.
              Tú decides qué vas a cocinar, la app arma la lista de lo que falta.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Empieza gratis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
