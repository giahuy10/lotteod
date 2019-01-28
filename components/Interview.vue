<template>
  <div class="interview">
    <div class="container">
      <div class="row">
        <div class="col-12"> 
          <h2 class="text-center">{{ $t("homepage.modtuleTitle.takeAtour") }}</h2>
          <video width="400" controls>
            <source src="/video/interview.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'interview',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    play () {
      console.log('play callback')
    }
  }
}
</script>
<style lang="scss">
.interview {
  padding: 40px 0;
  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
    span {
      color: #e4111d;
    }
  }
  video {
    width: 100%;
  }
}
</style>



