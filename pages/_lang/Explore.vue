<template>
  <div class="explore">
    <header-banner :title="$t('explore.headerTitle')" :desc="$t('explore.headerDesc')" :img="headerImage"></header-banner>
    <ExploreTab component="About" />
    <div class="container">
      <component :is="component"/>
    </div>
  </div>
</template>

<script>
import ExploreTab from '~/components/ExploreTab'

import Facilities from '~/components/FeaturedFacilities'
import Gallery from '~/components/Galleries'
import About from '~/components/About'
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {Facilities, Gallery, About, 'header-banner': HeaderBanner, ExploreTab},
  name: 'explore',
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg',
      component: 'About'
    }
  },
  methods: {
    changeTab (tab) {
      this.component = tab
    }
  },
  head () {
    return {
      title: this.$t('explore.headerTitle'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
</style>

