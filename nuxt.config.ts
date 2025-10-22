import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app:{
    head: {
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
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@use "@/assets/style/variables.sass" as *\n`
        }
      }
    }
  }
})
