import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Baking Soda: Kitchen Uses, Storage & Substitution Tips',
  description: 'Baking soda leavens batter, tenderizes meat, speeds up bean cooking, and scrubs pots. Learn how it differs from baking powder and how long it actually lasts.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/bicarbonato-de-sodio',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/bicarbonato-de-sodio',
      en: 'https://www.miseemcasa.com.br/en/blog/bicarbonato-de-sodio',
      es: 'https://www.miseemcasa.com.br/es/blog/bicarbonato-de-sodio',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/bicarbonato-de-sodio',
    },
  },
  openGraph: {
    title: 'Baking Soda: Kitchen Uses, Storage & Substitution Tips',
    description: 'Baking soda leavens batter, tenderizes meat, speeds up bean cooking, and scrubs pots. Learn how it differs from baking powder and how long it actually lasts.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/bicarbonato-de-sodio',
    images: [
      {
        url: 'https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Overhead view of a bowl with baking ingredients on a white surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baking Soda: Kitchen Uses, Storage & Substitution Tips',
    description: 'Baking soda leavens batter, tenderizes meat, speeds up bean cooking, and scrubs pots. Learn how it differs from baking powder and how long it actually lasts.',
    images: ['https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is baking soda the same as baking powder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Baking soda is only the alkaline base (NaHCO₃). Baking powder is a ready mix that already includes baking soda, starch, and an acid. Baking powder works on its own in any batter. Baking soda needs an acidic ingredient already in the recipe — yogurt, honey, cocoa, lemon, or vinegar — to react.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much baking soda do I use instead of baking powder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ratio is 1:4 — use ¼ teaspoon of baking soda for every teaspoon of baking powder a recipe calls for. It only works if the recipe already has enough acid: yogurt, buttermilk, honey, molasses, cocoa powder, lemon juice, or vinegar. Without acid, the results will not be the same.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my cake taste metallic or soapy when I use baking soda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There was leftover baking soda without enough acid to neutralize it. That bitter, faintly soapy taste is unreacted baking soda. The fix is to cut back the amount or make sure the recipe has a compatible acid — yogurt, lemon, honey, or cocoa powder.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does adding baking soda to bean water actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It cuts down on gas. Baking soda helps break down oligosaccharides — the compounds in beans that cause bloating. Add a small spoonful to the soaking water, let it sit for 8 hours, then discard that water before cooking. The compounds stay behind in the water you pour out.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does baking soda expire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sealed, it lasts around 2 to 3 years. Once opened, it absorbs moisture and loses potency faster than the printed date suggests. To test it: mix a small spoonful with a bit of vinegar. Strong, fast bubbling means it still works. A weak reaction means it is time to buy a new box.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is baking soda the same as washing soda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and mixing them up ruins recipes. Baking soda is sodium bicarbonate, mild enough to eat. Washing soda is sodium carbonate, a much stronger alkaline used for laundry and heavy-duty cleaning — it is not food safe. Never substitute one for the other in cooking.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Baking Soda: Kitchen Uses, Storage & Substitution Tips',
  description: 'Baking soda leavens batter, tenderizes meat, speeds up bean cooking, and scrubs pots. Learn how it differs from baking powder and how long it actually lasts.',
  image: 'https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/bicarbonato-de-sodio',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br/en' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Baking Soda', item: 'https://www.miseemcasa.com.br/en/blog/bicarbonato-de-sodio' },
  ],
}

export default function BakingSodaContent() {
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
            <li className="breadcrumb-current" aria-current="page">Baking Soda</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-25">Jul 25, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            What Baking Soda Actually Does in Your Kitchen
          </h1>
          <p className="blog-desc">
            That white box sits at the back of the pantry next to the baking powder. Most people can't say what separates the two — or why one works where the other doesn't.
          </p>

          <div className="answer-box">
            <p>
              <strong>Baking soda</strong> is an alkaline salt (NaHCO₃) that releases CO₂ on contact with an acid, which makes batter rise. It also tenderizes meat, speeds up cooking dried beans, and keeps vegetables green on the stove. To leaven batter, it needs an acidic ingredient already in the recipe — yogurt, lemon, honey, cocoa, or vinegar.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Overhead view of a bowl with baking ingredients on a white surface — flour, eggs, and tools"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pavel Danilyuk / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What baking soda is</a></li>
              <li><a href="#vs-baking-powder">Baking soda vs. baking powder</a></li>
              <li><a href="#kitchen-uses">Kitchen uses beyond baking</a></li>
              <li><a href="#storage">How to store it and how long it lasts</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5734741/pexels-photo-5734741.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="White powder in a bowl on a dark rustic surface — baking soda for cooking"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Eva Bronzini / Pexels</p>
          </div>

          <h2 id="what-is-it" className="img-above">What baking soda is</h2>

          <p>
            Baking soda (NaHCO₃) is an alkaline salt. It is not table salt (NaCl) — different compound, different job. The word "sodium" showing up in both names is the only thing they share.
          </p>
          <p>
            When baking soda meets an acid and moisture, it releases carbon dioxide (CO₂). That gas forms bubbles in the batter, which makes it lighter and lets it rise in the oven. Without acid, the reaction doesn't happen — or happens only partway, leaving a faintly bitter taste behind.
          </p>
          <p>
            Acids that activate baking soda in recipes: plain yogurt, buttermilk, honey, molasses, lemon juice, vinegar, natural (non-Dutched) cocoa powder, and even the natural acidity of ripe fruit like banana. If a recipe has none of those, baking powder is the right call instead.
          </p>
          <p>
            It sat in the back of the cabinet for years without anyone quite knowing why. Now you do.
          </p>

          {/* VS BAKING POWDER */}
          <h2 id="vs-baking-powder">Baking soda vs. baking powder: what's the difference</h2>

          <p>
            Baking powder is a ready-made mix: baking soda plus starch plus one or two acid agents. The acid is already built in. That's why baking powder works alone in almost any recipe — it doesn't need an extra acidic ingredient to react.
          </p>
          <p>
            Baking soda is just the alkaline base. It needs the acid that's already in the recipe to complete the reaction. And it's stronger — roughly four times more powerful than baking powder.
          </p>
          <p>
            That's where the substitution ratio comes from: for every teaspoon of baking powder, use ¼ teaspoon of baking soda. The recipe still needs enough acid. Without it, the leftover unreacted baking soda stays in the batter — that's what causes the off taste.
          </p>
          <p>
            Rule of thumb: if a recipe calls for both, there's a reason. Baking powder gives consistent rise. Baking soda reacts fast with the recipe's own acid and adds crispness at the edges — especially in cookies.
          </p>

          {/* KITCHEN USES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8107990/pexels-photo-8107990.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Ceramic bowl with white powder and an egg beside it — baking ingredients on a light surface"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: MART PRODUCTION / Pexels</p>
          </div>

          <h2 id="kitchen-uses" className="img-above">What baking soda is good for in the kitchen</h2>

          <p>
            Past leavening batter, baking soda has at least six other practical uses worth knowing. Most people only know the cake part.
          </p>

          <h3>Cakes, cookies, and bread</h3>
          <p>
            The most common use. It works well in recipes with an acidic ingredient: banana bread, honey cake, yogurt pancakes, waffles, rye bread, buttermilk muffins. Cookies made with baking soda spread more and crisp up at the edges more than ones made with baking powder — that's a texture difference, not a mistake.
          </p>

          <h3>Tenderizing meat</h3>
          <p>
            Sprinkling baking soda over meat and letting it sit for 15 to 20 minutes before rinsing raises the pH of the surface. That makes it harder for proteins to contract during cooking. The result is more tender meat — especially useful on thin cuts for stir-fries or steak.
          </p>
          <p>
            It reads like a kitchen-table chemistry experiment. It still works.
          </p>

          <h3>Beans, lentils, and chickpeas</h3>
          <p>
            A small spoonful in the soaking water (8 hours before cooking) helps break down the oligosaccharides responsible for gas. It also speeds up cooking. The detail that matters: discard the soaking water before you cook — it absorbed the compounds you wanted gone in the first place.
          </p>

          <h3>Keeping vegetables green</h3>
          <p>
            A pinch of baking soda in boiling water preserves the chlorophyll in broccoli, green beans, and spinach. The color stays brighter. Don't overdo it — too much baking soda turns vegetables mushy before they're actually done.
          </p>

          <h3>Washing produce</h3>
          <p>
            Soaking fruit and vegetables in water with a spoonful of baking soda for 10 to 15 minutes removes some pesticide residue and surface grime. Rinse well afterward. It won't remove everything, but it's a simple step to add before things go back in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>.
          </p>

          <h3>Cutting acidity in tomato sauce</h3>
          <p>
            A small pinch in tomato sauce neutralizes part of the acidity. It makes a real difference when the tomatoes were too acidic to begin with, or when someone at the table deals with reflux. Watch the amount — too much changes the flavor and leaves the sauce faintly bitter.
          </p>

          <h3>Cleaning pots and surfaces</h3>
          <p>
            A paste of baking soda and a few drops of water lifts dark stains off stainless steel, grease residue off baking sheets, and marks off countertops. It doesn't scratch. It works better than it looks like it should — especially on the marks dish soap gives up on.
          </p>

          <div className="blog-inline-cta">
            <p>An organized pantry starts with knowing what's actually inside it. <em>Mise handles that part.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* STORAGE */}
          <h2 id="storage">How to store baking soda and how long it lasts</h2>

          <p>
            Sealed, baking soda lasts around 2 to 3 years. Once opened, it starts absorbing moisture and odors from the air around it — and loses potency before the date printed on the box.
          </p>
          <p>
            Keep it in a sealed container, away from the fridge and the stove. A dry shelf in an organized pantry works fine. No special temperature needed.
          </p>
          <p>
            To check if it's still good: mix a small spoonful with a bit of vinegar. Strong, fast bubbling means it's still active. A weak reaction, or none at all, means it's time to buy a new box. The test takes 10 seconds and saves you a cake that won't rise.
          </p>
          <p>
            It belongs on the basic shopping list for any kitchen. Costs little, lasts a long time, and covers at least seven jobs. The only problem was not knowing what to do with it — and that's sorted now.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about baking soda</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is baking soda the same as baking powder?</p>
              <p className="faq-a">
                No. Baking soda is only the alkaline base (NaHCO₃). Baking powder is a ready mix that already includes baking soda, starch, and an acid. Baking powder works alone in any batter. Baking soda needs an acidic ingredient in the recipe — yogurt, honey, cocoa, lemon, or vinegar — to react.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much baking soda do I use instead of baking powder?</p>
              <p className="faq-a">
                The ratio is 1:4 — ¼ teaspoon of baking soda for every teaspoon of baking powder. It only works if the recipe already has enough acid: yogurt, buttermilk, honey, molasses, cocoa powder, lemon juice, or vinegar. Without acid, the results won't be the same.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Why does my cake taste metallic or soapy when I use baking soda?</p>
              <p className="faq-a">
                Leftover baking soda didn't have enough acid to neutralize it. That bitter, faintly soapy taste is unreacted baking soda. The fix is to cut back the amount or make sure the recipe has a compatible acid.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What does adding baking soda to bean water actually do?</p>
              <p className="faq-a">
                It cuts down on gas. Baking soda helps break down the oligosaccharides in beans that cause bloating. Add a spoonful to the soaking water before cooking and discard that water. The compounds stay in the water, not in the beans.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does baking soda expire?</p>
              <p className="faq-a">
                Yes. Sealed, it lasts around 2 to 3 years. Once opened, it absorbs moisture and loses potency faster. Quick test: mix a spoonful with vinegar — strong bubbling means it still works. Weak or no reaction, toss it.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is baking soda the same as washing soda?</p>
              <p className="faq-a">
                No, and mixing them up ruins recipes. Baking soda is sodium bicarbonate, mild enough to eat. Washing soda is sodium carbonate — a much stronger alkaline for laundry and heavy cleaning, and not food safe. Never substitute one for the other in cooking.
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
                Founder of Mise. Has used baking soda to raise cakes, tenderize meat, and scrub pots. Found out later than he'd like that those are three different jobs.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Everything in the pantry.<br />
              <em>Let Mise run it.</em>
            </h2>
            <p>
              Connects pantry, recipes, and{' '}
              <a href="/en/funcionalidades/lista-de-compras" style={{color: 'rgba(251,249,242,0.85)'}}>shopping lists</a>{' '}
              in one place. Baking soda never quietly disappears again.
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
