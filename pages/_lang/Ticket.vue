<template>
  <div class="ticket" :class="'width-'+screenWidth">
    <header-banner :title="$t('ticket.headerTitle')" :desc="$t('ticket.headerDesc')" :img="headerImage"></header-banner>
    <div class="container">
      <div class="ticketing_counter">
        <h3>{{ $t("ticket.ticketCounter") }}</h3>
        <p>{{ $t("ticket.ticketCounterDesc") }}</p>
        <picture>
          <source media="(max-width: 375px)" srcset="/img/ticket/345.jpg">
          <source media="(max-width: 768px)" srcset="/img/ticket/768.jpg">
          <source media="(max-width: 1024px)" srcset="/img/ticket/1024.jpg">
          <img src="/img/ticket/1110.jpg" alt="Flowers" style="width:auto;">
        </picture>
        <hr>
      </div>
      <div class="observatory_use_guide">
        <h3>{{ $t("ticket.observerionGuide") }}</h3>
        <p v-html="$t('ticket.useTime')"></p>
        <p v-html="$t('ticket.fee')"></p>
        <div class="board_foot" v-html="$t('ticket.discount')">
        </div>
        <!-- end board_head -->
        <p class="board_tip text-right">{{ $t("ticket.unit") }}</p>
        <div class="fare_table">
            <table class="table table-bordered text-center">
              <tbody>
                  <tr>
                    <th rowspan="3" class="align-middle" v-html="$t('ticket.pricingTable.general')"></th>
                    <td v-html="$t('ticket.pricingTable.adult')"></td>
                    <td  class="align-middle">230,000</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td v-html="$t('ticket.pricingTable.children')"></td>
                    <td  class="align-middle">170,000</td>
                  </tr>
                  <tr>
                    <th rowspan="3"  class="align-middle" v-html="$t('ticket.pricingTable.domestic')"></th>
                    <td v-html="$t('ticket.pricingTable.adult')"></td>
                    <td  class="align-middle">180,000</td>
                  </tr>
                
                  <tr>
                    <td v-html="$t('ticket.pricingTable.children')"></td>
                    <td  class="align-middle">120,000</td>
                  </tr>
              </tbody>
            </table>
        </div>
        <!-- end fare_table -->
        <div class="board_foot" v-html="$t('ticket.note')">
        </div>
        <!-- end board_foot -->
      </div>

    </div>
    <div class="rich-snippets">
      <div itemscope itemtype="https://schema.org/Product">
        <span itemprop="brand">Lotte Center Hanoi</span> <span itemprop="name">Observerion Deck Ticket</span>
        
        <span itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
          Average rating: <span itemprop="ratingValue">4.85</span>, based on
          <span itemprop="ratingCount">8936</span> reviews
        </span>
        <span itemprop="offers" itemscope itemtype="https://schema.org/AggregateOffer">
          from $<span itemprop="lowPrice">120.000</span> to
          $<span itemprop="highPrice">230.000</span>
          <meta itemprop="priceCurrency" content="VND" />
        </span>
      </div>
    </div>
    
  </div>
</template>

<script>
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {
    'header-banner': HeaderBanner
  },
  name: 'ticket',
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg',
      screenWidth: ''
    }
  },
  head () {
    return {
      title: this.$t("ticket.ticketCounter"),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  mounted () {
    this.screenWidth = this.$store.state.screenWidth
  }
}
</script>
<style lang="scss">
.observatory_use_guide {
  p {
    span {
      color: #ed1d24;
    }
  }
}
</style>


