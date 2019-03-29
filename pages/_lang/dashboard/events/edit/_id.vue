<template>
  <div class="edit-event">
    <h2>{{ item && item.slug ? 'Update event' : 'Create event'}}</h2>
   
    <form action="" v-on:submit.prevent="saveData">
      <b-tabs content-class="mt-3">
        <b-tab title="Vietnamese" active>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" v-model="item.title_vi" placeholder="Event title in vietnamese">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <no-ssr>
                <editor v-model="item.desc_vi" :toolbar="toolbar" api-key="lxzv6h8kur0syil9hllrjlm94wtumcz3fy6ea2jc0inlsmnb" :init="{plugins: plugins}"></editor>
              </no-ssr>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" v-model="item.date_vi" placeholder="Date in vietnamese">
            </div>
          </div>
        </b-tab>
        <b-tab title="English">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" v-model="item.title_en" placeholder="Event title in english">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <no-ssr>
                <editor v-model="item.desc_en" :toolbar="toolbar" api-key="lxzv6h8kur0syil9hllrjlm94wtumcz3fy6ea2jc0inlsmnb" :init="{plugins: plugins}"></editor>
              </no-ssr>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" v-model="item.date_en" placeholder="Date in english">
            </div>
          </div>
        </b-tab>

        <b-tab title="Image">
          <!-- <no-ssr>
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" @vdropzone-success="vsuccess" @vdropzone-error="verror"></vue-dropzone>
          </no-ssr> -->
        </b-tab>
        
      </b-tabs>

      <button class="btn btn-success btn-block" @click.prevent="saveData">Save</button>
      

    </form>
  </div>
</template>
<script>
// import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import Editor from '@tinymce/tinymce-vue';
export default {
  async asyncData ({ store, query }) {
    await store.dispatch('event/getEventDetail', { limit: limit, locale: store.state.locale })
  },
  components: {
    'editor': Editor, // <- Important part
    // vueDropzone: vue2Dropzone
  },
  data () {
    return {
      //_id: 0,
      item: {
        //_id: 0,
        state: 1,
        title_vi: '',
        title_en: '',
        desc_vi: '',
        desc_en: '',
        date_vi: '',
        date_en: '',
        thumbnail: '',
        slug: ''
      },
      plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
      dropzoneOptions: {
        url: '/api/events/upload',
        thumbnailWidth: 150,
        maxFilesize: 5,
        headers: { "My-Awesome-Header": "header value" }
      }
    }
  },
  layout: 'dashboard',
  async asyncData({ store, params }) {
    await store.dispatch('event/getEventDetail', { slug: params.id})
  },
  mounted () {
    // this.item = this.$store.state.event.eventDetail
    this.getItem()
  },
  methods: {
    async getItem () {
      let result = await this.$axios.get('/api/events/'+this.$route.params.id)
      if (result.data.item) {
        this.item = result.data.item
      }
      
    },
    vsuccess(file, response) {
      console.log(response)
      this.item.thumbnail = '/img/events/'+response.filename

    },
    verror(file) {
      console.log(file)
      // window.toastr.error(file.upload.filename, 'Event : vdropzone-error - ' + file.status)
    },
    saveData () {
      if (this.$route.params.id != 0) {
        console.log('update item')
        this.$axios.put('/api/events/'+this.item._id, this.item)
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
      } else {
        console.log('insert item')
        this.$axios.post('/api/events', this.item)
        .then(res => {
          console.log(res)
          this.$router.push({name: 'lang-dashboard-events-edit-id', params: { id: res.data }})
        })
        .catch(err => console.log(err.response))
      }
      
    }
  }
}
</script>
