<template>
    <div class="card h-100" >
      <img :src="loadImage(product.image)" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column text-start">
        <h5 class="card-title fw-bold opacity-75">{{ product.nom }}</h5>
        <p class="card-text custom-text-truncate">{{ product.description }}</p>
        <div v-if="!isAlreadyInCart(product)" class="d-flex justify-content-between align-items-center mt-auto">
          <p class="fw-bold my-0">{{ product.prix }} €</p>
          <button class="btn btn-dark fw-bold px-4" @click="addProduct(product)">Ajouter</button>
        </div>
        <div v-else class="d-flex justify-content-between ">
          <p class="fw-bold mt-2 text-start">{{ product.prix }} €</p>
          <div>
            <button class="btn btn-dark me-1" @click="decreaseProductQte({productName:product.nom})">−</button>
            <div class="btn btn-white">{{ getSingleProductQteInCart(product.nom) }}</div>
            <button class="btn btn-dark ms-1" @click="increaseProductQte({productName:product.nom})">+</button>

          </div>
          </div>
      </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {mapActions, mapGetters} from "vuex";
import {Product} from "@/store/types/types.interface";

export default defineComponent({
  name: "ProductItem",
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    }
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
      const targetProduct = this.getCartContent.find((val: Product) => val.nom === product.nom)
      if (targetProduct) {
        return true;
      } else {
        return false;
      }
    },

    getSingleProductQteInCart(name: string): number {
      const val: number = this.getCartContent?.find((el: Product) => el.nom === name)?.qte
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
        return require(`@/assets/images/products/${imagePath}`);
      }

    }
  }

})
</script>


<style scoped lang="scss">
.custom-text-truncate {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limite le nombre de lignes à 2 */
  -webkit-box-orient: vertical;
}

.card-img-top {
  height: 220px;
}


</style>
