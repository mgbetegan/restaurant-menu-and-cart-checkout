<template>
  <div id="home">
    Welcome to the home page
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import {mapActions, mapGetters} from "vuex";

export default Vue.extend({
  name: 'HomeView',
  components: {

  },
  /*mounted(){
    this.initializeCart({data:["hello"]});

    console.log(this.getCartContent);
  },

  methods:{
    ...mapActions({
      initializeCart: "cartModule/initializeCart",
    }),
  },

  computed:{
    ...mapGetters({
      getCartContent: "cartModule/getCartContent",
    }),

  }*/
});
</script>
