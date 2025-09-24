const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US'
  }
});
