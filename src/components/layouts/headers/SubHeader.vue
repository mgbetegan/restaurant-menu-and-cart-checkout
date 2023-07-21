
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-md-0">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <router-link :to="{name: 'home'}" class="nav-link px-md-2 me-md-2" aria-current="page">Accueil</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bar
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Boissons</a></li>
              <li><a class="dropdown-item" href="#">Vins</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cuisine
            </a>
            <ul class="dropdown-menu">
              <li><router-link :to="{name: 'entrees'}" class="dropdown-item" >Entrees</router-link></li>
              <li><router-link :to="{name: 'plats'}" class="dropdown-item" >Plats</router-link></li>
              <li><router-link :to="{name: 'desserts'}" class="dropdown-item" >Desserts</router-link></li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SubHeader"
})
</script>



<style scoped>

</style>
