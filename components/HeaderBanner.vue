<template>
  <div class="head-banner" :style="'background-image: url('+img+');'">
    <div class="heading-title">
      <div class="text-center">
        <h1>{{ title }}</h1>
        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: [ 'title', 'desc', 'img' ],
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style lang="scss">
.head-banner {
    position: relative;
    margin-bottom: 40px;
    height: 345px;
    @media screen and (max-width: 767px) {
      height: 200px;
    }
    .heading-title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: rgba(0, 0, 0, 0.25);
      padding-top: 85px;
      > div {
        padding: 20px;
        // background: rgba(0,0,0,0.5)
      }
      h1 {
        text-transform: uppercase;
        @media screen and (max-width: 767px) {
          font-size: 28px;
        }
      } 
      p {
        @media screen and (max-width: 767px) {
          display: none;
        }
      }
    }
  }
</style>

