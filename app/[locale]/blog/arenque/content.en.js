import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'What Is Herring? Nutrition, Benefits, and How to Cook It',
  description: 'Herring is a small, oily fish loaded with omega-3 and vitamin D. What it is, how it compares to sardines, and how to cook with smoked or pickled herring.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/arenque',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/arenque',
      en: 'https://www.miseemcasa.com.br/en/blog/arenque',
      es: 'https://www.miseemcasa.com.br/es/blog/arenque',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/arenque',
    },
  },
  openGraph: {
    title: 'What Is Herring? Nutrition, Benefits, and How to Cook It',
    description: 'Herring is a small, oily fish loaded with omega-3 and vitamin D. What it is, how it compares to sardines, and how to cook with smoked or pickled herring.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/arenque',
    images: [
      {
        url: 'https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Grilled fish fillet with vegetables on a plate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Herring? Nutrition, Benefits, and How to Cook It',
    description: 'Herring is a small, oily fish loaded with omega-3 and vitamin D. What it is, how it compares to sardines, and how to cook with smoked or pickled herring.',
    images: ['https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is herring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Herring is a small, oily fish in the Clupeidae family — the same family as sardines and anchovies. The most common species is Clupea harengus, native to the cold waters of the North Atlantic, the North Sea, and the Baltic. It is usually sold smoked (kippers), pickled in vinegar, or canned, since fresh herring rarely reaches markets far from the coast. It has a stronger flavor than sardines and is rich in omega-3, vitamin D, and protein.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between herring and sardines?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Herring and sardines are in the same family (Clupeidae) but are different species. Herring is larger, has a stronger flavor — especially smoked — and has slightly more omega-3 per 100g (about 1.7g vs 1.0–1.5g for sardines). Sardines have more calcium and are cheaper and easier to find almost anywhere. For everyday eating, sardines. For variety or more omega-3 per serving, herring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can you buy herring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smoked herring (kippers) and canned herring show up in well-stocked supermarkets, often near the canned fish or international aisle. Pickled herring in jars is common at Scandinavian, German, and Jewish delis, and at specialty grocers. Both are also easy to find online. Prices vary widely by format — canned is usually the cheapest, jarred pickled herring and vacuum-packed smoked fillets cost more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does smoked herring have bones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vacuum-packed smoked herring fillets are almost always boneless — they are filleted before smoking. Whole kippers, the traditional British breakfast style, still have small bones and need to be picked apart. If you want to avoid bones entirely, buy boneless smoked fillets rather than whole kippers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you cook with herring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Smoked or pickled herring doesn't need cooking — it's ready to eat straight from the package. It works well in pasta with olive oil and lemon, on toast or a bagel with cream cheese and capers, in a potato salad with red onion, folded into scrambled eggs (30–40g changes the dish), or blended into a pâté with cream cheese. The flavor is strong, so use less than you would sardines.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is herring good for you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Herring is rich in omega-3 (important for heart and brain health), vitamin D (one of the best natural food sources), vitamin B12, and protein. A 100g serving of smoked herring has roughly 24g of protein and 1.7g of omega-3. The smoked and pickled versions are high in sodium — around 650–750mg per 100g — which is worth watching if you're managing blood pressure.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is herring high in sodium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The smoked and pickled versions are, yes — usually 650 to 750mg per 100g. That sodium comes from the curing and preservation process. If you watch your sodium intake, keep portions around 50g and balance the rest of the meal around it. Fresh herring has far less sodium, but it is hard to find outside markets right on the coast.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Herring? Nutrition, Benefits, and How to Cook It',
  description: 'Herring is a small, oily fish loaded with omega-3 and vitamin D. What it is, how it compares to sardines, and how to cook with smoked or pickled herring.',
  image: 'https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/arenque',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'What Is Herring', item: 'https://www.miseemcasa.com.br/en/blog/arenque' },
  ],
}

export default function HerringEn() {
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
            <li className="breadcrumb-current" aria-current="page">What Is Herring</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">Aug 3, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Herring: The Everyday Fish That&apos;s Quietly Packed With Omega-3
          </h1>
          <p className="blog-desc">
            Herring shows up canned in the fish aisle, pickled in a jar at the deli counter, and smoked in vacuum packs labeled kippers — and most people walk right past it. What herring actually is, why it&apos;s worth a second look, and how to use the smoked and pickled versions without overthinking it.
          </p>

          <div className="answer-box">
            <p>
              <strong>Herring</strong> is a small, oily fish in the same family as sardines and anchovies (<em>Clupeidae</em>),
              native to the cold waters of the North Atlantic. It&apos;s usually sold smoked (kippers), pickled in vinegar,
              or canned — fresh herring is hard to find outside markets near the coast. Rich in omega-3, vitamin D, and
              protein, with a stronger flavor than sardines.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Grilled fish fillet with vegetables on a plate"
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
              <li><a href="#what-is-herring">What herring is</a></li>
              <li><a href="#nutrition">Why herring is worth eating</a></li>
              <li><a href="#types">Smoked, pickled, or canned: what you&apos;ll find</a></li>
              <li><a href="#how-to-use">How to cook with herring</a></li>
              <li><a href="#herring-vs-sardines">Herring vs sardines: which to buy</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS HERRING */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6839650/pexels-photo-6839650.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Close-up of a prepared fish dish with side dishes"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-is-herring" className="img-above">What herring is</h2>

          <p>
            Herring (<em>Clupea harengus</em>) is a small, silvery fish in the Clupeidae family — the same family as sardines, anchovies, and shad. Slender body, between 8 and 16 inches long, and one of the most heavily fished species in the world for centuries running.
          </p>
          <p>
            It swims in dense schools in the North Atlantic, the North Sea, and the Baltic — cold water, close to the surface. There&apos;s so much of it that herring built entire fishing economies in Northern Europe; cities like Amsterdam and Gothenburg owe part of their early wealth to it.
          </p>
          <p>
            Fresh herring is genuinely hard to find outside a handful of coastal markets. What actually reaches most kitchens has already been processed: smoked, pickled in vinegar, or canned in oil or sauce. That processing is also what makes herring so convenient — no thawing, no prep, straight from the jar or the fridge.
          </p>
          <p>
            The most common format is smoked herring — sold whole as kippers, or as boneless vacuum-packed fillets. Pickled herring, popular at Scandinavian and Jewish delis, comes in a vinegar brine, sometimes with onion, wine, or a cream sauce.
          </p>
          <p>
            In Northern Europe, herring is closer to a pantry staple than a specialty item. The Dutch eat it raw and lightly cured — <em>Hollandse Nieuwe</em>, sold from street stalls every summer. Scandinavians build entire holiday spreads around pickled versions. British breakfasts have leaned on kippers for well over a century.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">Why herring is worth eating</h2>

          <p>
            For a fish that&apos;s cheap where it&apos;s caught, herring has a nutrition profile that rivals ingredients costing far more. Per 100g of smoked herring:
          </p>

          <ul className="item-list">
            <li>Calories: ~217 kcal</li>
            <li>Protein: ~24 g</li>
            <li>Total fat: ~12 g (mostly unsaturated)</li>
            <li>Omega-3: ~1.7 g</li>
            <li>Vitamin D: ~16 µg — about 107% of the recommended daily intake</li>
            <li>Vitamin B12: ~13 µg — more than 5x the daily recommendation</li>
            <li>Selenium: ~34 µg</li>
          </ul>

          <p>
            Omega-3 is the headline number. 1.7g per 100g edges out what canned sardines offer on average — usually 1.0 to 1.5g depending on species and packing. For comparison, canned tuna in water has just 0.1 to 0.3g of omega-3 per 100g. The{' '}
            <a href="https://www.fao.org/fishery/en" target="_blank" rel="noopener noreferrer">FAO</a>{' '}
            lists herring among the fish with the highest nutritional value for human consumption.
          </p>
          <p>
            Vitamin D is the other reason to pay attention. Foods with a meaningful amount of natural vitamin D are rare — an egg has about 2 µg per unit. Smoked herring has roughly 16 µg per 100g, one of the densest food sources that exists. If you&apos;re trying to raise vitamin D without a supplement, herring is one of the more concrete options.
          </p>
          <p>
            The catch: smoked and pickled herring run high in sodium, around 650 to 750mg per 100g. That&apos;s part of the curing process. If you&apos;re watching sodium, it doesn&apos;t rule herring out, but it does set a reasonable portion size.
          </p>
          <p>
            A direct comparison with common oily fish:
          </p>

          <ul className="item-list">
            <li>Omega-3 in herring: ~1.7g per 100g</li>
            <li>Omega-3 in canned sardines: ~1.0–1.5g per 100g</li>
            <li>Omega-3 in canned tuna: ~0.1–0.3g per 100g</li>
            <li>Omega-3 in salmon: ~2.0–2.5g per 100g — more, but it costs considerably more per pound</li>
          </ul>

          <p>
            Herring sits between sardines and salmon nutritionally, and well below salmon in price. It&apos;s not the cheapest fish on the shelf, but per serving, it delivers more omega-3 than any can of tuna.
          </p>

          {/* TYPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7426869/pexels-photo-7426869.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Package of smoked fish product on a wooden surface with herbs"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="types" className="img-above">Smoked, pickled, or canned: what you&apos;ll actually find</h2>

          <p>
            Herring sells under more formats than most fish, and each one is built for a different use.
          </p>

          <h3>Smoked (kippers or boneless fillets)</h3>
          <p>
            Sold whole as kippers — split, gutted, and cold-smoked, still with small bones — or as boneless vacuum-packed fillets. The boneless fillet is the easier starting point if you&apos;re trying herring for the first time. Ready to eat straight from the package.
          </p>

          <h3>Pickled</h3>
          <p>
            Comes in jars, cured in a vinegar brine, sometimes with onion, mustard, or a cream or wine sauce. Common at Scandinavian, German, and Jewish delis. The flavor is sharper and more acidic than smoked herring — closer to a condiment than a main ingredient.
          </p>

          <h3>Canned</h3>
          <p>
            In oil, tomato sauce, or mustard sauce. The cheapest and most shelf-stable format, similar in spirit to canned sardines — pull it out of the pantry, no refrigeration needed until it&apos;s opened.
          </p>

          <p>Where to find it:</p>
          <ul className="item-list">
            <li><strong>Specialty grocers</strong> — Scandinavian, German, and Jewish delis carry the widest range, especially pickled herring</li>
            <li><strong>Well-stocked supermarkets</strong> — smoked and canned herring usually show up in the international or canned fish aisle</li>
            <li><strong>Online</strong> — the full range of formats, useful if nothing local carries it</li>
          </ul>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to cook with herring</h2>

          <p>
            Smoked or pickled herring has a strong flavor. The rule of thumb: start with less than you think you need, especially the first time. The fish holds its own in a dish — it doesn&apos;t take much to show up.
          </p>

          <h3>Herring pasta</h3>
          <p>
            The most direct use. Cook the pasta. Break the fillets into small pieces. Toss with olive oil, lemon juice, and chopped dill. Ready in 20 minutes. The herring carries the dish without needing much else — works well with spaghetti, fettuccine, or penne.
          </p>

          <h3>On toast or a bagel</h3>
          <p>
            Cream cheese as the base, herring fillet on top, capers and chives. Works as an appetizer or a fast dinner. The fat in the cream cheese balances the intensity of the fish. Fresh dill helps, but it&apos;s fine without.
          </p>

          <h3>Potato salad</h3>
          <p>
            A classic Northern European combination. Boiled potatoes, red onion, herring in pieces, mustard, and a bit of mayonnaise or plain yogurt. The fish&apos;s fat balances the potato&apos;s starch. Filling, easy to put together, and holds up in the fridge — good for making ahead.
          </p>

          <h3>Scrambled eggs</h3>
          <p>
            30 to 40g of herring in small pieces stirred into scrambled eggs changes the dish completely. Same idea as smoked salmon in Scandinavian breakfasts — adds protein and flavor for almost no extra effort. You bought herring, you have eggs, breakfast is sorted.
          </p>

          <h3>Herring pâté</h3>
          <p>
            Blend smoked herring with cream cheese, lemon juice, and pepper. The pâté keeps three to four days in the fridge and works with crackers or raw vegetables. If you&apos;ve got leftover herring and no plan for it, this is the fastest way to use it up.
          </p>

          <p>
            One use that doesn&apos;t work: herring as the main ingredient in a delicate, mild-flavored dish. The taste is too assertive for anything that depends on subtlety. It works when the dish can handle intensity — not when the goal is something light.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t take this much guesswork. <em>Mise handles the rest.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HERRING VS SARDINES */}
          <h2 id="herring-vs-sardines">Herring vs sardines: which to buy</h2>

          <p>
            The most direct comparison: sardines win on convenience, herring wins on nutrient density.
          </p>
          <p>
            Canned sardines are in every grocery store, cost little, and deliver solid omega-3, protein, and calcium from the soft bones. They&apos;re one of the most complete, affordable proteins you can keep in the pantry. Herring costs more, is harder to find, and has a stronger flavor — which narrows how you use it.
          </p>

          <p>Where herring has the edge:</p>
          <ul className="item-list">
            <li>Slightly more omega-3 per 100g (~1.7g vs ~1.0–1.5g for sardines)</li>
            <li>More natural vitamin D per serving</li>
            <li>No bones in the packaged smoked fillet — canned sardines sometimes have soft bones</li>
            <li>Ready to eat, no prep needed</li>
            <li>Stronger flavor — a smaller amount goes further in a dish</li>
          </ul>

          <p>Where sardines win:</p>
          <ul className="item-list">
            <li>Availability — on the shelf of nearly any grocery store</li>
            <li>Price — considerably cheaper per 100g</li>
            <li>Pantry life — a can sits on the shelf for a long time</li>
            <li>Versatility — works in more types of recipes</li>
          </ul>

          <p>
            The practical takeaway: sardines are the pantry item you buy every month. Herring is the pick for variety, for trying something different, or for more omega-3 per serving without redoing the whole menu.
          </p>
          <p>
            If sardines are already working in your{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            rotation, there&apos;s no need to switch. Herring is for when you want to expand the fish you keep on hand — not a replacement, more of an occasional addition.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about herring</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What is herring?</p>
              <p className="faq-a">
                Herring is a small, oily fish in the Clupeidae family — the same family as sardines and anchovies. The most common species is <em>Clupea harengus</em>, native to the North Atlantic. It&apos;s usually sold smoked, pickled, or canned. It has a stronger flavor than sardines and is rich in omega-3, vitamin D, and protein.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between herring and sardines?</p>
              <p className="faq-a">
                They&apos;re in the same family but different species. Herring is larger, has a stronger flavor — especially smoked — and has slightly more omega-3 per 100g (~1.7g vs 1.0–1.5g for sardines). Sardines have more calcium and are cheaper and easier to find. For everyday eating, sardines. For variety or more nutrients per serving, herring.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Where can you buy herring?</p>
              <p className="faq-a">
                Smoked and canned herring show up in well-stocked supermarkets, usually near the canned fish aisle. Pickled herring in jars is common at Scandinavian, German, and Jewish delis, and online. Canned is the cheapest format; jarred pickled and vacuum-packed smoked fillets cost more.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does smoked herring have bones?</p>
              <p className="faq-a">
                Vacuum-packed smoked herring fillets are almost always boneless — filleted before smoking. Whole kippers, the traditional British breakfast format, still have small bones. Buy boneless fillets if you want to skip that step entirely.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you cook with herring?</p>
              <p className="faq-a">
                Smoked or pickled herring doesn&apos;t need cooking. It works well in pasta with olive oil and lemon, on toast with cream cheese and capers, in a potato salad with red onion, folded into scrambled eggs, and in a pâté. The flavor is strong — use less than you would sardines and adjust to taste.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is herring good for you?</p>
              <p className="faq-a">
                Yes. It&apos;s rich in omega-3, vitamin D (one of the best natural food sources), vitamin B12, and protein. A 100g serving has about 24g of protein and 1.7g of omega-3. The smoked and pickled versions run high in sodium (~650–750mg per 100g), worth watching if you manage blood pressure.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is herring high in sodium?</p>
              <p className="faq-a">
                The smoked and pickled versions are, yes — usually 650 to 750mg per 100g. That comes from the curing process. If you watch sodium, keep the portion around 50g and balance the rest of the meal. Fresh herring has much less sodium but is hard to find away from the coast.
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
                Creator of Mise. Bought a jar of pickled herring on a whim, had no idea what to do with it for a week, ended up eating it on rye toast with butter. Never went back to plain butter.
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
              You know what&apos;s at home before you shop — and stop buying what you already have.
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
