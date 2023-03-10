// @ts-check

// @ts-ignore
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withNextIntl({
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mjml'],
  },
});

module.exports = nextConfig;
