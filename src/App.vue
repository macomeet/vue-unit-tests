<template>
  <div id="app">
    <div class="logo"></div>
    <div class="nav">
      <router-link class="nav__link" to="/">Start</router-link> |
      <router-link class="nav__link" to="/1">1</router-link> |
      <router-link class="nav__link" to="/2">2</router-link> |
      <router-link class="nav__link" to="/3">3</router-link> |
      <router-link class="nav__link" to="/4">4</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 30px;
  &__link {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
