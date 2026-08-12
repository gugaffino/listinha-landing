import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Lista de compras para casa nueva: 60+ cosas que sí necesitas',
  description: 'Lista de compras para casa nueva con 60+ artículos por habitación, qué comprar el primer día, lo que la gente siempre olvida y cuánto cuesta según cada perfil.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casa-nova',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casa-nova',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casa-nova',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casa-nova',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casa-nova',
    },
  },
  openGraph: {
    title: 'Lista de compras para casa nueva: 60+ cosas que sí necesitas',
    description: '60+ artículos por habitación, qué comprar primero, cuánto vas a gastar y una lista lista para copiar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casa-nova',
    images: [
      {
        url: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mujer cargando una caja de mudanza al entrar a un apartamento nuevo y luminoso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras para casa nueva: 60+ cosas que sí necesitas',
    description: '60+ artículos por habitación, qué comprar primero, cuánto vas a gastar y una lista lista para copiar.',
    images: ['https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué comprar primero para la casa nueva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empieza por el kit de sobrevivencia: ropa de cama (sábana, funda, almohada), toallas, papel higiénico, jabón, pasta de dientes, una olla, un sartén, platos y cubiertos básicos, lavatrastos y bolsas de basura. Son los artículos que vas a necesitar la primera noche, antes de cualquier mueble o decoración.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué no puede faltar en la lista de compras para casa nueva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La lista cubre cuatro áreas: cocina (utensilios, electrodomésticos y despensa inicial), dormitorio y baño (ropa de cama, toallas e higiene personal), limpieza y lavandería (productos y equipo) y artículos generales (bombillas, extensiones, cortinas). Papel higiénico, abrelatas y cortina de baño son los tres artículos que más se olvidan en el apuro de la mudanza.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta armar una casa nueva desde cero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La primera compra —utensilios, ropa de cama, productos de limpieza y despensa— ronda los 300 a 500 dólares para una persona sola, 500 a 900 dólares para una pareja y 800 a 1.400 dólares para una familia con hijos. Estos montos no incluyen muebles ni electrodomésticos grandes como refrigerador, estufa o lavadora.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo organizar las compras para casa nueva por etapas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Divídelo en tres etapas: Día 1 (antes de dormir ahí) —artículos de sobrevivencia: cama, baño, higiene básica, cocina mínima y limpieza esencial. Semana 1 —completar la cocina, ropa de cama extra, bombillas correctas y extensiones eléctricas. Mes 1 —los electrodomésticos que falten y complementos de dormitorio y baño. La decoración y los artículos de confort quedan para después de que se asiente el polvo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo no olvidar nada en la lista de compras de la mudanza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organiza la lista por habitación, no por tipo de producto. Recorre mentalmente cada espacio de la casa y anota lo que vas a necesitar en cada uno. Usa una app de lista compartida si más de una persona va a comprar, para no duplicar artículos ni olvidar categorías completas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué puede esperar para después al armar la casa nueva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Decoración, cuadros, tapetes decorativos, utensilios de cocina especializados (exprimidor, freidora de aire, batidora), artículos de confort extra y cualquier cosa que no vayas a usar en la primera semana. Comprar todo de una vez lleva a gastos por impulso —te das cuenta de lo que realmente necesitas después de vivir unos días en la casa.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras para casa nueva: 60+ cosas que sí necesitas',
  description: 'Lista de compras para casa nueva con 60+ artículos por habitación, qué comprar el primer día, cuánto cuesta según cada perfil y una lista lista para copiar.',
  image: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casa-nova',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras para casa nueva', item: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casa-nova' },
  ],
}

const copyText = `LISTA DE COMPRAS PARA CASA NUEVA

PRIMER DÍA — KIT DE SOBREVIVENCIA
- Almohada (1 por persona)
- Sábana y funda
- Toalla de baño
- Papel higiénico
- Jabón, pasta de dientes y cepillo
- Olla grande + sartén
- Platos, vasos y cubiertos básicos
- Lavatrastos + esponja + bolsas de basura

COCINA — UTENSILIOS
- Olla grande
- Olla mediana
- Sartén
- Hervidor
- Tabla para cortar
- Cuchillo de chef
- Cucharón y espátula
- Colador
- Platos (6)
- Tazones (6)
- Vasos (6)
- Cubiertos (6 juegos)
- Abrelatas y destapador

COCINA — ELECTRODOMÉSTICOS
- Licuadora
- Cafetera
- Microondas

DESPENSA INICIAL
- Aceite de oliva o aceite de cocina
- Sal y pimienta
- Ajo y cebolla
- Arroz y frijoles/porotos
- Pasta y salsa de tomate
- Café y azúcar
- Leche y huevos

DORMITORIO
- Juegos de sábanas (2 por cama)
- Almohadas (2 por persona)
- Cobija o edredón
- Ganchos de ropa (mínimo 20)

BAÑO
- Toalla de baño (2 por persona)
- Toalla de manos (2 por persona)
- Tapete de baño
- Cortina de baño con forro y ganchos
- Champú y acondicionador
- Jabón
- Pasta de dientes y cepillo
- Desodorante
- Papel higiénico (varios rollos)

LIMPIEZA Y LAVANDERÍA
- Escoba + recogedor
- Trapeador y balde
- Detergente para ropa
- Desinfectante
- Lavatrastos
- Esponjas
- Bolsas de basura (varios tamaños)
- Cesto de ropa sucia
- Insecticida

GENERAL
- Bombillas o focos extra
- Extensión eléctrica
- Cortinas o blackout (dormitorio primero)
- Linterna y pilas`

export default function ListaDeComprasParaCasaNuevaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Lista de compras para casa nueva</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">12 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista de compras para casa nueva: lo que sí necesitas, habitación por habitación
          </h1>
          <p className="blog-desc">
            Llegar a la casa nueva y darte cuenta de que no hay papel higiénico. Le pasa a cualquiera que compra sin lista.
            Esta guía tiene 60+ artículos organizados por habitación, qué comprar el primer día y una lista lista para copiar.
          </p>

          <div className="answer-box">
            <p>
              La <strong>lista de compras para casa nueva</strong> cubre cuatro áreas:{' '}
              <strong>cocina</strong> (utensilios, electrodomésticos y despensa inicial),{' '}
              <strong>dormitorio y baño</strong> (ropa de cama, toallas e higiene),{' '}
              <strong>limpieza y lavandería</strong> (productos y equipo) y{' '}
              <strong>artículos generales</strong> (bombillas, extensiones, cortinas).
              Empieza por el kit de sobrevivencia —lo que necesitas la primera noche— y compra el resto por etapas.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mujer cargando una caja de mudanza al entrar a un apartamento nuevo y luminoso"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Kampus Production / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#primer-dia">Qué comprar el primer día</a></li>
              <li><a href="#cocina">Por habitación: cocina</a></li>
              <li><a href="#dormitorio-bano">Por habitación: dormitorio y baño</a></li>
              <li><a href="#sala">Por habitación: sala</a></li>
              <li><a href="#limpieza">Limpieza y lavandería</a></li>
              <li><a href="#lista-copiar">Lista completa para copiar y pegar</a></li>
              <li><a href="#etapas">Qué puede esperar: compras por etapas</a></li>
              <li><a href="#cuanto-cuesta">Cuánto vas a gastar</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* PRIMER DÍA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/30811284/pexels-photo-30811284.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mercado con frutas y verduras de colores, representando las primeras compras para la casa nueva"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: TBD Traveller / Pexels</p>
          </div>

          <h2 id="primer-dia" className="img-above">Qué comprar el primer día (prioridad máxima)</h2>

          <p>
            Antes de pensar en decoración, existe el nivel cero: lo que necesitas para sobrevivir la primera noche.
            Sin esos artículos, nada más funciona.
          </p>
          <p>
            La mayoría de las personas olvida al menos un artículo esencial en el apuro de la mudanza. El más común es el papel higiénico.
            El segundo: nadie se acuerda de la cortina de baño hasta que está parado en la ducha con una toalla en la mano.
          </p>

          <h3>Kit de sobrevivencia</h3>
          <ul className="item-list">
            <li><strong>Ropa de cama:</strong> sábana, funda y por lo menos una almohada por persona</li>
            <li><strong>Toalla de baño</strong> —una por persona</li>
            <li><strong>Higiene mínima:</strong> papel higiénico, jabón, pasta de dientes y cepillo</li>
            <li><strong>Cocina de sobrevivencia:</strong> una olla grande, un sartén, platos, vasos y cubiertos</li>
            <li><strong>Despensa inicial:</strong> huevos, café, pan —lo suficiente para no depender de pedir comida desde el primer día</li>
            <li><strong>Limpieza básica:</strong> lavatrastos, esponja y bolsas de basura</li>
          </ul>
          <p>
            Todo lo que no está en esta lista puede esperar. El sofá puede esperar. El repisero decorativo puede esperar.
            El papel higiénico, no.
          </p>

          {/* COCINA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/11295908/pexels-photo-11295908.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cocina moderna y ordenada con estufa y encimera, representando la cocina de la casa nueva"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vidal Balielo Jr. / Pexels</p>
          </div>

          <h2 id="cocina" className="img-above">Por habitación: cocina</h2>

          <p>
            La cocina es la habitación que más artículos exige —y la más fácil de subestimar.
            Te acuerdas de la olla. Se te olvida el abrelatas. Te acuerdas del café. No te acuerdas de las tazas.
          </p>

          <h3>Utensilios</h3>
          <ul className="item-list">
            <li>Olla grande + olla mediana</li>
            <li>Sartén</li>
            <li>Hervidor</li>
            <li>Tabla para cortar</li>
            <li>Cuchillo de chef + cuchillos pequeños</li>
            <li>Cucharón, espátula y cuchara de madera</li>
            <li>Colador</li>
            <li>Platos (6), tazones (6), vasos (6)</li>
            <li>Cubiertos —6 juegos completos</li>
            <li>Abrelatas y destapador de botellas</li>
          </ul>

          <h3>Electrodomésticos básicos</h3>
          <ul className="item-list">
            <li>Licuadora</li>
            <li>Cafetera</li>
            <li>Microondas (si no viene incluido)</li>
          </ul>

          <h3>Despensa inicial</h3>
          <p>
            No es la compra del mes completo —es lo mínimo para tener qué comer mientras todavía estás desempacando cajas.
            Cuando la cocina ya esté funcionando, ahí sí armas la despensa completa.
          </p>
          <ul className="item-list">
            <li>Aceite de oliva o de cocina, sal y pimienta</li>
            <li>Ajo y cebolla</li>
            <li>Arroz, frijoles (o porotos) y pasta</li>
            <li>Salsa de tomate</li>
            <li>Café, azúcar, leche y huevos</li>
          </ul>

          {/* DORMITORIO Y BAÑO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/32173692/pexels-photo-32173692.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Dormitorio acogedor con cama tendida y decoración ligera, representando el dormitorio de la casa nueva"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: paulo remorini / Pexels</p>
          </div>

          <h2 id="dormitorio-bano" className="img-above">Por habitación: dormitorio y baño</h2>

          <p>
            Tener dos juegos de sábanas por cama hace la diferencia. Cuando uno está en la lavandería, el otro ya está puesto.
            Es el tipo de cosa que parece obvia y que todo el mundo olvida comprar por duplicado.
          </p>

          <h3>Dormitorio</h3>
          <ul className="item-list">
            <li>Juegos de sábanas —2 por cama (uno en uso, uno de repuesto)</li>
            <li>Almohadas —2 por persona</li>
            <li>Cobija o edredón</li>
            <li>Ganchos de ropa —empieza con 20, vas a necesitar más</li>
          </ul>

          <h3>Baño</h3>
          <ul className="item-list">
            <li>Toalla de baño —2 por persona</li>
            <li>Toalla de manos —2 por persona</li>
            <li>Tapete de baño</li>
            <li>Champú, acondicionador, jabón, pasta de dientes, desodorante</li>
            <li>Papel higiénico —compra varios rollos. Lo vas a usar.</li>
          </ul>

          <p>
            Un detalle que casi nadie recuerda: la cortina de baño con su forro y ganchos.
            Suena innecesario. Deja de sonarlo cuando estás parado en la ducha el primer día sin saber cómo bañarte sin mojar todo el piso.
          </p>

          {/* SALA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/32922272/pexels-photo-32922272.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mujer organizando una sala minimalista con cojines y decoración neutra"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Letícia Alvares / Pexels</p>
          </div>

          <h2 id="sala" className="img-above">Por habitación: sala</h2>

          <p>
            La sala es donde más se gasta por impulso y donde menos se necesita al principio.
            El sofá puede esperar una semana. Lo que no puede esperar:
          </p>
          <ul className="item-list">
            <li><strong>Extensión eléctrica</strong> —la casa nueva casi nunca tiene suficientes tomacorrientes donde los necesitas</li>
            <li><strong>Bombillas o focos</strong> —revisa el voltaje y el tipo de rosca antes de comprar. Cada casa es diferente.</li>
            <li><strong>Cortinas o blackout</strong> —por lo menos en el dormitorio. La primera mañana con el sol directo en la cara a las 6 a.m. resuelve cualquier duda sobre la prioridad.</li>
          </ul>

          <p>
            Sala, decoración, cuadros y artículos de confort: eso no es la segunda semana. Espera hasta que sepas dónde vas a poner cada cosa.
          </p>

          {/* LIMPIEZA */}
          <h2 id="limpieza">Limpieza y lavandería</h2>

          <p>
            No es glamoroso, pero es lo que mantiene la casa funcionando en los primeros días.
            Una casa recién desocupada acumula polvo —y si estuvo cerrada un tiempo, tal vez algo más que polvo.
          </p>
          <ul className="item-list">
            <li>Escoba y recogedor</li>
            <li>Trapeador y balde</li>
            <li>Detergente para ropa</li>
            <li>Desinfectante</li>
            <li>Lavatrastos</li>
            <li>Esponjas</li>
            <li>Bolsas de basura —compra varios tamaños</li>
            <li>Cesto de ropa sucia —fácil de olvidar hasta que la ropa empieza a acumularse en el piso</li>
            <li>Insecticida —sobre todo si la casa estuvo cerrada un tiempo</li>
          </ul>

          <p>
            Comprar sin una lista es una de las formas más rápidas de que el gasto de la mudanza se salga de control
            —terminas comprando cosas repetidas o haciendo tres viajes extra por lo que se te olvidó.
            Tener los productos correctos desde el primer día crea el hábito antes de que el caos de desempacar tome el control.
          </p>

          {/* LISTA COPIAR */}
          <h2 id="lista-copiar">Lista completa para copiar y pegar</h2>
          <p>
            Haz clic en &quot;Copiar lista&quot;, pégala en WhatsApp o en tus notas y tacha lo que ya tienes.
            Lo que quede es lo que vas a comprar.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista de compras — casa nueva (60+ artículos)</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Sobrevivencia</h4>
                <ul>
                  <li>Sábana y funda</li><li>Almohada</li><li>Toalla de baño</li>
                  <li>Papel higiénico</li><li>Jabón + pasta</li><li>Olla + sartén</li>
                  <li>Platos + cubiertos</li><li>Lavatrastos + bolsas de basura</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Cocina</h4>
                <ul>
                  <li>Olla grande y mediana</li><li>Hervidor</li><li>Tabla para cortar</li>
                  <li>Cuchillos</li><li>Cucharón y espátula</li><li>Colador</li>
                  <li>Platos (6) + vasos (6)</li><li>Cubiertos (6)</li><li>Abrelatas</li>
                  <li>Licuadora</li><li>Cafetera</li><li>Microondas</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Despensa</h4>
                <ul>
                  <li>Aceite de oliva o cocina</li><li>Sal y pimienta</li><li>Ajo y cebolla</li>
                  <li>Arroz y frijoles</li><li>Pasta</li><li>Salsa de tomate</li>
                  <li>Café y azúcar</li><li>Leche y huevos</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Dormitorio</h4>
                <ul>
                  <li>Juegos de sábanas (×2)</li><li>Almohadas (×2)</li>
                  <li>Cobija o edredón</li><li>Ganchos de ropa (20+)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Baño</h4>
                <ul>
                  <li>Toalla de baño (×2)</li><li>Toalla de manos (×2)</li>
                  <li>Tapete de baño</li><li>Cortina de baño</li>
                  <li>Champú + acondicionador</li><li>Jabón</li><li>Papel higiénico (varios rollos)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Limpieza</h4>
                <ul>
                  <li>Escoba + recogedor</li><li>Trapeador + balde</li><li>Detergente para ropa</li>
                  <li>Desinfectante</li><li>Lavatrastos</li><li>Esponjas</li>
                  <li>Bolsas de basura</li><li>Cesto de ropa sucia</li><li>Insecticida</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>General</h4>
                <ul>
                  <li>Bombillas extra</li><li>Extensión eléctrica</li>
                  <li>Cortinas o blackout</li><li>Linterna y pilas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="blog-inline-cta">
            <p>Deja de decidir qué comprar. <em>Empieza a cocinar.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* ETAPAS */}
          <h2 id="etapas">Qué puede esperar: compras por etapas</h2>

          <p>
            La trampa más grande al armar la casa nueva es querer resolverlo todo de una vez.
            No lo resuelve —solo hace que la cuenta llegue de golpe. Comprar sin ningún plan es una de las formas
            más comunes de gastar de más, y hacer toda la compra de la casa sin planear lo empeora todavía más.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Día 1 —antes de dormir en la casa</strong>
                <span>
                  Kit de sobrevivencia: cama, baño, higiene básica, cocina mínima y limpieza esencial.
                  Nada más.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>Semana 1 —completar lo funcional</strong>
                <span>
                  Cocina completa, ropa de cama extra, las bombillas correctas, extensiones donde las necesites.
                  Ya puedes cocinar y vivir sin depender de pedir comida.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Mes 1 —lo que de verdad vas a usar</strong>
                <span>
                  Después de vivir unos días en la casa, descubres lo que realmente te falta.
                  Electrodomésticos de confort, complementos de dormitorio y baño —cómpralos cuando sepas que los vas a usar.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Después —decoración y confort</strong>
                <span>
                  Cuadros, tapetes decorativos, utensilios de cocina especializados, objetos de decoración.
                  La casa te dice lo que necesita después de un tiempo. No antes.
                </span>
              </div>
            </li>
          </ul>

          <p>
            Con la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras de Mise</a>{' '}
            organizas las etapas de compra por categorías, compartes la lista con quien te esté ayudando en la mudanza y evitas comprar duplicado.
          </p>

          {/* CUÁNTO CUESTA */}
          <h2 id="cuanto-cuesta">Cuánto vas a gastar: estimación por perfil</h2>

          <p>
            Depende de lo que ya tengas, de la calidad que elijas y del tamaño de la casa.
            Las estimaciones de abajo cubren utensilios, ropa de cama, productos de limpieza y despensa inicial —sin incluir muebles ni electrodomésticos grandes como refrigerador, estufa o lavadora.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Perfil</th>
                <th>Estimación primera compra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Persona sola</td>
                <td>$300–500 dólares</td>
              </tr>
              <tr>
                <td>Pareja</td>
                <td>$500–900 dólares</td>
              </tr>
              <tr>
                <td>Familia con hijos</td>
                <td>$800–1.400 dólares</td>
              </tr>
            </tbody>
          </table>

          <p>
            Para gastar menos: empieza con marcas básicas en los artículos utilitarios (ollas, paños de limpieza),
            compra empaques más grandes en los productos de limpieza (sale más barato por unidad) y deja los artículos
            de mejor calidad para cuando sepas qué vas a usar con frecuencia. Como referencia, el gasto mensual en el
            supermercado —una vez que la casa ya esté armada— suele rondar los{' '}
            <strong>700 a 1.000 dólares para una pareja</strong> con un presupuesto moderado, aunque varía bastante
            según el país y el tipo de cambio.
            Con la{' '}
            <a href="/es/funcionalidades/despensa">despensa de Mise</a>,
            monitoreas lo que se está acabando antes de que te haga falta —y evitas comprar lo que ya tienes.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la lista de compras para casa nueva</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué comprar primero para la casa nueva?</p>
              <p className="faq-a">
                Empieza por el kit de sobrevivencia:{' '}
                <strong>ropa de cama, toallas, papel higiénico, jabón, pasta de dientes, una olla, un sartén, platos y cubiertos básicos, lavatrastos y bolsas de basura.</strong>{' '}
                Son los artículos que vas a necesitar la primera noche, antes de cualquier mueble o decoración.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué no puede faltar en la lista de compras para casa nueva?</p>
              <p className="faq-a">
                La lista cubre cuatro áreas: <strong>cocina</strong> (utensilios, electrodomésticos y despensa),{' '}
                <strong>dormitorio y baño</strong> (ropa de cama, toallas e higiene),{' '}
                <strong>limpieza y lavandería</strong> y <strong>artículos generales</strong> (bombillas, extensiones, cortinas).
                Los tres artículos que más se olvidan en el apuro de la mudanza: papel higiénico, cortina de baño y abrelatas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto cuesta armar una casa nueva desde cero?</p>
              <p className="faq-a">
                La primera compra —utensilios, ropa de cama, limpieza y despensa— ronda los{' '}
                <strong>300 a 500 dólares para una persona sola</strong>, <strong>500 a 900 dólares para una pareja</strong> y{' '}
                <strong>800 a 1.400 dólares para una familia con hijos</strong>. Estos montos no incluyen muebles
                ni electrodomésticos grandes como refrigerador, estufa o lavadora.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo organizar las compras para casa nueva por etapas?</p>
              <p className="faq-a">
                Divídelo en tres etapas: <strong>Día 1</strong> —artículos de sobrevivencia (cama, baño, cocina mínima).{' '}
                <strong>Semana 1</strong> —completar la cocina, ropa de cama extra, bombillas y extensiones.{' '}
                <strong>Mes 1</strong> —los electrodomésticos que falten y complementos por habitación.
                La decoración y los artículos de confort quedan para después de que sepas qué necesita realmente la casa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo no olvidar nada en la lista de compras de la mudanza?</p>
              <p className="faq-a">
                Organiza la lista por habitación, no por tipo de producto. Recorre mentalmente cada espacio y anota lo que vas a
                necesitar en cada uno. Si más de una persona va a comprar, usa una{' '}
                <a href="/es/funcionalidades/lista-de-compras">lista compartida en tiempo real</a>{' '}
                para no duplicar artículos ni olvidar categorías completas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué puede esperar para después al armar la casa nueva?</p>
              <p className="faq-a">
                Decoración, cuadros, tapetes decorativos, utensilios de cocina especializados (freidora de aire, batidora, exprimidor)
                y cualquier cosa que no vayas a usar en la primera semana. Descubres lo que realmente te hace falta
                después de vivir unos días en la casa, no antes de entrar a ella.
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
                Creador de Mise. Llegó a la casa nueva sin papel higiénico una vez. Solo tuvo que pasar una vez.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Casa nueva, lista nueva.<br />
              <em>Usa Mise.</em>
            </h2>
            <p>
              Conecta tu despensa, tus recetas y tu lista de compras en un solo lugar.
              Nunca más vas a descubrir que se acabó el aceite justo cuando estás cocinando.
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
