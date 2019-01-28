<template>
  <div class="explore">
    <header-banner :title="$t('explore.headerTitle')" :desc="$t('explore.headerDesc')" :img="headerImage"></header-banner>
    <div class="tabs">
      <div class="container">
        <div class="list-tab">
          <div class="tab-item">
            <a href="" :class="component == 'About' ? 'active': ''" @click.prevent="changeTab('About')">{{$t('explore.tabs.tab1')}}</a>
          </div>
          <div class="tab-item">
            <a href="" :class="component == 'Facilities' ? 'active': ''" @click.prevent="changeTab('Facilities')" >{{$t('explore.tabs.tab2')}}</a>
          </div>
          <div class="tab-item">
            <a href="" :class="component == 'Gallery' ? 'active': ''" @click.prevent="changeTab('Gallery')">{{$t('explore.tabs.tab3')}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <component :is="component"/>
    </div>
  </div>
</template>

<script>
import Facilities from '~/components/FeaturedFacilities'
import Gallery from '~/components/Galleries'
import About from '~/components/About'
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {Facilities, Gallery, About, 'header-banner': HeaderBanner},
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .explore {
    .head-banner {
      margin-bottom: 0;
    }
    .tabs {
      border-bottom: 2px solid #ed2229;
      .list-tab {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .tab-item {
          width: calc(100% / 3);
          text-align: center;
          text-transform: uppercase;
          a {
            font-weight: bold;
            display: block;
            padding: 10px;
            color: #e4111d ;
            text-decoration: none;
            &.active, &:hover {
              background: #373737;
              color: #fff;
              border-bottom: 1px solid #e4111d;
            }
          }
        }
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li {
        width: calc(100% / 3);
        text-align: center;
      }
    }
    .featured-facilities, .galleries {
      background: none;
      h2 {
        display: none;
      }
    }
  }
</style>

