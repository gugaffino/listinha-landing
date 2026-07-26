import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Apples: Types, Nutrition Facts, and Best Uses in the Kitchen',
  description: 'A medium apple has about 95 calories and 4g of fiber. Learn the differences between Honeycrisp, Granny Smith, Fuji, and Gala — and which one to bake, cook, or eat raw.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-maca',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-maca',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-maca',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-maca',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-maca',
    },
  },
  openGraph: {
    title: 'Apples: Types, Nutrition Facts, and Best Uses in the Kitchen',
    description: 'A medium apple has about 95 calories and 4g of fiber. Learn the differences between Honeycrisp, Granny Smith, Fuji, and Gala — and which one to bake, cook, or eat raw.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-maca',
    images: [
      {
        url: 'https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh red apple in close-up on a dark surface — Gala variety',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apples: Types, Nutrition Facts, and Best Uses in the Kitchen',
    description: 'A medium apple has about 95 calories and 4g of fiber. Learn the differences between Honeycrisp, Granny Smith, Fuji, and Gala — and which one to bake, cook, or eat raw.',
    images: ['https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you eat apple skin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, and you should. The skin holds a big share of the apple's fiber and quercetin, an antioxidant compound. Most nutrition data for apples is measured with skin on. Wash it well under running water before eating — commercial wax coatings used for shelf life sit on the skin, not inside the fruit.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which apple is the healthiest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nutritionally, the differences between varieties are small. Granny Smith has slightly less sugar and slightly more vitamin C, which can matter for blood sugar control. Fuji and Gala are sweeter and easier to eat by the handful. The healthiest apple is usually the one you'll actually eat before it goes soft in the bowl.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many apples a day is too many?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One a day is the classic guideline, and it holds up. A medium apple (about 182g) has roughly 95 calories and 4g of fiber — enough to count toward daily fruit intake without overdoing natural sugar. Two a day is still reasonable. Beyond that, fructose intake climbs with no clear extra benefit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do apples cause weight gain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An apple has about 52 calories per 100g — one of the lower-calorie fruits by weight. The sugar in it is natural fructose bundled with fiber and water, which slows absorption. Eating an apple doesn\'t cause weight gain on its own. The "permission" effect — eating the apple and treating it as a license for the cookies afterward — is a separate problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store apples so they last longer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the fridge crisper drawer, away from onions and other ethylene-sensitive produce — apples release ethylene, a gas that speeds up ripening in whatever sits near them. Refrigerated, they hold up for four to six weeks. On the counter, use them within a week to ten days; apples ripen roughly ten times faster at room temperature.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you freeze apples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, but the texture turns soft once thawed, so frozen apples aren't great for eating raw or in salads. They work well in smoothies, applesauce, and pie filling — pie filling can even go straight into the oven from frozen. Peel, slice, freeze in a single layer on a tray, then transfer to a sealed bag.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best apple for pie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Granny Smith is the standard choice — it holds its shape after baking and its tartness balances a sweet crust. Honeycrisp and Braeburn also bake well without turning to mush. Skip Red Delicious and McIntosh in pie: both break down too much and can leave the filling watery.",
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Apples: Types, Nutrition Facts, and Best Uses in the Kitchen',
  description: 'A medium apple has about 95 calories and 4g of fiber. Learn the differences between Honeycrisp, Granny Smith, Fuji, and Gala — and which one to bake, cook, or eat raw.',
  image: 'https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-maca',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Apples', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-maca' },
  ],
}

export default function OQueEMacaEn() {
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
            <li className="breadcrumb-current" aria-current="page">Apples</li>
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
            Apples 101: types, nutrition, and which one to use for what
          </h1>
          <p className="blog-desc">
            More than 7,500 apple varieties exist worldwide, but most grocery stores stock a dozen at most. Each one behaves differently in the oven, the lunchbox, or the fruit bowl — and grabbing the wrong bag is a common reason pie filling turns to mush.
          </p>

          <div className="answer-box">
            <p>
              An <strong>apple</strong> is the fruit of the apple tree (<em>Malus domestica</em>), one of the most widely grown and eaten fruits on the planet.
              It has about 52 calories per 100g, with pectin — a soluble fiber tied to satiety and gut health — as its standout nutrient.
              Grocery shelves are usually stocked with Gala, Fuji, Granny Smith, Honeycrisp, and Red Delicious, and each variety has a different ideal use in the kitchen.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh red apple in close-up on a dark surface — Gala variety"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pixabay / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article index">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What is an apple</a></li>
              <li><a href="#types">Types of apples</a></li>
              <li><a href="#nutrition-facts">Nutrition facts and calories</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#how-to-choose">How to choose at the store</a></li>
              <li><a href="#how-to-store">How to store at home</a></li>
              <li><a href="#how-to-use">How to use in the kitchen</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Red and green apples mixed together on a rustic wooden surface"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pixabay / Pexels</p>
          </div>

          <h2 id="what-is-it" className="img-above">What is an apple</h2>

          <p>
            An apple is the fruit of <em>Malus domestica</em>, a tree in the rose family — the same family as peaches, pears, and plums. It's one of the oldest cultivated fruits: wild ancestors trace back to the forests of what is now Kazakhstan, and cultivation in Central Asia and Europe goes back thousands of years.
          </p>
          <p>
            In the US, Washington State grows roughly two-thirds of the country's fresh apples, with New York, Michigan, and Pennsylvania making up most of the rest. Globally, China is the largest producer by far, followed by the US, Turkey, and Poland. Harvest season runs late summer through fall, which is why apples taste best — and cost least — from September through November.
          </p>
          <p>
            Botanically, an apple is what's called a "false fruit" — what you eat is the swollen flower receptacle, not the ovary itself. That's more of a trivia fact than something that changes how you shop, but it explains why the tough core in the center is structurally different from the flesh around it.
          </p>
          <p>
            Flavor varies a lot by variety, from candy-sweet (Fuji, Gala, Honeycrisp) to sharply tart (Granny Smith). That range matters in the kitchen — it's not just a matter of personal taste.
          </p>

          {/* TYPES */}
          <h2 id="types">Types of apples</h2>

          <p>
            More than 7,500 varieties are registered worldwide. Most grocery stores carry somewhere between six and twelve of them regularly, and the practical way to sort them out is by how they behave: some are built for snacking, some for baking, and a few do both.
          </p>

          <h3>Honeycrisp</h3>
          <p>
            Explosively crisp with a sweet-tart balance, bred at the University of Minnesota and released in the early 1990s. It's usually the most expensive apple in the bin — the tree is finicky to grow and the fruit bruises easily, which drives up cost. Great for snacking, holds up reasonably well in baking too.
          </p>

          <h3>Granny Smith</h3>
          <p>
            Bright green, firm, and the tartest of the common varieties. This is the standard baking apple: it holds its shape in the oven, and its acidity balances a sweet pie crust or crumble topping. Also works well in savory dishes — salads with blue cheese and walnuts, or as a side with pork.
          </p>

          <h3>Fuji</h3>
          <p>
            Very sweet, dense, and crisp, with low acidity. Originally bred in Japan (the name comes from Fujisaki, the town where it was developed) and now grown widely elsewhere. Excellent for eating out of hand and lasts longer in the fridge than most varieties. Holds up moderately well baked, though it's sweeter than a traditional pie needs.
          </p>

          <h3>Gala</h3>
          <p>
            Mild, sweet, and easy to eat — one of the most common eating apples on shelves. The texture is softer than Fuji or Honeycrisp, which makes it a poor choice for pie: it breaks down too much in the oven and can leave the filling watery. Good raw, in salads, or cooked down into sauce.
          </p>

          <h3>Red Delicious</h3>
          <p>
            Mostly bred for looks and mild sweetness rather than texture. Best eaten fresh; it turns mealy when baked, so it's one to skip for pies or crumbles.
          </p>

          <h3>McIntosh</h3>
          <p>
            Tender, juicy, with a tart-sweet balance. Breaks down fast when cooked, which makes it excellent for applesauce but a poor structural choice for pie, where you want slices that hold together.
          </p>

          <h3>Braeburn, Pink Lady, and Golden Delicious</h3>
          <p>
            All three are solid all-purpose apples — firm enough to bake without turning to mush, sweet enough to eat raw. Golden Delicious in particular breaks down a bit more than the others, which makes it a good pick for applesauce as well as pie.
          </p>

          {/* NUTRITION */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh apple slices on a wooden cutting board — firm white flesh in close-up"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pixabay / Pexels</p>
          </div>

          <h2 id="nutrition-facts" className="img-above">Apple nutrition facts and calories</h2>

          <p>
            Per USDA FoodData Central, one medium apple with skin (about 182g) has approximately:
          </p>

          <ul className="item-list">
            <li><strong>Calories:</strong> 95 kcal</li>
            <li><strong>Carbohydrates:</strong> 25 g (about 19 g are natural sugars)</li>
            <li><strong>Dietary fiber:</strong> 4 g</li>
            <li><strong>Protein:</strong> 0.5 g</li>
            <li><strong>Total fat:</strong> 0.3 g</li>
            <li><strong>Vitamin C:</strong> 8.4 mg (about 9% of the Daily Value)</li>
            <li><strong>Potassium:</strong> 195 mg</li>
            <li><strong>Water:</strong> roughly 86% of total weight</li>
          </ul>

          <p>
            Most of that weight is water, which is part of why an apple is filling without being calorie-dense. The fiber is mostly pectin, a soluble fiber that forms a gel in the gut and has documented effects on cholesterol regulation and post-meal blood sugar.
          </p>
          <p>
            Vitamin C content is modest compared to citrus, but consistent. The apple's real nutritional strength isn't any single nutrient — it's the combination of fiber, hydration, and antioxidants in a snack that requires zero preparation and costs less than most packaged alternatives.
          </p>

          {/* BENEFITS */}
          <h2 id="benefits">Benefits of eating apples</h2>

          <p>
            An apple isn't a superfood. It doesn't cure anything, detox anything, or replace medication. What it does is stay reliably good within a varied diet — and that consistency has real value.
          </p>
          <p>
            Pectin has the strongest research backing here. Observational studies link regular apple consumption to lower LDL ("bad") cholesterol — pectin binds to bile acids in the gut, which reduces cholesterol reabsorption. The effect shows up with regular intake, not an occasional apple.
          </p>
          <p>
            The polyphenols concentrated in the skin carry meaningful antioxidant activity. Quercetin, found mostly in the peel, is studied for anti-inflammatory effects in lab research. It's one more argument for eating the skin, not for buying a quercetin supplement.
          </p>
          <p>
            In practical terms, the biggest benefit of an apple is logistical: it's cheap, available year-round, portable, needs no prep, and most people actually like eating it. For anyone trying to eat more fruit without overhauling their routine, it's a reasonable entry point — as long as it actually gets eaten and doesn't just decorate the counter.
          </p>

          <div className="blog-inline-cta">
            <p>Put the apples — and everything else — on the list before you shop.</p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO CHOOSE */}
          <h2 id="how-to-choose">How to choose apples at the store</h2>

          <p>
            A bad apple doesn't improve once it's home. Thirty seconds of checking before it goes in the cart saves you the disappointment.
          </p>

          <ul className="item-list">
            <li><strong>Firmness:</strong> press lightly with your thumb. It should resist. A soft apple is already past its prime.</li>
            <li><strong>Skin:</strong> no deep bruises, dark soft spots, or shriveling. Small color variation is normal and doesn't affect flavor.</li>
            <li><strong>Weight:</strong> a good apple feels heavy for its size. A light one is usually dried out inside.</li>
            <li><strong>Smell:</strong> ripe apples have a faint sweet, floral aroma. No smell usually means bland flavor. A fermented smell means it's overripe.</li>
            <li><strong>Season:</strong> harvest runs late summer through fall. In season, apples are fresher and cheaper. The rest of the year, most come from cold storage or imports.</li>
          </ul>

          <p>
            Store apples are commonly coated with a thin commercial wax for shelf life. It's safe to eat, but it means the skin should be washed well if you're planning to eat it — which, given where most of the fiber lives, you should.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store apples at home</h2>

          <p>
            Apples are sensitive to ethylene — a natural gas fruit releases as it ripens. The catch is that apples release ethylene <em>actively</em>, which speeds up ripening in whatever sits near them. In the fridge, keep them in the crisper drawer, separate from leafy greens, berries, and other ethylene-sensitive produce.
          </p>
          <p>
            On the counter, apples ripen roughly ten times faster than in the fridge and typically last one to two weeks depending on variety and room temperature. Refrigerated, they hold up for four to six weeks — sometimes longer for firmer varieties like Granny Smith or Fuji. If you tend to buy fruit for the whole week at once — something{' '}
            <a href="/en/funcionalidades/despensa">Mise's pantry tracker</a>{' '}
            helps keep visible — the fridge is worth the habit.
          </p>
          <p>
            Cut apples brown fast from oxidation. A squeeze of lemon juice on the slices slows the reaction if you're not eating them right away.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use apples in the kitchen</h2>

          <p>
            Apples go well beyond eating out of hand. It's a versatile ingredient across sweet dishes, savory plates, and drinks — but each variety has its lane.
          </p>

          <h3>Raw and fresh</h3>
          <p>
            The simplest and most nutritious use — pectin and skin antioxidants stay fully intact. Good in salads with walnuts, cheese, and bitter greens, sliced with peanut butter, or eaten straight as a snack. Any variety works, but Fuji, Gala, and Honeycrisp are the most popular for their sweetness and crunch.
          </p>

          <h3>Baked and cooked</h3>
          <p>
            Granny Smith is the standard choice. It holds its shape once baked, doesn't turn to mush, and its tartness gets more pronounced with heat. Baked apples with cinnamon and oats are one of the few desserts that take ten minutes and win over almost anyone. For pies and crumbles, stick with Granny Smith, Honeycrisp, or Braeburn — skip Red Delicious and McIntosh, which soften too much and can leave the filling watery.
          </p>
          <p>
            Baked apple also makes an easy addition to a simple{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly meal plan</a>{' '}
            when you want dessert without much technical skill — most kitchens already have cinnamon on hand.
          </p>

          <h3>In salads and savory dishes</h3>
          <p>
            Granny Smith shines here. Its acidity cuts through fat from meat and cheese, and its crunch holds up against acidic dressings. A classic pairing is blue cheese, walnuts, and arugula. It also works as a side with pork loin or ribs — the tartness complements the fat.
          </p>

          <h3>Juice and smoothies</h3>
          <p>
            Apple juice has less fiber than eating the fruit whole — pressing removes most of the pectin. If keeping the fiber matters, eat the fruit instead. For smoothies, a whole apple, skin included, can go straight into the blender or food processor, preserving the full nutritional profile.
          </p>

          <h3>Classic recipes</h3>
          <p>
            Apple pie is the most iconic use, closely followed by apple crisp and crumble. Applesauce is simple to make and a good way to use up softer apples — McIntosh and Golden Delicious break down fastest, which is exactly what you want here. Caramel apples and baked apples round out the classics that show up every fall.
          </p>
          <p>
            If you buy apples regularly and want to make sure they stay on the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            before running out, Mise keeps track of your pantry and flags items before they're gone.
          </p>

          <p>
            You bought four Granny Smiths on Monday to make a pie on Saturday. Half of them get eaten raw by Wednesday. The pie happens the following week.
          </p>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Apple FAQ</h2>
            <dl className="faq-list">

              <div className="faq-item">
                <dt className="faq-q">Can you eat apple skin?</dt>
                <dd className="faq-a">
                  Yes, and you should. The skin holds a big share of the apple's fiber and quercetin, an antioxidant compound. Most nutrition data for apples is measured with skin on. Wash it well under running water before eating, since commercial wax coatings used for shelf life sit on the surface.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Which apple is the healthiest?</dt>
                <dd className="faq-a">
                  Nutritionally, the differences between varieties are small. Granny Smith has slightly less sugar and slightly more vitamin C, which can matter for blood sugar control. Fuji and Gala are sweeter and easier to eat by the handful. The healthiest apple is usually the one you'll actually eat before it goes soft.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">How many apples a day is too many?</dt>
                <dd className="faq-a">
                  One a day is the classic guideline, and it holds up. A medium apple (about 182g) has roughly 95 calories and 4g of fiber. Two a day is still reasonable. Beyond that, fructose intake climbs with no clear extra benefit.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Do apples cause weight gain?</dt>
                <dd className="faq-a">
                  An apple has about 52 calories per 100g — one of the lower-calorie fruits by weight. The sugar in it is natural fructose bundled with fiber and water, which slows absorption. Eating an apple doesn't cause weight gain. The "permission" effect — treating the apple as a license for cookies afterward — isn't the apple's fault.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">How do you store apples so they last longer?</dt>
                <dd className="faq-a">
                  The fridge crisper drawer, away from onions and other ethylene-sensitive produce, keeps apples good for four to six weeks. On the counter, use them within one to two weeks — apples ripen roughly ten times faster at room temperature than refrigerated.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Can you freeze apples?</dt>
                <dd className="faq-a">
                  Yes, but the texture turns soft once thawed, so it's not ideal for eating raw or in salads. Frozen apples work well in smoothies, applesauce, and pie filling, which can go straight into the oven from frozen. Peel, slice, freeze in a single layer on a tray, then transfer to a sealed bag.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">What is the best apple for pie?</dt>
                <dd className="faq-a">
                  Granny Smith is the standard: it holds its shape after baking and its tartness balances a sweet crust. Honeycrisp and Braeburn also bake well. Skip Red Delicious and McIntosh — both soften too much and can leave the filling watery.
                </dd>
              </div>

            </dl>
          </section>

          <div className="blog-author">
            <div className="blog-author-inner">
              <div className="blog-author-info">
                <span className="blog-author-name">Gus</span>
                <p className="blog-author-bio">
                  Mise's founder. Bought four Granny Smiths on Monday to make a pie on Saturday. Ate all of them raw by Wednesday. The pie never happened. Sources: <a href="https://fdc.nal.usda.gov" target="_blank" rel="noopener">USDA FoodData Central</a> and <a href="https://www.usapple.org" target="_blank" rel="noopener">US Apple Association</a>.
                </p>
              </div>
            </div>
          </div>

        </article>

        <div className="blog-cta reveal">
          <p className="blog-cta-title">Are apples already on the list?</p>
          <p className="blog-cta-sub">Mise keeps your pantry up to date and builds the list before you head to the store.</p>
          <a
            href="https://listinha-puce.vercel.app"
            className="btn btn-on-dark btn-lg"
            target="_blank"
            rel="noopener"
          >
            Start free →
          </a>
        </div>

        <a href="#main-content" className="back-to-top" aria-label="Back to top">↑</a>

      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Made with care for people who love to cook.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Open the app →</a>
        </div>
      </footer>
    </>
  )
}
