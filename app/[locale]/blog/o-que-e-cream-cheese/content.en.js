import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'What Is Cream Cheese? Types, Uses, and Cream Cheese vs Neufchâtel',
  description: 'Cream cheese is a soft, mildly tangy fresh cheese invented in the US in 1872. See the types you’ll find at the store, how it compares to Neufchâtel, and how to cook with it.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cream-cheese',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cream-cheese',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cream-cheese',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cream-cheese',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cream-cheese',
    },
  },
  openGraph: {
    title: 'What Is Cream Cheese? Types, Uses, and Cream Cheese vs Neufchâtel',
    description: 'Cream cheese is a soft, mildly tangy fresh cheese invented in the US in 1872. See the types you’ll find at the store, how it compares to Neufchâtel, and how to cook with it.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cream-cheese',
    images: [
      {
        url: 'https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sandwich with cream cheese and tomatoes — soft, spreadable cheese on bread',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Cream Cheese? Types, Uses, and Cream Cheese vs Neufchâtel',
    description: 'Cream cheese is a soft, mildly tangy fresh cheese invented in the US in 1872. See the types you’ll find at the store, how it compares to Neufchâtel, and how to cook with it.',
    images: ['https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is cream cheese the same as Neufchâtel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not quite. By US regulation, cream cheese must have at least 33% milk fat, while Neufchâtel falls between 20% and 33%. Neufchâtel is tangier and slightly grainier; cream cheese is richer and holds its shape better. In most cold spreads and dips they swap fine, but in cheesecake the extra fat in cream cheese gives a denser, more stable result.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does cream cheese have lactose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As a fresh cheese with no aging, cream cheese retains lactose. Aged cheeses lose almost all their lactose during the curing process — cream cheese never goes through that stage. If you’re lactose intolerant, check your own tolerance or look for one of the lactose-free versions now sold by some brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you bake with cream cheese?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. It holds up well in the oven up to about 350°F (180°C), which is exactly why it works so well in cheesecake. At very high heat for too long, it can weep a bit of liquid. For stovetop sauces, stir it in after you’ve lowered the heat to keep the texture smooth.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many calories are in a tablespoon of cream cheese?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full tablespoon (about 15g) has roughly 50 calories, 1g of protein, and 5g of fat. Most people spread more than one tablespoon on a bagel, so a realistic serving lands closer to 100 calories.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I substitute for cream cheese?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the recipe. For cold spreads and dips, Neufchâtel or a well-seasoned ricotta both work. For cheesecake, mascarpone is the closest match in fat and structure. There’s no single perfect swap for every recipe — the tang and firmness of cream cheese affect the result in ways other soft cheeses don’t quite replicate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is reduced-fat cream cheese as good as regular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In cold dishes like dips and spreads, the result is close enough. In hot or baked recipes, the reduced-fat version has more water and less fat — it can weep liquid or bake up less firm. For cheesecake and frosting, stick with regular.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cream cheese gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain cream cheese has no gluten. Flavored versions with herbs or spice blends can carry cross-contamination risk depending on how the plant processes them. Always check the label, especially if you have celiac disease.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Cream Cheese? Types, Uses, and Cream Cheese vs Neufchâtel',
  description: 'Cream cheese is a soft, mildly tangy fresh cheese invented in the US in 1872. See the types you’ll find at the store, how it compares to Neufchâtel, and how to cook with it.',
  image: 'https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-cream-cheese',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'What Is Cream Cheese', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cream-cheese' },
  ],
}

export default function CreamCheeseEn() {
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
            <li className="breadcrumb-current" aria-current="page">What Is Cream Cheese</li>
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
            Cream Cheese, Explained: What It Is and How It&apos;s Different From Neufchâtel
          </h1>
          <p className="blog-desc">
            It went from cheesecake to bagels to frosting to half the recipes on the internet. Cream cheese is everywhere now. But what is it, actually, and how is it different from the lighter tub sitting right next to it in the dairy aisle?
          </p>

          <div className="answer-box">
            <p>
              <strong>Cream cheese</strong> is a soft, fresh cheese made from milk and cream, with no aging involved.
              It has a mildly tangy flavor and enough structure to hold up in recipes like cheesecake and frosting.
              It was invented in the United States in 1872 and has been a fridge staple ever since.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Sandwich with cream cheese and tomatoes — soft, spreadable cheese on bread"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-cream-cheese">What is cream cheese</a></li>
              <li><a href="#how-its-made">How it&apos;s made</a></li>
              <li><a href="#types">Types you&apos;ll find at the store</a></li>
              <li><a href="#nutrition">Nutrition facts</a></li>
              <li><a href="#vs-neufchatel">Cream cheese vs Neufchâtel</a></li>
              <li><a href="#how-to-use">How to cook with it</a></li>
              <li><a href="#how-to-store">How to store it</a></li>
              <li><a href="#worth-it">Is it worth keeping around</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS CREAM CHEESE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6529639/pexels-photo-6529639.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cream cheese spread on a bagel cut in half — soft, creamy texture of the cheese"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-is-cream-cheese" className="img-above">What is cream cheese</h2>

          <p>
            Cream cheese is a soft, fresh cheese made from cow&apos;s milk and cream. It doesn&apos;t age — it goes straight from the vat to the tub. That&apos;s what gives it the smooth texture, the mild tang, and the shorter shelf life compared to aged cheeses like cheddar or parmesan.
          </p>
          <p>
            The name says it plainly: it&apos;s cream, made into cheese. And the composition backs that up — it has more cream than most fresh cheeses. That high fat content is what gives it the signature creaminess and the ability to hold its shape in a baked cheesecake instead of collapsing.
          </p>
          <p>
            In the US, it started as a bagel spread and never stopped expanding from there. Now it shows up in sweet and savory recipes, in dips, in pie fillings, in pasta sauces. Cream cheese got into everything over the past few decades. Someone should&apos;ve warned us it would end up in this many recipes.
          </p>

          {/* HOW IT'S MADE */}
          <h2 id="how-its-made">How cream cheese is made</h2>

          <p>
            Production starts with milk and cream blended together, then cultured with lactic acid bacteria. The culture coagulates the mixture and builds the tangy flavor — the same basic process behind other fresh cheeses, just with a much higher fat ratio.
          </p>
          <p>
            The resulting curd is heated, salted, and packed. No pressing, no aging. The finished product stays stable in the fridge but starts to shift texture fast once it hits room temperature.
          </p>
          <p>
            Knowing the process helps in the kitchen. Cream cheese tolerates moderate oven heat without breaking down, which is why it works so well baked into cheesecake. Over direct high heat, the fat can separate. Add it once the heat is already turned down and the texture stays smooth.
          </p>

          {/* TYPES */}
          <h2 id="types">Types of cream cheese you&apos;ll find at the store</h2>

          <p>
            The dairy aisle usually carries a handful of formats. Knowing the difference keeps you from grabbing the wrong tub for the recipe.
          </p>

          <h3>Original / block-style</h3>
          <p>
            The standard. Denser texture, stronger flavor. This is the right pick for cheesecake, frosting, and anything that needs structure. It works both cold and baked.
          </p>

          <h3>Reduced-fat or light</h3>
          <p>
            Less fat, more water. Works fine as a cold spread — on a bagel, a cracker, or in a dip. In hot or baked recipes, it can weep liquid and bake up less firm. For cheesecake, the result lands below what you&apos;d expect.
          </p>

          <h3>Whipped</h3>
          <p>
            Has extra air beaten into it, so it spreads straight from the fridge without a fight. Convenient for a quick snack. Less suited to recipes where structure matters — the lighter texture works against the final result.
          </p>

          <h3>Flavored</h3>
          <p>
            Versions with herbs, smoked salmon, or fruit come ready to serve as an appetizer. Convenient, but limited use in cooking — the built-in seasoning boxes in what you can actually make with it.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">Cream cheese nutrition facts</h2>

          <p>
            Original cream cheese has around 342 calories per 100g. In a real-world serving — one full tablespoon, about 15g — that comes out to roughly 50 calories.
          </p>
          <p>
            Most of that comes from fat: about 34g per 100g, mostly saturated. Protein is low for a cheese, around 7g per 100g. Sodium is on the lower side for a processed dairy product, roughly 107mg per 100g.
          </p>
          <p>
            Cream cheese isn&apos;t something to cut out — it&apos;s a rich cheese that makes sense in moderation. One tablespoon on your morning bagel isn&apos;t the problem. The problem is treating the whole tub like a snack.
          </p>

          {/* VS NEUFCHATEL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3957501/pexels-photo-3957501.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bagel with cream cheese and smoked salmon — a classic American pairing"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="vs-neufchatel" className="img-above">Cream cheese vs Neufchâtel</h2>

          <p>
            This is the comparison that actually trips people up — the two sit next to each other in the same section, and the tubs look almost identical.
          </p>
          <p>
            The name comes from a much older French cheese, but the Neufchâtel sold in US grocery stores is an American adaptation, not the original. By regulation, cream cheese has to be at least 33% milk fat. Neufchâtel falls between 20% and 33% — which is why it&apos;s often marketed as the &quot;light&quot; option, sometimes even labeled that way instead of Neufchâtel.
          </p>
          <p>
            The lower fat content makes Neufchâtel tangier and a bit grainier. Cream cheese is richer, smoother, and holds its shape better under heat. That structural difference is why professional bakers reach for full-fat cream cheese in cheesecake — Neufchâtel can turn out looser and slightly less stable.
          </p>
          <p>
            In practice: on a bagel, in a dip, or spread on toast, the two are close enough that most people can&apos;t tell the difference — pick whichever is cheaper or lower-fat for you. In cheesecake and frosting, stick with cream cheese. The extra fat isn&apos;t optional there.
          </p>

          <div className="blog-inline-cta">
            <p>Know what&apos;s in the fridge before you build the list. <em>Mise handles that part.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to cook with cream cheese</h2>

          <p>
            The most common uses — and a few less obvious ones worth trying.
          </p>

          <h3>As a spread or appetizer</h3>
          <p>
            The simplest use: straight on toast, crackers, or a bagel. Mixed with fresh herbs, olive oil, or chili flakes, it works as an appetizer on its own. You buy it for a recipe and eat half of it standing at the counter first. Everyone does this.
          </p>

          <h3>In sweet recipes</h3>
          <p>
            Cheesecake is the classic — baked or no-bake. It also shows up in carrot cake and red velvet frosting, mousse, and filled pastries. The tang in cream cheese balances the sugar and sets it apart from fillings made with plain cream.
          </p>

          <h3>In savory recipes</h3>
          <p>
            Quiche and savory pie fillings, baked spinach dip, creamy pasta sauces. Anywhere a recipe calls for heavy cream, cream cheese swaps in with more body and structure — the sauce comes out thicker and holds up better when reheated.
          </p>

          <h3>In hot dishes</h3>
          <p>
            In the oven up to about 350°F (180°C), it holds up fine without weeping too much liquid. On the stovetop, stir it in after you&apos;ve lowered the heat. Direct high heat can make it grainy or split the fat out. It won&apos;t ruin the dish — it just changes the texture, and not for the better.
          </p>

          <p>
            If you plan meals ahead, it&apos;s worth putting cream cheese on the{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly menu</a>{' '}
            once you&apos;ve got at least two uses lined up. An open tub with no clear plan disappears before it gets used.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store cream cheese</h2>

          <p>
            Refrigerate it always — it&apos;s not a pantry item once opened. Sealed in the original packaging, it lasts until the printed date. Once opened, use it within 7 to 10 days.
          </p>
          <p>
            Freezing is possible, but it changes the texture. After thawing, it turns grainy and doesn&apos;t spread well. It still works in cooked or baked recipes. As a spread, it doesn&apos;t. If you&apos;re going to freeze it, plan on using it in a hot dish.
          </p>
          <p>
            Signs it&apos;s gone bad: yellowing at the edges, liquid pooling on the surface, or a sour smell beyond the usual tang. If any of those show up, toss it. Cream cheese that&apos;s turned isn&apos;t something heat can fix.
          </p>

          <p>
            Keeping the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            updated with what you have and when it expires heads off that kind of waste. Knowing there&apos;s an open tub of cream cheese in the fridge makes a real difference when you&apos;re building the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            for the week.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is cream cheese worth keeping in the fridge</h2>

          <p>It depends on what you cook.</p>
          <p>
            If you make cheesecake, frosting, or anything that specifically calls for cream cheese, there&apos;s no substitute that gives the same result. Put it on the list when you plan to use it — without a clear plan, it turns into a forgotten expense at the back of the fridge.
          </p>
          <p>
            If you just want a spread for breakfast, Neufchâtel works about as well and usually costs less. Cream cheese runs more per tub, and its stronger tang isn&apos;t everyone&apos;s preference.
          </p>
          <p>
            If you cook a wide variety of recipes regularly, it&apos;s worth always having a tub on hand. Cream cheese slots into sauces, fillings, and desserts without much planning — as long as you remember it&apos;s there. If you save recipes often, a{' '}
            <a href="/en/blog/caderno-de-receitas">recipe notebook</a>{' '}
            with ingredients noted down helps avoid buying the wrong thing.
          </p>
          <p>
            It&apos;s not a pantry basic the way garlic or olive oil are — but it earns a spot on the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            whenever there&apos;s a recipe waiting for it. Cream cheese doesn&apos;t make the cut out of habit. It makes the cut because it has somewhere to go.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about cream cheese</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is cream cheese the same as Neufchâtel?</p>
              <p className="faq-a">
                Not quite. By regulation, cream cheese must have at least 33% milk fat, while Neufchâtel falls between 20% and 33%. Neufchâtel is tangier and slightly grainier; cream cheese is richer and holds its shape better. In cold spreads and dips they swap fine, but in cheesecake the extra fat in cream cheese makes a real difference.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does cream cheese have lactose?</p>
              <p className="faq-a">
                Yes. As a fresh cheese with no aging, it retains lactose. Aged cheeses lose almost all their lactose during curing — cream cheese never goes through that stage. If you&apos;re lactose intolerant, check your own tolerance or look for a lactose-free version.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you bake with cream cheese?</p>
              <p className="faq-a">
                Yes. It holds up well in the oven up to about 350°F (180°C), which is why it works so well in cheesecake. At very high heat for too long, it can weep a bit of liquid. For stovetop sauces, stir it in after lowering the heat to keep the texture smooth.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many calories are in a tablespoon of cream cheese?</p>
              <p className="faq-a">
                A full tablespoon (about 15g) has roughly 50 calories, 1g of protein, and 5g of fat. Most people spread more than one tablespoon, so a realistic serving is closer to 100 calories.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What can I substitute for cream cheese?</p>
              <p className="faq-a">
                It depends on the recipe. For cold spreads, Neufchâtel or a well-seasoned ricotta both work. For cheesecake, mascarpone is the closest match in fat and structure. There&apos;s no perfect swap for every recipe — the tang and firmness affect the result in ways other cheeses don&apos;t quite replicate.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is reduced-fat cream cheese as good as regular?</p>
              <p className="faq-a">
                In cold dishes like dips and spreads, the result is close enough. In hot or baked recipes, the reduced-fat version has more water and less fat — it can weep liquid or bake up less firm. For cheesecake and frosting, stick with regular.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is cream cheese gluten-free?</p>
              <p className="faq-a">
                Plain cream cheese has no gluten. Flavored versions with herbs or spice blends can carry cross-contamination risk depending on how the plant processes them. Always check the label, especially if you have celiac disease.
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
                Creator of Mise. Bought cream cheese to make a cheesecake, used half of it on a breakfast bagel first. The cheesecake happened the following weekend.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Pantry connected. List built.<br />
              <em>Let Mise handle the rest.</em>
            </h2>
            <p>
              Mise connects your pantry, recipes, and shopping list in one place.
              You know what you have before you shop — and cream cheese doesn&apos;t show up twice in the fridge.
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
