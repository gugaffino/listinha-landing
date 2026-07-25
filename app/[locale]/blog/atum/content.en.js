import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Tuna: Nutrition Facts, Canned vs Fresh, and How to Cook It',
  description: 'Canned tuna packs 24g of protein per 100g and real omega-3s. Learn the difference between fresh and canned, oil vs water, chunk vs flaked, and how to cook it.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/atum',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/atum',
      en: 'https://www.miseemcasa.com.br/en/blog/atum',
      es: 'https://www.miseemcasa.com.br/es/blog/atum',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/atum',
    },
  },
  openGraph: {
    title: 'Tuna: Nutrition Facts, Canned vs Fresh, and How to Cook It',
    description: 'Canned tuna packs 24g of protein per 100g and real omega-3s. Learn the difference between fresh and canned, oil vs water, chunk vs flaked, and how to cook it.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/atum',
    images: [
      {
        url: 'https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Hand slicing fresh tuna on a cutting board — fish prep in the kitchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuna: Nutrition Facts, Canned vs Fresh, and How to Cook It',
    description: 'Canned tuna packs 24g of protein per 100g and real omega-3s. Learn the difference between fresh and canned, oil vs water, chunk vs flaked, and how to cook it.',
    images: ['https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many cans of tuna is it safe to eat per week?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FDA and EPA recommend up to 2 to 3 servings of light tuna a week for healthy adults — a serving is about 4oz (113g). Albacore (white tuna) is limited to 1 serving a week because it holds more mercury than skipjack, the species used in most light tuna cans. Pregnant women and young children should check with a doctor before eating tuna regularly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does canned tuna still have real omega-3s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Canned tuna carries EPA and DHA — the long-chain omega-3s, not the ALA found in chia or flaxseed. Canning does reduce the amount compared to fresh tuna, but a standard can still delivers a meaningful dose your body can use directly, no conversion needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chunk light or solid albacore tuna — which should I buy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on what you are making. Solid or chunk tuna holds bigger pieces and a firmer bite — good for salads, pasta, and anything where the tuna should be visible. Flaked tuna is fine and even, better for spreads, casseroles, and mixes. Neither is objectively better — it is about matching the format to the dish.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is tuna in oil or water healthier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water-packed has fewer calories — roughly 100 to 130 kcal per 100g drained, versus 180 to 200 kcal for oil-packed — and holds onto more of its omega-3s, since oil acts as a solvent during canning. Oil-packed, especially in olive oil, tastes richer and needs less seasoning. Either way, drain it well before using.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you freeze fresh tuna at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fresh tuna freezes well for up to 3 months. Wrap it in individual portions, push out as much air as possible, and freeze right away. Thaw in the fridge overnight — never on the counter. The texture softens slightly after freezing, but it still works well in cooked dishes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is tuna fattening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water-packed tuna has about 100 to 130 kcal per 100g and is one of the leanest high-protein foods around. Oil-packed has more calories from the canning oil. What usually adds the weight is not the tuna — it is the pasta, the bread, the mayo it comes with. As a main protein, tuna is hard to beat on cost per gram of protein.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tuna: Nutrition Facts, Canned vs Fresh, and How to Cook It',
  description: 'Canned tuna packs 24g of protein per 100g and real omega-3s. Learn the difference between fresh and canned, oil vs water, chunk vs flaked, and how to cook it.',
  image: 'https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/atum',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Tuna', item: 'https://www.miseemcasa.com.br/en/blog/atum' },
  ],
}

export default function AtumEn() {
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
            <li className="breadcrumb-current" aria-current="page">Tuna</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-25">Jul 25, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Fresh or Canned Tuna: A No-Nonsense Guide for Home Cooks
          </h1>
          <p className="blog-desc">
            It is in every pantry, and most people use it exactly one way. What tuna actually is, the difference between light and albacore, chunk and flaked, oil and water — and how to use it beyond weeknight pasta.
          </p>

          <div className="answer-box">
            <p>
              <strong>Tuna</strong> is a saltwater fish from the Scombridae family, caught in tropical and subtropical oceans.
              It has firm, reddish flesh and a bold flavor. Fresh, it shows up at fish counters. Canned, it lives in nearly every kitchen cabinet — with <strong>24g of protein per 100g</strong> and long-chain omega-3s (EPA and DHA).
              It is one of the most versatile, most underused ingredients in a regular kitchen.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Hand slicing fresh tuna on a cutting board — fish prep in the kitchen"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: cottonbro studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article index">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-tuna">What tuna actually is</a></li>
              <li><a href="#nutrition">Nutrition facts</a></li>
              <li><a href="#fresh-or-canned">Fresh or canned</a></li>
              <li><a href="#oil-or-water">Oil or water</a></li>
              <li><a href="#chunk-or-flaked">Chunk light or flaked</a></li>
              <li><a href="#how-to-use">How to use it in the kitchen</a></li>
              <li><a href="#mercury">Tuna and mercury</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* WHAT IS TUNA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8351649/pexels-photo-8351649.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fish market counter with whole fresh fish displayed on ice"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Kindel Media / Pexels</p>
          </div>

          <h2 id="what-is-tuna" className="img-above">What tuna actually is</h2>

          <p>
            Tuna is the common name for several species in the genus <em>Thunnus</em>, plus a few close relatives in the Scombridae family. They are fast-swimming, migratory fish found in tropical and subtropical oceans worldwide.
          </p>
          <p>
            Most canned tuna on grocery shelves is skipjack (<em>Katsuwonus pelamis</em>), labeled "light tuna" in the US. It is smaller, with darker, more strongly flavored flesh than albacore (<em>Thunnus alalunga</em>), the "white tuna" that shows up in pricier cans and premium fish counters. Skipjack is what fills most of the $1.50 cans sitting in the pantry right now.
          </p>
          <p>
            Fresh, tuna shows up at fish counters and specialty grocers, especially near coastal cities. The flesh is dense, ranging from pink to deep red depending on the species, with a flavor that stands on its own. It is hard to ruin unless you actively overcook it.
          </p>
          <p>
            Canned, tuna became one of the most democratized proteins in modern kitchens: cheap, shelf-stable for years, zero prep. Raise your hand if there is at least one can in your cabinet right now — exactly.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">Nutrition facts</h2>

          <p>
            Tuna is genuinely high in protein. Per 100g of water-packed tuna, drained, the approximate values are:
          </p>

          <ul className="item-list">
            <li><strong>100–130 kcal</strong></li>
            <li><strong>24–26g of protein</strong></li>
            <li><strong>1–3g of fat</strong> — mostly unsaturated, rich in omega-3</li>
            <li><strong>Under 1g of carbs</strong></li>
            <li><strong>200–400mg of EPA and DHA</strong> (long-chain omega-3, lower than fresh since canning reduces it)</li>
          </ul>

          <p>
            The omega-3 in tuna is EPA and DHA — long-chain, ready for your body to use directly. That is different from the ALA in chia and flaxseed, which the body has to convert first, and does so inefficiently. Fresh tuna carries more omega-3 than canned, since the canning process leaches some of it out, but a can still delivers a real dose.
          </p>
          <p>
            A standard 5oz (142g) can, drained to about 4oz, delivers around 25–30g of protein. For comparison: one large egg has 6g. A single can of tuna is worth roughly four to five eggs in protein, usually at a lower cost per gram.
          </p>
          <p>
            Tuna is also a solid source of selenium, vitamin B12, niacin, and phosphorus. It is not a complete meal by itself, but folded into rice, salad, or pasta, it delivers real nutrition with almost no effort.
          </p>
          <p>
            If you are hunting for cheap, high-protein pantry staples, canned tuna is hard to beat.
          </p>

          {/* FRESH OR CANNED */}
          <h2 id="fresh-or-canned">Fresh or canned: which to buy</h2>

          <p>
            The answer depends on what you are cooking — and what is actually available near you.
          </p>
          <p>
            <strong>Fresh tuna</strong> has superior texture: firm, with a bite canned tuna cannot replicate. It opens up preparations canned tuna cannot do — seared, tataki, crudo, sashimi. The flavor is cleaner and less salty. But it is not sold everywhere, keeps for only 1 to 2 days in the fridge, and costs noticeably more per pound.
          </p>
          <p>
            <strong>Canned tuna</strong> is the reality of most kitchens. Ready to eat, shelf-stable for 2 to 3 years, sold at every grocery store. It goes straight into rice, salad, pasta, sandwiches. Less glamorous than fresh, but it is the one that actually gets used every week.
          </p>
          <p>
            If you live near a fish counter with good sourcing and want a dish where texture matters, fresh is worth it. For the weekly routine, canned is the right call — and it is worth keeping a couple of cans stocked in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>.
          </p>
          <p>
            One format fewer people know about: tuna pouches. Same product as the can, sealed in a foil pouch instead. It tends to hold a slightly firmer texture than the equivalent can, weighs less to carry, and needs no can opener. It is showing up on more shelves every year.
          </p>

          {/* OIL OR WATER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/17942043/pexels-photo-17942043.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Plate with tuna slices served with vegetables and fresh herbs"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Nadin Sh / Pexels</p>
          </div>

          <h2 id="oil-or-water" className="img-above">Oil or water: the real difference</h2>

          <p>
            Most people have a preference. Few know exactly what changes between the two.
          </p>

          <h3>Water-packed tuna</h3>
          <p>
            Drier, firmer texture, fewer calories — roughly 100 to 130 kcal per 100g drained. It absorbs seasoning and sauce better: tomato, lemon, olive oil, mayo all land harder because the tuna is not already coated in fat. It holds onto more of its omega-3s too, since oil pulls some out during canning. It is the more versatile pick for recipes where you plan to season it yourself.
          </p>

          <h3>Oil-packed tuna</h3>
          <p>
            Moister, softer texture, richer flavor right out of the can. Roughly 180 to 200 kcal per 100g drained, depending on the oil. The oil itself matters: tuna packed in olive oil tastes noticeably better than tuna packed in soybean or vegetable oil. If you are eating it plain — straight on toast, or with rice and salt — the olive-oil version earns the higher price.
          </p>
          <p>
            The practical call: heavy seasoning, dressing, or mixing calls for water-packed. Eating it with little to no prep calls for oil-packed, ideally in olive oil.
          </p>
          <p>
            One thing everyone learns eventually: <strong>drain it, always</strong>. Especially the oil-packed kind. Leftover canning liquid ruins a dish fast — watery pasta, soggy salad. A full drain is the step that actually makes the difference before any recipe.
          </p>

          {/* CHUNK OR FLAKED */}
          <h2 id="chunk-or-flaked">Chunk light or flaked: what actually changes</h2>

          <p>
            This distinction matters more than it seems, depending on what you are making.
          </p>

          <h3>Chunk or solid</h3>
          <p>
            Bigger pieces, usually whole loin sections. The texture is firm and the pieces stay visible in the finished dish. A 2oz drained serving of solid tuna delivers around 15–17g of protein. This is the format for salads where you want the tuna to show, pasta with whole pieces, anything where the bite is part of the point.
          </p>

          <h3>Flaked</h3>
          <p>
            Fine, even shreds of tuna. The same 2oz serving runs slightly lower in protein — closer to 13–15g — since the flaking process leaves a bit more behind in processing. This is the format for spreads, pot pies, casseroles, mixes where you want uniformity, not chunks.
          </p>
          <p>
            They are different products for different jobs. Neither wins outright — the right one depends on the dish. Buying chunk light when a recipe calls for flaked leaves pieces that fight the texture. The reverse leaves a dish missing the bite chunk light delivers.
          </p>
          <p>
            If tuna shows up on your{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            regularly, it is worth keeping both formats stocked. The turnover justifies it.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use tuna in the kitchen</h2>

          <p>
            Canned tuna is one of the most underrated things in the pantry. It works in more dishes than most people realize, and none of them take much effort.
          </p>

          <h3>In pasta and rice bowls</h3>
          <p>
            The classic combo. Tuna with olive oil, garlic, and lemon over pasta takes 10 minutes with ingredients you already have. Over rice, it works as an easy weeknight protein. Chunk light performs better here — the pieces hold up and give the dish structure.
          </p>

          <h3>In salads</h3>
          <p>
            With greens, tomato, hard-boiled eggs, and olives, it turns into a full meal with zero cooking. Water-packed tuna soaks up the dressing better. A basic shopping list built around these ingredients covers lunch for several days straight.
          </p>

          <h3>In spreads and dips</h3>
          <p>
            Flaked tuna with cream cheese, ricotta, or Greek yogurt makes a solid spread for crackers and toast. Add onion, herbs, and lemon for a no-effort appetizer. Season at the end and taste before adding salt — canned tuna already carries sodium.
          </p>

          <h3>In casseroles</h3>
          <p>
            The classic tuna casserole exists for a reason: it is one of the simplest weeknight bakes there is, and it disappears from the table fast. Works baked or as a stovetop version with pasta and a quick sauce.
          </p>

          <h3>Seared (fresh)</h3>
          <p>
            If you got your hands on fresh tuna, cut it into a 3/4-inch steak. Season with salt, pepper, and olive oil. Hot pan, 1 to 2 minutes per side. The center should stay pink — well-done tuna loses both texture and flavor. It is a fast preparation that outperforms most fish for the time it takes.
          </p>
          <p>
            And worth knowing: tuna is not the only fish that works this way. Mackerel, less known and usually cheaper, sears the same way and holds a competitive nutrition profile.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn't cost you this much headspace. <em>Mise handles it.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* MERCURY */}
          <h2 id="mercury">Tuna and mercury: how much is safe</h2>

          <p>
            This is the question most people have and few actually ask out loud.
          </p>
          <p>
            Tuna accumulates mercury because it is a predator that eats smaller fish its whole life. Mercury builds up the food chain — the bigger and older the fish, the more concentrated it gets. Albacore (<em>Thunnus alalunga</em>), the "white tuna" in pricier cans and sushi, carries noticeably more mercury than skipjack.
          </p>
          <p>
            Skipjack (<em>Katsuwonus pelamis</em>) — labeled "light tuna" and used in most budget cans — has a shorter life cycle and significantly lower mercury levels. It is the safer pick for regular consumption.
          </p>
          <p>
            The{' '}
            <a href="https://www.fda.gov/food/consumers/advice-about-eating-fish" target="_blank" rel="noopener noreferrer">FDA and EPA</a>{' '}
            recommend healthy adults stick to 2 to 3 servings of light tuna a week, about 4oz (113g) each. Albacore gets capped at 1 serving a week for the same reason.
          </p>
          <p>
            For most people — healthy adults eating tuna as part of a varied diet — that limit is easy to stay under. The ones who need to be more careful: pregnant women, women trying to conceive, and young children. In those cases, check with a doctor.
          </p>
          <p>
            Eating tuna three times a week within the serving limit is a different thing from eating it daily in large amounts. The issue is not tuna itself — it is eating it on repeat without variety.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about tuna</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">How many cans of tuna is it safe to eat per week?</p>
              <p className="faq-a">
                The FDA and EPA recommend up to 2 to 3 servings of light tuna a week for healthy adults, about 4oz (113g) each. Albacore is limited to 1 serving a week — it carries more mercury than skipjack, the fish used in most light tuna cans. Pregnant women and young children should check with a doctor first.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does canned tuna still have real omega-3s?</p>
              <p className="faq-a">
                Yes. It carries EPA and DHA — long-chain omega-3, different from the ALA in chia and flaxseed. Canning reduces the amount compared to fresh tuna, but a standard can still delivers a meaningful dose your body can use directly, no conversion needed.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Chunk light or solid albacore — which should I buy?</p>
              <p className="faq-a">
                Depends on the dish. Solid or chunk holds bigger pieces and a firmer bite — good for salads and pasta. Flaked is fine and even — better for spreads, casseroles, and mixes. Neither wins outright; it is about matching the format to what you are cooking.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is tuna in oil or water healthier?</p>
              <p className="faq-a">
                Water-packed has fewer calories (roughly 100–130 kcal/100g drained versus 180–200 for oil-packed) and holds onto more omega-3s. Oil-packed, especially in olive oil, tastes richer. Either way, drain it well before using.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you freeze fresh tuna at home?</p>
              <p className="faq-a">
                Yes. Fresh tuna freezes well for up to 3 months. Wrap by portion, push out the air, freeze right away. Thaw in the fridge overnight — never on the counter. Texture softens slightly after freezing, but it still works in cooked dishes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is tuna fattening?</p>
              <p className="faq-a">
                Water-packed tuna runs about 100–130 kcal per 100g — lean and high in protein. Oil-packed has more calories from the canning oil. What usually adds the weight is not the tuna, it is what comes with it — pasta, bread, mayo. As a main protein, tuna is hard to beat on cost per gram of protein.
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
                Mise's founder. Keeps at least two cans of tuna in the pantry at all times. One for the recipe, one that disappears on the way there.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Tuna in the pantry means dinner's already planned.<br />
              <em>Mise knows what's in your kitchen.</em>
            </h2>
            <p>
              Connects pantry, recipes, and shopping list in one place.
              You never head to the store without knowing what you already have — and that tuna never goes forgotten in the back of the cabinet.
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
