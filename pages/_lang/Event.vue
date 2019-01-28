<template>
  <div class="event">
    <header-banner :title="$t('event.headerTitle')" :desc="$t('event.headerDesc')" :img="headerImage"></header-banner>
    <UpCommingEvent/>
  </div>
</template>

<script>
import UpCommingEvent from '~/components/UpcommingEvent'
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {
    'header-banner': HeaderBanner,
    UpCommingEvent
  },
  name: 'event',
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg'
    }
  }
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

