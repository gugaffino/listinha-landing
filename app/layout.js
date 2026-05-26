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

export const viewport = {
  themeColor: '#F5F1E8',
}

export const metadata = {
  metadataBase: new URL('https://www.miseemcasa.com.br'),
  title: 'Mise — Cozinha em paz, do seu jeito.',
  description: 'O app que conecta despensa, receitas e lista de compras. Pra nunca mais faltar nada.',
  verification: {
    google: 'YhW2K5hJ2UdND5GjgGfhPogP5MFaybFqoDpbCIlaKIc',
  },
  openGraph: {
    title: 'Mise — Cozinha em paz, do seu jeito.',
    description: 'O app que conecta despensa, receitas e lista de compras. Grátis.',
    type: 'website',
    url: 'https://www.miseemcasa.com.br',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  )
}
