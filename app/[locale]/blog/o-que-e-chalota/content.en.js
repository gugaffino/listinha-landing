import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Shallots: What They Are, and How They Differ from Onion',
  description: 'A shallot is a small, sweet member of the onion family loved in French cooking. What it is, how it differs from onion and garlic, and how to cook and store it.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-chalota',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-chalota',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chalota',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
    },
  },
  openGraph: {
    title: 'Shallots: What They Are, and How They Differ from Onion',
    description: 'A shallot is a small, sweet member of the onion family loved in French cooking. What it is, how it differs from onion and garlic, and how to cook and store it.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-chalota',
    images: [
      {
        url: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Colorful assortment of fresh vegetables at a produce market — the kind of stall where shallots turn up',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shallots: What They Are, and How They Differ from Onion',
    description: 'A shallot is a small, sweet member of the onion family loved in French cooking. What it is, how it differs from onion and garlic, and how to cook and store it.',
    images: ['https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a shallot the same thing as an onion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not quite. A shallot is a cultivated variety of the common onion (Allium cepa var. aggregatum), previously classified as its own species. It grows in clusters like garlic, has a smaller bulb, copper-purple skin, and a sweeter, more delicate flavor with a faint hint of garlic that regular onion does not have.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I substitute regular onion for shallot in a recipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can, but the result changes. Use about 3-4 shallots to replace 1 medium onion, since shallots are much smaller. The final flavor turns out stronger and less sweet with regular onion — that works fine in cooked dishes, but loses the delicacy that makes shallot the right call in cold sauces and vinaigrettes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do shallots make you cry less than onions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A little less, but they still release the compound that irritates eyes. The smaller bulb means less gas per cut, but anyone with high sensitivity will still feel it, especially cutting several at once. A sharp knife and a fast cut help more than switching ingredients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I find shallots and how much do they cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most regular grocery stores carry them near the onions, usually in a small mesh bag rather than loose. They typically cost more per pound than yellow onions — often $3-5 per pound versus $1-2 for onions — since shallots take longer to grow and yield less per plant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat shallot raw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and that is where it shines most. Thinly sliced into a vinaigrette, salad, or cold sauce, the sweet flavor comes through without the sharp bite of raw onion. That is the classic use in French cooking — cooked, it loses some of what makes it stand out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I store shallots so they last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Somewhere cool, dry, dark, and ventilated — never in the fridge. Stored that way, alongside onion and garlic and away from direct light, they last 3-4 weeks without softening or sprouting. Moisture and fridge cold speed up rot and make the bulb soften much faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between shallot and scallion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are different plants entirely. Scallion (green onion) is the thin, hollow-stemmed herb used chopped on top of a dish, with no meaningful bulb. Shallot is the whole bulb, used as a base ingredient — minced, sautéed, or sliced raw. They are not interchangeable in a recipe.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shallots: What They Are, and How They Differ from Onion',
  description: 'A shallot is a small, sweet member of the onion family loved in French cooking. What it is, how it differs from onion and garlic, and how to cook and store it.',
  image: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-chalota',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Shallot', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-chalota' },
  ],
}

export default function ShallotEn() {
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
            <li className="breadcrumb-current" aria-current="page">Shallot</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-26">Aug 26, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Shallots: the small onion French cooking refuses to give up
          </h1>
          <p className="blog-desc">
            It sits in the produce aisle next to the onions, looking like a miniature version of one. Most people have no idea what to do with it — until they try it in a vinaigrette and understand why no chef swaps it for regular onion. Here is what a shallot actually is, what it is for, and how to use it without wasting the bag.
          </p>

          <div className="answer-box">
            <p>
              <strong>A shallot</strong> (<em>Allium cepa var. aggregatum</em>) is a cultivated variety of the common onion, with a small bulb, copper-purple skin, and a sweeter, more delicate flavor with a faint hint of garlic.
              It grows in clusters like garlic but peels and cuts like an onion.
              In the kitchen, it takes over where regular onion would be too heavy for the dish: cold sauces, vinaigrettes, and raw preparations.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Colorful assortment of fresh vegetables at a produce market — the kind of stall where shallots turn up"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Muhamad Guruh Budi Hartono / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What a shallot is</a></li>
              <li><a href="#difference">Shallot vs. onion vs. garlic</a></li>
              <li><a href="#nutrition">Nutrition facts</a></li>
              <li><a href="#how-to-use">How to use it in the kitchen</a></li>
              <li><a href="#buying">Where to buy it and what it costs</a></li>
              <li><a href="#storing">How to store it</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/12955498/pexels-photo-12955498.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Assorted fresh vegetables on display at a market stall, including leafy greens and root vegetables"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Atlantic Ambience / Pexels</p>
          </div>

          <h2 id="what-is-it" className="img-above">What a shallot is</h2>

          <p>
            A shallot is a bulb plant in the <em>Allium</em> genus — the same family as onion, garlic, and leek. Botanically, it is now treated as a cultivated variety of the common onion, <em>Allium cepa var. aggregatum</em>. For decades it was classified as its own species, <em>Allium ascalonicum</em>, and that older name still shows up on some labels and in older references.
          </p>
          <p>
            The name traces back to Ascalon, an ancient port city on the eastern Mediterranean. Soldiers and traders passing through the region carried the bulb into Europe, and Old French turned "onion of Ascalon" into <em>eschaloigne</em>, which eventually became <em>échalote</em> — the root of "shallot" in English. It is a rare case of an ingredient that carries an entire city inside its own name.
          </p>
          <p>
            Physically, the bulb is small and elongated, with thin copper-purple skin. Unlike onion, which grows as a single bulb, shallots multiply in clusters — split one in half and you often find two or three overlapping "cloves," similar to garlic. The flavor is sweeter and less sharp than onion, with a subtle garlic note underneath.
          </p>
          <p>
            It is a foundational ingredient in classic French cooking, showing up in sauces, vinaigrettes, and delicate sautés where regular onion would come across as too coarse. Outside France, it shows up more and more in Southeast Asian cooking — fried until crisp, it is a classic finishing touch on Vietnamese and Thai dishes.
          </p>

          {/* DIFFERENCE */}
          <h2 id="difference">Shallot vs. onion vs. garlic</h2>

          <p>
            All three plants belong to the same botanical genus, but they play different roles in the kitchen — and swapping one for another without adjusting changes the whole dish.
          </p>
          <p>
            <strong>Onion</strong> is the workhorse: stronger, sharper, and it mellows out a lot once cooked. It works as the base of nearly any sauté. <strong>Garlic</strong> is more concentrated still, used in small amounts, with a flavor that can take over the dish if overdone. <strong>Shallot</strong> sits in between: milder than both, sweeter, with just a whisper of garlic underneath.
          </p>
          <p>
            In practice: when a recipe calls for delicacy — a butter sauce, a vinaigrette, a raw preparation — shallot delivers flavor without taking over. When it calls for a sturdy base for a long-simmered stew, regular onion does the job better and costs less. Mixing the two up will not ruin the dish, but it changes the outcome — which explains why plenty of people buy shallots, use them like regular onion, and conclude they are "not that special." For the more assertive relative in the family, see{' '}
            <a href="/en/blog/o-que-e-alho">what garlic is</a> and how it behaves in the kitchen.
          </p>

          {/* NUTRITION */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Person chopping vegetables on a cutting board while preparing a meal in a home kitchen"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Amina Filkins / Pexels</p>
          </div>

          <h2 id="nutrition" className="img-above">Nutrition facts</h2>

          <p>
            Shallots are a source of vitamin C, vitamin B6, folate, potassium, and manganese, plus antioxidant flavonoids — the same class found in higher concentration in red onion skin. A 1oz serving (roughly one medium shallot) runs around 20 calories.
          </p>
          <p>
            The same caveat applies here as with any ingredient used in small amounts: shallot goes into a recipe by the unit, not by the cup — it is not eaten in quantities that meaningfully shift a dish's nutrition profile. Its real value is flavor, not supplementation — it contributes as part of a varied diet, not as a replacement for the vegetables and protein doing the actual nutritional work.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use shallot in the kitchen</h2>

          <p>
            How you use it changes depending on whether it is raw or cooked — and that is where most home cooks go wrong treating it as a straight swap for onion.
          </p>
          <p>
            <strong>Vinaigrettes and cold sauces.</strong> Mince it fine, let it sit 5-10 minutes in the vinegar or lemon juice before whisking in the oil — that softens the residual sharpness. This is where shallot differs most from regular onion: the flavor is there without taking over the salad.
          </p>
          <p>
            <strong>Butter sauces.</strong> Sautéed low and slow until translucent, never browned, it is the classic base for French sauces like beurre blanc. Shallot's sweetness balances the acidity of white wine without competing with the butter.
          </p>
          <p>
            <strong>Roasted whole.</strong> Wrapped in foil with a drizzle of olive oil, skin on, and roasted at 350°F for 40 minutes. It turns soft and sweet, almost caramelized inside — a simple side for grilled meat.
          </p>
          <p>
            <strong>Crispy fried.</strong> Sliced paper-thin and fried in hot oil until golden, it becomes a finishing touch for soups, rice, and Southeast Asian-inspired dishes. Stored in a sealed container, it keeps for a few days and adds texture with almost no effort.
          </p>
          <p>
            A practical substitution rule: 3-4 medium shallots roughly equal 1 medium onion by volume. If a recipe does not call for shallot for a specific reason — texture, flavor, tradition of the dish — swapping in regular onion works fine in most cooked sautés.
          </p>

          {/* BUYING */}
          <h2 id="buying">Where to buy it and what it costs</h2>

          <p>
            Shallots are a standard item at most regular grocery stores now, usually sold in a small mesh bag near the onions and garlic, though loose bulbs show up at farmers markets and specialty grocers too.
          </p>
          <p>
            Price typically runs $3-5 per pound, compared to $1-2 for yellow onions. The gap reflects lower yield per plant and a longer growing cycle — shallots simply take more effort to produce at scale than a standard onion crop.
          </p>
          <p>
            When choosing, look for firm bulbs with no soft spots or visible sprouting. Skin that is too dry and papery, or damp and slimy, both signal an old shallot. Since the per-pound cost is higher, it is worth buying just what a recipe calls for instead of stocking up the way you might with onion and garlic.
          </p>

          {/* STORING */}
          <h2 id="storing">How to store shallots</h2>

          <p>
            Like onion and garlic, shallots do not belong in the fridge. Moisture and cold speed up rot and soften the bulb much faster than room temperature storage does.
          </p>
          <p>
            A cool, dry, dark, ventilated spot works best — away from direct light and away from other produce that releases ethylene, like potatoes, which speeds up sprouting. Stored that way, in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>, alongside onion and garlic, shallots keep for 3-4 weeks without losing quality.
          </p>
          <p>
            Once cut, it does go in the fridge: sealed in a container, it lasts 3-4 days. Past that, it starts losing texture and picking up a bitter edge — better to cut only what the day's recipe actually needs. If shallot becomes a regular in your rotation, it fits easily into a{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly meal plan</a> built around recurring sauces and vinaigrettes.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about shallots</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is a shallot the same thing as an onion?</p>
              <p className="faq-a">
                Not quite. It is a cultivated variety of the common onion, with a smaller bulb, copper-purple skin, and a sweeter, more delicate flavor with a faint garlic hint. It grows in clusters like garlic but cuts like onion.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can I substitute regular onion for shallot?</p>
              <p className="faq-a">
                Yes. Use about 3-4 shallots to replace 1 medium onion. The result turns out stronger and less sweet — that works in cooked dishes, but loses delicacy in cold sauces and vinaigrettes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do shallots make you cry less than onions?</p>
              <p className="faq-a">
                A little less, but they still irritate the eyes. The smaller bulb releases less gas per cut, though anyone with high sensitivity will still feel it, especially cutting several at once.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Where do I find shallots and how much do they cost?</p>
              <p className="faq-a">
                Most grocery stores carry them near the onions, usually in a small bag. They typically run $3-5 per pound, more than regular onion, since they take longer to grow and yield less per plant.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat shallot raw?</p>
              <p className="faq-a">
                Yes, and that is where it shines most. Thinly sliced into vinaigrettes and cold sauces, the sweet flavor comes through without the sharp bite of raw onion — the classic use in French cooking.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do I store shallots so they last?</p>
              <p className="faq-a">
                Somewhere cool, dry, dark, and ventilated, never in the fridge. Stored that way, they last 3-4 weeks. Moisture and fridge cold speed up rot and sprouting.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the difference between shallot and scallion?</p>
              <p className="faq-a">
                They are different plants. Scallion is the thin herb used chopped on top of a dish, with no meaningful bulb. Shallot is the whole bulb, used as a base ingredient. They are not interchangeable.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Founder of Mise. Grocery shops every week and still forgets an ingredient sometimes.
                Built the app to fix the problem he had for himself in the kitchen.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">Shallot in the pantry. Vinaigrette ready in five minutes.</p>
            <p className="blog-cta-desc">
              With Mise, you know what is in your <a href="/en/funcionalidades/despensa">pantry</a> before you head to the store — and build your{' '}
              <a href="/en/funcionalidades/lista-de-compras">shopping list</a> without forgetting what ran out.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Start free
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Back to top">Back to top ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Made with care in Brazil.</p>
          <nav className="footer-links" aria-label="Footer links">
            <a href="/en/blog" className="footer-link">Blog</a>
            <a href="/en/funcionalidades" className="footer-link">Features</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
