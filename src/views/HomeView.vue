<template>
  <!--<div id="home">
    Welcome to the home page
    <p>cart length = {{ getCartContent.length }}</p>
    <p>cart Amount = {{ getCartAmount }}</p>
    <ul>
      <li v-for="product in allProducts" :key="product.id">
        Titre : {{ product.nom }}
        Prix: {{ product.prix }}
        <p v-if="isAlreadyInCart(product) ">Qte dans le panier : {{ getSingleProductQteInCart(product.id) }}</p>
        <button @click="addProduct(product)" v-if="!isAlreadyInCart(product) "> Ajouter</button>
        <button @click="increaseProductQte({productId:product.id})" v-if="isAlreadyInCart(product) "> PLus</button>
        <button @click="decreaseProductQte({productId:product.id})" v-if="isAlreadyInCart(product) "> MOINs</button>
      </li>
    </ul>
  </div>-->

  <div>
    <div class="kitchen-banner">
      <div class="container py-5 d-flex flex-column text-start">
        <h1 class="fw-bold text-black fs-2 my-0">Bienvenue au restaurant</h1>
        <h2 class="fs-3 fw-bold opacity-75 my-0">Découvrez nos produits</h2>
      </div>

      <div class="container position-relative">
        <span class="about-restaurant position-absolute border rounded text-black"> A propos du restaurant </span>
      </div>
    </div>

    <div class="kitchen-body container py-5">
      <div v-for="(section, x) in cartes" :key="x" class="d-flex flex-column mb-5">
        <h1 class="text-start fs-3 fw-bold my-0">{{ section.title }}</h1>
        <p class="text-start">{{ section.subtitle }}</p>
        <div class="row">
          <div v-for="(food, y) in section.foods" :key="y" class="col-md-6 col-lg-4 col-xl-3 my-3">
            <div class="card h-100">
              <img :src="food.image" class="card-img-top" alt="...">
              <div class="card-body d-flex flex-column text-start">
                <h5 class="card-title fw-bold opacity-75">{{ food.nom }}</h5>
                <p class="card-text custom-text-truncate">{{ food.description }}</p>
                <div v-if="!isAlreadyInCart(food)" class="d-flex justify-content-between align-items-center mt-auto">
                  <p class="fw-bold my-0">{{ food.prix }} €</p>
                  <button class="btn btn-dark fw-bold px-4" @click="addProduct(food)" >Ajouter</button>
                </div>
                <div v-else class="ms-auto d-flex align-items-center" >
                  <button class="btn btn-dark me-2" @click="decreaseProductQte({productId:food.id})" >−</button>
                  <div class="btn btn-white">{{ getSingleProductQteInCart(food.id) }}</div>
                  <button class="btn btn-dark ms-2" @click="increaseProductQte({productId:food.id})">+</button>
                </div>
              </div>
            </div>
          </div>
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

export default Vue.extend({
  name: 'HomeView',
  components: {},
  data: () => {
    return {
      cartes: [] as ProductsMenu[] ,

    }
  },

  created() {
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
    loadImage(params:string){
      return require(params);
    }
  },

  computed: {
    ...mapGetters({
      getCartContent: "cartModule/getCartContent",
      getCartAmount: "cartModule/getCartAmount"
    }),

  }
});
</script>

<style scoped lang="scss">
.kitchen-banner {
  background-image: url("@/assets/bg-kitchen.jpg");
  background-position: top;
  background-size: cover;

  .about-restaurant {
    left: 1rem;
    top: -1.5rem;
    padding: .5rem 1rem;
    background-color: #fff;
  }
}

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
