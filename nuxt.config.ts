// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/eslint-module"
  ],
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json"
      },
      {
        code: "zh-CN",
        iso: "zh-CN",
        name: "简体中文",
        file: "zh-CN.json"
      }
    ],
    lazy: true,
    strategy: "no_prefix",
    langDir: "lang",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      alwaysRedirect: true,
      fallbackLocale: "en"
    }
  }
});
