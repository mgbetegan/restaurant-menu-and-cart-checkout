<template>
  <div class="bg-black" id="headerTop">
    <div class="container d-flex justify-content-between py-2">
      <img src="@/assets/logo-brand.png" height="75" width="75" alt="logo">

      <div class="d-flex align-items-center text-white">
        Mon panier

        <div class="position-relative d-flex pb-1 ms-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-bag m-auto" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>

          <span class="position-absolute top-50 start-50 translate-middle py-3 fs-6">
            {{ getCartTotalProductNumber}}

          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "HeaderTop",
  computed:{
    ...mapGetters({
      getCartTotalProductNumber: "cartModule/getCartTotalProductNumber",

    }),
  }
})
</script>


<style scoped>

</style>
