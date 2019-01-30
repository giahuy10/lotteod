
const configDetail = require('./config')
const pkg = require('./package')
module.exports = {
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'http://lotteodapi.com/',
    apiUrl: configDetail.apiURL,
    host: configDetail.host,
    port: configDetail.port
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: 'i18n'
  },
  generate: {
 
  },
  manifest: {
    theme_color : 'red'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/get.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'nuxt-fontawesome'
  ],
  toast: {
      position: 'top-right',
      duration: 2000
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
