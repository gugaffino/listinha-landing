import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Lista de compras para 2 personas: guía de cantidades',
  description: 'Lista de compras para 2 personas: cantidad correcta por categoría, lista lista para copiar, cuánto cuesta al mes y cómo evitar que se eche a perder la comida.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-2-pessoas',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-2-pessoas',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-2-pessoas',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
    },
  },
  openGraph: {
    title: 'Lista de compras para 2 personas: guía de cantidades',
    description: 'Lista de compras para 2 personas: cantidad correcta por categoría, lista lista para copiar, cuánto cuesta al mes y cómo evitar que se eche a perder la comida.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-2-pessoas',
    images: [
      {
        url: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mujer escribiendo la lista de compras en un cuaderno sobre la mesada de la cocina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras para 2 personas: guía de cantidades',
    description: 'Lista de compras para 2 personas: cantidad correcta por categoría, lista lista para copiar, cuánto cuesta al mes y cómo evitar que se eche a perder la comida.',
    images: ['https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta la lista de compras para 2 personas al mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Como referencia regional, la FAO calculó en 2026 un costo promedio de USD 4,91 por persona al día para una dieta saludable en América Latina y el Caribe. Para dos personas, eso equivale a unos USD 290-300 al mes solo en comida, sin contar limpieza ni higiene. El número real varía bastante según el país y la ciudad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto arroz y frijoles necesitan 2 personas por semana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cerca de 1 kg de arroz y 500 g de frijoles (o lentejas) alcanzan para la semana de una pareja que come esa combinación seguido. Si comen fuera con frecuencia, la misma cantidad puede estirarse a 10-12 días.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Conviene hacer la compra semanal o mensual para 2 personas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lo ideal es mezclar: despensa seca y artículos de limpieza en una compra mensual, porque no se echan a perder. Verduras, carnes y lácteos en una compra semanal, porque son perecederos. Comprar todo de una vez al mes para 2 personas suele terminar en desperdicio de lo fresco.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Vale la pena comprar el paquete familiar para 2 personas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solo para no perecederos que de verdad consumen — arroz, frijoles, papel higiénico, limpieza. Para carne, pan y lácteos, el paquete grande casi siempre termina la mitad en el congelador o la mitad en la basura. Compara el precio por kilo, no el precio total del paquete.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evitar el desperdicio de comida comprando para 2 personas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compra pensando en cuántas comidas vas a cocinar de verdad esa semana, no en el tamaño del paquete en el estante. Congela la carne en porciones apenas llegues a casa y revisa la despensa antes de salir — la mayor causa de desperdicio doméstico es comprar algo que ya tenías.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cambia en la lista cuando llega una visita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Suma 1 porción extra de proteína y de acompañamiento por persona que va a compartir esa comida con ustedes, pero no dupliques toda la lista. La despensa, el café y los básicos del desayuno ya tienen margen suficiente para una casa de 2 personas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura la compra del súper para una pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verduras y pan duran entre 3 y 7 días. La carne fresca dura 2-3 días en el refrigerador, o meses en el congelador si ya está porcionada. La despensa, la limpieza y la higiene duran semanas — a veces un mes entero, según el producto.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras para 2 personas: guía de cantidades',
  description: 'Lista de compras para 2 personas: cantidad correcta por categoría, lista lista para copiar, cuánto cuesta al mes y cómo evitar que se eche a perder la comida.',
  image: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-17',
  dateModified: '2026-08-17',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-2-pessoas',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras para 2 personas', item: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-2-pessoas' },
  ],
}

const copyText = `LISTA DE COMPRAS PARA 2 PERSONAS (SEMANA)

VERDULERÍA
- Cebolla, ajo, tomate
- Papa
- Zanahoria
- Hojas verdes
- Fruta variada (1,5-2 kg)

PROTEÍNAS
- Pollo (800 g-1 kg)
- Carne molida o de res (500 g)
- Huevos (1 docena)
- Atún o sardina en lata (2 latas)

LÁCTEOS
- Leche (2 litros)
- Yogur natural
- Queso (200 g)
- Mantequilla

DESPENSA (compra mensual)
- Arroz (4 kg)
- Frijoles o lentejas (2 kg)
- Pasta (2 paquetes)
- Aceite
- Café
- Azúcar y sal

LIMPIEZA E HIGIENE (compra mensual)
- Detergente y jabón en polvo
- Papel higiénico
- Jabón de baño y pasta dental
- Bolsas de basura`

export default function ListaDeComprasPara2PersonasEs() {
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
            <li className="breadcrumb-current" aria-current="page">Lista de compras para 2 personas</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-17">17 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista de compras para 2 personas: cuánto comprar sin que sobre ni falte
          </h1>
          <p className="blog-desc">
            Dos personas se van a vivir juntas, una duplica el pedido de arroz de siempre "porque ahora somos dos", y tres semanas después hay una bolsa de 5 kg intacta en el fondo de la alacena. La lista de compras para 2 personas no es la lista de soltero duplicada ni la lista familiar cortada a la mitad. Esta es la cantidad que de verdad tiene sentido.
          </p>

          <div className="answer-box">
            <p>
              Una <strong>lista de compras para 2 personas</strong> gira en torno a 1 kg de arroz y 500 g de frijoles por semana, 800 g-1 kg de proteína por semana y 1,5-2 kg de fruta y verdura combinadas.
              Como referencia regional, la FAO calculó en 2026 un costo de <strong>USD 4,91 por persona al día</strong> para comer saludable en América Latina — unos <strong>USD 290-300 al mes</strong> para dos personas, solo en comida.
              La regla que evita el desperdicio: lo perecedero en la compra semanal, la despensa y limpieza en la compra mensual.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mujer escribiendo la lista de compras en un cuaderno sobre la mesada de la cocina"
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
              <li><a href="#que-cambia">Qué cambia en una lista para 2 personas</a></li>
              <li><a href="#cantidad-correcta">Cantidad correcta por categoría</a></li>
              <li><a href="#lista-copiar">Lista lista para copiar</a></li>
              <li><a href="#semanal-mensual">Compra semanal, quincenal o mensual</a></li>
              <li><a href="#errores-comunes">Errores que hacen que sobre o falte comida</a></li>
              <li><a href="#cuanto-cuesta">Cuánto cuesta al mes</a></li>
              <li><a href="#visita">Cuando llega una visita</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ CAMBIA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4124939/pexels-photo-4124939.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Carrito de compras en un pasillo colorido de supermercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Christian Naccarato / Pexels</p>
          </div>

          <h2 id="que-cambia" className="img-above">Qué cambia en una lista de compras para 2 personas</h2>

          <p>
            El error más común no es olvidar un producto. Es calcular mal la cantidad. Quien vive solo aprende a comprar poco. Quien tiene una familia grande aprende a comprar por volumen. La pareja queda en el medio — y justo ese medio es lo que nadie explica bien.
          </p>
          <p>
            No es la lista básica dividida entre dos. Dos personas no comen la mitad de lo que come una familia de cuatro — comen más de la mitad en casi todo, porque los productos básicos tienen un piso de compra que no escala de forma lineal. Un paquete de café no se convierte en "medio paquete" solo porque son dos personas en vez de cuatro.
          </p>
          <p>
            Tampoco es la lista de soltero multiplicada por dos. Dos personas comparten olla, comparten condimento, comparten sobras. Lo que queda de la cena del martes se convierte en el almuerzo del miércoles. Eso cambia la lógica de cuánto comprar de cada cosa — sobre todo proteína y verdulería, que son lo que más se echa a perder si se queda quieto.
          </p>
          <p>
            La referencia correcta es cantidad pensada para 2 personas específicas, no una fracción de otra lista. Eso es lo que evita los dos dolores de cabeza opuestos — comida muriendo en el fondo del refrigerador, o tener que volver al súper un miércoles porque faltó algo básico.
          </p>

          {/* CANTIDAD CORRECTA */}
          <h2 id="cantidad-correcta">Cantidad correcta por categoría para 2 personas</h2>

          <p>
            La tabla de abajo es una referencia semanal para una pareja con una rutina normal — cocina en casa la mayoría de los días, come fuera de vez en cuando. Ajusta hacia arriba o hacia abajo según cuánto cocinen de verdad.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad semanal</th>
                <th>Dura hasta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arroz</td>
                <td>1 kg</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Frijoles o lentejas</td>
                <td>500 g</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Pasta</td>
                <td>500 g</td>
                <td>2 semanas</td>
              </tr>
              <tr>
                <td>Pollo</td>
                <td>800 g-1 kg</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Carne molida o de res</td>
                <td>500 g</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Huevos</td>
                <td>1 docena</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Leche</td>
                <td>2 litros</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Fruta variada</td>
                <td>1,5-2 kg</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Verduras</td>
                <td>1-1,5 kg</td>
                <td>1 semana</td>
              </tr>
              <tr>
                <td>Pan</td>
                <td>1 paquete o 300 g</td>
                <td>3-4 días</td>
              </tr>
              <tr>
                <td>Café</td>
                <td>250 g</td>
                <td>2-3 semanas</td>
              </tr>
              <tr>
                <td>Papel higiénico</td>
                <td>1 paquete (4-8 rollos)</td>
                <td>3-4 semanas</td>
              </tr>
            </tbody>
          </table>

          <p>
            Fíjate que el arroz y los frijoles son semanales, pero el papel higiénico y el café se estiran a varias semanas. Por eso la compra de una pareja no debería ser un solo evento mensual — separar lo perecedero de lo que no lo es ahorra dinero y evita tirar comida a la basura.
          </p>

          {/* LISTA PARA COPIAR */}
          <div className="blog-inline-cta">
            <p>Sabe lo que ya hay en casa. <em>Sabe lo que falta.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          <h2 id="lista-copiar">Lista de compras para 2 personas lista para copiar</h2>
          <p>
            Esta es la versión semanal, separada por categoría. Cópiala, pégala en el celular y tacha lo que ya tienes en casa antes de salir — lo que quede es lo que realmente vas a comprar.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista para 2 personas — semana</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Verdulería</h4>
                <ul>
                  <li>Cebolla, ajo, tomate</li>
                  <li>Papa</li>
                  <li>Zanahoria</li>
                  <li>Hojas verdes</li>
                  <li>Fruta variada</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Proteínas</h4>
                <ul>
                  <li>Pollo</li>
                  <li>Carne molida o de res</li>
                  <li>Huevos</li>
                  <li>Atún o sardina</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Lácteos</h4>
                <ul>
                  <li>Leche</li>
                  <li>Yogur natural</li>
                  <li>Queso</li>
                  <li>Mantequilla</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Despensa (mensual)</h4>
                <ul>
                  <li>Arroz 4 kg</li>
                  <li>Frijoles 2 kg</li>
                  <li>Pasta</li>
                  <li>Aceite</li>
                  <li>Café</li>
                  <li>Azúcar y sal</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Limpieza (mensual)</h4>
                <ul>
                  <li>Detergente</li>
                  <li>Jabón en polvo</li>
                  <li>Papel higiénico</li>
                  <li>Bolsas de basura</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Higiene (mensual)</h4>
                <ul>
                  <li>Jabón de baño</li>
                  <li>Pasta dental</li>
                  <li>Shampoo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEMANAL, QUINCENAL, MENSUAL */}
          <h2 id="semanal-mensual">Compra semanal, quincenal o mensual para 2 personas</h2>
          <p>
            La pregunta correcta no es "qué frecuencia es mejor" — es "qué frecuencia es mejor para qué producto". Meter todo en una sola compra mensual es el error más común de quien intenta ahorrar tiempo y termina desperdiciando comida.
          </p>
          <p>
            <strong>Despensa y limpieza:</strong> la compra mensual funciona bien. Arroz, frijoles, aceite, productos de limpieza e higiene no se echan a perder rápido — comprarlos de una vez ahorra viajes y suele salir más barato por kilo.
          </p>
          <p>
            <strong>Verdulería, carnes y lácteos:</strong> la compra semanal es lo que evita el desperdicio. Comprar verdulería para todo el mes de una sola vez garantiza que la mitad termine hecha sopa de refrigerador antes de la segunda semana. No es falta de disciplina — es biología. La lechuga no dura un mes, sin importar qué tan organizado seas.
          </p>
          <p>
            Para quien tiene una <a href="/es/funcionalidades/despensa">despensa organizada</a>, el esquema mixto funciona solo: ya sabes qué tienes en stock (despensa) y qué necesitas reponer cada semana (perecederos), sin tener que recalcular todo cada vez que entras al súper.
          </p>

          {/* ERRORES COMUNES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4443442/pexels-photo-4443442.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Frutas y verduras frescas organizadas dentro del refrigerador"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="errores-comunes" className="img-above">Errores que hacen que sobre o falte comida</h2>

          <p>
            <strong>Comprar según el tamaño del paquete, no según lo que vas a usar.</strong> La bandeja de pollo de 1,5 kg parece conveniente hasta que te das cuenta de que solo ibas a usar 800 g esa semana. Compara el precio por kilo antes de decidir — el paquete grande solo conviene si de verdad lo consumen antes de que se eche a perder.
          </p>
          <p>
            <strong>No separar lo que va al congelador.</strong> La carne comprada en mayor cantidad hay que porcionarla y congelarla apenas llega a casa, no guardarla entera para "decidir después". Dos personas con un paquete entero de 1 kg de carne molida en el congelador terminan descongelando todo para usar la mitad.
          </p>
          <p>
            <strong>Comprar de memoria, sin revisar la despensa.</strong> Es la versión de pareja del clásico "pensé que teníamos ajo". Dos adultos viviendo juntos significan dos memorias distintas de lo que hay en la alacena — y las dos suelen estar equivocadas.
          </p>
          <p>
            <strong>Ignorar lo que quedó de la última compra.</strong> Dos personas generan menos sobras que cuatro, pero igual generan. Antes de hacer una lista nueva, vale la pena 2 minutos revisando qué sigue estando bueno para usar esta semana.
          </p>

          {/* CUÁNTO CUESTA */}
          <h2 id="cuanto-cuesta">Cuánto cuesta la compra de una pareja al mes</h2>
          <p>
            Como referencia regional, la FAO calculó en su informe SOFI 2026 un costo de <strong>USD 4,91 por persona al día</strong> para llevar una dieta saludable en América Latina y el Caribe (con picos de hasta USD 6,04 en el Caribe). Para dos personas, eso equivale a unos <strong>USD 290-300 al mes</strong> solo en comida — sin contar limpieza ni higiene, que varían mucho más según el país.
          </p>
          <ul className="item-list">
            <li><strong>Verdulería y proteínas</strong> — la porción más grande del gasto</li>
            <li><strong>Lácteos y despensa</strong> — la segunda porción en tamaño</li>
            <li><strong>Limpieza e higiene</strong> — la más pequeña, pero constante mes a mes</li>
          </ul>
          <p>
            El número exacto en tu país puede ser muy distinto — revisa la canasta básica de tu región para una referencia más precisa. Lo que sí se mantiene igual en cualquier país: marca propia en arroz, frijoles y productos de limpieza suele costar bastante menos, con calidad equivalente para el uso diario.
          </p>

          {/* VISITA */}
          <h2 id="visita">Qué cambia cuando llega una visita</h2>
          <p>
            Una visita ocasional no pide una lista nueva desde cero. Pide un ajuste puntual: suma 1 porción de proteína y 1 de acompañamiento por persona extra en la comida en la que va a estar presente. El resto de la lista — despensa, limpieza, desayuno — ya tiene margen suficiente para una casa de 2 personas.
          </p>
          <p>
            El error común es duplicar toda la lista "por si acaso" y terminar con sobras toda la semana después de que la visita se va. Ajusta lo que cambia, deja el resto igual.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la lista de compras para 2 personas</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuánto cuesta la lista de compras para 2 personas al mes?</p>
              <p className="faq-a">
                Como referencia regional, la FAO calculó en 2026 un costo promedio de <strong>USD 4,91 por persona al día</strong> para una dieta saludable en América Latina. Para dos personas, eso equivale a unos <strong>USD 290-300 al mes</strong> solo en comida. El número real varía bastante según el país.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto arroz y frijoles necesitan 2 personas por semana?</p>
              <p className="faq-a">
                Cerca de 1 kg de arroz y 500 g de frijoles alcanzan para la semana de una pareja que come esa combinación seguido. Comiendo fuera con frecuencia, la misma cantidad puede estirarse a 10-12 días.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Conviene hacer la compra semanal o mensual para 2 personas?</p>
              <p className="faq-a">
                Lo ideal es mezclar: despensa y limpieza en una compra mensual, verdulería, carnes y lácteos en una compra semanal. Comprar todo de una vez al mes para 2 personas suele terminar en desperdicio de lo fresco.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Vale la pena comprar el paquete familiar para 2 personas?</p>
              <p className="faq-a">
                Solo para no perecederos que de verdad consumen — arroz, frijoles, papel higiénico, limpieza. Para carne, pan y lácteos, el paquete grande casi siempre termina la mitad en el congelador o la basura.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo evitar el desperdicio de comida comprando para 2 personas?</p>
              <p className="faq-a">
                Compra pensando en cuántas comidas vas a cocinar esa semana, no en el tamaño del paquete. Congela la carne en porciones apenas llegues a casa y revisa la despensa antes de salir.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué cambia en la lista cuando llega una visita?</p>
              <p className="faq-a">
                Suma 1 porción extra de proteína y acompañamiento por persona que va a comer con ustedes. No dupliques toda la lista — la despensa y el desayuno ya tienen margen suficiente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto dura la compra del súper para una pareja?</p>
              <p className="faq-a">
                Verdulería y pan duran de 3 a 7 días. La carne fresca, 2-3 días en el refrigerador (o meses en el congelador, ya porcionada). Despensa, limpieza e higiene duran semanas, a veces un mes entero.
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
            <p className="blog-cta-title">Cantidad correcta. Despensa al día. Cero sobras muriendo en el refrigerador.</p>
            <p className="blog-cta-desc">
              Con Mise armas la <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> sabiendo qué ya tienes en la{' '}
              <a href="/es/funcionalidades/despensa">despensa</a> — sin comprar doble ni olvidar lo básico.
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
