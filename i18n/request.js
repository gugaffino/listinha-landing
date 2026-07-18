import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import ptMessages from '../messages/pt.json'

function getNested(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && typeof acc === 'object' ? acc[part] : undefined), obj)
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    getMessageFallback({ namespace, key }) {
      const path = [namespace, key].filter(Boolean).join('.')
      const ptValue = getNested(ptMessages, path)
      return typeof ptValue === 'string' ? ptValue : path
    },
  }
})
