<template>
  <div class="home">
    <Pano/>
    <Overview/>
    <UpCommingEvent/>
    <Galleries/>
    
   
    <!-- <Interview/> -->
    <Newsletter/>
    <b-modal class="onlyMain" ref="promotion" centered size="xl"  hide-footer hide-title>
      <div class="d-block text-center">
        <img src="https://platinumlist.net/upload/event/sky_music_night_2018_1970_jan_01_lotte_observation_deck_67255-full1517136841.jpg" alt="">
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
      position: 0
    }
  },
  methods: {
    showModal () {
      this.$refs.promotion.show()
    },
    hideModal () {
      this.$refs.promotion.hide()
    }
  },
  mounted () {
    if (!sessionStorage.getItem('openPopup')) {
      this.showModal()
      sessionStorage.setItem('openPopup', 1)
    }
    this.position = this.position - 1
  }
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

