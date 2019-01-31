<template>
  <div class="event-list">
    <header-banner :title="$t('event.headerTitle')" :desc="$t('event.headerDesc')" :img="headerImage"></header-banner>
    <div class="container">
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
      <nav aria-label="Page navigation example" v-if="pagesNumber.length > 1">
          <ul class="pagination">
              <li v-if="pagination.pagesCurrent > 1" class="page-item">
                  <a class="page-link" href="#" aria-label="Previous"
                      @click.prevent="changePage(pagination.pagesCurrent - 1)">
                      <span aria-hidden="true">«</span>
                  </a>
              </li>
              <li v-for="(page, index) in pagesNumber" :key="index" class="page-item" v-bind:class="[ page == isActived ? 'active' : '']">
                  <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" v-if="pagination.pagesCurrent < pagination.pagesTotal">
                  <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(pagination.pagesCurrent + 1)">
                      <span aria-hidden="true">»</span>
                  </a>
              </li>
          </ul>
      </nav>
    </div>
    
  </div>
</template>

<script>
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {
    'header-banner': HeaderBanner
  },
  name: 'event',
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg',
      offset: 4,
    }
  },
  async asyncData ({ store, query }) {
    var limit = 0
    if (query && query.page) {
      limit = (query.page-1) * 12
    }
    await store.dispatch('event/getEvents', { limit: limit, locale: store.state.locale })
  },
  computed: {
    events () {
      // console.log(this.$store.state.event.events)
      return this.$store.state.event.events.data
    },
    pagination () {
      return this.$store.state.event.pagination
    },
    isActived: function () {
      return this.pagination.pagesCurrent;
    },
    pagesNumber: function () {
      var from = this.pagination.pagesCurrent - this.offset;
      if (from < 1) {
        from = 1;
      }
      var to = from + (this.offset * 2);
      if (to >= this.pagination.pagesTotal) {
        to = this.pagination.pagesTotal;
      }
      var pagesArray = [];
      while (from <= to) {
        pagesArray.push(from);
        from++;
      }
      return pagesArray;
    }
  },
  methods : {
    changePage: function (page) {
      let newPag = {
        limitstart: (page-1) * this.pagination.limit,
        limit: this.pagination.limit,
        total: this.pagination.total,
        pagesStart: this.pagination.pagesStart,
        pagesStop: this.pagination.pagesStop,
        pagesCurrent: page,
        pagesTotal: this.pagination.pagesTotal
      }
      this.$store.dispatch('event/changePagination', newPag)
      this.$router.push({ path : '/vi/event', query: { page : page}})
    },
    openEvent (event) {
      // console.log(this.$router.options.routes)
      this.$router.push({name: 'lang-event-slug', params: {slug: event.alias, id: event.id }})
    }
  },
  watchQuery: true,
  head () {
    return {
      title: this.$t('event.headerTitle'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.event {
  .head-banner {
    margin-bottom: 0;
  }
  h2 {
    display: none;
  }
  .event-content {
    &:hover {
      cursor: pointer;
    }
    .event-title {
      h4 {
        font-size: 20px;
        margin-top: 10px;
      }
    }
    .event-img {
      img {
        width: 100%;
      }
    }
  }
}
</style>

