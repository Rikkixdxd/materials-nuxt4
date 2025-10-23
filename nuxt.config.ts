import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app:{
    head: {
      title: 'Материалы',
      link: [
        { rel: 'preload', as: 'font', href: '/fonts/FuturaPT-Book.ttf', type: 'font/ttf', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', href: '/fonts/FuturaPT-Medium.ttf', type: 'font/ttf', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', href: '/fonts/SourceSans3-VariableFont_wght.ttf', type: 'font/ttf', crossorigin: 'anonymous' },
      ]
    }
  },
  devtools: { enabled: true },
  css: ['@/assets/style/main.sass'],
  components: [
    { path: '@/components/features', pathPrefix: false },
    { path: '@/components/ui', prefix: 'Ui' },
    { path: '@/components/app', prefix: 'App' }
  ],
  modules: ['@pinia/nuxt'],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@use "@/assets/style/variables.sass" as *\n`
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      // Конечно токены доступа не должны храниться в публичной части конфигурации.
      // Так сделано потомучто это тестовый проект,
      // правильнее было бы хранить в серверной части nuxt (server/api)
      token: process.env.TOKEN,
    }
  },
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: 'https://naukatv.ru/api/test/**',
      },
    },
  }
})
