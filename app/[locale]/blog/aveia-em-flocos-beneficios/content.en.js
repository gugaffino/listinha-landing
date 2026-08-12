import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Rolled Oats Benefits: What Beta-Glucan Actually Does',
  description: 'Rolled oats are rich in beta-glucan, a fiber shown to lower LDL cholesterol and blunt blood sugar spikes. See the real benefits, the right dose, and which oat type to buy.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/aveia-em-flocos-beneficios',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/aveia-em-flocos-beneficios',
      en: 'https://www.miseemcasa.com.br/en/blog/aveia-em-flocos-beneficios',
      es: 'https://www.miseemcasa.com.br/es/blog/aveia-em-flocos-beneficios',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/aveia-em-flocos-beneficios',
    },
  },
  openGraph: {
    title: 'Rolled Oats Benefits: What Beta-Glucan Actually Does',
    description: 'Rolled oats are rich in beta-glucan, a fiber shown to lower LDL cholesterol and blunt blood sugar spikes. See the real benefits, the right dose, and which oat type to buy.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/aveia-em-flocos-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Bowl of rolled oats served for breakfast with fresh fruit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rolled Oats Benefits: What Beta-Glucan Actually Does',
    description: 'Rolled oats are rich in beta-glucan, a fiber shown to lower LDL cholesterol and blunt blood sugar spikes. See the real benefits, the right dose, and which oat type to buy.',
    images: ['https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are rolled oats fattening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not on their own. Rolled oats have about 380 calories per 100g — similar to rice — but beta-glucan creates strong satiety, so a regular serving does not add more weight than other carbs. The usual problem is what gets added on top: sugar, too much honey, or store-bought granola loaded with syrup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are rolled oats gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oats are naturally gluten-free, but they are frequently processed in the same facilities as wheat, which can cause cross-contamination. If you have celiac disease or a gluten sensitivity, buy oats certified gluten-free — they go through separate processing and packaging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I eat rolled oats every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Daily intake is safe and is exactly what makes beta-glucan effective. The FDA-recognized dose for cholesterol benefits is 3g of beta-glucan per day, roughly 3 level tablespoons (40g) of old-fashioned rolled oats. There is no benefit to eating more than that.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do raw and cooked oats have the same benefits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beta-glucan works whether the oats are raw or cooked. Overnight oats, made by soaking raw oats in the fridge, and stovetop oatmeal produce a comparable effect on satiety and cholesterol. The difference is texture and prep time, not effectiveness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between rolled oats, quick oats, and steel-cut oats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are the same grain processed differently. Steel-cut oats are chopped, not flattened, so they keep the most structure and take the longest to cook. Old-fashioned rolled oats are steamed and pressed — the middle ground of texture, cook time, and beta-glucan retention. Quick oats are rolled thinner and pre-cooked, so they cook fast but hold less soluble fiber per bite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do rolled oats work on a low-carb diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oats have carbs — they are not a low-carb food. But the glycemic index is low thanks to beta-glucan, so sugar is absorbed more slowly with no sharp insulin spike. Strict keto has no room for oats. Moderate carb-controlled diets can include a measured portion.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rolled Oats Benefits: What Beta-Glucan Actually Does',
  description: 'Rolled oats are rich in beta-glucan, a fiber shown to lower LDL cholesterol and blunt blood sugar spikes. See the real benefits, the right dose, and which oat type to buy.',
  image: 'https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/aveia-em-flocos-beneficios',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rolled Oats Benefits', item: 'https://www.miseemcasa.com.br/en/blog/aveia-em-flocos-beneficios' },
  ],
}

export default function RolledOatsEn() {
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
            <li className="breadcrumb-current" aria-current="page">Rolled Oats Benefits</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">Aug 12, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Rolled Oats Benefits: What the Beta-Glucan Really Does
          </h1>
          <p className="blog-desc">
            Rolled oats get a lot of hype in the health aisle — and this time the hype is earned. But there is a real difference between the oats in your pantry and the ones on the label. Here is what actually matters before you buy the next container.
          </p>

          <div className="answer-box">
            <p>
              <strong>Rolled oats</strong> are rich in <strong>beta-glucan</strong>, a soluble fiber shown to lower LDL cholesterol,
              blunt blood sugar spikes, and boost satiety. To see the effect, intake needs to be consistent —
              about 3 tablespoons of old-fashioned rolled oats a day is enough.
              Less-processed oats (steel-cut, then old-fashioned) hold on to more beta-glucan than quick or instant oats.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Bowl of rolled oats served for breakfast with fresh fruit"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Regina Ferraz / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What rolled oats are</a></li>
              <li><a href="#beta-glucan">Beta-glucan: the fiber behind the benefits</a></li>
              <li><a href="#other-benefits">Other documented benefits</a></li>
              <li><a href="#oat-types">Steel-cut, rolled, quick, or instant?</a></li>
              <li><a href="#how-to-use">How to use them in the kitchen</a></li>
              <li><a href="#how-much">How much to eat per day</a></li>
              <li><a href="#pantry">Oats and the pantry</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2290077/pexels-photo-2290077.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rolled oats and seeds in close-up showing the natural texture and color of the grain"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-is-it" className="img-above">What rolled oats are</h2>

          <p>
            Rolled oats are the whole oat grain (<em>Avena sativa</em>) processed into flat flakes. The process is simple: the groat is steamed, then pressed flat between rollers. Depending on how thin the roller sets it, you end up with old-fashioned rolled oats, quick oats, or instant oats.
          </p>
          <p>
            That is not a label detail. The thickness changes how much beta-glucan survives the process — the fiber responsible for most of the benefits oats are known for. Less processing means more beta-glucan preserved.
          </p>
          <p>
            Whole oat groats and steel-cut oats hold the most. Old-fashioned rolled oats sit right below. Instant oats — the packet kind — are the most processed of the bunch: convenient, but with the least of the fiber that actually matters.
          </p>

          {/* BETA-GLUCAN */}
          <h2 id="beta-glucan">Beta-glucan: the fiber behind the benefits</h2>

          <p>
            Beta-glucan is a soluble fiber. In the gut, it absorbs water and forms a thick gel. That gel does two things at once: it traps some LDL cholesterol before it gets absorbed, and it slows down how fast sugar enters the bloodstream.
          </p>
          <p>
            The cholesterol effect is well documented — documented enough that the FDA approved a health claim allowing oat products to state that 3g or more of beta-glucan soluble fiber a day may reduce the risk of heart disease. This is not influencer talk. It is evidence solid enough for a regulator to sign off on the claim.
          </p>
          <p>
            A meta-analysis of 28 randomized controlled trials found that at least 3g of oat beta-glucan a day lowered LDL cholesterol by about 0.25 mmol/L — roughly a 6% reduction. The mechanism: beta-glucan binds part of the cholesterol in the gut and carries it out before it is absorbed.
          </p>
          <p>
            To hit the effective amount, the reference is <strong>3g of beta-glucan a day</strong>. That is about 3 tablespoons of old-fashioned rolled oats (40g) or roughly 2 tablespoons of oat bran. One serving at breakfast covers it — there is no need to eat oats at every meal.
          </p>

          {/* OTHER BENEFITS */}
          <h2 id="other-benefits">Other documented benefits</h2>

          <p>
            Cholesterol is the most studied angle. But the same beta-glucan works on a few other fronts too:
          </p>

          <h3>Blood sugar control</h3>
          <p>
            The gel that forms in the gut slows sugar absorption. Blood sugar rises more gradually after a meal that includes oats — a smaller insulin spike, and steadier energy afterward. For anyone managing type 2 diabetes or prediabetes, this matters a lot. For everyone else, it is what keeps the mid-morning energy crash from happening.
          </p>

          <h3>Satiety</h3>
          <p>
            The gel takes up space in the stomach and slows gastric emptying. A bowl of oatmeal at 8am can carry you to lunch without reaching for a snack at 10:30.
          </p>
          <p>
            You know exactly which snack.
          </p>

          <h3>Gut health</h3>
          <p>
            Oat fiber feeds the beneficial bacteria in the gut — a prebiotic effect — and helps keep digestion regular. This works over the medium term, with consistent intake. It does not fix anything in two days.
          </p>

          <h3>Blood pressure and other nutrients</h3>
          <p>
            Regular oat consumption is linked to small reductions in systolic blood pressure. Beyond beta-glucan, oats contain avenanthramides — antioxidants essentially unique to oats with anti-inflammatory properties. They also carry magnesium, iron, zinc, and B vitamins. Oats are one of the{' '}
            <a href="/en/blog/alimentos-ricos-em-magnesio">foods high in magnesium</a>{' '}
            you can pick up at any grocery store for a couple of dollars.
          </p>

          {/* OAT TYPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5604832/pexels-photo-5604832.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bowl of oats with fresh berries — overnight oats ready to serve"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: thea a / Pexels</p>
          </div>

          <h2 id="oat-types" className="img-above">Steel-cut, rolled, quick, or instant — which one to buy</h2>

          <p>
            All of them come from the same oat groat. What changes is processing, soluble fiber concentration, and how they behave in a pot. Grabbing the wrong bag for the wrong recipe is the easiest way to waste money on what should be a cheap staple.
          </p>

          <h3>Steel-cut oats</h3>
          <p>
            Chopped into pieces rather than flattened, so they keep the most structure and the most beta-glucan. Chewy, nutty, and slow — 20 to 30 minutes on the stove. Best for a weekend pot of oatmeal or a slow-cooker breakfast prepped the night before.
          </p>

          <h3>Old-fashioned rolled oats</h3>
          <p>
            Steamed and pressed, but not sliced thin. The middle ground: cooks in about 5 minutes, holds its texture, and keeps most of the beta-glucan intact. The most versatile of the bunch — works in oatmeal, overnight oats, homemade granola, and pancakes. If you are only buying one type, this is the one.
          </p>

          <h3>Quick oats</h3>
          <p>
            Rolled thinner and often pre-steamed for a faster cook time — about 1 minute. Creamier texture, less chew. Fine for smoothies, baking, or a rushed morning, but the extra processing means somewhat less soluble fiber per bite than old-fashioned.
          </p>

          <h3>Instant oats</h3>
          <p>
            The packet kind, pre-cooked and dried, ready in a minute with hot water. The most processed and the most convenient — and usually the one with the least beta-glucan left, especially once flavor packets add sugar on top.
          </p>

          <h3>Oat bran</h3>
          <p>
            Not a whole oat at all — it is the fibrous outer layer, milled off. The most concentrated source of beta-glucan by weight. Works well stirred into smoothies, yogurt, or soup. Its powdery texture limits its use in anything that needs structure.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use rolled oats in the kitchen</h2>

          <p>
            Oats do not need an elaborate recipe. The simplest preparations are the ones that actually stick around in a weekly routine.
          </p>

          <h3>Overnight oats</h3>
          <p>
            The most practical prep: rolled oats + milk or yogurt + mashed banana or chopped fruit. Mix in a jar, cover, and refrigerate the night before. In the morning, it is ready. Add honey, cinnamon, or dried fruit if you want. No stove needed — you make it while you eat dinner and eat it the next day.
          </p>

          <h3>Stovetop oatmeal</h3>
          <p>
            One cup of oats + milk or water + a pinch of cinnamon + medium heat for 5 minutes. As simple as it sounds. Add honey or maple syrup at the end if you want it sweet.
          </p>

          <h3>Homemade granola</h3>
          <p>
            Rolled oats mixed with honey, olive oil, nuts, and shredded coconut, spread on a baking sheet and baked for 20 minutes at 350°F (180°C). The result beats anything from a box — and you control the sugar. For the full breakdown of ratios and variations, see the{' '}
            <a href="/en/blog/o-que-e-granola">homemade granola guide</a>.
          </p>

          <h3>Quick pancakes</h3>
          <p>
            Two tablespoons of oats + 1 egg + 1 mashed banana. Blend it or mix by hand with a fork. Cook in a nonstick pan. It is not a French crepe — it is the pancake for someone with 10 minutes before work.
          </p>

          <h3>In soups and stews</h3>
          <p>
            Quick oats thicken broth naturally. Stir 2 tablespoons into a creamy soup in place of cornstarch. It does not change the flavor, just the texture.
          </p>

          <div className="blog-inline-cta">
            <p>Oats in the pantry, list always up to date. <em>Mise handles that part.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW MUCH */}
          <h2 id="how-much">How much to eat per day</h2>

          <p>
            The reference dose for a cholesterol effect is <strong>3g of beta-glucan a day</strong>. In practice, that means:
          </p>

          <ul className="item-list">
            <li>3 tablespoons of old-fashioned rolled oats (about 40g)</li>
            <li>or roughly 2 tablespoons of oat bran (about 30g)</li>
          </ul>

          <p>
            There is no need to split it across multiple meals. One serving a day, eaten consistently, produces the documented effects. The cholesterol effect starts to show up after 4 to 8 weeks of consistent intake — not after one week.
          </p>
          <p>
            Oats have about 380 calories per 100g — a calorie density similar to rice. They are not a "free" food. But the satiety they create tends to offset that: you eat less over the following hours.
          </p>

          {/* PANTRY */}
          <h2 id="pantry">Oats and the pantry</h2>

          <p>
            Rolled oats are one of those staples that make sense to always have on hand — right alongside rice, beans, olive oil, and pasta. They keep for a long time, cost little, and cover everything from breakfast to a light dinner.
          </p>
          <p>
            The only catch is you usually notice they are gone right when you need them. Monday morning, no oats for overnight prep. Oats deserve to be a fixed item on the list — the kind you restock before it actually runs out, not after.
          </p>
          <p>
            To store them well: rolled oats in a sealed container, away from the fridge, last up to 12 months. Once opened, check that they do not smell rancid — a sign of oxidation. If you want a more systematic way to organize the grains and cereals in your kitchen, the{' '}
            <a href="/en/blog/quinoa-para-que-serve">quinoa guide</a>{' '}
            covers a similar staple that belongs in the same rotation.
          </p>
          <p>
            Alongside other functional grains like quinoa, oats round out the basic stock of a kitchen that actually runs through the week. The difference is that oats cover more breakfasts — and cost a lot less per pound.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about rolled oats</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Are rolled oats fattening?</p>
              <p className="faq-a">
                Not on their own. Oats have about 380 calories per 100g, but beta-glucan creates strong satiety — you stay fuller for longer afterward. A regular serving does not add more weight than other carbs. The usual problem is what gets added on top: too much sugar, store-bought granola, or heavy honey.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are rolled oats gluten-free?</p>
              <p className="faq-a">
                Oats themselves do not contain gluten. But they are frequently processed in the same facilities as wheat, which creates a risk of cross-contamination. If you have celiac disease or a gluten sensitivity, buy oats with a certified gluten-free label — they go through separate processing and packaging from wheat.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can I eat rolled oats every day?</p>
              <p className="faq-a">
                Yes. Daily intake is safe and is exactly what makes beta-glucan effective for cholesterol control — the effective dose is 3g of beta-glucan a day, about 3 tablespoons of old-fashioned rolled oats. There is no benefit to eating more than that. The effect builds up consistently over weeks.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do raw and cooked oats have the same benefits?</p>
              <p className="faq-a">
                Beta-glucan works whether the oats are raw or cooked. Overnight oats — soaked raw in the fridge — and stovetop oatmeal produce a comparable effect on satiety and cholesterol. The difference is texture and prep time, not effectiveness.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the difference between rolled oats, quick oats, and steel-cut oats?</p>
              <p className="faq-a">
                They are the same grain, processed differently. Steel-cut oats are chopped rather than flattened, so they keep the most structure and beta-glucan, but take the longest to cook. Old-fashioned rolled oats are the middle ground — quicker to cook, still hold on to most of the fiber. Quick oats are rolled thinner and partially pre-cooked, so they cook fast but carry less soluble fiber per serving.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do rolled oats work on a low-carb diet?</p>
              <p className="faq-a">
                Oats have carbs — they are not a low-carb food. But the glycemic index is low thanks to beta-glucan: sugar is absorbed more slowly, without a sharp insulin spike. Strict keto has no room for oats. Moderate carb-controlled diets can include a measured portion (1 to 2 tablespoons).
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
                Creator of Mise. Has had a container of old-fashioned rolled oats in the pantry for two years. Used it every week for three months, then went a month without buying more and ran out. This is exactly the kind of thing Mise exists to prevent.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Oats on the list.<br />
              <em>Never out of the pantry again.</em>
            </h2>
            <p>
              With Mise, rolled oats stay a fixed pantry item. Once they run out, they show up automatically on the shopping list. No surprise on Monday morning.
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
