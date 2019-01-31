<template>
  <div class="tabs">
    <div class="container">
      <div class="list-tab">
        <div class="tab-item">
          <a href="" :class="component == 'About' ? 'active': ''" @click.prevent="changeTab('about')">{{$t('explore.tabs.tab1')}}</a>
        </div>
        <div class="tab-item">
          <a href="" :class="component == 'Facilities' ? 'active': ''" @click.prevent="changeTab('facilities')" >{{$t('explore.tabs.tab2')}}</a>
        </div>
        <div class="tab-item">
          <a href="" :class="component == 'Gallery' ? 'active': ''" @click.prevent="changeTab('gallery')">{{$t('explore.tabs.tab3')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: [ 'component' ],
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    changeTab (tab) {
      if (tab === 'about') {
        tab = ''
      }
      this.$router.push({ path: '/'+this.lang+'/'+'explore/'+tab})
    }
  },
  computed: {
    lang () {
      return this.$store.state.locale
    }
  },
}
</script>

<style lang="scss">
.explore {
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
  ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li {
    width: calc(100% / 3);
    text-align: center;
  }
}
}
}
</style>

