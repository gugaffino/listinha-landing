import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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

export const metadata = {
  title: 'Listinha — Cozinha organizada, sem frescura.',
  description: 'O app que conecta despensa, receitas e lista de compras. Pra nunca mais faltar nada.',
  verification: {
    google: 'YhW2K5hJ2UdND5GjgGfhPogP5MFaybFqoDpbCIlaKIc',
  },
  openGraph: {
    title: 'Listinha — Cozinha organizada, sem frescura.',
    description: 'O app que conecta despensa, receitas e lista de compras. Grátis.',
    type: 'website',
    url: 'https://listinha-landing-delta.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
