import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Extra Virgin Olive Oil: Benefits, Types, and Can You Fry With It',
  description: 'Extra virgin olive oil is rich in monounsaturated fat and polyphenols with real cardiovascular benefits. See the types, whether you can fry with it, how much to use daily, and how to store it.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/azeite-de-oliva',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/azeite-de-oliva',
      en: 'https://www.miseemcasa.com.br/en/blog/azeite-de-oliva',
      es: 'https://www.miseemcasa.com.br/es/blog/azeite-de-oliva',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/azeite-de-oliva',
    },
  },
  openGraph: {
    title: 'Extra Virgin Olive Oil: Benefits, Types, and Can You Fry With It',
    description: 'Extra virgin olive oil is rich in monounsaturated fat and polyphenols with real cardiovascular benefits. See the types, whether you can fry with it, how much to use daily, and how to store it.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/azeite-de-oliva',
    images: [
      {
        url: 'https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Person pouring extra virgin olive oil over a fresh salad with tomatoes and greens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extra Virgin Olive Oil: Benefits, Types, and Can You Fry With It',
    description: 'Extra virgin olive oil is rich in monounsaturated fat and polyphenols with real cardiovascular benefits. See the types, whether you can fry with it, how much to use daily, and how to store it.',
    images: ['https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between extra virgin and regular olive oil?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main difference is free acidity and processing: extra virgin has acidity below 0.8% and comes from the first cold pressing with no chemical refining, which preserves the polyphenols responsible for its anti-inflammatory and antioxidant effects. Regular ("pure" or "light") olive oil is refined to strip out defects and blended with a small amount of virgin oil for flavor, so it has a higher smoke point but far fewer of those compounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fry with extra virgin olive oil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Extra virgin olive oil's smoke point sits between roughly 374°F and 410°F (190°C–210°C), comfortably above the 350°F–375°F range most home frying uses. The idea that it turns toxic or loses all value when heated isn't supported by the research — smoke point isn't even the best predictor of how an oil holds up to heat. Oxidative stability matters more, and EVOO's antioxidants make it one of the more stable oils you can cook with. The real reason to save it for finishing is cost, not safety.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much olive oil should you use per day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most research on cardiovascular benefits points to somewhere around 1 to 2 tablespoons (15–30 ml) a day, with some studies using up to 4 tablespoons. There is no strong evidence that more is better. Olive oil is calorie-dense — about 120 calories per tablespoon — so if you already cook and dress food with it regularly, you are likely close to that range without measuring anything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does olive oil lose its benefits when heated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some polyphenols break down with sustained high heat, but the oil doesn't become harmful. Peer-reviewed cooking studies have found that extra virgin olive oil actually outperforms several higher-smoke-point oils in oxidative stability during real cooking. To get the most out of the antioxidants, it still helps to use some of your olive oil raw — on salads, finished dishes, or bread — in addition to cooking with it.",
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if olive oil is good quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Check the label for a harvest date rather than just a 'best by' date, dark glass or tin packaging, and a certification like PDO/PGI or a regional seal. Good extra virgin olive oil often has a peppery, slightly bitter finish in the throat — that sting is a sign of polyphenol content, not a flaw. If it tastes completely bland and smooth, it may be old, poorly stored, or lower in the compounds that make extra virgin worth the price.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store olive oil so it stays fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Keep it in a cool, dark, sealed cabinet, away from the stove and direct sunlight. It doesn't need refrigeration — cold makes it turn cloudy and solid, which looks alarming but doesn't hurt quality; it clears up again at room temperature. Once opened, extra virgin olive oil holds its quality for about 6 months. Dark glass or tin protects it better than clear glass or plastic.",
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Extra Virgin Olive Oil: Benefits, Types, and Can You Fry With It',
  description: 'Extra virgin olive oil is rich in monounsaturated fat and polyphenols with real cardiovascular benefits. See the types, whether you can fry with it, how much to use daily, and how to store it.',
  image: 'https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-04',
  dateModified: '2026-08-04',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/azeite-de-oliva',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Extra Virgin Olive Oil', item: 'https://www.miseemcasa.com.br/en/blog/azeite-de-oliva' },
  ],
}

export default function OliveOilEn() {
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
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/en/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Extra Virgin Olive Oil</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-04">Aug 4, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Extra Virgin Olive Oil: What It Actually Does and How to Use It
          </h1>
          <p className="blog-desc">
            Every kitchen has a bottle of it, and almost nobody agrees on what it&apos;s actually good for. What separates extra virgin from the "light" bottle next to it, whether you can fry with it without ruining it, and how much you really need each day.
          </p>

          <div className="answer-box">
            <p>
              <strong>Extra virgin olive oil</strong> is the oil pressed from olives mechanically — no heat, no chemical solvents — with free acidity below 0.8%.
              Because it skips refining, it keeps the polyphenols tied to lower cardiovascular risk, reduced inflammation, and antioxidant activity that refined olive oil mostly loses.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Person pouring extra virgin olive oil over a fresh salad with tomatoes and greens"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Dario Garcia / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What extra virgin olive oil is</a></li>
              <li><a href="#types">Types of olive oil</a></li>
              <li><a href="#benefits">Benefits of extra virgin olive oil</a></li>
              <li><a href="#how-to-use">How to use it in the kitchen</a></li>
              <li><a href="#frying">Can you fry with extra virgin olive oil</a></li>
              <li><a href="#how-much">How much to use per day</a></li>
              <li><a href="#storage">How to store it at home</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <h2 id="what-is-it">What extra virgin olive oil is</h2>

          <p>
            Extra virgin olive oil is oil pressed from olives using only mechanical force — no heat, no chemical solvents, no refining step afterward. It&apos;s the only vegetable oil that reaches your kitchen essentially unchanged from the moment it leaves the press, which is exactly what "extra virgin" is certifying.
          </p>
          <p>
            Olive trees are native to the Mediterranean, and Spain, Italy, Greece, and Tunisia still produce most of the world&apos;s supply. In the US, imports make up the vast majority of what&apos;s on the shelf, with a small but growing domestic industry centered in California. That import-heavy supply chain is part of why prices swing with currency and harvest conditions from one year to the next.
          </p>
          <p>
            What sets olive oil apart from other vegetable oils isn&apos;t just flavor — it&apos;s the fat profile and the bioactive compounds. Oleic acid, a monounsaturated fat, makes up 55% to 85% of the oil. Polyphenols, concentrated in good-quality extra virgin, carry documented anti-inflammatory and antioxidant effects in clinical research.
          </p>
          <p>
            The label matters more than the brand. A large share of the cheapest bottles at the grocery store aren&apos;t extra virgin at all — they&apos;re refined, blended, or lower grade. Knowing the categories before you buy saves money without giving up what actually matters.
          </p>

          {/* TYPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13562521/pexels-photo-13562521.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Basket of fresh, colorful olives at an outdoor market — varieties used for pressing oil"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: César Guillotel / Pexels</p>
          </div>

          <h2 id="types" className="img-above">Types of olive oil</h2>

          <p>
            The categories aren&apos;t about taste preference — they&apos;re about process and composition. Picking the right one for each use saves money without sacrificing quality where it counts.
          </p>

          <h3>Extra virgin</h3>
          <p>
            Free acidity below 0.8%, first cold pressing, no refining. This grade carries the most polyphenols and the most nutrients. Flavor ranges from mild and fruity to sharp and peppery, depending on the olive variety and harvest. It works for everything: raw, sautéing, and finishing.
          </p>

          <h3>Virgin</h3>
          <p>
            Acidity between 0.8% and 2%. Still mechanically pressed, still unrefined, but with fewer polyphenols than extra virgin. A solid choice for everyday cooking when a good extra virgin is too expensive to use in volume.
          </p>

          <h3>Refined and "pure" or "light" olive oil</h3>
          <p>
            Refined oil goes through a chemical process to strip out defects and high acidity, which also strips out most of the polyphenols. It&apos;s neutral in flavor and lighter in color, and it&apos;s usually blended with a bit of virgin oil and sold simply as "olive oil" or "pure olive oil" — no "extra virgin" on the label. "Light" olive oil refers to flavor, not calories; it&apos;s the same refined base. These are the cheapest bottles on the shelf.
          </p>

          {/* BENEFITS */}
          <h2 id="benefits">Benefits of extra virgin olive oil</h2>

          <p>
            The PREDIMED trial, published in the <em>New England Journal of Medicine</em>, followed more than 7,000 people at cardiovascular risk. Those on a Mediterranean diet supplemented with extra virgin olive oil saw roughly a 30% reduction in major cardiovascular events — heart attack, stroke, cardiovascular death — compared to a control group. It&apos;s one of the most cited nutrition studies of the past two decades.
          </p>
          <p>
            The main mechanism: oleic acid lowers LDL ("bad" cholesterol) without touching HDL ("good" cholesterol). The polyphenols — oleocanthal, oleuropein, hydroxytyrosol — carry anti-inflammatory and antioxidant activity. Oleocanthal in particular works similarly to low-dose ibuprofen, inhibiting some of the same inflammatory pathways.
          </p>
          <p>
            Extra virgin olive oil also supports gut health. It stimulates bile production, helps digest other fats, and favors beneficial gut bacteria. Recent research points to a protective effect on the intestinal lining with regular intake.
          </p>
          <p>
            One necessary caveat: the benefits come from regular use as part of a{' '}
            <a href="/en/funcionalidades/cardapio-semanal">varied diet across the week</a>,
            {' '}not from one dramatic drizzle. About two tablespoons a day is what the research ties to outcomes. It&apos;s not the only food that matters — it&apos;s one piece of a broader eating pattern.
          </p>

          <div className="blog-inline-cta">
            <p>Know what&apos;s in the pantry before you hit the store. <em>Mise makes it easy.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO USE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1239312/pexels-photo-1239312.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tomato salad dressed with olive oil — simple Mediterranean seasoning with fresh ingredients"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Dana Tentis / Pexels</p>
          </div>

          <h2 id="how-to-use" className="img-above">How to use olive oil in the kitchen</h2>

          <p>
            Olive oil works in practically every cooking context. Matching the right grade to the right use saves money without giving up quality where it actually shows.
          </p>

          <h3>Raw — salads and finishing</h3>
          <p>
            This is where extra virgin does the most work. A drizzle over salad, roasted vegetables, soup, bread, or a finished piece of meat or pasta. The polyphenols stay intact and the flavor comes through clean. It&apos;s the simplest, most efficient way to use good olive oil — and the one most people underuse because they only reach for it when a pan is involved.
          </p>

          <h3>Sautéing and medium heat</h3>
          <p>
            For garlic, onion, and tomato at sauté temperature (around 350°F), extra virgin olive oil holds up fine. You don&apos;t need the expensive bottle for this — a decent virgin olive oil does the job without waste.
          </p>

          <h3>Roasting</h3>
          <p>
            Vegetables, chicken, and fish roasted with olive oil come out with more depth than with a refined oil. A 400°F oven is well within the smoke point. The real issue is cost: if you&apos;re using volume, save the premium extra virgin for finishing and roast with a virgin-grade bottle instead.
          </p>

          {/* FRYING */}
          <h2 id="frying">Can you fry with extra virgin olive oil?</h2>

          <p>
            Yes. Extra virgin olive oil&apos;s smoke point falls somewhere between 374°F and 410°F (190°C–210°C), depending on acidity and quality. Home frying typically runs around 350°F–375°F. The oil handles it fine.
          </p>
          <p>
            The idea that it "turns toxic" when heated doesn&apos;t hold up under research. Extra virgin olive oil is actually more stable under heat than most refined seed oils, thanks to its monounsaturated fat and antioxidant content — and multiple peer-reviewed studies have found that oxidative stability, not smoke point, is the better predictor of how an oil performs when cooked. The "don&apos;t cook with EVOO" advice traces back to industrial seed oil marketing decades ago, not to actual food science.
          </p>
          <p>
            The one real reason to skip extra virgin for deep frying is cost — it&apos;s expensive to use in volume. For frequent frying, a{' '}
            <a href="/en/blog/oleo-de-canola">canola oil</a>{' '}
            or a refined olive oil does the same job for a lot less money. Save the good extra virgin for raw use and finishing.
          </p>

          {/* HOW MUCH */}
          <h2 id="how-much">How much to use per day</h2>

          <p>
            Research on cardiovascular benefits generally points to around 1 to 2 tablespoons a day (15–30 ml), with some trials using more. There&apos;s no solid evidence that more is better.
          </p>
          <p>
            Olive oil is calorie-dense — about 120 calories per tablespoon, same as any fat. If you already cook and dress food with it regularly, you&apos;re probably already in that range without tracking anything. If you&apos;re trying to add more, a drizzle on the salad and another to finish the plate is enough to start.
          </p>

          {/* STORAGE */}
          <h2 id="storage">How to store olive oil at home</h2>

          <p>
            Heat, light, and air are what ruin olive oil. Keep it in a cool, dark, sealed cabinet — away from the stove and windows with direct sun. The spot right next to the stove, where most people keep it, is close to the worst possible place. Heat cycles and temperature swings speed up oxidation and rancidity.
          </p>
          <p>
            The fridge isn&apos;t necessary and turns the oil cloudy and solid, which looks wrong but doesn&apos;t hurt the quality — it clears back up at room temperature. Refrigeration only makes sense if a bottle will stay open for more than two or three months in a very hot kitchen.
          </p>
          <p>
            Once opened, extra virgin olive oil holds its quality for up to about 6 months. Dark glass or tin protects it better than clear glass or plastic. It&apos;s worth logging the open date in your{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            — what matters isn&apos;t the expiration date on the label, it&apos;s when you actually started using the bottle.
          </p>
          <p>
            The half-full bottle that&apos;s been sitting on the shelf since last year has already passed its prime. It won&apos;t hurt you, but it&apos;s no longer the good bottle you paid for.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is it worth keeping on the list</h2>

          <p>
            Yes — if you cook at home with any regularity. It&apos;s one of the few ingredients where quality makes a real difference: between a good-harvest extra virgin and a cheap blend, what changes isn&apos;t just the taste, it&apos;s what the food actually does for you.
          </p>
          <p>
            For anyone building out a{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>,
            {' '}extra virgin olive oil belongs in the category of things worth always having on hand — not a luxury, a staple. A 500 ml bottle lasts weeks if you use it smartly: extra virgin raw and for finishing, a virgin-grade or other oil for cooking in volume.
          </p>
          <p>
            Olive oil on the list. Just don&apos;t store it next to the stove.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about olive oil</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between extra virgin and regular olive oil?</p>
              <p className="faq-a">
                The main difference is acidity and processing: extra virgin has free acidity below 0.8% and comes from the first cold pressing with no chemical refining, which keeps the polyphenols tied to its anti-inflammatory and antioxidant effects. Regular olive oil is refined and blended with a bit of virgin oil, so it has a higher smoke point but far fewer of those compounds.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you fry with extra virgin olive oil?</p>
              <p className="faq-a">
                Yes. Its smoke point runs between 374°F and 410°F — above home frying temperatures. The idea that it turns harmful when heated isn&apos;t backed by research. The main reason to avoid it for frequent frying is cost: it&apos;s pricey to use in volume. A virgin-grade oil or another stable oil is more economical for that.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much olive oil should you use per day?</p>
              <p className="faq-a">
                Research on cardiovascular benefits points to roughly 1 to 2 tablespoons a day (15–30 ml). There&apos;s no evidence more is better. It&apos;s calorie-dense — about 120 calories per tablespoon. If you already cook with it daily, you&apos;re likely in that range without measuring.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does olive oil lose its benefits when heated?</p>
              <p className="faq-a">
                Some polyphenols break down with intense heat, but the oil doesn&apos;t become harmful when cooked. Studies have found extra virgin holds up well against other oils in real cooking conditions. To get the most from the antioxidants, use some of it raw too — on salads and finished dishes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How can you tell if olive oil is good quality?</p>
              <p className="faq-a">
                Look for a harvest date rather than just a best-by date, dark glass or tin packaging, and a regional certification like PDO/PGI. High-polyphenol oils often have a peppery, slightly bitter finish — a good sign of freshness. Completely bland oil may be old or lower in the compounds that matter.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store olive oil so it stays fresh?</p>
              <p className="faq-a">
                Keep it in a cool, dark, sealed spot away from the stove and sunlight. The fridge isn&apos;t necessary — cold makes it cloudy but doesn&apos;t hurt quality. Once opened, extra virgin holds up for about 6 months. Dark glass or tin protects it better than clear glass or plastic.
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
                Creator of Mise. Kept the olive oil in the cabinet right next to the stove for years. Learned the hard way that&apos;s exactly where it shouldn&apos;t go.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Know what&apos;s in the pantry.<br />
              <em>Let Mise handle the rest.</em>
            </h2>
            <p>
              Mise connects your pantry, recipes, and shopping list in one place.
              The olive oil hits the list the moment it runs out — no relying on memory at the store.
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
          <a href="/" className="brand">
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
