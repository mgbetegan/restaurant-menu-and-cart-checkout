<template>
  <div class="bg-black" id="headerTop">
    <div class="container d-flex justify-content-between py-2">
      <img src="../../assets/logo-brand.png" height="75" width="75" alt="logo">
      <button class="btn d-flex align-items-center text-white cursor-pointer" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
        Mon panier
        <span class="position-relative d-flex pb-1 ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-bag m-auto"
                 viewBox="0 0 16 16">
              <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>

            <span class="position-absolute top-50 start-50 translate-middle py-3 fs-6">
            {{ getCartTotalProductNumber }}
          </span>
          </span>
      </button>
    </div>

    <!-- Cart modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center" v-if="!isCheckout && getCartTotalProductNumber == 0">
              <div class="col-md-12 d-flex justify-content-center">
                <h4>Votre panier est vide!</h4>
              </div>
            </div>
            <div class="row justify-content-center" v-if="isCheckout">
              <div class="col-md-12 d-flex justify-content-center">
                <h4>Merci pour votre commande!</h4>
              </div>
            </div>
            <div class="row justify-content-center" v-if="!isCheckout && getCartTotalProductNumber > 0">
              <div class="col-md-12 cart">
                <div class="title">
                  <div class="row">
                    <div class="col"><h4><b>Votre panier</b></h4></div>
                    <div class="col align-self-center text-right text-muted">Nb produits : {{
                        getCartTotalProductNumber
                      }}
                    </div>
                  </div>
                </div>
                <div class="row border-top border-bottom" v-for="(product,x) in getCartContent" :key="x">
                  <div class="row align-items-center">
                    <div class="col-2"><img class="img-fluid cart-img py-2" :src="loadImage(product.image)"></div>
                    <div class="col">
                      <div class="row text-muted">{{ product.nom }}</div>
                    </div>
                    <div class="col">
                      <a class="btn btn-sm btn-dark" href="javascript:void(0)"
                         @click="decreaseProductQte({productName:product.nom})">-</a>
                      <a class="btn btn-sm btn-white" href="javascript:void(0)">{{ product.qte }}</a>

                      <a class="btn btn-sm btn-dark" href="javascript:void(0)"
                         @click="increaseProductQte({productName:product.nom})">+</a>
                    </div>
                    <div class="col">
                      <span class="close"> PU : {{ product.prix }} &euro;</span>
                    </div>
                    <div class="col">
                      {{ product.prix * product.qte }} &euro;
                      <span class="close" @click="removeProductFromCart({productName:product.nom})">&#10005;</span>
                    </div>
                  </div>
                </div>
                <div class="text-end me-5 mt-4 "><h4>Total : {{ getCartAmount }} €</h4></div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="button" class="btn btn-dark" @click="isCheckout = !isCheckout; clearCart();" v-if="!isCheckout && getCartTotalProductNumber > 0">
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /modal -->
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  name: "HeaderComponent",
  data: () => {
    return {
      isCheckout: false,
    }
  },
  methods: {
    ...mapActions({
      initializeCart: "cartModule/initializeCart",
      addProductToCart: "cartModule/addProductCart",
      increaseProductQte: "cartModule/increaseProductQteInCart",
      decreaseProductQte: "cartModule/decreaseProductQteInCart",
      removeProductFromCart: "cartModule/removeProductFromCart",
      clearCart: "cartModule/clearCart"
    }),
  },
  computed: {
    ...mapGetters({
      getCartTotalProductNumber: "cartModule/getCartTotalProductNumber",
      getCartContent: "cartModule/getCartContent",
      getCartAmount: "cartModule/getCartAmount"
    }),

    loadImage() {
      return (imagePath: string) => {
        return require(`@/assets/images/products/${imagePath}`);
      }

    }
  }
})
</script>


<style scoped lang="scss">
.cart-img {
  height: 60px;
  width: 90px
}
</style>
