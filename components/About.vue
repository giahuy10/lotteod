<template>
  <div class="about">
    <div class="introTxt text-center">
      <div class="row">
        <div class="col-12 col-md-4">
          <img src="/img/explore/Lotte-building-01.png" alt="Lotte center Hanoi">
        </div>
        <div class="col-12 col-md-8">
						<p v-html="$t('explore.about.text1')"></p>
        </div>
      </div>
					
		</div>
 
    
    <iframe width="560" height="635" src="https://www.youtube-nocookie.com/embed/xz2AEvVxbaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
     
      padding-right: 20px;
      
      text-align: left;
      
      @media screen and (max-width: 767px) {
        border-right: 0;
      }
    }
  }
  video, iframe {
    width: 100%;
    
  }
}
</style>

