<template>
  <div class="home">
    <Pano v-if="videoEnd"/>
    <Video v-else @videoEnded="endVideo"/>
    <Overview/>
    <UpCommingEvent/>
    <Galleries type="homepage"/>
    
   
    <!-- <Interview/> -->
    <Newsletter/>
    <b-modal class="onlyMain" ref="promotion" centered size="xl"  hide-footer hide-title>
      <div class="d-block text-center">
        <img src="/img/events/web banner-promo -02.png" alt="">
      </div>
    </b-modal>
  </div>
</template>

<script>
import Pano from '~/components/Pano'
import Video from '~/components/Video'
import Interview from '~/components/Interview'
import Newsletter from '~/components/Newsletter'
import UpCommingEvent from '~/components/UpcommingEvent'
import Overview from '~/components/Overview'
import FeaturedFacilities from '~/components/FeaturedFacilities'
import Galleries from '~/components/Galleries'
export default {
  components: { UpCommingEvent, Overview, FeaturedFacilities, Galleries, Newsletter, Interview, Video, Pano },
  name: 'home',
  data () {
    return {
      videoEnd: false,
      screenWidth: 'xl'
    }
  },
  async asyncData ({ store }) {
    await store.dispatch('event/getEvents', { limit: 12, locale: store.state.locale })
  },
  methods: {
    showModal () {
      this.$refs.promotion.show()
    },
    hideModal () {
      this.$refs.promotion.hide()
    },
    endVideo (value) {
      this.videoEnd = true
    }
  },
  mounted () {
    if (!sessionStorage.getItem('openPopup')) {
      this.showModal()
      sessionStorage.setItem('openPopup', 1)
    }
    this.screenWidth = this.$store.state.screenWidth
  },
  head () {
    return {
      title: this.$t('homepage.metaTitle'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content:  this.$t('homepage.metaDesc')}
      ]
    }
  },
}
</script>
<style lang="scss">
.home {
  
  
  .onlyMain {
  .modal-dialog {
    .modal-header {
      display: none;
    }
    .modal-body {
      img {
        width: 100%;
      }
    }
  }
  }
}
.kr {
  .home {
    .video-cap {
      h1, h2 {
        font-family: 'Nanum Gothic', sans-serif !important;
        font-weight: normal;
      }
    }
  }
}



</style>

