import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Sweet Potato: Nutrition Facts, Types, and How to Cook It',
  description: 'Sweet potatoes pack beta-carotene, fiber, and slow-digesting carbs. See the nutrition breakdown, main varieties, and how to store and cook them without waste.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/batata-doce',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/batata-doce',
      en: 'https://www.miseemcasa.com.br/en/blog/batata-doce',
      es: 'https://www.miseemcasa.com.br/es/blog/batata-doce',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/batata-doce',
    },
  },
  openGraph: {
    title: 'Sweet Potato: Nutrition Facts, Types, and How to Cook It',
    description: 'Sweet potatoes pack beta-carotene, fiber, and slow-digesting carbs. See the nutrition breakdown, main varieties, and how to store and cook them without waste.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/batata-doce',
    images: [
      {
        url: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh orange sweet potatoes in close-up on a dark surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweet Potato: Nutrition Facts, Types, and How to Cook It',
    description: 'Sweet potatoes pack beta-carotene, fiber, and slow-digesting carbs. See the nutrition breakdown, main varieties, and how to store and cook them without waste.',
    images: ['https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are sweet potatoes actually yams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sweet potatoes and yams are different plants from different families — yams are starchier tubers native to Africa and Asia, rarely sold in most grocery stores. US supermarkets started labeling orange sweet potatoes "yams" decades ago to tell them apart from paler varieties, and the name stuck. What you buy as a yam in most stores is a sweet potato.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are sweet potatoes good for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No single food causes weight loss or gain on its own. Sweet potatoes are filling, nutrient-dense, and lower in calories than many other carb sources. In a balanced diet, they fit in without being the problem. What matters is the overall pattern of what you eat, not one ingredient.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the glycemic index of a sweet potato?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends heavily on how you cook it. Boiled, the glycemic index sits around 44 to 61 — low to moderate. Baked, it can climb to the 80s or low 90s, because dry heat converts more starch into simple sugars. If blood sugar response matters to you, boiling or steaming keeps it lower.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat sweet potato skin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, and you probably should. The skin holds a meaningful share of the fiber and minerals. Scrub it well under running water before cooking. Roasted whole or cut into large chunks with the skin on is the simplest way to eat the whole vegetable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat sweet potatoes raw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Raw sweet potato isn't toxic, but the raw starch is hard to digest and can cause stomach discomfort. The texture is also firm and starchy rather than pleasant. Cooked — boiled, roasted, or baked — is when the flavor and digestibility actually work.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long do cooked sweet potatoes keep in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a sealed container in the fridge, three to five days. You can also freeze cooked sweet potato in portions — mashed or cubed — and it holds good texture for up to three months, ready for soups, mash, or fillings.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sweet Potato: Nutrition Facts, Types, and How to Cook It',
  description: 'Sweet potatoes pack beta-carotene, fiber, and slow-digesting carbs. See the nutrition breakdown, main varieties, and how to store and cook them without waste.',
  image: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/batata-doce',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Sweet Potato', item: 'https://www.miseemcasa.com.br/en/blog/batata-doce' },
  ],
}

export default function BatataDoceEn() {
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
            <li className="breadcrumb-current" aria-current="page">Sweet Potato</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-25">Jul 25, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Sweet potato 101: nutrition, varieties, and how to use it without waste
          </h1>
          <p className="blog-desc">
            One of the cheapest, most complete root vegetables you can buy — and one of the most likely to end up sprouting at the back of the pantry. Here's what's actually in it, how to pick a good one, how to store it, and how to cook it.
          </p>

          <div className="answer-box">
            <p>
              A <strong>sweet potato</strong> (<em>Ipomoea batatas</em>) is a root vegetable with orange, white, or purple flesh,
              rich in beta-carotene, fiber, and complex carbohydrates with a low-to-moderate glycemic index.
              It's grown and sold year-round, and it's one of the most affordable, nutrient-dense staples
              you can put in a cart.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh orange sweet potatoes in close-up on a dark surface"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Jorge Romero / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article index">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What is a sweet potato</a></li>
              <li><a href="#nutrition-facts">Nutrition facts</a></li>
              <li><a href="#types">Types of sweet potato</a></li>
              <li><a href="#how-to-choose">How to choose one at the store</a></li>
              <li><a href="#how-to-store">How to store it at home</a></li>
              <li><a href="#how-to-cook">How to cook it</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/89247/pexels-photo-89247.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sweet potato sliced in half showing vivid orange interior"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Ela Haney / Pexels</p>
          </div>

          <h2 id="what-is-it" className="img-above">What is a sweet potato</h2>

          <p>
            Sweet potato (<em>Ipomoea batatas</em>) is a root vegetable in the morning glory family, Convolvulaceae.
            It's not closely related to the regular potato (<em>Solanum tuberosum</em>), which belongs to the nightshade family.
            The similar name is a botanical coincidence, and it's confused people for generations.
          </p>
          <p>
            The part you eat is the tuberous root, not the stem. The plant grows low and vining, with heart-shaped leaves.
            In most growing regions it's harvested year-round, which is why it stays cheap and available regardless of season.
          </p>
          <p>
            Flesh color depends on the variety: orange (the most common), white, yellow, or purple.
            Orange flesh carries the most beta-carotene, the compound your body converts into vitamin A.
            Purple flesh is high in anthocyanins, antioxidant compounds studied for cardiovascular health.
          </p>
          <p>
            The flavor is naturally sweet, and it gets sweeter with cooking — heat converts part of the starch into maltose.
            That's the exact reason a roasted sweet potato tastes sweeter than a boiled one.
          </p>
          <p>
            Sweet potato and regular potato are distant relatives — about as related as you and that coworker
            you've never spoken to, technically "on the same team."
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition-facts">Sweet potato nutrition facts</h2>

          <p>
            A medium sweet potato, baked with the skin on (about 114g), has roughly 100 calories, 24g of carbs,
            4g of fiber, and 2g of protein, according to{' '}
            <a href="https://fdc.nal.usda.gov" target="_blank" rel="noopener">USDA FoodData Central</a>.
          </p>
          <p>
            The standout is beta-carotene. One medium sweet potato with orange flesh can cover more than 100%
            of the recommended daily vitamin A intake. No supplement, no fortified product — just the vegetable.
          </p>
          <p>
            Fiber is where it quietly beats a lot of side dishes. Compared to white rice — about 0.4g of fiber
            per 100g cooked — sweet potato has roughly seven times more fiber in the same amount.
            It also carries more potassium than a banana, gram for gram.
          </p>

          <h3>Vitamins and minerals worth knowing about</h3>
          <p>
            Beyond beta-carotene, sweet potato provides vitamin C, vitamin B6, potassium, and manganese
            in meaningful amounts. Potassium plays a role in blood pressure regulation.
            Vitamin B6 is involved in protein metabolism and nervous system function.
          </p>

          <h3>Glycemic index</h3>
          <p>
            The glycemic index of a sweet potato depends on how it's cooked. Boiled, it sits between 44 and 61 —
            low to moderate. Baked, it can reach the 80s or low 90s, because dry heat converts more starch
            into simple sugars.
          </p>
          <p>
            That doesn't make baking a bad choice. It means the cooking method matters when blood sugar
            response is a priority. Eating it with the skin on, and not overcooking it, both help keep the
            glycemic response lower.
          </p>

          {/* TYPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13059602/pexels-photo-13059602.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Whole unpeeled sweet potatoes on a rustic surface in close-up"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Marcelo Verfe / Pexels</p>
          </div>

          <h2 id="types" className="img-above">Types of sweet potato</h2>

          <p>
            Dozens of cultivars exist, but at the grocery store the practical way to tell them apart is by
            skin and flesh color.
          </p>

          <h3>Orange-fleshed sweet potato</h3>
          <p>
            The one you'll see most often, sold as Beauregard, Garnet, or Jewel depending on the region —
            and, confusingly, often just labeled "yam" in US stores. Copper to reddish skin, deep orange flesh,
            the highest beta-carotene content of the group. Pronounced sweetness, soft texture once cooked.
            Works roasted, boiled, mashed, or in soup.
          </p>

          <h3>White sweet potato</h3>
          <p>
            Tan or light brown skin, white to cream flesh. Milder, less sweet flavor, firmer texture.
            Good for dishes where the orange variety's sweetness would compete with other flavors —
            chips, savory sides, or more delicate recipes.
          </p>

          <h3>Purple sweet potato</h3>
          <p>
            Less common in a standard supermarket, easier to find at farmers markets or natural food stores.
            Skin and flesh are both deeply purple, from the same anthocyanins that show up in purple cabbage.
            The flavor is slightly earthy. A striking option for mash, smoothies, or anything meant to look different.
          </p>

          <h3>Japanese sweet potato</h3>
          <p>
            Purple-red skin with pale, almost white flesh that turns creamy and dense once roasted.
            The flavor leans toward chestnut — drier and less watery than the orange kind.
            It's become a farmers-market and specialty-grocery favorite, and it roasts especially well whole.
          </p>

          {/* HOW TO CHOOSE */}
          <h2 id="how-to-choose">How to choose sweet potatoes at the store</h2>

          <p>
            A good sweet potato doesn't take much guesswork. A few practical checks save you a bad pick.
          </p>

          <ul className="item-list">
            <li><strong>Firm, smooth skin.</strong> Skip anything soft, sunken, or darkened — early signs it's starting to spoil.</li>
            <li><strong>No long sprouts.</strong> A tiny sprout is still fine. A long one means it's lost moisture and sat on the shelf too long.</li>
            <li><strong>Medium size.</strong> Very large sweet potatoes tend to have a more fibrous core. Medium ones (7 to 12 oz) cook more evenly.</li>
            <li><strong>No deep cracks.</strong> A small surface crack is normal. A crack that exposes the flesh speeds up spoilage.</li>
          </ul>

          <p>
            At a farmers market, it's worth asking when it was harvested — recently picked sweet potatoes
            have firmer skin and keep longer. A supermarket won't usually give you that information.
          </p>
          <p>
            Anyone who cooks regularly ends up putting sweet potato on their{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            as a standing item. It holds up over a full week — unlike leafy greens or delicate fruit.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store sweet potatoes at home</h2>

          <p>
            This is where most people get it wrong. Raw sweet potato doesn't belong in the fridge —
            cold temperatures change the starch and leave the texture chalky once cooked.
          </p>

          <h3>Raw, whole</h3>
          <p>
            Keep it somewhere cool, dark, and ventilated — away from the stove and direct light.
            In a pantry or kitchen cabinet, it easily lasts one to two weeks.
            Don't seal it in a closed plastic bag; it needs airflow. A paper bag or open basket works better.
          </p>
          <p>
            Keep it away from onions and garlic — they release ethylene and speed up spoilage.
            Mise's{' '}
            <a href="/en/funcionalidades/despensa">pantry tracker</a>{' '}
            lets you log where each item lives and when you bought it, which is exactly what keeps
            a sweet potato from turning up with a sprout two weeks later.
          </p>

          <h3>Raw, peeled or cut</h3>
          <p>
            If you peel it and won't use it right away, submerge it in cold water with a splash of lemon
            juice to stop it from browning. In the fridge like that, it holds for about a day.
            Beyond that, the texture starts to shift. Peeling close to cook time is the better habit.
          </p>

          <h3>Cooked</h3>
          <p>
            In a sealed container in the fridge, it lasts three to five days. You can freeze it in portions —
            up to three months in the freezer, with good texture for mash, soup, or fillings. Freeze it
            already mashed or cubed, depending on how you plan to use it.
          </p>

          <p>
            Households waste an estimated{' '}
            <a href="https://www.unep.org/resources/report/unep-food-waste-index-report-2021" target="_blank" rel="noopener">17% of the food available to them every year, according to the UN Environment Programme's Food Waste Index</a>.
            A raw sweet potato forgotten at the bottom of a drawer is part of that number, every single week.
            Knowing where to keep it is half the fix.
          </p>

          <div className="blog-inline-cta">
            <p>Know what's in your pantry before you shop. <em>That's what Mise does.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO COOK */}
          <h2 id="how-to-cook">How to cook sweet potatoes</h2>

          <p>
            Sweet potato is genuinely versatile — not in the vague "works with everything" sense, but in
            the concrete sense that it shows up in very different dishes and performs well in all of them.
          </p>

          <h3>Boiled</h3>
          <p>
            The simplest method. Skin on, in salted water, for 20 to 25 minutes.
            Test with a fork — when it slides in easily, it's done.
            Eat it as-is with olive oil and herbs, or use it as the base for mash.
          </p>

          <h3>Roasted whole</h3>
          <p>
            Oven at 400°F, skin on, 40 to 50 minutes depending on size.
            The flesh turns creamy and very sweet. Fill it with yogurt, cottage cheese, scrambled egg,
            or seasoned beans. This method gets the most out of its natural flavor.
          </p>

          <h3>Cubed and roasted</h3>
          <p>
            Cut into cubes with the skin on, toss with olive oil, salt, garlic, and rosemary, roast at
            400°F for 25 to 30 minutes. Crisp outside, soft inside. Works as a side for meat, chicken, or
            eggs — an easy addition to any{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly meal plan</a>{' '}
            without extra effort.
          </p>

          <h3>Mashed</h3>
          <p>
            Cook until soft, mash with olive oil or butter, salt, and a little nutmeg.
            The natural sweetness balances against the salt and spice.
            One easy variation: mix it with butternut squash — more complex flavor, no extra work.
          </p>

          <h3>Soups and purées</h3>
          <p>
            It works well in soups with ginger, cilantro, coconut milk, and chicken.
            On its own, it makes a thick, satisfying purée with very few ingredients.
            It also pairs well with carrot, squash, or parsnip.
          </p>

          <h3>Sweet recipes</h3>
          <p>
            Sweet potato cake, flourless brownies, pudding, cookies.
            Cooked and mashed, it replaces part of the fat and adds natural moisture.
            Recipes made with it tend to stay softer than ones made with regular flour —
            it works especially well in gluten-free baking.
          </p>

          <p>
            The sweet potato you bought for a virtuous Monday mash ends up roasted with honey on
            Wednesday because patience ran out. That's fine. It turns out well either way.
          </p>

          <p>
            Sweet potato solves three problems at once: budget, nutrition, and variety.
            The only real problem is remembering it's already in the pantry before buying more.
          </p>

          {/* FAQ */}
          <h2 id="faq">Sweet potato FAQ</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Are sweet potatoes actually yams?</p>
              <p className="faq-a">
                No. Sweet potatoes and yams are different plants from different families — yams are starchier
                tubers native to Africa and Asia, rarely sold in most grocery stores. US supermarkets started
                labeling orange sweet potatoes "yams" decades ago to distinguish them from paler varieties,
                and the name stuck. What you buy as a yam in most stores is a sweet potato.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are sweet potatoes good for weight loss?</p>
              <p className="faq-a">
                No single food causes weight loss or gain on its own. Sweet potatoes are filling, nutrient-dense,
                and lower in calories than many other carb sources. In a balanced diet, they fit in without being
                the problem. What matters is the overall pattern of what you eat.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What's the glycemic index of a sweet potato?</p>
              <p className="faq-a">
                It depends heavily on how you cook it. Boiled, the glycemic index sits around 44 to 61 — low to
                moderate. Baked, it can climb to the 80s or low 90s, because dry heat converts more starch into
                simple sugars. Boiling or steaming keeps it lower.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat sweet potato skin?</p>
              <p className="faq-a">
                Yes, and you probably should. The skin holds a meaningful share of the fiber and minerals.
                Scrub it well under running water before cooking. Roasted whole or in large chunks with the
                skin on is the simplest way to eat the whole vegetable.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat sweet potatoes raw?</p>
              <p className="faq-a">
                They're not toxic raw, but the raw starch is hard to digest and can cause stomach discomfort.
                The texture is also firm and starchy rather than pleasant. Cooked — boiled, roasted, or baked —
                is when the flavor and digestibility actually work.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How long do cooked sweet potatoes keep in the fridge?</p>
              <p className="faq-a">
                In a sealed container, three to five days. You can also freeze it in portions — mashed or cubed —
                and it holds good texture for up to three months, ready for soups, mash, or fillings.
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
                Mise's founder. Buys 2kg of sweet potatoes every week because they're cheap. Uses half.
                The rest shows up sprouting at the back of the pantry two weeks later.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Know what's in the pantry.<br />
              <em>Let Mise keep track.</em>
            </h2>
            <p>
              Pantry, recipes, and shopping list, all in one place.
              The sweet potato lands on the list when it runs out — not when you find the sprout.
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
