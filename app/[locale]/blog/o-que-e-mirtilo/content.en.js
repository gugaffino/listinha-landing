import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Blueberry Benefits: Nutrition, Fresh vs Frozen, and How to Store Them',
  description: 'Blueberries are small, dark berries packed with anthocyanins. See the real nutrition numbers, whether fresh or frozen is better, and how to keep a carton from going soft in three days.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-mirtilo',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-mirtilo',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-mirtilo',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-mirtilo',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-mirtilo',
    },
  },
  openGraph: {
    title: 'Blueberry Benefits: Nutrition, Fresh vs Frozen, and How to Store Them',
    description: 'Blueberries are small, dark berries packed with anthocyanins. See the real nutrition numbers, whether fresh or frozen is better, and how to keep a carton from going soft in three days.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-mirtilo',
    images: [
      {
        url: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh blueberries in close-up — small dark blue fruit rich in anthocyanins',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blueberry Benefits: Nutrition, Fresh vs Frozen, and How to Store Them',
    description: 'Blueberries are small, dark berries packed with anthocyanins. See the real nutrition numbers, whether fresh or frozen is better, and how to keep a carton from going soft in three days.',
    images: ['https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are fresh or frozen blueberries healthier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are close enough that it rarely matters. Freezing breaks down the skin cells slightly, which can make some antioxidants easier for the body to absorb, while fresh berries hold a small edge in vitamin C that fades the longer they sit in the fridge. For smoothies and baking, frozen is the practical choice. For eating by the handful, fresh wins on texture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do fresh blueberries last in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'About 1 to 2 weeks if you keep them dry and unwashed until you are ready to eat them. Rinsing the whole carton right after buying speeds up mold growth. Sort out any soft or shriveled berries before storing — one bad berry spreads faster than you would expect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you freeze blueberries yourself at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rinse and dry them completely, spread them in a single layer on a tray so they do not clump, freeze for a couple of hours, then transfer to a bag or container. Frozen this way, they keep for up to a year without turning into one solid block.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are blueberries good for blood sugar and diabetes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blueberries have a low glycemic index, around 40, and their fiber slows down how fast sugar hits the bloodstream. Several studies link regular consumption to better insulin sensitivity. Any dietary change for diabetes management should still be discussed with a healthcare provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many blueberries should you eat a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical serving is about 1 cup (roughly 150g), which lines up with most of the research showing benefits for heart health and cognition. There is no harm in eating more on a given day — it is simply the amount most studies used to measure an effect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do dried blueberries have the same benefits as fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Partially. Drying concentrates sugar and calories per gram, and many brands add sugar or oil during processing, which cuts into the health benefit. Dried blueberries still carry some antioxidants, but check the label — plain, unsweetened dried fruit is the only version worth comparing to fresh or frozen.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between blueberries and other dark berries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blackberries and blackcurrants have similar anthocyanin profiles but different flavor and texture — blackberries have seeds and a tarter bite, blackcurrants are more acidic. Cranberries are a different fruit entirely, tart rather than sweet, and usually eaten dried or as juice rather than fresh. All of them share the same family of antioxidant pigments, just in different ratios.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Blueberry Benefits: Nutrition, Fresh vs Frozen, and How to Store Them',
  description: 'Blueberries are small, dark berries packed with anthocyanins. See the real nutrition numbers, whether fresh or frozen is better, and how to keep a carton from going soft in three days.',
  image: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-mirtilo',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Blueberry Benefits', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-mirtilo' },
  ],
}

export default function BlueberryEn() {
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
            <li className="breadcrumb-current" aria-current="page">Blueberry Benefits</li>
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
            Blueberries: Nutrition, Real Benefits, and Fresh vs Frozen
          </h1>
          <p className="blog-desc">
            The little blue fruit that shows up in every smoothie recipe and every "superfood" list. What blueberries actually do for you, whether the frozen bag is really as good as fresh, and how to stop half the carton from going soft before you finish it.
          </p>

          <div className="answer-box">
            <p>
              <strong>Blueberries</strong> are small, round berries with dark blue-purple skin, sweet-tart flavor, and one of the highest anthocyanin concentrations of any common fruit.
              They grow on low shrubs and are sold fresh, frozen, and dried.
              Frozen blueberries hold onto nearly all of the nutrients of fresh ones — and for most everyday uses, they are the better buy.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh blueberries in close-up — small dark blue fruit rich in anthocyanins"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Lisa / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-are-blueberries">What blueberries are</a></li>
              <li><a href="#nutrition">Nutrition: what&apos;s actually inside</a></li>
              <li><a href="#benefits">Health benefits — what the research says</a></li>
              <li><a href="#fresh-vs-frozen">Fresh vs frozen vs dried</a></li>
              <li><a href="#how-to-store">How to store them so they last</a></li>
              <li><a href="#how-to-use">How to cook with blueberries</a></li>
              <li><a href="#worth-it">Are they worth buying every week</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT ARE BLUEBERRIES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2539170/pexels-photo-2539170.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Close-up of fresh blueberries showing the fruit's characteristic dark blue-purple color"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Kelly / Pexels</p>
          </div>

          <h2 id="what-are-blueberries" className="img-above">What blueberries are</h2>

          <p>
            A blueberry is a small round berry, roughly the size of a marble, with thin skin and firm flesh. Color ranges from blue to almost black-purple depending on the variety and how ripe it is. The flavor sits right at the balance point between sweet and tart — mild enough to work in almost anything, from oatmeal to a glaze for roasted meat.
          </p>
          <p>
            The deep blue color is not just visual. It comes from anthocyanins, a class of antioxidant pigments concentrated in the skin. The darker and more evenly colored the berry, the higher the concentration. A dull, wrinkled berry has already lost some of what makes it worth buying in the first place.
          </p>
          <p>
            Unlike most fruit, there is no seed to work around and no part to discard. You rinse and eat, or rinse and cook. The skin is where most of the antioxidant content sits, so there is nothing to peel away.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">Nutrition: what&apos;s actually inside</h2>

          <p>
            One cup (about 148g) of fresh blueberries has roughly 84 calories, 21g of carbohydrates (15g of which are natural sugars), 3.6g of fiber, and just over 1g of protein. It is a low-glycemic fruit — around 40 on the glycemic index — meaning it raises blood sugar more slowly than fruits like banana or mango.
          </p>
          <p>
            The standout micronutrients are vitamin K (bone health and blood clotting), a solid dose of vitamin C, manganese, and some potassium. But none of those explain why blueberries get so much attention. That comes down to the anthocyanin profile — blueberries carry one of the highest concentrations among common fruits, and that is the basis for most of the research on their benefits.
          </p>
          <p>
            If you already stock up on{' '}
            <a href="/en/blog/alimentos-ricos-em-magnesio">magnesium-rich foods</a>
            {' '}like nuts and seeds, blueberries add anthocyanins those sources do not carry. Different compounds, complementary effects.
          </p>

          <div className="blog-inline-cta">
            <p>A pantry connected to your shopping list. <em>That&apos;s what Mise does.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* BENEFITS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7937520/pexels-photo-7937520.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Blueberries and blackberries on yogurt in a ceramic bowl — a practical way to eat the fruit"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Nicola Barts / Pexels</p>
          </div>

          <h2 id="benefits" className="img-above">Health benefits: what the research says</h2>

          <p>
            The scientific interest in blueberries comes mostly from anthocyanins. The effects with the most consistent evidence behind them are these:
          </p>

          <ul className="item-list">
            <li>
              <strong>Memory and cognitive function:</strong> studies link regular consumption to slower cognitive decline in older adults. Anthocyanins accumulate in brain tissue and appear to have a local anti-inflammatory effect.
            </li>
            <li>
              <strong>Heart health:</strong> regular intake is associated with lower systolic blood pressure and better lipid profiles. The effect seems tied to how anthocyanins influence blood vessel flexibility.
            </li>
            <li>
              <strong>Blood sugar control:</strong> the low glycemic index and fiber content moderated insulin response in studies with prediabetic participants. This does not replace medication, but it fits into an eating pattern that helps with control.
            </li>
            <li>
              <strong>Eye health:</strong> anthocyanins accumulate in the retina and may reduce visual fatigue and protect against oxidative stress — a mechanism similar to lutein and zeaxanthin.
            </li>
          </ul>

          <p>
            One honest caveat: these benefits show up with regular consumption over weeks, not from an occasional carton. And a nutrient-dense fruit inside an otherwise poor diet does not fix much on its own. The effect is cumulative and depends on the overall pattern of what you eat.
          </p>

          {/* FRESH VS FROZEN */}
          <h2 id="fresh-vs-frozen">Fresh vs frozen vs dried</h2>

          <p>
            This is the question that actually matters at the grocery store, more than any "superfood" claim.
          </p>

          <h3>Fresh</h3>
          <p>
            Best texture, best for eating by the handful or topping a bowl of yogurt where you want the berries to stay whole. The catch: fresh blueberries lose quality fast — usually within 1 to 2 weeks — and any berries picked underripe or shipped a long distance can taste flat.
          </p>

          <h3>Frozen</h3>
          <p>
            The best value for money in most kitchens. Freezing actually breaks down some of the skin cell walls, which can make certain antioxidants easier for the body to absorb — frozen is not a downgrade from fresh, nutritionally. For smoothies, baking, and sauces, frozen performs identically to fresh and keeps for up to a year.
          </p>

          <h3>Dried</h3>
          <p>
            More concentrated in sugar and calories per gram, and pricier per gram than frozen. Useful in small amounts in granola or trail mix. Not something to snack on freely — the sugar content adds up fast, and many brands add extra sugar or oil during processing. Check the label before assuming it carries the same benefits as fresh.
          </p>

          <p>
            For everyday use, frozen is the practical default. Keep fresh for the weeks you actually plan to eat them plain, and skip dried unless a recipe specifically calls for it.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store blueberries so they last</h2>

          <p>
            Blueberries are one of the fruits most affected by how you handle them right after buying. A few habits make the difference between a full week of use and a moldy carton by day four.
          </p>

          <h3>Fresh, in the fridge</h3>
          <p>
            Do not wash them until you are ready to eat or cook with them — moisture speeds up mold. Store the carton as-is in the fridge, and sort out any soft or shriveled berries as soon as you notice them. One bad berry spreads faster than seems reasonable.
          </p>

          <h3>Freezing at home</h3>
          <p>
            Rinse and dry the berries completely, spread them in a single layer on a tray so they freeze separately instead of clumping into one block, then transfer to a bag or container once solid. Done this way, they keep for up to a year and you can scoop out exactly what you need.
          </p>

          <p>
            To plan meals with blueberries and generate the shopping list automatically, the{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly meal plan</a>
            {' '}in Mise connects each recipe to the list. You do not have to remember what to buy.
          </p>

          {/* HOW TO USE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7937520/pexels-photo-7937520.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bowl of blueberries and yogurt on a kitchen counter, ready to eat"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Nicola Barts / Pexels</p>
          </div>

          <h2 id="how-to-use" className="img-above">How to cook with blueberries</h2>

          <p>
            Blueberries work anywhere small, sweet-tart fruit belongs — and better than most where color and acidity matter.
          </p>

          <h3>As a snack</h3>
          <p>
            The simplest use. Fresh, straight from the carton, no prep. You buy them for the weekend bake, snack through half the carton while putting groceries away, and end up short when it is time to bake. It happens to everyone.
          </p>

          <h3>With yogurt and oats</h3>
          <p>
            The most common use. The tartness balances the fat in plain yogurt. Stirred into granola or oatmeal, they add color and flavor with zero effort. Frozen works fine here if you do not mind a slightly softer texture after thawing.
          </p>

          <h3>In smoothies</h3>
          <p>
            Frozen performs identically to fresh. Blend with banana, yogurt, or a plant-based milk. Blueberries turn the whole smoothie a deep purple. The flavor is mild enough to work with almost any fruit combination.
          </p>

          <h3>In baking</h3>
          <p>
            Blueberry muffins are a classic for a reason — they work. Cakes, pancakes, cheesecake, and toppings all benefit. Heat breaks down some anthocyanins, but the flavor holds up regardless. There is a reason the blueberry muffin shows up in every bakery case.
          </p>

          <h3>In savory dishes</h3>
          <p>
            Less obvious, but it works better than it sounds. Blueberries in a green salad with goat cheese and walnuts is a combination that surprises people in a good way. A quick blueberry pan sauce with pork or duck is a classic in Nordic and European cooking — the fruit's acidity cuts through the fat.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Are blueberries worth buying every week</h2>

          <p>
            If you already eat a variety of fruit day to day: yes, blueberries fit in well. Fresh is not cheap, but frozen is affordable and works for most uses. Keeping a bag in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>
            {' '}— or really, the freezer — is more practical than buying fresh every week with no plan for it.
          </p>
          <p>
            If you have never tried them: buy one fresh carton first. It is not a big commitment. It is enough to find out whether you actually like the flavor and will use them regularly. Blueberries forgotten in the fridge are not even good for a smoothie after ten days.
          </p>
          <p>
            Blueberries are not essential. But they are one of the few fruits with real research behind them, available year-round frozen, and versatile enough to work in almost any context. The frozen bag solves most of the practical problems — and the empty bag in the freezer will happen sooner than you expect.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about blueberries</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Are fresh or frozen blueberries healthier?</p>
              <p className="faq-a">
                Close enough that it rarely matters. Freezing breaks down the skin cells slightly, which can make some antioxidants easier to absorb, while fresh has a small edge in vitamin C that fades over time in the fridge. Frozen is the practical choice for smoothies and baking; fresh wins on texture for snacking.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How long do fresh blueberries last in the fridge?</p>
              <p className="faq-a">
                About 1 to 2 weeks if kept dry and unwashed until use. Washing the whole carton right after buying speeds up mold. Sort out soft or shriveled berries before storing — one bad berry spreads fast.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you freeze blueberries yourself at home?</p>
              <p className="faq-a">
                Yes. Rinse and dry completely, spread in a single layer on a tray to freeze separately, then transfer to a bag or container once solid. They keep for up to a year this way.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are blueberries good for blood sugar and diabetes?</p>
              <p className="faq-a">
                They have a low glycemic index, around 40, and fiber that slows down sugar absorption. Studies link regular consumption to better insulin sensitivity. Any dietary change for diabetes should be discussed with a healthcare provider.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many blueberries should you eat a day?</p>
              <p className="faq-a">
                A typical serving is about 1 cup (roughly 150g), which matches most of the research on heart health and cognition. Eating more on a given day is not a problem — that amount just reflects what most studies measured.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do dried blueberries have the same benefits as fresh?</p>
              <p className="faq-a">
                Partially. Drying concentrates sugar and calories, and many brands add extra sugar or oil, which cuts into the benefit. Plain, unsweetened dried blueberries still carry some antioxidants, but check the label.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the difference between blueberries and other dark berries?</p>
              <p className="faq-a">
                Blackberries and blackcurrants have similar antioxidant profiles but different flavor — blackberries have seeds and a tarter bite, blackcurrants are more acidic. Cranberries are a different, tart fruit usually eaten dried or as juice. All share the same family of pigments, in different ratios.
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
                Creator of Mise. Bought fresh blueberries for a weekend bake. Ate the whole carton in two days. The bake happened the following week.
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
              Blueberries make the list when you need them — and disappear from the pantry only after you actually use them.
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
