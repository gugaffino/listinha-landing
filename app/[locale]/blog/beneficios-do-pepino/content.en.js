import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Cucumber Nutrition: Calories, Benefits, and How to Use It',
  description: 'Cucumber is about 15 calories per 100g and 95% water. See the full nutrition breakdown, health benefits, cucumber types, and how to use it beyond salad.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-pepino',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-pepino',
      en: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-pepino',
      es: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-pepino',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-pepino',
    },
  },
  openGraph: {
    title: 'Cucumber Nutrition: Calories, Benefits, and How to Use It',
    description: 'Cucumber is about 15 calories per 100g and 95% water. See the full nutrition breakdown, health benefits, cucumber types, and how to use it beyond salad.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-pepino',
    images: [
      {
        url: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh whole cucumbers stacked in close-up — bright green vegetables',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cucumber Nutrition: Calories, Benefits, and How to Use It',
    description: 'Cucumber is about 15 calories per 100g and 95% water. See the full nutrition breakdown, health benefits, cucumber types, and how to use it beyond salad.',
    images: ['https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does cucumber help you lose weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No single food burns fat on its own. But at roughly 15 calories per 100g and 95% water, cucumber adds volume to a meal without adding calories. That helps with fullness and makes it easier to manage total calorie intake over the day — which supports weight loss inside a balanced diet, not by itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat cucumber with the skin on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The skin is edible and holds more fiber than the flesh. On Persian and English cucumbers it is thin and barely noticeable. On thicker-skinned varieties it can taste slightly bitter — peel it if that bothers you. Always wash it well before eating the skin.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between English and Persian cucumbers?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'English cucumbers are long, thin-skinned, and nearly seedless — sold shrink-wrapped, good for slicing thin in salads. Persian cucumbers are a shorter version of the same idea: thin skin, few seeds, mild sweet flavor, small enough to eat whole as a snack. Standard slicing (garden) cucumbers are thicker-skinned, have more seeds, and are usually the cheapest option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cucumber a fruit or a vegetable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Botanically, it is a fruit — it develops from a flower and carries seeds. In cooking and at the grocery store, it is treated as a vegetable because of its mild flavor and savory use. Both answers are correct depending on the context.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does cucumber last in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whole, 7 to 10 days in the crisper drawer. Do not wash it before storing — moisture speeds up softening. Sliced, use it within 2 days covered in plastic wrap. To stretch its life further, make a quick pickle with salt and vinegar — it keeps up to 2 weeks in a sealed jar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does cucumber have vitamin C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It does — about 2.8mg per 100g, per USDA FoodData Central. That is not a major source compared to bell pepper or orange, but it still adds to your daily total. It is present in both the skin and the flesh.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cucumber good for your skin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vitamin C plays a role in collagen synthesis, and the high water content supports hydration. Placing cucumber slices on your face is a popular habit, but the effect is temporary and only surface-deep. The real benefit comes from eating the cucumber — not from applying it topically.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cucumber Nutrition: Calories, Benefits, and How to Use It',
  description: 'Cucumber is about 15 calories per 100g and 95% water. See the full nutrition breakdown, health benefits, cucumber types, and how to use it beyond salad.',
  image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/beneficios-do-pepino',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cucumber Nutrition', item: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-pepino' },
  ],
}

export default function CucumberBenefitsEn() {
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
            <li className="breadcrumb-current" aria-current="page">Cucumber Nutrition</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-04">Aug 4, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cucumber: The Vegetable Everyone Buys for Salad and Forgets in the Fridge
          </h1>
          <p className="blog-desc">
            It shows up in every grocery run and disappears into the crisper drawer. At about 15 calories per 100g and 95% water, cucumber is one of the most versatile vegetables in the produce aisle — and one of the least used for anything beyond a side salad.
          </p>

          <div className="answer-box">
            <p>
              <strong>Cucumber</strong> (<em>Cucumis sativus</em>) is a fruit from the gourd family, made up of about 95% water and roughly 15 calories per 100g.
              It has green skin, pale flesh, and seeds running through the center. Sold year-round, with several types on the shelf — standard slicing, English, Persian, and pickling (Kirby) are the ones you will run into most.
              It is cheap, keeps well in the fridge, and does a lot more than salad.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh whole cucumbers stacked in close-up — bright green vegetables"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Lo / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-cucumber">What is cucumber</a></li>
              <li><a href="#nutrition">Nutrition facts</a></li>
              <li><a href="#benefits">Health benefits of cucumber</a></li>
              <li><a href="#types">Types of cucumber</a></li>
              <li><a href="#how-to-use">How to use it in the kitchen</a></li>
              <li><a href="#how-to-store">How to choose and store it</a></li>
              <li><a href="#worth-it">Worth keeping on the list?</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS CUCUMBER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4929719/pexels-photo-4929719.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sliced cucumber and carrot on a white plate — prep for a light salad"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Justin Doherty / Pexels</p>
          </div>

          <h2 id="what-is-cucumber" className="img-above">What is cucumber</h2>

          <p>
            Cucumber (<em>Cucumis sativus</em>) is technically a fruit, not a vegetable — botanically speaking. That distinction changes nothing in the kitchen. It is always treated as a vegetable there. What matters more: it belongs to the same family as zucchini, melon, and watermelon, which explains the watery texture and the neutral flavor.
          </p>
          <p>
            The flesh is pale green to white, with seeds running through the center that vary depending on the variety. The skin is edible in most cases. The flavor is mild, with a freshness that works both as a neutral base and against bolder flavors — yogurt sauce, soy, vinegar.
          </p>
          <p>
            There are dozens of cucumber varieties grown around the world. In most English-speaking grocery stores, you will see four show up on a regular basis: standard slicing, English, Persian, and Kirby — each suited to a different job in the kitchen.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">Cucumber nutrition facts</h2>

          <p>
            Below are the main nutrients in raw cucumber with skin, per 100g, based on{' '}
            <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener">USDA FoodData Central</a>.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Per 100g</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Energy</td>
                <td>15 kcal</td>
              </tr>
              <tr>
                <td>Water</td>
                <td>95%</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>0.65 g</td>
              </tr>
              <tr>
                <td>Carbohydrates</td>
                <td>3.6 g</td>
              </tr>
              <tr>
                <td>Fiber</td>
                <td>0.5 g</td>
              </tr>
              <tr>
                <td>Total fat</td>
                <td>{'<'}0.2 g</td>
              </tr>
              <tr>
                <td>Potassium</td>
                <td>147 mg</td>
              </tr>
              <tr>
                <td>Vitamin K</td>
                <td>16.4 mcg</td>
              </tr>
              <tr>
                <td>Vitamin C</td>
                <td>2.8 mg</td>
              </tr>
            </tbody>
          </table>

          <p>
            Those numbers explain why cucumber shows up so often in calorie-conscious meals: you can eat 300g and stay under 50 calories. The volume is real, the calorie count barely moves.
          </p>

          {/* BENEFITS */}
          <h2 id="benefits">Health benefits of cucumber</h2>

          <p>
            At 95% water by weight, cucumber is one of the most hydrating vegetables you can buy. Eating water-rich foods adds to your overall hydration — it does not replace drinking water, but it stacks on top of it. On hot days or after exercise, that difference is real.
          </p>
          <p>
            The potassium — 147mg per 100g — plays a role in managing blood pressure. The mechanism is straightforward: potassium helps the kidneys clear out sodium. For anyone eating a sodium-heavy diet, working potassium-rich foods into meals throughout the day is a practical way to offset it.
          </p>
          <p>
            Cucumber is also one of the few vegetables with a meaningful amount of vitamin K — about 14% of the daily value in a 100g serving. Vitamin K supports blood clotting and bone health, and most people do not think to look for it outside leafy greens.
          </p>
          <p>
            There is a persistent claim that cucumber works wonders for skin. The vitamin C it carries (2.8mg/100g) does play a role in collagen production — that part is real. What cucumber does not do is "detox" anything. Detoxification is the liver and kidneys doing their job, and they do it fine without help from a specific vegetable.
          </p>
          <p>
            Cucumber is one of the most commonly bought produce items and one of the most commonly wasted — not for lack of benefits, but for lack of a plan. It gets bought for a salad that does not happen, and it turns soft in the drawer before anyone notices.
          </p>

          {/* TYPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Colorful salad with sliced cucumber on a plate — fresh vegetable combination"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Chan Walrus / Pexels</p>
          </div>

          <h2 id="types" className="img-above">Types of cucumber</h2>

          <p>
            Knowing which cucumber you are buying changes the result in the kitchen. The difference between English and Kirby is not just size — it is texture, seed count, and what each one is actually good for.
          </p>

          <h3>Standard slicing (garden) cucumber</h3>
          <p>
            The default cucumber in most produce sections. Thicker skin, more visible seeds, firm flesh. Good for salads and quick pickles. It is the cheapest option and the easiest to find year-round. The skin can carry a light wax coating for shipping — wash it well, or peel it if that bothers you.
          </p>

          <h3>English cucumber</h3>
          <p>
            Long, thin-skinned, nearly seedless, usually sold shrink-wrapped. Works well in salads where you want thin, even slices without watery seeds getting in the way. Costs a bit more than the standard slicing type, but the texture difference is worth it for delicate dishes.
          </p>

          <h3>Persian cucumber</h3>
          <p>
            Small, almost seedless, thin and tender skin. The most convenient of the group: eat it whole as a snack, no peeling, no scooping out seeds. Great for quick pickles and for cutting into sticks. Usually found in larger supermarkets, sold in small multi-packs.
          </p>

          <h3>Kirby (pickling) cucumber</h3>
          <p>
            Small, bumpy skin, firmer and less watery flesh than the others — built to hold its crunch through the pickling process. Not the best choice for eating raw in a salad, since the skin is thicker, but it is the standard pick for homemade pickles.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use cucumber in the kitchen</h2>

          <p>
            Cucumber goes far beyond a plain salad. Knowing the other uses helps make sure what you bought actually gets eaten — not thrown out at the end of the week.
          </p>

          <h3>In salads</h3>
          <p>
            The most obvious use, and easy to get wrong. Thin slices hold their texture and take on dressing better. Thick slices turn watery fast if dressed too early. Season right before eating, not ahead of time.
          </p>

          <h3>As a snack</h3>
          <p>
            Persian or English cucumber sticks with hummus, garlic dip, or yogurt sauce make a fast snack with zero cooking. Cut, add salt and lime if you want, done. Good for anyone looking for something light between meals.
          </p>

          <h3>In cold sauces</h3>
          <p>
            Tzatziki, raita, cucumber-yogurt sauce — all of these use cucumber as a base. The logic is the same in each: cucumber's water and freshness balance out fat and acidity. Grate it, squeeze out the excess water, mix with yogurt, garlic, and herbs.
          </p>

          <h3>In quick pickles</h3>
          <p>
            The most efficient way to use up cucumber before it goes soft. Slice it, cover with a mix of water, vinegar, salt, and sugar. Refrigerate for at least 2 hours. It keeps up to 2 weeks in a sealed jar. Works well alongside sandwiches, grilled meat, or just about anything from the fridge.
          </p>

          <h3>Cooked</h3>
          <p>
            Not common, but it works. Sautéed cucumber ends up with a texture close to zucchini — makes sense, they are in the same family. In a quick sauté with garlic and olive oil, it holds up well. It only needs 3 to 4 minutes over heat to soften without falling apart.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t be this much of a headache. <em>Mise fixes that.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to choose and store cucumber</h2>

          <p>
            At the store, pick cucumbers that feel firm with even color. Softness at the tip or yellow patches mean it is past its prime. The skin should have a light sheen — a dull skin is a sign of age.
          </p>
          <p>
            At home, keep it in the crisper drawer, unwashed. Cucumber absorbs moisture and softens if it stays wet. Whole, it lasts 7 to 10 days. Sliced, cover with plastic wrap and use within 2 days — after that, the flesh starts releasing water and the texture goes downhill.
          </p>
          <p>
            If you bought more than you will use, make a quick pickle: slice it, cover with vinegar, salt, and a bit of sugar. In a sealed jar in the fridge, it keeps up to 2 weeks. It is the simplest way to use up the extra before it becomes waste.
          </p>
          <p>
            Households throw out a significant share of the produce they buy, and cucumber is a repeat offender — bought with good intentions, forgotten in the drawer. Knowing roughly how much cucumber you will actually use before you buy it is the simplest decision that makes a real difference.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Worth keeping on the list?</h2>

          <p>
            Yes. This is one of the more straightforward cases. Cucumber is cheap, available year-round, keeps well in the fridge, and works in more dishes than most people realize.
          </p>
          <p>
            The only thing to watch is buying the right amount. If you are cooking for one or two people, 2 to 3 cucumbers cover a week just fine. Buy more than that and you risk the drawer doing its own natural selection.
          </p>
          <p>
            Cucumber earns a spot as a fixed item on the shopping list for anyone who cooks through the week. It is one of those vegetables that stretches across several different meals without any extra effort.
          </p>
          <p>
            Keeping the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            up to date makes for better shopping. Knowing you already have cucumber avoids buying it again on the next trip — and avoids the classic scene of two cucumbers going soft at the same time, with no plan for either one.
          </p>
          <p>
            On the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>
            , cucumber goes in with more intention once you already know what it is for. "Cucumber for Monday's salad" closes the loop before you even leave the store — and cuts the odds of it going solo in the drawer until Friday.
          </p>
          <p>
            Cucumber does not disappear from the drawer on its own. It disappears because you forget you bought it.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about cucumber</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Does cucumber help you lose weight?</p>
              <p className="faq-a">
                No single food burns fat on its own. But at roughly 15 calories per 100g and 95% water, cucumber adds volume to a meal without adding calories. That helps with fullness and makes it easier to manage total calorie intake over the day — which supports weight loss inside a balanced diet, not by itself.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat cucumber with the skin on?</p>
              <p className="faq-a">
                Yes. The skin is edible and holds more fiber than the flesh. On Persian and English cucumbers it is thin and barely noticeable. On thicker-skinned varieties it can taste slightly bitter — peel it if that bothers you. Always wash it well before eating the skin.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between English and Persian cucumbers?</p>
              <p className="faq-a">
                English cucumbers are long, thin-skinned, and nearly seedless — sold shrink-wrapped, good for slicing thin in salads. Persian cucumbers are a shorter version of the same idea: thin skin, few seeds, mild sweet flavor, small enough to eat whole as a snack. Standard slicing cucumbers are thicker-skinned, have more seeds, and are usually the cheapest option.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is cucumber a fruit or a vegetable?</p>
              <p className="faq-a">
                Botanically, it is a fruit — it develops from a flower and carries seeds. In cooking and at the grocery store, it is treated as a vegetable because of its mild flavor and savory use. Both answers are correct depending on the context.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How long does cucumber last in the fridge?</p>
              <p className="faq-a">
                Whole, 7 to 10 days in the crisper drawer. Do not wash it before storing — moisture speeds up softening. Sliced, use it within 2 days covered in plastic wrap. To stretch its life further, make a quick pickle with salt and vinegar — it keeps up to 2 weeks in a sealed jar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does cucumber have vitamin C?</p>
              <p className="faq-a">
                It does — about 2.8mg per 100g, per USDA FoodData Central. That is not a major source compared to bell pepper or orange, but it still adds to your daily total. It is present in both the skin and the flesh.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is cucumber good for your skin?</p>
              <p className="faq-a">
                Vitamin C plays a role in collagen synthesis, and the high water content supports hydration. Placing cucumber slices on your face is a popular habit, but the effect is temporary and only surface-deep. The real benefit comes from eating the cucumber — not from applying it topically.
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
                Creator of Mise. Buys cucumber every week meaning to make a salad. Finds it on Friday, gone soft in the drawer. Made a quick pickle once and it worked out. Forgot that it worked. Will repeat this cycle indefinitely.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Know what&apos;s in the pantry.<br />
              <em>Let Mise handle the rest.</em>
            </h2>
            <p>
              Pantry, recipes, and shopping list in one place.
              Cucumber makes it onto the list when you need it — and out of the drawer before it goes soft.
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
