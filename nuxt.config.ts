const title = 'SORA Card | Value Freedom',
  description = 'Access the new era of interoperable finance, all in the palm of your hands.',
  keyWords =
    'SORA, Polkaswap, Decentralization, DeFi, Future, Sortition, Metaverse, TradFi, Card, Crypto',
  ogImage = '/og.jpg'

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', 'nuxt-aos'],
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  aos: {
    duration: 800,
  },
  build: {
    transpile: ['gsap'],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: title,
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/icon.svg',
          type: 'image/svg+xml',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
      ],
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keyWords,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: ogImage,
        },
        {
          name: 'twitter:image:alt',
          content: title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@sora_xor',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: ogImage,
        },
        {
          property: 'og:image:secure_url',
          content: ogImage,
        },
        {
          property: 'og:image:alt',
          content: title,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:url',
          content: 'https://soracard.com',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
    },
  },
})
