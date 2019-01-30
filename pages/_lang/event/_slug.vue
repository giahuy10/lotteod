<template>
  <div class="event">
    <header-banner :title="$t('event.headerTitle')" :desc="detail.title " :img="headerImage"></header-banner>
    <div class="container">
      <div class="event-detail" v-html="detail.text ">

      </div>
      
    </div>
  </div>
</template>

<script>
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
  async asyncData({ store, params }) {
    await store.dispatch('event/getEventDetail', { id: params.id, slug: params.slug, locale: store.state.locale })
  },
  mounted () {
    // this.detail = this.$store.state.eventDetail
  },
  computed: {
    lang () {
      return this.$store.state.locale
    },
    detail () {
      return this.$store.state.event.eventDetail
    }
  },
  head () {
    return {
      title: this.detail.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.detail.text }
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

