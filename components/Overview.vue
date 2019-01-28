<template>
  <div class="overview">
    <!-- <div class="stars"></div>
    <div class="twinkling"></div> -->
    <div class="clouds"></div>
    
    <div class="overview-content">
      <div class="container">
     
        <h2 class="text-center font-coiny">{{ $t("homepage.modtuleTitle.overview") }}</h2>
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab v-for="(item, index) in overview" :key="index" :title="item.title" :active="index == 0">
              <div class="row">
                <div v-for="(sec, i) in item.section" :key="i" class="col-12 col-md-6">
                  <div class="overview-item">
                    <img :src="sec.thumbnail" alt="">
                    <div class="sec-title font-coiny" v-text="sec.name"></div>
                    <p v-text="sec.text"></p>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
    
  </div>
</template>

<script>
import { getItem } from '~/plugins/get'
export default {
  name: 'overview',
  data () {
    return {
      overview: []
    }
  },
  methods: {
    async getItems () {
      let res = await getItem(this.lang, 'overview')
      this.overview = res.data
    }
  },
  computed: {
    lang () {
      return this.$store.state.locale
    }
  },
  mounted () {
    this.getItems()
  },
  watch: {
    lang (to, from) {
      this.getItems()
    }
  }
}
</script>
<style lang="scss">
.overview {
  // padding: 40px 0;
  background-image: url('http://cag.vn/wp-content/uploads/2018/12/DJI_0068chinh.png');
 
   /* Set a specific height */
  // height: 814px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
      position: relative;
      border-top: 0.5em solid #ccc;
  
  @media screen and (min-width: 990px) and (max-width: 1100px) {
    // height: 715px;
  }
  @media screen and (max-width: 767px) {
    // height: auto;
  }
  .card {
    background: rgba(255, 255, 255, 0.8)
  }
  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #fff;
    span {
      color: #e4111d;
    }
  }
  li {
    a {
      color: #fff;
      background: #63574c;
      margin-bottom: 10px;
    }
  }
  .overview-item {
    img {
      width: 100%;
    }
    .sec-title {
      display: inline-block;
      background:#e4111d;
      color: #fff;
      padding: 5px 10px;  
      margin-top: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #212529;
  }
  @media screen and (max-width: 767px) {
    .col-auto {
      width: 100%;
      text-align: center;
    }
  }
  video.bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .outer-video {
    overflow: hidden;
  }
  .overview-content {
       position: relative;
    padding: 40px 0;
        z-index: 99;
    
  }

}
.home .overview .ResVideoWidget {
  max-height: 920px;
 
}
.home .overview video.bg-video, .home .upcomming-event video.bg-video {
    width: 100%;
    height: 100%;
    position: initial;
    height: 930px;
}
.home .upcomming-event video.bg-video {
  
    height: 710px;
}

 @media screen and (min-width: 1400px) and (max-width: 1700px) {
    .home .overview video.bg-video {
      height: 934px;
    }
    .home .upcomming-event video.bg-video {
      height: 700px;
    }
  }
  @media screen and (min-width: 1100px) and (max-width: 1399px) {
    .home .overview video.bg-video {
      height: 934px;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1099px) {
    .home .overview video.bg-video {
      height: 790px;
    }
    .home .upcomming-event video.bg-video {
      height: 620px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    .home .overview video.bg-video {
      height: 670px;
    }
    .home .upcomming-event video.bg-video {
      height: 480px;
    }
  }
  @media screen and (max-width: 767px) {
    .home .overview video.bg-video {
      height: 1540px;
    }
    .home .upcomming-event video.bg-video {
      height: 1850px;
    }
  }
  @keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

.clouds{
    background:transparent url(http://pngimg.com/uploads/cloud/cloud_PNG24.png) repeat top center;
    z-index:3;

  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}
</style>

