import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Turmeric: What It Actually Does, and How to Use It Right',
  description: 'Turmeric is the earthy yellow spice behind curry and golden milk. What curcumin really does, why black pepper matters for absorption, and how to cook, buy, and store it.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-curcuma',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-curcuma',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-curcuma',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-curcuma',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-curcuma',
    },
  },
  openGraph: {
    title: 'Turmeric: What It Actually Does, and How to Use It Right',
    description: 'Turmeric is the earthy yellow spice behind curry and golden milk. What curcumin really does, why black pepper matters for absorption, and how to cook, buy, and store it.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-curcuma',
    images: [
      {
        url: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Bright orange-yellow turmeric powder on a wooden spoon over a dark surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turmeric: What It Actually Does, and How to Use It Right',
    description: 'Turmeric is the earthy yellow spice behind curry and golden milk. What curcumin really does, why black pepper matters for absorption, and how to cook, buy, and store it.',
    images: ['https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is turmeric the same thing as curry powder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Turmeric is a single spice — a dried, ground root. Curry powder is a blend that usually includes turmeric alongside coriander, cumin, fenugreek, chili, and other spices. Turmeric gives curry powder most of its yellow color, but curry powder has a much more complex, spicier flavor. If a recipe calls for turmeric specifically, curry powder is not a clean substitute — it brings extra flavors that were not asked for.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much turmeric per day is safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a culinary spice, 1-3 teaspoons a day is common and safe for most people. High-dose curcumin supplements (above 1-2g/day for extended periods) have been linked to digestive issues and, in some 2024 case reports, to liver strain — almost always tied to concentrated supplements, not food-level use. Anyone taking blood thinners, with gallstones, or with liver conditions should check with a doctor before using high-dose supplements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does turmeric powder have the same benefits as fresh turmeric root?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fresh root has more of its volatile compounds intact, which get lost in drying and grinding. Powder, on the other hand, is more concentrated in curcumin by weight. In everyday cooking, both work well. Fresh root has a brighter, sharper flavor and is great grated straight into a dish. Powder is more practical and easier to store.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does turmeric stain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, badly. Curcumin is an intense pigment that soaks into fabric, wood, and porous surfaces on contact. Use a stainless-steel spoon, not wood. Wear something you do not mind ruining. If it stains, treat it immediately with cold water and soap — hot water sets the stain permanently. Sun exposure tends to fade it over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is turmeric safe during pregnancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In normal culinary amounts, as a seasoning in food, turmeric is considered safe during pregnancy. The concern is with supplements: high doses of curcumin can potentially stimulate uterine contractions. Pregnant people should avoid curcumin supplements and check with a doctor before using amounts beyond what a normal recipe calls for.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does turmeric lose its properties when cooked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some volatile compounds and antioxidants degrade with prolonged heat. But curcumin itself is fairly heat-stable — especially in preparations that include fat, which also boosts absorption. Golden milk and curry, for example, cook with fat and hold onto most of the benefits well. Avoid very long boiling without liquid, which tends to degrade it more.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Turmeric: What It Actually Does, and How to Use It Right',
  description: 'Turmeric is the earthy yellow spice behind curry and golden milk. What curcumin really does, why black pepper matters for absorption, and how to cook, buy, and store it.',
  image: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-29',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-curcuma',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Turmeric', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-curcuma' },
  ],
}

export default function TurmericEn() {
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
            <li className="breadcrumb-current" aria-current="page">Turmeric</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-29">May 29, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Turmeric: What It Is, What It Actually Does, and How to Cook With It
          </h1>
          <p className="blog-desc">
            The earthy yellow spice behind curry, golden milk, and half the yellow rice in the world. Everyone has seen it, fewer people know why it needs black pepper to work, and even fewer know how to store it so it does not go stale in six months. Here is the useful version — no supplement-aisle hype, no vague &quot;superfood&quot; talk.
          </p>

          <div className="answer-box">
            <p>
              <strong>Turmeric</strong> (<em>Curcuma longa</em>) is a root in the ginger family, native to South Asia, that gets boiled, dried, and ground into the bright orange-yellow powder that colors curry and rice.
              Its main active compound is <strong>curcumin</strong>, an anti-inflammatory and antioxidant polyphenol studied for decades.
              To actually get absorbed by the body, curcumin needs two things working alongside it: black pepper and fat.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Bright orange-yellow turmeric powder on a wooden spoon over a dark surface"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: ClickerHappy / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What turmeric is</a></li>
              <li><a href="#turmeric-vs-curry">Turmeric vs. curry powder (and &quot;Indian saffron&quot;)</a></li>
              <li><a href="#curcumin">Curcumin — and why black pepper matters</a></li>
              <li><a href="#benefits">Benefits backed by evidence</a></li>
              <li><a href="#how-to-use">How to use turmeric in the kitchen</a></li>
              <li><a href="#buying-storing">How to buy and store it</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6220710/pexels-photo-6220710.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh turmeric root next to a bowl of ground yellow powder — root compared to ground spice"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Karl Solano / Pexels</p>
          </div>

          <h2 id="what-is-it" className="img-above">What turmeric is</h2>

          <p>
            Turmeric (<em>Curcuma longa</em>) is a flowering plant in the ginger family (<em>Zingiberaceae</em>), native to South Asia — India is the world&apos;s dominant producer, responsible for more than 75% of global supply. The part that gets used is the rhizome: an underground root that, once harvested, boiled, dried, and ground, becomes the bright orange-yellow powder everyone recognizes.
          </p>
          <p>
            That intense color is the most recognizable thing about it. It comes from curcumin, a pigment that stains almost anything it touches — a wooden cutting board, a porous spoon, a shirt. This is not a minor warning: anyone who cooks with turmeric learns it the first time, usually with a white sleeve.
          </p>
          <p>
            The flavor is earthy, slightly bitter, and warm — more depth than heat. It works as a base note in dishes that need body, like curry, stews, and soups. In small amounts, it is nearly undetectable on the palate but very visible in color.
          </p>
          <p>
            In most grocery stores, it shows up in three forms: powder (the most common and practical), fresh root (increasingly available at larger supermarkets and specialty stores), and capsules as a supplement. For everyday cooking, powder covers everything you need.
          </p>

          {/* TURMERIC VS CURRY POWDER */}
          <h2 id="turmeric-vs-curry">Turmeric vs. curry powder (and why people call it &quot;Indian saffron&quot;)</h2>

          <p>
            Two mix-ups show up constantly. The first: turmeric and curry powder are not the same thing. Turmeric is a single spice — just the dried, ground root. Curry powder is a blend that usually includes turmeric plus coriander, cumin, fenugreek, chili, and other spices layered on top. Turmeric gives curry powder most of its color, but curry powder has a much louder, spicier, more complex flavor profile that turmeric alone does not have.
          </p>
          <p>
            The second mix-up is older: turmeric is sometimes nicknamed &quot;Indian saffron&quot; or &quot;poor man&apos;s saffron.&quot; The name is misleading. Real saffron (<em>Crocus sativus</em>) is the dried stigma of a crocus flower, hand-harvested one strand at a time — it takes roughly 150,000 flowers to produce one kilogram, which is why saffron is one of the most expensive spices in the world, often $2,000-$10,000 per pound. Turmeric costs a few dollars an ounce, comes from a root in the ginger family, and tastes nothing like saffron&apos;s floral, honeyed notes. They share only one thing: both turn a dish yellow.
          </p>
          <p>
            Practical rule: if a recipe just says &quot;curry powder,&quot; it is not turmeric on its own — expect other spices in the mix. If a recipe specifically says &quot;turmeric,&quot; do not substitute curry powder without accounting for the extra flavors it brings.
          </p>

          {/* CURCUMIN */}
          <h2 id="curcumin">Curcumin — and why black pepper matters</h2>

          <p>
            Curcumin is the main polyphenol compound in turmeric, responsible for both the color and the effects studied in research. It makes up roughly 3-5% of turmeric powder by weight. It is the part that matters for anti-inflammatory and antioxidant activity.
          </p>
          <p>
            The catch: curcumin&apos;s oral bioavailability is low. Consumed on its own, most of it passes through the digestive tract without being absorbed. Very little makes it into the bloodstream — which limits any systemic effect.
          </p>
          <p>
            The fix comes from black pepper. Piperine, the active compound in black pepper, inhibits enzymes that break curcumin down in the gut and can boost its absorption by up to 2,000%. This was not a 20th-century lab discovery — it has been built into traditional Indian curry for thousands of years. The exact mechanism was not understood until much later, but the practical result was already there.
          </p>
          <p>
            The second ally is fat. Curcumin is fat-soluble — it dissolves in fat, not water. Consumed alongside olive oil, coconut milk, butter, or another fat source, absorption goes up significantly. That is why golden milk made with full-fat coconut milk works better than just stirring turmeric into hot water.
          </p>
          <p>
            The practical takeaway: turmeric plus black pepper plus fat. All three together maximize what actually reaches your system.
          </p>

          {/* BENEFITS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/18705171/pexels-photo-18705171.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cup of golden milk with turmeric and cinnamon — a natural anti-inflammatory drink"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Stefan Heurterre / Pexels</p>
          </div>

          <h2 id="benefits" className="img-above">Benefits backed by evidence</h2>

          <p>
            The list of benefits attributed to turmeric online is generous to the point of being unreliable. Here is what actually holds up in published research — with the important caveat that most of the studies use concentrated curcumin supplements, not the amount of spice you get from cooking.
          </p>
          <p>
            <strong>Anti-inflammatory.</strong> This is the best-documented benefit. Curcumin inhibits several inflammatory pathways in the body, including COX-2 — the same pathway common anti-inflammatory drugs target. Clinical studies show improvement in arthritis, joint pain, and muscle soreness with curcumin supplements (400-1,200mg/day). The spice itself delivers much smaller doses, but regular use over time still contributes.
          </p>
          <p>
            <strong>Antioxidant.</strong> Curcumin neutralizes free radicals and, unlike many antioxidants, also boosts the body&apos;s own antioxidant enzymes — like superoxide dismutase. That is a double effect: it clears damage and increases the body&apos;s own capacity to clear it.
          </p>
          <p>
            <strong>Cardiovascular health.</strong> Research links regular curcumin intake to improved lipid profiles (lower LDL, higher HDL) and better vascular endothelial function. The effects show up most clearly in studies using high-dose supplements, not food-level amounts.
          </p>
          <p>
            The honest caveat, on both ends: 1 teaspoon of turmeric powder carries about 200mg of raw curcumin — and with low bioavailability without pepper and fat, far less than that actually reaches your bloodstream. The documented health benefits use concentrated doses well above what cooking delivers. Daily turmeric in food is a reasonable part of a broader anti-inflammatory diet — it is not medicine. On the flip side, be cautious with unregulated high-dose supplements: a handful of 2024 case reports linked concentrated curcumin supplements (not culinary turmeric) to liver strain in a small number of people, especially at doses well above what any recipe uses. If you take supplements regularly, that is worth mentioning to a doctor — food-level turmeric is not the same risk category.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use turmeric in the kitchen</h2>

          <p>
            Turmeric fits easily into a routine because it works in dishes you are probably already making — you do not need a new recipe to include it.
          </p>
          <p>
            <strong>Yellow rice.</strong> 1 teaspoon of turmeric powder per cup of rice, added to the garlic-and-onion sauté before the water goes in. The oil in the sauté helps curcumin absorption. Good color, mild flavor. It is the simplest way to work turmeric into the week without changing a single habit.
          </p>
          <p>
            <strong>Soups and broths.</strong> Dissolves well in hot liquid with some fat. Works especially well with potato, carrot, squash, and ginger — ingredients with a compatible earthy flavor. Use 1/2-1 teaspoon per quart of broth, along with a drizzle of olive oil or coconut milk.
          </p>
          <p>
            <strong>Golden milk.</strong> 1 cup of warmed plant-based milk (coconut or almond work well), 1 teaspoon of turmeric, a pinch of black pepper, cinnamon to taste, honey optional. Do not boil it — heat gently on low. Turmeric plus pepper plus coconut milk&apos;s fat is the full absorption trio. It is an acquired taste, but people who get used to it do not go back.
          </p>
          <p>
            <strong>Chicken and fish.</strong> Sprinkle it on with your other seasoning before roasting or grilling. It pairs well with cilantro, cumin, and chili. Turmeric, garlic, lemon, and olive oil on chicken, straight into the oven, is simple and reliably good.
          </p>
          <p>
            <strong>Scrambled eggs and omelets.</strong> 1/4 teaspoon stirred directly into the beaten eggs. The color turns out great and the flavor stays subtle. Add black pepper alongside it — it doubles as seasoning and improves absorption.
          </p>
          <p>
            Stain tip: use a stainless-steel spoon, not wood. If it stains a countertop or cutting board, hit it with lemon and salt right away and rinse with cold water. Never hot water — that sets the stain.
          </p>

          {/* BUYING AND STORING */}
          <h2 id="buying-storing">How to buy and store turmeric</h2>

          <p>
            Turmeric powder is in pretty much every grocery store, in the spice aisle. Specialty and natural food stores usually carry a wider selection, but standard supermarket turmeric handles everyday cooking just fine.
          </p>
          <p>
            Typical price: around $3-6 for a 1.5-2oz jar at a regular grocery store. Buying larger bags (8oz or more) at a specialty or bulk store brings the cost per ounce down considerably. There is no meaningful quality difference between brands for cooking — what matters is freshness and a vivid color. Dull, pale-yellow powder is old turmeric that has lost potency.
          </p>
          <p>
            Fresh root shows up at farmers markets, specialty grocers, and some larger supermarkets. It has a brighter flavor and extra compounds, but needs to be grated fresh and does not last as long (refrigerated, roughly 3 weeks). For everyday use, powder is more practical.
          </p>
          <p>
            How to store it: a sealed glass jar, away from light, heat, and moisture — especially away from stove steam. Transfer it out of a paper packet into glass as soon as you open it. Sealed, turmeric keeps for 2-3 years. Opened, it loses aroma and color within 6-12 months if stored poorly. In the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>, it belongs with your other dry spices, somewhere easy to reach.
          </p>
          <p>
            A small jar lasts most people months, unless curry is a weekly habit. Buying a small amount and restocking more often keeps the spice actually fresh, instead of sitting dull in the back of a cabinet.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about turmeric</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is turmeric the same thing as curry powder?</p>
              <p className="faq-a">
                No. Turmeric is a single spice, just the dried, ground root. Curry powder is a blend that usually includes turmeric plus coriander, cumin, fenugreek, chili, and more. Turmeric gives curry powder most of its color, but curry powder has a much more complex, spicier flavor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much turmeric per day is safe?</p>
              <p className="faq-a">
                As a spice, 1-3 teaspoons a day is safe for most people. High-dose curcumin supplements can cause digestive issues, and a small number of 2024 case reports linked concentrated supplements to liver strain. Anyone on blood thinners or with gallstones should check with a doctor before using high doses.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does turmeric powder have the same benefits as fresh root?</p>
              <p className="faq-a">
                Fresh root has extra volatile compounds that get lost in drying. Powder is more concentrated in curcumin by weight. Both work well in everyday cooking. Root has a brighter flavor; powder is more practical and stores longer.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does turmeric stain?</p>
              <p className="faq-a">
                Yes, easily. Curcumin is an intense pigment. Use a stainless-steel spoon, not wood. If it stains fabric, treat it with cold water and soap right away — hot water sets it. On porous surfaces, lemon and salt works. Sun exposure tends to fade it over time.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is turmeric safe during pregnancy?</p>
              <p className="faq-a">
                In normal culinary amounts, yes. High-dose curcumin supplements can potentially stimulate uterine contractions — pregnant people should avoid them and check with a doctor. As a seasoning in a recipe, there is no issue.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does turmeric lose its properties when cooked?</p>
              <p className="faq-a">
                Some volatile compounds degrade with prolonged heat, but curcumin itself is fairly heat-stable — especially in preparations with fat. Curry and golden milk, for example, cook with fat and hold onto most of the benefits. Avoid long, hard boiling without liquid.
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
            <p className="blog-cta-title">Turmeric in the pantry. Black pepper right next to it. List already made.</p>
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
