<template>
  <div class="container">
    <div class="list-contacts">
      <div class="toolbar">
        <h2>Contacts</h2>
      </div>
      
      <div class="data">
        <table class="table table-bordered">
          <thead>
            <tr>
            
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
           
              <td v-text="item.name"></td>
              <td v-text="item.email"></td>
              <td v-text="item.phone"></td>
              <td v-text="item.message"></td>
              <td>
                <a href="#" @click.prevent="deleteEvent(item._id)"><i class="fa fa-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <nav aria-label="Page navigation example" v-if="pagesNumber.length > 1">
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
      </nav> -->
    </div>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      offset: 4,
      items: []
    }
  },
  mounted () {
    this.getItems()
  },
  computed: {
    
    pagination () {
      return this.$store.state.event.pagination
    },
    isActived: function () {
      return this.pagination.pagesCurrent;
    },
    // pagesNumber: function () {
    //   var from = this.pagination.pagesCurrent - this.offset;
    //   if (from < 1) {
    //     from = 1;
    //   }
    //   var to = from + (this.offset * 2);
    //   if (to >= this.pagination.pagesTotal) {
    //     to = this.pagination.pagesTotal;
    //   }
    //   var pagesArray = [];
    //   while (from <= to) {
    //     pagesArray.push(from);
    //     from++;
    //   }
    //   return pagesArray;
    // }
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
    async getItems() {
      let res = await this.$axios.get('/api/contacts')
      this.items = res.data.items

    },
    deleteEvent (eventId) {
      this.$axios.delete('/api/contacts/'+eventId)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        this.getItems()
    }
  },
  watchQuery: true,
}
</script>
