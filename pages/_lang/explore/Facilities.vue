<template>
  <div class="explore">  
    <header-banner :title="$t('explore.facilities.headerTitle')" :desc="$t('explore.facilities.headerDesc')" :img="headerImage"></header-banner>
    <ExploreTab component="Facilities" />
    <FeaturedFacilities/>
  </div>
</template>

<script>
import FeaturedFacilities from '~/components/FeaturedFacilities'
import ExploreTab from '~/components/ExploreTab'
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {FeaturedFacilities, HeaderBanner, ExploreTab},
  head () {
    return {
      title: this.$t('explore.facilities.headerTitle')+" - "+this.$t('explore.headerTitle'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg',
    }
  }
}
</script>
