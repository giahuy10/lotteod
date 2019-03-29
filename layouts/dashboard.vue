<template>
  <div class="main-layout-dashboard">
    <header class="">
      <b-navbar toggleable="md" :class="navClass" fixed="top" type="dark" variant="">
        <div class="container">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand :to="homeURL"><img src="/img/icons/apple-touch-icon-60x60.png" alt="Logo"></b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="mx-md-auto font-coiny">
              <b-nav-item :class="item.name" v-for="(item, index) in items" :key="index" :to="'/'+lang+item.path">
                {{item.name}}
              </b-nav-item>
              <LocaleSwitcher/>
            </b-navbar-nav>
            
          </b-collapse>
        </div>
        
      </b-navbar>
     
    </header>
    <main>
      <div class="container">
        <nuxt/>
      </div>
    
    </main>
    <footer>
      <div class="container">
        <div class="row">
          
          <div class="col-12">
            <p class="text-center">{{ $t("homepage.footer.line1") }}
              <br>{{ $t("homepage.footer.line2") }}
              <br>{{ $t("homepage.footer.line3") }}
            </p>
          </div>
         
        </div>
      </div>
      
      
    </footer>
  </div>
</template>

<script>
import LocaleSwitcher from '~/components/LocaleSwitcher'
import viMenu from '~/static/api/vi/menuDashboard.json'
import enMenu from '~/static/api/en/menuDashboard.json'
import krMenu from '~/static/api/kr/menuDashboard.json'
export default {
  name: 'app',
  components: {
    LocaleSwitcher
  },
  data () {
    return {
      navClass: '',
      items: []
    }
  },
  async asyncData({ store }) {
    await store.dispatch('setDevice', 'md')
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > 0) {
        this.navClass = 'sticky'
      } else {
        this.navClass = ''
      }
    },
    getItems () {
      switch(this.$store.state.locale) {
        case 'vi':
          this.items = viMenu
          break;
        case 'en':
          this.items = enMenu
          break;
        case 'kr':
          this.items = krMenu
          break;
        default:
          this.items = viMenu
      }
    }
  },
  created () {
    this.getItems()
    if (process.browser) { 
      window.addEventListener('scroll', this.handleScroll)
      let device = 'xl'
      // xs- 300 -> 399 |  sm - 400 -> 767 | md - 768 -> 1023 | lg : 1024 -> 1366 | xl: > 1366
      if(window.innerWidth <= 399) {
        device = 'xs'
      } else if (window.innerWidth >= 400 && window.innerWidth <= 767  ) {
        device = 'sm'
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1023  ) {
        device = 'md'
      } else if (window.innerWidth >= 1024 && window.innerWidth <= 1366  ) {
        device = 'lg'
      } else if (window.innerWidth > 1366  ) {
        device = 'xl'
      }
      this.$store.dispatch('setDevice', device)
    }
    
  },
  computed: {
    lang () {
      return this.$store.state.locale
    },
    homeURL () {
      return '/'+this.lang+'/index'
    }
  },
  watch: {
    lang (to, from) {
      this.getItems()
    }
  }
}
</script>
<style lang="scss" scoped>
.main-layout-dashboard {
  padding-top: 100px;
}
  body {
    font-family: 'Varela Round', sans-serif;
    a {
      color: #e4111d;
      &:hover {
        color: #000;
      }
    }
    // overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }
  ::-webkit-scrollbar {
      width:  .5em;
      height: .5em;
  }

  ::-webkit-scrollbar-thumb {
      background: #e4111d;
  }

  ::-webkit-scrollbar-track {
      background: #ccc;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  nav.navbar {
    background: #393939;
    &.sticky {
      background: rgba(0, 0, 0, 0.7);
    }
    // 
    @media screen and (max-width: 767px){
      padding-top: 0;
      padding-bottom: 0;
      background: rgb(0, 0, 0);
    }
    ul {
      > li {
        &.Home {
          display: none;
        }
        > a {
          font-size: 20px;
          // padding: 10px 20px !important;
          color: #fff !important;
          &.active {
            color: #e4111d !important;
          }
          // text-transform: uppercase
        }
      }
    }
  }
  footer {
    padding: 20px 0 10px;
    background: #393939;
    color: #fff;
    font-size: 14px;
    .social-icon {
      a {
        color: #fff;
        border-radius: 50px;
        border: 2px solid #fff;
        display: inline-block;
        min-width: 55px;
        text-align: center;
        i {
          font-size: 26px;
          padding: 13px;
        }
        &:hover {
          background: #ed1d24;
        }
      }
    }
  }
  #logo-footer, #social-footer {
    
      @media screen and (max-width: 767px) {
        justify-content: center !important;
      
    }
  }
  


</style>
