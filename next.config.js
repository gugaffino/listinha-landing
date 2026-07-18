const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/pt', permanent: true },
      { source: '/funcionalidades', destination: '/pt/funcionalidades', permanent: true },
      { source: '/funcionalidades/:path*', destination: '/pt/funcionalidades/:path*', permanent: true },
      { source: '/blog', destination: '/pt/blog', permanent: true },
      { source: '/blog/:path*', destination: '/pt/blog/:path*', permanent: true },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
