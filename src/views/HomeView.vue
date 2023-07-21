<template>
    <div class="kitchen-body container py-5">
      <div v-for="(section, x) in cartes" :key="x" class="d-flex flex-column mb-5">
        <h1 class="text-start fs-3 fw-bold my-0">{{ section.title }}</h1>
        <p class="text-start">{{ section.subtitle }}</p>
        <div class="row">
          <div v-for="(food, y) in section.foods" :key="y" class="col-md-6 col-lg-4 col-xl-3 mt-3">
            <ProductItem :product="food" v-if="y < 4" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <router-link :to="{name: section.route}" class="btn btn-dark me-2"> Voir plus</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import productsOnCart from '@/utils/cart.json';
import {ProductsMenu} from "@/store/types/types.interface";
import ProductItem from "@/components/productComponents/ProductItem.vue";

export default Vue.extend({
  name: 'HomeView',
  components: {ProductItem},
  data: () => {
    return {
      cartes: [] as ProductsMenu[] ,

    }
  },

  mounted() {
    this.cartes = productsOnCart.carte
  },

});
</script>

<style scoped lang="scss">

</style>
