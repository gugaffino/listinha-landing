import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'What Is Stevia? The Plant Behind the Zero-Calorie Sweetener',
  description: 'Stevia is a natural sweetener from a plant, up to 300 times sweeter than sugar, with zero calories and no effect on blood sugar. What it is, how it is made, and how to use it in the kitchen.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-stevia',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-stevia',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-stevia',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-stevia',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-stevia',
    },
  },
  openGraph: {
    title: 'What Is Stevia? The Plant Behind the Zero-Calorie Sweetener',
    description: 'Stevia is a natural sweetener from a plant, up to 300 times sweeter than sugar, with zero calories and no effect on blood sugar. What it is, how it is made, and how to use it in the kitchen.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-stevia',
    images: [
      {
        url: 'https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Stevia rebaudiana plant with oval green leaves — natural sweetening shrub native to Paraguay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Stevia? The Plant Behind the Zero-Calorie Sweetener',
    description: 'Stevia is a natural sweetener from a plant, up to 300 times sweeter than sugar, with zero calories and no effect on blood sugar. What it is, how it is made, and how to use it in the kitchen.',
    images: ['https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is stevia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stevia is a natural sweetener extracted from the leaves of the Stevia rebaudiana plant, native to Paraguay and southern Brazil. Its active compounds — steviol glycosides — are 200 to 300 times sweeter than sugar, with zero calories and no effect on blood sugar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is stevia natural or artificial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stevia comes from a plant, so the origin is natural. But commercial extracts go through an industrial extraction and purification process. The result is different from chewing the raw leaf, which tastes rougher. Store-bought stevia is a concentrated extract — natural at the source, processed in production.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can stevia replace sugar in every recipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not in everything. Stevia sweetens well in drinks, cold desserts, and recipes without yeast. Where it does not work as a direct substitute: caramel sauce (it does not caramelize), yeast bread (yeast does not feed on the glycosides), and recipes that rely on sugar for structure or moisture, like certain cakes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is stevia bad for you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In normal use, no. In 2008, the FDA classified high-purity stevia extracts as generally recognized as safe — the same category as salt and sugar. Studies using very high doses showed some effects in animals, but the amount required is far beyond what anyone would consume day to day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does stevia have calories?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Practically zero. Steviol glycosides are not metabolized by the body for energy. Some stevia products contain fillers (maltodextrin, erythritol) that add minimal calories, but pure stevia extract has zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much stevia equals one teaspoon of sugar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on the format. A 1:1 baking blend replaces sugar in the same measure — one teaspoon for one teaspoon. Pure stevia powder is far more concentrated: roughly 1/4 teaspoon equals one teaspoon of sugar. Always read the label, since concentration varies between brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use stevia while pregnant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for high-purity refined rebaudioside A extracts. The FDA does not restrict use during pregnancy in this form. Raw stevia leaf and unrefined extracts do not carry the same safety review. Check the label — the product should specify purified stevia extract.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does stevia taste bitter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The bitterness comes from stevioside, the most abundant compound in the leaf. Rebaudioside A, also present, has less bitterness and a cleaner taste — which is why premium products use a higher proportion of rebaudioside A. If the stevia you use tastes very bitter, try a brand with more rebaudioside A in the mix.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Stevia? The Plant Behind the Zero-Calorie Sweetener',
  description: 'Stevia is a natural sweetener from a plant, up to 300 times sweeter than sugar, with zero calories and no effect on blood sugar. What it is, how it is made, and how to use it in the kitchen.',
  image: 'https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-stevia',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'What Is Stevia', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-stevia' },
  ],
}

export default function SteviaEn() {
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
            <li className="breadcrumb-current" aria-current="page">What Is Stevia</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">Aug 6, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Stevia: The Sweetener That Comes From a Leaf, Not a Lab
          </h1>
          <p className="blog-desc">
            The sweetener aisle is confusing. Stevia shows up in packets, drops, and blends that barely resemble each other. What stevia actually is, where the sweetness comes from, and when it is worth using in the kitchen.
          </p>

          <div className="answer-box">
            <p>
              <strong>Stevia</strong> is a natural sweetener extracted from the leaves of the{' '}
              <em>Stevia rebaudiana</em> plant, native to Paraguay and southern Brazil.
              Its active compounds are 200 to 300 times sweeter than sugar —
              with zero calories and no effect on blood sugar.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Stevia rebaudiana plant with oval green leaves — natural sweetening shrub native to Paraguay"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pexels / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-stevia">What is the stevia plant</a></li>
              <li><a href="#compounds">The compounds that sweeten it</a></li>
              <li><a href="#vs-sugar">Stevia vs sugar: what changes</a></li>
              <li><a href="#is-it-safe">Is stevia bad for you</a></li>
              <li><a href="#how-to-use">How to use stevia in the kitchen</a></li>
              <li><a href="#who-should-be-careful">Who should use it, and who should be careful</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS STEVIA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5721978/pexels-photo-5721978.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh stevia leaves in close-up on a rustic surface — texture of the plant's oval leaves"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels / Pexels</p>
          </div>

          <h2 id="what-is-stevia" className="img-above">What is the stevia plant</h2>

          <p>
            <em>Stevia rebaudiana</em> is a small shrub in the daisy family — the same family as sunflowers and marigolds.
            It grows wild in Paraguay and parts of southern Brazil, in the border region where Guaraní communities were sweetening drinks with the leaf long before Europeans arrived.
            Locally it is called <em>ka&apos;a he&apos;ê</em> — sweet herb. This is not a lab-engineered plant. It grows in a backyard.
          </p>
          <p>
            Swiss botanist Moisés Bertoni gave the species its formal name in 1899.
            Paraguayan chemist Ovidio Rebaudi isolated the sweet compounds the following year — which is where &quot;rebaudiana&quot; and the &quot;Reb A&quot; on your sweetener label come from.
          </p>
          <p>
            The leaves are oval, serrated, deep green, and the plant tops out around waist height.
            The sweetness sits in the leaf — not the stem, not the root.
            Making the sweetener starts with drying those leaves and pulling the compounds out with water.
          </p>
          <p>
            Paraguay still grows stevia, but China now produces most of the world&apos;s supply, and a fair amount comes out of the United States too.
            None of that shows up on the label of the packet next to your coffee maker.
          </p>

          {/* COMPOUNDS */}
          <h2 id="compounds">The compounds that sweeten it: steviol glycosides</h2>

          <p>
            The sweetness comes from steviol glycosides — natural compounds concentrated in the leaf.
            The two that matter most are stevioside and rebaudioside A, usually shortened to Reb A.
          </p>
          <p>
            Stevioside is the most abundant, but it carries a noticeable bitter edge.
            Reb A tastes cleaner and dissolves better in water — which is why higher-end products list a high percentage of Reb A on the label.
            If the stevia you use leaves a bitter aftertaste, it likely leans stevioside-heavy.
          </p>
          <p>
            Your body does not metabolize these compounds for energy the way it does sugar.
            That is the entire reason the calorie count is zero — not a marketing claim, just chemistry.
          </p>
          <p>
            Concentration is what trips people up in the kitchen.
            A cup of sugar can be replaced by roughly one teaspoon of pure stevia extract — sometimes less.
            Every brand blends its extract differently, which is why the exact amount depends on the product, not a universal rule.
          </p>

          {/* VS SUGAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7369157/pexels-photo-7369157.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Stevia sweetener packet next to a spoonful of white sugar — visual comparison of the two sweeteners"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels / Pexels</p>
          </div>

          <h2 id="vs-sugar" className="img-above">Stevia vs sugar: what actually changes</h2>

          <p>
            Table sugar: about 4 calories per gram, a glycemic index around 65, and it feeds the bacteria in your mouth that cause cavities.
            Stevia: zero calories, zero glycemic index, no effect on blood sugar, nothing for bacteria to feed on.
          </p>
          <p>
            The numbers look clean. The taste is where it gets complicated.
          </p>
          <p>
            Stevia sweetens well, but the aftertaste is not identical to sugar.
            Plenty of people never notice it at normal concentrations.
            Others — especially in hot drinks like coffee or tea — pick up a licorice-like or bitter finish right away.
            There is no way to know which camp you are in without testing it, and the result varies by brand.
          </p>
          <p>
            The other piece: sugar does more than sweeten in cooking.
            It holds moisture in cakes and cookies.
            It feeds yeast in bread dough.
            It caramelizes in sauces, custard, and crème brûlée.
            Stevia does none of that.
            A cake recipe that just swaps in stevia for sugar, cup for cup, often comes out drier or with less structure.
          </p>
          <p>
            For anyone working on{' '}
            <a href="/en/blog/dieta-sem-acucar">cutting sugar from their diet</a>,{' '}
            stevia is a genuinely useful tool — just not an identical swap for everything sugar does.
          </p>

          {/* IS IT SAFE */}
          <h2 id="is-it-safe">Is stevia bad for you</h2>

          <p>
            This question shows up in every article about stevia — and it makes sense, because anything that sweetens without calories sounds like it must be hiding something.
          </p>
          <p>
            The short answer: in normal use, no.
          </p>
          <p>
            In 2008, the FDA classified high-purity stevia extracts as &quot;generally recognized as safe&quot; — the same category as table salt and sugar.
            JECFA, the joint FAO/WHO expert panel on food additives, set an acceptable daily intake of 4mg of steviol equivalents per kilogram of body weight.
            For a 150-pound adult, that works out to dozens of packets a day — far beyond what anyone would put in their coffee.
          </p>
          <p>
            Studies using very high doses in animal models did turn up some effects.
            The dose required to get anywhere near that range is nowhere close to how anyone actually uses stevia in food.
            There is no evidence of cancer risk, mutagenic effect, or hormonal disruption at normal levels of intake.
          </p>
          <p>
            What this does not mean: that stevia fixes anything by itself.
            Swap the sugar in your coffee for stevia and change nothing else, and the calorie savings is exactly the calories that were in the sugar — nothing more.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t be this much of a headache. <em>Mise fixes that.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use stevia in the kitchen</h2>

          <p>
            Start with the format you bought.
          </p>

          <h3>Liquid stevia</h3>
          <p>
            Concentrated and easy to dose — one to three drops sweeten a glass of water or a cup of coffee.
            Works in both hot and cold drinks.
            Dissolves fast, no grainy residue.
            A small bottle lasts months.
          </p>

          <h3>Pure stevia powder</h3>
          <p>
            Very concentrated — does not swap in at the same measure as sugar.
            For 1 cup of sugar, you need roughly 1 teaspoon of pure extract.
            The smaller volume changes the texture of cakes and cookies: less structure, less moisture.
            Works best in recipes where sugar only sweetens and does not hold anything together.
          </p>

          <h3>Baking blend (1:1)</h3>
          <p>
            The easiest format to bake with.
            Manufacturers bulk out the extract with fillers (erythritol, maltodextrin) so the measurement matches sugar cup for cup: 1 cup of baking blend equals 1 cup of sugar.
            Solves the conversion headache.
            Cakes and desserts come out closer to the original than they do with pure extract.
          </p>

          <h3>Where it works well</h3>
          <ul className="item-list">
            <li>Drinks: coffee, tea, juice, smoothies</li>
            <li>Cold desserts: mousse, gelatin, yogurt</li>
            <li>Dressings and sauces that need a touch of sweetness</li>
            <li>Macerated fruit or fruit salad</li>
            <li>Quick breads made without yeast, like mug cakes</li>
          </ul>

          <h3>Where it does not replace sugar well</h3>
          <ul className="item-list">
            <li>Caramel sauce — stevia does not caramelize</li>
            <li>Yeast bread — yeast does not feed on the glycosides</li>
            <li>Meringue — the structure depends on sugar</li>
            <li>Recipes that need crunch, like classic shortbread</li>
          </ul>

          <p>
            A practical tip: start by replacing half the sugar with stevia.
            Taste it and check the texture.
            Adjust next time.
            Full swaps on the first try tend to disappoint in recipes where sugar is doing more than sweetening.
          </p>

          {/* WHO SHOULD BE CAREFUL */}
          <h2 id="who-should-be-careful">Who should use it, and who should be careful</h2>

          <p>
            <strong>People with diabetes:</strong> stevia is one of the better options out there.
            It does not raise blood sugar.
            It does not require a compensating insulin dose for the sweetener itself.
            You still need to manage the total carbs in the meal — stevia does not change anything else you are eating.
          </p>
          <p>
            <strong>Children:</strong> no age restriction for high-purity extracts.
            The sensible approach: do not lean on any sweetener, stevia included, as a constant substitute for sugar in a child&apos;s diet.
            The goal should be reducing overall sweetness, not swapping one source for another.
          </p>
          <p>
            <strong>Pregnant people:</strong> yes, for high-purity refined rebaudioside A extracts.
            The FDA does not restrict use during pregnancy in this form.
            Raw leaf and unrefined extracts do not carry the same safety review.
            Check the label — the product should specify purified stevia extract.
          </p>
          <p>
            <strong>People with low blood pressure:</strong> pay attention.
            Stevia has a mild blood-pressure-lowering effect.
            That is a plus if you are managing hypertension, but it can cause lightheadedness in someone whose blood pressure already runs low, especially at higher intake.
          </p>
          <p>
            <strong>Anyone on medication for diabetes or blood pressure:</strong> check with a doctor.
            Stevia can amplify the effect of glucose- and blood-pressure-lowering medication, which can shift the dose you need.
          </p>
          <p>
            Everyone else: no meaningful restriction under normal use.
            Keeping stevia in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            as a sweetener option makes sense, especially if you already sweeten drinks out of habit.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about stevia</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What is stevia?</p>
              <p className="faq-a">
                Stevia is a natural sweetener extracted from the leaves of the <em>Stevia rebaudiana</em> plant, native to Paraguay and southern Brazil.
                Its active compounds — steviol glycosides — are 200 to 300 times sweeter than sugar, with zero calories and no effect on blood sugar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is stevia natural or artificial?</p>
              <p className="faq-a">
                The origin is natural — it comes from a plant.
                Commercial extracts go through an industrial extraction and purification process.
                The result is different from chewing the raw leaf, which tastes rougher.
                Natural at the source, processed in production.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can stevia replace sugar in every recipe?</p>
              <p className="faq-a">
                Not in everything.
                It works well in drinks, cold desserts, and recipes without yeast.
                It does not replace sugar where sugar has a physical job: caramelizing, feeding yeast, or providing structure in batters that depend on sugar for moisture and volume.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is stevia bad for you?</p>
              <p className="faq-a">
                In normal use, no.
                The FDA classified high-purity extracts as generally recognized as safe in 2008.
                Studies using very high doses showed some effects in animals, but the amount required is far beyond what anyone would realistically consume.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does stevia have calories?</p>
              <p className="faq-a">
                Practically zero.
                Steviol glycosides are not metabolized by the body for energy.
                Products that mix stevia with erythritol or maltodextrin can carry minimal calories, but the pure extract has zero.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much stevia equals one teaspoon of sugar?</p>
              <p className="faq-a">
                Depends on the format.
                A 1:1 baking blend replaces sugar in the same measure.
                Pure extract powder: roughly 1/4 teaspoon equals one teaspoon of sugar.
                Concentration varies between brands — always read the label before measuring.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you use stevia while pregnant?</p>
              <p className="faq-a">
                Yes, for high-purity refined rebaudioside A extracts.
                The FDA does not restrict use during pregnancy in this form.
                Raw leaf and unrefined extracts do not carry the same safety classification.
                Check the label to confirm the product specifies purified extract.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Why does stevia taste bitter?</p>
              <p className="faq-a">
                The bitterness comes from stevioside, the most abundant compound in the leaf.
                Rebaudioside A, also present, has a cleaner taste.
                Premium products use a higher proportion of rebaudioside A.
                If what you use tastes very bitter, try a brand with more rebaudioside A in the mix.
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
                Creator of Mise. Swapped the sugar in his coffee for stevia. Kept the cookie on the side.
                The coffee turned out fine.
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
              You stop buying sweetener you already have — and stop running out mid-recipe.
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
