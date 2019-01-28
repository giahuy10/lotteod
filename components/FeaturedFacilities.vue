<template>
  <div class="featured-facilities">
    <div class="container">
      <h2 class="text-center">Featured <span>Facilities</span></h2>
      <div class="row no-gutters" v-for="(item, index) in facilities" :key="index">
        <div :class="index % 2 == 0 ? 'col-12 col-md-6 order-md-2': 'col-12 col-md-6 order-md-1'">
          <div class="fac-img">
            <img :src="item.thumbnail" alt="">
          </div>
          
        </div>
        <div :class="index % 2 == 0 ? 'col-12 col-md-6 order-md-1': 'col-12 col-md-6 order-md-2'">
          <div class="fac-intro">
            <h3>{{item.title}}</h3>
            <p v-text="item.text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getItem } from '~/plugins/get'
export default {
  name: 'featured-facilities',
  data () {
    return {
      facilities: []
    }
  },
  methods: {
    async getItems () {
      let res = await getItem(this.lang, 'facilities')
      this.facilities = res.data
    }
  },
  mounted () {
    this.getItems()
  },
  computed: {
    lang () {
      return this.$store.state.locale
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
.featured-facilities {
  padding: 40px 0;
  background-image: url('/img/bg/facilities.jpg');
  // height: 1164px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 990px) and (max-width: 1100px) {
    //height: 1020px;
  }
  @media screen and (max-width: 767px) {
   // height: auto;
  }
  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
    span {
      color: #e4111d;
    }
  }
  .fac-intro {
    padding: 20px;
    height: 100%;
  }
  .fac-intro {
    box-shadow: 0 0 1px 1px #e3e3e3;
    margin-bottom: 30px;
    background: #fff;
    position: relative;
    
  }
  .row {
    margin-bottom: 30px;
  }
  .btn-danger {
    background: #e4111d;
    border-color: #e4111d;
  }
}
</style>


