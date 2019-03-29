<template>
  <div class="container">

    <h1>This is secret page.</h1>
    
    <button class="btn btn-danger" @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {
    'header-banner': HeaderBanner
  },
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg',
      screenWidth: ''
    }
  },
  layout: 'dashboard',
  middleware: 'authenticated',
  methods: {
    logout() {
      console.log('done')
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove('auth')
      this.$store.commit('SET_AUTH', null)
      this.$router.push('/'+this.currentLocale+'/login')
    }
  },
  computed: {
    currentLocale () {
      return this.$store.state.locale
    }
  }
}
</script>