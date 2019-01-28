<template>
  <div class="">  
    <Galleries/>
  </div>
</template>

<script>
import Galleries from '~/components/Galleries'
export default {
  components: {Galleries},
  mounted () {
    console.log('lang/ex/gallery')
  },
  head () {
    return {
      title: 'Gallery',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
}
</script>


