import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts')

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['john0x01.vercel.app'],
    },
  },
}

export default withNextIntl(nextConfig)
