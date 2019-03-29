<template>
  <div class="contact">
    <header-banner :title="$t('contact.headerTitle')" :desc="$t('contact.headerDesc')" :img="headerImage"></header-banner>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <form v-on:submit.prevent="submitContact">
            <div class="form-group">
              <label for="" v-text="$t('contact.nameLabel')"></label>
              <input type="text" v-model="contact.name" class="form-control" id="" :placeholder="$t('contact.nameDesc')">
            </div>
            <div class="form-group">
              <label for="" v-text="$t('contact.mailLabel')"></label>
              <input type="email" v-model="contact.email" class="form-control" id="" :placeholder="$t('contact.mailDesc')">
            </div>
            <div class="form-group">
              <label for="" v-text="$t('contact.phoneLabel')"></label>
              <input type="text" v-model="contact.phone" class="form-control" id="" :placeholder="$t('contact.phoneDesc')">
            </div>
            <div class="form-group">
              <label for="" v-text="$t('contact.messageLabel')"></label>
              <textarea class="form-control" v-model="contact.message" name="" id="" cols="30" rows="10" :placeholder="$t('contact.messageeDesc')"></textarea>
            </div>
            <button type="submit" class="btn btn-danger" @click.prevent="submitContact">{{$t('contact.submitLabel')}}</button>
          </form>
        </div>
        <div class="col-12 col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0122987556206!2d105.81040271540236!3d21.03219389303586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6c92399987%3A0xa35f66ba8443e5b3!2sLotte+Observation+Deck!5e0!3m2!1svi!2s!4v1548043822542" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
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
  name: 'contact',
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg',
      contact: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }

    }
  },
  head () {
    return {
      title: this.$t('contact.headerTitle'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  methods: {
    submitContact () {
      this.$axios.post('/api/contacts', this.contact)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.contact {
  padding-bottom: 40px;
  iframe {
    max-width: 100%;
  }
}
</style>

