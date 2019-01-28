<template>
  <div class="main-layout">
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
     
    <nuxt/>
    </main>
    <footer>
      <div class="container">
        <div class="row">
          <div id="logo-footer" class="col-12 col-md-2 d-flex align-items-center center-mobile">
            <img src="/img/icons/apple-touch-icon-60x60.png" alt="Logo">
          </div>
          <div class="col-12 col-md-6">
            <p class="text-center">{{ $t("homepage.footer.line1") }}
              <br>{{ $t("homepage.footer.line2") }}
              <br>{{ $t("homepage.footer.line3") }}
            </p>
          </div>
          <div id="social-footer" class="col-12 col-md-4 text-right d-flex align-items-center justify-content-end center-mobile">
            
            <div class="social-icon">
              <a href=""><i class="fa fa-facebook"></i></a>
              <a href=""><i class="fa fa-twitter"></i></a>
              <a href=""><i class="fa fa-youtube"></i></a>
             
              <a href=""><i class="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      
    </footer>
  </div>
</template>

<script>
import { getItem } from '~/plugins/get'
import LocaleSwitcher from '~/components/LocaleSwitcher'
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
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > 0) {
        this.navClass = 'sticky'
      } else {
        this.navClass = ''
      }
    },
    async getItems () {
      let res = await getItem(this.$store.state.locale, 'menu')
      this.items = res.data
    }
  },
  created () {
    this.getItems()
    if (process.browser) { 
      window.addEventListener('scroll', this.handleScroll)
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
<style lang="scss">
  body {
    font-family: 'Varela Round', sans-serif;
    a {
      color: #e4111d;
      &:hover {
        color: #000;
      }
    }
    overflow: hidden;
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
          padding: 10px 20px !important;
          color: #fff !important;
          &.active {
            color: #e4111d !important;
          }
          text-transform: uppercase
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
  
  .font-coiny, h2, h3 {
    font-family: 'Anton', sans-serif !important;
  }
  .btn-danger {
    color: #fff;
    background-color: #ed1d24;
    border-color: #ed1d24;
}
.kr {
  font-family: 'Nanum Gothic', sans-serif;
  .font-coiny, h2, h3 {
    font-family: 'Nanum Gothic', sans-serif !important;
  }
}
.rich-snippets {
  position: fixed;
  top: -1000px;
  left: - 1000px;
}
</style>
