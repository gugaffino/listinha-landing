import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Hazelnuts: Nutrition, Benefits, and How to Use Them in the Kitchen',
  description: 'Hazelnuts are a nutrient-dense tree nut rich in vitamin E and healthy fats — the same one behind Nutella. What they are, benefits, how many to eat, and how to cook with them.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-avela',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-avela',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-avela',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-avela',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-avela',
    },
  },
  openGraph: {
    title: 'Hazelnuts: Nutrition, Benefits, and How to Use Them in the Kitchen',
    description: 'Hazelnuts are a nutrient-dense tree nut rich in vitamin E and healthy fats — the same one behind Nutella. What they are, benefits, how many to eat, and how to cook with them.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-avela',
    images: [
      {
        url: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Whole hazelnuts in a wooden bowl, showing the natural texture and color of the nut',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hazelnuts: Nutrition, Benefits, and How to Use Them in the Kitchen',
    description: 'Hazelnuts are a nutrient-dense tree nut rich in vitamin E and healthy fats — the same one behind Nutella. What they are, benefits, how many to eat, and how to cook with them.',
    images: ['https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a hazelnut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A hazelnut is the edible seed of the hazel tree (Corylus avellana), native to Europe and Asia Minor. It is a tree nut — in the same family as almonds, walnuts, and cashews — rich in monounsaturated fat, vitamin E, and fiber.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hazelnuts should you eat a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard serving is about 1 ounce (28g) — roughly 20 to 21 kernels, or a closed handful. That delivers around 176 calories, healthy fat, fiber, and vitamin E without piling on calories.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do hazelnuts make you gain weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hazelnuts are calorie-dense — about 628 calories per 100g. In the right portion (1 ounce a day), the healthy fat and fiber promote satiety. The issue is eating them without limits: hazelnuts covered in sugar or chocolate have a very different calorie profile than plain, raw hazelnuts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are hazelnuts gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain hazelnuts have no gluten — they are a tree nut, not a grain. But processed hazelnut products can pick up gluten through cross-contamination. Always check the label.',
      },
    },
    {
      '@type': 'Question',
      name: 'Raw or roasted hazelnuts: which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raw hazelnuts hold onto slightly more vitamin E and antioxidants. Dry-roasted (no oil, no salt) tastes richer and is more practical to cook with. The nutritional gap is small — what matters more is eating them regularly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store hazelnuts at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the shell, hazelnuts keep for up to a year in a cool, dry place. Shelled and raw, they last about 3 months in the fridge in an airtight container. Roasted, they hold their quality for about 2 weeks at room temperature in a sealed container. Heat and moisture speed up fat oxidation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between hazelnuts and almonds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are tree nuts from different species. Hazelnuts come from Corylus avellana, almonds from Prunus dulcis. Hazelnuts have a richer, oilier flavor; almonds taste more neutral. Both are rich in healthy fats and vitamin E, but hazelnuts carry more manganese and a stronger flavor. In most recipes, they can be swapped for each other.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can children eat hazelnuts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with care. Hazelnuts are a tree nut allergen — introduce them gradually and watch for reactions. For children under 3, avoid whole hazelnuts (choking risk) and use ground or as a paste instead. Check with a pediatrician before introducing tree nuts to a child with a family history of allergies.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hazelnuts: Nutrition, Benefits, and How to Use Them in the Kitchen',
  description: 'Hazelnuts are a nutrient-dense tree nut rich in vitamin E and healthy fats — the same one behind Nutella. What they are, benefits, how many to eat, and how to cook with them.',
  image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-avela',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Hazelnuts', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-avela' },
  ],
}

export default function HazelnutsEn() {
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
            <li className="breadcrumb-current" aria-current="page">Hazelnuts</li>
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
            Hazelnuts: What They Are and Why You&apos;ve Already Eaten One
          </h1>
          <p className="blog-desc">
            The tree nut behind half the dessert menu in the world — and the one most people can name from the taste alone, not the name on the bag.
          </p>

          <div className="answer-box">
            <p>
              <strong>Hazelnuts</strong> are the edible seed of the hazel tree (<em>Corylus avellana</em>), native to Europe and Asia Minor.
              Rich in monounsaturated fat, vitamin E, and fiber — and the main ingredient in Nutella.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Whole hazelnuts in a wooden bowl, showing the natural texture and color of the nut"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pixabay / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-a-hazelnut">What a hazelnut actually is</a></li>
              <li><a href="#nutrition">Nutritional value</a></li>
              <li><a href="#benefits">Health benefits</a></li>
              <li><a href="#how-to-use">How to use them in the kitchen</a></li>
              <li><a href="#raw-vs-roasted">Raw vs roasted</a></li>
              <li><a href="#how-to-store">How to store them so they last</a></li>
              <li><a href="#how-many">How many to eat a day</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          <h2 id="what-is-a-hazelnut">What a hazelnut actually is</h2>

          <p>
            A hazelnut is the edible seed of the hazel tree, botanical name <em>Corylus avellana</em>, native to the temperate forests of Europe and Asia Minor. The tree produces small nuts with a hard shell — roughly the size of a large marble — that crack open to reveal an oval, cream-colored kernel with a mild, slightly sweet flavor.
          </p>

          <p>
            Botanically, hazelnuts sit in the same family as{' '}
            <a href="/en/blog/o-que-e-amendoa">almonds</a>, walnuts, and Brazil nuts. What they all share: a hard outer shell, a kernel rich in good fat, and zero relation to the tropical fruit stand at the grocery store.
          </p>

          <p>
            You have almost certainly eaten hazelnut without registering the name. Nutella is hazelnut paste with cocoa and sugar — the nut makes up more than 13% of the recipe. Ferrero Rocher has a whole hazelnut at the center. Plenty of ice creams, chocolates, and "gourmet" coatings on the shelf are made with the same nut, most of which comes from Turkey, which grows over 70% of the world&apos;s supply.
          </p>

          <div className="blog-inline-cta">
            <p>
              Using hazelnuts in a recipe this week? Add them to the list and log them in your pantry before you shop.{' '}
              <em>Mise reminds you when you&apos;re running low.</em>
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              Start free →
            </a>
          </div>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4453193/pexels-photo-4453193.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Whole and halved hazelnuts on a rustic surface, showing the kernel inside"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>
          <h2 id="nutrition" className="img-above">Nutritional value of hazelnuts</h2>

          <p>
            Hazelnuts are calorie-dense — 628 calories per 100g — and most of that is fat. But it&apos;s the right kind. Nearly 75% of the fat in a hazelnut is monounsaturated, the same profile as olive oil. The rest is polyunsaturated, with a small saturated fraction.
          </p>

          <p>
            Reference values per 100g of raw hazelnuts (USDA):
          </p>

          <div className="copy-box">
            <p>
              <strong>Calories:</strong> 628 kcal<br />
              <strong>Total fat:</strong> 61g (monounsaturated: 46g)<br />
              <strong>Protein:</strong> 15g<br />
              <strong>Carbs:</strong> 17g<br />
              <strong>Fiber:</strong> 10g<br />
              <strong>Vitamin E:</strong> 15mg — 100% of daily value<br />
              <strong>Manganese:</strong> 6.2mg — 269% of daily value<br />
              <strong>Copper:</strong> 1.7mg — 189% of daily value<br />
              <strong>Magnesium:</strong> 163mg — 39% of daily value
            </p>
          </div>

          <p>
            The practical everyday serving is 1 ounce (28g) — about 20 to 21 kernels, or a closed handful. That gets you roughly 176 calories, 17g of good fat, 3g of fiber, and a generous share of your daily vitamin E, manganese, and copper.
          </p>

          <h2 id="benefits">Health benefits backed by research</h2>

          <p>
            Hazelnuts aren&apos;t medicine. But they carry a nutrient profile that shows up consistently in research on diet and cardiovascular health:
          </p>

          <ul className="item-list">
            <li>
              <strong>Heart health.</strong> Monounsaturated fats are linked to lower LDL ("bad" cholesterol) and better artery function. Studies on tree nuts in general show reduced inflammatory markers with regular consumption as part of a balanced diet.
            </li>
            <li>
              <strong>Antioxidant protection.</strong> Hazelnuts are one of the richest food sources of vitamin E, which fights oxidative stress — the process tied to cellular aging and chronic inflammation. A 1-ounce serving covers most of the recommended daily amount.
            </li>
            <li>
              <strong>Gut health.</strong> With 10g of fiber per 100g, hazelnuts support digestion and a healthy gut microbiome. They don&apos;t replace leafy greens, but they help close the daily fiber gap.
            </li>
            <li>
              <strong>Real satiety.</strong> The combination of fat, protein, and fiber makes hazelnuts a more satisfying snack than most packaged options in the same calorie range.
            </li>
          </ul>

          <p>
            What hazelnuts don&apos;t do: they don&apos;t cause weight loss on their own, don&apos;t treat any disease, and don&apos;t make up for a poor diet the rest of the day. The benefits show up in the context of a varied, consistent eating pattern — not in isolation.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5939765/pexels-photo-5939765.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Homemade hazelnut spread on a wooden spoon next to whole hazelnuts on a counter"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>
          <h2 id="how-to-use" className="img-above">How to use hazelnuts in the kitchen</h2>

          <p>
            Hazelnuts have a versatility most other nuts don&apos;t. The flavor is distinct enough to show up in small amounts, but never aggressive — it works with sweet, savory, and coffee.
          </p>

          <ul className="item-list">
            <li>
              <strong>As a snack.</strong> Raw or dry-roasted, no salt, no sugar. A small bowl of 20-25 kernels between meals. No fuss required.
            </li>
            <li>
              <strong>At breakfast.</strong> Chopped over oatmeal, plain yogurt, or granola. A single tablespoon adds texture and good fat.
            </li>
            <li>
              <strong>In desserts.</strong> Homemade hazelnut spread (process for 8-10 minutes until smooth), brownies with chopped hazelnuts, chocolate ganache. Any recipe that calls for chopped almonds works with hazelnuts instead.
            </li>
            <li>
              <strong>In salads.</strong> Roasted, chopped hazelnuts on a bed of greens with a soft cheese and balsamic vinaigrette — a classic European bistro combination that translates well anywhere.
            </li>
            <li>
              <strong>In baking.</strong> Hazelnut flour (ground hazelnuts) replaces part of the wheat flour in cakes and cookies, leaving the result moister and more flavorful.
            </li>
          </ul>

          <p>
            What pairs well: dark chocolate, coffee, cinnamon, honey, pear, fig, brie. What doesn&apos;t: very acidic flavors (lemon, passion fruit) tend to overwhelm the hazelnut&apos;s delicate taste.
          </p>

          <p>
            A practical tip: if you&apos;re going to use hazelnuts often, buy them skinned. Peeling them yourself is a chore — you roast for 10 minutes, let them cool, then rub them in a dry towel to loosen the papery skin. It works, but it&apos;s the kind of step that kills the motivation to use them at all. Pre-skinned saves that step every time.
          </p>

          <h2 id="raw-vs-roasted">Raw vs roasted: which is better</h2>

          <p>
            Roasting hazelnuts slightly reduces vitamin E content and some antioxidant compounds. The real difference is small — around 10-15% depending on oven temperature and time. What matters more is consistency: eating 1 ounce of roasted hazelnuts every day beats eating raw hazelnuts once a week.
          </p>

          <p>
            The practical case for roasted: the flavor deepens, the papery inner skin (slightly bitter) comes off more easily, and the crunch is more satisfying whether you&apos;re snacking or topping a dish.
          </p>

          <p>
            How to roast at home: spread on a baking sheet, oven at 300°F (150°C) for 10-12 minutes. Let them cool completely before storing — trapped heat inside the container creates moisture and speeds up oxidation.
          </p>

          <p>
            What to avoid: salted, candied, or chocolate-covered hazelnuts. The nutritional profile changes completely. A salted hazelnut isn&apos;t a healthier version of the plain kind — it&apos;s a processed snack that happens to use hazelnut as an ingredient.
          </p>

          <h2 id="how-to-store">How to store hazelnuts so they don&apos;t go stale</h2>

          <p>
            Hazelnuts are high in fat, which is exactly what makes them go rancid if left exposed to air and heat. How you store them matters more than most pantry staples.
          </p>

          <ul className="item-list">
            <li>
              <strong>In the shell:</strong> keeps for up to a year in a cool, dry spot. The shell does most of the protective work.
            </li>
            <li>
              <strong>Shelled, raw:</strong> more exposed to oxidation — keep in an airtight container in the fridge, where they&apos;ll hold quality for about 3 months.
            </li>
            <li>
              <strong>Roasted:</strong> best within 2 weeks at room temperature in a sealed container. Roasting speeds up how fast the fat turns.
            </li>
          </ul>

          <p>
            If you use hazelnuts often enough to buy in bulk, it&apos;s worth logging them in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            with the date you opened the bag — that way you know when they&apos;re getting close to turning.
          </p>

          <h2 id="how-many">How many hazelnuts to eat a day</h2>

          <p>
            The standard reference — shared with other tree nuts — is a 1-ounce (28g) serving a day. That&apos;s 20 to 21 hazelnuts, roughly a closed handful. It delivers about 176 calories, 17g of good fat, 3g of fiber, and enough vitamin E to cover most of the daily target.
          </p>

          <p>
            More than that doesn&apos;t bring a proportional benefit — it just adds calories without much upside. Hazelnuts are dense. A small handful goes a long way.
          </p>

          <p>
            As a snack swap: trading a 1-ounce ultra-processed cereal bar for the same weight in hazelnuts delivers more protein, more fiber, and less sugar. The{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            in Mise helps you plan before you shop — put hazelnuts on the list so you don&apos;t forget them in the nut aisle.
          </p>

          <p>
            One note for anyone with a tree nut allergy: hazelnuts sit in the same allergen group as almonds, walnuts, and cashews. If you react to any of those, talk to a doctor before introducing hazelnuts.
          </p>

          <h2 id="faq">Frequently asked questions about hazelnuts</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What is a hazelnut?</p>
              <p className="faq-a">
                A hazelnut is the edible seed of the hazel tree (<em>Corylus avellana</em>), native to Europe and Asia Minor. It&apos;s a tree nut — in the same family as almonds, walnuts, and cashews — rich in monounsaturated fat, vitamin E, and fiber.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many hazelnuts should you eat a day?</p>
              <p className="faq-a">
                The standard serving is about 1 ounce (28g) — 20 to 21 kernels, or a closed handful. That delivers around 176 calories, healthy fat, fiber, and vitamin E without piling on calories.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do hazelnuts make you gain weight?</p>
              <p className="faq-a">
                They&apos;re calorie-dense — 628 calories per 100g. In the right portion (1 ounce a day), the fat and fiber promote satiety. The problem is eating without limits: hazelnuts covered in sugar or chocolate have a very different calorie profile than the plain kind.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are hazelnuts gluten-free?</p>
              <p className="faq-a">
                Plain hazelnuts have no gluten — they&apos;re a tree nut, not a grain. Processed hazelnut products can pick up gluten through cross-contamination. Always check the label.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Raw or roasted hazelnuts: which is better?</p>
              <p className="faq-a">
                Raw holds onto slightly more vitamin E. Dry-roasted (no salt, no oil) tastes richer and is more practical to cook with. The nutritional gap is small — eating them regularly matters more.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store hazelnuts at home?</p>
              <p className="faq-a">
                In the shell, they keep for up to a year in a cool, dry place. Shelled and raw, about 3 months in the fridge in an airtight container. Roasted, about 2 weeks at room temperature in a sealed container. Heat and moisture speed up oxidation.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the difference between hazelnuts and almonds?</p>
              <p className="faq-a">
                They&apos;re tree nuts from different species. Hazelnuts have a richer, oilier flavor; almonds are more neutral. Both are rich in healthy fats and vitamin E, but hazelnuts carry more manganese and a stronger flavor. In most recipes, they can be swapped for each other.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can children eat hazelnuts?</p>
              <p className="faq-a">
                Yes, with care. Hazelnuts are a tree nut allergen — introduce gradually and watch for reactions. For children under 3, avoid whole hazelnuts (choking risk) and use ground or as a paste instead. Check with a pediatrician before introducing tree nuts if there&apos;s a family history of allergies.
              </p>
            </li>
          </ul>

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
                Creator of Mise. Cooks Monday through Friday and grocery shops on Saturday — when he remembers. Built Mise to stop coming home from the store without what he actually needed.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Your pantry keeps track of the hazelnuts.
              <br />
              <em>Let Mise handle the rest.</em>
            </h2>
            <p>
              Log what you have, build the list of what&apos;s missing, and stop finding out the hazelnuts are gone halfway through a recipe.
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
