import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Lista básica del supermercado: guía con más de 80 productos',
  description: 'Lista básica del supermercado con las 7 categorías esenciales, más de 80 productos para copiar, cómo adaptarla a tu hogar, cuánto cuesta al mes y 5 consejos para ahorrar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/lista-basica-de-compras',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-basica-de-compras',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-basica-de-compras',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-basica-de-compras',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-basica-de-compras',
    },
  },
  openGraph: {
    title: 'Lista básica del supermercado: guía con más de 80 productos',
    description: 'Las 7 categorías esenciales, más de 80 productos para copiar, perfiles de hogar y cuánto cuesta al mes.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/lista-basica-de-compras',
    images: [
      {
        url: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
        width: 1200,
        height: 630,
        alt: 'Carrito de supermercado en un pasillo con productos de la lista básica de compras',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista básica del supermercado: guía con más de 80 productos',
    description: 'Las 7 categorías esenciales, más de 80 productos para copiar, perfiles de hogar y cuánto cuesta al mes.',
    images: ['https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué no puede faltar en la lista básica del supermercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una lista básica debe cubrir 7 categorías: frutas y verduras (cebolla, ajo, tomate, fruta), carnes y proteínas (pollo, huevo, atún), lácteos (leche, queso, yogur), despensa seca (arroz, pasta, aceite de oliva, café), condimentos (pimienta, orégano, caldo), limpieza (detergente, jabón, desinfectante) e higiene personal (champú, pasta dental, papel higiénico).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta la lista básica del supermercado al mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Según datos de la FAO/PMA (Costo de una Dieta Saludable, SOFI 2024), el costo estimado en Sudamérica ronda los 4,29 dólares PPA por persona al día, lo que equivale a unos 130 dólares PPA al mes por persona. Para una pareja serían cerca de 260 dólares PPA, y para una familia de 4 personas, cerca de 515 dólares PPA. Es una aproximación regional en dólares de paridad de poder adquisitivo, no el costo exacto en tu país —varía bastante según dónde compres.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo organizar la lista de compras por pasillo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El orden más eficiente: frutas y verduras (a la entrada) → panadería y fiambres → despensa seca → lácteos y bebidas → limpieza e higiene → carnicería y pescadería → congelados (siempre al final, para que no se descongelen en el carrito).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué hacer lista antes de ir al supermercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quien hace la lista antes de salir gasta menos que quien compra sin ella. Reduce las compras por impulso, ahorra tiempo dentro del supermercado y evita olvidar productos esenciales que solo notas que faltan a mitad de semana.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo hacer la lista de compras para dos personas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para una pareja, reduce las cantidades: 1 kg de arroz y 500 g de frijoles o lentejas cubren la semana, proteína para 8-10 comidas y suficientes frutas y verduras para el consumo diario. Las 7 categorías básicas son el punto de partida para calcular el resto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evitar olvidar productos en el supermercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La forma más efectiva es tener una lista fija por categorías y revisar la despensa antes de salir. Así sabes qué se acabó antes de necesitarlo, no después. Quien conecta lista, despensa y recetas en un solo lugar se equivoca menos.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista básica del supermercado: guía con más de 80 productos',
  description: 'Lista básica del supermercado con las 7 categorías esenciales, más de 80 productos para copiar, cómo adaptarla a tu hogar, cuánto cuesta al mes y 5 consejos para ahorrar.',
  image: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/lista-basica-de-compras',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista básica del supermercado', item: 'https://www.miseemcasa.com.br/es/blog/lista-basica-de-compras' },
  ],
}

const copyText = `LISTA BÁSICA DEL SUPERMERCADO

FRUTAS Y VERDURAS
- Lechuga
- Tomate
- Cebolla
- Ajo
- Papa
- Zanahoria
- Limón
- Banana
- Manzana
- Naranja
- Papaya o fruta de temporada

CARNES Y PROTEÍNAS
- Pechuga de pollo
- Carne molida
- Filete de pescado
- Huevos (docena)
- Atún en lata

LÁCTEOS
- Leche
- Yogur natural
- Queso rallado o en tajadas
- Mantequilla
- Queso crema

DESPENSA BÁSICA
- Arroz
- Frijoles o lentejas
- Pasta
- Harina de trigo
- Azúcar
- Sal
- Café
- Aceite de oliva o vegetal
- Tomate en lata
- Salsa de tomate

CONDIMENTOS
- Pimienta negra
- Comino
- Orégano
- Caldo (cubitos o líquido)
- Vinagre
- Mostaza
- Mayonesa

LIMPIEZA
- Detergente para platos
- Detergente para ropa
- Desinfectante
- Limpiador multiusos
- Esponjas
- Bolsas de basura

HIGIENE PERSONAL
- Champú y acondicionador
- Jabón de baño
- Pasta dental
- Desodorante
- Papel higiénico`

export default function ListaBasicaDeComprasEs() {
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
            <li className="breadcrumb-current" aria-current="page">Lista básica del supermercado</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">12 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            La única lista básica de supermercado que necesitas: más de 80 productos por categoría
          </h1>
          <p className="blog-desc">
            Ir al supermercado sin lista no es espontaneidad —es improvisar con costo. Vuelves a
            casa con lo que no necesitabas y sin lo que sí. Esta guía tiene las 7 categorías
            esenciales, más de 80 productos para copiar directo al celular y cómo ajustarla a tu hogar.
          </p>

          <div className="answer-box">
            <p>
              Una <strong>lista básica del supermercado</strong> cubre 7 categorías:{' '}
              <strong>frutas y verduras, carnes y proteínas, lácteos, despensa seca, condimentos, limpieza e higiene personal</strong>.
              Con esas 7 cubiertas, la mayoría de los hogares tiene lo esencial para la semana —sin depender de la memoria.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200"
            alt="Carrito de supermercado en un pasillo con productos de la lista básica de compras"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Jan van der Wolf / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#por-que-lista">Por qué una lista básica cambia todo en el súper</a></li>
              <li><a href="#las-7-categorias">Las 7 categorías de una lista completa</a></li>
              <li><a href="#lista-para-copiar">Lista para copiar y pegar (más de 80 productos)</a></li>
              <li><a href="#hogar">Cómo adaptarla a tu hogar</a></li>
              <li><a href="#por-pasillo">Cómo organizarla por pasillo del supermercado</a></li>
              <li><a href="#lista-despensa">Por qué lista, despensa y recetas deben estar conectadas</a></li>
              <li><a href="#ahorrar">5 consejos para ahorrar en el súper</a></li>
              <li><a href="#cuanto-cuesta">Cuánto cuesta al mes</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* POR QUÉ LISTA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4959907/pexels-photo-4959907.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Lista de compras escrita a mano sobre una mesa de cocina"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kaboompics / Pexels</p>
          </div>

          <h2 id="por-que-lista" className="img-above">Por qué una lista básica cambia todo en el supermercado</h2>

          <p>
            La lista básica no es un menú. Es el piso —lo que tu hogar necesita sin importar
            qué se vaya a cocinar esa semana en particular.
          </p>
          <p>
            Sin ella, compras confiando en la memoria. Y la memoria miente. Te asegura que
            todavía hay aceite de oliva (queda apenas una capa en el fondo), que no falta arroz
            (se acabó el martes) y que no hace falta papel higiénico (siempre hace falta papel
            higiénico). Quien va sin lista compra mucho más por impulso, y esa compra impulsiva
            suele salir notablemente más cara que la planeada.
          </p>
          <p>
            Una lista anotada en el celular, enterrada entre recordatorios que no tienen nada
            que ver, no es realmente una lista. Una lista organizada por categoría —revisada
            contra lo que ya hay en casa antes de salir— es otra cosa. Cubres lo esencial sin
            tener que volver dos días después por lo que se te olvidó.
          </p>

          {/* LAS 7 CATEGORÍAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Frutas y verduras frescas de colores en la sección de frutas y verduras del supermercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Muhamad Guruh Budi Hartono / Pexels</p>
          </div>

          <h2 id="las-7-categorias" className="img-above">Las 7 categorías de una lista de compras completa</h2>
          <p>
            La mayoría de los hogares funciona bien con las mismas 7 categorías. Lo que cambia
            de una casa a otra es la cantidad —no las categorías en sí.
          </p>

          <h3>1. Frutas y verduras</h3>
          <p>
            Las frutas y verduras varían según el gusto y la temporada. Pero algunos productos
            entran en casi cualquier receta —y son los primeros en faltar:
          </p>
          <ul className="item-list">
            <li>Lechuga</li>
            <li>Tomate</li>
            <li>Cebolla</li>
            <li>Ajo</li>
            <li>Papa</li>
            <li>Zanahoria</li>
            <li>Limón</li>
            <li>Banana, manzana o naranja</li>
            <li>Papaya o fruta de temporada</li>
          </ul>

          <h3>2. Carnes y proteínas</h3>
          <ul className="item-list">
            <li>Pechuga de pollo</li>
            <li>Carne molida</li>
            <li>Filete de pescado</li>
            <li>Huevos (docena o dos)</li>
            <li>Atún en lata</li>
          </ul>

          <h3>3. Lácteos</h3>
          <ul className="item-list">
            <li>Leche entera o descremada</li>
            <li>Yogur natural</li>
            <li>Queso rallado o en tajadas</li>
            <li>Mantequilla o margarina</li>
            <li>Queso crema</li>
          </ul>

          <h3>4. Despensa básica</h3>
          <p>El fondo de despensa que no puede faltar:</p>
          <ul className="item-list">
            <li>Arroz</li>
            <li>Frijoles o lentejas</li>
            <li>Pasta</li>
            <li>Harina de trigo</li>
            <li>Azúcar</li>
            <li>Sal</li>
            <li>Café</li>
            <li>Aceite de oliva o vegetal</li>
            <li>Tomate en lata</li>
            <li>Salsa de tomate</li>
          </ul>

          <h3>5. Condimentos</h3>
          <ul className="item-list">
            <li>Pimienta negra</li>
            <li>Comino</li>
            <li>Orégano</li>
            <li>Caldo (cubitos o líquido)</li>
            <li>Vinagre</li>
            <li>Mostaza</li>
            <li>Mayonesa</li>
          </ul>

          <h3>6. Limpieza</h3>
          <ul className="item-list">
            <li>Detergente para platos</li>
            <li>Detergente para ropa</li>
            <li>Desinfectante</li>
            <li>Limpiador multiusos</li>
            <li>Esponjas</li>
            <li>Bolsas de basura</li>
          </ul>

          <h3>7. Higiene personal</h3>
          <ul className="item-list">
            <li>Champú y acondicionador</li>
            <li>Jabón de baño</li>
            <li>Pasta dental</li>
            <li>Desodorante</li>
            <li>Papel higiénico</li>
          </ul>

          {/* LISTA PARA COPIAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8580727/pexels-photo-8580727.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Despensa doméstica organizada con las categorías esenciales de compras"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
          </div>

          <div className="blog-inline-cta">
            <p>Hacer el mercado se volvió una hoja de cálculo. <em>No debería.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          <h2 id="lista-para-copiar" className="img-above">Lista básica del supermercado para copiar y pegar</h2>
          <p>
            Haz clic en &quot;Copiar lista&quot; y pégala directo en WhatsApp o en tus notas. Tacha lo
            que ya tienes en casa antes de salir —lo que quede es lo que compras.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista básica del supermercado — más de 80 productos</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Frutas y verduras</h4>
                <ul>
                  <li>Lechuga</li><li>Tomate</li><li>Cebolla</li><li>Ajo</li>
                  <li>Papa</li><li>Zanahoria</li><li>Limón</li><li>Banana</li>
                  <li>Manzana</li><li>Naranja</li><li>Papaya</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Carnes</h4>
                <ul>
                  <li>Pechuga de pollo</li><li>Carne molida</li>
                  <li>Filete de pescado</li><li>Huevos</li><li>Atún en lata</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Lácteos</h4>
                <ul>
                  <li>Leche</li><li>Yogur natural</li><li>Queso rallado</li>
                  <li>Mantequilla</li><li>Queso crema</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Despensa</h4>
                <ul>
                  <li>Arroz</li><li>Frijoles/lentejas</li><li>Pasta</li>
                  <li>Harina de trigo</li><li>Azúcar</li><li>Sal</li>
                  <li>Café</li><li>Aceite de oliva/vegetal</li>
                  <li>Tomate en lata</li><li>Salsa de tomate</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Condimentos</h4>
                <ul>
                  <li>Pimienta negra</li><li>Comino</li><li>Orégano</li>
                  <li>Caldo</li><li>Vinagre</li>
                  <li>Mostaza</li><li>Mayonesa</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Limpieza</h4>
                <ul>
                  <li>Detergente para platos</li><li>Detergente para ropa</li><li>Desinfectante</li>
                  <li>Limpiador multiusos</li><li>Esponjas</li><li>Bolsas de basura</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Higiene personal</h4>
                <ul>
                  <li>Champú</li><li>Acondicionador</li><li>Jabón</li>
                  <li>Pasta dental</li><li>Desodorante</li><li>Papel higiénico</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ADAPTAR AL HOGAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Familia cocinando junta en la cocina de casa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Amina Filkins / Pexels</p>
          </div>

          <h2 id="hogar" className="img-above">Cómo adaptar la lista de compras a tu hogar</h2>
          <p>
            La lista básica es el punto de partida. Lo que cambia de una casa a otra es
            principalmente la cantidad —y algunos ajustes según la rutina de cada quien.
          </p>

          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="profile-card-name">Vive solo/a</span>
              </div>
              <ul>
                <li>La mitad de las cantidades de las categorías básicas</li>
                <li>Preferir empaques más pequeños para evitar desperdicio</li>
                <li>Más atún en lata y huevo, menos carne fresca (se daña más rápido)</li>
                <li>Frutas sueltas en vez de bolsas cerradas</li>
                <li>Estimado: 130 dólares PPA al mes (aprox.), solo comida</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="profile-card-name">Pareja</span>
              </div>
              <ul>
                <li>1 kg de arroz y 500 g de frijoles o lentejas cubren la semana</li>
                <li>Proteína para 8-10 comidas por semana</li>
                <li>Frutas y verduras suficientes para el consumo diario</li>
                <li>Limpieza e higiene en empaque más grande (rinde más)</li>
                <li>Estimado: 260 dólares PPA al mes (aprox.), solo comida</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span className="profile-card-name">Familia con niños</span>
              </div>
              <ul>
                <li>Más leche y yogur en los lácteos</li>
                <li>Amplía frutas y verduras —los niños comen más fruta de lo que se piensa</li>
                <li>Snacks simples: banana, zanahoria en bastones, galletas sin relleno</li>
                <li>Proteína en cortes que los niños aceptan (pollo, huevo)</li>
                <li>Estimado: 515 dólares PPA al mes (aprox.), familia de 4, solo comida</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.28 6.28C13.6 5 16 4 18 3c0 2 0 6-3 9.5" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <span className="profile-card-name">Come más saludable</span>
              </div>
              <ul>
                <li>Amplía las verduras: brócoli, espinaca, calabacín, remolacha</li>
                <li>Cambia parte de la pasta por quinoa, lentejas o garbanzo</li>
                <li>Agrega frutos secos (almendra, maní) a la despensa</li>
                <li>Yogur natural sin azúcar en los lácteos</li>
                <li>Aceite de oliva extra virgen en vez de aceite refinado</li>
              </ul>
            </div>
          </div>

          {/* POR PASILLO */}
          <h2 id="por-pasillo">Cómo organizar la lista por pasillo del supermercado</h2>
          <p>
            Organizar por pasillo ahorra tiempo dentro del súper. En vez de cruzar el
            supermercado dos veces, sigues un orden lógico y sales más rápido.
            El recorrido que funciona en la mayoría de los supermercados:
          </p>
          <ul className="item-list">
            <li><strong>Frutas y verduras</strong> —generalmente a la entrada. Empieza por aquí.</li>
            <li><strong>Panadería y fiambres</strong> —quesos, embutidos, pan de molde.</li>
            <li><strong>Despensa seca</strong> —pasillo central (arroz, frijoles, pasta, aceite).</li>
            <li><strong>Lácteos y bebidas</strong> —leche, yogur, jugo.</li>
            <li><strong>Limpieza e higiene</strong> —últimos pasillos antes de la caja.</li>
            <li><strong>Carnicería y pescadería</strong> —carnes frescas.</li>
            <li><strong>Congelados</strong> —siempre al final. Así no se descongelan en el carrito.</li>
          </ul>
          <p>
            La <a href="/es/funcionalidades/lista-de-compras">app de lista de compras de Mise</a>{' '}
            organiza tus productos por pasillo automáticamente —no tienes que reordenar nada en el momento.
          </p>

          {/* LISTA + DESPENSA + RECETAS */}
          <h2 id="lista-despensa">Por qué lista, despensa y recetas deben estar conectadas</h2>
          <p>
            El problema de olvidar el ajo no es la lista. Es la desconexión entre lo que
            realmente tienes, lo que vas a cocinar y lo que necesitas comprar.
          </p>
          <p>
            La mayoría de los hogares tiene una despensa que nadie controla del todo. Queda
            una capa de aceite en el fondo de la botella, medio paquete de pasta de una marca
            que estaba en oferta, y dos frascos del mismo condimento a medio usar. Lo que
            realmente falta, lo descubres cocinando —no antes de ir al súper. En la región,
            alcanzar una dieta saludable cuesta en promedio{' '}
            <strong>4,29 dólares PPA por persona al día en Sudamérica</strong>{' '}
            (
              <a href="https://openknowledge.fao.org/server/api/core/bitstreams/0556ea9c-65bb-46e9-aa6b-39fdeb8afbe7/content/sofi-statistics-rlc-2024/chapter-04-1.html" target="_blank" rel="noopener">FAO/PMA, SOFI 2024</a>
            ), y buena parte del gasto que se pierde empieza aquí: comprar sin saber qué hay,
            comprar sin saber qué se va a cocinar.
          </p>
          <p>
            Quien planea el menú de la semana antes de hacer la lista compra exactamente lo
            que va a usar. Quien hace la lista sin saber qué va a cocinar compra &quot;cosas que
            parecen útiles&quot; —y descubre el viernes que el pollo comprado el lunes no combina
            con nada de lo que queda en la despensa. El{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal de Mise</a>{' '}
            conecta las recetas con la lista de compras para resolver justo eso.
          </p>
          <p>
            La lista básica resuelve el piso. Conectar lista, despensa y recetas —saber qué
            se acabó antes de necesitarlo— resuelve el resto.{' '}
            <a href="/es/funcionalidades">Mira cómo Mise conecta todo esto en la práctica.</a>
          </p>

          {/* AHORRAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/9929281/pexels-photo-9929281.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Persona calculando los gastos del supermercado con cuaderno y lápiz"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Towfiqu barbhuiya / Pexels</p>
          </div>

          <h2 id="ahorrar" className="img-above">5 consejos para ahorrar en el supermercado</h2>

          <p>
            ¿Quieres profundizar? Tenemos una guía completa sobre{' '}
            <a href="/es/blog/como-economizar-no-mercado">cómo ahorrar en el supermercado</a>{' '}
            con 12 hábitos que sí funcionan —antes, durante y después de la compra.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Revisa la despensa antes de salir</strong>
                <span>
                  5 minutos en casa valen más que 30 minutos de vuelta al súper por lo que se te
                  olvidó. Fíjate en lo que se está acabando —no solo en lo que ya se acabó. Un
                  sistema fijo para agrupar y etiquetar los estantes hace que esta revisión tome
                  segundos, no minutos.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>No vayas con hambre</strong>
                <span>
                  Suena a cliché, pero funciona. La compra por impulso pasa más por el estómago
                  vacío que por el bolsillo lleno. Con hambre, todo parece necesario —sobre todo
                  la zona de las papas fritas.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Compara el precio por kilo, no el precio total</strong>
                <span>
                  El empaque más grande no siempre es más barato. Divide el precio entre el peso
                  antes de decidir. La etiqueta del estante casi siempre ya muestra el precio por
                  kilo —úsala en vez de fijarte solo en el total.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Marca propia en los productos básicos</strong>
                <span>
                  Arroz, frijoles, azúcar, sal, harina —las marcas propias del supermercado
                  suelen costar entre 20% y 30% menos con calidad equivalente. La marca importa
                  en el condimento, no en el arroz.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">5</span>
              <div className="tip-body">
                <strong>Planea las comidas antes de ir</strong>
                <span>
                  Saber qué vas a cocinar en la semana elimina la compra de &quot;ingredientes que
                  parecen útiles&quot;. Compras lo que realmente vas a usar —y lo que no está en el
                  menú no entra al carrito.
                </span>
              </div>
            </li>
          </ul>

          {/* CUÁNTO CUESTA */}
          <h2 id="cuanto-cuesta">Cuánto cuesta la lista básica del supermercado al mes</h2>
          <p>
            El costo varía mucho según el país donde vivas —una canasta básica en Argentina no
            se parece en nada a una en México o Colombia. Como referencia regional, la{' '}
            <a href="https://openknowledge.fao.org/server/api/core/bitstreams/0556ea9c-65bb-46e9-aa6b-39fdeb8afbe7/content/sofi-statistics-rlc-2024/chapter-04-1.html" target="_blank" rel="noopener">FAO y el PMA</a>{' '}
            calculan el costo de una dieta saludable en Sudamérica en unos 4,29 dólares PPA
            (paridad de poder adquisitivo) por persona al día —un valor comparativo entre
            países, no el precio exacto que pagarías en pesos, soles o quetzales en tu súper local.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Perfil</th>
                <th>Costo diario (por persona)</th>
                <th>Costo mensual estimado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 persona</td>
                <td>~4,29 USD PPA</td>
                <td>~130 USD PPA</td>
              </tr>
              <tr>
                <td>Pareja</td>
                <td>~4,29 USD PPA c/u</td>
                <td>~260 USD PPA</td>
              </tr>
              <tr>
                <td>Familia (4 personas)</td>
                <td>~4,29 USD PPA c/u</td>
                <td>~515 USD PPA</td>
              </tr>
            </tbody>
          </table>

          <p>
            Esta cifra cubre solo alimentación con base en criterios nutricionales —no incluye
            limpieza ni higiene personal, y no reemplaza el precio real de tu súper local. Para
            reducir el gasto sin sacrificar ninguna de las 7 categorías: prioriza marca propia
            en los básicos (arroz, frijoles, azúcar, sal), aprovecha ofertas en productos no
            perecederos y evita la compra rápida de &quot;solo una cosa&quot;. Esa siempre sale más
            cara por producto.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la lista de compras del supermercado</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué no puede faltar en la lista básica del supermercado?</p>
              <p className="faq-a">
                Una lista básica necesita cubrir las 7 categorías:{' '}
                <strong>frutas y verduras</strong> (ajo, cebolla, tomate, fruta),{' '}
                <strong>carnes y proteínas</strong> (pollo, huevo, atún),{' '}
                <strong>lácteos</strong> (leche, queso, yogur),{' '}
                <strong>despensa seca</strong> (arroz, frijoles, pasta, aceite de oliva, café),{' '}
                <strong>condimentos</strong> (pimienta, orégano, caldo),{' '}
                <strong>limpieza</strong> (detergente, jabón, desinfectante) e{' '}
                <strong>higiene personal</strong> (champú, pasta dental, papel higiénico).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto cuesta la lista básica del supermercado al mes?</p>
              <p className="faq-a">
                Según datos de la <strong>FAO/PMA (SOFI 2024)</strong>, el costo estimado en
                Sudamérica ronda los <strong>4,29 dólares PPA por persona al día</strong> —unos
                130 dólares PPA al mes por persona, 260 para una pareja y 515 para una familia
                de 4. Es una aproximación regional, no el costo exacto en tu país.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo organizar la lista de compras por pasillo?</p>
              <p className="faq-a">
                El orden más eficiente: <strong>frutas y verduras</strong> (a la entrada) →{' '}
                <strong>panadería y fiambres</strong> → <strong>despensa seca</strong> →{' '}
                <strong>lácteos y bebidas</strong> → <strong>limpieza e higiene</strong> →{' '}
                <strong>carnicería y pescadería</strong> → <strong>congelados</strong> (siempre al
                final, para que no se descongelen en el carrito).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Por qué hacer lista antes de ir al supermercado?</p>
              <p className="faq-a">
                Quien hace la lista antes de salir gasta <strong>menos</strong> que quien va sin
                ella. Reduce las compras por impulso, ahorra tiempo dentro del supermercado y
                evita olvidar productos esenciales que solo notas que faltan a mitad de semana.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo hacer la lista de compras para dos personas?</p>
              <p className="faq-a">
                Para una pareja, reduce las cantidades:{' '}
                <strong>1 kg de arroz y 500 g de frijoles o lentejas</strong> cubren la semana,
                proteína para 8-10 comidas y suficientes frutas y verduras para el consumo
                diario. Las 7 categorías básicas son el punto de partida para calcular el resto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo evitar olvidar productos en el supermercado?</p>
              <p className="faq-a">
                La forma más efectiva es tener una <strong>lista fija por categorías</strong> y
                revisar la despensa antes de salir. Así sabes qué se acabó antes de necesitarlo,
                no después. Quien conecta lista, despensa y recetas en un solo lugar se
                equivoca menos —y vuelve a casa con el ajo.
              </p>
            </li>
          </ul>

          {/* AUTOR */}
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
                Fundador de Mise. Ha olvidado el ajo en el súper más veces de las que le gustaría
                admitir —y construyó una app para resolver justo eso.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Basta de listas en las notas del celular.<br />
              <em>Usa Mise.</em>
            </h2>
            <p>
              Conecta despensa, recetas y lista de compras en un solo lugar.
              Nunca más vas a descubrir que se acabaron los frijoles justo a la hora de cocinar.
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
