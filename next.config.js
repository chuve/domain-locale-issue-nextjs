/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "de-DE"],
    defaultLocale: "en",
    localeDetection: false,
    domains: [
      {
        domain: "local-domain.de",
        defaultLocale: "de-DE",
        locales: ["de-DE"],
      },
    ],
  },
};

module.exports = config;
