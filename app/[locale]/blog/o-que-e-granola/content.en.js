import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'What Is Granola? Nutrition, Sugar, and How to Pick a Good One',
  description: 'Granola is toasted oats mixed with nuts, seeds, and dried fruit. See what’s actually in it, how many calories per serving, and what to check on the label before buying.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-granola',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-granola',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-granola',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-granola',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-granola',
    },
  },
  openGraph: {
    title: 'What Is Granola? Nutrition, Sugar, and How to Pick a Good One',
    description: 'Granola is toasted oats mixed with nuts, seeds, and dried fruit. See what’s actually in it, how many calories per serving, and what to check on the label before buying.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-granola',
    images: [
      {
        url: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Granola with oats, seeds, and dried fruit in close-up — detailed texture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Granola? Nutrition, Sugar, and How to Pick a Good One',
    description: 'Granola is toasted oats mixed with nuts, seeds, and dried fruit. See what’s actually in it, how many calories per serving, and what to check on the label before buying.',
    images: ['https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is granola fattening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Granola is calorie-dense — most of that energy comes from carbs, the fat in the nuts, and added sugar. In a standard 1/4 cup (about 30g) serving, it fits fine into a balanced diet. The usual problem is pouring double or triple that amount into a bowl, especially with the sweeter, more processed brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What’s a good serving size of granola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard label serving is about 30g — roughly 1/4 cup, around 130–145 calories. Used as a topping over yogurt or fruit, that amount is easy to stick to. Served as the main event in a deep cereal bowl, it disappears fast and the calories add up faster than it looks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does granola have gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular oats can pick up cross-contamination with gluten during processing, even though oats themselves are naturally gluten-free. If you’re celiac, look for granola made with certified gluten-free oats, or a base of rice, quinoa, or amaranth instead. The label needs an actual certification mark — "gluten-free" on the front of the bag by itself isn’t proof.',
      },
    },
    {
      '@type': 'Question',
      name: 'What’s the difference between sweet and savory granola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sweet granola has dried fruit, honey, or sugar, and works well over yogurt or milk for breakfast. Savory granola swaps the sweetener for herbs, chili, and nuts — it works on salads, soups, and as a standalone snack. The toasted oat base is the same either way; the flavoring is what changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is homemade granola better than store-bought?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Homemade granola gives you full control over the ingredients and the sugar. Store-bought is more convenient, but a lot of brands pack in more sugar and preservatives than they need to. Reading the label solves this either way: a store-bought granola with a short, recognizable ingredient list can be a perfectly good choice without turning on the oven.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store granola so it stays crunchy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a glass jar or airtight container, somewhere dry and away from direct light, granola holds up well for 2–3 months. Moisture is the real enemy — granola left exposed to air goes soft and stale fast. The fridge isn’t necessary for store-bought versions, but it helps homemade granola with fresher ingredients last longer.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Granola? Nutrition, Sugar, and How to Pick a Good One',
  description: 'Granola is toasted oats mixed with nuts, seeds, and dried fruit. See what’s actually in it, how many calories per serving, and what to check on the label before buying.',
  image: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-granola',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'What Is Granola', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-granola' },
  ],
}

export default function GranolaEn() {
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
            <li className="breadcrumb-current" aria-current="page">What Is Granola</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">Aug 6, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            What Is Granola, Really? Nutrition, Types, and How to Choose It
          </h1>
          <p className="blog-desc">
            It sits on top of half the yogurt bowls in America and gets marketed as a health food on every box. But what is granola actually made of, and does &quot;healthy&quot; hold up once you read the ingredient list?
          </p>

          <div className="answer-box">
            <p>
              <strong>Granola</strong> is a mix of toasted grains — mainly oats — combined with nuts,
              seeds, and dried fruit, held together by a sweetener like honey or brown sugar.
              It comes in store-bought and homemade versions. Most often it&apos;s eaten at breakfast over yogurt or milk,
              but it also shows up in savory recipes and as a standalone snack.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Granola with oats, seeds, and dried fruit in close-up — detailed texture"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Polina Tankilevitch / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-granola">What granola actually is</a></li>
              <li><a href="#whats-in-it">What&apos;s in it</a></li>
              <li><a href="#nutrition">The nutrition facts</a></li>
              <li><a href="#types">Types you&apos;ll find at the store</a></li>
              <li><a href="#how-to-eat">How to eat it</a></li>
              <li><a href="#how-to-choose">How to read the label and choose well</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS GRANOLA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3551698/pexels-photo-3551698.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Granola on a wooden spoon over a bowl — toasted grains mixed with dried fruit"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Fallon Michael / Pexels</p>
          </div>

          <h2 id="what-is-granola" className="img-above">What granola actually is</h2>

          <p>
            Granola is a mix of grains — oats are always the base — toasted with oil and a sweetener until crunchy.
            After baking, it gets tossed with dried fruit, nuts, and seeds.
            The result is shelf-stable for months and pairs with almost anything creamy.
          </p>
          <p>
            It&apos;s different from muesli, which is raw and skips the toasting step entirely.
            Granola has more crunch, a stronger flavor, and more calories per gram — that’s the oil and sugar from toasting doing their job.
          </p>
          <p>
            It was actually invented in the US. Dr. James Caleb Jackson created a baked cereal called &quot;granula&quot; in 1863 for patients on restricted diets at his sanitarium in New York.
            John Harvey Kellogg later adapted the recipe, added more grains, and renamed it granola.
            It didn&apos;t really take off until the 1960s and 70s, when it became a symbol of the natural-foods movement — and it never really left.
          </p>
          <p>
            Today it&apos;s such a routine grocery item that most people toss it in the cart without reading what&apos;s actually inside the bag.
            Worth a second look before it lands in the cart out of habit.
          </p>

          {/* WHAT'S IN IT */}
          <h2 id="whats-in-it">What&apos;s in a bag of granola</h2>

          <p>
            A basic granola has five components: a grain base, fat, sweetener, nuts, and dried fruit.
            The ratio between them is what separates a decent granola from a candy bar wearing an oat costume.
          </p>

          <p>The typical ingredients in a simple, honest granola:</p>

          <ul className="item-list">
            <li><strong>Rolled oats</strong> — the base of almost every granola, the main source of fiber</li>
            <li><strong>Vegetable oil</strong> (canola, coconut, or olive) — gives it crunch during baking</li>
            <li><strong>Sweetener</strong> — honey, maple syrup, brown sugar, or coconut sugar</li>
            <li><strong>Nuts</strong> — almonds, cashews, walnuts, pecans</li>
            <li><strong>Seeds</strong> — flax, sunflower, pumpkin, chia</li>
            <li><strong>Dried fruit</strong> — raisins, dried banana, dates, cranberries</li>
          </ul>

          <p>
            Mass-market granola can add preservatives, artificial flavoring, and hydrogenated vegetable oil.
            Cheaper versions sometimes cut the nuts and load up on more oats and more sugar instead.
            That shows up right there in the ingredient list — the first place to check before buying.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">The nutrition facts</h2>

          <p>
            In a 30g serving — the standard label amount, about 1/4 cup — granola averages:
          </p>

          <ul className="item-list">
            <li><strong>~130–145 calories</strong> — concentrated, mostly from carbs and fat</li>
            <li><strong>3–4g of protein</strong> — from the oats and the nuts</li>
            <li><strong>4–6g of fat</strong> — mostly unsaturated, when real nuts are involved</li>
            <li><strong>2–3g of fiber</strong> — helps with fullness and digestive health</li>
          </ul>

          <p>
            The problem is that 30g looks like nothing once it&apos;s in a bowl.
            In practice, most people pour double that without noticing.
          </p>
          <p>
            The real nutritional payoff is fiber — specifically beta-glucan from the oats, a soluble fiber
            linked to fullness and cholesterol management.
            The nuts bring good fat and micronutrients like{' '}
            <a href="/en/blog/alimentos-ricos-em-magnesio">magnesium</a>, zinc, and vitamin E.
            Dried fruit adds antioxidants — and also sugar, which is the tradeoff worth weighing.
          </p>
          <p>
            One honest note: granola is a nutritious add-on, not a superfood.
            The benefit shows up when it&apos;s part of a varied, balanced breakfast,
            not when it&apos;s the only healthy thing on the plate that day.
          </p>

          {/* TYPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Homemade granola bars with oats and dried fruit on a wooden surface"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Ella Olsson / Pexels</p>
          </div>

          <h2 id="types" className="img-above">Types of granola you&apos;ll find at the store</h2>

          <p>
            The most common version on shelves is sweet granola with dried fruit and honey.
            But there are other variations worth knowing about — and worth the pantry space.
          </p>

          <h3>Sweet granola</h3>
          <p>
            The best-seller. With dried fruit, honey, or sugar, it works well with yogurt, milk, and smoothie bowls.
            Sugar content swings wildly between brands — check the label, not the name on the box.
          </p>

          <h3>Savory granola</h3>
          <p>
            No sweetener. Made with herbs, chili, dehydrated garlic, and nuts.
            It works as a salad or soup topping, or eaten straight as a snack.
            It&apos;s less common on regular grocery shelves but shows up at natural-food stores and online.
            If you haven&apos;t tried savory granola on a green salad yet, this is the week for it.
          </p>

          <h3>Gluten-free granola</h3>
          <p>
            Uses certified gluten-free oats, or swaps the base for rice, quinoa, or amaranth.
            Made for people with celiac disease or gluten sensitivity.
            The label needs an actual certification mark — &quot;gluten-free&quot; printed on the packaging design alone isn&apos;t enough.
          </p>

          <h3>No-added-sugar granola</h3>
          <p>
            Sweetened only with fruit, or with no sweetener at all.
            Lower in calories, and a fit for anyone watching simple carbs.
            The flavor is milder than the sweet version, but it works well mixed with fresh fruit.
          </p>

          <h3>Homemade granola</h3>
          <p>
            Made at home with ingredients you pick yourself.
            Full control over sweetener type, how many nuts go in, no preservatives.
            The effort is low — 20 to 25 minutes in a 325°F oven, stirring occasionally.
            It&apos;s a good fit for a weekend batch cook to fold into your{' '}
            <a href="/en/blog/cardapio-semanal-simples-caseiro">weekly meal plan</a>.
          </p>

          {/* HOW TO EAT */}
          <h2 id="how-to-eat">How to eat granola day to day</h2>

          <p>
            Granola works with anything creamy, liquid, or that could use some crunch.
            The most common combinations:
          </p>

          <ul className="item-list">
            <li><strong>Over plain yogurt</strong> — the classic combination, balanced in protein and fiber</li>
            <li><strong>With milk or a plant-based drink</strong> — absorbs the liquid, loses crunch, ends up closer to cereal</li>
            <li><strong>In a smoothie bowl</strong> — adds crunch and protein on top</li>
            <li><strong>With fresh fruit</strong> — banana, berries, mango, whatever&apos;s in season</li>
            <li><strong>As a dry snack</strong> — straight from the jar, nothing else needed</li>
          </ul>

          <p>
            Savory granola opens up other options: a green salad with granola instead of croutons,
            or butternut squash soup topped with herbed granola.
            Less obvious, but it works.
          </p>

          <div className="blog-inline-cta">
            <p>Granola every breakfast. <em>Add it to the list before it runs out.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO CHOOSE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8892364/pexels-photo-8892364.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bowl of yogurt with granola and berries viewed from above — healthy breakfast"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Anastasia Belousova / Pexels</p>
          </div>

          <h2 id="how-to-choose" className="img-above">How to read the label and choose a good one</h2>

          <p>
            The name on the box doesn&apos;t mean much. &quot;Natural,&quot; &quot;organic-style,&quot; &quot;artisan,&quot; &quot;premium&quot; aren&apos;t regulated terms on a
            US nutrition label.
            What actually matters is the ingredient list and the nutrition facts panel.
          </p>

          <h3>The first ingredient is the one that counts</h3>
          <p>
            Ingredients are listed in order of quantity, highest first.
            If the first one is &quot;oats&quot; or any whole grain, that&apos;s a solid base.
            If it&apos;s &quot;sugar,&quot; &quot;corn syrup,&quot; or &quot;enriched flour,&quot; you&apos;re buying a dessert with some oats mixed in, not the other way around.
          </p>

          <h3>How much sugar is too much?</h3>
          <p>
            In a 30g serving: up to 5g of total sugar is reasonable for a sweet granola.
            Above 8g is a lot — you&apos;re buying candy with oats in it.
            Plenty of mainstream grocery-store granolas land between 6g and 9g per 30g serving.
          </p>

          <h3>Trans fat and fiber</h3>
          <p>
            Trans fat should read 0g. If it doesn&apos;t, skip it — cheap granola sometimes uses hydrogenated
            vegetable oil to fake crunch instead of paying for real nuts.
            For fiber: aim for at least 2.5g per 30g serving. Below that, there isn&apos;t much oat left.
            3g of protein or more usually means real nuts made it into the mix.
          </p>

          <h3>Recognize the ingredients</h3>
          <p>
            Good granola is simple: you can recognize everything on the list.
            Oats, honey, almonds, raisins — makes sense.
            &quot;Corn syrup, maltodextrin, artificial vanilla flavor&quot; — that&apos;s a different product wearing the same name.
          </p>

          <p>
            Once you&apos;ve picked one, keep it in a sealed container away from moisture.
            Granola loses its crunch fast once it&apos;s exposed to air.
            In an organized <a href="/en/funcionalidades/despensa">pantry</a>, it holds up for up to three months without issue.
          </p>
          <p>
            When it runs out — which happens sooner than expected — just add it to the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            before the next grocery run. Or keep it as a standing item on your weekly list, since it never really stops being needed.
          </p>
          <p>
            Good granola starts with the label, not the name on the box.
            Everything after that is just a good breakfast.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about granola</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is granola fattening?</p>
              <p className="faq-a">
                Granola is calorie-dense — most of the energy comes from carbs, fat, and added sugar. In a 30g (about 1/4 cup) serving, it fits fine into a balanced diet. The usual problem is pouring double or triple that amount, especially with the sweeter, more processed brands.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s a good serving size of granola?</p>
              <p className="faq-a">
                The standard label serving is about 30g — roughly 1/4 cup, between 130 and 145 calories depending on the mix. As a topping over yogurt or fruit, that amount is easy to stick to. Served in a deep cereal bowl as the main event, it disappears fast and the calories stack up quicker than it looks.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does granola have gluten?</p>
              <p className="faq-a">
                Regular oats can pick up cross-contamination with gluten during processing, even though oats are naturally gluten-free. If you&apos;re celiac, look for granola made with certified gluten-free oats, or a rice, quinoa, or amaranth base instead. The label needs an actual certification mark — &quot;gluten-free&quot; on the front of the bag alone isn&apos;t proof.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between sweet and savory granola?</p>
              <p className="faq-a">
                Sweet granola has dried fruit, honey, or sugar and works well over yogurt or milk for breakfast. Savory granola swaps the sweetener for herbs, chili, and nuts — it works on salads, soups, and as a snack. The toasted oat base is the same; what changes is the flavoring and the use.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is homemade granola better than store-bought?</p>
              <p className="faq-a">
                Homemade granola gives you full control over ingredients and sugar. Store-bought is more convenient, but a lot of brands pack in more sugar and preservatives than needed. Reading the label solves this either way: a store-bought granola with a short, recognizable ingredient list can be a good choice without turning on the oven.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store granola so it stays crunchy?</p>
              <p className="faq-a">
                In a glass jar or airtight container, somewhere dry and away from direct light, granola holds up well for 2–3 months. Moisture is the real enemy — granola left exposed to air goes soft and stale fast. The fridge isn&apos;t necessary for store-bought versions, but it helps homemade granola with fresher ingredients last longer.
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
                Creator of Mise. Buys granola every week to put on yogurt. Eats half of it before the yogurt ever gets involved.
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
              You buy what you&apos;ll actually use — and the granola doesn&apos;t disappear before it becomes breakfast.
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
