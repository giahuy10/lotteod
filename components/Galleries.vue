<template>
  <div class="galleries">
    <div class="container">
      <div class="list-photos">
        <h2 class="text-center">{{ $t("homepage.modtuleTitle.galleries") }}</h2>
        <div class="masonry">
          <div v-for="(item, index) in showItems" :key="index" class="item">
            <img @click="lightbox(index)" :src="item.thumbnail" alt="">
          </div>
        </div>
      </div>
    </div>
    <b-modal id="galleryModal" ref="myModalRef" centered  hide-footer hide-title>
      <div class="d-block text-center">
        <i class="fa fa-angle-left" @click="change(1)" aria-hidden="true"></i>

        <img :src="showItems[currentItem] ? showItems[currentItem].thumbnail : ''" alt="">

        <i class="fa fa-angle-right" @click="change(2)" aria-hidden="true"></i>

      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'galleries',
  methods: {
    lightbox (index) {
      this.$refs.myModalRef.show()
      this.currentItem = index
    },
    change (type) {
      if (type === 1) {
        // prev
        if (this.currentItem === 0) {
          this.currentItem = this.showItems.length - 1
        } else {
          this.currentItem--
        }
      } else {
        // next
        if (this.currentItem + 1 === this.showItems.length) {
          this.currentItem = 0
        } else {
          this.currentItem++
        }
      }
    },
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
      if (bottomOfWindow) {
        if (this.currPage < this.totalPage) {
          this.pushItems()
          this.currPage++
        }
      }
    },
    pushItems () {
      for (var i = this.perPage * this.currPage; i < this.perPage * this.currPage + this.perPage; i++) {
        if (this.items[i]) {
          this.showItems.push(this.items[i])
        }
      }
    }
  },
  mounted () {
    if (process.browser) { 
      window.addEventListener('scroll', this.handleScroll)
    }
    this.totalPage = Math.ceil(this.items.length / this.perPage)
    for (var i = 0; i < this.perPage; i++) {
      this.showItems.push(this.items[i])
    }
  },
  data () {
    return {
      currentItem: 0,
      showItems: [],
      perPage: 10,
      currPage: 1,
      totalPage: 1,
      items: [
        {
          title: '',
          thumbnail: '/img/galleries/30590334_1969962473332833_250780859785805824_n.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/IMG_E0189.JPG'
        },
        {
          title: '',
          thumbnail: '/img/galleries/IMG_E0180.JPG'
        },
        {
          title: '',
          thumbnail: '/img/galleries/ve-tham-quan-dai-quan-sat-lotte-tang-65-1510047555-1-4169246-1510047555.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/foody-dai-quan-sat-sky-walk-lotte-center-909-636378739719970881.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/IMG_E0179.JPG'
        },
        {
          title: '',
          thumbnail: '/img/galleries/khong-gian-hen-ho-lang-man-o-lotte-sky-walk.jpeg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/2.JPG'
        },
        {
          title: '',
          thumbnail: '/img/galleries/IMG_E0183.JPG'
        },
        {
          title: '',
          thumbnail: '/img/galleries/ve-tham-quan-dai-quan-sat-lotte-tang-65-1510047555-4-4169246-1510047625.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/ve-tham-quan-dai-quan-sat-lotte-center-ha-noi.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/Ve-tham-quan-dai-quan-sat-tang-65-tang-in-anh-tai-Lotte (17).jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/37739967_217284412270867_1547529604976082944_n.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/27576818_150218785696350_4673270691196305408_n.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/49771687_614096482377201_4240592140434889552_n.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/46174610_1475381595929361_3624412849396816549_n.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/foody-mobile-dai-jpg-811-635490768722732984.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/70e1bf8d462f437ca221e9ba6b3cdd35.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/foody-dai-quan-sat-sky-walk-lotte-center-681-635990122560991413.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/foody-dai-quan-sat-sky-walk-lotte-center-341-635641053601852141.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/14976536819_2ed7ae8b32_h.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/lotte-hanoi-6.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/IMG_1286-385ce.JPG'
        },
        {
          title: '',
          thumbnail: '/img/galleries/unnamed-(6)-2496e.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/ve-tham-quan-dai-quan-sat-lotte-tang-65-lotte-center-ha-noi-1m4G3-zkn4TV.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/75289fb54af3a3adfae2.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/24960127617_c527281be1_b.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/Dia-diem-hen-ho-o-ha-noi-lotte-center.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/_MG_2267_1.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/foody-dai-quan-sat-sky-walk-lotte-center-136-636469628010178791.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/foody-dai-quan-sat-sky-walk-lotte-center-681-636543106209780230.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/lotte-tower-the-great-view-sky-walk-observatory-51e54b5cadeb90bfacfdc7426f37e6db.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/hot-dai-quan-sat-trong-suot-lotte-ha-noi-giam-50-gia-ve-set-keo-voi-hoi-ban-ngay-thoi (17).jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/foody-dai-quan-sat-sky-walk-lotte-center-575-636696181069612459.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/hanoi-lotte-tower-sky.jpg'
        },
        {
          title: '',
          thumbnail: '/img/galleries/khong-gian-hen-ho-lang-man-o-lotte-sky-walk.jpeg'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.galleries {
  padding: 40px 0;
   background-image: url('/img/bg/e68531dcccc532ce.jpg');
  // height: 1164px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #fff;
    span {
      color: #e4111d;
    }
  }
  .list-photos {
    img {
     
      border: 2px solid #fff;
      transition: all 0.5s;
      @media screen and (max-width: 767px) {
        margin-bottom: 5px;
      }
      
    }
  }
  #galleryModal {
  .modal-dialog {
    max-width: 760px;
    @media screen and (max-width: 767px) {
      max-width: 90%;
    }
    > div {
      background: none;
    }
    header {
      display: none;
    }
    img {
      border: 5px solid #fff;
    }
    .modal-content {
      border: none;
    }
    .modal-body {
      i {
        position: absolute;
        top: 45%;
        font-size: 30px;
        color: #fff;
        &.fa-angle-left {
          left: 0px;
        }
        &.fa-angle-right {
          right: 0px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  }
  
}
</style>

<style scoped>
.masonry { /* Masonry container */
    -webkit-column-count: 4;
  -moz-column-count:4;
  column-count: 4;
  -webkit-column-gap: 1em;
  -moz-column-gap: 1em;
  column-gap: 1em;
   margin: 1.5em;
    padding: 0;
    -moz-column-gap: 1.5em;
    -webkit-column-gap: 1.5em;
    column-gap: 1.5em;
    font-size: .85em;
}
.item {
    display: inline-block;
    background: #fff;
    padding: 5px;
    margin: 0 0 1.5em;
    width: 100%;
	-webkit-transition:1s ease all;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    
}
.item:hover {
        background: #e4111d;
        cursor: pointer;
      }
.item img{max-width:100%;}

@media only screen and (max-width: 320px) {
    .masonry {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
    }
}

@media only screen and (min-width: 321px) and (max-width: 768px){
    .masonry {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1200px){
    .masonry {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
    }
}
@media only screen and (min-width: 1201px) {
    .masonry {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
    }
}
</style>
