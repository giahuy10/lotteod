<template>
    <div class="panorama">
        <div class="panorama-cap">
          <div class="text-center">
            <!-- <h1>{{ $t("homepage.slideshow.heading1") }}</h1> -->
            <h2 class="animation1">{{$t("homepage.slideshow.animation1")}}</h2>
            <h2 class="animation2">{{$t("homepage.slideshow.animation2")}}</h2>
            <h2 class="animation3">{{$t("homepage.slideshow.animation3")}}</h2>
            <h2 class="animation4">{{ $t("homepage.slideshow.heading2") }}</h2>
          </div>
        </div>
    </div>
</template>

<style lang="scss">
.home {
  .panorama {
    height: 100vh;
    background-image: url('/img/bg/hanoi-360-1080.jpg');
    background-size: auto 100%;
    animation-name: runpano;
    animation-duration: 40s;
    animation-iteration-count: infinite;
    // border-bottom: 0.5em solid #ccc;
    .panorama-cap {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      width: 100%;
     
    }
    h1 {
      animation-name: runHeading;
      animation-duration: 1s;
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;
      text-shadow: 0 0 1px red;
      font-size: 50px;
    }
    h2 {
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;
      text-shadow: 0 0 1px red;
      font-size: 50px;
      opacity: 0;
      position: relative;
      top: 0;
      &.animation1 {
        animation-name: runHeading;
        animation-duration: 8s;
      }
      &.animation2 {
        animation-name: runHeading;
        animation-duration: 8s;
        animation-delay: 6s;
      }
      &.animation3 {
        animation-name: runHeading;
        animation-duration: 8s;
        animation-delay: 12s;
      }
      &.animation4 {
        animation-name: runHeading;
        animation-duration: 8s;
        animation-delay: 18s;
      }
    }
  }
  @keyframes runpano {
    0% {background-position: 0;}
    50% {background-position: -1220px;}
    100% {background-position: 0;}
  }
  @keyframes runHeading {
    0% {
    display: block;
		opacity: 0;
		text-shadow: 0px 0px 40px red;
		-webkit-transform: scale(1.3);
    left: 1500px;
    }
    20% {
      opacity: 1;
      text-shadow: 0px 0px 10px red;
      -webkit-transform: scale(1.1);
      left: 0;
    }
    70% {
      opacity: 1;
      text-shadow: 0px 0px 10px red;
      -webkit-transform: scale(1.1);
      left: 0;
    }
    90% {
      opacity: 0.5;
      text-shadow: 0px 0px 10px red;
      -webkit-transform: scale(1.1);
      
    }
    100% {
      opacity: 0;
      text-shadow: 0px 0px 1px red;
      -webkit-transform: scale(1);
      left: -1500px;
     
    }
    
  }
  
  @keyframes runDesc {
    0% {background-position: 0;}
    50% {background-position: -1220px;}
    100% {background-position: 0;}
  }
  
}
</style>

