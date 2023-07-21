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
            <a class="btn btn-dark me-2"> Voir plus</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters} from "vuex";
import productsOnCart from '@/utils/cart.json';
import {Product, ProductsMenu} from "@/store/types/types.interface";
import ProductItem from "@/components/product/ProductItem.vue";

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
  methods: {
    ...mapActions({
      initializeCart: "cartModule/initializeCart",
      addProductToCart: "cartModule/addProductCart",
      increaseProductQte: "cartModule/increaseProductQteInCart",
      decreaseProductQte: "cartModule/decreaseProductQteInCart",
      removeProductFromCart: "cartModule/removeProductFromCart"
    }),

    addProduct(product: Product) {

      this.addProductToCart({product: product})

    },

    isAlreadyInCart(product: Product): boolean {
      const targetProduct = this.getCartContent.find((val: Product) => val.id === product.id)
      if (targetProduct) {
        return true;
      } else {
        return false;
      }
    },

    getSingleProductQteInCart(id: number): number {
      const val: number = this.getCartContent?.find((el: Product) => el.id === id)?.qte
      if (val) {
        return val
      } else {
        return 0;
      }
    },



  },

  computed: {
    ...mapGetters({
      getCartContent: "cartModule/getCartContent",
      getCartAmount: "cartModule/getCartAmount"
    }),

    loadImage(){
      return (imagePath: string) => {
        console.log(typeof imagePath)
        return require(`@/assets/images/products/${imagePath}`);
      }

    }
  }
});
</script>

<style scoped lang="scss">

</style>
