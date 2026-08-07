import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Fresh vs. Dried Oregano: How to Use, Store, and Substitute',
  description: 'Fresh and dried oregano are not just different strengths — they behave differently in a dish. The 3:1 substitution ratio, how much to use, and how to store oregano so it keeps its punch.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-o-oregano',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-o-oregano',
      en: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-o-oregano',
      es: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-o-oregano',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-o-oregano',
    },
  },
  openGraph: {
    title: 'Fresh vs. Dried Oregano: How to Use, Store, and Substitute',
    description: 'Fresh and dried oregano are not just different strengths — they behave differently in a dish. The 3:1 substitution ratio, how much to use, and how to store oregano so it keeps its punch.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-o-oregano',
    images: [
      {
        url: 'https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sprigs of fresh oregano with green leaves on a rustic wooden surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresh vs. Dried Oregano: How to Use, Store, and Substitute',
    description: 'Fresh and dried oregano are not just different strengths — they behave differently in a dish. The 3:1 substitution ratio, how much to use, and how to store oregano so it keeps its punch.',
    images: ['https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is oregano used for besides pizza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oregano works in tomato sauce, marinated or roasted chicken, baked fish, roasted vegetables, soups, and vinaigrettes. It is far more versatile than the shaker most people only reach for on pizza night.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between fresh and dried oregano?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dried oregano is more concentrated and works best in long cooks, since heat releases its aroma gradually. Fresh oregano is milder and works better as a finishing touch or raw in salads. One tablespoon of fresh oregano is roughly equal to one teaspoon of dried — about a 3:1 ratio.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much dried oregano should I use in pizza sauce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One teaspoon of dried oregano for a sauce that covers a 4-serving pizza is a solid starting point. Pizza sauce is forgiving, so you can adjust to taste without much risk of overdoing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I put raw dried oregano straight on a salad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can, but the texture tends to be unpleasant — dried oregano stays gritty without heat to soften it. Fresh oregano works much better raw. Or dissolve the dried oregano into the olive oil for your vinaigrette first — the oil hydrates it and spreads the flavor more evenly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if my dried oregano has gone stale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rub a pinch between your fingers and smell it. If there is barely any aroma, it has lost its punch — it can still look completely normal and season nothing. In a sealed jar in the pantry, the aroma starts fading after about a year and is mostly gone after 2 to 3 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can oregano replace basil in a recipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not directly. The flavors are different: basil is brighter and more floral, oregano is earthier and more assertive. In a hearty tomato sauce, oregano holds its own. But in dishes that depend on basil’s fresh, sweet edge — like caprese or pesto — swapping it out will change the dish.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fresh vs. Dried Oregano: How to Use, Store, and Substitute',
  description: 'Fresh and dried oregano are not just different strengths — they behave differently in a dish. The 3:1 substitution ratio, how much to use, and how to store oregano so it keeps its punch.',
  image: 'https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-07',
  dateModified: '2026-08-07',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/para-que-serve-o-oregano',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Fresh vs. Dried Oregano', item: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-o-oregano' },
  ],
}

export default function OreganoEn() {
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
            <li className="breadcrumb-current" aria-current="page">Fresh vs. Dried Oregano</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-07">Aug 7, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Oregano in the Kitchen: Fresh vs. Dried, and How Much to Use
          </h1>
          <p className="blog-desc">
            You shake it onto pizza without thinking twice. But ask what oregano is actually good for beyond that, and most people stall. It is more versatile than the jar suggests — and it behaves differently depending on how you use it.
          </p>

          <div className="answer-box">
            <p>
              <strong>Oregano</strong> is a Mediterranean herb used mainly for seasoning.
              In the kitchen, it flavors sauces, pizza, meat, fish, and roasted vegetables.
              The dried version is far more concentrated than fresh — and the two behave differently depending on heat and cook time.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Sprigs of fresh oregano with green leaves on a rustic wooden surface"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-oregano">What oregano is</a></li>
              <li><a href="#what-its-for">What it is used for in the kitchen</a></li>
              <li><a href="#fresh-vs-dried">Fresh or dried: which one, and when</a></li>
              <li><a href="#how-much">How much oregano to use per dish</a></li>
              <li><a href="#how-to-store">How to store it at home</a></li>
              <li><a href="#worth-keeping">Is it worth keeping on hand</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS OREGANO */}
          <h2 id="what-is-oregano">What oregano is</h2>

          <p>
            Oregano (<em>Origanum vulgare</em>) is a perennial herb in the mint family. Native to the Mediterranean, it has a strong, slightly bitter smell with a warmth that lingers on the palate after you swallow. It became a pantry staple in the US largely through Italian-American cooking — it arrived with pizza and never left the spice rack.
          </p>
          <p>
            The most common form on the shelf is dried oregano in a jar or shaker — the one you tap over pizza on autopilot. But there is also fresh oregano, sold in small bunches at most grocery stores, and it behaves in a completely different way.
          </p>
          <p>
            The plant has small, oval, dark-green leaves. Its aroma comes from essential oils, mainly carvacrol and thymol — the same compounds that give thyme its similar smell. It is a cooking herb, not a finishing one: the longer it sits in heat, the more its flavor develops.
          </p>
          <p>
            Greek oregano has a sharper, more intense flavor than the Italian or Mexican varieties. What you buy at a regular US grocery store usually will not specify which one it is on the label — it is often a blend of Mediterranean types, which works fine for everyday cooking.
          </p>

          {/* WHAT ITS FOR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Dried oregano and other herbs in small ceramic bowls on a wooden surface"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-its-for" className="img-above">What oregano is used for in the kitchen</h2>

          <p>
            Oregano is an aromatic seasoning. It adds an herbal backbone to dishes that need structure. That is different from salt, which sharpens what is already there, and different from chili, which brings heat. Oregano adds a layer of flavor that was not there before.
          </p>
          <p>
            It pairs well with meat, tomato, and olive oil. That combination is exactly why pizza became oregano&apos;s calling card in the US — all three show up on the same slice.
          </p>

          <p>Where oregano genuinely earns its place:</p>
          <ul className="item-list">
            <li>Tomato sauce — pizza, pasta, shakshuka</li>
            <li>Marinated or grilled chicken</li>
            <li>Red meat, roasted or grilled</li>
            <li>White fish, baked with olive oil</li>
            <li>Roasted vegetables — eggplant, zucchini, onion</li>
            <li>Vegetable and bean soups</li>
            <li>Vinaigrettes and olive-oil-based salad dressings</li>
          </ul>

          <p>Where it usually does not work:</p>
          <ul className="item-list">
            <li>Delicate dishes — raw fish, carpaccio</li>
            <li>Recipes that rely on freshness, like ceviche or a simple green salad</li>
            <li>As a direct swap for cilantro or parsley in dishes built around fresh green herbs</li>
          </ul>

          <p>
            One practical note: dried oregano rubbed directly onto raw protein without a marinade tends to burn before the meat finishes cooking. If you are grilling chicken with oregano, work it into a marinade first — do not sprinkle it straight into a hot pan.
          </p>

          {/* FRESH VS DRIED */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3944100/pexels-photo-3944100.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Baked pizza with tomato sauce, cheese, and fresh herbs seen from above"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="fresh-vs-dried" className="img-above">Fresh or dried: which one to use, and when</h2>

          <p>
            The main difference between fresh and dried oregano is not intensity. It is flavor character.
          </p>
          <p>
            Dried oregano has gone through dehydration, which concentrates its essential oils. The result is a sharper, more pungent flavor. It works well in long cooks — heat releases the aroma gradually over time. That is why it belongs in pizza sauce, chicken marinade, or beans early in the pot.
          </p>
          <p>
            Fresh oregano is milder and slightly grassy. It loses part of its aroma under prolonged heat. It works best added at the end of cooking, or raw — in salads, as a finishing touch on hot dishes, in cold sauces and dips.
          </p>
          <p>
            The conversion between the two: 1 tablespoon of fresh oregano is roughly equal to 1 teaspoon of dried — close to a 3:1 ratio. Using the amount called for fresh in a recipe that actually calls for dried will taste flat. And the reverse — dried in a recipe that calls for fresh — will overpower the dish.
          </p>
          <p>
            A simple rule of thumb: if the dish cooks longer than 20 minutes, use dried. If it is a finishing touch or a cold dish, use fresh.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t take up this much headspace. <em>Mise handles it.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW MUCH */}
          <h2 id="how-much">How much oregano to use per dish</h2>

          <p>
            Oregano&apos;s flavor takes over when overdone. But it is hard to overdo in pizza and tomato sauce — they are robust enough to carry it. In more delicate dishes, too much reads as bitterness.
          </p>

          <p>Reference amounts for dried oregano:</p>
          <ul className="item-list">
            <li><strong>Pizza or pasta sauce (4 servings):</strong> 1 teaspoon</li>
            <li><strong>Marinated chicken (per piece):</strong> ½ to 1 tablespoon</li>
            <li><strong>Roasted vegetables (per sheet pan):</strong> 1 teaspoon</li>
            <li><strong>Beans or soup (2-quart pot):</strong> ½ teaspoon</li>
            <li><strong>Vinaigrette (for 4 salad servings):</strong> ¼ teaspoon</li>
          </ul>

          <p>
            For pizza, "to taste" is what everyone does — and it works. Pizza is the dish that tolerates the most oregano. No pizza has ever been ruined by too much of it. It is the one "to taste" in the kitchen that does not need calibration.
          </p>
          <p>
            For fresh oregano, the numbers change — multiply by 3. A dish that calls for 1 teaspoon of dried will need a full tablespoon of fresh.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store oregano at home</h2>

          <p>
            Dried oregano is easy to keep. Its three enemies are moisture, direct heat, and light. In a tightly sealed glass jar, in a pantry or cabinet, it lasts 1 to 3 years. Keep it away from the stove — steam and temperature swings weaken the aroma faster than most people expect.
          </p>
          <p>
            To test if it is still good: rub a pinch between your fingers and smell it. If the scent is faint or nearly gone, it is done — it can still look completely normal and season nothing. After 2 years in a jar or shaker, the odds of it still carrying any aroma are low.
          </p>
          <p>
            That jar that has sat on the shelf since the last time someone made homemade pizza. That one.
          </p>
          <p>
            Fresh oregano is more demanding. Wrapped in a slightly damp paper towel and kept in a bag or container in the fridge, it lasts 5 to 7 days. If you bought more than you will use in a week, freeze it: wash, dry thoroughly, chop coarsely, and pack into an ice cube tray with a drizzle of olive oil. In the freezer it keeps for up to 6 months — and goes straight from the tray to the pan with no need to thaw.
          </p>

          {/* WORTH KEEPING */}
          <h2 id="worth-keeping">Is oregano worth keeping on hand</h2>

          <p>
            Yes — dried oregano is one of the best value-for-money seasonings in the pantry. Cheap, long-lasting, and you use very little per dish. It is not an occasional ingredient; it is the kind of pantry staple you only notice when it runs out.
          </p>
          <p>
            That is different from saffron, which costs a lot and goes in specific dishes. Or curry paste, which shows up when you have a plan for it. Oregano goes on the{' '}
            <a href="/en/blog/lista-de-compras-mercado">grocery list</a>{' '}
            right alongside salt, pepper, and garlic — you do not think twice about it.
          </p>
          <p>
            The one time it is not worth buying more: when what is already in the pantry has passed the 2-year mark. In that case, toss it and get a fresh jar. Keeping scentless oregano on the shelf is holding onto the illusion that you have oregano. The chicken will come out bland, and you will blame the recipe.
          </p>
          <p>
            Fresh oregano is worth it when you will actually use it in dishes where it shines — finishing pasta, cold sauces, Mediterranean plates. Buying a whole bunch to use once on a homemade pizza is a good way to throw out the rest.
          </p>
          <p>
            Dried oregano belongs on the running{' '}
            <a href="/en/funcionalidades/despensa">pantry list in Mise</a>. Fresh goes on the list only when a recipe calls for it. That order matters.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about oregano</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What is oregano used for besides pizza?</p>
              <p className="faq-a">
                It works in tomato sauce, marinated chicken, baked fish, roasted vegetables, soups, and vinaigrettes. It is far more versatile than the shaker most people only reach for on pizza night.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the difference between fresh and dried oregano?</p>
              <p className="faq-a">
                Dried is more concentrated and works best in long cooks. Fresh is milder and better as a finishing touch or raw in salads. One tablespoon of fresh is roughly equal to one teaspoon of dried.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much dried oregano should I use in pizza sauce?</p>
              <p className="faq-a">
                One teaspoon of dried oregano for a sauce covering a 4-serving pizza is a solid starting point. Pizza sauce is forgiving — you can adjust to taste without much risk of overdoing it.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can I put raw dried oregano straight on a salad?</p>
              <p className="faq-a">
                You can, but the texture tends to be unpleasant straight on greens. Fresh oregano works much better raw. Or dissolve the dried oregano into the vinaigrette&apos;s olive oil first — it hydrates and spreads the flavor more evenly.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How can I tell if my oregano has gone stale?</p>
              <p className="faq-a">
                Rub a pinch between your fingers and smell it. If there is barely any aroma left, it has lost its punch — it can look completely normal and still season nothing. In a sealed jar, the aroma fades starting around 1 year and is mostly gone after 2 to 3 years.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can oregano replace basil in a recipe?</p>
              <p className="faq-a">
                Not directly. Basil is brighter and more floral; oregano is earthier and more assertive. In a hearty tomato sauce, oregano holds its own. But in dishes built around basil&apos;s fresh edge — like caprese or pesto — swapping it out changes the dish.
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
                Creator of Mise. Has had oregano in the pantry longer than he can remember buying it. Smelled it while writing this — still good.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Know what&apos;s in the pantry.<br />
              <em>Let Mise handle the rest.</em>
            </h2>
            <p>
              Pantry, recipes, and grocery list in one place.
              The oregano won&apos;t vanish from the shelf without you noticing — and when it runs out, it is already on the list.
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
