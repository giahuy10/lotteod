<template>
    <div class="ResVideoWidget">
      <div class="embed-container YouTube">
        <video v-on:ended="onEnd" class="bg-video" width="400" playsinline autoplay muted poster="/img/bg/180809-1-2000-mai-hanoi-hotel.jpg.thumb.1920.1920.jpg">
          <source src="/video/xz2AEvVxbaA (1).mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        
       
        <div class="video-cap">
          <div class="text-center">
            <h1>{{ $t("homepage.slideshow.heading1") }}</h1>
            <h2 class="d-none d-md-block">{{ $t("homepage.slideshow.heading2") }}</h2>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'BgVideo',
  methods: {
    onEnd: function () {
      this.$emit('videoEnded', true)
    }
  }
}
</script>
<style lang="scss">
.ResVideoWidget {
    position: relative;
    max-height: 100vh;
    overflow: hidden;
    border-bottom: 5px solid #e4111d;
    z-index: 100;
    margin-bottom: 0;
  }
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  video.bg-video, iframe.bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-cap {
    z-index: 9999;
    color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: displayVideoHeading;
    animation-duration: 4s;
    animation-delay: 16s;
    animation-fill-mode: forwards;
    opacity: 0;
    @media screen and (max-width: 767px) {
      padding-top: 55px;
    }
    h1 {
      font-size: 100px;
      text-transform: uppercase;
      font-weight: bold;
      font-family: 'Anton', sans-serif;
      text-shadow: 1px 2px #ad0000;
      @media screen and (max-width: 767px){
        font-size: 30px;
      }
    }
    h2 {
      font-size: 50px;
      font-family: 'Anton', sans-serif !important;
      text-transform: uppercase;
    }
  }
  @keyframes displayVideoHeading {
    0% {opacity: 0;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
  }
</style>

