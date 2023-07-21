<template>
  <div class="kitchen-body container py-5">
    <div  class="d-flex flex-column mb-5">
      <h1 class="text-start fs-3 fw-bold my-0">{{ targetMenu?.title }}</h1>
      <p class="text-start">{{ targetMenu?.subtitle }}</p>
      <div class="row">
        <div v-for="(food, y) in targetMenu?.foods" :key="y" class="col-md-6 col-lg-4 col-xl-3 mt-3">
          <ProductItem :product="food" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import  {defineComponent} from 'vue'
import ProductItem from "@/components/productComponents/ProductItem.vue";
import {ProductsMenu} from "@/store/types/types.interface";
import productsOnCart from "@/utils/cart.json";

export default defineComponent({
  name: "DessertsView",
  components: {ProductItem},
  data: () => {
    return {
      targetMenu:  null as ProductsMenu | null,
    }
  },
  mounted() {
    this.targetMenu = (productsOnCart.carte).find(el=> el.title ==="Les desserts") || null
  },
})
</script>



<style scoped>

</style>
