import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Grocery List for 2 People: How Much to Actually Buy',
  description: 'A grocery list for 2 people with the right quantity per category, a ready-to-copy weekly list, monthly cost, and how to stop food from going bad in the fridge.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-2-pessoas',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-2-pessoas',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-2-pessoas',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-2-pessoas',
    },
  },
  openGraph: {
    title: 'Grocery List for 2 People: How Much to Actually Buy',
    description: 'A grocery list for 2 people with the right quantity per category, a ready-to-copy weekly list, monthly cost, and how to stop food from going bad in the fridge.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-2-pessoas',
    images: [
      {
        url: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Woman writing a grocery list in a notebook on a kitchen counter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grocery List for 2 People: How Much to Actually Buy',
    description: 'A grocery list for 2 people with the right quantity per category, a ready-to-copy weekly list, monthly cost, and how to stop food from going bad in the fridge.',
    images: ['https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does groceries for 2 people cost per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A two-person household typically spends $500-$800 a month, in line with the USDA moderate-cost food plan for 2026. That covers produce, protein, dairy, pantry staples, and household basics. The exact number moves with where you live and how often you eat out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much rice and pasta do 2 people need per week?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'About 2 lb of rice and 1 lb of dried beans cover a week for a couple that eats that combination often. If you eat out several nights or swap in other carbs, the same amount can stretch closer to two weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to shop weekly or monthly for 2 people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mixed approach works best: buy pantry staples and household items once a month, since they do not spoil and take up fixed shelf space. Buy produce, meat, and dairy weekly, since they are perishable. Doing one giant monthly grocery run for two people usually means throwing out spoiled produce by week two.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it worth buying family-size packs for a 2-person household?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only for shelf-stable items you actually go through — rice, dried beans, toilet paper, cleaning supplies. For meat, bread, and dairy, a bulk pack usually ends up half in the freezer or half in the trash before it gets used. Compare price per pound, not the sticker total on the bigger package.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you avoid food waste shopping for 2 people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buy based on how many meals you will actually cook that week, not the size of the package on the shelf. Portion and freeze meat as soon as you get home instead of storing it whole. Check the pantry before you leave — most household food waste starts with buying something you already had.',
      },
    },
    {
      '@type': 'Question',
      name: 'What changes on the list when you have guests over?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add one extra portion of protein and one side per guest for the meal they will actually eat with you — do not double the whole list. Pantry staples, coffee, and breakfast items already have enough slack for a household of two plus a guest or two.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a grocery run last for a couple?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Produce and bread last 3-7 days. Fresh meat lasts 2-3 days in the fridge, or months in the freezer once portioned. Pantry staples, cleaning supplies, and personal care items last weeks — sometimes a full month, depending on the item.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Grocery List for 2 People: How Much to Actually Buy',
  description: 'A grocery list for 2 people with the right quantity per category, a ready-to-copy weekly list, monthly cost, and how to stop food from going bad in the fridge.',
  image: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-17',
  dateModified: '2026-08-17',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-2-pessoas',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Grocery List for 2 People', item: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-2-pessoas' },
  ],
}

const copyText = `GROCERY LIST FOR 2 PEOPLE (WEEK)

PRODUCE
- Onion, garlic, tomato
- Potatoes
- Carrots
- Leafy greens
- Assorted fruit (3-4 lb)

PROTEIN
- Chicken (1.5-2 lb)
- Ground beef or beef (1 lb)
- Eggs (1 dozen)
- Canned tuna (2 cans)

DAIRY
- Milk (half gallon)
- Plain yogurt
- Cheese (8 oz)
- Butter

PANTRY (monthly buy)
- Rice (8 lb)
- Dried beans (4 lb)
- Pasta (2 boxes)
- Oil
- Coffee
- Sugar and salt

HOUSEHOLD (monthly buy)
- Dish soap and laundry detergent
- Toilet paper
- Soap and toothpaste
- Trash bags`

export default function GroceryListFor2PeopleEn() {
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
            <li className="breadcrumb-current" aria-current="page">Grocery List for 2 People</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-17">Aug 17, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Grocery List for 2 People: How Much to Buy So Nothing Goes to Waste
          </h1>
          <p className="blog-desc">
            Two people move in together, one of them doubles the usual rice order because it is a household of two now, and three weeks later there is a 10 lb bag sitting untouched in the back of the pantry. A grocery list for two people is not a single person&apos;s list doubled, and it is not a family list cut in half. Here is the amount that actually makes sense.
          </p>

          <div className="answer-box">
            <p>
              A <strong>grocery list for 2 people</strong> centers on about 2 lb of rice and 1 lb of dried beans a week, 1.5-2 lb of protein a week, and 3-4 lb of fruit and vegetables combined.
              A couple&apos;s monthly grocery bill runs <strong>$500-$800</strong>, in line with the USDA moderate-cost food plan, covering produce, protein, dairy, pantry, and household items.
              The rule that prevents waste: perishables on a weekly buy, pantry and household items on a monthly one.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Woman writing a grocery list in a notebook on a kitchen counter"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Yaroslav Shuraev / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-changes">What changes when the list is for 2</a></li>
              <li><a href="#right-amount">The right amount per category</a></li>
              <li><a href="#copy-list">Ready-to-copy shopping list</a></li>
              <li><a href="#weekly-monthly">Weekly, biweekly, or monthly shopping</a></li>
              <li><a href="#common-mistakes">Mistakes that lead to waste or shortages</a></li>
              <li><a href="#monthly-cost">How much it costs per month</a></li>
              <li><a href="#guests">What changes when guests come over</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT CHANGES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4124939/pexels-photo-4124939.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Shopping cart in a colorful supermarket aisle"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Christian Naccarato / Pexels</p>
          </div>

          <h2 id="what-changes" className="img-above">What changes in a grocery list for 2 people</h2>

          <p>
            The most common mistake is not forgetting an item. It is getting the quantity wrong. People living alone learn to buy small. People with a big family learn to buy in bulk. Couples land in the middle — and that middle is exactly what nobody explains clearly.
          </p>
          <p>
            It is not the basic list cut in half. Two people do not eat half of what a family of four eats — they eat more than half of almost everything, because staple items have a minimum buy size that does not scale linearly. A bag of coffee does not become &quot;half a bag&quot; just because there are two people instead of four.
          </p>
          <p>
            It is also not a single person&apos;s list doubled. Two people share a pot, share seasoning, share leftovers. What is left from Tuesday&apos;s dinner becomes Wednesday&apos;s lunch. That changes the logic of how much to buy of each thing — especially protein and produce, the items most likely to spoil sitting around.
          </p>
          <p>
            The right reference point is quantity sized for two specific people, not a fraction of someone else&apos;s list. That is what avoids the two opposite headaches — food dying in the back of the fridge, or a Wednesday trip back to the store because something basic ran out.
          </p>

          {/* RIGHT AMOUNT */}
          <h2 id="right-amount">The right amount per category for 2 people</h2>

          <p>
            The table below is a weekly reference for a couple with a fairly normal routine — cooking at home most days, eating out occasionally. Adjust up or down based on how much you actually cook.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Weekly amount</th>
                <th>Lasts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rice</td>
                <td>2 lb</td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>Dried beans</td>
                <td>1 lb</td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>Pasta</td>
                <td>1 lb</td>
                <td>2 weeks</td>
              </tr>
              <tr>
                <td>Chicken</td>
                <td>1.5-2 lb</td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>Ground beef</td>
                <td>1 lb</td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>Eggs</td>
                <td>1 dozen</td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>Milk</td>
                <td>Half gallon</td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>Fresh fruit</td>
                <td>3-4 lb</td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>Vegetables</td>
                <td>2-3 lb</td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>Bread</td>
                <td>1 loaf</td>
                <td>3-4 days</td>
              </tr>
              <tr>
                <td>Coffee</td>
                <td>12 oz</td>
                <td>2-3 weeks</td>
              </tr>
              <tr>
                <td>Toilet paper</td>
                <td>1 pack (6-12 rolls)</td>
                <td>3-4 weeks</td>
              </tr>
            </tbody>
          </table>

          <p>
            Notice how rice and beans are weekly, but toilet paper and coffee stretch into weeks. That is exactly why a two-person grocery run should not be one giant monthly event — splitting perishable from shelf-stable saves money and stops food from ending up in the trash.
          </p>

          {/* COPY LIST */}
          <div className="blog-inline-cta">
            <p>Knows what is already home. <em>Knows what is missing.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          <h2 id="copy-list">Ready-to-copy grocery list for 2 people</h2>
          <p>
            This is the weekly version, split by category. Copy it, paste it into your phone, and cross off anything you already have before you leave — whatever is left is what you actually buy.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">List for 2 people — week</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Produce</h4>
                <ul>
                  <li>Onion, garlic, tomato</li>
                  <li>Potatoes</li>
                  <li>Carrots</li>
                  <li>Leafy greens</li>
                  <li>Assorted fruit</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Protein</h4>
                <ul>
                  <li>Chicken</li>
                  <li>Ground beef</li>
                  <li>Eggs</li>
                  <li>Canned tuna</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Dairy</h4>
                <ul>
                  <li>Milk</li>
                  <li>Plain yogurt</li>
                  <li>Cheese</li>
                  <li>Butter</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Pantry (monthly)</h4>
                <ul>
                  <li>Rice, 8 lb</li>
                  <li>Dried beans, 4 lb</li>
                  <li>Pasta</li>
                  <li>Oil</li>
                  <li>Coffee</li>
                  <li>Sugar and salt</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Household (monthly)</h4>
                <ul>
                  <li>Dish soap</li>
                  <li>Laundry detergent</li>
                  <li>Toilet paper</li>
                  <li>Trash bags</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Personal care (monthly)</h4>
                <ul>
                  <li>Soap</li>
                  <li>Toothpaste</li>
                  <li>Shampoo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* WEEKLY, BIWEEKLY, MONTHLY */}
          <h2 id="weekly-monthly">Weekly, biweekly, or monthly shopping for 2 people</h2>
          <p>
            The right question is not &quot;which frequency is best.&quot; It is &quot;which frequency is best for which item.&quot; Lumping everything into one monthly run is the most common mistake of people trying to save time who end up wasting food instead.
          </p>
          <p>
            <strong>Pantry and household items:</strong> a monthly buy works well. Rice, beans, oil, cleaning supplies, and personal care items do not spoil fast — buying them all at once saves trips and usually costs less per pound.
          </p>
          <p>
            <strong>Produce, meat, and dairy:</strong> a weekly buy is what prevents waste. Buying a month&apos;s worth of produce in one trip guarantees half of it turns into fridge soup before week two. That is not a discipline problem — it is biology. Lettuce does not last a month, no matter how organized you are.
          </p>
          <p>
            For anyone using an <a href="/en/funcionalidades/despensa">organized pantry</a>, the mixed approach runs itself: you already know what is stocked (pantry) and what needs restocking every week (perishables), without recalculating from zero every time you walk into the store.
          </p>

          {/* COMMON MISTAKES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4443442/pexels-photo-4443442.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh fruits and vegetables neatly arranged inside a refrigerator"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="common-mistakes" className="img-above">Mistakes that lead to waste or shortages</h2>

          <p>
            <strong>Buying by package size, not by what you will use.</strong> The 3 lb family pack of chicken looks like a deal until you realize you only needed 1.5 lb that week. Compare price per pound before deciding — a bigger pack only pays off if you actually eat it all before it spoils.
          </p>
          <p>
            <strong>Not separating what needs to go in the freezer.</strong> Meat bought in a larger quantity needs to be portioned and frozen the moment it gets home, not stored whole to &quot;figure out later.&quot; Two people with one whole 2 lb pack of ground beef in the freezer end up thawing the entire thing to use half.
          </p>
          <p>
            <strong>Shopping from memory without checking the pantry first.</strong> This is the two-person version of the classic &quot;I thought we had garlic.&quot; Two adults living together means two different memories of what is in the cabinet — and both are usually wrong.
          </p>
          <p>
            <strong>Ignoring what is left from the last run.</strong> Two people generate less leftover food than four, but they still generate some. Before writing a new list, two minutes checking what is still good to use this week goes a long way.
          </p>

          {/* MONTHLY COST */}
          <h2 id="monthly-cost">How much a couple spends on groceries per month</h2>
          <p>
            The estimate for a two-person household runs <strong>$500-$800 a month</strong>, in line with the USDA&apos;s moderate-cost food plan for 2026. The exact number moves with where you live, name-brand versus store-brand choices, and how many meals you eat out.
          </p>
          <ul className="item-list">
            <li><strong>Produce and protein</strong> — the biggest slice, between $250 and $400</li>
            <li><strong>Dairy and pantry</strong> — between $150 and $250</li>
            <li><strong>Household and personal care</strong> — between $70 and $120</li>
          </ul>
          <p>
            To cut the bill without cutting what matters: store brands for rice, beans, and cleaning supplies typically cost 20-30% less with comparable quality. Buying in fixed weekly amounts instead of &quot;whatever looks good&quot; is the single habit that makes the biggest dent.
          </p>

          {/* GUESTS */}
          <h2 id="guests">What changes when guests come over</h2>
          <p>
            An occasional guest does not call for a whole new list. It calls for a small adjustment: add one extra portion of protein and one side per guest for the meal they will actually eat with you. The rest of the list — pantry, cleaning supplies, breakfast items — already has enough slack for a household of two.
          </p>
          <p>
            The common mistake is doubling the entire list &quot;just in case&quot; and ending up with a week of leftovers after the guest leaves. Adjust what changes, leave the rest alone.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about grocery lists for 2 people</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">How much does groceries for 2 people cost per month?</p>
              <p className="faq-a">
                Around <strong>$500-$800 a month</strong>, in line with the USDA moderate-cost food plan for 2026, covering produce, protein, dairy, pantry staples, and household basics. The exact figure moves with location and how often you eat out.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much rice and pasta do 2 people need per week?</p>
              <p className="faq-a">
                About 2 lb of rice and 1 lb of dried beans cover a week for a couple that eats that combination often. Eating out more often can stretch the same amount closer to two weeks.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is it better to shop weekly or monthly for 2 people?</p>
              <p className="faq-a">
                A mixed approach works best: pantry staples and household items on a monthly buy, produce, meat, and dairy on a weekly one. One giant monthly run for two people usually means wasted produce.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is it worth buying family-size packs for a 2-person household?</p>
              <p className="faq-a">
                Only for shelf-stable items you actually go through — rice, beans, toilet paper, cleaning supplies. For meat, bread, and dairy, a bulk pack usually ends up half in the freezer or half in the trash.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you avoid food waste shopping for 2 people?</p>
              <p className="faq-a">
                Buy based on how many meals you will actually cook that week, not the package size on the shelf. Portion and freeze meat as soon as you get home, and check the pantry before you leave.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What changes on the list when you have guests over?</p>
              <p className="faq-a">
                Add one extra portion of protein and a side per guest for the meal they will share with you. Do not double the whole list — pantry and breakfast items already have enough slack.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How long does a grocery run last for a couple?</p>
              <p className="faq-a">
                Produce and bread last 3-7 days. Fresh meat lasts 2-3 days in the fridge, or months in the freezer once portioned. Pantry, cleaning, and personal care items last weeks, sometimes a full month.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Founder of Mise. Grocery shops every week and still forgets an ingredient sometimes.
                Built the app to fix the problem he had for himself in the kitchen.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">Right quantity. Pantry up to date. Zero leftovers dying in the fridge.</p>
            <p className="blog-cta-desc">
              With Mise, you build your <a href="/en/funcionalidades/lista-de-compras">shopping list</a> knowing what is already in the{' '}
              <a href="/en/funcionalidades/despensa">pantry</a> — no double-buying, no forgetting the basics.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Start free
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Back to top">Back to top ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Made with care in Brazil.</p>
          <nav className="footer-links" aria-label="Footer links">
            <a href="/en/blog" className="footer-link">Blog</a>
            <a href="/en/funcionalidades" className="footer-link">Features</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
