'use client'
import { usePathname, useRouter } from '../i18n/navigation'
import { useLocale } from 'next-intl'

const LOCALES = ['pt', 'en', 'es']

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          className={`chip${l === locale ? ' on' : ''}`}
          onClick={() => router.replace(pathname, { locale: l })}
          aria-pressed={l === locale}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
