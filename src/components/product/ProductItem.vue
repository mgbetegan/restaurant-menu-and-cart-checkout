<template>
 <div id="productItem">
   This is a product
 </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ProductItem",
  props: {
    product:{
      type: Object,
      required: true,
    }
  }

})
</script>



<style scoped>

</style>
