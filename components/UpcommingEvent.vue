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
                  <img :src="event.thumbnail" :alt="event[titleText]">
                </div>
                <div class="event-title">
                  <h4>{{event[titleText]}}</h4>
                  <p>{{event[dateText]}}</p>
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
export default {
  name: 'upcomming-event',
  methods: {
    openEvent (event) {
      this.$router.push({name: 'lang-event-slug', params: {slug: event.slug, id: event.slug }})
    }
  },
  computed: {
    titleText () {
      return 'title_'+this.$store.state.locale
    },
    dateText () {
      return 'date_'+this.$store.state.locale
    },
    lang () {
      return this.$store.state.locale
    },
    events () {
      return this.$store.state.event.events
    },
  }
}
</script>

<style lang="scss">
.upcomming-event {
   background-image: url('/img/bg/IMG_20190401_153603.jpg');
 
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
    color: #e4111d;
    font-weight: bold;
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
    .event-img {
      img {
        width: 100%;
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

