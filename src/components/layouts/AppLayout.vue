<template>
  <div>
    <header-top/>
    <sub-header/>
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

<style scoped>

</style>
