// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Eee.web｜イードットウェブ',
      meta: [{ name: 'description', content: 'フリーランスのマークアップエンジニアのポートフォリオサイトです。Webサイトのコーディングを承ります。' }],
      link: [
        { rel: 'icon', href: '/favicon.png' },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
  css: ["@/assets/styles/reset.scss", "@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
          '@import "@/assets/styles/_variables.scss"; \
          @import "@/assets/styles/_mixin.scss";\
          @import "@/assets/styles/_function.scss";',
        },
      },
    },
  },
  modules: ["nuxt-microcms-module"],
   microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
})
