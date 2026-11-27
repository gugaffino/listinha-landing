import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Lista de cumpleaños: qué comprar sin gastar de más',
  description: 'Lista de cumpleaños: qué comprar en comida, bebida, desechables y decoración por invitado, con un reparto de presupuesto simple y qué recortar si falta dinero.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/lista-de-aniversario-o-que-comprar',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-aniversario-o-que-comprar',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-aniversario-o-que-comprar',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
    },
  },
  openGraph: {
    title: 'Lista de cumpleaños: qué comprar sin gastar de más',
    description: 'Lista de cumpleaños: qué comprar en comida, bebida, desechables y decoración por invitado, con un reparto de presupuesto simple y qué recortar si falta dinero.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/lista-de-aniversario-o-que-comprar',
    images: [
      {
        url: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mujer escribiendo una lista de compras de cumpleaños en un cuaderno sobre la mesada de la cocina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de cumpleaños: qué comprar sin gastar de más',
    description: 'Lista de cumpleaños: qué comprar en comida, bebida, desechables y decoración por invitado, con un reparto de presupuesto simple y qué recortar si falta dinero.',
    images: ['https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánta comida comprar por persona en un cumpleaños?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Calcula entre 8 y 10 bocadillos por adulto en una fiesta de 2-3 horas, y 4-6 por niño. Si además hay torta y postre, mejor quedarte en el número más bajo. Para una fiesta más corta, de 1-2 horas, 5-6 por adulto es suficiente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánta bebida comprar por invitado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una referencia que funciona: entre 500 y 600ml por persona en total, sumando todas las bebidas sin alcohol, para una fiesta de 2-3 horas. Eso equivale a una botella de 2 litros de refresco por cada 6-7 invitados, más jugo y agua aparte. En un día de calor, suma un 20% más.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué no puede faltar en un cumpleaños infantil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Torta, velitas, algo para beber, algo para picar y una forma de que los niños gasten energía —globos o un juego sencillo ya resuelven eso. La decoración cara y el animador contratado son extras, no obligaciones. Comida, bebida y una actividad sostienen la fiesta, en ese orden.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede hacer un cumpleaños en casa gastando poco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y el gasto baja bastante cuando la comida y la bebida salen de tu cocina en vez de un servicio de catering. Torta casera, bocadillos horneados en vez de comprados y globos en vez de un fondo personalizado recortan el costo sin recortar la fiesta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hace falta souvenir en un cumpleaños de adultos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hace falta. El souvenir es una tradición más fuerte en las fiestas infantiles, donde los padres esperan algo para que el niño se lleve a casa. En una fiesta de adultos es solo un detalle —si no entra en el presupuesto, se puede recortar sin culpa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántos días antes hay que comprar lo del cumpleaños?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La decoración, los desechables y los souvenirs se pueden comprar con 1-2 semanas de anticipación, porque no se vencen. La torta, los bocadillos y todo lo perecedero quedan para 1-2 días antes, o el mismo día si los preparas en casa. La bebida y el hielo, el día anterior o el mismo día.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué recortar primero si el presupuesto no alcanza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La decoración temática y los souvenirs elaborados salen primero —son lo que más cuesta y lo que menos se recuerda de la fiesta. La comida y la bebida se mantienen, porque es lo que todos notan cuando falta. Globos de colores y una buena torta sostienen la fiesta sin necesidad de un cartel de feliz cumpleaños personalizado.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de cumpleaños: qué comprar sin gastar de más',
  description: 'Lista de cumpleaños: qué comprar en comida, bebida, desechables y decoración por invitado, con un reparto de presupuesto simple y qué recortar si falta dinero.',
  image: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-11-27',
  dateModified: '2026-11-27',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/lista-de-aniversario-o-que-comprar',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de cumpleaños', item: 'https://www.miseemcasa.com.br/es/blog/lista-de-aniversario-o-que-comprar' },
  ],
}

const copyText = `LISTA DE CUMPLEAÑOS

COMIDA
- Torta
- Bocadillos salados
- Dulces o postres pequeños
- Pan o mini sándwiches
- Fruta picada
- Papas fritas o snacks

BEBIDAS
- Refresco
- Jugo
- Agua
- Hielo
- Cerveza o espumante (fiesta de adultos, opcional)

DESECHABLES Y MESA
- Platos desechables
- Vasos desechables
- Servilletas
- Mantel
- Cubiertos desechables
- Bolsas de basura extra

DECORACIÓN
- Globos
- Cartel o banner de "feliz cumpleaños"
- Mantel temático
- Velitas
- Cinta adhesiva

SOUVENIRS (opcional)
- Bolsita de regalo
- Dulce o juguete pequeño
- Tarjetas de agradecimiento`

export default function ListaDeCumpleanosEs() {
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
            <li className="breadcrumb-current" aria-current="page">Lista de cumpleaños</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-11-27">27 nov. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista de cumpleaños: qué comprar sin olvidar nada
          </h1>
          <p className="blog-desc">
            La fiesta ya tiene fecha y ya tiene torta prometida. Lo que falta es la parte aburrida: decidir qué entra en la lista antes de que el súper se convierta en un laberinto de globos y snacks al mismo tiempo. Aquí está lo esencial, organizado por categoría, con la cantidad por invitado y qué recortar si el presupuesto no alcanza.
          </p>

          <div className="answer-box">
            <p>
              Una <strong>lista de cumpleaños</strong> cubre 5 frentes: <strong>comida, bebida, desechables, decoración y souvenirs</strong> (este último, opcional).
              Para una fiesta de 15-20 personas, todo esto cabe en una sola lista de compras —sin tener que volver corriendo porque faltó hielo o servilletas.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mujer escribiendo una lista de compras de cumpleaños en un cuaderno sobre la mesada de la cocina"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Yaroslav Shuraev / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#antes-de-comprar">Antes de salir: invitados y presupuesto</a></li>
              <li><a href="#comida">Comida: qué no puede faltar</a></li>
              <li><a href="#bebidas">Bebidas: cuánto comprar por persona</a></li>
              <li><a href="#desechables">Desechables y mesa</a></li>
              <li><a href="#decoracion">Decoración: lo esencial, sin gastar de más</a></li>
              <li><a href="#lista-para-copiar">Lista para copiar y pegar</a></li>
              <li><a href="#ahorrar">Cómo ahorrar sin que la fiesta se vea pobre</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* ANTES DE COMPRAR */}
          <h2 id="antes-de-comprar">Antes de salir: invitados y presupuesto</h2>

          <p>
            Toda buena lista de cumpleaños empieza con dos números: cuántos invitados y cuánto puedes gastar de verdad. Sin esos dos datos, la lista crece sola —terminas con tres bolsas de papas que nadie pidió y te falta justo una velita más para la torta.
          </p>
          <p>
            La cantidad de invitados decide cuánta comida y bebida comprar. El presupuesto decide qué tan grande es la decoración. Son dos cuentas separadas, y mezclarlas es el error más común —gastar en un fondo personalizado y quedarte corto en los bocadillos, cuando debería ser al revés.
          </p>
          <p>
            Una regla simple: define el presupuesto total primero, destina un 60% a comida y bebida, un 25% a decoración y desechables, y guarda un 15% de margen para lo que siempre aparece —una velita que no prende, una bolsa de hielo extra, ese invitado que avisa a último momento que lleva a su pareja.
          </p>
          <p>
            Separar todo por categoría antes de salir de casa —de la misma forma en que una{' '}
            <a href="/es/blog/lista-de-compras-mercado">lista de compras organizada por pasillo</a> ya funciona para el súper de siempre— evita recorrer el mismo pasillo dos veces buscando lo que quedó fuera de la primera vuelta.
          </p>

          {/* COMIDA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/35661532/pexels-photo-35661532.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Variedad de dulces y bocadillos coloridos en la vitrina de una pastelería"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anderson Alves / Pexels</p>
          </div>

          <h2 id="comida" className="img-above">Comida: qué no puede faltar</h2>

          <p>
            La torta es el centro, pero sola no sostiene una fiesta de dos horas. La base segura es: torta, bocadillos salados, algún dulce y algo más contundente —mini sándwiches o, si la fiesta es más grande, un asado.
          </p>
          <ul className="item-list">
            <li><strong>Torta</strong> — 1 porción por invitado, más un 20% de margen para quien repite</li>
            <li><strong>Bocadillos salados</strong> — 8-10 por adulto, 4-6 por niño, en una fiesta de 2-3 horas</li>
            <li><strong>Dulces o postres pequeños</strong> — 2-3 por persona, si también hay torta</li>
            <li><strong>Pan o mini sándwiches</strong> — opcional, bueno si la fiesta cruza la hora de una comida</li>
            <li><strong>Fruta picada</strong> — ayuda a equilibrar el azúcar, sobre todo en fiestas infantiles</li>
          </ul>
          <p>
            Una fiesta con asado cambia la cuenta: la carne pasa a ser el plato principal, y los bocadillos se vuelven entrada, no comida completa. En ese caso, calcula la carne por persona por separado del resto —y reduce los postres a la mitad, porque nadie quiere un dulce más después de torta y asado juntos.
          </p>

          {/* BEBIDAS */}
          <h2 id="bebidas">Bebidas: cuánto comprar por persona</h2>

          <p>
            La cuenta de bebida suele ser la que más sobra o más falta —rara vez queda justa. La referencia que funciona: entre 500 y 600ml por persona en total, sumando todo lo que no tiene alcohol, para una fiesta de 2-3 horas.
          </p>
          <ul className="item-list">
            <li><strong>Refresco</strong> — una botella de 2 litros por cada 6-7 invitados</li>
            <li><strong>Jugo</strong> — opcional, bueno para los niños y para quien no toma refresco</li>
            <li><strong>Agua</strong> — siempre hay alguien que solo quiere agua, sobre todo en un día de calor</li>
            <li><strong>Hielo</strong> — cerca de 1kg por cada 4-5 invitados, más si la fiesta es al aire libre</li>
            <li><strong>Cerveza o espumante</strong> — fiesta de adultos, calcula esto aparte de la cuenta del refresco</li>
          </ul>
          <p>
            En un día de calor, o si la fiesta pasa de 3 horas, suma un 20% más a esa cuenta. Que sobre bebida no es problema —no se echa a perder como los bocadillos. Que falte es el error que todos recuerdan.
          </p>

          {/* DESECHABLES */}
          <h2 id="desechables">Desechables y mesa</h2>

          <p>
            Es la parte que a nadie le entusiasma, pero es la diferencia entre lavar platos hasta la medianoche o tirar todo a la bolsa de basura e ir a dormir.
          </p>
          <ul className="item-list">
            <li><strong>Platos desechables</strong> — calcula 1,5 por persona, porque alguien siempre repite</li>
            <li><strong>Vasos desechables</strong> — lo mismo, 1,5 por persona</li>
            <li><strong>Servilletas</strong> — compra el paquete grande, siempre se usan menos de las que parece hasta que no alcanzan</li>
            <li><strong>Mantel</strong> — desechable o de tela, según el estilo de la fiesta</li>
            <li><strong>Cubiertos desechables</strong> — solo si hay comida que los necesita, como asado o pasta</li>
            <li><strong>Bolsas de basura extra</strong> — más de lo normal en casa, una fiesta triplica lo que se genera</li>
          </ul>

          {/* DECORACIÓN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8880742/pexels-photo-8880742.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Vaso con refresco helado y cubos de hielo sobre una mesa de fiesta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ron Lach / Pexels</p>
          </div>

          <h2 id="decoracion" className="img-above">Decoración: lo esencial, sin gastar de más</h2>

          <p>
            La decoración es donde el presupuesto de un cumpleaños se escapa más rápido, porque cada artículo tiene una versión más bonita y más cara justo al lado de la versión simple. Lo esencial cabe en cinco cosas.
          </p>
          <ul className="item-list">
            <li><strong>Globos</strong> — del color del tema o de la fiesta, sueltos o en un arreglo simple</li>
            <li><strong>Cartel o banner de "feliz cumpleaños"</strong> — una versión impresa simple funciona tan bien como la personalizada</li>
            <li><strong>Mantel temático</strong> — si la fiesta tiene un tema, es lo que más identidad visual aporta por menos dinero</li>
            <li><strong>Velitas</strong> — numéricas o comunes, siempre compra una de repuesto, porque alguna se rompe antes de la foto</li>
            <li><strong>Cinta adhesiva</strong> — para pegar globos y el banner, el artículo que todos olvidan hasta que lo necesitan</li>
          </ul>
          <p>
            Los souvenirs van después, y solo si el presupuesto lo permite. Una bolsita con un dulce o un juguete pequeño resuelve una fiesta infantil. En una fiesta de adultos, se puede saltar sin culpa —nadie se va a su casa quejándose de que no hubo souvenir.
          </p>

          {/* LISTA PARA COPIAR */}
          <h2 id="lista-para-copiar">Lista de cumpleaños para copiar y pegar</h2>
          <p>
            Haz clic en "Copiar lista" y pégala en WhatsApp o en el bloc de notas. Marca lo que ya tienes en casa —un globo que sobró de la última fiesta, una velita de repuesto, bolsas de basura que ya tenías.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista de cumpleaños</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Comida</h4>
                <ul>
                  <li>Torta</li><li>Bocadillos salados</li><li>Dulces</li>
                  <li>Mini sándwiches</li><li>Fruta picada</li><li>Papas fritas</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Bebidas</h4>
                <ul>
                  <li>Refresco</li><li>Jugo</li><li>Agua</li>
                  <li>Hielo</li><li>Cerveza o espumante</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Desechables</h4>
                <ul>
                  <li>Platos</li><li>Vasos</li><li>Servilletas</li>
                  <li>Mantel</li><li>Cubiertos</li><li>Bolsas de basura</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Decoración</h4>
                <ul>
                  <li>Globos</li><li>Banner de cumpleaños</li>
                  <li>Mantel temático</li><li>Velitas</li><li>Cinta adhesiva</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Souvenirs</h4>
                <ul>
                  <li>Bolsita de regalo</li><li>Dulce o juguete</li>
                  <li>Tarjetas de agradecimiento</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AHORRAR */}
          <h2 id="ahorrar">Cómo ahorrar sin que la fiesta se vea pobre</h2>

          <p>
            La forma más rápida de recortar costos en un cumpleaños es cambiar un servicio pagado por trabajo casero —torta hecha en casa en vez de encargada, bocadillos horneados en vez de comprados ya listos. La diferencia de sabor es mínima; la diferencia en el bolsillo, no.
          </p>
          <p>
            Comprar en cantidades grandes también ayuda: una botella de 2 litros de refresco sale más barata por litro que las latas individuales, y un paquete grande de desechables cuesta menos por unidad que uno chico. El detalle está en calcular bien antes —que sobren desechables no es un problema, que sobre comida perecedera sí es desperdicio.
          </p>
          <p>
            Una <a href="/es/blog/como-economizar-no-mercado">lista de compras organizada por categoría</a> evita un segundo viaje al súper —uno para olvidar el hielo, otro para volver corriendo el día de la fiesta porque las servilletas no entraron en la primera lista. Separar comida, bebida, desechables y decoración antes de salir ya reduce a la mitad el riesgo de olvidar algo.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la lista de cumpleaños</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuánta comida comprar por persona en un cumpleaños?</p>
              <p className="faq-a">
                Calcula entre 8 y 10 bocadillos por adulto en una fiesta de 2-3 horas, y 4-6 por niño. Con torta y postre también en la mesa, mejor quedarte en el número más bajo. Para una fiesta más corta, 5-6 por adulto es suficiente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánta bebida comprar por invitado?</p>
              <p className="faq-a">
                Entre 500 y 600ml por persona en total, sumando todas las bebidas sin alcohol. Eso equivale a una botella de 2 litros de refresco por cada 6-7 invitados, más jugo y agua. En un día de calor, suma un 20% más.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué no puede faltar en un cumpleaños infantil?</p>
              <p className="faq-a">
                Torta, velitas, bebida, algo para picar y una forma de que los niños gasten energía —globos o un juego sencillo ya resuelven eso. La decoración cara y el animador contratado son extras, no obligaciones.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede hacer un cumpleaños en casa gastando poco?</p>
              <p className="faq-a">
                Sí, y el gasto baja bastante cuando la comida y la bebida salen de tu cocina en vez de un catering. Torta casera, bocadillos horneados y globos en vez de un fondo personalizado recortan el costo sin recortar la fiesta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Hace falta souvenir en un cumpleaños de adultos?</p>
              <p className="faq-a">
                No hace falta. El souvenir es una tradición más fuerte en las fiestas infantiles. En una fiesta de adultos es solo un detalle —si no entra en el presupuesto, se puede recortar sin culpa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuántos días antes hay que comprar lo del cumpleaños?</p>
              <p className="faq-a">
                La decoración, los desechables y los souvenirs se pueden comprar con 1-2 semanas de anticipación. La torta y lo perecedero quedan para 1-2 días antes. La bebida y el hielo, el día anterior o el mismo día.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué recortar primero si el presupuesto no alcanza?</p>
              <p className="faq-a">
                La decoración temática y los souvenirs elaborados salen primero. La comida y la bebida se mantienen, porque es lo que todos notan cuando falta. Globos de colores y una buena torta sostienen la fiesta sin un cartel personalizado.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador de Mise. Hace las compras cada semana y todavía se le olvida algún ingrediente.
                Construyó la app para resolver el problema que él mismo tenía en la cocina.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">Lista de cumpleaños lista. Nada olvidado en el súper.</p>
            <p className="blog-cta-desc">
              Con Mise armas la <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> por categoría y revisas qué ya tienes en la{' '}
              <a href="/es/funcionalidades/despensa">despensa</a> antes de salir hacia la fiesta.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Empieza gratis
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Volver arriba">Volver arriba ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Hecho con cuidado en Brasil.</p>
          <nav className="footer-links" aria-label="Enlaces del pie de página">
            <a href="/es/blog" className="footer-link">Blog</a>
            <a href="/es/funcionalidades" className="footer-link">Funcionalidades</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
