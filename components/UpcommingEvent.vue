<template>
  <div class="upcomming-event">
    <div class="container">
      <h2 class="text-center">{{ $t("homepage.modtuleTitle.eventNPromotion") }}</h2>
      <div class="events">
        <div class="inner">
          <div class="row">
            <div v-for="(event, index) in events" :key="index" class="event col-12 col-md-4">
              <div class="event-content" @click="openEvent(event)">
                <div class="event-img">
                  <img :src="event.thumbnail" :alt="event.title">
                </div>
                <div class="event-title">
                  <h4>{{event.title}}</h4>
                  <p>{{event.date}}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getList } from '~/plugins/get'
export default {
  name: 'upcomming-event',
  data () {
    return {
      activeEvent: {
        title: 'ok ok',
        desc: '<h1>ngon</h1>'
      },
      events: []
    }
  },
  methods: {
    async getItems () {
      let response = await getList(this.lang, 'event')
      this.events = response.data
    },
    openEvent (event) {
      // console.log(this.$router.options.routes)
      this.$router.push({name: 'lang-event-slug', params: {slug: encodeURIComponent(event.alias), locale: this.lang, type: 'event'}})
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
.upcomming-event {
   background-image: url('/img/bg/out-of-focus-studio-lights-blurred-de-focused-light-color-lights-blur-background_bciy-8alg_thumbnail-full01.png');
 
   /* Set a specific height */
  // height: 814px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
      position: relative;
  padding: 40px 0;
  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #fff;
    span {
      color: #e4111d;
    }
  }
  .event-content {
    position: relative;
    margin-bottom: 30px;
    &:hover {
      cursor: pointer;
      .event-title {
        height: auto;
        p {
          margin-bottom: 0;
        }
      }
    }
  }
  .event-title {
    position: absolute;
    transition: height 0.5s;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    color: #fff;
    overflow: hidden;
    height: 50px;
  }
}
</style>

