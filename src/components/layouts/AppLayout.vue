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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
