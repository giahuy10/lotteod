<template>
  <div class="explore gallery">  
    <header-banner :title="$t('explore.gallery.headerTitle')" :desc="$t('explore.gallery.headerDesc')" :img="headerImage"></header-banner>
    <ExploreTab component="Gallery" />
    <Galleries/>
  </div>
</template>

<script>
import Galleries from '~/components/Galleries'
import ExploreTab from '~/components/ExploreTab'
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: { Galleries, HeaderBanner, ExploreTab },
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg',
    }
  },
  head () {
    return {
      title: this.$t('explore.gallery.headerTitle')+" - "+this.$t('explore.headerTitle'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
}
</script>
<style lang="scss">
  .explore.gallery {
    .galleries {
      .list-photos {
        img {
          border: 5px solid #ccc;
        }
      }
    }
  }
</style>

