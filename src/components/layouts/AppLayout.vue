<template>
  <div>
    <header-top/>
    <sub-header/>
    <div class="kitchen-banner">
      <div class="container py-5 d-flex flex-column text-start">
        <h1 class="fw-bold text-black fs-2 my-0">Bienvenue au restaurant</h1>
        <h2 class="fs-3 fw-bold opacity-75 my-0">Découvrez nos produits</h2>
      </div>

      <div class="container position-relative">
        <span class="about-restaurant position-absolute border rounded text-black"> A propos du restaurant </span>
      </div>
    </div>
    <router-view></router-view>
    <footer-component/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderTop from "@/components/layouts/headers/HeaderTop.vue";
import SubHeader from "@/components/layouts/headers/SubHeader.vue";
import FooterComponent from "@/components/layouts/footer/FooterComponent.vue";

export default Vue.extend({
  name: 'AppLayout',
  components: {FooterComponent, SubHeader, HeaderTop},
  props: {
    msg: String,
  },

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
</style>
