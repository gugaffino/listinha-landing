import { notFound } from 'next/navigation'
import PtContent, { metadata as ptMeta } from './content.pt'
import EnContent, { metadata as enMeta } from './content.en'
import EsContent, { metadata as esMeta } from './content.es'

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (locale === 'pt') return ptMeta
  if (locale === 'en') return enMeta
  if (locale === 'es') return esMeta
  notFound()
}

export default async function Page({ params }) {
  const { locale } = await params
  if (locale === 'pt') return <PtContent />
  if (locale === 'en') return <EnContent />
  if (locale === 'es') return <EsContent />
  notFound()
}
