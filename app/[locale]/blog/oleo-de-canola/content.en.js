import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Is Canola Oil Bad for You? Smoke Point, Uses & Facts',
  description: 'Canola oil has the lowest saturated fat of any common cooking oil and a smoke point around 400°F. Here is what the "seed oil" debate actually gets right — and wrong.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/oleo-de-canola',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/oleo-de-canola',
      en: 'https://www.miseemcasa.com.br/en/blog/oleo-de-canola',
      es: 'https://www.miseemcasa.com.br/es/blog/oleo-de-canola',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/oleo-de-canola',
    },
  },
  openGraph: {
    title: 'Is Canola Oil Bad for You? Smoke Point, Uses & Facts',
    description: 'Canola oil has the lowest saturated fat of any common cooking oil and a smoke point around 400°F. Here is what the "seed oil" debate actually gets right — and wrong.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/oleo-de-canola',
    images: [
      {
        url: 'https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Vegetable oil being poured into a pan during home cooking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Canola Oil Bad for You? Smoke Point, Uses & Facts',
    description: 'Canola oil has the lowest saturated fat of any common cooking oil and a smoke point around 400°F. Here is what the "seed oil" debate actually gets right — and wrong.',
    images: ['https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is canola oil actually bad for you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No consistent peer-reviewed evidence shows that canola oil is harmful in normal amounts. Large human studies link its main fat, linoleic acid, to lower LDL cholesterol and better heart health, not increased inflammation. Online claims that seed oils are toxic are not backed by the same quality of evidence as the studies that contradict them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the smoke point of canola oil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Refined canola oil is usually listed between 400°F and 475°F (about 204°C to 246°C), depending on the refinement level and the source. That range covers sautéing, pan-frying, roasting, and most deep-frying done at home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is canola oil the same as vegetable oil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not exactly. "Vegetable oil" on a label is often a blend, sometimes soybean oil, sometimes a mix of several seed oils. Canola oil is a single, specific oil pressed from canola seeds. In practice they behave similarly enough that most recipes calling for "vegetable oil" work fine with canola.',
      },
    },
    {
      '@type': 'Question',
      name: 'Canola oil or olive oil — which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They serve different purposes. Extra virgin olive oil has more antioxidants and a stronger flavor, best for finishing and cold dressings. Canola oil is neutral-tasting with a higher, more predictable smoke point and costs less. For everyday cooking, both are reasonable choices — you do not need to pick one and abandon the other.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is canola oil made from GMO crops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most canola grown worldwide, including in the US and Canada, is genetically modified for herbicide tolerance, which makes it easier to manage in the field. That trait does not change the composition of the oil pressed from the seed. If that matters to you, look for oil labeled "non-GMO" — it does exist, just at a higher price.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I store canola oil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep it in a cool, dark spot away from the stove. An unopened bottle is good until the date on the label. Once opened, use it within 3 to 6 months for best flavor. It does not need refrigeration, but heat and light speed up oxidation and turn it rancid early — you will smell it before you can see it.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is Canola Oil Bad for You? Smoke Point, Uses & Facts',
  description: 'Canola oil has the lowest saturated fat of any common cooking oil and a smoke point around 400°F. Here is what the "seed oil" debate actually gets right — and wrong.',
  image: 'https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-26',
  dateModified: '2026-07-26',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/oleo-de-canola',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Canola oil', item: 'https://www.miseemcasa.com.br/en/blog/oleo-de-canola' },
  ],
}

export default function OleoDeCanolaEn() {
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
            <li className="breadcrumb-current" aria-current="page">Canola oil</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-26">Jul 26, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Canola Oil: What It Actually Is, and Whether You Should Worry
          </h1>
          <p className="blog-desc">
            It is the bottle next to the stove in most kitchens, and lately it is also the villain of half the wellness internet. What canola oil actually is, what the "seed oil" claims get wrong, and when to reach for it instead of olive oil.
          </p>

          <div className="answer-box">
            <p>
              <strong>Canola oil</strong> is a vegetable oil pressed from the seeds of the canola plant, a variety of rapeseed bred in Canada in the 1970s specifically to be low in erucic acid.
              It has a neutral flavor, a smoke point around 400°F (204°C), and the lowest saturated fat content of any major cooking oil — about 7%.
              It is also one of the most argued-about bottles in the pantry.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Vegetable oil being poured into a pan during home cooking"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: RDNE Stock project / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article index">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What canola oil actually is</a></li>
              <li><a href="#where-from">Where it comes from — the canola plant</a></li>
              <li><a href="#nutrition">What is in it: the fat breakdown</a></li>
              <li><a href="#bad-for-you">Is canola oil bad for you? The seed oil debate</a></li>
              <li><a href="#smoke-point">Smoke point and when to use it</a></li>
              <li><a href="#how-to-use">How to use it in the kitchen</a></li>
              <li><a href="#canola-vs-olive">Canola or olive oil: when to use each</a></li>
              <li><a href="#worth-it">Is it worth keeping in the pantry</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5737246/pexels-photo-5737246.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Person holding a clear vegetable oil bottle on a light countertop"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-is-it" className="img-above">What canola oil actually is</h2>

          <p>
            Canola oil comes from pressing canola seeds, then refining the result to strip out impurities and lock in a neutral taste and long shelf life.
          </p>
          <p>
            What you end up with is a pale, nearly clear oil with almost no smell and almost no flavor. It does not fight with whatever you are cooking — that is the entire point of it.
          </p>
          <p>
            There is a good chance you have a bottle of it in your cabinet right now. You are just not entirely sure what it is.
          </p>
          <p>
            It is also one of the cheapest oils on the shelf, produced at massive scale and sold in every grocery store in North America. Cost, a long shelf life, and a flavor that disappears into a dish — that combination is why it ended up everywhere.
          </p>

          {/* WHERE FROM */}
          <h2 id="where-from">Where it comes from — the canola plant</h2>

          <p>
            "Canola" is not a species name. It is a trademarked term coined in Canada in the 1970s, short for <em>Canadian oil, low acid</em>.
          </p>
          <p>
            The plant is a cultivar of rapeseed (<em>Brassica napus</em>), grown for centuries across Europe and Asia. Traditional rapeseed oil had one real problem: erucic acid, a fatty acid that caused heart lesions in animal studies when fed in large doses. Canadian plant breeders spent years developing a variety with erucic acid bred down to trace levels. That variety became canola — and today, food regulators including Health Canada and the FDA define "canola" specifically as oil with less than 2% erucic acid.
          </p>
          <p>
            Canada still grows most of the world's canola, largely across Saskatchewan, Alberta, and Manitoba, with the US Northern Plains as the other major growing region. The plant flowers bright yellow and produces small, dark seeds — pressed either cold or with heat and solvent, then refined.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">What is in it: the fat breakdown</h2>

          <p>
            Canola oil's fat profile is one of the more balanced among common cooking oils:
          </p>

          <ul className="item-list">
            <li><strong>Saturated fat:</strong> about 7% — the lowest of any widely used cooking oil</li>
            <li><strong>Monounsaturated fat (omega-9):</strong> about 63% — the same type that dominates olive oil</li>
            <li><strong>Polyunsaturated fat:</strong> about 28%, split between omega-6 and omega-3</li>
            <li><strong>Omega-3 (ALA):</strong> about 11% — unusually high for a plain cooking oil</li>
          </ul>

          <p>
            For comparison: soybean oil runs around 15% saturated fat. Coconut oil runs around 87%. Canola sits at the opposite end of that scale.
          </p>
          <p>
            The ALA content is what sets canola apart from most other cooking oils. ALA is an essential fatty acid — your body cannot make it, so it has to come from food. It is not the same omega-3 found in fish (EPA and DHA), and the body converts ALA to those forms inefficiently, but it is still a real, useful source. Flaxseed oil carries an even higher concentration of ALA, if that is specifically what you are after.
          </p>
          <p>
            Refined canola oil also carries a small amount of vitamin E, an antioxidant that helps keep the oil stable on the shelf.
          </p>

          {/* IS IT BAD FOR YOU */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5093677/pexels-photo-5093677.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Woman cooking in a home kitchen, sautéing food in a pan on the stove"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: RDNE Stock project / Pexels</p>
          </div>

          <h2 id="bad-for-you" className="img-above">Is canola oil bad for you? The seed oil debate</h2>

          <p>
            This is the question that actually brought you here, so let's deal with it directly.
          </p>
          <p>
            "Seed oils are toxic" has become one of the loudest claims in online nutrition talk, and canola oil sits at the center of it — high omega-6 content, industrial processing, the works. The claim usually rests on the idea that omega-6 fat drives chronic inflammation.
          </p>
          <p>
            The research does not back that up. Large human trials — not the isolated animal or cell studies the claim usually cites — link linoleic acid, canola's main omega-6 fat, to lower LDL cholesterol and reduced risk of heart disease and type 2 diabetes. Reviewing the actual clinical evidence, nutrition researchers have found no meaningful link between dietary omega-6 and increased inflammation markers in humans. That is a direct contradiction of the "seed oils cause inflammation" claim, not a nuance of it.
          </p>
          <p>
            The older erucic acid concern is a separate, mostly settled issue. Modern canola oil carries less than 2% erucic acid by regulatory definition — that is what makes it canola instead of industrial rapeseed oil. The studies that raised alarms decades ago used the high-erucic-acid version that stopped being sold once canola was developed specifically to avoid it.
          </p>
          <p>
            There is one legitimate, smaller concern: refining at high heat during deodorization can generate trace amounts of trans fat, typically under 1%. It is real, it is measurable, and it does not exist in cold-pressed, unrefined canola oil. It is worth knowing, even if it is not the reason most viral claims cite.
          </p>
          <p>
            Bottom line: refined canola oil is an ordinary cooking oil. Not a health food, not a hazard. Used the way most people use it — for everyday cooking, in normal amounts — it fits into a regular diet without issue.
          </p>

          {/* SMOKE POINT */}
          <h2 id="smoke-point">Smoke point and when to use it</h2>

          <p>
            Smoke point is the temperature at which an oil starts breaking down and giving off visible smoke and off flavors. Cooking past that point is neither safe nor tasty.
          </p>
          <p>
            Refined canola oil's smoke point is usually listed somewhere between 400°F and 475°F (204°C to 246°C) — sources vary depending on refinement level and testing method, but it consistently lands in the "high smoke point" category. An oil smoking in the pan is not the start of a good sauté.
          </p>
          <p>
            For reference, some rough comparisons:
          </p>

          <ul className="item-list">
            <li><strong>Refined canola oil:</strong> ~400–475°F (204–246°C)</li>
            <li><strong>Extra virgin olive oil:</strong> ~325–375°F (163–190°C), varies by quality and acidity</li>
            <li><strong>Refined olive oil:</strong> ~465°F (240°C)</li>
            <li><strong>Soybean oil:</strong> ~450°F (232°C)</li>
            <li><strong>Refined coconut oil:</strong> ~450°F (232°C)</li>
            <li><strong>Butter:</strong> ~300°F (150°C)</li>
          </ul>

          <p>
            Extra virgin olive oil — the one you save for finishing — has a lower smoke point. Using it for high-heat frying wastes the flavor and antioxidants that make it worth the price, and breaks the oil down early.
          </p>
          <p>
            Canola handles everyday sautéing, rice, baking without issue. For deep frying at higher temperatures for longer stretches, oils like peanut or refined sunflower give you more margin.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use it in the kitchen</h2>

          <p>
            Canola's neutral flavor is its most useful trait for everyday cooking. It does not compete with any seasoning, any ingredient, any recipe's flavor profile.
          </p>

          <h3>Sautéing and stir-frying</h3>
          <p>
            The most common use. Works for softening onion and garlic, sautéing vegetables, searing meat over medium heat. A home stovetop rarely exceeds 350°F during regular cooking — canola handles that without effort.
          </p>

          <h3>Shallow frying</h3>
          <p>
            Solid choice for eggs, pancakes, and anything shallow-fried in a moderate amount of oil at moderate heat. For deep frying at higher heat over a longer time, peanut oil gives you more margin.
          </p>

          <h3>Baking</h3>
          <p>
            A reliable substitute for other oils in cakes, muffins, and quick breads. The neutral flavor does not clash with vanilla, chocolate, or fruit. It keeps baked goods moist without adding a flavor of its own — it is the default behind most recipes that just say "vegetable oil."
          </p>

          <h3>Cold sauces and mayonnaise</h3>
          <p>
            Works as a base for homemade mayonnaise, where the neutral taste matters. In cold salad dressings, it blends smoothly and does not solidify in the fridge, unlike some other vegetable oils.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn't cost you this much headspace. <em>Mise handles it.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* CANOLA VS OLIVE */}
          <h2 id="canola-vs-olive">Canola or olive oil: when to use each</h2>

          <p>
            The question comes up constantly. The answer is: you do not need to pick a winner. They do different jobs.
          </p>

          <h3>Reach for canola when:</h3>
          <ul className="item-list">
            <li>A recipe calls for "vegetable oil" without specifying which</li>
            <li>You are cooking over medium-high heat and do not want to waste good olive oil's flavor</li>
            <li>You are baking a cake, muffins, or quick bread — neutral flavor matters</li>
            <li>You are frying in volume and want to keep costs down</li>
            <li>You are making mayonnaise from scratch</li>
          </ul>

          <h3>Reach for extra virgin olive oil when:</h3>
          <ul className="item-list">
            <li>Olive oil's flavor is part of the dish — dipping bread, salad, bruschetta</li>
            <li>You are finishing a hot dish off the heat</li>
            <li>The recipe is simple and olive oil is the main seasoning</li>
            <li>You are cooking over low to medium-low heat</li>
          </ul>

          <p>
            Keeping both in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            and using each where it fits is more practical — and cheaper — than trying to force one to do the other's job every time.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is it worth keeping in the pantry</h2>

          <p>
            Yes. For anyone who cooks regularly, canola oil is a base ingredient — as basic as salt and onion.
          </p>
          <p>
            It is cheap, it keeps for a long time (usually 12 to 18 months from production), and its uses are broad. This is not something you buy once and forget on a shelf.
          </p>
          <p>
            The only real consideration is storage: keep it away from the stove and direct light. Heat and light speed up oxidation. Oil stored badly goes rancid before its date — you will notice from the smell before anything else.
          </p>
          <p>
            If you are building out a{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            or restocking the pantry, canola oil belongs in the "never run out" category. Paired with olive oil for finishing, those two cover most of a home kitchen's fat needs.
          </p>
          <p>
            Add it to the list when it is getting low, not when the bottle is already empty. Finding out mid-sauté that you are out of oil is one of those small frustrations that does not have to happen.
          </p>
          <p>
            It does not need much attention. It just needs to be there.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about canola oil</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is canola oil actually bad for you?</p>
              <p className="faq-a">
                No consistent evidence backs that up. Large human studies link linoleic acid, canola's main fat, to lower LDL cholesterol and better heart health, not increased inflammation. The "seed oils are toxic" claim leans on animal and cell studies, not the human trials that contradict it.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the smoke point of canola oil?</p>
              <p className="faq-a">
                Usually listed between 400°F and 475°F (204–246°C), depending on refinement and the source. That covers sautéing, pan-frying, roasting, and most home deep-frying.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is canola oil the same as vegetable oil?</p>
              <p className="faq-a">
                Not exactly. "Vegetable oil" on a label is often a blend of several oils, sometimes soybean. Canola is one specific oil. In practice they behave similarly enough that recipes calling for vegetable oil work fine with canola.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Canola oil or olive oil — which is better?</p>
              <p className="faq-a">
                Depends on the use. Extra virgin olive oil has more antioxidants and a stronger flavor, best for finishing and cold dressings. Canola is neutral with a higher, more predictable smoke point and costs less. You do not need to pick one and drop the other.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is canola oil made from GMO crops?</p>
              <p className="faq-a">
                Most canola grown in the US and Canada is genetically modified for herbicide tolerance. That trait does not change the oil's composition. Non-GMO versions exist if that matters to you, usually at a higher price.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How should I store canola oil?</p>
              <p className="faq-a">
                Somewhere cool, dark, and away from the stove. Use it within 3 to 6 months once opened. No refrigeration needed, but heat and light speed up oxidation and turn it rancid early.
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
                Mise's founder. Uses canola oil for anything on a weeknight and saves the good olive oil for finishing. That olive oil has sat on the same shelf for months. All accounted for.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Know what's in the pantry.<br />
              <em>Let Mise run point.</em>
            </h2>
            <p>
              Connects pantry, recipes, and shopping list in one place.
              The canola oil shows up on the list before it runs out — not after.
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
