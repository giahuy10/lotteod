<template>
  <div class="">  
    <FeaturedFacilities/>
  </div>
</template>

<script>
import FeaturedFacilities from '~/components/FeaturedFacilities'
export default {
  components: {FeaturedFacilities},
  head () {
    return {
      title: 'GFac',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
}
</script>
