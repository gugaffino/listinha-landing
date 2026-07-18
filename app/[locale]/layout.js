import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { routing } from '../../i18n/routing'
import '../globals.css'
import IconSprite from '../../components/IconSprite'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
  preload: false,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

export const viewport = {
  themeColor: '#F5F1E8',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const OG_LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es' }

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'site' })
  return {
    metadataBase: new URL('https://www.miseemcasa.com.br'),
    title: t('title'),
    description: t('description'),
    verification: {
      google: 'YhW2K5hJ2UdND5GjgGfhPogP5MFaybFqoDpbCIlaKIc',
    },
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}`,
      locale: OG_LOCALE[locale],
    },
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt',
        en: 'https://www.miseemcasa.com.br/en',
        es: 'https://www.miseemcasa.com.br/es',
        'x-default': 'https://www.miseemcasa.com.br/pt',
      },
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!routing.locales.includes(locale)) {
    notFound()
  }
  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'common' })

  return (
    <html lang={locale}>
      <body className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4FY46XVV1X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4FY46XVV1X');
          `}
        </Script>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <IconSprite />
          <a href="#main-content" className="skip-link">{t('skipLink')}</a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
