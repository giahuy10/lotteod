
const pkg = require('./package')
module.exports = {
  mode: 'universal',

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
    // routes: ['/vi/index', '/vi/explore', '/vi/explore/gallery', '/vi/explore/facilities', '/vi/event', '/vi/event/:slug', '/vi/ticket', '/vi/contact', '/en/index', '/en/explore' , '/en/explore/gallery', '/en/explore/facilities',  '/en/event', '/en/event/:slug', '/en/ticket', '/en/contact', '/kr/index', '/kr/explore' , '/kr/explore/gallery', '/kr/explore/facilities', '/kr/event', '/kr/event/:slug','/kr/ticket', '/kr/contact']
    // routes: function (callback) {
    //   axios.get('http://lotteodapi.com/api/?act=event&type=list')
    //   .then((res) => {
    //     const routes = res.data.data.map((user) => {
    //       return '/event/' + user.alias
    //     })
    //     callback(null, routes)
    //   })
    //   .catch(callback)
    // }
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
    '@nuxtjs/dotenv',
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
