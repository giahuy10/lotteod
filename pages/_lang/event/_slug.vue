<template>
  <div class="event">
    <header-banner :title="$t('event.headerTitle')" :desc="detail.title ? detail.title : clientDetail.title" :img="headerImage"></header-banner>
    <div class="container">
      <div class="event-detail" v-html="detail.text ? detail.text : clientDetail.text">

      </div>
      
    </div>
  </div>
</template>

<script>
import { getDetail } from '~/plugins/get'
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {
    'header-banner': HeaderBanner
  },
  name: 'event',
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg'
    }
  },
  async asyncData({ params, error }) {
    let res = await getDetail(params.lang, 'event', params.slug)
    return { clientDetail: res.data }
  },
  mounted () {
    // this.detail = this.$store.state.eventDetail
  },
  computed: {
    lang () {
      return this.$store.state.locale
    },
    detail () {
      return this.$store.state.eventDetail
    }
  },
  watch: {
    lang (to, from) {
      this.getItemDetail(to)
    }
  },
  methods: {
    getItemDetail(to) {
      this.$route.params.lang = to
      this.$store.dispatch('changeLang', this.$route)
    }
  },
  head () {
    return {
      title: this.detail.title ? this.detail.title : this.clientDetail.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.detail.text ? this.detail.text : this.clientDetail.text }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.event {
  .head-banner {
    margin-bottom: 0;
  }
  h2 {
    display: none;
  }
}
</style>

