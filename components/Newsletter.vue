<template>
  <div class="newsletter">
    <div class="container">
      <div class="row">
         <div class="col-12 col-md-8">
          <h2>{{ $t("homepage.modtuleTitle.signup") }}</h2>
          <p>{{ $t("homepage.modtuleTitle.signupDesc") }}</p>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center justify-content-end">
          <b-form inline>
            <label class="sr-only" for="email">{{ $t("homepage.modtuleTitle.signupName") }}</label>
            <b-input v-model="email" type="email" class="mb-2 mr-sm-2 mb-sm-0" id="email" v-bind:placeholder="$t('homepage.modtuleTitle.signupEmail')" />
            <b-button variant="danger" @click="subscribe">{{ $t("homepage.modtuleTitle.signupButton") }}</b-button>
          </b-form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { subscribeEmail } from '~/plugins/get'
export default {
  name: 'newsletter',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    subscribe () {
      if (this.email === '') {
        this.$toast.error(this.$t('homepage.signup.blankError'), {duration: 2000, position: 'bottom-right'})
      } else {
        subscribeEmail(this.email, '')
          .then((res)=> {
            if (res.data.status == 1) {
              this.$toast.success(this.$t('homepage.signup.success'), {duration: 2000, position: 'bottom-right'})
            } else {
              this.$toast.error(this.$t('homepage.signup.duplicatedError'), {duration: 2000, position: 'bottom-right'})
            }
          })
      }
    }
  }
}
</script>
<style lang="scss">
.newsletter {
    background: #514444;
    padding: 20px;
    color: #fff;
    border-bottom: 4px solid #e4111d;
    p {
      margin-bottom: 0;
    }
}
</style>


