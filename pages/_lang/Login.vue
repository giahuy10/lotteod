<template>
  <div class="login">
    <header-banner :title="$t('event.headerTitle')" :desc="$t('event.headerDesc')" :img="headerImage"></header-banner>

    <div class="container">
      <label for="email">
        <input id="email" type="email" value="test">
      </label>
      <label for="password">
        <input id="password" type="password" value="test">
      </label>
      <button @click="postLogin">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
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
  middleware: 'notAuthenticated',
  methods: {
    postLogin() {
      setTimeout(() => { // we simulate the async request with timeout.
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax'
        }
        this.$store.commit('SET_AUTH', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/'+this.currentLocale+'/dashboard')
      }, 1000)
    }
  },
  computed: {
    currentLocale () {
      return this.$store.state.locale
    }
  }
}
</script>
