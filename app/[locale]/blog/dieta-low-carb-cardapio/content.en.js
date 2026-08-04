import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: '7-Day Low Carb Meal Plan: Meals Ready to Copy',
  description: 'A 7-day low carb meal plan with breakfast, lunch, and dinner ready to go. Includes a shopping list and tips for not quitting by Wednesday.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/dieta-low-carb-cardapio',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/dieta-low-carb-cardapio',
      en: 'https://www.miseemcasa.com.br/en/blog/dieta-low-carb-cardapio',
      es: 'https://www.miseemcasa.com.br/es/blog/dieta-low-carb-cardapio',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/dieta-low-carb-cardapio',
    },
  },
  openGraph: {
    title: '7-Day Low Carb Meal Plan: Meals Ready to Copy',
    description: 'A 7-day low carb meal plan with breakfast, lunch, and dinner ready to go. Includes a shopping list and tips for not quitting by Wednesday.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/dieta-low-carb-cardapio',
    images: [
      {
        url: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Flat-lay of low carb foods: avocado, leafy greens, nuts, and fresh vegetables on a dark background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7-Day Low Carb Meal Plan: Meals Ready to Copy',
    description: 'A 7-day low carb meal plan with breakfast, lunch, and dinner ready to go. Includes a shopping list and tips for not quitting by Wednesday.',
    images: ['https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should you eat for breakfast on a low carb diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eggs are the most practical choice: scrambled, boiled, or as an omelet, ready in under ten minutes. Plain full-fat yogurt with nuts or seeds also works well. What goes out is bread, cereal, pastries, and any juice with added sugar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat beans or legumes on low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beans and legumes have carbs — more than broccoli, less than rice or pasta. Most low carb approaches cut back on them without eliminating them completely. A small, occasional portion won’t undo the rest of the week. It depends on how strict the version you’re following is.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between low carb and keto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Low carb is any eating pattern that cuts carbs significantly, without a strict daily limit. Keto is a stricter version, usually under 20 to 50g of carbs a day, aimed at pushing the body into ketosis. This meal plan is generic low carb — it doesn’t require strict counting or extreme restriction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is low carb eating expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Eggs, chicken, and seasonal vegetables are among the cheapest items in the store. The idea that low carb is expensive usually comes from specific products, like almond flour and premium dairy, that aren’t required. The cheapest protein of the week is still eggs and chicken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you do low carb without cooking every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with a bit of prep ahead of time. Grilling chicken and meat on Sunday covers three to four days of lunches. Hard-boiled eggs keep in the fridge for a week. Shredded chicken works in a salad, an omelet, or straight on the plate. You don’t need to cook from scratch every day — just have the basics ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you follow low carb only on weekdays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Some people follow the pattern during the week and ease up on weekends — it’s a common approach. The effect varies from person to person. What matters is a consistent pattern, not daily perfection. One day of rice doesn’t cancel out the other six.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results with low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It varies a lot depending on metabolism, starting point, and the rest of your diet. This post is a meal plan — not a guide to guaranteed results. For individual guidance, talk to a registered dietitian.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '7-Day Low Carb Meal Plan: Meals Ready to Copy',
  description: 'A 7-day low carb meal plan with breakfast, lunch, and dinner ready to go. Includes a shopping list and tips for not quitting by Wednesday.',
  image: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/dieta-low-carb-cardapio',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: '7-Day Low Carb Meal Plan', item: 'https://www.miseemcasa.com.br/en/blog/dieta-low-carb-cardapio' },
  ],
}

export default function DietaLowCarbCardapioEn() {
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
            <li className="breadcrumb-current" aria-current="page">7-Day Low Carb Meal Plan</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">Aug 3, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Low Carb Meal Plan for the Week: 7 Days, No Reinventing Dinner
          </h1>
          <p className="blog-desc">
            You decided to go low carb. The meal plan doesn&apos;t exist yet. This guide fixes that: seven full days of meals, breakfast through dinner, with the shopping list that goes with it.
          </p>

          <div className="answer-box">
            <p>
              A <strong>weekly low carb meal plan</strong> is built on protein (eggs, beef, chicken, fish), low-starch vegetables
              (broccoli, cauliflower, zucchini, leafy greens), and fats like olive oil, butter, and avocado. Rice, bread,
              pasta, potatoes, and sugar come off the plate — or stay only on the days you choose to include them.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Flat-lay of low carb foods: avocado, leafy greens, nuts, and fresh vegetables on a dark background"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Elle Hughes / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-it-is">What low carb means in practice</a></li>
              <li><a href="#what-to-eat">What&apos;s in and what&apos;s out</a></li>
              <li><a href="#meal-plan">The 7-day meal plan</a></li>
              <li><a href="#shopping-list">Shopping list for the week</a></li>
              <li><a href="#how-to-stick">How to not quit by Wednesday</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IT IS */}
          <h2 id="what-it-is">What low carb means in practice</h2>

          <p>
            Low carb doesn&apos;t have a scientist&apos;s name attached or a patent. It&apos;s a simple instruction:
            eat fewer carbs. How much less depends on the version you pick, but the common model works like this —
            protein and fat at the center of the plate, vegetables that grow above ground, and refined carbs
            off the table most of the time.
          </p>
          <p>
            The hard part isn&apos;t understanding the rule. It&apos;s planning a week around it. Deciding what
            goes on the plate every single day wears people down faster than the food itself. Surveys on
            grocery habits consistently find that close to half of shoppers walk into the store without any
            list at all — never mind a whole week of meals already mapped out. Decision fatigue kills more low
            carb attempts than any craving for bread.
          </p>
          <p>
            This meal plan doesn&apos;t try to talk you into low carb. It assumes you already decided that and
            solves the next problem: what you&apos;re actually eating Monday morning, Wednesday night, and on
            Sunday when the whole week is still unplanned. The 7-day low carb meal plan below answers that,
            dish by dish.
          </p>

          {/* WHAT'S IN AND WHAT'S OUT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Flat-lay of nutritious foods: colorful vegetables, protein, and nuts in white bowls on a table"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Vanessa Loring / Pexels</p>
          </div>

          <h2 id="what-to-eat" className="img-above">What&apos;s in and what&apos;s out</h2>

          <p>
            A low carb plate uses ingredients you can find at any grocery store. Nothing on this list is exotic.
          </p>

          <h3>Protein — the center of every meal</h3>
          <ul className="item-list">
            <li><strong>Eggs</strong> — scrambled, boiled, in an omelet, or fried. The plate&apos;s wild card.</li>
            <li><strong>Chicken</strong> — breast, thighs, ground chicken. The cheapest protein of the week.</li>
            <li><strong>Beef</strong> — steak, ground beef, short ribs.</li>
            <li><strong>Fish</strong> — tilapia, cod, any white fish fillet.</li>
            <li><strong>Dairy</strong> — cheese, plain full-fat yogurt, butter.</li>
            <li><strong>Others</strong> — bacon, ham, sausage (in moderation).</li>
          </ul>

          <h3>Vegetables — no limit on leafy greens and cruciferous ones</h3>
          <ul className="item-list">
            <li><strong>Leafy greens</strong> — lettuce, arugula, spinach, kale.</li>
            <li><strong>Cruciferous</strong> — broccoli and cauliflower stand in for rice in several formats.</li>
            <li><strong>Other vegetables</strong> — zucchini, green beans, bell pepper, cucumber.</li>
            <li><strong>In moderation</strong> — tomato, carrot, onion (higher in carbs).</li>
            <li><strong>Avocado</strong> — rich in good fat, keeps you full between meals.</li>
          </ul>

          <h3>What&apos;s out</h3>
          <ul className="item-list">
            <li>Rice, pasta, bread, and anything made from wheat flour</li>
            <li>Potatoes, corn, and other starchy vegetables</li>
            <li>Sugar in any form — honey, syrup, calorie-sweetened drinks</li>
            <li>Fruit juice, soda, sports drinks with added sugar</li>
            <li>Cookies, crackers, and ultra-processed snacks with a label you can&apos;t pronounce</li>
          </ul>

          <p>
            A practical note: low carb doesn&apos;t require you to count grams or measure portions. If the
            ingredients on your plate have recognizable names — chicken, broccoli, olive oil — you&apos;re
            probably within the pattern. If the label has twelve ingredients that sound like a chemistry set,
            probably not.
          </p>

          {/* MEAL PLAN */}
          <h2 id="meal-plan">The 7-day meal plan</h2>

          <p>
            The plan below assumes three meals a day. If you get hungry in between, nuts handle it without
            needing an elaborate snack. The meals were built to repeat ingredients through the week — grilled
            chicken from one meal turns into shredded chicken in another. Less waste, less time in the kitchen.
          </p>

          <ol className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Monday</strong>
                <span>
                  Breakfast: Scrambled eggs with cheese<br />
                  Lunch: Grilled chicken + leafy greens + sautéed zucchini<br />
                  Dinner: Ham and cheese omelet
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Tuesday</strong>
                <span>
                  Breakfast: Plain yogurt with walnuts<br />
                  Lunch: Ground beef with sautéed cauliflower rice<br />
                  Dinner: Grilled tilapia with garlic broccoli
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Wednesday</strong>
                <span>
                  Breakfast: Boiled eggs + avocado with salt and lime<br />
                  Lunch: Chicken breast with sautéed green beans and bell pepper<br />
                  Dinner: Baked short ribs with sautéed cabbage
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">4</div>
              <div className="tip-body">
                <strong>Thursday</strong>
                <span>
                  Breakfast: Spinach and cheese omelet<br />
                  Lunch: Ground beef with green beans and carrots<br />
                  Dinner: Baked fish with tomato and cucumber salad
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">5</div>
              <div className="tip-body">
                <strong>Friday</strong>
                <span>
                  Breakfast: Scrambled eggs with bacon<br />
                  Lunch: Chicken stew with carrots and chayote<br />
                  Dinner: Bunless burger with leafy greens
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">6</div>
              <div className="tip-body">
                <strong>Saturday</strong>
                <span>
                  Breakfast: Yogurt with chia seeds and walnuts<br />
                  Lunch: Grilled steak with garlic broccoli<br />
                  Dinner: Shredded chicken with sautéed kale
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">7</div>
              <div className="tip-body">
                <strong>Sunday</strong>
                <span>
                  Breakfast: Scrambled eggs with tomato and cheese<br />
                  Lunch: Baked short ribs with cauliflower mash<br />
                  Dinner: Cheese and herb omelet
                </span>
              </div>
            </li>
          </ol>

          <p>
            This plan can — and should — be adapted. Don&apos;t eat fish? Swap in chicken. No short ribs on
            hand? Steak works. What matters is keeping the logic: protein plus vegetable, no refined carb base.
            To build your own{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly meal plan</a>{' '}
            and generate the shopping list automatically, Mise does exactly that.
          </p>

          {/* SHOPPING LIST */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Colorful bowl with leafy green salad, tomato, and fresh vegetables — a simple low carb meal"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Ella Olsson / Pexels</p>
          </div>

          <h2 id="shopping-list" className="img-above">Shopping list for the week</h2>

          <p>
            The list below covers the seven days above. Quantities are estimated for one person — double it for
            two. To save and adjust it in your own{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>,
            open Mise and check off what you already have in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Shopping list — low carb week</span>
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Protein</h4>
                <ul>
                  <li>Chicken breast or thighs (4 lb)</li>
                  <li>Ground beef (1 lb)</li>
                  <li>Eggs (2 dozen)</li>
                  <li>Tilapia or white fish (1 lb)</li>
                  <li>Short ribs (2 lb)</li>
                  <li>Bacon (½ lb)</li>
                  <li>Sliced ham (½ lb)</li>
                  <li>Burger patties (4)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Vegetables and greens</h4>
                <ul>
                  <li>Lettuce and arugula</li>
                  <li>Broccoli (2 heads)</li>
                  <li>Cauliflower (1 head)</li>
                  <li>Zucchini (3)</li>
                  <li>Green beans (¾ lb)</li>
                  <li>Cabbage (½ head)</li>
                  <li>Kale (1 bunch)</li>
                  <li>Spinach, bell pepper, tomato</li>
                  <li>Cucumber, carrot, chayote</li>
                  <li>Avocado (3)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Dairy and pantry</h4>
                <ul>
                  <li>Cheddar or mozzarella</li>
                  <li>Plain full-fat yogurt (2 tubs)</li>
                  <li>Butter</li>
                  <li>Walnuts (½ lb)</li>
                  <li>Chia seeds</li>
                  <li>Olive oil</li>
                  <li>Garlic, salt, herbs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t be this much of a headache. <em>Mise fixes that.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO STICK */}
          <h2 id="how-to-stick">How to not quit by Wednesday</h2>

          <p>
            The biggest reason people quit low carb isn&apos;t lack of willpower. It&apos;s getting home hungry,
            an empty fridge, and a delivery app three taps away. That&apos;s not weakness — it&apos;s missing
            infrastructure.
          </p>

          <ol className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Grill protein on Sunday</strong>
                <span>
                  Shredded chicken, boiled eggs, and seasoned ground beef keep in the fridge for three to four
                  days. When lunch is fifteen minutes from ready, it&apos;s a lot harder to cave to the easier
                  option.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Have a fallback</strong>
                <span>
                  Eggs are always around. A three-minute omelet handles any emergency meal — and it&apos;s
                  already on the plan anyway. When dinner wasn&apos;t planned, the answer is already known.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Build the list before you shop</strong>
                <span>
                  A meal plan sitting in your head doesn&apos;t survive the cereal aisle. Walking in with the
                  week&apos;s{' '}
                  <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
                  already built avoids impulse decisions — and avoids coming home with zero vegetables and three
                  bags of chips.
                </span>
              </div>
            </li>
          </ol>

          <p>
            To connect the{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly meal plan</a>{' '}
            to the shopping list automatically, that&apos;s what Mise does: you build the plan and the list
            comes out ready, grouped by category. No copying items one by one from a crumpled piece of paper.
          </p>

          <p>
            No meal plan survives all seven days intact. If you had rice on Thursday, that doesn&apos;t undo
            the other six. Low carb is a pattern, not a discipline test that resets to zero at the first slip.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about low carb meal plans</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What should you eat for breakfast on a low carb diet?</p>
              <p className="faq-a">
                Eggs are the most practical choice: scrambled, boiled, or as an omelet, ready in under ten
                minutes. Plain full-fat yogurt with nuts or seeds also works well. What goes out is bread,
                cereal, pastries, and any juice with added sugar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat beans or legumes on low carb?</p>
              <p className="faq-a">
                Beans and legumes have carbs — more than broccoli, less than rice or pasta. Most low carb
                approaches cut back on them without eliminating them completely. A small, occasional portion
                won&apos;t undo the rest of the week. It depends on how strict the version you&apos;re
                following is.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the difference between low carb and keto?</p>
              <p className="faq-a">
                Low carb is any eating pattern that cuts carbs significantly, without a strict daily limit.
                Keto is a stricter version, usually under 20 to 50g of carbs a day, aimed at pushing the body
                into ketosis. This meal plan is generic low carb — it doesn&apos;t require strict counting or
                extreme restriction.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is low carb eating expensive?</p>
              <p className="faq-a">
                Not necessarily. Eggs, chicken, and seasonal vegetables are among the cheapest items in the
                store. The idea that low carb is expensive usually comes from specific products, like almond
                flour and premium dairy, that aren&apos;t required. The cheapest protein of the week is still
                eggs and chicken.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you do low carb without cooking every day?</p>
              <p className="faq-a">
                Yes, with a bit of prep ahead of time. Grilling chicken and meat on Sunday covers three to four
                days of lunches. Hard-boiled eggs keep in the fridge for a week. Shredded chicken works in a
                salad, an omelet, or straight on the plate. You don&apos;t need to cook from scratch every day
                — just have the basics ready.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you follow low carb only on weekdays?</p>
              <p className="faq-a">
                Yes. Some people follow the pattern during the week and ease up on weekends — it&apos;s a
                common approach. The effect varies from person to person. What matters is a consistent
                pattern, not daily perfection. One day of rice doesn&apos;t cancel out the other six.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How long does it take to see results with low carb?</p>
              <p className="faq-a">
                It varies a lot depending on metabolism, starting point, and the rest of your diet. This post
                is a meal plan — not a guide to guaranteed results. For individual guidance, talk to a
                registered dietitian.
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
                Creator of Mise. Did low carb for three weeks, it went great. Week four, came home hungry with
                nothing in the fridge. Built the app to fix exactly that problem.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Meal plan built.<br />
              <em>The list writes itself.</em>
            </h2>
            <p>
              With Mise, you build the week&apos;s meal plan and the shopping list shows up ready.
              Pantry connected, no copying items one by one.
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
