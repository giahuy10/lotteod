<template>
  <div class="about">
    <div class="introTxt text-center">
      <div class="row">
        <div class="col-12 col-md-4">
          <figure><img src="https://seoulsky.lotteworld.com//seoulsky/images/eng/contents/img_UI-PC-SK-002_01.png" alt="Lotte World Tower - 123 stories, 555 meters"></figure>
								<p v-html="$t('explore.about.text1')"></p>
        </div>
        <div class="col-12 col-md-4">
          <figure><img src="https://seoulsky.lotteworld.com//seoulsky/images/eng/contents/img_UI-PC-SK-002_02.png" alt=""></figure> 
								<p v-html="$t('explore.about.text2')"></p>
        </div>
        <div class="col-12 col-md-4">
          <figure><img src="https://seoulsky.lotteworld.com//seoulsky/images/eng/contents/img_UI-PC-SK-002_03.png" alt="Seoul Sky throughout the day"></figure>
								<p v-html="$t('explore.about.text3')"></p>
        </div>
      </div>
					
		</div>
 
    
    <video width="400" controls>
      <source src="/video/interview.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style lang="scss">
.about {
  padding: 40px 0;
  .introTxt {
    margin-bottom: 40px;
    p {
      margin-top: 35px;
      padding-right: 20px;
      border-right: 1px solid #e6e6e6;
      text-align: left;
      letter-spacing: -0.03em;
      @media screen and (max-width: 767px) {
        border-right: 0;
      }
    }
  }
  video {
    width: 100%;
  }
}
</style>

