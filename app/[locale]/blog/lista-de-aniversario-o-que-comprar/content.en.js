import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Birthday Party Checklist: What to Buy, How Much to Spend',
  description: 'A birthday party shopping list covering food, drinks, paper goods, and decor by guest count, with a simple budget split and what to cut first if money is tight.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/lista-de-aniversario-o-que-comprar',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-aniversario-o-que-comprar',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-aniversario-o-que-comprar',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-aniversario-o-que-comprar',
    },
  },
  openGraph: {
    title: 'Birthday Party Checklist: What to Buy, How Much to Spend',
    description: 'A birthday party shopping list covering food, drinks, paper goods, and decor by guest count, with a simple budget split and what to cut first if money is tight.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/lista-de-aniversario-o-que-comprar',
    images: [
      {
        url: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Woman writing a birthday party shopping list in a notebook on a kitchen counter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birthday Party Checklist: What to Buy, How Much to Spend',
    description: 'A birthday party shopping list covering food, drinks, paper goods, and decor by guest count, with a simple budget split and what to cut first if money is tight.',
    images: ['https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much food should you buy per person at a birthday party?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plan on 8-10 pieces of finger food per adult for a 2-3 hour party, and 4-6 per child. If cake and dessert bites are also on the table, stick to the lower end. For a shorter 1-2 hour party, 5-6 pieces per adult is enough.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much soda should you buy per guest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A good rule of thumb is 16-20oz total per person across all non-alcoholic drinks, for a 2-3 hour party. That works out to roughly one 2-liter bottle of soda for every 6-7 guests, plus juice and water on the side. On a hot day or a longer party, add 20% more.',
      },
    },
    {
      '@type': 'Question',
      name: "What do you really need for a kids' birthday party?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cake, candles, something to drink, finger food, and one way to burn off kid energy — balloons or a simple game cover it. A themed decor budget and a hired entertainer are nice extras, not requirements. Food, drinks, and one activity carry the party, in that order.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you throw a birthday party on a budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and the cost drops the most when food and drinks come from your own kitchen instead of a caterer. A homemade cake, baked instead of store-bought snacks, and balloons instead of a custom backdrop cut the bill without cutting the party. Decor is usually the first place to save.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do adults need party favors at a birthday party?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Favor bags are a stronger tradition at kids' parties, where parents expect something for the child to take home. At an adult party, it's a nice-to-have — cut it from the budget without a second thought. Nobody remembers a 30th or 40th birthday for the favor bag.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many days in advance should you buy party supplies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Decorations, paper goods, and favors can be bought 1-2 weeks ahead since they don't spoil. Cake, snacks, and anything perishable should wait until 1-2 days before, or the morning of if you're baking at home. Drinks and ice go the day before or the day itself.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the first thing to cut if money is tight?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Themed decor and elaborate party favors go first — they cost the most and matter least to how the party is remembered. Food and drinks stay, because that is what people actually notice when it runs short. Colorful balloons and a good cake carry a party just fine without a custom banner.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Birthday Party Checklist: What to Buy, How Much to Spend',
  description: 'A birthday party shopping list covering food, drinks, paper goods, and decor by guest count, with a simple budget split and what to cut first if money is tight.',
  image: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-11-27',
  dateModified: '2026-11-27',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/lista-de-aniversario-o-que-comprar',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Birthday Party Checklist', item: 'https://www.miseemcasa.com.br/en/blog/lista-de-aniversario-o-que-comprar' },
  ],
}

const copyText = `BIRTHDAY PARTY SHOPPING LIST

FOOD
- Cake
- Appetizers (sliders, chicken tenders, mini quiches)
- Dessert bites (cookies, brownies)
- Chips and dip
- Fresh fruit, cut up
- Finger sandwiches

DRINKS
- Soda
- Juice
- Water
- Ice
- Beer or sparkling wine (adult party, optional)

PAPER GOODS AND TABLE
- Plates
- Cups
- Napkins
- Tablecloth
- Plastic cutlery
- Extra trash bags

DECORATIONS
- Balloons
- "Happy Birthday" banner
- Themed tablecloth
- Birthday candles
- Tape

PARTY FAVORS (optional)
- Favor bags
- Small treat or toy
- Thank-you cards`

export default function BirthdayPartyChecklistEn() {
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
            <li className="breadcrumb-current" aria-current="page">Birthday Party Checklist</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-11-27">Nov 27, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Birthday Party Shopping List: What You Actually Need
          </h1>
          <p className="blog-desc">
            The party already has a date and a cake promised. What is missing is the boring part: deciding what goes on the list before the store turns into a maze of balloons and snack aisles at the same time. Here is the essential list, sorted by category, with quantities per guest and what to cut if the budget gets tight.
          </p>

          <div className="answer-box">
            <p>
              A <strong>birthday party shopping list</strong> covers 5 areas: <strong>food, drinks, paper goods, decorations, and party favors</strong> (the last one, optional).
              For a party of 15-20 people, all of it fits on a single trip to the store — no need to rush back because you forgot ice or napkins.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Woman writing a birthday party shopping list in a notebook on a kitchen counter"
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
              <li><a href="#before-you-shop">Before you shop: headcount and budget</a></li>
              <li><a href="#food">Food: what you actually need</a></li>
              <li><a href="#drinks">Drinks: how much per person</a></li>
              <li><a href="#paper-goods">Paper goods and table setup</a></li>
              <li><a href="#decor">Decorations: the essentials, no overspending</a></li>
              <li><a href="#copy-list">Shopping list to copy and paste</a></li>
              <li><a href="#saving">How to save without the party feeling cheap</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* BEFORE YOU SHOP */}
          <h2 id="before-you-shop">Before you shop: headcount and budget</h2>

          <p>
            Every good birthday party list starts with two numbers: how many guests, and how much you can actually spend. Skip those two and the list grows on its own — you end up with three bags of chips nobody asked for and short exactly one more birthday candle.
          </p>
          <p>
            Guest count drives how much food and drink to buy. Budget drives how big the decorations get. Those are two separate decisions, and mixing them is the most common mistake — spending on a custom backdrop and skimping on snacks, when it should go the other way around.
          </p>
          <p>
            A simple rule: set the total budget first, put 60% toward food and drinks, 25% toward decorations and paper goods, and keep 15% in reserve for whatever always comes up — a candle that will not light, an extra bag of ice, the guest who texts "can I bring my kid too" an hour before the party.
          </p>
          <p>
            Sorting everything by category before you shop — the same way a{' '}
            <a href="/en/blog/lista-de-compras-mercado">grocery list organized by aisle</a> already works for a normal shopping trip — saves you from walking the same aisle twice looking for whatever got left off the first pass.
          </p>

          {/* FOOD */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/35661532/pexels-photo-35661532.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Assorted colorful pastries and donuts on display in a bakery case"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Anderson Alves / Pexels</p>
          </div>

          <h2 id="food" className="img-above">Food: what you actually need</h2>

          <p>
            The cake is the centerpiece, but it will not carry a two-hour party on its own. The solid base is: cake, appetizers, dessert bites, and something more filling — sliders, mini quiches, or, for a bigger party, a backyard cookout.
          </p>
          <ul className="item-list">
            <li><strong>Cake</strong> — 1 slice per guest, plus 20% extra for seconds</li>
            <li><strong>Appetizers</strong> — 8-10 pieces per adult, 4-6 per child, for a 2-3 hour party</li>
            <li><strong>Dessert bites</strong> — 2-3 per person, if cake is also on the table</li>
            <li><strong>Sliders or mini quiches</strong> — optional, good if the party runs through a mealtime</li>
            <li><strong>Fresh fruit, cut up</strong> — balances the sugar, especially at kids' parties</li>
          </ul>
          <p>
            A cookout-style party runs a different math: grilled meat becomes the main course, and appetizers turn into a starter, not the meal. In that case, count protein per person separately from everything else — and cut the dessert bites in half, since nobody wants a third sweet thing after cake and barbecue.
          </p>

          {/* DRINKS */}
          <h2 id="drinks">Drinks: how much per person</h2>

          <p>
            Drinks are usually the category that ends up with way too much or way too little — rarely the right amount. The number that works: 16-20oz per person across every non-alcoholic drink, for a 2-3 hour party.
          </p>
          <ul className="item-list">
            <li><strong>Soda</strong> — one 2-liter bottle for every 6-7 guests</li>
            <li><strong>Juice</strong> — optional, good for kids and anyone skipping soda</li>
            <li><strong>Water</strong> — someone always just wants water, especially on a hot day</li>
            <li><strong>Ice</strong> — about 2lbs for every 4-5 guests, more if the party is outdoors</li>
            <li><strong>Beer or sparkling wine</strong> — adult party only, count it separately from the soda math</li>
          </ul>
          <p>
            On a hot day, or a party running past 3 hours, add 20% to that total. Extra drinks are fine to have left over — drinks do not spoil the way snacks do. Running out is the mistake everyone remembers.
          </p>

          {/* PAPER GOODS */}
          <h2 id="paper-goods">Paper goods and table setup</h2>

          <p>
            Nobody gets excited about this category, but it is the difference between washing dishes until midnight or tossing everything in a trash bag and calling it a night.
          </p>
          <ul className="item-list">
            <li><strong>Plates</strong> — budget 1.5 per guest, since someone always grabs a second one</li>
            <li><strong>Cups</strong> — same math, 1.5 per guest</li>
            <li><strong>Napkins</strong> — buy the large pack, you go through fewer than it feels like until you don't</li>
            <li><strong>Tablecloth</strong> — disposable or fabric, depending on the party's style</li>
            <li><strong>Plastic cutlery</strong> — only if there is food that needs it, like a cookout or pasta</li>
            <li><strong>Extra trash bags</strong> — more than your normal household stock, a party triples the output</li>
          </ul>

          {/* DECOR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8880742/pexels-photo-8880742.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Glass of fizzy soda with ice cubes on a party table"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Ron Lach / Pexels</p>
          </div>

          <h2 id="decor" className="img-above">Decorations: the essentials, no overspending</h2>

          <p>
            Decorations are where a birthday party budget leaks the fastest, because every item has a fancier, pricier version sitting right next to the plain one. The essentials fit into five things.
          </p>
          <ul className="item-list">
            <li><strong>Balloons</strong> — in the party's color scheme, loose or in a simple cluster</li>
            <li><strong>"Happy Birthday" banner</strong> — a plain printed version works just as well as a custom one</li>
            <li><strong>Themed tablecloth</strong> — if the party has a theme, this is the item that delivers the most visual identity for the least money</li>
            <li><strong>Birthday candles</strong> — number candles or regular ones, always buy a backup since one tends to break before the photo</li>
            <li><strong>Tape</strong> — for hanging balloons and the banner, the boring item everyone forgets until they need it</li>
          </ul>
          <p>
            Party favors come after this, and only if the budget allows it. A favor bag with a small treat or toy covers a kids' party. At an adult party, it is fine to skip entirely — nobody drives home complaining there were no favor bags.
          </p>

          {/* COPY LIST */}
          <h2 id="copy-list">Birthday party shopping list to copy and paste</h2>
          <p>
            Click "Copy list" and paste it into your phone's notes app or a group chat. Cross off whatever is already at home — leftover balloons from the last party, a spare candle, trash bags you already had.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Birthday party shopping list</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Food</h4>
                <ul>
                  <li>Cake</li><li>Appetizers</li><li>Dessert bites</li>
                  <li>Chips and dip</li><li>Fresh fruit</li><li>Finger sandwiches</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Drinks</h4>
                <ul>
                  <li>Soda</li><li>Juice</li><li>Water</li>
                  <li>Ice</li><li>Beer or sparkling wine</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Paper goods</h4>
                <ul>
                  <li>Plates</li><li>Cups</li><li>Napkins</li>
                  <li>Tablecloth</li><li>Cutlery</li><li>Trash bags</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Decorations</h4>
                <ul>
                  <li>Balloons</li><li>Happy Birthday banner</li>
                  <li>Themed tablecloth</li><li>Candles</li><li>Tape</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Party favors</h4>
                <ul>
                  <li>Favor bags</li><li>Treat or small toy</li>
                  <li>Thank-you cards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SAVING */}
          <h2 id="saving">How to save without the party feeling cheap</h2>

          <p>
            The fastest way to cut cost on a birthday party is swapping a paid service for home cooking — a homemade cake instead of a bakery order, baked snacks instead of a store-bought catering tray. The taste difference is small; the price difference is not.
          </p>
          <p>
            Buying in bulk helps too: a 2-liter bottle of soda costs less per ounce than individual cans, and a large pack of paper plates costs less per plate than a small one. The trick is doing the math first — leftover paper goods are not a problem, leftover perishable snacks are waste.
          </p>
          <p>
            A <a href="/en/blog/como-economizar-no-mercado">shopping list sorted by category</a> saves a second trip to the store — one to forget the ice, another to rush back the morning of the party because napkins never made the cut. Splitting food, drinks, paper goods, and decor before you leave the house already cuts the risk of forgetting something in half.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about birthday party shopping lists</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">How much food should you buy per person at a birthday party?</p>
              <p className="faq-a">
                Plan on 8-10 pieces of finger food per adult for a 2-3 hour party, and 4-6 per child. With cake and dessert bites also on the table, stick to the lower end. For a shorter 1-2 hour party, 5-6 pieces per adult is enough.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much soda should you buy per guest?</p>
              <p className="faq-a">
                A good rule of thumb is 16-20oz total per person across all non-alcoholic drinks. That works out to roughly one 2-liter bottle of soda for every 6-7 guests, plus juice and water on the side. On a hot day, add 20% more.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What do you really need for a kids' birthday party?</p>
              <p className="faq-a">
                Cake, candles, something to drink, finger food, and one way to burn off kid energy — balloons or a simple game cover it. A themed decor budget and a hired entertainer are extras, not requirements.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you throw a birthday party on a budget?</p>
              <p className="faq-a">
                Yes, and the cost drops the most when food and drinks come from your own kitchen instead of a caterer. A homemade cake, baked snacks, and balloons instead of a custom backdrop cut the bill without cutting the party.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do adults need party favors at a birthday party?</p>
              <p className="faq-a">
                No. Favor bags are a stronger tradition at kids' parties. At an adult party, it is a nice-to-have — cut it from the budget without a second thought.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many days in advance should you buy party supplies?</p>
              <p className="faq-a">
                Decorations, paper goods, and favors can be bought 1-2 weeks ahead. Cake and perishables should wait until 1-2 days before. Drinks and ice go the day before or the day itself.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What's the first thing to cut if money is tight?</p>
              <p className="faq-a">
                Themed decor and elaborate party favors go first. Food and drinks stay, because that is what people actually notice when it runs short. Colorful balloons and a good cake carry a party just fine without a custom banner.
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
            <p className="blog-cta-title">Birthday shopping list done. Nothing forgotten at the store.</p>
            <p className="blog-cta-desc">
              With Mise, you build your <a href="/en/funcionalidades/lista-de-compras">shopping list</a> by category and check what is already in the{' '}
              <a href="/en/funcionalidades/despensa">pantry</a> before you head out for the party.
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
