<template>
  <router-view></router-view>
</template>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      border-bottom: black 3px solid;
    }
  }
}
</style>

