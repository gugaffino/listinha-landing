import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Mackerel Nutrition: More Omega-3 Than Salmon, Half the Price',
  description: 'Mackerel is an oily fish with about 5,100mg of omega-3 per 100g — more than salmon. What it is, fresh vs canned, the mercury question, and how to cook it.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cavala',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cavala',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cavala',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cavala',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cavala',
    },
  },
  openGraph: {
    title: 'Mackerel Nutrition: More Omega-3 Than Salmon, Half the Price',
    description: 'Mackerel is an oily fish with about 5,100mg of omega-3 per 100g — more than salmon. What it is, fresh vs canned, the mercury question, and how to cook it.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cavala',
    images: [
      {
        url: 'https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh mackerel on ice at a fish counter — whole fish with metallic blue skin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mackerel Nutrition: More Omega-3 Than Salmon, Half the Price',
    description: 'Mackerel is an oily fish with about 5,100mg of omega-3 per 100g — more than salmon. What it is, fresh vs canned, the mercury question, and how to cook it.',
    images: ['https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is mackerel the same as king mackerel or Spanish mackerel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — they are related but not the same fish. "Mackerel" on its own usually means Atlantic mackerel (Scomber scombrus), a small, fast-growing species that is low in mercury. King mackerel is a much larger, longer-living predator with mercury levels high enough that the FDA lists it as a "choice to avoid" for pregnant women and young children. Check the label or ask the fishmonger which species you are buying.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between mackerel and tuna?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both belong to the Scombridae family, but they are different fish. Mackerel is smaller, has more omega-3 per 100g, and usually costs less. Canned light tuna sold in most stores is skipjack, which carries less fat and less omega-3 than mackerel. Mackerel also has a bolder, more assertive flavor than tuna.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does canned mackerel have the same nutrients as fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mostly, yes. Canning preserves protein and omega-3 fatty acids well. Sodium is higher in canned versions, especially those packed in brine — if that matters to you, look for no-salt-added options or drain and rinse before serving. Vitamin D and B12 also hold up well through the canning process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many times a week can I eat mackerel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Health authorities generally recommend at least two servings of fish per week. Atlantic mackerel is low in mercury and sits in the FDA\'s "Best Choices" category — safe for 2 to 3 servings of 3 to 4oz (85–113g) a week for most adults, including pregnant women.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does mackerel have mercury?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atlantic mackerel (Scomber scombrus) is low in mercury and considered safe for frequent consumption. The species to watch for is king mackerel — a larger, longer-living fish with mercury levels high enough to land it on the FDA\'s "avoid" list. Do not confuse the two at the fish counter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you know if fresh mackerel is good quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bright, clear eyes (not cloudy), red or pink gills, firm flesh that springs back when pressed, and a clean ocean smell — not a fishy one. Shiny, metallic-blue skin is a sign of freshness. Once that shine starts to dull, the fish is past its best. Ask what came in that day.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mackerel Nutrition: More Omega-3 Than Salmon, Half the Price',
  description: 'Mackerel is an oily fish with about 5,100mg of omega-3 per 100g — more than salmon. What it is, fresh vs canned, the mercury question, and how to cook it.',
  image: 'https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-27',
  dateModified: '2026-07-27',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-cavala',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Mackerel', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cavala' },
  ],
}

export default function OQueECavalaEn() {
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

      <a href="#main-content" className="skip-link">Skip to content</a>

      <SiteNav />

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="You are here">
          <ol className="breadcrumb-nav">
            <li><a href="/en">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/en/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Mackerel</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-27">Jul 27, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            What Is Mackerel? The Blue Fish With More Omega-3 Than Salmon
          </h1>
          <p className="blog-desc">
            Mackerel is in the same family as tuna, and it beats salmon on omega-3 — for a fraction of the price. Sold fresh at fish counters and canned at every grocery store, it gets skipped for no good reason.
          </p>

          <div className="answer-box">
            <p>
              <strong>Mackerel</strong> (<em>Scomber</em> spp.) is a saltwater fish from the Scombridae family — the same one as tuna and bonito.
              Classified as an oily fish for its high unsaturated fat content, it carries roughly <strong>5,100mg of omega-3 per 100g</strong>.
              It shows up fresh at fish counters and canned on nearly every grocery shelf.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh mackerel on ice at a fish counter — whole fish with metallic blue skin"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pexels / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article index">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-mackerel">What mackerel actually is</a></li>
              <li><a href="#omega-3">Why it beats salmon on omega-3</a></li>
              <li><a href="#nutrition">The full nutrition profile</a></li>
              <li><a href="#mercury">The mercury question</a></li>
              <li><a href="#fresh-or-canned">Fresh, canned, or smoked</a></li>
              <li><a href="#how-to-cook">How to cook mackerel at home</a></li>
              <li><a href="#worth-it">Is it worth putting on your list</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8351649/pexels-photo-8351649.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Assorted fresh fish on ice at a fish market — whole blue saltwater fish for sale"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels / Pexels</p>
          </div>

          <h2 id="what-is-mackerel" className="img-above">What mackerel actually is</h2>

          <p>
            Mackerel is the common name for several fast-swimming saltwater fish in the genus <em>Scomber</em>, part of the Scombridae family — the same family as tuna and bonito. What most stores sell as plain "mackerel" is Atlantic mackerel (<em>Scomber scombrus</em>), a smaller, short-lived species.
          </p>
          <p>
            It is worth keeping that species apart from king mackerel (<em>Scomberomorus cavalla</em>), a much bigger, longer-living fish that shares the name but not the safety profile — more on that in the mercury section below.
          </p>
          <p>
            Atlantic mackerel is classified as an <strong>oily fish</strong> because of its high concentration of unsaturated fat. The flesh is dark and firm, with a bolder flavor than tilapia or cod — less neutral, more assertive. If you already eat salmon regularly, mackerel lands in familiar territory.
          </p>
          <p>
            The metallic-blue skin is its most recognizable feature. Fresh fish has an intense shine — once that shine fades, the fish is past its best. On mackerel, the skin gives away freshness faster than it does on most other fish.
          </p>

          <h2 id="omega-3">Why it beats salmon on omega-3</h2>

          <p>
            The number that surprises people: mackerel carries roughly 5,100mg of omega-3 per 100g. Salmon runs around 1,600mg. Canned tuna, closer to 300–400mg. Mackerel wins both comparisons by a wide margin. Salmon just has better marketing.
          </p>
          <p>
            The reason is the fish's lifestyle. Mackerel is migratory, swims in cold open water, and feeds on smaller, fat-rich fish. That profile — active fish, cold water — is exactly what drives omega-3 accumulation in muscle tissue.
          </p>
          <p>
            The omega-3 in mackerel comes as <strong>EPA and DHA</strong> — ready for the body to use directly. That is different from plant sources like flaxseed and chia, where omega-3 shows up as ALA and needs to be converted first, a process with inconsistent efficiency. For heart health and brain function, EPA and DHA are the forms backed by the strongest clinical evidence.
          </p>

          <h2 id="nutrition">The full nutrition profile</h2>

          <p>
            Per 100g of mackerel: roughly 205 kcal, 19g of protein, and 14g of fat — most of it unsaturated. The protein content rivals chicken breast, with a completely different fat profile as the upside.
          </p>
          <p>
            Mackerel is one of the best food sources of vitamin D — genuinely hard to get in meaningful amounts from everyday food. It also carries high vitamin B12, selenium, and niacin. For anyone eating less red meat, it is a solid stand-in.
          </p>
          <p>
            In portions of 3 to 4oz (85–113g), two to three times a week, Atlantic mackerel does not accumulate mercury the way larger fish do. That is a different story for king mackerel, swordfish, and bigeye tuna — covered next.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2597565/pexels-photo-2597565.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Close-up of sliced cooked fish — grilled blue fish fillet ready to serve"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Oleksandr Pidvalnyi / Pexels</p>
          </div>

          <h2 id="mercury" className="img-above">The mercury question</h2>

          <p>
            This is the part where the name "mackerel" gets confusing, and it is worth getting right. Atlantic mackerel is low in mercury and sits in the FDA's "Best Choices" category, alongside sardines and anchovies — safe for frequent consumption, including for pregnant women and children.
          </p>
          <p>
            King mackerel is a different animal entirely. It grows much larger, lives much longer, and sits at the top of a longer food chain — which means it accumulates far more mercury. The FDA places king mackerel on its "Choices to Avoid" list, in the same category as swordfish and shark.
          </p>
          <p>
            The takeaway: if the label just says "mackerel" at a regular grocery store, it is almost certainly Atlantic mackerel — the safe one. If you are buying whole fish from a specialty counter or ordering it at a restaurant, it is worth asking which species you are getting.
          </p>

          <h2 id="fresh-or-canned">Fresh, canned, or smoked</h2>

          <p>
            Fresh mackerel shows up at fish counters and well-stocked grocery stores, priced well below salmon. Availability depends on where you live — coastal areas tend to carry it more consistently than landlocked ones.
          </p>
          <p>
            Canned is where mackerel becomes genuinely convenient. Packed in oil, water, or its own juices, it sits on shelves everywhere — right next to the tuna and sardines. The canning process preserves protein and omega-3 well, unlike deep-frying, which oxidizes part of the unsaturated fat.
          </p>
          <p>
            Smoked mackerel is a category of its own — common in the UK, where "smoked mackerel pâté" is practically a pub staple. Flake it over toast with{' '}
            <a href="/en/funcionalidades/despensa">whatever cream cheese you already have in the pantry</a>
            {', '}or fold it into a quick pâté. It is an occasional treat, not a weekly staple.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn't cost you this much headspace. <em>Mise handles it.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          <h2 id="how-to-cook">How to cook mackerel at home</h2>

          <p>
            The simplest method preserves the most nutrients: grilled or pan-seared. As a fillet, 4 to 5 minutes per side in a hot pan with olive oil, salt, and garlic. The flavor is bold enough that it does not need a sauce. Finish with lemon if you want it.
          </p>

          <h3>Baked in foil</h3>
          <p>
            Sealed in foil with lemon slices, herbs, and olive oil. Oven at 400°F (200°C) for 20 minutes. It comes out tender, never dries out, and barely announces itself as fish in the kitchen — a useful trick if you would rather not broadcast dinner down the hallway.
          </p>

          <h3>Soused (pickled)</h3>
          <p>
            A traditional British preparation: pan-sear the fillet, then cover it with sliced onion, vinegar, olive oil, black pepper, and bay leaf. Rest in the fridge for at least 4 hours. Serve cold, with bread or rice. It is one of the few fish dishes that improves the next day.
          </p>

          <h3>Canned, straight from the tin</h3>
          <p>
            The most practical prep there is: open, drain, serve. Over rice, in a green salad, mixed with boiled potatoes. Protein and omega-3 in under 10 minutes. If it is already in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>
            {', '}it is the fallback for when the week's meal plan falls apart — and it will.
          </p>

          <h2 id="worth-it">Is it worth putting on your list</h2>

          <p>
            Canned, without a doubt. It is one of the best cost-per-gram protein options in the grocery store. Shelf-stable, fast to prep, and it delivers the nutrition profile salmon charges a premium for.
          </p>
          <p>
            If you already buy canned tuna, mackerel is a direct swap. The flavor is a bit bolder, but the trade makes sense: more omega-3 for the same price, often less. Try it first in a recipe you already make with{' '}
            <a href="/en/blog/atum">tuna</a>
            {' '}— salad, wrap, pasta — before replacing it everywhere.
          </p>
          <p>
            Fresh, it earns a spot on your{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>
            {' '}whenever you pass a good fish counter or catch it at a fair price. As a fillet, it works in any recipe built around a fish with a bolder flavor. It will not replace tilapia (too neutral), but it stands in wherever you would use mackerel's closer relatives.
          </p>
          <p>
            Canned mackerel is one of those items that should not be missing from anyone's basic pantry list — protein, omega-3, and a shelf life measured in years. That is the whole pitch.
          </p>

          <h2 id="faq">Frequently asked questions about mackerel</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is mackerel the same as king mackerel or Spanish mackerel?</p>
              <p className="faq-a">
                No — they are related but not the same fish. "Mackerel" on its own usually means Atlantic mackerel, a small, fast-growing species that is low in mercury. King mackerel is a much larger, longer-living predator with mercury levels high enough that the FDA lists it as a choice to avoid for pregnant women and young children. Check the label or ask the fishmonger which species you are buying.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What's the difference between mackerel and tuna?</p>
              <p className="faq-a">
                Both belong to the Scombridae family, but they are different fish. Mackerel is smaller, has more omega-3 per 100g, and usually costs less. Canned light tuna sold in most stores is skipjack, which carries less fat and less omega-3 than mackerel. Mackerel also has a bolder flavor than tuna.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does canned mackerel have the same nutrients as fresh?</p>
              <p className="faq-a">
                Mostly, yes. Canning preserves protein and omega-3 fatty acids well. Sodium is higher in canned versions, especially brine-packed ones — look for no-salt-added options or drain and rinse before serving if that matters to you. Vitamin D and B12 also hold up well through canning.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many times a week can I eat mackerel?</p>
              <p className="faq-a">
                Health authorities generally recommend at least two servings of fish per week. Atlantic mackerel is low in mercury and sits in the FDA's Best Choices category — safe for 2 to 3 servings of 3 to 4oz (85–113g) a week for most adults, including pregnant women.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does mackerel have mercury?</p>
              <p className="faq-a">
                Atlantic mackerel is low in mercury and considered safe for frequent consumption. The species to watch for is king mackerel — a larger, longer-living fish with mercury levels high enough to land it on the FDA's avoid list. Do not confuse the two at the fish counter.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you know if fresh mackerel is good quality?</p>
              <p className="faq-a">
                Bright, clear eyes, red or pink gills, firm flesh that springs back when pressed, and a clean ocean smell — not a fishy one. Shiny, metallic-blue skin signals freshness. Once that shine dulls, the fish is past its best. Ask what came in that day.
              </p>
            </li>
          </ul>

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
                Mise's founder. Bought canned mackerel because it was on sale, found out it beats salmon on omega-3, felt mildly embarrassed for not knowing sooner.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Mackerel on the list.<br />
              <em>A pantry that doesn't forget.</em>
            </h2>
            <p>
              Mise connects pantry, recipes, and shopping list in one place.
              You buy what you'll actually use — and mackerel doesn't get left off the list for lack of remembering.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Start free
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Back to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Back to top
          </a>

        </article>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="/en" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <span className="footer-copy">© 2026 Mise</span>
          <a href="/en/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
