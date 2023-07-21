<template>
  <div>
    <header-component/>
    <banner-component/>

    <router-view></router-view>
    <footer-component/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import FooterComponent from "@/components/layoutComponents/FooterComponent.vue";
import HeaderComponent from "@/components/layoutComponents/HeaderComponent.vue";
import BannerComponent from "@/components/layoutComponents/BannerComponent.vue";

export default Vue.extend({
  name: 'DefaultLayout',
  components: {BannerComponent, HeaderComponent, FooterComponent},
  props: {
    msg: String,
  },

});
</script>

<style scoped lang="scss">
.kitchen-banner {
  background-image: url("@/assets/images/bg-kitchen.jpg");
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
