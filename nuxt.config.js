export default {
  head: {
    title: 'media-cube--todo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  css: [
    '@/assets/styles/main.scss'
  ],

  modules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '@/assets/styles/mixins.scss',
    ]
  },

  target: 'static',
}
