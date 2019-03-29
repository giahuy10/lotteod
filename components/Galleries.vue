<template>
  <div class="galleries">
    <div class="container">
      <div class="list-photos">
        <h2 class="text-center">{{ $t("homepage.modtuleTitle.galleries") }}</h2>
        <div class="masonry">
          <div v-for="(item, index) in items" :key="index" class="item">
            <img @click="lightbox(index)" :src="host+item.thumbnail" alt="">
          </div>
        </div>
      </div>
    </div>
    <b-modal id="galleryModal" ref="myModalRef" centered  hide-footer hide-title>
      <div class="d-block text-center">
        <i class="fa fa-angle-left" @click="change(1)" aria-hidden="true"></i>

        <img :src="items[currentItem] ? host+items[currentItem].thumbnail : ''" alt="">

        <i class="fa fa-angle-right" @click="change(2)" aria-hidden="true"></i>

      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'galleries',
  props: [ 'type'],
  methods: {
    lightbox (index) {
      this.$refs.myModalRef.show()
      this.currentItem = index
    },
    change (type) {
      if (type === 1) {
        // prev
        if (this.currentItem === 0) {
          this.currentItem = this.items.length - 1
        } else {
          this.currentItem--
        }
      } else {
        // next
        if (this.currentItem + 1 === this.items.length) {
          this.currentItem = 0
        } else {
          this.currentItem++
        }
      }
    },
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      if (this.type !="homepage") {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.pagination.pagesCurrent++
          this.pagination.limitstart += this.pagination.limit
          if (this.pagination.pagesCurrent <= this.pagination.pagesTotal) {
            this.getItems()
          }
        }
      }
    },
    getItems () {
      let app = this
      this.$axios.get('/api/photos')
        .then((res) => {
          // app.pagination = res.data.pagination
          app.items = app.items.concat(res.data.items)
          // console.log(app.pagination)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
    this.getItems()
  },
  data () {
    return {
      currentItem: 0,
      items: [],
      pagination: {
        limitstart: 0,
        limit: 20, // perpage
        total: 0, // total item
        pagesCurrent: 1,
        pagesTotal: 0
      },
      host: '/img/galleries/homepage/'
    } 
  }
}
</script>
<style lang="scss">
.galleries {
  padding: 40px 0;
   background-image: url('/img/bg/overview.png');
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
   margin: 1.5em 0;
    padding: 0;
    -moz-column-gap: 5px;
    -webkit-column-gap: 5px;
    column-gap: 5px;
    font-size: .85em;
}
.item {
    display: inline-block;
    background: #fff;
  
    margin: 0 0 5px;
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
